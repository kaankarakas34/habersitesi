import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifySessionToken, ADMIN_COOKIE_NAME } from '@/lib/auth';

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(ADMIN_COOKIE_NAME)?.value;
  const isValid = await verifySessionToken(token);

  // 1. /admin sayfaları kontrolü
  if (pathname.startsWith('/admin')) {
    // Eğer kullanıcı /admin/login sayfasına gidiyorsa:
    if (pathname === '/admin/login') {
      // Zaten oturumu açıksa doğrudan ana admin paneline yönlendir
      if (isValid) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
      return NextResponse.next();
    }

    // Diğer tüm /admin yolları için oturum geçerli değilse /admin/login'e yönlendir
    if (!isValid) {
      const loginUrl = new URL('/admin/login', request.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  // 2. /api/admin API uç noktaları kontrolü
  if (pathname.startsWith('/api/admin')) {
    // Kimlik doğrulama API'leri muaf
    if (pathname.startsWith('/api/admin/auth/')) {
      return NextResponse.next();
    }

    if (!isValid) {
      return NextResponse.json(
        { error: 'Yetkisiz erişim. Lütfen giriş yapınız.' },
        { status: 401 }
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
