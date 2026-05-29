/**
 * ScaffoldHomeShell — composable homepage for newly scaffolded sites.
 *
 * Built for the 5 scaffold apps (askthevet / dogpicture / hardmoneyloans /
 * petsupplies / seniorpets) that ship with a 30-line placeholder
 * homepage. Each scaffold's page.tsx now becomes ~50 lines of config
 * around this shell.
 *
 * Composition (top → bottom):
 *   1. Hero — eyebrow rule + uppercase label + Playfair H1 + 80-word
 *      positioning paragraph + primary CTA + secondary text-arrow link
 *      + optional small-caps trust microcopy.
 *   2. Slim dark trust strip — 4 claims separated by vertical hairlines.
 *      Same pattern as Dog/Fish/Saddle/Lizard.
 *   3. Optional category grid — 3-6 cards with inline SVG icon names.
 *   4. Optional editorial positioning band — italic pull quote +
 *      "editorial standards" link. Skipped if `quote` not provided.
 *   5. Email capture — uses the shared <EmailCapture variant="section">.
 *
 * Trust posture:
 *   - No fabricated authority claims.
 *   - No AI-generated humans.
 *   - No "as seen in" / press strip / fake subscriber counts.
 *   - FTC-compliant AffiliateDisclosure rendered inline above the email
 *     capture per QC-STANDARDS §3.2.
 *
 * Server component — no client-side JS shipped.
 */

import Link from 'next/link'
import type { SiteId } from '@carloOS/config'
import { EmailCapture } from '../EmailCapture'
import { AffiliateDisclosure } from '../AffiliateDisclosure'

// ── Inline SVG icon set — currentColor, 1.5px stroke, server-rendered ──────
// Adequate vocabulary for the 5 scaffold use cases. Adding more is a 3-line
// switch addition. Same voice as Dog/Saddle/Lizard inline icon sets.

export type ScaffoldIconName =
  | 'compare'
  | 'review'
  | 'guide'
  | 'directory'
  | 'health'
  | 'shop'
  | 'photo'
  | 'senior'
  | 'puppy'
  | 'food'
  | 'shield'
  | 'calculator'
  | 'home'
  | 'lightbulb'
  | 'check'

function CategoryIcon({ name }: { name: ScaffoldIconName }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'compare':
      return (
        <svg {...common}>
          <path d="M4 6h7M4 18h7" />
          <path d="M13 6h7M13 18h7" />
          <path d="M8 6v12M16 6v12" />
        </svg>
      )
    case 'review':
      return (
        <svg {...common}>
          <path d="M12 3l2.5 5.5 6 .8-4.5 4 1.1 6L12 16.6 6.9 19.3 8 13.3l-4.5-4 6-.8L12 3z" />
        </svg>
      )
    case 'guide':
      return (
        <svg {...common}>
          <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1V5z" />
          <path d="M12 6v14" />
        </svg>
      )
    case 'directory':
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="1.5" />
          <path d="M4 9h16M9 4v16" />
        </svg>
      )
    case 'health':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 12h6M12 9v6" />
        </svg>
      )
    case 'shop':
      return (
        <svg {...common}>
          <path d="M3 7h18l-1.5 11.5a1.5 1.5 0 0 1-1.5 1.3H6a1.5 1.5 0 0 1-1.5-1.3L3 7z" />
          <path d="M8 7V5a4 4 0 0 1 8 0v2" />
        </svg>
      )
    case 'photo':
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="14" rx="1.5" />
          <path d="M3 16l5-4 4 4 3-2 6 4" />
          <circle cx="8" cy="10" r="1.2" />
          <path d="M8 6V4h8v2" />
        </svg>
      )
    case 'senior':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
          <path d="M8 19c1-1 3-2 4-2s3 1 4 2" />
        </svg>
      )
    case 'puppy':
      return (
        <svg {...common}>
          <ellipse cx="5.5" cy="10" rx="1.6" ry="2.2" />
          <ellipse cx="9" cy="6.5" rx="1.6" ry="2.2" />
          <ellipse cx="15" cy="6.5" rx="1.6" ry="2.2" />
          <ellipse cx="18.5" cy="10" rx="1.6" ry="2.2" />
          <path d="M8 17.5c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.4-1 2.5-2.4 2.5h-3.2C9 20 8 18.9 8 17.5z" />
        </svg>
      )
    case 'food':
      return (
        <svg {...common}>
          <path d="M3 11h18" />
          <path d="M4 11a8 8 0 0 0 16 0" />
          <path d="M2 11h20" />
          <path d="M9 7c0-1 .5-2 1.5-2.5M13 7c0-1 .5-2 1.5-2.5" />
        </svg>
      )
    case 'shield':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      )
    case 'calculator':
      return (
        <svg {...common}>
          <rect x="4" y="3" width="16" height="18" rx="1.5" />
          <rect x="7" y="6" width="10" height="3" rx="0.5" />
          <circle cx="8"  cy="13" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="12" cy="13" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="16" cy="13" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="8"  cy="17" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="12" cy="17" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="16" cy="17" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'home':
      return (
        <svg {...common}>
          <path d="M3 11l9-8 9 8" />
          <path d="M5 10v10h14V10" />
          <path d="M10 20v-5h4v5" />
        </svg>
      )
    case 'lightbulb':
      return (
        <svg {...common}>
          <path d="M9 18h6" />
          <path d="M10 21h4" />
          <path d="M8 12a4 4 0 0 1 8 0c0 2-1.5 2.5-1.5 5h-5C9.5 14.5 8 14 8 12z" />
        </svg>
      )
    case 'check':
      return (
        <svg {...common}>
          <path d="M4 12l5 5L20 6" />
        </svg>
      )
  }
}

