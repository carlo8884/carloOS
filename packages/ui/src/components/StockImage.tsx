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
    return (
      <div
        aria-label={`Image not yet synced (${manifestKey})`}
        className="my-8 rounded-lg flex items-center justify-center"
        style={{
          aspectRatio: aspect.replace(':', ' / '),
          background: 'var(--brand-surface)',
          color: 'var(--brand-text-light)',
          fontSize: 12,
          fontStyle: 'italic',
        }}
      >
        Image pending sync — run <code style={{ marginLeft: 4 }}>node scripts/sync-images.mjs</code>
      </div>
    )
  }

  const providerLabel = entry.provider === 'unsplash' ? 'Unsplash' : 'Pexels'
  const credit = `Photo: ${entry.photographer} via ${providerLabel}`

  return (
    <ImageCard
      src={entry.url}
      alt={alt || entry.alt}
      caption={caption}
      credit={credit}
      aspect={aspect}
      variant={variant}
      priority={priority}
    />
  )
}
