import React from 'react';
import Link from 'next/link';

interface RadarLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export default function RadarLogo({ className = '', size = 'md', variant = 'dark' }: RadarLogoProps) {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 28,
    md: 38,
    lg: 48,
  };

  const currentSize = iconSizes[size];

  return (
    <Link
      href="/"
      className={`group flex items-center gap-3 transition-opacity hover:opacity-95 ${className}`}
      aria-label="Sağlık Turizmi Radarı Ana Sayfa"
    >
      {/* Radar signal SVG graphic */}
      <div className="relative flex items-center justify-center shrink-0">
        <svg
          width={currentSize}
          height={currentSize}
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 group-hover:scale-105"
        >
          {/* Outer circle */}
          <circle cx="24" cy="24" r="21" stroke={isLight ? '#EAF6F8' : '#102A43'} strokeWidth="2.5" strokeOpacity={isLight ? '0.5' : '0.2'} />
          
          {/* Middle radar circle */}
          <circle cx="24" cy="24" r="14" stroke="#00A6A6" strokeWidth="2" strokeOpacity="0.5" />
          
          {/* Inner radar ring */}
          <circle cx="24" cy="24" r="7" stroke="#00A6A6" strokeWidth="2" />
          
          {/* Center signal pulse dot */}
          <circle cx="24" cy="24" r="3.5" fill="#00A6A6" />
          
          {/* Radar beam / sweep scan line */}
          <path
            d="M24 24L37 11"
            stroke="#00A6A6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          
          {/* Blip dot on sweep */}
          <circle cx="34" cy="14" r="2" fill={isLight ? '#FFFFFF' : '#102A43'} />
        </svg>
      </div>

      <div className="flex flex-col">
        <div className="flex items-baseline gap-1.5">
          <span
            className={`font-black tracking-tight leading-none ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
            } ${isLight ? 'text-white' : 'text-[#102A43]'}`}
          >
            SAĞLIK TURİZMİ
          </span>
          <span
            className={`font-extrabold tracking-wider leading-none text-[#00A6A6] ${
              size === 'sm' ? 'text-lg' : size === 'lg' ? 'text-2xl' : 'text-xl'
            }`}
          >
            RADARI
          </span>
        </div>
        <span
          className={`text-[10px] uppercase font-semibold tracking-wider mt-1 ${
            isLight ? 'text-[#EAF6F8]/80' : 'text-[#5B6B79]'
          }`}
        >
          Haber, Analiz ve Araştırma Platformu
        </span>
      </div>
    </Link>
  );
}
