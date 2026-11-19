# Sheerherb 国内站 SEO 与采购内容体系实施报告

- 站点：`https://sheerherb.cn`
- 本轮重点：中文 `/zh/`
- 报告日期：2026-11-19
- 源码版本：`sheerherb-cn-seo-phase4-source.zip`
- 构建产物：`dist/`（152 个页面）
- 结论：第三阶段工程验收完成，第四阶段采购知识中心与第五阶段询盘转化改造已完成源码落地；未执行线上部署、生产 Supabase 迁移和 GTM/GA4 后台配置。

---

## 1. 本轮完成什么

### 1.1 第三阶段：工程验收

第三阶段此前只完成了文案和页面源码修改，没有通过完整构建。本轮完成了以下修复和验收：

- 修复 `src/pages/[lang]/[...slug].astro` 的 `getStaticPaths` 引用外部变量问题。Astro 会把 `getStaticPaths` 提升到模块作用域，原写法导致构建直接失败。
- 修复俄语产品卡片数据错位：`ru` 分支误用了德语数组。
- 统一 20 个既有中文页面的 Title、Description、H1 与关键词表口径。
- 为 10 个新增采购指南页面建立独立路由、关键词登记和审计。
- 补齐 404 页面、favicon、根路径 301 兜底页。
- 移除 Google Fonts 外链，改用系统中文字体栈，减少国内访问的外部阻塞请求。
- 重新生成 `sitemap-index.xml` 与 `sitemap-0.xml`，排除根路径和 404。
- 新增技术 SEO 审计脚本，覆盖 Canonical、hreflang、内部链接、JSON-LD、sitemap 和重复 Title。

### 1.2 第四阶段：采购知识中心

新增 10 篇面向采购人员的指南，统一放在 `/zh/resources/` 下。每篇都有独立 Title、Description、H1、目标关键词、搜索意图、FAQ、内链和询盘入口。

| # | 文章 | 目标关键词 | 主要内链 |
|---|---|---|---|
| 1 | 植物提取物采购需要确认哪些参数？ | 植物提取物采购参数 | 植物提取物分类、COA 阅读、规格确认 |
| 2 | 如何阅读植物提取物 COA？ | 植物提取物 COA | 质量页、COA/TDS/SDS 区别、分类页 |
| 3 | COA、TDS 和 SDS 有什么区别？ | 原料质量文件 | 质量页、COA 阅读、规格确认 |
| 4 | 植物提取物标准化是什么意思？ | 标准化植物提取物 | 分类页、采购参数、COA 阅读 |
| 5 | 脂质体原料采购需要关注哪些指标？ | 脂质体原料采购指标 | 脂质体分类、脂质体维生素 C、质量页 |
| 6 | 如何评估功能性原料供应商？ | 评估功能性原料供应商 | 定制寻源、质量页、样品测试 |
| 7 | 原料样品测试前应该准备什么？ | 原料样品采购 | 产品目录、规格确认、质量页 |
| 8 | 如何确定原料采购规格？ | 如何确定原料采购规格 | 定制寻源、采购参数、COA 阅读 |
| 9 | 原料 MOQ、包装和交期应该如何确认？ | 原料 MOQ | 联系页、定制寻源、规格确认 |
| 10 | 如何进行定制原料寻源？ | 定制原料寻源 | 定制寻源服务、分类页、供应商评估 |

知识中心入口：

- 首页新增「采购知识中心」区块，展示前 3 篇。
- 顶部导航和页脚新增「采购知识」。
- `/zh/resources/` 改为分类知识中心：按规格、质量、供应商、脂质体四类组织。
- 产品详情页、质量页、文章页之间建立双向内链。

文章页结构：

- 文章要点、目录、正文、FAQ、相关采购页面、继续阅读、侧栏询盘卡片。
- 输出 `Article`、`FAQPage`、`BreadcrumbList` 结构化数据。
- 仅中文版本存在，hreflang 只输出 `zh-CN` 和 `x-default`，不会生成虚假的其他语言版本。

### 1.3 第五阶段：询盘转化

联系表单新增以下选填字段，降低首次提交门槛：

