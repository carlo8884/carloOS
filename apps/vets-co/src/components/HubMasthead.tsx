/**
 * HubMasthead — premium image-first masthead for Vets.co top hub pages.
 *
 * Applies the APPROVED homepage pattern (apps/vets-co/src/app/page.tsx, merged
 * to main) to the hub index pages: the synced hero photo is INTEGRATED into the
 * deep-navy masthead as a full-bleed background (object / architecture / animal
 * imagery only — never a staged clinical scene with real staff, per QC §1), with
 * the eyebrow, H1, intro, and a single clear primary CTA overlaid on a dark
 * gradient scrim so copy stays legible.
 *
 * Before this, the hubs used the old anti-pattern the homepage rebuild fixed:
 * a flat navy text band with the photo dumped into a separate white band BELOW
 * it (so on a phone the photo fell below the fold). This unifies the hubs with
 * the homepage's masthead voice.
 *
 * Trust posture (QC §1 / §1.5):
 *   - All imagery comes from the committed manifest via <StockImage>. No
 *     hardcoded stock-CDN URLs (trust-guard blocks them).
 *   - subtleCredit keeps Unsplash/Pexels attribution present + clickable but
 *     unobtrusive over the photo (TOS + QC §1).
 *   - No fabricated credentials, no AI-generated humans, no staged clinical
 *     actors. Object / architecture / animal imagery only.
 *   - The CTA is caller-supplied: clinical hubs pass a SERVICE action
 *     (find a vet / telehealth); commercial hubs may point to a monetized
 *     comparison surface. This component never adds a product buy-box.
 *
 * App-local (apps/vets-co/src/components/) — NOT packages/ui, NOT the
 * components/visual lane.
 */

import type { ReactNode } from 'react'
import Link from 'next/link'
import { StockImage } from '@carloOS/ui'

// Strip StockImage's outer margins so the photo fills the absolute wrapper
// edge-to-edge (matches the homepage FILL_IMAGE override).
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

export interface HubMastheadCta {
  /** Internal route (e.g. '/find-a-vet'). */
  href: string
  /** Button label. */
  label: string
}

export interface HubMastheadProps {
  /** Small uppercase kicker above the H1 (e.g. 'Veterinary Directory'). */
  eyebrow: string
  /** The hub H1. */
  title: string
  /** One- or two-sentence positioning line below the H1. */
  intro: string
  /** Manifest key for the full-bleed hero photo (real synced vets-co key). */
  manifestKey: string
  /** Optional secondary key if `manifestKey` is ever unsynced. */
  fallbackKey?: string
  /** Accessible alt text for the photo (object / architecture / animal only). */
  imageAlt: string
  /** Primary action — service action for clinical hubs, comparison for commercial. */
  primaryCta: HubMastheadCta
  /** Optional secondary action (ghost button). */
  secondaryCta?: HubMastheadCta
  /** Commercial button under the intro. Stays in flow so the title and intro stay visible. */
  hop?: ReactNode
}

export function HubMasthead({
  eyebrow,
  title,
  intro,
  manifestKey,
  fallbackKey,
  imageAlt,
  primaryCta,
  secondaryCta,
  hop,
}: HubMastheadProps) {
  return (
    <section data-testid="hub-hero" className="bg-brand-dark px-container-sm sm:px-container py-7 md:py-8">
      {/* Redesign VB1: compact split masthead. Copy on the navy field, the real
          pet photo beside it on desktop, never behind the text. */}
      <div className="mx-auto grid max-w-container-wide items-center gap-8 md:grid-cols-[1fr_360px]">
        <div className="max-w-3xl">
          <span className="mb-2 block text-2xs font-bold uppercase tracking-eyebrow" style={{ color: 'var(--brand-accent-light)' }}>
            {eyebrow}
          </span>
          <h1 className="mb-2 font-display font-bold leading-tight tracking-tight text-white" style={{ fontSize: 'clamp(26px, 4vw, 44px)' }}>
            {title}
          </h1>
          <p className="mb-4 max-w-2xl text-sm leading-relaxed text-white/85 md:text-base">{intro}</p>
          {hop}
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href={primaryCta.href}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-md px-5 text-sm font-semibold text-white no-underline hover:opacity-90"
              style={{ background: 'var(--brand-primary)' }}
            >
              {primaryCta.label}
              <IconArrowRight />
            </Link>
            {secondaryCta && (
              <Link
                href={secondaryCta.href}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-md border border-white/30 px-5 text-sm font-semibold text-white no-underline hover:bg-white/10"
              >
                {secondaryCta.label}
                <IconArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </div>
        </div>
        <div className={`hidden h-[240px] overflow-hidden rounded-xl md:block ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto] [&_figure>div]:h-full [&>div]:h-full`}>
          <StockImage manifestKey={manifestKey} fallbackKey={fallbackKey} alt={imageAlt} aspect="16:9" variant="inline" priority subtleCredit />
        </div>
      </div>
    </section>
  )
}
