// src/pages/Presale.js
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Layout,
  Button,
  Card,
  Modal,
  Typography,
  message,
  Select,
} from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { QRCodeCanvas } from "qrcode.react";
import { ethers } from "ethers";
import {
  BSC_CHAIN_ID_HEX,
  SALE_CONTRACT_ADDRESS,
  USDT_CONTRACT_ADDRESS,
  DEFAULT_REFERRER,
  DKB_DECIMALS,
  saleAbi,
  erc20Abi,
  getInjectedProvider,
} from "../web3/config";
import "./Presale.css";
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import { useI18n } from '../i18n/I18nProvider';
import heroVideo from '../mp4/presale-hero.mp4';

const { Content } = Layout;
const { Title, Text } = Typography;

function Presale() {
  const { t } = useI18n();
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState("");

  const [packages, setPackages] = useState([]); // [{ usdtRaw, usdt, dkbRaw, dkb }]
  const [selectedPackageIndex, setSelectedPackageIndex] = useState(null);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [bindingModalOpen, setBindingModalOpen] = useState(false);
  const [bindingLoading, setBindingLoading] = useState(false);
  const [referrerAddress, setReferrerAddress] = useState(null);
  const [isReferrerBound, setIsReferrerBound] = useState(false);
  const [isBindingReferrer, setIsBindingReferrer] = useState(false);
  const [requiresApproval, setRequiresApproval] = useState(true);
  const [allowanceChecking, setAllowanceChecking] = useState(false);
  const [approvalLoading, setApprovalLoading] = useState(false);
  const [purchaseLoading, setPurchaseLoading] = useState(false);
  const [pendingTxHash, setPendingTxHash] = useState(null);
  const [usdtBalance, setUsdtBalance] = useState(null);
  const [usdtDecimals, setUsdtDecimals] = useState(18);
  const [timeOffset, setTimeOffset] = useState(0);
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    mode: "waiting",
  });
  const userInfoErrorShownRef = useRef(false);

  const [inviteCode, setInviteCode] = useState("");
  const [inviteModalOpen, setInviteModalOpen] = useState(false);

  const [presaleStatus, setPresaleStatus] = useState({
    active: false,
    startTime: 0,
    endTime: 0,
    currentTime: 0,
  });
  const [userInfo, setUserInfo] = useState(null);
  const [referralPreview, setReferralPreview] = useState(null);
  const selectedPackage = useMemo(() => {
    if (selectedPackageIndex === null) return null;
    return packages[selectedPackageIndex] || null;
  }, [packages, selectedPackageIndex]);

  const preferredPackageIndexes = useMemo(() => {
    if (!packages.length) return [];
    const targets = [100, 200];
    const indexes = targets
      .map((target) =>
        packages.findIndex((pkg) => Math.abs(pkg.usdt - target) < 0.0001)
      )
      .filter((idx) => idx >= 0);
    if (indexes.length) {
      return indexes;
    }
    return packages.map((_, idx) => idx);
  }, [packages]);

  useEffect(() => {
    if (!preferredPackageIndexes.length) {
      setSelectedPackageIndex(null);
      return;
    }
    if (
      selectedPackageIndex === null ||
      !preferredPackageIndexes.includes(selectedPackageIndex)
    ) {
      setSelectedPackageIndex(preferredPackageIndexes[0]);
    }
  }, [preferredPackageIndexes, selectedPackageIndex]);
  const targetReferrer = useMemo(() => {
    if (referrerAddress && account) {
      const normalizedRef = referrerAddress.toLowerCase();
      const normalizedSelf = account.toLowerCase();
      if (normalizedRef !== normalizedSelf) {
        return referrerAddress;
      }
    } else if (referrerAddress && !account) {
      return referrerAddress;
    }
    return DEFAULT_REFERRER;
  }, [referrerAddress, account]);

  const translateDynamicMessage = useCallback((raw) => {
    if (typeof raw !== "string") return raw;
    const trimmed = raw.trim();
    if (!trimmed) return trimmed;
    const sanitized = trimmed
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "_")
      .replace(/^_+|_+$/g, "");
    if (!sanitized) {
      return trimmed;
    }
    const key = `presale.dynamicErrors.${sanitized}`;
    const translated = t(key);
    if (translated && translated !== key) {
      return translated;
    }
    return trimmed;
  }, [t]);

  const getReadableError = useCallback(
    (error, fallback) => {
      if (!error) return fallback;
      const candidates = [
        error?.data?.message,
        error?.error?.message,
        error?.reason,
        error?.message,
      ];
      for (const candidate of candidates) {
        if (typeof candidate === "string" && candidate.trim()) {
          const match = candidate.match(/execution reverted:?(.+)?/i);
          if (match && match[1]) {
            return translateDynamicMessage(match[1].trim() || fallback);
          }
          return translateDynamicMessage(candidate);
        }
      }
      return translateDynamicMessage(fallback);
    },
    [translateDynamicMessage, t]
  );

  const parseReferrerFromUrl = useCallback(() => {
    const normalizeAddress = (value) => {
      if (!value) return null;
      try {
        return ethers.utils.getAddress(value.trim());
      } catch (err) {
        return null;
      }
    };

    const extractFromParams = (params) => {
      if (!params) return null;
      const keys = ["ref", "referrer", "inviter", "invite", "address"];
      for (const key of keys) {
        const value = params.get(key);
        const normalized = normalizeAddress(value);
        if (normalized) {
          return normalized;
        }
      }
      return null;
    };

    try {
      const url = new URL(window.location.href);
      const fromSearch = extractFromParams(url.searchParams);
      if (fromSearch) {
        return fromSearch;
      }
      const hash = url.hash || "";
      const queryIndex = hash.indexOf("?");
      if (queryIndex >= 0) {
        const hashQuery = hash.substring(queryIndex + 1);
        const hashParams = new URLSearchParams(hashQuery);
        const fromHash = extractFromParams(hashParams);
        if (fromHash) {
          return fromHash;
        }
      }
    } catch (err) {
      console.error("parseReferrerFromUrl error:", err);
    }
    return null;
  }, []);

  useEffect(() => {
    const ref = parseReferrerFromUrl();
    if (ref) {
      setReferrerAddress(ref);
    }
  }, [parseReferrerFromUrl]);

  const readUserInfo = useCallback(async () => {
    if (!provider || !account) return null;
    try {
      const signer = provider.getSigner();
      const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
      const info = await sale.getUserInfo(account);
      const parsed = {
        totalPurchased: info[0],
        totalReceived: info[1],
        totalReferralReward: info[2],
        referrer: info[3],
        referralCount: info[4],
        hasReferrer: info[5],
      };
      setUserInfo(parsed);
      setIsReferrerBound(parsed.hasReferrer);
      return parsed;
    } catch (error) {
      console.error("readUserInfo error:", error);
      if (!userInfoErrorShownRef.current) {
        message.error(t("presale.messages.userInfoError"));
        userInfoErrorShownRef.current = true;
      }
      setUserInfo({
        totalPurchased: ethers.BigNumber.from(0),
        totalReceived: ethers.BigNumber.from(0),
        totalReferralReward: ethers.BigNumber.from(0),
        referrer: ethers.constants.AddressZero,
        referralCount: 0,
        hasReferrer: false,
      });
      setIsReferrerBound(false);
      return null;
    }
  }, [provider, account, t]);

  const lastTxHashRef = useRef(null);
  const monitorTransaction = useCallback(
    async (providerInstance, hash, onStatusChange) => {
      if (!providerInstance || !hash) return;
      lastTxHashRef.current = hash;
      setPendingTxHash(hash);
      const poll = async () => {
        if (lastTxHashRef.current !== hash) {
          return;
        }
        try {
          const receipt = await providerInstance.getTransactionReceipt(hash);
          console.log("monitorTransaction receipt:", receipt);
          if (receipt) {
            const status =
              receipt.status === 1
                ? "success"
                : receipt.status === 0
                ? "failed"
                : "unknown";
            onStatusChange?.(status, receipt);
            if (
              lastTxHashRef.current === hash &&
              (status === "success" || status === "failed")
            ) {
              setPendingTxHash(null);
            }
            return;
          }
        } catch (err) {
          console.error("monitorTransaction poll error:", err);
          const readable =
            getReadableError(err, t("presale.messages.networkError")) ||
            t("presale.messages.networkError");
          message.error(readable);
          onStatusChange?.("unknown", null);
          setPendingTxHash(null);
          return;
        }
        setTimeout(poll, 5000);
      };
      poll();
    },
    []
  );

  const bindReferrer = useCallback(async () => {
    if (!provider || !account) return false;
    const candidateRaw = targetReferrer;
    const candidate =
      typeof candidateRaw === "string" ? candidateRaw.trim() : candidateRaw;
    console.log("bindReferrer candidate:", candidate);
    if (!candidate) {
      message.error(t("presale.messages.referrerInvalid"));
      return false;
    }
    let normalized = null;
  console.log("bindReferrer tx:",candidate);

      normalized = ethers.utils.getAddress(candidate);
       console.log("bindReferrer tx:",normalized);
   
       console.log("bindReferrer tx:");
    if (normalized.toLowerCase() === account.toLowerCase()) {
      message.error(t("presale.messages.referrerSelf"));
      return false;
    }
      console.log("bindReferrer tx:");
    let hideMessage;
    try {
      setIsBindingReferrer(true);
      const signer = provider.getSigner();
      const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
      hideMessage = message.loading(
        t("presale.messages.bindPending", { address: normalized }),
        0
      );
       console.log("bindReferrer tx:");
      const overrides = { gasPrice: ethers.utils.parseUnits("0.1", "gwei") };
      const tx = await sale.setReferrer(normalized, overrides);
      console.log("bindReferrer tx:", tx);
      setPendingTxHash(tx.hash);
      message.info(
        t("presale.messages.txPending", { hash: tx.hash }),
        4
      );
      await monitorTransaction(provider, tx.hash, async (status, receipt) => {
        if (status === "success") {
          message.success(
            t("presale.messages.bindSuccessDynamic", { address: normalized })
          );
          setIsReferrerBound(true);
          await checkReferrer(false);
        } else if (status === "failed") {
          setBindingModalOpen(false);
          const reason =
            getReadableError(
              receipt || new Error("bind failed"),
              t("presale.messages.bindError")
            ) || t("presale.messages.bindError");
          message.error(
            t("presale.messages.bindErrorDetail", { reason }),
            4
          );
          setBindingModalOpen(false);
        } else if (status === "dropped") {
          message.warning(t("presale.messages.txDropped"));
          setBindingModalOpen(false);
        }
      });
      if (typeof hideMessage === "function") {
        hideMessage();
      }
      setIsBindingReferrer(false);
      userInfoErrorShownRef.current = false;
      return true;
    } catch (error) {
      console.error("bindReferrer error:", error);
      const displayMessage =
        getReadableError(error, t("presale.messages.bindError")) ||
        t("presale.messages.bindError");
      setBindingModalOpen(false);
      message.error(
        t("presale.messages.bindErrorDetail", { reason: displayMessage }),
        4
      );
      setBindingModalOpen(false);
      if (typeof hideMessage === "function") {
        hideMessage();
      }
      setIsBindingReferrer(false);
      setPendingTxHash(null);
      return false;
    }
  }, [provider, account, targetReferrer, t, getReadableError]);

  const checkReferrer = useCallback(
    async (showModal = false) => {
      if (!provider || !account) return null;
      const info = await readUserInfo();
      if (!info) return null;
      if (info.hasReferrer) {
        setBindingModalOpen(false);
      } else if (showModal) {
        setBindingModalOpen(true);
      }
      return info;
    },
    [provider, account, readUserInfo]
  );

  const handleBindReferrer = useCallback(async () => {
    if (!provider || !account) return;
    try {
      setBindingLoading(true);
      const success = await bindReferrer();
      if (success) {
        setBindingModalOpen(false);
        await checkReferrer(false);
      }
    } finally {
      setBindingLoading(false);
    }
  }, [provider, account, bindReferrer, checkReferrer]);

  const loadPackageInfo = useCallback(async () => {
    if (!provider || !account) return;
    try {
      const signer = provider.getSigner();
      const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
      const usdt = new ethers.Contract(USDT_CONTRACT_ADDRESS, erc20Abi, signer);

      const [usdtPrice1, dkbAmount1, usdtPrice2, dkbAmount2] =
        await sale.getFixedPackages();

      const usdtDecimals = await usdt.decimals();
      setUsdtDecimals(usdtDecimals);

      const isValidBigNumber = (bn) =>
        ethers.BigNumber.isBigNumber(bn) && !bn.isZero();

      const rawPackages = [
        {
          key: 0,
          usdtRaw: usdtPrice1,
          dkbRaw: dkbAmount1,
          usdt: Number(ethers.utils.formatUnits(usdtPrice1, usdtDecimals)),
          dkb: Number(ethers.utils.formatUnits(dkbAmount1, DKB_DECIMALS)),
        },
        {
          key: 1,
          usdtRaw: usdtPrice2,
          dkbRaw: dkbAmount2,
          usdt: Number(ethers.utils.formatUnits(usdtPrice2, usdtDecimals)),
          dkb: Number(ethers.utils.formatUnits(dkbAmount2, DKB_DECIMALS)),
        },
      ].filter(
        (pkg) =>
          isValidBigNumber(pkg.usdtRaw) && isValidBigNumber(pkg.dkbRaw)
      );

      setPackages(rawPackages);
      if (rawPackages.length > 0) {
        setSelectedPackageIndex((prev) =>
          prev !== null && rawPackages[prev] ? prev : rawPackages[0].key ?? 0
        );
      } else {
        setSelectedPackageIndex(null);
      }
    } catch (error) {
      console.error("loadPackageInfo error:", error);
      message.error(t("presale.messages.packageError"));
      setPackages([]);
      setSelectedPackageIndex(null);
    }
  }, [provider, account, t]);

  const loadPresaleStatus = useCallback(async () => {
    if (!provider || !account) return;
    try {
      const signer = provider.getSigner();
      const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
      const [active, startTime, endTime, currentTime] =
        await sale.getPresaleStatus();
      setPresaleStatus({
        active,
        startTime: startTime.toNumber(),
        endTime: endTime.toNumber(),
        currentTime: currentTime.toNumber(),
      });
      if (currentTime && currentTime.toNumber) {
        const now = Math.floor(Date.now() / 1000);
        setTimeOffset(currentTime.toNumber() - now);
      } else if (typeof currentTime === "number" && currentTime > 0) {
        const now = Math.floor(Date.now() / 1000);
        setTimeOffset(currentTime - now);
      }
    } catch (error) {
      console.error("loadPresaleStatus error:", error);
    }
  }, [provider, account]);

  const loadPurchased = useCallback(async () => {
    if (!provider || !account) return;
    try {
      const signer = provider.getSigner();
      const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
      const participated = await sale.hasParticipated(account);
      setHasPurchased(participated);
    } catch (error) {
      console.error("loadPurchased error:", error);
    }
  }, [provider, account]);

  const loadUsdtBalance = useCallback(async () => {
    if (!provider || !account) return;
    try {
      const signer = provider.getSigner();
      const usdt = new ethers.Contract(USDT_CONTRACT_ADDRESS, erc20Abi, signer);
      const [decimals, balance] = await Promise.all([
        usdt.decimals(),
        usdt.balanceOf(account),
      ]);
      setUsdtDecimals(decimals);
      setUsdtBalance(balance);
    } catch (error) {
      console.error("loadUsdtBalance error:", error);
    }
  }, [provider, account]);

  const checkAllowance = useCallback(async () => {
    if (!provider || !account || !selectedPackage) return;
    try {
      setAllowanceChecking(true);
      const signer = provider.getSigner();
      const usdt = new ethers.Contract(USDT_CONTRACT_ADDRESS, erc20Abi, signer);
      const allowance = await usdt.allowance(account, SALE_CONTRACT_ADDRESS);
      setRequiresApproval(allowance.lt(selectedPackage.usdtRaw));
    } catch (error) {
      console.error("checkAllowance error:", error);
    } finally {
      setAllowanceChecking(false);
    }
  }, [provider, account, selectedPackage]);

  // ============== 连接钱包 & 切 BSC ==============
  const handleConnect = async () => {
    try {
      const pvd = getInjectedProvider();

      // 1. 请求钱包地址
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (!accounts || !accounts.length) {
        throw new Error(t('presale.messages.walletError'));
      }
      const addr = ethers.utils.getAddress(accounts[0]);

      // 2. 检查链
      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      if (chainId !== BSC_CHAIN_ID_HEX) {
        try {
          // 尝试直接切换到 BSC
          await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: BSC_CHAIN_ID_HEX }],
          });
        } catch (err) {
          // 如果钱包里没有 BSC，就添加一条
          if (err.code === 4902) {
            await window.ethereum.request({
              method: "wallet_addEthereumChain",
              params: [
                {
                  chainId: BSC_CHAIN_ID_HEX,
                  chainName: "BNB Smart Chain",
                  nativeCurrency: {
                    name: "BNB",
                    symbol: "BNB",
                    decimals: 18,
                  },
                  rpcUrls: ["https://bsc-dataseed.binance.org/"],
                  blockExplorerUrls: ["https://bscscan.com"],
                },
              ],
            });
          } else {
            throw err;
          }
        }
      }

      setProvider(pvd);
      setAccount(addr);
      setInviteCode(addr.slice(-5).toUpperCase());
      userInfoErrorShownRef.current = false;
      message.success(t('presale.messages.walletSuccess'));
    } catch (e) {
      console.error(e);
      message.error(e.message || t('presale.messages.walletError'));
    }
  };


  // ============== 授权 + 购买一体化逻辑 ==============
  const handlePrimaryAction = useCallback(async () => {
    if (!provider || !account || !selectedPackage) return;
    if (hasPurchased) return;

    setPendingTxHash(null);
    try {
      setPurchaseLoading(true);

      const signer = provider.getSigner();
      const usdt = new ethers.Contract(USDT_CONTRACT_ADDRESS, erc20Abi, signer);
      const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
      const amount = selectedPackage.usdtRaw;

      if (!presaleStatus.active) {
        message.warning(t("presale.messages.presaleInactive"));
        setPurchaseLoading(false);
        return;
      }

      if (!isReferrerBound) {
        const info = await checkReferrer(true);
        if (!info || !info.hasReferrer) {
        message.warning(t("presale.messages.referrerRequired"));
          setPurchaseLoading(false);
          return;
        }
      }
      let allowance = await usdt.allowance(account, SALE_CONTRACT_ADDRESS);
      setRequiresApproval(allowance.lt(amount));
      if (allowance.lt(amount)) {
        setApprovalLoading(true);
        message.info(t("presale.messages.needApproval"));
        const overrides = { gasPrice: ethers.utils.parseUnits("0.1", "gwei") };
        const approveTx = await usdt.approve(
          SALE_CONTRACT_ADDRESS,
          amount,
          overrides
        );
        setPendingTxHash(approveTx.hash);
        await monitorTransaction(
          provider,
          approveTx.hash,
          (status, receipt) => {
            if (status === "success") {
              message.success(t("presale.messages.approvalSuccess"));
            } else if (status === "failed") {
              const msg =
                getReadableError(receipt, t("presale.messages.approvalError")) ||
                t("presale.messages.approvalError");
              message.error(msg);
            } else if (status === "dropped") {
              message.warning(t("presale.messages.txDropped"));
            }
          }
        );
        setApprovalLoading(false);
        allowance = await usdt.allowance(account, SALE_CONTRACT_ADDRESS);
        setRequiresApproval(allowance.lt(amount));
        if (allowance.lt(amount)) {
          message.error(t("presale.messages.approvalError"));
          setPurchaseLoading(false);
          return;
        }
      }

      const balance = await usdt.balanceOf(account);
      setUsdtBalance(balance);
      if (balance.lt(amount)) {
        message.error(t("presale.messages.insufficient"));
        setPurchaseLoading(false);
        return;
      }

      const overrides = { gasPrice: ethers.utils.parseUnits("0.1", "gwei") };
      const tx = await sale.buyTokens(amount, overrides);
      setPendingTxHash(tx.hash);
      message.info(t("presale.messages.txPending", { hash: tx.hash }), 4);
      await monitorTransaction(provider, tx.hash, (status, receipt) => {
        if (status === "success") {
          message.success(t("presale.messages.purchaseSuccess"));
        } else if (status === "failed") {
          const msg =
            getReadableError(receipt, t("presale.messages.purchaseError")) ||
            t("presale.messages.purchaseError");
          message.error(msg);
        } else if (status === "dropped") {
          message.warning(t("presale.messages.txDropped"));
        }
      });
      await loadPurchased();
      await loadPresaleStatus();
      await loadUsdtBalance();
      await readUserInfo();
      await checkAllowance();
    } catch (error) {
      console.error("handlePrimaryAction error:", error);
      if (error?.code === 4001) {
        message.warning(t("presale.messages.userRejected"));
      } else {
        const displayMessage = getReadableError(error, t("presale.messages.purchaseError"));
        message.error(displayMessage);
      }
      setPendingTxHash(null);
    } finally {
      setApprovalLoading(false);
      setPurchaseLoading(false);
    }
  }, [
    provider,
    account,
    selectedPackage,
    hasPurchased,
    presaleStatus.active,
    isReferrerBound,
    checkReferrer,
    loadPurchased,
    loadPresaleStatus,
    loadUsdtBalance,
    checkAllowance,
    readUserInfo,
    t,
    getReadableError,
  ]);

  // ============== 邀请链接相关（页面中部二维码 + Copy 按钮） ==============
  const inviteUrl = useMemo(() => {
    const base = `${window.location.origin}${window.location.pathname}#/presale`;
    if (!account) return base;
    return `${base}?ref=${account}`;
  }, [account]);

  const copyInviteUrl = () => {
    if (!hasPurchased) return;
    setInviteModalOpen(true);
  };

  const handleCopyUrl = () => {
    navigator.clipboard
      .writeText(inviteUrl)
      .then(() => message.success(t('presale.messages.copySuccess')))
      .catch(() => message.error(t('presale.messages.copyError')));
  };

  const handleCopyInviteCode = () => {
    navigator.clipboard
      .writeText(inviteCode)
      .then(() => message.success(t('presale.messages.copyCodeSuccess')))
      .catch(() => message.error(t('presale.messages.copyError')));
  };

  // ============== 监听账户/链变化 ==============
  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) return;

    const onAccountsChanged = (accs) => {
      if (!accs || !accs.length) {
        setAccount("");
        setPackages([]);
        setSelectedPackageIndex(null);
        setHasPurchased(false);
        userInfoErrorShownRef.current = false;
        return;
      }
      const addr = ethers.utils.getAddress(accs[0]);
      setAccount(addr);
      setInviteCode(addr.slice(-5).toUpperCase());
      userInfoErrorShownRef.current = false;
    };

    const onChainChanged = (chainId) => {
      if (chainId !== BSC_CHAIN_ID_HEX) {
        message.warning(t('presale.messages.switchChain'));
      }
    };

    ethereum.on("accountsChanged", onAccountsChanged);
    ethereum.on("chainChanged", onChainChanged);

    return () => {
      ethereum.removeListener("accountsChanged", onAccountsChanged);
      ethereum.removeListener("chainChanged", onChainChanged);
    };
  }, []);

  // 连接成功后：检查上级 + 获取套餐 + 是否已购买
  useEffect(() => {
    if (!provider || !account) return;
    (async () => {
      await checkReferrer(true);
      await loadPackageInfo();
      await loadPurchased();
      await loadPresaleStatus();
      await loadUsdtBalance();
    })();
  }, [
    provider,
    account,
    checkReferrer,
    loadPackageInfo,
    loadPurchased,
    loadPresaleStatus,
    loadUsdtBalance,
  ]);

  useEffect(() => {
    if (!hasPurchased && inviteModalOpen) {
      setInviteModalOpen(false);
    }
  }, [hasPurchased, inviteModalOpen]);

  useEffect(() => {
    if (!account || !provider) return;
    if (!selectedPackage) {
      setRequiresApproval(true);
      return;
    }
    checkAllowance();
    loadUsdtBalance();
  }, [provider, account, selectedPackage, checkAllowance, loadUsdtBalance]);

  useEffect(() => {
    if (!presaleStatus.currentTime) return;
    const numericCurrent =
      typeof presaleStatus.currentTime === "number"
        ? presaleStatus.currentTime
        : Number(presaleStatus.currentTime);
    if (!Number.isFinite(numericCurrent)) return;
    const now = Math.floor(Date.now() / 1000);
    setTimeOffset(numericCurrent - now);
  }, [presaleStatus.currentTime]);

  useEffect(() => {
    const updateCountdown = () => {
      const now = Math.floor(Date.now() / 1000) + timeOffset;
      const startTime = presaleStatus.startTime || 0;
      const endTime = presaleStatus.endTime || 0;
      let mode = "waiting";
      let target = null;

      if (startTime > 0 && now < startTime) {
        mode = "before";
        target = startTime;
      } else if (
        presaleStatus.active &&
        endTime > 0 &&
        now < endTime
      ) {
        mode = "during";
        target = endTime;
      } else if (startTime > 0 || endTime > 0) {
        mode = "ended";
      } else {
        mode = "waiting";
      }

      let remaining = target ? Math.max(target - now, 0) : 0;
      const days = String(Math.floor(remaining / 86400)).padStart(2, "0");
      remaining %= 86400;
      const hours = String(Math.floor(remaining / 3600)).padStart(2, "0");
      remaining %= 3600;
      const minutes = String(Math.floor(remaining / 60)).padStart(2, "0");
      const seconds = String(remaining % 60).padStart(2, "0");

      setCountdown((prev) => {
        if (
          prev.days === days &&
          prev.hours === hours &&
          prev.minutes === minutes &&
          prev.seconds === seconds &&
          prev.mode === mode
        ) {
          return prev;
        }
        return { days, hours, minutes, seconds, mode };
      });
    };

    updateCountdown();
    const timer = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(timer);
  }, [presaleStatus.startTime, presaleStatus.endTime, presaleStatus.active, timeOffset]);

  useEffect(() => {
    if (!provider || !account || !selectedPackage) {
      setReferralPreview(null);
      return;
    }
    let cancelled = false;
    const fetchRewards = async () => {
      try {
        const signer = provider.getSigner();
        const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
        const usdt = new ethers.Contract(USDT_CONTRACT_ADDRESS, erc20Abi, signer);
        const decimals = await usdt.decimals();
        const [l1, l2, l3] = await sale.calculateReferralRewards(selectedPackage.usdtRaw);
        if (!cancelled) {
          setReferralPreview({
            level1: Number(ethers.utils.formatUnits(l1, decimals)),
            level2: Number(ethers.utils.formatUnits(l2, decimals)),
            level3: Number(ethers.utils.formatUnits(l3, decimals)),
          });
        }
      } catch (err) {
        console.error(err);
        if (!cancelled) {
          setReferralPreview(null);
        }
      }
    };
    fetchRewards();
    return () => {
      cancelled = true;
    };
  }, [selectedPackage, provider, account]);

  const formatDateTime = (timestamp) => {
    if (!timestamp) return "--";
    const date = new Date(timestamp * 1000);
    if (Number.isNaN(date.getTime())) return "--";
    return date.toLocaleString();
  };

  const minUsdt = useMemo(() => {
    if (!packages.length) return 0;
    return packages.reduce(
      (acc, pkg) => (pkg.usdt < acc ? pkg.usdt : acc),
      packages[0].usdt
    );
  }, [packages]);

  const maxUsdt = useMemo(() => {
    if (!packages.length) return 0;
    return packages.reduce(
      (acc, pkg) => (pkg.usdt > acc ? pkg.usdt : acc),
      packages[0].usdt
    );
  }, [packages]);

  const hasSufficientBalance = useMemo(() => {
    if (!selectedPackage || !usdtBalance) return true;
    try {
      return usdtBalance.gte(selectedPackage.usdtRaw);
    } catch (err) {
      return true;
    }
  }, [selectedPackage, usdtBalance]);

  const formattedUsdtBalance = useMemo(() => {
    if (!usdtBalance) return "--";
    try {
      const value = ethers.utils.formatUnits(usdtBalance, usdtDecimals);
      const [integer, fraction = ""] = value.split(".");
      if (!fraction) return integer;
      return `${integer}.${fraction.slice(0, 4)}`;
    } catch (err) {
      return "--";
    }
  }, [usdtBalance, usdtDecimals]);

  const countdownSubtitle = useMemo(() => {
    switch (countdown.mode) {
      case "before":
        return t("presale.hero.countdown.before");
      case "during":
        return t("presale.hero.countdown.during");
      case "ended":
        return t("presale.hero.countdown.ended");
      default:
        return t("presale.hero.countdown.waiting");
    }
  }, [countdown.mode, t]);

  const presalePhase = useMemo(() => countdown.mode, [countdown.mode]);

  const primaryButtonLabel = useMemo(() => {
    if (!account) return t("presale.card.connect");
    if (!selectedPackage) return t("presale.card.selectPackage");
    if (allowanceChecking) return t("presale.card.checking");
    if (isBindingReferrer) return t("presale.card.binding");
    if (approvalLoading) return t("presale.card.approving");
    if (purchaseLoading) return t("presale.card.buying");
    if (!isReferrerBound) return t("presale.card.bind");
    if (presalePhase === "before") return t("presale.card.before");
    if (presalePhase === "ended") return t("presale.card.ended");
    if (!presaleStatus.active) return t("presale.card.inactive");
    if (hasPurchased) return t("presale.card.purchased");
    if (!hasSufficientBalance) return t("presale.card.insufficient");
    return t("presale.card.buy");
  }, [
    account,
    selectedPackage,
    allowanceChecking,
    isBindingReferrer,
    approvalLoading,
    purchaseLoading,
    presalePhase,
    hasPurchased,
    hasSufficientBalance,
    t,
  ]);

  const isPrimaryActionDisabled = useMemo(() => {
    if (!account || !selectedPackage) return true;
    if (presalePhase === "before" || presalePhase === "ended") return true;
    if (!isReferrerBound) return false;
    if (!presaleStatus.active) return true;
    if (hasPurchased) return true;
    if (allowanceChecking || approvalLoading || purchaseLoading || isBindingReferrer)
      return true;
    if (pendingTxHash) return true;
    if (!hasSufficientBalance) return true;
    return false;
  }, [
    account,
    selectedPackage,
    presalePhase,
    presaleStatus.active,
    hasPurchased,
    allowanceChecking,
    approvalLoading,
    purchaseLoading,
    isBindingReferrer,
    pendingTxHash,
    hasSufficientBalance,
  ]);

  return (
    <Layout className="presale-layout">
      {/* 顶部导航 */}
      <MainHeader 
        showWallet={true}
        onConnect={handleConnect}
        account={account}
      />

      {/* 中间内容 */}
      <Content className="presale-content">
        {/* 顶部大背景 + 预售卡片 */}
        <section className="hero-section" id="presale">
          <div className="hero-video-wrapper">
            <video
              className="hero-video"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            />
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-inner">
            <div className="countdown-block">
              <h2 className="countdown-title">{t('presale.hero.title')}</h2>
              <p className="countdown-subtitle">{countdownSubtitle}</p>
              
              <div className="countdown-container">
                <div className="countdown-timer">
                  <div className="time-box">
                    <span className="time-number">{countdown.days}</span>
                  </div>
                  <div className="time-box">
                    <span className="time-number">{countdown.hours}</span>
                  </div>
                  <div className="time-box">
                    <span className="time-number">{countdown.minutes}</span>
                  </div>
                  <div className="time-box">
                    <span className="time-number">{countdown.seconds}</span>
                  </div>
                </div>
                <div className="countdown-labels">
                  {t('presale.hero.countdownLabels').map((label, index) => (
                    <span key={index} className="time-label">{label}</span>
                  ))}
                </div>
              </div>
              {/* 连接光束 */}
           
            </div>

            {/* 中央预售卡片 */}
            <div className="presale-card-wrapper">
              <div className="presale-card">
                <div className="card-header">
                  <div className="token-selector">
                    <img src={require("../images/Presale/arrows.png")} alt="arrows" className="token-arrows-bg" />
                    <span className="token-name">  <img src={require("../images/Presale/icon1.png")} alt="icon" className="row-icon" style={{marginTop:-5,marginRight:5}}/>DKB</span>
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-row">
                    <div className="row-left">
                      <img src={require("../images/Presale/icon1.png")} alt="icon" className="row-icon" />
                      <span className="row-label">{t('presale.card.price')}</span>
                    </div>
                    <div className="row-right">
                      <span className="row-value">
                        {selectedPackage
                          ? `${selectedPackage.usdt} USDT → ${selectedPackage.dkb} DKB`
                          : "--"}
                      </span>
                    </div>
                  </div>

                  <div className="card-row">
                    <div className="row-left">
                      <img src={require("../images/Presale/icon1.png")} alt="icon" className="row-icon" />
                      <span className="row-label">{t('presale.card.time')}</span>
                    </div>
                    <div className="row-right">
                      <span className="row-value-small">
                        {formatDateTime(presaleStatus.startTime)} - {formatDateTime(presaleStatus.endTime)}
                      </span>
                    </div>
                  </div>

                  <div className="card-row">
                    <div className="row-left">
                      <img src={require("../images/Presale/usdt.png")} alt="icon" className="row-icon" />
                    </div>
                    <div className="row-right">
                      <span className="row-value">USDT</span>
                    </div>
                  </div>

                  <div className="card-row">
                    <div className="row-left">
                      <img src={require("../images/Presale/icon1.png")} alt="icon" className="row-icon" />
                      <span className="row-label">{t('presale.card.balance')}</span>
                    </div>
                    <div className="row-right">
                      <span className="row-value-small">
                        {formattedUsdtBalance === "--"
                          ? "--"
                          : `${formattedUsdtBalance} USDT`}
                      </span>
                    </div>
                  </div>

                  <div className="card-packages">
                    
                    <div className="package-options">
                      <Select
                        className="package-select"
                        placeholder={t('presale.card.selectPlaceholder')}
                        value={
                          selectedPackageIndex !== null
                            ? selectedPackageIndex
                            : undefined
                        }
                        onChange={(value) => setSelectedPackageIndex(value)}
                        options={preferredPackageIndexes.map((idx) => {
                          const pkg = packages[idx];
                          return {
                            value: idx,
                            label: t('presale.card.option', {
                              usdt: pkg.usdt,
                              dkb: pkg.dkb,
                            }),
                          };
                        })}
                        disabled={!preferredPackageIndexes.length}
                        dropdownMatchSelectWidth
                      />
                    </div>
                  </div>

                  <div className="card-row">
                    <div className="row-left">
                      <img src={require("../images/Presale/icon1.png")} alt="icon" className="row-icon" />
                      <span className="row-label">{t('presale.card.referrer')}</span>
                    </div>
                    <div className="row-right">
                      <span className="row-value-small">
                        {isReferrerBound && userInfo
                          ? userInfo.referrer
                          : targetReferrer || "--"}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-buy"
                    onClick={handlePrimaryAction}
                    disabled={isPrimaryActionDisabled}
                  >
                    {primaryButtonLabel}
                  </button>

                  {pendingTxHash && (
                    <div className="tx-hash-tip">
                      {t('presale.messages.txHashLabel')}
                      <a
                        href={`https://testnet.bscscan.com/tx/${pendingTxHash}`}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {pendingTxHash}
                      </a>
                    </div>
                  )}

                  <div className="card-rewards">
                    <div className="rewards-row">
                      <span className="rewards-label">{t('presale.card.reward')}</span>
                      <span className="rewards-value">
                        {referralPreview
                          ? `L1: ${referralPreview.level1} | L2: ${referralPreview.level2} | L3: ${referralPreview.level3} USDT`
                          : "--"}
                      </span>
                    </div>
                    <div className="rewards-row">
                      <span className="rewards-label">{t('presale.card.amount')}</span>
                      <span className="rewards-value">
                        {selectedPackage ? `${selectedPackage.dkb} DKB` : 0}
                      </span>
                    </div>
                  </div>

                  <button type="button" className="btn-receive" disabled>
                    {t('presale.card.receive')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Invite Rules 区域 */}
        {hasPurchased && (
          <section className="invite-section" id="invite">
            <div className="invite-title-block">
              <Title level={3} style={{ marginBottom: 4 }}>
                {t('presale.invite.title')}
              </Title>
              <Text type="secondary" style={{ fontSize: 13 }}>
                {t('presale.invite.description')}
              </Text>
            </div>

            <div className="invite-card-wrapper">
              <Card className="invite-card">
                <QRCodeCanvas value={inviteUrl} size={160} />
                <div className="invite-link-text">{t('presale.invite.link')}</div>
                <Button
                  type="primary"
                  block
                  size="middle"
                  icon={<LinkOutlined />}
                  onClick={copyInviteUrl}
                >
                  {t('presale.invite.copy')}
                </Button>
              </Card>
            </div>
          </section>
        )}

        {/* Our partners 区域 */}
        <section className="partners-section" id="partners">
          <div className="partners-bg">
            <div className="partners-inner">
              <h3 className="partners-title">{t('presale.partners.title')}</h3>
              <div className="partner-logos">
                <img src={require("../images/Presale/partner-dapp.png")} alt="dapp" className="partner-logo" />
                <img src={require("../images/Presale/partner-binance.png")} alt="binance" className="partner-logo" />
                <img src={require("../images/Presale/partner-dappradar.png")} alt="dappradar" className="partner-logo" />
                <img src={require("../images/Presale/partner-gate.png")} alt="gate" className="partner-logo" />
                <img src={require("../images/Presale/partner-opensea.png")} alt="opensea" className="partner-logo" />
                <img src={require("../images/Presale/partner-tp.png")} alt="tp" className="partner-logo" />
                <img src={require("../images/Presale/partner-trustwallet.png")} alt="trustwallet" className="partner-logo" />
                <img src={require("../images/Presale/partner-uniswap.png")} alt="uniswap" className="partner-logo" />
              </div>
            </div>
          </div>
        </section>
      </Content>

      {/* 底部 Footer */}
      <Footer className="presale-footer">
        <div className="footer-inner">
          <div className="footer-left">
            <div className="footer-logo">DKB</div>
            <div className="footer-desc">
              {t('presale.footer.description')}
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-box">
              <div className="footer-box-title">{t('presale.footer.certification')}</div>
              <div className="footer-box-content">
                {t('presale.footer.contract')}
                <span className="contract-address">
                  {SALE_CONTRACT_ADDRESS}
                </span>
              </div>
            </div>
            <div className="footer-box">
              <div className="footer-box-title">{t('presale.footer.disclaimer')}</div>
              <div className="footer-box-content">
                {t('presale.footer.disclaimerText')}
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">{t('presale.footer.copyright')}</div>
      </Footer>

      {/* 绑定上级弹窗 */}
      <Modal
        open={bindingModalOpen}
        onCancel={() => {
          if (!bindingLoading && !isBindingReferrer) {
            setBindingModalOpen(false);
          }
        }}
        footer={null}
        centered
        maskClosable={false}
      >
        <div className="binding-modal">
          <Title level={4}>{t('presale.modal.title')}</Title>
          <Text>
            {t('presale.modal.description')}
          </Text>
          <div className="binding-address">
            <Text strong>{t('presale.modal.defaultAddress')}</Text>
            <Text copyable={{ text: targetReferrer }}>
              {targetReferrer}
            </Text>
          </div>
          <Button
            type="primary"
            block
            size="large"
            loading={bindingLoading || isBindingReferrer}
            onClick={handleBindReferrer}
          >
            {t('presale.modal.confirm')}
          </Button>
        </div>
      </Modal>

      {/* 邀请链接弹窗 */}
      <Modal
        open={hasPurchased && inviteModalOpen}
        onCancel={() => setInviteModalOpen(false)}
        footer={null}
        centered
        className="invite-modal"
        width={"50%"}
      >
        <div className="invite-modal-content">
          {/* 二维码 */}
          <div className="invite-modal-qr">
            <QRCodeCanvas value={inviteUrl} size={200} />
          </div>

          {/* URL链接 */}
          <div className="invite-modal-url">
            <div className="invite-url-text">{inviteUrl}</div>
            <button className="invite-url-copy-btn" onClick={handleCopyUrl}>
              <img src={require("../images/Presale/copy.png")} alt="copy" />
            </button>
          </div>

          <div className="invite-share-wrapper">
            <button
              type="button"
              className="btn-receive invite-share-btn"
              onClick={handleCopyUrl}
            >
              {t('presale.modal.share')}
            </button>
          </div>

        </div>
      </Modal>
    </Layout>
  );
}

export default Presale;
