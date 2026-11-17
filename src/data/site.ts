export const site = {
  zh: {
    brand: "澄研生物",
    tagline: "脂质体相关原料与提取物供应合作",
    nav: [
      ["products", "产品与原料"],
      ["custom-sourcing", "定制寻源"],
      ["industries", "应用领域"],
      ["quality", "质量与文件"],
      ["about", "关于我们"],
      ["contact", "联系我们"],
    ],
    cta: "提交采购需求",
    homeEyebrow: "BOTANICAL & LIPOSOMAL INGREDIENT SOURCING",
    homeTitle: "为全球品牌与制造商，连接可靠的功能原料供应",
    homeLead: "面向全球 B2B 客户，提供脂质体相关原料、植物提取物及功能性原料的供应对接、规格沟通与采购协作。以清晰的信息、审慎的供应商评估和稳定的商务沟通，支持您的产品开发与采购项目。",
    homePrimary: "发送采购需求",
    homeSecondary: "浏览产品方向",
    trustLine: "B2B 贸易与供应链协作 · 全球市场 · 按项目确认规格与文件",
    sectionProducts: "产品与原料方向",
    sectionProductsLead: "以下为可沟通的产品类别示例，并非对库存、认证或特定规格的承诺。请提供目标成分、应用和质量要求，以便逐项确认供应可行性。",
    sectionWhy: "面向采购团队的务实合作",
    sectionWhyLead: "作为贸易与供应链合作方，我们重视需求澄清、供应商资料核验、样品与规格确认，以及订单过程中的沟通协调。",
    sectionIndustries: "服务多元应用行业",
    sectionProcess: "从询盘到交付",
    sectionProcessLead: "每个项目的供应来源、技术资料、检测项目、交期和贸易条款均需在报价与订单前确认。",
    contactTitle: "告诉我们您的采购或开发需求",
    contactLead: "请尽量提供目标成分、应用场景、规格要求、预计数量和目的市场。我们将据此开展供应可行性沟通。",
    footerNote: "本网站内容用于 B2B 商务信息交流。产品可供性、技术参数、质量文件、法规适用性及交付条件均以具体供应商文件和双方书面确认为准。",
  },
  en: {
    brand: "Chengyan Bio",
    tagline: "Sourcing partner for liposomal & extract ingredients",
    nav: [
      ["products", "Products"],
      ["custom-sourcing", "Custom Sourcing"],
      ["industries", "Industries"],
      ["quality", "Quality & Documents"],
      ["about", "About"],
      ["contact", "Contact"],
    ],
    cta: "Send an Inquiry",
    homeEyebrow: "BOTANICAL & LIPOSOMAL INGREDIENT SOURCING",
    homeTitle: "Connecting global brands with ingredient supply opportunities",
    homeLead: "A B2B trading and sourcing partner for liposome-related ingredients, botanical extracts and functional raw materials. We coordinate product specifications, supplier information and purchasing communication to support your sourcing and product development projects.",
    homePrimary: "Discuss Your Requirements",
    homeSecondary: "Explore Product Categories",
    trustLine: "B2B sourcing & trade coordination · Global markets · Specifications confirmed per project",
    sectionProducts: "Product & Ingredient Categories",
    sectionProductsLead: "The categories below are indicative sourcing areas, not a claim of current inventory, certification or fixed specifications. Share your target ingredient, application and quality requirements for a feasibility review.",
    sectionWhy: "Practical Support for B2B Buyers",
    sectionWhyLead: "As a trading and supply-chain partner, we focus on requirement clarification, supplier document review, sample and specification coordination, and order communication.",
    sectionIndustries: "Markets We Aim to Support",
    sectionProcess: "From Inquiry to Delivery",
    sectionProcessLead: "Source availability, technical documents, test parameters, lead time and trade terms are confirmed for each project before quotation and order placement.",
    contactTitle: "Tell Us About Your Sourcing Requirements",
    contactLead: "Please share the target ingredient, application, specification, estimated quantity and destination market so we can review the sourcing options.",
    footerNote: "This website is for B2B business communication. Availability, specifications, quality documents, regulatory suitability and delivery terms are subject to supplier documentation and written confirmation for each project.",
  }
} as const;

