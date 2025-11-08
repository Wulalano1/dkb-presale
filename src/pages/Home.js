import React, { useState } from 'react';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import heroVisual from '../images/home/image@2x.png';
import ecosystemCardBg from '../images/home/矩形 35@2x.png';
import ecosystemCardBgAlt from '../images/home/矩形 35@2x(1).png';
import ecosystemCardBgAlt2 from '../images/home/矩形 35@2x(2).png';
import valueCardBg from '../images/home/矩形 36@2x.png';
import roadmapBg from '../images/home/容器 109@2x.png';
import membershipVisual from '../images/home/容器 110@2x.png';
import incentiveVisual from '../images/home/容器 112@2x.png';
import joinBg from '../images/home/容器 114@2x.png';
import highlightIcon1 from '../images/home/容器 383@2x.png';
import highlightIcon2 from '../images/home/容器 383@2x(2).png';
import highlightIcon3 from '../images/home/容器 383@2x(3).png';
import ecosystemIcon1 from '../images/home/容器 383@2x(4).png';
import ecosystemIcon2 from '../images/home/容器 383@2x(5).png';
import ecosystemIcon3 from '../images/home/容器 383@2x(6).png';
import valueIcon1 from '../images/home/容器 384@2x.png';
import valueIcon2 from '../images/home/容器 384@2x(2).png';
import valueIcon3 from '../images/home/容器 384@2x(3).png';
import valueIcon4 from '../images/home/容器 384@2x(4).png';
import memberIcon1 from '../images/home/容器@2x(23).png';
import memberIcon2 from '../images/home/容器@2x(24).png';
import memberIcon3 from '../images/home/容器@2x(25).png';
import './Home.css';

