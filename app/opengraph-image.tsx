import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = "Rosalind's Tuition - Specialist Maths and English Tutoring";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '56px 64px',
          background:
            'linear-gradient(135deg, #ecfdf5 0%, #dbeafe 55%, #fffbeb 100%)',
          color: '#111827',
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            alignSelf: 'flex-start',
            borderRadius: 999,
            border: '2px solid rgba(5,150,105,0.25)',
            background: 'rgba(255,255,255,0.7)',
            padding: '10px 20px',
            fontSize: 28,
            fontWeight: 700,
            color: '#065f46',
          }}
        >
          Expert SEN & Exam Tutoring
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: '92%' }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 800,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #059669 0%, #1d4ed8 55%, #d97706 100%)',
              color: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Rosalind&apos;s Tuition
          </div>

          <div style={{ fontSize: 38, lineHeight: 1.2, fontWeight: 700, color: '#1f2937' }}>
            One-to-One Maths, English & Specialist SEN Support
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 700, color: '#065f46' }}>30+ Years Experience</div>
          <div style={{ fontSize: 30, color: '#374151' }}>North West London & Online</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