// ── Public shapes ──────────────────────────────────────────────────────────

export interface ScaffoldCategory {
  icon: ScaffoldIconName
  title: string
  desc: string
  href: string
}

export interface ScaffoldHomeShellProps {
  siteId: SiteId

  /** Small uppercase rule + label above the H1. e.g. "An Independent Reference". */
  eyebrow: string

  /** Display H1. Keep ≤ 8 words; wraps gracefully via natural break. */
  headline: string

  /** Optional italic accent appended after the headline. Becomes serif italic. */
  headlineAccent?: string

  /** 60-100 word positioning paragraph. Plain text. */
  positioning: string

  /** Primary CTA. Solid brand-primary background, white text. */
  primaryCta: { label: string; href: string }

  /** Optional secondary CTA — renders as text-arrow link, not button. */
  secondaryCta?: { label: string; href: string }

  /** 4 short trust claims. Plain text. No emoji. No fabricated authority. */
  trustClaims: [string, string, string, string]

  /** Optional category grid below the trust strip. 3-6 entries. */
  categories?: ScaffoldCategory[]

  /** Optional editorial positioning band — single italic pull quote. */
  quote?: { text: string; standardsHref?: string }

  /** Email capture title (Playfair). */
  emailTitle: string

  /** Email capture subtitle (DM Sans). */
  emailSubtitle: string

  /** Email capture CTA button text. */
  emailCta?: string
}

// ── Component ──────────────────────────────────────────────────────────────