const productCards = {
  zh: [
    ["liposomal", "脂质体相关原料", "与脂质体体系相关的磷脂、脂质及配套原材料需求沟通。具体组成、等级、来源与规格按项目确认。", "磷脂 / 脂质体系 / 辅料"],
    ["extracts", "植物与功能性提取物", "围绕植物来源提取物及功能性原料，沟通来源、提取比例、标志性成分与检测要求。", "植物提取物 / 活性成分"],
    ["custom", "定制化原料寻源", "针对指定成分、目标市场、包装和采购数量，开展供应商寻源与商务协调。", "定制规格 / 样品 / 批量采购"],
  ],
  en: [
    ["liposomal", "Liposomal-Related Ingredients", "Sourcing discussions for phospholipids, lipid materials and supporting ingredients used in liposomal systems. Composition, grade, origin and specifications are confirmed per project.", "Phospholipids / Lipid systems / Excipients"],
    ["extracts", "Botanical & Functional Extracts", "Sourcing discussions for botanical extracts and functional ingredients, including origin, extract ratio, marker compounds and testing requirements.", "Botanical extracts / Actives"],
    ["custom", "Custom Ingredient Sourcing", "Supplier sourcing and commercial coordination based on target ingredients, destination markets, packaging and purchasing volume.", "Custom specs / Samples / Bulk sourcing"],
  ]
} as const;

