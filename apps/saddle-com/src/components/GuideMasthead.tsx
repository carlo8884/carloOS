/**
 * GuideMasthead — Saddle.com app-local premium image masthead.
 *
 * An image-first band placed at the top of a guide's article body to lift the
 * page from text-only to a luxury-editorial feel. Wraps the shared
 * `StockImage` (manifest-managed, photographer attribution preserved per
 * QC §1) under a restrained brass eyebrow + Bodoni-italic standfirst.
 *
 * Lane note: this lives under apps/saddle-com/src/components/ (site-specific,
 * non-visual-primitive), NOT packages/ui — it composes the existing shared
 * StockImage rather than introducing a new shared visual primitive. No raw CDN
 * URLs; the manifestKey/fallbackKey resolve through image-manifest.json so
 * attribution always renders. No AI humans, no fabricated claims.
 */

import { StockImage } from '@carloOS/ui'

export interface GuideMastheadProps {
  /** Manifest key for the masthead photo (may be unsynced — see fallbackKey). */
  manifestKey: string
  /**
   * Existing, already-synced manifest key used until `manifestKey` is filled
   * by sync-images.mjs. Guarantees a real, on-brand photo today.
   */
  fallbackKey?: string
  /** Short brass eyebrow, e.g. "Care Guide". */
  eyebrow: string
  /** Bodoni-italic standfirst — one calibrated sentence, no superlatives. */
  standfirst: string
  /** Alt text override for the photo. */
  alt?: string
}

export function GuideMasthead({
  manifestKey,
  fallbackKey,
  eyebrow,
  standfirst,
  alt,
}: GuideMastheadProps) {
  return (
    <figure className="not-prose my-8 overflow-hidden rounded-xl border border-brand-border bg-brand-dark">
      <div className="relative">
        <StockImage
          manifestKey={manifestKey}
          fallbackKey={fallbackKey}
          alt={alt}
          aspect="16:9"
          variant="inline"
          subtleCredit
        />
      </div>
      <figcaption className="px-6 py-5 sm:px-8 sm:py-6">
        <div className="flex items-center gap-3 mb-3">
          <span
            aria-hidden="true"
            className="h-px w-8"
            style={{ background: 'var(--brand-accent)' }}
          />
          <span
            className="text-2xs font-bold uppercase tracking-eyebrow"
            style={{ color: 'var(--brand-accent-light)' }}
          >
            {eyebrow}
          </span>
        </div>
        <p
          className="font-display italic text-white m-0"
          style={{ fontSize: 'clamp(18px, 2.2vw, 26px)', lineHeight: 1.25 }}
        >
          {standfirst}
        </p>
      </figcaption>
    </figure>
  )
}
