import React from 'react';
import { BarChart2, TrendingUp, AlertTriangle, CheckCircle, Tag } from 'lucide-react';

interface MarketBoxProps {
  data: {
    oneCikanVeriler: { label: string; value: string }[];
    talepGorenBranslar: string[];
    firsatlar: string[];
    riskler: string[];
    kaynakTarihi: string;
  };
}

export default function MarketBox({ data }: MarketBoxProps) {
  return (
    <div className="my-8 bg-[#F5F7F9] border-2 border-[#102A43] rounded-md p-6 text-sm">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DDE3E8]">
        <div className="flex items-center gap-2">
          <BarChart2 className="w-5 h-5 text-[#00A6A6]" />
          <span className="font-black text-[#102A43] text-base">
            Pazar Özeti ve Saha Göstergeleri
          </span>
        </div>
        <span className="text-xs text-[#5B6B79]">Kaynak: {data.kaynakTarihi}</span>
      </div>

      {/* Verified Metrics Grid */}
      {data.oneCikanVeriler && data.oneCikanVeriler.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
          {data.oneCikanVeriler.map((item, idx) => (
            <div key={idx} className="bg-white p-3 rounded border border-[#DDE3E8] shadow-xs">
              <span className="text-[11px] text-[#5B6B79] block mb-1 font-medium">{item.label}</span>
              <span className="text-base font-black text-[#102A43]">{item.value}</span>
            </div>
          ))}
        </div>
      )}

      {/* Branches */}
      {data.talepGorenBranslar && (
        <div className="mb-5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#102A43] block mb-2">
            Talep Gören Öncelikli Branşlar:
          </span>
          <div className="flex flex-wrap gap-2">
            {data.talepGorenBranslar.map((branch, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-white text-[#17212B] text-xs font-semibold rounded border border-[#DDE3E8] flex items-center gap-1.5 shadow-xs"
              >
                <Tag className="w-3 h-3 text-[#00A6A6]" />
                {branch}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Opportunities & Risks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-3 border-t border-[#DDE3E8]">
        {/* Fırsatlar */}
        <div className="bg-white p-4 rounded border border-emerald-200">
          <div className="flex items-center gap-1.5 text-xs font-black text-emerald-800 uppercase tracking-wider mb-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>Fırsatlar</span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#17212B] pl-4 list-disc marker:text-emerald-600">
            {data.firsatlar.map((f, i) => (
              <li key={i} className="leading-relaxed">{f}</li>
            ))}
          </ul>
        </div>

        {/* Riskler */}
        <div className="bg-white p-4 rounded border border-amber-200">
          <div className="flex items-center gap-1.5 text-xs font-black text-amber-900 uppercase tracking-wider mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-600" />
            <span>Riskler</span>
          </div>
          <ul className="space-y-1.5 text-xs text-[#17212B] pl-4 list-disc marker:text-amber-600">
            {data.riskler.map((r, i) => (
              <li key={i} className="leading-relaxed">{r}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
