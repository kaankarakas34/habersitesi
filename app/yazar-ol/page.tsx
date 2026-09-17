'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { PenTool, CheckCircle, AlertCircle, ShieldCheck, ArrowRight } from 'lucide-react';

export default function AuthorApplicationPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    title: '',
    expertise: '',
    linkedinUrl: '',
    bio: '',
    samplePitch: '',
    conflictStatement: '',
    agreedToTerms: false,
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
    if (!formData.agreedToTerms) {
      alert('Lütfen yayın ilkeleri ve çıkar çatışması taahhüdünü onaylayınız.');
      return;
    }

    setStatus('loading');
    try {
      const res = await fetch('/api/writer-application', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          expertise: formData.expertise.split(',').map((s) => s.trim()),
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Başvurunuz yayın masasına iletildi.');
      } else {
        setStatus('error');
        setMessage(data.error || 'Başvuru gönderilirken bir hata oluştu.');
      }
    } catch {
      setStatus('error');
      setMessage('Sunucu bağlantı hatası oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="py-8 sm:py-12 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pb-6 mb-8 border-b-2 border-[#102A43]">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#EAF6F8] text-[#00A6A6] text-xs font-bold rounded mb-3 border border-[#00A6A6]/20">
            <PenTool className="w-3.5 h-3.5" />
            <span>Sektörel Katkıda Bulunun</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-black text-[#102A43] tracking-tight mb-3">
            Sağlık Turizmi Radarı Yazar Başvuru Formu
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            Sağlık turizmi, sağlık yönetimi, mevzuat, performans pazarlaması, çağrı merkezi veya sağlık teknolojileri alanında sektörel bilgi birikiminizi bağımsız platformumuzda sektör paydaşlarıyla paylaşın.
          </p>
        </div>

        {/* Editorial Policy Warning Callout */}
        <div className="p-4 bg-[#EAF6F8] border-l-4 border-[#00A6A6] rounded-r text-xs text-[#102A43] mb-8 space-y-1">
          <div className="font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#00A6A6]" />
            <span>Editoryal Başvuru Kuralları</span>
          </div>
          <p className="text-slate-700 leading-relaxed">
            Yazarların içerikleri doğrudan yayımlanmaz; editoryal inceleme ve doğrulama süzgecinden geçer. Ticari tanıtım, gizli reklam, sahte istatistik veya tıbbi tedavi reçetesi içeren başvurular kabul edilmez.
          </p>
        </div>

        {status === 'success' ? (
          <div className="p-8 bg-[#F5F7F9] border-2 border-[#00A6A6] rounded-lg text-center space-y-4">
            <CheckCircle className="w-12 h-12 text-[#00A6A6] mx-auto" />
            <h2 className="text-xl font-bold text-[#102A43]">
              Yazar Başvurunuz Alınmıştır
            </h2>
            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              {message} Başvurunuz Yayın Masası tarafından 3 iş günü içerisinde incelenecek ve belirttiğiniz e-posta üzerinden geri bildirim sağlanacaktır.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#102A43] text-white font-bold text-xs rounded hover:bg-[#1D3D5E] transition-colors"
            >
              <span>Ana Sayfaya Dön</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* 1. Kimlik ve İletişim Bilgileri */}
            <div className="bg-[#F5F7F9] p-6 rounded-md border border-[#DDE3E8] space-y-4">
              <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider pb-2 border-b border-[#DDE3E8]">
                1. Kimlik ve Kurumsal Bilgiler
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#102A43] mb-1">
                    Adınız Soyadınız *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Örn: Dr. Ahmet Yılmaz"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102A43] mb-1">
                    Kurumsal E-posta Adresiniz *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="ornek@hastane.com"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102A43] mb-1">
                    Telefon / İletişim
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+90 532 000 0000"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102A43] mb-1">
                    LinkedIn Profil Bağlantısı *
                  </label>
                  <input
                    type="url"
                    name="linkedinUrl"
                    required
                    value={formData.linkedinUrl}
                    onChange={handleChange}
                    placeholder="https://linkedin.com/in/profiliniz"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102A43] mb-1">
                    Bağlı Bulunduğunuz Kurum / Kuruluş *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Örn: İstanbul Üniversitesi / Özel Sağlık Grubu"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102A43] mb-1">
                    Göreviniz / Unvanınız *
                  </label>
                  <input
                    type="text"
                    name="title"
                    required
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Örn: Uluslararası Hasta Birimi Direktörü"
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                  />
                </div>
              </div>
            </div>

            {/* 2. Uzmanlık ve Yazarlık Detayları */}
            <div className="bg-[#F5F7F9] p-6 rounded-md border border-[#DDE3E8] space-y-4">
              <h2 className="text-sm font-bold text-[#102A43] uppercase tracking-wider pb-2 border-b border-[#DDE3E8]">
                2. Uzmanlık ve Yazı Önerisi
              </h2>

              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  Uzmanlık Alanlarınız (Virgülle ayırarak yazınız) *
                </label>
                <input
                  type="text"
                  name="expertise"
                  required
                  value={formData.expertise}
                  onChange={handleChange}
                  placeholder="Örn: Sağlık Hukuku, Hasta Güvenliği, Akreditasyon, İngiltere Pazarı"
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  Kısa Profesyonel Biyografi *
                </label>
                <textarea
                  rows={3}
                  name="bio"
                  required
                  value={formData.bio}
                  onChange={handleChange}
                  placeholder="Eğitim, sektörel tecrübe ve mevcut çalışma alanlarınızı özetleyen 2-3 cümlelik biyografi..."
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  Önerilen İlk Yazı Konusu & Özet Hipotez *
                </label>
                <textarea
                  rows={3}
                  name="samplePitch"
                  required
                  value={formData.samplePitch}
                  onChange={handleChange}
                  placeholder="Ele almak istediğiniz mevzuat, pazar analizi veya sektörel sorun ve çözüm önerisi..."
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#102A43] mb-1">
                  Çıkar Çatışması ve Ticari Bağlantı Beyanı *
                </label>
                <textarea
                  rows={2}
                  name="conflictStatement"
                  required
                  value={formData.conflictStatement}
                  onChange={handleChange}
                  placeholder="Yazı konunuzla doğrudan veya dolaylı ticari çıkar bağı bulunan danışmanlık, acente veya şirket bağlantınızı açıklayınız (Yoksa 'Çıkar çatışması bulunmamaktadır' yazınız)."
                  className="w-full px-3 py-2 text-xs bg-white border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                />
              </div>
            </div>

            {/* 3. Onay & Gönderim */}
            <div className="p-4 bg-slate-50 rounded border border-[#DDE3E8] space-y-3">
              <label className="flex items-start gap-2 text-xs text-slate-700 cursor-pointer select-none">
                <input
                  type="checkbox"
                  name="agreedToTerms"
                  checked={formData.agreedToTerms}
                  onChange={handleChange}
                  required
                  className="mt-0.5 rounded text-[#00A6A6] focus:ring-0"
                />
                <span>
                  Sağlık Turizmi Radarı <Link href="/yayin-ilkeleri" className="text-[#00A6A6] underline font-bold">Yayın İlkeleri</Link> ve <Link href="/editorial-bagimsizlik" className="text-[#00A6A6] underline font-bold">Editoryal Bağımsızlık Şartları</Link>'nı okudum. İçeriklerimin reklam veya tıbbi tavsiye barındırmayacağını, kaynak gösterimini ve editör onay sürecini kabul ediyorum.
                </span>
              </label>

              {status === 'error' && (
                <div className="p-2.5 bg-red-50 text-red-700 rounded border border-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 bg-[#00A6A6] hover:bg-[#008E8E] text-white font-bold text-sm rounded transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <span>{status === 'loading' ? 'Gönderiliyor...' : 'Yazar Başvurusunu Tamamla'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
