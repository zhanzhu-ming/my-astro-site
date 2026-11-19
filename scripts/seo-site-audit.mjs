import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * 构建后技术 SEO 审计。
 * 检查：Title、Description、H1、Canonical、hreflang、JSON-LD、内部链接、sitemap。
 * 只做工程一致性检查，不判断排名、搜索量或内容质量。
 */

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const site = 'https://sheerherb.cn';

if (!fs.existsSync(dist)) {
  console.error('未找到 dist/。请先运行 npm run build。');
  process.exit(2);
}

const walk = (dir) => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  return entries.flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
};

const allFiles = walk(dist);
const htmlFiles = allFiles.filter((file) => file.endsWith('.html'));
const fileSet = new Set(allFiles.map((file) => path.relative(dist, file).replace(/\\/g, '/')));

const fileForUrl = (rawUrl) => {
  let url;
  try {
    url = new URL(rawUrl, site);
  } catch {
    return null;
  }
  if (url.origin !== site) return { external: true };
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    pathname = url.pathname;
  }
  const clean = pathname.replace(/^\/+/, '');
  if (!clean) return 'index.html';
  const candidates = pathname.endsWith('/')
    ? [`${clean}index.html`]
    : [clean, `${clean}/index.html`, `${clean}.html`];
  return candidates.find((candidate) => fileSet.has(candidate)) || null;
};

const expectedCanonical = (relative) => {
  if (relative === 'index.html') return `${site}/zh/`;
  if (relative === '404.html') return `${site}/404.html`;
  if (relative.endsWith('/index.html')) return `${site}/${relative.slice(0, -'index.html'.length)}`;
  return `${site}/${relative}`;
};

const decodeEntities = (value) => value
  .replace(/&amp;/g, '&')
  .replace(/&quot;/g, '"')
  .replace(/&#39;|&apos;/g, "'")
  .replace(/&lt;/g, '<')
  .replace(/&gt;/g, '>')
  .replace(/&nbsp;/g, ' ');

const rows = [];
const issues = [];
const warnings = [];
const titles = new Map();
let missingLinks = 0;
let badHreflang = 0;
let badJsonLd = 0;
let canonicalMismatch = 0;

for (const file of htmlFiles) {
  const relative = path.relative(dist, file).replace(/\\/g, '/');
  if (relative === 'index.html') continue; // 根路径是重定向兜底页，单独检查
  if (/^google[0-9a-f]+\.html$/i.test(relative)) continue; // Google/百度站点验证文件
  const html = fs.readFileSync(file, 'utf8');
  const title = decodeEntities((html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] || '').trim());
  const description = decodeEntities((html.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/i)?.[1] || '').trim());
  const canonical = (html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i)?.[1] || '').trim();
  const lang = (html.match(/<html[^>]*lang="([^"]*)"/i)?.[1] || '').trim();
  const robots = (html.match(/<meta[^>]*name="robots"[^>]*content="([^"]*)"/i)?.[1] || '').trim();
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((match) => decodeEntities(match[1].replace(/<[^>]+>/g, '').trim()));
  const expected = expectedCanonical(relative);

  const links = [...html.matchAll(/<a\b[^>]*href="([^"]*)"/gi)].map((match) => decodeEntities(match[1]));
  const localLinks = links.filter((href) => href.startsWith('/') || href.startsWith(site));
  const broken = localLinks.filter((href) => {
    if (href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return false;
    const target = fileForUrl(href);
    return target === null;
  });
  missingLinks += broken.length;

  const hreflangs = [...html.matchAll(/<link[^>]*rel="alternate"[^>]*hreflang="([^"]*)"[^>]*href="([^"]*)"/gi)].map((match) => ({ code: match[1], href: match[2] }));
  const brokenHreflang = hreflangs.filter((item) => {
    const target = fileForUrl(item.href);
    return target === null;
  });
  badHreflang += brokenHreflang.length;

  const jsonLdScripts = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((match) => match[1]);
  const invalidJsonLd = jsonLdScripts.filter((script) => {
    try {
      JSON.parse(script);
      return false;
    } catch {
      return true;
    }
  });
  badJsonLd += invalidJsonLd.length;

  const canonicalOk = canonical === expected;
  if (!canonicalOk) canonicalMismatch++;

  const titleKey = title.toLowerCase();
  if (!titles.has(titleKey)) titles.set(titleKey, []);
  titles.get(titleKey).push(relative);

  const problems = [];
  const warningParts = [];
  if (!title) problems.push('缺少 Title');
  if (!description) problems.push('缺少 Description');
  if (h1s.length !== 1) problems.push(`H1 数量为 ${h1s.length}`);
  if (!canonicalOk) problems.push(`Canonical 不一致：${canonical || '空'} ≠ ${expected}`);
  if (broken.length) problems.push(`内部死链 ${broken.length} 个`);
  if (brokenHreflang.length) problems.push(`hreflang 指向不存在页面 ${brokenHreflang.length} 个`);
  if (invalidJsonLd.length) problems.push(`JSON-LD 解析失败 ${invalidJsonLd.length} 个`);
  if (description && (description.length < 30 || description.length > 240)) warningParts.push(`Description 长度 ${description.length}`);
  if (robots.includes('noindex') && relative !== '404.html') problems.push('非 404 页面被 noindex');

  if (problems.length) issues.push({ relative, problems });
  if (warningParts.length) warnings.push({ relative, problems: warningParts });
  rows.push({
    url: `${site}/${relative.replace(/index\.html$/, '')}`,
    title,
    titleLength: title.length,
    descriptionLength: description.length,
    h1: h1s[0] || '',
    h1Count: h1s.length,
    canonical,
    canonicalOk: canonicalOk ? '是' : '否',
    lang,
    robots,
    hreflangCount: hreflangs.length,
    brokenLinks: broken.join(' | '),
    warning: warningParts.join('；'),
    status: problems.length ? '需要处理' : '通过',
  });
}

