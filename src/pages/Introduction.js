import React from 'react';
import { Layout, Row, Col, Typography, Button, Space, Card, List } from 'antd';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import './Introduction.css';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

// 导入所有图片资源
const introHeroImage = require('../images/Introduction/image@2x.png');
const introLogo = require('../images/Introduction/Logo@2x.png');
const container112 = require('../images/Introduction/容器 112@2x.png');
const container113 = require('../images/Introduction/容器 113@2x.png');
const container114 = require('../images/Introduction/容器 114@2x.png');
const container383_0 = require('../images/Introduction/容器 383@2x.png');
const container383_1 = require('../images/Introduction/容器 383@2x(1).png');
const container383_2 = require('../images/Introduction/容器 383@2x(2).png');
const container383_3 = require('../images/Introduction/容器 383@2x(3).png');
const container383_4 = require('../images/Introduction/容器 383@2x(4).png');
const container383_5 = require('../images/Introduction/容器 383@2x(5).png');
const container383_6 = require('../images/Introduction/容器 383@2x(6).png');
const container383_7 = require('../images/Introduction/容器 383@2x(7).png');
const container383_8 = require('../images/Introduction/容器 383@2x(8).png');
const container383_9 = require('../images/Introduction/容器 383@2x(9).png');
const container383_10 = require('../images/Introduction/容器 383@2x(10).png');
const container383_11 = require('../images/Introduction/容器 383@2x(11).png');
const container383_12 = require('../images/Introduction/容器 383@2x(12).png');
const container383_13 = require('../images/Introduction/容器 383@2x(13).png');
const container383_14 = require('../images/Introduction/容器 383@2x(14).png');
const container383_15 = require('../images/Introduction/容器 383@2x(15).png');
const container383_16 = require('../images/Introduction/容器 383@2x(16).png');
const container383_17 = require('../images/Introduction/容器 383@2x(17).png');
const container384_0 = require('../images/Introduction/容器 384@2x.png');
const container384_1 = require('../images/Introduction/容器 384@2x(1).png');
const container384_2 = require('../images/Introduction/容器 384@2x(2).png');
const container384_3 = require('../images/Introduction/容器 384@2x(3).png');
const container384_4 = require('../images/Introduction/容器 384@2x(4).png');
const container384_5 = require('../images/Introduction/容器 384@2x(5).png');
const container384_6 = require('../images/Introduction/容器 384@2x(6).png');
const container_0 = require('../images/Introduction/容器@2x.png');
const container_1 = require('../images/Introduction/容器@2x(1).png');
const container_2 = require('../images/Introduction/容器@2x(2).png');
const container_3 = require('../images/Introduction/容器@2x(3).png');
const container_12 = require('../images/Introduction/容器@2x(12).png');
const container_15 = require('../images/Introduction/容器@2x(15).png');
const container_16 = require('../images/Introduction/容器@2x(16).png');
const container_19 = require('../images/Introduction/容器@2x(19).png');
const container_22 = require('../images/Introduction/容器@2x(22).png');
const container_23 = require('../images/Introduction/容器@2x(23).png');
const container_24 = require('../images/Introduction/容器@2x(24).png');
const container_25 = require('../images/Introduction/容器@2x(25).png');
const rect35_0 = require('../images/Introduction/矩形 35@2x.png');
const rect35_1 = require('../images/Introduction/矩形 35@2x(1).png');
const rect35_2 = require('../images/Introduction/矩形 35@2x(2).png');
const rect35_3 = require('../images/Introduction/矩形 35@2x(3).png');

// 业务板块数据
const businessSections = [
  {
    icon: container383_0,
    title: '航空票务与增值服务',
    description: '聚焦机票、贵宾休息室、机场快线等高频场景，提供一站式航旅服务体验。',
    background: rect35_0,
  },
  {
    icon: container383_1,
    title: '链上金融与资产管理',
    description: '通过质押、借贷、NFT 赋能航旅权益增值，实现资产数字化流转。',
    background: rect35_1,
  },
  {
    icon: container383_2,
    title: '全球社区与营销',
    description: '搭建多语言社区体系，构建激励型增长模型，连接全球航旅生态。',
    background: rect35_2,
  },
];

