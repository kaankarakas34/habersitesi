import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, Calendar, User, ArrowUpRight } from 'lucide-react';
import { Article, Author } from '@/lib/types';

interface HeroHeadlinesProps {
  headlineArticle: Article;
  secondaryArticles: Article[];
  authors: Author[];
}

export default function HeroHeadlines({
  headlineArticle,
  secondaryArticles,
  authors,
}: HeroHeadlinesProps) {
  const getAuthorName = (authorId: string) => {
    const found = authors.find((a) => a.id === authorId);
    return found ? found.name : 'Sağlık Turizmi Radarı Editoryal';
  };

  const formatDate = (isoString: string) => {
    try {
      return new Intl.DateTimeFormat('tr-TR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }).format(new Date(isoString));
    } catch {
      return '';
    }
  };

  const categoryLabels: Record<string, string> = {
    gundem: 'GÜNDEM',
    dunya: 'DÜNYA',
    mevzuat: 'MEVZUAT',
    pazarlar: 'PAZARLAR',
    pazarlama: 'PAZARLAMA',
    teknoloji: 'TEKNOLOJİ',
    analiz: 'ANALİZ',
    roportaj: 'RÖPORTAJ',
    arastirma: 'ARAŞTIRMA',
  };

  return (
    <section className="py-6 sm:py-8 border-b border-[#DDE3E8] bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Main Primary Headline (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col">
            <article className="group relative bg-[#F5F7F9] border border-[#DDE3E8] rounded-lg overflow-hidden flex flex-col flex-1 shadow-sm hover:shadow-lg transition-all duration-300">
              {/* Image Container with 16:9 aspect */}
              <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-900">
                <Image
                  src={headlineArticle.featuredImage}
                  alt={headlineArticle.title}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 700px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out opacity-95 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1 bg-[#102A43] text-[#00A6A6] text-[11px] font-black uppercase tracking-widest rounded-full shadow-lg border border-[#00A6A6]/30 backdrop-blur-xs">
                    {categoryLabels[headlineArticle.category] || 'MANŞET DOSYASI'}
                  </span>
                </div>
              </div>

              {/* Headline Content */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between bg-white">
                <div>
                  <h1 className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-[#102A43] leading-tight tracking-tight group-hover:text-[#00A6A6] transition-colors mb-3">
                    <Link href={`/haber/${headlineArticle.slug}`} className="flex items-start justify-between gap-3">
                      <span className="line-clamp-2">{headlineArticle.title}</span>
                      <ArrowUpRight className="w-6 h-6 text-[#00A6A6] shrink-0 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </h1>

                  <p className="text-[#243B53] text-sm sm:text-base leading-relaxed line-clamp-3 mb-5 font-normal">
                    {headlineArticle.spot}
                  </p>
                </div>

                {/* Metadata footer */}
                <div className="pt-4 border-t border-[#DDE3E8] flex flex-wrap items-center justify-between gap-3 text-xs text-[#5B6B79]">
                  <div className="flex items-center gap-2 font-semibold text-[#102A43]">
                    <User className="w-3.5 h-3.5 text-[#00A6A6]" />
                    <span>{getAuthorName(headlineArticle.authorId)}</span>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1.5 text-slate-500">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{formatDate(headlineArticle.publishedAt)}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#00A6A6] font-semibold bg-[#EAF6F8] px-2.5 py-0.5 rounded">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{headlineArticle.readingTime} dk inceleme</span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Secondary 4 Headlines (5 cols on desktop, 2x2 grid) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {secondaryArticles.slice(0, 4).map((art) => (
                <article
                  key={art.id}
                  className="group bg-[#F5F7F9] hover:bg-white border border-[#DDE3E8] hover:border-[#00A6A6] rounded-lg overflow-hidden flex flex-col justify-between p-4.5 transition-all duration-300 shadow-xs hover:shadow-md"
                >
                  <div>
                    {/* Small thumbnail */}
                    <div className="relative aspect-16/9 w-full rounded-md overflow-hidden bg-slate-900 mb-3.5">
                      <Image
                        src={art.featuredImage}
                        alt={art.title}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <span className="absolute bottom-2 left-2 z-10 px-2 py-0.5 bg-[#102A43]/95 text-[#00A6A6] text-[10px] font-extrabold uppercase tracking-wider rounded">
                        {categoryLabels[art.category] || 'HABER'}
                      </span>
                    </div>

                    <h2 className="text-sm font-bold text-[#102A43] leading-snug group-hover:text-[#00A6A6] transition-colors line-clamp-3 mb-2">
                      <Link href={`/haber/${art.slug}`}>{art.title}</Link>
                    </h2>
                  </div>

                  <div className="pt-2.5 border-t border-[#DDE3E8]/80 flex items-center justify-between text-[11px] text-[#5B6B79]">
                    <span>{formatDate(art.publishedAt)}</span>
                    <span className="flex items-center gap-1 text-[#00A6A6] font-semibold">
                      <Clock className="w-3 h-3" />
                      {art.readingTime} dk
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
