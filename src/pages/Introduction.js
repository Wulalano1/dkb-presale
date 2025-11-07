import React from 'react';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import './Introduction.css';

function Introduction() {
  const { navigate } = useRouter();

  return (
    <div className="page page--light">
      <MainHeader theme="light" />
      <main className="introduction">
        <section className="intro-hero">
          <div className="container">
            <div className="intro-hero__text">
              <h1>DKB 官方生态介绍</h1>
              <p>
                DKB 通过数字资产驱动航空产业升级，打造服务全球旅客的分布式生态。
                预售只是起点，完整的产品矩阵覆盖支付、会员、营销、治理等多个维度。
              </p>
            </div>
            <div className="intro-hero__visual intro-image-placeholder">
              <span>横幅图片占位</span>
            </div>
          </div>
        </section>

        <section className="intro-section">
          <div className="container intro-grid">
            <article>
              <h2>三大业务板块</h2>
              <ul>
                <li>
                  <strong>航空票务与增值服务：</strong> 聚焦机票、贵宾休息室、机场快线等高频场景。
                </li>
                <li>
                  <strong>链上金融与资产管理：</strong> 通过质押、借贷、NFT 赋能航旅权益增值。
                </li>
                <li>
                  <strong>全球社区与营销：</strong> 搭建多语言社区体系，构建激励型增长模型。
                </li>
              </ul>
            </article>
            <aside className="intro-card intro-image-placeholder">
              <span>业务板块图示</span>
            </aside>
          </div>
        </section>

        <section className="intro-section intro-section--alt">
          <div className="container intro-grid intro-grid--reverse">
            <aside className="intro-card intro-image-placeholder">
              <span>技术架构示意</span>
            </aside>
            <article>
              <h2>技术与安全</h2>
              <p>
                采用多链部署策略，结合零知识证明与多签机制，保障用户资产安全。
                通过链上监控与风控系统实现资金流动透明化、风险实时预警。
              </p>
              <p>
                智能合约均通过第三方审计，关键操作开放 DAO 治理投票，确保长期稳健。
              </p>
            </article>
          </div>
        </section>

        <section className="intro-section">
          <div className="container">
            <h2>生态路线图</h2>
            <div className="roadmap">
              <div className="roadmap__stage">
                <h3>阶段一：预售 &amp; 会员开放</h3>
                <p>完成代币发行与会员通行证空投，搭建节点激励体系。</p>
              </div>
              <div className="roadmap__stage">
                <h3>阶段二：航旅权益数字化</h3>
                <p>推出机票、里程、酒店等权益的 NFT 化，并支持二级市场流通。</p>
              </div>
              <div className="roadmap__stage">
                <h3>阶段三：全球支付网络</h3>
                <p>上线跨境支付渠道，与更多商业场景打通，实现闭环消费。</p>
              </div>
              <div className="roadmap__stage">
                <h3>阶段四：DAO 治理升级</h3>
                <p>开放治理提案系统，社区共同决定生态发展方向。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="intro-section intro-section--cta">
          <div className="container intro-cta__content">
            <div>
              <h2>成为 DKB 合作伙伴</h2>
              <p>
                我们欢迎航空、旅游、生活方式品牌加入，共同探索数字化经济新机遇。
                联系官方团队获取定制化合作方案。
              </p>
            </div>
            <button type="button" onClick={() => navigate('/presale')}>
              加入生态
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Introduction;