| 字段 | 必填 | 用途 |
|---|---|---|
| 姓名、公司、工作邮箱 | 是 | 回复与身份确认 |
| 电话 / WhatsApp | 否 | 辅助联系 |
| 关注产品 / 原料 | 是 | 判断询盘主题 |
| 预计采购数量 | 否 | 判断项目规模 |
| 目标规格 | 否 | 判断技术匹配 |
| 应用方向 | 否 | 判断用途与法规路径 |
| 目的市场 | 否 | 判断适用要求 |
| 需要的文件 | 否 | 判断 COA/TDS/SDS 需求 |
| 项目需求 | 否 | 收集补充信息 |
| 同意条款 | 是 | 合规与反垃圾 |

转化与追踪改造：

- 产品页新增移动端固定询价条（`position: fixed`，390px 视口实测 bottom 832 / 视口 844）。
- 产品、分类、文章、质量页 CTA 通过 URL 参数预填 `interest`、`source`、`type`。
- 表单增加隐藏字段 `source_page`、`inquiry_type`，用于区分询盘来源页面和类型。
- 表单增加蜜罐字段，填写后直接拒绝。
- `inquiry_start` 事件增加 `source_page`、`inquiry_type`。
- `inquiry_submit_success` 事件增加 `inquiry_type`、`inquiry_scope`、`product_name`、`source_page`。
- `product_view` 事件增加 `product_slug`。
- 保留 `contact_click`（邮箱、电话、WhatsApp）。
- `page_view` 仍由 GTM/GA4 的基础配置产生，源码不重复推送。

Supabase：

- `supabase/inquiries.sql` 已增加 `specification`、`application`、`documents`、`source_page`、`inquiry_type` 字段的升级语句。
- 新装环境直接建表；已有环境执行 `alter table ... add column if not exists`。
- 未连接生产库，未执行真实提交测试。

### 1.4 首页结构补齐

中文首页按采购决策顺序调整为：

1. 首屏定位：植物提取物与功能性原料供应合作。
2. 核心产品与原料类别。
3. 从询盘到交付的采购流程。
4. 面向采购团队的合作方式。
5. 质量文件（COA / TDS / SDS）。
6. 应用行业。
7. 采购知识中心。
8. 询盘 CTA。

同时移除了中文首页与分类页重复的「技术」区块，避免同一屏重复表达。其他六种语言保留原结构。

---

## 2. 构建与验收环境

| 项目 | 值 |
|---|---|
| Node.js | v26.13.1 |
| npm | 11.20.0 |
| Astro | 5.18.2 |
| @astrojs/sitemap | 3.7.5 |
| 构建命令 | `npm run build` |
| 构建结果 | 152 page(s) built，Complete |
| 构建耗时 | 约 2.4 秒 |
| 输出目录 | `dist/` |

说明：本机工作区沙箱禁止 Node 启动子进程，`npm ci` 的安装脚本会触发 `spawn EPERM`，因此依赖安装使用了 `npm ci --ignore-scripts`。在正常开发/部署环境应直接使用：

```bash
npm ci
npm run build
npm run seo:check
```

---

## 3. 第三阶段技术 SEO 验收结果

审计命令：

```bash
npm run build
npm run seo:audit
npm run seo:site-audit
# 或一次执行
npm run seo:check
```

### 3.1 关键词覆盖

`dist/seo-keyword-coverage.csv`：

| 指标 | 结果 |
|---|---|
| 已登记中文页面 | 30 |
| 已生成中文页面 | 30 |
| 页面文件未找到 | 0 |
| 未覆盖主关键词 | 0 |
| Title / H1 目标未匹配 | 0 |
| 重复分配主关键词 | 0 |
| 未登记中文页面 | 0 |

其中 28 个页面为「当前检查通过」，2 个法律页面为「不设商业关键词」。审计退出码为 0。

### 3.2 技术 SEO

`dist/seo-site-audit.csv`：

| 检查项 | 结果 |
|---|---|
| 检查页面数 | 151（不含根路径兜底页和 Google 验证文件） |
| Sitemap URL | 150 |
| Canonical 不一致 | 0 |
| 内部死链 | 0 |
| hreflang 指向不存在页面 | 0 |
| JSON-LD 解析失败 | 0 |
| 重复 Title | 0 |
| Sitemap 中不存在的页面 | 0 |
| Sitemap 包含 404 | 否 |
| Sitemap 包含根路径 | 否 |
| 根路径 canonical | `https://sheerherb.cn/zh/` |
| 描述长度警告 | 2（英文首页 251 字符、日文喜来芝页 29 字符） |

技术审计退出码为 0。两条描述长度警告不影响结构和索引，属于非中文页面的后续优化项。

### 3.3 逐项检查表

