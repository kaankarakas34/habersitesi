'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Calendar, Globe, MapPin, Mail, PenTool } from 'lucide-react';

export default function TopBar() {
  const [formattedDate, setFormattedDate] = useState('17 Eylül 2026, Perşembe');

  useEffect(() => {
    try {
      const now = new Date();
      const str = new Intl.DateTimeFormat('tr-TR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'long',
      }).format(now);
      setFormattedDate(str);
    } catch {
      // Fallback
    }
  }, []);

  return (
    <div className="bg-[#102A43] text-[#EAF6F8] text-xs border-b border-[#1D3D5E] no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-between">
        {/* Left: Date & Quick Region Links */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-300 font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#00A6A6]" />
            <span>{formattedDate}</span>
          </div>

          <span className="hidden sm:inline-block text-[#1D3D5E]">|</span>

          {/* Quick Hub Links */}
          <div className="flex items-center gap-3">
            <Link
              href="/kategori/gundem"
              className="flex items-center gap-1 text-white hover:text-[#00A6A6] transition-colors font-medium"
            >
              <MapPin className="w-3.5 h-3.5 text-[#00A6A6]" />
              <span>Türkiye</span>
            </Link>
            <span className="text-slate-500 text-[10px]">•</span>
            <Link
              href="/kategori/dunya"
              className="flex items-center gap-1 text-white hover:text-[#00A6A6] transition-colors font-medium"
            >
              <Globe className="w-3.5 h-3.5 text-[#00A6A6]" />
              <span>Dünya</span>
            </Link>
          </div>
        </div>

        {/* Right: Newsletter, Write For Us, LinkedIn */}
        <div className="flex items-center gap-4">
          <Link
            href="#bulten"
            className="flex items-center gap-1.5 text-[#00A6A6] hover:text-white transition-colors font-semibold"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Haftalık Radar</span>
          </Link>

          <span className="text-[#1D3D5E]">|</span>

          <Link
            href="/yazar-ol"
            className="hidden md:flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
          >
            <PenTool className="w-3.5 h-3.5 text-[#00A6A6]" />
            <span>Yazar Ol</span>
          </Link>

          <span className="hidden md:inline-block text-[#1D3D5E]">|</span>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-slate-300 hover:text-[#00A6A6] transition-colors"
            aria-label="LinkedIn Sayfamız"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.89 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z"/></svg>
            <span className="hidden lg:inline">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
}
