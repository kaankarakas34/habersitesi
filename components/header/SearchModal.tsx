'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, Tag } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const POPULAR_TAGS = [
  'Yetki Belgesi',
  'Mevzuat',
  'Almanya',
  'İngiltere',
  'Diş Turizmi',
  'Yapay Zekâ',
  'CRM',
  'Teşvikler',
];

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/arama?q=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  const handleTagClick = (tag: string) => {
    router.push(`/arama?q=${encodeURIComponent(tag)}`);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-[#102A43]/70 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-white rounded-lg shadow-2xl border border-[#DDE3E8] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <form onSubmit={handleSearch} className="flex items-center px-4 py-3.5 border-b border-[#DDE3E8]">
          <Search className="w-5 h-5 text-[#00A6A6] shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Haber, mevzuat, pazar veya yazar ara..."
            className="w-full text-base text-[#17212B] placeholder:text-slate-400 focus:outline-none bg-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="text-slate-400 hover:text-slate-600 p-1 mr-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            type="submit"
            className="bg-[#102A43] hover:bg-[#1D3D5E] text-white text-xs font-semibold px-3.5 py-2 rounded transition-colors shrink-0 ml-2"
          >
            Ara
          </button>
        </form>

        {/* Quick Suggestions & Tags */}
        <div className="p-5 bg-[#F5F7F9]">
          <div className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#5B6B79] mb-3">
            <Tag className="w-3.5 h-3.5 text-[#00A6A6]" />
            <span>Popüler Arama Konuları</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {POPULAR_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => handleTagClick(tag)}
                className="text-xs bg-white text-[#17212B] hover:bg-[#00A6A6] hover:text-white px-3 py-1.5 rounded border border-[#DDE3E8] transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="mt-5 pt-4 border-t border-[#DDE3E8] flex items-center justify-between text-xs text-[#5B6B79]">
            <span>Detaylı filtreleme için doğrudan arama yapabilirsiniz.</span>
            <button
              type="button"
              onClick={() => {
                router.push('/arama');
                onClose();
              }}
              className="text-[#00A6A6] font-semibold hover:underline flex items-center gap-1"
            >
              Gelişmiş Arama <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
