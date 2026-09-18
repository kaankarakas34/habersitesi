export type Category =
  | 'gundem'
  | 'dunya'
  | 'mevzuat'
  | 'pazarlar'
  | 'pazarlama'
  | 'teknoloji'
  | 'analiz'
  | 'roportaj'
  | 'arastirma'
  | 'etkinlikler';

export type ContentType =
  | 'haber'
  | 'mevzuat'
  | 'analiz'
  | 'pazar-dosyasi'
  | 'roportaj'
  | 'arastirma'
  | 'gorus';

export type ContentStatus =
  | 'taslak'
  | 'editore_gonderildi'
  | 'incelemede'
  | 'revizyon_istendi'
  | 'onaylandi'
  | 'planlandi'
  | 'yayimlandi'
  | 'published'
  | 'guncellendi'
  | 'arsivlendi'
  | 'geri_cekildi';

export interface Source {
  name: string;
  url?: string;
  isOfficial?: boolean;
}

export interface SpecialFields {
  mevzuat?: {
    neDegisti: string[];
    kimleriIlgilendiriyor: string[];
    yururlukTarihi: string;
    resmiKaynakUrl?: string;
    resmiGazeteNo?: string;
    sektoreEtkisi: string;
  };
  pazar?: {
    oneCikanVeriler: { label: string; value: string }[];
    talepGorenBranslar: string[];
    firsatlar: string[];
    riskler: string[];
    kaynakTarihi: string;
  };
  roportaj?: {
    guestName: string;
    guestTitle: string;
    guestOrganization: string;
    guestBio: string;
    isSponsored?: boolean;
    qaItems: { question: string; answer: string }[];
  };
  arastirma?: {
    executiveSummary: string;
    methodology: string;
    sampleInfo: string;
    dateRange: string;
    findings: string[];
    limitations?: string;
    dataSources: string[];
    downloadUrl?: string;
  };
  analiz?: {
    nedenOnemli: string;
    etkilenenKurumlar: string[];
    sektorNeYapmali: string[];
    riskVeFirsatlar: string;
  };
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  spot: string;
  content: string;
  category: Category;
  contentType: ContentType;
  status: ContentStatus;
  featuredImage: string;
  imageCaption?: string;
  imageSource?: string;
  publishedAt: string;
  updatedAt?: string;
  readingTime: number; // in minutes
  authorId: string;
  isHeadline?: boolean; // Ana Manşet
  isSecondaryHeadline?: boolean; // 4 İkincil Manşet
  isBreaking?: boolean; // Son Dakika / Önemli Gelişme Bandı
  breakingBadge?: 'SON GELİŞME' | 'MEVZUAT' | 'RADAR';
  isEditorPick?: boolean;
  isSponsored?: boolean;
  sponsorName?: string;
  tags: string[];
  region?: 'Avrupa' | 'Amerika' | 'Orta Doğu' | 'Asya' | 'Afrika';
  country?: string;
  branch?: string;
  sources: Source[];
  specialFields?: SpecialFields;
  seoTitle?: string;
  seoDescription?: string;
  viewCount?: number;
}

export interface Author {
  id: string;
  slug: string;
  name: string;
  title: string;
  organization: string;
  avatar: string;
  bio: string;
  expertise: string[];
  linkedinUrl?: string;
  conflictOfInterest: string;
  role: 'editor' | 'writer' | 'guest' | 'contributor';
}

export interface SectorEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  city: string;
  country: string;
  isOnline: boolean;
  organizer: string;
  url: string;
  category: string;
  description: string;
}

export interface AuthorApplication {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  organization: string;
  title: string;
  expertise: string[];
  linkedinUrl: string;
  bio: string;
  samplePitch: string;
  conflictStatement: string;
  agreedToTerms: boolean;
  status: 'pending' | 'approved' | 'rejected';
  appliedAt: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  name?: string;
  consent: boolean;
  subscribedAt: string;
}

export interface CorrectionReport {
  id: string;
  articleSlug: string;
  articleTitle: string;
  reporterEmail: string;
  correctionDetail: string;
  submittedAt: string;
  status: 'new' | 'investigating' | 'resolved' | 'dismissed';
}
