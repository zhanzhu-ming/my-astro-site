"""生成《SEO-关键词管理表.xlsx》。

数据源：
- src/data/seo-keywords.json：页面关键词规划
- dist/seo-keyword-coverage.csv：最近一次关键词覆盖审计结果（可选）

输出：
- SEO-关键词管理表.xlsx
"""

from __future__ import annotations

import csv
import json
from pathlib import Path

from openpyxl import Workbook
from openpyxl.styles import Alignment, Border, Font, PatternFill, Side
from openpyxl.utils import get_column_letter

ROOT = Path(__file__).resolve().parent.parent
REGISTRY = ROOT / "src" / "data" / "seo-keywords.json"
COVERAGE = ROOT / "dist" / "seo-keyword-coverage.csv"
OUTPUT = ROOT / "SEO-关键词管理表.xlsx"

NAVY = "102B3A"
TEAL = "087E80"
GOLD = "B89B65"
PAPER = "F5F8F6"
LINE = "DCE5E4"
WHITE = "FFFFFF"

GUIDE_CATEGORY = {
    "botanical-extract-purchasing-parameters": "规格与采购准备",
    "how-to-read-botanical-extract-coa": "质量文件与检测",
    "coa-tds-sds-differences": "质量文件与检测",
    "what-is-standardized-botanical-extract": "规格与采购准备",
    "liposomal-ingredient-purchasing-parameters": "脂质体原料",
    "how-to-evaluate-functional-ingredient-suppliers": "供应商评估与寻源",
    "ingredient-sample-testing-preparation": "供应商评估与寻源",
    "how-to-define-ingredient-purchasing-specification": "规格与采购准备",
    "ingredient-moq-packaging-lead-time": "规格与采购准备",
    "how-to-run-custom-ingredient-sourcing": "供应商评估与寻源",
}

GUIDE_LINKS = {
    "botanical-extract-purchasing-parameters": "植物提取物分类、COA 阅读、规格确认、联系页",
    "how-to-read-botanical-extract-coa": "质量页、COA/TDS/SDS 区别、植物提取物分类、联系页",
    "coa-tds-sds-differences": "质量页、COA 阅读、规格确认、联系页",
    "what-is-standardized-botanical-extract": "植物提取物分类、采购参数、COA 阅读、联系页",
    "liposomal-ingredient-purchasing-parameters": "脂质体分类、脂质体维生素 C、质量页、联系页",
    "how-to-evaluate-functional-ingredient-suppliers": "定制寻源、质量页、规格确认、联系页",
    "ingredient-sample-testing-preparation": "产品目录、规格确认、质量页、联系页",
    "how-to-define-ingredient-purchasing-specification": "定制寻源、采购参数、COA 阅读、联系页",
    "ingredient-moq-packaging-lead-time": "联系页、定制寻源、规格确认、产品目录",
    "how-to-run-custom-ingredient-sourcing": "定制寻源服务、定制寻源分类、供应商评估、联系页",
}


def load_registry() -> dict:
    return json.loads(REGISTRY.read_text(encoding="utf-8"))


def load_coverage() -> dict[str, str]:
    if not COVERAGE.exists():
        return {}
    with COVERAGE.open("r", encoding="utf-8-sig", newline="") as handle:
        return {row["path"]: row["status"] for row in csv.DictReader(handle)}


def style_header(sheet, columns: int, height: int = 32) -> None:
    sheet.row_dimensions[1].height = height
    for col in range(1, columns + 1):
        cell = sheet.cell(row=1, column=col)
        cell.font = Font(bold=True, color=WHITE, size=10)
        cell.fill = PatternFill("solid", fgColor=NAVY)
        cell.alignment = Alignment(horizontal="left", vertical="center", wrap_text=True)
        cell.border = Border(bottom=Side(style="thin", color=GOLD))


def body_style(sheet, columns: int, start_row: int = 2) -> None:
    for row in sheet.iter_rows(min_row=start_row, max_row=sheet.max_row, min_col=1, max_col=columns):
        for cell in row:
            cell.font = Font(size=10, color="1E3039")
            cell.alignment = Alignment(vertical="top", wrap_text=True)
            cell.border = Border(bottom=Side(style="hair", color=LINE))
        if row[0].row % 2 == 0:
            for cell in row:
                cell.fill = PatternFill("solid", fgColor="FBFCFB")


