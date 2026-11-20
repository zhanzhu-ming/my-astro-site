# Sheerherb 国内站 SEO 与采购内容版

本版本在第三阶段源码基础上完成工程验收，并新增第四阶段采购知识中心、第五阶段询盘转化改造。

## 快速开始

```bash
npm ci
npm run build
npm run seo:check
```

- 构建输出：`dist/`
- 关键词覆盖报告：`dist/seo-keyword-coverage.csv`
- 技术 SEO 报告：`dist/seo-site-audit.csv`
- 关键词管理表：`SEO-关键词管理表.xlsx`

如果只需重建关键词管理表：

```bash
python scripts/build_keyword_workbook.py
```

## 本轮新增

### 采购知识中心

- `/zh/resources/`：按规格、质量、供应商、脂质体四类组织。
- `/zh/resources/<slug>/`：15 篇采购指南（第一批 10 篇 + 脂质体/微丸专题 5 篇），含目录、FAQ、内链、Article/FAQPage 结构化数据。
- 首页新增「采购知识中心」区块；顶部导航和页脚新增「采购知识」。
- 文章只生成中文版本，hreflang 只输出 `zh-CN` 和 `x-default`。

### 询盘转化

- 表单新增目标规格、应用方向、需要的文件等选填字段。
- 产品页新增移动端固定询价条。
- 产品、分类、文章、质量页 CTA 通过 URL 参数预填产品和来源。
- 新增 `source_page`、`inquiry_type` 字段与 dataLayer 事件参数。
- 新增蜜罐字段，降低垃圾提交。

### 技术 SEO

- 修复 `getStaticPaths` 构建失败。
- 修复俄语产品卡片数据错位。
- 统一 43 个中文页面的 Title / Description / H1 / 关键词表。
- 新增 7 个脂质体/微丸产品页和 1 个能力页，补齐国际站已有的产品矩阵。
- 新增 404、favicon、根路径 301 兜底页。
- 移除 Google Fonts 外链，改用系统中文字体栈。
- 新增 `scripts/seo-site-audit.mjs`，检查 Canonical、hreflang、内部链接、JSON-LD、sitemap 和重复 Title。
- 扩展关键词审计：反向检查未登记的中文页面。

## 目录说明

```
src/
  components/
    GuideCard.astro          采购指南卡片
    ResourceHub.astro        知识中心分类页
    ProductDetailBody.astro  四个重点产品详情正文
    ZhProductDetail.astro    新增脂质体/微丸产品详情正文
    QualityBody.astro        质量文件说明中心
  data/
    guides.ts                15 篇采购指南内容
    product-details.ts       四个重点产品的中文采购资料
    zh-products.ts           7 个新增脂质体/微丸产品资料
    quality.ts               质量页内容与 FAQ
    seo.ts                   中文页面 Title / Description
    seo-keywords.json        43 个中文页面关键词规划
    site.ts / brand.ts       站点结构与品牌文案
  layouts/BaseLayout.astro   Canonical、hreflang、Schema、GTM
  pages/
    [lang]/[...slug].astro   分类、产品、质量、知识中心等页面
    [lang]/resources/[slug].astro  采购指南文章页
    [lang]/index.astro       首页
    [lang]/contact.astro     询盘表单
    zh/products/[slug].astro 新增脂质体/微丸产品页
    zh/capabilities.astro    脂质体与微丸能力页
    404.astro                404
    index.astro              根路径 301 兜底
scripts/
  seo-keyword-audit.mjs      关键词覆盖审计
  seo-site-audit.mjs         技术 SEO 审计
  build_keyword_workbook.py  生成 Excel 关键词表
  package_release.py         打包源码与 dist
  verify_release.py          发布包自检
docs/preview/                最终构建截图
```

## 重要说明

- 关键词表是内部工作数据，不输出为 `meta keywords`。
- 审计通过不代表搜索引擎已收录或排名，也不判断内容质量。
- 页面不写入未经供应商文件、检测报告或授权证明支持的含量、纯度、MOQ、库存、认证或供货承诺。
- 上线前必须执行 `supabase/inquiries.sql` 的字段升级，并在 GTM 中配置 `inquiry_submit_success` 等事件。
- 非中文页面本轮不做全面重写，只保持结构、hreflang 和标题独立。

详细记录见 `SEO-IMPLEMENTATION-REPORT.md`。

## Sheerherb 页面级规划

中文站核心页面的定位、关键词、Title、H1、页面任务、内链边界及上线核验清单见 [`docs/Sheerherb-页面级规划执行版.md`](docs/Sheerherb-页面级规划执行版.md)。本轮实现以 B2B 原料供应对接与采购协作为主线，不将合作供应商能力表述为 Sheerherb 自有工厂或认证。


## 语言版本范围
网站仅保留中文（/zh/）和英文（/en/）两套界面及页面路由。德语、日语、西班牙语、俄语和意大利语不再生成；旧语言入口统一重定向至中文首页。
