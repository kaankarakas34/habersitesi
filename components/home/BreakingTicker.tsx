'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, AlertCircle } from 'lucide-react';
import { Article } from '@/lib/types';

interface BreakingTickerProps {
  articles: Article[];
}

export default function BreakingTicker({ articles }: BreakingTickerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (articles.length <= 1 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % articles.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [articles.length, isPaused]);

  if (!articles || articles.length === 0) return null;

  const current = articles[currentIndex];

  const badgeColors = {
    'SON GELİŞME': 'bg-[#C62828] text-white',
    'MEVZUAT': 'bg-[#102A43] text-[#00A6A6]',
    'RADAR': 'bg-[#00A6A6] text-white',
  };

  const badgeLabel = current.breakingBadge || 'SON GELİŞME';
  const badgeStyle = badgeColors[badgeLabel] || badgeColors['SON GELİŞME'];

  return (
    <div
      className="bg-[#EAF6F8] border-b border-[#DDE3E8] py-2 no-print"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 text-xs sm:text-sm">
        {/* Left: Badge & Live Item */}
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <span
            className={`shrink-0 px-2.5 py-1 text-[11px] font-black uppercase tracking-wider rounded flex items-center gap-1.5 shadow-xs ${badgeStyle}`}
          >
            <AlertCircle className="w-3.5 h-3.5" />
            <span>{badgeLabel}</span>
          </span>

          <Link
            href={`/haber/${current.slug}`}
            className="truncate font-semibold text-[#102A43] hover:text-[#00A6A6] transition-colors"
          >
            {current.title}
          </Link>
        </div>

        {/* Right: Controls & Counter */}
        {articles.length > 1 && (
          <div className="flex items-center gap-1.5 shrink-0 text-slate-500">
            <span className="text-[11px] font-mono font-medium hidden sm:inline">
              {currentIndex + 1}/{articles.length}
            </span>
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length)}
              className="p-1 rounded hover:bg-white hover:text-[#102A43] transition-colors"
              aria-label="Önceki Gelişme"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => setCurrentIndex((prev) => (prev + 1) % articles.length)}
              className="p-1 rounded hover:bg-white hover:text-[#102A43] transition-colors"
              aria-label="Sonraki Gelişme"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
