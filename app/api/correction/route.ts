import { NextResponse } from 'next/server';
import { readStorage, writeStorage } from '@/lib/services/storage';
import { CorrectionReport } from '@/lib/types';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { articleSlug, articleTitle, reporterEmail, correctionDetail } = body;

    if (!reporterEmail || !correctionDetail) {
      return NextResponse.json({ error: 'Lütfen e-posta ve düzeltme detayını giriniz.' }, { status: 400 });
    }

    const data = readStorage();
    const report: CorrectionReport = {
      id: 'corr-' + Date.now(),
      articleSlug: articleSlug || 'genel',
      articleTitle: articleTitle || 'Genel Bildirim',
      reporterEmail: reporterEmail.trim(),
      correctionDetail: correctionDetail.trim(),
      submittedAt: new Date().toISOString(),
      status: 'new',
    };

    data.corrections.unshift(report);
    writeStorage(data);

    return NextResponse.json({
      success: true,
      message: 'Düzeltme bildiriminiz yayın masasına iletilmiştir. Titizliğiniz ve katkınız için teşekkür ederiz.',
    });
  } catch (error) {
    console.error('Correction submission error:', error);
    return NextResponse.json({ error: 'Bir hata oluştu. Lütfen tekrar deneyin.' }, { status: 500 });
  }
}
