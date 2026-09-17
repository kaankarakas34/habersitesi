'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  Save,
  CheckCircle,
  AlertCircle,
  ShieldCheck,
  Star,
  Zap,
} from 'lucide-react';

export default function NewArticlePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: '',
    spot: '',
    content: '',
    category: 'gundem',
    contentType: 'haber',
    status: 'yayimlandi',
    featuredImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&auto=format&fit=crop&q=80',
    imageCaption: '',
    imageSource: 'Sağlık Turizmi Radarı / Arşiv',
    authorId: 'editorial',
    isHeadline: false,
    isSecondaryHeadline: false,
    isBreaking: false,
    breakingBadge: 'SON GELİŞME',
    isSponsored: false,
    sponsorName: '',
    tags: 'Sağlık Turizmi, Gündem, Mevzuat',
    country: '',
    branch: '',
    sourceName: 'Resmî Kurum Açıklaması',
    sourceUrl: '',
    isOfficialSource: true,
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? (target as HTMLInputElement).checked : target.value;
    setFormData((prev) => ({
      ...prev,
      [target.name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.spot || !formData.content) {
      alert('Lütfen başlık, spot ve içerik alanlarını doldurunuz.');
      return;
    }

    setStatus('loading');
    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(',').map((t) => t.trim()),
        sources: [
          {
            name: formData.sourceName || 'Sağlık Turizmi Radarı Editoryal',
            url: formData.sourceUrl || undefined,
            isOfficial: formData.isOfficialSource,
          },
        ],
      };

      const res = await fetch('/api/admin/articles', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage('İçerik başarıyla yayımlandı!');
        setTimeout(() => {
          router.push('/admin');
        }, 1200);
      } else {
        setStatus('error');
        setMessage(data.error || 'İçerik kaydedilemedi.');
      }
    } catch {
      setStatus('error');
      setMessage('Bağlantı hatası oluştu.');
    }
  };

  return (
    <div className="py-8 bg-[#F5F7F9] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-4 pb-4 mb-6 border-b border-[#DDE3E8]">
          <Link
            href="/admin"
            className="flex items-center gap-1 text-xs font-bold text-[#102A43] hover:text-[#00A6A6]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Paneli Geri Dön</span>
          </Link>

          <span className="text-xs text-[#5B6B79] font-medium">Yeni Editoryal İçerik</span>
        </div>

        {status === 'success' && (
          <div className="p-4 mb-6 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-emerald-600" />
            <span>{message} Panele yönlendiriliyorsunuz...</span>
          </div>
        )}

        {status === 'error' && (
          <div className="p-4 mb-6 bg-red-50 border border-red-300 text-red-800 text-xs rounded flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-red-600" />
            <span>{message}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Main Info Box */}
          <div className="bg-white p-6 rounded-md border border-[#DDE3E8] space-y-4">
            <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider pb-2 border-b border-[#DDE3E8]">
              1. Temel İçerik Bilgileri
            </h2>

            <div>
              <label className="block text-xs font-bold text-[#102A43] mb-1">
                Haber Başlığı (H1) *
              </label>
              <input
                type="text"
                name="title"
                required
                value={formData.title}
                onChange={handleChange}
                placeholder="Örn: Sağlık Bakanlığı'ndan Yetki Belgesi Denetimleri Hakkında Yeni Tebliğ"
                className="w-full px-3 py-2 text-sm bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-[#102A43] mb-1">
                Spot / Editoryal Özet (1-2 Cümle) *
              </label>
              <textarea
                rows={2}
                name="spot"
                required
                value={formData.spot}
                onChange={handleChange}
                placeholder="Haberin ana fikrini ve sektöre etkisini özetleyen güçlü spot metni..."
                className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  Kategori *
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded"
                >
                  <option value="gundem">Gündem</option>
                  <option value="dunya">Dünya Radarı</option>
                  <option value="mevzuat">Mevzuat</option>
                  <option value="pazarlar">Pazarlar</option>
                  <option value="pazarlama">Pazarlama</option>
                  <option value="teknoloji">Teknoloji & AI</option>
                  <option value="analiz">Radar Analiz</option>
                  <option value="roportaj">Röportaj</option>
                  <option value="arastirma">Araştırma</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  İçerik Türü
                </label>
                <select
                  name="contentType"
                  value={formData.contentType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded"
                >
                  <option value="haber">Haber</option>
                  <option value="mevzuat">Mevzuat Rehberi</option>
                  <option value="analiz">Analiz</option>
                  <option value="pazar-dosyasi">Pazar Dosyası</option>
                  <option value="roportaj">Röportaj</option>
                  <option value="arastirma">Araştırma Raporu</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  Yazar İmzası *
                </label>
                <select
                  name="authorId"
                  value={formData.authorId}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded"
                >
                  <option value="editorial">Sağlık Turizmi Radarı Editoryal</option>
                  <option value="kaan-karakas">Kaan Karakaş</option>
                  <option value="dr-selim-yilmaz">Dr. Selim Yılmaz</option>
                  <option value="av-elif-demir">Av. Elif Demir</option>
                  <option value="murat-aksoy">Murat Aksoy</option>
                  <option value="dr-zeynep-kaya">Dr. Zeynep Kaya</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#102A43] mb-1">
                Makale Gövdesi (HTML Destekli) *
              </label>
              <textarea
                rows={8}
                name="content"
                required
                value={formData.content}
                onChange={handleChange}
                placeholder="<p>Makale paragraflarını yazınız...</p><h2>Ara Başlık</h2><p>İçerik devamı...</p>"
                className="w-full px-3 py-2 text-xs font-mono bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
              />
            </div>
          </div>

          {/* Media & Sourcing */}
          <div className="bg-white p-6 rounded-md border border-[#DDE3E8] space-y-4">
            <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider pb-2 border-b border-[#DDE3E8]">
              2. Görsel ve Kaynakça Doğrulama
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  Kapak Görseli URL *
                </label>
                <input
                  type="url"
                  name="featuredImage"
                  required
                  value={formData.featuredImage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  Görsel Kaynağı & Altyazısı
                </label>
                <input
                  type="text"
                  name="imageSource"
                  value={formData.imageSource}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  Birincil Kaynak Adı *
                </label>
                <input
                  type="text"
                  name="sourceName"
                  value={formData.sourceName}
                  onChange={handleChange}
                  placeholder="Örn: Resmî Gazete, TÜİK, USHAŞ"
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  Kaynak URL (Varsa)
                </label>
                <input
                  type="url"
                  name="sourceUrl"
                  value={formData.sourceUrl}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#102A43] mb-1">
                Konu Etiketleri (Virgülle ayırınız)
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Yetki Belgesi, Mevzuat, Almanya, Diş Turizmi"
                className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded"
              />
            </div>
          </div>

          {/* Layout Placement Badges */}
          <div className="bg-white p-6 rounded-md border border-[#DDE3E8] space-y-4">
            <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider pb-2 border-b border-[#DDE3E8]">
              3. Yerleşim & Editoryal Bayraklar
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <label className="flex items-center gap-2 p-3 rounded border border-[#DDE3E8] bg-[#F5F7F9] cursor-pointer">
                <input
                  type="checkbox"
                  name="isHeadline"
                  checked={formData.isHeadline}
                  onChange={handleChange}
                  className="rounded text-[#00A6A6]"
                />
                <span className="text-xs font-bold text-[#102A43] flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 text-[#00A6A6]" />
                  Ana Manşet Yap
                </span>
              </label>

              <label className="flex items-center gap-2 p-3 rounded border border-[#DDE3E8] bg-[#F5F7F9] cursor-pointer">
                <input
                  type="checkbox"
                  name="isSecondaryHeadline"
                  checked={formData.isSecondaryHeadline}
                  onChange={handleChange}
                  className="rounded text-[#00A6A6]"
                />
                <span className="text-xs font-bold text-[#102A43]">
                  İkincil Manşet Alanına Al
                </span>
              </label>

              <label className="flex items-center gap-2 p-3 rounded border border-[#DDE3E8] bg-[#F5F7F9] cursor-pointer">
                <input
                  type="checkbox"
                  name="isBreaking"
                  checked={formData.isBreaking}
                  onChange={handleChange}
                  className="rounded text-[#C62828]"
                />
                <span className="text-xs font-bold text-[#C62828] flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  Son Dakika Bandına Ekle
                </span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-3.5 bg-[#00A6A6] hover:bg-[#008E8E] text-white font-bold text-sm rounded shadow-md transition-colors flex items-center justify-center gap-2"
          >
            <Save className="w-4 h-4" />
            <span>{status === 'loading' ? 'Kaydediliyor...' : 'İçeriği Yayımla'}</span>
          </button>
        </form>
      </div>
    </div>
  );
}