| 检查项 | 实现方式 | 结果 |
|---|---|---|
| Title | 每页独立；`seo.ts` 与关键词表一致；自动追加品牌后缀，已含 Sheerherb 的标题不重复追加 | 通过 |
| Meta Description | 30 个中文页面独立描述；非中文使用品牌文案回退 | 通过（2 条长度警告） |
| H1 | 每页 1 个；与关键词表 `h1Focus` 对齐 | 通过 |
| Canonical | `BaseLayout` 统一输出；根路径指向 `/zh/`；404 指向自身 | 通过 |
| Hreflang | 7 语言页面互链；文章只有 `zh-CN` + `x-default`；404 不输出 hreflang | 通过 |
| Sitemap | Astro Sitemap 生成，过滤根路径与 404 | 通过 |
| Robots.txt | 允许抓取，禁止 404，声明 sitemap | 通过 |
| 301 重定向 | `public/_redirects` 统一 `/` 和语言根路径；根路径兜底页 canonical 指向 `/zh/` | 通过（需在 Cloudflare Pages 验证线上行为） |
| 内部链接 | 首页、分类、产品、质量、文章、联系页互链；审计逐页检查 | 通过 |
| Schema | Organization、WebSite、BreadcrumbList、Article、FAQPage | 通过 |
| 移动端 | 390px 视口无横向溢出；固定询价条；导航可换行 | 通过 |
| 页面速度 | 无位图依赖；移除 Google Fonts 外链；CSS 打包；`public/_headers` 为 `/_astro/*` 设置一年 immutable 缓存；仅 GTM 为外部脚本 | 明显改善，仍需线上测速 |

---

## 4. 页面与关键词分工

| 页面 | 主要关键词方向 | 页面职责 |
|---|---|---|
| `/zh/` | 植物提取物供应商、功能性原料供应商 | 业务总定位与分流 |
| `/zh/products/` | 植物提取物和脂质体原料、功能性原料目录 | 产品目录导航 |
| `/zh/products/botanical-extracts/` | 植物提取物采购、植物提取物供应 | 植物提取物分类主题 |
| `/zh/products/liposomal-ingredients/` | 脂质体原料、脂质体原料采购 | 脂质体分类主题 |
| `/zh/products/custom-sourcing/` | 功能性原料定制寻源、原料定制采购 | 定制分类入口 |
| `/zh/custom-sourcing/` | 功能性原料寻源、原料供应商寻源服务 | 定制服务页 |
| 四个产品详情页 | 产品名 + 原料/采购 | 产品采购资料与询盘 |
| `/zh/quality/` | 原料COA、植物提取物质量文件 | 质量文件与批次核验 |
| `/zh/resources/` | 植物提取物采购指南、原料规格确认 | 知识中心 |
| 10 篇指南 | 各自长尾词 | 搜索入口与内链 |
| `/zh/contact/` | 植物提取物采购询价、功能性原料供应咨询 | 转化页 |

原则：首页不抢具体产品词；分类页不写成现货目录；产品页不虚构含量、纯度、MOQ、库存、认证或供货承诺。

---

## 5. 多语言与国内/国际站边界

- 中文 `/zh/` 做深度采购内容、质量文件和知识中心。
- 英文、德文、日文、西班牙文、俄文、意大利文保留原有页面结构和品牌文案，本轮不做机器翻译式复制。
- 中文文章只生成中文路由，hreflang 不指向不存在的其他语言文章。
- 非中文页面 Title 增加本地化后缀，避免不同语言共用同一英文标题。
- 国际站 `sheerherb.com` 仍应作为独立项目规划，不与国内站互相复制正文。

---

## 6. 上线前必须完成

1. **执行 Supabase 迁移**：在 Supabase SQL Editor 运行更新后的 `supabase/inquiries.sql`，确认 `specification`、`application`、`documents`、`source_page`、`inquiry_type` 字段存在。
2. **测试询盘**：在预览环境提交一条真实测试询盘，确认写入成功、`consent=true`、字段完整；测试成功/失败提示。
3. **配置 GTM/GA4**：在 GTM 中为 `inquiry_start`、`inquiry_submit_success`、`product_view`、`contact_click` 建立 GA4 事件标签，并把 `inquiry_submit_success` 标记为转化。源码推送 dataLayer 不等于 GA4 已自动配置。
4. **部署**：Cloudflare Pages 构建命令 `npm run build`，输出目录 `dist`；确认 `_redirects` 生效，`/` 返回 301 到 `/zh/`。
5. **检查线上 URL**：首页、三个分类页、四个产品页、质量页、知识中心、10 篇文章、联系页、隐私政策、法律声明。
6. **提交 sitemap**：Google Search Console 和百度搜索资源平台提交 `https://sheerherb.cn/sitemap-index.xml`。
7. **检查抓取**：用 GSC URL 检查、百度抓取诊断检查中文首页、分类页、产品页和文章页。
8. **确认 404**：访问不存在的 URL，确认返回 404 页面且为 noindex。
9. **移动端复测**：真机检查产品页固定询价条是否遮挡表单按钮，必要时调整 `body` 底部留白。
10. **备份**：部署前保留当前源码包和 Supabase 数据导出。

