import React from 'react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verifySessionToken, ADMIN_COOKIE_NAME } from '@/lib/auth';
import AdminNavbar from './AdminNavbar';

export const dynamic = 'force-dynamic';

export default async function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
  const isValid = await verifySessionToken(token);

  if (!isValid) {
    redirect('/admin/login');
  }

  return (
    <div className="min-h-screen bg-[#F5F7F9] flex flex-col">
      <AdminNavbar />
      <main className="flex-1">{children}</main>
    </div>
  );
}
