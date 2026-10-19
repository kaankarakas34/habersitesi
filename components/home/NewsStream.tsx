'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, Clock } from 'lucide-react';
import { CATEGORY_LABELS, formatNewsDate, type NewsSummary } from '@/lib/editorial';

export default function NewsStream({ articles }: { articles: NewsSummary[] }) {
  const [category, setCategory] = useState('all');
  const [visible, setVisible] = useState(8);
  const categories = Object.keys(CATEGORY_LABELS).filter((key) => articles.some((a) => a.category === key));
  // The first three stories already appear in the headline area. Category filters
  // include them again so the newest story in each category is always available.
  const filtered = category === 'all' ? articles.slice(3) : articles.filter((a) => a.category === category);

  return (
    <section id="son-haberler" aria-labelledby="stream-title" className="news-stream">
      <div className="desk-section-heading">
        <div><span className="desk-kicker">Haber akışı</span><h2 id="stream-title">Son gelişmeler</h2></div>
        <span className="desk-sort"><Clock size={14} aria-hidden="true" /> En yeniden eskiye</span>
      </div>
      <div className="desk-filters" role="group" aria-label="Haber kategorisi">
        {['all', ...categories].map((key) => (
          <button key={key} type="button" aria-pressed={category === key}
            onClick={() => { setCategory(key); setVisible(8); }}>
            {key === 'all' ? 'Tümü' : CATEGORY_LABELS[key as keyof typeof CATEGORY_LABELS]}
          </button>
        ))}
      </div>
      <div className="desk-stream-list" aria-live="polite" aria-atomic="false">
        {filtered.slice(0, visible).map((article) => (
          <article key={article.id} className="desk-stream-item" data-published-at={article.publishedAt}>
            <div className="desk-stream-date"><time dateTime={article.publishedAt}>{formatNewsDate(article.publishedAt)}</time></div>
            <div className="desk-stream-copy">
              <span className="desk-category">{CATEGORY_LABELS[article.category]}</span>
              <h3><Link href={`/haber/${article.slug}`}>{article.title}</Link></h3>
              <p>{article.spot}</p>
              <span className="desk-reading">{article.readingTime} dk okuma</span>
            </div>
            {article.featuredImage && <Link href={`/haber/${article.slug}`} tabIndex={-1} aria-hidden="true" className="desk-stream-image">
              <Image src={article.featuredImage} alt="" fill sizes="(max-width: 600px) 96px, 170px" />
            </Link>}
          </article>
        ))}
      </div>
      {visible < filtered.length && <button className="desk-load-more" type="button" onClick={() => setVisible((count) => count + 8)}>
        Daha fazla haber <ArrowDown size={16} aria-hidden="true" />
      </button>}
      {filtered.length === 0 && <p className="py-8">Bu kategoride henüz haber yayımlanmadı.</p>}
    </section>
  );
}