const commonPages = {
  products: {
    zh: { title: "产品与原料", intro: "以采购需求为起点，逐项确认成分身份、规格、来源、应用和文件要求。", blocks: [
      ["脂质体相关原料", "可围绕磷脂、脂质材料及相关辅料开展寻源沟通。具体品名、等级、组成、纯度、检测方法和供应状态需逐项核验。"],
      ["植物与功能性提取物", "可根据植物来源、提取部位、提取溶剂、提取比例、标志性成分及目标应用筛选供应选项。"],
      ["其他功能性原材料", "如您已有明确的 INCI、CAS、植物拉丁名、规格书或目标样品，可提交资料以便开展定向寻源。"]
    ]},
    en: { title: "Products & Ingredients", intro: "We start with your purchasing requirements and clarify ingredient identity, specifications, origin, application and documentation item by item.", blocks: [
      ["Liposomal-Related Ingredients", "We can discuss sourcing phospholipids, lipid materials and supporting ingredients. Product identity, grade, composition, purity, test methods and availability must be verified individually."],
      ["Botanical & Functional Extracts", "Options can be screened according to botanical source, plant part, extraction solvent, extract ratio, marker compounds and intended application."],
      ["Other Functional Raw Materials", "If you have an INCI name, CAS number, botanical Latin name, specification sheet or target sample, share it for focused sourcing."]
    ]}
  },
  "custom-sourcing": {
    zh: { title: "定制寻源与采购协作", intro: "适用于已有明确原料目标、规格要求或供应链开发任务的企业采购项目。", blocks: [
      ["需求定义", "确认目标成分、用途、目标市场、应用法规背景、质量指标、包装、预计数量与采购周期。"],
      ["供应商资料初审", "根据项目要求收集并核对可获得的企业资料、产品规格、检验文件及相关声明；资料范围以供应商实际提供为准。"],
      ["样品与规格确认", "协调样品、测试反馈、规格偏差和包装要求。样品结果及商业规格应由买卖双方书面确认。"],
      ["报价与订单协调", "在供应可行性确认后沟通价格、贸易术语、付款方式、交期、运输和订单文件。"]
    ]}
  },
  industries: {
    zh: { title: "应用领域", intro: "根据客户产品定位与目的市场，开展原料供应信息和采购条件沟通。", blocks: [
      ["化妆品与个人护理", "关注 INCI 身份、原料规格、配方兼容性、目标市场化妆品法规及供应商支持文件。"],
      ["营养与健康产品", "关注原料身份、食品或膳食补充剂适用性、目标市场要求、污染物及微生物等检测项目。"],
      ["制药与生物医药研发", "如涉及药用或临床相关用途，必须单独确认法规路径、质量体系、生产资质和完整文件要求；不应仅凭普通原料资料判断适用性。"],
      ["科研与实验室", "可沟通小样需求、研究级规格、包装和分析资料。科研用途不代表可直接用于人体或商业产品。"]
    ]}
  },
  quality: {
    zh: { title: "质量、文件与合规沟通", intro: "贸易合作中的质量管理，首先是明确标准、核验文件并保留批次与订单沟通记录。", blocks: [
      ["按项目确认文件", "可向供应商询问 COA、TDS、SDS、产品规格、原产地及其他适用文件。文件是否可提供、版本和适用批次均需逐项确认。"],
      ["检测与验收标准", "在报价或下单前确认检测项目、方法、限度、取样方式、复检安排及不合格处理方式。"],
      ["法规与市场适配", "不同国家和用途对原料身份、标签、声明、注册或备案要求不同。客户应与当地法规顾问确认最终用途的合规性。"],
      ["供应链透明度", "可根据项目需求沟通生产商信息、原产地、批次追溯和运输条件；不对未经核实的认证或生产能力作承诺。"]
    ]}
  },
  about: {
    zh: { title: "关于我们", intro: "我们定位为面向全球企业客户的原料贸易与供应链协作伙伴。", blocks: [
      ["贸易与寻源定位", "围绕脂质体相关原料、植物提取物及功能性原材料，协助客户整理需求、匹配供应选项并推进商务沟通。"],
      ["以需求为中心", "我们重视规格澄清、样品协调、文件收集、订单跟进和跨境沟通，帮助买卖双方减少信息差。"],
      ["审慎表达承诺", "我们不将贸易服务描述为自有工厂生产或自有研发能力。具体供应商、产地、认证、检测能力和交付条件以核实后的文件为准。"]
    ]}
  },
  factory: {
    zh: { title: "供应链与交付协作", intro: "作为贸易公司，我们通过供应商沟通和订单协调支持采购项目，而非宣称自有生产工厂。", blocks: [
      ["供应商匹配", "依据产品身份、规格、应用和目的市场筛选潜在供应来源。"],
      ["订单跟进", "协调样品、包装、批次文件、交期和运输信息，并跟进双方确认事项。"],
      ["交付前确认", "在发货前核对订单规格、标签、包装、文件和运输安排；实际流程依具体供应商和合同执行。"]
    ]}
  },
  certifications: {
    zh: { title: "认证与质量文件说明", intro: "认证与体系声明必须有可核验的主体、范围、有效期和适用产品，不以行业常见做法代替事实。", blocks: [
      ["供应商证书", "如项目要求 ISO、GMP、HACCP、有机或其他认证，应核对证书持有人、认证范围、签发机构和有效期。"],
      ["产品文件", "COA、TDS、SDS 等文件应与具体产品、规格和批次对应。不能将单一供应商或单一产品文件泛化为全站承诺。"],
      ["索取文件", "请在询盘中列明目标市场、用途和所需文件，我们将确认供应商是否能够提供。"]
    ]}
  },
  cases: {
    zh: { title: "项目协作方式", intro: "在未取得客户授权和可公开证明材料前，我们不展示虚构客户名称、项目成果或采购数据。", blocks: [
      ["指定成分寻源", "客户提供成分名称、目标规格和采购量，我们协助沟通供应选项与文件可得性。"],
      ["样品评估协调", "根据客户测试计划协调样品与供应商反馈，记录规格差异和后续要求。"],
      ["长期采购协作", "对重复采购项目，协助建立规格版本、批次文件、交期和订单沟通记录。"]
    ]}
  },
  resources: {
    zh: { title: "采购指南与资源", intro: "准备充分的采购信息有助于缩短寻源周期，也能减少规格误解。", blocks: [
      ["建议提供的原料信息", "产品名称、INCI/CAS/植物拉丁名、目标规格、关键成分、检测方法、应用场景和目的市场。"],
      ["建议提供的商务信息", "样品或批量需求、预计年用量、包装要求、交付地点、目标交期和贸易条款偏好。"],
      ["建议提前确认的问题", "原料是否适用于目标用途、所需证书是否覆盖该产品、检测标准是否一致、标签和进口要求由谁负责。"]
    ]}
  },
  contact: {
    zh: { title: "联系我们", intro: "提交产品、规格、数量和目的市场信息，我们将据此开展商务沟通。", blocks: [
      ["邮箱", "请将下方配置项中的 sales@example.com 替换为企业正式商务邮箱。"],
      ["询盘建议", "如有规格书、COA 样本或目标产品链接，可在后续邮件中补充。"],
      ["隐私提示", "请勿在网站表单中提交配方机密、个人敏感信息或未经授权的第三方资料。"]
    ]}
  },
  privacy: {
    zh: { title: "隐私政策", intro: "本页面为上线前的基础模板，正式运营前应结合实际数据处理流程和适用法律进行审阅。", blocks: [
      ["收集的信息", "询盘表单可能收集姓名、公司、工作邮箱、电话、采购需求和留言内容。"],
      ["使用目的", "信息仅用于回复业务咨询、评估采购需求和开展必要的商务沟通。"],
      ["保存与共享", "应由网站运营方明确保存期限、访问权限、服务商及跨境传输安排；未完成评估前不要发布为最终法律声明。"],
      ["联系与权利", "请在正式上线前补充企业法定名称、隐私联系邮箱、适用法律及用户行使权利的方式。"]
    ]}
  },
  terms: {
    zh: { title: "法律声明与使用条款", intro: "网站信息仅供一般 B2B 商务沟通，不构成产品质量、法规适用性或供货能力保证。", blocks: [
      ["产品信息", "产品类别和描述用于说明寻源方向，具体产品身份、参数、价格、库存和交期以正式报价、规格文件及合同为准。"],
      ["法规责任", "买方应确认原料在其目的市场和最终用途下的进口、注册、标签、广告和使用要求。"],
      ["知识产权", "未经许可不得复制网站内容、商标、图片或文件。"],
      ["责任限制", "正式交易权利义务以双方签署的合同及适用法律为准。请在上线前由法律顾问审阅本条款。"]
    ]}
  }
} as const;

