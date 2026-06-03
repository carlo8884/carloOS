/**
 * StockImage — looks up a manifest entry by key and renders ImageCard
 * with the correct attribution string for Unsplash/Pexels TOS compliance.
 *
 * The manifest is populated by `node scripts/sync-images.mjs` and committed
 * to git. Production builds don't need API keys.
 *
 * Usage:
 *   <StockImage manifestKey="horses-com:hero" priority aspect="16:9" />
 *
 * If the key isn't in the manifest yet, renders a neutral placeholder
 * (no broken images in production).
 */

'use client'

import manifestData from '../data/image-manifest.json'
import { ImageCard, type ImageCardAspect, type ImageCardVariant } from './ImageCard'

interface ManifestEntry {
  provider: 'unsplash' | 'pexels'
  id: string
  url: string
  width: number
  height: number
  color?: string
  /**
   * Real photographer name (post-sync). Curated entries (sandbox-added,
   * no API access) intentionally OMIT this field — see `curated` below.
   */
  photographer?: string
  /**
   * Real photographer profile URL (post-sync). Curated entries omit it.
   */
  photographerUrl?: string
  sourceUrl: string
  description?: string
  alt: string
  query: string
  /**
   * Hand-curated entries (sandbox-added because sandbox cannot reach the
   * Unsplash / Pexels API per Carlo policy 2026-05-31). Set this flag and
   * OMIT photographer / photographerUrl. The render renders "Source:
   * <Provider>" linked to `sourceUrl` (the photo page where the canonical
   * photographer credit lives) — no placeholder name reaches the reader.
   * Per CSRO IR #6: never ship placeholder attribution as if it were real.
   * `sync-images.mjs --force` overwrites the entry with full attribution
   * when next run on Carlo's machine.
   */
  curated?: boolean
}

const manifest = manifestData as unknown as Record<string, ManifestEntry>

export interface StockImageProps {
  manifestKey: string
  /** Overrides the manifest alt if provided */
  alt?: string
  /** Overrides the auto-generated caption if provided */
  caption?: string
  aspect?: ImageCardAspect
  variant?: ImageCardVariant
  priority?: boolean
  /**
   * Pass-through to ImageCard: render attribution as a subtle overlay in the
   * image corner instead of a figcaption line. For prime visual areas (hero,
   * image-backed cards). Attribution stays present + linked. Default false.
   */
  subtleCredit?: boolean
}

export function StockImage({
  manifestKey,
  alt,
  caption,
  aspect = '16:9',
  variant = 'inline',
  priority = false,
  subtleCredit = false,
}: StockImageProps) {
  const entry = manifest[manifestKey]

  if (!entry) {
    // Production: render a neutral slot that reserves layout without leaking
    // dev instructions to readers. Dev: show the actionable hint inline so
    // contributors know what to do when they see an empty slot.
    const isDev = process.env.NODE_ENV !== 'production'
    return (
      <div
        aria-label={`Image pending sync (${manifestKey})`}
        className="my-8 rounded-lg flex items-center justify-center"
        style={{
          aspectRatio: aspect.replace(':', ' / '),
          background: 'var(--brand-surface)',
          color: 'var(--brand-text-light)',
          fontSize: 12,
          fontStyle: 'italic',
        }}
      >
        {isDev && (
          <>
            Image pending sync — run <code style={{ marginLeft: 4 }}>node scripts/sync-images.mjs</code>
          </>
        )}
      </div>
    )
  }

  const providerLabel = entry.provider === 'unsplash' ? 'Unsplash' : 'Pexels'
  // Curated entries don't carry a real photographer name yet (sandbox has
  // no API access). Render "Source: <Provider>" with a link to sourceUrl
  // where the real photographer credit lives — honest, QC §1 safe.
  // Non-curated entries fall through the same path if photographer is missing
  // (defensive — never fabricate "undefined" or empty names into the credit).
  const credit = entry.curated || !entry.photographer
    ? `Source: ${providerLabel}`
    : `Photo: ${entry.photographer} via ${providerLabel}`

  return (
    <ImageCard
      src={entry.url}
      alt={alt || entry.alt}
      caption={caption}
      credit={credit}
      creditUrl={entry.sourceUrl}
      aspect={aspect}
      variant={variant}
      priority={priority}
      subtleCredit={subtleCredit}
    />
  )
}
