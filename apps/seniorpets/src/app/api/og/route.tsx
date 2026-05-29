/**
 * GET /api/og?title=...&category=...&site=dog-com
 * Generates Open Graph images for all pages using @vercel/og (Satori).
 * Used in buildMetadata() for og:image.
 *
 * Usage in metadata:
 *   ogImage: `https://dog.com/api/og?title=${encodeURIComponent(title)}&category=Health`
 *
 * Edge runtime for fast response globally.
 */

import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

const SITE_CONFIGS: Record<string, { primary: string; dark: string; name: string; domain: string }> = {
  seniorpets: { primary: '#7C6F59', dark: '#211D17', name: 'SeniorPetPharmacy', domain: 'seniorpetpharmacy.com' },
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const title = searchParams.get('title') ?? 'Compassionate Care for Aging Pets'
  const category = searchParams.get('category') ?? ''
  const siteId = (searchParams.get('site') ?? 'seniorpets') as keyof typeof SITE_CONFIGS
  const site = SITE_CONFIGS[siteId] ?? SITE_CONFIGS['seniorpets']

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: site.dark,
          padding: '60px 80px',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Background radial gradient */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(ellipse at 20% 70%, ${site.primary}22 0%, transparent 60%)`,
          }}
        />

        {/* Top bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px', position: 'relative' }}>
          <div style={{ width: '32px', height: '3px', background: site.primary }} />
          {category && (
            <span style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: site.primary }}>
              {category}
            </span>
          )}
          <div style={{ marginLeft: 'auto', fontSize: '13px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)' }}>
            {site.domain}
          </div>
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: title.length > 60 ? '48px' : title.length > 40 ? '56px' : '68px',
            fontWeight: 900,
            color: 'white',
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            maxWidth: '900px',
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          {title}
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px' }}>
          <div style={{ fontSize: '15px', fontWeight: 700, color: 'rgba(255,255,255,0.5)' }}>
            SeniorPetPharmacy · {new Date().getFullYear()}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: site.primary }} />
            <span style={{ fontSize: '18px', fontWeight: 900, color: 'white' }}>{site.name}</span>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