function Home() {
  const { navigate } = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telegram: '',
    message: '',
  });

  const heroHighlights = [
    { icon: highlightIcon1, label: 'AI 智能调度' },
    { icon: highlightIcon2, label: '链上激励模型' },
    { icon: highlightIcon3, label: '全球航旅合作' },
  ];

  const heroStats = [
    { value: '200+', label: '航旅合作伙伴' },
    { value: '1,000,000+', label: '生态用户覆盖' },
    { value: '150+', label: '全球城市节点' },
  ];

  const ecosystemCards = [
    {
      icon: ecosystemIcon1,
      title: '航旅消费场景',
      description: '机票、酒店、贵宾厅等航旅权益，一键兑换与积分互通。',
      background: ecosystemCardBg,
    },
    {
      icon: ecosystemIcon2,
      title: '航空增值服务',
      description: '行李、值机、贵宾通道等增值服务全链路数字化。',
      background: ecosystemCardBgAlt,
    },
    {
      icon: ecosystemIcon3,
      title: '数字资产管理',
      description: '支持票证 NFT、里程积分通证化，提升资产流转效率。',
      background: ecosystemCardBgAlt2,
    },
  ];

  const valueCards = [
    {
      icon: valueIcon1,
      title: 'AI 智能调度引擎',
      description: '实时分析航旅数据，动态优化票价与运力配置。',
    },
    {
      icon: valueIcon2,
      title: '链上激励模型',
      description: '通过质押、挖矿、返利等机制，激励用户参与生态建设。',
    },
    {
      icon: valueIcon3,
      title: '全球节点网络',
      description: '在全球枢纽城市部署服务节点，提供本地化运营支持。',
    },
    {
      icon: valueIcon4,
      title: '资产安全合规',
      description: '多重签名与风控体系，保障资金与数据的安全合规。',
    },
  ];

  const roadmap = [
    {
      quarter: '2023 Q4',
      detail: '完成生态战略发布，启动核心合作伙伴计划。',
    },
    {
      quarter: '2024 Q2',
      detail: '预售平台上线，推出首批航旅合作项目。',
    },
    {
      quarter: '2024 Q4',
      detail: '开放 AI 调度系统，发布链上会员权益。',
    },
    {
      quarter: '2025 Q2',
      detail: '实现全球节点布局，构建跨境支付网络。',
    },
  ];

  const memberLevels = [
    {
      icon: memberIcon1,
      title: '银翼会员',
      description: '享受基础航旅权益，获取航线积分返还。',
    },
    {
      icon: memberIcon2,
      title: '金翼会员',
      description: '尊享贵宾厅、值机通道等增值服务与额外激励。',
    },
    {
      icon: memberIcon3,
      title: '钻石会员',
      description: '参与生态治理，共享航旅资源与收益分配。',
    },
  ];

  const incentivePoints = [
    '里程积分通证化，随时交易与兑换。',
    '支持机票、酒店、贵宾厅等场景消费。',
    '提供 NFT 收藏、任务成长等互动玩法。',
    '跨境支付网络，实现全球快速结算。',
  ];

  const joinHighlights = [
    '抢先获取预售白名单',
    '优先体验航旅权益',
    '共建全球节点计划',
  ];

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert('感谢提交，我们会尽快与您联系。');
    setFormData({ name: '', email: '', telegram: '', message: '' });
  };

  return (
    <div className="page page--dark home-page">
      <MainHeader theme="dark" />
      <main className="home">
        <section className="home-hero">
          <div className="container home-hero__inner">
            <div className="home-hero__content">
              <span className="home-hero__badge">AI驱动数字航空生态</span>
              <h1>
                DKB AI驱动航空经济
                <span>新纪元</span>
              </h1>
              <p className="home-hero__subtitle">AI Super Drive DKB Economy</p>
              <p className="home-hero__description">
                通过 AI + Web3 激励体系，连接航旅消费与数字资产，打造一体化航空经济生态。
              </p>
              <div className="home-hero__highlights">
                {heroHighlights.map((item) => (
                  <div key={item.label} className="home-hero__highlight">
                    <img src={item.icon} alt="" aria-hidden="true" />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="home-hero__actions">
                <button type="button" className="home-button home-button--ghost" onClick={() => navigate('/introduction')}>
                  下载白皮书
                </button>
                <button type="button" className="home-button" onClick={() => navigate('/presale')}>
                  立即参与预售
                </button>
              </div>
              <dl className="home-hero__stats">
                {heroStats.map((item) => (
                  <div key={item.label}>
                    <dt>{item.value}</dt>
                    <dd>{item.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="home-hero__visual">
              <img src={heroVisual} alt="DKB 数字航空生态主视觉" />
            </div>
          </div>
        </section>

        <section className="home-section ecosystem">
          <div className="container">
            <div className="section-heading">
              <h2>DKB 数字航空生态布局</h2>
              <p>从航旅出行、航空服务到链上金融，打造全景式数字航空经济体系。</p>
            </div>
            <div className="ecosystem-grid">
              {ecosystemCards.map((card) => (
                <article
                  key={card.title}
                  className="ecosystem-card"
                  style={{ backgroundImage: `url(${card.background})` }}
                >
                  <img src={card.icon} alt="" aria-hidden="true" />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section value">
          <div className="container">
            <div className="section-heading">
              <h2>Web3 赋能的价值体系</h2>
              <p>以链上激励驱动增长，构建多角色共建共享的价值闭环。</p>
            </div>
            <div className="value-grid">
              {valueCards.map((card) => (
                <article
                  key={card.title}
                  className="value-card"
                  style={{ backgroundImage: `url(${valueCardBg})` }}
                >
                  <img src={card.icon} alt="" aria-hidden="true" />
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section roadmap" style={{ backgroundImage: `url(${roadmapBg})` }}>
          <div className="container">
            <div className="section-heading">
              <h2>生态发展路线</h2>
              <p>循序推进的阶段目标，确保 DKB 数字航空生态稳步落地。</p>
            </div>
            <div className="roadmap-grid">
              {roadmap.map((item) => (
                <article key={item.quarter} className="roadmap-card">
                  <h3>{item.quarter}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="home-section membership">
          <div className="container membership__inner">
            <div className="membership__content">
              <div className="section-heading section-heading--left">
                <h2>会员权益体系</h2>
                <p>覆盖航旅消费全场景的会员权益，打造多层级成长体系。</p>
              </div>
              <div className="membership__levels">
                {memberLevels.map((level) => (
                  <div key={level.title} className="membership-level">
                    <img src={level.icon} alt="" aria-hidden="true" />
                    <div>
                      <h3>{level.title}</h3>
                      <p>{level.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="membership__visual">
              <img src={membershipVisual} alt="会员权益可视化" />
            </div>
          </div>
        </section>

        <section className="home-section incentive">
          <div className="container incentive__inner">
            <div className="incentive__visual">
              <img src={incentiveVisual} alt="链上激励场景" />
            </div>
            <div className="incentive__content">
              <div className="section-heading section-heading--left">
                <h2>从链上激励到现实消费</h2>
                <p>打通数字资产到现实消费的完整闭环，实现价值快速兑现。</p>
              </div>
              <ul className="incentive__list">
                {incentivePoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <button type="button" className="home-button home-button--ghost" onClick={() => navigate('/introduction')}>
                了解更多
              </button>
            </div>
          </div>
        </section>

        <section className="home-section join" id="join" style={{ backgroundImage: `url(${joinBg})` }}>
          <div className="container join__inner">
            <div className="join__content">
              <h2>即刻加入 DKB 数字航空生态</h2>
              <p>预约成为生态合作伙伴，获取最新进展与独家权益。</p>
              <ul>
                {joinHighlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <form className="join__form" onSubmit={handleSubmit}>
              <label>
                <span>姓名</span>
                <input
                  type="text"
                  name="name"
                  placeholder="请输入姓名"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                />
              </label>
              <label>
                <span>邮箱</span>
                <input
                  type="email"
                  name="email"
                  placeholder="请输入邮箱"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </label>
              <label>
                <span>Telegram</span>
                <input
                  type="text"
                  name="telegram"
                  placeholder="请输入 Telegram"
                  value={formData.telegram}
                  onChange={handleFormChange}
                />
              </label>
              <label className="join__form-message">
                <span>合作需求</span>
                <textarea
                  name="message"
                  placeholder="请描述您的合作诉求"
                  value={formData.message}
                  onChange={handleFormChange}
                  rows={4}
                />
              </label>
              <button type="submit" className="home-button">提交申请</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
