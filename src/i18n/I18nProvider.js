import React, { createContext, useContext, useMemo, useState } from 'react';

const translations = {
  zh: {
    common: {
      brand: 'DKB',
      nav: {
        home: '首页',
        presale: '预售',
        introduction: '官方介绍',
      },
      actions: {
        learnMore: '了解更多',
        joinPresale: '立即参与预售',
        goPresale: '前往预售',
        connectWallet: '连接钱包',
        walletConnected: '已连接',
        receive: '领取',
        copy: '复制',
      },
      language: {
        toggleLabel: '切换语言',
        zh: '中文',
        en: 'English',
      },
    },
    home: {
      hero: {
        title: 'DKB 数字航空生态',
        subtitle: '引领数字经济新航线',
        description:
          '通过链上激励机制连接航空产业与 Web3 世界，打造贯穿出行、消费、权益的全景生态。',
        primaryAction: '了解生态',
        secondaryAction: '立即参与预售',
        badges: ['航旅 + Web3', 'RWA 赋能', '全球节点'],
        placeholder: '主视觉占位',
      },
      highlights: {
        title: '为何选择 DKB',
        description: '四位一体的生态布局，覆盖航旅消费、链上金融、资产管理、用户增长。',
        items: [
          {
            title: '全球航旅联盟',
            description: '与多家航空、机场集团达成合作，打通机票、贵宾厅、城市服务权益。',
          },
          {
            title: '链上金融工具',
            description: '提供质押、借贷、票证 NFT 等多元化金融产品，提升资产流动性。',
          },
          {
            title: 'AI 驱动的增益系统',
            description: '结合 AI 算法进行数据建模，实现智能营销、精准推荐与收益分配。',
          },
        ],
      },
      matrix: {
        title: '生态矩阵',
        description: '覆盖航旅服务、金融衍生、品牌营销和会员权益的全链路数字化方案。',
        columns: [
          {
            name: '航旅服务',
            items: ['机票与包机服务', '贵宾厅与城市候机', '出入境增值服务'],
          },
          {
            name: '金融衍生',
            items: ['里程积分 NFT 化', '质押借贷与票据融资', '链上保险与担保'],
          },
          {
            name: '品牌营销',
            items: ['联合营销激励计划', '沉浸式元宇宙展厅', '品牌数据分析看板'],
          },
          {
            name: '会员权益',
            items: ['多级会员成长体系', '权益通证化管理', '社区节点治理激励'],
          },
        ],
      },
      solutions: {
        title: '场景解决方案',
        description: '针对不同角色提供专属的数字化升级方案，实现价值闭环与持续收益。',
        cards: [
          {
            title: '航空公司',
            description: '构建跨航司积分互通网络，实时跟踪旅客画像，提升用户粘性与二次消费。',
          },
          {
            title: '机场与文旅集团',
            description: '打通线下消费权益与链上资产，实现票券、零售、酒店的统一结算。',
          },
          {
            title: '社区节点',
            description: '提供节点激励、运营工具与学习课程，帮助合作伙伴快速拓展市场。',
          },
        ],
      },
      timeline: {
        title: '发展里程碑',
        items: [
          { time: '2024 Q1', content: '完成航旅合作签署，预售平台上线。' },
          { time: '2024 Q3', content: '推出链上会员系统，启动全球节点计划。' },
          { time: '2025 Q1', content: '上线航旅 NFT 市场，实现权益自由流转。' },
          { time: '2025 Q4', content: '打通全球消费场景，构建跨境支付网络。' },
        ],
      },
      stats: {
        items: [
          { value: '200+', label: '已签约航旅合作伙伴' },
          { value: '1,000,000+', label: '生态用户覆盖' },
          { value: '150+', label: '全球城市服务节点' },
        ],
      },
      partners: {
        title: '合作网络',
        description: '与全球航空、金融、科技伙伴共建开放、可信、可持续的航旅新生态。',
        placeholders: ['航空联盟', '国际机场', '区块链安全', '支付网络', '旅游集团', '生活方式', '数据伙伴', '行业协会'],
      },
      faq: {
        title: '常见问题',
        items: [
          {
            question: 'DKB 预售的核心价值是什么？',
            answer:
              '预售阶段将释放早期会员席位和节点权益，参与者可抢先享受生态分红、治理投票与合作伙伴折扣。',
          },
          {
            question: '预售后如何使用获得的代币？',
            answer:
              'DKB 代币可用于支付航旅服务、参与质押与借贷、兑换联合品牌权益，并在 DAO 治理中行使投票权。',
          },
          {
            question: '平台如何保障资产安全？',
            answer:
              '所有合约通过第三方审计，采用多签与风控模型监控资产流动，关键流程公开透明可追溯。',
          },
        ],
      },
      cta: {
        title: '即刻加入数字航空新纪元',
        description: '参与预售即可抢先解锁 DKB 生态权益与激励。',
        action: '前往预售',
      },
    },
    introduction: {
      hero: {
        title: 'DKB 官方生态介绍',
        description:
          'DKB 通过数字资产驱动航空产业升级，打造服务全球旅客的分布式生态。预售只是起点，完整产品矩阵覆盖支付、会员、营销、治理等多个维度。',
        highlights: ['全球节点布局', '多链部署策略', 'DAO 治理体系'],
        placeholder: '生态横幅占位',
      },
      pillars: {
        title: '使命与愿景',
        items: [
          {
            title: '使命',
            description: '连接航空与 Web3，将分散的航旅价值数字化，构建透明可信的权益交换网络。',
          },
          {
            title: '愿景',
            description: '打造覆盖全球的低空经济基础设施，让每一次出行都能创造可持续的数字资产价值。',
          },
        ],
      },
      business: {
        title: '核心业务板块',
        description: '从航旅场景出发，搭建覆盖消费、资产、运营的三大闭环。',
        items: [
          {
            title: '航空票务与增值服务',
            description: '整合机票、贵宾室、地面交通等权益，推出一站式航旅会员服务。',
          },
          {
            title: '链上金融与资产管理',
            description: '提供质押、借贷、NFT 票证等产品，让权益资产实现流动与增值。',
          },
          {
            title: '全球社区与营销',
            description: '构建多语言社区运营体系，结合数据分析与激励模型驱动增长。',
          },
        ],
      },
      technology: {
        title: '技术与安全架构',
        points: [
          '多链部署策略，覆盖主流公链与企业联盟链，实现跨境业务合规。',
          '零知识证明与多签机制结合，保障用户资产安全与隐私。',
          '链上实时监控与风控系统，自动化识别异常交易与风险行为。',
          '所有核心合约通过第三方审计并开放源代码，关键流程由 DAO 审批。',
        ],
        placeholder: '技术架构示意',
      },
      tokenomics: {
        title: '代币经济模型',
        items: [
          {
            title: '通证用途',
            description: '用于航旅服务支付、质押挖矿、平台治理、合作伙伴激励等多种场景。',
          },
          {
            title: '价值回流',
            description: '交易手续费回购、节点奖励回投、品牌合作分成等机制形成价值闭环。',
          },
          {
            title: '释放节奏',
            description: '采用线性释放与任务激励结合的方式，保障长期稳定发展。',
          },
        ],
      },
      compliance: {
        title: '合规与运营',
        columns: [
          {
            title: '全球合规',
            items: ['遵循 KYC/AML 标准', '与本地律所合作', '动态更新政策白皮书'],
          },
          {
            title: '运营支持',
            items: ['24/7 多语言客服', '节点培训体系', '市场物料与技术支持'],
          },
          {
            title: '生态治理',
            items: ['DAO 投票机制', '提案激励金库', '季度社区公示会'],
          },
        ],
      },
      team: {
        title: '团队与顾问',
        description: '核心成员来自航空、金融科技与区块链安全领域，拥有丰富的行业落地经验。',
        members: [
          { name: 'Alex Chen', role: '联合创始人 · 航空商业化专家' },
          { name: 'Linda Zhao', role: '联合创始人 · Web3 策略顾问' },
          { name: 'Michael Lee', role: '技术负责人 · 区块链安全架构师' },
          { name: 'Sophia Wang', role: '全球运营负责人 · 社区增长' },
        ],
      },
      cta: {
        title: '成为 DKB 合作伙伴',
        description: '我们欢迎航空、旅游、生活方式品牌加入，共同探索数字化经济新机遇。联系官方团队获取定制化合作方案。',
        action: '加入生态',
      },
    },
    presale: {
      hero: {
        title: '预售倒计时',
        subtitle: '单笔最低购买 {{min}} USDT · 最高 {{max}} USDT',
        countdownLabels: ['天', '小时', '分钟', '秒'],
      },
      package: {
        label: '套餐',
        amount: '购买 USDT 数量（固定套餐）',
        connect: '请先连接钱包',
        purchased: '已购买',
        buy: '购买',
        receive: '领取',
      },
      invite: {
        title: '邀请奖励规则',
        description: '参与预售即可解锁专属邀请返佣权益：',
        link: '邀请链接',
        copy: '复制链接',
        rules: [
          '完成预售购买后即刻获得个人邀请码。',
          '绑定好友后可享受多级佣金奖励。',
          '邀请链接可复制分享，支持 H5/PC 双端打开。',
        ],
      },
      partners: {
        title: '合作伙伴',
        placeholders: ['航空联盟', '区块链安全', '支付网络', '文旅品牌', '交易所', '钱包伙伴', '数据平台', '行业协会'],
      },
      footer: {
        description: '全球领先的低空经济 RWA 生态平台，重构低空经济生产关系，开启低空经济数字化新时代。',
        certification: '链上认证',
        contract: 'BSC 链合约地址：',
        disclaimer: '免责声明',
        disclaimerText:
          '本项目不构成任何形式的投资建议，投资有风险，决策需谨慎。所有代币和相关信息仅用于社区公示，请勿视为对任何第三方承诺或担保。',
        copyright: '© 2025. Design with love by DKB.',
      },
      modal: {
        title: '绑定上级',
        description: '检测到当前地址未绑定上级，需要绑定项目方默认地址才能继续预售。',
        defaultAddress: '默认上级地址：',
        confirm: '确认绑定',
      },
      messages: {
        walletSuccess: '钱包连接成功',
        walletError: '连接钱包失败',
        switchChain: '请切换到 BSC 链',
        bindSuccess: '绑定上级成功',
        bindError: '绑定上级失败',
        copySuccess: '链接已复制',
        copyError: '复制失败',
        purchaseSuccess: '购买成功',
        purchaseError: '购买失败',
        insufficient: 'USDT 余额不足',
      },
    },
  },
  en: {
    common: {
      brand: 'DKB',
      nav: {
        home: 'Home',
        presale: 'Presale',
        introduction: 'Official Intro',
      },
      actions: {
        learnMore: 'Explore More',
        joinPresale: 'Join Presale',
        goPresale: 'Go to Presale',
        connectWallet: 'Connect Wallet',
        walletConnected: 'Connected',
        receive: 'Receive',
        copy: 'Copy',
      },
      language: {
        toggleLabel: 'Switch language',
        zh: 'Chinese',
        en: 'English',
      },
    },
    home: {
      hero: {
        title: 'DKB Digital Aviation Ecosystem',
        subtitle: 'Opening the New Route for the Digital Economy',
        description:
          'We connect the aviation industry with the Web3 world through on-chain incentives, building a full-stack ecosystem that covers travel, consumption, and membership rights.',
        primaryAction: 'Discover the Ecosystem',
        secondaryAction: 'Join the Presale',
        badges: ['Travel x Web3', 'RWA Empowered', 'Global Nodes'],
        placeholder: 'Hero Visual Placeholder',
      },
      highlights: {
        title: 'Why Choose DKB',
        description: 'A four-in-one layout covering travel services, on-chain finance, asset management, and user growth.',
        items: [
          {
            title: 'Global Aviation Alliance',
            description:
              'Partnered with airlines and airports worldwide to unlock ticketing, lounge, and urban service rights.',
          },
          {
            title: 'On-chain Financial Tools',
            description:
              'Provide staking, lending, and ticket NFTs to increase liquidity across aviation-related assets.',
          },
          {
            title: 'AI-Powered Growth Engine',
            description:
              'Apply AI modeling for intelligent marketing, personalized recommendations, and fair reward distribution.',
          },
        ],
      },
      matrix: {
        title: 'Ecosystem Matrix',
        description:
          'A full-chain digital solution covering travel services, financial derivatives, brand marketing, and membership privileges.',
        columns: [
          {
            name: 'Travel Services',
            items: ['Flight & Charter', 'Lounge & City Transfer', 'Immigration Concierge'],
          },
          {
            name: 'Financial Derivatives',
            items: ['Mileage NFTs', 'Staking & Credit', 'On-chain Insurance'],
          },
          {
            name: 'Brand Marketing',
            items: ['Co-marketing Incentives', 'Immersive Metaverse Showrooms', 'Brand Analytics Dashboard'],
          },
          {
            name: 'Membership Rights',
            items: ['Tiered Loyalty System', 'Tokenized Benefits', 'Community Node Incentives'],
          },
        ],
      },
      solutions: {
        title: 'Scenario Solutions',
        description:
          'Dedicated digital transformation packages for each stakeholder to ensure closed-loop value creation.',
        cards: [
          {
            title: 'Airlines',
            description:
              'Build a cross-carrier loyalty network with real-time traveler insights to increase retention and upsell.',
          },
          {
            title: 'Airports & Destinations',
            description:
              'Connect offline privileges with on-chain assets to streamline settlement for tickets, retail, and hotels.',
          },
          {
            title: 'Community Nodes',
            description:
              'Provide incentives, operation tools, and training courses to help partners scale quickly.',
          },
        ],
      },
      timeline: {
        title: 'Milestone Roadmap',
        items: [
          { time: '2024 Q1', content: 'Signed aviation partnerships and launched the presale platform.' },
          { time: '2024 Q3', content: 'Released the on-chain membership system and global node program.' },
          { time: '2025 Q1', content: 'Opened the aviation NFT marketplace for seamless rights circulation.' },
          { time: '2025 Q4', content: 'Integrated global spending scenarios with a cross-border payment network.' },
        ],
      },
      stats: {
        items: [
          { value: '200+', label: 'Aviation partners onboarded' },
          { value: '1,000,000+', label: 'Users served worldwide' },
          { value: '150+', label: 'City service nodes' },
        ],
      },
      partners: {
        title: 'Partner Network',
        description:
          'Co-creating an open, trusted, and sustainable travel ecosystem with global aviation, finance, and tech leaders.',
        placeholders: ['Air Alliance', 'Airports', 'Security Labs', 'Payment Network', 'Travel Brands', 'Lifestyle', 'Data Partners', 'Guilds'],
      },
      faq: {
        title: 'Frequently Asked Questions',
        items: [
          {
            question: 'What is the core value of the DKB presale?',
            answer:
              'Early supporters receive membership slots and node rights, unlocking revenue sharing, governance, and partner benefits in advance.',
          },
          {
            question: 'How can the presale tokens be used?',
            answer:
              'DKB tokens power travel payments, staking and lending, brand redemptions, and DAO governance voting.',
          },
          {
            question: 'How is asset security ensured?',
            answer:
              'All contracts are audited, protected by multisig and risk controls, with transparent and traceable operations.',
          },
        ],
      },
      cta: {
        title: 'Join the New Era of Digital Aviation',
        description: 'Join the presale now to unlock DKB ecosystem rewards and privileges ahead of time.',
        action: 'Go to Presale',
      },
    },
    introduction: {
      hero: {
        title: 'Official DKB Ecosystem Overview',
        description:
          'DKB upgrades the aviation industry with digital assets to serve global travelers. The presale is only the start—our product suite spans payments, membership, marketing, and governance.',
        highlights: ['Global Nodes', 'Multi-chain Deployment', 'DAO Governance'],
        placeholder: 'Hero Illustration Placeholder',
      },
      pillars: {
        title: 'Mission & Vision',
        items: [
          {
            title: 'Mission',
            description:
              'Digitize aviation value and build a transparent and trusted network for exchanging travel rights.',
          },
          {
            title: 'Vision',
            description:
              'Create the global low-altitude economic infrastructure where every journey generates sustainable digital value.',
          },
        ],
      },
      business: {
        title: 'Core Business Domains',
        description: 'From travel scenarios to asset operations, DKB builds three integrated loops.',
        items: [
          {
            title: 'Ticketing & Premium Services',
            description:
              'Aggregate tickets, lounges, and ground transportation into one seamless membership experience.',
          },
          {
            title: 'On-chain Finance & Asset Management',
            description:
              'Deliver staking, lending, and NFT ticketing to keep aviation rights liquid and appreciating.',
          },
          {
            title: 'Global Community & Marketing',
            description:
              'Establish multilingual operations with data-driven incentives to accelerate growth.',
          },
        ],
      },
      technology: {
        title: 'Technology & Security Stack',
        points: [
          'Multi-chain deployments across major public and consortium chains for compliant cross-border business.',
          'Zero-knowledge proofs combined with multisig to protect assets and privacy.',
          'On-chain monitoring and risk controls automatically flag abnormal transactions and behaviors.',
          'All core contracts are audited, open source, and governed through DAO voting.',
        ],
        placeholder: 'Technology Architecture',
      },
      tokenomics: {
        title: 'Tokenomics',
        items: [
          {
            title: 'Utility',
            description:
              'Used for travel payments, staking rewards, platform governance, and partner incentives.',
          },
          {
            title: 'Value Capture',
            description:
              'Buybacks from fees, reinvested node rewards, and partner revenue sharing close the loop.',
          },
          {
            title: 'Vesting',
            description:
              'Linear unlocks combined with task-based incentives keep long-term growth sustainable.',
          },
        ],
      },
      compliance: {
        title: 'Compliance & Operations',
        columns: [
          {
            title: 'Global Compliance',
            items: ['Follow KYC/AML standards', 'Work with local legal partners', 'Update regulatory whitepapers'],
          },
          {
            title: 'Operational Support',
            items: ['24/7 multilingual support', 'Node training programs', 'Marketing & technical enablement'],
          },
          {
            title: 'Ecosystem Governance',
            items: ['DAO voting mechanism', 'Proposal incentive treasury', 'Quarterly community briefings'],
          },
        ],
      },
      team: {
        title: 'Team & Advisors',
        description:
          'The core team brings experience from aviation, fintech, and blockchain security with a strong execution track record.',
        members: [
          { name: 'Alex Chen', role: 'Co-founder · Aviation Commercialization' },
          { name: 'Linda Zhao', role: 'Co-founder · Web3 Strategy' },
          { name: 'Michael Lee', role: 'Tech Lead · Blockchain Security' },
          { name: 'Sophia Wang', role: 'Global Operations Lead · Community Growth' },
        ],
      },
      cta: {
        title: 'Become a DKB Partner',
        description:
          'We welcome airlines, travel, and lifestyle brands to collaborate and unlock new digital economy opportunities. Reach out for tailored partnership programs.',
        action: 'Join the Ecosystem',
      },
    },
    presale: {
      hero: {
        title: 'Presale Countdown',
        subtitle: 'Min {{min}} USDT per order · Max {{max}} USDT',
        countdownLabels: ['Day', 'Hour', 'Min', 'Sec'],
      },
      package: {
        label: 'Package',
        amount: 'USDT amount (fixed package)',
        connect: 'Connect wallet first',
        purchased: 'Purchased',
        buy: 'Buy',
        receive: 'Receive',
      },
      invite: {
        title: 'Invite-to-Earn Rules',
        description: 'Unlock referral commissions after joining the presale:',
        link: 'Invite Link',
        copy: 'Copy Link',
        rules: [
          'Receive your invite code once the purchase is completed.',
          'Bind friends to enjoy multi-level commission rewards.',
          'Share your invite link across mobile and desktop seamlessly.',
        ],
      },
      partners: {
        title: 'Partners',
        placeholders: ['Air Alliance', 'Security Labs', 'Payments', 'Travel Brands', 'Exchanges', 'Wallets', 'Data Platforms', 'Associations'],
      },
      footer: {
        description:
          'A leading low-altitude economy RWA platform reinventing industry relationships and enabling the digital aviation era.',
        certification: 'On-chain Certification',
        contract: 'BSC Contract:',
        disclaimer: 'Disclaimer',
        disclaimerText:
          'Nothing herein constitutes financial advice. Crypto assets are volatile—make prudent decisions. All tokens and information are for community disclosure only.',
        copyright: '© 2025. Designed with love by DKB.',
      },
      modal: {
        title: 'Bind Upline',
        description:
          'No inviter detected. Bind the default project address before continuing with the presale.',
        defaultAddress: 'Default Upline Address:',
        confirm: 'Confirm Bind',
      },
      messages: {
        walletSuccess: 'Wallet connected',
        walletError: 'Failed to connect wallet',
        switchChain: 'Please switch to BSC network',
        bindSuccess: 'Upline bound successfully',
        bindError: 'Failed to bind upline',
        copySuccess: 'Invite link copied',
        copyError: 'Copy failed',
        purchaseSuccess: 'Purchase successful',
        purchaseError: 'Purchase failed',
        insufficient: 'Insufficient USDT balance',
      },
    },
  },
};

const I18nContext = createContext({
  locale: 'zh',
  setLocale: () => {},
  t: (key) => key,
});

function resolvePath(source, path) {
  return path.split('.').reduce((acc, segment) => {
    if (acc && typeof acc === 'object' && segment in acc) {
      return acc[segment];
    }
    return undefined;
  }, source);
}

function formatTemplate(template, values) {
  if (!template || !values) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (match, token) => {
    if (Object.prototype.hasOwnProperty.call(values, token)) {
      return values[token];
    }
    return match;
  });
}

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState('zh');

  const value = useMemo(() => {
    const langPack = translations[locale] || translations.zh;

    const translate = (key, values) => {
      if (!key) return '';
      const result = resolvePath(langPack, key);
      if (typeof result === 'string') {
        return formatTemplate(result, values);
      }
      return result ?? key;
    };

    return {
      locale,
      setLocale,
      t: translate,
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}

