'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { LogOut, Globe, ExternalLink, User } from 'lucide-react';
import RadarLogo from '@/components/common/RadarLogo';

export default function AdminNavbar() {
  const [loggingOut, setLoggingOut] = useState(false);

  const handleLogout = async () => {
    try {
      setLoggingOut(true);
      await fetch('/api/admin/auth/logout', { method: 'POST' });
      window.location.href = '/admin/login';
    } catch {
      setLoggingOut(false);
      alert('Çıkış yapılırken bir hata oluştu.');
    }
  };

  return (
    <header className="bg-[#102A43] text-white border-b border-[#1D3D5E] sticky top-0 z-30 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link href="/admin" className="flex items-center gap-2.5">
            <RadarLogo size="sm" variant="light" />
            <span className="hidden sm:inline-block text-[11px] font-bold uppercase tracking-wider bg-[#00A6A6] text-white px-2 py-0.5 rounded">
              Yayın Masası
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Siteye Git Linki */}
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded hover:bg-[#1D3D5E] transition-colors"
            title="Siteyi Yeni Sekmede Aç"
          >
            <Globe className="w-3.5 h-3.5 text-[#00A6A6]" />
            <span className="hidden sm:inline">Siteyi Gör</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </Link>

          {/* Editör Göstergesi */}
          <div className="hidden md:flex items-center gap-1.5 text-xs text-slate-300 border-l border-[#1D3D5E] pl-3">
            <User className="w-3.5 h-3.5 text-[#00A6A6]" />
            <span className="font-semibold text-white">Editör</span>
          </div>

          {/* Çıkış Yap Butonu */}
          <button
            type="button"
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex items-center gap-1.5 text-xs font-bold text-red-200 hover:text-white bg-red-950/40 hover:bg-red-900/60 border border-red-800/40 px-3 py-1.5 rounded transition-colors disabled:opacity-50 cursor-pointer"
            title="Güvenli Çıkış Yap"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{loggingOut ? 'Çıkılıyor...' : 'Çıkış Yap'}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
