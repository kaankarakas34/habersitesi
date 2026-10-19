import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import MainHeader from '@/components/header/MainHeader';
import Footer from '@/components/footer/Footer';
import { WebsiteJsonLd, OrganizationJsonLd } from '@/components/seo/JsonLd';

import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: {
    template: '%s | Sağlık Turizmi Radarı',
    default: 'Sağlık Turizmi Radarı — Sağlık Turizminin Haber, Analiz ve Araştırma Platformu',
  },
  description:
    'Türkiye ve dünyadan sağlık turizmi haberleri, mevzuat değişiklikleri, hedef pazar analizleri, teknoloji ve sektör profesyonellerinin bağımsız görüşleri.',
  metadataBase: new URL(SITE_URL),
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
    url: SITE_URL,
    siteName: 'Sağlık Turizmi Radarı',
    title: 'Sağlık Turizmi Radarı — Haber, Analiz ve Araştırma Platformu',
    description:
      'Türkiye ve dünyadan sağlık turizmi haberleri, mevzuat değişiklikleri ve sektör analizleri.',
    images: [{ url: '/sosyal-gorsel', width: 1200, height: 630, alt: 'Sağlık Turizmi Radarı' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sağlık Turizmi Radarı',
    description: 'Sağlık turizminin haber, analiz ve araştırma platformu.',
    images: ['/sosyal-gorsel'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  verification: {
    google: 'yfvaYvF5cW9HkAbhjkQvGPSPIPkAHL_NY887at2b4ek',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="h-full scroll-smooth">
      <head>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-EFZKQ93ZX2"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-EFZKQ93ZX2');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col bg-[#F5F7F9] text-[#17212B] font-sans">
        <a href="#main-content" className="skip-link">İçeriğe geç</a>
        <WebsiteJsonLd />
        <OrganizationJsonLd />
        <MainHeader />
        <main id="main-content" tabIndex={-1} className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
