import React, { useState } from 'react';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import './Introduction.css';

// 导入图片资源
import heroImage from '../images/Introduction/image@2x.png';
import droneCase from '../images/Introduction/矩形 35@2x(2).png';
import bitcoinCase from '../images/Introduction/矩形 35@2x(3).png';

function Introduction() {
  const { navigate } = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    wallet: '',
    email: '',
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
  };

  return (
    <div className="introduction-page">
      <MainHeader theme="dark" />
      
      {/* Hero Section - 第一屏 */}
      <section className="intro-hero">
        <div className="intro-container">
          <div className="intro-hero-content">
            <div className="intro-hero-text">
              <h1>DKB官方介绍</h1>
              <p>
                DKB 通过数字资产驱动航空产业升级，打造服务全球旅客的分布式生态。
                预售只是起点，完整的产品矩阵覆盖支付、会员、营销、治理等多个维度。
              </p>
            </div>
            <div className="intro-hero-image">
              <img src={heroImage} alt="DKB" />
            </div>
          </div>
        </div>
      </section>

      {/* 资产通证化革新 - 容器 114 */}
      <section className="intro-tokenization">
        <div className="intro-container">
          <h2 className="section-title">资产通证化革新</h2>
          <div className="title-underline"></div>
          <p className="section-desc">
            通过创新的通证化方案，解决低空经济领域的资产流动性与资源配置问题
          </p>

          <div className="tokenization-grid">
            {/* 左侧：空域资源通证化 */}
            <div className="token-left">
              <div className="token-badge token-badge-cyan">空域资源通证化</div>
              
              <h3 className="token-title">从独占至共享共治</h3>
              <p className="token-text">
                打破传统空域分配不均，利用率低的痛点，通过通证化释放闲置空域价值，降低中小
                企业空域使用门槛，实现航线定价的民主化。
              </p>

              <h4 className="token-subtitle">传统痛点</h4>
              <ul className="token-pain-list">
                <li>
                  <span className="icon-error">●</span>
                  <span>空域资源分配不均，大型企业垄断严重</span>
                </li>
                <li>
                  <span className="icon-error">●</span>
                  <span>交易成本高，中小企业参与门槛高</span>
                </li>
                <li>
                  <span className="icon-error">●</span>
                  <span>空域利用率低，资源浪费严重</span>
                </li>
              </ul>

              <h4 className="token-subtitle">Web3解决方案</h4>
              <p className="token-text">
                通过区块链技术将空域分配的使用权、收益权等权益转化为NFT通证，实现空域资源的透明化
                配置。先对空域资源做预测、利用定价机制促进权益流转，再设计智能合约定义
                义通证规则，最后发行并通过DAO治理机制实现社区共管。
              </p>
            </div>

            {/* 右侧：无人机资产通证化 */}
            <div className="token-right">
              <div className="token-badge token-badge-purple">无人机资产通证化</div>
              
              <h3 className="token-title">从资本独占至多元共富</h3>
              <p className="token-text">
                创新所有权/收益权/使用权/综合权益四大通证化方案，适应不同需求，借助智能合约化生
                飞机、投资者、维保公司权利关系，让普通民众众也能参与低空经济红利。
              </p>

              <h4 className="token-subtitle">通证化模式</h4>
              
              <div className="token-mode-item">
                <h5>所有权通证化</h5>
                <p>投资者购买NFT成为无人机共同所有者，按比例分得各有者，按比例获益收益</p>
              </div>

              <div className="token-mode-item">
                <h5>收益权通证化</h5>
                <p>不改变所有权，投资者购买收益类NFT获得来自运营收益分配权</p>
              </div>

              <div className="token-mode-item">
                <h5>使用权通证化</h5>
                <p>将无人机使用时间分时为NFT通证，用户购买代币获取时间段使用权</p>
              </div>

              <div className="token-mode-item">
                <h5>综合权益通证化</h5>
                <p>整合各类权益，提供灵活的投资和使用场景</p>
              </div>

              <div className="token-highlight-box">
                <div className="highlight-icon">📍</div>
                <div className="highlight-content">
                  <h5>普惠金融实践</h5>
                  <p>将无人机资产通证化，降低投资门槛，让普通民众也能参与低空经济投资，共享产业发展红利。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 案例展示 - 容器 113 */}
      <section className="intro-cases">
        <div className="intro-container">
          <h2 className="section-title">案例展示</h2>
          <p className="section-desc">
            DKB-A在全球范围内的成功应用，为低空经济Web3化转型提供实践范例
          </p>

          {/* 案例1：新加坡 */}
          <div className="case-card">
            <div className="case-content">
              <div className="case-badge case-badge-blue">空域资源通证化</div>
              <h3 className="case-title">新加坡avetics "SKY Elf（SE）"项目</h3>
              
              <h4 className="case-section-title">项目背景</h4>
              <p className="case-text">
                新加坡空域资源紧张导致航线审批慢，存在中小企业参与门槛高（仅38%）。
                产业链协作不畅等问题，亟需通过Web3技术简化流程。
              </p>

              <h4 className="case-section-title">项目方案</h4>
              <ul className="case-list">
                <li>
                  <span className="check-icon">✓</span>
                  <span>发行"SKY Elf（SE）"通证，总量30亿枚（单价不超盘），始发价格0.13USDT</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>通证链接无人机销售数据、交换资收、物流服务并奖励资产评价值</span>
                </li>
                <li>
                  <span className="check-icon">✓</span>
                  <span>基于ETH专属子链实现高并发交易，结合联盟链守护基础架构使用情况</span>
                </li>
              </ul>

              <h4 className="case-section-title">项目成果</h4>
              <div className="case-results">
                <div className="case-result">
                  <div className="result-number">400km²</div>
                  <div className="result-label">释放专享空域</div>
                </div>
                <div className="case-result">
                  <div className="result-number">82%</div>
                  <div className="result-label">空域利用率</div>
                </div>
                <div className="case-result">
                  <div className="result-number">7天</div>
                  <div className="result-label">流程周期</div>
                </div>
              </div>
            </div>
            <div className="case-image">
              <img src={droneCase} alt="SKY Elf Project" />
            </div>
          </div>

          {/* 案例2：产通链 */}
          <div className="case-card case-card-reverse">
            <div className="case-image">
              <img src={bitcoinCase} alt="CT-CHAIN" />
            </div>
            <div className="case-content">
              <div className="case-badge case-badge-green">生态系统建设</div>
              <h3 className="case-title">产通链CT-CHAIN低空经济RWA生态系统</h3>
              
              <h4 className="case-section-title">项目背景</h4>
              <p className="case-text">
                传统低空经济业务仅以巨头为主导，存在信息不对称、信任度不高、资源整合难等问
                题，需借助Web3激发协作的生态体系打破壁垒能壁。
              </p>

              <h4 className="case-section-title">项目方案</h4>
              <ul className="case-list">
                <li>
                  <span className="check-icon check-icon-green">✓</span>
                  <span>采用"主链-侧链集-流通链"分层架构，确保资产真实可信息高效流转</span>
                </li>
                <li>
                  <span className="check-icon check-icon-green">✓</span>
                  <span>建立多中心化协同治理机制，支持多参数产主旨，对接多河谷协同网络</span>
                </li>
                <li>
                  <span className="check-icon check-icon-green">✓</span>
                  <span>通过跨空院跨技术大突破，支持千万TPS并显与多种区块链</span>
                </li>
              </ul>

              <h4 className="case-section-title">项目成果</h4>
              <div className="case-results">
                <div className="case-result">
                  <div className="result-number result-number-green">40%</div>
                  <div className="result-label">产业数字化渗透率</div>
                </div>
                <div className="case-result">
                  <div className="result-number result-number-green">+35%</div>
                  <div className="result-label">创新效率提升</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 加入DKB-A生态 - 容器 112 */}
      <section className="intro-join">
        <div className="intro-container">
          <h2 className="section-title-white">加入DKB-A生态</h2>
          <p className="section-desc-white">
            与我们一起共建去中心化空中交通系统，共享低空经济Web3红利
          </p>

          <div className="join-grid">
            {/* 左侧：合作方向 */}
            <div className="join-left">
              <h3 className="join-subtitle">合作方向</h3>
              
              <div className="cooperation-item">
                <div className="cooperation-icon">📍</div>
                <div className="cooperation-content">
                  <h4>去中心化空中交通管理</h4>
                  <p>联合各地政府机关，通过通证化MAPP，实现民航与飞行权限上链，提升空域管理效率与安全性。</p>
                </div>
              </div>

              <div className="cooperation-item">
                <div className="cooperation-icon">⚠️</div>
                <div className="cooperation-content">
                  <h4>实物资产通证化</h4>
                  <p>开展无人机、应急救、飞VTOL等实物资产的通证化交易平台，数据链各类资产价值，提升资产流动性。</p>
                </div>
              </div>

              <div className="cooperation-item">
                <div className="cooperation-icon">✈️</div>
                <div className="cooperation-content">
                  <h4>共建RWA实验区</h4>
                  <p>共链协定或获RWA实验区，共享生态红鹰与技术支持，探索低空经济Web3化转型的创新模式与场景。</p>
                </div>
              </div>
            </div>

            {/* 右侧：表单 */}
            <div className="join-right">
              <div className="join-form-card">
                <h3 className="form-title">加入生态</h3>
                <p className="form-subtitle">
                  填写以下信息，我们将按此联接将保你取联密系，共同探讨Web3生态合作机会
                </p>

                <form onSubmit={handleSubmit} className="join-form">
                  <div className="form-row-two">
                    <div className="form-field">
                      <label>姓名</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="请输入您的姓名"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="form-field">
                      <label>钱包地址</label>
                      <input
                        type="text"
                        name="wallet"
                        placeholder="请输入您的钱包地址"
                        value={formData.wallet}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>邮箱</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="请输入您的邮箱"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-field">
                    <label>组织/项目</label>
                    <input
                      type="text"
                      name="organization"
                      placeholder="请输入组织或项目名称"
                      value={formData.organization}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-field">
                    <label>合作意向</label>
                    <textarea
                      name="intention"
                      placeholder="请简述您的合作意向"
                      value={formData.intention}
                      onChange={handleInputChange}
                      rows="3"
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    提交申请
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Introduction;
