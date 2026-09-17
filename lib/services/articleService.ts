import { Article, Author, Category, SectorEvent } from '../types';
import { readStorage } from './storage';

export function getAllArticles(): Article[] {
  const data = readStorage();
  return data.articles.filter((a) => a.status === 'yayimlandi');
}

export function getAllArticlesAdmin(): Article[] {
  const data = readStorage();
  return data.articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  const data = readStorage();
  return data.articles.find((a) => a.slug === slug);
}

export function getHeadlineArticle(): Article | undefined {
  const articles = getAllArticles();
  return articles.find((a) => a.isHeadline) || articles[0];
}

export function getSecondaryHeadlines(): Article[] {
  const articles = getAllArticles();
  const headline = getHeadlineArticle();
  return articles
    .filter((a) => a.id !== headline?.id && a.isSecondaryHeadline)
    .slice(0, 4);
}

export function getBreakingArticles(): Article[] {
  const articles = getAllArticles();
  return articles.filter((a) => a.isBreaking).slice(0, 3);
}

export function getLatestArticles(limit = 10): Article[] {
  const articles = getAllArticles();
  return [...articles]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getArticlesByCategory(category: Category): Article[] {
  const articles = getAllArticles();
  return articles.filter((a) => a.category === category);
}

export function getArticlesByRegion(region: string): Article[] {
  const articles = getAllArticles();
  return articles.filter((a) => a.region?.toLowerCase() === region.toLowerCase());
}

export function getArticlesByCountry(country: string): Article[] {
  const articles = getAllArticles();
  return articles.filter((a) => a.country?.toLowerCase() === country.toLowerCase());
}

export function getArticlesByAuthor(authorId: string): Article[] {
  const articles = getAllArticles();
  return articles.filter((a) => a.authorId === authorId);
}

export function getRelatedArticles(currentArticle: Article, limit = 4): Article[] {
  const articles = getAllArticles();
  return articles
    .filter((a) => a.id !== currentArticle.id)
    .filter(
      (a) =>
        a.category === currentArticle.category ||
        a.tags.some((t) => currentArticle.tags.includes(t)) ||
        (currentArticle.region && a.region === currentArticle.region)
    )
    .slice(0, limit);
}

export function getEditorPicks(limit = 4): Article[] {
  const articles = getAllArticles();
  return articles.filter((a) => a.isEditorPick).slice(0, limit);
}

export function getAllAuthors(): Author[] {
  const data = readStorage();
  return data.authors;
}

export function getAuthorById(id: string): Author | undefined {
  const data = readStorage();
  return data.authors.find((a) => a.id === id);
}

export function getAuthorBySlug(slug: string): Author | undefined {
  const data = readStorage();
  return data.authors.find((a) => a.slug === slug);
}

export function getAllEvents(): SectorEvent[] {
  const data = readStorage();
  return data.events;
}

export function searchArticles(query: string, category?: string, type?: string, region?: string): Article[] {
  const articles = getAllArticles();
  const q = query.trim().toLowerCase();

  return articles.filter((article) => {
    const matchesQuery =
      !q ||
      article.title.toLowerCase().includes(q) ||
      article.spot.toLowerCase().includes(q) ||
      article.content.toLowerCase().includes(q) ||
      article.tags.some((t) => t.toLowerCase().includes(q)) ||
      (article.country && article.country.toLowerCase().includes(q));

    const matchesCategory = !category || category === 'all' || article.category === category;
    const matchesType = !type || type === 'all' || article.contentType === type;
    const matchesRegion = !region || region === 'all' || article.region === region;

    return matchesQuery && matchesCategory && matchesType && matchesRegion;
  });
}
