import { MetadataRoute } from 'next';
import { getAllArticles, getAllAuthors } from '@/lib/services/articleService';
import { SITE_URL } from '@/lib/constants';

export const revalidate = 3600;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL;
  const articles = getAllArticles();
  const authors = getAllAuthors();

  // Stable editorial revision date for static policies
  const policyLastModified = new Date('2026-09-01T08:00:00Z');
  const staticPagesLastModified = new Date('2026-09-10T08:00:00Z');

  // Find latest article date overall for homepage
  const latestArticleDate = articles.length > 0
    ? new Date(
        Math.max(
          ...articles.map((a) => new Date(a.updatedAt || a.publishedAt).getTime())
        )
      )
    : staticPagesLastModified;

  const policyPages = [
    'yayin-ilkeleri',
    'editorial-bagimsizlik',
    'kaynak-ve-dogrulama',
    'duzeltme-politikasi',
    'sponsorlu-icerik',
    'kunye',
    'iletisim',
    'gizlilik-politikasi',
    'cerez-politikasi',
    'kullanim-kosullari',
    'kvkk',
  ];

  const categories = [
    'gundem',
    'dunya',
    'mevzuat',
    'pazarlar',
    'pazarlama',
    'teknoloji',
    'analiz',
    'roportaj',
    'arastirma',
  ];

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: latestArticleDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/hakkimizda`, lastModified: staticPagesLastModified, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/yazarlar`, lastModified: staticPagesLastModified, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/yazar-ol`, lastModified: staticPagesLastModified, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/etkinlikler`, lastModified: staticPagesLastModified, changeFrequency: 'weekly', priority: 0.7 },
    ...policyPages.map((slug) => ({
      url: `${baseUrl}/${slug}`,
      lastModified: policyLastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
    ...categories.map((cat) => {
      const catArticles = articles.filter((a) => a.category === cat);
      const catLastMod = catArticles.length > 0
        ? new Date(
            Math.max(
              ...catArticles.map((a) => new Date(a.updatedAt || a.publishedAt).getTime())
            )
          )
        : staticPagesLastModified;

      return {
        url: `${baseUrl}/kategori/${cat}`,
        lastModified: catLastMod,
        changeFrequency: 'daily' as const,
        priority: 0.8,
      };
    }),
  ];

  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/haber/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: 'weekly',
    priority: article.isHeadline ? 0.95 : 0.85,
  }));

  const authorPages: MetadataRoute.Sitemap = authors.map((author) => {
    const authorArticles = articles.filter((a) => a.authorId === author.id);
    const authorLastMod = authorArticles.length > 0
      ? new Date(
          Math.max(
            ...authorArticles.map((a) => new Date(a.updatedAt || a.publishedAt).getTime())
          )
        )
      : staticPagesLastModified;

    return {
      url: `${baseUrl}/yazar/${author.slug}`,
      lastModified: authorLastMod,
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  return [...staticPages, ...articlePages, ...authorPages];
}
