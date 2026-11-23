# Sheerherb 中文站内容升级说明

## 已完成
- 新增中文研发与工艺页：`/zh/rd-process/`
- 新增国内采购 FAQ：`/zh/faq/`，脂质体、植物提取物、功能性原料各 10 条，共 30 条
- 新增 `/llms.txt`
- 新增重点产品独立详情页：
  - `/zh/products/liposomal-vitamin-c/`
  - `/zh/products/urolithin-a/`
  - `/zh/products/shilajit-resin/`
  - `/zh/products/berberine-hcl/`
- 中文产品目录页改为读取完整中文产品数据
- 产品详情页增加 CAS、采购规格、检测项目、质量文件、包装/MOQ 状态、询价及样品申请入口
- 增加 Product JSON-LD；保留 Organization、WebSite、BreadcrumbList、Article 与 FAQPage 数据
- 质量内容增加 HPLC/UPLC、UV-Vis、ICP-MS/AAS、农残、微生物及第三方报告核验说明
- 联系页保留已公开商务联系方式，并为企业微信二维码设置待补充提示

## 信息核验边界
- 国际站公开的维生素 C 脂质体粉末规格 50%、80% 作为参考信息展示，不作为批次保证。
- 尿石素 A CAS 1143-70-0；盐酸小檗碱 CAS 633-65-8；维生素 C CAS 50-81-7。
- 喜来芝为天然复杂混合物，不填写单一统一 CAS。
- 产品实拍图目前未取得可核实的产品批次图片，页面保留明确标注的图片位置，不用示意图冒充实拍图。
- MOQ、包装、样品费用/政策、13% 增值税专票、库存、交期和各产品批次规格均设置为项目核实，不作统一承诺。
- 认证信息仅作为国际站合作工厂公开披露的线索，实际证书持有人、地址、范围和有效期需逐项核验；不表述为 Sheerherb 自有工厂资质。

## 验证状态
- 已对 `src/data/zh-products.ts`、`src/data/site.ts`、`src/data/quality.ts`、`src/data/zh-page-plan.ts` 执行 TypeScript 静态检查。
- Astro 完整构建未能在当前环境完成：安装依赖时 npm registry 网络请求出现 `EAI_AGAIN`，因此 `astro build` 命令不可用。部署前请在可访问 npm registry 的环境执行 `npm ci && npm run build`。
