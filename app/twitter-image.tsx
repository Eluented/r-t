import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "Rosalind's Tuition";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 22,
          padding: '58px 64px',
          background: 'linear-gradient(135deg, #0f172a 0%, #0b5f74 50%, #155e75 100%)',
          color: '#ffffff',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 70,
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: '-0.02em',
          }}
        >
          Rosalind&apos;s Tuition
        </div>
        <div style={{ fontSize: 40, lineHeight: 1.2, fontWeight: 700, color: '#d1fae5' }}>
          Expert Maths, English & SEN Tutoring
        </div>
        <div style={{ fontSize: 30, lineHeight: 1.3, color: '#e2e8f0' }}>
          North West London • Online • 30+ Years Experience
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
