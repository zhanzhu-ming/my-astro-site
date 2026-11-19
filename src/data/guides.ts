/**
 * 采购知识中心（中文）。
 *
 * 说明：
 * - 这些文章面向 B2B 原料采购人员，提供可执行的确认清单，不替代供应商文件、
 *   法规意见或第三方检测。
 * - 文中不写入 Sheerherb 未经核实的含量、纯度、MOQ、库存、认证或供货承诺。
 * - 每篇文章都配置目标关键词、搜索意图、内链和询盘入口，供 seo-keywords.json 审计。
 */

export type GuideBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "table"; caption?: string; head: string[]; rows: string[][] }
  | { type: "note"; title: string; text: string }
  | { type: "links"; title: string; items: GuideLink[] };

export type GuideLink = { label: string; href: string; note?: string };

export type GuideCategory = "spec" | "quality" | "supplier" | "liposomal";

export type Guide = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  category: GuideCategory;
  targetKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  published: string;
  updated: string;
  readingMinutes: number;
  summary: string[];
  blocks: GuideBlock[];
  faq: { q: string; a: string }[];
  related: GuideLink[];
  relatedGuides: string[];
};

export const guideCategories: Record<
  GuideCategory,
  { label: string; description: string; short: string }
> = {
  spec: {
    label: "规格与采购准备",
    short: "SPECIFICATION",
    description: "把需求写成可报价、可验收的规格，减少来回确认。",
  },
  quality: {
    label: "质量文件与检测",
    short: "QUALITY",
    description: "读懂 COA、TDS、SDS，核对批次、方法与限度。",
  },
  supplier: {
    label: "供应商评估与寻源",
    short: "SOURCING",
    description: "评估供应来源、样品、文件与商务条件。",
  },
  liposomal: {
    label: "脂质体原料",
    short: "LIPOSOMAL",
    description: "理解包封率、粒径、分散性与应用匹配。",
  },
};

const href = (slug: string) => `/zh/resources/${slug}/`;

const p = (text: string): GuideBlock => ({ type: "p", text });
const h2 = (text: string): GuideBlock => ({ type: "h2", text });
const ul = (items: string[]): GuideBlock => ({ type: "ul", items });
const table = (head: string[], rows: string[][], caption?: string): GuideBlock => ({
  type: "table",
  head,
  rows,
  caption,
});
const note = (title: string, text: string): GuideBlock => ({ type: "note", title, text });
const links = (title: string, items: GuideLink[]): GuideBlock => ({ type: "links", title, items });

