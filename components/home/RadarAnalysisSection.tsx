import React from 'react';
import Link from 'next/link';
import { Compass, Lightbulb, AlertTriangle, ArrowRight } from 'lucide-react';
import { Article } from '@/lib/types';

interface RadarAnalysisSectionProps {
  articles: Article[];
}

export default function RadarAnalysisSection({ articles }: RadarAnalysisSectionProps) {
  const analysisArticles = articles.filter((a) => a.category === 'analiz').slice(0, 2);

  if (analysisArticles.length === 0) return null;

  return (
    <section className="py-8 sm:py-12 bg-[#EAF6F8]/50 border-b border-[#DDE3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#00A6A6]">
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-[#00A6A6]" />
            <h2 className="text-xl font-black text-[#102A43] tracking-tight">
              Radar Analiz: Sektörel Etki & Çıkarımlar
            </h2>
          </div>
          <Link
            href="/kategori/analiz"
            className="text-xs font-bold text-[#00A6A6] hover:underline flex items-center gap-1"
          >
            Tüm Analizler <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {analysisArticles.map((art) => {
            const analiz = art.specialFields?.analiz;

            return (
              <div
                key={art.id}
                className="bg-white border border-[#DDE3E8] rounded-md p-6 flex flex-col justify-between shadow-xs hover:border-[#00A6A6] transition-colors"
              >
                <div>
                  <span className="text-[10px] font-bold text-[#00A6A6] tracking-wider uppercase mb-2 block">
                    DERİNLEMESİNE ANALİZ
                  </span>

                  <h3 className="text-lg font-bold text-[#102A43] hover:text-[#00A6A6] transition-colors leading-snug mb-3">
                    <Link href={`/haber/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#17212B]/80 leading-relaxed mb-4">
                    {art.spot}
                  </p>

                  {/* Impact callouts */}
                  {analiz && (
                    <div className="space-y-3 bg-[#F5F7F9] p-4 rounded border border-[#DDE3E8] text-xs">
                      {analiz.nedenOnemli && (
                        <div>
                          <div className="font-bold text-[#102A43] flex items-center gap-1.5 mb-1">
                            <Lightbulb className="w-3.5 h-3.5 text-[#00A6A6]" />
                            <span>Gelişme Neden Önemli?</span>
                          </div>
                          <p className="text-slate-600 leading-relaxed">{analiz.nedenOnemli}</p>
                        </div>
                      )}

                      {analiz.riskVeFirsatlar && (
                        <div>
                          <div className="font-bold text-[#102A43] flex items-center gap-1.5 mb-1">
                            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                            <span>Risk ve Fırsatlar</span>
                          </div>
                          <p className="text-slate-600 leading-relaxed">{analiz.riskVeFirsatlar}</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="mt-5 pt-3 border-t border-[#DDE3E8] flex items-center justify-between text-xs">
                  <span className="text-[#5B6B79]">{art.readingTime} dk analitik okuma</span>
                  <Link
                    href={`/haber/${art.slug}`}
                    className="font-bold text-[#00A6A6] hover:underline flex items-center gap-1"
                  >
                    <span>Analizin Tamamını Oku</span>
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
