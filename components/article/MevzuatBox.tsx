import React from 'react';
import { Scale, CheckCircle2, Users, Calendar, ExternalLink, AlertCircle } from 'lucide-react';

interface MevzuatBoxProps {
  data: {
    neDegisti: string[];
    kimleriIlgilendiriyor: string[];
    yururlukTarihi: string;
    resmiKaynakUrl?: string;
    resmiGazeteNo?: string;
    sektoreEtkisi: string;
  };
}

export default function MevzuatBox({ data }: MevzuatBoxProps) {
  return (
    <div className="my-8 bg-[#EAF6F8] border-2 border-[#00A6A6] rounded-md p-6 shadow-xs text-sm">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#00A6A6]/30">
        <div className="flex items-center gap-2">
          <Scale className="w-5 h-5 text-[#C62828]" />
          <span className="font-black text-[#102A43] text-base">
            Mevzuat Değerlendirme & Hukuki Özet Kutusu
          </span>
        </div>
        {data.yururlukTarihi && (
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#102A43] bg-white px-3 py-1 rounded border border-[#00A6A6]/30">
            <Calendar className="w-3.5 h-3.5 text-[#00A6A6]" />
            <span>Yürürlük Tarihi: {data.yururlukTarihi}</span>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {/* Ne Değişti? */}
        {data.neDegisti && data.neDegisti.length > 0 && (
          <div>
            <div className="flex items-center gap-1.5 font-black text-[#C62828] uppercase text-xs tracking-wider mb-2">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Ne Değişti?</span>
            </div>
            <ul className="space-y-1.5 pl-5 list-disc marker:text-[#C62828] text-[#17212B]">
              {data.neDegisti.map((item, idx) => (
                <li key={idx} className="leading-relaxed">{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Kimleri İlgilendiriyor? */}
        {data.kimleriIlgilendiriyor && data.kimleriIlgilendiriyor.length > 0 && (
          <div className="pt-2 border-t border-[#DDE3E8]">
            <div className="flex items-center gap-1.5 font-black text-[#102A43] uppercase text-xs tracking-wider mb-1.5">
              <Users className="w-4 h-4 text-[#00A6A6] shrink-0" />
              <span>Kimleri İlgilendiriyor?</span>
            </div>
            <p className="text-slate-700 leading-relaxed pl-1">
              {data.kimleriIlgilendiriyor.join(', ')}
            </p>
          </div>
        )}

        {/* Sektöre Etkisi */}
        {data.sektoreEtkisi && (
          <div className="pt-2 border-t border-[#DDE3E8]">
            <div className="flex items-center gap-1.5 font-black text-[#102A43] uppercase text-xs tracking-wider mb-1.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Sektöre Etkisi</span>
            </div>
            <p className="text-slate-700 leading-relaxed pl-1">
              {data.sektoreEtkisi}
            </p>
          </div>
        )}
      </div>

      {/* Official Link */}
      {data.resmiKaynakUrl && (
        <div className="mt-5 pt-3 border-t border-[#00A6A6]/30 flex items-center justify-between text-xs">
          <span className="text-[#5B6B79]">
            {data.resmiGazeteNo ? `Resmî Gazete ${data.resmiGazeteNo}` : 'Resmî Mevzuat Metni'}
          </span>
          <a
            href={data.resmiKaynakUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00A6A6] hover:text-[#102A43] font-bold flex items-center gap-1"
          >
            <span>Resmî Kaynağı Görüntüle</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}
    </div>
  );
}
