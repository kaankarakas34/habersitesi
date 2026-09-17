import { NextResponse } from 'next/server';
import { readStorage, writeStorage } from '@/lib/services/storage';
import { AuthorApplication } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      organization,
      title,
      expertise,
      linkedinUrl,
      bio,
      samplePitch,
      conflictStatement,
      agreedToTerms,
    } = body;

    if (!fullName || !email || !organization || !title || !bio || !samplePitch) {
      return NextResponse.json({ error: 'Lütfen zorunlu alanları eksiksiz doldurunuz.' }, { status: 400 });
    }

    if (!agreedToTerms) {
      return NextResponse.json({ error: 'Yayın ilkeleri ve çıkar çatışması şartlarını onaylamanız gerekmektedir.' }, { status: 400 });
    }

    const data = readStorage();
    const newApp: AuthorApplication = {
      id: 'app-' + Date.now(),
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim(),
      organization: organization.trim(),
      title: title.trim(),
      expertise: Array.isArray(expertise) ? expertise : [expertise].filter(Boolean),
      linkedinUrl: linkedinUrl?.trim() || '',
      bio: bio.trim(),
      samplePitch: samplePitch.trim(),
      conflictStatement: conflictStatement?.trim() || 'Beyan edilmedi',
      agreedToTerms: true,
      status: 'pending',
      appliedAt: new Date().toISOString(),
    };

    data.applications.unshift(newApp);
    writeStorage(data);

    return NextResponse.json({
      success: true,
      message: 'Yazar başvurunuz başarıyla alındı. Yayın kurulu değerlendirmesi ardından e-posta adresinize bilgilendirme yapılacaktır.',
    });
  } catch (error) {
    console.error('Author application error:', error);
    return NextResponse.json({ error: 'Bir hata oluştu. Lütfen tekrar deneyin.' }, { status: 500 });
  }
}

export async function GET() {
  const data = readStorage();
  return NextResponse.json({ applications: data.applications });
}
