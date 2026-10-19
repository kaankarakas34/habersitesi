import fs from 'node:fs/promises';

const origin = process.env.AUDIT_URL || 'http://localhost:3000';
const site = 'https://www.saglikturizmiradari.com';
const storage = JSON.parse(await fs.readFile(new URL('../data/storage.json', import.meta.url), 'utf8'));
const articles = storage.articles.filter(a => ['published', 'yayimlandi'].includes(a.status)).sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
const failures = [];
const assert = (condition, message) => { if (!condition) failures.push(message); };
const samples = ['/', '/hakkimizda', '/yazarlar', '/yazar-ol', '/etkinlikler', '/yayin-ilkeleri', ...['gundem','dunya','mevzuat','pazarlar','pazarlama','teknoloji','analiz','roportaj','arastirma'].map(c => `/kategori/${c}`), `/haber/${articles[0].slug}`, `/yazar/${storage.authors[0].slug}`];
const results = [];
for (const path of samples) {
  const response = await fetch(`${origin}${path}`, { headers: { 'user-agent': 'Googlebot' } });
  const html = await response.text();
  const title = html.match(/<title>(.*?)<\/title>/s)?.[1];
  const canonical = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"/)?.[1];
  const description = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/)?.[1];
  const h1Count = (html.match(/<h1(?:\s|>)/g) || []).length;
  assert(response.status === 200, `${path}: HTTP ${response.status}`);
  assert(Boolean(title && description), `${path}: missing title/description`);
  assert(canonical === `${site}${path === '/' ? '' : path}`, `${path}: canonical ${canonical}`);
  assert(h1Count === 1, `${path}: ${h1Count} h1 elements`);
  for (const [, json] of html.matchAll(/<script type="application\/ld\+json">(.*?)<\/script>/gs)) {
    try { JSON.parse(json); } catch { failures.push(`${path}: invalid JSON-LD`); }
  }
  results.push({ path, status: response.status, title, canonical, h1Count });
  if (path === '/') {
    const dates = [...html.matchAll(/data-published-at="([^"]+)"/g)].map(m => Date.parse(m[1]));
    assert(dates.length === Math.min(11, articles.length), 'Homepage: missing chronological cards');
    assert(dates.every((d, i) => i === 0 || dates[i - 1] >= d), 'Homepage: news out of order');
    assert(dates[0] === Date.parse(articles[0].publishedAt), 'Homepage: lead is not newest');
  }
}
const sitemap = await (await fetch(`${origin}/sitemap.xml`)).text();
const locations = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert(locations.length === new Set(locations).size, 'Sitemap: duplicate URLs');
assert(!locations.some(url => /\/(arastirma|rehber|mevzuat|rapor)\//.test(url)), 'Sitemap: noncanonical aliases');
assert(articles.every(a => locations.includes(`${site}/haber/${a.slug}`)), 'Sitemap: missing published articles');
for (const path of ['/arama?q=mevzuat', '/admin/login']) {
  const html = await (await fetch(`${origin}${path}`)).text();
  assert(/name="robots" content="[^"]*noindex/.test(html), `${path}: missing noindex`);
}
assert((await fetch(`${origin}/haber/bulunamayan-haber-seo-kontrol`)).status === 404, 'Unknown article should return 404');
for (const path of ['/radar-logo.svg', '/sosyal-gorsel']) {
  const response = await fetch(`${origin}${path}`);
  assert(response.ok && /image\//.test(response.headers.get('content-type') || ''), `${path}: missing image`);
}
const robots = await (await fetch(`${origin}/robots.txt`)).text();
assert(robots.includes(`${site}/sitemap.xml`) && robots.includes('/admin/'), 'robots.txt: missing sitemap/admin rule');
assert(new Set(articles.map(a => a.slug)).size === articles.length, 'Content: duplicate slugs');
assert(articles.every(a => Number.isFinite(Date.parse(a.publishedAt))), 'Content: invalid publication date');
const shortArticles = articles.filter(a => a.content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length < 150).map(a => ({ slug: a.slug, title: a.title }));
const report = { origin, checkedAt: new Date().toISOString(), publishedArticles: articles.length, sitemapUrls: locations.length, samplePages: results, shortArticlesForEditorialReview: shortArticles, failures };
await fs.mkdir('output', { recursive: true });
await fs.writeFile('output/seo-audit.json', JSON.stringify(report, null, 2));
console.log(JSON.stringify({ samplePages: results.length, publishedArticles: articles.length, sitemapUrls: locations.length, shortArticles: shortArticles.length, failures }, null, 2));
if (failures.length) process.exitCode = 1;
