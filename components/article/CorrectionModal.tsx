'use client';

import React, { useState } from 'react';
import { Flag, X, CheckCircle, AlertCircle } from 'lucide-react';

interface CorrectionModalProps {
  articleSlug: string;
  articleTitle: string;
}

export default function CorrectionModal({ articleSlug, articleTitle }: CorrectionModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [detail, setDetail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !detail) return;

    setStatus('loading');
    try {
      const res = await fetch('/api/correction', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          articleSlug,
          articleTitle,
          reporterEmail: email,
          correctionDetail: detail,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage(data.message || 'Bildiriminiz alındı.');
      } else {
        setStatus('error');
        setMessage(data.error || 'Bildirim iletilemedi.');
      }
    } catch {
      setStatus('error');
      setMessage('Bağlantı hatası oluştu.');
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs text-[#5B6B79] hover:text-[#C62828] transition-colors py-1"
      >
        <Flag className="w-3.5 h-3.5 text-slate-400" />
        <span>Bu içerikte bir hata veya düzeltme mi var? Bildirin.</span>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-lg bg-white rounded-lg shadow-2xl border border-[#DDE3E8] p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <Flag className="w-5 h-5 text-[#C62828]" />
              <h3 className="text-base font-bold text-[#102A43]">
                Düzeltme & Doğrulama Bildirimi
              </h3>
            </div>

            <p className="text-xs text-[#5B6B79] mb-4">
              İçerik: <strong className="text-[#102A43]">{articleTitle}</strong>
            </p>

            {status === 'success' ? (
              <div className="p-4 bg-[#EAF6F8] border border-[#00A6A6] rounded text-xs text-[#102A43] space-y-3">
                <div className="flex items-center gap-2 font-bold text-[#00A6A6]">
                  <CheckCircle className="w-5 h-5" />
                  <span>Bildiriminiz Yayın Masasına Ulaştı</span>
                </div>
                <p>{message}</p>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 bg-[#102A43] text-white rounded font-bold text-xs"
                >
                  Kapat
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#102A43] mb-1">
                    E-posta Adresiniz (Gerekirse sizinle temas kurabilmemiz için) *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ornek@alanadi.com"
                    className="w-full px-3 py-2 text-xs border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#102A43] mb-1">
                    Düzeltme Talebiniz veya Doğrulama Kaynağı *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={detail}
                    onChange={(e) => setDetail(e.target.value)}
                    placeholder="Hatalı olduğunu düşündüğünüz bilgi, güncel mevzuat tebliği veya resmi veri kaynağını buraya yazınız..."
                    className="w-full px-3 py-2 text-xs border border-[#DDE3E8] rounded focus:outline-none focus:ring-1 focus:ring-[#00A6A6]"
                  />
                </div>

                {status === 'error' && (
                  <div className="p-2 bg-red-50 text-red-700 text-xs rounded flex items-center gap-1.5 border border-red-200">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{message}</span>
                  </div>
                )}

                <div className="flex items-center justify-end gap-2 pt-2 border-t border-[#DDE3E8]">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-3.5 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded"
                  >
                    İptal
                  </button>
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="px-4 py-2 text-xs font-bold text-white bg-[#102A43] hover:bg-[#1D3D5E] rounded transition-colors"
                  >
                    {status === 'loading' ? 'İletiliyor...' : 'Bildirimi Gönder'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
