import { ImageResponse } from 'next/og';

export function GET() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', background: '#102a43', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80 }}>
      <div style={{ display: 'flex', color: '#73d7ce', fontSize: 27, marginBottom: 35 }}>Türkiye’den dünyaya, sektörün radarı</div>
      <div style={{ display: 'flex', fontSize: 80, fontWeight: 700, letterSpacing: -3 }}>Sağlık Turizmi Radarı</div>
      <div style={{ display: 'flex', color: '#c7d7e1', fontSize: 30, marginTop: 30 }}>Haber, mevzuat, analiz ve araştırma</div>
      <div style={{ display: 'flex', height: 5, width: 120, background: '#73d7ce', marginTop: 48 }} />
    </div>,
    { width: 1200, height: 630 },
  );
}
