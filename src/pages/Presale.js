// src/pages/Presale.js
import React, { useEffect, useState } from "react";
import {
  Layout,
  Button,
  Card,
  Modal,
  Typography,
  Input,
  Space,
  Row,
  Col,
  message,
} from "antd";
import { GlobalOutlined, LinkOutlined } from "@ant-design/icons";
import { QRCodeCanvas } from "qrcode.react";
import { ethers } from "ethers";
import {
  BSC_CHAIN_ID_HEX,
  SALE_CONTRACT_ADDRESS,
  USDT_CONTRACT_ADDRESS,
  DEFAULT_REFERRER,
  saleAbi,
  erc20Abi,
  shortAddress,
  getInjectedProvider,
} from "../web3/config";
import "./Presale.css";
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';

const { Content } = Layout;
const { Title, Text } = Typography;

const ZERO_ADDRESS = "0x0000000000000000000000000000000000000000";

function Presale() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState("");

  const [bindingModalOpen, setBindingModalOpen] = useState(false);
  const [bindingLoading, setBindingLoading] = useState(false);

  const [packageInfo, setPackageInfo] = useState(null); // { usdt, dkb }
  const [hasPurchased, setHasPurchased] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);

  const [inviteCode, setInviteCode] = useState("");

  // ============== 连接钱包 & 切 BSC ==============
  const handleConnect = async () => {
    try {
      const pvd = getInjectedProvider();

      // 1. 请求钱包地址
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      if (!accounts || !accounts.length) {
        throw new Error("未获取到钱包地址");
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
      message.success("钱包连接成功");
    } catch (e) {
      console.error(e);
      message.error(e.message || "连接钱包失败");
    }
  };

  // ============== 检查是否有上级，没有就弹框绑定 ==============
  const checkReferrer = async () => {
    if (!provider || !account) return;
    const signer = provider.getSigner();
    const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);

    const upline = await sale.getUpline(account);
    const hasUpline =
      upline && upline.toLowerCase() !== ZERO_ADDRESS.toLowerCase();
    if (!hasUpline) {
      setBindingModalOpen(true);
    }
  };

  const handleBindReferrer = async () => {
    if (!provider || !account) return;
    try {
      setBindingLoading(true);
      const signer = provider.getSigner();
      const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);

      const tx = await sale.bindUpline(DEFAULT_REFERRER);
      await tx.wait();
      message.success("绑定上级成功");
      setBindingModalOpen(false);
    } catch (e) {
      console.error(e);
      message.error(e.message || "绑定上级失败");
    } finally {
      setBindingLoading(false);
    }
  };

  // ============== 获取套餐信息 ==============
  const loadPackageInfo = async () => {
    if (!provider || !account) return;
    const signer = provider.getSigner();
    const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
    const usdt = new ethers.Contract(USDT_CONTRACT_ADDRESS, erc20Abi, signer);

    const res = await sale.getPackageInfo();
    const usdtRaw = res[0];
    const dkbRaw = res[1];

    const usdtDecimals = await usdt.decimals();
    const dkbDecimals = 18; // 按你们 DKB 实际精度改

    const usdtAmount = Number(ethers.utils.formatUnits(usdtRaw, usdtDecimals));
    const dkbAmount = Number(ethers.utils.formatUnits(dkbRaw, dkbDecimals));

    setPackageInfo({ usdt: usdtAmount, dkb: dkbAmount });
  };

  // ============== 查询是否已购买 ==============
  const loadPurchased = async () => {
    if (!provider || !account) return;
    const signer = provider.getSigner();
    const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);

    const purchased = await sale.hasPurchased(account);
    setHasPurchased(purchased);
  };

  // ============== 购买逻辑 ==============
  const handleBuy = async () => {
    if (!provider || !account || !packageInfo) return;
    if (hasPurchased) return;

    try {
      setBuyLoading(true);
      const signer = provider.getSigner();
      const usdt = new ethers.Contract(USDT_CONTRACT_ADDRESS, erc20Abi, signer);
      const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);

      const usdtDecimals = await usdt.decimals();
      const amount = ethers.utils.parseUnits(
        packageInfo.usdt.toString(),
        usdtDecimals
      );

      const balance = await usdt.balanceOf(account);
      if (balance.lt(amount)) {
        throw new Error("USDT 余额不足");
      }

      const allowance = await usdt.allowance(account, SALE_CONTRACT_ADDRESS);
      if (allowance.lt(amount)) {
        const approveTx = await usdt.approve(SALE_CONTRACT_ADDRESS, amount);
        await approveTx.wait();
      }

      const tx = await sale.buyPresale();
      await tx.wait();

      message.success("购买成功");
      await loadPurchased();
    } catch (e) {
      console.error(e);
      message.error(e.message || "购买失败");
    } finally {
      setBuyLoading(false);
    }
  };

  // ============== 邀请链接相关（页面中部二维码 + Copy 按钮） ==============
  const inviteUrl = `${window.location.origin}/?code=${inviteCode || ""}`;

  const copyInviteUrl = () => {
    navigator.clipboard
      .writeText(inviteUrl)
      .then(() => message.success("链接已复制"))
      .catch(() => message.error("复制失败"));
  };

  // ============== 监听账户/链变化 ==============
  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) return;

    const onAccountsChanged = (accs) => {
      if (!accs || !accs.length) {
        setAccount("");
        setPackageInfo(null);
        setHasPurchased(false);
        return;
      }
      const addr = ethers.utils.getAddress(accs[0]);
      setAccount(addr);
      setInviteCode(addr.slice(-5).toUpperCase());
    };

    const onChainChanged = (chainId) => {
      if (chainId !== BSC_CHAIN_ID_HEX) {
        message.warning("请切换到 BSC 链");
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
      await checkReferrer();
      await loadPackageInfo();
      await loadPurchased();
    })();
  }, [provider, account]);

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
          <div className="hero-inner">
            <div className="countdown-block">
              <h2 className="countdown-title">Pre-sale end</h2>
              <p className="countdown-subtitle">Min Buy 0 USDT, Max Buy 0USDT</p>
              
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
                  <span className="time-label">DAY</span>
                  <span className="time-label">HOUR</span>
                  <span className="time-label">MIN</span>
                  <span className="time-label">SEC</span>
                </div>
              </div>
            </div>

            {/* 中央预售卡片 */}
            <div className="presale-card-wrapper">
              <div className="presale-card">
                <div className="card-header">
                  <div className="card-arrows">
                    <img src={require("../images/Presale/arrows.png")} alt="arrows" className="arrows-bg" />
                  </div>
                  <div className="card-tab">
                    <img src={require("../images/Presale/icon.png")} alt="icon" className="tab-icon" />
                    <span className="tab-text">pre</span>
                  </div>
                </div>

                <div className="card-body">
                  <div className="card-row">
                    <div className="row-left">
                      <img src={require("../images/Presale/icon.png")} alt="icon" className="row-icon" />
                      <span className="row-label">Price</span>
                    </div>
                    <div className="row-right">
                      <span className="row-value">0/100 Usdt</span>
                    </div>
                  </div>

                  <div className="card-row">
                    <div className="row-left">
                      <span className="row-label">Time：</span>
                    </div>
                    <div className="row-right">
                      <span className="row-value-small">12/1/62,04:08:08-2022-12-31,23:11</span>
                    </div>
                  </div>

                  <div className="card-input-section">
                    <div className="input-header">
                      <div className="input-header-left">
                        <span className="input-label">Min</span>
                        <span className="input-value">0 Usdt</span>
                      </div>
                      <div className="input-header-right">
                        <span className="input-label">Max</span>
                        <span className="input-value">0 Usdt</span>
                      </div>
                    </div>

                    <div className="input-container">
                      <button className="btn-decrease">
                        <img src={require("../images/Presale/remove.png")} alt="decrease" />
                      </button>
                      <input 
                        type="number" 
                        className="amount-input" 
                        defaultValue="100"
                        placeholder="100"
                      />
                      <button className="btn-increase">
                        <img src={require("../images/Presale/add.png")} alt="increase" />
                      </button>
                    </div>

                    <div className="usdt-badge">
                      <img src={require("../images/Presale/usdt.png")} alt="USDT" className="usdt-icon" />
                      <span className="usdt-text">USDT</span>
                    </div>
                  </div>

                  <button className="btn-buy">Buy</button>

                  <div className="card-rewards">
                    <div className="rewards-row">
                      <span className="rewards-label">Rewards：</span>
                      <span className="rewards-value">0</span>
                    </div>
                    <div className="rewards-row">
                      <span className="rewards-label">Amount：</span>
                      <span className="rewards-value"></span>
                    </div>
                  </div>

                  <button className="btn-receive">Receive</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Invite Rules 区域 */}
        <section className="invite-section" id="invite">
          <div className="invite-title-block">
            <Title level={3} style={{ marginBottom: 4 }}>
              Invite Rules
            </Title>
            <Text type="secondary" style={{ fontSize: 13 }}>
              You must participate in ido to get referral rewards:
            </Text>
          </div>

          <div className="invite-card-wrapper">
            <Card className="invite-card">
              <QRCodeCanvas value={inviteUrl} size={160} />
              <div className="invite-link-text">Invite Link</div>
              <Button
                type="primary"
                block
                size="middle"
                icon={<LinkOutlined />}
                onClick={copyInviteUrl}
              >
                Copy
              </Button>
            </Card>
          </div>
        </section>

        {/* Our partners 区域 */}
        <section className="partners-section" id="partners">
          <div className="partners-bg">
            <div className="partners-inner">
              <h3 className="partners-title">Our partners</h3>
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
              全球领先的低空经济 RWA
              生态平台，重构低空经济生产关系，开启低空经济数字化新时代。
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-box">
              <div className="footer-box-title">链上认证</div>
              <div className="footer-box-content">
                BSC 链合约地址：
                <span className="contract-address">
                  0x1234567890abcdef1234567890abcdef12345678
                </span>
              </div>
            </div>
            <div className="footer-box">
              <div className="footer-box-title">免责声明</div>
              <div className="footer-box-content">
                本项目不构成任何形式的投资建议，投资有风险，决策需谨慎。所有代币和相关信息仅用于社区公示，请勿视为对任何第三方承诺或担保。
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">© 2025. Design with by .</div>
      </Footer>

      {/* 绑定上级弹窗（必须绑定才让过） */}
      <Modal
        open={bindingModalOpen}
        closable={false}
        maskClosable={false}
        footer={null}
        centered
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <Title level={4}>绑定上级</Title>
          <Text>
            检测到当前地址未绑定上级，需要绑定项目方默认地址才能继续预售。
          </Text>
          <Text copyable={{ text: DEFAULT_REFERRER }}>
            默认上级地址：{DEFAULT_REFERRER}
          </Text>
          <Button
            type="primary"
            block
            loading={bindingLoading}
            onClick={handleBindReferrer}
          >
            确认绑定
          </Button>
        </Space>
      </Modal>
    </Layout>
  );
}

export default Presale;
