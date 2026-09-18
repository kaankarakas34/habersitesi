import type { Metadata } from 'next';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Yazar Olun | Sektörel Başvuru',
  description:
    'Sağlık turizmi ekosistemine yönelik klinik, hukuki, teknolojik ve pazar deneyimlerinizi paylaşın; sektör profesyonellerine ve karar vericilere ulaşın.',
  alternates: {
    canonical: `${SITE_URL}/yazar-ol`,
  },
  openGraph: {
    title: 'Sağlık Turizmi Radarı’nda Yazar Olun | Sektörel Başvuru',
    description:
      'Sağlık turizmi ekosistemine yönelik klinik, hukuki ve pazar deneyimlerinizi paylaşın; sektör profesyonellerine ve karar vericilere ulaşın.',
    url: `${SITE_URL}/yazar-ol`,
    siteName: 'Sağlık Turizmi Radarı',
    locale: 'tr_TR',
    type: 'website',
  },
};

export default function AuthorApplicationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