// 技术能力数据
const techCapabilities = [
  {
    icon: container384_0,
    title: '多链部署',
    description: '支持多链架构，实现跨链资产流转与数据同步。',
  },
  {
    icon: container384_1,
    title: '零知识证明',
    description: '采用 ZK 技术保障隐私安全，实现可验证的隐私计算。',
  },
  {
    icon: container384_2,
    title: '多签机制',
    description: '多重签名保障资产安全，关键操作需多方确认。',
  },
  {
    icon: container384_3,
    title: '链上监控',
    description: '实时监控资金流动，风险预警系统保障安全。',
  },
];

// 生态特色数据
const ecosystemFeatures = [
  {
    icon: container_0,
    title: '智能合约审计',
    description: '所有智能合约均通过第三方安全审计，确保代码安全可靠。',
  },
  {
    icon: container_1,
    title: 'DAO 治理',
    description: '关键操作开放 DAO 治理投票，社区共同决定生态发展方向。',
  },
  {
    icon: container_2,
    title: '透明化运营',
    description: '资金流动透明化，所有操作可追溯，建立信任机制。',
  },
];

// 路线图数据
const roadmapStages = [
  {
    icon: container112,
    title: '阶段一：预售 & 会员开放',
    description: '完成代币发行与会员通行证空投，搭建节点激励体系。',
  },
  {
    icon: container113,
    title: '阶段二：航旅权益数字化',
    description: '推出机票、里程、酒店等权益的 NFT 化，并支持二级市场流通。',
  },
  {
    icon: container114,
    title: '阶段三：全球支付网络',
    description: '上线跨境支付渠道，与更多商业场景打通，实现闭环消费。',
  },
];

