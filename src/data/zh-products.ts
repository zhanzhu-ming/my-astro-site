/**
 * 国内站新增脂质体/微丸产品资料。
 *
 * 参数来源：Sheerherb 国际站公开产品页（2026-11-19 查看）。
 * 仅作中文采购沟通参考；国内报价、正式规格书、批次 COA 和目的市场法规要求为准。
 * 不写入未经确认的功效、医疗或合规结论。
 */

export type ZhProduct = {
  slug: string;
  name: string;
  englishName: string;
  cas: string;
  form: string;
  category: string;
  summary: string;
  referenceNote: string;
  specTable: { label: string; value: string }[];
  specChecks: string[];
  testMethods: string;
  applications: string[];
  documents: string[];
  packaging: string[];
  faq: { q: string; a: string }[];
  domesticNote: string;
  relatedGuides: string[];
};

const referenceNote =
  "以下参数来自 Sheerherb 国际站公开产品页，仅作采购沟通参考。国内报价、正式规格书、批次 COA、标签与目的市场法规要求为准，不同批次允许合理差异。";

export const zhProducts: ZhProduct[] = [
  {
    slug: "liposomal-curcumin-powder",
    name: "脂质体姜黄素粉",
    englishName: "Liposomal Curcumin Powder",
    cas: "458-37-7（姜黄素）",
    form: "粉末",
    category: "脂质体粉末",
    summary:
      "以姜黄素为活性物、磷脂载体包埋的脂质体粉末方向，适合固体饮料、胶囊和功能性食品配方开发。",
    referenceNote,
    specTable: [
      { label: "产品名称", value: "脂质体姜黄素" },
      { label: "主要成分", value: "姜黄素（Curcumin）" },
      { label: "外观", value: "橙色（参考）" },
      { label: "形态", value: "粉末" },
      { label: "参考证书", value: "ISO22000 / Halal / Kosher（国际站页面）" },
      { label: "参考 MOQ", value: "20 kg" },
      { label: "参考包装", value: "1 kg/袋，25 kg/桶" },
      { label: "参考保质期", value: "2 年" },
      { label: "参考等级", value: "保健食品级" },
    ],
    specChecks: [
      "姜黄素含量与检测方法（HPLC）",
      "包封率及计算方法",
      "粒径分布、平均粒径与 PDI",
      "外观、颜色、流动性",
      "水分、重金属、微生物",
      "残留溶剂（如工艺使用）",
      "载体磷脂组成与来源",
      "固体饮料/胶囊体系的分散性",
    ],
    testMethods:
      "姜黄素含量通常采用 HPLC-UV 测定，应确认色谱柱、流动相、检测波长、标准品和计算方法。包封率需说明分离方法与计算口径，粒径通常用 DLS 测定；不同方法结果不能直接比较。",
    applications: [
      "固体饮料、粉剂、条装产品",
      "胶囊、片剂等口服固体制剂",
      "功能性食品配方（按目的市场法规确认）",
      "化妆品/外用配方（需单独确认载体适用性）",
    ],
    documents: [
      "批次 COA：姜黄素含量、水分、重金属、微生物等",
      "TDS：规格、溶解/分散方法、应用信息",
      "SDS：安全、储存和运输信息",
      "规格书与检测方法说明",
      "证书与法规文件（按项目确认）",
    ],
    packaging: [
      "样品数量与样品批次",
      "1 kg/袋、25 kg/桶（参考）",
      "避光、防潮、密封储存",
      "MOQ 20 kg（参考，按项目确认）",
      "交期与运输方式按项目确认",
    ],
    faq: [
      {
        q: "脂质体姜黄素和普通姜黄素有什么区别？",
        a: "脂质体形式通过磷脂载体包埋姜黄素，具体差异取决于包封率、粒径、载体组成和工艺。不能仅凭名称判断产品性能，应查看具体指标和检测方法。",
      },
      {
        q: "参考 MOQ 是固定的吗？",
        a: "20 kg 是国际站公开页面的参考值，国内实际 MOQ 需结合包装规格、批次和项目条件确认。",
      },
      {
        q: "姜黄素在国内食品中能用吗？",
        a: "取决于目的市场、用途和当地法规。采购方应确认原料准入、使用范围和标签要求，必要时咨询法规顾问。",
      },
      {
        q: "能否提供样品和 COA？",
        a: "样品和批次文件按项目沟通。样品应能对应报价批次，COA 应包含检测项目、方法、结果和结论。",
      },
    ],
    domesticNote:
      "国内采购时建议同时确认中文标签、使用范围、目的市场法规和是否需要额外检测。页面不构成功效或合规结论。",
    relatedGuides: ["liposomal-curcumin-purchasing-guide", "liposomal-ingredient-purchasing-parameters"],
  },
  {
    slug: "liposomal-iron-powder",
    name: "脂质体铁粉",
    englishName: "Liposomal Iron Powder",
    cas: "以具体铁化合物为准（铁元素 CAS 7439-89-6）",
    form: "粉末",
    category: "脂质体粉末",
    summary:
      "以铁化合物为活性物、脂质载体包埋的粉末方向，适合固体饮料、胶囊等铁强化配方开发。",
    referenceNote,
    specTable: [
      { label: "产品名称", value: "脂质体铁" },
      { label: "主要成分", value: "铁（以具体化合物形式）" },
      { label: "外观", value: "灰黑色（参考）" },
      { label: "形态", value: "粉末" },
      { label: "参考证书", value: "ISO22000 / Halal / Kosher（国际站页面）" },
      { label: "参考 MOQ", value: "1 kg" },
      { label: "参考包装", value: "1 kg/袋，25 kg/桶" },
    ],
    specChecks: [
      "铁含量、价态与化合物形式",
      "包封率及计算方法",
      "粒径分布与 PDI",
      "外观、颜色、气味",
      "水分、重金属、微生物",
      "溶解/分散性与口感",
      "加速/长期稳定性数据",
      "与维生素 C 等配料的相容性",
    ],
    testMethods:
      "铁含量通常采用原子吸收（AAS）、ICP-OES/ICP-MS 或滴定法，应确认方法、样品前处理和结果口径。包封率与粒径方法需与供应商对齐；铁元素含量不等于化合物含量。",
    applications: [
      "固体饮料、粉剂、条装产品",
      "胶囊、片剂等口服固体制剂",
      "铁强化食品（按目的市场法规确认）",
      "科研与配方开发",
    ],
    documents: [
      "批次 COA：铁含量、重金属、微生物等",
      "TDS：化合物形式、规格、应用信息",
      "SDS：安全、储存和运输信息",
      "规格书与检测方法说明",
      "法规/标签资料（按项目确认）",
    ],
    packaging: [
      "样品数量与样品批次",
      "1 kg/袋、25 kg/桶（参考）",
      "避光、防潮、密封储存",
      "MOQ 1 kg（参考，按项目确认）",
      "交期与运输方式按项目确认",
    ],
    faq: [
      {
        q: "脂质体铁中的铁是什么化合物？",
        a: "具体铁化合物形式需以规格书为准。不同化合物会影响铁含量、颜色、口感、稳定性和法规适用性，不能只看“铁”这一个字。",
      },
      {
        q: "铁含量越高越好吗？",
        a: "取决于配方目标和每日摄入设计。高含量可能带来颜色、口感、氧化和法规问题，应结合应用评估。",
      },
      {
        q: "为什么外观是灰黑色？",
        a: "外观与铁化合物形式、粒径和载体体系有关。颜色本身不能单独判断质量，应以含量、价态、重金属和批次 COA 为准。",
      },
      {
        q: "能用于国内食品吗？",
        a: "取决于目的市场、铁的化合物形式和添加范围。采购方应确认准入和标签要求，必要时咨询法规顾问。",
      },
    ],
    domesticNote:
      "铁强化产品的法规和标签要求因市场而异。国内采购建议确认化合物形式、使用范围、营养强化剂准入和检测项目后再报价。",
    relatedGuides: ["liposomal-iron-magnesium-purchasing", "liposomal-ingredient-purchasing-parameters"],
  },
  {
    slug: "liposomal-magnesium",
    name: "脂质体镁",
    englishName: "Liposomal Magnesium",
    cas: "以具体镁化合物为准（镁元素 CAS 7439-95-4）",
    form: "粉末",
    category: "脂质体粉末",
    summary:
      "以镁化合物为活性物、脂质载体包埋的食品级粉末方向，适合固体饮料、胶囊和粉剂配方。",
    referenceNote,
    specTable: [
      { label: "产品名称", value: "脂质体镁" },
      { label: "质量等级", value: "食品级（参考）" },
      { label: "形态", value: "食品级粉末（参考）" },
      { label: "参考保质期", value: "2 年" },
      { label: "参考交期", value: "2—3 周" },
      { label: "参考样品政策", value: "免费或协商" },
      { label: "参考证书", value: "GMP、HACCP、ISO、Kosher & Halal、Organic（国际站页面）" },
    ],
    specChecks: [
      "镁含量与化合物形式",
      "包封率及计算方法",
      "粒径分布与 PDI",
      "外观、颜色、流动性",
      "水分、重金属、微生物",
      "溶解/分散性与口感",
      "稳定性与包装相容性",
      "证书范围与实际生产主体",
    ],
    testMethods:
      "镁含量通常采用滴定、AAS 或 ICP 方法，应确认方法、前处理和结果口径。包封率、粒径需与供应商方法对齐；不同镁化合物的含量和口感差异较大。",
    applications: [
      "固体饮料、粉剂、条装产品",
      "胶囊、片剂等口服固体制剂",
      "食品与营养补充剂配方（按目的市场法规确认）",
      "科研与配方开发",
    ],
    documents: [
      "批次 COA：镁含量、重金属、微生物等",
      "TDS：化合物形式、规格、应用信息",
      "SDS：安全、储存和运输信息",
      "规格书与检测方法说明",
      "证书与法规文件（按项目确认）",
    ],
    packaging: [
      "样品数量与样品批次",
      "内包装与外包装按项目确认",
      "避光、防潮、密封储存",
      "MOQ、交期和运输方式按项目确认",
      "复检期与批次留样",
    ],
    faq: [
      {
        q: "脂质体镁和普通镁有什么区别？",
        a: "脂质体形式通过脂质载体包埋镁化合物，具体差异取决于包封率、粒径、载体组成和工艺。不能仅凭名称判断吸收或效果。",
      },
      {
        q: "参考证书能直接用于国内宣传吗？",
        a: "不能直接使用。证书需核对持有人、范围、有效期和产品对应关系；国内宣传还应符合广告和法规要求。",
      },
      {
        q: "样品是否免费？",
        a: "国际站页面写“免费或协商”，国内实际样品政策需按项目确认，可能涉及样品费、运费和文件沟通。",
      },
      {
        q: "镁含量和化合物形式哪个更重要？",
        a: "两者都重要。元素镁含量影响配方计算，化合物形式影响溶解性、口感、稳定性和法规适用性。",
      },
    ],
    domesticNote:
      "国内采购建议确认镁化合物形式、使用范围、营养强化剂准入和标签要求。证书需与实际生产主体和产品对应。",
    relatedGuides: ["liposomal-iron-magnesium-purchasing", "ingredient-sample-testing-preparation"],
  },
  {
    slug: "liposomal-nmn-powder",
    name: "脂质体 NMN 粉",
    englishName: "Liposomal NMN Powder",
    cas: "1094-61-7（NMN）",
    form: "粉末",
    category: "脂质体粉末",
    summary:
      "以 NMN（烟酰胺单核苷酸）为活性物、磷脂载体包埋的脂质体粉末方向，常见参考规格为 5%、10%、50%。",
    referenceNote,
    specTable: [
      { label: "产品名称", value: "脂质体 NMN" },
      { label: "主要成分", value: "NMN（烟酰胺单核苷酸）" },
      { label: "参考规格", value: "5%、10%、50%" },
      { label: "参考等级", value: "食品级 / 化妆品级" },
      { label: "外观", value: "白色结晶性粉末（参考）" },
      { label: "形态", value: "粉末" },
    ],
    specChecks: [
      "NMN 含量/纯度与检测方法（HPLC）",
      "包封率及计算方法",
      "粒径分布与 PDI",
      "水分、重金属、微生物",
      "残留溶剂（如工艺使用）",
      "稳定性与储存条件",
      "载体组成与来源",
      "目的市场法规准入",
    ],
    testMethods:
      "NMN 含量通常采用 HPLC-UV 测定，应确认色谱柱、流动相、检测波长、标准品和计算方法。包封率与粒径方法需与供应商对齐；不同“含量”口径可能不同。",
    applications: [
      "科研与配方开发",
      "出口配方或经确认的法规用途",
      "胶囊、粉剂、固体饮料（需按目的市场确认）",
      "化妆品/外用配方（需单独确认）",
    ],
    documents: [
      "批次 COA：NMN 含量、纯度、重金属、微生物等",
      "TDS：规格、溶解性、应用信息",
      "SDS：安全、储存和运输信息",
      "规格书与检测方法说明",
      "法规/准入资料（按项目确认）",
    ],
    packaging: [
      "样品数量与样品批次",
      "内包装与外包装按项目确认",
      "避光、防潮、低温或常温按规格书",
      "MOQ、交期和运输方式按项目确认",
      "复检期与批次留样",
    ],
    faq: [
      {
        q: "NMN 在国内可以作为食品原料吗？",
        a: "不能一概而论。NMN 在中国内地的食品原料准入有严格限制，具体用途需由法规顾问按目的市场和产品形态确认。本页不构成合规结论。",
      },
      {
        q: "5%、10%、50% 是什么含量？",
        a: "通常指 NMN 在脂质体粉末中的参考规格比例，具体计算口径、检测方法和批次范围需以规格书和 COA 为准。",
      },
      {
        q: "脂质体 NMN 和普通 NMN 有什么区别？",
        a: "脂质体形式通过磷脂载体包埋 NMN，具体差异取决于包封率、粒径、载体组成和工艺，不能仅凭名称判断性能。",
      },
      {
        q: "能提供哪些文件？",
        a: "可按项目沟通批次 COA、TDS、SDS、规格书和法规资料；具体可获得性以供应方实际文件为准。",
      },
    ],
    domesticNote:
      "NMN 的国内食品/化妆品准入是高风险合规点。建议先确认目的市场、产品形态和法规路径，再讨论规格、样品和报价。",
    relatedGuides: ["liposomal-nmn-purchasing-guide", "how-to-evaluate-functional-ingredient-suppliers"],
  },
  {
    slug: "liposome-glutathione",
    name: "脂质体谷胱甘肽",
    englishName: "Liposomal Glutathione",
    cas: "70-18-8（谷胱甘肽）",
    form: "粉末",
    category: "脂质体粉末",
    summary:
      "以谷胱甘肽为活性物、脂质载体包埋的粉末方向，参考规格 98%，常见检测方法为 HPLC。",
    referenceNote,
    specTable: [
      { label: "产品名称", value: "脂质体谷胱甘肽" },
      { label: "主要成分", value: "谷胱甘肽（Glutathione）" },
      { label: "参考规格", value: "98%（规格与工艺可定制）" },
      { label: "参考检测方法", value: "HPLC" },
      { label: "外观", value: "白色至淡黄色粉末（参考）" },
      { label: "参考保质期", value: "24 个月" },
      { label: "储存", value: "密封避光，阴凉干燥，避免高温" },
    ],
    specChecks: [
      "谷胱甘肽含量/纯度与 HPLC 方法",
      "包封率及计算方法",
      "粒径分布与 PDI",
      "外观、颜色、气味",
      "水分、重金属、微生物",
      "残留溶剂（如工艺使用）",
      "氧化状态与稳定性",
      "载体组成与来源",
    ],
    testMethods:
      "谷胱甘肽含量通常采用 HPLC-UV 测定，应确认色谱柱、流动相、检测波长、标准品和计算方法。谷胱甘肽易氧化，样品处理和储存条件会影响结果，需在方法中说明。",
    applications: [
      "化妆品/外用配方（需确认载体适用性）",
      "食品与营养补充剂（按目的市场法规确认）",
      "科研与配方开发",
      "胶囊、粉剂等口服固体制剂",
    ],
    documents: [
      "批次 COA：含量、纯度、重金属、微生物等",
      "TDS：规格、溶解性、应用信息",
      "SDS：安全、储存和运输信息",
      "规格书与检测方法说明",
      "稳定性/氧化状态资料（按项目确认）",
    ],
    packaging: [
      "样品数量与样品批次",
      "内包装与外包装按项目确认",
      "密封避光、阴凉干燥",
      "MOQ、交期和运输方式按项目确认",
      "复检期与批次留样",
    ],
    faq: [
      {
        q: "98% 是谷胱甘肽纯度还是脂质体含量？",
        a: "需以规格书为准。98% 通常指谷胱甘肽原料的参考规格，脂质体粉末中还有载体成分，不能把两者混为一谈。",
      },
      {
        q: "谷胱甘肽容易氧化，怎么确认稳定性？",
        a: "应查看批次 COA、稳定性数据和储存条件，确认检测方法是否区分氧化型/还原型，并保留留样。",
      },
      {
        q: "能用于化妆品吗？",
        a: "取决于目的市场法规、配方体系和添加量。化妆品用途需单独确认原料准入、标签和功效宣称边界。",
      },
      {
        q: "和普通谷胱甘肽有什么区别？",
        a: "脂质体形式通过脂质载体包埋谷胱甘肽，具体差异取决于包封率、粒径、载体组成和工艺，不能仅凭名称判断。",
      },
    ],
    domesticNote:
      "谷胱甘肽的食品/化妆品用途和宣称边界需按目的市场确认。国内采购建议先确认法规路径和标签要求，再讨论规格与报价。",
    relatedGuides: ["liposomal-ingredient-purchasing-parameters", "how-to-read-botanical-extract-coa"],
  },
  {
    slug: "liposomal-vitamin-c-liquid",
    name: "脂质体维生素 C 液体",
    englishName: "Liposomal Vitamin C Liquid",
    cas: "50-81-7（维生素 C）",
    form: "液体",
    category: "脂质体液体",
    summary:
      "以维生素 C 为活性物、磷脂载体包埋的液体剂型，国际站公开参考规格为维生素 C 含量 20%、MOQ 1 kg。",
    referenceNote,
    specTable: [
      { label: "产品名称", value: "脂质体维生素 C 液体" },
      { label: "维生素 C 含量", value: "20%（参考）" },
      { label: "参考 MOQ", value: "1 kg" },
      { label: "参考保质期", value: "24 个月" },
      { label: "参考应用", value: "食品级" },
      { label: "形态", value: "液体" },
    ],
    specChecks: [
      "维生素 C 含量与检测方法",
      "包封率及计算方法",
      "粒径分布与 PDI",
      "pH、外观、颜色",
      "防腐体系与微生物",
      "稳定性与沉淀/分层",
      "包装、运输和储存条件",
      "目的市场法规与标签",
    ],
    testMethods:
      "维生素 C 含量通常采用 HPLC 或滴定法，应确认方法、色谱条件和计算口径。液体产品还应关注 pH、防腐体系和稳定性；包封率与粒径方法需与供应商对齐。",
    applications: [
      "液体饮料、口服液、条装液体",
      "食品与营养补充剂（按目的市场法规确认）",
      "化妆品/外用配方（需单独确认）",
      "科研与配方开发",
    ],
    documents: [
      "批次 COA：维生素 C 含量、微生物等",
      "TDS：pH、规格、应用和储存信息",
      "SDS：安全、储存和运输信息",
      "规格书与检测方法说明",
      "稳定性资料（按项目确认）",
    ],
    packaging: [
      "样品数量与样品批次",
      "液体包装规格按项目确认",
      "避光、密封、按温度要求储存",
      "MOQ 1 kg（参考，按项目确认）",
      "运输方式与保质期按项目确认",
    ],
    faq: [
      {
        q: "液体和粉末怎么选？",
        a: "液体适合饮料/口服液，粉末适合胶囊、粉剂和固体饮料。选择取决于剂型、运输成本、稳定性和配方工艺。",
      },
      {
        q: "液体会不会分层或沉淀？",
        a: "取决于体系、粒径、pH、防腐和储存条件。应查看稳定性数据并在样品阶段模拟实际运输和货架条件。",
      },
      {
        q: "20% 含量是固定的吗？",
        a: "20% 是国际站公开参考值，国内实际规格需按项目确认，可能涉及不同含量、包装和起订量。",
      },
      {
        q: "能用于化妆品吗？",
        a: "需单独确认载体适用性、防腐体系、原料准入和标签要求，不能直接套用食品级结论。",
      },
    ],
    domesticNote:
      "液体剂型对运输、储存和微生物控制要求更高。国内采购建议先确认剂型、包装、保质期和目的市场法规，再安排样品。",
    relatedGuides: ["liposomal-liquid-vs-powder", "liposomal-ingredient-purchasing-parameters"],
  },
  {
    slug: "sustained-release-micropellets",
    name: "缓释微丸",
    englishName: "Sustained-Release Micropellets",
    cas: "无统一 CAS（按载药与包衣体系定制）",
    form: "微丸",
    category: "缓释微丸",
    summary:
      "通过包衣和微丸结构保护活性成分、调节释放行为的定制剂型，适合胶囊填充和功能性食品配方开发。",
    referenceNote,
    specTable: [
      { label: "产品名称", value: "缓释微丸" },
      { label: "形态", value: "微丸/颗粒" },
      { label: "释放行为", value: "按项目定制（缓释/肠溶/掩味）" },
      { label: "包衣", value: "按活性物与目标释放曲线设计" },
      { label: "参考应用", value: "胶囊填充、功能性食品（按法规确认）" },
      { label: "MOQ", value: "按项目与配方确认" },
      { label: "文件", value: "按项目确认" },
    ],
    specChecks: [
      "载药量与均匀度",
      "释放曲线与检测方法",
      "包衣增重与完整性",
      "粒径分布、圆整度与流动性",
      "水分、重金属、微生物",
      "稳定性与相容性",
      "胶囊填充适配性",
      "目的市场法规与标签",
    ],
    testMethods:
      "释放曲线需在约定介质、转速/温度和检测方法下测定，并说明取样点和计算方法。粒径、圆整度和流动性可用激光粒度、图像分析或流动性指数评估；不同方法结果不能直接比较。",
    applications: [
      "胶囊填充",
      "功能性食品/补充剂（按目的市场法规确认）",
      "需要掩味、保护或缓释的配方",
      "定制化剂型开发",
    ],
    documents: [
      "批次 COA：载药量、水分、重金属、微生物等",
      "TDS：粒径、释放行为、包衣和应用信息",
      "SDS：安全、储存和运输信息",
      "规格书与释放方法说明",
      "稳定性资料（按项目确认）",
    ],
    packaging: [
      "样品数量与样品批次",
      "内包装与外包装按项目确认",
      "避光、防潮、密封储存",
      "MOQ、交期和运输方式按项目确认",
      "复检期与批次留样",
    ],
    faq: [
      {
        q: "缓释微丸的定制流程是什么？",
        a: "通常先确认活性物、目标释放曲线、剂量、胶囊规格和法规要求，再做样品与释放测试，确认后进入批次生产。",
      },
      {
        q: "能保证 8 小时释放吗？",
        a: "释放时间取决于活性物、包衣、粒径和介质条件，不能脱离具体配方承诺。应以样品实测释放曲线为准。",
      },
      {
        q: "MOQ 和交期怎么确认？",
        a: "微丸属于定制剂型，MOQ、开发周期和交期需按配方、包衣和批次确认，不能直接套用标准品。",
      },
      {
        q: "能用于普通食品吗？",
        a: "取决于活性物、用途和目的市场法规。采购方应确认原料准入、工艺和标签要求，必要时咨询法规顾问。",
      },
    ],
    domesticNote:
      "微丸是定制剂型，国内采购建议先确认活性物合法性、目标释放曲线、胶囊规格、样品测试方案和法规路径，再讨论 MOQ 与交期。",
    relatedGuides: ["sustained-release-micropellets-custom", "how-to-run-custom-ingredient-sourcing"],
  },
];

export function getZhProduct(slug: string) {
  return zhProducts.find((product) => product.slug === slug);
}

export const zhProductSlugs = zhProducts.map((product) => product.slug);
