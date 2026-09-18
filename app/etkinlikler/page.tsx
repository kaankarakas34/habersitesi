import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarDays, MapPin, Video, ExternalLink, ChevronRight, PlusCircle } from 'lucide-react';
import { getAllEvents } from '@/lib/services/articleService';

import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Sağlık Turizmi Etkinlikleri & Fuarları 2026 — Sağlık Turizmi Radarı',
  description:
    'Türkiye ve dünyadaki medikal turizm fuarları, B2B alım heyetleri, sektörel zirveler ve online webinarlar takvimi.',
  alternates: {
    canonical: `${SITE_URL}/etkinlikler`,
  },
};

export default function EventsPage() {
  const events = getAllEvents();

  return (
    <div className="py-8 sm:py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-xs text-[#5B6B79] mb-4">
          <Link href="/" className="hover:text-[#00A6A6]">
            Ana Sayfa
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-bold text-[#102A43]">Etkinlikler</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b-2 border-[#102A43]">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <CalendarDays className="w-6 h-6 text-[#00A6A6]" />
              <h1 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight">
                Sağlık Turizmi Etkinlik ve Fuar Takvimi
              </h1>
            </div>
            <p className="text-sm text-slate-600 max-w-2xl leading-relaxed">
              2026 yılı boyunca ulusal ve uluslararası arenada gerçekleşecek B2B fuarlar, bakanlık destekli ticaret heyetleri, zirveler ve webinarlar.
            </p>
          </div>

          <a
            href="mailto:etkinlik@saglikturizmiradari.com"
            className="self-start sm:self-auto px-4 py-2 bg-[#102A43] hover:bg-[#1D3D5E] text-white text-xs font-bold rounded flex items-center gap-2 transition-colors"
          >
            <PlusCircle className="w-4 h-4 text-[#00A6A6]" />
            <span>Etkinlik Bildir</span>
          </a>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="bg-[#F5F7F9] border-2 border-[#DDE3E8] rounded-md p-6 flex flex-col justify-between hover:border-[#00A6A6] transition-colors shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-[#102A43] text-white text-[10px] font-black uppercase rounded">
                    {evt.category}
                  </span>

                  {evt.isOnline ? (
                    <span className="flex items-center gap-1 text-xs font-bold text-[#00A6A6] bg-[#EAF6F8] px-2.5 py-1 rounded">
                      <Video className="w-3.5 h-3.5" />
                      Çevrim İçi
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-white px-2.5 py-1 rounded border border-[#DDE3E8]">
                      <MapPin className="w-3.5 h-3.5 text-[#00A6A6]" />
                      {evt.city}, {evt.country}
                    </span>
                  )}
                </div>

                <div className="text-sm font-black text-[#C62828] mb-2">
                  {evt.date}
                </div>

                <h2 className="text-base font-bold text-[#102A43] mb-3 leading-snug">
                  {evt.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {evt.description}
                </p>

                <div className="p-2.5 bg-white rounded border border-[#DDE3E8] text-xs mb-4">
                  <span className="text-[#5B6B79] block text-[10px] uppercase font-bold">
                    Organizatör:
                  </span>
                  <span className="font-semibold text-[#102A43]">{evt.organizer}</span>
                </div>
              </div>

              <div className="pt-3 border-t border-[#DDE3E8] flex items-center justify-between">
                <span className="text-xs text-[#5B6B79]">
                  Konum: {evt.location}
                </span>
                <a
                  href={evt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 bg-[#00A6A6] hover:bg-[#008E8E] text-white text-xs font-bold rounded flex items-center gap-1 transition-colors"
                >
                  <span>Etkinlik Sayfası</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
