import { NextResponse } from 'next/server';
import { readStorage, writeStorage } from '@/lib/services/storage';

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json({ error: 'ID ve statü zorunludur.' }, { status: 400 });
    }

    const data = readStorage();
    const app = data.applications.find((a) => a.id === id);

    if (!app) {
      return NextResponse.json({ error: 'Başvuru bulunamadı.' }, { status: 404 });
    }

    app.status = status;
    writeStorage(data);

    return NextResponse.json({ success: true, application: app });
  } catch (error) {
    console.error('Error updating application:', error);
    return NextResponse.json({ error: 'Güncellenemedi.' }, { status: 500 });
  }
}
