import React from 'react';
import { Article, Author } from '@/lib/types';

interface ArticleJsonLdProps {
  article: Article;
  author?: Author;
  baseUrl?: string;
}

export function ArticleJsonLd({ article, author, baseUrl = 'https://saglikturizmiradari.com' }: ArticleJsonLdProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/haber/${article.slug}`,
    },
    headline: article.title,
    description: article.spot,
    image: [article.featuredImage],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt || article.publishedAt,
    author: {
      '@type': 'Person',
      name: author ? author.name : 'Sağlık Turizmi Radarı Editoryal',
      jobTitle: author?.title,
      worksFor: {
        '@type': 'Organization',
        name: author?.organization || 'Sağlık Turizmi Radarı',
      },
    },
    publisher: {
      '@type': 'NewsMediaOrganization',
      name: 'Sağlık Turizmi Radarı',
      url: baseUrl,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/icon.png`,
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteJsonLd({ baseUrl = 'https://saglikturizmiradari.com' }: { baseUrl?: string }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sağlık Turizmi Radarı',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/arama?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
