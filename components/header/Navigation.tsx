'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Home, X } from 'lucide-react';

const NAV_ITEMS = [
  { name: 'Gündem', href: '/kategori/gundem' },
  { name: 'Dünya', href: '/kategori/dunya' },
  { name: 'Mevzuat', href: '/kategori/mevzuat' },
  { name: 'Pazarlar', href: '/kategori/pazarlar' },
  { name: 'Pazarlama', href: '/kategori/pazarlama' },
  { name: 'Teknoloji', href: '/kategori/teknoloji' },
  { name: 'Analiz', href: '/kategori/analiz' },
  { name: 'Röportaj', href: '/kategori/roportaj' },
  { name: 'Araştırma', href: '/kategori/arastirma' },
  { name: 'Etkinlikler', href: '/etkinlikler' },
];

export default function Navigation({ mobileOpen, onMobileClose }: { mobileOpen?: boolean; onMobileClose?: () => void }) {
  const pathname = usePathname();
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (mobileOpen) dialogRef.current?.showModal();
    else dialogRef.current?.close();
  }, [mobileOpen]);

  return <>
    <nav className="desk-navigation no-print" aria-label="Ana menü">
      <div className="desk-nav-inner">
        <Link href="/" aria-label="Ana sayfa" aria-current={pathname === '/' ? 'page' : undefined}><Home size={17} aria-hidden="true" /></Link>
        {NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>{item.name}</Link>)}
      </div>
    </nav>
    <dialog ref={dialogRef} id="mobile-menu" className="desk-mobile-dialog" onClose={onMobileClose} onClick={(event) => { if (event.target === event.currentTarget) onMobileClose?.(); }} aria-labelledby="mobile-menu-title">
      <div className="desk-mobile-content">
        <div className="desk-mobile-heading"><h2 id="mobile-menu-title">Sağlık Turizmi Radarı</h2><button type="button" aria-label="Menüyü kapat" onClick={onMobileClose}><X size={22} aria-hidden="true" /></button></div>
        <nav aria-label="Mobil ana menü"><Link href="/" onClick={onMobileClose}>Ana sayfa</Link>{NAV_ITEMS.map((item) => <Link key={item.href} href={item.href} onClick={onMobileClose} aria-current={pathname === item.href ? 'page' : undefined}>{item.name}<ArrowUpRight size={16} aria-hidden="true" /></Link>)}</nav>
        <Link href="/yazar-ol" onClick={onMobileClose} className="desk-mobile-author">Yazar kadrosuna katılın</Link>
      </div>
    </dialog>
  </>;
}
