'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Plus,
  Star,
  Zap,
  Users,
  Mail,
  Flag,
  FileText,
  CheckCircle,
  AlertCircle,
  Clock,
  ExternalLink,
} from 'lucide-react';
import { Article, AuthorApplication, NewsletterSubscriber, CorrectionReport } from '@/lib/types';

export default function AdminDashboardPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [applications, setApplications] = useState<AuthorApplication[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionMessage, setActionMessage] = useState('');

  const fetchData = async () => {
    try {
      setLoading(true);
      const [artRes, appRes, subRes] = await Promise.all([
        fetch('/api/admin/articles'),
        fetch('/api/writer-application'),
        fetch('/api/newsletter'),
      ]);

      const artData = await artRes.json();
      const appData = await appRes.json();
      const subData = await subRes.json();

      setArticles(artData.articles || []);
      setApplications(appData.applications || []);
      setSubscribers(subData.subscribers || []);
    } catch (err) {
      console.error('Error fetching admin data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleToggleHeadline = async (article: Article) => {
    try {
      const res = await fetch('/api/admin/articles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: article.id,
          isHeadline: !article.isHeadline,
        }),
      });
      if (res.ok) {
        setActionMessage(`"${article.title.slice(0, 30)}..." ana manşet durumu güncellendi.`);
        fetchData();
        setTimeout(() => setActionMessage(''), 3000);
      }
    } catch {
      alert('İşlem gerçekleştirilemedi.');
    }
  };

  const handleToggleBreaking = async (article: Article) => {
    try {
      const res = await fetch('/api/admin/articles', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: article.id,
          isBreaking: !article.isBreaking,
          breakingBadge: !article.isBreaking ? 'SON GELİŞME' : undefined,
        }),
      });
      if (res.ok) {
        setActionMessage(`"${article.title.slice(0, 30)}..." son dakika bandı güncellendi.`);
        fetchData();
        setTimeout(() => setActionMessage(''), 3000);
      }
    } catch {
      alert('İşlem gerçekleştirilemedi.');
    }
  };

  const pendingAppsCount = applications.filter((a) => a.status === 'pending').length;

  return (
    <div className="py-8 sm:py-10 bg-[#F5F7F9] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#DDE3E8]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-[#102A43] flex items-center justify-center text-white">
              <ShieldCheck className="w-5 h-5 text-[#00A6A6]" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-[#102A43] tracking-tight">
                Editoryal Yönetim Paneli
              </h1>
              <p className="text-xs text-[#5B6B79]">
                İçerik durumları, manşet yönetimi, yazar başvuruları ve bülten veri tabanı.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/admin/yeni-haber"
              className="px-4 py-2 bg-[#00A6A6] hover:bg-[#008E8E] text-white text-xs font-bold rounded flex items-center gap-1.5 transition-colors shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Yeni İçerik Ekle</span>
            </Link>
          </div>
        </div>

        {/* Sub-nav tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-6 border-b border-[#DDE3E8] text-xs font-bold scrollbar-none">
          <Link
            href="/admin"
            className="px-3.5 py-2 bg-[#102A43] text-white rounded whitespace-nowrap"
          >
            İçerik & Manşetler ({articles.length})
          </Link>
          <Link
            href="/admin/yazar-basvurulari"
            className="px-3.5 py-2 bg-white text-[#17212B] hover:bg-[#EAF6F8] rounded border border-[#DDE3E8] whitespace-nowrap flex items-center gap-1.5"
          >
            <Users className="w-3.5 h-3.5 text-[#00A6A6]" />
            <span>Yazar Başvuruları</span>
            {pendingAppsCount > 0 && (
              <span className="px-1.5 py-0.2 bg-[#C62828] text-white text-[10px] rounded-full">
                {pendingAppsCount}
              </span>
            )}
          </Link>
          <Link
            href="/admin/bulten-aboneleri"
            className="px-3.5 py-2 bg-white text-[#17212B] hover:bg-[#EAF6F8] rounded border border-[#DDE3E8] whitespace-nowrap flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5 text-[#00A6A6]" />
            <span>Bülten Aboneleri ({subscribers.length})</span>
          </Link>
          <Link
            href="/admin/duzeltmeler"
            className="px-3.5 py-2 bg-white text-[#17212B] hover:bg-[#EAF6F8] rounded border border-[#DDE3E8] whitespace-nowrap flex items-center gap-1.5"
          >
            <Flag className="w-3.5 h-3.5 text-[#C62828]" />
            <span>Düzeltme Bildirimleri</span>
          </Link>
        </div>

        {actionMessage && (
          <div className="p-3 mb-6 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600" />
            <span>{actionMessage}</span>
          </div>
        )}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-4 rounded border border-[#DDE3E8]">
            <span className="text-xs text-[#5B6B79] block">Toplam İçerik</span>
            <span className="text-2xl font-black text-[#102A43] mt-1 block">
              {articles.length}
            </span>
          </div>
          <div className="bg-white p-4 rounded border border-[#DDE3E8]">
            <span className="text-xs text-[#5B6B79] block">Aktif Ana Manşet</span>
            <span className="text-sm font-bold text-[#00A6A6] mt-1 block truncate">
              {articles.find((a) => a.isHeadline)?.title.slice(0, 24) || 'Seçilmedi'}...
            </span>
          </div>
          <div className="bg-white p-4 rounded border border-[#DDE3E8]">
            <span className="text-xs text-[#5B6B79] block">Bekleyen Başvuru</span>
            <span className="text-2xl font-black text-amber-700 mt-1 block">
              {pendingAppsCount}
            </span>
          </div>
          <div className="bg-white p-4 rounded border border-[#DDE3E8]">
            <span className="text-xs text-[#5B6B79] block">Kayıtlı Abone</span>
            <span className="text-2xl font-black text-[#102A43] mt-1 block">
              {subscribers.length}
            </span>
          </div>
        </div>

        {/* Content Table */}
        <div className="bg-white rounded-md border border-[#DDE3E8] shadow-xs overflow-hidden">
          <div className="p-4 border-b border-[#DDE3E8] flex items-center justify-between">
            <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider">
              Yayın Masasındaki İçerikler
            </h2>
            <span className="text-xs text-[#5B6B79]">
              Manşet ve Son Dakika kontrollerini tablodan doğrudan yönetebilirsiniz.
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F5F7F9] text-[#5B6B79] uppercase font-bold border-b border-[#DDE3E8]">
                <tr>
                  <th className="p-3.5">Haber Başlığı</th>
                  <th className="p-3.5">Kategori</th>
                  <th className="p-3.5">Tür</th>
                  <th className="p-3.5 text-center">Ana Manşet</th>
                  <th className="p-3.5 text-center">Son Dakika</th>
                  <th className="p-3.5">Durum</th>
                  <th className="p-3.5 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDE3E8]">
                {articles.map((art) => (
                  <tr key={art.id} className="hover:bg-[#F5F7F9]/80 transition-colors">
                    <td className="p-3.5 max-w-sm">
                      <Link
                        href={`/haber/${art.slug}`}
                        target="_blank"
                        className="font-bold text-[#102A43] hover:text-[#00A6A6] line-clamp-1"
                      >
                        {art.title}
                      </Link>
                      <span className="text-[11px] text-[#5B6B79] mt-0.5 block truncate">
                        {art.spot.slice(0, 70)}...
                      </span>
                    </td>

                    <td className="p-3.5">
                      <span className="px-2 py-0.5 bg-[#EAF6F8] text-[#102A43] rounded text-[10px] font-bold uppercase">
                        {art.category}
                      </span>
                    </td>

                    <td className="p-3.5 text-[#5B6B79] capitalize">
                      {art.contentType}
                    </td>

                    {/* Ana Manşet Toggle Button */}
                    <td className="p-3.5 text-center">
                      <button
                        type="button"
                        onClick={() => handleToggleHeadline(art)}
                        className={`p-1.5 rounded transition-colors ${
                          art.isHeadline
                            ? 'bg-[#00A6A6] text-white'
                            : 'bg-slate-100 text-slate-400 hover:text-slate-700'
                        }`}
                        title={art.isHeadline ? 'Ana Manşetten Çıkar' : 'Ana Manşet Yap'}
                      >
                        <Star className="w-4 h-4 fill-current" />
                      </button>
                    </td>

                    {/* Son Dakika Toggle Button */}
                    <td className="p-3.5 text-center">
                      <button
                        type="button"
                        onClick={() => handleToggleBreaking(art)}
                        className={`p-1.5 rounded transition-colors ${
                          art.isBreaking
                            ? 'bg-[#C62828] text-white'
                            : 'bg-slate-100 text-slate-400 hover:text-slate-700'
                        }`}
                        title={art.isBreaking ? 'Bandtan Çıkar' : 'Son Dakika Bandına Ekle'}
                      >
                        <Zap className="w-4 h-4 fill-current" />
                      </button>
                    </td>

                    <td className="p-3.5">
                      <span className="px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded text-[10px] font-bold">
                        {art.status}
                      </span>
                    </td>

                    <td className="p-3.5 text-right">
                      <Link
                        href={`/haber/${art.slug}`}
                        target="_blank"
                        className="text-[#00A6A6] hover:underline font-bold inline-flex items-center gap-1"
                      >
                        <span>Görüntüle</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
