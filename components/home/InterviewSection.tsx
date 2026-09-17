import React from 'react';
import Link from 'next/link';
import { MessageSquare, Quote, ArrowRight, CheckCircle } from 'lucide-react';
import { Article } from '@/lib/types';

interface InterviewSectionProps {
  articles: Article[];
}

export default function InterviewSection({ articles }: InterviewSectionProps) {
  const interviewArticles = articles.filter((a) => a.category === 'roportaj').slice(0, 2);

  if (interviewArticles.length === 0) return null;

  return (
    <section className="py-8 sm:py-12 bg-white border-b border-[#DDE3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#102A43]">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-[#00A6A6]" />
            <h2 className="text-xl font-black text-[#102A43] tracking-tight">
              Röportajlar ve Sektör Görüşleri
            </h2>
          </div>
          <Link
            href="/kategori/roportaj"
            className="text-xs font-bold text-[#00A6A6] hover:underline flex items-center gap-1"
          >
            Tüm Röportajlar <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Interviews Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {interviewArticles.map((art) => {
            const roportaj = art.specialFields?.roportaj;

            return (
              <div
                key={art.id}
                className="bg-[#F5F7F9] border border-[#DDE3E8] rounded-md p-6 flex flex-col justify-between shadow-xs hover:border-[#00A6A6] transition-colors"
              >
                <div>
                  {/* Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-2.5 py-1 bg-purple-900 text-white text-[10px] font-black uppercase tracking-wider rounded">
                      ÖZEL RÖPORTAJ
                    </span>

                    {art.isSponsored ? (
                      <span className="px-2 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 text-[10px] font-bold rounded">
                        Sponsorlu Röportaj
                      </span>
                    ) : (
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-bold rounded flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        Bağımsız Editoryal
                      </span>
                    )}
                  </div>

                  {/* Guest Quote/Title */}
                  <h3 className="text-lg font-bold text-[#102A43] hover:text-[#00A6A6] transition-colors leading-snug mb-3">
                    <Link href={`/haber/${art.slug}`}>{art.title}</Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#17212B]/85 leading-relaxed mb-5">
                    {art.spot}
                  </p>

                  {/* Guest Profile Box */}
                  {roportaj && (
                    <div className="bg-white p-4 rounded border border-[#DDE3E8] flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-slate-200 border border-[#00A6A6]/40">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={art.featuredImage}
                          alt={roportaj.guestName}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-[#102A43]">
                          {roportaj.guestName}
                        </div>
                        <div className="text-xs text-[#5B6B79]">
                          {roportaj.guestTitle} • {roportaj.guestOrganization}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#DDE3E8] flex items-center justify-between text-xs">
                  <span className="text-[#5B6B79]">{art.readingTime} dk okuma</span>
                  <Link
                    href={`/haber/${art.slug}`}
                    className="font-bold text-[#00A6A6] hover:underline flex items-center gap-1"
                  >
                    <span>Röportajın Tamamını Oku</span>
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
