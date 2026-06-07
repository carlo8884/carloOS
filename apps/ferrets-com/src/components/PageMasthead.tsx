/**
 * PageMasthead — app-local image-first masthead for Ferrets.com hubs.
 *
 * Renders a premium image band (via the shared StockImage manifest API) with
 * an eyebrow / h1 / dek text block beneath it. Keeps the directory's editorial
 * voice while replacing the flat text-only headers that read as templated.
 *
 * Image policy: uses StockImage with a `fallbackKey` so a not-yet-synced slot
 * still renders a real, attributed photo today. No AI-generated humans; photo
 * attribution is preserved by StockImage/ImageCard (Unsplash/Pexels TOS).
 *
 * This is a structural/visual primitive local to ferrets-com (NOT packages/ui
 * — that is Visual Bot's lane). It carries no affiliate CTAs and no
 * credentials.
 */

import { StockImage } from '@carloOS/ui'

export interface PageMastheadProps {
  /** Small uppercase label above the headline. */
  eyebrow: string
  /** The h1 text. */
  heading: string
  /** One-line supporting description below the headline. */
  dek: string
  /** Manifest key for the masthead image (may be unsynced). */
  manifestKey: string
  /** Real, already-synced fallback key so the slot renders a photo today. */
  fallbackKey: string
  /** Optional alt override; otherwise the manifest alt is used. */
  alt?: string
}

export function PageMasthead({
  eyebrow,
  heading,
  dek,
  manifestKey,
  fallbackKey,
  alt,
}: PageMastheadProps) {
  return (
    <header className="mb-10">
      <div className="rounded-2xl overflow-hidden border border-brand-border mb-7">
        <StockImage
          manifestKey={manifestKey}
          fallbackKey={fallbackKey}
          alt={alt}
          aspect="16:9"
          variant="full-bleed"
          priority
          subtleCredit
        />
      </div>
      <p className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
        {eyebrow}
      </p>
      <h1
        className="font-display font-black text-brand-text-dark leading-tight tracking-tighter mb-5"
        style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}
      >
        {heading}
      </h1>
      <p className="text-lg text-brand-text-mid leading-relaxed m-0 max-w-2xl">
        {dek}
      </p>
    </header>
  )
}
