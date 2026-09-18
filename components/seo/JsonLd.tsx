import React from 'react';
import { Article, Author } from '@/lib/types';
import { SITE_URL } from '@/lib/constants';

interface ArticleJsonLdProps {
  article: Article;
  author?: Author;
  baseUrl?: string;
}

export function ArticleJsonLd({
  article,
  author,
  baseUrl = SITE_URL,
}: ArticleJsonLdProps) {
  const schema: Record<string, any> = {
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
    inLanguage: 'tr-TR',
    author: {
      '@type': 'Person',
      name: author ? author.name : 'Sağlık Turizmi Radarı Editoryal',
      jobTitle: author?.title,
      url: author ? `${baseUrl}/yazar/${author.slug}` : `${baseUrl}/hakkimizda`,
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

export function WebsiteJsonLd({
  baseUrl = SITE_URL,
}: {
  baseUrl?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Sağlık Turizmi Radarı',
    url: baseUrl,
    inLanguage: 'tr-TR',
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

export function BreadcrumbJsonLd({
  items,
  baseUrl = SITE_URL,
}: {
  items: { name: string; url?: string }[];
  baseUrl?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url ? { item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}` } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQPageJsonLd({
  contentHtml,
}: {
  contentHtml: string;
}) {
  // Extract FAQs from HTML: looks for <h3>Question?</h3> followed by <p>Answer</p>
  const faqItems: { question: string; answer: string }[] = [];
  const regex = /<h3>([^<]+)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi;
  let match;

  while ((match = regex.exec(contentHtml)) !== null) {
    const question = match[1].trim();
    const answer = match[2].replace(/<[^>]+>/g, '').trim();

    // Check if it's really an FAQ question
    if (question.includes('?') || question.length > 10) {
      faqItems.push({ question, answer });
    }
  }

  if (faqItems.length === 0) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationJsonLd({
  baseUrl = SITE_URL,
}: {
  baseUrl?: string;
}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'NewsMediaOrganization',
    name: 'Sağlık Turizmi Radarı',
    url: baseUrl,
    logo: `${baseUrl}/icon.png`,
    description:
      'Türkiye ve dünyadan sağlık turizmi haberleri, mevzuat analizleri ve sektörel araştırmalar.',
    sameAs: [
      'https://www.linkedin.com/company/saglikturizmiradari',
      'https://twitter.com/saglikturizmrd',
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