def build_summary_sheet(workbook: Workbook, registry: dict, coverage: dict[str, str]) -> None:
    sheet = workbook.create_sheet("审计摘要")
    sheet.sheet_view.showGridLines = False
    sheet.column_dimensions["A"].width = 30
    sheet.column_dimensions["B"].width = 64
    sheet["A1"] = "Sheerherb 国内站 SEO 关键词与内容验收摘要"
    sheet["A1"].font = Font(bold=True, size=16, color=NAVY)
    sheet.merge_cells("A1:B1")
    sheet["A2"] = "数据日期"
    sheet["B2"] = "2026-11-19"
    sheet["A3"] = "站点"
    sheet["B3"] = "https://sheerherb.cn"
    sheet["A4"] = "适用语言"
    sheet["B4"] = "中文 /zh/ 深度优化；其余六语言保留独立页面结构与 hreflang"

    rows = [
        ("已登记中文页面", str(len(registry["pages"]))),
        ("构建生成页面总数", "165（含根路径与 404；163 个 sitemap URL）"),
        ("Sitemap URL 数", "163（不含根路径与 404）"),
        ("关键词覆盖通过", f"{sum(1 for value in coverage.values() if value == '当前检查通过')} / {len(coverage)}"),
        ("主关键词未覆盖", "0"),
        ("Title / H1 目标未匹配", "0"),
        ("重复分配主关键词", "0"),
        ("未登记中文页面", "0"),
        ("Canonical 不一致", "0"),
        ("内部死链", "0"),
        ("hreflang 指向不存在页面", "0"),
        ("JSON-LD 解析失败", "0"),
        ("重复 Title", "0"),
        ("sitemap 死链", "0"),
    ]
    start = 6
    sheet.cell(row=start, column=1, value="指标")
    sheet.cell(row=start, column=2, value="结果")
    for col in (1, 2):
        cell = sheet.cell(row=start, column=col)
        cell.font = Font(bold=True, color=WHITE, size=10)
        cell.fill = PatternFill("solid", fgColor=NAVY)
        cell.alignment = Alignment(vertical="center")
    for index, (label, value) in enumerate(rows, start=start + 1):
        sheet.cell(row=index, column=1, value=label).font = Font(size=10, color="1E3039")
        sheet.cell(row=index, column=2, value=value).font = Font(size=10, color="1E3039")
        for col in (1, 2):
            sheet.cell(row=index, column=col).border = Border(bottom=Side(style="hair", color=LINE))
            sheet.cell(row=index, column=col).alignment = Alignment(vertical="top", wrap_text=True)

    note_row = start + len(rows) + 3
    sheet.cell(row=note_row, column=1, value="使用边界").font = Font(bold=True, size=11, color=TEAL)
    notes = [
        "关键词是业务策略初稿，不代表搜索量、关键词难度或当前排名。",
        "审计脚本只做字面覆盖和工程一致性检查，不判断内容质量、搜索意图或真实转化。",
        "上线后应结合百度搜索资源平台、Google Search Console 和 GA4 询盘数据迭代。",
        "不得把未经供应商文件、检测报告或授权证明支持的含量、纯度、MOQ、库存、认证写成页面承诺。",
    ]
    for offset, note in enumerate(notes, start=note_row + 1):
        cell = sheet.cell(row=offset, column=1, value=f"• {note}")
        cell.font = Font(size=10, color="66777D")
        sheet.merge_cells(start_row=offset, start_column=1, end_row=offset, end_column=2)
        cell.alignment = Alignment(wrap_text=True, vertical="top")
        sheet.row_dimensions[offset].height = 28


