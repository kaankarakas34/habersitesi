import React from 'react';
import Link from 'next/link';
import { Users, PenTool, ArrowRight } from 'lucide-react';
import { Author } from '@/lib/types';

interface AuthorsSectionProps {
  authors: Author[];
}

export default function AuthorsSection({ authors }: AuthorsSectionProps) {
  const displayedAuthors = authors.slice(0, 4);

  const getInitials = (name: string) => {
    const clean = name.replace(/^(Dr\.|Av\.|Prof\.|Doç\.)\s*/i, '').trim().split(/\s+/);
    if (clean.length >= 2) return (clean[0][0] + clean[clean.length - 1][0]).toUpperCase();
    return clean[0]?.slice(0, 2).toUpperCase() || 'ST';
  };

  return (
    <section className="py-10 bg-white border-b border-[#DDE3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b-2 border-[#102A43]">
          <div>
            <span className="text-xs font-bold text-[#00A6A6] uppercase tracking-wider block mb-1">
              Bağımsız Görüşler ve Sektör Analizleri
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-[#102A43] tracking-tight">
              Yazarlarımız & Uzmanlar
            </h2>
          </div>
          <Link
            href="/yazarlar"
            className="text-xs font-bold text-[#102A43] hover:text-[#00A6A6] flex items-center gap-1 mt-2 sm:mt-0 transition-colors"
          >
            <span>Tüm Yazarları Gör</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#00A6A6]" />
          </Link>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedAuthors.map((author) => (
            <div
              key={author.id}
              className="bg-white border border-[#DDE3E8] rounded-md p-5 flex flex-col justify-between hover:border-[#00A6A6] transition-colors shadow-xs"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-11 h-11 rounded-full bg-[#102A43] text-[#00A6A6] flex items-center justify-center font-bold text-sm border border-[#DDE3E8] shrink-0 select-none">
                    <span>{getInitials(author.name)}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#102A43] hover:text-[#00A6A6] transition-colors">
                      <Link href={`/yazar/${author.slug}`}>{author.name}</Link>
                    </h3>
                    <p className="text-[11px] text-[#00A6A6] font-semibold truncate max-w-[160px]">
                      {author.organization}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#17212B]/75 line-clamp-3 leading-relaxed mb-3">
                  {author.bio}
                </p>

                <div className="flex flex-wrap gap-1 mb-3">
                  {author.expertise.slice(0, 2).map((exp, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-[#EAF6F8] text-[#102A43] font-medium px-2 py-0.5 rounded border border-[#00A6A6]/20 truncate"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-[#DDE3E8]">
                <Link
                  href={`/yazar/${author.slug}`}
                  className="text-xs font-bold text-[#102A43] hover:text-[#00A6A6] flex items-center justify-between"
                >
                  <span>Tüm Yazılarını Gör</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#00A6A6]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
