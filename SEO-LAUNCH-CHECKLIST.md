# Sheerherb 国内站上线与监测清单

本清单用于把当前源码版本部署到 `https://sheerherb.cn`，并完成搜索平台、询盘和统计的验收。

## 0. 上线前冻结

- [ ] 确认本次要发布的 commit 或源码包版本。
- [ ] 导出当前 Supabase `inquiries` 表数据备份。
- [ ] 记录当前线上 sitemap、robots.txt 和首页 301 行为。
- [ ] 确认 Cloudflare Pages 项目、域名和 DNS 权限。
- [ ] 确认 GTM 容器 `GTM-ND9Z73J6` 和 GA4 数据流可访问。

## 1. 本地/预览环境

```bash
npm ci
npm run build
npm run seo:check
```

- [ ] `npm run build` 输出 165 个页面，无错误。
- [ ] `npm run seo:audit` 退出码 0，主词缺失 0。
- [ ] `npm run seo:site-audit` 退出码 0，Canonical/死链/hreflang/JSON-LD 均为 0。
- [ ] 检查 `dist/_redirects`、`dist/robots.txt`、`dist/sitemap-index.xml` 存在。
- [ ] 用 `npx serve dist` 或预览环境打开首页、分类页、产品页、文章页、联系页。

## 2. Supabase 迁移

在 Supabase SQL Editor 运行 `supabase/inquiries.sql`，确认：

- [ ] `inquiries` 表存在。
- [ ] 新增字段存在：`specification`、`application`、`documents`、`source_page`、`inquiry_type`。
- [ ] RLS 开启。
- [ ] 匿名用户只有 insert 权限，不能 select/update/delete。
- [ ] `consent = true` 且必填字段长度符合约束。

## 3. 表单与事件测试

在预览环境提交 2 条测试询盘：

- [ ] 只填必填项可以提交。
- [ ] 填写选填项后，Supabase 对应字段有值。
- [ ] 从产品页 CTA 进入，`interest` 自动预填，`source_page` 和 `inquiry_type` 有值。
- [ ] 提交成功后页面显示成功提示，表单重置。
- [ ] 提交失败时显示错误提示，不丢失用户输入（如需可后续增强）。
- [ ] Supabase 中能看到测试记录，`consent=true`。
- [ ] GTM Preview 中能看到 `inquiry_start`、`inquiry_submit_success`。
- [ ] GA4 DebugView 中能看到事件及参数 `inquiry_type`、`product_name`、`source_page`。
- [ ] 在 GTM 中把 `inquiry_submit_success` 标记为转化。
- [ ] 测试蜜罐字段：填写隐藏字段后提交被拒绝。

## 4. 部署

Cloudflare Pages 配置：

- [ ] 构建命令：`npm run build`
- [ ] 输出目录：`dist`
- [ ] Node 版本：20 或 22 LTS（与 Astro 5 兼容；本机验收使用 Node 26）。
- [ ] 环境变量：`PUBLIC_SUPABASE_URL`、`PUBLIC_SUPABASE_ANON_KEY`（如使用构建期变量）。
- [ ] 不要在浏览器代码中使用 `service_role` 或 secret key。
- [ ] 首次部署先用预览域名验证，不直接切生产。

部署后检查：

- [ ] `/` 返回 301 到 `/zh/`。
- [ ] `/zh/`、`/zh/products/`、三个分类页、4 个重点产品页、`/zh/quality/`、`/zh/resources/`、15 篇文章、`/zh/contact/` 均 200。
- [ ] 不存在的 URL 返回 404，页面为 noindex。
- [ ] `https://sheerherb.cn/robots.txt` 内容正确。
- [ ] `https://sheerherb.cn/sitemap-index.xml` 可访问，子 sitemap 包含 163 个 URL。
- [ ] 页面 HTML 中 Canonical、hreflang 与预览一致。
- [ ] 移动端真机检查：导航、产品固定询价条、表单、文章目录。
- [ ] PageSpeed Insights / Lighthouse 移动端跑一次，记录 LCP、CLS、INP。