export const products = productCards;
export const pages = commonPages;
export const pageSlugs = Object.keys(commonPages);
export const industries = {
  zh: [["化妆品与个人护理", "COSMETICS & PERSONAL CARE"], ["营养与健康", "NUTRITION & WELLNESS"], ["制药与生物医药研发", "PHARMA & BIOTECH"], ["科研与实验室", "RESEARCH & LABS"]],
  en: [["Cosmetics & Personal Care", "COSMETICS & PERSONAL CARE"], ["Nutrition & Wellness", "NUTRITION & WELLNESS"], ["Pharma & Biotech R&D", "PHARMA & BIOTECH"], ["Research & Laboratories", "RESEARCH & LABS"]]
} as const;
export const processSteps = {
  zh: [["01", "需求沟通", "确认成分、用途、规格、数量与目的市场"], ["02", "供应评估", "核实供应选项、文件可得性与商务条件"], ["03", "样品确认", "协调样品、测试反馈与规格确认"], ["04", "订单交付", "确认合同、批次文件、交期与运输"]],
  en: [["01", "Requirement Review", "Confirm ingredient, use, specifications, volume and market"], ["02", "Sourcing Review", "Check supply options, document availability and commercial terms"], ["03", "Sample Approval", "Coordinate samples, testing feedback and specifications"], ["04", "Order & Delivery", "Confirm contract, batch documents, lead time and logistics"]]
} as const;
