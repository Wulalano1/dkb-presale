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
    if (referrerAddress) {
      return referrerAddress;
    }
    return DEFAULT_REFERRER;
  }, [referrerAddress]);

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

  const bindReferrer = useCallback(async () => {
    if (!provider || !account) return false;
    const candidate = targetReferrer;
    if (!candidate) {
      message.error(t("presale.messages.referrerInvalid"));
      return false;
    }
    let normalized = null;
    try {
      normalized = ethers.utils.getAddress(candidate);
    } catch (err) {
      message.error(t("presale.messages.referrerInvalid"));
      return false;
    }
    if (normalized.toLowerCase() === account.toLowerCase()) {
      message.error(t("presale.messages.referrerSelf"));
      return false;
    }
    let hideMessage;
    try {
      setIsBindingReferrer(true);
      const signer = provider.getSigner();
      const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
      hideMessage = message.loading(
        t("presale.messages.bindPending", { address: normalized }),
        0
      );
      const tx = await sale.setReferrer(normalized);
      setPendingTxHash(tx.hash);
      message.info(
        t("presale.messages.txPending", { hash: tx.hash }),
        4
      );
      provider.once(tx.hash, (receipt) => {
        setPendingTxHash(null);
        if (receipt && receipt.status === 1) {
          message.success(
            t("presale.messages.bindSuccessDynamic", { address: normalized })
          );
          setIsReferrerBound(true);
        } else {
          message.error(t("presale.messages.bindError"));
        }
      });
      await tx.wait();
      if (typeof hideMessage === "function") {
        hideMessage();
      }
      setIsBindingReferrer(false);
      userInfoErrorShownRef.current = false;
      return true;
    } catch (error) {
      console.error("bindReferrer error:", error);
      message.error(error.message || t("presale.messages.bindError"));
      if (typeof hideMessage === "function") {
        hideMessage();
      }
      setIsBindingReferrer(false);
      setPendingTxHash(null);
      return false;
    }
  }, [provider, account, targetReferrer, t]);

  const checkReferrer = useCallback(
    async (autoBind = true) => {
      if (!provider || !account) return null;
      const info = await readUserInfo();
      if (!info) return null;
      if (!info.hasReferrer && autoBind) {
        const bound = await bindReferrer();
        if (bound) {
          return await readUserInfo();
        }
      }
      return info;
    },
    [provider, account, readUserInfo, bindReferrer]
  );

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


  // ============== 授权 & 购买逻辑 ==============
  const handleApprove = useCallback(async () => {
    if (!provider || !account || !selectedPackage) return;
    setPendingTxHash(null);
    try {
      setApprovalLoading(true);
      const signer = provider.getSigner();
      const usdt = new ethers.Contract(USDT_CONTRACT_ADDRESS, erc20Abi, signer);
      const amount = selectedPackage.usdtRaw;
      const tx = await usdt.approve(SALE_CONTRACT_ADDRESS, amount);
      setPendingTxHash(tx.hash);
      message.info(t("presale.messages.txPending", { hash: tx.hash }), 4);
      provider.once(tx.hash, (receipt) => {
        setPendingTxHash(null);
        if (receipt && receipt.status === 1) {
          message.success(t("presale.messages.approvalSuccess"));
          setRequiresApproval(false);
        } else {
          message.error(t("presale.messages.approvalError"));
        }
      });
      await tx.wait();
      await checkAllowance();
      await loadUsdtBalance();
    } catch (error) {
      console.error("handleApprove error:", error);
      if (error?.code === 4001) {
        message.warning(t("presale.messages.userRejected"));
      } else {
        message.error(error.message || t("presale.messages.approvalError"));
      }
      setPendingTxHash(null);
    } finally {
      setApprovalLoading(false);
    }
  }, [provider, account, selectedPackage, t, checkAllowance, loadUsdtBalance]);

  const handlePurchase = useCallback(async () => {
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
        return;
      }

      const balance = await usdt.balanceOf(account);
      if (balance.lt(amount)) {
        message.error(t("presale.messages.insufficient"));
        setUsdtBalance(balance);
        return;
      }

      if (!isReferrerBound) {
        const info = await checkReferrer(true);
        if (!info || !info.hasReferrer) {
          message.error(t("presale.messages.referrerRequired"));
          return;
        }
      }

      if (requiresApproval) {
        message.warning(t("presale.messages.needApproval"));
        return;
      }

      const tx = await sale.buyTokens(amount);
      setPendingTxHash(tx.hash);
      message.info(t("presale.messages.txPending", { hash: tx.hash }), 4);
      provider.once(tx.hash, (receipt) => {
        setPendingTxHash(null);
        if (receipt && receipt.status === 1) {
          message.success(t("presale.messages.purchaseSuccess"));
        } else {
          message.error(t("presale.messages.purchaseError"));
        }
      });
      await tx.wait();
      await loadPurchased();
      await loadPresaleStatus();
      await loadUsdtBalance();
      await readUserInfo();
    } catch (error) {
      console.error("handlePurchase error:", error);
      if (error?.code === 4001) {
        message.warning(t("presale.messages.userRejected"));
      } else {
        message.error(error.message || t("presale.messages.purchaseError"));
      }
      setPendingTxHash(null);
    } finally {
      setPurchaseLoading(false);
    }
  }, [
    provider,
    account,
    selectedPackage,
    hasPurchased,
    presaleStatus.active,
    isReferrerBound,
    requiresApproval,
    checkReferrer,
    loadPurchased,
    loadPresaleStatus,
    readUserInfo,
    loadUsdtBalance,
    t,
  ]);

  const handlePrimaryAction = useCallback(async () => {
    if (requiresApproval) {
      await handleApprove();
    } else {
      await handlePurchase();
    }
  }, [requiresApproval, handleApprove, handlePurchase]);

  // ============== 邀请链接相关（页面中部二维码 + Copy 按钮） ==============
  const inviteUrl = useMemo(() => {
    const base = `${window.location.origin}${window.location.pathname}#/presale`;
    if (!account) return base;
    return `${base}?ref=${account}`;
  }, [account]);

  const copyInviteUrl = () => {
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
    if (!account || !provider) return;
    if (!selectedPackage) {
      setRequiresApproval(true);
      return;
    }
    checkAllowance();
    loadUsdtBalance();
  }, [provider, account, selectedPackage, checkAllowance, loadUsdtBalance]);

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

  const primaryButtonLabel = useMemo(() => {
    if (!account) return t("presale.card.connect");
    if (!selectedPackage) return t("presale.card.selectPackage");
    if (allowanceChecking) return t("presale.card.checking");
    if (isBindingReferrer) return t("presale.card.binding");
    if (approvalLoading) return t("presale.card.approving");
    if (purchaseLoading) return t("presale.card.buying");
    if (!presaleStatus.active) return t("presale.card.inactive");
    if (hasPurchased) return t("presale.card.purchased");
    if (!requiresApproval && !hasSufficientBalance) {
      return t("presale.card.insufficient");
    }
    return requiresApproval ? t("presale.card.approve") : t("presale.card.buy");
  }, [
    account,
    selectedPackage,
    allowanceChecking,
    isBindingReferrer,
    approvalLoading,
    purchaseLoading,
    presaleStatus.active,
    hasPurchased,
    requiresApproval,
    hasSufficientBalance,
    t,
  ]);

  const isPrimaryActionDisabled = useMemo(() => {
    if (!account || !selectedPackage) return true;
    if (!presaleStatus.active) return true;
    if (hasPurchased) return true;
    if (allowanceChecking || approvalLoading || purchaseLoading || isBindingReferrer)
      return true;
    if (pendingTxHash) return true;
    if (!requiresApproval && !hasSufficientBalance) return true;
    return false;
  }, [
    account,
    selectedPackage,
    presaleStatus.active,
    hasPurchased,
    allowanceChecking,
    approvalLoading,
    purchaseLoading,
    isBindingReferrer,
    pendingTxHash,
    requiresApproval,
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
              <p className="countdown-subtitle">{t('presale.hero.subtitle', { min: 0, max: 0 })}</p>
              
              <div className="countdown-container">
                <div className="countdown-timer">
                  <div className="time-box">
                    <span className="time-number">00</span>
                  </div>
                  <div className="time-box">
                    <span className="time-number">00</span>
                  </div>
                  <div className="time-box">
                    <span className="time-number">00</span>
                  </div>
                  <div className="time-box">
                    <span className="time-number">00</span>
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

      {/* 邀请链接弹窗 */}
      <Modal
        open={inviteModalOpen}
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

          {/* 邀请码部分 */}
          <div className="invite-modal-code-section">
            <div className="invite-code-label">{t('presale.modal.inviteCode')}</div>
            <div className="invite-code-field">
              <input 
                type="text" 
                value={inviteCode} 
                readOnly 
                className="invite-code-input"
              />
            </div>
            <button type="button" className="btn-receive" onClick={handleCopyInviteCode}>
              {t('presale.modal.share')}
            </button>
          </div>
        </div>
      </Modal>
    </Layout>
  );
}

export default Presale;