## 5. 搜索平台

### Google Search Console

- [ ] 添加并验证 `sheerherb.cn` 资源（HTML 文件或 DNS）。
- [ ] 提交 `https://sheerherb.cn/sitemap-index.xml`。
- [ ] URL 检查：首页、植物提取物分类、脂质体分类、4 个产品页、质量页、知识中心、3 篇文章。
- [ ] 检查“网页已编入索引”与“已发现但未编入索引”的差异。
- [ ] 设置 GA4 关联（如尚未关联）。

### 百度搜索资源平台

- [ ] 添加站点并完成验证。
- [ ] 提交 sitemap。
- [ ] 使用“抓取诊断”检查首页、分类页、产品页、文章页。
- [ ] 检查 robots.txt 是否可访问。
- [ ] 关注“索引量”“抓取异常”“移动适配”报告。
- [ ] 如有旧 URL，提交改版规则或 301 规则。

## 6. 统计与转化

- [ ] GA4 中确认 `page_view` 正常。
- [ ] 确认 `product_view` 带 `product_name`、`product_slug`。
- [ ] 确认 `contact_click` 区分 email/phone/whatsapp。
- [ ] 确认 `inquiry_start` 和 `inquiry_submit_success` 事件量。
- [ ] 建立至少 3 个受众/探索：产品页访客、文章访客、提交询盘访客。
- [ ] 建立询盘来源报表：`inquiry_type` × `source_page` × `product_name`。
- [ ] 明确“有效询盘”的人工判定标准（公司、需求、数量、市场、联系方式完整）。
- [ ] 注意：GTM/GA4 依赖 Google 域名，国内访问可能不稳定；评估是否需要百度统计作为补充，但不破坏现有 GA4 数据。

## 7. 上线后 90 天

### 第 1—2 周

- [ ] 完成部署、301、sitemap、GSC/百度提交。
- [ ] 修复抓取异常和 404。
- [ ] 确认表单和事件无报错。

### 第 3—4 周

- [ ] 观察首页、分类页、产品页、文章页的收录。
- [ ] 检查 Title/Description 在搜索结果中的展示。
- [ ] 发布第 2 批 2 篇文章。
- [ ] 记录基线：收录数、展现、点击、CTR、询盘数。

### 第 2 个月

- [ ] 按展现和点击调整 Title/Description。
- [ ] 对高流量低转化页面补 CTA、内链和表单预填。
- [ ] 对高转化文章补充同主题内容。
- [ ] 清理 90 天无展现、无内链、无询盘的低质量页面。

### 第 3 个月

- [ ] 复盘产品页和文章带来的有效询盘。
- [ ] 决定下一批产品页和文章投入。
- [ ] 评估国际站 `sheerherb.com` 的独立规划。
- [ ] 更新关键词表和内容路线图。

## 8. 回滚

- [ ] 保留上一版 Cloudflare Pages 部署，可一键回滚。
- [ ] 保留上一版源码包和 `dist`。
- [ ] Supabase 字段升级为增量 `add column if not exists`，回滚代码不会删除字段。
- [ ] 如表单新字段导致提交失败，可先回滚代码，再排查数据库字段和 RLS。

## 9. 不要做的事

- 不要为了关键词堆砌隐藏文字、伪造 FAQ 或批量生成无供应证据的产品页。
- 不要把未经证实的认证、工厂、库存、MOQ、含量、纯度写成页面承诺。
- 不要用机器翻译批量复制中文文章到其他语言。
- 不要把 `service_role` key 放进前端或公开仓库。
- 不要承诺固定排名、收录时间或流量增长。


## 页面规划更新（2026-11-20）

以 `docs/Sheerherb-页面级规划执行版.md` 为准：核心产品页为脂质体维生素 C、尿石素 A、喜来芝树脂和盐酸小檗碱。旧版额外脂质体 SKU 页面与 `/zh/capabilities/` 不再作为当前发布路由。
