'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Globe, MapPin, ArrowRight } from 'lucide-react';
import { Article } from '@/lib/types';

interface WorldRadarSectionProps {
  articles: Article[];
}

const REGIONS = ['Tümü', 'Avrupa', 'Amerika', 'Orta Doğu', 'Asya', 'Afrika'] as const;

export default function WorldRadarSection({ articles }: WorldRadarSectionProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>('Tümü');

  const filteredArticles = articles.filter((art) => {
    if (selectedRegion === 'Tümü') return true;
    return art.region?.toLowerCase() === selectedRegion.toLowerCase();
  });

  return (
    <section className="py-8 sm:py-10 bg-[#F5F7F9] border-b border-[#DDE3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-6 border-b border-[#DDE3E8]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Globe className="w-5 h-5 text-[#00A6A6]" />
              <h2 className="text-xl font-black text-[#102A43] tracking-tight">
                Dünya Radarı
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5B6B79]">
              Avrupa, Amerika, Körfez ve Asya’daki sağlık politikaları, rakip ülkeler ve hasta hareketleri.
            </p>
          </div>

          {/* Region Tabs */}
          <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {REGIONS.map((region) => (
              <button
                key={region}
                type="button"
                onClick={() => setSelectedRegion(region)}
                className={`px-3 py-1.5 rounded text-xs font-bold whitespace-nowrap transition-colors ${
                  selectedRegion === region
                    ? 'bg-[#102A43] text-white'
                    : 'bg-white text-[#17212B] hover:bg-[#EAF6F8] hover:text-[#00A6A6] border border-[#DDE3E8]'
                }`}
              >
                {region}
              </button>
            ))}
          </div>
        </div>

        {/* World Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.slice(0, 3).map((art) => (
            <article
              key={art.id}
              className="group bg-white rounded-md border border-[#DDE3E8] overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="relative aspect-16/10 w-full overflow-hidden bg-slate-100">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={art.featuredImage}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                    loading="lazy"
                  />
                  {art.country && (
                    <div className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 bg-[#102A43]/90 backdrop-blur-xs text-[#00A6A6] text-[11px] font-bold rounded shadow-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{art.country}</span>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-[#00A6A6] mb-1.5">
                    {art.region || 'KÜRESEL'}
                  </div>

                  <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#00A6A6] transition-colors leading-snug mb-2 line-clamp-2">
                    <Link href={`/haber/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-xs text-[#17212B]/80 line-clamp-3 leading-relaxed mb-4">
                    {art.spot}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/haber/${art.slug}`}
                  className="text-xs font-bold text-[#102A43] hover:text-[#00A6A6] flex items-center gap-1 group-hover:underline"
                >
                  <span>Raporu ve Analizi Gör</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00A6A6]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
