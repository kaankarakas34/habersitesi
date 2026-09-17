import React from 'react';
import Link from 'next/link';
import { CalendarDays, MapPin, Video, ExternalLink, ArrowRight } from 'lucide-react';
import { SectorEvent } from '@/lib/types';

interface EventsCalendarSectionProps {
  events: SectorEvent[];
}

export default function EventsCalendarSection({ events }: EventsCalendarSectionProps) {
  return (
    <section className="py-8 sm:py-12 bg-white border-b border-[#DDE3E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 mb-6 border-b-2 border-[#102A43]">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-5 h-5 text-[#00A6A6]" />
            <h2 className="text-xl font-black text-[#102A43] tracking-tight">
              Sektörel Etkinlikler & Fuarlar
            </h2>
          </div>
          <Link
            href="/etkinlikler"
            className="text-xs font-bold text-[#00A6A6] hover:underline flex items-center gap-1"
          >
            Tüm Etkinlik Takvimi <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.slice(0, 3).map((evt) => (
            <div
              key={evt.id}
              className="bg-[#F5F7F9] border border-[#DDE3E8] rounded-md p-5 flex flex-col justify-between hover:border-[#00A6A6] transition-colors shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 bg-white text-[#102A43] text-[10px] font-bold uppercase rounded border border-[#DDE3E8]">
                    {evt.category}
                  </span>

                  {evt.isOnline ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-[#00A6A6] bg-[#EAF6F8] px-2 py-0.5 rounded">
                      <Video className="w-3 h-3" />
                      Çevrim İçi
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-slate-700">
                      <MapPin className="w-3 h-3 text-[#00A6A6]" />
                      {evt.city}, {evt.country}
                    </span>
                  )}
                </div>

                <div className="text-xs font-bold text-[#C62828] mb-1">
                  {evt.date}
                </div>

                <h3 className="text-sm font-bold text-[#102A43] mb-2 leading-snug">
                  {evt.title}
                </h3>

                <p className="text-xs text-[#17212B]/75 line-clamp-3 leading-relaxed mb-4">
                  {evt.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DDE3E8] flex items-center justify-between text-xs">
                <span className="text-[11px] text-[#5B6B79] truncate mr-2">
                  {evt.organizer}
                </span>
                <a
                  href={evt.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#00A6A6] hover:underline flex items-center gap-1 shrink-0"
                >
                  <span>Detay</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
