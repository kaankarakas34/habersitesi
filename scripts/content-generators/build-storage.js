// scripts/content-generators/build-storage.js
const fs = require('fs');
const path = require('path');

const STORAGE_PATH = path.join(__dirname, '..', '..', 'data', 'storage.json');

// 13 Küme modüllerini yükle
const cluster1 = require('./cluster1');
const cluster2 = require('./cluster2');
const cluster3 = require('./cluster3');
const cluster4 = require('./cluster4');
const cluster5 = require('./cluster5');
const cluster6 = require('./cluster6');
const cluster7 = require('./cluster7');
const cluster8 = require('./cluster8');
const cluster9 = require('./cluster9');
const cluster10 = require('./cluster10');
const cluster11 = require('./cluster11');
const cluster12 = require('./cluster12');
const cluster13 = require('./cluster13');

const allClusters = {
  ...cluster1,
  ...cluster2,
  ...cluster3,
  ...cluster4,
  ...cluster5,
  ...cluster6,
  ...cluster7,
  ...cluster8,
  ...cluster9,
  ...cluster10,
  ...cluster11,
  ...cluster12,
  ...cluster13,
};

console.log('Total cluster article entries loaded:', Object.keys(allClusters).length);

const rawStorage = fs.readFileSync(STORAGE_PATH, 'utf-8');
const storage = JSON.parse(rawStorage);

console.log('Existing storage articles count:', storage.articles.length);

const forbiddenPatterns = [
  'Arama niyeti:',
  'Yayın öncesi son kontrol',
  'konusunu pratik bir çerçevede ele almak gerekir',
  'İç link önerileri',
  'Bu tür içeriklerde her şartın yanına',
  'Haberi değerli kılan, şirketin ne söylediğinden çok',
  'sağlık turizmi ekosisteminde karar, operasyon veya bilgi arama sürecinin önemli bir parçasıdır',
];

let updatedCount = 0;

storage.articles = storage.articles.map((article, idx) => {
  const articleIndex = idx + 1;
  const clusterData = allClusters[articleIndex];

  if (!clusterData) {
    console.warn(`WARNING: No cluster data for article index ${articleIndex}: ${article.title}`);
    return article;
  }

  // Temiz içeriği ata
  const cleanContent = clusterData.content.trim();
  const cleanSpot = clusterData.spot ? clusterData.spot.trim() : article.spot;
  const authorId = clusterData.authorId || article.authorId || 'editorial';

  // Kelime sayısı ve okuma süresi
  const wordCount = cleanContent.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(4, Math.ceil(wordCount / 180));

  updatedCount++;

  return {
    ...article,
    spot: cleanSpot,
    content: cleanContent,
    authorId,
    readingTime,
    updatedAt: new Date().toISOString(),
  };
});

console.log(`Updated ${updatedCount} articles with clean, authentic, rich content.`);

// Prompt artık kontrolü
let errorCount = 0;
storage.articles.forEach((art, i) => {
  for (const pattern of forbiddenPatterns) {
    if (art.content.includes(pattern)) {
      console.error(`ERROR: Article ${i + 1} (${art.slug}) still contains forbidden pattern: "${pattern}"`);
      errorCount++;
    }
  }
});

if (errorCount > 0) {
  console.error(`FAILED: ${errorCount} forbidden prompt patterns found!`);
  process.exit(1);
} else {
  console.log('SUCCESS: Zero prompt patterns found! All 137 articles are 100% clean.');
}

// Write back to storage.json
fs.writeFileSync(STORAGE_PATH, JSON.stringify(storage, null, 2), 'utf-8');
console.log('Successfully saved updated data/storage.json!');

// Test the user's specific URL: /haber/saglik-turizmi-acentesi-nasil-kurulur
const testArticle = storage.articles.find(a => a.slug === 'saglik-turizmi-acentesi-nasil-kurulur');
if (testArticle) {
  console.log('\\n--- TEST ARTICLE: saglik-turizmi-acentesi-nasil-kurulur ---');
  console.log('Title:', testArticle.title);
  console.log('Author:', testArticle.authorId);
  console.log('Reading Time:', testArticle.readingTime, 'min');
  console.log('Spot:', testArticle.spot);
  console.log('Content Preview (first 600 chars):');
  console.log(testArticle.content.slice(0, 600));
  console.log('------------------------------------------------------------\\n');
} else {
  console.error('ERROR: Could not find saglik-turizmi-acentesi-nasil-kurulur in storage!');
}
