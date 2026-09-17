import React from 'react';
import Link from 'next/link';
import { AlertCircle, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 rounded-full bg-[#EAF6F8] flex items-center justify-center mx-auto mb-6 border border-[#00A6A6]/30">
          <AlertCircle className="w-8 h-8 text-[#00A6A6]" />
        </div>

        <h1 className="text-4xl font-black text-[#102A43] mb-2">404</h1>
        <h2 className="text-xl font-bold text-[#102A43] mb-3">
          İçerik Bulunamadı
        </h2>
        <p className="text-sm text-slate-600 mb-8 leading-relaxed">
          Aradığınız haber, mevzuat veya pazar dosyası bu adreste mevcut değil. Arşivlenmiş, taşınmış veya URL hatalı girilmiş olabilir.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="px-5 py-2.5 bg-[#102A43] hover:bg-[#1D3D5E] text-white font-bold text-sm rounded transition-colors flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Ana Sayfaya Dön</span>
          </Link>
          <Link
            href="/arama"
            className="px-5 py-2.5 bg-[#EAF6F8] hover:bg-[#d8eef1] text-[#102A43] font-bold text-sm rounded border border-[#00A6A6]/30 transition-colors flex items-center gap-2"
          >
            <Search className="w-4 h-4 text-[#00A6A6]" />
            <span>İçerik Ara</span>
          </Link>
        </div>

        <div className="mt-8 pt-6 border-t border-[#DDE3E8]">
          <p className="text-xs text-slate-500 mb-3">Veya bu kategorilerden birini ziyaret edin:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Gündem', 'Mevzuat', 'Pazarlar', 'Analiz', 'Röportaj'].map((cat) => (
              <Link
                key={cat}
                href={`/kategori/${cat.toLowerCase().replace('ö', 'o').replace('ü', 'u').replace('ş', 's').replace('ı', 'i')}`}
                className="text-xs text-[#00A6A6] hover:underline font-semibold"
              >
                {cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
