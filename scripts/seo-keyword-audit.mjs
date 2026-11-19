import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const mapPath = path.join(root, 'src/data/seo-keywords.json');
const distPath = path.join(root, 'dist');
const registry = JSON.parse(fs.readFileSync(mapPath, 'utf8'));

if (!fs.existsSync(distPath)) {
  console.error('未找到 dist/。请先运行 npm run build。');
  process.exit(2);
}

const normalize = (value) => value
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;|&#160;/gi, ' ')
  .replace(/&amp;/gi, '&')
  .replace(/&quot;/gi, '"')
  .replace(/&#39;|&apos;/gi, "'")
  .replace(/\s+/g, ' ')
  .toLowerCase();

const rows = [];
let missingPages = 0;
let missingPrimary = 0;

for (const page of registry.pages) {
  const relative = page.path === '/zh/' ? 'zh/index.html' : `${page.path.replace(/^\//, '')}index.html`;
  const filePath = path.join(distPath, relative);
  if (!fs.existsSync(filePath)) {
    missingPages++;
    rows.push({ path: page.path, pageName: page.pageName, status: '页面文件未找到', primary: '', title: '', h1: '' });
    continue;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  const title = (html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/<[^>]+>/g, '').trim();
  const h1 = (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || '').replace(/<[^>]+>/g, '').trim();
  const bodyHtml = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || html;
  const mainHtml = bodyHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i)?.[1] || bodyHtml;
  const text = normalize(mainHtml);
  const titleText = normalize(title);
  const h1Text = normalize(h1);
  const titleFocusFound = !page.titleFocus || titleText.includes(page.titleFocus.toLowerCase());
  const h1FocusFound = !page.h1Focus || h1Text.includes(page.h1Focus.toLowerCase());
  const primaryChecks = page.primaryKeywords.map((keyword) => ({ keyword, found: text.includes(keyword.toLowerCase()) }));
  const absent = primaryChecks.filter((item) => !item.found).map((item) => item.keyword);
  missingPrimary += absent.length;
  rows.push({
    path: page.path,
    pageName: page.pageName,
    status: absent.length || !titleFocusFound || !h1FocusFound ? '需要优化' : page.primaryKeywords.length ? '当前检查通过' : '不设商业关键词',
    primary: page.primaryKeywords.join('；'),
    missing: absent.join('；'),
    titleFocus: page.titleFocus || '',
    titleFocusFound: titleFocusFound ? '是' : '否',
    h1Focus: page.h1Focus || '',
    h1FocusFound: h1FocusFound ? '是' : '否',
    title,
    h1
  });
}

const csvEscape = (value = '') => `"${String(value).replace(/"/g, '""')}"`;
const headers = ['path', 'pageName', 'status', 'primary', 'missing', 'titleFocus', 'titleFocusFound', 'h1Focus', 'h1FocusFound', 'title', 'h1'];
const csv = [headers.join(','), ...rows.map((row) => headers.map((key) => csvEscape(row[key] || '')).join(','))].join('\n');
const outputPath = path.join(root, 'dist/seo-keyword-coverage.csv');
fs.writeFileSync(outputPath, `\uFEFF${csv}`, 'utf8');

const primaryOwners = new Map();
for (const page of registry.pages) {
  for (const keyword of page.primaryKeywords) {
    const owners = primaryOwners.get(keyword) || [];
    owners.push(page.path);
    primaryOwners.set(keyword, owners);
  }
}
const duplicatedPrimary = [...primaryOwners.entries()].filter(([, owners]) => owners.length > 1);

// 反向覆盖：dist/zh 下所有 index.html 都应该在关键词表登记，
// 防止新增页面忘记进入关键词管理与内链体系。
const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
};
const zhHtmlFiles = fs.existsSync(path.join(distPath, 'zh'))
  ? walk(path.join(distPath, 'zh')).filter((file) => file.endsWith('index.html'))
  : [];
const registeredPaths = new Set(registry.pages.map((page) => page.path));
const builtPaths = zhHtmlFiles.map((file) => {
  const relative = path.relative(distPath, file).replace(/\\/g, '/');
  return `/${relative.replace(/index\.html$/, '')}`;
});
const unregistered = builtPaths.filter((url) => !registeredPaths.has(url));

console.log(`SEO 关键词覆盖检查：${rows.length} 个已登记页面 / ${builtPaths.length} 个已生成中文页面`);
console.log(`未找到页面文件：${missingPages}`);
console.log(`未覆盖的主关键词数量：${missingPrimary}`);
console.log(`标题或 H1 目标未匹配页面：${rows.filter((row) => row.titleFocusFound === '否' || row.h1FocusFound === '否').length}`);
console.log(`重复分配的主关键词：${duplicatedPrimary.length}`);
console.log(`未登记的中文页面：${unregistered.length}`);
for (const [keyword, owners] of duplicatedPrimary) console.log(`主关键词重复：${keyword} => ${owners.join(', ')}`);
for (const url of unregistered) console.log(`未登记页面：${url}`);
for (const row of rows) {
  console.log(`${row.status}\t${row.path}\t主词缺失：${row.missing || '无'}\tTitle目标：${row.titleFocusFound ?? '-'}\tH1目标：${row.h1FocusFound ?? '-'}`);
}
console.log(`报告已输出：${outputPath}`);
if (missingPages > 0 || unregistered.length > 0) process.exitCode = 1;
