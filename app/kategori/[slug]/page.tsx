import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Clock, Calendar, ChevronRight, Tag, Bookmark } from 'lucide-react';
import { Category } from '@/lib/types';
import {
  getArticlesByCategory,
  getAllArticles,
  getEditorPicks,
} from '@/lib/services/articleService';
import QuickNewsletterBox from '@/components/home/QuickNewsletterBox';

import { BreadcrumbJsonLd } from '@/components/seo/JsonLd';

export const dynamic = 'force-dynamic';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

const CATEGORY_META: Record<
  string,
  { title: string; subtitle: string; description: string }
> = {
  gundem: {
    title: 'Gündem & Yatırımlar',
    subtitle: 'Türkiye ve Sektörel Sağlık Turizmi Gelişmeleri',
    description:
      'Türkiye sağlık turizmindeki en güncel yatırımlar, ortaklıklar, uluslararası hasta merkezleri ve sektörel iş birlikleri.',
  },
  dunya: {
    title: 'Dünya Radarı',
    subtitle: 'Küresel Sağlık Turizmi ve Hasta Hareketliliği',
    description:
      'Avrupa, Amerika, Körfez ve Asya’daki medikal seyahat politikaları, rakip ülke stratejileri ve küresel sağlık regülasyonları.',
  },
  mevzuat: {
    title: 'Mevzuat & Hukuk',
    subtitle: 'Yetki Belgeleri, Teşvikler ve Resmî Gazete Tebliğleri',
    description:
      'Uluslararası sağlık turizmi yetki belgesi, reklam kuralları, KVKK uyumu ve Ticaret Bakanlığı hizmet ihracatı destekleri.',
  },
  pazarlar: {
    title: 'Pazar Dosyaları',
    subtitle: 'Hedef Ülke ve Bölge Analizleri',
    description:
      'Almanya, İngiltere, Körfez, ABD ve Orta Asya pazarlarında hasta beklentileri, demografik veriler ve öne çıkan tedaviler.',
  },
  pazarlama: {
    title: 'Sağlık Turizmi Pazarlaması',
    subtitle: 'Hasta Kazanımı, Performans ve Marka Güveni',
    description:
      'Google Ads, Meta reklamları, uluslararası SEO (GEO), çok dilli web siteleri, CRM ve çağrı merkezi koordinasyonu.',
  },
  teknoloji: {
    title: 'Teknoloji & Yapay Zekâ',
    subtitle: 'Dijital Dönüşüm ve Otomasyon',
    description:
      'Yapay zekâ destekli hasta triyajı, çok dilli chatbotlar, tele-sağlık ve güvenli hasta veri sistemleri.',
  },
  analiz: {
    title: 'Radar Analiz',
    subtitle: 'Sektörel Etki ve Gelecek Projeksiyonları',
    description:
      'Mevzuat değişikliklerinin sektöre etkileri, rekabet analizleri, riskler ve sağlık turizmi yöneticileri için stratejik çıkarımlar.',
  },
  roportaj: {
    title: 'Röportajlar & Sektör Görüşleri',
    subtitle: 'Liderler, Hekimler ve Yöneticiler',
    description:
      'Klinik yöneticileri, sağlık turizmi profesyonelleri, akademisyenler ve kamu temsilcileriyle derinlemesine söyleşiler.',
  },
  arastirma: {
    title: 'Araştırma & Rapor',
    subtitle: 'Saha Verileri ve Analitik Raporlar',
    description:
      'Uluslararası hasta anketleri, sektör büyüme verileri, çağrı merkezi benchmark raporları ve metodolojik araştırmalar.',
  },
};

