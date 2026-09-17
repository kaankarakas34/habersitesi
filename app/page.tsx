import React from 'react';
import {
  getAllArticles,
  getHeadlineArticle,
  getSecondaryHeadlines,
  getBreakingArticles,
  getLatestArticles,
  getEditorPicks,
  getAllAuthors,
  getAllEvents,
} from '@/lib/services/articleService';

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

export default function HomePage() {
  const allArticles = getAllArticles();
  const headlineArticle = getHeadlineArticle();
  const secondaryHeadlines = getSecondaryHeadlines();
  const breakingArticles = getBreakingArticles();
  const latestArticles = getLatestArticles(8);
  const editorPicks = getEditorPicks(4);
  const authors = getAllAuthors();
  const events = getAllEvents();

  return (
    <div className="flex flex-col min-h-screen">
      {/* 4.1 Son Dakika / Önemli Gelişme Bandı */}
      <BreakingTicker articles={breakingArticles} />

      {/* 4.2 Manşet Alanı */}
      {headlineArticle && (
        <HeroHeadlines
          headlineArticle={headlineArticle}
          secondaryArticles={secondaryHeadlines}
          authors={authors}
        />
      )}

      {/* 4.3 Son Gelişmeler & Yan Sütun */}
      <LatestNewsFeed
        articles={latestArticles}
        editorPicks={editorPicks}
        authors={authors}
      />

      {/* 4.4 Dünya Radarı */}
      <WorldRadarSection articles={allArticles} />

      {/* 4.5 Mevzuat ve Kamu Duyuruları */}
      <RegulationSection articles={allArticles} />

      {/* 4.6 Radar Analiz */}
      <RadarAnalysisSection articles={allArticles} />

      {/* 4.7 Pazar Dosyaları */}
      <MarketDossierSection articles={allArticles} />

      {/* 4.8 Pazarlama, Teknoloji ve Yapay Zekâ */}
      <MarketingTechSection articles={allArticles} />

      {/* 4.9 Röportajlar ve Görüşler */}
      <InterviewSection articles={allArticles} />

      {/* 4.10 Araştırmalar ve Raporlar */}
      <ResearchReportsSection articles={allArticles} />

      {/* 4.11 Etkinlikler Takvimi */}
      <EventsCalendarSection events={events} />

      {/* 4.12 Yazarlar ve Katkıda Bulunanlar */}
      <AuthorsSection authors={authors} />

      {/* 4.13 Haftalık Radar Bülteni */}
      <WeeklyNewsletterCTA />
    </div>
  );
}
