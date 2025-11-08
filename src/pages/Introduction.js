import React from 'react';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import './Introduction.css';

import heroBackground from '../images/Introduction/容器 112@2x.png';
import foundationBackground from '../images/Introduction/容器 113@2x.png';
import ctaBackground from '../images/Introduction/容器 114@2x.png';
import heroVisual from '../images/Introduction/image@2x.png';
import heroBadgeIcon from '../images/Introduction/Logo@2x.png';
import pillarBgA from '../images/Introduction/矩形 35@2x.png';
import pillarBgB from '../images/Introduction/矩形 35@2x(1).png';
import pillarBgC from '../images/Introduction/矩形 35@2x(2).png';
import pillarBgD from '../images/Introduction/矩形 35@2x(3).png';

const heroHighlights = [
  {
    icon: require('../images/Introduction/容器 383@2x.png'),
    title: '航旅权益 RWA 化',
    description: '机票、贵宾厅、行李等权益锚定真实业务数据，映射为可治理的数字资产。',
  },
  {
    icon: require('../images/Introduction/容器 383@2x(1).png'),
    title: '智能调度决策引擎',
    description: 'AI 对航线、客流与地面服务进行实时调优，保障效率与体验的最佳平衡。',
  },
  {
    icon: require('../images/Introduction/容器 383@2x(2).png'),
    title: '全球生态协同网络',
    description: '联动航空、文旅及金融伙伴，构建分布式价值共建共享的生态闭环。',
  },
];

const heroStats = [
  {
    icon: require('../images/Introduction/容器 383@2x(3).png'),
    value: '120+',
    label: '航旅及文旅生态伙伴',
  },
  {
    icon: require('../images/Introduction/容器 383@2x(4).png'),
    value: '36',
    label: '全球节点城市',
  },
  {
    icon: require('../images/Introduction/容器 383@2x(5).png'),
    value: '98%',
    label: '数据驱动运营效率提升',
  },
];

const pillarCards = [
  {
    title: '数字航旅资产底座',
    description: '统一管理机票、积分、里程等多类权益资产，支持发行、托管与跨场景流转。',
    icon: require('../images/Introduction/容器 384@2x.png'),
    background: pillarBgA,
  },
  {
    title: '一体化运营中枢',
    description: 'AI 调度、会员、营销与清算系统协同联动，实现线上线下的数据闭环。',
    icon: require('../images/Introduction/容器 384@2x(1).png'),
    background: pillarBgB,
  },
  {
    title: '多维消费闭环',
    description: '覆盖航旅、酒店、文旅与零售等全旅程触点，构建持续复购的消费链路。',
    icon: require('../images/Introduction/容器 384@2x(2).png'),
    background: pillarBgC,
  },
  {
    title: '合规安全治理',
    description: '多签审计、风控监测与 DAO 治理机制并行，守护生态长期稳健发展。',
    icon: require('../images/Introduction/容器 384@2x(3).png'),
    background: pillarBgD,
  },
];

const capabilityMatrix = [
  {
    icon: require('../images/Introduction/容器 383@2x(6).png'),
    title: '航旅服务网络',
    description: '机票预订、贵宾服务、机场交通等高频场景数字化，旅客体验全程可视。',
  },
  {
    icon: require('../images/Introduction/容器 383@2x(7).png'),
    title: '文旅消费生态',
    description: '整合酒店、文旅、零售伙伴权益，打造跨行业的联合营销与履约体系。',
  },
  {
    icon: require('../images/Introduction/容器 383@2x(8).png'),
    title: '金融增值引擎',
    description: '质押、借贷、NFT 等链上组件赋能资产增值，实现权益增发与回购闭环。',
  },
  {
    icon: require('../images/Introduction/容器 383@2x(9).png'),
    title: '品牌营销矩阵',
    description: '任务激励、联盟推广和积分返利驱动用户增长，沉淀忠诚度与声量资产。',
  },
];

