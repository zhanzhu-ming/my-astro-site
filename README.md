# Sheerherb.cn — Astro 官网项目

本项目用于 `https://sheerherb.cn`，中文为默认入口，并保留七种语言路径（zh / en / de / ja / es / ru / it）。

## 本次调整内容

- 品牌名称统一为 **Sheerherb**，替换原项目中的 Chengyan Bio / 澄研生物展示。
- 首页改为围绕活性物质载体系统、微球技术、纳米脂质体技术、企业核心目标和产品展示。
- 产品展示对齐国际站可查到的产品方向：Liposomal Vitamin C Powder、Urolithin A、Shilajit Resin、Berberine HCl。
- 增加上述四个产品的七语言详情页入口。
- 关于我们页面采用国际站介绍的企业定位和五项核心目标。
- 联系方式更新为国际站公开列出的 `sales@sheerherb.com`、`+86 19591570368` 和西安办公地址。
- 保留 GTM 容器 `GTM-ND9Z73J6`、询盘 Supabase 提交逻辑及成功事件 `inquiry_submit_success`。
- 保留 `sheerherb.cn` canonical、七语言 hreflang 和语言选择器。

## 本地运行

Windows PowerShell 中进入项目目录：

```powershell
npm.cmd install
npm.cmd run dev
```

打开 `http://localhost:4321/`。根路径默认进入中文首页 `/zh/`。

构建：

```powershell
npm.cmd run build
```

生成文件位于 `dist/`。

## Supabase 询盘配置

项目保留现有询盘提交代码。请确认部署环境已设置：

```env
PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
PUBLIC_SUPABASE_ANON_KEY=YOUR_PUBLIC_ANON_OR_PUBLISHABLE_KEY
```

可参考 `.env.example`。不要把 Supabase `service_role` 或任何私密密钥放进前端或 `PUBLIC_` 环境变量。请在 Supabase 中启用合适的 RLS 策略，并先测试询盘是否成功写入 `inquiries` 表。

## GTM / GA4

- GTM 容器：`GTM-ND9Z73J6`
- 表单成功事件：`inquiry_submit_success`

事件只在 Supabase 返回成功后推送。不要向 GA4 发送姓名、邮箱、电话、公司名称或表单自由文本等个人信息。

## 发布前检查

1. 核对国际站与国内站使用的企业名称、电话、邮箱、地址是否仍然一致。
2. 核对四个产品是否仍在售，以及产品规格、检测方法、包装和 MOQ。页面未擅自写入未核实的具体参数。
3. 对七种语言逐页校对；本版本提供了首页、产品、技术与企业介绍的多语言文案，联系表单及部分旧内容仍建议人工复核。
4. 运行 `npm.cmd run build`，再在 Cloudflare 预览环境检查移动端、语言切换、询盘和 GTM。
5. 正式发布前请审阅隐私政策、法律声明与产品合规文案。

## 安全说明

压缩包刻意不包含原始 `.env`、`.git` 历史、`.astro` 缓存和 `node_modules`。请勿把原始 `.env` 或私钥提交到公开仓库。
