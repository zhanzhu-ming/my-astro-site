# Sheerherb 国内站 SEO 源码优化报告

## 本次范围
- 源码基准：用户指定的 `my-astro-site(1).zip`
- 目标站点：`https://sheerherb.cn/`
- 重点语言：中文 `/zh/`
- 未执行线上部署；未修改 Supabase 数据库结构、GTM 容器 ID 或 Supabase 提交端点。

## 已实施的源码修改

### 1. 中文首页定位
- 将首页文案从以“微球与纳米脂质体技术研发”为主的表达，调整为企业采购导向的植物提取物、脂质体相关原料及功能性原料供应对接。
- 首页补充“按原料类别浏览”入口，链接到脂质体相关原料、植物提取物和定制寻源分类页。
- 首页主要 CTA 调整为采购需求提交。

### 2. 分类页
- 新增/补齐以下中文分类页的独立内容：
  - `/zh/products/liposomal-ingredients/`
  - `/zh/products/botanical-extracts/`
  - `/zh/products/custom-sourcing/`
- 每页包含分类介绍、采购规格确认点、文件/样品说明及相关产品内链。
- 不承诺未经核实的库存、认证、规格或供货能力。

### 3. 产品详情页
- 为脂质体维生素 C 粉末、尿石素 A、喜来芝树脂、盐酸小檗碱补充采购型内容模块。
- 页面覆盖规格、质量文件、样品、包装、采购数量、供货确认和采购常见问题。
- 未凭空添加含量、纯度、MOQ、认证、检测结果或库存数据。

### 4. 技术 SEO
- 新增 `src/data/seo.ts`，为中文首页、产品目录、分类页、四个重点产品页、关于、质量和联系页面配置独立 Title / Description。
- `BaseLayout.astro` 统一输出 Canonical、hreflang、x-default、robots、Open Graph、Twitter Card。
- 增加 Organization、WebSite、BreadcrumbList JSON-LD。
- `public/robots.txt` 指向 sitemap index。
- `public/_redirects` 将根路径 `/` 301 到 `/zh/`，统一中文首页入口。
- Astro Sitemap 配置排除根路径重复首页。

### 5. 询盘与事件追踪
- 保留原 Supabase 表单提交流程和成功事件 `inquiry_submit_success`。
- 新增 `inquiry_start`（开始填写）、`product_view`（产品页访问）、`contact_click`（邮件/电话点击）。
- 产品页 CTA 通过 URL 参数预填联系表单的产品/原料字段。
- 联系页邮箱和电话改为可点击链接。
- 保留原 GTM 容器 `GTM-ND9Z73J6`。

## 核心关键词与页面分配

| 页面 | 关键词方向 |
|---|---|
| `/zh/` | 植物提取物供应合作、脂质体原料供应、功能性原料 |
| `/zh/products/` | 植物提取物、脂质体相关原料、功能性原料目录 |
| `/zh/products/botanical-extracts/` | 植物提取物供应、植物提取物采购 |
| `/zh/products/liposomal-ingredients/` | 脂质体相关原料、磷脂原料采购 |
| `/zh/products/custom-sourcing/` | 功能性原料定制寻源、原料采购协作 |
| 四个产品详情页 | 各自产品名 + 原料采购/供应/询价 |
| `/zh/quality/` | COA、TDS、SDS、原料质量文件 |

## 构建与验证状态
- 已通过全局 TypeScript 对数据模块的独立类型检查。
- 已抽取 Astro 页面 frontmatter 并通过 TypeScript 语法/类型检查。
- **完整 `astro build` 尚未通过验证**：当前工作容器 Node 为 `v22.16.0`，而锁文件中的 sitemap 依赖链要求更新的 Node 22 版本；两次依赖安装尝试均超时，未能安装完整依赖。请在 Node 22.22.1 或符合锁文件 engines 的环境执行 `npm ci` 后再执行 `npm run build`。
- 本报告不将 TypeScript 检查表述为 Astro 完整构建成功。

## 上线前必须完成
1. 在 Node 22.22.1+ 环境执行 `npm ci` 和 `npm run build`。
2. 检查生成的 `dist/sitemap-index.xml` 与 sitemap 子文件，确认只列出规范 URL。
3. 测试 `/` 是否 301 到 `/zh/`，并确认所有分类/产品链接无 404。
4. 在 Cloudflare Pages 部署预览环境测试 Supabase 询盘提交及 GTM 事件。
5. 发布后在 Google Search Console 与百度搜索资源平台提交 sitemap，并检查首页、分类页、产品页的抓取与收录。
6. 在 GTM 中创建/确认上述自定义事件的 GA4 事件映射；源码推送 dataLayer 事件不代表 GA4 已自动配置转化。

## 注意事项
- 本次只改国内站中文定位和全站通用 SEO 输出；七语言路由仍保留，非中文页面文案未进行全面翻译重写。
- 联系表单预填只处理 `interest` 参数，不把 URL 参数直接写入数据库之外的任何地方。
- 搜索排名和询盘增长无法由源码修改保证，需要结合 Search Console、百度站长平台和 GA4 数据持续优化。
