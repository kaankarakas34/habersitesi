import React from 'react';
import Link from 'next/link';
import { Scale, CheckCircle2, Users, Calendar, ExternalLink, ArrowRight } from 'lucide-react';
import { Article } from '@/lib/types';

interface RegulationSectionProps {
  articles: Article[];
}

export default function RegulationSection({ articles }: RegulationSectionProps) {
  const regArticles = articles.filter((a) => a.category === 'mevzuat').slice(0, 2);

  if (regArticles.length === 0) return null;

  return (
    <section className="py-8 sm:py-12 bg-white border-b border-[#DDE3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-8 border-b-2 border-[#C62828]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded bg-[#C62828]/10 flex items-center justify-center text-[#C62828]">
              <Scale className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-xl font-black text-[#102A43] tracking-tight">
                Mevzuat, Teşvikler & Kamu Duyuruları
              </h2>
              <p className="text-xs text-[#5B6B79]">
                Resmî Gazete, Sağlık Bakanlığı ve Ticaret Bakanlığı düzenlemeleri.
              </p>
            </div>
          </div>

          <Link
            href="/kategori/mevzuat"
            className="text-xs font-bold text-[#C62828] hover:underline flex items-center gap-1"
          >
            Tüm Mevzuat Arşivi <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 2 Distinct Regulation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {regArticles.map((art) => {
            const mevzuat = art.specialFields?.mevzuat;

            return (
              <div
                key={art.id}
                className="bg-[#F5F7F9] border-2 border-[#DDE3E8] rounded-md p-6 flex flex-col justify-between hover:border-[#102A43]/40 transition-colors shadow-xs"
              >
                <div>
                  {/* Badge & Dates */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="px-2.5 py-1 bg-[#102A43] text-[#00A6A6] text-[10px] font-black uppercase tracking-wider rounded">
                      YÖNETMELİK & UYUM
                    </span>

                    {mevzuat?.yururlukTarihi && (
                      <div className="flex items-center gap-1 text-xs font-semibold text-[#102A43] bg-[#EAF6F8] px-2.5 py-1 rounded border border-[#00A6A6]/20">
                        <Calendar className="w-3.5 h-3.5 text-[#00A6A6]" />
                        <span>Yürürlük: {mevzuat.yururlukTarihi}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#102A43] hover:text-[#C62828] transition-colors leading-snug mb-3">
                    <Link href={`/haber/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#17212B]/85 leading-relaxed mb-5">
                    {art.spot}
                  </p>

                  {/* Distinct Structured Fields */}
                  {mevzuat && (
                    <div className="space-y-4 bg-white p-4 rounded border border-[#DDE3E8] text-xs">
                      {/* Ne Değişti? */}
                      {mevzuat.neDegisti && mevzuat.neDegisti.length > 0 && (
                        <div>
                          <div className="flex items-center gap-1.5 font-bold text-[#C62828] mb-1.5 uppercase text-[11px] tracking-wide">
                            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                            <span>Ne Değişti?</span>
                          </div>
                          <ul className="space-y-1 text-[#17212B] pl-4 list-disc marker:text-[#C62828]">
                            {mevzuat.neDegisti.slice(0, 2).map((item, i) => (
                              <li key={i} className="leading-normal">{item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Kimleri İlgilendiriyor? */}
                      {mevzuat.kimleriIlgilendiriyor && mevzuat.kimleriIlgilendiriyor.length > 0 && (
                        <div>
                          <div className="flex items-center gap-1.5 font-bold text-[#102A43] mb-1.5 uppercase text-[11px] tracking-wide">
                            <Users className="w-3.5 h-3.5 text-[#00A6A6] shrink-0" />
                            <span>Kimleri İlgilendiriyor?</span>
                          </div>
                          <p className="text-slate-600 leading-normal">
                            {mevzuat.kimleriIlgilendiriyor.join(', ')}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Footer Action & Official Source */}
                <div className="mt-5 pt-4 border-t border-[#DDE3E8] flex flex-wrap items-center justify-between gap-2 text-xs">
                  {mevzuat?.resmiKaynakUrl ? (
                    <a
                      href={mevzuat.resmiKaynakUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#5B6B79] hover:text-[#102A43] flex items-center gap-1 font-semibold"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[#00A6A6]" />
                      <span>Resmî Kaynak Metni</span>
                    </a>
                  ) : (
                    <span className="text-[#5B6B79]">Resmî Gazete Tebliği</span>
                  )}

                  <Link
                    href={`/haber/${art.slug}`}
                    className="font-bold text-[#102A43] hover:text-[#00A6A6] flex items-center gap-1"
                  >
                    <span>Mevzuat Rehberini İncele</span>
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
