/**
 * GET /api/og?title=...&category=...
 *
 * Generates 1200×630 Open Graph image cards for every page on
 * seniorpets. Edge runtime keeps response latency low globally.
 *
 * The shared template lives at packages/ui/src/og/OgTemplate.tsx so
 * design + per-site palette stay portfolio-coherent.
 */
import { ImageResponse } from 'next/og'
import type { NextRequest } from 'next/server'
import { OgTemplate } from '@carloOS/ui'

export const runtime = 'edge'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)

  const title = searchParams.get('title') ?? 'Compassionate Care for Aging Pets'
  const category = searchParams.get('category') ?? undefined

  return new ImageResponse(
    (
      <OgTemplate
        siteId="seniorpets"
        title={title}
        category={category}
        wordmark="SeniorPetPharmacy"
      />
    ),
    { width: 1200, height: 630 }
  )
}
