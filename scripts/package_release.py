"""打包源码和构建产物。

输出：
- sheerherb-cn-seo-phase4-source.zip
- sheerherb-cn-site-dist.zip

不包含 node_modules、dist、.astro、临时截图和浏览器配置。
"""

from __future__ import annotations

import os
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCE_ZIP = ROOT / "sheerherb-cn-seo-phase4-source.zip"
DIST_ZIP = ROOT / "sheerherb-cn-site-dist.zip"

SOURCE_EXCLUDE_DIRS = {
    "node_modules",
    "dist",
    ".astro",
    ".git",
    ".shots",
    ".tools",
    ".chrome-profile",
    ".chrome-profile-cdp",
    "__pycache__",
}
SOURCE_EXCLUDE_FILES = {".DS_Store", "Thumbs.db", "*.log"}


def should_skip(relative: Path) -> bool:
    parts = set(relative.parts)
    if parts & SOURCE_EXCLUDE_DIRS:
        return True
    if any(part.startswith(".chrome-profile") or part.startswith(".shots") for part in relative.parts):
        return True
    if relative.name in SOURCE_EXCLUDE_FILES:
        return True
    if relative.name.startswith("sheerherb-cn-") and relative.name.endswith(".zip"):
        return True
    return False


def add_tree(zip_file: zipfile.ZipFile, base: Path, prefix: str = "") -> int:
    count = 0
    for path in sorted(base.rglob("*")):
        if path.is_dir():
            continue
        relative = path.relative_to(base)
        if prefix == "" and should_skip(relative):
            continue
        arcname = f"{prefix}/{relative.as_posix()}" if prefix else relative.as_posix()
        zip_file.write(path, arcname)
        count += 1
    return count


def main() -> None:
    with zipfile.ZipFile(SOURCE_ZIP, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        count = add_tree(archive, ROOT)
    with zipfile.ZipFile(DIST_ZIP, "w", zipfile.ZIP_DEFLATED, compresslevel=9) as archive:
        dist_count = add_tree(archive, ROOT / "dist", "dist")

    print(f"source: {SOURCE_ZIP.name} ({SOURCE_ZIP.stat().st_size / 1024:.1f} KB, {count} files)")
    print(f"dist:   {DIST_ZIP.name} ({DIST_ZIP.stat().st_size / 1024:.1f} KB, {dist_count} files)")


if __name__ == "__main__":
    main()
