import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sheerherb.cn",
  output: "static",
  trailingSlash: "always",
  integrations: [
    sitemap({
      // 根路径是 301 兜底页，404 不应进入 sitemap。
      filter: (page) => page !== "https://sheerherb.cn/" && !page.includes("/404"),
    }),
  ],
});
