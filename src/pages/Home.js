import React from 'react';
import {
  Layout,
  Row,
  Col,
  Typography,
  Button,
  Space,
  Card,
  List,
  Form,
  Input,
  Grid,
  message,
} from 'antd';
import MainHeader from '../components/MainHeader';
import { useRouter } from '../router/Router';
import './Home.css';

const { Content } = Layout;
const { Title, Paragraph, Text } = Typography;

const heroVisual = require('../images/home/image@2x.png');
const brandBadge = require('../images/home/Logo@2x.png');
const heroAccent = require('../images/home/矩形 35@2x(3).png');
const overviewBg = require('../images/home/矩形 35@2x.png');
const overviewBgAlt = require('../images/home/矩形 35@2x(1).png');
const overviewBgDeep = require('../images/home/矩形 35@2x(2).png');
const membershipVisual = require('../images/home/容器@2x(10).png');
const incentiveVisual = require('../images/home/容器@2x(11).png');
const nodeVisual = require('../images/home/容器@2x(9).png');
const joinBg = require('../images/home/容器 383@2x(17).png');

const heroHighlights = [
  {
    icon: require('../images/home/容器 383@2x.png'),
    label: 'AI 智能调度网络',
  },
  {
    icon: require('../images/home/容器 383@2x(1).png'),
    label: '权益互联引擎',
  },
  {
    icon: require('../images/home/容器 383@2x(2).png'),
    label: '全球节点协同',
  },
];

const heroStats = [
  { value: '200+', label: '航旅合作资源' },
  { value: '1,000,000+', label: '生态覆盖用户' },
  { value: '150+', label: '全球服务节点' },
];

const economyHighlights = [
  {
    icon: require('../images/home/容器 383@2x(3).png'),
    title: '航旅消费场景',
    description: '机票、酒店、贵宾厅等核心航旅权益一键兑换，串联全旅程服务。',
    background: overviewBg,
  },
  {
    icon: require('../images/home/容器 383@2x(4).png'),
    title: '航空增值服务',
    description: '值机、行李、贵宾通道等增值服务链上预约，体验全面升级。',
    background: overviewBgAlt,
  },
  {
    icon: require('../images/home/容器 383@2x(5).png'),
    title: '数字资产管理',
    description: '积分、票证 NFT 化与多级风控体系，资产透明可追溯。',
    background: overviewBgDeep,
  },
];

const web3Pillars = [
  {
    icon: require('../images/home/容器 383@2x(6).png'),
    title: '权益通证化',
    description: '航旅权益上链流转，实现跨平台的即时兑换与结算。',
  },
  {
    icon: require('../images/home/容器 383@2x(7).png'),
    title: '激励价值闭环',
    description: '质押、挖矿、返利多维激励组合，驱动用户持续参与。',
  },
  {
    icon: require('../images/home/容器 383@2x(8).png'),
    title: '治理透明合规',
    description: '链上治理搭配合规风控，保障生态运营稳健可信。',
  },
];

const productMatrix = [
  {
    icon: require('../images/home/容器@2x.png'),
    title: 'DKB AI 调度引擎',
    description: '以 AI 算法实时匹配运力与需求，为航司与伙伴提升收益效率。',
  },
  {
    icon: require('../images/home/容器@2x(1).png'),
    title: 'DKB Web3 资产中心',
    description: '提供通证发行、NFT 凭证与跨链清算服务，保障资产安全流转。',
  },
  {
    icon: require('../images/home/容器@2x(2).png'),
    title: 'DKB 合作伙伴平台',
    description: '连接航司、机场、酒店及旅行社，构建开放共赢的服务网络。',
  },
];

const incentiveHighlights = [
  {
    icon: require('../images/home/容器 383@2x(9).png'),
    title: '积分通证双轨制',
    description: '积分、里程双轨并行，支持通证化流通与权益兑换。',
  },
  {
    icon: require('../images/home/容器 383@2x(10).png'),
    title: '消费闭环激励',
    description: '机票、酒店、贵宾厅等场景消费均可获取链上激励回馈。',
  },
  {
    icon: require('../images/home/容器 383@2x(11).png'),
    title: '多角色共建',
    description: '用户、节点、合作伙伴共创任务，激励持续驱动生态活力。',
  },
];

const membershipLevels = [
  {
    icon: require('../images/home/容器@2x(3).png'),
    title: '银翼会员',
    description: '享受基础航旅权益，旅程积分实时返还，畅享智慧出行。',
  },
  {
    icon: require('../images/home/容器@2x(4).png'),
    title: '金翼会员',
    description: '尊享贵宾厅、快速安检通道等增值服务，并获额外激励。',
  },
  {
    icon: require('../images/home/容器@2x(5).png'),
    title: '钻石会员',
    description: '参与生态治理委员会，享受收益分配与战略优先权。',
  },
];

