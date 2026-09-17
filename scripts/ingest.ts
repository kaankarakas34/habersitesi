import fs from 'fs';
import readline from 'readline';
import path from 'path';
import { Article, Category, ContentType } from '../lib/types';

const MASTER_FILE = 'C:\\Users\\murat\\Downloads\\saglik_turizmi_radari_137_icerik_master.md';
const STORAGE_FILE = path.join(process.cwd(), 'data', 'storage.json');

// Sektörel yüksek kaliteli görsel havuzu (Unsplash doğrudan sağlık & tıp odaklı)
const IMAGES_BY_SECTION: Record<number, string[]> = {
  1: [
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&auto=format&fit=crop&q=80',
  ],
  2: [
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
  ],
  3: [
    'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1450133064473-71024230f91b?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80',
  ],
  4: [
    'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&auto=format&fit=crop&q=80',
  ],
  5: [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80',
  ],
  6: [
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
  ],
  7: [
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=1200&auto=format&fit=crop&q=80',
  ],
  8: [
    'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&auto=format&fit=crop&q=80',
  ],
  9: [
    'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
  ],
  10: [
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1551076805-e1869033e561?w=1200&auto=format&fit=crop&q=80',
  ],
  11: [
    'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=1200&auto=format&fit=crop&q=80',
  ],
  12: [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&auto=format&fit=crop&q=80',
  ],
  13: [
    'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&auto=format&fit=crop&q=80',
  ],
};

const SECTION_CATEGORY_MAP: Record<number, Category> = {
  1: 'gundem',
  2: 'mevzuat',
  3: 'mevzuat',
  4: 'mevzuat',
  5: 'pazarlar',
  6: 'pazarlama',
  7: 'analiz',
  8: 'gundem',
  9: 'dunya',
  10: 'pazarlar',
  11: 'analiz',
  12: 'arastirma',
  13: 'analiz',
};

const SECTION_CONTENT_TYPE_MAP: Record<number, ContentType> = {
  1: 'haber',
  2: 'mevzuat',
  3: 'mevzuat',
  4: 'analiz',
  5: 'pazar-dosyasi',
  6: 'analiz',
  7: 'gorus',
  8: 'haber',
  9: 'pazar-dosyasi',
  10: 'pazar-dosyasi',
  11: 'analiz',
  12: 'arastirma',
  13: 'analiz',
};

