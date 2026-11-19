import type { Lang } from "./brand";

const zhSeo: Record<string, { title: string; description: string }> = {
  home: {
    title: "植物提取物与脂质体原料供应合作",
    description: "Sheerherb 面向企业采购客户，提供植物提取物、脂质体相关原料及功能性原料的供应对接与定制寻源沟通。提交成分、规格、数量和目的市场，确认供应选项。",
  },
  products: {
    title: "植物提取物与脂质体原料产品目录",
    description: "浏览 Sheerherb 可沟通的植物提取物、脂质体相关原料及定制寻源方向。按成分身份、规格、应用、质量文件和采购数量提交需求。",
  },
  "products/liposomal-ingredients": {
    title: "脂质体相关原料供应与采购",
    description: "了解脂质体相关原料的采购沟通方向，包括磷脂、脂质材料及配套原料。提交目标成分、等级、应用和质量要求，逐项确认供应可行性。",
  },
  "products/botanical-extracts": {
    title: "植物提取物供应与定制采购",
    description: "围绕植物来源、提取部位、提取比例、标志性成分和检测方法开展植物提取物寻源沟通。面向品牌方、制造商及原料采购团队。",
  },
  "products/custom-sourcing": {
    title: "功能性原料定制寻源与采购协作",
    description: "针对指定植物提取物、功能性成分、目标规格、采购数量和目的市场开展供应商寻源与商务协调。提交需求以评估供应可行性。",
  },
  "products/liposomal-vitamin-c": {
    title: "脂质体维生素 C 粉末原料采购",
    description: "联系 Sheerherb 沟通脂质体维生素 C 粉末的目标含量、剂型、检测方法、包装、起订量及供货条件。具体参数以正式产品资料和批次文件为准。",
  },
  "products/urolithin-a": {
    title: "尿石素 A 原料供应与采购询价",
    description: "面向企业采购沟通尿石素 A 原料的目标纯度、规格、检测项目、包装、样品及供货需求。具体产品指标和可供性需逐项确认。",
  },
  "products/shilajit-resin": {
    title: "喜来芝树脂原料采购与供应咨询",
    description: "联系 Sheerherb 沟通喜来芝树脂的来源、目标指标、检测文件、包装和采购数量。具体批次参数、文件和供货条件以正式确认为准。",
  },
  "products/berberine-hcl": {
    title: "盐酸小檗碱原料供应与采购询价",
    description: "针对盐酸小檗碱原料，沟通目标规格、含量、检测方法、质量文件、包装和采购数量。具体指标和供货情况以正式产品资料为准。",
  },
  about: {
    title: "关于 Sheerherb｜功能性原料供应与采购协作",
    description: "了解 Sheerherb 的业务定位、原料供应对接方式和 B2B 采购协作流程。产品可供性、规格及文件均按具体项目确认。",
  },
  quality: {
    title: "原料质量文件与供应商资料核验",
    description: "了解原料采购中 COA、TDS、SDS 等资料的用途、核验重点和批次对应关系，并向 Sheerherb 提交目标市场及文件要求。",
  },
  contact: {
    title: "联系 Sheerherb｜提交原料采购需求",
    description: "提交目标产品或成分、规格要求、应用场景、预计采购数量和目的市场，联系 Sheerherb 开展植物提取物及脂质体相关原料采购沟通。",
  },
};

export function getSeo(lang: Lang, key: string, fallbackTitle: string, fallbackDescription: string) {
  if (lang === "zh" && zhSeo[key]) return zhSeo[key];
  return { title: fallbackTitle, description: fallbackDescription };
}
