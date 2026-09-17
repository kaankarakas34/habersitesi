import { NextResponse } from 'next/server';
import { readStorage, writeStorage } from '@/lib/services/storage';
import { NewsletterSubscriber } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, consent } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Lütfen geçerli bir e-posta adresi giriniz.' }, { status: 400 });
    }

    if (!consent) {
      return NextResponse.json({ error: 'Bülten kaydı için açık rıza ve gizlilik koşullarını onaylamalısınız.' }, { status: 400 });
    }

    const data = readStorage();
    const existing = data.subscribers.find((s) => s.email.toLowerCase() === email.toLowerCase());

    if (existing) {
      return NextResponse.json({ message: 'Bu e-posta adresi zaten bültenimize kayıtlıdır. İlginiz için teşekkürler!' });
    }

    const newSub: NewsletterSubscriber = {
      id: 'sub-' + Date.now(),
      email: email.trim().toLowerCase(),
      name: name?.trim() || undefined,
      consent: true,
      subscribedAt: new Date().toISOString(),
    };

    data.subscribers.unshift(newSub);
    writeStorage(data);

    return NextResponse.json({
      success: true,
      message: 'Haftalık Radar bültenine başarıyla abone oldunuz. Hoş geldiniz!',
    });
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json({ error: 'Bir hata oluştu. Lütfen tekrar deneyin.' }, { status: 500 });
  }
}

export async function GET() {
  const data = readStorage();
  return NextResponse.json({ subscribers: data.subscribers });
}
