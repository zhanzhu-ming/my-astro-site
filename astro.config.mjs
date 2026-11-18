import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://sheerherb.cn",
  output: "static",
  integrations: [sitemap()],
});
