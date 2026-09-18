'use client';

import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

export default function QuickNewsletterBox() {
  const [email, setEmail] = useState('');
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
        body: JSON.stringify({ email, consent }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Başarıyla abone oldunuz!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Abonelik sırasında bir hata oluştu.');
      }
    } catch {
      setStatus('error');
      setMessage('Bağlantı hatası oluştu. Lütfen tekrar deneyin.');
    }
  };

  return (
    <div className="bg-[#102A43] text-white p-5 rounded-md shadow-xs border border-[#1D3D5E]">
      <div className="flex items-center gap-2 mb-2">
        <Mail className="w-5 h-5 text-[#00A6A6]" />
        <h3 className="text-sm font-black uppercase tracking-wider text-[#EAF6F8]">
          Haftalık Radar Bülteni
        </h3>
      </div>
      <p className="text-xs text-slate-300 mb-4 leading-relaxed">
        Haftanın kritik mevzuat değişiklikleri, pazar verileri ve analizleri her cuma sabahı tek e-postada.
      </p>

      {status === 'success' ? (
        <div className="p-3 bg-[#1D3D5E] border border-[#00A6A6] rounded text-xs flex items-start gap-2 text-white">
          <CheckCircle2 className="w-4 h-4 text-[#00A6A6] shrink-0 mt-0.5" />
          <span>{message}</span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-posta adresiniz"
              required
              className="w-full px-3 py-2 text-xs bg-white text-[#17212B] placeholder:text-slate-400 rounded focus:outline-none focus:ring-2 focus:ring-[#00A6A6]"
            />
          </div>

          <label className="flex items-start gap-2 text-[11px] text-slate-300 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              required
              className="mt-0.5 rounded text-[#00A6A6] focus:ring-0"
            />
            <span>
              Haftalık bülten gönderimini ve <a href="/kvkk" className="text-[#00A6A6] underline">aydınlatma metnini</a> onaylıyorum. Spam gönderilmez.
            </span>
          </label>

          {status === 'error' && (
            <div className="p-2 bg-[#C62828]/20 border border-[#C62828] text-xs text-red-200 rounded flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{message}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full py-2 bg-[#00A6A6] hover:bg-[#008E8E] text-white font-bold text-xs rounded transition-colors flex items-center justify-center gap-1.5"
          >
            <span>{status === 'loading' ? 'Kaydediliyor...' : 'Bültene Katıl'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>
      )}
    </div>
  );
}
