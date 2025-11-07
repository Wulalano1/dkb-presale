import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Card, Modal, Typography, Input, Space, message } from 'antd';
import { LinkOutlined } from '@ant-design/icons';
import { QRCodeCanvas } from 'qrcode.react';
import { ethers } from 'ethers';
import MainHeader from '../components/MainHeader';
import {
  BSC_CHAIN_ID_HEX,
  SALE_CONTRACT_ADDRESS,
  USDT_CONTRACT_ADDRESS,
  DEFAULT_REFERRER,
  saleAbi,
  erc20Abi,
  getInjectedProvider,
} from '../web3/config';
import './Presale.css';

const { Title, Text } = Typography;
const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

function Presale() {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState('');
  const [bindingModalOpen, setBindingModalOpen] = useState(false);
  const [bindingLoading, setBindingLoading] = useState(false);
  const [packageInfo, setPackageInfo] = useState(null);
  const [hasPurchased, setHasPurchased] = useState(false);
  const [buyLoading, setBuyLoading] = useState(false);
  const [inviteCode, setInviteCode] = useState('');

  const handleConnect = async () => {
    try {
      const pvd = getInjectedProvider();
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      if (!accounts || !accounts.length) {
        throw new Error('未获取到钱包地址');
      }
      const addr = ethers.utils.getAddress(accounts[0]);
      const chainId = await window.ethereum.request({
        method: 'eth_chainId',
      });
      if (chainId !== BSC_CHAIN_ID_HEX) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: BSC_CHAIN_ID_HEX }],
          });
        } catch (err) {
          if (err.code === 4902) {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {
                  chainId: BSC_CHAIN_ID_HEX,
                  chainName: 'BNB Smart Chain',
                  nativeCurrency: {
                    name: 'BNB',
                    symbol: 'BNB',
                    decimals: 18,
                  },
                  rpcUrls: ['https://bsc-dataseed.binance.org/'],
                  blockExplorerUrls: ['https://bscscan.com'],
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
      message.success('钱包连接成功');
    } catch (e) {
      console.error(e);
      message.error(e.message || '连接钱包失败');
    }
  };

  const checkReferrer = useCallback(async () => {
    if (!provider || !account) return;
    const signer = provider.getSigner();
    const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
    const upline = await sale.getUpline(account);
    const hasUpline = upline && upline.toLowerCase() !== ZERO_ADDRESS.toLowerCase();
    if (!hasUpline) {
      setBindingModalOpen(true);
    }
  }, [provider, account]);

  const handleBindReferrer = async () => {
    if (!provider || !account) return;
    try {
      setBindingLoading(true);
      const signer = provider.getSigner();
      const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
      const tx = await sale.bindUpline(DEFAULT_REFERRER);
      await tx.wait();
      message.success('绑定上级成功');
      setBindingModalOpen(false);
    } catch (e) {
      console.error(e);
      message.error(e.message || '绑定上级失败');
    } finally {
      setBindingLoading(false);
    }
  };

  const loadPackageInfo = useCallback(async () => {
    if (!provider || !account) return;
    const signer = provider.getSigner();
    const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
    const usdt = new ethers.Contract(USDT_CONTRACT_ADDRESS, erc20Abi, signer);
    const res = await sale.getPackageInfo();
    const usdtRaw = res[0];
    const dkbRaw = res[1];
    const usdtDecimals = await usdt.decimals();
    const dkbDecimals = 18;
    const usdtAmount = Number(ethers.utils.formatUnits(usdtRaw, usdtDecimals));
    const dkbAmount = Number(ethers.utils.formatUnits(dkbRaw, dkbDecimals));
    setPackageInfo({ usdt: usdtAmount, dkb: dkbAmount });
  }, [provider, account]);

  const loadPurchased = useCallback(async () => {
    if (!provider || !account) return;
    const signer = provider.getSigner();
    const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
    const purchased = await sale.hasPurchased(account);
    setHasPurchased(purchased);
  }, [provider, account]);

  const handleBuy = async () => {
    if (!provider || !account || !packageInfo) return;
    if (hasPurchased) return;
    try {
      setBuyLoading(true);
      const signer = provider.getSigner();
      const usdt = new ethers.Contract(USDT_CONTRACT_ADDRESS, erc20Abi, signer);
      const sale = new ethers.Contract(SALE_CONTRACT_ADDRESS, saleAbi, signer);
      const usdtDecimals = await usdt.decimals();
      const amount = ethers.utils.parseUnits(packageInfo.usdt.toString(), usdtDecimals);
      const balance = await usdt.balanceOf(account);
      if (balance.lt(amount)) {
        throw new Error('USDT 余额不足');
      }
      const allowance = await usdt.allowance(account, SALE_CONTRACT_ADDRESS);
      if (allowance.lt(amount)) {
        const approveTx = await usdt.approve(SALE_CONTRACT_ADDRESS, amount);
        await approveTx.wait();
      }
      const tx = await sale.buyPresale();
      await tx.wait();
      message.success('购买成功');
      await loadPurchased();
    } catch (e) {
      console.error(e);
      message.error(e.message || '购买失败');
    } finally {
      setBuyLoading(false);
    }
  };

  const inviteUrl = useMemo(() => `${window.location.origin}/?code=${inviteCode || ''}`, [inviteCode]);

  const copyInviteUrl = () => {
    navigator.clipboard
      .writeText(inviteUrl)
      .then(() => message.success('链接已复制'))
      .catch(() => message.error('复制失败'));
  };

  useEffect(() => {
    const { ethereum } = window;
    if (!ethereum) return;
    const onAccountsChanged = (accs) => {
      if (!accs || !accs.length) {
        setAccount('');
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
        message.warning('请切换到 BSC 链');
      }
    };
    ethereum.on('accountsChanged', onAccountsChanged);
    ethereum.on('chainChanged', onChainChanged);
    return () => {
      ethereum.removeListener('accountsChanged', onAccountsChanged);
      ethereum.removeListener('chainChanged', onChainChanged);
    };
  }, []);

  useEffect(() => {
    if (!provider || !account) return;
    (async () => {
      await checkReferrer();
      await loadPackageInfo();
      await loadPurchased();
    })();
  }, [provider, account, checkReferrer, loadPackageInfo, loadPurchased]);

  return (
    <div className="presale-page">
      <MainHeader theme="light" showWallet onConnect={handleConnect} account={account} />
      <main className="presale-main">
        <section className="presale-hero" id="presale">
          <div className="presale-hero__container">
            <div className="presale-hero__countdown">
              <Title level={2}>Pre sale end</Title>
              <Text>Min Buy X USDT · Max Buy Y USDT</Text>
              <div className="presale-countdown">
                {['00', '00', '00', '00'].map((value, index) => (
                  <div className="presale-countdown__item" key={index}>
                    <span>{value}</span>
                    <em>{['DAY', 'HOUR', 'MIN', 'SEC'][index]}</em>
                  </div>
                ))}
              </div>
            </div>
            <Card className="presale-card">
              <div className="presale-card__token">
                <img
                  src={require('../images/conrt.png')}
                  style={{ width: 20, height: 20, marginRight: 6 }}
                  alt="USDT"
                />
                DKB
              </div>
              <Space direction="vertical" style={{ width: '100%' }}>
                <Space
                  style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
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
                    {packageInfo ? packageInfo.usdt : '--'} USDT → {packageInfo ? packageInfo.dkb : '--'} DKB
                  </Text>
                </div>
                <div>
                  <Text type="secondary" style={{ fontSize: 12 }}>
                    购买 USDT 数量（固定套餐）
                  </Text>
                  <Input value={packageInfo ? packageInfo.usdt : ''} readOnly style={{ marginTop: 4 }} />
                </div>
                <Button
                  type="primary"
                  block
                  onClick={handleBuy}
                  loading={buyLoading}
                  disabled={!account || hasPurchased}
                >
                  {!account ? '请先连接钱包' : hasPurchased ? '已购买' : 'Buy'}
                </Button>
                <Button block disabled={!account}>
                  Receive
                </Button>
              </Space>
            </Card>
          </div>
        </section>

        <section className="presale-invite" id="invite">
          <div className="container">
            <div className="section-title">
              <Title level={3}>Invite Rules</Title>
              <Text type="secondary">You must participate in ido to get referral rewards:</Text>
            </div>
            <div className="invite-content">
              <Card className="invite-card">
                <QRCodeCanvas value={inviteUrl} size={160} />
                <div className="invite-link-text">Invite Link</div>
                <Button type="primary" block size="middle" icon={<LinkOutlined />} onClick={copyInviteUrl}>
                  Copy
                </Button>
              </Card>
              <ul className="invite-rules">
                <li>完成预售购买后即刻获得个人邀请码。</li>
                <li>绑定好友后可享受多级佣金奖励。</li>
                <li>邀请链接可复制分享，支持 H5/PC 双端打开。</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="presale-partners" id="partners">
          <div className="container">
            <Title level={3} style={{ color: '#fff', textAlign: 'center' }}>
              Our partners
            </Title>
            <div className="partner-grid">
              {['dapp', 'binance', 'dappradar', 'gate', 'opensea', 'tp', 'trustwallet', 'uniswap'].map((name) => (
                <div className="partner-item" key={name}>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="presale-footer">
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
                <span className="contract-address">0x1234567890abcdef1234567890abcdef12345678</span>
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
      </footer>

      <Modal open={bindingModalOpen} closable={false} maskClosable={false} footer={null} centered>
        <Space direction="vertical" style={{ width: '100%' }}>
          <Title level={4}>绑定上级</Title>
          <Text>检测到当前地址未绑定上级，需要绑定项目方默认地址才能继续预售。</Text>
          <Text copyable={{ text: DEFAULT_REFERRER }}>默认上级地址：{DEFAULT_REFERRER}</Text>
          <Button type="primary" block loading={bindingLoading} onClick={handleBindReferrer}>
            确认绑定
          </Button>
        </Space>
      </Modal>
    </div>
  );
}

export default Presale;