---

## 7. 验收证据

### 7.1 命令结果

```
npm run build
→ 152 page(s) built in 2.42s
→ Complete!

node scripts/seo-keyword-audit.mjs
→ 30 个已登记页面 / 30 个已生成中文页面
→ 未覆盖的主关键词：0
→ Title/H1 未匹配：0
→ 重复主关键词：0
→ 未登记页面：0
→ exit 0

node scripts/seo-site-audit.mjs
→ 151 个页面，150 个 sitemap URL
→ Canonical 不一致：0
→ 内部死链：0
→ hreflang 错误：0
→ JSON-LD 解析失败：0
→ 重复 Title：0
→ sitemap 死链：0
→ exit 0

npm run seo:check
→ exit 0
```

### 7.2 截图

最终构建截图位于 `docs/preview/`：

- `home-desktop.jpg`：中文首页桌面端全页
- `home-mobile.jpg`：中文首页移动端上部
- `article-desktop.jpg`：COA 指南桌面端
- `resources-desktop.jpg`：采购知识中心
- `product-mobile.jpg`：产品页移动端首屏（含固定询价条）
- `contact-mobile.jpg`：联系页移动端

### 7.3 关键产物

- `dist/sitemap-index.xml`、`dist/sitemap-0.xml`
- `dist/seo-keyword-coverage.csv`
- `dist/seo-site-audit.csv`
- `SEO-关键词管理表.xlsx`
- `scripts/seo-keyword-audit.mjs`
- `scripts/seo-site-audit.mjs`
- `scripts/build_keyword_workbook.py`

---

## 8. 已知限制

- 未执行生产部署，未验证 Cloudflare Pages 的 `_redirects`、缓存和 301 线上行为。
- 未连接生产 Supabase，未执行真实询盘写入测试。
- 未在 GTM 后台创建事件标签和转化，源码只负责推送 dataLayer。
- 没有真实 COA/TDS/SDS 样例、检测报告、实验室或包装图片，页面未添加这些素材，也未编造。
- 未获得真实产品含量、纯度、MOQ、库存、认证和供货能力资料，页面统一采用「按项目确认」表达。
- 非中文页面内容未做全面重写，仅修正结构、hreflang 和标题重复问题。
- 关键词是策略初稿，未接入百度指数、Google Keyword Planner 或真实询盘数据。
- 不承诺固定排名、收录时间或流量增长。
- GTM 仍依赖 `googletagmanager.com`，国内访问可能较慢或被拦截；后续可评估百度统计或国内 CDN 方案，但需保持现有 GA4 数据连续性。

---

## 9. 下一阶段建议

### 第 1—2 周

- 完成 Supabase 迁移、表单测试和 GTM/GA4 事件配置。
- 部署到 Cloudflare Pages 预览环境，逐页检查 301、Canonical、404 和 sitemap。
- 提交 GSC 与百度搜索资源平台。

### 第 3—4 周

- 发布第一批 10 篇文章后，观察收录和展现。
- 补充真实产品资料：规格书、脱敏 COA 样例、TDS 样例、包装图片。
- 为 4 个重点产品各补 2—3 篇应用型文章。

### 第 2 个月

- 根据 GSC/百度展现和点击，调整 Title、Description 和内链。
- 对「有流量无询盘」页面做 CTA 和表单检查。
- 对「有询盘无成交」询盘做来源和需求质量分析。

### 第 3 个月

- 复盘哪些产品页和文章带来有效询盘。
- 决定下一批产品页和知识文章投入。
- 评估是否启动国际站 `sheerherb.com` 的独立内容规划。

更细的选题和发布节奏见 `SEO-CONTENT-ROADMAP.md`；上线操作见 `SEO-LAUNCH-CHECKLIST.md`。