function Introduction() {
  const { navigate } = useRouter();

  return (
    <Layout className="introduction-layout">
      <MainHeader theme="light" />
      <Content className="introduction-content">
        {/* Hero Section */}
        <section className="intro-hero">
          <div className="intro-hero__glow">
            <img src={rect35_3} alt="" aria-hidden="true" />
          </div>
          <div className="container">
            <Row gutter={[64, 64]} align="middle">
              <Col xs={24} lg={12}>
                <Space direction="vertical" size={32} className="intro-hero__content">
                  <Space size={14} align="center" className="intro-hero__badge">
                    <img src={introLogo} alt="DKB" />
                    <span>DKB 官方生态介绍</span>
                  </Space>
                  <div className="intro-hero__headline">
                    <Title level={1} className="intro-hero__title">
                      DKB 官方生态介绍
                    </Title>
                    <Paragraph className="intro-hero__subtitle">
                      DKB 通过数字资产驱动航空产业升级，打造服务全球旅客的分布式生态。
                    </Paragraph>
                    <Paragraph className="intro-hero__description">
                      预售只是起点，完整的产品矩阵覆盖支付、会员、营销、治理等多个维度。
                      我们致力于构建一个开放、透明、高效的航旅数字生态体系。
                    </Paragraph>
                  </div>
                  <Space size={18} wrap className="intro-hero__actions">
                    <Button
                      type="primary"
                      size="large"
                      shape="round"
                      className="intro-button"
                      onClick={() => navigate('/presale')}
                    >
                      立即参与预售
                    </Button>
                    <Button
                      size="large"
                      shape="round"
                      className="intro-button intro-button--ghost"
                      onClick={() => navigate('/')}
                    >
                      返回首页
                    </Button>
                  </Space>
                </Space>
              </Col>
              <Col xs={24} lg={12}>
                <div className="intro-hero__visual">
                  <img src={introHeroImage} alt="DKB 官方生态介绍主视觉" />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* 三大业务板块 */}
        <section className="intro-section intro-business">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>三大业务板块</Title>
              <Paragraph>
                聚焦航旅核心场景，构建覆盖全链路的数字化服务体系
              </Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {businessSections.map((item, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card
                    bordered={false}
                    className="intro-business__card"
                    style={{ backgroundImage: `url(${item.background})` }}
                  >
                    <div className="intro-business__icon">
                      <img src={item.icon} alt="" aria-hidden="true" />
                    </div>
                    <Title level={3}>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* 技术与安全 */}
        <section className="intro-section intro-tech">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>技术与安全</Title>
              <Paragraph>
                采用多链部署策略，结合零知识证明与多签机制，保障用户资产安全
              </Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {techCapabilities.map((item, index) => (
                <Col xs={24} sm={12} lg={6} key={index}>
                  <Card bordered={false} className="intro-tech__card">
                    <img src={item.icon} alt="" aria-hidden="true" />
                    <Title level={3}>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
            <Row gutter={[24, 24]} style={{ marginTop: 40 }}>
              <Col xs={24} lg={12}>
                <Card bordered={false} className="intro-tech__detail-card">
                  <Paragraph>
                    通过链上监控与风控系统实现资金流动透明化、风险实时预警。
                    智能合约均通过第三方审计，关键操作开放 DAO 治理投票，确保长期稳健。
                  </Paragraph>
                </Card>
              </Col>
              <Col xs={24} lg={12}>
                <div className="intro-tech__visual">
                  <img src={container_12} alt="技术架构示意" />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* 生态特色 */}
        <section className="intro-section intro-features">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>生态特色</Title>
              <Paragraph>
                构建开放、透明、高效的航旅数字生态体系
              </Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {ecosystemFeatures.map((item, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card bordered={false} className="intro-features__card">
                    <img src={item.icon} alt="" aria-hidden="true" />
                    <Title level={3}>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        {/* 生态路线图 */}
        <section className="intro-section intro-roadmap">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>生态路线图</Title>
              <Paragraph>
                循序推进的阶段目标，确保 DKB 数字航旅生态稳步落地
              </Paragraph>
            </div>
            <div className="intro-roadmap__wrapper">
              <Row gutter={[24, 24]}>
                {roadmapStages.map((stage, index) => (
                  <Col xs={24} md={8} key={index}>
                    <Card bordered={false} className="intro-roadmap__card">
                      <div className="intro-roadmap__icon">
                        <img src={stage.icon} alt="" aria-hidden="true" />
                      </div>
                      <div className="intro-roadmap__order">{`0${index + 1}`}</div>
                      <Title level={3}>{stage.title}</Title>
                      <Paragraph>{stage.description}</Paragraph>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </section>

        {/* 合作伙伴 CTA */}
        <section className="intro-section intro-cta">
          <div className="container">
            <div className="intro-cta__wrapper" style={{ backgroundImage: `url(${container_15})` }}>
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={14}>
                  <Space direction="vertical" size={24} className="intro-cta__content">
                    <Title level={2}>成为 DKB 合作伙伴</Title>
                    <Paragraph>
                      我们欢迎航空、旅游、生活方式品牌加入，共同探索数字化经济新机遇。
                      联系官方团队获取定制化合作方案。
                    </Paragraph>
                    <List
                      split={false}
                      dataSource={[
                        '预约白名单，抢先体验全新数字航旅权益',
                        '成为生态合作伙伴，共建航旅数字化新范式',
                        '实时掌握产品动态与行业洞察，洞见增长机会',
                      ]}
                      renderItem={(item) => (
                        <List.Item className="intro-cta__item">
                          <span className="intro-cta__dot" />
                          <Paragraph>{item}</Paragraph>
                        </List.Item>
                      )}
                    />
                  </Space>
                </Col>
                <Col xs={24} lg={10}>
                  <div className="intro-cta__visual">
                    <img src={container_16} alt="合作伙伴示意" />
                  </div>
                </Col>
              </Row>
              <div className="intro-cta__actions">
                <Button
                  type="primary"
                  size="large"
                  shape="round"
                  className="intro-button"
                  onClick={() => navigate('/presale')}
                >
                  加入生态
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Content>
    </Layout>
  );
}

export default Introduction;
