import React from 'react';
import Link from 'next/link';
import { Layers, MapPin, Calendar, Check, ArrowRight } from 'lucide-react';
import { Article } from '@/lib/types';

interface MarketDossierSectionProps {
  articles: Article[];
}

export default function MarketDossierSection({ articles }: MarketDossierSectionProps) {
  const marketArticles = articles.filter((a) => a.category === 'pazarlar').slice(0, 3);

  if (marketArticles.length === 0) return null;

  return (
    <section className="py-8 sm:py-12 bg-white border-b border-[#DDE3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-8 border-b-2 border-[#102A43]">
          <div>
            <div className="flex items-center gap-2">
              <Layers className="w-5 h-5 text-[#00A6A6]" />
              <h2 className="text-xl font-black text-[#102A43] tracking-tight">
                Pazar Dosyaları & Ülke Rehberleri
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5B6B79]">
              Hedef ülkelerdeki talep dinamikleri, regülasyonlar, hasta profilleri ve branş analizleri.
            </p>
          </div>

          <Link
            href="/kategori/pazarlar"
            className="text-xs font-bold text-[#00A6A6] hover:underline flex items-center gap-1"
          >
            Tüm Pazar Dosyaları <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketArticles.map((art) => {
            const pazar = art.specialFields?.pazar;

            return (
              <div
                key={art.id}
                className="bg-[#F5F7F9] border border-[#DDE3E8] rounded-md p-5 flex flex-col justify-between hover:border-[#00A6A6] transition-all shadow-xs"
              >
                <div>
                  {/* Country Header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="flex items-center gap-1.5 text-xs font-black text-[#102A43] bg-white px-3 py-1 rounded border border-[#DDE3E8]">
                      <MapPin className="w-3.5 h-3.5 text-[#00A6A6]" />
                      <span>{art.country || art.region || 'Özel Dosya'}</span>
                    </span>

                    {pazar?.kaynakTarihi && (
                      <span className="text-[11px] text-[#5B6B79] flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {pazar.kaynakTarihi}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-[#102A43] hover:text-[#00A6A6] transition-colors leading-snug mb-3 line-clamp-2">
                    <Link href={`/haber/${art.slug}`}>{art.title}</Link>
                  </h3>

                  {/* Verified Data Grid */}
                  {pazar?.oneCikanVeriler && (
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {pazar.oneCikanVeriler.slice(0, 2).map((item, i) => (
                        <div key={i} className="bg-white p-2.5 rounded border border-[#DDE3E8]">
                          <span className="text-[10px] text-[#5B6B79] font-medium block truncate">
                            {item.label}
                          </span>
                          <span className="text-xs font-black text-[#102A43] mt-0.5 block truncate">
                            {item.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Demanded branches */}
                  {pazar?.talepGorenBranslar && (
                    <div className="mb-4">
                      <span className="text-[11px] font-bold text-[#5B6B79] block mb-1.5 uppercase">
                        Talep Gören Branşlar:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {pazar.talepGorenBranslar.slice(0, 3).map((branch, i) => (
                          <span
                            key={i}
                            className="text-[11px] bg-white text-[#17212B] px-2 py-0.5 rounded border border-[#DDE3E8]"
                          >
                            {branch}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#DDE3E8] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#5B6B79]">Doğrulanmış Pazar Verisi</span>
                  <Link
                    href={`/haber/${art.slug}`}
                    className="font-bold text-[#00A6A6] hover:underline flex items-center gap-1"
                  >
                    <span>Dosyayı İncele</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
