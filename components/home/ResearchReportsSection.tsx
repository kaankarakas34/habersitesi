import React from 'react';
import Link from 'next/link';
import { BarChart3, FileSpreadsheet, Download, CheckCircle, ArrowRight } from 'lucide-react';
import { Article } from '@/lib/types';

interface ResearchReportsSectionProps {
  articles: Article[];
}

export default function ResearchReportsSection({ articles }: ResearchReportsSectionProps) {
  const researchArticles = articles.filter(
    (a) => a.category === 'arastirma' || a.contentType === 'arastirma'
  );

  if (researchArticles.length === 0) return null;

  const report = researchArticles[0];
  const companionReports = researchArticles.slice(1, 4);
  const arastirma = report.specialFields?.arastirma;

  return (
    <section className="py-8 sm:py-12 bg-[#102A43] text-white border-b border-[#1D3D5E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-8 border-b border-[#1D3D5E]">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-[#00A6A6]" />
            <h2 className="text-xl font-black text-white tracking-tight">
              Araştırma Masası & Özel Raporlar
            </h2>
          </div>
          <Link
            href="/kategori/arastirma"
            className="text-xs font-bold text-[#00A6A6] hover:text-white transition-colors flex items-center gap-1"
          >
            Tüm Raporlar <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Big Report Feature Box */}
        <div className="bg-[#1D3D5E]/60 border border-[#1D3D5E] rounded-lg p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Cover Graphic / Thumbnail (4 cols) */}
          <div className="lg:col-span-4">
            <div className="relative aspect-3/4 max-w-xs mx-auto rounded-lg overflow-hidden border-2 border-[#00A6A6]/40 shadow-2xl bg-slate-900 group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={report.featuredImage}
                alt={report.title}
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102A43] via-transparent to-transparent flex flex-col justify-end p-5">
                <span className="text-[10px] font-black uppercase tracking-widest text-[#00A6A6] mb-1">
                  ÖZEL SEKTÖR RAPORU
                </span>
                <span className="text-xs font-bold text-white leading-snug line-clamp-2">
                  {arastirma?.sampleInfo || 'Klinik ve Resmî Veri Takibi'}
                </span>
              </div>
            </div>
          </div>

          {/* Details & Findings (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#00A6A6]/20 text-[#00A6A6] border border-[#00A6A6]/40 rounded text-xs font-bold">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>{arastirma?.dateRange || '2026 Saha Verisi'}</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              <Link href={`/haber/${report.slug}`} className="hover:text-[#00A6A6] transition-colors">
                {report.title}
              </Link>
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {report.spot}
            </p>

            {/* Methodology & Sample Badges */}
            {arastirma && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="bg-[#102A43] p-3 rounded border border-[#1D3D5E]">
                  <span className="text-[#00A6A6] font-bold block mb-1">Araştırma Yöntemi</span>
                  <span className="text-slate-300">{arastirma.methodology}</span>
                </div>
                <div className="bg-[#102A43] p-3 rounded border border-[#1D3D5E]">
                  <span className="text-[#00A6A6] font-bold block mb-1">Örneklem & Kapsam</span>
                  <span className="text-slate-300">{arastirma.sampleInfo}</span>
                </div>
              </div>
            )}

            {/* Key Findings List */}
            {arastirma?.findings && (
              <div className="pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#00A6A6] block mb-2">
                  Öne Çıkan Bulgular:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {arastirma.findings.slice(0, 2).map((find, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-[#00A6A6] shrink-0 mt-0.5" />
                      <span>{find}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link
                href={`/haber/${report.slug}`}
                className="px-5 py-2.5 bg-[#00A6A6] hover:bg-[#008E8E] text-white font-bold text-xs rounded transition-colors flex items-center gap-2"
              >
                <span>Raporun Tamamını İncele</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Companion Research Grid (3 cards) */}
        {companionReports.length > 0 && (
          <div className="mt-8 pt-8 border-t border-[#1D3D5E]/80">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-black uppercase tracking-wider text-[#00A6A6]">
                DİĞER GÜNCEL ARAŞTIRMA VE VERİ DOSYALARI
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {companionReports.map((item) => (
                <article
                  key={item.id}
                  className="bg-[#1D3D5E]/40 hover:bg-[#1D3D5E]/80 border border-[#1D3D5E] hover:border-[#00A6A6] rounded-md p-4 flex flex-col justify-between transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                      <span className="text-[#00A6A6] font-bold uppercase">
                        {item.specialFields?.arastirma?.dateRange || '2026 Verisi'}
                      </span>
                      <span>{item.readingTime} dk okuma</span>
                    </div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#00A6A6] transition-colors leading-snug line-clamp-2 mb-2">
                      <Link href={`/haber/${item.slug}`}>{item.title}</Link>
                    </h4>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed mb-3">
                      {item.spot}
                    </p>
                  </div>
                  <Link
                    href={`/haber/${item.slug}`}
                    className="text-xs font-semibold text-[#00A6A6] group-hover:text-white flex items-center gap-1 transition-colors pt-2 border-t border-[#1D3D5E]"
                  >
                    <span>Dosyayı İncele</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