export function ScaffoldHomeShell(props: ScaffoldHomeShellProps) {
  const {
    siteId,
    eyebrow,
    headline,
    headlineAccent,
    positioning,
    primaryCta,
    secondaryCta,
    trustClaims,
    categories,
    quote,
    emailTitle,
    emailSubtitle,
    emailCta = 'Subscribe',
  } = props

  return (
    <>
      {/* HERO ────────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-90 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 15% 50%, rgba(255,255,255,0.04) 0%, transparent 55%)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-container-wide px-container-sm sm:px-container py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6 lg:mb-7">
              <span className="w-6 h-0.5 bg-brand-primary" aria-hidden="true" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                {eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-black text-white tracking-tight leading-[1.02] mb-6 lg:mb-7"
              style={{ fontSize: 'clamp(42px, 6.8vw, 84px)' }}
            >
              {headline}
              {headlineAccent && (
                <>
                  {' '}
                  <em className="text-brand-primary font-display italic">
                    {headlineAccent}
                  </em>
                </>
              )}
            </h1>

            {/* Positioning paragraph */}
            <p className="text-base lg:text-lg font-light text-white/70 leading-relaxed max-w-2xl mb-8 lg:mb-10">
              {positioning}
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link
                href={primaryCta.href}
                className="inline-flex items-center bg-brand-primary text-white font-semibold text-sm px-7 py-3.5 rounded no-underline hover:bg-brand-primary-light transition-colors duration-200"
              >
                {primaryCta.label}
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              {secondaryCta && (
                <Link
                  href={secondaryCta.href}
                  className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors"
                >
                  {secondaryCta.label}
                  <span
                    aria-hidden="true"
                    className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP — slim dark masthead w/ thin vertical separators ───── */}
      <div className="bg-brand-dark border-t border-b border-white/5 px-container-sm sm:px-container py-3">
        <div className="mx-auto max-w-container-wide flex flex-wrap items-center justify-center sm:justify-between gap-y-2 text-white/70">
          {trustClaims.map((item, i, arr) => (
            <span
              key={item}
              className="flex items-center text-2xs font-semibold uppercase tracking-eyebrow whitespace-nowrap"
            >
              {item}
              {i < arr.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden sm:inline mx-5 h-3 w-px bg-white/15"
                />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* CATEGORY GRID — optional ──────────────────────────────────────── */}
      {categories && categories.length > 0 && (
        <section className="bg-brand-surface px-container-sm sm:px-container py-section">
          <div className="mx-auto max-w-container-wide">
            <div className="flex items-baseline justify-between gap-6 flex-wrap mb-10">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span
                    aria-hidden="true"
                    className="w-6 h-0.5 bg-brand-primary"
                  />
                  <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                    Where to start
                  </span>
                </div>
                <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl sm:text-4xl">
                  {categories.length === 6
                    ? 'Six lanes'
                    : categories.length >= 4
                    ? 'Find your section'
                    : 'Browse'}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {categories.map((cat) => (
                <Link
                  key={cat.href + cat.title}
                  href={cat.href}
                  className="group block bg-brand-white border border-brand-border rounded-md p-6 no-underline hover:border-brand-primary/40 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 ease-carloOS"
                >
                  <div className="text-brand-primary/85 group-hover:text-brand-primary mb-4 transition-colors">
                    <CategoryIcon name={cat.icon} />
                  </div>
                  <h3 className="font-display font-bold text-brand-dark text-lg leading-snug mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-brand-text-mid leading-relaxed">
                    {cat.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* EDITORIAL POSITIONING BAND — optional ────────────────────────── */}
      {quote && (
        <section className="bg-brand-surface border-y border-brand-border px-container-sm sm:px-container py-section">
          <div className="mx-auto max-w-3xl text-center">
            <span
              className="block w-16 h-px bg-brand-primary/60 mx-auto mb-8"
              aria-hidden="true"
            />
            <p
              className="font-display italic text-brand-text-dark leading-snug"
              style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
            >
              {quote.text}
            </p>
            {quote.standardsHref && (
              <Link
                href={quote.standardsHref}
                className="inline-block mt-8 text-sm font-semibold text-brand-primary no-underline border-b border-brand-primary/30 hover:border-brand-primary transition-colors"
              >
                Read our editorial standards
              </Link>
            )}
          </div>
        </section>
      )}

      {/* AFFILIATE DISCLOSURE — FTC compliance, above email capture ────── */}
      <div className="bg-brand-white px-container-sm sm:px-container pt-10">
        <div className="mx-auto max-w-container-wide">
          <AffiliateDisclosure variant="inline" siteId={siteId} />
        </div>
      </div>

      {/* EMAIL CAPTURE ───────────────────────────────────────────────── */}
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <div className="mx-auto max-w-container-wide">
          <EmailCapture
            variant="section"
            siteId={siteId}
            source="homepage"
            title={emailTitle}
            subtitle={emailSubtitle}
            ctaText={emailCta}
          />
        </div>
      </section>
    </>
  )
}
