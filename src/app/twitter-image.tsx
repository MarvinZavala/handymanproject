import { ImageResponse } from 'next/og';

export const alt = 'Twin Handyman & Plumbing – Licensed Bay Area Plumbers, 24/7 Emergency Service';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          background: 'linear-gradient(135deg, #0B1D41 0%, #0B1D41 55%, #1F75A6 100%)',
          color: 'white',
        }}
      >
        <div style={{ display: 'flex', fontSize: 30, color: '#B88E3B', fontWeight: 700, letterSpacing: 2 }}>
          LICENSED • BONDED • INSURED
        </div>
        <div style={{ display: 'flex', fontSize: 84, fontWeight: 800, marginTop: 24, lineHeight: 1.05 }}>
          Twin Handyman & Plumbing
        </div>
        <div style={{ display: 'flex', fontSize: 40, marginTop: 24, color: '#dbeafe' }}>
          San Leandro • Oakland • Bay Area Plumbers
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: 56, gap: 24 }}>
          <div style={{ display: 'flex', background: '#B31E1E', padding: '16px 32px', borderRadius: 12, fontSize: 36, fontWeight: 700 }}>
            24/7 Emergency
          </div>
          <div style={{ display: 'flex', fontSize: 44, fontWeight: 800, color: '#B88E3B' }}>(510) 926-7272</div>
        </div>
      </div>
    ),
    size
  );
}
