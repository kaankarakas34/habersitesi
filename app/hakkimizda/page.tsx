import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Shield, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Hakkımızda — Sağlık Turizmi Radarı',
  description:
    'Sağlık Turizmi Radarı, Türkiye ve dünyadan sağlık turizmi haberleri, mevzuat analizleri ve pazar araştırmaları yayımlayan bağımsız B2B sektörel medya platformudur.',
};

export default function HakkimizdaPage() {
  return (
    <div className="py-10 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pb-6 mb-8 border-b-2 border-[#102A43]">
          <span className="text-xs font-bold text-[#00A6A6] uppercase tracking-wider block mb-2">
            Kurumsal
          </span>
          <h1 className="text-3xl font-black text-[#102A43] tracking-tight">
            Hakkımızda
          </h1>
        </div>

        <div className="prose-editorial space-y-6">
          <p>
            <strong>Sağlık Turizmi Radarı</strong>, Türkiye merkezli fakat dünyadaki sağlık turizmi ve önemli sağlık sektörü gelişmelerini de yakından izleyen bağımsız görünümlü bir B2B sektörel medya platformudur.
          </p>

          <p>
            Platform; bir klinik, hastane, sağlık turizmi acentesi veya reklam ajansı sitesi değildir. Kullanıcıya tedavi satmaz ve tıbbi tavsiye vermez. Haber, analiz, mevzuat, araştırma, röportaj, pazar bilgisi ve sektör görüşü yayımlayan bağımsız bir yayın kimliği taşır.
          </p>

          <h2>Yayın Amacı</h2>
          <p>
            Sağlık turizmi sektöründe faaliyet gösteren profesyonellere güncel gelişmeleri aktarmak, gelişmelerin sektöre etkisini açıklamak, güvenilir kaynakları bir araya getirmek ve sektör paydaşlarının görüşlerini tarafsız bir platformda buluşturmak.
          </p>

          <h2>Ana Hedef Kitle</h2>
          <ul>
            <li>Hastane ve klinik yöneticileri, sağlık turizmi departmanları</li>
            <li>Doktorlar, sağlık yöneticileri ve uluslararası hasta koordinatörleri</li>
            <li>Yetkili sağlık turizmi acenteleri ve pazarlama ekipleri</li>
            <li>CRM, çağrı merkezi ve sağlık teknolojisi şirketleri</li>
            <li>Sektör dernekleri, kamu temsilcileri, akademisyenler ve araştırmacılar</li>
            <li>Sağlık turizmi yatırımcıları ve uluslararası hasta birimleri</li>
          </ul>

          <h2>Overseas Marketing ile İlişki</h2>

          <div className="p-5 bg-[#EAF6F8] rounded border-l-4 border-[#00A6A6] text-sm not-prose">
            <div className="flex items-center gap-2 mb-2 text-[#00A6A6] font-bold text-xs uppercase tracking-wider">
              <Shield className="w-4 h-4" />
              <span>Şeffaflık ve Editoryal Bağımsızlık Bildirimi</span>
            </div>
            <p className="text-[#17212B] leading-relaxed text-sm">
              Sağlık Turizmi Radarı, sağlık turizmi sektörüne yönelik bağımsız editoryal içerikler yayımlar.
              Yayının <strong>Overseas Marketing</strong> ile ticari bağlantısı bulunmaktadır. Bu ilişki,
              haberlerin doğruluğu ve editoryal değerlendirme ilkelerini değiştirmez. Sponsorlu çalışmalar
              açık biçimde etiketlenir. Overseas Marketing tarafından desteklenen araştırmalarda
              "Araştırma desteği" açıklaması kullanılır.
            </p>
          </div>

          <h2>İletişim</h2>
          <p>
            Editoryal sorularınız, yazar başvuruları ve basın iş birlikleri için:{' '}
            <Link href="/iletisim" className="text-[#00A6A6] hover:underline">
              İletişim sayfamızı ziyaret edin.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
