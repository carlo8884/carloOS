/**
 * /api/og — dynamic OG image for AskTheVet.
 * Uses next/og's ImageResponse. Trust-medical blue, clinical type.
 */

import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = (searchParams.get('title') ?? 'AskTheVet — AI Pet Symptom Checker').slice(0, 160)
  const category = searchParams.get('category') ?? 'AI Symptom Checker'

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          background: 'linear-gradient(135deg, #eff6ff 0%, #ffffff 60%)',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: '#2563eb',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: 22,
            }}
          >
            A
          </div>
          <div style={{ fontSize: 24, fontWeight: 700, color: '#0f172a' }}>AskTheVet</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 18,
              textTransform: 'uppercase',
              letterSpacing: 2,
              color: '#2563eb',
              fontWeight: 600,
              marginBottom: 16,
            }}
          >
            {category}
          </div>
          <div
            style={{
              fontSize: 56,
              lineHeight: 1.1,
              color: '#0f172a',
              fontWeight: 800,
              maxWidth: '85%',
            }}
          >
            {title}
          </div>
        </div>

        <div style={{ fontSize: 18, color: '#64748b' }}>askthevet.com</div>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