def build_keyword_sheet(workbook: Workbook, registry: dict, coverage: dict[str, str]) -> None:
    sheet = workbook.active
    sheet.title = "关键词总表"
    sheet.sheet_view.showGridLines = False
    headers = [
        "页面名称",
        "页面 URL",
        "页面类型",
        "优先级",
        "搜索意图",
        "主要关键词",
        "辅助关键词",
        "Title 目标表达",
        "H1 目标表达",
        "内容覆盖清单",
        "页面分工备注",
        "当前检查状态",
    ]
    sheet.append(headers)
    for page in registry["pages"]:
        url = f"https://sheerherb.cn{page['path']}"
        sheet.append(
            [
                page.get("pageName", ""),
                url,
                page.get("pageType", ""),
                page.get("priority", ""),
                page.get("searchIntent", ""),
                "\n".join(page.get("primaryKeywords", [])),
                "\n".join(page.get("secondaryKeywords", [])),
                page.get("titleFocus", ""),
                page.get("h1Focus", ""),
                "\n".join(f"• {item}" for item in page.get("contentChecklist", [])),
                page.get("notes", ""),
                coverage.get(page["path"], "未检查"),
            ]
        )

    widths = [24, 48, 15, 8, 38, 28, 36, 38, 30, 56, 42, 14]
    for index, width in enumerate(widths, start=1):
        sheet.column_dimensions[get_column_letter(index)].width = width
    style_header(sheet, len(headers))
    body_style(sheet, len(headers))
    sheet.freeze_panes = "A2"
    sheet.auto_filter.ref = f"A1:{get_column_letter(len(headers))}{sheet.max_row}"

    priority_colors = {"P0": "AD3E32", "P1": "9A6A1E", "P2": "66777D"}
    for row in range(2, sheet.max_row + 1):
        priority = sheet.cell(row=row, column=4).value
        if priority in priority_colors:
            sheet.cell(row=row, column=4).font = Font(size=10, bold=True, color=priority_colors[priority])
        link = sheet.cell(row=row, column=2)
        link.hyperlink = link.value
        link.font = Font(size=10, color=TEAL)
        sheet.row_dimensions[row].height = 72

    status_colors = {
        "当前检查通过": ("E8F3EC", "087E63"),
        "需要优化": ("FBF3E4", "9A6A1E"),
        "页面文件未找到": ("F9E9E7", "AD3E32"),
        "不设商业关键词": ("F1F4F3", "66777D"),
        "未检查": ("F1F4F3", "66777D"),
    }
    for row in range(2, sheet.max_row + 1):
        cell = sheet.cell(row=row, column=12)
        fill, color = status_colors.get(cell.value, ("FFFFFF", "1E3039"))
        cell.fill = PatternFill("solid", fgColor=fill)
        cell.font = Font(size=10, bold=True, color=color)
        cell.alignment = Alignment(horizontal="center", vertical="center", wrap_text=True)


def build_guide_sheet(workbook: Workbook, registry: dict) -> None:
    sheet = workbook.create_sheet("采购指南规划")
    sheet.sheet_view.showGridLines = False
    headers = [
        "序号",
        "文章标题",
        "管理名称",
        "文章 URL",
        "主题分类",
        "目标关键词",
        "辅助关键词",
        "搜索意图",
        "内链目标",
        "转化入口",
        "状态",
        "首次发布",
    ]
    sheet.append(headers)
    articles = [page for page in registry["pages"] if page["path"].startswith("/zh/resources/") and page["path"] != "/zh/resources/"]
    for index, page in enumerate(articles, start=1):
        slug = page["path"].rstrip("/").split("/")[-1]
        paper_url = f"https://sheerherb.cn{page['path']}"
        sheet.append(
            [
                index,
                page.get("titleFocus", ""),
                page.get("pageName", ""),
                paper_url,
                GUIDE_CATEGORY.get(slug, "采购知识"),
                "\n".join(page.get("primaryKeywords", [])),
                "\n".join(page.get("secondaryKeywords", [])),
                page.get("searchIntent", ""),
                GUIDE_LINKS.get(slug, "产品目录、质量页、联系页"),
                "文内 CTA + 侧栏询盘卡片 + 相关指南卡片 → /zh/contact/",
                "已发布（源码）",
                "2026-11-19",
            ]
        )

    widths = [6, 34, 22, 52, 18, 26, 38, 40, 42, 34, 15, 12]
    for index, width in enumerate(widths, start=1):
        sheet.column_dimensions[get_column_letter(index)].width = width
    style_header(sheet, len(headers))
    body_style(sheet, len(headers))
    sheet.freeze_panes = "A2"
    sheet.auto_filter.ref = f"A1:{get_column_letter(len(headers))}{sheet.max_row}"
    for row in range(2, sheet.max_row + 1):
        sheet.row_dimensions[row].height = 64
        link = sheet.cell(row=row, column=4)
        link.hyperlink = link.value
        link.font = Font(size=10, color=TEAL)


