import React from 'react';
import { Layout, Row, Col, Typography, Button, Space, Card, List, Statistic, Steps, Form, Input, Grid, message } from 'antd';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import './Home.css';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const heroVisual = require('../images/home/image@2x.png');
const heroBadgeIcon = require('../images/home/Logo@2x.png');
const heroGlow = require('../images/home/矩形 35@2x(3).png');
const capabilityBgA = require('../images/home/容器 383@2x(10).png');
const capabilityBgB = require('../images/home/容器 383@2x(11).png');
const capabilityBgC = require('../images/home/容器 383@2x(12).png');
const capabilityBgD = require('../images/home/容器 383@2x(13).png');
const scenarioBgPrimary = require('../images/home/矩形 35@2x.png');
const scenarioBgSecondary = require('../images/home/矩形 35@2x(1).png');
const scenarioBgTertiary = require('../images/home/矩形 35@2x(2).png');
const membershipVisual = require('../images/home/容器@2x(6).png');
const membershipBadge = require('../images/home/容器 383@2x(15).png');
const incentiveVisual = require('../images/home/容器@2x(7).png');
const joinBackdrop = require('../images/home/容器 383@2x(17).png');

const heroHighlights = [
  {
    icon: require('../images/home/容器 383@2x.png'),
    title: 'AI 智能调度指挥塔',
    description: '汇聚航线、客座率、天气等多维数据，实现分钟级调度优化。',
  },
  {
    icon: require('../images/home/容器 383@2x(1).png'),
    title: '航旅权益全链协同',
    description: '票务、积分、里程实时上链，权益流转透明安全。',
  },
  {
    icon: require('../images/home/容器 383@2x(2).png'),
    title: '全球生态协作网络',
    description: '联接航司、机场、服务商与旅客，构筑跨区域服务矩阵。',
  },
];

const heroStats = [
  { value: '13+', label: '核心航旅合作方' },
  { value: '98%', label: '资源协同效率提升' },
  { value: '150+', label: '全球节点触达' },
];

const capabilityMatrix = [
  {
    title: '智能调度引擎',
    description: '动态调控航线容量、运力排布与地服协同，保障航班准点与成本优化。',
    icon: require('../images/home/容器 383@2x(3).png'),
    background: capabilityBgA,
  },
  {
    title: '全链路权益资产',
    description: '将票证、积分、里程通证化管理，实现权益互兑、拆分与组合发行。',
    icon: require('../images/home/容器 383@2x(4).png'),
    background: capabilityBgB,
  },
  {
    title: '跨界合作中台',
    description: '整合酒店、文旅、零售等场景，构筑覆盖出行全链的生态连接器。',
    icon: require('../images/home/容器 383@2x(5).png'),
    background: capabilityBgC,
  },
  {
    title: '合规安全护盾',
    description: '多重身份验证、风控审计与合规框架，守护资产与数据安全。',
    icon: require('../images/home/容器 383@2x(6).png'),
    background: capabilityBgD,
  },
];

const scenarioHighlights = [
  {
    title: '航旅消费全旅程',
    description: '机票、酒店、贵宾厅、接驳等权益一键预约，旅客体验全面升级。',
    icon: require('../images/home/容器 383@2x(7).png'),
    background: scenarioBgPrimary,
  },
  {
    title: '航空增值服务',
    description: '值机、行李、贵宾通道链上预约，服务履约可追溯。',
    icon: require('../images/home/容器 383@2x(8).png'),
    background: scenarioBgSecondary,
  },
  {
    title: '数字资产流转',
    description: '积分、NFT 凭证、品牌权益跨场景流动，提升资产复用效率。',
    icon: require('../images/home/容器 383@2x(9).png'),
    background: scenarioBgTertiary,
  },
];

const valueHighlights = [
  {
    icon: require('../images/home/容器 384@2x.png'),
    title: 'AI 全域洞察',
    description: '实时预测客流与营收趋势，助力运营策略精细化。',
  },
  {
    icon: require('../images/home/容器 384@2x(1).png'),
    title: 'Web3 激励闭环',
    description: '质押、挖矿、消费返利等激励组合，驱动用户长期留存。',
  },
  {
    icon: require('../images/home/容器 384@2x(2).png'),
    title: '全球节点协同',
    description: '覆盖重点枢纽城市的服务节点，实现本地化运营支持。',
  },
  {
    icon: require('../images/home/容器 384@2x(3).png'),
    title: '安全合规体系',
    description: '多重签名、链上监控与审计，符合全球航空监管要求。',
  },
];

