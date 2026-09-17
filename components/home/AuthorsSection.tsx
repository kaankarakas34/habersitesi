import React from 'react';
import Link from 'next/link';
import { Users, PenTool, ArrowRight } from 'lucide-react';
import { Author } from '@/lib/types';

interface AuthorsSectionProps {
  authors: Author[];
}

export default function AuthorsSection({ authors }: AuthorsSectionProps) {
  // Show non-editorial human experts
  const displayedAuthors = authors.filter((a) => a.id !== 'editorial').slice(0, 4);

  return (
    <section className="py-8 sm:py-12 bg-[#F5F7F9] border-b border-[#DDE3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-8 border-b-2 border-[#102A43]">
          <div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#00A6A6]" />
              <h2 className="text-xl font-black text-[#102A43] tracking-tight">
                Yazarlar ve Katkıda Bulunanlar
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#5B6B79]">
              Sağlık hukuku, hastane yönetimi, akreditasyon, performans pazarlaması ve yapay zekâ uzmanları.
            </p>
          </div>

          <Link
            href="/yazar-ol"
            className="self-start sm:self-auto px-4 py-2 bg-[#00A6A6] hover:bg-[#008E8E] text-white text-xs font-bold rounded transition-colors flex items-center gap-1.5"
          >
            <PenTool className="w-3.5 h-3.5" />
            <span>Yazar Ol (Başvuru Yap)</span>
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
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 border border-[#DDE3E8] shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={author.avatar}
                      alt={author.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
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
