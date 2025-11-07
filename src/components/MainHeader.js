import React, { useState } from 'react';
import { useRouter } from '../router/Router';
import classNames from '../utils/classNames';
import './MainHeader.css';

const NAV_ITEMS = [
  { label: '首页', path: '/' },
  { label: '预售', path: '/presale' },
  { label: '官方介绍', path: '/introduction' },
];

function MainHeader({ showWallet = false, onConnect, account = '', theme = 'light' }) {
  const { path, navigate } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (target) => {
    setMenuOpen(false);
    navigate(target);
  };

  const shortAccount = account ? `${account.slice(0, 6)}...${account.slice(-4)}` : '';

  return (
    <header className={classNames('site-header', `site-header--${theme}`)}>
      <div className="site-header__inner">
        <button
          type="button"
          className="site-header__logo"
          onClick={() => handleNavigate('/')}
        >
          DKB
        </button>
        <button
          className={classNames('site-header__toggle', menuOpen && 'is-open')}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={classNames('site-header__nav', menuOpen && 'is-open')}>
          <ul>
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
          <div className="site-header__actions">
            <button type="button" className="site-header__lang">
              中文 / EN
            </button>
            {showWallet && (
              <button type="button" className="site-header__wallet" onClick={onConnect}>
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