export const guides: Guide[] = [
  {
    slug: "botanical-extract-purchasing-parameters",
    title: "植物提取物采购需要确认哪些参数？",
    seoTitle: "植物提取物采购需要确认哪些参数？",
    description:
      "从原料身份、标志性成分、检测方法到质量文件与商务条件，整理植物提取物采购前应确认的参数清单，减少询价中的规格误解。",
    category: "spec",
    targetKeyword: "植物提取物采购",
    secondaryKeywords: ["植物提取物供应商", "植物提取物规格", "植物提取物检测方法"],
    searchIntent: "采购人员准备植物提取物询价，希望知道应提供和核对哪些参数",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 8,
    summary: [
      "先确认植物身份，再谈含量和价格。",
      "提取比例、标志性成分和检测方法要同时写清楚。",
      "质量指标、文件与商务条件应在报价前对齐。",
    ],
    blocks: [
      p(
        "同样是“××提取物”，不同供应商可能使用不同植物部位、提取溶剂和检测方法。采购参数写得越具体，报价越可比，后续争议越少。",
      ),
      h2("1. 原料身份：先回答“是什么”"),
      p(
        "至少确认中文名、拉丁学名、使用部位（根、茎、叶、果或全草）、提取溶剂和提取比例。仅凭商品名或俗名下单，容易出现同物异名、以次充好或掺假风险。",
      ),
      ul([
        "中文名与拉丁学名",
        "使用部位",
        "提取溶剂（水、乙醇、水醇等）",
        "提取比例或标准化指标",
        "是否经过复配、载体处理或造粒",
      ]),
      note(
        "同名不同物",
        "不同科属植物可能共用俗名。采购文件应同时写拉丁学名，必要时要求供应商提供植物来源说明和鉴别依据。",
      ),
      h2("2. 标志性成分与规格表达"),
      p(
        "标准化提取物通常以某个标志性成分或提取比例控制批次一致性。常见表达包括“提取比例 10:1”“标准化至某成分含量”或两者并用。提取比例不等于有效成分含量，不能互相替代。",
      ),
      table(
        ["规格字段", "要确认的内容", "常见误区"],
        [
          ["标志性成分", "成分名称、目标含量、检测方法", "只写“含××”，没有含量和方法"],
          ["提取比例", "原料与提取物的投料比", "把 10:1 当成 10% 含量"],
          ["检测方法", "HPLC、UV、滴定等及关键条件", "不同方法的结果直接比较"],
          ["批次范围", "含量的允许区间", "只写典型值，没有上下限"],
        ],
        "植物提取物规格表达示例",
      ),
      h2("3. 质量与安全指标"),
      p(
        "除标志性成分外，还应确认水分、灰分、重金属、农药残留、溶剂残留、微生物等项目的限度和检测方法。指标是否适用取决于原料类型、工艺和目的市场，不能照搬其他产品的标准。",
      ),
      h2("4. 应用与法规匹配"),
      p(
        "说明应用方向（膳食补充剂、食品饮料、化妆品或科研）、剂型、溶解性或分散性要求，以及目的市场。不同市场对原料身份、标签、污染物限量和准入要求不同，最终合规责任由采购方及其法规顾问确认。",
      ),
      h2("5. 文件与商务条件"),
      p(
        "在报价前确认可提供的 COA、TDS、SDS、样品、包装规格、MOQ、交期和贸易条款。COA 应能对应具体批次，TDS 应说明技术指标，SDS 用于安全与操作信息，三者不能互相替代。",
      ),
      links("继续核对质量文件", [
        { label: "植物提取物分类页", href: "/zh/products/botanical-extracts/", note: "按植物来源和采购重点了解分类" },
        { label: "如何阅读植物提取物 COA？", href: href("how-to-read-botanical-extract-coa"), note: "批次、方法与限度逐项核对" },
        { label: "如何确定原料采购规格？", href: href("how-to-define-ingredient-purchasing-specification"), note: "把参数写成可验收的规格书" },
        { label: "提交采购需求", href: "/zh/contact/", note: "按成分、规格和数量获取供应选项" },
      ]),
      h2("6. 一份可直接使用的询价清单"),
      ul([
        "产品名称、拉丁学名、使用部位",
        "目标标志性成分及含量",
        "检测方法与规格限度",
        "提取比例或工艺说明",
        "应用方向与目的市场",
        "样品、数量、包装和交期",
        "需要的质量文件",
      ]),
      p(
        "把上述信息整理成一页需求包，通常比反复来回确认更快。Sheerherb 会按项目核对可获得的规格与文件，不对未经确认的指标作承诺。",
      ),
    ],
    faq: [
      {
        q: "提取比例越高越好吗？",
        a: "不是。提取比例描述投料关系，不代表活性成分含量或产品效果。应结合标志性成分、检测方法和应用需求判断。",
      },
      {
        q: "没有拉丁学名能报价吗？",
        a: "可以初步沟通，但正式报价和规格确认应补充植物身份信息，避免同名不同物导致错采。",
      },
      {
        q: "供应商只提供 COA 可以吗？",
        a: "取决于项目。COA 证明批次检测结果，TDS 说明技术参数，SDS 说明安全信息。采购方应根据用途和目的市场确认所需文件。",
      },
    ],
    related: [
      { label: "植物提取物分类", href: "/zh/products/botanical-extracts/" },
      { label: "质量与文件", href: "/zh/quality/" },
      { label: "提交采购需求", href: "/zh/contact/?interest=植物提取物&type=guide" },
    ],
    relatedGuides: ["how-to-read-botanical-extract-coa", "what-is-standardized-botanical-extract"],
  },

  {
    slug: "how-to-read-botanical-extract-coa",
    title: "如何阅读植物提取物 COA？",
    seoTitle: "如何阅读植物提取物 COA？",
    description:
      "从产品名称、批号、检测项目、方法、结果和结论逐项核对植物提取物 COA，识别通用报告、批次不符和方法缺失等常见问题。",
    category: "quality",
    targetKeyword: "植物提取物 COA",
    secondaryKeywords: ["原料COA", "COA怎么看", "批次检测报告"],
    searchIntent: "采购或 QA 收到供应商 COA，需要判断文件是否可用于批次验收",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 7,
    summary: [
      "COA 是批次文件，不是产品宣传页。",
      "先核对“这份报告属于谁”，再核对项目和结果。",
      "方法、限度和结论要能互相对应。",
    ],
    blocks: [
      p(
        "COA（Certificate of Analysis，分析证书）记录某一批次产品的检测项目、方法、结果和判定。它回答的是“这一批产品检了什么、结果如何”，而不是“这个产品一定适合你的用途”。",
      ),
      h2("1. 先核对报告与产品的对应关系"),
      ul([
        "产品名称、INCI/CAS 或内部料号",
        "批号（Lot / Batch No.）",
        "生产日期、检测日期、有效期",
        "出具单位与地址",
        "与订单、标签、包装上的批号是否一致",
      ]),
      note(
        "通用 COA 的风险",
        "复印件、扫描件和“通用 COA”的风险在于无法确认批次对应关系。采购时应保留原始文件，并核对批号。",
      ),
      h2("2. 再看检测项目是否覆盖你的要求"),
      p(
        "常见项目包括性状、鉴别、标志性成分含量、水分、灰分、重金属、农药残留、溶剂残留、微生物等。项目是否充分取决于原料类型、工艺和目的市场，不能只看“项目很多”。",
      ),
      table(
        ["COA 字段", "核对重点"],
        [
          ["检测项目", "是否覆盖合同或规格书要求的项目"],
          ["检测方法", "是否写明方法来源，如 HPLC、UV、滴定或药典方法"],
          ["规格限度", "是否有明确上下限或“不得过”要求"],
          ["检测结果", "实测值是否在限度内"],
          ["结论", "是否逐项判定，而不是只写“合格”"],
        ],
        "COA 逐项核对表",
      ),
      h2("3. 方法不同，结果不能直接比较"),
      p(
        "同一标志性成分用 HPLC 与 UV 测定，结果可能不同；不同色谱条件、标准品和计算方法也会影响含量。比较供应商时，应确认检测方法和规格口径一致。",
      ),
      h2("4. 关注“未检出”和“符合”的边界"),
      p(
        "“未检出”应说明检出限；“符合”应说明依据的规格版本。没有方法和限度的结论无法复核。对于重金属、农残、溶剂残留等安全指标，还应确认限值是否适用于目的市场。",
      ),
      h2("5. 把 COA 放回采购文件体系"),
      p(
        "COA 应与 TDS、SDS、规格书和订单批次对应管理。建议为每个批次建立文件包，记录到货批号、检测结果和留样信息，便于后续追溯和客户审核。",
      ),
      links("相关质量文件", [
        { label: "质量与文件", href: "/zh/quality/", note: "了解文件核验与批次管理" },
        { label: "COA、TDS 和 SDS 有什么区别？", href: href("coa-tds-sds-differences"), note: "区分三类文件的用途" },
        { label: "植物提取物分类", href: "/zh/products/botanical-extracts/", note: "查看植物提取物采购重点" },
        { label: "提交文件要求", href: "/zh/contact/?interest=质量文件&type=guide", note: "说明目的市场与所需文件" },
      ]),
      h2("6. 常见问题与处理"),
      ul([
        "报告批号与实物不一致：要求重新出具或书面说明",
        "检测项目缺失：确认是否可补检或提供第三方报告",
        "方法未写明：要求提供方法来源和关键条件",
        "结果刚好压线：评估方法误差和复检安排",
        "文件无出具方：核对报告来源和授权",
      ]),
      p(
        "如果收到的 COA 无法对应批次，先不要把它当作验收依据。把疑问写成清单发给供应商，比在到货后争论更有效。",
      ),
    ],
    faq: [
      {
        q: "COA 和检测报告是一回事吗？",
        a: "COA 通常汇总批次检测结果并作出判定；第三方检测报告由检测机构出具。两者可以互相支持，但用途和出具方不同。",
      },
      {
        q: "COA 会随批次变化吗？",
        a: "会。COA 对应具体批次，不同批次的实测值可能不同，但应在规格限度内。",
      },
      {
        q: "供应商只给 COA 首页可以吗？",
        a: "应确认是否包含检测项目、方法、结果和结论。只有首页通常不足以支持验收。",
      },
    ],
    related: [
      { label: "质量与文件", href: "/zh/quality/" },
      { label: "植物提取物分类", href: "/zh/products/botanical-extracts/" },
    ],
    relatedGuides: ["coa-tds-sds-differences", "botanical-extract-purchasing-parameters"],
  },

  {
    slug: "coa-tds-sds-differences",
    title: "COA、TDS 和 SDS 有什么区别？",
    seoTitle: "COA、TDS 和 SDS 有什么区别？",
    description:
      "用一张表说明 COA、TDS、SDS 各自回答什么问题、对应批次还是产品、采购时如何使用，以及为什么 SDS 不能代替 COA。",
    category: "quality",
    targetKeyword: "原料质量文件",
    secondaryKeywords: ["COA TDS SDS 区别", "原料TDS", "原料SDS"],
    searchIntent: "采购人员需要区分三类原料质量文件，判断在不同阶段应索取哪一份",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 6,
    summary: [
      "COA 看批次检测结果。",
      "TDS 看产品技术参数。",
      "SDS 看安全、储存和操作信息，不能代替 COA。",
    ],
    blocks: [
      p(
        "在原料采购中，COA、TDS 和 SDS 是三类常见的原料质量文件，但它们回答的是不同问题。把三者混为一谈，容易在验收、配方和合规环节出现缺口。",
      ),
      table(
        ["文件", "回答的问题", "对应对象", "典型内容", "采购用途"],
        [
          ["COA", "这一批检了什么、结果如何", "具体批次", "检测项目、方法、结果、判定", "批次验收、文件归档"],
          ["TDS", "这个产品的技术参数是什么", "产品/规格", "指标、理化性质、外观、溶解性、应用信息", "规格比对、配方评估"],
          ["SDS", "如何安全使用、储存和运输", "产品/配方", "危险性、防护、储存、运输、急救", "安全操作、运输沟通"],
        ],
        "COA、TDS、SDS 对比",
      ),
      h2("1. COA：批次符合性的证据"),
      p(
        "COA 的核心是“批次对应”。没有批号的 COA 很难作为验收依据。采购时应核对产品名称、批号、检测日期、方法、结果和结论。",
      ),
      h2("2. TDS：产品技术画像"),
      p(
        "TDS（Technical Data Sheet）描述产品的一般技术参数和典型值，帮助判断是否满足配方和工艺要求。TDS 中的典型值不等于每批实测值，验收仍应看 COA 和合同规格。",
      ),
      h2("3. SDS：安全信息，不是质量证明"),
      p(
        "SDS（Safety Data Sheet）说明危害识别、成分信息、急救、消防、泄漏处理、储存和运输等安全信息。它不能证明产品纯度、含量或批次合格，也不能代替 COA。",
      ),
      note(
        "常见误区",
        "用 SDS 中的成分含量推断产品规格。SDS 的成分披露规则和用途与 COA 不同，不能作为含量验收依据。",
      ),
      h2("4. 采购时如何组合使用"),
      ul([
        "询价阶段：用 TDS 判断规格是否匹配",
        "样品阶段：用 COA 核对样品批次",
        "订单阶段：在合同中写明验收项目和文件要求",
        "到货阶段：核对批号、COA 和实物",
        "安全与物流：确认 SDS 版本和语言",
      ]),
      h2("5. 文件版本与语言"),
      p(
        "确认文件版本号、日期和语言是否与目的市场匹配。出口或跨区域运输时，SDS 可能需要当地语言版本；COA 的检测方法也可能需要与客户验收标准一致。",
      ),
      links("下载不到文件时", [
        { label: "质量与文件", href: "/zh/quality/", note: "文件用途与核验流程" },
        { label: "如何阅读植物提取物 COA？", href: href("how-to-read-botanical-extract-coa"), note: "逐项核对批次报告" },
        { label: "如何确定原料采购规格？", href: href("how-to-define-ingredient-purchasing-specification"), note: "把文件要求写进规格书" },
        { label: "提交文件要求", href: "/zh/contact/?interest=COA%2FTDS%2FSDS&type=guide", note: "说明目的市场与文件清单" },
      ]),
    ],
    faq: [
      {
        q: "有 SDS 是否说明产品安全？",
        a: "SDS 提供危害和安全处理信息，不等于产品在所有用途下都安全，也不证明质量合格。",
      },
      {
        q: "TDS 可以作为验收标准吗？",
        a: "TDS 是技术参考，验收应以合同规格和批次 COA 为准。",
      },
      {
        q: "三个文件都需要吗？",
        a: "取决于产品、用途、运输方式和客户要求。正规采购通常至少需要 COA 和 TDS，涉及安全与运输时还需要 SDS。",
      },
    ],
    related: [
      { label: "质量与文件", href: "/zh/quality/" },
      { label: "联系质量沟通", href: "/zh/contact/?interest=质量文件&type=guide" },
    ],
    relatedGuides: ["how-to-read-botanical-extract-coa", "how-to-define-ingredient-purchasing-specification"],
  },

  {
    slug: "what-is-standardized-botanical-extract",
    title: "植物提取物标准化是什么意思？",
    seoTitle: "植物提取物标准化是什么意思？",
    description:
      "解释标准化植物提取物的常见表达、提取比例与标志性成分的区别，以及采购时如何确认规格、检测方法和批次一致性。",
    category: "spec",
    targetKeyword: "标准化植物提取物",
    secondaryKeywords: ["植物提取物提取比例", "植物提取物标准化", "标志性成分"],
    searchIntent: "采购人员看到“标准化”“10:1”等表述，需要理解其实际含义",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 7,
    summary: [
      "标准化是用可控指标减少批次差异。",
      "提取比例和成分含量是两回事。",
      "标准化不等于纯度，也不等于功效保证。",
    ],
    blocks: [
      p(
        "“标准化提取物”是采购中常见但容易被误读的说法。它通常指通过原料筛选、提取工艺和检测控制，使某个指标落在约定范围内，从而减少批次差异。",
      ),
      h2("1. 标准化的常见方式"),
      ul([
        "以标志性成分含量标准化，设定最低含量或含量范围",
        "以提取比例标准化，例如 10:1",
        "两者结合，并规定检测方法",
        "以理化指标控制，如外观、溶解度、水分",
      ]),
      h2("2. 提取比例不等于含量"),
      p(
        "10:1 表示投料与提取物的比例关系，不表示产品含 10% 的某个成分。提取比例会受原料含量、溶剂、工艺和浓缩程度影响。采购时应同时确认比例的定义和标志性成分的实测含量。",
      ),
      table(
        ["表达", "含义", "采购要确认"],
        [
          ["10:1", "原料与提取物的投料比", "比例计算方式、原料部位、溶剂"],
          ["标准化至 95%", "某标志性成分的含量目标", "成分名称、检测方法、限度"],
          ["比例 + 含量", "同时控制投料关系和成分", "两项指标是否都写入规格"],
        ],
        "常见标准化表达",
      ),
      h2("3. 标准化不等于纯度"),
      p(
        "提取物通常是多成分混合物。标准化只保证某个或某几个指标受控，不代表其余成分被去除，也不代表产品是“纯品”。如果采购目标是高纯单体，应使用纯度、有关物质和残留溶剂等指标，而不是提取比例。",
      ),
      h2("4. 批次一致性怎么看"),
      p(
        "查看连续批次的 COA，关注实测值分布、检测方法是否一致、规格限度是否合理。只有一批数据无法判断一致性。必要时要求留样和复检。",
      ),
      h2("5. 采购时的确认清单"),
      ul([
        "标志性成分名称与含量范围",
        "检测方法与标准品",
        "提取比例的定义",
        "使用部位与提取溶剂",
        "连续批次的 COA",
        "重金属、农残、微生物等安全指标",
        "应用方向与目的市场",
      ]),
      links("相关阅读", [
        { label: "植物提取物分类", href: "/zh/products/botanical-extracts/", note: "按来源和规格了解采购重点" },
        { label: "植物提取物采购参数", href: href("botanical-extract-purchasing-parameters"), note: "完整询价清单" },
        { label: "如何阅读植物提取物 COA？", href: href("how-to-read-botanical-extract-coa"), note: "判断批次一致性" },
        { label: "提交采购需求", href: "/zh/contact/?interest=植物提取物&type=guide", note: "说明目标比例或成分" },
      ]),
    ],
    faq: [
      {
        q: "标准化提取物比普通提取物好吗？",
        a: "不一定。关键看标准化指标是否与你的应用和验收要求匹配。",
      },
      {
        q: "提取比例越高，效果越好吗？",
        a: "提取比例只描述投料关系，不能推断含量或效果。",
      },
      {
        q: "标准化成分越高越好吗？",
        a: "取决于用途和规格设计。过高可能带来成本、溶解度或安全性问题，应结合应用评估。",
      },
    ],
    related: [
      { label: "植物提取物分类", href: "/zh/products/botanical-extracts/" },
      { label: "植物提取物采购参数", href: href("botanical-extract-purchasing-parameters") },
    ],
    relatedGuides: ["botanical-extract-purchasing-parameters", "how-to-read-botanical-extract-coa"],
  },

  {
    slug: "liposomal-ingredient-purchasing-parameters",
    title: "脂质体原料采购需要关注哪些指标？",
    seoTitle: "脂质体原料采购需要关注哪些指标？",
    description:
      "从原料身份、活性物含量、包封率、粒径分布、Zeta 电位、检测方法和应用匹配，整理脂质体原料采购的技术确认清单。",
    category: "liposomal",
    targetKeyword: "脂质体原料采购",
    secondaryKeywords: ["脂质体原料", "脂质体维生素C原料", "包封率", "粒径分布"],
    searchIntent: "采购或研发人员准备脂质体原料询价，需要知道技术指标和检测方法",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 9,
    summary: [
      "先确认“脂质体原料”具体指什么。",
      "包封率、粒径和检测方法要一起看。",
      "技术指标必须与应用体系匹配。",
    ],
    blocks: [
      p(
        "“脂质体原料”可能指磷脂等脂质材料、负载活性物的脂质体体系，或经过干燥的脂质体粉末。采购前先确认对象，否则规格和报价没有可比性。",
      ),
      h2("1. 先定义采购对象"),
      table(
        ["类型", "典型形态", "关注重点"],
        [
          ["磷脂/脂质材料", "粉末、液体、膏状", "纯度、脂肪酸组成、等级、来源"],
          ["脂质体分散液", "液体", "活性物含量、包封率、粒径、稳定性"],
          ["脂质体粉末", "粉末", "活性物含量、包封率、复溶/分散性、水分"],
        ],
        "脂质体相关原料的常见类型",
      ),
      h2("2. 活性物含量与包封率"),
      p(
        "活性物含量描述体系中活性成分的总量；包封率描述被脂质体包封的比例。两者检测方法不同，不能用一个指标替代另一个。采购时应确认检测方法、计算方式和批次范围。",
      ),
      h2("3. 粒径分布与 Zeta 电位"),
      p(
        "粒径通常用动态光散射（DLS）测定，应关注平均粒径、分布宽度（PDI）和检测条件。Zeta 电位与体系稳定性相关，但受 pH、离子强度和介质影响，比较时应保持条件一致。",
      ),
      h2("4. 外观、分散性与水分"),
      p(
        "观察颜色、均匀性、是否分层或沉淀；粉末产品还应确认复溶或分散方法、水分和吸湿性。这些指标直接影响配料和工艺。",
      ),
      h2("5. 安全与残留指标"),
      ul([
        "重金属",
        "微生物",
        "残留溶剂（如工艺使用）",
        "磷脂来源与过敏原信息",
        "防腐剂或抗氧化剂",
        "SDS 与储存条件",
      ]),
      h2("6. 应用匹配与商务条件"),
      p(
        "确认活性物与配方体系的相容性、pH 范围、加工温度、货架期和包装形式。样品阶段应模拟实际工艺，而不是只看证书。MOQ、交期和批次稳定性需在项目沟通中确认。",
      ),
      links("相关产品与文件", [
        { label: "脂质体相关原料分类", href: "/zh/products/liposomal-ingredients/", note: "分类范围与规格确认维度" },
        { label: "脂质体维生素 C 粉末", href: "/zh/products/liposomal-vitamin-c/", note: "产品身份、指标与询盘" },
        { label: "质量与文件", href: "/zh/quality/", note: "COA、TDS、SDS 核验" },
        { label: "提交脂质体原料需求", href: "/zh/contact/?interest=脂质体原料&type=guide", note: "说明含量、粒径和应用" },
      ]),
    ],
    faq: [
      {
        q: "包封率越高越好吗？",
        a: "包封率是重要指标，但还需结合活性物含量、粒径、稳定性和应用体系判断，不能单独比较。",
      },
      {
        q: "粒径越小越好吗？",
        a: "不一定。粒径影响稳定性和应用表现，应与目标体系和工艺匹配。",
      },
      {
        q: "脂质体原料有统一标准吗？",
        a: "没有统一的通用标准。不同产品、工艺和应用的质量指标差异很大，应以具体规格书和检测方法为准。",
      },
    ],
    related: [
      { label: "脂质体相关原料", href: "/zh/products/liposomal-ingredients/" },
      { label: "脂质体维生素 C 粉末", href: "/zh/products/liposomal-vitamin-c/" },
    ],
    relatedGuides: ["ingredient-sample-testing-preparation", "how-to-define-ingredient-purchasing-specification"],
  },

  {
    slug: "how-to-evaluate-functional-ingredient-suppliers",
    title: "如何评估功能性原料供应商？",
    seoTitle: "如何评估功能性原料供应商？",
    description:
      "从主体资质、产品文件、批次一致性、样品响应、商务透明度和法规支持六个维度，建立功能性原料供应商的评估清单。",
    category: "supplier",
    targetKeyword: "功能性原料供应商",
    secondaryKeywords: ["原料供应商审核", "供应商评估", "原料供应商资质核验"],
    searchIntent: "采购团队需要筛选或复核功能性原料供应商",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 9,
    summary: [
      "先确认对方是谁、能提供什么文件。",
      "用样品和批次数据验证一致性。",
      "用书面条件约束交付，而不是口头承诺。",
    ],
    blocks: [
      p(
        "评估供应商不是判断“工厂还是贸易商”哪个更好，而是确认对方能否稳定提供符合要求的原料和可核验的文件。",
      ),
      h2("1. 主体与范围"),
      ul([
        "营业执照与经营主体",
        "生产或贸易角色",
        "实际生产地址",
        "经营范围是否覆盖目标产品",
        "联系人与授权",
      ]),
      h2("2. 产品文件"),
      p(
        "索取 TDS、COA、SDS 和规格书，核对产品名称、批次、检测方法和出具方。证书类文件应确认持有人、范围、有效期和产品对应关系。",
      ),
      h2("3. 批次一致性与检测能力"),
      p(
        "要求连续批次的 COA，观察实测值分布和方法一致性。必要时委托第三方检测，或要求提供留样。只有单批“漂亮数据”不足以证明稳定性。",
      ),
      h2("4. 样品与响应"),
      ul([
        "样品是否对应报价批次",
        "是否提供样品 COA",
        "技术问题响应是否具体",
        "能否提供应用或配方建议",
        "异常处理是否有流程",
      ]),
      h2("5. 商务透明度"),
      p(
        "确认 MOQ、包装、交期、付款方式、贸易条款和变更通知机制。价格明显低于市场且文件含糊时，应提高审核等级。",
      ),
      h2("6. 风险信号"),
      ul([
        "拒绝提供批号或检测方法",
        "文件张冠李戴或主体不一致",
        "规格书长期不更新",
        "样品与大货不一致",
        "对法规问题只给口头保证",
        "催促付款但回避审核",
      ]),
      h2("7. 评估记录怎么做"),
      p(
        "建立供应商档案，记录审核日期、文件版本、样品结果、批次表现和沟通结论。评估不是一次性动作，应在换批、换产地或变更工艺时复核。",
      ),
      links("继续评估", [
        { label: "定制寻源服务", href: "/zh/custom-sourcing/", note: "供应商初筛与采购协作" },
        { label: "质量与文件", href: "/zh/quality/", note: "文件核验方法" },
        { label: "原料规格确认", href: href("how-to-define-ingredient-purchasing-specification"), note: "用规格约束供应" },
        { label: "提交供应商评估需求", href: "/zh/contact/?interest=供应商评估&type=guide", note: "说明目标成分与市场" },
      ]),
    ],
    faq: [
      {
        q: "贸易商一定不如工厂吗？",
        a: "不一定。关键是有没有可核验的供应来源、文件和质量控制。贸易商也可能提供更灵活的寻源和沟通。",
      },
      {
        q: "需要实地审核吗？",
        a: "取决于采购金额、风险和客户要求。文件审核和样品验证是基础，高风险项目可考虑现场或第三方审核。",
      },
      {
        q: "供应商有 ISO 证书就够了吗？",
        a: "不够。还要核对证书范围、有效期、持有人和产品对应关系。",
      },
    ],
    related: [
      { label: "定制寻源", href: "/zh/custom-sourcing/" },
      { label: "质量与文件", href: "/zh/quality/" },
    ],
    relatedGuides: ["how-to-run-custom-ingredient-sourcing", "ingredient-sample-testing-preparation"],
  },

  {
    slug: "ingredient-sample-testing-preparation",
    title: "原料样品测试前应该准备什么？",
    seoTitle: "原料样品测试前应该准备什么？",
    description:
      "明确测试目的、样品与批次信息、测试方案、对照和留样，避免原料样品测试出现无法比较或无法追溯的问题。",
    category: "supplier",
    targetKeyword: "原料样品采购",
    secondaryKeywords: ["原料样品测试", "样品评估", "原料留样"],
    searchIntent: "采购或研发准备索取原料样品并安排测试",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 7,
    summary: [
      "先写测试目的和判定标准。",
      "样品、批次文件和测试条件要一起记录。",
      "留样和对照能让结果可复核。",
    ],
    blocks: [
      p(
        "原料样品采购最常见的浪费，不是检测费，而是收到样品后才发现没有判定标准、没有对照，或无法确认样品批次。",
      ),
      h2("1. 先写清楚测试目的"),
      ul([
        "身份确认",
        "规格符合性",
        "配方兼容性",
        "稳定性",
        "外观与感官",
        "工艺适应性",
      ]),
      p("不同目的对应不同测试项目和样品量。先写目的，再决定测什么。"),
      h2("2. 样品信息与文件"),
      p(
        "记录供应商、产品名称、批号、样品日期、包装和储存条件，并索取样品批次的 COA/TDS。没有批次信息的样品，结果很难用于后续大货验收。",
      ),
      h2("3. 测试方案与对照"),
      ul([
        "检测项目与方法",
        "判定标准",
        "对照样或竞品",
        "测试条件（温度、pH、介质）",
        "重复次数",
        "异常处理",
      ]),
      h2("4. 样品量与留样"),
      p(
        "除测试用量外，预留留样和复检量。易吸湿、易氧化或需冷藏的样品，应确认运输和储存条件，避免样品在途中失效。",
      ),
      h2("5. 记录与结论"),
      p(
        "建立样品评估表，记录测试结果、照片、异常和结论。结论应明确“通过、不通过或需补充数据”，而不是只写“看起来可以”。",
      ),
      h2("6. 从样品到大货"),
      p(
        "样品通过不代表大货一定一致。下单时应约定大货批次与样品的对应关系、验收项目和偏差处理方式。",
      ),
      links("样品相关页面", [
        { label: "产品与原料", href: "/zh/products/", note: "查看可沟通的产品方向" },
        { label: "原料采购规格", href: href("how-to-define-ingredient-purchasing-specification"), note: "把测试要求写进规格" },
        { label: "质量与文件", href: "/zh/quality/", note: "核对样品批次文件" },
        { label: "申请样品与报价", href: "/zh/contact/?interest=样品申请&type=guide", note: "说明测试目的和数量" },
      ]),
    ],
    faq: [
      {
        q: "样品免费吗？",
        a: "样品政策和费用由具体项目确认，可能涉及样品费、运费和文件沟通。",
      },
      {
        q: "样品和大货会一致吗？",
        a: "应通过规格书、批次 COA 和验收条款约束。天然原料存在合理批次差异，关键在于是否在约定范围内。",
      },
      {
        q: "测试前需要提供配方吗？",
        a: "不需要提供完整配方。可说明应用体系、pH、工艺条件和目标要求，避免泄露机密。",
      },
    ],
    related: [
      { label: "产品与原料", href: "/zh/products/" },
      { label: "申请样品", href: "/zh/contact/?interest=样品申请&type=guide" },
    ],
    relatedGuides: ["how-to-evaluate-functional-ingredient-suppliers", "liposomal-ingredient-purchasing-parameters"],
  },

  {
    slug: "how-to-define-ingredient-purchasing-specification",
    title: "如何确定原料采购规格？",
    seoTitle: "如何确定原料采购规格？",
    description:
      "从应用需求倒推原料规格，明确指标、检测方法、限度、取样和验收规则，并建立可执行的规格书版本管理。",
    category: "spec",
    targetKeyword: "原料规格确认",
    secondaryKeywords: ["原料采购规格", "规格书", "验收标准"],
    searchIntent: "采购或 QA 需要制定可执行的原料采购规格和验收标准",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 8,
    summary: [
      "规格从应用倒推，不是越严越好。",
      "每个指标都要有方法和限度。",
      "规格书要能用于验收和版本管理。",
    ],
    blocks: [
      p(
        "采购规格的作用，是让供应商和采购方对“什么算合格”有同一份书面理解。规格写得太笼统无法验收，写得太严则可能没有供应选项或成本过高。",
      ),
      h2("1. 从应用倒推"),
      ul([
        "剂型与工艺（温度、pH、剪切）",
        "溶解性或分散性",
        "目标市场法规",
        "外观与颜色",
        "货架期",
        "包装与运输",
      ]),
      h2("2. 规格书的基本字段"),
      table(
        ["字段", "说明"],
        [
          ["产品名称与身份", "中文名、英文名、INCI/CAS、植物学名"],
          ["指标", "含量、纯度、外观、水分、灰分、重金属、微生物等"],
          ["检测方法", "方法来源与关键条件"],
          ["限度", "上下限或“不得过”"],
          ["取样与验收", "取样量、复检规则、判定方式"],
          ["包装与储存", "内包装、外包装、避光、防潮、温控"],
        ],
        "原料规格书字段清单",
      ),
      h2("3. 区分关键指标与参考指标"),
      p(
        "关键指标直接影响应用和安全，应写入验收；参考指标用于描述产品特征，可放在 TDS 中。把所有项目都设为关键指标，会增加检测成本和供应难度。",
      ),
      h2("4. 与供应商规格书对齐"),
      p(
        "将客户规格与供应商 TDS/COA 逐项对照，确认方法一致、限度可满足。若供应商方法不同，应确认结果是否可比，必要时约定第三方方法。",
      ),
      h2("5. 版本管理"),
      p(
        "规格书应有版本号、生效日期和变更记录。换产地、换工艺或换检测方法时，应重新确认规格，并通知相关采购和 QA 人员。",
      ),
      links("规格相关页面", [
        { label: "定制寻源服务", href: "/zh/custom-sourcing/", note: "按规格筛选供应来源" },
        { label: "植物提取物采购参数", href: href("botanical-extract-purchasing-parameters"), note: "常见参数清单" },
        { label: "如何阅读 COA", href: href("how-to-read-botanical-extract-coa"), note: "验证批次符合性" },
        { label: "提交规格确认需求", href: "/zh/contact/?interest=规格确认&type=guide", note: "说明应用与目标市场" },
      ]),
    ],
    faq: [
      {
        q: "规格越严越好吗？",
        a: "不是。规格应与应用和法规要求匹配，过严会缩小供应范围并增加成本。",
      },
      {
        q: "可以只写“符合药典”吗？",
        a: "应明确药典版本、适用 monograph 和具体项目，否则验收口径不清晰。",
      },
      {
        q: "供应商规格书可以直接当采购规格吗？",
        a: "可以作为基础，但应结合自身应用、法规和验收能力补充关键指标与判定规则。",
      },
    ],
    related: [
      { label: "定制寻源", href: "/zh/custom-sourcing/" },
      { label: "质量与文件", href: "/zh/quality/" },
    ],
    relatedGuides: ["botanical-extract-purchasing-parameters", "coa-tds-sds-differences"],
  },

  {
    slug: "ingredient-moq-packaging-lead-time",
    title: "原料 MOQ、包装和交期应该如何确认？",
    seoTitle: "原料 MOQ、包装和交期应该如何确认？",
    description:
      "解释 MOQ 的构成、包装与标签确认点、交期的计算方式，以及询价时应如何提问，避免下单后出现数量和交付争议。",
    category: "spec",
    targetKeyword: "原料 MOQ",
    secondaryKeywords: ["原料采购", "原料包装", "原料交期", "采购条件"],
    searchIntent: "采购人员准备下单或询价，需要确认起订量、包装和交付条件",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 6,
    summary: [
      "MOQ 不只是数量，还与包装规格和生产批量有关。",
      "交期要从确认规格和排产算起。",
      "所有条件写进报价单。",
    ],
    blocks: [
      p(
        "MOQ、包装和交期是原料采购中最容易“以为说清楚了”的部分。把它们写进报价单和合同，比事后解释更有效。",
      ),
      h2("1. MOQ 由什么决定"),
      ul([
        "供应商最小生产批量",
        "包装规格，例如 25kg/桶",
        "原料价值与保质期",
        "定制规格的起订量",
        "样品与试单政策",
      ]),
      p(
        "询价时应问清楚 MOQ 是按净重、毛重还是包装件数计算，是否支持拼箱或混装。",
      ),
      h2("2. 包装确认点"),
      table(
        ["项目", "确认内容"],
        [
          ["内包装", "材质、规格、密封方式、是否避光或防潮"],
          ["外包装", "纸板桶、编织袋或纸箱，堆码与运输要求"],
          ["标签", "产品名、批号、净重、生产日期、储存条件"],
          ["特殊要求", "充氮、干燥剂、温控、危险品标识"],
        ],
        "原料包装确认表",
      ),
      h2("3. 交期怎么算"),
      p(
        "交期通常从“规格确认、订单或预付款、排产”开始计算，包含生产、检测、包装和出运准备。现货、排产和定制规格的交期差异很大，应分别确认。",
      ),
      h2("4. 贸易条款与风险"),
      p(
        "确认 FOB、CIF、EXW 等贸易条款、保险、清关责任和目的港费用。交期承诺应区分“生产完成”和“到达目的地”。",
      ),
      h2("5. 询价时怎么问"),
      ul([
        "MOQ 及计算口径",
        "包装规格与标签要求",
        "样品政策",
        "生产周期与检测时间",
        "运输方式与预计到达时间",
        "变更或取消订单的规则",
      ]),
      links("下一步", [
        { label: "提交采购需求", href: "/zh/contact/?interest=原料采购&type=guide", note: "一次说明数量、包装和市场" },
        { label: "定制寻源", href: "/zh/custom-sourcing/", note: "定制规格的起订量与交期" },
        { label: "原料规格确认", href: href("how-to-define-ingredient-purchasing-specification"), note: "先定规格再谈数量" },
        { label: "产品与原料", href: "/zh/products/", note: "查看产品方向" },
      ]),
    ],
    faq: [
      {
        q: "MOQ 可以降低吗？",
        a: "取决于供应商生产批量和包装规格。定制规格通常更难降低。",
      },
      {
        q: "交期为什么和报价时不一样？",
        a: "可能受排产、检测、原料供应或运输影响。应以书面确认的交期为准，并约定变更通知。",
      },
      {
        q: "包装可以定制吗？",
        a: "可以与供应商沟通，但可能涉及起订量、开模或标签审核，需提前确认。",
      },
    ],
    related: [
      { label: "提交采购需求", href: "/zh/contact/?interest=原料采购&type=guide" },
      { label: "定制寻源", href: "/zh/custom-sourcing/" },
    ],
    relatedGuides: ["how-to-define-ingredient-purchasing-specification", "how-to-run-custom-ingredient-sourcing"],
  },

  {
    slug: "how-to-run-custom-ingredient-sourcing",
    title: "如何进行定制原料寻源？",
    seoTitle: "如何进行定制原料寻源？",
    description:
      "从需求包、供应来源初筛、样品与文件确认到商务条件，说明定制原料寻源的五个步骤和常见失败原因。",
    category: "supplier",
    targetKeyword: "定制原料寻源",
    secondaryKeywords: ["功能性原料寻源", "原料供应商寻源服务", "原料定制采购"],
    searchIntent: "已有明确成分或规格，需要系统化开展供应商寻源",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 9,
    summary: [
      "定制寻源的核心是把需求写成可执行的文件。",
      "先筛供应来源，再谈样品和价格。",
      "每一步都要有书面输出。",
    ],
    blocks: [
      p(
        "定制寻源适用于已有明确成分、规格、数量或目的市场，但市场上信息不透明、供应商难以筛选的项目。它不是“帮忙找货”，而是把需求、供应和文件逐步对齐。",
      ),
      h2("1. 第一步：写需求包"),
      ul([
        "目标成分、INCI 或 CAS",
        "目标规格与检测方法",
        "应用与剂型",
        "数量与包装",
        "目的市场与法规要求",
        "所需文件",
        "时间计划",
      ]),
      h2("2. 第二步：供应来源初筛"),
      p(
        "根据产品身份、工艺、规格和地区筛选潜在来源。初步核对主体、产品范围、文件可得性和沟通响应，不在此阶段承诺价格或库存。",
      ),
      h2("3. 第三步：样品与文件验证"),
      p(
        "索取样品批次 COA/TDS，按测试目的评估。样品通过后，确认大货批次与样品的对应关系和验收规则。",
      ),
      h2("4. 第四步：商务条件"),
      p(
        "确认 MOQ、包装、交期、价格、贸易条款和变更机制。对定制规格，应明确开发周期、模具或标签费用和最小批量。",
      ),
      h2("5. 第五步：订单与复盘"),
      p(
        "下单后跟踪生产、检测、出运和到货，记录批次表现和问题处理。项目结束后复盘供应来源、文件完整性和沟通效率，为下一轮寻源提供依据。",
      ),
      h2("6. 常见失败原因"),
      ul([
        "需求描述含糊，供应商无法报价",
        "只比价格，不看规格和方法",
        "样品与大货不一致",
        "文件无法对应批次",
        "忽略目的市场法规",
        "没有书面变更机制",
      ]),
      links("开始定制寻源", [
        { label: "定制寻源服务", href: "/zh/custom-sourcing/", note: "服务范围与流程" },
        { label: "定制寻源分类页", href: "/zh/products/custom-sourcing/", note: "按原料方向提交需求" },
        { label: "如何评估功能性原料供应商？", href: href("how-to-evaluate-functional-ingredient-suppliers"), note: "建立评估清单" },
        { label: "提交定制寻源需求", href: "/zh/contact/?interest=定制寻源&type=guide", note: "附上需求包与目标市场" },
      ]),
    ],
    faq: [
      {
        q: "定制寻源需要多长时间？",
        a: "取决于需求明确度、供应来源和样品、检测安排，没有固定周期。建议先完成需求包再启动。",
      },
      {
        q: "没有 CAS 或 INCI 可以寻源吗？",
        a: "可以提供产品描述、用途和参考规格，但正式寻源通常需要明确身份信息。",
      },
      {
        q: "定制寻源一定比现货便宜吗？",
        a: "不一定。定制规格可能涉及开发、检测和小批量成本，需综合评估。",
      },
    ],
    related: [
      { label: "定制寻源", href: "/zh/custom-sourcing/" },
      { label: "定制寻源分类页", href: "/zh/products/custom-sourcing/" },
    ],
    relatedGuides: ["how-to-evaluate-functional-ingredient-suppliers", "ingredient-moq-packaging-lead-time"],
  },

  {
    slug: "liposomal-curcumin-purchasing-guide",
    title: "脂质体姜黄素采购要看哪些指标？",
    seoTitle: "脂质体姜黄素采购要看哪些指标？",
    description:
      "从姜黄素含量、包封率、粒径、外观、载体组成到 MOQ 与文件，整理脂质体姜黄素粉末的中文采购确认清单。",
    category: "liposomal",
    targetKeyword: "脂质体姜黄素采购",
    secondaryKeywords: ["脂质体姜黄素", "姜黄素包封率", "脂质体姜黄素粉"],
    searchIntent: "采购或研发准备询价脂质体姜黄素粉末",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 7,
    summary: [
      "先确认姜黄素含量和检测方法。",
      "包封率、粒径和载体组成要一起看。",
      "颜色、流动性和固体饮料适配性影响配方。",
    ],
    blocks: [
      p(
        "脂质体姜黄素不是“姜黄素含量越高越好”的单一问题。姜黄素本身难溶、易氧化，采购时要同时确认载体、包封、粒径、外观和检测方法。",
      ),
      h2("1. 先确认姜黄素身份与含量"),
      ul([
        "姜黄素来源与规格：天然提取或合成，具体以规格书为准",
        "姜黄素含量及检测方法（通常 HPLC）",
        "是否复配其他姜黄素类成分",
        "批次含量范围，而不是单一批次典型值",
      ]),
      h2("2. 包封率、粒径与载体"),
      p(
        "包封率描述被脂质体包封的比例，粒径影响分散性和稳定性。两者都要有检测方法和计算口径。还要确认磷脂种类、来源和载体比例，避免只比较一个“脂质体”名称。",
      ),
      table(
        ["指标", "采购要确认"],
        [
          ["姜黄素含量", "含量口径、HPLC 方法、批次范围"],
          ["包封率", "分离方法、计算方式、批次数据"],
          ["粒径", "DLS 条件、平均粒径、PDI"],
          ["外观", "颜色、流动性、是否结块"],
          ["载体", "磷脂组成、来源、等级"],
        ],
        "脂质体姜黄素采购指标",
      ),
      h2("3. 固体饮料和胶囊的适配性"),
      p(
        "固体饮料关注分散性、颜色、气味和沉淀；胶囊关注流动性、装量差异和吸湿性。样品阶段应模拟实际配料和储存条件，而不是只看 COA。",
      ),
      h2("4. 文件与商务条件"),
      p(
        "确认批次 COA、TDS、SDS、规格书、重金属和微生物报告。MOQ、包装、交期和证书范围按项目确认，不把国际站参考值直接当成国内承诺。",
      ),
      links("相关页面", [
        { label: "脂质体姜黄素粉", href: "/zh/products/liposomal-curcumin-powder/", note: "参考规格与询盘" },
        { label: "脂质体原料采购指标", href: href("liposomal-ingredient-purchasing-parameters"), note: "包封率、粒径与检测" },
        { label: "质量与文件", href: "/zh/quality/", note: "COA/TDS/SDS 核验" },
        { label: "提交采购需求", href: "/zh/contact/?interest=脂质体姜黄素&type=guide", note: "说明含量、应用与数量" },
      ]),
    ],
    faq: [
      {
        q: "姜黄素含量越高越好吗？",
        a: "取决于配方目标和添加量。高含量可能带来颜色、溶解性和成本问题，应结合包封率、粒径和应用评估。",
      },
      {
        q: "包封率可以写进合同吗？",
        a: "可以约定检测方法和最低要求，但需先确认供应商的检测能力、计算口径和批次数据。",
      },
      {
        q: "脂质体姜黄素能用于固体饮料吗？",
        a: "可以作为沟通方向，但是否适用取决于分散性、法规准入、标签和实际配方。采购方应确认目的市场要求。",
      },
    ],
    related: [
      { label: "脂质体姜黄素粉", href: "/zh/products/liposomal-curcumin-powder/" },
      { label: "脂质体相关原料", href: "/zh/products/liposomal-ingredients/" },
    ],
    relatedGuides: ["liposomal-ingredient-purchasing-parameters", "ingredient-sample-testing-preparation"],
  },

  {
    slug: "liposomal-iron-magnesium-purchasing",
    title: "脂质体铁和脂质体镁采购有什么区别？",
    seoTitle: "脂质体铁和脂质体镁采购有什么区别？",
    description:
      "对比脂质体铁和脂质体镁的化合物形式、元素含量、颜色、口感、检测方法和法规确认点，帮助采购选择合适规格。",
    category: "liposomal",
    targetKeyword: "脂质体铁采购",
    secondaryKeywords: ["脂质体镁", "脂质体铁", "铁镁脂质体"],
    searchIntent: "采购人员比较脂质体铁和脂质体镁的规格与供应商",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 7,
    summary: [
      "铁和镁都不是“单一含量”能描述的产品。",
      "化合物形式决定含量、颜色、口感和法规。",
      "检测方法和目的市场要先确认。",
    ],
    blocks: [
      p(
        "脂质体铁和脂质体镁看起来都是“矿物质 + 脂质载体”，但采购口径差别很大：铁和镁的元素含量、化合物形式、颜色、口感、稳定性和法规要求都不同。",
      ),
      h2("1. 元素含量不等于化合物含量"),
      p(
        "铁含量通常以元素铁计，镁含量以元素镁计，但产品实际是某种铁/镁化合物。询价时要同时写明化合物形式、元素含量、检测方法和换算方式。",
      ),
      h2("2. 颜色、口感和配方适配"),
      table(
        ["项目", "脂质体铁", "脂质体镁"],
        [
          ["常见外观", "灰黑色（参考）", "食品级粉末（参考）"],
          ["配方关注", "颜色、氧化、铁腥味", "口感、溶解性、流动性"],
          ["法规重点", "铁化合物与营养强化范围", "镁化合物与使用范围"],
          ["检测重点", "铁含量、价态、重金属", "镁含量、重金属、微生物"],
        ],
        "脂质体铁与镁的采购差异",
      ),
      h2("3. 包封率、粒径与稳定性"),
      p(
        "两者都要确认包封率、粒径、水分和稳定性，但铁的更易氧化/变色，镁的口感与溶解性更受关注。样品阶段应模拟实际配料、pH 和储存条件。",
      ),
      h2("4. 先确认目的市场法规"),
      p(
        "铁、镁在不同市场的营养强化剂准入、添加范围和标签要求不同。国内采购应先确认化合物形式、产品形态和目标市场，再讨论规格与报价。",
      ),
      links("相关产品", [
        { label: "脂质体铁粉", href: "/zh/products/liposomal-iron-powder/", note: "参考规格与文件" },
        { label: "脂质体镁", href: "/zh/products/liposomal-magnesium/", note: "食品级粉末与证书" },
        { label: "脂质体原料采购指标", href: href("liposomal-ingredient-purchasing-parameters"), note: "通用技术指标" },
        { label: "提交铁/镁采购需求", href: "/zh/contact/?interest=脂质体铁镁&type=guide", note: "说明化合物形式与用途" },
      ]),
    ],
    faq: [
      {
        q: "脂质体铁和普通铁剂有什么区别？",
        a: "脂质体形式通过脂质载体包埋铁化合物，具体差异取决于包封率、粒径、载体组成和工艺。不能仅凭名称判断吸收或效果。",
      },
      {
        q: "铁含量越高越好吗？",
        a: "不是。应结合每日摄入设计、颜色、口感、氧化稳定性和法规添加范围综合评估。",
      },
      {
        q: "脂质体镁的证书可以直接用于国内宣传吗？",
        a: "不能直接使用。证书要核对持有人、范围、有效期和产品对应关系，国内宣传还要符合广告和法规要求。",
      },
    ],
    related: [
      { label: "脂质体铁粉", href: "/zh/products/liposomal-iron-powder/" },
      { label: "脂质体镁", href: "/zh/products/liposomal-magnesium/" },
    ],
    relatedGuides: ["liposomal-ingredient-purchasing-parameters", "ingredient-sample-testing-preparation"],
  },

  {
    slug: "liposomal-nmn-purchasing-guide",
    title: "脂质体 NMN 采购需要确认什么？",
    seoTitle: "脂质体 NMN 采购需要确认什么？",
    description:
      "说明脂质体 NMN 的 5%、10%、50% 规格、含量与纯度、包封率、稳定性、检测方法和国内法规准入风险。",
    category: "liposomal",
    targetKeyword: "脂质体NMN采购",
    secondaryKeywords: ["脂质体NMN", "NMN脂质体", "NMN规格"],
    searchIntent: "采购或研发准备询价脂质体 NMN，需要确认规格与合规风险",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 8,
    summary: [
      "先确认 NMN 规格和含量口径。",
      "包封率、粒径和稳定性不能省略。",
      "国内食品原料准入是高风险点，先确认法规。",
    ],
    blocks: [
      p(
        "脂质体 NMN 的询价不能只写“NMN 脂质体”。要同时确认 NMN 规格比例、含量/纯度、包封率、粒径、稳定性、检测方法和目的市场法规。",
      ),
      h2("1. 规格比例与含量口径"),
      p(
        "国际站公开页面列出 5%、10%、50% 三种参考规格。这里的比例通常指 NMN 在脂质体粉末中的规格比例，具体计算口径、检测方法和批次范围要以规格书和 COA 为准。",
      ),
      h2("2. 包封率、粒径与稳定性"),
      ul([
        "包封率及分离/计算方法",
        "平均粒径、PDI 与 DLS 条件",
        "水分、重金属、微生物",
        "残留溶剂（如工艺使用）",
        "加速/长期稳定性数据",
        "储存条件与包装相容性",
      ]),
      h2("3. 国内法规准入要先确认"),
      note(
        "高风险合规点",
        "NMN 在中国内地的食品原料准入有严格限制，不能把国际站或出口用途直接套用到国内食品。应先确认目的市场、产品形态和法规路径，再讨论规格、样品和报价。",
      ),
      h2("4. 采购文件与商务条件"),
      p(
        "确认批次 COA、TDS、SDS、规格书、检测方法和法规资料。MOQ、包装、交期和价格按项目确认，不把参考规格当成固定承诺。",
      ),
      links("相关页面", [
        { label: "脂质体 NMN 粉", href: "/zh/products/liposomal-nmn-powder/", note: "参考规格与询盘" },
        { label: "脂质体原料采购指标", href: href("liposomal-ingredient-purchasing-parameters"), note: "通用技术指标" },
        { label: "供应商评估", href: href("how-to-evaluate-functional-ingredient-suppliers"), note: "文件与样品审核" },
        { label: "提交 NMN 采购需求", href: "/zh/contact/?interest=脂质体NMN&type=guide", note: "说明规格与目的市场" },
      ]),
    ],
    faq: [
      {
        q: "NMN 在国内可以作为食品原料吗？",
        a: "不能一概而论。NMN 在中国内地的食品原料准入有严格限制，具体用途需由法规顾问按目的市场和产品形态确认。本页不构成合规结论。",
      },
      {
        q: "5%、10%、50% 怎么选？",
        a: "取决于配方目标、添加量、成本和法规。比例越高不一定越适合，应结合含量口径、包封率和应用评估。",
      },
      {
        q: "脂质体 NMN 和普通 NMN 有什么区别？",
        a: "脂质体形式通过磷脂载体包埋 NMN，具体差异取决于包封率、粒径、载体组成和工艺，不能仅凭名称判断性能。",
      },
    ],
    related: [
      { label: "脂质体 NMN 粉", href: "/zh/products/liposomal-nmn-powder/" },
      { label: "脂质体相关原料", href: "/zh/products/liposomal-ingredients/" },
    ],
    relatedGuides: ["liposomal-ingredient-purchasing-parameters", "how-to-evaluate-functional-ingredient-suppliers"],
  },

  {
    slug: "liposomal-liquid-vs-powder",
    title: "脂质体液体和粉末怎么选？",
    seoTitle: "脂质体液体和粉末怎么选？",
    description:
      "从剂型、稳定性、运输、包装、MOQ、配方工艺和成本对比脂质体液体与粉末，帮助采购选择合适形态。",
    category: "liposomal",
    targetKeyword: "脂质体液体和粉末",
    secondaryKeywords: ["脂质体液体", "脂质体粉末", "脂质体剂型"],
    searchIntent: "采购在液体和粉末剂型之间做选择",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 6,
    summary: [
      "液体适合饮料/口服液，粉末适合胶囊/粉剂。",
      "运输、稳定性和包装成本会改变选择。",
      "先确定剂型，再谈规格和 MOQ。",
    ],
    blocks: [
      p(
        "脂质体液体和粉末不是简单的“哪个更好”。剂型会影响稳定性、运输、包装、配料工艺、保质期和成本，采购前应先确定终端产品形态。",
      ),
      h2("1. 按终端剂型选择"),
      table(
        ["终端产品", "更适合的形态", "原因"],
        [
          ["饮料、口服液", "液体", "直接配料，减少复溶步骤"],
          ["胶囊、粉剂、固体饮料", "粉末", "流动性、装量和运输更方便"],
          ["条装液体", "液体", "需确认防腐、pH 和稳定性"],
          ["压片/特殊工艺", "粉末或微丸", "需评估流动性和压片适配"],
        ],
        "剂型选择参考",
      ),
      h2("2. 稳定性与运输"),
      p(
        "液体产品要关注分层、沉淀、pH、防腐和微生物；粉末要关注吸湿、结块、分散性和复溶。液体通常运输成本更高，粉末则对储存湿度更敏感。",
      ),
      h2("3. 包装、MOQ 与成本"),
      p(
        "液体包装、冷链或温控要求可能提高成本；粉末的 MOQ 和包装更灵活。参考 MOQ 不能直接当成国内承诺，要按项目确认。",
      ),
      h2("4. 先做剂型匹配，再谈价格"),
      p(
        "建议先提供终端剂型、添加量、工艺条件、包装形式和目的市场，再让供应商推荐液体或粉末，并给出对应的规格、文件和样品方案。",
      ),
      links("相关产品", [
        { label: "脂质体维生素 C 液体", href: "/zh/products/liposomal-vitamin-c-liquid/", note: "20% 参考规格" },
        { label: "脂质体维生素 C 粉末", href: "/zh/products/liposomal-vitamin-c/", note: "粉末剂型" },
        { label: "脂质体原料采购指标", href: href("liposomal-ingredient-purchasing-parameters"), note: "包封率与粒径" },
        { label: "提交剂型咨询", href: "/zh/contact/?interest=脂质体剂型&type=guide", note: "说明终端产品与工艺" },
      ]),
    ],
    faq: [
      {
        q: "液体脂质体比粉末效果好吗？",
        a: "不能简单比较。效果取决于活性物、包封率、粒径、剂量和配方，剂型只是其中一个因素。",
      },
      {
        q: "粉末需要冷藏吗？",
        a: "取决于产品稳定性和包装，应以 TDS/SDS 和标签说明为准。吸湿性强的粉末通常需要防潮储存。",
      },
      {
        q: "液体可以常温运输吗？",
        a: "需根据稳定性、防腐体系和运输时长确认。部分液体可能需要温控，不能默认常温。",
      },
    ],
    related: [
      { label: "脂质体维生素 C 液体", href: "/zh/products/liposomal-vitamin-c-liquid/" },
      { label: "脂质体维生素 C 粉末", href: "/zh/products/liposomal-vitamin-c/" },
    ],
    relatedGuides: ["liposomal-ingredient-purchasing-parameters", "ingredient-moq-packaging-lead-time"],
  },

  {
    slug: "sustained-release-micropellets-custom",
    title: "缓释微丸定制流程和采购要点",
    seoTitle: "缓释微丸定制流程和采购要点",
    description:
      "说明缓释微丸的包衣、释放曲线、粒径、胶囊填充、定制流程、MOQ 和文件确认点，适合功能性食品与补充剂项目。",
    category: "supplier",
    targetKeyword: "缓释微丸定制",
    secondaryKeywords: ["缓释微丸", "微丸包衣", "缓释微丸代工"],
    searchIntent: "有缓释/掩味/胶囊填充需求，寻找微丸定制供应",
    published: "2026-11-19",
    updated: "2026-11-19",
    readingMinutes: 7,
    summary: [
      "微丸是定制剂型，不是标准品。",
      "先定释放曲线，再谈包衣和价格。",
      "样品阶段必须测释放曲线和胶囊适配性。",
    ],
    blocks: [
      p(
        "缓释微丸通过包衣和微丸结构保护活性成分、调节释放行为。它属于定制剂型，采购时不能只问“多少钱一公斤”，而要先确认活性物、释放曲线、包衣、粒径和胶囊规格。",
      ),
      h2("1. 先定义释放目标"),
      ul([
        "目标释放时间与取样点",
        "释放介质、温度、转速和检测方法",
        "是否需要肠溶、掩味或防潮",
        "载药量与均匀度",
      ]),
      h2("2. 包衣与微丸结构"),
      p(
        "包衣增重、聚合物类型、粒径和圆整度会影响释放曲线和胶囊填充。包衣太薄可能释放过快，太厚可能释放不足；需要样品实测，而不是只看配方描述。",
      ),
      h2("3. 定制流程"),
      table(
        ["阶段", "输出"],
        [
          ["需求确认", "活性物、释放目标、胶囊规格、法规要求"],
          ["样品与测试", "样品、释放曲线、粒径/流动性数据"],
          ["批次生产", "确认规格、批次文件、交期与包装"],
        ],
        "缓释微丸三步定制",
      ),
      h2("4. MOQ、交期与文件"),
      p(
        "微丸的 MOQ、开发周期和交期取决于配方、包衣和批次，不能套用标准品。需要确认批次 COA、TDS、SDS、释放方法、稳定性和胶囊填充适配性。",
      ),
      links("相关页面", [
        { label: "缓释微丸", href: "/zh/products/sustained-release-micropellets/", note: "参考规格与询盘" },
        { label: "定制寻源服务", href: "/zh/custom-sourcing/", note: "需求包与供应评估" },
        { label: "定制原料寻源", href: href("how-to-run-custom-ingredient-sourcing"), note: "五步流程" },
        { label: "提交微丸定制需求", href: "/zh/contact/?interest=缓释微丸&type=guide", note: "说明活性物与释放目标" },
      ]),
    ],
    faq: [
      {
        q: "缓释微丸能保证固定释放时间吗？",
        a: "不能脱离具体配方承诺。释放时间取决于活性物、包衣、粒径和介质条件，应以样品实测释放曲线为准。",
      },
      {
        q: "微丸可以装胶囊吗？",
        a: "可以，但需确认粒径、流动性、装量差异和胶囊壳相容性。样品阶段应实际试装。",
      },
      {
        q: "MOQ 为什么比粉末高？",
        a: "微丸涉及包衣、配方开发和批次生产，起订量通常受工艺和批次限制，需按项目确认。",
      },
    ],
    related: [
      { label: "缓释微丸", href: "/zh/products/sustained-release-micropellets/" },
      { label: "定制寻源", href: "/zh/custom-sourcing/" },
    ],
    relatedGuides: ["how-to-run-custom-ingredient-sourcing", "ingredient-moq-packaging-lead-time"],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuidesByCategory(category: GuideCategory) {
  return guides.filter((guide) => guide.category === category);
}

export const guideSlugs = guides.map((guide) => guide.slug);

export const featuredGuides = guides.slice(0, 3);
