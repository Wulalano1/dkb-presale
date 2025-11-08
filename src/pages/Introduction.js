import React from 'react';
import { Layout, Row, Col, Typography, Button, Space, Card, List } from 'antd';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import './Introduction.css';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

// 导入所有图片资源
const heroImage = require('../images/Introduction/image@2x.png');
const logoImage = require('../images/Introduction/Logo@2x.png');
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
const rect35_0 = require('../images/Introduction/矩形 35@2x.png');
const rect35_1 = require('../images/Introduction/矩形 35@2x(1).png');
const rect35_2 = require('../images/Introduction/矩形 35@2x(2).png');
const rect35_3 = require('../images/Introduction/矩形 35@2x(3).png');
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

function Introduction() {
  const { navigate } = useRouter();

  return (
    <Layout className="intro-layout">
      <MainHeader theme="light" />
      <Content className="intro-content">
        {/* Hero Section */}
        <section className="intro-hero">
          <div className="container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <Space direction="vertical" size={32} className="intro-hero__content">
                  <div className="intro-hero__badge">
                    <img src={logoImage} alt="DKB" />
                    <span>DKB 官方生态介绍</span>
                  </div>
                  <div className="intro-hero__headline">
                    <Title level={1} className="intro-hero__title">
                      DKB 官方生态介绍
                    </Title>
                    <Paragraph className="intro-hero__description">
                      DKB 通过数字资产驱动航空产业升级，打造服务全球旅客的分布式生态。
                      预售只是起点，完整的产品矩阵覆盖支付、会员、营销、治理等多个维度。
                    </Paragraph>
                  </div>
                </Space>
              </Col>
              <Col xs={24} lg={12}>
                <div className="intro-hero__visual">
                  <img src={heroImage} alt="DKB 官方生态介绍" />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Section 1: 三大业务板块 */}
        <section className="intro-section intro-section--business">
          <div className="container">
            <div className="intro-section-bg" style={{ backgroundImage: `url(${container112})` }}>
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={12}>
                  <Space direction="vertical" size={28} className="intro-section__content">
                    <Title level={2} className="intro-section__title">三大业务板块</Title>
                    <List
                      split={false}
                      dataSource={[
                        {
                          icon: container383_0,
                          title: '航空票务与增值服务',
                          description: '聚焦机票、贵宾休息室、机场快线等高频场景。',
                        },
                        {
                          icon: container383_1,
                          title: '链上金融与资产管理',
                          description: '通过质押、借贷、NFT 赋能航旅权益增值。',
                        },
                        {
                          icon: container383_2,
                          title: '全球社区与营销',
                          description: '搭建多语言社区体系，构建激励型增长模型。',
                        },
                      ]}
                      renderItem={(item) => (
                        <List.Item className="intro-business__item">
                          <Space size={20} align="start">
                            <img src={item.icon} alt="" aria-hidden="true" />
                            <div>
                              <Text className="intro-business__title">{item.title}</Text>
                              <Paragraph className="intro-business__desc">{item.description}</Paragraph>
                            </div>
                          </Space>
                        </List.Item>
                      )}
                    />
                  </Space>
                </Col>
                <Col xs={24} lg={12}>
                  <div className="intro-section__visual">
                    <img src={container383_3} alt="业务板块图示" />
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* Section 2: 技术与安全 */}
        <section className="intro-section intro-section--tech">
          <div className="container">
            <div className="intro-section-bg" style={{ backgroundImage: `url(${container113})` }}>
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={12} order={2} lg={{ order: 1 }}>
                  <div className="intro-section__visual">
                    <img src={container383_4} alt="技术架构示意" />
                  </div>
                </Col>
                <Col xs={24} lg={12} order={1} lg={{ order: 2 }}>
                  <Space direction="vertical" size={28} className="intro-section__content">
                    <Title level={2} className="intro-section__title">技术与安全</Title>
                    <Paragraph className="intro-section__text">
                      采用多链部署策略，结合零知识证明与多签机制，保障用户资产安全。
                      通过链上监控与风控系统实现资金流动透明化、风险实时预警。
                    </Paragraph>
                    <Paragraph className="intro-section__text">
                      智能合约均通过第三方审计，关键操作开放 DAO 治理投票，确保长期稳健。
                    </Paragraph>
                    <div className="intro-tech__features">
                      <Row gutter={[16, 16]}>
                        <Col xs={12} sm={6}>
                          <Card bordered={false} className="intro-tech__card">
                            <img src={container384_0} alt="" aria-hidden="true" />
                            <Text className="intro-tech__label">多链部署</Text>
                          </Card>
                        </Col>
                        <Col xs={12} sm={6}>
                          <Card bordered={false} className="intro-tech__card">
                            <img src={container384_1} alt="" aria-hidden="true" />
                            <Text className="intro-tech__label">零知识证明</Text>
                          </Card>
                        </Col>
                        <Col xs={12} sm={6}>
                          <Card bordered={false} className="intro-tech__card">
                            <img src={container384_2} alt="" aria-hidden="true" />
                            <Text className="intro-tech__label">多签机制</Text>
                          </Card>
                        </Col>
                        <Col xs={12} sm={6}>
                          <Card bordered={false} className="intro-tech__card">
                            <img src={container384_3} alt="" aria-hidden="true" />
                            <Text className="intro-tech__label">DAO 治理</Text>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Space>
                </Col>
              </Row>
            </div>
          </div>
        </section>

        {/* Section 3: 生态路线图 */}
        <section className="intro-section intro-section--roadmap">
          <div className="container">
            <div className="intro-section-bg" style={{ backgroundImage: `url(${container114})` }}>
              <div className="section-heading">
                <Title level={2} className="intro-section__title">生态路线图</Title>
                <Paragraph className="intro-section__subtitle">
                  循序推进的阶段目标，确保 DKB 数字航旅生态稳步落地
                </Paragraph>
              </div>
              <div className="intro-roadmap__stages">
                <Row gutter={[24, 24]}>
                  {[
                    {
                      icon: container383_5,
                      title: '阶段一：预售 & 会员开放',
                      description: '完成代币发行与会员通行证空投，搭建节点激励体系。',
                      bg: rect35_0,
                    },
                    {
                      icon: container383_6,
                      title: '阶段二：航旅权益数字化',
                      description: '推出机票、里程、酒店等权益的 NFT 化，并支持二级市场流通。',
                      bg: rect35_1,
                    },
                    {
                      icon: container383_7,
                      title: '阶段三：全球支付网络',
                      description: '上线跨境支付渠道，与更多商业场景打通，实现闭环消费。',
                      bg: rect35_2,
                    },
                    {
                      icon: container383_8,
                      title: '阶段四：DAO 治理升级',
                      description: '开放治理提案系统，社区共同决定生态发展方向。',
                      bg: rect35_3,
                    },
                  ].map((stage, index) => (
                    <Col xs={24} sm={12} lg={6} key={index}>
                      <Card
                        bordered={false}
                        className="intro-roadmap__card"
                        style={{ backgroundImage: `url(${stage.bg})` }}
                      >
                        <div className="intro-roadmap__icon">
                          <img src={stage.icon} alt="" aria-hidden="true" />
                        </div>
                        <Title level={3} className="intro-roadmap__title">
                          {stage.title}
                        </Title>
                        <Paragraph className="intro-roadmap__desc">{stage.description}</Paragraph>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: CTA */}
        <section className="intro-section intro-section--cta">
          <div className="container">
            <Card bordered={false} className="intro-cta__card">
              <Row gutter={[48, 48]} align="middle">
                <Col xs={24} lg={16}>
                  <Space direction="vertical" size={20}>
                    <Title level={2} className="intro-cta__title">成为 DKB 合作伙伴</Title>
                    <Paragraph className="intro-cta__description">
                      我们欢迎航空、旅游、生活方式品牌加入，共同探索数字化经济新机遇。
                      联系官方团队获取定制化合作方案。
                    </Paragraph>
                    <List
                      split={false}
                      dataSource={[
                        {
                          icon: container_12,
                          text: '预约白名单，抢先体验全新数字航旅权益',
                        },
                        {
                          icon: container_15,
                          text: '成为生态合作伙伴，共建航旅数字化新范式',
                        },
                        {
                          icon: container_16,
                          text: '实时掌握产品动态与行业洞察，洞见增长机会',
                        },
                      ]}
                      renderItem={(item) => (
                        <List.Item className="intro-cta__item">
                          <Space size={16} align="start">
                            <img src={item.icon} alt="" aria-hidden="true" />
                            <Paragraph className="intro-cta__item-text">{item.text}</Paragraph>
                          </Space>
                        </List.Item>
                      )}
                    />
                  </Space>
                </Col>
                <Col xs={24} lg={8}>
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
                </Col>
              </Row>
            </Card>
          </div>
        </section>
      </Content>
    </Layout>
  );
}

export default Introduction;
