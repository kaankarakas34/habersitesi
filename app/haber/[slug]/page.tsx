import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  User,
  ChevronRight,
  ExternalLink,
  ShieldCheck,
  Bookmark,
  Share2,
} from 'lucide-react';

import {
  getArticleBySlug,
  getAuthorById,
  getRelatedArticles,
  getAllArticles,
} from '@/lib/services/articleService';

import { ArticleJsonLd, BreadcrumbJsonLd, FAQPageJsonLd } from '@/components/seo/JsonLd';
import ShareButtons from '@/components/article/ShareButtons';
import CorrectionModal from '@/components/article/CorrectionModal';
import MevzuatBox from '@/components/article/MevzuatBox';
import MarketBox from '@/components/article/MarketBox';
import InterviewBlock from '@/components/article/InterviewBlock';
import ResearchBox from '@/components/article/ResearchBox';
import AnalysisBox from '@/components/article/AnalysisBox';
import QuickNewsletterBox from '@/components/home/QuickNewsletterBox';

export const dynamic = 'force-dynamic';

import { SITE_URL } from '@/lib/constants';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: 'İçerik Bulunamadı',
    };
  }

  const canonicalUrl = `${SITE_URL}/haber/${article.slug}`;

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.spot,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.spot,
      url: canonicalUrl,
      siteName: 'Sağlık Turizmi Radarı',
      locale: 'tr_TR',
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      type: 'article',
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt || article.publishedAt,
      authors: [article.authorId],
      tags: article.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.spot,
      images: [article.featuredImage],
    },
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const author = getAuthorById(article.authorId);
  const relatedArticles = getRelatedArticles(article, 3);

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

  const getInitials = (name: string) => {
    const clean = name.replace(/^(Dr\.|Av\.|Prof\.|Doç\.)\s*/i, '').trim().split(/\s+/);
    if (clean.length >= 2) return (clean[0][0] + clean[clean.length - 1][0]).toUpperCase();
    return clean[0]?.slice(0, 2).toUpperCase() || 'ST';
  };

  const categoryLabels: Record<string, string> = {
    gundem: 'Gündem',
    dunya: 'Dünya Radarı',
    mevzuat: 'Mevzuat & Hukuk',
    pazarlar: 'Pazar Dosyaları',
    pazarlama: 'Pazarlama',
    teknoloji: 'Teknoloji & AI',
    analiz: 'Radar Analiz',
    roportaj: 'Röportaj',
    arastirma: 'Araştırma & Rapor',
  };

  return (
    <div className="py-6 sm:py-10 bg-white min-h-screen">
      <ArticleJsonLd article={article} author={author} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Ana Sayfa', url: SITE_URL },
          {
            name: categoryLabels[article.category] || article.category,
            url: `${SITE_URL}/kategori/${article.category}`,
          },
          {
            name: article.title,
            url: `${SITE_URL}/haber/${article.slug}`,
          },
        ]}
      />
      <FAQPageJsonLd contentHtml={article.content} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[#5B6B79] mb-4 overflow-x-auto whitespace-nowrap">
          <Link href="/" className="hover:text-[#00A6A6]">
            Ana Sayfa
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <Link
            href={`/kategori/${article.category}`}
            className="hover:text-[#00A6A6] font-semibold text-[#102A43]"
          >
            {categoryLabels[article.category] || article.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="truncate max-w-xs sm:max-w-md text-slate-500">
            {article.title}
          </span>
        </nav>

        {/* Main Grid: Article Body (8 cols) + Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Main Article Column */}
          <article className="lg:col-span-8">
            {/* Category Pill & Sponsored indicator */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <Link
                href={`/kategori/${article.category}`}
                className="px-3 py-1 bg-[#102A43] text-[#00A6A6] text-xs font-black uppercase tracking-wider rounded"
              >
                {categoryLabels[article.category] || article.category}
              </Link>

              {article.isSponsored && (
                <span className="px-2.5 py-0.5 bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold rounded">
                  Sponsorlu İçerik / İş Birliği
                </span>
              )}

              {article.country && (
                <span className="px-2 py-0.5 bg-[#EAF6F8] text-[#102A43] text-xs font-bold rounded border border-[#DDE3E8]">
                  {article.country}
                </span>
              )}

              {article.branch && (
                <span className="px-2 py-0.5 bg-white text-[#5B6B79] text-xs font-medium rounded border border-[#DDE3E8]">
                  Branş: {article.branch}
                </span>
              )}
            </div>

            {/* H1 Article Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102A43] leading-tight tracking-tight mb-4">
              {article.title}
            </h1>

            {/* Editorial Spot (1-2 sentences) */}
            <p className="text-base sm:text-lg text-[#17212B]/90 font-medium leading-relaxed mb-6 border-l-4 border-[#00A6A6] pl-4 py-1 bg-[#F5F7F9] rounded-r">
              {article.spot}
            </p>

            {/* Metadata bar: Author, Date, Reading time, Share buttons */}
            <div className="py-3 border-y border-[#DDE3E8] flex flex-wrap items-center justify-between gap-4 mb-6 text-xs text-[#5B6B79]">
              <div className="flex items-center gap-3">
                {author && (
                  <Link
                    href={`/yazar/${author.slug}`}
                    className="flex items-center gap-2 group"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#102A43] text-[#00A6A6] flex items-center justify-center font-bold text-xs shrink-0 select-none">
                      <span>{getInitials(author.name)}</span>
                    </div>
                    <div>
                      <span className="font-bold text-[#102A43] group-hover:text-[#00A6A6] block leading-tight">
                        {author.name}
                      </span>
                      <span className="text-[11px] text-[#5B6B79] block">
                        {author.title}
                      </span>
                    </div>
                  </Link>
                )}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#00A6A6]" />
                  <span>{formatDate(article.publishedAt)}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#00A6A6]" />
                  <span>{article.readingTime} dk okuma</span>
                </div>
              </div>
            </div>

            {/* Social Share Bar */}
            <ShareButtons title={article.title} />

            {/* Featured Image with Caption and Source attribution */}
            <div className="my-6 rounded-md overflow-hidden border border-[#DDE3E8] bg-slate-50">
              <div className="relative aspect-16/9 w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
              {(article.imageCaption || article.imageSource) && (
                <div className="p-3 bg-[#F5F7F9] border-t border-[#DDE3E8] text-xs text-[#5B6B79] flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span>{article.imageCaption}</span>
                  {article.imageSource && (
                    <span className="text-[11px] font-medium text-slate-400">
                      Fotoğraf / Kaynak: {article.imageSource}
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Specialized Header Modals depending on Content Type */}
            {article.specialFields?.mevzuat && (
              <MevzuatBox data={article.specialFields.mevzuat} />
            )}

            {article.specialFields?.pazar && (
              <MarketBox data={article.specialFields.pazar} />
            )}

            {article.specialFields?.analiz && (
              <AnalysisBox data={article.specialFields.analiz} />
            )}

            {article.specialFields?.roportaj && (
              <InterviewBlock data={article.specialFields.roportaj} />
            )}

            {article.specialFields?.arastirma && (
              <ResearchBox data={article.specialFields.arastirma} />
            )}

            {/* Main Article Body (Rendered HTML with editorial typography) */}
            <div
              className="prose-editorial my-8"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />

            {/* Tags */}
            {article.tags && article.tags.length > 0 && (
              <div className="pt-6 border-t border-[#DDE3E8] my-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-[#5B6B79]">İlgili Konular:</span>
                  {article.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/arama?q=${encodeURIComponent(tag)}`}
                      className="text-xs bg-[#F5F7F9] hover:bg-[#EAF6F8] hover:text-[#00A6A6] text-[#17212B] px-3 py-1 rounded border border-[#DDE3E8] transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Official Sources Citation Block */}
            {article.sources && article.sources.length > 0 && (
              <div className="p-4 bg-[#F5F7F9] rounded border border-[#DDE3E8] my-6 text-xs">
                <div className="font-bold text-[#102A43] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#00A6A6]" />
                  <span>Doğrulama ve Kaynakça</span>
                </div>
                <ul className="space-y-1.5 text-slate-700">
                  {article.sources.map((src, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-[#00A6A6] font-bold">•</span>
                      <span>{src.name}</span>
                      {src.url && (
                        <a
                          href={src.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#00A6A6] hover:underline flex items-center gap-0.5"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                      {src.isOfficial && (
                        <span className="text-[10px] bg-[#102A43] text-white px-1.5 py-0.2 rounded font-semibold">
                          Resmî Kurum
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Author Profile Box with Conflict of Interest Statement */}
            {author && (
              <div className="my-8 p-6 bg-[#F5F7F9] rounded-md border border-[#DDE3E8]">
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <div className="w-14 h-14 rounded-full bg-[#102A43] text-[#00A6A6] flex items-center justify-center font-black text-lg border-2 border-white shadow-xs shrink-0 select-none">
                    <span>{getInitials(author.name)}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-base font-bold text-[#102A43]">
                        <Link href={`/yazar/${author.slug}`} className="hover:text-[#00A6A6]">
                          {author.name}
                        </Link>
                      </h3>
                      <span className="text-xs text-[#00A6A6] font-semibold">
                        {author.title}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      {author.bio}
                    </p>

                    {/* Conflict of Interest Disclosure as required by Section 8 & 11 */}
                    {author.conflictOfInterest && (
                      <div className="p-2.5 bg-white rounded border border-[#DDE3E8] text-[11px] text-slate-500 italic">
                        <strong>Şeffaflık & Çıkar Çatışması Beyanı:</strong>{' '}
                        {author.conflictOfInterest}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Correction Report Link */}
            <div className="pt-4 border-t border-[#DDE3E8] flex justify-end">
              <CorrectionModal
                articleSlug={article.slug}
                articleTitle={article.title}
              />
            </div>
          </article>

          {/* Sidebar Column (4 cols) */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Quick Newsletter */}
            <QuickNewsletterBox />

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-white p-5 rounded-md border border-[#DDE3E8] shadow-xs">
                <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#DDE3E8]">
                  <Bookmark className="w-4 h-4 text-[#00A6A6]" />
                  <h3 className="text-sm font-black uppercase tracking-wider text-[#102A43]">
                    İlgili Haber & Analizler
                  </h3>
                </div>

                <div className="space-y-4">
                  {relatedArticles.map((rel) => (
                    <article key={rel.id} className="group flex gap-3 items-start">
                      <div className="w-20 h-16 rounded overflow-hidden bg-slate-100 shrink-0 border border-[#DDE3E8]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={rel.featuredImage}
                          alt={rel.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] font-bold text-[#00A6A6] uppercase tracking-wider block">
                          {rel.category}
                        </span>
                        <h4 className="text-xs font-bold text-[#102A43] group-hover:text-[#00A6A6] leading-snug line-clamp-2 transition-colors">
                          <Link href={`/haber/${rel.slug}`}>{rel.title}</Link>
                        </h4>
                        <span className="text-[10px] text-[#5B6B79] block mt-0.5">
                          {formatDate(rel.publishedAt)}
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* Editorial Policy Reminder Callout */}
            <div className="bg-[#EAF6F8] p-5 rounded-md border border-[#00A6A6]/30 text-xs text-[#102A43]">
              <div className="font-bold uppercase tracking-wider text-[#00A6A6] mb-2 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                <span>Editoryal Standartlarımız</span>
              </div>
              <p className="text-slate-700 leading-relaxed mb-3">
                Sağlık Turizmi Radarı, haberlerinde doğrulanmış resmî belgeleri, tebliğleri ve birincil kaynakları esas alır. Tıbbi tedavi vaadinde bulunmaz.
              </p>
              <Link
                href="/yayin-ilkeleri"
                className="font-bold text-[#00A6A6] hover:underline"
              >
                Yayın İlkelerimizi İnceleyin →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
