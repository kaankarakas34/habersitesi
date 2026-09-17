import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Users, PenTool, ArrowRight, ShieldCheck, ChevronRight } from 'lucide-react';
import { getAllAuthors } from '@/lib/services/articleService';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Yazarlar ve Katkıda Bulunanlar — Sağlık Turizmi Radarı',
  description:
    'Sağlık hukuku, hastane yönetimi, akreditasyon, dijital pazarlama ve sağlık teknolojisi alanındaki bağımsız yazar ve uzmanlarımız.',
};

export default function AuthorsIndexPage() {
  const authors = getAllAuthors();

  const getInitials = (name: string) => {
    const clean = name.replace(/^(Dr\.|Av\.|Prof\.|Doç\.)\s*/i, '').trim().split(/\s+/);
    if (clean.length >= 2) return (clean[0][0] + clean[clean.length - 1][0]).toUpperCase();
    return clean[0]?.slice(0, 2).toUpperCase() || 'ST';
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
          <span className="font-bold text-[#102A43]">Yazarlarımız & Uzman Kadromuz</span>
        </nav>

        {/* Header */}
        <div className="pb-6 mb-8 border-b-2 border-[#102A43]">
          <span className="text-xs font-bold text-[#00A6A6] uppercase tracking-wider block mb-1">
            Editoryal Bağımsızlık ve Uzmanlık
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight mb-2">
            Yazarlar ve Sektörel Analistler
          </h1>
          <p className="text-sm text-[#5B6B79] max-w-3xl leading-relaxed">
            Sağlık Turizmi Radarı içerikleri; sağlık hukuku avukatları, klinik yöneticileri,
            pazar analistleri ve bağımsız araştırmacılardan oluşan uzman kadro tarafından
            editoryal ilkeler çerçevesinde hazırlanmaktadır.
          </p>
        </div>

        {/* Authors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map((author) => (
            <div
              key={author.id}
              className="bg-[#F5F7F9] border border-[#DDE3E8] rounded-md p-6 flex flex-col justify-between hover:border-[#00A6A6] transition-colors shadow-xs"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-[#102A43] text-[#00A6A6] flex items-center justify-center font-bold text-lg border-2 border-white shadow-xs shrink-0 select-none">
                    <span>{getInitials(author.name)}</span>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-[#102A43] hover:text-[#00A6A6] transition-colors">
                      <Link href={`/yazar/${author.slug}`}>{author.name}</Link>
                    </h2>
                    <p className="text-xs text-[#00A6A6] font-semibold">
                      {author.title}
                    </p>
                    <p className="text-[11px] text-[#5B6B79]">
                      {author.organization}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#17212B]/80 leading-relaxed mb-4 line-clamp-4">
                  {author.bio}
                </p>

                {/* Expertise pills */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {author.expertise.map((exp, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-white text-[#102A43] font-semibold px-2 py-0.5 rounded border border-[#DDE3E8]"
                    >
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#DDE3E8] flex items-center justify-between text-xs">
                {author.linkedinUrl ? (
                  <a
                    href={author.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-[#00A6A6] flex items-center gap-1 font-medium"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.89 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z"/></svg>
                    <span>LinkedIn</span>
                  </a>
                ) : (
                  <span className="text-[#5B6B79] text-[11px]">Sağlık Turizmi Radarı</span>
                )}

                <Link
                  href={`/yazar/${author.slug}`}
                  className="font-bold text-[#00A6A6] hover:underline flex items-center gap-1"
                >
                  <span>Tüm Yazıları</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
