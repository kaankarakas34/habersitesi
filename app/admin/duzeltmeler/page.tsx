'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, CheckCircle } from 'lucide-react';
import { CorrectionReport } from '@/lib/types';

export default function CorrectionsAdminPage() {
  const [reports, setReports] = useState<CorrectionReport[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/correction')
      .then((r) => r.json())
      .then((d) => { setReports(d.reports || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const statusLabel: Record<CorrectionReport['status'], string> = {
    new: 'Yeni',
    investigating: 'İnceleniyor',
    resolved: 'Çözüldü',
    dismissed: 'Reddedildi',
  };

  const statusCss: Record<CorrectionReport['status'], string> = {
    new: 'bg-amber-50 text-amber-800 border-amber-300',
    investigating: 'bg-blue-50 text-blue-800 border-blue-300',
    resolved: 'bg-emerald-50 text-emerald-800 border-emerald-300',
    dismissed: 'bg-slate-100 text-slate-600 border-slate-300',
  };

  return (
    <div className="py-8 bg-[#F5F7F9] min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 pb-4 mb-6 border-b border-[#DDE3E8]">
          <Link href="/admin" className="text-[#102A43] hover:text-[#00A6A6]">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xl font-black text-[#102A43]">Düzeltme Bildirimleri</h1>
            <p className="text-xs text-[#5B6B79]">
              {reports.filter(r => r.status === 'new').length} yeni bildirim, {reports.length} toplam
            </p>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12 text-sm text-slate-500">Yükleniyor...</div>
        ) : reports.length === 0 ? (
          <div className="text-center py-12 text-sm text-slate-500 bg-white rounded border border-[#DDE3E8]">
            Henüz düzeltme bildirimi bulunmuyor.
          </div>
        ) : (
          <div className="space-y-4">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-white border border-[#DDE3E8] rounded-md p-5 shadow-xs"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <span className="text-sm font-bold text-[#102A43]">
                      {report.reporterEmail || 'Anonim Okuyucu'}
                    </span>
                    <span className={`px-2 py-0.5 text-[10px] font-bold rounded border ${statusCss[report.status]}`}>
                      {statusLabel[report.status]}
                    </span>
                  </div>

                  <div className="text-xs text-[#5B6B79] space-y-1">
                    <p>
                      <span className="font-semibold text-[#102A43]">Makale:</span>{' '}
                      <Link href={`/haber/${report.articleSlug}`} className="text-[#00A6A6] hover:underline" target="_blank">
                        {report.articleTitle} ({report.articleSlug})
                      </Link>
                    </p>
                    <p>
                      <span className="font-semibold text-[#102A43]">Hata Açıklaması:</span>{' '}
                      {report.correctionDetail}
                    </p>
                    <p className="text-[11px] text-slate-400">
                      {new Date(report.submittedAt).toLocaleString('tr-TR')}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
