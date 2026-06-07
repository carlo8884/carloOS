/**
 * BrandMasthead — premium image-first masthead for PetFoods.com commercial
 * (brand) surfaces: the brands hub and the brand homepage entry.
 *
 * Adapts the APPROVED Vets.co HubMasthead pattern (apps/vets-co/src/components/
 * HubMasthead.tsx, merged to main) for PetFoods.com. The synced hero photo is
 * INTEGRATED into the dark masthead as a full-bleed background (product /
 * shelf / ingredient imagery only — never AI-generated humans or staged
 * clinical scenes, per QC §1), with the eyebrow, H1, intro, and an optional
 * primary CTA overlaid on a dark gradient scrim so copy stays legible.
 *
 * This replaces the old flat anti-pattern (a plain text band with no image)
 * on PetFoods.com's commercial entry points, raising the premium feel without
 * touching the editorial ingredient / recall reference pages.
 *
 * Trust posture (QC §1 / §1.5):
 *   - All imagery comes from the committed manifest via <StockImage>. No
 *     hardcoded stock-CDN URLs (trust-guard blocks them).
 *   - subtleCredit keeps Unsplash/Pexels attribution present + clickable but
 *     unobtrusive over the photo (TOS + QC §1).
 *   - No fabricated credentials, no AI-generated humans, no staged scenes.
 *     Product / shelf / ingredient imagery only.
 *   - This component never adds a product buy-box. Affiliate CTAs live in the
 *     per-brand <BuyBox> below the fold, with disclosure above them.
 *
 * App-local (apps/petfoods-com/src/components/) — NOT packages/ui, NOT the
 * components/visual lane.
 */

import Link from 'next/link'
import { StockImage } from '@carloOS/ui'

// Strip StockImage's outer margins so the photo fills the absolute wrapper
// edge-to-edge.
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

export interface BrandMastheadCta {
  /** Internal route or in-page anchor (e.g. '#reviews'). */
  href: string
  /** Button label. */
  label: string
}

export interface BrandMastheadProps {
  /** Small uppercase kicker above the H1 (e.g. 'Brand Catalog & Reviews'). */
  eyebrow: string
  /** The H1. */
  title: string
  /** One- or two-sentence positioning line below the H1. */
  intro: string
  /** Manifest key for the full-bleed hero photo (petfoods-com key). */
  manifestKey: string
  /** Optional secondary key if `manifestKey` is unsynced. */
  fallbackKey?: string
  /** Accessible alt text (product / shelf / ingredient imagery only). */
  imageAlt: string
  /** Optional primary action. */
  primaryCta?: BrandMastheadCta
  /** Optional secondary action (ghost button). */
  secondaryCta?: BrandMastheadCta
}

export function BrandMasthead({
  eyebrow,
  title,
  intro,
  manifestKey,
  fallbackKey,
  imageAlt,
  primaryCta,
  secondaryCta,
}: BrandMastheadProps) {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      {/* Full-bleed hero photo — first + dominant on every breakpoint. */}
      <div
        className={`absolute inset-0 ${FILL_IMAGE} [&_figure]:h-full [&_figure>div]:h-full [&_figure>div]:!rounded-none [&>div]:h-full`}
      >
        <StockImage
          manifestKey={manifestKey}
          fallbackKey={fallbackKey}
          alt={imageAlt}
          aspect="16:9"
          variant="inline"
          priority
          subtleCredit
        />
      </div>

      {/* Bottom-up dark scrim so overlaid copy stays legible over the photo. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/40"
      />
      {/* Brand wash for depth. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-90"
        style={{
          backgroundImage: [
            'radial-gradient(ellipse 65% 55% at 85% 12%, rgba(0,0,0,0.25) 0%, transparent 60%)',
            'radial-gradient(ellipse 75% 70% at 8% 95%, rgba(0,0,0,0.45) 0%, transparent 60%)',
          ].join(','),
        }}
      />

      {/* Overlaid copy + optional action — pinned to the bottom of the photo. */}
      <div className="relative z-10 mx-auto max-w-container-wide flex flex-col justify-end min-h-[42vh] sm:min-h-[48vh] lg:min-h-[54vh] px-container-sm sm:px-container pt-16 pb-9 sm:pb-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span
              aria-hidden="true"
              className="h-px w-8"
              style={{ background: 'var(--brand-primary)' }}
            />
            <span
              className="text-2xs font-bold uppercase tracking-eyebrow"
              style={{ color: 'var(--brand-primary-light, var(--brand-primary))' }}
            >
              {eyebrow}
            </span>
          </div>

          <h1
            className="font-display font-bold text-white tracking-tight leading-[1.06] mb-4"
            style={{
              fontSize: 'clamp(30px, 5vw, 54px)',
              textShadow: '0 2px 18px rgba(0,0,0,0.45)',
            }}
          >
            {title}
          </h1>

          <p
            className="text-base lg:text-lg font-light text-white/85 leading-relaxed max-w-2xl mb-7"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
          >
            {intro}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-wrap items-center gap-3">
              {primaryCta && (
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded no-underline transition-colors duration-200 hover:opacity-90"
                  style={{ background: 'var(--brand-primary)', color: '#FFFFFF' }}
                >
                  {primaryCta.label}
                  <IconArrowRight />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold text-sm px-6 py-3.5 rounded no-underline hover:bg-white/20 hover:border-white/40 transition-colors duration-200"
                >
                  {secondaryCta.label}
                  <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
