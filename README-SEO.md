# Sheerherb 国内站 SEO 关键词管理版

本版本基于上一轮交付的 `sheerherb-cn-seo-optimized-source.zip` 继续修改。

## 新增文件
- `src/data/seo-keywords.json`：按中文 URL 规划主要/辅助关键词、搜索意图、优先级、Title/H1 目标和内容检查清单。
- `scripts/seo-keyword-audit.mjs`：构建后检查关键词覆盖和页面路由。
- `SEO-KEYWORD-MANAGEMENT.md`：维护说明。
- `SEO-关键词管理表.xlsx`：可直接用 Excel 维护的页面关键词规划表。
- `SEO-IMPLEMENTATION-REPORT.md`：本轮完整实施记录。

## 使用方式

```bash
npm ci
npm run build
npm run seo:audit
```

审计 CSV 输出位置：`dist/seo-keyword-coverage.csv`。

注意：关键词管理表是内部工作数据，不会输出为 `meta keywords` 标签。关键词规划不是搜索量/排名数据，也不保证排名；上线后需结合百度搜索资源平台和 Google Search Console 校准。
