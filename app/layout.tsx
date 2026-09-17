import type { Metadata } from 'next';
import './globals.css';
import MainHeader from '@/components/header/MainHeader';
import Footer from '@/components/footer/Footer';
import { WebsiteJsonLd } from '@/components/seo/JsonLd';

export const metadata: Metadata = {
  title: {
    template: '%s | Sağlık Turizmi Radarı',
    default: 'Sağlık Turizmi Radarı — Sağlık Turizminin Haber, Analiz ve Araştırma Platformu',
  },
  description:
    'Türkiye ve dünyadan sağlık turizmi haberleri, mevzuat değişiklikleri, hedef pazar analizleri, teknoloji ve sektör profesyonellerinin bağımsız görüşleri.',
  metadataBase: new URL('https://saglikturizmiradari.com'),
  keywords: [
    'Sağlık Turizmi',
    'Sağlık Turizmi Haberleri',
    'Sağlık Turizmi Mevzuatı',
    'Yetki Belgesi',
    'Pazar Analizi',
    'Medikal Turizm',
    'USHAŞ',
    'Sağlık Turizmi Teşvikleri',
  ],
  authors: [{ name: 'Sağlık Turizmi Radarı Editoryal' }],
  creator: 'Sağlık Turizmi Radarı',
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://saglikturizmiradari.com',
    siteName: 'Sağlık Turizmi Radarı',
    title: 'Sağlık Turizmi Radarı — Haber, Analiz ve Araştırma Platformu',
    description:
      'Türkiye ve dünyadan sağlık turizmi haberleri, mevzuat değişiklikleri ve sektör analizleri.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sağlık Turizmi Radarı',
    description: 'Sağlık turizminin haber, analiz ve araştırma platformu.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#F5F7F9] text-[#17212B] font-sans">
        <WebsiteJsonLd />
        <MainHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
