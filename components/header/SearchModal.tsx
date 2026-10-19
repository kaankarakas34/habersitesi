'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight } from 'lucide-react';

const POPULAR_TAGS = ['Yetki Belgesi', 'Mevzuat', 'Almanya', 'İngiltere', 'Diş Turizmi', 'Yapay Zekâ', 'CRM', 'Teşvikler'];

export default function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();
  useEffect(() => {
    if (isOpen) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [isOpen]);

  const search = (value: string) => {
    if (!value.trim()) return;
    router.push(`/arama?q=${encodeURIComponent(value.trim())}`);
    onClose();
  };

  return <dialog ref={dialogRef} className="desk-search-dialog" onClose={onClose} onClick={(event) => { if (event.target === event.currentTarget) onClose(); }} aria-labelledby="search-title">
    <div className="desk-search-content">
      <div className="desk-mobile-heading"><h2 id="search-title">Radarda arayın</h2><button type="button" aria-label="Aramayı kapat" onClick={onClose}><X size={22} aria-hidden="true" /></button></div>
      <form onSubmit={(event) => { event.preventDefault(); search(query); }}>
        <label htmlFor="site-search">Haber, mevzuat veya hedef pazar</label>
        <div className="desk-search-field"><Search size={20} aria-hidden="true" /><input id="site-search" name="q" autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Aramak istediğiniz konuyu yazın" /><button type="submit" aria-label="Ara"><ArrowRight size={22} aria-hidden="true" /></button></div>
      </form>
      <p>Sık aranan konular</p><div className="desk-search-tags">{POPULAR_TAGS.map((tag) => <button type="button" key={tag} onClick={() => search(tag)}>{tag}</button>)}</div>
    </div>
  </dialog>;
}
