import type { Article } from './types';

export const CATEGORY_LABELS: Record<Article['category'], string> = {
  gundem: 'Gündem', dunya: 'Dünya', mevzuat: 'Mevzuat', pazarlar: 'Pazarlar',
  pazarlama: 'Pazarlama', teknoloji: 'Teknoloji', analiz: 'Analiz',
  roportaj: 'Röportaj', arastirma: 'Araştırma', etkinlikler: 'Etkinlikler',
};

export type NewsSummary = Pick<Article,
  'id' | 'slug' | 'title' | 'spot' | 'category' | 'publishedAt' | 'featuredImage' | 'readingTime'
>;

export function summarizeArticle(article: Article): NewsSummary {
  const { id, slug, title, spot, category, publishedAt, featuredImage, readingTime } = article;
  return { id, slug, title, spot, category, publishedAt, featuredImage, readingTime };
}

export function formatNewsDate(date: string): string {
  return new Intl.DateTimeFormat('tr-TR', {
    day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Europe/Istanbul',
  }).format(new Date(date));
}

export function categoryHref(category: Article['category']): string {
  return category === 'etkinlikler' ? '/etkinlikler' : `/kategori/${category}`;
}
