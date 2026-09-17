'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Search, Mail, Menu } from 'lucide-react';
import RadarLogo from '../common/RadarLogo';
import TopBar from './TopBar';
import Navigation from './Navigation';
import SearchModal from './SearchModal';

export default function MainHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs border-b border-[#DDE3E8]">
      {/* 1. Top bar */}
      <TopBar />

      {/* 2. Main Branding & Actions Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <RadarLogo size="md" />
        </div>

        {/* Right CTA / Search Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Search Button */}
          <button
            type="button"
            onClick={() => setSearchOpen(true)}
            className="flex items-center gap-2 px-3 py-2 text-xs font-semibold text-[#17212B] bg-[#F5F7F9] hover:bg-[#EAF6F8] hover:text-[#00A6A6] border border-[#DDE3E8] rounded transition-colors"
            aria-label="Sitede Arama Yap"
          >
            <Search className="w-4 h-4 text-[#00A6A6]" />
            <span className="hidden sm:inline">Haber & Mevzuat Ara...</span>
          </button>

          {/* Newsletter Subscribe CTA */}
          <Link
            href="#bulten"
            className="hidden md:flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#00A6A6] hover:bg-[#008E8E] rounded transition-colors shadow-xs"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Bültene Katıl</span>
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden p-2 text-[#102A43] hover:bg-[#F5F7F9] rounded border border-[#DDE3E8]"
            aria-label="Menüyü Aç"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 3. Main Navigation Bar */}
      <Navigation
        mobileOpen={mobileMenuOpen}
        onMobileClose={() => setMobileMenuOpen(false)}
      />

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  );
}
