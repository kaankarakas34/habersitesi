'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, User, Eye, EyeOff, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';
import RadarLogo from '@/components/common/RadarLogo';

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim() || !password.trim()) {
      setError('Lütfen kullanıcı adı ve şifrenizi giriniz.');
      return;
    }

    try {
      setLoading(true);
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Giriş başarısız. Lütfen bilgilerinizi kontrol ediniz.');
        setLoading(false);
        return;
      }

      // Başarılı girişte doğrudan admin paneline yönlendir
      window.location.href = '/admin';
    } catch {
      setError('Bağlantı hatası oluştu. Lütfen tekrar deneyiniz.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F7F9] flex flex-col justify-center py-12 sm:px-6 lg:px-8 selection:bg-[#00A6A6] selection:text-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="flex justify-center mb-4">
          <RadarLogo size="lg" />
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#102A43] text-[#00A6A6] rounded-full text-xs font-bold tracking-wide uppercase mb-2">
          <ShieldCheck className="w-4 h-4 text-[#00A6A6]" />
          <span>Editoryal Yönetim Masası</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-black text-[#102A43] tracking-tight">
          Yetkili Editör Girişi
        </h2>
        <p className="mt-1 text-xs text-[#5B6B79]">
          Bu alan yalnızca yetkili yayın masası personeline açıktır.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
        <div className="bg-white py-8 px-6 sm:px-10 shadow-xl rounded-xl border border-[#DDE3E8]">
          {error && (
            <div className="mb-5 p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
              <div className="font-semibold">{error}</div>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                Kullanıcı Adı
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5B6B79]">
                  <User className="w-4 h-4" />
                </div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Kullanıcı adınız"
                  className="w-full pl-10 pr-4 py-2.5 bg-[#F5F7F9] border border-[#DDE3E8] rounded-lg text-sm text-[#102A43] placeholder:text-[#829ab1] focus:outline-hidden focus:ring-2 focus:ring-[#00A6A6] focus:bg-white transition-all font-medium"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#102A43] uppercase tracking-wider mb-1.5">
                Şifre
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#5B6B79]">
                  <Lock className="w-4 h-4" />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-11 py-2.5 bg-[#F5F7F9] border border-[#DDE3E8] rounded-lg text-sm text-[#102A43] placeholder:text-[#829ab1] focus:outline-hidden focus:ring-2 focus:ring-[#00A6A6] focus:bg-white transition-all font-medium"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#5B6B79] hover:text-[#102A43] transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-4 bg-[#102A43] hover:bg-[#1D3D5E] text-white font-bold text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span>Doğrulanıyor...</span>
                ) : (
                  <>
                    <span>Güvenli Giriş Yap</span>
                    <ArrowRight className="w-4 h-4 text-[#00A6A6]" />
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-5 border-t border-[#DDE3E8] text-center">
            <p className="text-[11px] text-[#5B6B79]">
              Bu sayfa genel kullanıma kapalıdır. Yetkisiz erişim girişimleri kayıt altına alınmaktadır.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
