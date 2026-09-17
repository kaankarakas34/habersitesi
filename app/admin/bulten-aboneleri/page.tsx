'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Download, Mail } from 'lucide-react';
import { NewsletterSubscriber } from '@/lib/types';

export default function SubscribersAdminPage() {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/newsletter')
      .then((r) => r.json())
      .then((d) => { setSubscribers(d.subscribers || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const downloadCsv = () => {
    const csv = [
      'E-posta,Ad,Onay,Kayıt Tarihi',
      ...subscribers.map((s) =>
        `${s.email},${s.name || ''},${s.consent ? 'Evet' : 'Hayır'},${new Date(s.subscribedAt).toLocaleString('tr-TR')}`
      ),
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `bulten-aboneleri-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="py-8 bg-[#F5F7F9] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DDE3E8]">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-[#102A43] hover:text-[#00A6A6]">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-black text-[#102A43]">Bülten Aboneleri</h1>
              <p className="text-xs text-[#5B6B79]">{subscribers.length} kayıtlı abone</p>
            </div>
          </div>

          <button
            type="button"
            onClick={downloadCsv}
            className="px-4 py-2 bg-[#102A43] hover:bg-[#1D3D5E] text-white text-xs font-bold rounded flex items-center gap-2 transition-colors"
          >
            <Download className="w-4 h-4 text-[#00A6A6]" />
            <span>CSV İndir</span>
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12 text-sm text-slate-500">Yükleniyor...</div>
        ) : (
          <div className="bg-white rounded-md border border-[#DDE3E8] shadow-xs overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F5F7F9] text-[#5B6B79] uppercase font-bold border-b border-[#DDE3E8]">
                <tr>
                  <th className="p-3.5">#</th>
                  <th className="p-3.5">E-posta</th>
                  <th className="p-3.5">Ad</th>
                  <th className="p-3.5">KVKK Onayı</th>
                  <th className="p-3.5">Kayıt Tarihi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DDE3E8]">
                {subscribers.map((sub, idx) => (
                  <tr key={sub.id} className="hover:bg-[#F5F7F9]/60">
                    <td className="p-3.5 text-[#5B6B79] font-mono">{idx + 1}</td>
                    <td className="p-3.5 font-semibold text-[#102A43]">{sub.email}</td>
                    <td className="p-3.5 text-[#5B6B79]">{sub.name || '—'}</td>
                    <td className="p-3.5">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${sub.consent ? 'bg-emerald-100 text-emerald-800' : 'bg-red-100 text-red-800'}`}>
                        {sub.consent ? 'Onaylı' : 'Onaysız'}
                      </span>
                    </td>
                    <td className="p-3.5 text-[#5B6B79]">
                      {new Date(sub.subscribedAt).toLocaleString('tr-TR')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
