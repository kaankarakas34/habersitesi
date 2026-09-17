'use client';

import React, { useState } from 'react';
import { Share2, Link as LinkIcon, Check } from 'lucide-react';

interface ShareButtonsProps {
  title: string;
  url?: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const currentUrl = typeof window !== 'undefined' ? window.location.href : (url || '');

  const handleCopy = () => {
    if (typeof navigator !== 'undefined') {
      navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const shareLinkedIn = () => {
    window.open(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      '_blank'
    );
  };

  const shareTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(currentUrl)}`,
      '_blank'
    );
  };

  const shareWhatsApp = () => {
    window.open(
      `https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + currentUrl)}`,
      '_blank'
    );
  };

  return (
    <div className="flex items-center gap-2 py-3">
      <span className="text-xs font-bold text-[#5B6B79] flex items-center gap-1.5 mr-1">
        <Share2 className="w-3.5 h-3.5 text-[#00A6A6]" />
        <span>Paylaş:</span>
      </span>

      {/* LinkedIn */}
      <button
        type="button"
        onClick={shareLinkedIn}
        className="p-2 rounded bg-white hover:bg-[#0A66C2] hover:text-white text-[#102A43] border border-[#DDE3E8] transition-colors"
        title="LinkedIn'de Paylaş"
        aria-label="LinkedIn"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.89 1.63-1.85 3.36-1.85 3.59 0 4.26 2.36 4.26 5.43v6.31zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.22 0z"/></svg>
      </button>

      {/* Twitter / X */}
      <button
        type="button"
        onClick={shareTwitter}
        className="p-2 rounded bg-white hover:bg-black hover:text-white text-[#102A43] border border-[#DDE3E8] transition-colors"
        title="X'te Paylaş"
        aria-label="Twitter / X"
      >
        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </button>

      {/* WhatsApp */}
      <button
        type="button"
        onClick={shareWhatsApp}
        className="px-2.5 py-1.5 rounded bg-white hover:bg-emerald-600 hover:text-white text-[#102A43] border border-[#DDE3E8] text-xs font-semibold transition-colors flex items-center gap-1"
        title="WhatsApp'ta Paylaş"
      >
        <span className="text-emerald-600 font-bold">WA</span>
      </button>

      {/* Copy Link */}
      <button
        type="button"
        onClick={handleCopy}
        className="px-2.5 py-1.5 rounded bg-white hover:bg-[#EAF6F8] hover:text-[#00A6A6] text-[#102A43] border border-[#DDE3E8] text-xs font-semibold transition-colors flex items-center gap-1"
        title="Bağlantıyı Kopyala"
      >
        {copied ? (
          <>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-600 font-bold">Kopyalandı</span>
          </>
        ) : (
          <>
            <LinkIcon className="w-3.5 h-3.5 text-[#5B6B79]" />
            <span>Linki Kopyala</span>
          </>
        )}
      </button>
    </div>
  );
}
