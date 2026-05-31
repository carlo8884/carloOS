/**
 * AppleIconTemplate — shared 180×180 Apple touch icon for every CarloOS site.
 *
 * Rendered through `next/og` ImageResponse from each app's `apple-icon.tsx`
 * (App Router special filename). iOS Safari + iPadOS use this when a user
 * pins the site to the home screen — without it iOS falls back to a generic
 * "globe" screenshot, which looks unfinished.
 *
 * Per Apple's guidance the icon should be a solid color with the
 * brand glyph; no rounded corners are needed because iOS applies its own
 * corner mask. Output is 180×180 PNG.
 *
 * Usage from an app:
 *
 *   // apps/<site>/src/app/apple-icon.tsx
 *   import { ImageResponse } from 'next/og'
 *   import { AppleIconTemplate } from '@carloOS/ui'
 *
 *   export const size = { width: 180, height: 180 }
 *   export const contentType = 'image/png'
 *
 *   export default function AppleIcon() {
 *     return new ImageResponse(<AppleIconTemplate siteId="dog-com" />, size)
 *   }
 *
 * Trust posture: no fabricated claims, no badges. Brand glyph + color only.
 */

import type { ReactElement } from 'react'

interface AppleIconPalette {
  primary: string
  glyphColor: string
  letter: string
}

// Per-site palette + glyph. Kept in sync with the favicon icon.svg files
// at apps/<site>/src/app/icon.svg and with OG_PALETTES in OgTemplate.tsx.
const APPLE_ICON_PALETTES: Record<string, AppleIconPalette> = {
  // Original production 5
  'dog-com':       { primary: '#E8622A', glyphColor: '#FFFFFF', letter: 'D' },
  'vets-co':       { primary: '#0A6B5E', glyphColor: '#FFFFFF', letter: 'V' },
  'fish-com':      { primary: '#0E5F7E', glyphColor: '#FFFFFF', letter: 'F' },
  'saddle-com':    { primary: '#8C5A2A', glyphColor: '#FFFFFF', letter: 'S' },
  'lizard-com':    { primary: '#9AD140', glyphColor: '#060A06', letter: 'L' },
  // Newer production 5
  'horses-com':    { primary: '#1F3A2F', glyphColor: '#FFFFFF', letter: 'H' },
  'petfood-com':   { primary: '#3F5C3A', glyphColor: '#FFFFFF', letter: 'P' },
  'petfoods-com':  { primary: '#3F5C3A', glyphColor: '#FFFFFF', letter: 'pf' },
  'ferret-com':    { primary: '#5C3A1E', glyphColor: '#FFFFFF', letter: 'F' },
  'ferrets-com':   { primary: '#6E4A28', glyphColor: '#FFFFFF', letter: 'Fs' },
  // Scaffolds (petsupplies excluded — out of CarloOS scope)
  'askthevet':     { primary: '#2563EB', glyphColor: '#FFFFFF', letter: '?' },
  'dogpicture':    { primary: '#D97706', glyphColor: '#FFFFFF', letter: 'D' },
  'hardmoneyloans':{ primary: '#1F4D3A', glyphColor: '#FFFFFF', letter: '$' },
  'seniorpets':    { primary: '#7C6F59', glyphColor: '#FFFFFF', letter: 'S' },
}

export type AppleIconSiteId = keyof typeof APPLE_ICON_PALETTES

export interface AppleIconTemplateProps {
  siteId: AppleIconSiteId | string
}

export function AppleIconTemplate({ siteId }: AppleIconTemplateProps): ReactElement {
  const palette = APPLE_ICON_PALETTES[siteId] ?? APPLE_ICON_PALETTES['dog-com']
  // Multi-character glyphs (e.g. "pf", "Fs") shrink the typeface so the
  // glyph still occupies most of the 180×180 canvas without overflowing.
  const fontSize = palette.letter.length === 1 ? 130 : palette.letter.length === 2 ? 88 : 64
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: palette.primary,
        fontFamily: 'Georgia, serif',
        fontWeight: 900,
        letterSpacing: '-0.04em',
      }}
    >
      <span
        style={{
          color: palette.glyphColor,
          fontSize,
          lineHeight: 1,
          marginTop: palette.letter.length === 1 ? -10 : 0,
        }}
      >
        {palette.letter}
      </span>
    </div>
  )
}