const nodeHighlights = [
  {
    icon: require('../images/home/容器 383@2x(12).png'),
    title: '全球节点布局',
    description: '覆盖全球枢纽城市的线下节点，提供本地化服务与支持。',
  },
  {
    icon: require('../images/home/容器 383@2x(13).png'),
    title: '开放合作网络',
    description: '航司、机场、酒店与出行伙伴共享能力，构建协同生态。',
  },
  {
    icon: require('../images/home/容器 383@2x(14).png'),
    title: '跨境价值互联',
    description: '多币种结算与链上凭证，打通跨境消费与支付场景。',
  },
];

const joinHighlights = [
  '预约白名单，第一时间获取预售名额与权益。',
  '加入合作计划，共建数字航空经济新范式。',
  '订阅生态快讯，掌握平台重要进展。',
];

const communityChannels = [
  {
    icon: require('../images/home/容器 383@2x(15).png'),
    title: '加入全球 Telegram 社区',
    description: '实时获取生态动态、里程碑发布与全球节点招募信息。',
    action: '进入 Telegram',
  },
  {
    icon: require('../images/home/容器 383@2x(16).png'),
    title: '关注官方 Twitter',
    description: '追踪产品更新、合作伙伴发布与行业洞察观点。',
    action: '关注 Twitter',
  },
  {
    icon: require('../images/home/容器 383@2x(17).png'),
    title: '加入 Discord 技术社区',
    description: '与核心研发团队交流，参与生态提案与共创计划。',
    action: '加入 Discord',
  },
];

