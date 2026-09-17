'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Globe, TrendingUp, Sparkles } from 'lucide-react';

interface NavigationProps {
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}

const MARKET_LINKS = [
  { name: 'Avrupa Genel', href: '/kategori/dunya?bolge=Avrupa' },
  { name: 'Birleşik Krallık', href: '/arama?q=Birleşik+Krallık' },
  { name: 'Almanya', href: '/arama?q=Almanya' },
  { name: 'Körfez Ülkeleri (BAE, Suudi)', href: '/arama?q=Körfez' },
  { name: 'ABD ve Kanada', href: '/arama?q=Amerika' },
  { name: 'Balkanlar', href: '/arama?q=Balkanlar' },
  { name: 'Orta Asya & Türk Cumhuriyetleri', href: '/arama?q=Orta+Asya' },
  { name: 'Kuzey ve Sahra Altı Afrika', href: '/arama?q=Afrika' },
];

const MARKETING_LINKS = [
  { name: 'SEO ve GEO İçerik Stratejisi', href: '/arama?q=SEO' },
  { name: 'Google Ads & Performans Reklamları', href: '/arama?q=Google+Ads' },
  { name: 'Meta & Sosyal Medya İletişimi', href: '/arama?q=Meta' },
  { name: 'Marka, İtibar ve Hasta Güveni', href: '/arama?q=Güven' },
  { name: 'CRM & Çok Dilli Lead Yönetimi', href: '/arama?q=CRM' },
  { name: 'Çağrı Merkezi & Hasta Koordinasyonu', href: '/arama?q=Çağrı+Merkezi' },
  { name: 'Yapay Zekâ ve Otomasyon', href: '/arama?q=Yapay+Zekâ' },
];

export default function Navigation({ mobileOpen, onMobileClose }: NavigationProps) {
  const pathname = usePathname();
  const [activeMega, setActiveMega] = useState<'markets' | 'marketing' | null>(null);

  const navItems = [
    { name: 'Gündem', href: '/kategori/gundem' },
    { name: 'Dünya', href: '/kategori/dunya' },
    { name: 'Mevzuat', href: '/kategori/mevzuat' },
    { name: 'Pazarlar', href: '/kategori/pazarlar', hasMega: 'markets' },
    { name: 'Pazarlama', href: '/kategori/pazarlama', hasMega: 'marketing' },
    { name: 'Teknoloji & AI', href: '/kategori/teknoloji' },
    { name: 'Analiz', href: '/kategori/analiz' },
    { name: 'Röportaj', href: '/kategori/roportaj' },
    { name: 'Araştırma & Rapor', href: '/kategori/arastirma' },
    { name: 'Etkinlikler', href: '/etkinlikler' },
  ];

  return (
    <nav className="relative bg-[#102A43] text-white border-b border-[#1D3D5E] select-none no-print">
      {/* Desktop Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 hidden xl:block">
        <ul className="flex items-center justify-between text-sm font-semibold tracking-tight">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));

            if (item.hasMega) {
              return (
                <li
                  key={item.name}
                  className="relative group py-3"
                  onMouseEnter={() => setActiveMega(item.hasMega as 'markets' | 'marketing')}
                  onMouseLeave={() => setActiveMega(null)}
                >
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 transition-colors py-1 px-2.5 rounded ${
                      isActive
                        ? 'text-[#00A6A6] font-bold bg-[#1D3D5E]'
                        : 'text-slate-100 hover:text-[#00A6A6] hover:bg-[#1D3D5E]/60'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#00A6A6] transition-transform group-hover:rotate-180" />
                  </Link>

                  {/* Desktop Mega Dropdown */}
                  {activeMega === item.hasMega && (
                    <div className="absolute top-full left-0 z-40 w-72 bg-white text-[#17212B] rounded-b-md shadow-2xl border border-[#DDE3E8] py-2 animate-in fade-in-50 duration-150">
                      <div className="px-3 py-1.5 border-b border-[#DDE3E8] bg-[#F5F7F9] text-[11px] font-bold uppercase tracking-wider text-[#5B6B79] flex items-center gap-1.5">
                        {item.hasMega === 'markets' ? (
                          <>
                            <Globe className="w-3.5 h-3.5 text-[#00A6A6]" />
                            <span>Bölgesel Pazar Dosyaları</span>
                          </>
                        ) : (
                          <>
                            <TrendingUp className="w-3.5 h-3.5 text-[#00A6A6]" />
                            <span>Pazarlama & Büyüme Rehberleri</span>
                          </>
                        )}
                      </div>
                      <div className="py-1">
                        {(item.hasMega === 'markets' ? MARKET_LINKS : MARKETING_LINKS).map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-2 text-xs text-[#17212B] hover:bg-[#EAF6F8] hover:text-[#00A6A6] font-medium transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            }

            return (
              <li key={item.name} className="py-3">
                <Link
                  href={item.href}
                  className={`transition-colors py-1 px-2.5 rounded ${
                    isActive
                      ? 'text-[#00A6A6] font-bold bg-[#1D3D5E]'
                      : 'text-slate-100 hover:text-[#00A6A6] hover:bg-[#1D3D5E]/60'
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Medium Screen (md / lg) overflow scroll navigation */}
      <div className="max-w-7xl mx-auto px-4 hidden md:flex xl:hidden overflow-x-auto scrollbar-none py-2 gap-1 text-xs font-semibold">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`whitespace-nowrap px-3 py-1.5 rounded transition-colors ${
                isActive
                  ? 'bg-[#00A6A6] text-white'
                  : 'text-slate-200 hover:text-white hover:bg-[#1D3D5E]'
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 xl:hidden bg-black/60 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-sm bg-white h-full overflow-y-auto flex flex-col shadow-2xl animate-in slide-in-from-left duration-200 text-[#17212B]">
            {/* Header of Drawer */}
            <div className="p-4 bg-[#102A43] text-white flex items-center justify-between border-b border-[#1D3D5E]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-[#00A6A6]" />
                <span className="font-bold text-sm">Menü</span>
              </div>
              <button
                type="button"
                onClick={onMobileClose}
                className="text-slate-300 hover:text-white p-1 rounded font-bold"
                aria-label="Menüyü Kapat"
              >
                ✕
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="p-4 flex-1 space-y-1">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#5B6B79] px-2 py-1">
                Kategoriler
              </div>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={onMobileClose}
                  className="block px-3 py-2.5 rounded text-sm font-semibold hover:bg-[#EAF6F8] hover:text-[#00A6A6] transition-colors"
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 mt-4 border-t border-[#DDE3E8]">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#5B6B79] px-2 py-1">
                  Öne Çıkan Pazarlar
                </div>
                {MARKET_LINKS.slice(0, 5).map((m) => (
                  <Link
                    key={m.name}
                    href={m.href}
                    onClick={onMobileClose}
                    className="block px-3 py-2 rounded text-xs text-[#5B6B79] hover:bg-[#EAF6F8] hover:text-[#17212B]"
                  >
                    {m.name}
                  </Link>
                ))}
              </div>

              <div className="pt-4 mt-4 border-t border-[#DDE3E8]">
                <Link
                  href="/yazar-ol"
                  onClick={onMobileClose}
                  className="block text-center py-2.5 px-4 bg-[#00A6A6] text-white rounded font-bold text-xs hover:bg-[#008E8E] transition-colors"
                >
                  Yazar Başvurusu Yap
                </Link>
              </div>
            </div>
          </div>

          <div className="flex-1" onClick={onMobileClose} />
        </div>
      )}
    </nav>
  );
}
