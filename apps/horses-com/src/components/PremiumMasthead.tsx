/**
 * PremiumMasthead — Horses.com app-local, image-first masthead.
 *
 * Renders a full-bleed editorial photograph behind an eyebrow + title +
 * subtitle band, raising the premium feel of high-value pages above the
 * plain in-content `<StockImage>` pattern. Built entirely on the EXISTING
 * shared `<StockImage>` API (no new image pipeline) — it accepts a primary
 * `manifestKey` and an optional `fallbackKey` so a page can point at a
 * specific-but-unsynced key while still showing a real, on-brand photo today.
 *
 * Attribution stays present and linked: StockImage renders its credit as a
 * subtle in-corner overlay (`subtleCredit`), never stripped (Unsplash/Pexels
 * TOS, QC §1). No AI-generated humans; image selection is the Visual Bot's
 * manifest, which this component only reads.
 *
 * Lane: app-local (`apps/horses-com/src/components/`), NOT packages/ui and
 * NOT the Visual Bot `visual/` subdir. COO-owned non-visual primitive.
 */

import { StockImage } from '@carloOS/ui'

/** Local mirror of the shared ImageCard aspect union (not exported from ui). */
type MastheadAspect = '4:3' | '16:9' | '1:1' | '3:4'

export interface PremiumMastheadProps {
  /** Primary manifest key (e.g. "horses-com:racing"). */
  manifestKey: string
  /** On-brand fallback shown until the primary key is synced. */
  fallbackKey?: string
  /** Small uppercase eyebrow above the title. */
  eyebrow?: string
  /** Masthead headline. */
  title: string
  /** Optional supporting line under the title. */
  subtitle?: string
  /** Override the manifest alt text for the photograph. */
  alt?: string
  /** Image aspect ratio. Defaults to a wide cinematic 16:9. */
  aspect?: MastheadAspect
}

export function PremiumMasthead({
  manifestKey,
  fallbackKey,
  eyebrow,
  title,
  subtitle,
  alt,
  aspect = '16:9',
}: PremiumMastheadProps) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-dark">
      {/* Editorial photograph — full-bleed, attribution preserved as a subtle
          overlay by StockImage (subtleCredit). */}
      <div className="absolute inset-0 -z-10">
        <StockImage
          manifestKey={manifestKey}
          fallbackKey={fallbackKey}
          alt={alt}
          aspect={aspect}
          variant="full-bleed"
          priority
          subtleCredit
        />
      </div>
      {/* Legibility scrim — darkens the lower-left where the text sits. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(20,18,15,0.82) 0%, rgba(20,18,15,0.55) 45%, rgba(20,18,15,0.15) 100%)',
        }}
      />
      <div className="px-container-sm sm:px-container py-20 sm:py-28 max-w-3xl">
        {eyebrow && (
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              {eyebrow}
            </span>
          </div>
        )}
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(34px, 5vw, 58px)' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg font-light text-white/70 max-w-xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
