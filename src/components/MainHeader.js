import React, { useState } from 'react';
import { useRouter } from '../router/Router';
import classNames from '../utils/classNames';
import { useI18n } from '../i18n/I18nProvider';
import './MainHeader.css';

function MainHeader({ showWallet = false, onConnect, account = '', theme = 'light' }) {
  const { path, navigate } = useRouter();
  const { t, locale, setLocale } = useI18n();
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { label: t('common.nav.home'), path: '/' },
    { label: t('common.nav.presale'), path: '/presale' },
    { label: t('common.nav.introduction'), path: '/introduction' },
  ];

  const handleNavigate = (target) => {
    setMenuOpen(false);
    navigate(target);
  };

  const shortAccount = account ? `${account.slice(0, 6)}...${account.slice(-4)}` : '';
  const nextLocale = locale === 'zh' ? 'en' : 'zh';
  const languageButtonLabel = locale === 'zh' ? 'EN' : '中文';
  const handleToggleLanguage = () => {
    setMenuOpen(false);
    setLocale(nextLocale);
  };

  return (
    <header className={classNames('site-header', `site-header--${theme}`)}>
      <div className="site-header__inner">
        <button
          type="button"
          className="site-header__logo"
          onClick={() => handleNavigate('/')}
        >
          {t('common.brand')}
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
            {navItems.map((item) => (
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
            <button
              type="button"
              className="site-header__lang"
              onClick={handleToggleLanguage}
              aria-label={t('common.language.toggleLabel')}
            >
              {languageButtonLabel}
            </button>
            {showWallet && (
              <button type="button" className="site-header__wallet" onClick={onConnect}>
                {account ? shortAccount : t('common.actions.connectWallet')}
              </button>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}

export default MainHeader;
