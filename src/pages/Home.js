import React from 'react';
import { Layout, Button, Card, Row, Col, Typography, Space } from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';
import MainHeader from '../components/MainHeader';
import Footer from '../components/Footer';
import { useRouter } from '../router/Router';
import './Home.css';

const { Content } = Layout;
const { Title, Text } = Typography;

function Home() {
  const { navigate } = useRouter();

  // 返佣比例数据
  const rebateData = [
    { level: '一代', ratio: '6%' },
    { level: '二代', ratio: '3%' },
    { level: '三代', ratio: '2%' },
  ];

  return (
    <Layout className="home-layout">
      <MainHeader theme="dark" />
      
      <Content className="home-content">
        {/* Hero Section */}
        <section className="home-hero-section">
          <div className="home-hero-background">
            <img 
              src={require('../images/home/tbg.png')} 
              alt="Hero Background" 
              className="home-hero-bg-image"
            />
          </div>
          <div className="home-hero-content">
            {/* Top Badge */}
            <div className="home-hero-badge">
              <div className="home-badge-icon">
                <div className="home-badge-icon-inner"></div>
              </div>
              <Text className="home-badge-text">基于BSC链的航空经济通证</Text>
            </div>
            
            <div className="home-hero-inner">
              {/* PC端标题 - 两行，第一行渐变 */}
              <div className="home-hero-title-pc">
                <div className="home-hero-title-line1">
                  <span className="home-hero-title-dkb">DKB</span>
                  <span className="home-hero-title-coin">低空币:</span>
                </div>
                <div className="home-hero-title-line2">
                  引领低空经济的数字生态先驱
                </div>
              </div>
              
              {/* 移动端标题 - 两行，第一行渐变 */}
              <div className="home-hero-title-mobile">
                <div className="home-hero-title-line1">
                  <span className="home-hero-title-dkb">DKB</span>
                  <span className="home-hero-title-coin">低空币:</span>
                </div>
                <div className="home-hero-title-line2">
                  引领低空经济的数字生态先驱
                </div>
              </div>
              
              <Text className="home-hero-subtitle">
                基于BSC链的去中心化通证,打造低空经济生态的"血液"与"润滑剂"
              </Text>
              
              {/* Feature Tags - Below buttons on PC, Above buttons on Mobile */}
              <div className="home-hero-features">
                <span className="home-feature-tag home-feature-tag-pc">链上原生资产</span>
                <span className="home-feature-tag home-feature-tag-pc">DAO社区治理</span>
                <span className="home-feature-tag home-feature-tag-pc">实体场景映射</span>
                <span className="home-feature-tag home-feature-tag-mobile">链上顶生资产</span>
                <span className="home-feature-tag home-feature-tag-mobile">DAO社区治理</span>
                <span className="home-feature-tag home-feature-tag-mobile">实体场景映射</span>
              </div>
              
             
              
              {/* 移动端按钮 */}
              <div className="home-hero-buttons home-hero-buttons-mobile">
                <Button 
                  type="primary" 
                  size="large" 
                  className="home-hero-btn-primary home-hero-btn-download"
                  onClick={() => navigate('/introduction')}
                >
                  <span className="home-btn-icon">⬇</span>
                  下载白皮书
                </Button>
                <Button 
                  size="large" 
                  className="home-hero-btn-secondary home-hero-btn-buy"
                  onClick={() => navigate('/presale')}
                >
                  <span className="home-btn-icon">🛒</span>
                  购买DKB
                </Button>
              </div>
              
              {/* PC端统计数据 */}
              <div className="home-hero-stats-container home-hero-stats-pc">
                <div className="home-hero-stats-labels-row">
                  <Text className="home-stat-label">总供应量</Text>
                  <Text className="home-stat-label">销毁比例</Text>
                  <Text className="home-stat-label">链上台约</Text>
                  <Text className="home-stat-label">共识机制</Text>
                </div>
                <div className="home-hero-stats-values-row">
                  <Text className="home-stat-value home-stat-value-white">10亿枚</Text>
                  <Text className="home-stat-value home-stat-value-pink">70%</Text>
                  <Text className="home-stat-value home-stat-value-cyan">0x123...4567</Text>
                  <Text className="home-stat-value home-stat-value-white">PoS + DAO</Text>
                </div>
              </div>
              
              {/* 移动端统计数据 */}
              <div className="home-hero-stats-container home-hero-stats-mobile">
                <div className="home-hero-stats-grid">
                  <div className="home-stat-item-mobile">
                    <Text className="home-stat-label">总供应量</Text>
                    <Text className="home-stat-value home-stat-value-white">10亿枚</Text>
                  </div>
                  <div className="home-stat-item-mobile">
                    <Text className="home-stat-label">销毁比例</Text>
                    <Text className="home-stat-value home-stat-value-pink">70%</Text>
                  </div>
                  <div className="home-stat-item-mobile">
                    <Text className="home-stat-label">链上台约</Text>
                    <Text className="home-stat-value home-stat-value-cyan">0x123...4567</Text>
                  </div>
                  <div className="home-stat-item-mobile">
                    <Text className="home-stat-label">共识机制</Text>
                    <Text className="home-stat-value home-stat-value-white">PoS + DAO</Text>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom Banner - Mobile Only */}
         
          </div>
        </section>

        {/* 万亿级新赛道 + 区块链赋能 Section */}
        <section className="home-section home-ecosystem-blockchain-section">
          <div className="home-container">
            {/* 第一部分: 万亿级新赛道 */}
            <div className="home-ecosystem-part">
            
              <Row gutter={[48, 32]} className="home-ecosystem-content">
                <Col xs={24} lg={12}>
                  <Title level={2} className="home-section-title home-section-title-left">
                <span className="home-ecosystem-title-icon">➤万亿级新赛道: </span>  <span className="home-ecosystem-title-highlight">低空经济的核心生态</span>
              </Title>
                  <Row gutter={[24, 24]} className="home-ecosystem-cards-row">
                    <Col xs={14} sm={8}>
                      <Card className="home-feature-card">
                        <div className="home-feature-icon">
                          <img 
                            src={require('../images/home/777.png')}
                            alt="Aircraft Manufacturing"
                          />
                        </div>
                        <div className="home-feature-title">飞行器制造</div>
                        <Text className="home-feature-desc">
                          无人机、EVTOL、直升机等核心装备研发与生产
                        </Text>
                      </Card>
                    </Col>
                    <Col xs={24} sm={8}>
                      <Card className="home-feature-card">
                        <div className="home-feature-icon">
                          <img 
                            src={require('../images/home/999.png')} 
                            alt="Infrastructure"
                          />
                        </div>
                        <div className="home-feature-title">基础设施</div>
                        <Text className="home-feature-desc">
                          起降场、充电桩、低空通信网络、空管系统搭建
                        </Text>
                      </Card>
                    </Col>
                    <Col xs={24} sm={8}>
                      <Card className="home-feature-card">
                        <div className="home-feature-icon">
                          <img 
                            src={require('../images/home/888.png')} 
                            alt="Diverse Services"
                          />
                        </div>
                        <div className="home-feature-title">多元服务</div>
                        <Text className="home-feature-desc">
                          物流配送、载人交通、应急救援、文旅观光等场景
                        </Text>
                      </Card>
                    </Col>
                  </Row>
                     <div className="home-ecosystem-desc">
                <Text className="home-ecosystem-desc-text">
                  低空经济是以AI无人驾驶航空器的低空飞行活动为牵引,辐射带动相关领域的综合性经济形态,通常指垂直高度1000-3000米空域进行的经济活动,是实体经济与Web3数字经济深度融合的前沿领域
                </Text>
              </div>
                </Col>
                <Col xs={24} lg={12} style={{borderColor:"#333063",borderWidth:1}}>
                  <div className="home-market-size">
                    <div className="home-market-visual">
                      <img 
                        src={require('../images/home/容器 371@2x.png')} 
                        alt="Market Size Visual"
                        className="home-market-image"
                      />
                    </div>
                    <div className="home-market-content">
                      <div className="home-market-status">
                        <span className="home-market-dot"></span>
                        <Text className="home-market-status-text">实时发展中</Text>
                      </div>
                      <div className="home-market-title">全球低空经济市场规模</div>
                      <Text className="home-market-projection">
                        预计2030年突破5万亿美元
                      </Text>
                    </div>
                  </div>
                </Col>
              </Row>
           
            </div>

            {/* 第二部分: 区块链赋能 */}
            <div className="home-blockchain-part">
              
              <Row gutter={[48, 32]} className="home-blockchain-content">
                <Col xs={24} lg={12}>
                  <div className="home-crypto-icons">
                    <img 
                      src={require('../images/home/image@2x.png')} 
                      alt="Cryptocurrency Icons"
                      className="home-crypto-image"
                    />
                  
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div className="home-blockchain-feature-list">
                    <Title level={2} className="home-section-title home-section-title-left">
                <span className="home-blockchain-title-icon"> 区块链赋能:</span> <span className="home-section-title-highlight">低率经济</span><span className="home-blockchain-title-icon">的数字通证</span>
              </Title>
                    <div className="home-blockchain-feature-item">
                      <img src={require("../images/home/dui1.png")} className="home-check-icon" />
                      
                      <div className="home-blockchain-feature-content">
                        <div className="home-blockchain-feature-title">去中心化底层</div>
                        <Text className="home-blockchain-feature-desc">
                          基于BSC链技术,分布式账本保障透明可信,符合区块链去中心化核心特性
                        </Text>
                      </div>
                    </div>
                    <div className="home-blockchain-feature-item">
                      <img src={require("../images/home/dui1.png")} className="home-check-icon" />
                      <div className="home-blockchain-feature-content">
                        <div className="home-blockchain-feature-title">强场景绑定</div>
                        <Text className="home-blockchain-feature-desc">
                          与低空经济生态深度绑定,通过经济激励构建活跃、自驱、共治的DAO生态系统
                        </Text>
                      </div>
                    </div>
                    <div className="home-blockchain-feature-item">
                     <img src={require("../images/home/dui1.png")} className="home-check-icon" />
                      <div className="home-blockchain-feature-content">
                        <div className="home-blockchain-feature-title">公平经济模型</div>
                        <Text className="home-blockchain-feature-desc">
                          70%黑洞销毁,项目方零预留,链上实时可查,保障代币分配公平性
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="home-blockchain-desc-wrapper">
                    <Text className="home-blockchain-desc">
                      DKB不止是加密代币,更是连接低空经济全产业链的价值媒介,是探索低空经济庞大生态的Web3密钥。
                    </Text>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* 透明可信的代币经济模型 Section */}
        <section className="home-section home-tokenomics-section">
          <div className="home-container">
            <div className="home-tokenomics-header">
              <h2 className="home-tokenomics-main-title">透明可信的代币经济模型</h2>
              <p className="home-tokenomics-subtitle">
                基于简约而公平的锻造工艺，构建可持续的代币生态，将赋能一位参与者的权益
              </p>
            </div>
            
            <Row gutter={[24, 24]} className="home-tokenomics-cards">
              {/* 第一个卡片：总供应量 */}
              <Col xs={24} sm={12} lg={6}>
                <Card className="home-tokenomics-card">
                  <div className="home-tokenomics-card-header">
                    <div className="home-tokenomics-card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#06b6d4" strokeWidth="2" fill="none"/>
                        <path d="M12 2 L12 12 L17 7" stroke="#06b6d4" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    <div className="home-tokenomics-card-title-group">
                      <div className="home-tokenomics-card-title">总供应量</div>
                      <div className="home-tokenomics-card-value">10亿枚</div>
                    </div>
                  </div>
                  
                  <div className="home-tokenomics-chart-wrapper">
                    <div className="home-tokenomics-donut-chart">
                      <svg className="home-donut-svg" viewBox="0 0 120 120">
                        {/* Background ring */}
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.05)"
                          strokeWidth="12"
                        />
                        {/* Red segment - 70% */}
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="#EF4444"
                          strokeWidth="12"
                          strokeDasharray={`${2 * Math.PI * 50 * 0.7} ${2 * Math.PI * 50}`}
                          strokeDashoffset={0}
                          transform="rotate(-90 60 60)"
                          strokeLinecap="round"
                        />
                        {/* Purple segment - 20% */}
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="#A855F7"
                          strokeWidth="12"
                          strokeDasharray={`${2 * Math.PI * 50 * 0.2} ${2 * Math.PI * 50}`}
                          strokeDashoffset={-2 * Math.PI * 50 * 0.7}
                          transform="rotate(-90 60 60)"
                          strokeLinecap="round"
                        />
                        {/* Cyan segment - 10% */}
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          fill="none"
                          stroke="#06B6D4"
                          strokeWidth="12"
                          strokeDasharray={`${2 * Math.PI * 50 * 0.1} ${2 * Math.PI * 50}`}
                          strokeDashoffset={-2 * Math.PI * 50 * 0.9}
                          transform="rotate(-90 60 60)"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>
                    
                    <div className="home-tokenomics-legend">
                      <div className="home-legend-item">
                        <span className="home-legend-dot home-legend-dot-red"></span>
                        <span className="home-legend-text">黑洞销毁(70%)</span>
                      </div>
                      <div className="home-legend-item">
                        <span className="home-legend-dot home-legend-dot-purple"></span>
                        <span className="home-legend-text">私募预售(20%)</span>
                      </div>
                      <div className="home-legend-item">
                        <span className="home-legend-dot home-legend-dot-cyan"></span>
                        <span className="home-legend-text">流动性(10%)</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
              
              {/* 第二个卡片：买卖税费 */}
              <Col xs={24} sm={12} lg={6}>
                <Card className="home-tokenomics-card">
                  <div className="home-tokenomics-card-header">
                    <div className="home-tokenomics-card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 10h18M3 14h18M7 6h10v12H7z" stroke="#06b6d4" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    <div className="home-tokenomics-card-title-group">
                      <div className="home-tokenomics-card-title">买卖税费</div>
                      <div className="home-tokenomics-card-value">2%</div>
                    </div>
                  </div>
                  
                  <div className="home-tokenomics-tax-details">
                    <div className="home-tax-item">
                      <div className="home-tax-label">
                        <span className="home-tax-dot"></span>
                        <span>回购销毁</span>
                      </div>
                      <div className="home-tax-percentage">1%</div>
                    </div>
                    <div className="home-tax-progress">
                      <div className="home-tax-progress-bar" style={{ width: '50%' }}></div>
                    </div>
                    
                    <div className="home-tax-item">
                      <div className="home-tax-label">
                        <span className="home-tax-dot"></span>
                        <span>第6代佣金</span>
                      </div>
                      <div className="home-tax-percentage">1%</div>
                    </div>
                    <div className="home-tax-progress">
                      <div className="home-tax-progress-bar" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </Card>
              </Col>
              
              {/* 第三个卡片：黑洞销毁 */}
              <Col xs={24} sm={12} lg={6}>
                <Card className="home-tokenomics-card">
                  <div className="home-tokenomics-card-header">
                    <div className="home-tokenomics-card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="#06b6d4" strokeWidth="2" fill="none"/>
                        <circle cx="12" cy="12" r="6" fill="#06b6d4"/>
                      </svg>
                    </div>
                    <div className="home-tokenomics-card-title-group">
                      <div className="home-tokenomics-card-title">黑洞销毁</div>
                      <div className="home-tokenomics-card-value home-tokenomics-value-burn">70亿枚</div>
                    </div>
                  </div>
                  
                  <div className="home-tokenomics-card-desc">
                    占总供应量70%，全部打入黑洞地址即时销毁，永久退出流通，系统自动执行无法撤销
                  </div>
                </Card>
              </Col>
              
              {/* 第四个卡片：零预留·全透明 */}
              <Col xs={24} sm={12} lg={6}>
                <Card className="home-tokenomics-card">
                  <div className="home-tokenomics-card-header">
                    <div className="home-tokenomics-card-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M12 2v20M2 12h20" stroke="#06b6d4" strokeWidth="2"/>
                        <circle cx="12" cy="12" r="9" stroke="#06b6d4" strokeWidth="2" fill="none"/>
                      </svg>
                    </div>
                    <div className="home-tokenomics-card-title-group">
                      <div className="home-tokenomics-card-title">零预留·全透明</div>
                    </div>
                  </div>
                  
                  <div className="home-tokenomics-card-desc">
                    项目方零预留份额，所有代币分配在链上实时可查，确保公平公正，符合去中心化核心精神
                  </div>
                  
                  <a href="#" className="home-tokenomics-verify-link">
                    链上验证 →
                  </a>
                </Card>
              </Col>
            </Row>
          </div>
        </section>

        {/* 分步落地: 低空币的成长之旅 Section */}
        <section className="home-section home-roadmap-section">
          <div className="home-container">
            <div className="home-roadmap-header">
              <h2 className="home-roadmap-main-title">
                分步落地：<span className="home-roadmap-title-highlight">低空币</span>的成长之旅
              </h2>
              <p className="home-roadmap-subtitle">
                从社交通证到生态驱动，稳步一帮积累试点，实现可持续成长闭环
              </p>
            </div>
            
            <div className="home-roadmap-timeline">
              {/* 第一个阶段 - 启动 (右侧) */}
              <div className="home-timeline-item home-timeline-item-right">
                <div className="home-timeline-content">
                  <div className="home-timeline-badge">启动</div>
                  <Card className="home-timeline-card">
                    <h3 className="home-timeline-card-title">启动</h3>
                    <div className="home-timeline-card-desc">
                      • 释放占总量3%代币<br/>
                      • 完成首轮募集（软顶600SOL）<br/>
                      • 在Raydium创建交易池（首发DEX）<br/>
                      • 上线CM/CG行情+开拓社交媒体渠道
                    </div>
                  </Card>
                </div>
                <div className="home-timeline-line">
                  <div className="home-timeline-node"></div>
                </div>
              </div>

              {/* 第二个阶段 - 发展壮大 (左侧) */}
              <div className="home-timeline-item home-timeline-item-left">
                <div className="home-timeline-line">
                  <div className="home-timeline-node"></div>
                </div>
                <div className="home-timeline-content">
                  <div className="home-timeline-badge">发展壮大</div>
                  <Card className="home-timeline-card">
                    <h3 className="home-timeline-card-title">发展壮大</h3>
                    <div className="home-timeline-card-desc">
                      内容规划中…CEX，拓展低空经济垂类合作伙伴…
                    </div>
                  </Card>
                </div>
              </div>

              {/* 第三个阶段 - 锦通基础 (右侧) */}
              <div className="home-timeline-item home-timeline-item-right">
                <div className="home-timeline-content">
                  <div className="home-timeline-badge">锦通基础</div>
                  <Card className="home-timeline-card">
                    <h3 className="home-timeline-card-title">锦通基础</h3>
                    <div className="home-timeline-card-desc">
                      已规划EVTOL，私人VTOL，航材与配件采购，试乘试驾预约，低空观光/应急救援，发行会员卡与票据等相关生态场景
                    </div>
                  </Card>
                </div>
                <div className="home-timeline-line">
                  <div className="home-timeline-node"></div>
                </div>
              </div>

              {/* 第四个阶段 - 名望回归 (左侧) */}
              <div className="home-timeline-item home-timeline-item-left">
                <div className="home-timeline-line">
                  <div className="home-timeline-node"></div>
                </div>
                <div className="home-timeline-content">
                  <div className="home-timeline-badge">名望回归</div>
                  <Card className="home-timeline-card">
                    <h3 className="home-timeline-card-title">名望回归</h3>
                    <div className="home-timeline-card-desc">
                      一、逐步上线DEX的低价代买/代售服务<br/>
                      二、通过与传统的折扣、储值卡等优惠<br/>
                      三、释放场景全供给（包含线下/线上）
                    </div>
                  </Card>
                </div>
              </div>

              {/* 第五个阶段 - 生态建设·价值兑现 (右侧) */}
              <div className="home-timeline-item home-timeline-item-right">
                <div className="home-timeline-content">
                  <div className="home-timeline-badge">生态建设·价值兑现</div>
                  <Card className="home-timeline-card">
                    <h3 className="home-timeline-card-title">生态建设·价值兑现</h3>
                    <div className="home-timeline-card-desc">
                      在开源分布式的生态框架内，引入私人与政府机构/国企合作项目，打造类通用航空低空经济数字支付领域，符合所有持有者中长期价值承接资质，让核心社区共享低空经济红利
                    </div>
                  </Card>
                </div>
                <div className="home-timeline-line">
                  <div className="home-timeline-node"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 预售期-推广返佣机制 Section */}
        <section className="home-section home-rebate-section">
          <div className="home-container">
            <div className="home-rebate-header">
              <h2 className="home-rebate-main-title">
                预售期 - <span className="home-rebate-title-highlight">推广返佣机制</span>
              </h2>
              <p className="home-rebate-subtitle">
                激励清晰、到账高效、助力预售期快速推广
              </p>
            </div>
            
            <Row gutter={[48, 48]} className="home-rebate-content">
              {/* 左侧：核心机制说明 */}
              <Col xs={24} lg={12}>
                <div className="home-rebate-mechanisms">
                  <h3 className="home-rebate-section-title">核心机制说明</h3>
                  
                  <div className="home-rebate-mechanism-list">
                    <Card className="home-rebate-mechanism-card">
                      <div className="home-mechanism-card-title">绑定关系</div>
                      <div className="home-mechanism-card-desc">
                        每个用户唯独「邀请链接」永久帮定上下级
                      </div>
                    </Card>
                    
                    <Card className="home-rebate-mechanism-card">
                      <div className="home-mechanism-card-title">触发条件</div>
                      <div className="home-mechanism-card-desc">
                        用户在售期间购买代币（USDT ⇒ DKB）
                      </div>
                    </Card>
                    
                    <Card className="home-rebate-mechanism-card">
                      <div className="home-mechanism-card-title">返佣逻辑</div>
                      <div className="home-mechanism-card-desc">
                        自动向上级分配 USDT 返酬
                      </div>
                    </Card>
                    
                    <Card className="home-rebate-mechanism-card">
                      <div className="home-mechanism-card-title">有效期</div>
                      <div className="home-mechanism-card-desc">
                        仅颁售期间有效
                      </div>
                    </Card>
                  </div>
                </div>
              </Col>
              
              {/* 右侧：返佣比例和执行亮点 */}
              <Col xs={24} lg={12}>
                <div className="home-rebate-right">
                   <h3 className="home-rebate-section-title">返佣比例（层级式分布）</h3>
                  {/* 返佣比例表格 */}
                  <Card className="home-rebate-table-card">
                   
                    <div className="home-rebate-table">
                      {/* 表头 */}
                      <div className="home-rebate-table-header">
                        <div className="home-rebate-table-cell home-rebate-table-cell-header">层级</div>
                        <div className="home-rebate-table-cell home-rebate-table-cell-header">返佣比例</div>
                      </div>
                      {/* 表格数据行 */}
                      {rebateData.map((item, index) => (
                        <div key={index} className="home-rebate-table-row">
                          <div className="home-rebate-table-cell">{item.level}</div>
                          <div className="home-rebate-table-cell">{item.ratio}</div>
                        </div>
                      ))}
                    </div>
                  </Card>
                  
                  {/* 执行亮点 */}
                  <div className="home-rebate-highlights">
                    <h3 className="home-rebate-section-title">执行亮点</h3>
                    
                    <div className="home-highlight-list">
                      <div className="home-highlight-item">
                        <div className="home-highlight-dot"></div>
                        <div className="home-highlight-content">
                          <span className="home-highlight-label">到账效率：</span>
                          <span className="home-highlight-text">实时转账即时到账（无需人工操作）</span>
                        </div>
                      </div>
                      
                      <div className="home-highlight-item">
                        <div className="home-highlight-dot"></div>
                        <div className="home-highlight-content">
                          <span className="home-highlight-label">奖励形式：</span>
                          <span className="home-highlight-text">USDT 直接发放（从营销收款中划出）</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* 万亿赛道的核心优势 Section */}
        <section className="home-section home-advantages-section">
          <div className="home-container">
            <div className="home-advantages-header">
              <h2 className="home-advantages-main-title">
                万亿赛道的<span className="home-advantages-title-highlight">核心优势</span>
              </h2>
              <p className="home-advantages-subtitle">
                政策、技术、市场三重驱动，低空经济迎来黄金发展期
              </p>
            </div>
            
            <Row gutter={[24, 24]} className="home-advantages-cards">
              {/* 第一个卡片：国家战略加持 */}
              <Col xs={24} sm={24} lg={8}>
                <Card className="home-advantage-card">
                  <div className="home-advantage-icon-wrapper">
                    <div className="home-advantage-icon">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <rect x="8" y="8" width="32" height="32" rx="4" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                        <rect x="16" y="16" width="16" height="16" rx="2" fill="#06B6D4" opacity="0.3"/>
                        <path d="M20 24h8M24 20v8" stroke="#06B6D4" strokeWidth="2"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="home-advantage-card-title">国家战略加持</h3>
                  <p className="home-advantage-card-desc">
                    全球主要经济体将低空经济列为未来产业重点扶持方向，政府政策倾斜与中央财政补贴，将持续赋能发展。
                  </p>
                </Card>
              </Col>
              
              {/* 第二个卡片：技术突破赋能 */}
              <Col xs={24} sm={24} lg={8}>
                <Card className="home-advantage-card">
                  <div className="home-advantage-icon-wrapper">
                    <div className="home-advantage-icon">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <circle cx="24" cy="24" r="16" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                        <circle cx="24" cy="24" r="10" fill="#06B6D4" opacity="0.3"/>
                        <circle cx="24" cy="24" r="4" fill="#06B6D4"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="home-advantage-card-title">技术突破赋能</h3>
                  <p className="home-advantage-card-desc">
                    电池、人工智能、复合材料、通信等研发突破性成熟度大幅完成提速，供应链人员投入AI相配EVTOL综合生产，已能批量交付生态场景应用。
                  </p>
                </Card>
              </Col>
              
              {/* 第三个卡片：海量场景需求 */}
              <Col xs={24} sm={24} lg={8}>
                <Card className="home-advantage-card">
                  <div className="home-advantage-icon-wrapper">
                    <div className="home-advantage-icon">
                      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                        <path d="M12 36L24 12L36 36H12Z" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                        <path d="M24 12L30 24L36 36" stroke="#06B6D4" strokeWidth="2" opacity="0.3"/>
                        <circle cx="24" cy="28" r="3" fill="#06B6D4"/>
                      </svg>
                    </div>
                  </div>
                  <h3 className="home-advantage-card-title">海量场景需求</h3>
                  <p className="home-advantage-card-desc">
                    物流、交通、农业、安防场景倍增让大量市场业务增长需求井喷并需求不断深化，并与突破技术和应用工具应同步造就的持续增长。
                  </p>
                </Card>
              </Col>
            </Row>
            
            {/* 底部大卡片 */}
            <div className="home-advantages-bottom">
              <Card className="home-advantage-large-card">
                <div className="home-advantage-large-icon-wrapper">
                  <div className="home-advantage-large-icon">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                      <circle cx="32" cy="32" r="24" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                      <circle cx="32" cy="32" r="16" stroke="#06B6D4" strokeWidth="2" fill="none" opacity="0.5"/>
                      <circle cx="32" cy="32" r="8" fill="#06B6D4" opacity="0.3"/>
                      <path d="M32 8v48M8 32h48" stroke="#06B6D4" strokeWidth="2" opacity="0.3"/>
                    </svg>
                  </div>
                </div>
                <h3 className="home-advantage-large-title">巨大经济潜力</h3>
                <p className="home-advantage-large-desc">
                  根据市场研究，低空经济产业链获客方式数据化对接，不仅相连产业链，超频后维护成本上升明显，且扩大金融资产产业回报延时获取潜力。依靠未来经济价值链优势配对，成为各类核心参与者中长期价值承接重点，让核心社区共享低空经济红利。
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* 我们的文化 Section */}
        <section className="home-section home-culture-section">
          <div className="home-container">
            <div className="home-culture-header">
              <h2 className="home-culture-main-title">
                我们的文化：<span className="home-culture-title-highlight">引领低空经济</span>的探索者
              </h2>
              <p className="home-culture-subtitle">
                DAO社区是低空币的核心，我们共同构建去中心化、透明、协作、创新的Web3文化氛围
              </p>
            </div>
            
            <Row gutter={[48, 48]} className="home-culture-content">
              {/* 左侧：核心价值观 */}
              <Col xs={24} lg={14}>
                <h3 className="home-culture-section-title">核心价值观</h3>
                <Row gutter={[24, 24]} className="home-culture-cards">
                  <Col xs={24} sm={12}>
                    <Card className="home-culture-card">
                      <div className="home-culture-icon-wrapper">
                        <div className="home-culture-icon">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle cx="20" cy="20" r="14" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                            <circle cx="20" cy="20" r="8" fill="#06B6D4" opacity="0.3"/>
                            <path d="M20 12v16M12 20h16" stroke="#06B6D4" strokeWidth="2"/>
                          </svg>
                        </div>
                      </div>
                      <h4 className="home-culture-card-title">去中心化</h4>
                      <p className="home-culture-card-desc">
                        社区主导治理，无中心化权威，代码即法则
                      </p>
                    </Card>
                  </Col>
                  
                  <Col xs={24} sm={12}>
                    <Card className="home-culture-card">
                      <div className="home-culture-icon-wrapper">
                        <div className="home-culture-icon">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <path d="M12 28L20 12L28 28" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                            <circle cx="20" cy="22" r="3" fill="#06B6D4"/>
                            <path d="M16 28h8" stroke="#06B6D4" strokeWidth="2"/>
                          </svg>
                        </div>
                      </div>
                      <h4 className="home-culture-card-title">创新思维</h4>
                      <p className="home-culture-card-desc">
                        以Web3思维重塑生态发展，解决实际痛点
                      </p>
                    </Card>
                  </Col>
                  
                  <Col xs={24} sm={12}>
                    <Card className="home-culture-card">
                      <div className="home-culture-icon-wrapper">
                        <div className="home-culture-icon">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <circle cx="15" cy="15" r="4" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                            <circle cx="25" cy="15" r="4" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                            <circle cx="20" cy="25" r="4" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                            <path d="M17 18l-2 5M23 18l2 5" stroke="#06B6D4" strokeWidth="2"/>
                          </svg>
                        </div>
                      </div>
                      <h4 className="home-culture-card-title">协作精神</h4>
                      <p className="home-culture-card-desc">
                        社区需高度参与治理，共享生态与机会，共同成长
                      </p>
                    </Card>
                  </Col>
                  
                  <Col xs={24} sm={12}>
                    <Card className="home-culture-card">
                      <div className="home-culture-icon-wrapper">
                        <div className="home-culture-icon">
                          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                            <rect x="12" y="12" width="16" height="16" rx="2" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                            <path d="M16 20l3 3l5-6" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                          </svg>
                        </div>
                      </div>
                      <h4 className="home-culture-card-title">透明可信</h4>
                      <p className="home-culture-card-desc">
                        链上可查，公开透明，建立社区信任基石
                      </p>
                    </Card>
                  </Col>
                </Row>
              </Col>
              
              {/* 右侧：社区口号和DAO入口 */}
              <Col xs={24} lg={10}>
                <div className="home-culture-right">
                  <Card className="home-community-card">
                    <h3 className="home-community-title">社区口号</h3>
                    <div className="home-community-slogan-box">
                      <p className="home-community-slogan">
                        在动荡中寻找平衡，在无常中体会自由。
                      </p>
                    </div>
                    
                    <h4 className="home-dao-title">DAO社群入口</h4>
                    <div className="home-dao-icons">
                      <div className="home-dao-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="14" stroke="#06B6D4" strokeWidth="2"/>
                          <path d="M12 16l4 4l8-8" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                        </svg>
                        <span className="home-dao-label">官方Telegram</span>
                      </div>
                      <div className="home-dao-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="14" stroke="#06B6D4" strokeWidth="2"/>
                          <path d="M12 12l8 8M20 12l-8 8" stroke="#06B6D4" strokeWidth="2"/>
                        </svg>
                        <span className="home-dao-label">X(Twitter)社群</span>
                      </div>
                      <div className="home-dao-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <rect x="8" y="10" width="16" height="12" rx="2" stroke="#06B6D4" strokeWidth="2" fill="none"/>
                          <circle cx="16" cy="16" r="3" fill="#06B6D4"/>
                        </svg>
                        <span className="home-dao-label">腾讯会议</span>
                      </div>
                      <div className="home-dao-icon">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                          <circle cx="16" cy="16" r="14" stroke="#06B6D4" strokeWidth="2"/>
                          <path d="M12 14h8M12 18h8" stroke="#06B6D4" strokeWidth="2"/>
                        </svg>
                        <span className="home-dao-label">QQ社区群</span>
                      </div>
                    </div>
                    
                    <Button 
                      type="primary" 
                      size="large" 
                      block 
                      className="home-join-button"
                      onClick={() => navigate('/presale')}
                    >
                      加入我们，成为低空经济Web3生态的共建者
                    </Button>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="home-section home-cta-section">
          <div className="home-container">
            <div className="home-cta-content">
              <h2 className="home-cta-main-title">
                抢占万亿低空经济红利，从持有<span className="home-cta-title-highlight">DKB</span>开始
              </h2>
              <p className="home-cta-subtitle">
                成为去中心化低空经济基础设施的早期参与者，共享生态成长价值
              </p>
              <div className="home-cta-buttons">
                <Button 
                  type="primary" 
                  size="large" 
                  className="home-cta-btn-primary"
                  onClick={() => navigate('/introduction')}
                  icon={
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ marginRight: '8px' }}>
                      <path d="M8 2v10M8 12l-3-3M8 12l3-3M2 14h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  }
                >
                  下载白皮书
                </Button>
                <Button 
                  size="large" 
                  className="home-cta-btn-secondary"
                  onClick={() => navigate('/presale')}
                >
                  购买DKB
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Content>

      {/* Footer */}
      <Footer />
    </Layout>
  );
}

export default Home;