const footerLinks = {
  solutions: [
    'AI 调度平台',
    '数字资产中心',
    '全球节点网络',
  ],
  support: ['开发文档', '生态白皮书', '媒体资料'],
  contact: [
    { icon: require('../images/home/容器@2x(9).png'), label: '商务合作', value: 'bd@dkb.ai' },
    { icon: require('../images/home/容器@2x(10).png'), label: '社区支持', value: 'community@dkb.ai' },
    { icon: require('../images/home/容器@2x(11).png'), label: '总部', value: '新加坡 · 滨海湾金融区' },
  ],
};

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
                    <span>AI 驱动数字航空经济</span>
                  </Space>
                  <div className="home-hero__title-wrapper">
                    <Title level={1} className="home-hero__title">
                      DKB AI驱动航空经济
                      <br />
                      <Text className="home-hero__title-accent">新动能平台</Text>
                    </Title>
                    <Paragraph className="home-hero__subtitle">AI Super Drive DKB Economy</Paragraph>
                    <Paragraph className="home-hero__description">
                      以 AI 算力 + Web3 价值网络为核心，连接航旅消费、航空服务与数字资产，打造全栈数字航空经济体。
                    </Paragraph>
                  </div>
                  <Space size={[12, 12]} wrap className="home-hero__tags">
                    {heroHighlights.map((item) => (
                      <span key={item.label} className="home-hero__tag">
                        <img src={item.icon} alt="" aria-hidden="true" />
                        {item.label}
                      </span>
                    ))}
                  </Space>
                  <Space size={16} wrap className="home-hero__actions">
                    <Button type="primary" size="large" shape="round" className="home-button" onClick={handlePresaleClick}>
                      参与预售
                    </Button>
                    <Button size="large" shape="round" className="home-button home-button--ghost" onClick={handleWhitepaperClick}>
                      查看白皮书
                    </Button>
                  </Space>
                  <Row gutter={[24, 24]} className="home-hero__stats">
                    {heroStats.map((item) => (
                      <Col xs={24} sm={8} key={item.label}>
                        <Card bordered={false} className="home-hero__stat-card">
                          <Title level={3}>{item.value}</Title>
                          <Paragraph>{item.label}</Paragraph>
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

        <section className="home-section home-overview">
          <div className="container">
            <Row gutter={[40, 40]} align="stretch">
              <Col xs={24} lg={10}>
                <Card bordered={false} className="home-overview__card">
                  <Space direction="vertical" size={24}>
                    <Title level={2}>DKB.AI 数字航空经济体</Title>
                    <Paragraph>
                      以数据驱动为底座，贯穿票务、权益、金融流通的全链条平台，助力航空产业完成数字化升级。
                    </Paragraph>
                    <List
                      dataSource={heroHighlights}
                      split={false}
                      renderItem={(item) => (
                        <List.Item className="home-overview__item">
                          <img src={item.icon} alt="" aria-hidden="true" />
                          <div>
                            <Text className="home-overview__item-title">{item.label}</Text>
                            <Paragraph>
                              {item.label === 'AI 智能调度网络'
                                ? '实时洞察航旅数据，动态匹配运力与需求，实现供需最优。'
                                : item.label === '权益互联引擎'
                                ? '积分、里程、票证在链上自由流转，跨平台互换即刻完成。'
                                : '链接全球节点伙伴，打造覆盖核心枢纽的服务网络。'}
                            </Paragraph>
                          </div>
                        </List.Item>
                      )}
                    />
                  </Space>
                </Card>
              </Col>
              <Col xs={24} lg={14}>
                <Row gutter={[24, 24]}>
                  {economyHighlights.map((item) => (
                    <Col xs={24} md={12} key={item.title}>
                      <Card
                        bordered={false}
                        className="home-card home-card--economy"
                        style={{ backgroundImage: `url(${item.background})` }}
                      >
                        <img src={item.icon} alt="" aria-hidden="true" />
                        <Title level={3}>{item.title}</Title>
                        <Paragraph>{item.description}</Paragraph>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </section>

        <section className="home-section home-web3">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>Web3 原生流通价值体系</Title>
              <Paragraph>权益通证化、激励闭环与治理透明协同运作，形成价值自增长的链上经济。</Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {web3Pillars.map((item) => (
                <Col xs={24} md={8} key={item.title}>
                  <Card bordered={false} className="home-card home-card--web3">
                    <img src={item.icon} alt="" aria-hidden="true" />
                    <Title level={3}>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <section className="home-section home-products">
          <div className="container">
            <div className="section-heading">
              <Title level={2}>核心产品矩阵</Title>
              <Paragraph>围绕航旅消费、资产管理与生态协同，提供模块化产品体系，全面支撑业务落地。</Paragraph>
            </div>
            <Row gutter={[24, 24]}>
              {productMatrix.map((item) => (
                <Col xs={24} lg={8} key={item.title}>
                  <Card bordered={false} className="home-card home-card--product">
                    <img src={item.icon} alt="" aria-hidden="true" />
                    <Title level={3}>{item.title}</Title>
                    <Paragraph>{item.description}</Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <section className="home-section home-incentive">
          <div className="container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={11}>
                <div className="home-incentive__visual">
                  <img src={incentiveVisual} alt="多维激励体系可视化" />
                </div>
              </Col>
              <Col xs={24} lg={13}>
                <Space direction="vertical" size={32} className="home-incentive__content">
                  <div className="section-heading section-heading--left">
                    <Title level={2}>多维激励体系</Title>
                    <Paragraph>从链上激励到现实消费的价值闭环，让每一次参与都能转化为实际收益。</Paragraph>
                  </div>
                  <Row gutter={[24, 24]}>
                    {incentiveHighlights.map((item) => (
                      <Col xs={24} md={12} key={item.title}>
                        <Card bordered={false} className="home-card home-card--incentive">
                          <img src={item.icon} alt="" aria-hidden="true" />
                          <Title level={4}>{item.title}</Title>
                          <Paragraph>{item.description}</Paragraph>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                  <Button size="large" shape="round" className="home-button home-button--ghost" onClick={handleWhitepaperClick}>
                    了解更多
                  </Button>
                </Space>
              </Col>
            </Row>
          </div>
        </section>

        <section className="home-section home-membership">
          <div className="container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <Space direction="vertical" size={32} className="home-membership__content">
                  <div className="section-heading section-heading--left">
                    <Title level={2}>DKB 会员体系</Title>
                    <Paragraph>多层级成长路径覆盖出行前中后场景，赋能会员解锁尊享权益。</Paragraph>
                  </div>
                  <Row gutter={[24, 24]}>
                    {membershipLevels.map((item) => (
                      <Col xs={24} md={12} key={item.title}>
                        <Card bordered={false} className="home-card home-card--membership">
                          <img src={item.icon} alt="" aria-hidden="true" />
                          <Title level={4}>{item.title}</Title>
                          <Paragraph>{item.description}</Paragraph>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Space>
              </Col>
              <Col xs={24} lg={12}>
                <div className="home-membership__visual">
                  <img src={membershipVisual} alt="会员权益系统可视化" />
                </div>
              </Col>
            </Row>
          </div>
        </section>

        <section className="home-section home-nodes">
          <div className="container">
            <Row gutter={[48, 48]} align="middle">
              <Col xs={24} lg={12}>
                <div className="home-nodes__visual">
                  <img src={nodeVisual} alt="全球节点生态" />
                </div>
              </Col>
              <Col xs={24} lg={12}>
                <Space direction="vertical" size={32} className="home-nodes__content">
                  <div className="section-heading section-heading--left">
                    <Title level={2}>全球节点生态</Title>
                    <Paragraph>构建面向航旅产业的全球节点网络，推动服务协同与价值互通。</Paragraph>
                  </div>
                  <List
                    dataSource={nodeHighlights}
                    split={false}
                    renderItem={(item) => (
                      <List.Item className="home-nodes__item">
                        <img src={item.icon} alt="" aria-hidden="true" />
                        <div>
                          <Text className="home-nodes__item-title">{item.title}</Text>
                          <Paragraph>{item.description}</Paragraph>
                        </div>
                      </List.Item>
                    )}
                  />
                </Space>
              </Col>
            </Row>
          </div>
        </section>

        <section className="home-section home-community">
          <div className="container">
            <Row gutter={[48, 48]} align="middle" className="home-community__inner">
              <Col xs={24} lg={8}>
                <Space direction="vertical" size={24} className="home-community__intro">
                  <Title level={2}>加入 DKB 生态社区</Title>
                  <Paragraph>
                    打开多渠道沟通触点，与全球用户、节点伙伴与生态开发者保持实时联络，第一时间掌握活动与治理资讯。
                  </Paragraph>
                  <Paragraph className="home-community__note">所有社区活动均遵循链上治理规则与品牌规范。</Paragraph>
                </Space>
              </Col>
              <Col xs={24} lg={16}>
                <Row gutter={[24, 24]}>
                  {communityChannels.map((item) => (
                    <Col xs={24} md={12} lg={8} key={item.title}>
                      <Card bordered={false} className="home-card home-card--community">
                        <img src={item.icon} alt="" aria-hidden="true" />
                        <Title level={4}>{item.title}</Title>
                        <Paragraph>{item.description}</Paragraph>
                        <Button
                          type="primary"
                          shape="round"
                          size="large"
                          className="home-button home-button--solid"
                          onClick={() => messageApi.info('即将开放，敬请期待。')}
                        >
                          {item.action}
                        </Button>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </section>

        <section className="home-section home-join" id="join">
          <div className="container">
            <div className="home-join__inner" style={{ backgroundImage: `url(${joinBg})` }}>
              <Row gutter={[48, 48]}>
                <Col xs={24} lg={12}>
                  <Space direction="vertical" size={24} className="home-join__content">
                    <Title level={2}>加入 DKB 共建航旅数字未来</Title>
                    <Paragraph>预约成为生态合作伙伴，抢先体验完整产品矩阵与链上权益。</Paragraph>
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
          </div>
        </section>

        <footer className="home-footer">
          <div className="container">
            <Row gutter={[48, 48]}>
              <Col xs={24} lg={8}>
                <Space direction="vertical" size={20} className="home-footer__brand">
                  <Space size={16} align="center" className="home-footer__logo">
                    <img src={brandBadge} alt="DKB 品牌标识" />
                    <span>DKB.AI 数字航空经济</span>
                  </Space>
                  <Paragraph>
                    依托 AI 算力与 Web3 技术打造跨国协同的航空数字生态，为航空公司、机场、旅行服务商与用户提供可信赖的价值网络。
                  </Paragraph>
                </Space>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Space direction="vertical" size={20} className="home-footer__column">
                  <Title level={4}>解决方案</Title>
                  <List
                    dataSource={footerLinks.solutions}
                    split={false}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </Space>
              </Col>
              <Col xs={24} sm={12} lg={4}>
                <Space direction="vertical" size={20} className="home-footer__column">
                  <Title level={4}>支持资源</Title>
                  <List
                    dataSource={footerLinks.support}
                    split={false}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                  />
                </Space>
              </Col>
              <Col xs={24} lg={6}>
                <Space direction="vertical" size={20} className="home-footer__column">
                  <Title level={4}>联系我们</Title>
                  <List
                    dataSource={footerLinks.contact}
                    split={false}
                    renderItem={(item) => (
                      <List.Item className="home-footer__contact">
                        <img src={item.icon} alt="" aria-hidden="true" />
                        <div>
                          <Text>{item.label}</Text>
                          <Paragraph>{item.value}</Paragraph>
                        </div>
                      </List.Item>
                    )}
                  />
                </Space>
              </Col>
            </Row>
            <div className="home-footer__meta">
              <Text>© {new Date().getFullYear()} DKB.AI All Rights Reserved.</Text>
              <Space size={24} className="home-footer__meta-links">
                <span>隐私政策</span>
                <span>使用条款</span>
                <span>合规声明</span>
              </Space>
            </div>
          </div>
        </footer>
      </Content>
    </Layout>
  );
}

export default Home;
