import React from 'react';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import { useI18n } from '../i18n/I18nProvider';
import './Introduction.css';

function Introduction() {
  const { navigate } = useRouter();
  const { t } = useI18n();
  const hero = t('introduction.hero');
  const pillars = t('introduction.pillars');
  const business = t('introduction.business');
  const technology = t('introduction.technology');
  const tokenomics = t('introduction.tokenomics');
  const compliance = t('introduction.compliance');
  const team = t('introduction.team');
  const cta = t('introduction.cta');

  return (
    <div className="page page--light">
      <MainHeader theme="light" />
      <main className="introduction">
        <section className="intro-hero">
          <div className="container">
            <div className="intro-hero__text">
              <h1>{hero.title}</h1>
              {hero.description && <p>{hero.description}</p>}
              {hero.highlights?.length ? (
                <ul className="intro-hero__highlights">
                  {hero.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </div>
            <div className="intro-hero__visual intro-image-placeholder" aria-hidden="true">
              <span>{hero.placeholder}</span>
            </div>
          </div>
        </section>

        <section className="intro-section">
          <div className="container intro-grid">
            {pillars.items?.map((item) => (
              <article key={item.title} className="intro-card">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="intro-section intro-section--alt">
          <div className="container intro-grid">
            <article className="intro-card intro-card--full">
              <h2>{business.title}</h2>
              {business.description && <p className="intro-card__lead">{business.description}</p>}
              <div className="intro-business-grid">
                {business.items?.map((item) => (
                  <div key={item.title} className="intro-business-item">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="intro-section">
          <div className="container intro-grid intro-grid--reverse">
            <aside className="intro-card intro-image-placeholder">
              <span>{technology.placeholder}</span>
            </aside>
            <article className="intro-card intro-card--stacked">
              <h2>{technology.title}</h2>
              <ul>
                {technology.points?.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="intro-section intro-section--alt">
          <div className="container intro-grid">
            <article className="intro-card intro-card--full">
              <h2>{tokenomics.title}</h2>
              <div className="intro-token-grid">
                {tokenomics.items?.map((item) => (
                  <div key={item.title} className="intro-token-card">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="intro-section">
          <div className="container intro-grid intro-grid--three">
            {compliance.columns?.map((column) => (
              <article key={column.title} className="intro-card intro-card--list">
                <h3>{column.title}</h3>
                <ul>
                  {column.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="intro-section intro-section--team">
          <div className="container">
            <h2>{team.title}</h2>
            {team.description && <p className="intro-team__description">{team.description}</p>}
            <div className="intro-team-grid">
              {team.members?.map((member) => (
                <div key={member.name} className="intro-team-card">
                  <div className="intro-team-card__avatar" aria-hidden="true">
                    <span>{member.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="intro-section intro-section--cta">
          <div className="container intro-cta__content">
            <div>
              <h2>{cta.title}</h2>
              <p>{cta.description}</p>
            </div>
            <button type="button" onClick={() => navigate('/presale')}>
              {cta.action}
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Introduction;
