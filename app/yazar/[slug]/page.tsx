import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  ChevronRight,
  ShieldAlert,
  FileText,
} from 'lucide-react';
import { getAuthorBySlug, getArticlesByAuthor } from '@/lib/services/articleService';

export const dynamic = 'force-dynamic';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    return { title: 'Yazar Bulunamadı' };
  }

  return {
    title: `${author.name} — Sağlık Turizmi Radarı`,
    description: author.bio,
  };
}

export default async function AuthorProfilePage({ params }: PageProps) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const articles = getArticlesByAuthor(author.id);

  const formatDate = (isoString: string) => {
    try {
      return new Intl.DateTimeFormat('tr-TR', {
        day: 'numeric',
        month: 'long',
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
        <nav className="flex items-center gap-1.5 text-xs text-[#5B6B79] mb-6">
          <Link href="/" className="hover:text-[#00A6A6]">
            Ana Sayfa
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/yazarlar" className="hover:text-[#00A6A6]">
            Yazarlar
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-[#102A43]">{author.name}</span>
        </nav>

        {/* Author Header Card */}
        <div className="bg-[#F5F7F9] border-2 border-[#102A43] rounded-md p-6 sm:p-8 mb-10 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start gap-6">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden bg-slate-200 border-4 border-white shadow-md shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={author.avatar}
                alt={author.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
                <div>
                  <h1 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight">
                    {author.name}
                  </h1>
                  <p className="text-sm font-bold text-[#00A6A6]">
                    {author.title} — <span className="text-[#102A43]">{author.organization}</span>
                  </p>
                </div>

                {author.linkedinUrl && (
                  <a
                    href={author.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#0A66C2] text-white text-xs font-bold rounded shadow-xs hover:bg-[#084e96] transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.89 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z"/></svg>
                    <span>LinkedIn Profili</span>
                  </a>
                )}
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                {author.bio}
              </p>

              {/* Expertise */}
              <div className="flex flex-wrap gap-2 mb-4">
                {author.expertise.map((exp, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white text-[#102A43] font-semibold px-2.5 py-1 rounded border border-[#DDE3E8]"
                  >
                    {exp}
                  </span>
                ))}
              </div>

              {/* Conflict of interest statement */}
              {author.conflictOfInterest && (
                <div className="p-3 bg-[#EAF6F8] rounded border border-[#00A6A6]/30 text-xs text-[#102A43] flex items-start gap-2">
                  <ShieldAlert className="w-4 h-4 text-[#00A6A6] shrink-0 mt-0.5" />
                  <div>
                    <strong>Şeffaflık & Çıkar Çatışması Beyanı:</strong>{' '}
                    <span>{author.conflictOfInterest}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Author's Articles */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 pb-3 border-b-2 border-[#102A43]">
            <FileText className="w-5 h-5 text-[#00A6A6]" />
            <h2 className="text-lg font-black text-[#102A43] tracking-tight">
              {author.name} Tarafından Hazırlanan İçerikler ({articles.length})
            </h2>
          </div>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((art) => (
                <article
                  key={art.id}
                  className="bg-[#F5F7F9] border border-[#DDE3E8] rounded-md p-5 flex flex-col justify-between hover:border-[#00A6A6] transition-colors shadow-xs group"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#5B6B79] mb-2">
                      <span className="px-2 py-0.5 bg-[#102A43] text-[#00A6A6] text-[10px] font-bold uppercase rounded">
                        {art.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-[#00A6A6]" />
                        {formatDate(art.publishedAt)}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-[#102A43] group-hover:text-[#00A6A6] transition-colors leading-snug mb-2">
                      <Link href={`/haber/${art.slug}`}>{art.title}</Link>
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {art.spot}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#DDE3E8] mt-4 flex items-center justify-between text-xs text-[#5B6B79]">
                    <span>{art.readingTime} dk okuma</span>
                    <Link
                      href={`/haber/${art.slug}`}
                      className="font-bold text-[#00A6A6] hover:underline"
                    >
                      Yazıyı Oku →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="p-8 text-center text-slate-500 bg-[#F5F7F9] rounded border border-[#DDE3E8]">
              Bu yazara ait henüz arşivlenmiş bir içerik bulunmuyor.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
