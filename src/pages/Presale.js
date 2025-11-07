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

const { Header, Content, Footer } = Layout;
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
      <Header className="presale-header">
        <div className="header-left">
          <div className="logo">DKB</div>
          <div className="nav-links">
            <a href="#presale">预售</a>
            <a href="#invite">邀请规则</a>
            <a href="#partners">官方介绍</a>
          </div>
        </div>
        <div className="header-right">
          <Space>
            <Button icon={<GlobalOutlined />} size="small">
              English
            </Button>
            <Button type="primary" onClick={handleConnect}>
              {account ? shortAddress(account) : "Connect Wallet"}
            </Button>
          </Space>
        </div>
      </Header>

      {/* 中间内容 */}
      <Content className="presale-content">
        {/* 顶部大背景 + 预售卡片 */}
        <section className="hero-section" id="presale">
          {/* 背景图片通过 CSS 设置，你自己换 img 地址 */}
          <div className="hero-inner">
            <div className="countdown-block">
              <Title level={2} style={{ color: "#fff", marginBottom: 8 }}>
                Pre sale end
              </Title>
              <Text style={{ color: "rgba(255,255,255,0.8)" }}>
                Min Buy X USDT, Max Buy Y USDT
              </Text>
              <div className="countdown-timer">
                {/* 这里先写死，你后面自己接倒计时逻辑 */}
                <div className="time-item">
                  <span>00</span>
                </div>
                <div className="time-item">
                  <span>00</span>
                </div>
                <div className="time-item">
                  <span>00</span>
                </div>
                <div className="time-item">
                  <span>00</span>
                </div>
              </div>
              <div className="countdown-timers">
                {/* 这里先写死，你后面自己接倒计时逻辑 */}
                <div className="time-items">
                  <span>DAY</span>
                </div>
                <div className="time-items">
                  <span>HOUR</span>
                </div>
                <div className="time-items">
                  <span>MIN</span>
                </div>
                <div className="time-items">
                  <span>SEC</span>
                </div>
              </div>
            </div>

            {/* 中央预售卡片 */}
            <Card className="presale-card hero-card">
              <div className="dkb">
                <img
                  src={require("../images/conrt.png")}
                  style={{ width: "20px", height: "20px", marginRight: "4px" }}
                  alt="USDT"
                />
                dkb
              </div>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Space
                  style={{
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text strong>DKB</Text>
                  <Text>0.20 USDT</Text>
                </Space>

                <div className="line-row">
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    套餐：
                  </Text>
                  <Text style={{ fontSize: 12 }}>
                    {packageInfo ? packageInfo.usdt : "--"} USDT → {" "}
                    {packageInfo ? packageInfo.dkb : "--"} DKB
                  </Text>
                </div>

                <div>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    购买 USDT 数量（固定套餐）
                  </Text>
                  <Input
                    value={packageInfo ? packageInfo.usdt : ""}
                    readOnly
                    style={{ marginTop: 4 }}
                  />
                </div>

                <Button
                  type="primary"
                  block
                  onClick={handleBuy}
                  loading={buyLoading}
                  disabled={!account || hasPurchased}
                >
                  {!account ? "请先连接钱包" : hasPurchased ? "已购买" : "Buy"}
                </Button>

                <Button block disabled={!account}>
                  Receive
                </Button>
              </Space>
            </Card>
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
              <Title level={3} style={{ color: "#fff", textAlign: "center" }}>
                Our partners
              </Title>
              <div className="partner-logos">
                {/* 下面这些图片你自己换路径即可 */}
                <img src="" alt="dapp" className="partner-logo" />
                <img src="" alt="binance" className="partner-logo" />
                <img src="" alt="dappradar" className="partner-logo" />
                <img src="" alt="gate" className="partner-logo" />
                <img src="" alt="opensea" className="partner-logo" />
                <img src="" alt="tp" className="partner-logo" />
                <img src="" alt="trustwallet" className="partner-logo" />
                <img src="" alt="uniswap" className="partner-logo" />
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
              全球领先的低空经济 RWA 生态平台，重构低空经济生产关系，开启低空经济数字化新时代。
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
