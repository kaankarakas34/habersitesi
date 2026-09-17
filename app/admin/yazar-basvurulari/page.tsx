'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Users, CheckCircle, XCircle, Clock, ArrowLeft, Download } from 'lucide-react';
import { AuthorApplication } from '@/lib/types';

export default function ApplicationsAdminPage() {
  const [applications, setApplications] = useState<AuthorApplication[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionMsg, setActionMsg] = useState('');

  const fetchApps = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/writer-application');
      const data = await res.json();
      setApplications(data.applications || []);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchApps(); }, []);

  const updateStatus = async (id: string, status: 'approved' | 'rejected') => {
    try {
      await fetch('/api/admin/applications', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      });
      setActionMsg(`Başvuru durumu "${status}" olarak güncellendi.`);
      fetchApps();
      setTimeout(() => setActionMsg(''), 3000);
    } catch {
      alert('İşlem başarısız.');
    }
  };

  const statusColors = {
    pending: 'bg-amber-100 text-amber-900 border-amber-300',
    approved: 'bg-emerald-100 text-emerald-900 border-emerald-300',
    rejected: 'bg-red-100 text-red-900 border-red-300',
  };

  return (
    <div className="py-8 bg-[#F5F7F9] min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DDE3E8]">
          <div className="flex items-center gap-3">
            <Link href="/admin" className="text-[#102A43] hover:text-[#00A6A6]">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <h1 className="text-xl font-black text-[#102A43]">Yazar Başvuruları</h1>
              <p className="text-xs text-[#5B6B79]">
                {applications.filter(a => a.status === 'pending').length} bekleyen, {applications.length} toplam başvuru
              </p>
            </div>
          </div>
        </div>

        {actionMsg && (
          <div className="p-3 mb-4 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs rounded flex items-center gap-2">
            <CheckCircle className="w-4 h-4" />
            <span>{actionMsg}</span>
          </div>
        )}

        {loading ? (
          <div className="text-center py-12 text-slate-500 text-sm">Yükleniyor...</div>
        ) : applications.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-sm bg-white rounded border border-[#DDE3E8]">
            Henüz yazar başvurusu bulunmuyor.
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div
                key={app.id}
                className="bg-white border border-[#DDE3E8] rounded-md p-5 shadow-xs"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-sm font-bold text-[#102A43]">{app.fullName}</h3>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded border ${statusColors[app.status]}`}>
                        {app.status === 'pending' ? 'Beklemede' : app.status === 'approved' ? 'Onaylandı' : 'Reddedildi'}
                      </span>
                    </div>

                    <div className="text-xs text-[#5B6B79] space-y-0.5">
                      <p><span className="font-semibold text-[#102A43]">Kurum & Görev:</span> {app.organization} — {app.title}</p>
                      <p><span className="font-semibold text-[#102A43]">E-posta:</span> {app.email}</p>
                      {app.linkedinUrl && (
                        <p>
                          <span className="font-semibold text-[#102A43]">LinkedIn:</span>{' '}
                          <a href={app.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#00A6A6] hover:underline">
                            Profili Görüntüle
                          </a>
                        </p>
                      )}
                      <p><span className="font-semibold text-[#102A43]">Uzmanlık:</span> {app.expertise.join(', ')}</p>
                      <p className="mt-2"><span className="font-semibold text-[#102A43]">Yazı Önerisi:</span> {app.samplePitch}</p>
                      <p><span className="font-semibold text-[#102A43]">Çıkar Çatışması:</span> {app.conflictStatement}</p>
                      <p className="text-[11px] text-slate-400">Başvuru Tarihi: {new Date(app.appliedAt).toLocaleString('tr-TR')}</p>
                    </div>
                  </div>

                  {app.status === 'pending' && (
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => updateStatus(app.id, 'approved')}
                        className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded flex items-center gap-1 transition-colors"
                      >
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>Onayla</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => updateStatus(app.id, 'rejected')}
                        className="px-3 py-2 bg-[#C62828] hover:bg-red-800 text-white text-xs font-bold rounded flex items-center gap-1 transition-colors"
                      >
                        <XCircle className="w-3.5 h-3.5" />
                        <span>Reddet</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
