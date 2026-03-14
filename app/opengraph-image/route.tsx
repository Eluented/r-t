import { ImageResponse } from 'next/og';

export async function GET(request: Request) {
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
            display: 'flex',
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
        <div style={{ display: 'flex', flexDirection: 'row', gap: 32, alignItems: 'center', maxWidth: '92%' }}>
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: '50%',
              border: '4px solid #059669',
              boxShadow: '0 4px 24px rgba(5,150,105,0.15)',
              background: 'linear-gradient(135deg, #d1fae5 0%, #bfdbfe 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#065f46',
              fontSize: 72,
              fontWeight: 800,
            }}
          >
            R
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
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
              Rosalind's Tuition
            </div>
            <div style={{ fontSize: 38, lineHeight: 1.2, fontWeight: 700, color: '#1f2937' }}>
              One-to-One Maths, English & Specialist SEN Support
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 32, fontWeight: 700, color: '#065f46' }}>30+ Years Experience</div>
          <div style={{ fontSize: 30, color: '#374151' }}>North West London & Online</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
