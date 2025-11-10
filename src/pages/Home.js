import React from "react";
import { Layout, Button, Card, Row, Col, Typography, Space } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import MainHeader from "../components/MainHeader";
import Footer from "../components/Footer";
import { useRouter } from "../router/Router";
import { useI18n } from "../i18n/I18nProvider";
import "./Home.css";

const { Content } = Layout;
const { Title, Text } = Typography;

function Home() {
  const { navigate } = useRouter();
  const { t } = useI18n();

  // 返佣比例数据
  const rebateData = [
    { level: t("home.rebate.ratio.levels.0"), ratio: "6%" },
    { level: t("home.rebate.ratio.levels.1"), ratio: "3%" },
    { level: t("home.rebate.ratio.levels.2"), ratio: "2%" },
  ];

  return (
    <Layout className="home-layout">
      <MainHeader theme="dark" />

      <Content className="home-content">
        {/* Hero Section */}
        <section className="home-hero-section">
          <div className="home-hero-background">
            <img
              src={require("../images/home/tbg.png")}
              alt="Hero Background"
              className="home-hero-bg-image"
            />
          </div>
          <div className="home-hero-content">
            {/* Top Badge */}
            <div className="home-hero-badge">
              <div className="home-badge-icon">
                <img
                  src={require("../images/home/fj.png")}
                  style={{ width: 16, height: 16, marginRight: 4 }}
                  alt="Aircraft Manufacturing"
                />
              </div>
              <Text className="home-badge-text">{t("home.hero.badge")}</Text>
            </div>

            <div className="home-hero-inner">
              {/* PC端标题 - 两行，第一行渐变 */}
              <div className="home-hero-title-pc">
                <div className="home-hero-title-line1">
                  <span className="home-hero-title-dkb">DKB</span>
                  <span className="home-hero-title-coin">
                    {t("home.hero.titleLine1")}
                  </span>
                </div>
                <div className="home-hero-title-line2">
                  {t("home.hero.titleLine2")}
                </div>
              </div>

              {/* 移动端标题 - 两行，第一行渐变 */}
              <div className="home-hero-title-mobile">
                <div className="home-hero-title-line1">
                  <span className="home-hero-title-dkb">DKB</span>
                  <span className="home-hero-title-coin">
                    {t("home.hero.titleLine1")}
                  </span>
                </div>
                <div className="home-hero-title-line2">
                  {t("home.hero.titleLine2")}
                </div>
              </div>

              <Text className="home-hero-subtitle">
                {t("home.hero.subtitle")}
              </Text>

              {/* Feature Tags - Below buttons on PC, Above buttons on Mobile */}
              <div className="home-hero-features">
                {t("home.hero.features.pc").map((feature, index) => (
                  <span
                    key={index}
                    className="home-feature-tag home-feature-tag-pc"
                  >
                    {feature}
                  </span>
                ))}
                {t("home.hero.features.mobile").map((feature, index) => (
                  <span
                    key={index}
                    className="home-feature-tag home-feature-tag-mobile"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* 移动端按钮 */}
              <div className="home-hero-buttons home-hero-buttons-mobile">
                <Button
                  type="primary"
                  size="large"
                  className="home-hero-btn-primary home-hero-btn-download"
                  onClick={() => navigate("/introduction")}
                >
                  <span className="home-btn-icon">
                    <img
                      src={require("../images/home/1.png")}
                      style={{ width: 16, height: 16, marginRight: 4 }}
                      alt="Aircraft Manufacturing"
                    />
                  </span>
                  {t("home.hero.buttons.download")}
                </Button>
                <Button
                  size="large"
                  className="home-hero-btn-secondary home-hero-btn-buy"
                  onClick={() => navigate("/presale")}
                >
                  <span className="home-btn-icon">
                    <img
                      src={require("../images/home/2.png")}
                      style={{ width: 16, height: 16, marginRight: 4 }}
                      alt="Aircraft Manufacturing"
                    />
                  </span>
                  {t("home.hero.buttons.buy")}
                </Button>
              </div>

              {/* PC端统计数据 */}
              <div className="home-hero-stats-container home-hero-stats-pc">
                <div className="home-hero-stats-labels-row">
                  <Text className="home-stat-label">
                    {t("home.hero.stats.totalSupply")}
                  </Text>
                  <Text className="home-stat-label">
                    {t("home.hero.stats.burnRatio")}
                  </Text>
                  <Text className="home-stat-label">
                    {t("home.hero.stats.contract")}
                  </Text>
                  <Text className="home-stat-label">
                    {t("home.hero.stats.consensus")}
                  </Text>
                </div>
                <div className="home-hero-stats-values-row">
                  <Text className="home-stat-value home-stat-value-white">
                    {t("home.hero.stats.totalSupplyValue")}
                  </Text>
                  <Text className="home-stat-value home-stat-value-pink">
                    {t("home.hero.stats.burnRatioValue")}
                  </Text>
                  <Text className="home-stat-value home-stat-value-cyan">
                    {t("home.hero.stats.contractValue")}
                  </Text>
                  <Text className="home-stat-value home-stat-value-white">
                    {t("home.hero.stats.consensusValue")}
                  </Text>
                </div>
              </div>

              {/* 移动端统计数据 */}
              <div className="home-hero-stats-container home-hero-stats-mobile">
                <div className="home-hero-stats-grid">
                  <div className="home-stat-item-mobile">
                    <Text className="home-stat-label">
                      {t("home.hero.stats.totalSupply")}
                    </Text>
                    <Text className="home-stat-value home-stat-value-white">
                      {t("home.hero.stats.totalSupplyValue")}
                    </Text>
                  </div>
                  <div className="home-stat-item-mobile">
                    <Text className="home-stat-label">
                      {t("home.hero.stats.burnRatio")}
                    </Text>
                    <Text className="home-stat-value home-stat-value-pink">
                      {t("home.hero.stats.burnRatioValue")}
                    </Text>
                  </div>
                  <div className="home-stat-item-mobile">
                    <Text className="home-stat-label">
                      {t("home.hero.stats.contract")}
                    </Text>
                    <Text className="home-stat-value home-stat-value-cyan">
                      {t("home.hero.stats.contractValue")}
                    </Text>
                  </div>
                  <div className="home-stat-item-mobile">
                    <Text className="home-stat-label">
                      {t("home.hero.stats.consensus")}
                    </Text>
                    <Text className="home-stat-value home-stat-value-white">
                      {t("home.hero.stats.consensusValue")}
                    </Text>
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
                  <Title
                    level={2}
                    className="home-section-title home-section-title-left"
                  >
                    <span className="home-ecosystem-title-icon">
                      ➤{t("home.ecosystem.title")}{" "}
                    </span>{" "}
                    <span className="home-ecosystem-title-highlight">
                      {t("home.ecosystem.highlight")}
                    </span>
                  </Title>
                  <Row gutter={[24, 24]} className="home-ecosystem-cards-row">
                    <Col xs={24} sm={8}>
                      <Card className="home-feature-card">
                        <div className="home-feature-icon">
                          <img
                            src={require("../images/home/777.png")}
                            alt="Aircraft Manufacturing"
                          />
                        </div>
                        <div className="home-feature-title">
                          {t("home.ecosystem.features.manufacturing.title")}
                        </div>
                        <Text className="home-feature-desc">
                          {t("home.ecosystem.features.manufacturing.desc")}
                        </Text>
                      </Card>
                    </Col>
                    <Col xs={24} sm={8}>
                      <Card className="home-feature-card">
                        <div className="home-feature-icon">
                          <img
                            src={require("../images/home/999.png")}
                            alt="Infrastructure"
                          />
                        </div>
                        <div className="home-feature-title">
                          {t("home.ecosystem.features.infrastructure.title")}
                        </div>
                        <Text className="home-feature-desc">
                          {t("home.ecosystem.features.infrastructure.desc")}
                        </Text>
                      </Card>
                    </Col>
                    <Col xs={24} sm={8}>
                      <Card className="home-feature-card">
                        <div className="home-feature-icon">
                          <img
                            src={require("../images/home/888.png")}
                            alt="Diverse Services"
                          />
                        </div>
                        <div className="home-feature-title">
                          {t("home.ecosystem.features.services.title")}
                        </div>
                        <Text className="home-feature-desc">
                          {t("home.ecosystem.features.services.desc")}
                        </Text>
                      </Card>
                    </Col>
                  </Row>
                  <div className="home-ecosystem-desc">
                    <Text className="home-ecosystem-desc-text">
                      {t("home.ecosystem.description")}
                    </Text>
                  </div>
                </Col>
                <Col
                  xs={24}
                  lg={12}
                  style={{ borderColor: "#333063", borderWidth: 1 }}
                >
                  <div className="home-market-size">
                    <div className="home-market-visual">
                      <img
                        src={require("../images/home/c1.png")}
                        alt="Market Size Visual"
                        className="home-market-image"
                      />
                    </div>
                    <div className="home-market-content">
                      <div className="home-market-status">
                        <span className="home-market-dot"></span>
                        <Text className="home-market-status-text">
                          {t("home.ecosystem.marketSize.status")}
                        </Text>
                      </div>
                      <div className="home-market-title">
                        {t("home.ecosystem.marketSize.title")}
                      </div>
                      <Text className="home-market-projection">
                        {t("home.ecosystem.marketSize.projection")}
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
                      src={require("../images/home/image@2x.png")}
                      alt="Cryptocurrency Icons"
                      className="home-crypto-image"
                    />
                  </div>
                </Col>
                <Col xs={24} lg={12}>
                  <div className="home-blockchain-feature-list">
                    <Title
                      level={2}
                      className="home-section-title home-section-title-left"
                      style={{ marginBottom: 24 }}
                    >
                      <img
                        src={require("../images/home/4.png")}
                        style={{ width: 24, height: 24 }}
                      />
                      <span className="home-blockchain-title-icon">
                        {" "}
                        {t("home.blockchain.title")}
                      </span>{" "}
                      <span className="home-section-title-highlight">
                        {t("home.blockchain.highlight")}
                      </span>
                      <span className="home-blockchain-title-icon">
                        {t("home.blockchain.suffix")}
                      </span>
                    </Title>
                    <div className="home-blockchain-feature-item">
                      <img
                        src={require("../images/home/dui1.png")}
                        className="home-check-icon"
                      />

                      <div className="home-blockchain-feature-content">
                        <div className="home-blockchain-feature-title">
                          {t("home.blockchain.features.decentralized.title")}
                        </div>
                        <Text className="home-blockchain-feature-desc">
                          {t("home.blockchain.features.decentralized.desc")}
                        </Text>
                      </div>
                    </div>
                    <div className="home-blockchain-feature-item">
                      <img
                        src={require("../images/home/dui1.png")}
                        className="home-check-icon"
                      />
                      <div className="home-blockchain-feature-content">
                        <div className="home-blockchain-feature-title">
                          {t("home.blockchain.features.binding.title")}
                        </div>
                        <Text className="home-blockchain-feature-desc">
                          {t("home.blockchain.features.binding.desc")}
                        </Text>
                      </div>
                    </div>
                    <div className="home-blockchain-feature-item">
                      <img
                        src={require("../images/home/dui1.png")}
                        className="home-check-icon"
                      />
                      <div className="home-blockchain-feature-content">
                        <div className="home-blockchain-feature-title">
                          {t("home.blockchain.features.fair.title")}
                        </div>
                        <Text className="home-blockchain-feature-desc">
                          {t("home.blockchain.features.fair.desc")}
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="home-blockchain-desc-wrapper">
                    <Text className="home-blockchain-desc">
                      {t("home.blockchain.description")}
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
              <h2 className="home-tokenomics-main-title">
                {t("home.tokenomics.title")}
              </h2>
              <img
                src={require("../images/home/654.png")}
                style={{ width: 80, height: 4, marginBottom: 20 }}
              />
              <p className="home-tokenomics-subtitle">
                {t("home.tokenomics.subtitle")}
              </p>
            </div>

            <Row gutter={[24, 24]} className="home-tokenomics-cards">
              {/* 第一个卡片：总供应量 */}
              <Col xs={24} sm={12} lg={6}>
                <Card className="home-tokenomics-card">
                  <div className="home-tokenomics-card-header">
                    <div className="home-tokenomics-card-icon">
                      <img
                        src={require("../images/home/d1.png")}
                        style={{ width: 48, height: 48, marginBottom: 10 }}
                      />
                    </div>
                    <div className="home-tokenomics-card-title-group">
                      <div className="home-tokenomics-card-title">
                        {t("home.tokenomics.cards.totalSupply.title")}
                      </div>
                      <div className="home-tokenomics-card-value">
                        {t("home.tokenomics.cards.totalSupply.value")}
                      </div>
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
                          strokeDasharray={`${2 * Math.PI * 50 * 0.7} ${
                            2 * Math.PI * 50
                          }`}
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
                          strokeDasharray={`${2 * Math.PI * 50 * 0.2} ${
                            2 * Math.PI * 50
                          }`}
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
                          strokeDasharray={`${2 * Math.PI * 50 * 0.1} ${
                            2 * Math.PI * 50
                          }`}
                          strokeDashoffset={-2 * Math.PI * 50 * 0.9}
                          transform="rotate(-90 60 60)"
                          strokeLinecap="round"
                        />
                      </svg>
                    </div>

                    <div className="home-tokenomics-legend">
                      <div className="home-legend-item">
                        <span className="home-legend-dot home-legend-dot-red"></span>
                        <span className="home-legend-text">
                          {t("home.tokenomics.cards.totalSupply.legend.burn")}
                        </span>
                      </div>
                      <div className="home-legend-item">
                        <span className="home-legend-dot home-legend-dot-purple"></span>
                        <span className="home-legend-text">
                          {t(
                            "home.tokenomics.cards.totalSupply.legend.presale"
                          )}
                        </span>
                      </div>
                      <div className="home-legend-item">
                        <span className="home-legend-dot home-legend-dot-cyan"></span>
                        <span className="home-legend-text">
                          {t(
                            "home.tokenomics.cards.totalSupply.legend.liquidity"
                          )}
                        </span>
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
                      <img
                        src={require("../images/home/d2.png")}
                        style={{ width: 48, height: 48, marginBottom: 10 }}
                      />
                    </div>
                    <div className="home-tokenomics-card-title-group">
                      <div className="home-tokenomics-card-title">
                        {t("home.tokenomics.cards.tax.title")}
                      </div>
                      <div className="home-tokenomics-card-value">
                        {t("home.tokenomics.cards.tax.value")}
                      </div>
                    </div>
                  </div>

                  <div className="home-tokenomics-tax-details">
                    <div className="home-tax-item">
                      <div className="home-tax-label">
                        <span>{t("home.tokenomics.cards.tax.buyback")}</span>
                      </div>
                      <div className="home-tax-percentage">
                        {t("home.tokenomics.cards.tax.buybackValue")}
                      </div>
                    </div>
                    <div className="home-tax-progress">
                      <div
                        className="home-tax-progress-bar"
                        style={{ width: "50%" }}
                      ></div>
                    </div>

                    <div className="home-tax-item">
                      <div className="home-tax-label">
                        <span>{t("home.tokenomics.cards.tax.commission")}</span>
                      </div>
                      <div className="home-tax-percentage">
                        {t("home.tokenomics.cards.tax.commissionValue")}
                      </div>
                    </div>
                    <div className="home-tax-progress">
                      <div
                        className="home-tax-progress-bar"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </Card>
              </Col>

              {/* 第三个卡片：黑洞销毁 */}
              <Col xs={24} sm={12} lg={6}>
                <Card className="home-tokenomics-card">
                  <div className="home-tokenomics-card-header">
                    <div className="home-tokenomics-card-icon">
                      <img
                        src={require("../images/home/d3.png")}
                        style={{ width: 48, height: 48, marginBottom: 10 }}
                      />
                    </div>
                    <div className="home-tokenomics-card-title-group">
                      <div className="home-tokenomics-card-title">
                        {t("home.tokenomics.cards.burn.title")}
                      </div>
                      <div className="home-tokenomics-card-value home-tokenomics-value-burn">
                        {t("home.tokenomics.cards.burn.value")}
                      </div>
                    </div>
                  </div>

                  <div className="home-tokenomics-card-desc">
                    {t("home.tokenomics.cards.burn.desc")}
                  </div>
                </Card>
              </Col>

              {/* 第四个卡片：零预留·全透明 */}
              <Col xs={24} sm={12} lg={6}>
                <Card className="home-tokenomics-card">
                  <div className="home-tokenomics-card-header">
                    <div className="home-tokenomics-card-icon">
                      <img
                        src={require("../images/home/d4.png")}
                        style={{ width: 48, height: 48, marginBottom: 10 }}
                      />
                    </div>
                    <div className="home-tokenomics-card-title-group">
                      <div className="home-tokenomics-card-title">
                        {t("home.tokenomics.cards.transparent.title")}
                      </div>
                    </div>
                  </div>

                  <div className="home-tokenomics-card-desc">
                    {t("home.tokenomics.cards.transparent.desc")}
                  </div>

                  <a href="#" className="home-tokenomics-verify-link">
                    {t("home.tokenomics.cards.transparent.verify")}
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
                {t("home.roadmap.title")}
                <span className="home-roadmap-title-highlight">
                  {t("home.roadmap.highlight")}
                </span>
                {t("home.roadmap.suffix")}
              </h2>
              <img
                src={require("../images/home/654.png")}
                style={{ width: 80, height: 4, marginBottom: 20 }}
              />
              <p className="home-roadmap-subtitle">
                {t("home.roadmap.subtitle")}
              </p>
            </div>

            <div className="home-roadmap-timeline">
              {/* 第一个阶段 - 启动 (右侧) */}
              <div className="home-timeline-item home-timeline-item-left">
                <div className="home-timeline-line">
                  <div className="home-timeline-node"></div>
                </div>
                <div className="home-timeline-content">
                  <Card className="home-timeline-card">
                    <div className="home-timeline-badge">
                      {t("home.roadmap.stages.foundation.status")}
                    </div>
                    <h3 className="home-timeline-card-title">
                      {t("home.roadmap.stages.foundation.title")}
                    </h3>
                    <div className="home-timeline-card-desc">
                      {t("home.roadmap.stages.foundation.items").map(
                        (item, idx) => (
                          <React.Fragment key={idx}>
                            • {item}
                            {idx <
                              t("home.roadmap.stages.foundation.items").length -
                                1 && <br />}
                          </React.Fragment>
                        )
                      )}
                    </div>
                  </Card>
                </div>
              </div>

              {/* 第二个阶段 - 发展壮大 (左侧) */}
              <div className="home-timeline-item home-timeline-item-right">
                <div className="home-timeline-content">
                  <Card className="home-timeline-card">
                    <div className="home-timeline-badges">
                      {t("home.roadmap.stages.warriors.status")}
                    </div>
                    <h3 className="home-timeline-card-title">
                      {t("home.roadmap.stages.warriors.title")}
                    </h3>
                    <div className="home-timeline-card-desc">
                      {t("home.roadmap.stages.warriors.items").map(
                        (item, idx) => (
                          <React.Fragment key={idx}>
                            • {item}
                            {idx <
                              t("home.roadmap.stages.warriors.items").length -
                                1 && <br />}
                          </React.Fragment>
                        )
                      )}
                    </div>
                  </Card>
                </div>
                <div className="home-timeline-line">
                  <div className="home-timeline-nodes"></div>
                </div>
              </div>

              <div className="home-timeline-item home-timeline-item-left">
                <div className="home-timeline-line">
                  <div className="home-timeline-nodes"></div>
                </div>
                <div className="home-timeline-content">
                  <Card className="home-timeline-card">
                    <div className="home-timeline-badges">
                      {t("home.roadmap.stages.armor.status")}
                    </div>
                    <h3 className="home-timeline-card-title">
                      {t("home.roadmap.stages.armor.title")}
                    </h3>
                    <div className="home-timeline-card-desc">
                      {t("home.roadmap.stages.armor.items").map((item, idx) => (
                        <React.Fragment key={idx}>
                          • {item}
                          {idx <
                            t("home.roadmap.stages.armor.items").length - 1 && (
                            <br />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </Card>
                </div>
              </div>
              <div className="home-timeline-item home-timeline-item-right">
                <div className="home-timeline-content">
                  <Card className="home-timeline-card">
                    <div className="home-timeline-badges">
                      {t("home.roadmap.stages.fame.status")}
                    </div>
                    <h3 className="home-timeline-card-title">
                      {t("home.roadmap.stages.fame.title")}
                    </h3>
                    <div className="home-timeline-card-desc">
                      {t("home.roadmap.stages.fame.items").map((item, idx) => (
                        <React.Fragment key={idx}>
                          • {item}
                          {idx <
                            t("home.roadmap.stages.fame.items").length - 1 && (
                            <br />
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </Card>
                </div>
                <div className="home-timeline-line">
                  <div className="home-timeline-nodes"></div>
                </div>
              </div>
              <div className="home-timeline-item home-timeline-item-left">
                <div className="home-timeline-line">
                  <div className="home-timeline-nodes"></div>
                </div>
                <div className="home-timeline-content">
                  <Card className="home-timeline-card">
                    <div className="home-timeline-badgess">
                      {t("home.roadmap.stages.explosion.status")}
                    </div>
                    <h3 className="home-timeline-card-title">
                      {t("home.roadmap.stages.explosion.title")}
                    </h3>
                    <div className="home-timeline-card-desc">
                      {t("home.roadmap.stages.explosion.items").map(
                        (item, idx) => (
                          <React.Fragment key={idx}>
                            • {item}
                            {idx <
                              t("home.roadmap.stages.explosion.items").length -
                                1 && <br />}
                          </React.Fragment>
                        )
                      )}
                    </div>
                  </Card>
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
                {t("home.rebate.title")}{" "}
                <span className="home-rebate-title-highlight">
                  {t("home.rebate.highlight")}
                </span>
              </h2>
              <img
                src={require("../images/home/654.png")}
                style={{ width: 80, height: 4, marginBottom: 20 }}
              />
              <p className="home-rebate-subtitle">
                {t("home.rebate.subtitle")}
              </p>
            </div>

            <Row gutter={[48, 48]} className="home-rebate-content">
              {/* 左侧：核心机制说明 */}
              <Col xs={24} lg={12}>
                <div className="home-rebate-mechanisms">
                  <h3 className="home-rebate-section-title">
                    {t("home.rebate.mechanisms.title")}
                  </h3>

                  <div className="home-rebate-mechanism-list">
                    <Card className="home-rebate-mechanism-card">
                      <div className="home-mechanism-card-title">
                        {t("home.rebate.mechanisms.binding.title")}
                      </div>
                      <div className="home-mechanism-card-desc">
                        {t("home.rebate.mechanisms.binding.desc")}
                      </div>
                    </Card>

                    <Card className="home-rebate-mechanism-card">
                      <div className="home-mechanism-card-title">
                        {t("home.rebate.mechanisms.trigger.title")}
                      </div>
                      <div className="home-mechanism-card-desc">
                        {t("home.rebate.mechanisms.trigger.desc")}
                      </div>
                    </Card>

                    <Card className="home-rebate-mechanism-card">
                      <div className="home-mechanism-card-title">
                        {t("home.rebate.mechanisms.logic.title")}
                      </div>
                      <div className="home-mechanism-card-desc">
                        {t("home.rebate.mechanisms.logic.desc")}
                      </div>
                    </Card>

                    <Card className="home-rebate-mechanism-card">
                      <div className="home-mechanism-card-title">
                        {t("home.rebate.mechanisms.validity.title")}
                      </div>
                      <div className="home-mechanism-card-desc">
                        {t("home.rebate.mechanisms.validity.desc")}
                      </div>
                    </Card>
                  </div>
                </div>
              </Col>

              {/* 右侧：返佣比例和执行亮点 */}
              <Col xs={24} lg={12}>
                <div className="home-rebate-right">
                  <h3 className="home-rebate-section-title">
                    {t("home.rebate.ratio.title")}
                  </h3>
                  {/* 返佣比例表格 */}
                  <Card
                    className="home-rebate-table-card"
                    style={{ padding: 0 }}
                  >
                    <div className="home-rebate-table">
                      {/* 表头 */}
                      <div className="home-rebate-table-header">
                        <div className="home-rebate-table-cell home-rebate-table-cell-header">
                          {t("home.rebate.ratio.level")}
                        </div>
                        <div className="home-rebate-table-cell home-rebate-table-cell-header">
                          {t("home.rebate.ratio.ratio")}
                        </div>
                      </div>
                      {/* 表格数据行 */}
                      {rebateData.map((item, index) => (
                        <div key={index} className="home-rebate-table-row">
                          <div className="home-rebate-table-cell">
                            {item.level}
                          </div>
                          <div className="home-rebate-table-cell">
                            {item.ratio}
                          </div>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* 执行亮点 */}
                  <div className="home-rebate-highlights">
                    <h3 className="home-rebate-section-title">
                      {t("home.rebate.highlights.title")}
                    </h3>

                    <div className="home-highlight-list">
                      <div className="home-highlight-item">
                        <div className="home-highlight-dot">
                          {" "}
                          <img
                            src={require("../images/home/9.png")}
                            style={{ width: 16, height: 16 }}
                          />
                        </div>
                        <div className="home-highlight-content">
                          <span className="home-highlight-label">
                            {t("home.rebate.highlights.efficiency.label")}
                          </span>
                          <span className="home-highlight-text">
                            {t("home.rebate.highlights.efficiency.text")}
                          </span>
                        </div>
                      </div>

                      <div className="home-highlight-item">
                        <div className="home-highlight-dot">
                          {" "}
                          <img
                            src={require("../images/home/9.png")}
                            style={{ width: 16, height: 16 }}
                          />
                        </div>
                        <div className="home-highlight-content">
                          <span className="home-highlight-label">
                            {t("home.rebate.highlights.reward.label")}
                          </span>
                          <span className="home-highlight-text">
                            {t("home.rebate.highlights.reward.text")}
                          </span>
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
                {t("home.advantages.title")}
                <span className="home-advantages-title-highlight">
                  {t("home.advantages.highlight")}
                </span>
              </h2>
              <img
                src={require("../images/home/654.png")}
                style={{ width: 80, height: 4, marginBottom: 20 }}
              />
              <p className="home-advantages-subtitle">
                {t("home.advantages.subtitle")}
              </p>
            </div>

            <Row gutter={[24, 24]} className="home-advantages-cards">
              {/* 第一个卡片：国家战略加持 */}
              <Col xs={24} sm={24} lg={8}>
                <Card className="home-advantage-card">
                  <div className="home-advantage-icon-wrapper">
                    <div>
                      <img
                        src={require("../images/home/w1.png")}
                        style={{ width: 64, height: 64 }}
                      />
                    </div>
                  </div>
                  <h3 className="home-advantage-card-title">
                    {t("home.advantages.cards.strategy.title")}
                  </h3>
                  <p className="home-advantage-card-desc">
                    {t("home.advantages.cards.strategy.desc")}
                  </p>
                </Card>
              </Col>

              {/* 第二个卡片：技术突破赋能 */}
              <Col xs={24} sm={24} lg={8}>
                <Card className="home-advantage-card">
                  <div className="home-advantage-icon-wrapper">
                    <div>
                      <img
                        src={require("../images/home/w2.png")}
                        style={{ width: 64, height: 64 }}
                      />
                    </div>
                  </div>
                  <h3 className="home-advantage-card-title">
                    {t("home.advantages.cards.technology.title")}
                  </h3>
                  <p className="home-advantage-card-desc">
                    {t("home.advantages.cards.technology.desc")}
                  </p>
                </Card>
              </Col>

              {/* 第三个卡片：海量场景需求 */}
              <Col xs={24} sm={24} lg={8}>
                <Card className="home-advantage-card">
                  <div className="home-advantage-icon-wrapper">
                    <div>
                      <img
                        src={require("../images/home/w3.png")}
                        style={{ width: 64, height: 64 }}
                      />
                    </div>
                  </div>
                  <h3 className="home-advantage-card-title">
                    {t("home.advantages.cards.demand.title")}
                  </h3>
                  <p className="home-advantage-card-desc">
                    {t("home.advantages.cards.demand.desc")}
                  </p>
                </Card>
              </Col>
            </Row>

            {/* 底部大卡片 */}
            <div className="home-advantages-bottom">
              <Card className="home-advantage-large-card">
                <h3 className="home-advantage-large-title">
                  {" "}
                  <img
                    src={require("../images/home/w4.png")}
                    style={{
                      width: 24,
                      height: 24,
                      marginTop: -10,
                      marginRight: 5,
                    }}
                  />
                  {t("home.advantages.potential.title")}
                </h3>
                <p className="home-advantage-large-desc">
                  {t("home.advantages.potential.desc")}
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
                {t("home.culture.title")}
                <span className="home-culture-title-highlight">
                  {t("home.culture.highlight")}
                </span>
                {t("home.culture.suffix")}
              </h2>
              <img
                src={require("../images/home/654.png")}
                style={{ width: 80, height: 4, marginBottom: 20 }}
              />
              <p className="home-culture-subtitle">
                {t("home.culture.subtitle")}
              </p>
            </div>

            <Row gutter={[48, 48]} className="home-culture-content">
              {/* 左侧：核心价值观 */}
              <Col xs={24} lg={14}>
                <h3 className="home-culture-section-title">
                  {t("home.culture.values.title")}
                </h3>
                <Row gutter={[24, 24]} className="home-culture-cards">
                  <Col xs={24} sm={12}>
                    <Card className="home-culture-card">
                      <div className="home-culture-icon-wrapper">
                        <img
                          src={require("../images/home/h1.png")}
                          style={{ width: 48, height: 48 }}
                        />
                      </div>
                      <h4 className="home-culture-card-title">
                        {t("home.culture.values.decentralized.title")}
                      </h4>
                      <p className="home-culture-card-desc">
                        {t("home.culture.values.decentralized.desc")}
                      </p>
                    </Card>
                  </Col>

                  <Col xs={24} sm={12}>
                    <Card className="home-culture-card">
                      <div className="home-culture-icon-wrapper">
                        <img
                          src={require("../images/home/h2.png")}
                          style={{ width: 48, height: 48 }}
                        />
                      </div>
                      <h4 className="home-culture-card-title">
                        {t("home.culture.values.innovation.title")}
                      </h4>
                      <p className="home-culture-card-desc">
                        {t("home.culture.values.innovation.desc")}
                      </p>
                    </Card>
                  </Col>

                  <Col xs={24} sm={12}>
                    <Card className="home-culture-card">
                      <div className="home-culture-icon-wrapper">
                        <img
                          src={require("../images/home/h3.png")}
                          style={{ width: 48, height: 48 }}
                        />
                      </div>
                      <h4 className="home-culture-card-title">
                        {t("home.culture.values.collaboration.title")}
                      </h4>
                      <p className="home-culture-card-desc">
                        {t("home.culture.values.collaboration.desc")}
                      </p>
                    </Card>
                  </Col>

                  <Col xs={24} sm={12}>
                    <Card className="home-culture-card">
                      <div className="home-culture-icon-wrapper">
                        <img
                          src={require("../images/home/h4.png")}
                          style={{ width: 48, height: 48 }}
                        />
                      </div>
                      <h4 className="home-culture-card-title">
                        {t("home.culture.values.transparent.title")}
                      </h4>
                      <p className="home-culture-card-desc">
                        {t("home.culture.values.transparent.desc")}
                      </p>
                    </Card>
                  </Col>
                </Row>
              </Col>

              {/* 右侧：社区口号和DAO入口 */}
              <Col xs={24} lg={10}>
                <div className="home-culture-right">
                  <Card className="home-community-card">
                    <h3 className="home-community-title">
                      {t("home.culture.community.sloganTitle")}
                    </h3>
                    <div className="home-community-slogan-box">
                      <p className="home-community-slogan">
                        {t("home.culture.community.slogan")}
                      </p>
                    </div>

                    <h4 className="home-dao-title">
                      {t("home.culture.community.daoTitle")}
                    </h4>
                    <div className="home-dao-icons">
                      <div className="home-dao-icon">
                        <img
                          src={require("../images/home/h5.png")}
                          style={{ width: 54, height: 54, marginBottom: 20 }}
                        />
                        <span className="home-dao-label">
                          {t("home.culture.community.telegram")}
                        </span>
                      </div>
                      <div className="home-dao-icon">
                        <img
                          src={require("../images/home/h6.png")}
                          style={{ width: 54, height: 54, marginBottom: 20 }}
                        />
                        <span className="home-dao-label">
                          {t("home.culture.community.twitter")}
                        </span>
                      </div>
                      <div className="home-dao-icon">
                        <img
                          src={require("../images/home/h7.png")}
                          style={{ width: 54, height: 54, marginBottom: 20 }}
                        />
                        <span className="home-dao-label">
                          {t("home.culture.community.meeting")}
                        </span>
                      </div>
                      <div className="home-dao-icon">
                        <img
                          src={require("../images/home/h8.png")}
                          style={{ width: 54, height: 54, marginBottom: 20 }}
                        />
                        <span className="home-dao-label">
                          {t("home.culture.community.qq")}
                        </span>
                      </div>
                    </div>

                    <div className="home-join-button">
                      {t("home.culture.community.joinButton")}
                    </div>
                  </Card>
                </div>
              </Col>
            </Row>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="home-section home-cta-section">
          <div className="home-container">
            <div className="home-hero-backgrounds">
              <img
                src={require("../images/home/bg3.png")}
                alt="Hero Background"
                className="home-hero-bg-image"
              />
            </div>
            <div className="home-cta-content">
              <h2 className="home-cta-main-title">
                {t("home.cta.title")}
                <span className="home-cta-title-highlight">
                  {t("home.cta.highlight")}
                </span>
                {t("home.cta.suffix")}
              </h2>
              <p className="home-cta-subtitle">{t("home.cta.subtitle")}</p>
              <div className="home-cta-buttons">
                <Button
                  type="primary"
                  size="large"
                  className="home-cta-btn-primary"
                  onClick={() => navigate("/introduction")}
                  icon={
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      style={{ marginRight: "8px" }}
                    >
                      <path
                        d="M8 2v10M8 12l-3-3M8 12l3-3M2 14h12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  }
                >
                  {t("home.cta.buttons.download")}
                </Button>
                <Button
                  size="large"
                  className="home-cta-btn-secondary"
                  onClick={() => navigate("/presale")}
                >
                  {t("home.cta.buttons.buy")}
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
