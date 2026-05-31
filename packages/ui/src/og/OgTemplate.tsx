/**
 * OgTemplate — shared open-graph image template for every CarloOS site.
 *
 * Designed to be rendered through `next/og` ImageResponse from each
 * app's `/api/og/route.tsx`. The route handler stays edge-runtime and
 * 12-line minimal; this template carries the design, palette, and
 * per-site brand mapping.
 *
 * Output: 1200×630 (Twitter / OG / LinkedIn canonical size).
 *
 * Usage from an app route:
 *
 *   import { ImageResponse } from 'next/og'
 *   import { NextRequest } from 'next/server'
 *   import { OgTemplate } from '@carloOS/ui'
 *
 *   export const runtime = 'edge'
 *
 *   export async function GET(req: NextRequest) {
 *     const { searchParams } = new URL(req.url)
 *     return new ImageResponse(
 *       <OgTemplate
 *         siteId="seniorpets"
 *         title={searchParams.get('title') ?? 'Default'}
 *         category={searchParams.get('category') ?? undefined}
 *       />,
 *       { width: 1200, height: 630 }
 *     )
 *   }
 *
 * Trust posture:
 *   - No fabricated badges, "trusted by N" claims, fake credentials.
 *   - Title text is whatever the calling page passes via metadata —
 *     verbatim; no editorial transformations.
 *   - Category eyebrow renders only if explicitly provided.
 */

import type { ReactElement } from 'react'

// Per-site palette + identity. Plain hex codes; Satori does not resolve
// CSS variables. Keep in sync with packages/config/index.ts themes when
// brand colors change.

interface OgSitePalette {
  primary: string
  dark: string
  name: string
  domain: string
}

const OG_PALETTES: Record<string, OgSitePalette> = {
  // Original production 5
  'dog-com':       { primary: '#E8622A', dark: '#1A0E08', name: 'Dog.com',           domain: 'dog.com' },
  'vets-co':       { primary: '#0A6B5E', dark: '#0C1F2C', name: 'Vets.co',           domain: 'vets.co' },
  'fish-com':      { primary: '#0E5F7E', dark: '#06121B', name: 'Fish.com',          domain: 'fish.com' },
  'saddle-com':    { primary: '#8C5A2A', dark: '#100A04', name: 'Saddle.com',        domain: 'saddle.com' },
  'lizard-com':    { primary: '#9AD140', dark: '#060A06', name: 'Lizard.com',        domain: 'lizard.com' },
  // Newer production 5
  'horses-com':    { primary: '#1F3A2F', dark: '#13241C', name: 'Horses.com',        domain: 'horses.com' },
  'petfood-com':   { primary: '#3F5C3A', dark: '#1A1F18', name: 'PetFood.com',       domain: 'petfood.com' },
  'petfoods-com':  { primary: '#3F5C3A', dark: '#161C15', name: 'PetFoods.com',      domain: 'petfoods.com' },
  'ferret-com':    { primary: '#5C3A1E', dark: '#1E140A', name: 'Ferret.com',        domain: 'ferret.com' },
  'ferrets-com':   { primary: '#6E4A28', dark: '#2A1E12', name: 'Ferrets.com',       domain: 'ferrets.com' },
  // Scaffolds
  'askthevet':     { primary: '#2563EB', dark: '#0F172A', name: 'AskTheVet.com',     domain: 'askthevet.com' },
  'dogpicture':    { primary: '#D97706', dark: '#1C1410', name: 'DogPicture.com',    domain: 'dogpicture.com' },
  'hardmoneyloans':{ primary: '#1F4D3A', dark: '#0D1F18', name: 'HardMoneyLoans.com',domain: 'hardmoneyloans.com' },
  'seniorpets':    { primary: '#7C6F59', dark: '#211D17', name: 'SeniorPetPharmacy', domain: 'seniorpets.com' },
}

export type OgSiteId = keyof typeof OG_PALETTES

export interface OgTemplateProps {
  /** Which site palette + wordmark to render. */
  siteId: OgSiteId | string

  /** Headline. Auto-scales 48–68px based on length. Required. */
  title: string

  /** Optional uppercase eyebrow tag (e.g. "Health · 12 min"). */
  category?: string

  /**
   * Optional override for the wordmark shown bottom-right. Defaults
   * to the palette's `name`. Useful for landing pages on a sub-brand.
   */
  wordmark?: string
}

/**
 * Renders the OG card JSX. Pure component — call sites instantiate
 * `new ImageResponse(<OgTemplate ... />, { width, height })` from edge
 * runtime.
 *
 * Style note: Satori only supports a subset of CSS (no Tailwind, no
 * CSS variables, no `gap` in flex auto-mode). All styles inline.
 */
export function OgTemplate({
  siteId,
  title,
  category,
  wordmark,
}: OgTemplateProps): ReactElement {
  const site = OG_PALETTES[siteId] ?? OG_PALETTES['dog-com']
  const displayWordmark = wordmark ?? site.name

  // Title auto-scale. Shorter titles get bigger type so the card stays
  // visually balanced regardless of input length.
  const titleSize =
    title.length > 70 ? 44 :
    title.length > 50 ? 52 :
    title.length > 32 ? 62 :
    74

  return (
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
      {/* Background radial wash — atmospheric brand-color pool */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(ellipse at 18% 72%, ${site.primary}33 0%, transparent 62%)`,
        }}
      />

      {/* Top bar: rule + category eyebrow (optional) + domain (right) */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '48px',
          position: 'relative',
        }}
      >
        <div
          style={{ width: '32px', height: '3px', background: site.primary }}
        />
        {category ? (
          <span
            style={{
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: site.primary,
            }}
          >
            {category}
          </span>
        ) : null}
        <div
          style={{
            marginLeft: 'auto',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.38)',
          }}
        >
          {site.domain}
        </div>
      </div>

      {/* Title — flex-1 vertical center, length-scaled */}
      <div
        style={{
          fontSize: `${titleSize}px`,
          fontWeight: 900,
          color: 'white',
          lineHeight: 1.1,
          letterSpacing: '-0.025em',
          maxWidth: '1040px',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
        }}
      >
        {title}
      </div>

      {/* Bottom bar: thin rule + copyright + wordmark with brand dot */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          borderTop: '1px solid rgba(255,255,255,0.10)',
          paddingTop: '24px',
        }}
      >
        <div
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: 'rgba(255,255,255,0.50)',
          }}
        >
          {site.name} · {new Date().getFullYear()}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: site.primary,
            }}
          />
          <span
            style={{
              fontSize: '20px',
              fontWeight: 900,
              color: 'white',
              letterSpacing: '-0.01em',
            }}
          >
            {displayWordmark}
          </span>
        </div>
      </div>
    </div>
  )
}
