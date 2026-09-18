import fs from 'fs';
import path from 'path';
import { Article, Author, SectorEvent, AuthorApplication, NewsletterSubscriber, CorrectionReport } from '../types';
import { INITIAL_ARTICLES } from '../data/articles';
import { AUTHORS } from '../data/authors';
import { EVENTS } from '../data/events';

interface StorageData {
  articles: Article[];
  authors: Author[];
  events: SectorEvent[];
  applications: AuthorApplication[];
  subscribers: NewsletterSubscriber[];
  corrections: CorrectionReport[];
}

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'storage.json');

function getDefaultData(): StorageData {
  return {
    articles: INITIAL_ARTICLES,
    authors: AUTHORS,
    events: EVENTS,
    applications: [
      {
        id: 'app-demo-1',
        fullName: 'Prof. Dr. Ahmet Yılmaz',
        email: 'ahmet.yilmaz@saglikturizmiradari.com',
        phone: '+90 532 000 0000',
        organization: 'İstinye Sağlık Grubu',
        title: 'Ortopedi ve Travmatoloji Anabilim Dalı Başkanı',
        expertise: ['Ortopedik Cerrahi', 'Robotik Eklem Protezi', 'Sağlık Turizmi Stratejisi'],
        linkedinUrl: 'https://linkedin.com/in/ahmetyilmaz',
        bio: '30 yılı aşkın klinik cerrahi ve uluslararası hasta tedavisi deneyimine sahip akademisyen hekim.',
        samplePitch: 'Türkiye’de robotik cerrahinin uluslararası hasta çekme potansiyeli ve Avrupa sigorta fonlarının geri ödeme engelleri üzerine kapsamlı bir inceleme.',
        conflictStatement: 'Özel bir cerrahi robotik merkezinin kurucusu olup yazıda ticari isim kullanılmayacaktır.',
        agreedToTerms: true,
        status: 'pending',
        appliedAt: '2026-09-16T15:30:00Z',
      }
    ],
    subscribers: [
      {
        id: 'sub-1',
        email: 'yonetici@hastane.com.tr',
        name: 'Mert Demir',
        consent: true,
        subscribedAt: '2026-09-15T08:00:00Z',
      },
      {
        id: 'sub-2',
        email: 'pazarlama@klinik.co.uk',
        name: 'Sarah Jenkins',
        consent: true,
        subscribedAt: '2026-09-16T10:20:00Z',
      }
    ],
    corrections: [
      {
        id: 'corr-1',
        articleSlug: 'turkiyede-saglik-turizminin-guncel-gorunumu-2026-verileri',
        articleTitle: 'Türkiye’de Sağlık Turizminin Güncel Görünümü',
        reporterEmail: 'okur@saglikturizmi.com',
        correctionDetail: 'USHAŞ tablosundaki ilk çeyrek hasta sayısı dipnotunda revizyon önerisi.',
        submittedAt: '2026-09-16T12:00:00Z',
        status: 'investigating'
      }
    ]
  };
}

export function readStorage(): StorageData {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
      const initial = getDefaultData();
      fs.writeFileSync(DATA_FILE, JSON.stringify(initial, null, 2), 'utf-8');
      return initial;
    }
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    const parsed = JSON.parse(raw) as StorageData;
    // Ensure all arrays exist
    if (!parsed.articles) parsed.articles = INITIAL_ARTICLES;
    if (!parsed.authors) parsed.authors = AUTHORS;
    if (!parsed.events) parsed.events = EVENTS;
    if (!parsed.applications) parsed.applications = [];
    if (!parsed.subscribers) parsed.subscribers = [];
    if (!parsed.corrections) parsed.corrections = [];
    return parsed;
  } catch (error) {
    console.error('Error reading storage.json, falling back to default:', error);
    return getDefaultData();
  }
}

export function writeStorage(data: StorageData): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing storage.json:', error);
  }
}
