import { NextResponse } from 'next/server';
import { getAdminCredentials, createSessionToken, ADMIN_COOKIE_NAME } from '@/lib/auth';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { username, password } = body;

    const credentials = getAdminCredentials();

    if (!username || !password) {
      return NextResponse.json(
        { error: 'Kullanıcı adı ve şifre gereklidir.' },
        { status: 400 }
      );
    }

    if (username !== credentials.username || password !== credentials.password) {
      return NextResponse.json(
        { error: 'Geçersiz kullanıcı adı veya şifre.' },
        { status: 401 }
      );
    }

    const token = await createSessionToken(username);

    const response = NextResponse.json({
      success: true,
      message: 'Giriş başarılı.',
    });

    response.cookies.set({
      name: ADMIN_COOKIE_NAME,
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 7 * 24 * 60 * 60, // 7 gün
    });

    return response;
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { error: 'Giriş işlemi sırasında bir hata oluştu.' },
      { status: 500 }
    );
  }
}
