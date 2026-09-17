import React from 'react';
import Link from 'next/link';
import { Clock, TrendingUp, Bookmark, Sparkles, ExternalLink } from 'lucide-react';
import { Article, Author } from '@/lib/types';
import QuickNewsletterBox from './QuickNewsletterBox';

interface LatestNewsFeedProps {
  articles: Article[];
  editorPicks: Article[];
  authors: Author[];
}

export default function LatestNewsFeed({
  articles,
  editorPicks,
}: LatestNewsFeedProps) {
  const formatDate = (isoString: string) => {
    try {
      return new Intl.DateTimeFormat('tr-TR', {
        day: 'numeric',
        month: 'short',
      }).format(new Date(isoString));
    } catch {
      return '';
    }
  };

  const categoryBadges: Record<string, { bg: string; text: string; label: string }> = {
    gundem: { bg: 'bg-[#102A43]', text: 'text-white', label: 'Gündem' },
    dunya: { bg: 'bg-[#00A6A6]', text: 'text-white', label: 'Dünya' },
    mevzuat: { bg: 'bg-[#C62828]', text: 'text-white', label: 'Mevzuat' },
    pazarlar: { bg: 'bg-[#1D3D5E]', text: 'text-[#EAF6F8]', label: 'Pazarlar' },
    pazarlama: { bg: 'bg-emerald-700', text: 'text-white', label: 'Pazarlama' },
    teknoloji: { bg: 'bg-indigo-700', text: 'text-white', label: 'Teknoloji' },
    analiz: { bg: 'bg-[#102A43]', text: 'text-[#00A6A6]', label: 'Analiz' },
    roportaj: { bg: 'bg-purple-800', text: 'text-white', label: 'Röportaj' },
    arastirma: { bg: 'bg-amber-700', text: 'text-white', label: 'Araştırma' },
  };

  return (
    <section className="py-8 sm:py-10 border-b border-[#DDE3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          {/* Main Feed Column (8 cols on desktop) */}
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#102A43]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00A6A6]" />
                <h2 className="text-xl font-black text-[#102A43] tracking-tight">
                  Son Gelişmeler & Haber Akışı
                </h2>
              </div>
              <span className="text-xs font-semibold text-[#5B6B79]">Kronolojik Sıralama</span>
            </div>

            <div className="divide-y divide-[#DDE3E8]">
              {articles.map((art) => {
                const badge = categoryBadges[art.category] || {
                  bg: 'bg-slate-700',
                  text: 'text-white',
                  label: art.category,
                };

                return (
                  <article
                    key={art.id}
                    className="py-5 first:pt-0 last:pb-0 group flex flex-col-reverse sm:flex-row gap-4 items-start justify-between"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span
                          className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded ${badge.bg} ${badge.text}`}
                        >
                          {badge.label}
                        </span>

                        <span className="text-xs text-[#5B6B79] font-medium flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#00A6A6]" />
                          {formatDate(art.publishedAt)}
                        </span>

                        {art.sources && art.sources[0] && (
                          <span className="text-[11px] text-[#5B6B79] bg-[#EAF6F8] px-2 py-0.5 rounded font-medium border border-[#DDE3E8]/60 flex items-center gap-1">
                            <span>Kaynak: {art.sources[0].name}</span>
                            {art.sources[0].isOfficial && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#00A6A6]" title="Resmi Kaynak" />
                            )}
                          </span>
                        )}
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-[#102A43] group-hover:text-[#00A6A6] transition-colors leading-snug mb-2">
                        <Link href={`/haber/${art.slug}`}>{art.title}</Link>
                      </h3>

                      <p className="text-xs sm:text-sm text-[#17212B]/80 line-clamp-2 leading-relaxed mb-3">
                        {art.spot}
                      </p>

                      <div className="flex items-center gap-3 text-xs text-[#5B6B79]">
                        <span className="font-semibold text-[#102A43]">
                          {art.readingTime} dakika okuma
                        </span>
                        <span>•</span>
                        <Link
                          href={`/haber/${art.slug}`}
                          className="text-[#00A6A6] font-bold hover:underline flex items-center gap-1"
                        >
                          Haberi Oku <ExternalLink className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                    {/* Thumbnail */}
                    <div className="w-full sm:w-36 sm:h-24 aspect-16/9 sm:aspect-auto shrink-0 rounded overflow-hidden bg-slate-100 border border-[#DDE3E8]/80">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={art.featuredImage}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Sidebar Column (4 cols on desktop) */}
          <div className="lg:col-span-4 space-y-8">
            {/* 1. Quick Newsletter Box */}
            <QuickNewsletterBox />

            {/* 2. En Çok Okunanlar (Numbered 1-4) */}
            <div className="bg-white p-5 rounded-md border border-[#DDE3E8] shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#DDE3E8]">
                <TrendingUp className="w-4 h-4 text-[#00A6A6]" />
                <h3 className="text-sm font-black uppercase tracking-wider text-[#102A43]">
                  En Çok Okunanlar
                </h3>
              </div>

              <div className="space-y-4">
                {articles.slice(0, 4).map((item, idx) => (
                  <div key={item.id} className="flex items-start gap-3 group">
                    <span className="w-6 h-6 rounded bg-[#EAF6F8] text-[#102A43] font-black text-xs flex items-center justify-center shrink-0 border border-[#00A6A6]/30">
                      {idx + 1}
                    </span>
                    <div className="min-w-0">
                      <h4 className="text-xs font-bold text-[#102A43] group-hover:text-[#00A6A6] transition-colors leading-snug line-clamp-2">
                        <Link href={`/haber/${item.slug}`}>{item.title}</Link>
                      </h4>
                      <span className="text-[10px] text-[#5B6B79] mt-0.5 block">
                        {formatDate(item.publishedAt)} • {item.readingTime} dk
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Editörün Seçtikleri */}
            <div className="bg-white p-5 rounded-md border border-[#DDE3E8] shadow-xs">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#DDE3E8]">
                <Bookmark className="w-4 h-4 text-[#C62828]" />
                <h3 className="text-sm font-black uppercase tracking-wider text-[#102A43]">
                  Editörün Seçtikleri
                </h3>
              </div>

              <div className="space-y-4">
                {editorPicks.slice(0, 3).map((item) => (
                  <div key={item.id} className="group">
                    <span className="text-[10px] font-bold text-[#00A6A6] uppercase tracking-wider block mb-1">
                      {item.category}
                    </span>
                    <h4 className="text-xs sm:text-sm font-bold text-[#102A43] group-hover:text-[#00A6A6] transition-colors leading-snug line-clamp-2 mb-1">
                      <Link href={`/haber/${item.slug}`}>{item.title}</Link>
                    </h4>
                    <p className="text-[11px] text-[#5B6B79] line-clamp-2 leading-relaxed">
                      {item.spot}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
