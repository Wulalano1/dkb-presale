import React, { useState } from 'react';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import { useRouter } from '../router/Router';
import './Introduction.css';

// 导入图片资源
import heroImage from '../images/Introduction/image@2x.png';
import logoImage from '../images/Introduction/Logo@2x.png';
import droneImage from '../images/Introduction/矩形 35@2x(2).png';
import bitcoinImage from '../images/Introduction/矩形 35@2x(3).png';
import planeIcon from '../images/Introduction/容器@2x.png';
import planeIcon2 from '../images/Introduction/容器@2x(1).png';
import coinVisual from '../images/Introduction/容器@2x(2).png';
import locationIcon from '../images/Introduction/容器 383@2x.png';
import warningIcon from '../images/Introduction/容器 384@2x.png';
import checkIcon from '../images/Introduction/容器@2x(12).png';
import errorIcon from '../images/Introduction/容器@2x(15).png';
import checkCircleIcon from '../images/Introduction/容器@2x(16).png';
import checkGreenIcon from '../images/Introduction/容器@2x(19).png';

// 核心优势图标
import advantage1 from '../images/Introduction/容器 383@2x(1).png';
import advantage2 from '../images/Introduction/容器 383@2x(2).png';
import advantage3 from '../images/Introduction/容器 383@2x(3).png';
import advantage4 from '../images/Introduction/容器 383@2x(4).png';

// 飞行器主图
import mainDroneImage from '../images/Introduction/矩形 35@2x.png';
import reconstructionDrone from '../images/Introduction/矩形 35@2x(1).png';

// 核心优势图标 - 第二个模块
import coreAdvantage1 from '../images/Introduction/容器 384@2x(4).png';
import coreAdvantage2 from '../images/Introduction/容器 384@2x(5).png';
import coreAdvantage3 from '../images/Introduction/容器 384@2x(6).png';
import coreAdvantage4 from '../images/Introduction/容器 384@2x(3).png';

// Web3可信底座模块图标 - 第三个模块
import blockchainIcon from '../images/Introduction/容器 383@2x(6).png';
import smartContractIcon from '../images/Introduction/容器 383@2x(7).png';
import daoIcon from '../images/Introduction/容器 383@2x(8).png';
import lightningIcon from '../images/Introduction/容器 383@2x(9).png';
import shieldIcon from '../images/Introduction/容器 383@2x(10).png';
import checkMarkIcon from '../images/Introduction/容器@2x(19).png';

// DAO生态共生模块图标 - 第四个模块
import warningIconRed from '../images/Introduction/容器@2x(15).png';
import limitIcon1 from '../images/Introduction/容器 384@2x.png';
import limitIcon2 from '../images/Introduction/容器 384@2x(1).png';
import limitIcon3 from '../images/Introduction/容器 384@2x(2).png';
import ecosystemIcon1 from '../images/Introduction/容器 383@2x(12).png';
import ecosystemIcon2 from '../images/Introduction/容器 383@2x(13).png';
import ecosystemIcon3 from '../images/Introduction/容器 383@2x(14).png';

// 加入社区模块图标
import emailIcon from '../images/Introduction/容器 383@2x(15).png';
import twitterIcon from '../images/Introduction/容器 383@2x(16).png';
import communityLocationIcon from '../images/Introduction/容器 383@2x(17).png';

