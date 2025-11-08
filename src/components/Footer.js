import React, { useState } from 'react';
import './Footer.css';

// 导入图片资源
import footerLogo from '../images/Introduction/Logo@2x.png';
import telegramIcon from '../images/Introduction/容器@2x(23).png';
import twitterIconFooter from '../images/Introduction/容器@2x(24).png';

function Footer() {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    const address = '0x1245678f90abcdef1234567890abcdef12345678';
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <footer className="app-footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* 左侧：Logo和描述 */}
          <div className="footer-left">
            <div className="footer-logo">
              <img src={footerLogo} alt="DKB" className="footer-logo-img" />
            </div>
            <p className="footer-description">
              全球领先的去中心化RWA生态平台，重塑低空经济生产关系，开创区块链赋能实体资产的全新时代。
            </p>
            <div className="footer-social">
              <a href="https://t.me/dkbio" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={telegramIcon} alt="Telegram" />
              </a>
              <a href="https://twitter.com/dkbio" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={twitterIconFooter} alt="Twitter" />
              </a>
            </div>
          </div>

          {/* 右侧：链上认证和免责声明 */}
          <div className="footer-right">
            {/* 链上认证 */}
            <div className="footer-verification">
              <h3 className="footer-section-title">链上认证</h3>
              <div className="verification-box">
                <input 
                  type="text" 
                  value="0x1245678f90abcdef1234567890abcdef12345678" 
                  readOnly 
                  className="verification-input"
                />
                <button 
                  onClick={handleCopyAddress} 
                  className="copy-button"
                  title={copied ? '已复制' : '复制地址'}
                >
                  {copied ? '✓' : '📋'}
                </button>
              </div>
            </div>

            {/* 免责声明 */}
            <div className="footer-disclaimer">
              <h3 className="footer-section-title">免责声明</h3>
              <p className="disclaimer-text">
                本项目为区块链研究平台，展示作品均为，关于贸易、所有权纠纷、技术故障或临时系统
                无意为综合法律体系，堪察补偿要求三方布同投资建议。
              </p>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="footer-bottom">
          <p className="footer-copyright">© 2025. Design with by:</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

