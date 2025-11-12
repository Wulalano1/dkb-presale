import React, { createContext, useContext, useMemo, useState } from 'react';
import { HOME_CONTRACT_ADDRESS, shortAddress } from '../web3/config';

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
      footer: {
        description: '全球领先的去中心化RWA生态平台，重塑低空经济生产关系，开创区块链赋能实体资产的全新时代。',
        certification: '链上认证',
        disclaimer: '免责声明',
        disclaimerText: '本项目为区块链研究平台，展示作品均为，关于贸易、所有权纠纷、技术故障或临时系统无意为综合法律体系，堪察补偿要求三方布同投资建议。',
        copyright: '© 2025 DKB Team. All rights reserved.',
        copyAddress: '复制地址',
        copied: '已复制',
      },
      language: {
        toggleLabel: '切换语言',
        zh: '中文',
        en: 'English',
      },
    },
    home: {
      hero: {
        badge: '基于BSC链的航空经济通证',
        titleLine1: '低空币:',
        titleLine2: '引领低空经济的数字生态先驱',
        subtitle: '基于BSC链的去中心化通证,打造低空经济生态的"血液"与"润滑剂"',
        features: {
          pc: ['链上原生资产', 'DAO社区治理', '实体场景映射'],
          mobile: ['链上顶生资产', 'DAO社区治理', '实体场景映射'],
        },
        buttons: {
          download: '走进DKB世界',
          buy: '购买DKB',
        },
        stats: {
          totalSupply: '总供应量',
          burnRatio: '销毁比例',
          contract: '链上台约',
          consensus: '共识机制',
          totalSupplyValue: '10亿枚',
        burnRatioValue: '70%',
          contractValue: shortAddress(HOME_CONTRACT_ADDRESS),
          consensusValue: 'PoS + DAO',
        },
      },
      ecosystem: {
        title: '万亿级新赛道:',
        highlight: '低空经济的核心生态',
        features: {
          manufacturing: {
            title: '飞行器制造',
            desc: '无人机、EVTOL、直升机等核心装备研发与生产',
          },
          infrastructure: {
            title: '基础设施',
            desc: '起降场、充电桩、低空通信网络、空管系统搭建',
          },
          services: {
            title: '多元服务',
            desc: '物流配送、载人交通、应急救援、文旅观光等场景',
          },
        },
        description: '低空经济是以AI无人驾驶航空器的低空飞行活动为牵引,辐射带动相关领域的综合性经济形态,通常指垂直高度1000-3000米空域进行的经济活动,是实体经济与Web3数字经济深度融合的前沿领域',
        marketSize: {
          status: '实时发展中',
          title: '全球低空经济市场规模',
          projection: '预计2030年突破5万亿美元',
        },
      },
      blockchain: {
        title: '区块链赋能:',
        highlight: '低率经济',
        suffix: '的数字通证',
        features: {
          decentralized: {
            title: '去中心化底层',
            desc: '基于BSC链技术,分布式账本保障透明可信,符合区块链去中心化核心特性',
          },
          binding: {
            title: '强场景绑定',
            desc: '与低空经济生态深度绑定,通过经济激励构建活跃、自驱、共治的DAO生态系统',
          },
          fair: {
            title: '公平经济模型',
            desc: '黑洞销毁,项目方零预留,链上实时可查,保障代币分配公平性',
          },
        },
        description: 'DKB不止是加密代币,更是连接低空经济全产业链的价值媒介,是探索低空经济庞大生态的Web3密钥。',
      },
      tokenomics: {
        title: '透明可信的代币经济模型',
        subtitle: '基于简约而公平的锻造工艺，构建可持续的代币生态，将赋能一位参与者的权益',
        cards: {
          totalSupply: {
            title: '总供应量',
            value: '10亿枚',
            legend: {
              burn: '黑洞销毁(70%)',
              presale: '私募预售(20%)',
              liquidity: '流动性(10%)',
            },
          },
          tax: {
            title: '买卖税费',
            value: '2%',
            buyback: '回购销毁',
            commission: '奖励流动性提供者',
            buybackValue: '1%',
            commissionValue: '1%',
          },
          burn: {
            title: '黑洞销毁',
            value: '7亿枚',
            desc: '占总供应量70%，全部打入黑洞地址即时销毁，永久退出流通，系统自动执行无法撤销',
          },
          transparent: {
            title: '零预留·全透明',
            desc: '项目方零预留份额，所有代币分配在链上实时可查，确保公平公正，符合去中心化核心精神',
            verify: '链上验证 →',
          },
        },
      },
      roadmap: {
        title: '分步落地：',
        highlight: '低空币',
        suffix: '的成长之旅',
        subtitle: '从社交通证到生态驱动，稳步一帮积累试点，实现可持续成长闭环',
        stages: {
          foundation: {
            status: '进行中',
            title: '奠基',
            items: [
              '智能合约部署与审计',
              '创建mint通道，聚集核心社区成员',
              '建立DAO治理框架与初始社区',
            ],
          },
          warriors: {
            status: '待启动',
            title: '奖励勇士',
            items: [
              '启动社区驱动的模因创作与传播',
              '推出NFT系列，奖励早期贡献者',
              '建立内容传播奖励机制',
            ],
          },
          armor: {
            status: '待启动',
            title: '铸造铠甲',
            items: [
              '启动铁军DAO，凝聚核心社区共识',
              '质押销毁70%低空币，提升代币价值',
              '部署跨链桥，实现多链互通',
            ],
          },
          fame: {
            status: '待启动',
            title: '名扬四海',
            items: [
              '百大Web3社区联合推广',
              '邀请区块链KOL参与生态建设',
              '登陆主流去中心化交易所',
            ],
          },
          explosion: {
            status: '未来规划',
            title: '生态爆发·价值兑现',
            items: [
              '与实体低空经济企业达成战略合作',
              '发行实体权益映射NFT',
              '开发DKB元宇宙低空飞行场景',
              '成为连接物理与数字世界的价值枢纽',
            ],
          },
        },
      },
      rebate: {
        title: '预售期 -',
        highlight: '推广返佣机制',
        subtitle: '激励清晰、到账高效、助力预售期快速推广',
        mechanisms: {
          title: '核心机制说明',
          binding: {
            title: '绑定关系',
            desc: '每个用户唯独「邀请链接」永久帮定上下级',
          },
          trigger: {
            title: '触发条件',
            desc: '用户在售期间购买代币（USDT ⇒ DKB）',
          },
          logic: {
            title: '返佣逻辑',
            desc: '自动向上级分配 USDT 返酬',
          },
          validity: {
            title: '有效期',
            desc: '仅颁售期间有效',
          },
        },
        ratio: {
          title: '返佣比例（层级式分布）',
          level: '层级',
          ratio: '返佣比例',
          levels: ['一代', '二代', '三代'],
        },
        highlights: {
          title: '执行亮点',
          efficiency: {
            label: '到账效率：',
            text: '实时转账即时到账（无需人工操作）',
          },
          reward: {
            label: '奖励形式：',
            text: 'USDT 直接发放（从营销收款中划出）',
          },
        },
      },
      advantages: {
        title: '万亿赛道的',
        highlight: '核心优势',
        subtitle: '政策、技术、市场三重驱动，低空经济迎来黄金发展期',
        cards: {
          strategy: {
            title: '国家战略加持',
            desc: '全球主要经济体将低空经济列为未来产业重点扶持方向，政府政策倾斜与全球空域补贴，将持续赋能发展。',
          },
          technology: {
            title: '技术突破赋能',
            desc: '电池、人工智能、复合材料、通信等研发突破性成熟度大幅完成提速，供应链人员投入AI相配EVTOL综合生产，已能批量交付生态场景应用。',
          },
          demand: {
            title: '海量场景需求',
            desc: '物流、交通、农业、安防场景倍增让大量市场业务增长需求井喷并需求不断深化，并与突破技术和应用工具应同步造就的持续增长。',
          },
        },
        potential: {
          title: '巨大经济潜力',
          desc: '根据市场研究，低空经济产业链获客方式数据化对接，不仅相连产业链，超频后维护成本上升明显，且扩大金融资产产业回报延时获取潜力。依靠未来经济价值链优势配对，成为各类核心参与者中长期价值承接重点，让核心社区共享低空经济红利。',
        },
      },
      culture: {
        title: '我们的文化：',
        highlight: '引领低空经济',
        suffix: '的探索者',
        subtitle: 'DAO社区是低空币的核心，我们共同构建去中心化、透明、协作、创新的Web3文化氛围',
        values: {
          title: '核心价值观',
          decentralized: {
            title: '去中心化',
            desc: '社区主导治理，无中心化权威，代码即法则',
          },
          innovation: {
            title: '创新思维',
            desc: '以Web3思维重塑生态发展，解决实际痛点',
          },
          collaboration: {
            title: '协作精神',
            desc: '社区需高度参与治理，共享生态与机会，共同成长',
          },
          transparent: {
            title: '透明可信',
            desc: '链上可查，公开透明，建立社区信任基石',
          },
        },
        community: {
          sloganTitle: '社区口号',
          slogan: '在动荡中寻找平衡，在无常中体会自由。',
          daoTitle: 'DAO社群入口',
          telegram: '官方Telegram',
          twitter: 'X(Twitter)社群',
          meeting: '腾讯会议',
          qq: 'QQ社区群',
          joinButton: '加入我们，成为低空经济Web3生态的共建者',
        },
      },
      cta: {
        title: '抢占万亿低空经济红利，从持有',
        highlight: 'DKB',
        suffix: '开始',
        subtitle: '成为去中心化低空经济基础设施的早期参与者，共享生态成长价值',
        buttons: {
          download: '走进DKB世界',
          buy: '购买DKB',
        },
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
    },
    introduction: {
      hero: {
        brand: 'DKB-A',
        titleLine1: 'RWA驱动低空经济',
        titleLine2: '新型生产关系',
        description: '去中心化流通，透明化监管，并赋予低空经济价值互联网时代，通过区块链赋能和区块链资产分配机制',
        stats: {
          label: '资产流动性提升',
        },
        tags: {
          blockHeight: '区块高度',
          nodeCount: '节点数量',
        },
      },
      reconstruction: {
        title: '重构低空经济生产关系',
        subtitle: 'DKB-A通过区块链技术打破传统行业壁垒，构建去中心化智能经济网络，推动低空经济从封闭运营模式进入数字化与资产化的全新发展阶段',
        protocol: {
          title: '协议定位',
          desc: 'DKB-A是全球首个专注于低空经济的去中心化RWA协议，旨在通过区块链技术将无人机、飞行器等实物资产转化为可交易的数字通证，降低行业准入门槛并提升资产的流动性与透明度。借助智能合约实现高效的价值分配，打造一个全球化的飞行网络运营和投资平台，通过经济通证和治理机制赋权持币者，推动低空经济的全面落地和发展。',
        },
        advantages: {
          title: '核心优势',
          tokenization: {
            title: '资产通证化',
            desc: '通过NFT与FT结合的双方式，将低空资产Token化，充盈链接价值300%+，实现跨界与共有',
          },
          dao: {
            title: 'DAO治理',
            desc: '社区主导决策机制，让持币者参与项目治理与协议决策与共治发展，实现真正去中心化治理',
          },
          crossChain: {
            title: '跨链互操作',
            desc: '支持多链生态互通，通过跨链桥实现资产在不同区块链网络的资产自由流转与价值交换',
          },
          protocol: {
            title: '去中心化低空经济协议',
            desc: '基于改进Layer2方案，以AMO运营驱动RWA的政策机制',
          },
        },
      },
      web3: {
        title: 'Web3驱动的可信底座',
        subtitle: '采用区块链技术+智能合约+DAO治理=底层信任，打造全链条RWA技术引擎',
        blockchain: {
          title: '区块链基础设施',
          desc: '采用改进版，可容纳大规模并发业务的超级账本，确保数据透明的同时，对底层数据库进行权限化管理。',
          features: ['采用新型共识机制', '全球数据交叉验证机制', '防篡改加密账本基础'],
        },
        smartContract: {
          badge: '核心技术',
          title: '智能合约',
          desc: '自定义流程协议，合规资质，资源管理等规则，准确无差错地执行合约条款，规则不再受人为干扰，超节点多党签署保障。',
          features: ['自动化股权分账机制', '定时条件触发机制', '完备中介约执行体系'],
        },
        dao: {
          title: 'DAO治理',
          desc: '让企业与全球利益相关者，共同参与治理规则，实施全球集体决策行权，赋能大众协作的生态共同体。',
          features: ['分布式集权机制', '社区驱动的问责化', '透明化的治理工具'],
        },
        breakthrough: {
          title: '核心技术突破',
          highPerformance: {
            title: '高性能交易处理',
            desc: '基于改进Rollup技术体系进行千万级TPS+处理量评估与需求并与商业组，驱动优质应理综合高效采集高量，确保大规模商业高效流转主汇',
          },
          compliance: {
            title: '链上合规体系',
            desc: '创新链上KYC/AML流程，对接全球金融监管体系，透视全资质服务类型，为现实资金业务提供安全',
          },
        },
      },
      tokenization: {
        title: '资产通证化革新',
        subtitle: '通过创新的通证化方案，解决低空经济领域的资产流动性与资源配置问题',
        airspace: {
          tag: '空域资源通证化',
          title: '从独占至共享共治',
          desc: '打破传统空域分配不均，利用率低的痛点，通过通证化释放闲置空域价值，降低中小企业空域使用门槛，实现航线定价的民主化。',
          painPoints: {
            title: '传统痛点',
            items: [
              '空域资源分配不均，大型企业垄断严重',
              '交易成本高，中小企业参与门槛高',
              '空域利用率低，资源浪费严重',
            ],
          },
          solution: {
            title: 'Web3解决方案',
            desc: '通过区块链技术将空域分配的使用权、收益权等权益转化为NFT通证，实现空域资源的透明化配置。先对空域资源做预测、利用定价机制促进权益流转，再设计智能合约定义通证规则，最后发行并通过DAO治理机制实现社区共管。',
          },
        },
        drone: {
          tag: '无人机资产通证化',
          title: '从资本独占至多元共富',
          desc: '创新所有权/收益权/使用权/综合权益四大通证化方案，适应不同需求，借助智能合约化飞机、投资者、维保公司权利关系，让普通民众也能参与低空经济红利。',
          modes: {
            title: '通证化模式',
            ownership: {
              title: '所有权通证化',
              desc: '投资者购买NFT成为无人机共同所有者，按比例获益收益',
            },
            revenue: {
              title: '收益权通证化',
              desc: '不改变所有权，投资者购买收益类NFT获得来自运营收益分配权',
            },
            usage: {
              title: '使用权通证化',
              desc: '将无人机使用时间分时为NFT通证，用户购买代币获取时间段使用权',
            },
            comprehensive: {
              title: '综合权益通证化',
              desc: '整合各类权益，提供灵活的投资和使用场景',
            },
          },
          highlight: {
            title: '普惠金融实践',
            desc: '将无人机资产通证化，降低投资门槛，让普通民众也能参与低空经济投资，共享产业发展红利。',
          },
        },
      },
      cases: {
        title: '案例展示',
        subtitle: 'DKB-A在全球范围内的成功应用，为低空经济Web3化转型提供实践范例',
        skyElf: {
          tag: '空域资源通证化',
          title: '新加坡avetics "SKY Elf（SE）"项目',
          background: {
            title: '项目背景',
            desc: '新加坡空域资源紧张导致航线审批慢，存在中小企业参与门槛高（仅38%），产业链协作不畅等问题，亟需通过Web3技术简化流程。',
          },
          solution: {
            title: '项目方案',
            items: [
              '发行"SKY Elf（SE）"通证，总量30亿枚（单价不超盘），始发价格0.13USDT',
              '通证链接无人机销售数据、交换资收、物流服务并奖励资产评价值',
              '基于ETH专属子链实现高并发交易，结合联盟链守护基础架构使用情况',
            ],
          },
          results: {
            title: '项目成果',
            airspace: '释放专享空域',
            utilization: '空域利用率',
            cycle: '流程周期',
          },
        },
        ctChain: {
          tag: '生态系统建设',
          title: '产通链CT-CHAIN低空经济RWA生态系统',
          background: {
            title: '项目背景',
            desc: '传统低空经济业务仅以巨头为主导，存在信息不对称、信任度不高、资源整合难等问题，需借助Web3激发协作的生态体系打破壁垒。',
          },
          solution: {
            title: '项目方案',
            items: [
              '采用"主链-侧链集-流通链"分层架构，确保资产真实可信高效流转',
              '建立多中心化协同治理机制，支持多方参与治理，对接多方协同网络',
              '通过跨链技术突破，支持千万TPS并兼容多种区块链',
            ],
          },
          results: {
            title: '项目成果',
            penetration: '产业数字化渗透率',
            efficiency: '创新效率提升',
          },
        },
      },
      dao: {
        title: '从链式分工到DAO生态共生',
        subtitle: '构建去中心化协作网络,连接多方参与者形成相互依存的Web3生态共同体',
        limitations: {
          title: '传统协作局限',
          infoAsymmetry: {
            title: '信息不对称',
            desc: '产业链各环节信息不透明,导致协作效率低下',
          },
          trustCost: {
            title: '信任成本高',
            desc: '各方缺乏信任基础,需要复杂的合同与中介机构保障',
          },
          resourceIntegration: {
            title: '资源整合难',
            desc: '空域、设备、数据等资源分散,难以实证优化配置',
          },
          innovation: {
            title: '创新动力不足',
            desc: '封闭式生态限制了创新活力与技术进步',
          },
        },
        mechanism: {
          title: 'Web3生态共生机制',
          desc: '依托区块链技术构建去中心化协作网络,连接技术提供方、资产方、投资者、印务提供商、证监管机构,形成相互依存、相互促进的DAO生态共同体。',
          dataSharing: {
            title: '可信数据共享',
            desc: '利用区块链不可将改性保障数据真实可靠,降低协作信任成本。实现组织、跨区域的安全数据共享。',
          },
          tokenIncentive: {
            title: 'Token激励机制',
            desc: '参与者的贡献值可转化为可流通数字权证,用于消费支付与企业分红,激发生态参与者的积极性与创造性。',
          },
          resourceIntegration: {
            title: '高效资源整合',
            desc: '避免重复建设,实现空域、设备、数据等资源的优化配置,提高整个生态系统的运行效率与资源利用率。',
          },
        },
      },
      join: {
        title: '加入DKB-A生态',
        subtitle: '与我们一起共建去中心化空中交通系统,共享低空经济Web3红利',
        cooperation: {
          title: '合作方向',
          traffic: {
            title: '去中心化空中交通管理',
            desc: '联合搭建空中交通管理DAPP,实现低空飞行权限链上审批,提升空域管理效率与安全性。',
          },
          asset: {
            title: '实物资产通证化',
            desc: '开展无人机、起重器、eVTOL等实物资产的通证化交易与流通合作,激活存量资产价值,提升资产流动性。',
          },
          lab: {
            title: '共建RWA实验区',
            desc: '共建低空经济RWA实验区,共享生态流量与技术支持,探索低空经济Web3化转型的创新模式与路径。',
          },
        },
        form: {
          title: '加入生态',
          subtitle: '填写以下信息，我们的社区经理将尽快与您取得联系，共同探讨Web3生态合作机会',
          name: '姓名',
          email: '邮箱',
          organization: '组织/项目',
          intention: '合作意向',
          wallet: '钱包地址',
          submit: '提交申请',
          placeholders: {
            name: '请输入您的姓名',
            email: '请输入您的邮箱',
            organization: '请输入组织或项目名称',
            intention: '请简要描述您的合作意向',
            wallet: '请输入您的钱包地址',
          },
          success: '感谢您的提交！我们会尽快联系您。',
        },
      },
      community: {
        title: '加入社区',
        subtitle: '加入DKB-A社区,获取最新动态,参与生态建设',
        email: {
          title: '官方邮箱',
          desc: '发送邮件咨询相关问题',
        },
        twitter: {
          title: '官方推特',
          desc: '关注我们获取最新动态',
        },
        center: {
          title: '社区中心',
          desc: '前来参观或洽谈合作',
        },
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
        subtitle: '最低购买 {{min}} USDT，最高购买 {{max}} USDT',
        countdownLabels: ['天', '小时', '分钟', '秒'],
        countdown: {
          before: '距预售开始倒计时',
          during: '距预售结束倒计时',
          ended: '预售已结束',
          waiting: '预售信息加载中',
        },
      },
      card: {
        price: '认购价格',
        time: '预售时间',
        min: '最低',
        max: '最高',
        buy: '立即认购',
        approve: '授权',
        approving: '授权中...',
        buying: '购买中...',
        connect: '请先连接钱包',
        selectPackage: '请选择套餐',
        checking: '检查授权中...',
        binding: '绑定上级中...',
        bind: '绑定上级',
        inactive: '预售未开始',
        before: '预售未开始',
        ended: '预售已结束',
        purchased: '已参与预售',
        status: '预售状态',
        statusActive: '已开启',
        statusInactive: '未开启',
        referrer: '上级地址',
        balance: '钱包余额',
        insufficient: 'USDT 余额不足',
        reward: '邀请奖励',
        amount: '可领取数量',
        receive: '等待发放',
        selectPlaceholder: '请选择认购套餐',
        option: '{{usdt}} USDT ≈ {{dkb}} DKB',
      },
      invite: {
        title: '邀请规则',
        description: '参与预售即可解锁三层级邀请奖励：',
        link: '专属邀请链接',
        copy: '复制链接',
      },
      dynamicErrors: {
        insufficient_funds_for_transfer: '余额不足，无法完成转账',
        presale_address_cannot_be_zero: '上级地址不能为空',
        presale_cannot_refer_yourself: '不能绑定自己为上级',
        presale_already_has_referrer: '已绑定上级，无法重复绑定',
        presale_circular_reference_detected: '检测到循环引用，请更换上级地址',
        presale_referrer_not_set: '当前账号尚未绑定上级',
        presale_already_purchased: '您已完成预售购买',
        presale_amount_must_equal_one_of_fixed_usdt_prices: '购买金额必须匹配固定套餐价格',
        presale_insufficient_usdt_balance: 'USDT 余额不足',
        presale_insufficient_usdt_allowance: 'USDT 授权额度不足',
        presale_insufficient_dkb_balance_in_contract: '合约中的 DKB 余额不足',
        presale_usdt_transfer_failed: 'USDT 转账失败',
        presale_dkb_transfer_failed: 'DKB 转账失败',
        presale_level_1_reward_transfer_failed: '一代返佣转账失败',
        presale_level_2_reward_transfer_failed: '二代返佣转账失败',
        presale_level_3_reward_transfer_failed: '三代返佣转账失败',
      },
      errors: {
        userRejected: '已在钱包中拒绝交易',
        insufficientFunds: '钱包余额不足以支付此次交易',
        insufficientAllowance: '授权额度不足，请先提升授权额度',
        presaleInactive: '预售尚未激活，请稍后再试',
        alreadyParticipated: '已完成预购，无需重复操作',
        referrerRequired: '请先绑定上级地址后再尝试',
        insufficientLiquidity: '合约余额不足，请稍后重试',
      },
      partners: {
        title: '全球合作伙伴',
      },
      footer: {
        description: '全球领先的低空经济 RWA 生态平台，重构低空经济生产关系，开启低空经济数字化新时代。',
        certification: '链上认证',
        contract: 'BSC 链合约地址：',
        disclaimer: '免责声明',
        disclaimerText:
          '本项目不构成任何形式的投资建议，投资有风险，决策需谨慎。所有代币和相关信息仅用于社区公示，请勿视为对任何第三方承诺或担保。',
        copyright: '© 2025. Design with by .',
      },
      modal: {
        title: '绑定上级',
        description: '检测到当前地址未绑定上级，需要绑定上级地址才能继续预售。',
        defaultAddress: '上级地址：',
        confirm: '确认绑定',
        inviteTitle: '邀请链接',
        inviteCode: '邀请码',
        share: '分享邀请',
      },
      messages: {
        walletSuccess: '钱包连接成功',
        walletError: '连接钱包失败',
        switchChain: '请切换到 BSC 链',
        bindSuccess: '绑定上级成功',
        bindError: '绑定上级失败',
        bindErrorDetail: '绑定失败：{{reason}}',
        copySuccess: '链接已复制',
        copyError: '复制失败',
        copyCodeSuccess: '邀请码已复制',
        purchaseSuccess: '购买成功',
        purchaseError: '购买失败',
        insufficient: 'USDT 余额不足',
        packageError: '读取预售套餐失败，请检查网络或稍后重试',
        userInfoError: '读取用户预售信息失败，请稍后重试',
        bindPending: '正在绑定上级 {{address}}，请在钱包中确认',
        bindSuccessDynamic: '成功绑定上级 {{address}}',
        referrerInvalid: '无效的上级地址',
        referrerSelf: '不能绑定自己的地址为上级',
        needApproval: '请先授权 USDT 再参与预售',
        presaleInactive: '预售尚未开始',
        txPending: '交易已提交（哈希：{{hash}}），等待确认',
        approvalSuccess: '授权成功',
        approvalError: '授权失败',
        userRejected: '已在钱包中取消操作',
        referrerRequired: '请先绑定上级地址',
        txHashLabel: '交易哈希：',
        networkError: '网络异常，请稍后重试',
        txDropped: '交易可能已被网络丢弃，请稍后确认',
        walletMissing: '未检测到可用钱包插件，请安装钱包后重试',
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
      footer: {
        description: 'A leading decentralized RWA ecosystem platform, reshaping low-altitude economy production relations, pioneering a new era of blockchain-empowered real-world assets.',
        certification: 'On-chain Certification',
        disclaimer: 'Disclaimer',
        disclaimerText: 'This project is a blockchain research platform. All displayed works are for demonstration purposes. Regarding trade, ownership disputes, technical failures, or temporary system issues, this does not constitute comprehensive legal advice, investigation compensation requirements, or investment recommendations.',
        copyright: '© 2025 DKB Team. All rights reserved.',
        copyAddress: 'Copy Address',
        copied: 'Copied',
      },
      language: {
        toggleLabel: 'Switch language',
        zh: 'Chinese',
        en: 'English',
      },
    },
    home: {
      hero: {
        badge: 'BSC-based Aviation Economy Token',
        titleLine1: 'Low-Altitude Coin:',
        titleLine2: 'Pioneering the Digital Ecosystem for Low-Altitude Economy',
        subtitle: 'A decentralized token based on BSC chain, creating the "blood" and "lubricant" of the low-altitude economy ecosystem',
        features: {
          pc: ['On-chain Native Assets', 'DAO Community Governance', 'Real-world Scenario Mapping'],
          mobile: ['On-chain Top Assets', 'DAO Community Governance', 'Real-world Scenario Mapping'],
        },
        buttons: {
          download: 'Step into the world of DKB',
          buy: 'Buy DKB',
        },
        stats: {
          totalSupply: 'Total Supply',
          burnRatio: 'Burn Ratio',
          contract: 'On-chain Contract',
          consensus: 'Consensus Mechanism',
          totalSupplyValue: '1 Billion',
          burnRatioValue: '70%',
          contractValue: shortAddress(HOME_CONTRACT_ADDRESS),
          consensusValue: 'PoS + DAO',
        },
      },
      ecosystem: {
        title: 'Trillion-Dollar New Track:',
        highlight: 'Core Ecosystem of Low-Altitude Economy',
        features: {
          manufacturing: {
            title: 'Aircraft Manufacturing',
            desc: 'R&D and production of core equipment such as drones, EVTOL, helicopters',
          },
          infrastructure: {
            title: 'Infrastructure',
            desc: 'Construction of landing fields, charging stations, low-altitude communication networks, and air traffic control systems',
          },
          services: {
            title: 'Diverse Services',
            desc: 'Scenarios including logistics delivery, passenger transport, emergency rescue, cultural tourism',
          },
        },
        description: 'Low-altitude economy is a comprehensive economic form driven by AI autonomous aircraft low-altitude flight activities, radiating to related fields. It typically refers to economic activities conducted in airspace at vertical heights of 1000-3000 meters, representing the frontier of deep integration between the real economy and Web3 digital economy',
        marketSize: {
          status: 'In Real-time Development',
          title: 'Global Low-Altitude Economy Market Size',
          projection: 'Expected to exceed $5 trillion by 2030',
        },
      },
      blockchain: {
        title: 'Blockchain Empowerment:',
        highlight: 'Low-Altitude Economy',
        suffix: 'Digital Token',
        features: {
          decentralized: {
            title: 'Decentralized Foundation',
            desc: 'Based on BSC chain technology, distributed ledger ensures transparency and trustworthiness, conforming to the core characteristics of blockchain decentralization',
          },
          binding: {
            title: 'Strong Scenario Binding',
            desc: 'Deeply bound with the low-altitude economy ecosystem, building an active, self-driven, co-governed DAO ecosystem through economic incentives',
          },
          fair: {
            title: 'Fair Economic Model',
            desc: '70% black hole burn, zero project reserve, real-time on-chain verification, ensuring fair token distribution',
          },
        },
        description: 'DKB is not just a cryptocurrency token, but a value medium connecting the entire low-altitude economy industry chain, and the Web3 key to exploring the vast low-altitude economy ecosystem.',
      },
      tokenomics: {
        title: 'Transparent and Trustworthy Tokenomics',
        subtitle: 'Based on simple and fair forging process, building a sustainable token ecosystem that empowers every participant',
        cards: {
          totalSupply: {
            title: 'Total Supply',
            value: '1 Billion',
            legend: {
              burn: 'Black Hole Burn (70%)',
              presale: 'Private Presale (20%)',
              liquidity: 'Liquidity (10%)',
            },
          },
          tax: {
            title: 'Trading Tax',
            value: '2%',
            buyback: 'Buyback & Burn',
            commission: 'Reward liquidity providers',
            buybackValue: '1%',
            commissionValue: '1%',
          },
          burn: {
            title: 'Black Hole Burn',
            value: '700 Million',
            desc: '70% of total supply, all sent to black hole address for instant burn, permanently removed from circulation, automatically executed by the system and irreversible',
          },
          transparent: {
            title: 'Zero Reserve · Fully Transparent',
            desc: 'Zero project reserve allocation, all token distributions are verifiable on-chain in real-time, ensuring fairness and justice, conforming to the core spirit of decentralization',
            verify: 'On-chain Verification →',
          },
        },
      },
      roadmap: {
        title: 'Phased Implementation:',
        highlight: 'Low-Altitude Coin',
        suffix: 'Growth Journey',
        subtitle: 'From social token to ecosystem-driven, steadily accumulating pilots to achieve sustainable growth loop',
        stages: {
          foundation: {
            status: 'In Progress',
            title: 'Foundation',
            items: [
              'Smart contract deployment and audit',
              'Create mint channel, gather core community members',
              'Establish DAO governance framework and initial community',
            ],
          },
          warriors: {
            status: 'Pending',
            title: 'Reward Warriors',
            items: [
              'Launch community-driven meme creation and dissemination',
              'Release NFT series, reward early contributors',
              'Establish content dissemination reward mechanism',
            ],
          },
          armor: {
            status: 'Pending',
            title: 'Forge Armor',
            items: [
              'Launch Iron Army DAO, consolidate core community consensus',
              'Stake and burn 70% of low-altitude coins, increase token value',
              'Deploy cross-chain bridge, achieve multi-chain interoperability',
            ],
          },
          fame: {
            status: 'Pending',
            title: 'Worldwide Fame',
            items: [
              'Top 100 Web3 communities joint promotion',
              'Invite blockchain KOLs to participate in ecosystem building',
              'List on mainstream decentralized exchanges',
            ],
          },
          explosion: {
            status: 'Future Planning',
            title: 'Ecosystem Explosion · Value Realization',
            items: [
              'Reach strategic partnerships with real-world low-altitude economy enterprises',
              'Issue real-world rights mapping NFTs',
              'Develop DKB metaverse low-altitude flight scenarios',
              'Become a value hub connecting physical and digital worlds',
            ],
          },
        },
      },
      rebate: {
        title: 'Presale Period -',
        highlight: 'Promotion Rebate Mechanism',
        subtitle: 'Clear incentives, efficient settlement, helping rapid promotion during presale',
        mechanisms: {
          title: 'Core Mechanism Description',
          binding: {
            title: 'Binding Relationship',
            desc: 'Each user has a unique "invite link" that permanently binds upper and lower levels',
          },
          trigger: {
            title: 'Trigger Condition',
            desc: 'User purchases tokens during presale (USDT ⇒ DKB)',
          },
          logic: {
            title: 'Rebate Logic',
            desc: 'Automatically distribute USDT rebate to upper levels',
          },
          validity: {
            title: 'Validity Period',
            desc: 'Valid only during presale period',
          },
        },
        ratio: {
          title: 'Rebate Ratio (Hierarchical Distribution)',
          level: 'Level',
          ratio: 'Rebate Ratio',
          levels: ['1st Gen', '2nd Gen', '3rd Gen'],
        },
        highlights: {
          title: 'Execution Highlights',
          efficiency: {
            label: 'Settlement Efficiency:',
            text: 'Real-time transfer, instant settlement (no manual operation required)',
          },
          reward: {
            label: 'Reward Form:',
            text: 'USDT direct distribution (deducted from marketing revenue)',
          },
        },
      },
      advantages: {
        title: 'Core Advantages of',
        highlight: 'Trillion-Dollar Track',
        subtitle: 'Policy, technology, and market triple drivers, low-altitude economy enters golden development period',
        cards: {
          strategy: {
            title: 'National Strategy Support',
            desc: 'Major global economies have identified low-altitude economy as a key area for future industrial support, and government policy support and global airspace subsidies will continue to empower its development.',
          },
          technology: {
            title: 'Technology Breakthrough Empowerment',
            desc: 'Breakthrough maturity in batteries, AI, composite materials, communications has significantly accelerated, with supply chain personnel investing in AI-matched EVTOL integrated production, enabling batch delivery for ecosystem applications.',
          },
          demand: {
            title: 'Massive Scenario Demand',
            desc: 'Exponential growth in logistics, transportation, agriculture, and security scenarios has created explosive market demand that continues to deepen, synchronized with breakthrough technologies and application tools for sustained growth.',
          },
        },
        potential: {
          title: 'Huge Economic Potential',
          desc: 'According to market research, the low-altitude economy industry chain\'s customer acquisition methods are digitally connected, not only linking the industry chain, but also significantly increasing maintenance costs after overclocking, and expanding the potential for delayed returns in financial asset industries. Relying on future economic value chain advantage pairing, it becomes a key medium-to-long-term value carrier for various core participants, allowing the core community to share low-altitude economy dividends.',
        },
      },
      culture: {
        title: 'Our Culture:',
        highlight: 'Pioneers Leading',
        suffix: 'Low-Altitude Economy',
        subtitle: 'DAO community is the core of low-altitude coin, we jointly build a decentralized, transparent, collaborative, and innovative Web3 cultural atmosphere',
        values: {
          title: 'Core Values',
          decentralized: {
            title: 'Decentralization',
            desc: 'Community-led governance, no centralized authority, code is law',
          },
          innovation: {
            title: 'Innovative Thinking',
            desc: 'Reshape ecosystem development with Web3 thinking, solve real pain points',
          },
          collaboration: {
            title: 'Collaborative Spirit',
            desc: 'Community needs high participation in governance, sharing ecosystem and opportunities, growing together',
          },
          transparent: {
            title: 'Transparent and Trustworthy',
            desc: 'On-chain verifiable, open and transparent, building community trust foundation',
          },
        },
        community: {
          sloganTitle: 'Community Slogan',
          slogan: 'Finding balance in turbulence, experiencing freedom in impermanence.',
          daoTitle: 'DAO Community Entries',
          telegram: 'Official Telegram',
          twitter: 'X(Twitter) Community',
          meeting: 'Tencent Meeting',
          qq: 'QQ Community Group',
          joinButton: 'Join us and become a co-builder of the low-altitude economy Web3 ecosystem',
        },
      },
      cta: {
        title: 'Seize the trillion-dollar low-altitude economy dividends, starting with holding',
        highlight: 'DKB',
        suffix: '',
        subtitle: 'Become an early participant in decentralized low-altitude economy infrastructure, sharing ecosystem growth value',
        buttons: {
          download: 'Step into the world of DKB',
          buy: 'Buy DKB',
        },
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
    },
    introduction: {
      hero: {
        brand: 'DKB-A',
        titleLine1: 'RWA-Driven Low-Altitude Economy',
        titleLine2: 'New Production Relations',
        description: 'Decentralized circulation, transparent supervision, and empowering the low-altitude economy in the Internet era through blockchain empowerment and blockchain asset allocation mechanisms',
        stats: {
          label: 'Asset Liquidity Enhancement',
        },
        tags: {
          blockHeight: 'Block Height',
          nodeCount: 'Node Count',
        },
      },
      reconstruction: {
        title: 'Reconstructing Low-Altitude Economy Production Relations',
        subtitle: 'DKB-A breaks traditional industry barriers through blockchain technology, building a decentralized intelligent economic network, promoting low-altitude economy from closed operation mode to a new development stage of digitalization and assetization',
        protocol: {
          title: 'Protocol Positioning',
          desc: 'DKB-A is the world\'s first decentralized RWA protocol focused on low-altitude economy, aiming to convert physical assets such as drones and aircraft into tradable digital tokens through blockchain technology, lowering industry entry barriers and improving asset liquidity and transparency. With smart contracts for efficient value distribution, we build a global flight network operation and investment platform, empowering token holders through economic tokens and governance mechanisms, promoting the full implementation and development of low-altitude economy.',
        },
        advantages: {
          title: 'Core Advantages',
          tokenization: {
            title: 'Asset Tokenization',
            desc: 'Through the dual approach of NFT and FT combination, tokenize low-altitude assets, enrich link value by 300%+, achieving cross-border and shared ownership',
          },
          dao: {
            title: 'DAO Governance',
            desc: 'Community-led decision-making mechanism, allowing token holders to participate in project governance and protocol decision-making and co-governance development, achieving true decentralized governance',
          },
          crossChain: {
            title: 'Cross-chain Interoperability',
            desc: 'Support multi-chain ecosystem interoperability, achieve free flow and value exchange of assets across different blockchain networks through cross-chain bridges',
          },
          protocol: {
            title: 'Decentralized Low-Altitude Economy Protocol',
            desc: 'Based on improved Layer2 solutions, with AMO operations driving RWA policy mechanisms',
          },
        },
      },
      web3: {
        title: 'Web3-Driven Trusted Foundation',
        subtitle: 'Blockchain technology + Smart contracts + DAO governance = underlying trust, building a full-chain RWA technology engine',
        blockchain: {
          title: 'Blockchain Infrastructure',
          desc: 'Adopt an improved version of a super ledger that can accommodate large-scale concurrent business, ensuring data transparency while managing the underlying database with permission-based management.',
          features: ['Adopt new consensus mechanisms', 'Global data cross-validation mechanisms', 'Tamper-proof encrypted ledger foundation'],
        },
        smartContract: {
          badge: 'Core Technology',
          title: 'Smart Contracts',
          desc: 'Custom process protocols, compliance qualifications, resource management rules, accurately execute contract terms without errors, rules no longer subject to human interference, multi-party signing by super nodes for guarantee.',
          features: ['Automated equity distribution mechanisms', 'Timed conditional trigger mechanisms', 'Complete intermediary contract execution system'],
        },
        dao: {
          title: 'DAO Governance',
          desc: 'Enable enterprises and global stakeholders to jointly participate in governance rules, implement global collective decision-making and rights exercise, empowering a collaborative ecosystem community.',
          features: ['Distributed centralized mechanisms', 'Community-driven accountability', 'Transparent governance tools'],
        },
        breakthrough: {
          title: 'Core Technology Breakthroughs',
          highPerformance: {
            title: 'High-Performance Transaction Processing',
            desc: 'Based on improved Rollup technology system for tens of millions of TPS+ processing capacity evaluation and requirements with business groups, driving high-quality comprehensive efficient collection of high volume, ensuring large-scale commercial efficient flow of main hubs',
          },
          compliance: {
            title: 'On-chain Compliance System',
            desc: 'Innovative on-chain KYC/AML processes, connecting to global financial regulatory systems, transparent full-qualification service types, providing security for real-world fund business',
          },
        },
      },
      tokenization: {
        title: 'Asset Tokenization Innovation',
        subtitle: 'Solve asset liquidity and resource allocation problems in the low-altitude economy field through innovative tokenization solutions',
        airspace: {
          tag: 'Airspace Resource Tokenization',
          title: 'From Exclusive to Shared Co-governance',
          desc: 'Break the pain points of uneven airspace distribution and low utilization rates, release idle airspace value through tokenization, lower airspace usage thresholds for SMEs, and achieve democratization of route pricing.',
          painPoints: {
            title: 'Traditional Pain Points',
            items: [
              'Uneven airspace resource distribution, severe monopoly by large enterprises',
              'High transaction costs, high participation barriers for SMEs',
              'Low airspace utilization, serious resource waste',
            ],
          },
          solution: {
            title: 'Web3 Solutions',
            desc: 'Convert airspace allocation rights such as usage rights and revenue rights into NFT tokens through blockchain technology, achieving transparent configuration of airspace resources. First predict airspace resources, use pricing mechanisms to promote rights circulation, then design smart contracts to define token rules, finally issue and achieve community co-management through DAO governance mechanisms.',
          },
        },
        drone: {
          tag: 'Drone Asset Tokenization',
          title: 'From Capital Exclusive to Multi-shared Prosperity',
          desc: 'Innovate four tokenization schemes: ownership/revenue rights/usage rights/comprehensive rights, adapting to different needs, using smart contracts to define relationships between aircraft, investors, and maintenance companies, allowing ordinary people to participate in low-altitude economy dividends.',
          modes: {
            title: 'Tokenization Modes',
            ownership: {
              title: 'Ownership Tokenization',
              desc: 'Investors purchase NFTs to become co-owners of drones, benefiting proportionally from returns',
            },
            revenue: {
              title: 'Revenue Rights Tokenization',
              desc: 'Without changing ownership, investors purchase revenue NFTs to obtain operational revenue distribution rights',
            },
            usage: {
              title: 'Usage Rights Tokenization',
              desc: 'Divide drone usage time into NFT tokens, users purchase tokens to obtain time slot usage rights',
            },
            comprehensive: {
              title: 'Comprehensive Rights Tokenization',
              desc: 'Integrate various rights, providing flexible investment and usage scenarios',
            },
          },
          highlight: {
            title: 'Inclusive Finance Practice',
            desc: 'Tokenize drone assets, lower investment thresholds, allowing ordinary people to participate in low-altitude economy investment, sharing industrial development dividends.',
          },
        },
      },
      cases: {
        title: 'Case Studies',
        subtitle: 'DKB-A\'s successful applications worldwide provide practical examples for low-altitude economy Web3 transformation',
        skyElf: {
          tag: 'Airspace Resource Tokenization',
          title: 'Singapore avetics "SKY Elf (SE)" Project',
          background: {
            title: 'Project Background',
            desc: 'Singapore\'s tight airspace resources lead to slow route approvals, high participation barriers for SMEs (only 38%), poor industry chain collaboration, urgently needing Web3 technology to simplify processes.',
          },
          solution: {
            title: 'Project Solution',
            items: [
              'Issue "SKY Elf (SE)" tokens, total supply 3 billion (unit price not exceeding market), initial price 0.13 USDT',
              'Tokens link drone sales data, exchange revenue, logistics services and reward asset evaluation value',
              'Based on ETH dedicated sub-chain for high-concurrency transactions, combined with consortium chain to protect infrastructure usage',
            ],
          },
          results: {
            title: 'Project Results',
            airspace: 'Exclusive Airspace Released',
            utilization: 'Airspace Utilization Rate',
            cycle: 'Process Cycle',
          },
        },
        ctChain: {
          tag: 'Ecosystem Construction',
          title: 'CT-CHAIN Low-Altitude Economy RWA Ecosystem',
          background: {
            title: 'Project Background',
            desc: 'Traditional low-altitude economy business is dominated only by giants, with information asymmetry, low trust, difficult resource integration, needing Web3 to stimulate collaborative ecosystem to break barriers.',
          },
          solution: {
            title: 'Project Solution',
            items: [
              'Adopt "main chain-side chain set-circulation chain" layered architecture, ensuring authentic, credible, and efficient asset flow',
              'Establish multi-centralized collaborative governance mechanisms, support multi-party participation in governance, connect multi-party collaborative networks',
              'Through cross-chain technology breakthroughs, support tens of millions of TPS and be compatible with multiple blockchains',
            ],
          },
          results: {
            title: 'Project Results',
            penetration: 'Industrial Digitalization Penetration Rate',
            efficiency: 'Innovation Efficiency Improvement',
          },
        },
      },
      dao: {
        title: 'From Chain Division to DAO Ecosystem Symbiosis',
        subtitle: 'Build a decentralized collaboration network, connecting multiple participants to form an interdependent Web3 ecosystem community',
        limitations: {
          title: 'Traditional Collaboration Limitations',
          infoAsymmetry: {
            title: 'Information Asymmetry',
            desc: 'Information opacity across industry chain links leads to low collaboration efficiency',
          },
          trustCost: {
            title: 'High Trust Costs',
            desc: 'Lack of trust foundation among parties, requiring complex contracts and intermediary institutions for guarantee',
          },
          resourceIntegration: {
            title: 'Difficult Resource Integration',
            desc: 'Resources such as airspace, equipment, and data are scattered, making it difficult to optimize configuration',
          },
          innovation: {
            title: 'Insufficient Innovation Drive',
            desc: 'Closed ecosystems limit innovation vitality and technological progress',
          },
        },
        mechanism: {
          title: 'Web3 Ecosystem Symbiosis Mechanism',
          desc: 'Build a decentralized collaboration network based on blockchain technology, connecting technology providers, asset parties, investors, service providers, and regulatory agencies, forming an interdependent and mutually promoting DAO ecosystem community.',
          dataSharing: {
            title: 'Trusted Data Sharing',
            desc: 'Use blockchain immutability to ensure data authenticity and reliability, reduce collaboration trust costs. Achieve secure data sharing across organizations and regions.',
          },
          tokenIncentive: {
            title: 'Token Incentive Mechanism',
            desc: 'Participants\' contribution values can be converted into tradable digital certificates, used for consumption payments and corporate dividends, stimulating ecosystem participants\' enthusiasm and creativity.',
          },
          resourceIntegration: {
            title: 'Efficient Resource Integration',
            desc: 'Avoid duplicate construction, achieve optimal configuration of resources such as airspace, equipment, and data, improve the operational efficiency and resource utilization of the entire ecosystem.',
          },
        },
      },
      join: {
        title: 'Join DKB-A Ecosystem',
        subtitle: 'Build a decentralized air traffic system together with us, sharing low-altitude economy Web3 dividends',
        cooperation: {
          title: 'Cooperation Directions',
          traffic: {
            title: 'Decentralized Air Traffic Management',
            desc: 'Jointly build air traffic management DAPP, achieve on-chain approval of low-altitude flight permissions, improve airspace management efficiency and safety.',
          },
          asset: {
            title: 'Physical Asset Tokenization',
            desc: 'Carry out tokenization trading and circulation cooperation for physical assets such as drones, cranes, eVTOL, activate existing asset value, improve asset liquidity.',
          },
          lab: {
            title: 'Co-build RWA Experimental Zone',
            desc: 'Co-build low-altitude economy RWA experimental zone, share ecosystem traffic and technical support, explore innovative models and paths for low-altitude economy Web3 transformation.',
          },
        },
        form: {
          title: 'Join Ecosystem',
          subtitle: 'Fill in the following information, our community manager will contact you as soon as possible to discuss Web3 ecosystem cooperation opportunities',
          name: 'Name',
          email: 'Email',
          organization: 'Organization/Project',
          intention: 'Cooperation Intention',
          wallet: 'Wallet Address',
          submit: 'Submit Application',
          placeholders: {
            name: 'Please enter your name',
            email: 'Please enter your email',
            organization: 'Please enter organization or project name',
            intention: 'Please briefly describe your cooperation intention',
            wallet: 'Please enter your wallet address',
          },
          success: 'Thank you for your submission! We will contact you as soon as possible.',
        },
      },
      community: {
        title: 'Join Community',
        subtitle: 'Join DKB-A community, get the latest updates, participate in ecosystem building',
        email: {
          title: 'Official Email',
          desc: 'Send email to inquire about related questions',
        },
        twitter: {
          title: 'Official Twitter',
          desc: 'Follow us for the latest updates',
        },
        center: {
          title: 'Community Center',
          desc: 'Visit or discuss cooperation',
        },
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
        title: 'Pre sale end',
        subtitle: 'Min Buy {{min}} USDT, Max Buy {{max}} USDT',
        countdownLabels: ['DAY', 'HOUR', 'MIN', 'SEC'],
        countdown: {
          before: 'Countdown to presale launch',
          during: 'Countdown to presale end',
          ended: 'Presale has ended',
          waiting: 'Loading presale schedule',
        },
      },
      card: {
        price: 'Price:',
        time: 'Time:',
        min: 'Min',
        max: 'MAX',
        buy: 'Participate',
        approve: 'Authorize',
        approving: 'Authorizing...',
        buying: 'Purchasing...',
        connect: 'Connect wallet',
        selectPackage: 'Select a package',
        checking: 'Checking allowance...',
        binding: 'Binding referrer...',
        bind: 'Bind Referrer',
        inactive: 'Presale inactive',
        before: 'Presale not started',
        ended: 'Presale ended',
        purchased: 'Already participated',
        status: 'Presale status',
        statusActive: 'Active',
        statusInactive: 'Inactive',
        referrer: 'Referrer',
        balance: 'Wallet balance',
        insufficient: 'Insufficient USDT balance',
        reward: 'Reward:',
        amount: 'Amount:',
        receive: 'Receive',
        selectPlaceholder: 'Select a package',
        option: '{{usdt}} USDT ≈ {{dkb}} DKB',
      },
      invite: {
        title: 'Invite Rules',
        description: 'You must participate in ido to get referral rewards:',
        link: 'Invite Link',
        copy: 'Copy',
      },
      dynamicErrors: {
        insufficient_funds_for_transfer: 'Insufficient funds for this transfer',
        presale_address_cannot_be_zero: 'Referrer address cannot be zero',
        presale_cannot_refer_yourself: 'You cannot refer yourself',
        presale_already_has_referrer: 'Referrer already set',
        presale_circular_reference_detected: 'Circular referrer detected, please choose another address',
        presale_referrer_not_set: 'Referrer is not set',
        presale_already_purchased: 'Presale purchase already completed',
        presale_amount_must_equal_one_of_fixed_usdt_prices: 'Amount must match one of the fixed USDT prices',
        presale_insufficient_usdt_balance: 'Insufficient USDT balance',
        presale_insufficient_usdt_allowance: 'Insufficient USDT allowance',
        presale_insufficient_dkb_balance_in_contract: 'Insufficient DKB balance in contract',
        presale_usdt_transfer_failed: 'USDT transfer failed',
        presale_dkb_transfer_failed: 'DKB transfer failed',
        presale_level_1_reward_transfer_failed: 'Level 1 reward transfer failed',
        presale_level_2_reward_transfer_failed: 'Level 2 reward transfer failed',
        presale_level_3_reward_transfer_failed: 'Level 3 reward transfer failed',
      },
      errors: {
        userRejected: 'Transaction was rejected in your wallet',
        insufficientFunds: 'Not enough balance to complete this transaction',
        insufficientAllowance: 'Allowance is insufficient, please approve a higher amount',
        presaleInactive: 'Presale is not active yet, please try later',
        alreadyParticipated: 'You have already completed the presale purchase',
        referrerRequired: 'Bind a referrer before proceeding',
        insufficientLiquidity: 'Contract balance is insufficient, please try again later',
      },
      partners: {
        title: 'Our partners',
      },
      footer: {
        description:
          'A leading low-altitude economy RWA platform reinventing industry relationships and enabling the digital aviation era.',
        certification: 'On-chain Certification',
        contract: 'BSC Contract:',
        disclaimer: 'Disclaimer',
        disclaimerText:
          'Nothing herein constitutes financial advice. Crypto assets are volatile—make prudent decisions. All tokens and information are for community disclosure only.',
        copyright: '© 2025. Design with by .',
      },
      modal: {
        title: 'Bind Upline',
        description:
          'The current address is not bound to a parent address. You need to bind a parent address to continue the pre-sale.',
        defaultAddress: 'Parent address:',
        confirm: 'Confirm Bind',
        inviteTitle: 'Invite Link',
        inviteCode: 'Invitation Code',
        share: 'Share Invitation',
      },
      messages: {
        walletSuccess: 'Wallet connected',
        walletError: 'Failed to connect wallet',
        switchChain: 'Please switch to BSC network',
        bindSuccess: 'Upline bound successfully',
        bindError: 'Failed to bind upline',
        bindErrorDetail: 'Bind failed: {{reason}}',
        copySuccess: 'Link copied',
        copyError: 'Copy failed',
        copyCodeSuccess: 'Invitation code copied',
        purchaseSuccess: 'Purchase successful',
        purchaseError: 'Purchase failed',
        insufficient: 'Insufficient USDT balance',
        packageError: 'Failed to load presale packages. Please check the network or try again later.',
        userInfoError: 'Failed to load user presale info. Please try again later.',
        bindPending: 'Binding referrer {{address}}. Please confirm in your wallet.',
        bindSuccessDynamic: 'Referrer bound: {{address}}',
        referrerInvalid: 'Invalid referrer address',
        referrerSelf: 'You cannot bind your own address',
        needApproval: 'Approve USDT before participating',
        presaleInactive: 'Presale is not active yet',
        txPending: 'Transaction submitted (hash: {{hash}}). Waiting for confirmation.',
        approvalSuccess: 'Approval successful',
        approvalError: 'Approval failed',
        userRejected: 'Transaction rejected in wallet',
        referrerRequired: 'Please bind a referrer before participating',
        txHashLabel: 'Tx hash: ',
        networkError: 'Network error, please try again later.',
        txDropped: 'Transaction may have been dropped by the network. Please check later.',
        walletMissing: 'No wallet detected. Please install a compatible wallet and try again.',
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