function Introduction() {
  const { navigate } = useRouter();
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
    // 这里可以添加实际的提交逻辑
  };

  return (
    <div className="introduction-page">
      <MainHeader />
      
      {/* Hero Section - 第一个模块 */}
      <section className="intro-hero-section">
        <div className="intro-hero-container">
          {/* 左侧：文字内容 */}
          <div className="intro-hero-left">
            <h1 className="hero-brand-title">
              DKB-A
              <span className="hero-brand-line"></span>
            </h1>
            <h2 className="hero-main-heading">
              RWA驱动低空经济<br />新型生产关系
            </h2>
            <p className="hero-description">
              去中心化流通，透明化监盟，并赋给空经济价值互联网时<br />
              代，通过区块链赋赋和区块链资产分配机制
            </p>

            {/* 数据统计 */}
            <div className="intro-hero-stats-row">
              <div className="stat-box">
                <div className="stat-value-text">300%</div>
                <div className="stat-desc-text">资产空间化提升</div>
              </div>
              <div className="stat-box">
                <div className="stat-value-text">50%</div>
                <div className="stat-desc-text">资产空间化提升</div>
              </div>
              <div className="stat-box">
                <div className="stat-value-text">90%</div>
                <div className="stat-desc-text">资产空间化提升</div>
              </div>
              <div className="stat-box">
                <div className="stat-value-text">7天</div>
                <div className="stat-desc-text">资产空间化提升</div>
              </div>
            </div>
          </div>

          {/* 右侧：3D可视化图形 */}
          <div className="intro-hero-right">
            <div className="hero-3d-card">
              <div className="card-badge">
                <img src={checkMarkIcon} alt="" className="badge-icon" />
                <span>已验证</span>
                <span className="badge-number">1,584,329</span>
              </div>
              <div className="visual-3d-wrapper">
                <img src={heroImage} alt="DKB 3D Visualization" className="visual-3d-img" />
              </div>
              <div className="card-badge card-badge--bottom">
                <img src={checkMarkIcon} alt="" className="badge-icon" />
                <span>节点数量</span>
                <span className="badge-number">1,200+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 重构低空经济生产关系 Section - 第二个模块 */}
      <section className="intro-reconstruction-section">
        <div className="intro-container">
            <h2 className="reconstruction-main-title">重构低空经济生产关系</h2>
              <p className="reconstruction-subtitle">
                DKB-A通过区块链技术打破传统行业壁垒，构建去中心化智能经济网络，推动低空经济从封闭运营模式进入数字化与资产化的全新发展阶段
              </p>
          <div className="reconstruction-content">
            {/* 左侧：飞行器大图 */}
            <div className="reconstruction-left">
              <div className="reconstruction-image-wrapper">
                <img 
                  src={reconstructionDrone} 
                  alt="Low Altitude Economy Aircraft" 
                  className="reconstruction-drone" 
                />
              </div>
            </div>

            {/* 右侧：内容 */}
            <div className="reconstruction-right">
            

              {/* 协议定位 */}
              <h3 className="reconstruction-section-title">协议定位</h3>
              <p className="reconstruction-description">
                DKB-A是全球首个专注于低空经济的去中心化RWA协议，旨在通过区块链技术将无人机、
                飞行器等实物资产转化为可交易的数字通证，降低行业准入门槛并提升资产的流动性与透明度。
                借助智能合约实现高效的价值分配，打造一个全球化的飞行网络运营和投资平台（DWW
                上海），通过经济通证和治理机制赋权持币者，推动低空经济的全面落地和发展
              </p>

              {/* 核心优势 */}
              <h3 className="reconstruction-section-title">核心优势</h3>
              <div className="advantages-list">
                <div className="advantage-item">
                  <div className="advantage-icon">
                    <img src={coreAdvantage1} alt="Asset Tokenization" />
                  </div>
                  <div className="advantage-content">
                    <h4>资产通证化</h4>
                    <p>将实物资产转化为链上通证，实现资产数字化，降低投资门槛，促进流动性和普惠金融</p>
                  </div>
                </div>

                <div className="advantage-item">
                  <div className="advantage-icon">
                    <img src={coreAdvantage2} alt="RWA Exchange" />
                  </div>
                  <div className="advantage-content">
                    <h4>RWA交易</h4>
                    <p>打造全球化的通证交易市场，链接真实世界资产和数字资产，实现高效的价值流动和配置</p>
                  </div>
                </div>

                <div className="advantage-item">
                  <div className="advantage-icon">
                    <img src={coreAdvantage3} alt="Smart Contract" />
                  </div>
                  <div className="advantage-content">
                    <h4>算法合约</h4>
                    <p>基于智能合约定义资产规则和权益分配，确保透明化和自动化执行，降低信任成本</p>
                  </div>
                </div>

                <div className="advantage-item">
                  <div className="advantage-icon">
                    <img src={coreAdvantage4} alt="Decentralized Pool" />
                  </div>
                  <div className="advantage-content">
                    <h4>去中心化资金池</h4>
                    <p>通过去中心化金融池实现资金的高效管理和配置，支持质押激励和流动性挖矿机制</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Web3驱动的可信底座 Section - 第三个模块 */}
      <section className="intro-web3-foundation-section">
        <div className="intro-container">
          <h2 className="section-title section-title--dark">Web3驱动的可信底座</h2>
          <div className="section-title-underline section-title-underline--center"></div>
          <p className="section-subtitle section-subtitle--dark">
            采用区块链技术+智能合约+DAO治理=底层信任，打造全链条RWA技术引擎
          </p>

          {/* 三个核心卡片 */}
          <div className="web3-cards-container">
            {/* 区块链基础设施 */}
            <div className="web3-card">
              <div className="web3-card-badge">核心技术</div>
              <div className="web3-card-icon-wrapper">
                <img src={blockchainIcon} alt="Blockchain" className="web3-card-icon" />
              </div>
              <h3 className="web3-card-title">区块链基础设施</h3>
              <p className="web3-card-description">
                采用改进版，可容纳大规模并发业务的超级账本，确保数据透明的同时，对底层数据库进行权限化管理。
              </p>
              <ul className="web3-feature-list">
                <li>
                  <img src={checkMarkIcon} alt="Check" className="feature-check-icon" />
                  <span>采用新型共识机制</span>
                </li>
                <li>
                  <img src={checkMarkIcon} alt="Check" className="feature-check-icon" />
                  <span>全球数据交叉验证机制</span>
                </li>
                <li>
                  <img src={checkMarkIcon} alt="Check" className="feature-check-icon" />
                  <span>防篡改加密账本基础</span>
                </li>
              </ul>
            </div>

            {/* 智能合约 */}
            <div className="web3-card">
              <div className="web3-card-icon-wrapper">
                <img src={smartContractIcon} alt="Smart Contract" className="web3-card-icon" />
              </div>
              <h3 className="web3-card-title">智能合约</h3>
              <p className="web3-card-description">
                自定义流程协议，合规资质，资源管理等规则，准确无差错地执行合约条款，规则不再受人为干扰，超节点多党签署保障。
              </p>
              <ul className="web3-feature-list">
                <li>
                  <img src={checkMarkIcon} alt="Check" className="feature-check-icon" />
                  <span>自动化股权分账机制</span>
                </li>
                <li>
                  <img src={checkMarkIcon} alt="Check" className="feature-check-icon" />
                  <span>定时条件触发机制</span>
                </li>
                <li>
                  <img src={checkMarkIcon} alt="Check" className="feature-check-icon" />
                  <span>完备中介约执行体系</span>
                </li>
              </ul>
            </div>

            {/* DAO治理 */}
            <div className="web3-card">
              <div className="web3-card-icon-wrapper">
                <img src={daoIcon} alt="DAO" className="web3-card-icon" />
              </div>
              <h3 className="web3-card-title">DAO治理</h3>
              <p className="web3-card-description">
                让企业与全球利益相关者，共同参与治理规则，实施全球集体决策行权，赋能大众协作的生态共同体。
              </p>
              <ul className="web3-feature-list">
                <li>
                  <img src={checkMarkIcon} alt="Check" className="feature-check-icon" />
                  <span>分布式集权机制</span>
                </li>
                <li>
                  <img src={checkMarkIcon} alt="Check" className="feature-check-icon" />
                  <span>透明度高的问责化</span>
                </li>
                <li>
                  <img src={checkMarkIcon} alt="Check" className="feature-check-icon" />
                  <span>提供化的立即工具</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 核心技术突破 */}
          <div className="tech-breakthrough-section">
            <h3 className="tech-breakthrough-title">核心技术突破</h3>
            <div className="tech-breakthrough-cards">
              {/* 高性能交易处理 */}
              <div className="tech-breakthrough-card">
                <div className="tech-breakthrough-icon-wrapper">
                  <img src={lightningIcon} alt="Lightning" className="tech-breakthrough-icon" />
                </div>
                <div className="tech-breakthrough-content">
                  <h4 className="tech-breakthrough-card-title">高性能交易处理</h4>
                  <p className="tech-breakthrough-card-description">
                    基于改进Rollup技术体系进行千万级TPS处理量整体实验改良，持续演进使大规模商业高效率流转成为可能，而非大规模账本参数堆砌。
                  </p>
                </div>
              </div>

              {/* 链上合规体系 */}
              <div className="tech-breakthrough-card">
                <div className="tech-breakthrough-icon-wrapper tech-breakthrough-icon-wrapper--green">
                  <img src={shieldIcon} alt="Shield" className="tech-breakthrough-icon" />
                </div>
                <div className="tech-breakthrough-content">
                  <h4 className="tech-breakthrough-card-title">链上合规体系</h4>
                  <p className="tech-breakthrough-card-description">
                    结合完整上KYC/AML流程，对接全球金融监管网络，透视全资质类型服务，促进与监管当局双向交流，为现实业务赋能安全与合规可能性信赖保护机制。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 资产通证化革新 Section */}
      <section className="intro-tokenization-section">
        <div className="intro-container">
          <h2 className="section-title">资产通证化革新</h2>
          <div className="section-title-underline"></div>
          <p className="section-subtitle">
            通过创新的通证化方案，解决低空经济领域的资产流动性与资源配置问题
          </p>

          <div className="tokenization-content">
            {/* 左侧内容 */}
            <div className="tokenization-left">
              <div className="token-tag">空域资源通证化</div>
              
              <h3 className="token-section-title">从独占至共享共治</h3>
              <p className="token-description">
                打破传统空域分配不均，利用率低的痛点，通过通证化释放闲置空域价值，降低中小
                企业空域使用门槛，实现航线定价的民主化。
              </p>

              <h4 className="token-subtitle">传统痛点</h4>
              <ul className="token-list token-list--error">
                <li>
                  <img src={errorIcon} alt="" className="list-icon" />
                  <span>空域资源分配不均，大型企业垄断严重</span>
                </li>
                <li>
                  <img src={errorIcon} alt="" className="list-icon" />
                  <span>交易成本高，中小企业参与门槛高</span>
                </li>
                <li>
                  <img src={errorIcon} alt="" className="list-icon" />
                  <span>空域利用率低，资源浪费严重</span>
                </li>
              </ul>

              <h4 className="token-subtitle">Web3解决方案</h4>
              <p className="token-description">
                通过区块链技术将空域分配的使用权、收益权等权益转化为NFT通证，实现空域资源的透明化
                配置。先对空域资源做预测、利用定价机制促进权益流转，再设计智能合约定义
                义通证规则，最后发行并通过DAO治理机制实现社区共管。
              </p>
            </div>

            {/* 右侧内容 */}
            <div className="tokenization-right">
              <div className="token-tag token-tag--right">无人机资产通证化</div>

              <h3 className="token-section-title token-section-title--right">
                从资本独占至多元共富
              </h3>
              <p className="token-description">
                创新所有权/收益权/使用权/综合权益四大通证化方案，适应不同需求，借助智能合约化生
                飞机、投资者、维保公司权利关系，让普通民众众也能参与低空经济红利。
              </p>

              <h4 className="token-subtitle">通证化模式</h4>
              
              <div className="token-mode">
                <div className="token-mode-title">所有权通证化</div>
                <p>投资者购买NFT成为无人机共同所有者，按比例分得各有者，按比例获益收益</p>
              </div>

              <div className="token-mode">
                <div className="token-mode-title">收益权通证化</div>
                <p>不改变所有权，投资者购买收益类NFT获得来自运营收益分配权</p>
              </div>

              <div className="token-mode">
                <div className="token-mode-title">使用权通证化</div>
                <p>将无人机使用时间分时为NFT通证，用户购买代币获取时间段使用权</p>
              </div>

              <div className="token-mode">
                <div className="token-mode-title">综合权益通证化</div>
                <p>整合各类权益，提供灵活的投资和使用场景</p>
              </div>

              <div className="token-highlight">
                <img src={locationIcon} alt="" className="highlight-icon" />
                <div>
                  <div className="highlight-title">普惠金融实践</div>
                  <p>将无人机资产通证化，降低投资门槛，让普通民众也能参与低空经济投资，共享产业发展红利。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 案例展示 Section */}
      <section className="intro-cases-section">
        <div className="intro-container">
          <h2 className="section-title section-title--light">案例展示</h2>
          <p className="section-subtitle section-subtitle--light">
            DKB-A在全球范围内的成功应用，为低空经济Web3化转型提供实践范例
          </p>

          {/* 案例 1 */}
          <div className="case-item">
            <div className="case-content">
              <div className="case-tag">空域资源通证化</div>
              <h3 className="case-title">新加坡avetics "SKY Elf（SE）"项目</h3>
              
              <h4 className="case-section-title">项目背景</h4>
              <p className="case-description">
                新加坡空域资源紧张导致航线审批慢，存在中小企业参与门槛高（仅38%）。
                产业链协作不畅等问题，亟需通过Web3技术简化流程。
              </p>

              <h4 className="case-section-title">项目方案</h4>
              <ul className="case-list">
                <li>
                  <img src={checkCircleIcon} alt="" className="list-icon" />
                  <span>发行"SKY Elf（SE）"通证，总量30亿枚（单价不超盘），始发价格0.13USDT</span>
                </li>
                <li>
                  <img src={checkCircleIcon} alt="" className="list-icon" />
                  <span>通证链接无人机销售数据、交换资收、物流服务并奖励资产评价值</span>
                </li>
                <li>
                  <img src={checkCircleIcon} alt="" className="list-icon" />
                  <span>基于ETH专属子链实现高并发交易，结合联盟链守护基础架构使用情况</span>
                </li>
              </ul>

              <h4 className="case-section-title">项目成果</h4>
              <div className="case-results">
                <div className="case-result-item">
                  <div className="result-value">400km²</div>
                  <div className="result-label">释放专享空域</div>
                </div>
                <div className="case-result-item">
                  <div className="result-value">82%</div>
                  <div className="result-label">空域利用率</div>
                </div>
                <div className="case-result-item">
                  <div className="result-value">7天</div>
                  <div className="result-label">流程周期</div>
                </div>
              </div>
            </div>
            <div className="case-image">
              <img src={droneImage} alt="SKY Elf Project" />
            </div>
          </div>

          {/* 案例 2 */}
          <div className="case-item case-item--reverse">
            <div className="case-image">
              <img src={bitcoinImage} alt="CT-CHAIN Project" />
            </div>
            <div className="case-content">
              <div className="case-tag case-tag--green">生态系统建设</div>
              <h3 className="case-title">产通链CT-CHAIN低空经济RWA生态系统</h3>
              
              <h4 className="case-section-title">项目背景</h4>
              <p className="case-description">
                传统低空经济业务仅以巨头为主导，存在信息不对称、信任度不高、资源整合难等问
                题，需借助Web3激发协作的生态体系打破壁垒能壁。
              </p>

              <h4 className="case-section-title">项目方案</h4>
              <ul className="case-list">
                <li>
                  <img src={checkGreenIcon} alt="" className="list-icon" />
                  <span>采用"主链-侧链集-流通链"分层架构，确保资产真实可信息高效流转</span>
                </li>
                <li>
                  <img src={checkGreenIcon} alt="" className="list-icon" />
                  <span>建立多中心化协同治理机制，支持多参数产主旨，对接多河谷协同网络</span>
                </li>
                <li>
                  <img src={checkGreenIcon} alt="" className="list-icon" />
                  <span>通过跨空院跨技术大突破，支持千万TPS并显与多种区块链</span>
                </li>
              </ul>

              <h4 className="case-section-title">项目成果</h4>
              <div className="case-results">
                <div className="case-result-item">
                  <div className="result-value result-value--green">40%</div>
                  <div className="result-label">产业数字化渗透率</div>
                </div>
                <div className="case-result-item">
                  <div className="result-value result-value--green">+35%</div>
                  <div className="result-label">创新效率提升</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 从链式分工到DAO生态共生 Section - 第四个模块 */}
      <section className="intro-dao-ecosystem-section">
        <div className="intro-container">
          <h2 className="section-title section-title--dark">从链式分工到DAO生态共生</h2>
          <div className="section-title-underline section-title-underline--center"></div>
          <p className="section-subtitle section-subtitle--dark">
            构建去中心化协作网络，连接多方参与者赋权持币者达到依存的Web3生态共同体
          </p>

          <div className="dao-ecosystem-content">
            {/* 左侧：传统协作局限 */}
            <div className="dao-ecosystem-left">
              <h3 className="dao-section-title">传统协作局限</h3>
              
              <div className="limitation-item">
                <div className="limitation-icon">
                  <img src={limitIcon1} alt="Issue" />
                </div>
                <div className="limitation-content">
                  <h4 className="limitation-title">信息不对称</h4>
                  <p className="limitation-description">
                    产业链各环节参与者间信息不对等，导致协作障碍重重
                  </p>
                </div>
              </div>

              <div className="limitation-item">
                <div className="limitation-icon">
                  <img src={limitIcon2} alt="Issue" />
                </div>
                <div className="limitation-content">
                  <h4 className="limitation-title">信任成本高</h4>
                  <p className="limitation-description">
                    缺少企业级信用体系，每笔交易均需多方中介干预
                  </p>
                </div>
              </div>

              <div className="limitation-item">
                <div className="limitation-icon">
                  <img src={limitIcon3} alt="Issue" />
                </div>
                <div className="limitation-content">
                  <h4 className="limitation-title">资源整合难</h4>
                  <p className="limitation-description">
                    受限业界法规，难以形成协同化资源配置
                  </p>
                </div>
              </div>

              <div className="limitation-item">
                <div className="limitation-icon">
                  <img src={warningIconRed} alt="Issue" />
                </div>
                <div className="limitation-content">
                  <h4 className="limitation-title">创新动力不足</h4>
                  <p className="limitation-description">
                    利润分配不清晰与不能相互帮助是制约本身发展
                  </p>
                </div>
              </div>
            </div>

            {/* 右侧：Web3生态共生机制 */}
            <div className="dao-ecosystem-right">
              <h3 className="dao-section-title dao-section-title--right">Web3生态共生机制</h3>
              <p className="dao-section-description">
                依托区块链技术在产业中心化协同网络，连接制造商、投资者、技术服务商、政监机构，
                构成增进共识激励的DAO生态共同体。
              </p>

              {/* 可信数据共享 */}
              <div className="ecosystem-card">
                <div className="ecosystem-card-icon">
                  <img src={ecosystemIcon1} alt="Data Sharing" />
                </div>
                <div className="ecosystem-card-content">
                  <h4 className="ecosystem-card-title">可信数据共享</h4>
                  <p className="ecosystem-card-description">
                    利用区块链技术实现资质证书、交易数据等在各链间或节点间安全性，降低信息获取成本，
                    同时提供应有尚未获得的交易定价透明化。
                  </p>
                </div>
              </div>

              {/* Token激励机制 */}
              <div className="ecosystem-card ecosystem-card--purple">
                <div className="ecosystem-card-icon">
                  <img src={ecosystemIcon2} alt="Token" />
                </div>
                <div className="ecosystem-card-content">
                  <h4 className="ecosystem-card-title">Token激励机制</h4>
                  <p className="ecosystem-card-description">
                    参与者的行动贡献转化为可流通教学权证，用于激励贡献者价值，将多边流与智金生态体以互，
                    推进其利益之要求与愿信约体系。
                  </p>
                </div>
              </div>

              {/* 高效资源整合 */}
              <div className="ecosystem-card ecosystem-card--green">
                <div className="ecosystem-card-icon">
                  <img src={ecosystemIcon3} alt="Resource Integration" />
                </div>
                <div className="ecosystem-card-content">
                  <h4 className="ecosystem-card-title">高效资源整合</h4>
                  <p className="ecosystem-card-description">
                    建布盈重提整，全司空间，设施、释取机考等资源合作化底工具，连接大性主流实的由运行流程化用机带来年中。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 加入DKB-A生态 Section */}
      <section className="intro-join-section">
        <div className="intro-container">
          <h2 className="section-title section-title--center">加入DKB-A生态</h2>
          <p className="section-subtitle section-subtitle--center">
            与我们一起共建去中心化空中交通系统，共享低空经济Web3红利
          </p>

          <div className="join-content">
            {/* 左侧：合作方向 */}
            <div className="join-left">
              <h3 className="join-section-title">合作方向</h3>
              
              <div className="cooperation-card">
                <div className="cooperation-icon">
                  <img src={locationIcon} alt="Location" />
                </div>
                <div className="cooperation-content">
                  <h4>去中心化空中交通管理</h4>
                  <p>联合各地政府机关，通过通证化MAPP，实现民航与飞行权限上链，提升空域管理效率与安全性。</p>
                </div>
              </div>

              <div className="cooperation-card">
                <div className="cooperation-icon">
                  <img src={warningIcon} alt="Warning" />
                </div>
                <div className="cooperation-content">
                  <h4>实物资产通证化</h4>
                  <p>开展无人机、应急救、飞VTOL等实物资产的通证化交易平台，数据链各类资产价值，提升资产流动性。</p>
                </div>
              </div>

              <div className="cooperation-card">
                <div className="cooperation-icon">
                  <img src={planeIcon} alt="Plane" />
                </div>
                <div className="cooperation-content">
                  <h4>共建RWA实验区</h4>
                  <p>共链协定或获RWA实验区，共享生态红鹰与技术支持，探索低空经济Web3化转型的创新模式与场
                  景。</p>
                </div>
              </div>
            </div>

            {/* 右侧：表单 */}
            <div className="join-right">
              <div className="join-form-container">
                <h3 className="join-form-title">加入生态</h3>
                <p className="join-form-subtitle">
                  填写以下信息，我们将按此联接将保你取联密系，共同探讨Web3生态合作机会
                </p>

                <form onSubmit={handleSubmit} className="join-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label>姓名</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="请输入您的姓名"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>钱包地址</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="请输入您的钱包地址"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label>邮箱</label>
                    <input
                      type="email"
                      name="phone"
                      placeholder="请输入您的邮箱"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>组织/项目</label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="请输入组织或项目名称"
                      value={formData.organization}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>合作意向</label>
                    <textarea
                      name="intention"
                      placeholder="请简述您的合作意向"
                      value={formData.intention}
                      onChange={handleInputChange}
                      rows="4"
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-button">
                    提交申请
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* 加入社区 Section */}
          
        </div>
      </section>
      <div className="join-community-section">
            <h2 className="join-community-title">加入社区</h2>
            <p className="join-community-subtitle">
              加入DKB-A社区，获取最新动态，参与生态建设
            </p>

            <div className="community-cards-container">
              {/* 官方邮箱 */}
              <div className="community-card">
                <div className="community-card-icon-wrapper">
                  <img src={emailIcon} alt="Email" className="community-card-icon" />
                </div>
                <h3 className="community-card-title">官方邮箱</h3>
                <p className="community-card-description">发送邮件获得回复</p>
                <a href="mailto:dkbiot43@gmail.com" className="community-card-link">
                  dkbiot43@gmail.com
                </a>
              </div>

              {/* 官方推特 */}
              <div className="community-card">
                <div className="community-card-icon-wrapper">
                  <img src={twitterIcon} alt="Twitter" className="community-card-icon" />
                </div>
                <h3 className="community-card-title">官方推特</h3>
                <p className="community-card-description">关注我们获取最新消息</p>
                <a href="https://twitter.com/dkbio" target="_blank" rel="noopener noreferrer" className="community-card-link">
                  @dkbio
                </a>
              </div>

              {/* 社区中心 */}
              <div className="community-card">
                <div className="community-card-icon-wrapper">
                  <img src={communityLocationIcon} alt="Location" className="community-card-icon" />
                </div>
                <h3 className="community-card-title">社区中心</h3>
                <p className="community-card-description">自定义访问我们访问</p>
                <div className="community-card-address">
                  <p>BLOCK71 Singapore</p>
                  <p>/Layer8 Reliah Crescent,</p>
                  <p>#02-01, Singapore 139951</p>
                </div>
              </div>
            </div>
          </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Introduction;
