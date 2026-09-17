import React from 'react';
import { FileText, CheckCircle2, AlertCircle, Database, Calendar } from 'lucide-react';

interface ResearchBoxProps {
  data: {
    executiveSummary: string;
    methodology: string;
    sampleInfo: string;
    dateRange: string;
    findings: string[];
    limitations?: string;
    dataSources: string[];
    downloadUrl?: string;
  };
}

export default function ResearchBox({ data }: ResearchBoxProps) {
  return (
    <div className="my-8 bg-[#F5F7F9] border-2 border-[#102A43] rounded-md p-6 text-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DDE3E8]">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#00A6A6]" />
          <span className="font-black text-[#102A43] text-base">
            Araştırma Metodolojisi ve Yönetici Özeti
          </span>
        </div>
        <div className="flex items-center gap-1 text-xs text-[#5B6B79]">
          <Calendar className="w-3.5 h-3.5" />
          <span>{data.dateRange}</span>
        </div>
      </div>

      {/* Executive Summary */}
      <div className="mb-6 p-4 bg-white rounded border border-[#DDE3E8]">
        <span className="text-xs font-black uppercase tracking-wider text-[#00A6A6] block mb-1">
          YÖNETİCİ ÖZETİ
        </span>
        <p className="text-sm text-[#102A43] font-medium leading-relaxed">
          {data.executiveSummary}
        </p>
      </div>

      {/* Methodology & Sample */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <div className="bg-white p-3.5 rounded border border-[#DDE3E8]">
          <span className="text-[11px] font-bold text-[#5B6B79] block mb-1 uppercase">Metodoloji</span>
          <span className="text-xs text-[#17212B] leading-normal">{data.methodology}</span>
        </div>
        <div className="bg-white p-3.5 rounded border border-[#DDE3E8]">
          <span className="text-[11px] font-bold text-[#5B6B79] block mb-1 uppercase">Örneklem Grubu</span>
          <span className="text-xs text-[#17212B] leading-normal">{data.sampleInfo}</span>
        </div>
      </div>

      {/* Findings */}
      {data.findings && data.findings.length > 0 && (
        <div className="mb-6">
          <span className="text-xs font-black uppercase tracking-wider text-[#102A43] block mb-2.5">
            Temel Bulgular:
          </span>
          <ul className="space-y-2">
            {data.findings.map((finding, idx) => (
              <li key={idx} className="flex items-start gap-2 bg-white p-2.5 rounded border border-[#DDE3E8] text-xs text-[#17212B]">
                <CheckCircle2 className="w-4 h-4 text-[#00A6A6] shrink-0 mt-0.5" />
                <span className="leading-relaxed">{finding}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Limitations & Data sources */}
      <div className="pt-4 border-t border-[#DDE3E8] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-[#5B6B79]">
        {data.limitations && (
          <div className="flex items-center gap-1.5 text-slate-600">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span><strong>Kısıtlar:</strong> {data.limitations}</span>
          </div>
        )}

        <div className="flex items-center gap-1 shrink-0">
          <Database className="w-3.5 h-3.5 text-[#00A6A6]" />
          <span>Kaynaklar: {data.dataSources.join(', ')}</span>
        </div>
      </div>
    </div>
  );
}
