import type { Lang } from "./brand";

/**
 * 中文页面的 Title / Meta Description。
 * Title 不包含 " | Sheerherb" 后缀，由 BaseLayout 统一追加。
 * 这里的 title 与 src/data/seo-keywords.json 中的 titleFocus 保持一致，
 * 避免“关键词表写一套、页面标题写另一套”。
 */
const zhSeo: Record<string, { title: string; description: string }> = {
  home: {
    title: "植物提取物与脂质体原料供应合作",
    description:
      "Sheerherb 作为植物提取物供应商与功能性原料供应商，面向保健品、化妆品、食品及贸易企业，提供脂质体原料、植物提取物与功能性原料的供应对接、规格确认、质量文件沟通和定制寻源。",
  },
  products: {
    title: "植物提取物与脂质体原料产品目录",
    description:
      "浏览 Sheerherb 可沟通的植物提取物、脂质体原料与功能性原料方向，了解原料身份、规格、检测、质量文件与采购条件，并按成分提交采购需求。",
  },
  "products/liposomal-ingredients": {
    title: "脂质体相关原料供应与采购",
    description:
      "脂质体原料供应与采购沟通：围绕磷脂、脂质材料及脂质体相关原料，确认原料身份、等级、关键指标、检测方法、质量文件与包装条件。",
  },
  "products/botanical-extracts": {
    title: "植物提取物供应与定制采购",
    description:
      "植物提取物采购与供应沟通：确认植物学名、使用部位、提取工艺、标志性成分、检测方法与质量文件，面向保健品、食品及化妆品企业。",
  },
  "products/custom-sourcing": {
    title: "功能性原料定制寻源与采购协作",
    description:
      "功能性原料定制寻源：提交目标成分、规格、应用、数量与目的市场，开展供应来源评估、样品协调、质量文件与商务条件沟通。",
  },
  "products/liposomal-vitamin-c": {
    title: "脂质体维生素 C 粉末原料采购",
    description:
      "脂质体维生素C原料采购：沟通目标含量、包埋体系、粒径、检测方法、包装与样品。具体参数以正式规格书和批次 COA 为准。",
  },
  "products/urolithin-a": {
    title: "尿石素 A 原料供应与采购询价",
    description:
      "尿石素A原料供应与采购询价：确认纯度、检测方法、外观、包装、样品及供货条件。具体指标以正式产品资料和批次文件为准。",
  },
  "products/shilajit-resin": {
    title: "喜来芝树脂原料采购与供应咨询",
    description:
      "喜来芝树脂原料采购：确认来源、外观、溶解度、指标、检测方法与批次文件。天然树脂成分存在批次差异，具体参数以确认文件为准。",
  },
  "products/berberine-hcl": {
    title: "盐酸小檗碱原料供应与采购询价",
    description:
      "盐酸小檗碱原料供应与采购：确认含量、检测方法、有关物质、包装与样品。CAS 633-65-8，具体规格与供货条件以正式资料为准。",
  },
  "custom-sourcing": {
    title: "原料供应商寻源服务与采购协作",
    description:
      "功能性原料寻源与采购协作：从需求包、供应来源初筛、样品与文件确认到商务条件沟通，支持指定规格原料的定制采购项目。",
  },
  quality: {
    title: "原料质量文件与供应商资料核验",
    description:
      "了解原料COA、TDS、SDS的用途与核验方法，以及植物提取物质量文件、检测方法、批次追溯和目的市场合规沟通的重点。",
  },
  industries: {
    title: "功能性原料应用领域",
    description:
      "功能性原料应用领域：了解植物提取物、脂质体原料在膳食补充剂、食品饮料、化妆品及科研场景中的采购考量与规格确认重点。",
  },
  about: {
    title: "关于 Sheerherb｜功能性原料供应与采购协作",
    description:
      "了解 Sheerherb 的业务定位、原料供应对接方式与 B2B 采购协作流程。产品可供性、规格与文件均按具体项目确认。",
  },
  contact: {
    title: "联系 Sheerherb｜提交原料采购需求",
    description:
      "提交植物提取物采购询价或功能性原料供应咨询：填写目标成分、规格、应用、数量与目的市场，获取供应选项与文件沟通。",
  },
  factory: {
    title: "原料供应商审核与生产协作说明",
    description:
      "原料供应商审核与生产协作说明：区分贸易协作与生产制造，了解供应商资料核验、样品协调、批次文件与交付前确认。",
  },
  certifications: {
    title: "原料供应商资质与认证核验",
    description:
      "原料供应商资质与认证核验：了解证书持有人、适用范围、有效期与产品对应关系的核对方法，按项目索取可核验文件。",
  },
  cases: {
    title: "原料采购项目合作方式",
    description:
      "原料采购项目合作方式：了解指定成分寻源、样品评估协调与长期采购协作的沟通流程，不展示未经授权的客户信息。",
  },
  resources: {
    title: "植物提取物采购指南与原料资源",
    description:
      "植物提取物采购指南与原料规格确认资源：COA 阅读、标准化、脂质体指标、供应商评估、样品测试、MOQ 与定制寻源。",
  },
  privacy: {
    title: "隐私政策",
    description:
      "了解 Sheerherb 国内站在询盘表单中收集哪些信息、用于什么目的、如何保存，以及如何联系我们处理相关请求。",
  },
  terms: {
    title: "法律声明与使用条款",
    description:
      "Sheerherb 国内站法律声明与使用条款：网站信息的用途、产品与交易信息的确认方式、法规责任与知识产权说明。",
  },
};

export function getSeo(lang: Lang, key: string, fallbackTitle: string, fallbackDescription: string) {
  if (lang === "zh" && zhSeo[key]) return zhSeo[key];
  return { title: fallbackTitle, description: fallbackDescription };
}

export function hasZhSeo(key: string) {
  return Boolean(zhSeo[key]);
}
