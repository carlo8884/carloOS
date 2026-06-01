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
  photographer: string
  photographerUrl: string
  sourceUrl: string
  description?: string
  alt: string
  query: string
  /**
   * Hand-curated entries (added manually because sandbox/CI cannot reach
   * the Unsplash/Pexels API per Carlo policy 2026-05-31) set this flag.
   * The credit renders as "Source: <Provider>" linked to the source page
   * where the real photographer credit lives, instead of fabricating a
   * placeholder name. `sync-images.mjs --force` overwrites the entry with
   * full attribution when next run on Carlo's machine.
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
}

export function StockImage({
  manifestKey,
  alt,
  caption,
  aspect = '16:9',
  variant = 'inline',
  priority = false,
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
  // no API access). Render "Source: <Provider>" with a link to the source
  // page where the real photographer credit lives — honest, QC §1 safe.
  const credit = entry.curated
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
    />
  )
}
