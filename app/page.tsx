import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BookOpen, Globe2, Radio, ShieldCheck } from 'lucide-react';
import { getAllArticles } from '@/lib/services/articleService';
import { SITE_NAME, SITE_URL } from '@/lib/constants';
import { CATEGORY_LABELS, categoryHref, formatNewsDate, summarizeArticle } from '@/lib/editorial';
import type { Article } from '@/lib/types';
import NewsStream from '@/components/home/NewsStream';
import WeeklyNewsletterCTA from '@/components/home/WeeklyNewsletterCTA';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  title: { absolute: 'Sağlık Turizmi Haberleri, Mevzuat ve Analiz | Sağlık Turizmi Radarı' },
  description: 'Türkiye ve dünyadan en yeni sağlık turizmi haberleri. Güncel mevzuat, yetki belgeleri, hedef pazar analizleri ve sektörel araştırmaları takip edin.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Sağlık Turizmi Radarı | Haber, Mevzuat ve Analiz',
    description: 'Sağlık turizminde son gelişmeler, resmî duyurular ve pazar analizleri.',
    url: SITE_URL, type: 'website', locale: 'tr_TR', siteName: SITE_NAME,
    images: [{ url: '/sosyal-gorsel', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: { card: 'summary_large_image', images: ['/sosyal-gorsel'] },
};

function ArticleMeta({ article }: { article: Article }) {
  return <div className="desk-article-meta"><span>{CATEGORY_LABELS[article.category]}</span><time dateTime={article.publishedAt}>{formatNewsDate(article.publishedAt)}</time></div>;
}

function TopicSection({ title, category, articles }: { title: string; category: Article['category']; articles: Article[] }) {
  const items = articles.filter((a) => a.category === category).slice(0, 3);
  if (!items.length) return null;
  return <section className="desk-topic" aria-labelledby={`topic-${category}`}>
    <div className="desk-section-heading"><h2 id={`topic-${category}`}>{title}</h2><Link href={categoryHref(category)}>Tümünü gör <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
    <div className="desk-topic-grid">{items.map((article) => <article key={article.id}>
      {article.featuredImage && <Link className="desk-topic-image" href={`/haber/${article.slug}`} tabIndex={-1} aria-hidden="true"><Image src={article.featuredImage} alt="" fill sizes="(max-width: 640px) 100vw, 33vw" /></Link>}
      <ArticleMeta article={article} />
      <h3><Link href={`/haber/${article.slug}`}>{article.title}</Link></h3>
      <p>{article.spot}</p>
    </article>)}</div>
  </section>;
}

export default function HomePage() {
  const articles = getAllArticles();
  const [lead, ...rest] = articles;
  const secondary = rest.slice(0, 2);
  const roundup = articles.find((a) => a.title.startsWith('Sağlık Turizmi Radarı |'));
  const latestSchema = {
    '@context': 'https://schema.org', '@type': 'CollectionPage',
    name: 'Sağlık Turizmi Haberleri', url: SITE_URL, inLanguage: 'tr-TR',
    mainEntity: { '@type': 'ItemList', itemListOrder: 'https://schema.org/ItemListOrderDescending',
      itemListElement: articles.slice(0, 11).map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITE_URL}/haber/${a.slug}`, name: a.title })),
    },
  };

  return <div className="news-desk">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(latestSchema).replace(/</g, '\\u003c') }} />
    <div className="desk-container">
      <div className="desk-intro">
        <div><span className="desk-kicker">Türkiye’den dünyaya, sektörün radarı</span><h1>Sağlık turizminin gündemi</h1></div>
        <a href="#son-haberler" className="desk-latest-link"><span className="desk-status-dot" /> Son haberler <ArrowRight size={16} aria-hidden="true" /></a>
      </div>
      {lead ? <section aria-label="En yeni haberler" className="desk-headlines">
        <article className="desk-lead" data-published-at={lead.publishedAt}>
          <Link href={`/haber/${lead.slug}`} className="desk-lead-image" tabIndex={-1} aria-hidden="true">
            {lead.featuredImage && <Image src={lead.featuredImage} alt="" fill preload sizes="(max-width: 760px) 100vw, 65vw" />}
            <span className="desk-image-label"><Radio size={14} aria-hidden="true" /> En yeni haber</span>
          </Link>
          <div className="desk-lead-copy"><ArticleMeta article={lead} /><h2><Link href={`/haber/${lead.slug}`}>{lead.title}</Link></h2><p>{lead.spot}</p>
            <Link href={`/haber/${lead.slug}`} className="desk-read-link">Haberi oku <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
        </article>
        <div className="desk-secondary">{secondary.map((article) => <article key={article.id} data-published-at={article.publishedAt}>
          <Link href={`/haber/${article.slug}`} className="desk-secondary-image" tabIndex={-1} aria-hidden="true">{article.featuredImage && <Image src={article.featuredImage} alt="" fill sizes="(max-width: 760px) 100vw, 33vw" />}</Link>
          <ArticleMeta article={article} /><h2><Link href={`/haber/${article.slug}`}>{article.title}</Link></h2>
        </article>)}</div>
      </section> : <p className="py-12">Haberler hazırlanıyor. Yeni gelişmeler burada yayımlanacak.</p>}
      <div className="desk-main-grid">
        <NewsStream articles={articles.map(summarizeArticle)} />
        <aside className="desk-sidebar" aria-label="Sektör rehberi">
          <div className="desk-briefing"><div className="desk-briefing-icon"><Radio size={28} aria-hidden="true" /></div><span className="desk-kicker">Haftalık Radar</span>
            <h2>Gündemin ötesini görün.</h2><p>Mevzuattan hedef pazarlara, haftanın gelişmelerini tek bir özette takip edin.</p>
            {roundup && <Link href={`/haber/${roundup.slug}`} className="desk-briefing-story"><time dateTime={roundup.publishedAt}>{formatNewsDate(roundup.publishedAt)}</time><span>{roundup.title}</span><ArrowUpRight size={18} aria-hidden="true" /></Link>}
            <Link href="/#bulten" className="desk-briefing-cta">Ücretsiz bültene katıl <ArrowRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="desk-guide"><span className="desk-kicker">Sektör masası</span><h2>İhtiyacınız olan bilgiye ulaşın</h2>
            <Link href="/kategori/mevzuat"><ShieldCheck size={21} aria-hidden="true" /><span><strong>Mevzuat takibi</strong><small>Yetki belgesi ve resmî duyurular</small></span><ArrowUpRight size={16} aria-hidden="true" /></Link>
            <Link href="/kategori/pazarlar"><Globe2 size={21} aria-hidden="true" /><span><strong>Hedef pazarlar</strong><small>Ülkeler, fırsatlar ve hasta hareketliliği</small></span><ArrowUpRight size={16} aria-hidden="true" /></Link>
            <Link href="/kategori/arastirma"><BookOpen size={21} aria-hidden="true" /><span><strong>Araştırma kütüphanesi</strong><small>Veriler, raporlar ve sektör analizleri</small></span><ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <div className="desk-editorial-note"><ShieldCheck size={20} aria-hidden="true" /><h2>Kaynağı belli. Bakışı bağımsız.</h2><p>Haberlerimizin kaynaklarını ve yayın yaklaşımımızı inceleyin.</p><Link href="/kaynak-ve-dogrulama">Kaynak ve doğrulama politikası <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
        </aside>
      </div>
      <TopicSection title="Mevzuat masası" category="mevzuat" articles={articles} />
      <TopicSection title="Dünya ve hedef pazarlar" category="dunya" articles={articles} />
      <TopicSection title="Araştırma ve derinlemesine analiz" category="arastirma" articles={articles} />
      <nav className="desk-explore" aria-label="Diğer haber kategorileri"><h2>Sektörü her yönüyle takip edin</h2><div>{(['pazarlar', 'pazarlama', 'teknoloji', 'analiz', 'roportaj', 'etkinlikler'] as const).map((cat) => <Link key={cat} href={categoryHref(cat)}>{CATEGORY_LABELS[cat]} <ArrowUpRight size={16} aria-hidden="true" /></Link>)}</div></nav>
    </div>
    <WeeklyNewsletterCTA />
  </div>;
}
