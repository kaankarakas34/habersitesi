import React from 'react';
import { Compass, Lightbulb, Users, CheckSquare, AlertTriangle } from 'lucide-react';

interface AnalysisBoxProps {
  data: {
    nedenOnemli: string;
    etkilenenKurumlar: string[];
    sektorNeYapmali: string[];
    riskVeFirsatlar: string;
  };
}

export default function AnalysisBox({ data }: AnalysisBoxProps) {
  return (
    <div className="my-8 bg-[#EAF6F8] border-2 border-[#102A43] rounded-md p-6 text-sm">
      {/* Header */}
      <div className="flex items-center gap-2 pb-3 mb-4 border-b border-[#00A6A6]/30">
        <Compass className="w-5 h-5 text-[#00A6A6]" />
        <span className="font-black text-[#102A43] text-base">
          Radar Analiz Notu & Karar Verici Çıkarımları
        </span>
      </div>

      <div className="space-y-4">
        {/* Neden Önemli? */}
        {data.nedenOnemli && (
          <div>
            <div className="flex items-center gap-1.5 font-black text-[#102A43] text-xs uppercase tracking-wider mb-1">
              <Lightbulb className="w-4 h-4 text-[#00A6A6]" />
              <span>Gelişme Neden Önemli?</span>
            </div>
            <p className="text-[#17212B] leading-relaxed pl-1">{data.nedenOnemli}</p>
          </div>
        )}

        {/* Etkilenen Kurumlar */}
        {data.etkilenenKurumlar && data.etkilenenKurumlar.length > 0 && (
          <div className="pt-3 border-t border-[#DDE3E8]">
            <div className="flex items-center gap-1.5 font-black text-[#102A43] text-xs uppercase tracking-wider mb-1.5">
              <Users className="w-4 h-4 text-[#00A6A6]" />
              <span>Hangi Kurumları Etkiliyor?</span>
            </div>
            <ul className="space-y-1 text-xs text-[#17212B] pl-5 list-disc marker:text-[#00A6A6]">
              {data.etkilenenKurumlar.map((k, i) => (
                <li key={i}>{k}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Sektör Ne Yapmalı? */}
        {data.sektorNeYapmali && data.sektorNeYapmali.length > 0 && (
          <div className="pt-3 border-t border-[#DDE3E8]">
            <div className="flex items-center gap-1.5 font-black text-[#102A43] text-xs uppercase tracking-wider mb-1.5">
              <CheckSquare className="w-4 h-4 text-emerald-600" />
              <span>Sektör Ne Yapmalı? (Önerilen Eylemler)</span>
            </div>
            <ul className="space-y-1 text-xs text-[#17212B] pl-5 list-disc marker:text-emerald-600">
              {data.sektorNeYapmali.map((e, i) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Risk ve Fırsatlar */}
        {data.riskVeFirsatlar && (
          <div className="pt-3 border-t border-[#DDE3E8]">
            <div className="flex items-center gap-1.5 font-black text-[#C62828] text-xs uppercase tracking-wider mb-1">
              <AlertTriangle className="w-4 h-4 text-[#C62828]" />
              <span>Risk ve Fırsatlar Dengesi</span>
            </div>
            <p className="text-slate-700 leading-relaxed pl-1">{data.riskVeFirsatlar}</p>
          </div>
        )}
      </div>
    </div>
  );
}
