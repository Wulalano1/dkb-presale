import React, { useState } from 'react';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import './Introduction.css';

// 导入图片资源
import heroImage from '../images/Introduction/image@2x.png';
import logoImage from '../images/Introduction/Logo@2x.png';
import droneImage from '../images/Introduction/矩形 35@2x(2).png';
import bitcoinImage from '../images/Introduction/矩形 35@2x(3).png';
import planeIcon from '../images/Introduction/容器@2x.png';
import locationIcon from '../images/Introduction/容器 383@2x.png';
import warningIcon from '../images/Introduction/容器 384@2x.png';
import checkIcon from '../images/Introduction/容器@2x(12).png';
import errorIcon from '../images/Introduction/容器@2x(15).png';
import checkCircleIcon from '../images/Introduction/容器@2x(16).png';
import checkGreenIcon from '../images/Introduction/容器@2x(19).png';

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
      <MainHeader theme="dark" />
      
      {/* Hero Section */}
      <section className="intro-hero-section">
        <div className="intro-hero-content">
          <div className="intro-hero-left">
            <h1 className="intro-hero-title">DKB官方介绍</h1>
            <p className="intro-hero-subtitle">
              DKB 通过数字资产驱动航空产业升级，打造服务全球旅客的分布式生态。
              预售只是起点，完整的产品矩阵覆盖支付、会员、营销、治理等多个维度。
            </p>
          </div>
          <div className="intro-hero-right">
            <img src={heroImage} alt="DKB Hero" className="intro-hero-image" />
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
        </div>
      </section>
    </div>
  );
}

export default Introduction;
