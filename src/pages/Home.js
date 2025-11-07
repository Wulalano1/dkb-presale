import React from 'react';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import './Home.css';

function Home() {
  const { navigate } = useRouter();

  return (
    <div className="page page--dark">
      <MainHeader theme="dark" />
      <main className="home">
        <section className="home-hero">
          <div className="container">
            <div className="home-hero__content">
              <h1>
                DKB 数字航空生态
                <span>引领数字经济新航线</span>
              </h1>
              <p>
                通过链上激励机制连接航空产业与 Web3 世界，
                打造贯穿出行、消费、权益的全景生态。
              </p>
              <div className="home-hero__actions">
                <button type="button" onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}>
                  了解更多
                </button>
                <button type="button" onClick={() => navigate('/presale')}>
                  立即参与预售
                </button>
              </div>
            </div>
            <div className="home-hero__visual home-image-placeholder" aria-hidden="true">
              <span>主视觉占位</span>
            </div>
          </div>
        </section>

        <section className="home-section home-section--cards">
          <div className="container">
            <h2>为何选择 DKB</h2>
            <p className="section-description">
              四位一体的生态布局，覆盖航旅消费、链上金融、资产管理、用户增长。
            </p>
            <div className="feature-grid">
              <article>
                <h3>全球航旅联盟</h3>
                <p>与多家航空、机场集团达成合作，打通机票、贵宾厅、城市服务权益。</p>
              </article>
              <article>
                <h3>链上金融工具</h3>
                <p>提供质押、借贷、票证 NFT 等多元化的金融产品，提升资产流动性。</p>
              </article>
              <article>
                <h3>AI 驱动的增益系统</h3>
                <p>结合 AI 算法进行数据建模，实现智能营销、精准推荐与收益分配。</p>
              </article>
            </div>
          </div>
        </section>

        <section className="home-section home-section--timeline">
          <div className="container">
            <h2>发展里程碑</h2>
            <div className="timeline">
              <div className="timeline__item">
                <span className="timeline__time">2024 Q1</span>
                <div className="timeline__content">
                  完成航旅合作签署，预售平台上线。
                </div>
              </div>
              <div className="timeline__item">
                <span className="timeline__time">2024 Q3</span>
                <div className="timeline__content">
                  推出链上会员系统，启动全球节点计划。
                </div>
              </div>
              <div className="timeline__item">
                <span className="timeline__time">2025 Q1</span>
                <div className="timeline__content">
                  上线航旅 NFT 市场，实现权益自由流转。
                </div>
              </div>
              <div className="timeline__item">
                <span className="timeline__time">2025 Q4</span>
                <div className="timeline__content">
                  打通全球消费场景，构建跨境支付网络。
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="home-section home-section--stats">
          <div className="container stats-grid">
            <div>
              <h3>200+</h3>
              <p>已签约航旅合作伙伴</p>
            </div>
            <div>
              <h3>1,000,000+</h3>
              <p>生态用户覆盖</p>
            </div>
            <div>
              <h3>150+</h3>
              <p>全球城市服务节点</p>
            </div>
          </div>
        </section>

        <section className="home-section home-section--cta">
          <div className="container">
            <div className="home-cta__content">
              <div>
                <h2>即刻加入数字航空新纪元</h2>
                <p>参与预售即可抢先解锁 DKB 生态权益与激励。</p>
              </div>
              <button type="button" onClick={() => navigate('/presale')}>
                前往预售
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
