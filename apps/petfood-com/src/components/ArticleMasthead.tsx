/**
 * ArticleMasthead — app-local premium image slot for PetFood.com article bodies.
 *
 * PetFood.com's shared <ArticleLayout> renders a text-only dark hero (no photo).
 * This component drops a single, real, manifest-backed photograph in at the TOP
 * of the article body so leaf references (supplements, therapeutic diets) read
 * like a magazine spread instead of a bare text wall — matching the image-first
 * premium pattern already shipped on the homepage (PR #487 lineage).
 *
 * Trust posture (QC §1 / §1.5, Unsplash-Pexels TOS):
 *   - Imagery comes ONLY from the committed manifest via <StockImage>; no
 *     hardcoded stock-CDN URLs (trust-guard blocks those).
 *   - subtleCredit keeps photographer attribution present + clickable.
 *   - This is a PRESENTATION slot only. It renders NO product cards, NO
 *     affiliate CTAs, NO buy-boxes — so it is safe to place on clinical
 *     therapeutic-diet pages where product monetization is forbidden (QC §1.5).
 *
 * Lane: app-local (apps/petfood-com/src/components) — NOT packages/ui, and NOT
 * the Visual Bot's apps/petfood-com/src/components/visual/ subtree.
 */

import { StockImage } from '@carloOS/ui'

// Strip StockImage's outer margins (it renders my-8 on the <figure> and the
// pending-sync placeholder <div>) and square off the corners so the photo
// fills the masthead frame edge-to-edge. Mirrors the homepage FILL helpers.
const FILL =
  '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0 [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full [&_figure>div]:h-full'

export interface ArticleMastheadProps {
  /** Manifest key, e.g. "petfood-com:supplements-hero". Verified-synced only. */
  manifestKey: string
  /** Optional secondary key if the primary is not yet synced. */
  fallbackKey?: string
  /** Descriptive, non-clickbait alt text. */
  alt: string
  /** Short mono eyebrow rendered over the scrim (e.g. "SUPPLEMENT REFERENCE"). */
  eyebrow?: string
  /** Prioritise the fetch (use for the first photo on the page). */
  priority?: boolean
}

export function ArticleMasthead({
  manifestKey,
  fallbackKey,
  alt,
  eyebrow,
  priority,
}: ArticleMastheadProps) {
  return (
    <figure className="not-prose relative mb-8 overflow-hidden rounded-xl ring-1 ring-brand-border">
      <div className={`relative ${FILL}`}>
        <StockImage
          manifestKey={manifestKey}
          fallbackKey={fallbackKey}
          alt={alt}
          aspect="16:9"
          variant="inline"
          priority={priority}
          subtleCredit
        />
      </div>
      {eyebrow && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
          />
          <figcaption className="pointer-events-none absolute bottom-3 left-4 z-10 font-mono text-2xs font-semibold uppercase tracking-eyebrow text-white/90">
            {eyebrow}
          </figcaption>
        </>
      )}
    </figure>
  )
}