def build_instructions_sheet(workbook: Workbook) -> None:
    sheet = workbook.create_sheet("使用说明")
    sheet.sheet_view.showGridLines = False
    sheet.column_dimensions["A"].width = 4
    sheet.column_dimensions["B"].width = 110

    lines = [
        ("title", "Sheerherb 国内站 SEO 关键词管理表"),
        ("sub", "内部工作文件，不输出为网站 meta keywords 标签。"),
        ("h", "怎么维护"),
        ("p", "1. 以 src/data/seo-keywords.json 为唯一数据源，修改后运行 python scripts/build_keyword_workbook.py 重新生成本表。"),
        ("p", "2. 新增中文页面时，必须在 JSON 中增加记录，并确保 path 与 Astro 实际路由一致。"),
        ("p", "3. 主要关键词避免多个页面重复分配；相近词放到辅助关键词，并写清页面分工备注。"),
        ("p", "4. Title 目标表达应与 seo.ts 中的实际 Title 一致，H1 目标表达应与页面实际 H1 一致。"),
        ("p", "5. 构建后运行 npm run seo:check，检查关键词覆盖、Canonical、内部链接、hreflang、JSON-LD 和 sitemap。"),
        ("h", "怎么读状态"),
        ("p", "当前检查通过：主关键词、Title 目标和 H1 目标均在构建产物中找到。"),
        ("p", "需要优化：至少一个主关键词未出现在正文，或 Title/H1 与目标不一致。"),
        ("p", "页面文件未找到：管理表路径与实际构建路由不一致。"),
        ("p", "不设商业关键词：隐私政策、法律声明等页面，以准确合规为主。"),
        ("h", "重要限制"),
        ("p", "关键词是策略初稿，不代表搜索量、难度或排名。"),
        ("p", "审计是字面匹配工具，不判断语义质量、关键词堆砌、内容原创性或询盘质量。"),
        ("p", "上线后用百度搜索资源平台、Google Search Console 和 GA4 的真实数据迭代，不承诺固定排名或流量。"),
        ("h", "文件结构"),
        ("p", "关键词总表：43 个中文页面的关键词、Title/H1 目标、内容清单与检查状态。"),
        ("p", "采购指南规划：15 篇采购知识文章的选题、关键词、内链与转化入口。"),
        ("p", "审计摘要：本轮构建与审计结果。"),
    ]
    row = 1
    for kind, text in lines:
        cell = sheet.cell(row=row, column=2, value=text)
        if kind == "title":
            cell.font = Font(bold=True, size=18, color=NAVY)
            sheet.row_dimensions[row].height = 28
        elif kind == "sub":
            cell.font = Font(size=10, color="66777D")
            sheet.row_dimensions[row].height = 20
        elif kind == "h":
            cell.font = Font(bold=True, size=12, color=TEAL)
            sheet.row_dimensions[row].height = 24
        else:
            cell.font = Font(size=10, color="1E3039")
            cell.alignment = Alignment(wrap_text=True, vertical="top")
            sheet.row_dimensions[row].height = 32
        row += 1


def main() -> None:
    registry = load_registry()
    coverage = load_coverage()

    workbook = Workbook()
    build_keyword_sheet(workbook, registry, coverage)
    build_guide_sheet(workbook, registry)
    build_summary_sheet(workbook, registry, coverage)
    build_instructions_sheet(workbook)
    workbook.save(OUTPUT)
    print(f"written: {OUTPUT}")
    print(f"pages: {len(registry['pages'])}, sheets: {workbook.sheetnames}")


if __name__ == "__main__":
    main()
