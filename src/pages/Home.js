import React from 'react';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import { useI18n } from '../i18n/I18nProvider';
import './Home.css';

function Home() {
  const { navigate } = useRouter();
  const { t } = useI18n();
  const hero = t('home.hero');
  const highlights = t('home.highlights');
  const matrix = t('home.matrix');
  const solutions = t('home.solutions');
  const timeline = t('home.timeline');
  const stats = t('home.stats');
  const partners = t('home.partners');
  const faq = t('home.faq');
  const cta = t('home.cta');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="page page--dark">
      <MainHeader theme="dark" />
      <main className="home">
        <section className="home-hero">
          <div className="container">
            <div className="home-hero__content">
              {hero.subtitle && <div className="home-hero__eyebrow">{hero.subtitle}</div>}
              <h1>{hero.title}</h1>
              {hero.description && <p>{hero.description}</p>}
              {hero.badges?.length ? (
                <ul className="home-hero__badges">
                  {hero.badges.map((badge) => (
                    <li key={badge}>{badge}</li>
                  ))}
                </ul>
              ) : null}
              <div className="home-hero__actions">
                <button type="button" onClick={() => scrollToSection('home-matrix')}>
                  {hero.primaryAction}
                </button>
                <button type="button" onClick={() => navigate('/presale')}>
                  {hero.secondaryAction}
                </button>
              </div>
            </div>
            <div className="home-hero__visual home-image-placeholder" aria-hidden="true">
              <span>{hero.placeholder}</span>
            </div>
          </div>
        </section>

        <section className="home-section home-section--cards" id="home-highlights">
          <div className="container">
            <h2>{highlights.title}</h2>
            {highlights.description && <p className="section-description">{highlights.description}</p>}
            <div className="feature-grid">
              {highlights.items?.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section--matrix" id="home-matrix">
          <div className="container">
            <h2>{matrix.title}</h2>
            {matrix.description && <p className="section-description">{matrix.description}</p>}
            <div className="matrix-grid">
              {matrix.columns?.map((column) => (
                <article key={column.name} className="matrix-card">
                  <h3>{column.name}</h3>
                  <ul>
                    {column.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section--solutions" id="home-solutions">
          <div className="container">
            <h2>{solutions.title}</h2>
            {solutions.description && <p className="section-description">{solutions.description}</p>}
            <div className="solutions-grid">
              {solutions.cards?.map((card) => (
                <article key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section--timeline" id="home-roadmap">
          <div className="container">
            <h2>{timeline.title}</h2>
            <div className="timeline">
              {timeline.items?.map((item) => (
                <div className="timeline__item" key={item.time}>
                  <span className="timeline__time">{item.time}</span>
                  <div className="timeline__content">{item.content}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section--stats" id="home-stats">
          <div className="container stats-grid">
            {stats.items?.map((item) => (
              <div key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="home-section home-section--partners" id="home-partners">
          <div className="container">
            <h2>{partners.title}</h2>
            {partners.description && <p className="section-description">{partners.description}</p>}
            <div className="partner-placeholder-grid">
              {partners.placeholders?.map((placeholder) => (
                <div className="partner-placeholder" key={placeholder}>
                  <span>{placeholder}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section--faq" id="home-faq">
          <div className="container">
            <h2>{faq.title}</h2>
            <div className="faq-grid">
              {faq.items?.map((item) => (
                <article key={item.question}>
                  <h3>{item.question}</h3>
                  <p>{item.answer}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section home-section--cta">
          <div className="container">
            <div className="home-cta__content">
              <div>
                <h2>{cta.title}</h2>
                <p>{cta.description}</p>
              </div>
              <button type="button" onClick={() => navigate('/presale')}>
                {cta.action}
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
