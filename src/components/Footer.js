import React, { useState } from 'react';
import { useI18n } from '../i18n/I18nProvider';
import './Footer.css';

function Footer() {
  const { t } = useI18n();
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
              <img src={require("../images/logo (1).png")} alt="DKB" className="footer-logo-img" /><span style={{color:"#ffffff",marginLeft:4}}>DKB</span>
            </div>
            <p className="footer-description">
              {t('common.footer.description')}
            </p>
            <div className="footer-social">
              <a href="https://x.com/botdkb" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={require("../images/logo (2).png")} alt="Telegram" />
              </a>
              <a href="https://t.me/DKB_Ai" target="_blank" rel="noopener noreferrer" className="social-link">
                <img src={require("../images/logo (3).png")} alt="Twitter" />
              </a>
            </div>
          </div>

          {/* 右侧：链上认证和免责声明 */}
          <div className="footer-right">
            {/* 链上认证 */}
            <div className="footer-verification">
              <h3 className="footer-section-title">{t('common.footer.certification')}</h3>
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
                  title={copied ? t('common.footer.copied') : t('common.footer.copyAddress')}
                >
                  {copied ? '✓' : '📋'}
                </button>
              </div>
            </div>

            {/* 免责声明 */}
            <div className="footer-disclaimer">
              <h3 className="footer-section-title">{t('common.footer.disclaimer')}</h3>
              <p className="disclaimer-text">
                {t('common.footer.disclaimerText')}
              </p>
            </div>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="footer-bottom">
          <p className="footer-copyright">{t('common.footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