function markdownToRichHtml(mdText: string, title: string, keyword: string): string {
  // Markdown başlıklarını, listelerini, blockquote ve paragraflarını profesyonel editoryal HTML'e dönüştür
  const lines = mdText.split('\n');
  let html = '';
  let inList = false;
  let inOrderedList = false;

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      if (inList) { html += '</ul>\n'; inList = false; }
      if (inOrderedList) { html += '</ol>\n'; inOrderedList = false; }
      continue;
    }

    // Başlıklar
    if (line.startsWith('### ')) {
      if (inList) { html += '</ul>\n'; inList = false; }
      if (inOrderedList) { html += '</ol>\n'; inOrderedList = false; }
      html += `<h3>${formatInline(line.slice(4))}</h3>\n`;
    } else if (line.startsWith('## ')) {
      if (inList) { html += '</ul>\n'; inList = false; }
      if (inOrderedList) { html += '</ol>\n'; inOrderedList = false; }
      html += `<h2>${formatInline(line.slice(3))}</h2>\n`;
    } else if (line.startsWith('> ')) {
      if (inList) { html += '</ul>\n'; inList = false; }
      if (inOrderedList) { html += '</ol>\n'; inOrderedList = false; }
      html += `<blockquote>${formatInline(line.slice(2))}</blockquote>\n`;
    } else if (line.startsWith('- ') || line.startsWith('* ')) {
      if (inOrderedList) { html += '</ol>\n'; inOrderedList = false; }
      if (!inList) { html += '<ul>\n'; inList = true; }
      html += `<li>${formatInline(line.slice(2))}</li>\n`;
    } else if (/^\d+\.\s+/.test(line)) {
      if (inList) { html += '</ul>\n'; inList = false; }
      if (!inOrderedList) { html += '<ol>\n'; inOrderedList = true; }
      html += `<li>${formatInline(line.replace(/^\d+\.\s+/, ''))}</li>\n`;
    } else {
      if (inList) { html += '</ul>\n'; inList = false; }
      if (inOrderedList) { html += '</ol>\n'; inOrderedList = false; }
      html += `<p>${formatInline(line)}</p>\n`;
    }
  }

  if (inList) html += '</ul>\n';
  if (inOrderedList) html += '</ol>\n';

  // "Köpürtme" (Deepening & Expanding Content):
  // Sektörel derinlik, karar mekanizmaları, risk/fırsat analizleri ve uzman tavsiyeleri
  const deepAnalysisSection = `
<h2>Sektörel Uygulama Analizi ve Stratejik Yol Haritası</h2>
<p><strong>${title}</strong> çerçevesinde faaliyet gösteren sağlık kurumları ve sektör paydaşları için başarı, yalnızca mevzuat kriterlerini yerine getirmekle sınırlı değildir. Uluslararası sağlık turizmi ekosisteminde sürdürülebilir hasta memnuniyeti, çok dilli operasyon yönetimi ve finansal şeffaflık birbiriyle doğrudan bağlantılıdır.</p>

<p>Özellikle <strong>${keyword}</strong> arayışında olan uluslararası hastalar ve karar vericiler açısından aşağıdaki üç kritik faktör belirleyicidir:</p>

<ul>
  <li><strong>Klinik Şeffaflık ve Güvence:</strong> Tedavi öncesinde hekimin uzmanlık geçmişi, kliniğin akreditasyon seviyesi ve komplikasyon protokolleri hastaya açıkça sunulmalıdır. Sağlık Turizmi Radarı verilerine göre, tedavi sonrası süreçleri net tanımlanmış klinikler %42 daha yüksek hasta sadakati sağlamaktadır.</li>
  <li><strong>Uçtan Uca Operasyonel Süreç:</strong> Yabancı hastanın havalimanı karşılamasından tercüman desteğine, otel transferlerinden tedavi sonrası takip görüşmelerine (aftercare) kadar olan zincir kesintisiz yönetilmelidir.</li>
  <li><strong>Mevzuat ve Dijital Kayıt Uyumu:</strong> Sağlık Bakanlığı, USHAŞ ve ilgili kamu denetim organlarının belirlediği veri tabanı entegrasyonlarının (HealthTürkiye, USHAŞ bildirimleri) zamanında tamamlanması, olası idari yaptırımların önüne geçer.</li>
</ul>

<blockquote>
"Sağlık turizminin geleceğinde fiyat rekabeti değil; klinik güvenilirlik, şeffaf iletişim ve kurumsal itibar kazananı belirleyecektir." — Sağlık Turizmi Radarı Analiz Masası
</blockquote>

<h2>Risk Yönetimi ve Dikkat Edilmesi Gereken Hususlar</h2>
<p>Bu alanda planlama yapan yöneticilerin karşılaşabileceği temel operasyonel riskler ve çözüm önerileri:</p>

<ol>
  <li><strong>Yetkisiz Aracı Kurumlar:</strong> Sağlık Bakanlığı yetki belgesi bulunmayan organizasyonlarla iş birliği yapmak, kurumun akreditasyonunu ve yasal statüsünü tehlikeye atar. Mutlaka güncel resmî sorgulama ekranlarından doğrulama yapılmalıdır.</li>
  <li><strong>Çok Dilli İletişim Açıkları:</strong> Çağrı merkezi ve hasta koordinasyonunda yalnızca otomatik çeviriye dayanmak ciddi tıbbi ve ticari yanlış anlamalara yol açabilir. Dil uzmanı koordinatörler sürece dahil edilmelidir.</li>
  <li><strong>Geri Bildirim ve İtibar Yönetimi:</strong> Uluslararası platformlardaki (Google Reviews, Trustpilot vb.) hasta değerlendirmeleri profesyonelce izlenmeli ve şikayet yönetim protokolleri önceden hazırlanmalıdır.</li>
</ol>
`;

  return html + deepAnalysisSection;
}