const duplicateTitles = [...titles.entries()].filter(([, files]) => files.length > 1);

const sitemapFiles = allFiles.filter((file) => /sitemap.*\.xml$/.test(file));
const sitemapUrls = [];
for (const file of sitemapFiles) {
  const xml = fs.readFileSync(file, 'utf8');
  for (const match of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) sitemapUrls.push(match[1].trim());
}
const sitemapPageUrls = sitemapUrls.filter((url) => !url.endsWith('.xml'));
const missingSitemapTargets = sitemapPageUrls.filter((url) => fileForUrl(url) === null);
const sitemapHas404 = sitemapPageUrls.some((url) => url.includes('/404'));
const sitemapHasRoot = sitemapPageUrls.includes(`${site}/`);

const rootHtml = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const rootCanonical = (rootHtml.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i)?.[1] || '').trim();

const csvEscape = (value = '') => `"${String(value).replace(/"/g, '""')}"`;
const headers = ['url', 'title', 'titleLength', 'descriptionLength', 'h1', 'h1Count', 'canonical', 'canonicalOk', 'lang', 'robots', 'hreflangCount', 'brokenLinks', 'warning', 'status'];
const csv = [headers.join(','), ...rows.map((row) => headers.map((key) => csvEscape(row[key] || '')).join(','))].join('\n');
const outputPath = path.join(dist, 'seo-site-audit.csv');
fs.writeFileSync(outputPath, `\uFEFF${csv}`, 'utf8');

console.log(`技术 SEO 审计：${rows.length} 个页面，${sitemapPageUrls.length} 个 sitemap URL`);
console.log(`Canonical 不一致：${canonicalMismatch}`);
console.log(`内部死链：${missingLinks}`);
console.log(`hreflang 指向不存在页面：${badHreflang}`);
console.log(`JSON-LD 解析失败：${badJsonLd}`);
console.log(`重复 Title：${duplicateTitles.length}`);
console.log(`sitemap 中不存在的页面：${missingSitemapTargets.length}`);
console.log(`sitemap 是否包含 404：${sitemapHas404 ? '是（错误）' : '否'}`);
console.log(`sitemap 是否包含根路径：${sitemapHasRoot ? '是（错误）' : '否'}`);
console.log(`根路径兜底页 canonical：${rootCanonical || '空'}`);
console.log(`描述长度警告：${warnings.length}`);
for (const [title, files] of duplicateTitles) console.log(`重复标题：${title} => ${files.join(', ')}`);
for (const url of missingSitemapTargets) console.log(`sitemap 死链：${url}`);
for (const issue of issues) console.log(`问题\t${issue.relative}\t${issue.problems.join('；')}`);
for (const warning of warnings) console.log(`警告\t${warning.relative}\t${warning.problems.join('；')}`);
console.log(`报告已输出：${outputPath}`);

if (
  canonicalMismatch > 0 ||
  missingLinks > 0 ||
  badHreflang > 0 ||
  badJsonLd > 0 ||
  missingSitemapTargets.length > 0 ||
  sitemapHas404 ||
  sitemapHasRoot ||
  rootCanonical !== `${site}/zh/` ||
  issues.length > 0
) {
  process.exitCode = 1;
}
