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
  /**
   * Optional secondary manifest key. If `manifestKey` is not yet in the
   * manifest (e.g. a per-breed slot that hasn't been synced), the component
   * falls back to this key before the branded placeholder. Lets programmatic
   * templates wire a specific-but-unsynced key while still showing a real,
   * on-brand photo today (e.g. a category/hero image). Backward-compatible —
   * omit it and behavior is unchanged.
   */
  fallbackKey?: string
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
   * image-backed cards). Attribution stays present (QC §1); the source URL
   * is on the credit's title, never a nested <a>. Default false.
   */
  subtleCredit?: boolean
}

export function StockImage({
  manifestKey,
  fallbackKey,
  alt,
  caption,
  aspect = '16:9',
  variant = 'inline',
  priority = false,
  subtleCredit = false,
}: StockImageProps) {
  // Prefer the primary key; if it isn't synced yet, try the fallback key so
  // the slot still renders a real, on-brand photo instead of the placeholder.
  const entry = manifest[manifestKey] ?? (fallbackKey ? manifest[fallbackKey] : undefined)

  if (!entry) {
    // Not-found fallback. Instead of a flat surface box that reads as
    // "empty/broken," render an INTENTIONAL branded placeholder so any
    // not-yet-synced slot still looks designed: a soft brand gradient with a
    // centered low-opacity paw glyph. Production shows NO text (just the
    // branded art); dev shows an actionable "pending sync" hint so contributors
    // know what to do. Backward-compatible — only this branch changed.
    const isDev = process.env.NODE_ENV !== 'production'
    return (
      <div
        aria-label={`Image pending sync (${manifestKey})`}
        className="my-8 rounded-lg overflow-hidden relative flex items-center justify-center"
        style={{
          aspectRatio: aspect.replace(':', ' / '),
          background:
            'linear-gradient(135deg, var(--brand-surface), var(--brand-primary-pale))',
        }}
      >
        {/* Branded paw glyph — low-opacity, ~40% of the container. Decorative. */}
        <svg
          viewBox="0 0 64 64"
          aria-hidden="true"
          style={{
            width: '40%',
            height: '40%',
            fill: 'var(--brand-primary)',
            opacity: 0.18,
          }}
        >
          <ellipse cx="20" cy="22" rx="6.2" ry="8" />
          <ellipse cx="44" cy="22" rx="6.2" ry="8" />
          <ellipse cx="11" cy="36" rx="5.4" ry="6.8" />
          <ellipse cx="53" cy="36" rx="5.4" ry="6.8" />
          <path d="M32 33c-7.2 0-13 5-13 11.5 0 4.6 3.7 7.5 8.4 7.5 2.4 0 3.4-1 4.6-1s2.2 1 4.6 1c4.7 0 8.4-2.9 8.4-7.5C45 38 39.2 33 32 33z" />
        </svg>
        {isDev && (
          <span
            className="absolute bottom-1.5 left-2 right-2 text-center"
            style={{
              color: 'var(--brand-text-light)',
              fontSize: 11,
              fontStyle: 'italic',
            }}
          >
            Image pending sync — run <code>node scripts/sync-images.mjs</code>
          </span>
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