const architectureSteps = [
  {
    icon: require('../images/Introduction/容器 383@2x(15).png'),
    title: '数据融合层',
    description: '汇聚航司、机场、服务商与合作伙伴的数据，形成可信的动态数据底座。',
  },
  {
    icon: require('../images/Introduction/容器 383@2x(16).png'),
    title: '资产发行层',
    description: '以合规审计、风控与多签机制发行、托管及回收各类权益资产。',
  },
  {
    icon: require('../images/Introduction/容器 383@2x(17).png'),
    title: '价值协同层',
    description: '智能合约驱动消费、激励、清算流程，实现链上链下价值闭环互通。',
  },
  {
    icon: require('../images/Introduction/容器 383@2x(10).png'),
    title: '治理与风控层',
    description: 'DAO 提案、实时风控与合规监测协作，确保生态的透明与稳定运行。',
  },
];

const governanceHighlights = [
  {
    icon: require('../images/Introduction/容器 384@2x(4).png'),
    title: '安全与合规体系',
    description: '遵循全球航空与金融监管框架，结合链上审计与多重身份验证全程守护。',
    points: ['第三方安全审计', '资产托管透明化', '敏感操作多签审批'],
  },
  {
    icon: require('../images/Introduction/容器 384@2x(5).png'),
    title: '激励经济引擎',
    description: '以权益消费、节点收益与治理奖励构建长期激励，驱动多角色协同增长。',
    points: ['消费任务积分返利', '节点收益按贡献分润', '治理投票激励池'],
  },
  {
    icon: require('../images/Introduction/容器 384@2x(6).png'),
    title: '全球化运营网络',
    description: '多语言社区与本地合伙人体系并行，确保全球市场的落地执行与品牌声量。',
    points: ['多语言内容矩阵', '本地合伙人支持', '跨境结算与清算'],
  },
];

const closingPoints = [
  {
    icon: require('../images/Introduction/容器@2x(1).png'),
    text: '加入全球合作伙伴计划，共建低空经济新范式。',
  },
  {
    icon: require('../images/Introduction/容器@2x(12).png'),
    text: '解锁航旅 RWA 资产的发行、流转与增值能力。',
  },
  {
    icon: require('../images/Introduction/容器@2x(3).png'),
    text: '实时掌握生态产品路线与市场动态，抢占先发优势。',
  },
];

