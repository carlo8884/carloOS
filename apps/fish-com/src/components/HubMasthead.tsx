/**
 * HubMasthead — app-local premium image-first masthead for Fish.com hub /
 * index pages (e.g. /reviews, /tools, /species, /equipment, /health).
 *
 * Why this exists (2026-06-07, fish/homepage-hub-mastheads):
 *   The Fish.com homepage was rebuilt to the approved Dog.com premium pattern
 *   (a full-bleed REAL aquarium photo as the first + dominant thing after the
 *   nav, with the H1 + a primary CTA overlaid on a dark teal gradient scrim).
 *   The hub index pages were left on the old template: a flat dark TEXT-only
 *   hero stacked ON TOP of a separate decorative <StockImage> banner. That
 *   reads as template residue and buries the imagery below the headline.
 *
 *   This component lifts the homepage's image-first masthead into a single
 *   reusable surface so every hub gets the same premium entry treatment: a
 *   real photo masthead with the H1 + a clear primary CTA into a high-intent
 *   surface (a calculator or a /reviews money page) overlaid on the scrim.
 *
 * Lane / scope (CLAUDE.md §5): app-local under apps/fish-com/src/components —
 * does NOT touch packages/ui. Uses the EXISTING <StockImage> API only.
 *
 * Image strategy (QC §1 + Unsplash/Pexels TOS):
 *   - Imagery comes only from the committed manifest via <StockImage>.
 *   - `fallbackKey` (default fish-com:hero, the planted-aquarium homepage hero,
 *     confirmed synced) makes the slot degrade gracefully to a real on-brand
 *     photo if a hub-specific key is ever missing — never a broken/empty box.
 *   - `subtleCredit` keeps photographer attribution present + clickable but
 *     unobtrusive over the masthead.
 *   - The dark teal gradient scrim keeps the overlaid copy legible.
 *
 * Trust posture (QC §1): no fabricated claims, no fake authority — copy is
 * passed in by each hub; this component only lays it out.
 */

import Link from 'next/link'
import { StockImage } from '@carloOS/ui'

// Strip StockImage's outer margins (it renders my-8 on both the <figure> and
// the pending-sync placeholder <div>) so the photo fills the masthead
// edge-to-edge. Mirrors the homepage FILL_IMAGE utility.
const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

interface HubCta {
  href: string
  label: string
}

export interface HubMastheadProps {
  /** Manifest key for the masthead photo. */
  manifestKey: string
  /**
   * Fallback manifest key if `manifestKey` isn't synced. Defaults to the
   * confirmed-synced planted-aquarium homepage hero so the slot always shows a
   * real, on-brand photo.
   */
  fallbackKey?: string
  /** Accessible alt text for the masthead photo. */
  alt: string
  /** Small uppercase eyebrow above the H1. */
  eyebrow: string
  /** The page H1. */
  title: string
  /** Supporting sub-headline. */
  subtitle: string
  /** Primary action — should point at a high-intent surface (tool / money page). */
  primaryCta: HubCta
  /** Optional secondary action. */
  secondaryCta?: HubCta
}

export function HubMasthead({
  manifestKey,
  fallbackKey = 'fish-com:hero',
  alt,
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
}: HubMastheadProps) {
  return (
    <section className="relative bg-brand-dark">
      {/* Full-bleed masthead photo — fills this absolute, full-height wrapper. */}
      <div
        className={`absolute inset-0 ${FILL_IMAGE} [&_figure]:h-full [&_figure>div]:h-full [&_figure>div]:!rounded-none [&>div]:h-full`}
      >
        <StockImage
          manifestKey={manifestKey}
          fallbackKey={fallbackKey}
          alt={alt}
          aspect="16:9"
          variant="inline"
          priority
          subtleCredit
        />
      </div>

      {/* Dark gradient scrim — bottom-up so the overlaid copy stays legible. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/65 to-brand-dark/25"
      />
      {/* Cool teal wash for depth (brand token, no new colors). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 25% 75%, rgba(14,107,138,0.45) 0%, transparent 60%)',
        }}
      />

      {/* Overlaid copy + actions — pinned to the bottom of the photo. */}
      <div className="relative z-10 flex flex-col justify-end min-h-[44vh] sm:min-h-[50vh] lg:min-h-[56vh] px-container-sm sm:px-container pt-16 pb-8 sm:pb-12">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light">
            {eyebrow}
          </span>
        </div>
        <h1
          className="font-display font-bold text-white tracking-tight leading-[1.05] mb-4 max-w-3xl"
          style={{
            fontSize: 'clamp(30px, 5vw, 56px)',
            textShadow: '0 2px 18px rgba(0,0,0,0.5)',
          }}
        >
          {title}
        </h1>
        <p
          className="text-base sm:text-lg font-light text-white/85 leading-relaxed max-w-xl mb-6"
          style={{ textShadow: '0 1px 10px rgba(0,0,0,0.55)' }}
        >
          {subtitle}
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-6 py-3.5 rounded-lg no-underline hover:bg-brand-primary-light transition-colors duration-200 shadow-[0_6px_24px_rgba(14,107,138,0.45)]"
          >
            {primaryCta.label}
            <IconArrowRight />
          </Link>
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-bold text-sm px-6 py-3.5 rounded-lg no-underline hover:bg-white/20 hover:border-white/40 transition-colors duration-200"
            >
              {secondaryCta.label}
              <IconArrowRight />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