const roadmapSteps = [
  {
    title: '战略发布',
    description: '完成数字航旅生态顶层设计，启动全球核心伙伴招募。',
    period: '2023 Q4',
  },
  {
    title: '生态上线',
    description: '会员系统、预售平台与权益商城正式开放首批航旅资源。',
    period: '2024 Q2',
  },
  {
    title: '智能调度落地',
    description: 'AI 调度系统连接航司与机场，实现航班编排与资源优化。',
    period: '2024 Q4',
  },
  {
    title: '全球网络扩展',
    description: '完成重点国家节点布局，搭建跨境清算与支付网络。',
    period: '2025 Q2',
  },
];

const membershipLevels = [
  {
    icon: require('../images/home/容器@2x.png'),
    title: '启航会员',
    description: '尊享基础航旅权益、出行补贴与积分返还，入门即有回馈。',
  },
  {
    icon: require('../images/home/容器@2x(1).png'),
    title: '领航会员',
    description: '获得贵宾厅、快速通道等高端服务，并解锁额外激励池。',
  },
  {
    icon: require('../images/home/容器@2x(2).png'),
    title: '星舰会员',
    description: '参与生态治理投票，分享全球节点收益与空投权益。',
  },
];

const incentiveHighlights = [
  '积分、里程、NFT 凭证互换，随时兑换真实服务。',
  '链上任务、签到、消费行为实时反馈奖励，增强用户粘性。',
  '支持全球法币与加密资产结算，跨境支付秒级到账。',
  '合作伙伴可按场景自定义激励策略，精准驱动增长。',
];

const joinHighlights = [
  '预约白名单，抢先体验全新数字航旅权益。',
  '成为生态合作伙伴，共建航旅数字化新范式。',
  '实时掌握产品动态与行业洞察，洞见增长机会。',
];

