// src/web3/config.js
import { ethers } from 'ethers';

// BSC 主网的 chainId（16进制）
export const BSC_CHAIN_ID_HEX = '0x38';

// TODO：换成你自己的合约地址
export const SALE_CONTRACT_ADDRESS = '0xYourSaleContract';
export const USDT_CONTRACT_ADDRESS = '0xYourUsdtAddress';
export const DEFAULT_REFERRER = '0xYourDefaultReferrer';

// 预售 / 绑定逻辑合约 ABI（这里只写会用到的方法，占位）
// ⚠️：名字和参数要跟你真实合约一致，不一致就改这里
export const saleAbi = [
  // 当前地址是否已经绑定上级
  'function getUpline(address user) view returns (address)',

  // 绑定上级
  'function bindUpline(address referrer) external',

  // 是否已经购买过
  'function hasPurchased(address user) view returns (bool)',

  // 套餐信息，比如返回 500 USDT，1000 DKB
  'function getPackageInfo() view returns (uint256 usdtAmount, uint256 dkbAmount)',

  // 购买预售
  'function buyPresale() external',
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