import { SITE_URL } from '@/lib/constants';

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const meta = CATEGORY_META[slug];

  if (!meta) {
    return { title: 'Kategori Bulunamadı' };
  }

  const canonicalUrl = `${SITE_URL}/kategori/${slug}`;

  return {
    title: `${meta.title} — Sağlık Turizmi Radarı`,
    description: meta.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${meta.title} — Sağlık Turizmi Radarı`,
      description: meta.description,
      url: canonicalUrl,
      siteName: 'Sağlık Turizmi Radarı',
      locale: 'tr_TR',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${meta.title} — Sağlık Turizmi Radarı`,
      description: meta.description,
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const categoryMeta = CATEGORY_META[slug];

  if (!categoryMeta) {
    notFound();
  }

  const articles = getArticlesByCategory(slug as Category);
  const editorPicks = getEditorPicks(3);

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

  const featured = articles[0];
  const listArticles = articles.slice(1);

  return (
    <div className="py-8 sm:py-12 bg-white min-h-screen">
      <BreadcrumbJsonLd
        items={[
          { name: 'Ana Sayfa', url: 'https://saglikturizmiradari.com' },
          { name: categoryMeta.title, url: `https://saglikturizmiradari.com/kategori/${slug}` },
        ]}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[#5B6B79] mb-4">
          <Link href="/" className="hover:text-[#00A6A6]">
            Ana Sayfa
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-[#102A43]">Kategori</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-[#00A6A6] font-bold">{categoryMeta.title}</span>
        </nav>

        {/* Category Header */}
        <div className="pb-6 mb-8 border-b-2 border-[#102A43]">
          <span className="text-xs font-bold text-[#00A6A6] uppercase tracking-wider block mb-1">
            {categoryMeta.subtitle}
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight mb-2">
            {categoryMeta.title}
          </h1>
          <p className="text-sm text-slate-600 max-w-3xl leading-relaxed">
            {categoryMeta.description}
          </p>
        </div>

        {/* Layout: Main Articles (8 cols) + Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-8">
            {/* Featured Category Article */}
            {featured ? (
              <article className="group mb-10 pb-8 border-b border-[#DDE3E8]">
                <div className="relative aspect-16/9 w-full rounded-md overflow-hidden bg-slate-100 mb-4 border border-[#DDE3E8]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={featured.featuredImage}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 bg-[#102A43] text-[#00A6A6] text-xs font-bold uppercase rounded">
                    ÖNE ÇIKAN İÇERİK
                  </span>
                </div>

                <div className="flex items-center gap-3 text-xs text-[#5B6B79] mb-2">
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#00A6A6]" />
                    {formatDate(featured.publishedAt)}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {featured.readingTime} dk okuma
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#102A43] group-hover:text-[#00A6A6] transition-colors leading-snug mb-3">
                  <Link href={`/haber/${featured.slug}`}>{featured.title}</Link>
                </h2>

                <p className="text-sm text-slate-700 leading-relaxed line-clamp-3 mb-4">
                  {featured.spot}
                </p>

                <Link
                  href={`/haber/${featured.slug}`}
                  className="font-bold text-xs text-[#00A6A6] hover:underline"
                >
                  Yazının Tamamını Oku →
                </Link>
              </article>
            ) : (
              <div className="p-8 text-center bg-[#F5F7F9] rounded border border-[#DDE3E8] text-sm text-slate-600">
                Bu kategoride henüz yayımlanmış içerik bulunmamaktadır.
              </div>
            )}

            {/* List of articles */}
            {listArticles.length > 0 && (
              <div className="space-y-6">
                <h3 className="text-sm font-bold uppercase tracking-wider text-[#102A43] pb-2 border-b border-[#DDE3E8]">
                  Diğer {categoryMeta.title} İçerikleri
                </h3>

                <div className="divide-y divide-[#DDE3E8]">
                  {listArticles.map((item) => (
                    <article
                      key={item.id}
                      className="py-5 first:pt-0 group flex flex-col sm:flex-row gap-4 items-start"
                    >
                      <div className="w-full sm:w-44 aspect-16/10 shrink-0 rounded overflow-hidden bg-slate-100 border border-[#DDE3E8]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.featuredImage}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-[#5B6B79] mb-1.5">
                          <span>{formatDate(item.publishedAt)}</span>
                          <span>•</span>
                          <span>{item.readingTime} dk okuma</span>
                        </div>

                        <h4 className="text-base font-bold text-[#102A43] group-hover:text-[#00A6A6] transition-colors leading-snug mb-2 line-clamp-2">
                          <Link href={`/haber/${item.slug}`}>{item.title}</Link>
                        </h4>

                        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                          {item.spot}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            <QuickNewsletterBox />

            {/* Editor Picks */}
            <div className="bg-[#F5F7F9] p-5 rounded-md border border-[#DDE3E8]">
              <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#DDE3E8]">
                <Bookmark className="w-4 h-4 text-[#00A6A6]" />
                <h3 className="text-sm font-black uppercase tracking-wider text-[#102A43]">
                  Editörün Tavsiyeleri
                </h3>
              </div>

              <div className="space-y-4">
                {editorPicks.map((pick) => (
                  <article key={pick.id} className="group">
                    <span className="text-[10px] font-bold text-[#00A6A6] uppercase tracking-wider block mb-1">
                      {pick.category}
                    </span>
                    <h4 className="text-xs font-bold text-[#102A43] group-hover:text-[#00A6A6] transition-colors leading-snug line-clamp-2">
                      <Link href={`/haber/${pick.slug}`}>{pick.title}</Link>
                    </h4>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
