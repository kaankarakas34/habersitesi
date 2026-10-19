import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const storagePath = path.join(root, 'data/storage.json');
const data = JSON.parse(fs.readFileSync(storagePath, 'utf8'));
const pack = fs.readFileSync(path.join(root, 'data/content-packs/2026-10-12-radar.md'), 'utf8').replace(/\r/g, '');
const earlierPack = fs.readFileSync(path.join(root, 'data/content-packs/2026-10-05-radar.md'), 'utf8');
const previousSlugs = [...earlierPack.matchAll(/\*\*Slug:\*\* `([^`]+)`/g)].map(match => match[1]);
if (previousSlugs.length !== 9 || previousSlugs.some(slug => !data.articles.some(article => article.slug === slug))) {
  throw new Error('Önceki paketteki 9 yazının tamamı depoda bulunmalıdır.');
}

const escape = value => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
function inline(value) {
  return escape(value)
    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}
function render(markdown) {
  return markdown.trim().split(/\n\s*\n/).map(block => {
    if (/^#{1,3} /.test(block)) {
      const match = block.match(/^(#{1,3}) (.*)$/s);
      const level = Math.min(3, Math.max(2, match[1].length));
      return `<h${level}>${inline(match[2])}</h${level}>`;
    }
    if (block.startsWith('> ')) return `<blockquote>${inline(block.replace(/^> /gm, ''))}</blockquote>`;
    if (block.startsWith('- ')) return `<ul>${block.split('\n').map(line => `<li>${inline(line.replace(/^- /, ''))}</li>`).join('')}</ul>`;
    return `<p>${inline(block.replace(/\n/g, ' '))}</p>`;
  }).join('\n');
}
function sources(markdown) {
  const found = [...markdown.matchAll(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g)].map(([, name, url]) => ({
    name, url, isOfficial: /(^|\.)(saglik\.gov\.tr|ushas\.gov\.tr|healthturkiye\.gov\.tr|resmigazete\.gov\.tr)$/.test(new URL(url).hostname),
  }));
  return found.filter((source, index) => found.findIndex(item => item.url === source.url) === index);
}

const definitions = [
  ['saglik-turizmi-yetki-belgesi-listeleri-5-ekim-2026', 'mevzuat', 'Türkiye'],
  ['34-ozel-hastane-lisansi-13-ekim-2026-artirmasi', 'gundem', 'Türkiye'],
  ['kamu-saglik-hizmetleri-fiyat-tarifesi-5-ekim-duyurusu', 'mevzuat', 'Türkiye'],
  ['ushas-muayenehaneler-dernegi-6-ekim-2026-gorusmesi', 'gundem', 'Türkiye'],
  ['mersin-irak-hasta-yonlendirme-protokolu', 'pazarlar', 'Irak'],
  ['ktu-farabi-robotik-urolojik-cerrahi-trabzon', 'teknoloji', 'Türkiye'],
  ['samsun-ikiztepe-saglik-zirvesi-15-18-ekim-2026', 'etkinlikler', 'Türkiye'],
  ['tayland-450-baht-ziyaretci-ucreti-sigorta-taslagi', 'dunya', 'Tayland'],
  ['sarawak-saglik-turizmi-konaklama-doga-modeli', 'dunya', 'Malezya'],
  ['laos-183-ruhsatsiz-estetik-merkezi-denetim', 'dunya', 'Laos'],
  ['vietnam-nutifood-geleneksel-tip-hastanesi-is-birligi', 'dunya', 'Vietnam'],
];
const sections = [...pack.matchAll(/^### (\d+)\) ([^\n]+)\n([\s\S]*?)(?=^### |^## |$(?![\s\S]))/gm)];
if (sections.length !== definitions.length) throw new Error('Beklenen 11 haber bölümü bulunamadı.');
const publication = '2026-10-12T06:00:00.000Z';
const secondarySlugs = new Set([definitions[1][0], definitions[4][0], definitions[7][0], definitions[8][0]]);
function base(slug, title, spot, markdown, category, country) {
  const image = data.articles.find(article => article.category === category && article.featuredImage)?.featuredImage
    || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80';
  return {
    id: `art-radar-2026-10-12-${slug}`, slug, title, spot,
    content: render(markdown), category, contentType: 'haber', status: 'yayimlandi',
    authorId: 'editorial', publishedAt: publication, updatedAt: publication,
    readingTime: Math.max(1, Math.ceil(markdown.split(/\s+/).length / 200)),
    featuredImage: image, imageCaption: 'Temsili görsel.', imageSource: 'Unsplash',
    tags: ['Sağlık Turizmi', 'Haftalık Radar', '5–11 Ekim 2026', ...(country ? [country] : [])],
    ...(country ? { country, region: country === 'Türkiye' || country === 'Irak' ? 'Orta Doğu' : 'Asya' } : {}),
    sources: sources(markdown), seoTitle: title, seoDescription: spot.slice(0, 160),
    isHeadline: slug === definitions[0][0], isSecondaryHeadline: secondarySlugs.has(slug),
    isEditorPick: slug === definitions[0][0] || secondarySlugs.has(slug),
  };
}
const incoming = sections.map(([, number, heading, body]) => {
  const [slug, category, country] = definitions[Number(number) - 1];
  const title = body.match(/\*\*Yayınlanabilir açı:\*\* “([^”]+)”/)?.[1] || heading;
  const spot = body.match(/\*\*Ne oldu\?\*\* ([\s\S]*?)(?=\n\n)/)?.[1];
  if (!spot) throw new Error(`Spot bulunamadı: ${slug}`);
  const clean = body.replace(/^\*\*Yayınlanabilir açı:\*\* .*\n?/gm, '').trim();
  return base(slug, title, spot.replace(/\*\*/g, ''), `**Gündem:** ${heading}\n\n${clean}`, category, country);
});
const overview = pack.replace(/^---\n[\s\S]*?\n---\n/, '').split('## Haftanın öncelikli 8 konusu')[0]
  .replace(/^# Sağlık Turizmi Radarı \| 5–11 Ekim 2026\n/, '')
  .replace(/^\*\*Yayınlanabilir açı:\*\* .*\n?/gm, '');
incoming.push({
  ...base('saglik-turizmi-radari-5-11-ekim-2026', 'Sağlık Turizmi Radarı | 5–11 Ekim 2026',
    'Yetki listeleri, özel hastane lisans takvimi, Mersin–Irak iş birliği ve dünyadan sağlık turizmi gelişmeleri: haftanın kaynaklı özeti.',
    overview, 'analiz'), contentType: 'analiz',
});
let added = 0;
for (const article of incoming) {
  // Existing editorial edits are preserved on repeat imports.
  if (data.articles.some(existing => existing.slug === article.slug)) continue;
  if (article.isHeadline) data.articles.forEach(existing => { existing.isHeadline = false; });
  data.articles.push(article);
  added++;
}
if (added) {
  data.articles.filter(article => !incoming.some(item => item.slug === article.slug))
    .forEach(article => { article.isSecondaryHeadline = false; });
  fs.writeFileSync(storagePath, JSON.stringify(data, null, 2), 'utf8');
}
console.log(JSON.stringify({ added, alreadyPresentEarlierPack: previousSlugs.length, total: data.articles.length }));
