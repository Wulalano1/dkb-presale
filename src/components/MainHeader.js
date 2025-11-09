import React, { useState } from 'react';
import { useRouter } from '../router/Router';
import classNames from '../utils/classNames';
import './MainHeader.css';

const NAV_ITEMS = [
  { label: '首页', path: '/' },
  { label: '预售', path: '/presale' },
  { label: '官方介绍', path: '/introduction' },
];

function MainHeader({ showWallet = false, onConnect, account = '' }) {
  const { path, navigate } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const handleNavigate = (target) => {
    setMenuOpen(false);
    navigate(target);
  };

  const shortAccount = account ? `${account.slice(0, 6)}...${account.slice(-4)}` : '';

  // 判断是否是预售页面
  const isPresalePage = path === '/presale';

  return (
    <header className="site-header">
      <div className="site-header__inner">
        {/* Logo */}
        <div 
          className={classNames('site-header__logo-wrapper', isPresalePage && 'has-border')}
          onClick={() => handleNavigate('/')}
        >
          <img src={require("../images/Introduction/logo.png")} alt="DKB" className="site-header__logo" />
        </div>

        {/* Mobile Toggle */}
        <button
          className={classNames('site-header__toggle', menuOpen && 'is-open')}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>

        {/* Navigation */}
        <nav className={classNames('site-header__nav', menuOpen && 'is-open')}>
          <ul className="site-header__menu">
            {NAV_ITEMS.map((item) => (
              <li key={item.path}>
                <button
                  type="button"
                  className={classNames(
                    'site-header__link',
                    path === item.path && 'is-active'
                  )}
                  onClick={() => handleNavigate(item.path)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="site-header__actions">
            {/* Language Selector */}
            <div className="site-header__lang-wrapper">
              <button 
                type="button" 
                className="site-header__lang"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
              >
                {isPresalePage ? 'English' : '中文'}
                <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="lang-arrow">
                  <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {langMenuOpen && (
                <div className="site-header__lang-menu">
                  <button onClick={() => setLangMenuOpen(false)}>中文</button>
                  <button onClick={() => setLangMenuOpen(false)}>English</button>
                </div>
              )}
            </div>

            {/* Wallet Button - only show on presale page */}
            {showWallet && isPresalePage && (
              <button 
                type="button" 
                className="site-header__wallet" 
                onClick={onConnect}
              >
                {account ? shortAccount : 'Connect Wallet'}
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
