import React from 'react';
import { Layout, Row, Col, Typography, Button, Space, Statistic, Card, List, Form, Input, Grid, message } from 'antd';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import './Home.css';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const heroVisual = require('../images/home/image@2x.png');
const brandBadge = require('../images/home/Logo@2x.png');
const heroAccent = require('../images/home/矩形 35@2x(3).png');
const ecosystemBgPrimary = require('../images/home/矩形 35@2x.png');
const ecosystemBgSecondary = require('../images/home/矩形 35@2x(1).png');
const ecosystemBgTertiary = require('../images/home/矩形 35@2x(2).png');
const membershipVisual = require('../images/home/容器@2x(6).png');
const incentiveVisual = require('../images/home/容器@2x(7).png');
const joinBg = require('../images/home/容器 383@2x(17).png');

const heroHighlights = [
  {
    icon: require('../images/home/容器 383@2x.png'),
    title: 'AI 智能调度',
    description: '多源航旅数据实时洞察，动态匹配运力与需求。',
  },
  {
    icon: require('../images/home/容器 383@2x(1).png'),
    title: '权益互联',
    description: '会员、积分、票证在链上无缝流通与兑换。',
  },
  {
    icon: require('../images/home/容器 383@2x(2).png'),
    title: '全球协同',
    description: '覆盖全球枢纽城市的节点与服务伙伴网络。',
  },
];

const heroStats = [
  { value: '200+', label: '航旅合作资源' },
  { value: '1,000,000+', label: '生态覆盖用户' },
  { value: '150+', label: '全球服务节点' },
];

const ecosystemCards = [
  {
    icon: require('../images/home/容器 383@2x(3).png'),
    title: '航旅消费场景',
    description: '机票、酒店、贵宾厅等核心航旅权益一键兑换，畅享全旅程服务。',
    background: ecosystemBgPrimary,
  },
  {
    icon: require('../images/home/容器 383@2x(4).png'),
    title: '航空增值服务',
    description: '值机、行李、贵宾通道等增值服务链上预约，体验升级。',
    background: ecosystemBgSecondary,
  },
  {
    icon: require('../images/home/容器 383@2x(5).png'),
    title: '数字资产管理',
    description: '积分通证化与 NFT 凭证，资产安全透明可追溯。',
    background: ecosystemBgTertiary,
  },
];

const valueHighlights = [
  {
    icon: require('../images/home/容器 384@2x.png'),
    title: 'AI 驱动收益',
    description: '通过智能引擎匹配供需，提升收益率与资源利用效率。',
  },
  {
    icon: require('../images/home/容器 384@2x(1).png'),
    title: '链上激励模型',
    description: '质押、挖矿、返利多维激励，鼓励用户共建生态。',
  },
  {
    icon: require('../images/home/容器 384@2x(2).png'),
    title: '全球节点网络',
    description: '核心航旅节点部署边缘服务，提供本地化运营支持。',
  },
  {
    icon: require('../images/home/容器 384@2x(3).png'),
    title: '安全合规体系',
    description: '多重签名、风控审计与合规架构保障资产安全。',
  },
];

const roadmapSteps = [
  {
    period: '2023 Q4',
    milestone: '发布 DKB 数字航空生态战略，启动核心伙伴计划。',
  },
  {
    period: '2024 Q2',
    milestone: '预售与会员系统上线，开放首批航旅权益合作。',
  },
  {
    period: '2024 Q4',
    milestone: 'AI 调度系统全面接入，启动链上激励闭环。',
  },
  {
    period: '2025 Q2',
    milestone: '完成全球节点布局，构建跨境支付网络。',
  },
];

const membershipLevels = [
  {
    icon: require('../images/home/容器@2x.png'),
    title: '银翼会员',
    description: '基础航旅权益 + 航线积分返还，轻松开启数字旅程。',
  },
  {
    icon: require('../images/home/容器@2x(1).png'),
    title: '金翼会员',
    description: '贵宾厅、快速通道等尊享服务，并获得额外激励。',
  },
  {
    icon: require('../images/home/容器@2x(2).png'),
    title: '钻石会员',
    description: '参与治理委员会，享受生态收益分配与决策权。',
  },
];

const incentiveHighlights = [
  '积分、里程通证化，随时兑换与转让。',
  '支持机票、酒店、贵宾厅等多场景消费。',
  '链上任务、NFT 收藏等玩法激发活跃度。',
  '跨境支付网络加速全球结算。',
];

const joinHighlights = [
  '预约白名单，第一时间解锁权益。',
  '加入合作计划，共创航旅数字化未来。',
  '获取最新动态，洞察生态成长脉搏。',
];