function Introduction() {
  const { navigate } = useRouter();

  const scrollToSection = (sectionId) => {
    if (typeof window === 'undefined') {
      return;
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="introduction-page">
      <MainHeader theme="light" />
      <main className="introduction">
        <section
          className="intro-hero"
          style={{ backgroundImage: `url(${heroBackground})` }}
        >
          <div className="container intro-hero__grid">
            <div className="intro-hero__content">
              <span className="intro-hero__badge">
                <img src={heroBadgeIcon} alt="DKB" />
                DKB 数字航旅生态
              </span>
              <h1 className="intro-hero__title">
                官方介绍
                <br />
                连接低空经济的价值网络
              </h1>
              <p className="intro-hero__description">
                DKB 通过 Web3 与 AI 能力，重构航旅产业的资产发行、调度协同与消费体验。我们将真实业务场景与链上激励体系无缝连接，为全球旅客、品牌与合作伙伴打造可信、高效、可持续的价值闭环。
              </p>
              <div className="intro-highlight-grid">
                {heroHighlights.map((item) => (
                  <div className="intro-highlight-card" key={item.title}>
                    <img src={item.icon} alt="" aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="intro-hero__actions">
                <button
                  type="button"
                  className="intro-button"
                  onClick={() => navigate('/presale')}
                >
                  参与预售
                </button>
                <button
                  type="button"
                  className="intro-button intro-button--ghost"
                  onClick={() => scrollToSection('introduction-foundation')}
                >
                  了解生态详情
                </button>
              </div>
              <div className="intro-hero__stats">
                {heroStats.map((stat) => (
                  <div className="intro-stat-card" key={stat.label}>
                    <img src={stat.icon} alt="" aria-hidden="true" />
                    <div>
                      <span className="intro-stat-card__value">{stat.value}</span>
                      <span className="intro-stat-card__label">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="intro-hero__visual">
              <img src={heroVisual} alt="DKB 官方生态主视觉" />
            </div>
          </div>
        </section>

        <section className="intro-section intro-section--pillars" id="introduction-pillars">
          <div className="container">
            <div className="intro-section__heading">
              <span className="intro-section__eyebrow">生态四大支柱</span>
              <h2 className="intro-section__title">从资产到底层治理的全链条能力</h2>
              <p className="intro-section__description">
                我们以真实业务为底层，以智能调度与链上治理为核心，形成可持续演进的数字航旅生态底盘。
              </p>
            </div>
            <div className="intro-pillars">
              {pillarCards.map((item) => (
                <article
                  className="intro-pillar-card"
                  key={item.title}
                  style={{ backgroundImage: `url(${item.background})` }}
                >
                  <div className="intro-pillar-card__icon">
                    <img src={item.icon} alt="" aria-hidden="true" />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="intro-section intro-section--foundation"
          id="introduction-foundation"
          style={{ backgroundImage: `url(${foundationBackground})` }}
        >
          <div className="container">
            <div className="intro-section__heading intro-section__heading--light">
              <span className="intro-section__eyebrow">全场景生态矩阵</span>
              <h2 className="intro-section__title">联动航旅、文旅与金融的协同网络</h2>
              <p className="intro-section__description">
                四大能力模块覆盖旅客服务、品牌合作、价值增值与营销增长，构成 DKB 生态的完整飞轮。
              </p>
            </div>
            <div className="intro-capability-grid">
              {capabilityMatrix.map((item) => (
                <div className="intro-capability-card" key={item.title}>
                  <div className="intro-capability-card__icon">
                    <img src={item.icon} alt="" aria-hidden="true" />
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="intro-section intro-section--architecture" id="introduction-architecture">
          <div className="container">
            <div className="intro-section__heading">
              <span className="intro-section__eyebrow">技术架构</span>
              <h2 className="intro-section__title">面向未来的四层价值架构</h2>
              <p className="intro-section__description">
                通过数据、资产、协同与治理四个维度，DKB 将链上基础设施与实际航旅业务紧密连接。
              </p>
            </div>
            <div className="intro-architecture">
              {architectureSteps.map((step) => (
                <div className="intro-architecture__item" key={step.title}>
                  <div className="intro-architecture__icon">
                    <img src={step.icon} alt="" aria-hidden="true" />
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="intro-section intro-section--governance" id="introduction-governance">
          <div className="container">
            <div className="intro-section__heading intro-section__heading--light">
              <span className="intro-section__eyebrow">生态护航</span>
              <h2 className="intro-section__title">安全、激励与全球化三重保障</h2>
              <p className="intro-section__description">
                严谨的安全体系、多元的激励机制与全球化运营网络，共同确保生态的长期价值与增长韧性。
              </p>
            </div>
            <div className="intro-governance-grid">
              {governanceHighlights.map((item) => (
                <article className="intro-governance-card" key={item.title}>
                  <div className="intro-governance-card__header">
                    <img src={item.icon} alt="" aria-hidden="true" />
                    <div>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <ul>
                    {item.points.map((point) => (
                      <li key={point}>
                        <span className="intro-governance-card__bullet" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          className="intro-section intro-section--cta"
          id="introduction-cta"
          style={{ backgroundImage: `url(${ctaBackground})` }}
        >
          <div className="container intro-cta">
            <div className="intro-cta__content">
              <h2>成为 DKB 全球合作伙伴</h2>
              <p>
                无论你是航空、文旅、零售还是数字金融伙伴，DKB 都为你提供可量化的商业协同与价值回报。与我们一起，共建低空经济的未来基础设施。
              </p>
              <ul className="intro-cta__list">
                {closingPoints.map((item) => (
                  <li key={item.text}>
                    <img src={item.icon} alt="" aria-hidden="true" />
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
            <div className="intro-cta__actions">
              <button
                type="button"
                className="intro-button intro-button--solid"
                onClick={() => navigate('/presale')}
              >
                立即加入生态
              </button>
              <button
                type="button"
                className="intro-button intro-button--ghost intro-button--wide"
                onClick={() => scrollToSection('introduction-pillars')}
              >
                查看完整介绍
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Introduction;
