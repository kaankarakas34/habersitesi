import { MetadataRoute } from 'next';
import { getAllArticles, getAllAuthors } from '@/lib/services/articleService';

export const dynamic = 'force-dynamic';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://saglikturizmiradari.com';

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'hourly', priority: 1 },
    { url: `${baseUrl}/hakkimizda`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/yazarlar`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/yazar-ol`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/etkinlikler`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/arama`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.5 },
    ...[
      'gundem', 'dunya', 'mevzuat', 'pazarlar',
      'pazarlama', 'teknoloji', 'analiz', 'roportaj', 'arastirma',
    ].map((cat) => ({
      url: `${baseUrl}/kategori/${cat}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    })),
  ];

  const articles = getAllArticles();
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/haber/${article.slug}`,
    lastModified: new Date(article.updatedAt || article.publishedAt),
    changeFrequency: 'weekly',
    priority: article.isHeadline ? 0.95 : 0.85,
  }));

  const authors = getAllAuthors();
  const authorPages: MetadataRoute.Sitemap = authors.map((author) => ({
    url: `${baseUrl}/yazar/${author.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  return [...staticPages, ...articlePages, ...authorPages];
}