function Home() {
  const { navigate } = useRouter();
  const screens = Grid.useBreakpoint();
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
          <div className="home-hero__accent">
            <img src={heroAccent} alt="" aria-hidden="true" />
          </div>
          <div className="container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <Space direction="vertical" size={32} className="home-hero__content">
                  <Space size={16} align="center" className="home-hero__brand">
                    <img src={brandBadge} alt="DKB 品牌标识" />
                    <span>AI 驱动数字航旅引擎</span>
                  </Space>
                  <div className="home-hero__title-wrapper">
                    <Title level={1} className="home-hero__title">
                      DKB 数字航旅
                      <br />
                      <Text className="home-hero__title-accent">全域赋能计划</Text>
                    </Title>
                    <Paragraph className="home-hero__subtitle">AI Super Drive DKB Economy</Paragraph>
                    <Paragraph className="home-hero__description">
                      以 AI + Web3 为核心动能，连接航旅消费、增值服务与数字资产，构筑一体化航空经济生态。
                    </Paragraph>
                  </div>
                  <Row gutter={[16, 16]} className="home-hero__highlight-row">
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
                  <Space size={16} wrap className="home-hero__actions">
                    <Button type="primary" size="large" shape="round" className="home-button" onClick={handlePresaleClick}>
                      立即参与预售
                    </Button>
                    <Button size="large" shape="round" className="home-button home-button--ghost" onClick={handleWhitepaperClick}>
                      下载白皮书
                    </Button>
                  </Space>
                  <Row gutter={[24, 24]} className="home-hero__stats">
                    {heroStats.map((item) => (
                      <Col xs={24} sm={8} key={item.label}>
                        <Card bordered={false} className="home-hero__stat-card">
                          <Statistic value={item.value} title={item.label} valueStyle={{ color: '#ffffff' }} titleStyle={{ color: 'rgba(226, 232, 255, 0.75)' }} />
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

        <section className="home-section home-ecosystem">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>生态矩阵全景布局</Title>
              <Paragraph>覆盖航旅消费、增值服务与数字资产管理，打造无缝链接的数字生态。</Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {ecosystemCards.map((card) => (
                <Col xs={24} md={8} key={card.title}>
                  <Card
                    bordered={false}
                    className="home-card home-card--ecosystem"
                    style={{ backgroundImage: `url(${card.background})` }}
                  >
                    <img src={card.icon} alt="" aria-hidden="true" />
                    <Title level={3}>{card.title}</Title>
                    <Paragraph>{card.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <section className="home-section home-value">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>Web3 赋能的价值体系</Title>
              <Paragraph>链上激励驱动用户成长，多角色共建共享价值闭环。</Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {valueHighlights.map((card) => (
                <Col xs={24} md={12} lg={6} key={card.title}>
                  <Card bordered={false} className="home-card home-card--value">
                    <img src={card.icon} alt="" aria-hidden="true" />
                    <Title level={3}>{card.title}</Title>
                    <Paragraph>{card.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <section className="home-section home-roadmap">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>生态发展路线</Title>
              <Paragraph>循序推进的阶段目标，保障 DKB 数字航空生态稳步落地。</Paragraph>
            </div>
            <List
              className="home-roadmap__list"
              dataSource={roadmapSteps}
              renderItem={(item, index) => (
                <List.Item className="home-roadmap__item">
                  <div className="home-roadmap__index">{`0${index + 1}`}</div>
                  <div className="home-roadmap__content">
                    <Text className="home-roadmap__period">{item.period}</Text>
                    <Paragraph>{item.milestone}</Paragraph>
                  </div>
                </List.Item>
              )}
            />
          </div>
        </section>

        <section className="home-section home-membership">
          <div className="container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <Space direction="vertical" size={32} className="home-membership__content">
                  <div className="section-heading section-heading--left">
                    <Title level={2}>会员权益体系</Title>
                    <Paragraph>多层级成长路径，覆盖航旅出行全场景权益。</Paragraph>
                  </div>
                  <List
                    dataSource={membershipLevels}
                    split={false}
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
                  <img src={membershipVisual} alt="会员权益可视化" />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="home-section home-incentive">
          <div className="container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={11}>
                <div className="home-incentive__visual">
                  <img src={incentiveVisual} alt="链上激励应用场景" />
                </div>
              </Col>
              <Col xs={24} lg={13}>
                <Space direction="vertical" size={32} className="home-incentive__content">
                  <div className="section-heading section-heading--left">
                    <Title level={2}>链上激励连接现实消费</Title>
                    <Paragraph>数字资产价值快速兑现，驱动航旅消费闭环升级。</Paragraph>
                  </div>
                  <List
                    dataSource={incentiveHighlights}
                    split={false}
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
          <div className="container home-join__inner" style={{ backgroundImage: `url(${joinBg})` }}>
            <Row gutter={[48, 48]}>
              <Col xs={24} lg={12}>
                <Space direction="vertical" size={24} className="home-join__content">
                  <Title level={2}>即刻加入 DKB 数字航旅生态</Title>
                  <Paragraph>预约成为生态合作伙伴，获取最新进展与独家权益。</Paragraph>
                  <List
                    dataSource={joinHighlights}
                    split={false}
                    renderItem={(item) => (
                      <List.Item className="home-join__item">
                        <span className="home-join__icon" />
                        <Paragraph>{item}</Paragraph>
                      </List.Item>
                    )}
                  />
                </Space>
              </Col>
              <Col xs={24} lg={12}>
                <Card bordered={false} className="home-join__form-card">
                  <Form form={form} layout="vertical" onFinish={handleFormSubmit} size="large">
                    <Form.Item
                      label="姓名"
                      name="name"
                      rules={[{ required: true, message: '请输入姓名' }]}
                    >
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
