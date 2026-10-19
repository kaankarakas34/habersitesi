import React from 'react';
import type { Metadata } from 'next';
import {
  getAllArticles,
  getHeadlineArticle,
  getSecondaryHeadlines,
  getBreakingArticles,
  getLatestArticles,
  getTrendingArticles,
  getEditorPicks,
  getAllAuthors,
  getAllEvents,
} from '@/lib/services/articleService';

import { SITE_NAME, SITE_URL } from '@/lib/constants';
import BreakingTicker from '@/components/home/BreakingTicker';
import HeroHeadlines from '@/components/home/HeroHeadlines';
import LatestNewsFeed from '@/components/home/LatestNewsFeed';
import WorldRadarSection from '@/components/home/WorldRadarSection';
import RegulationSection from '@/components/home/RegulationSection';
import RadarAnalysisSection from '@/components/home/RadarAnalysisSection';
import MarketDossierSection from '@/components/home/MarketDossierSection';
import MarketingTechSection from '@/components/home/MarketingTechSection';
import InterviewSection from '@/components/home/InterviewSection';
import ResearchReportsSection from '@/components/home/ResearchReportsSection';
import EventsCalendarSection from '@/components/home/EventsCalendarSection';
import AuthorsSection from '@/components/home/AuthorsSection';
import WeeklyNewsletterCTA from '@/components/home/WeeklyNewsletterCTA';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: { absolute: 'Sağlık Turizmi Haberleri, Mevzuat ve Analiz | Sağlık Turizmi Radarı' },
  description: 'Türkiye ve dünyadan en yeni sağlık turizmi haberleri. Güncel mevzuat, yetki belgeleri, hedef pazar analizleri ve sektörel araştırmaları takip edin.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Sağlık Turizmi Radarı | Haber, Mevzuat ve Analiz',
    description: 'Sağlık turizminde son gelişmeler, resmî duyurular ve pazar analizleri.',
    url: SITE_URL,
    type: 'website',
    locale: 'tr_TR',
    siteName: SITE_NAME,
    images: [{ url: '/sosyal-gorsel', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: 'summary_large_image', images: ['/sosyal-gorsel'] },
};

export default function HomePage() {
  const allArticles = getAllArticles();
  const headlineArticle = getHeadlineArticle();
  const secondaryHeadlines = getSecondaryHeadlines();
  const breakingArticles = getBreakingArticles();
  const latestArticles = getLatestArticles(10);
  const trendingArticles = getTrendingArticles(4);
  const editorPicks = getEditorPicks(4);
  const authors = getAllAuthors();
  const events = getAllEvents();

  const latestSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Sağlık Turizmi Haberleri',
    url: SITE_URL,
    inLanguage: 'tr-TR',
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: allArticles.slice(0, 11).map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${SITE_URL}/haber/${a.slug}`,
        name: a.title,
      })),
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(latestSchema).replace(/</g, '\\u003c') }}
      />

      {/* 1. Son Dakika / Kayan Gelişmeler Bandı */}
      <BreakingTicker articles={breakingArticles} />

      {/* 2. Dinamik Manşet Alanı (1 Büyük Ana Manşet + 4 İkincil Manşet) */}
      {headlineArticle && (
        <HeroHeadlines
          headlineArticle={headlineArticle}
          secondaryArticles={secondaryHeadlines}
          authors={authors}
        />
      )}

      {/* 3. Son Gelişmeler Akışı & Yan Sütun */}
      <LatestNewsFeed
        articles={latestArticles}
        editorPicks={editorPicks}
        trendingArticles={trendingArticles}
        authors={authors}
      />

      {/* 4. Araştırma Masası & Özel Raporlar */}
      <ResearchReportsSection articles={allArticles} />

      {/* 5. Dünya Radarı (Küresel Sağlık Politikaları ve Hasta Hareketleri) */}
      <WorldRadarSection articles={allArticles} />

      {/* 6. Radar Analiz: Sektörel Etki & Çıkarımlar */}
      <RadarAnalysisSection articles={allArticles} />

      {/* 7. Mevzuat ve Kamu Duyuruları */}
      <RegulationSection articles={allArticles} />

      {/* 8. Pazar Dosyaları */}
      <MarketDossierSection articles={allArticles} />

      {/* 9. Pazarlama, Teknoloji ve Yapay Zekâ */}
      <MarketingTechSection articles={allArticles} />

      {/* 10. Röportajlar ve Görüşler */}
      <InterviewSection articles={allArticles} />

      {/* 11. Etkinlikler Takvimi */}
      <EventsCalendarSection events={events} />

      {/* 12. Yazarlar ve Katkıda Bulunanlar */}
      <AuthorsSection authors={authors} />

      {/* 13. Haftalık Radar Bülteni CTA */}
      <WeeklyNewsletterCTA />
    </div>
  );
}
