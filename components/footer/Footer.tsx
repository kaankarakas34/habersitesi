import React from 'react';
import Link from 'next/link';
import { Mail, ArrowRight, Shield, FileText } from 'lucide-react';
import RadarLogo from '../common/RadarLogo';

export default function Footer() {
  return (
    <footer className="bg-[#102A43] text-white border-t-4 border-[#00A6A6] mt-16 no-print">
      {/* Upper Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column (2 cols wide on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <RadarLogo size="md" variant="light" />
            
            <p className="text-sm text-slate-300 leading-relaxed pr-4">
              <strong>Sağlık Turizmi Radarı</strong>, Türkiye merkezli fakat dünyadaki sağlık turizmi ve sektörel gelişmeleri yakından izleyen bağımsız B2B sektörel haber, mevzuat, pazar analizi ve araştırma platformudur.
            </p>

            <div className="p-3.5 bg-[#1D3D5E]/70 rounded border border-[#1D3D5E] text-xs text-slate-300">
              <div className="flex items-center gap-1.5 font-bold text-[#00A6A6] mb-1">
                <Shield className="w-3.5 h-3.5" />
                <span>Editoryal Şeffaflık & Bağımsızlık</span>
              </div>
              <p className="text-[11px] leading-normal text-slate-300">
                Sağlık Turizmi Radarı, sağlık turizmi sektörüne yönelik bağımsız editoryal içerikler yayımlar. Yayının Overseas Marketing ile ticari bağlantısı bulunmaktadır. Bu ilişki haberlerin doğruluğu ve editoryal değerlendirme ilkelerini değiştirmez.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded bg-[#1D3D5E] hover:bg-[#00A6A6] text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.89 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z"/></svg>
              </a>
              <Link
                href="#bulten"
                className="w-8 h-8 rounded bg-[#1D3D5E] hover:bg-[#00A6A6] text-white flex items-center justify-center transition-colors"
                aria-label="Bülten Aboneliği"
              >
                <Mail className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Sütun 1: Yayın */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00A6A6] mb-4 pb-1 border-b border-[#1D3D5E]">
              Yayın Masası
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/kategori/gundem" className="hover:text-white transition-colors">
                  Gündem & Yatırımlar
                </Link>
              </li>
              <li>
                <Link href="/kategori/dunya" className="hover:text-white transition-colors">
                  Dünya Radarı
                </Link>
              </li>
              <li>
                <Link href="/kategori/mevzuat" className="hover:text-white transition-colors">
                  Mevzuat & Resmî Gazete
                </Link>
              </li>
              <li>
                <Link href="/kategori/analiz" className="hover:text-white transition-colors">
                  Radar Analiz
                </Link>
              </li>
              <li>
                <Link href="/kategori/roportaj" className="hover:text-white transition-colors">
                  Röportajlar & Görüşler
                </Link>
              </li>
              <li>
                <Link href="/kategori/arastirma" className="hover:text-white transition-colors">
                  Araştırma ve Raporlar
                </Link>
              </li>
              <li>
                <Link href="/etkinlikler" className="hover:text-white transition-colors">
                  Sektörel Etkinlikler
                </Link>
              </li>
            </ul>
          </div>

          {/* Sütun 2: Konular & Pazarlar */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00A6A6] mb-4 pb-1 border-b border-[#1D3D5E]">
              Konular & Pazarlar
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/kategori/pazarlar" className="hover:text-white transition-colors">
                  Pazar Dosyaları (Almanya, UK, Körfez)
                </Link>
              </li>
              <li>
                <Link href="/kategori/pazarlama" className="hover:text-white transition-colors">
                  Sağlık Turizmi Pazarlaması
                </Link>
              </li>
              <li>
                <Link href="/kategori/teknoloji" className="hover:text-white transition-colors">
                  Teknoloji & Yapay Zekâ
                </Link>
              </li>
              <li>
                <Link href="/arama?q=Diş+Turizmi" className="hover:text-white transition-colors">
                  Diş Turizmi
                </Link>
              </li>
              <li>
                <Link href="/arama?q=Yetki+Belgesi" className="hover:text-white transition-colors">
                  Yetki Belgesi & Akreditasyon
                </Link>
              </li>
              <li>
                <Link href="/arama?q=CRM" className="hover:text-white transition-colors">
                  Hasta İletişimi & CRM
                </Link>
              </li>
              <li>
                <Link href="/arama?q=KVKK" className="hover:text-white transition-colors">
                  Sağlık Verisi & KVKK
                </Link>
              </li>
            </ul>
          </div>

          {/* Sütun 3: Kurumsal & Güven Politikaları */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00A6A6] mb-4 pb-1 border-b border-[#1D3D5E]">
              Kurumsal & İlkeler
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/kunye" className="hover:text-white transition-colors">
                  Künye & Yayın Kurulu
                </Link>
              </li>
              <li>
                <Link href="/yazarlar" className="hover:text-white transition-colors">
                  Yazarlarımız
                </Link>
              </li>
              <li>
                <Link href="/yazar-ol" className="hover:text-white transition-colors text-[#00A6A6] font-semibold">
                  Yazar Ol (Katkıda Bulun)
                </Link>
              </li>
              <li>
                <Link href="/yayin-ilkeleri" className="hover:text-white transition-colors">
                  Yayın İlkeleri
                </Link>
              </li>
              <li>
                <Link href="/editorial-bagimsizlik" className="hover:text-white transition-colors">
                  Editoryal Bağımsızlık
                </Link>
              </li>
              <li>
                <Link href="/kaynak-ve-dogrulama" className="hover:text-white transition-colors">
                  Kaynak & Doğrulama
                </Link>
              </li>
              <li>
                <Link href="/duzeltme-politikasi" className="hover:text-white transition-colors">
                  Düzeltme Politikası
                </Link>
              </li>
              <li>
                <Link href="/sponsorlu-icerik" className="hover:text-white transition-colors">
                  Sponsorlu İçerik Politikası
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal Bottom Bar */}
      <div className="bg-[#0B1D2E] text-slate-400 text-xs border-t border-[#1D3D5E]/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div>
            <p>© {new Date().getFullYear()} Sağlık Turizmi Radarı. Tüm hakları saklıdır.</p>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Bu sitede yer alan içerikler tıbbi teşhis, tedavi veya danışmanlık amacı taşımaz; sektörel bilgilendirme niteliğindedir.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[11px]">
            <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
              Gizlilik Politikası
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/cerez-politikasi" className="hover:text-white transition-colors">
              Çerez Politikası
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">
              Kullanım Koşulları
            </Link>
            <span className="text-slate-600">•</span>
            <Link href="/kvkk" className="hover:text-white transition-colors">
              KVKK Aydınlatma Metni
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
