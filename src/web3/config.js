// src/web3/config.js
import { ethers } from 'ethers';

// BSC 测试网 chainId（16进制）
export const BSC_CHAIN_ID_HEX = '0x61';

// 合约地址（示例地址，可根据环境替换）
export const SALE_CONTRACT_ADDRESS = '0x916703A8ea23d5fdCf34aA970662a379a1ba88F1';
export const USDT_CONTRACT_ADDRESS = '0xc177bA7079D8C8380439B81931Cece53b0eBe011';
export const DEFAULT_REFERRER = '0x4d0808dcd7ec692aaf4bb16cdc2ed238a15e3b6b';
export const HOME_CONTRACT_ADDRESS = '0x2F010932C2e2dA1D2f4811549A2d7a20216e522D';

// 精度常量
export const DKB_DECIMALS = 18;

// 预售合约 ABI（仅保留前端用到的方法）
export const saleAbi = [
  'function setReferrer(address referrer) external',
  'function buyTokens(uint256 usdtAmount) external',
  'function getFixedPackages() external view returns (uint256 usdtPrice1, uint256 dkbAmount1, uint256 usdtPrice2, uint256 dkbAmount2)',
  'function getUserInfo(address user) external view returns (uint256 totalPurchased, uint256 totalReceived, uint256 totalReferralReward, address referrer, uint256 referralCount, bool hasReferrer)',
  'function hasParticipated(address user) external view returns (bool)',
  'function calculateReferralRewards(uint256 usdtAmount) external view returns (uint256 level1Reward, uint256 level2Reward, uint256 level3Reward)',
  'function getPresaleStatus() external view returns (bool active, uint256 startTime, uint256 endTime, uint256 currentTime)',
  'function getStatistics() external view returns (uint256 totalRaised, uint256 totalSold, uint256 participants, uint256 totalRewards)',
  'function getContractBalances() external view returns (uint256 usdtBalance, uint256 dkbBalance)',
];

// USDT（ERC20）要用到的方法
export const erc20Abi = [
  'function allowance(address owner, address spender) view returns (uint256)',
  'function approve(address spender, uint256 value) returns (bool)',
  'function decimals() view returns (uint8)',
  'function balanceOf(address owner) view returns (uint256)',
];

export function shortAddress(addr) {
  if (!addr) return '';
  return addr.slice(0, 6) + '...' + addr.slice(-4);
}

// 获取浏览器钱包 provider
export function getInjectedProvider() {
  const { ethereum } = window;
  if (!ethereum) {
    throw new Error('请先安装钱包插件（例如 MetaMask）');
  }
  return new ethers.providers.Web3Provider(ethereum);
}
