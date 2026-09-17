import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Search, Filter, Calendar, Clock, ChevronRight, AlertCircle, ArrowRight } from 'lucide-react';
import { searchArticles, getEditorPicks } from '@/lib/services/articleService';
import QuickNewsletterBox from '@/components/home/QuickNewsletterBox';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Haber ve Mevzuat Arama — Sağlık Turizmi Radarı',
  description:
    'Sağlık turizmi mevzuatı, pazar analizleri, resmi veriler ve araştırma raporlarında arama yapın.',
  robots: {
    index: false,
    follow: true,
  },
};

interface SearchPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const resolvedParams = await searchParams;
  const q = typeof resolvedParams.q === 'string' ? resolvedParams.q : '';
  const category = typeof resolvedParams.category === 'string' ? resolvedParams.category : '';
  const type = typeof resolvedParams.type === 'string' ? resolvedParams.type : '';
  const region = typeof resolvedParams.region === 'string' ? resolvedParams.region : '';

  const results = searchArticles(q, category, type, region);
  const editorPicks = getEditorPicks(4);

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

  return (
    <div className="py-8 sm:py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[#5B6B79] mb-4">
          <Link href="/" className="hover:text-[#00A6A6]">
            Ana Sayfa
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-[#102A43]">Arama</span>
          {q && (
            <>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-[#00A6A6] font-bold">"{q}"</span>
            </>
          )}
        </nav>

        {/* Page Title & Search Bar */}
        <div className="pb-6 mb-8 border-b-2 border-[#102A43]">
          <h1 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight mb-4">
            Haber, Mevzuat ve Pazar Arama
          </h1>

          <form method="GET" action="/arama" className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                name="q"
                defaultValue={q}
                placeholder="Aramak istediğiniz kelime, yazar, kurum veya ülke adı..."
                className="w-full pl-11 pr-4 py-3 bg-[#F5F7F9] border border-[#DDE3E8] rounded text-sm text-[#17212B] focus:outline-none focus:ring-2 focus:ring-[#00A6A6]"
              />
            </div>

            {/* Category Filter */}
            <select
              name="category"
              defaultValue={category}
              className="px-3 py-3 bg-[#F5F7F9] border border-[#DDE3E8] rounded text-xs font-semibold text-[#17212B] focus:outline-none focus:ring-2 focus:ring-[#00A6A6]"
            >
              <option value="">Tüm Kategoriler</option>
              <option value="gundem">Gündem</option>
              <option value="dunya">Dünya</option>
              <option value="mevzuat">Mevzuat</option>
              <option value="pazarlar">Pazarlar</option>
              <option value="pazarlama">Pazarlama</option>
              <option value="teknoloji">Teknoloji & AI</option>
              <option value="analiz">Radar Analiz</option>
              <option value="roportaj">Röportaj</option>
              <option value="arastirma">Araştırma</option>
            </select>

            <button
              type="submit"
              className="px-6 py-3 bg-[#102A43] hover:bg-[#1D3D5E] text-white font-bold text-xs rounded transition-colors"
            >
              Filtrele & Ara
            </button>
          </form>
        </div>

        {/* Results layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#DDE3E8]">
              <span className="text-xs font-bold text-[#5B6B79]">
                {results.length} içerik bulundu {q && `(“${q}” için)`}
              </span>
            </div>

            {results.length > 0 ? (
              <div className="divide-y divide-[#DDE3E8]">
                {results.map((art) => (
                  <article key={art.id} className="py-6 first:pt-0 group">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className="px-2.5 py-0.5 bg-[#102A43] text-[#00A6A6] text-[10px] font-bold uppercase rounded">
                        {art.category}
                      </span>
                      {art.country && (
                        <span className="px-2 py-0.5 bg-[#EAF6F8] text-[#102A43] text-[10px] font-bold rounded">
                          {art.country}
                        </span>
                      )}
                      <span className="text-xs text-[#5B6B79] font-medium flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#00A6A6]" />
                        {formatDate(art.publishedAt)}
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-[#102A43] group-hover:text-[#00A6A6] transition-colors leading-snug mb-2">
                      <Link href={`/haber/${art.slug}`}>{art.title}</Link>
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed mb-3">
                      {art.spot}
                    </p>

                    <div className="flex items-center gap-3 text-xs text-[#5B6B79]">
                      <span>{art.readingTime} dk okuma</span>
                      <span>•</span>
                      <Link
                        href={`/haber/${art.slug}`}
                        className="text-[#00A6A6] font-bold hover:underline flex items-center gap-1"
                      >
                        İçeriği Oku <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="p-8 bg-[#F5F7F9] rounded-md border border-[#DDE3E8] text-center space-y-3">
                <AlertCircle className="w-8 h-8 text-[#00A6A6] mx-auto" />
                <h3 className="text-base font-bold text-[#102A43]">
                  Aramanızla eşleşen bir içerik bulunamadı
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Arama kriterlerinizi genişletmeyi deneyebilir veya aşağıdaki popüler konulardan birini seçebilirsiniz.
                </p>
                <div className="flex flex-wrap justify-center gap-2 pt-2">
                  {['Yetki Belgesi', 'Mevzuat', 'Almanya', 'İngiltere', 'Diş Turizmi', 'CRM'].map(
                    (tag) => (
                      <Link
                        key={tag}
                        href={`/arama?q=${encodeURIComponent(tag)}`}
                        className="text-xs bg-white text-[#102A43] hover:bg-[#00A6A6] hover:text-white px-3 py-1.5 rounded border border-[#DDE3E8] transition-colors"
                      >
                        {tag}
                      </Link>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <QuickNewsletterBox />

            <div className="bg-[#F5F7F9] p-5 rounded-md border border-[#DDE3E8]">
              <h3 className="text-xs font-black uppercase tracking-wider text-[#102A43] pb-3 mb-3 border-b border-[#DDE3E8]">
                Öne Çıkan Başlıklar
              </h3>
              <div className="space-y-3">
                {editorPicks.map((pick) => (
                  <div key={pick.id}>
                    <h4 className="text-xs font-bold text-[#102A43] hover:text-[#00A6A6] leading-snug line-clamp-2">
                      <Link href={`/haber/${pick.slug}`}>{pick.title}</Link>
                    </h4>
                    <span className="text-[10px] text-[#5B6B79]">
                      {pick.readingTime} dk okuma
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
