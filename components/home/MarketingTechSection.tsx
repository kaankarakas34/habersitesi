import React from 'react';
import Link from 'next/link';
import { Cpu, Megaphone, ArrowRight, Bot, Target, PhoneCall } from 'lucide-react';
import { Article } from '@/lib/types';

interface MarketingTechSectionProps {
  articles: Article[];
}

export default function MarketingTechSection({ articles }: MarketingTechSectionProps) {
  const techMarketingArticles = articles
    .filter((a) => a.category === 'pazarlama' || a.category === 'teknoloji')
    .slice(0, 3);

  if (techMarketingArticles.length === 0) return null;

  return (
    <section className="py-8 sm:py-12 bg-[#F5F7F9] border-b border-[#DDE3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-8 border-b-2 border-[#102A43]">
          <div>
            <div className="flex items-center gap-2">
              <Cpu className="w-5 h-5 text-[#00A6A6]" />
              <h2 className="text-xl font-black text-[#102A43] tracking-tight">
                Pazarlama, Teknoloji ve Yapay Zekâ
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5B6B79]">
              Uluslararası hasta kazanımı, CRM otomasyonları, çağrı merkezi verimliliği ve AI triyajı.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold">
            <Link href="/kategori/pazarlama" className="text-[#102A43] hover:text-[#00A6A6]">
              Pazarlama
            </Link>
            <span className="text-slate-400">•</span>
            <Link href="/kategori/teknoloji" className="text-[#102A43] hover:text-[#00A6A6]">
              Yapay Zekâ
            </Link>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {techMarketingArticles.map((art) => (
            <article
              key={art.id}
              className="bg-white rounded-md border border-[#DDE3E8] overflow-hidden flex flex-col justify-between shadow-xs hover:border-[#00A6A6] transition-colors"
            >
              <div>
                <div className="relative aspect-16/9 w-full bg-slate-100 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={art.featuredImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 bg-[#102A43] text-white text-[10px] font-bold uppercase tracking-wider rounded">
                      {art.category === 'teknoloji' ? 'YAPAY ZEKÂ' : 'PAZARLAMA'}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-[#102A43] hover:text-[#00A6A6] transition-colors leading-snug mb-2 line-clamp-2">
                    <Link href={`/haber/${art.slug}`}>{art.title}</Link>
                  </h3>
                  <p className="text-xs text-[#17212B]/80 line-clamp-2 leading-relaxed">
                    {art.spot}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-[#DDE3E8]/60 mt-3 flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#5B6B79]">{art.readingTime} dk okuma</span>
                <Link
                  href={`/haber/${art.slug}`}
                  className="font-bold text-[#00A6A6] hover:underline flex items-center gap-1"
                >
                  <span>Rehberi Oku</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