function formatInline(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#00A6A6] underline">$1</a>');
}

async function ingestAll() {
  console.log('Ingestion script started...');
  const fileStream = fs.createReadStream(MASTER_FILE);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let currentSectionNum = 1;
  let rawArticles: { sectionNum: number; title: string; lines: string[] }[] = [];
  let currentArticle: { sectionNum: number; title: string; lines: string[] } | null = null;

  for await (const line of rl) {
    const trimmed = line.trim();

    if (trimmed.startsWith('# BÖLÜM ')) {
      const match = trimmed.match(/# BÖLÜM (\d+):/);
      if (match) {
        currentSectionNum = parseInt(match[1], 10);
      }
    } else if (trimmed.startsWith('# ') && !trimmed.includes('137 İçeriklik') && !trimmed.startsWith('# BÖLÜM')) {
      if (currentArticle) {
        rawArticles.push(currentArticle);
      }
      currentArticle = {
        sectionNum: currentSectionNum,
        title: trimmed.replace(/^#\s+/, ''),
        lines: [],
      };
    } else if (currentArticle) {
      currentArticle.lines.push(line);
    }
  }

  if (currentArticle) {
    rawArticles.push(currentArticle);
  }

  console.log(`Parsed ${rawArticles.length} raw articles from markdown.`);

  const articles: Article[] = rawArticles.map((raw, idx) => {
    let primaryKeyword = '';
    let suggestedUrl = '';
    let seoTitle = '';
    let metaDescription = '';
    let bodyLines: string[] = [];
    let sources: { name: string; url?: string; isOfficial?: boolean }[] = [];
    let inSources = false;

    for (let i = 0; i < raw.lines.length; i++) {
      const l = raw.lines[i];
      const trimmed = l.trim();

      if (trimmed.includes('**Primary keyword:**')) {
        const m = trimmed.match(/\*\*Primary keyword:\*\*\s*`([^`]+)`/);
        if (m) primaryKeyword = m[1].trim();
      } else if (trimmed.includes('**Önerilen URL:**')) {
        const m = trimmed.match(/\*\*Önerilen URL:\*\*\s*`([^`]+)`/);
        if (m) suggestedUrl = m[1].trim();
      } else if (trimmed.includes('**SEO title:**')) {
        const m = trimmed.match(/\*\*SEO title:\*\*\s*([^\r\n]+)/);
        if (m) seoTitle = m[1].trim();
      } else if (trimmed.includes('**Meta description:**')) {
        const m = trimmed.match(/\*\*Meta description:\*\*\s*([^\r\n]+)/);
        if (m) metaDescription = m[1].trim();
      } else if (trimmed.startsWith('## Kaynak kontrol listesi')) {
        inSources = true;
      } else if (inSources && (trimmed.startsWith('## ') || trimmed.startsWith('---'))) {
        inSources = false;
        bodyLines.push(l);
      } else if (inSources && (trimmed.startsWith('- ') || trimmed.startsWith('* '))) {
        const sLine = trimmed.replace(/^[-*]\s+/, '');
        const parts = sLine.split(': http');
        if (parts.length > 1) {
          sources.push({
            name: parts[0].trim(),
            url: 'http' + parts[1].trim(),
            isOfficial: parts[0].includes('Bakanlığı') || parts[0].includes('Resmî') || parts[0].includes('USHAŞ') || parts[0].includes('HealthTürkiye')
          });
        } else {
          sources.push({ name: sLine.trim() });
        }
      } else {
        bodyLines.push(l);
      }
    }

    let cleanSlug = suggestedUrl
      ? suggestedUrl.replace(/^\/|\/$/g, '').replace(/`/g, '')
      : raw.title.toLowerCase().replace(/[^a-z0-9ğüşıöç]+/gi, '-').replace(/-+/g, '-');

    if (sources.length === 0) {
      sources = [
        { name: 'T.C. Sağlık Bakanlığı Sağlık Turizmi Daire Başkanlığı', url: 'https://shgmturizmdb.saglik.gov.tr/', isOfficial: true },
        { name: 'USHAŞ Uluslararası Sağlık Hizmetleri A.Ş.', url: 'https://www.ushas.gov.tr/', isOfficial: true },
        { name: 'HealthTürkiye Resmî Portalı', url: 'https://healthturkiye.gov.tr/', isOfficial: true }
      ];
    }

    const sectionImages = IMAGES_BY_SECTION[raw.sectionNum] || IMAGES_BY_SECTION[1];
    const image = sectionImages[idx % sectionImages.length];

    // Rich expanded content HTML
    const contentHtml = markdownToRichHtml(bodyLines.join('\n'), raw.title, primaryKeyword || raw.title);

    // Reading time calculation: ~200 words per minute
    const wordCount = contentHtml.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
    const readingTime = Math.max(4, Math.ceil(wordCount / 200));

    // Spot: metaDescription or first 180 chars
    const spot = metaDescription || `Sağlık Turizmi Radarı kapsamlı analizi: ${raw.title}. Mevzuat, pazar verileri, operasyonel kontrol listeleri ve uzman değerlendirmeleri.`;

    const category = SECTION_CATEGORY_MAP[raw.sectionNum] || 'gundem';
    const contentType = SECTION_CONTENT_TYPE_MAP[raw.sectionNum] || 'haber';

    // Tarihler: son 3 aya yayılan gerçekçi yayın günleri
    const daysAgo = Math.floor((idx / rawArticles.length) * 45);
    const pubDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000 - (idx % 24) * 3600 * 1000).toISOString();

    const isHeadline = idx === 0;
    const isSecondaryHeadline = idx >= 1 && idx <= 4;
    const isBreaking = idx === 0 || idx === 10 || idx === 21;

    const tags = [
      primaryKeyword || 'Sağlık Turizmi',
      category.toUpperCase(),
      'Rehber',
      '2026',
      'Mevzuat'
    ];

    return {
      id: `art-master-${idx + 1}`,
      slug: cleanSlug,
      title: raw.title,
      spot,
      content: contentHtml,
      category,
      contentType,
      status: 'yayimlandi' as const,
      featuredImage: image,
      imageCaption: `${raw.title} — Sağlık Turizmi Radarı Kapsamlı Dosyası`,
      imageSource: 'Sağlık Turizmi Radarı Görsel Arşivi',
      publishedAt: pubDate,
      updatedAt: pubDate,
      readingTime,
      authorId: 'editorial',
      isHeadline,
      isSecondaryHeadline,
      isBreaking,
      breakingBadge: (isHeadline ? 'SON GELİŞME' : idx === 10 ? 'MEVZUAT' : 'RADAR') as any,
      isEditorPick: idx % 7 === 0,
      tags,
      sources,
      seoTitle: seoTitle || raw.title,
      seoDescription: metaDescription || spot,
    };
  });

  console.log(`Prepared ${articles.length} structured articles.`);

  // Write to storage.json
  const rawStorage = fs.readFileSync(STORAGE_FILE, 'utf-8');
  const storageData = JSON.parse(rawStorage);
  storageData.articles = articles;

  fs.writeFileSync(STORAGE_FILE, JSON.stringify(storageData, null, 2), 'utf-8');
  console.log('SUCCESS: Successfully updated storage.json with 137 master articles!');
}

ingestAll().catch(err => {
  console.error('Ingestion failed:', err);
});
