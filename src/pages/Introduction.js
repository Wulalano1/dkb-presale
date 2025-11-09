import React, { useState } from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import { useRouter } from '../router/Router';
import { useI18n } from '../i18n/I18nProvider';
import './Introduction.css';

function Introduction() {
  const { navigate } = useRouter();
  const { t } = useI18n();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    intention: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('表单提交:', formData);
    alert(t('introduction.join.form.success'));
    // 这里可以添加实际的提交逻辑
  };

  return (
    <div className="introduction-page">
      <MainHeader />
      
      {/* Hero Section - 第一屏 完全按照设计图 */}
      <section className="intro-hero-section">
        <div className="intro-hero-wrapper">
          {/* 左下角：文字内容区 */}
          <div className="intro-hero-text">
            <h1 className="intro-hero-brand">
              DKB-A
              <span className="intro-hero-line"></span>
            </h1>
            <h2 className="intro-hero-main-title">
              <span className="intro-title-gradient">{t('introduction.hero.titleLine1')}</span>
              <br />
              {t('introduction.hero.titleLine2')}
            </h2>
            <p className="intro-hero-description">
              {t('introduction.hero.description')}
            </p>
            
            {/* 4个统计数据 */}
            <div className="intro-hero-stats-row">
              <div className="intro-hero-stat">
                <div className="intro-stat-value">300%</div>
                <div className="intro-stat-label">{t('introduction.hero.stats.label')}</div>
              </div>
              <div className="intro-hero-stat">
                <div className="intro-stat-value">50%</div>
                <div className="intro-stat-label">{t('introduction.hero.stats.label')}</div>
              </div>
              <div className="intro-hero-stat">
                <div className="intro-stat-value">90%</div>
                <div className="intro-stat-label">{t('introduction.hero.stats.label')}</div>
              </div>
              <div className="intro-hero-stat">
                <div className="intro-stat-value">7天</div>
                <div className="intro-stat-label">{t('introduction.hero.stats.label')}</div>
              </div>
            </div>
          </div>

          {/* 右侧：大圆形科技图案（相对定位的容器） */}
          <div className="intro-hero-visual-right">
            <img 
              src={require("../images/Introduction/blockchain-visual.png")} 
              alt="Blockchain Visual" 
              className="intro-hero-blockchain-img"
            />
            
            {/* 图片左上角：区块高度标签 */}
            <div className="intro-hero-tag intro-hero-tag-topleft">
              <img src={require("../images/Introduction/check-green-icon.png")} alt="" />
              <div className="intro-tag-content">
                <span className="intro-tag-label">{t('introduction.hero.tags.blockHeight')}</span>
                <span className="intro-tag-value">1,684,329</span>
              </div>
            </div>
            
            {/* 图片右下角：节点数量标签 */}
            <div className="intro-hero-tag intro-hero-tag-bottomright">
              <img src={require("../images/Introduction/check-green-icon.png")} alt="" />
              <div className="intro-tag-content">
                <span className="intro-tag-label">{t('introduction.hero.tags.nodeCount')}</span>
                <span className="intro-tag-value">1,200+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 重构低空经济生产关系 Section - 完全按照设计图 */}
      <section className="intro-reconstruction-section">
        <div className="intro-container">
          {/* 居中标题和副标题 */}
          <h2 className="intro-section-title-center">{t('introduction.reconstruction.title')}</h2>
          <p className="intro-section-subtitle-center">
            {t('introduction.reconstruction.subtitle')}
          </p>

          {/* 左右布局 */}
          <div className="intro-recon-layout">
            {/* 左侧：无人机大图（虚线边框） */}
            <div className="intro-recon-left">
              <div className="intro-recon-image-box">
                <img 
                  src={require("../images/Introduction/reconstruction-drone.png")} 
                  alt="Low Altitude Economy" 
                />
              </div>
            </div>

            {/* 右侧：协议定位 + 核心优势 */}
            <div className="intro-recon-right">
              {/* 协议定位 */}
              <div className="intro-recon-protocol">
                <h3 className="intro-recon-subtitle">{t('introduction.reconstruction.protocol.title')}</h3>
                <p className="intro-recon-desc">
                  {t('introduction.reconstruction.protocol.desc')}
                </p>
              </div>

              {/* 核心优势 */}
              <div className="intro-recon-advantages">
                <h3 className="intro-recon-subtitle">{t('introduction.reconstruction.advantages.title')}</h3>
                <div className="intro-recon-adv-list">
                  {/* 4个优势项 - 图标与文字对应 */}
                  <div className="intro-recon-adv-item">
                    <div className="intro-recon-icon-box">
                      <img src={require("../images/Introduction/core-advantage-2.png")} alt="" />
                    </div>
                    <div className="intro-recon-adv-content">
                      <h4 className="intro-recon-adv-title">{t('introduction.reconstruction.advantages.tokenization.title')}</h4>
                      <p className="intro-recon-adv-desc">{t('introduction.reconstruction.advantages.tokenization.desc')}</p>
                    </div>
                  </div>

                  <div className="intro-recon-adv-item">
                    <div className="intro-recon-icon-box">
                      <img src={require("../images/Introduction/ecosystem-icon-2.png")} alt="" />
                    </div>
                    <div className="intro-recon-adv-content">
                      <h4 className="intro-recon-adv-title">{t('introduction.reconstruction.advantages.dao.title')}</h4>
                      <p className="intro-recon-adv-desc">{t('introduction.reconstruction.advantages.dao.desc')}</p>
                    </div>
                  </div>

                  <div className="intro-recon-adv-item">
                    <div className="intro-recon-icon-box">
                      <img src={require("../images/Introduction/core-advantage-3.png")} alt="" />
                    </div>
                    <div className="intro-recon-adv-content">
                      <h4 className="intro-recon-adv-title">{t('introduction.reconstruction.advantages.crossChain.title')}</h4>
                      <p className="intro-recon-adv-desc">{t('introduction.reconstruction.advantages.crossChain.desc')}</p>
                    </div>
                  </div>

                  <div className="intro-recon-adv-item">
                    <div className="intro-recon-icon-box">
                      <img src={require("../images/Introduction/ecosystem-icon-3.png")} alt="" />
                    </div>
                    <div className="intro-recon-adv-content">
                      <h4 className="intro-recon-adv-title">{t('introduction.reconstruction.advantages.protocol.title')}</h4>
                      <p className="intro-recon-adv-desc">{t('introduction.reconstruction.advantages.protocol.desc')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web3驱动的可信底座 Section - 完全按照设计图 */}
      <section className="intro-web3-section">
        <div className="intro-container">
          {/* 居中标题和副标题 */}
          <h2 className="intro-section-title-center">{t('introduction.web3.title')}</h2>
          <p className="intro-section-subtitle-center">
            {t('introduction.web3.subtitle')}
          </p>

          {/* 三个核心技术卡片 */}
          <div className="intro-web3-cards-row">
            {/* 区块链基础设施 */}
            <div className="intro-web3-card">
             
              <div className="intro-web3-card-icon">
                <img src={require("../images/Introduction/blockchain-icon.png")} alt="" />
              </div>
              <h3 className="intro-web3-card-title">{t('introduction.web3.blockchain.title')}</h3>
              <p className="intro-web3-card-desc">
                {t('introduction.web3.blockchain.desc')}
              </p>
              <ul className="intro-web3-card-features">
                {t('introduction.web3.blockchain.features').map((feature, index) => (
                  <li key={index}>
                    <img src={require("../images/Introduction/check-green-icon.png")} alt="" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 智能合约 */}
            <div className="intro-web3-card">
               <div className="intro-web3-card-badge">{t('introduction.web3.smartContract.badge')}</div>
              <div className="intro-web3-card-icon">
                <img src={require("../images/Introduction/smart-contract-icon.png")} alt="" />
              </div>
              <h3 className="intro-web3-card-title">{t('introduction.web3.smartContract.title')}</h3>
              <p className="intro-web3-card-desc">
                {t('introduction.web3.smartContract.desc')}
              </p>
              <ul className="intro-web3-card-features">
                {t('introduction.web3.smartContract.features').map((feature, index) => (
                  <li key={index}>
                    <img src={require("../images/Introduction/check-green-icon.png")} alt="" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* DAO治理 */}
            <div className="intro-web3-card">
              <div className="intro-web3-card-icon">
                <img src={require("../images/Introduction/dao-icon.png")} alt="" />
              </div>
              <h3 className="intro-web3-card-title">{t('introduction.web3.dao.title')}</h3>
              <p className="intro-web3-card-desc">
                {t('introduction.web3.dao.desc')}
              </p>
              <ul className="intro-web3-card-features">
                {t('introduction.web3.dao.features').map((feature, index) => (
                  <li key={index}>
                    <img src={require("../images/Introduction/check-green-icon.png")} alt="" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 核心技术突破 */}
          <div className="intro-tech-breakthrough-section">
            <h3 className="intro-tech-breakthrough-title">{t('introduction.web3.breakthrough.title')}</h3>
            <div className="intro-tech-breakthrough-cards">
              {/* 高性能交易处理 */}
              <div className="intro-tech-breakthrough-card">
                <div className="intro-tech-card-icon">
                  <img src={require("../images/Introduction/lightning-icon.png")} alt="" />
                </div>
                <div className="intro-tech-card-content">
                  <h4 className="intro-tech-card-title">{t('introduction.web3.breakthrough.highPerformance.title')}</h4>
                  <p className="intro-tech-card-desc">
                    {t('introduction.web3.breakthrough.highPerformance.desc')}
                  </p>
                </div>
              </div>

              {/* 链上合规体系 */}
              <div className="intro-tech-breakthrough-card">
                <div className="intro-tech-card-icon intro-tech-card-icon--green">
                  <img src={require("../images/Introduction/shield-icon.png")} alt="" />
                </div>
                <div className="intro-tech-card-content">
                  <h4 className="intro-tech-card-title">{t('introduction.web3.breakthrough.compliance.title')}</h4>
                  <p className="intro-tech-card-desc">
                    {t('introduction.web3.breakthrough.compliance.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 资产通证化革新 Section - 完全按照设计图 */}
      <section className="intro-tokenization-section">
        <div className="intro-container">
          {/* 居中标题和副标题 */}
          <h2 className="intro-section-title-center">{t('introduction.tokenization.title')}</h2>
          <p className="intro-section-subtitle-center">
            {t('introduction.tokenization.subtitle')}
          </p>

          {/* 左右布局 */}
          <div className="intro-token-layout">
            {/* 左侧：空域资源通证化 */}
            <div className="intro-token-left">
              <div className="intro-token-tag intro-token-tag--cyan">{t('introduction.tokenization.airspace.tag')}</div>
              
              <h3 className="intro-token-title">{t('introduction.tokenization.airspace.title')}</h3>
              <p className="intro-token-desc">
                {t('introduction.tokenization.airspace.desc')}
              </p>

              <h4 className="intro-token-subtitle">{t('introduction.tokenization.airspace.painPoints.title')}</h4>
              <ul className="intro-token-list">
                {t('introduction.tokenization.airspace.painPoints.items').map((item, index) => (
                  <li key={index}>
                    <img src={require("../images/Introduction/error-icon.png")} alt="" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="intro-token-subtitle">{t('introduction.tokenization.airspace.solution.title')}</h4>
              <p className="intro-token-desc">
                {t('introduction.tokenization.airspace.solution.desc')}
              </p>
            </div>

            {/* 右侧：无人机资产通证化 */}
            <div className="intro-token-right">
              <div className="intro-token-tag intro-token-tag--purple">{t('introduction.tokenization.drone.tag')}</div>

              <h3 className="intro-token-title">{t('introduction.tokenization.drone.title')}</h3>
              <p className="intro-token-desc">
                {t('introduction.tokenization.drone.desc')}
              </p>

              <h4 className="intro-token-subtitle">{t('introduction.tokenization.drone.modes.title')}</h4>
              
              <div className="intro-token-modes">
                <div className="intro-token-mode-item">
                  <div className="intro-token-mode-title">{t('introduction.tokenization.drone.modes.ownership.title')}</div>
                  <p className="intro-token-mode-desc">{t('introduction.tokenization.drone.modes.ownership.desc')}</p>
                </div>

                <div className="intro-token-mode-item">
                  <div className="intro-token-mode-title">{t('introduction.tokenization.drone.modes.revenue.title')}</div>
                  <p className="intro-token-mode-desc">{t('introduction.tokenization.drone.modes.revenue.desc')}</p>
                </div>

                <div className="intro-token-mode-item">
                  <div className="intro-token-mode-title">{t('introduction.tokenization.drone.modes.usage.title')}</div>
                  <p className="intro-token-mode-desc">{t('introduction.tokenization.drone.modes.usage.desc')}</p>
                </div>

                <div className="intro-token-mode-item">
                  <div className="intro-token-mode-title">{t('introduction.tokenization.drone.modes.comprehensive.title')}</div>
                  <p className="intro-token-mode-desc">{t('introduction.tokenization.drone.modes.comprehensive.desc')}</p>
                </div>
              </div>

              {/* 普惠金融实践高亮框 */}
            
            </div>
            
          </div>
            <div className="intro-token-highlight">
                <img src={require("../images/Introduction/location-icon.png")} alt="" />
                <div className="intro-token-highlight-content">
                  <div className="intro-token-highlight-title">{t('introduction.tokenization.drone.highlight.title')}</div>
                  <p className="intro-token-highlight-desc">{t('introduction.tokenization.drone.highlight.desc')}</p>
                </div>
              </div>
        </div>
      </section>

      {/* 案例展示 Section - 完全按照设计图 */}
      <section className="intro-cases-section">
        <div className="intro-container">
          {/* 居中标题和副标题 */}
          <h2 className="intro-section-title-center">{t('introduction.cases.title')}</h2>
          <p className="intro-section-subtitle-center">
            {t('introduction.cases.subtitle')}
          </p>

          {/* 案例1：新加坡SKY Elf项目（左文字右图） */}
          <div className="intro-case-item">
            <div className="intro-case-content">
              <div className="intro-case-tag intro-case-tag--blue">{t('introduction.cases.skyElf.tag')}</div>
              <h3 className="intro-case-title">{t('introduction.cases.skyElf.title')}</h3>
              
              <h4 className="intro-case-subtitle">{t('introduction.cases.skyElf.background.title')}</h4>
              <p className="intro-case-desc">
                {t('introduction.cases.skyElf.background.desc')}
              </p>

              <h4 className="intro-case-subtitle">{t('introduction.cases.skyElf.solution.title')}</h4>
              <ul className="intro-case-list">
                {t('introduction.cases.skyElf.solution.items').map((item, index) => (
                  <li key={index}>
                    <img src={require("../images/Introduction/check.png")} alt="" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="intro-case-subtitle">{t('introduction.cases.skyElf.results.title')}</h4>
              <div className="intro-case-results">
                <div className="intro-case-result">
                  <div className="intro-result-value">400km²</div>
                  <div className="intro-result-label">{t('introduction.cases.skyElf.results.airspace')}</div>
                </div>
                <div className="intro-case-result">
                  <div className="intro-result-value">82%</div>
                  <div className="intro-result-label">{t('introduction.cases.skyElf.results.utilization')}</div>
                </div>
                <div className="intro-case-result">
                  <div className="intro-result-value">7天</div>
                  <div className="intro-result-label">{t('introduction.cases.skyElf.results.cycle')}</div>
                </div>
              </div>
            </div>
            
            <div className="intro-case-image">
              <img src={require("../images/Introduction/drone-case.png")} alt="SKY Elf Project" />
            </div>
          </div>

          {/* 案例2：CT-CHAIN项目（左文字右图） */}
          <div className="intro-case-item">
            
            <div className="intro-case-image">
              <img src={require("../images/Introduction/bitcoin-case.png")} alt="CT-CHAIN Project" />
            </div>
            <div className="intro-case-content">
              <div className="intro-case-tag intro-case-tag--green">{t('introduction.cases.ctChain.tag')}</div>
              <h3 className="intro-case-title">{t('introduction.cases.ctChain.title')}</h3>
              
              <h4 className="intro-case-subtitle">{t('introduction.cases.ctChain.background.title')}</h4>
              <p className="intro-case-desc">
                {t('introduction.cases.ctChain.background.desc')}
              </p>

              <h4 className="intro-case-subtitle">{t('introduction.cases.ctChain.solution.title')}</h4>
              <ul className="intro-case-list">
                {t('introduction.cases.ctChain.solution.items').map((item, index) => (
                  <li key={index}>
                    <img src={require("../images/Introduction/check-circle-icon.png")} alt="" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="intro-case-subtitle">{t('introduction.cases.ctChain.results.title')}</h4>
              <div className="intro-case-results">
                <div className="intro-case-result">
                  <div className="intro-result-value intro-result-value--green">40%</div>
                  <div className="intro-result-label">{t('introduction.cases.ctChain.results.penetration')}</div>
                </div>
                <div className="intro-case-result">
                  <div className="intro-result-value intro-result-value--green">+35%</div>
                  <div className="intro-result-label">{t('introduction.cases.ctChain.results.efficiency')}</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 从链式分工到DAO生态共生 Section - 完全按照设计图 */}
      <section className="intro-dao-ecosystem-section">
        <div className="intro-container">
          {/* 顶部：居中标题和描述 */}
          <h2 className="intro-dao-main-title">{t('introduction.dao.title')}</h2>
          <p className="intro-dao-main-subtitle">
            {t('introduction.dao.subtitle')}
          </p>

          {/* 左右布局：左侧传统协作局限，右侧Web3生态共生机制 */}
          <div className="intro-dao-content-layout">
            {/* 左侧：传统协作局限 */}
            <div className="intro-dao-limitations-section">
              <h3 className="intro-dao-limitations-title">{t('introduction.dao.limitations.title')}</h3>
              
              <div className="intro-dao-limitations-list">
                {/* 信息不对称 */}
                <div className="intro-dao-limitation-item">
                  <div className="intro-dao-limitation-icon">
                    <img src={require("../images/Introduction/warning-red-icon.png")} alt="Warning" />
                  </div>
                  <div className="intro-dao-limitation-content">
                    <h4 className="intro-dao-limitation-title">{t('introduction.dao.limitations.infoAsymmetry.title')}</h4>
                    <p className="intro-dao-limitation-desc">
                      {t('introduction.dao.limitations.infoAsymmetry.desc')}
                    </p>
                  </div>
                </div>

                {/* 信任成本高 */}
                <div className="intro-dao-limitation-item">
                  <div className="intro-dao-limitation-icon">
                    <img src={require("../images/Introduction/warning-red-icon.png")} alt="Warning" />
                  </div>
                  <div className="intro-dao-limitation-content">
                    <h4 className="intro-dao-limitation-title">{t('introduction.dao.limitations.trustCost.title')}</h4>
                    <p className="intro-dao-limitation-desc">
                      {t('introduction.dao.limitations.trustCost.desc')}
                    </p>
                  </div>
                </div>

                {/* 资源整合难 */}
                <div className="intro-dao-limitation-item">
                  <div className="intro-dao-limitation-icon">
                    <img src={require("../images/Introduction/warning-red-icon.png")} alt="Warning" />
                  </div>
                  <div className="intro-dao-limitation-content">
                    <h4 className="intro-dao-limitation-title">{t('introduction.dao.limitations.resourceIntegration.title')}</h4>
                    <p className="intro-dao-limitation-desc">
                      {t('introduction.dao.limitations.resourceIntegration.desc')}
                    </p>
                  </div>
                </div>

                {/* 创新动力不足 */}
                <div className="intro-dao-limitation-item">
                  <div className="intro-dao-limitation-icon">
                    <img src={require("../images/Introduction/warning-red-icon.png")} alt="Warning" />
                  </div>
                  <div className="intro-dao-limitation-content">
                    <h4 className="intro-dao-limitation-title">{t('introduction.dao.limitations.innovation.title')}</h4>
                    <p className="intro-dao-limitation-desc">
                      {t('introduction.dao.limitations.innovation.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：Web3生态共生机制 */}
            <div className="intro-dao-mechanism-section">
              <h3 className="intro-dao-mechanism-title">{t('introduction.dao.mechanism.title')}</h3>
              <p className="intro-dao-mechanism-desc">
                {t('introduction.dao.mechanism.desc')}
              </p>

              {/* 三个机制卡片 */}
              <div className="intro-dao-mechanism-cards">
                {/* 可信数据共享 */}
                <div className="intro-dao-mechanism-card">
                  <div className="intro-dao-mechanism-card-top">
                    <div className="intro-dao-mechanism-icon intro-dao-mechanism-icon--blue">
                      <img src={require("../images/Introduction/limit-icon-2.png")} alt="Data Sharing" />
                    </div>
                    <h4 className="intro-dao-mechanism-card-title">{t('introduction.dao.mechanism.dataSharing.title')}</h4>
                  </div>
                  <p className="intro-dao-mechanism-card-desc">
                    {t('introduction.dao.mechanism.dataSharing.desc')}
                  </p>
                </div>

                {/* Token激励机制 */}
                <div className="intro-dao-mechanism-card">
                  <div className="intro-dao-mechanism-card-top">
                    <div className="intro-dao-mechanism-icon intro-dao-mechanism-icon--purple">
                      <img src={require("../images/Introduction/ecosystem-icon-3.png")} alt="Token" />
                    </div>
                    <h4 className="intro-dao-mechanism-card-title">{t('introduction.dao.mechanism.tokenIncentive.title')}</h4>
                  </div>
                  <p className="intro-dao-mechanism-card-desc">
                    {t('introduction.dao.mechanism.tokenIncentive.desc')}
                  </p>
                </div>

                {/* 高效资源整合 */}
                <div className="intro-dao-mechanism-card">
                  <div className="intro-dao-mechanism-card-top">
                    <div className="intro-dao-mechanism-icon intro-dao-mechanism-icon--green">
                      <img src={require("../images/Introduction/ecosystem-icon-1.png")} alt="Resource Integration" />
                    </div>
                    <h4 className="intro-dao-mechanism-card-title">{t('introduction.dao.mechanism.resourceIntegration.title')}</h4>
                  </div>
                  <p className="intro-dao-mechanism-card-desc">
                    {t('introduction.dao.mechanism.resourceIntegration.desc')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 加入DKB-A生态 Section - 完全按照设计图 */}
      <section className="intro-join-section">
        <div className="intro-container">
          {/* 顶部：居中标题和副标题 */}
          <h2 className="intro-join-main-title">{t('introduction.join.title')}</h2>
          <p className="intro-join-main-subtitle">
            {t('introduction.join.subtitle')}
          </p>

          {/* 左右布局：左侧合作方向，右侧表单 */}
          <div className="intro-join-content-layout">
            {/* 左侧：合作方向 */}
            <div className="intro-join-cooperation-section">
              <h3 className="intro-join-cooperation-title">{t('introduction.join.cooperation.title')}</h3>
              
              <div className="intro-join-cooperation-cards">
                {/* 去中心化空中交通管理 */}
                <div className="intro-join-cooperation-card">
                  <div className="intro-join-cooperation-icon">
                    <img src={require("../images/Introduction/plane-icon.png")} alt="Location" />
                  </div>
                  <div className="intro-join-cooperation-content">
                    <h4 className="intro-join-cooperation-card-title">{t('introduction.join.cooperation.traffic.title')}</h4>
                    <p className="intro-join-cooperation-card-desc">
                      {t('introduction.join.cooperation.traffic.desc')}
                    </p>
                  </div>
                </div>

                {/* 实物资产通证化 */}
                <div className="intro-join-cooperation-card">
                  <div className="intro-join-cooperation-icon">
                    <img src={require("../images/Introduction/cooperation-icon.png")} alt="Asset" />
                  </div>
                  <div className="intro-join-cooperation-content">
                    <h4 className="intro-join-cooperation-card-title">{t('introduction.join.cooperation.asset.title')}</h4>
                    <p className="intro-join-cooperation-card-desc">
                      {t('introduction.join.cooperation.asset.desc')}
                    </p>
                  </div>
                </div>

                {/* 共建RWA实验区 */}
                <div className="intro-join-cooperation-card">
                  <div className="intro-join-cooperation-icon">
                    <img src={require("../images/Introduction/lab-icon.png")} alt="Lab" />
                  </div>
                  <div className="intro-join-cooperation-content">
                    <h4 className="intro-join-cooperation-card-title">{t('introduction.join.cooperation.lab.title')}</h4>
                    <p className="intro-join-cooperation-card-desc">
                      {t('introduction.join.cooperation.lab.desc')}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：加入生态表单 */}
            <div className="intro-join-form-section">
              <div className="intro-join-form-container">
                <h3 className="intro-join-form-title">{t('introduction.join.form.title')}</h3>
                <p className="intro-join-form-subtitle">
                  {t('introduction.join.form.subtitle')}
                </p>

                <form onSubmit={handleSubmit} className="intro-join-form">
                  <div className="intro-join-form-group">
                    <label className="intro-join-form-label">{t('introduction.join.form.name')}</label>
                    <input
                      type="text"
                      name="name"
                      className="intro-join-form-input"
                      placeholder={t('introduction.join.form.placeholders.name')}
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="intro-join-form-group">
                    <label className="intro-join-form-label">{t('introduction.join.form.email')}</label>
                    <input
                      type="email"
                      name="phone"
                      className="intro-join-form-input"
                      placeholder={t('introduction.join.form.placeholders.email')}
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="intro-join-form-group">
                    <label className="intro-join-form-label">{t('introduction.join.form.organization')}</label>
                    <input
                      type="text"
                      name="organization"
                      className="intro-join-form-input"
                      placeholder={t('introduction.join.form.placeholders.organization')}
                      value={formData.organization}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="intro-join-form-group">
                    <label className="intro-join-form-label">{t('introduction.join.form.intention')}</label>
                    <textarea
                      name="intention"
                      className="intro-join-form-textarea"
                      placeholder={t('introduction.join.form.placeholders.intention')}
                      value={formData.intention}
                      onChange={handleInputChange}
                      rows="4"
                    ></textarea>
                  </div>

                  <div className="intro-join-form-group">
                    <label className="intro-join-form-label">{t('introduction.join.form.wallet')}</label>
                    <input
                      type="text"
                      name="email"
                      className="intro-join-form-input"
                      placeholder={t('introduction.join.form.placeholders.wallet')}
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <button type="submit" className="intro-join-form-submit">
                    {t('introduction.join.form.submit')}
                  </button>
                </form>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 加入社区 Section - 完全按照设计图 */}
      <section className="intro-community-section">
        <div className="intro-container">
          {/* 顶部：居中标题和副标题 */}
          <h2 className="intro-community-main-title">{t('introduction.community.title')}</h2>
          <div className="intro-community-title-underline"></div>
          <p className="intro-community-main-subtitle">
            {t('introduction.community.subtitle')}
          </p>

          {/* 三个联系卡片 */}
          <div className="intro-community-cards">
            {/* 官方邮箱 */}
            <div className="intro-community-card">
              <div className="intro-community-icon-wrapper">
                <div className="intro-community-icon-circle">
                  <img src={require("../images/Introduction/email-icon.png")} alt="Email" className="intro-community-icon" />
                </div>
              </div>
              <h3 className="intro-community-card-title">{t('introduction.community.email.title')}</h3>
              <p className="intro-community-card-desc">{t('introduction.community.email.desc')}</p>
              <a href="mailto:dkbbot157@gmail.com" className="intro-community-card-link">
                dkbbot157@gmail.com
              </a>
            </div>

            {/* 官方推特 */}
            <div className="intro-community-card">
              <div className="intro-community-icon-wrapper">
                <div className="intro-community-icon-circle">
                  <img src={require("../images/Introduction/twitter-icon.png")} alt="Twitter" className="intro-community-icon" />
                </div>
              </div>
              <h3 className="intro-community-card-title">{t('introduction.community.twitter.title')}</h3>
              <p className="intro-community-card-desc">{t('introduction.community.twitter.desc')}</p>
              <a href="https://twitter.com/BotDkb" target="_blank" rel="noopener noreferrer" className="intro-community-card-link">
                @BotDkb
              </a>
            </div>

            {/* 社区中心 */}
            <div className="intro-community-card">
              <div className="intro-community-icon-wrapper">
                <div className="intro-community-icon-circle">
                  <img src={require("../images/Introduction/community-location-icon.png")} alt="Location" className="intro-community-icon" />
                </div>
              </div>
              <h3 className="intro-community-card-title">{t('introduction.community.center.title')}</h3>
              <p className="intro-community-card-desc">{t('introduction.community.center.desc')}</p>
              <div className="intro-community-card-address">
                <p>BLOCK71 Singapore</p>
                <p>71 Ayer Rajah Crescent,</p>
                <p>#02-01, Singapore 139951</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Introduction;
