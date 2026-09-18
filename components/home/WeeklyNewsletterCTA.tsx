'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';

export default function WeeklyNewsletterCTA() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, consent }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Bültene başarıyla kaydoldunuz.');
        setEmail('');
        setName('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Abonelik sırasında bir sorun oluştu.');
      }
    } catch {
      setStatus('error');
      setMessage('Bağlantı hatası oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <section id="bulten" className="py-12 bg-white border-b border-[#DDE3E8]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#102A43] text-white rounded-lg p-6 sm:p-10 shadow-xl border border-[#1D3D5E] relative overflow-hidden">
          {/* Subtle Radar Background Decoration */}
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-96 h-96 rounded-full border border-white/5 pointer-events-none" />
          <div className="absolute right-0 top-0 translate-x-1/4 -translate-y-1/4 w-64 h-64 rounded-full border border-teal-500/10 pointer-events-none" />

          <div className="relative z-10 text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#00A6A6]/20 text-[#00A6A6] text-xs font-bold rounded-full mb-4 border border-[#00A6A6]/30">
              <Mail className="w-3.5 h-3.5" />
              <span>Haftalık Editoryal Bülten</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3">
              Haftanın önemli sağlık turizmi gelişmeleri tek e-postada.
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Türkiye ve dünyadan seçilmiş haberler, mevzuat değişiklikleri ve sektör analizleri her cuma sabahı gelen kutunuzda.
            </p>
          </div>

          {status === 'success' ? (
            <div className="max-w-md mx-auto p-4 bg-[#1D3D5E] border border-[#00A6A6] rounded-md text-sm text-center flex items-center justify-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#00A6A6]" />
              <span>{message}</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Adınız Soyadınız (İsteğe bağlı)"
                  className="px-4 py-3 text-xs sm:text-sm bg-white text-[#17212B] placeholder:text-slate-400 rounded focus:outline-none focus:ring-2 focus:ring-[#00A6A6]"
                />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Kurumsal E-posta Adresiniz *"
                  required
                  className="px-4 py-3 text-xs sm:text-sm bg-white text-[#17212B] placeholder:text-slate-400 rounded focus:outline-none focus:ring-2 focus:ring-[#00A6A6]"
                />
              </div>

              <div className="flex items-center justify-between gap-4 pt-1">
                <label className="flex items-start gap-2 text-xs text-slate-300 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    required
                    className="mt-0.5 rounded text-[#00A6A6] focus:ring-0"
                  />
                  <span>
                    <Link href="/kvkk" className="text-[#00A6A6] underline hover:text-white">
                      KVKK ve Aydınlatma Metni
                    </Link>
                    'ni okudum, haftalık bülten gönderimini onaylıyorum.
                  </span>
                </label>
              </div>

              {status === 'error' && (
                <div className="p-2.5 bg-red-900/40 border border-red-500 rounded text-xs text-red-200 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3 bg-[#00A6A6] hover:bg-[#008E8E] text-white font-black text-sm rounded transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <span>{status === 'loading' ? 'Kaydediliyor...' : 'Haftalık Radara Abone Ol'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#00A6A6]" />
                <span>Spam yok. Dilediğiniz an tek tıkla abonelikten ayrılabilirsiniz.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