function Home() {
  const { navigate } = useRouter();
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const handleWhitepaperClick = () => {
    navigate('/introduction');
  };

  const handlePresaleClick = () => {
    navigate('/presale');
  };

  const handleFormSubmit = (values) => {
    console.log('Join form submit', values);
    messageApi.success('感谢提交，我们会尽快与您联系。');
    form.resetFields();
  };

  return (
    <Layout className="home-layout">
      {contextHolder}
      <MainHeader theme="dark" />
      <Content className="home-content">
        <section className="home-hero">
          <div className="home-hero__glow">
            <img src={heroGlow} alt="" aria-hidden="true" />
          </div>
          <div className="container">
            <Row gutter={[64, 64]} align="middle">
              <Col xs={24} lg={12}>
                <Space direction="vertical" size={32} className="home-hero__content">
                  <Space size={14} align="center" className="home-hero__badge">
                    <img src={heroBadgeIcon} alt="DKB" />
                    <span>DKB 数字航旅生态</span>
                  </Space>
                  <div className="home-hero__headline">
                    <Title level={1} className="home-hero__title">
                      <span>飞航数智</span>
                      <br />
                      引领航空经济系统级焕新
                    </Title>
                    <Paragraph className="home-hero__subtitle">AI 智能调度 × Web3 激励 × 全域生态协同</Paragraph>
                    <Paragraph className="home-hero__description">
                      打通航司、机场、服务商与旅客之间的数据与价值流，以链上激励驱动协同增长，打造面向未来的数字航旅基础设施。
                    </Paragraph>
                  </div>
                  <Row gutter={[16, 16]} className="home-hero__highlight-grid">
                    {heroHighlights.map((item) => (
                      <Col xs={24} sm={12} key={item.title}>
                        <Card bordered={false} className="home-hero__highlight-card">
                          <Space align="start" size={16}>
                            <img src={item.icon} alt="" aria-hidden="true" />
                            <div>
                              <Text className="home-hero__highlight-title">{item.title}</Text>
                              <Paragraph className="home-hero__highlight-desc">{item.description}</Paragraph>
                            </div>
                          </Space>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  <Space size={18} wrap className="home-hero__actions">
                    <Button type="primary" size="large" shape="round" className="home-button" onClick={handlePresaleClick}>
                      立即参与预售
                    </Button>
                    <Button size="large" shape="round" className="home-button home-button--ghost" onClick={handleWhitepaperClick}>
                      下载白皮书
                    </Button>
                  </Space>
                  <Row gutter={[24, 24]} className="home-hero__stats">
                    {heroStats.map((stat) => (
                      <Col xs={24} sm={8} key={stat.label}>
                        <Card bordered={false} className="home-hero__stat-card">
                          <Statistic value={stat.value} title={stat.label} valueStyle={{ color: '#FFFFFF' }} titleStyle={{ color: 'rgba(222, 235, 255, 0.72)' }} />
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Space>
              </Col>
              <Col xs={24} lg={12}>
                <div className="home-hero__visual">
                  <img src={heroVisual} alt="DKB 数字航旅生态主视觉" />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="home-section home-capability">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>四大核心能力矩阵</Title>
              <Paragraph>构筑航空产业数智化底座，打通数据、资产与服务的协同路径。</Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {capabilityMatrix.map((item) => (
                <Col xs={24} sm={12} lg={6} key={item.title}>
                  <Card bordered={false} className="home-capability__card" style={{ backgroundImage: `url(${item.background})` }}>
                    <div className="home-capability__icon">
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

        <section className="home-section home-scenario">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>多元航旅消费场景</Title>
              <Paragraph>以用户旅程为中心，提供覆盖出行全链路的数智化服务体验。</Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {scenarioHighlights.map((item) => (
                <Col xs={24} md={8} key={item.title}>
                  <Card bordered={false} className="home-scenario__card" style={{ backgroundImage: `url(${item.background})` }}>
                    <img src={item.icon} alt="" aria-hidden="true" />
                    <Title level={3}>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <section className="home-section home-value">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>价值闭环驱动增长</Title>
              <Paragraph>AI 与 Web3 双引擎，赋能多角色协同，释放航旅产业新动能。</Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {valueHighlights.map((item) => (
                <Col xs={24} sm={12} lg={6} key={item.title}>
                  <Card bordered={false} className="home-value__card">
                    <img src={item.icon} alt="" aria-hidden="true" />
                    <Title level={3}>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <section className="home-section home-roadmap">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>生态发展路线图</Title>
              <Paragraph>循序推进的阶段目标，确保 DKB 数字航旅生态稳步落地。</Paragraph>
            </div>
            <div className="home-roadmap__wrapper">
              <Steps
                current={roadmapSteps.length - 1}
                direction={screens.lg ? 'horizontal' : 'vertical'}
                items={roadmapSteps.map((step, index) => ({
                  title: (
                    <div className="home-roadmap__title">
                      <span className="home-roadmap__order">{`0${index + 1}`}</span>
                      <span>{step.title}</span>
                    </div>
                  ),
                  description: (
                    <div className="home-roadmap__description">
                      <Text className="home-roadmap__period">{step.period}</Text>
                      <Paragraph>{step.description}</Paragraph>
                    </div>
                  ),
                }))}
              />
            </div>
          </div>
        </section>

        <section className="home-section home-membership">
          <div className="container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <Space direction="vertical" size={36} className="home-membership__content">
                  <div className="section-heading section-heading--left">
                    <Title level={2}>会员权益进阶体系</Title>
                    <Paragraph>多层级成长路径覆盖航旅出行场景，激励旅客持续参与。</Paragraph>
                  </div>
                  <List
                    split={false}
                    dataSource={membershipLevels}
                    renderItem={(item) => (
                      <List.Item className="home-membership__item">
                        <Space size={20} align="start">
                          <img src={item.icon} alt="" aria-hidden="true" />
                          <div>
                            <Text className="home-membership__title">{item.title}</Text>
                            <Paragraph>{item.description}</Paragraph>
                          </div>
                        </Space>
                      </List.Item>
                    )}
                  />
                </Space>
              </Col>
              <Col xs={24} lg={12}>
                <div className="home-membership__visual">
                  <img src={membershipVisual} alt="会员权益示意" />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="home-section home-network">
          <div className="container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={8}>
                <Space direction="vertical" size={28} className="home-network__content">
                  <div className="section-heading section-heading--left">
                    <div className="section-badge">
                      <img src={valueBadge} alt="生态联盟" />
                      <span>ALLIANCE</span>
                    </div>
                    <Title level={2}>全球生态联盟协作</Title>
                    <Paragraph>
                      打造覆盖航旅、文旅、零售与金融的协同网络，提供本地化服务与跨境价值互联。
                    </Paragraph>
                  </div>
                  <img className="home-network__visual-mobile" src={networkVisual} alt="生态节点图" />
                </Space>
              </Col>
              <Col xs={24} lg={10}>
                {isMobile ? (
                  <Carousel dots className="home-carousel">
                    {allianceHighlights.map((item) => (
                      <div key={item.title} className="home-carousel__slide">
                        <Card bordered={false} className="home-network__card">
                          <Space align="start" size={18}>
                            <img src={item.icon} alt="" aria-hidden="true" />
                            <div>
                              <Title level={3}>{item.title}</Title>
                              <Paragraph>{item.description}</Paragraph>
                            </div>
                          </Space>
                        </Card>
                      </div>
                    ))}
                  </Carousel>
                ) : (
                  <Row gutter={[24, 24]}>
                    {allianceHighlights.map((item) => (
                      <Col xs={24} sm={12} key={item.title}>
                        <Card bordered={false} className="home-network__card">
                          <Space align="start" size={18}>
                            <img src={item.icon} alt="" aria-hidden="true" />
                            <div>
                              <Title level={3}>{item.title}</Title>
                              <Paragraph>{item.description}</Paragraph>
                            </div>
                          </Space>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                )}
              </Col>
              <Col xs={24} lg={6} className="home-network__visual-wrapper">
                <img src={networkVisual} alt="生态节点图" />
              </Col>
            </Row>
          </div>
        </section>

        <section className="home-section home-incentive">
          <div className="container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={11}>
                <div className="home-incentive__visual">
                  <img src={incentiveVisual} alt="链上激励场景" />
                </div>
              </Col>
              <Col xs={24} lg={13}>
                <Space direction="vertical" size={32} className="home-incentive__content">
                  <div className="section-heading section-heading--left">
                    <Title level={2}>链上激励连接现实消费</Title>
                    <Paragraph>通过智能合约驱动权益流转，打通价值闭环，赋能每一次旅程。</Paragraph>
                  </div>
                  <List
                    split={false}
                    dataSource={incentiveHighlights}
                    renderItem={(item) => (
                      <List.Item className="home-incentive__item">
                        <span className="home-incentive__dot" />
                        <Paragraph>{item}</Paragraph>
                      </List.Item>
                    )}
                  />
                  <Button size="large" shape="round" className="home-button home-button--ghost" onClick={handleWhitepaperClick}>
                    了解更多
                  </Button>
                </Space>
              </Col>
            </Row>
          </div>
        </section>

        <section className="home-section home-join" id="join">
          <div className="container home-join__inner" style={{ backgroundImage: `url(${joinBackdrop})` }}>
            <Row gutter={[48, 48]}>
              <Col xs={24} lg={12}>
                <Space direction="vertical" size={28} className="home-join__content">
                  <Title level={2}>即刻加入 DKB 数字航旅生态</Title>
                  <Paragraph>预约成为合作伙伴，共享航旅数字化红利，抢先布局未来赛道。</Paragraph>
                  <List
                    split={false}
                    dataSource={joinHighlights}
                    renderItem={(item) => (
                      <List.Item className="home-join__item">
                        <span className="home-join__icon" />
                        <Paragraph>{item}</Paragraph>
                      </List.Item>
                    )}
                  />
                  <Divider className="home-join__divider" />
                  <Space direction="vertical" size={12} className="home-join__contact">
                    <Text className="home-join__contact-label">商务合作</Text>
                    <Text className="home-join__contact-value">contact@dkb.global</Text>
                  </Space>
                </Space>
              </Col>
              <Col xs={24} lg={12}>
                <Card bordered={false} className="home-join__form-card">
                  <Form layout="vertical" form={form} onFinish={handleFormSubmit} size="large">
                    <Form.Item label="姓名" name="name" rules={[{ required: true, message: '请输入姓名' }]}> 
                      <Input placeholder="请输入姓名" allowClear />
                    </Form.Item>
                    <Form.Item
                      label="邮箱"
                      name="email"
                      rules={[
                        { required: true, message: '请输入邮箱' },
                        { type: 'email', message: '邮箱格式不正确' },
                      ]}
                    >
                      <Input placeholder="请输入邮箱" allowClear />
                    </Form.Item>
                    <Form.Item label="Telegram" name="telegram">
                      <Input placeholder="请输入 Telegram" allowClear />
                    </Form.Item>
                    <Form.Item label="合作需求" name="message">
                      <Input.TextArea rows={screens.xs ? 4 : 5} placeholder="请描述您的合作诉求" allowClear />
                    </Form.Item>
                    <Form.Item>
                      <Button type="primary" htmlType="submit" size="large" shape="round" className="home-button">
                        提交申请
                      </Button>
                    </Form.Item>
                  </Form>
                </Card>
              </Col>
            </Row>
          </div>
        </section>
      </Content>
    </Layout>
  );
}

export default Home;
