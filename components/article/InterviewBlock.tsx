import React from 'react';
import { Quote, CheckCircle, ShieldAlert } from 'lucide-react';

interface InterviewBlockProps {
  data: {
    guestName: string;
    guestTitle: string;
    guestOrganization: string;
    guestBio: string;
    isSponsored?: boolean;
    qaItems: { question: string; answer: string }[];
  };
}

export default function InterviewBlock({ data }: InterviewBlockProps) {
  return (
    <div className="my-8 space-y-6">
      {/* Guest Bio Card */}
      <div className="bg-[#EAF6F8] border border-[#00A6A6]/40 rounded-md p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span className="text-[10px] font-black uppercase tracking-widest text-[#00A6A6] block mb-1">
            RÖPORTAJ KONUĞU
          </span>
          <h3 className="text-base font-black text-[#102A43]">
            {data.guestName}
          </h3>
          <p className="text-xs text-[#5B6B79] font-medium">
            {data.guestTitle} — <span className="text-[#102A43]">{data.guestOrganization}</span>
          </p>
          <p className="text-xs text-[#17212B]/85 mt-2 leading-relaxed max-w-xl">
            {data.guestBio}
          </p>
        </div>

        <div>
          {data.isSponsored ? (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 border border-amber-300 rounded text-xs font-bold whitespace-nowrap">
              <ShieldAlert className="w-3.5 h-3.5 text-amber-600" />
              <span>Sponsorlu Röportaj</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 text-emerald-900 border border-emerald-300 rounded text-xs font-bold whitespace-nowrap">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Bağımsız Editoryal</span>
            </span>
          )}
        </div>
      </div>

      {/* Q&A Items */}
      {data.qaItems && data.qaItems.length > 0 && (
        <div className="space-y-6 pt-2">
          {data.qaItems.map((qa, i) => (
            <div key={i} className="border-l-4 border-[#00A6A6] pl-5 py-1">
              <div className="text-base font-extrabold text-[#102A43] mb-2 leading-snug">
                {qa.question}
              </div>
              <div className="text-sm text-[#17212B] leading-relaxed">
                {qa.answer}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
