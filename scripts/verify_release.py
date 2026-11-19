"""发布包自检：检查源码 zip、dist zip、HTML 关键内容与 Excel。"""

from __future__ import annotations

import glob
import re
import sys
import zipfile

from openpyxl import load_workbook

sys.stdout.reconfigure(encoding="utf-8")

SOURCE = "sheerherb-cn-seo-phase4-source.zip"
DIST = "sheerherb-cn-site-dist.zip"


def main() -> None:
    source = zipfile.ZipFile(SOURCE)
    dist = zipfile.ZipFile(DIST)
    source_names = source.namelist()
    dist_names = dist.namelist()

    required_source = [
        "package.json",
        "astro.config.mjs",
        "src/layouts/BaseLayout.astro",
        "src/pages/[lang]/resources/[slug].astro",
        "src/data/guides.ts",
        "SEO-关键词管理表.xlsx",
        "SEO-IMPLEMENTATION-REPORT.md",
        "scripts/seo-site-audit.mjs",
        "supabase/inquiries.sql",
    ]
    required_dist = [
        "dist/zh/index.html",
        "dist/zh/resources/how-to-read-botanical-extract-coa/index.html",
        "dist/sitemap-0.xml",
        "dist/_redirects",
        "dist/_headers",
        "dist/404.html",
    ]

    print("source files:", len(source_names))
    print("source required missing:", [name for name in required_source if name not in source_names])
    print("source bad dirs:", [name for name in source_names if name.startswith(("node_modules", "dist/", ".astro", ".shots", ".tools"))])
    print("dist files:", len(dist_names))
    print("dist required missing:", [name for name in required_dist if name not in dist_names])
    print("dist html files:", len([name for name in dist_names if name.endswith(".html")]))

    sitemap = dist.read("dist/sitemap-0.xml").decode("utf-8")
    print("sitemap urls:", len(re.findall(r"<loc>", sitemap)))

    home = dist.read("dist/zh/index.html").decode("utf-8")
    h1 = re.search(r"<h1[^>]*>(.*?)</h1>", home, re.S)
    print("home h1:", re.sub(r"<[^>]+>", "", h1.group(1)) if h1 else "MISSING")
    print("google fonts in home:", "fonts.googleapis" in home)

    contact = dist.read("dist/zh/contact/index.html").decode("utf-8")
    fields = ["specification", "application", "documents", "source_page", "inquiry_type"]
    print("form fields:", {field: f'name="{field}"' in contact for field in fields})

    not_found = dist.read("dist/404.html").decode("utf-8")
    print("404 noindex:", "noindex" in not_found)

    workbook_path = glob.glob("SEO-*.xlsx")[0]
    workbook = load_workbook(workbook_path)
    print("xlsx sheets:", workbook.sheetnames)
    print("xlsx keyword rows:", workbook["关键词总表"].max_row - 1)
    print("xlsx guide rows:", workbook["采购指南规划"].max_row - 1)


if __name__ == "__main__":
    main()
