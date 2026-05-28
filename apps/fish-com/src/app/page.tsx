/**
 * Fish.com Homepage — /
 * Aquarium-magazine reference. Server component. CSS-only visuals (no
 * photography until image strategy ships). Shared CarloOS components for
 * navigation, footer, and email capture.
 *
 * Visual brief: Cormorant Garamond display + Inter body; deep teal-blue
 * masthead; restrained refraction-blue accent; magazine-quality layout
 * that reads as confidently as Practical Fishkeeping looks in print.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'An Aquarium Reference',
  description:
    'Research-based reference for aquarists — species profiles, tank cycling, water chemistry, fish health, and honest equipment comparisons.',
  path: '/',
})

// ── Inline SVG icon set ────────────────────────────────────────────────────
// 1.4px stroke, 24×24 grid, the same illustration voice used on Dog.com /
// Vets.co / Horses.com. No emoji on the homepage — the brief is magazine,
// not app store.

type CategoryIcon =
  | 'species'
  | 'setup'
  | 'chemistry'
  | 'health'
  | 'reviews'
  | 'tools'

function CategoryIconSvg({ name }: { name: CategoryIcon }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.4,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'species':
      // Side-on fish silhouette in line — restrained, not cartoonish
      return (
        <svg {...common}>
          <path d="M3 12c2-4 6-6 10-6 3 0 5.5 1 7 2.5L22 6v12l-2-2.5C18.5 17 16 18 13 18c-4 0-8-2-10-6z" />
          <path d="M18 11.5c-.4 0-.7.3-.7.7s.3.7.7.7.7-.3.7-.7-.3-.7-.7-.7z" fill="currentColor" stroke="none" />
          <path d="M9 9.5l-2-1M9 14.5l-2 1" />
        </svg>
      )
    case 'setup':
      // Aquarium tank silhouette with substrate line + waterline
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="1" />
          <path d="M3 16h18" />
          <path d="M5 8c1.5-.5 3 .5 4.5 0S12.5 7.5 14 8s3 .5 4.5 0" />
        </svg>
      )
    case 'chemistry':
      // Erlenmeyer flask with droplet — water chemistry / test kits
      return (
        <svg {...common}>
          <path d="M9 3h6" />
          <path d="M10 3v5L5 18a2 2 0 0 0 1.8 2.9h10.4A2 2 0 0 0 19 18l-5-10V3" />
          <path d="M8 14h8" />
          <circle cx="12" cy="17" r="1.1" />
        </svg>
      )
    case 'health':
      // Shield with caduceus arc — vet-respectful, not red-cross hospital
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 11v2a3 3 0 0 0 6 0v-2" />
          <circle cx="9" cy="10" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="15" cy="10" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'reviews':
      // Award ribbon — comparison conclusion, not cheerleading star
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5.5" />
          <path d="M8.5 13L6 21l3.5-2 2.5 1.5 2.5-1.5L18 21l-2.5-8" />
          <path d="M12 6.5l1 2 2.2.2-1.7 1.4.6 2.2L12 11l-2.1 1.3.6-2.2-1.7-1.4 2.2-.2z" />
        </svg>
      )
    case 'tools':
      // Calculator — calculators, dosing math, stocking math
      return (
        <svg {...common}>
          <rect x="5" y="3" width="14" height="18" rx="1.5" />
          <rect x="8" y="6" width="8" height="3" rx="0.5" />
          <circle cx="9" cy="13" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="12" cy="13" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="15" cy="13" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="9" cy="16.5" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="12" cy="16.5" r="0.7" fill="currentColor" stroke="none" />
          <circle cx="15" cy="16.5" r="0.7" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}

// ── Page data ──────────────────────────────────────────────────────────────

const CATEGORIES: {
  icon: CategoryIcon
  title: string
  desc: string
  href: string
}[] = [
  {
    icon: 'species',
    title: 'Species',
    desc:
      'Profiles for community fish, single-species displays, schoolers, and the difficult ones — temperament, parameter range, and tankmate logic that respects each species.',
    href: '/species',
  },
  {
    icon: 'setup',
    title: 'Setup',
    desc:
      'Tank cycling, hardware selection, substrate, filtration sizing, and the planted-, saltwater-, and pond-specific decisions that come before the first fish goes in.',
    href: '/setup',
  },
  {
    icon: 'chemistry',
    title: 'Water Chemistry',
    desc:
      'The nitrogen cycle, pH and KH, GH, ammonia and nitrite thresholds, and the slow-moving parameters that decide whether a tank reads stable or stays in trouble.',
    href: '/water',
  },
  {
    icon: 'health',
    title: 'Fish Health',
    desc:
      'Ich, fin rot, dropsy, columnaris, velvet, and the rest — disease identification with treatment protocols and the when-to-call-an-aquatic-vet line.',
    href: '/health',
  },
  {
    icon: 'reviews',
    title: 'Equipment Reviews',
    desc:
      'Filters, heaters, lights, water test kits, and nano tanks evaluated on the same dimensions — independent comparisons, retail receipts, no paid placements.',
    href: '/reviews',
  },
  {
    icon: 'tools',
    title: 'Calculators',
    desc:
      'Aquarium volume, stocking density, heater wattage, CO2 dosing, and water-change planners — the math that keeps a tank inside the parameters its inhabitants need.',
    href: '/tools',
  },
]

const FEATURED: {
  href: string
  eyebrow: string
  title: string
  teaser: string
  readTime: string
}[] = [
  {
    href: '/setup/aquarium-cycling-guide',
    eyebrow: 'Setup · Cornerstone',
    title: 'The Aquarium Cycling Guide',
    teaser:
      'Fishless cycling, fish-in cycling, when ammonia and nitrite finally read zero, and why the slow weeks at the start determine whether the tank reads stable a year from now. The step-by-step reference, written without the forum-lore detours.',
    readTime: '18 min',
  },
  {
    href: '/water/nitrogen-cycle-explained',
    eyebrow: 'Water Chemistry',
    title: 'The Nitrogen Cycle, Explained',
    teaser:
      'Ammonia to nitrite to nitrate — the bacterial chemistry that turns a sterile tank into a habitat, and the parameter readings that tell you the colony has actually arrived. A reference for the test results you are about to look at.',
    readTime: '11 min',
  },
  {
    href: '/species/betta-fish',
    eyebrow: 'Species Profile',
    title: 'Betta Fish',
    teaser:
      'Labyrinth fish from the rice paddies and slow-water margins of Southeast Asia, sold to beginners and almost universally undertanked. Temperament, parameter range, tankmate logic, and the five-gallon-minimum argument with the science behind it.',
    readTime: '14 min',
  },
  {
    href: '/reviews/best-aquarium-filters',
    eyebrow: 'Equipment Review',
    title: 'Best Aquarium Filters',
    teaser:
      'HOB, canister, sponge, and internal — eight filters compared on flow rate, media volume, noise floor, and serviceability. Tank-volume sizing, planted-tank flow considerations, and which categories overlap with which use cases.',
    readTime: '13 min',
  },
]

const TRUST_CLAIMS = [
  'Research-anchored content',
  'Aquatic-vet respectful',
  'No paid scores',
  'WAVMA-aligned guidance',
]

// ── Page ───────────────────────────────────────────────────────────────────

export default function FishHomePage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────
          CSS-only deep-water field. Three radial washes stacked over the
          brand-dark masthead — a teal light upper-right (the lamp at the
          surface), a deep shadow lower-left (the substrate), and a top-
          weighted vertical fade to anchor the headline. A subtle wave
          overlay (repeating-linear-gradient at 4deg) sits at 6% opacity
          to keep the field from reading flat. */}
      <section className="relative overflow-hidden bg-brand-dark">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 85% 60% at 78% 14%, rgba(91,192,222,0.16) 0%, transparent 55%)',
              'radial-gradient(ellipse 70% 70% at 10% 95%, rgba(8,74,102,0.65) 0%, transparent 60%)',
              'linear-gradient(180deg, rgba(6,18,27,0.0) 0%, rgba(6,18,27,0.55) 95%)',
            ].join(','),
          }}
        />
        {/* Subtle wave / water-ripple overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(4deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 6px)',
          }}
        />
        {/* Caustic-light flicker — second pass, vertical */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-screen"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(91,192,222,0.4) 0px, rgba(91,192,222,0.4) 1px, transparent 1px, transparent 4px)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-container-wide px-container-sm sm:px-container py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow — refraction-light rule + tracking-eyebrow caps */}
            <div className="flex items-center gap-3 mb-6">
              <span
                aria-hidden="true"
                className="h-px w-8"
                style={{ background: 'var(--brand-accent)' }}
              />
              <span
                className="text-2xs font-bold uppercase tracking-eyebrow"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                The Aquarium Reference
              </span>
            </div>

            {/* Wordmark — Cormorant 700 */}
            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.02] mb-6"
              style={{ fontSize: 'clamp(48px, 7.5vw, 92px)' }}
            >
              Fish.com
            </h1>

            {/* Tagline — Cormorant italic, accent-tinted, the magazine-cover voice */}
            <p
              className="font-display italic mb-7"
              style={{
                color: 'var(--brand-accent-light)',
                fontSize: 'clamp(22px, 2.4vw, 30px)',
                lineHeight: 1.25,
                maxWidth: '46rem',
              }}
            >
              An aquarium reference.
            </p>

            {/* Positioning paragraph — ~80 words establishing what the site is and is not */}
            <p className="text-base lg:text-lg text-white/75 leading-relaxed max-w-2xl mb-9">
              Fish.com is a research-based reference for aquarists across
              freshwater, planted, saltwater, and pond systems. Not a community
              forum, not a tank-shot gallery, not a tackle shop. Every species
              profile is tied to published parameter ranges, every health entry
              points to the when-to-call-an-aquatic-vet line, and every filter,
              heater, and water-test kit is compared on the same dimensions.
              Where Aquarium Co-Op runs the community and Practical Fishkeeping
              runs the magazine, Fish.com runs the reference.
            </p>

            {/* CTAs — primary refraction-blue, secondary text-arrow link */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link
                href="/setup/aquarium-cycling-guide"
                className="inline-flex items-center font-semibold text-sm px-7 py-3.5 rounded no-underline transition-colors duration-200"
                style={{
                  background: 'var(--brand-accent)',
                  color: 'var(--brand-dark)',
                }}
              >
                Read the cycling guide
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/reviews"
                className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors"
              >
                Find your equipment
                <span
                  aria-hidden="true"
                  className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR — slim dark strip with vertical separators ───────── */}
      <div
        className="px-container-sm sm:px-container py-4"
        style={{
          background: 'var(--brand-dark)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="mx-auto max-w-container-wide flex flex-wrap items-center justify-center sm:justify-between gap-y-2">
          {TRUST_CLAIMS.map((item, i, arr) => (
            <span
              key={item}
              className="flex items-center text-2xs font-semibold uppercase tracking-eyebrow whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,0.80)' }}
            >
              <span
                aria-hidden="true"
                className="mr-2"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                ✓
              </span>
              {item}
              {i < arr.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden sm:inline mx-5 h-3 w-px"
                  style={{ background: 'rgba(255,255,255,0.18)' }}
                />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES — six-card grid, magazine-spread voice ─────────── */}
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-surface)' }}
      >
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8"
                  style={{ background: 'var(--brand-primary)' }}
                />
                <span
                  className="text-2xs font-bold uppercase tracking-eyebrow"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  By Section
                </span>
              </div>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-brand-text-dark">
                Where to start
              </h2>
            </div>
            <p
              className="text-sm max-w-md"
              style={{ color: 'var(--brand-text-light)' }}
            >
              Every section reads the same whether you arrived from a search
              for fish-in cycling, a fin-rot diagnosis, or a comparison of
              canister filters.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block p-7 rounded-md no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
                style={{
                  background: 'var(--brand-white)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                <div
                  className="mb-5 transition-colors"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  <CategoryIconSvg name={cat.icon} />
                </div>
                <h3
                  className="font-display font-bold text-xl leading-snug mb-2"
                  style={{ color: 'var(--brand-text-dark)' }}
                >
                  {cat.title}
                </h3>
                <p
                  className="text-sm leading-relaxed mb-4"
                  style={{ color: 'var(--brand-text-mid)' }}
                >
                  {cat.desc}
                </p>
                <span
                  className="inline-flex items-center text-xs font-semibold uppercase tracking-eyebrow"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Read
                  <span
                    aria-hidden="true"
                    className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CORNERSTONES — eyebrow + Cormorant title + teaser ── */}
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-white)' }}
      >
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8"
                  style={{ background: 'var(--brand-primary)' }}
                />
                <span
                  className="text-2xs font-bold uppercase tracking-eyebrow"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Cornerstone Articles
                </span>
              </div>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-brand-text-dark">
                Reference, maintained
              </h2>
            </div>
            <p
              className="text-sm max-w-md"
              style={{ color: 'var(--brand-text-light)' }}
            >
              The pieces we link back to constantly — re-read when the science
              shifts, re-dated when they get an edit.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {FEATURED.map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="group block p-7 lg:p-8 rounded-md no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
                style={{
                  background: 'var(--brand-surface)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                {/* Decorative top rule — accent, signals premium */}
                <span
                  aria-hidden="true"
                  className="block h-px w-10 mb-5"
                  style={{ background: 'var(--brand-primary)' }}
                />
                <div
                  className="text-2xs font-bold uppercase tracking-eyebrow mb-3"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  {art.eyebrow}
                </div>
                <h3
                  className="font-display font-bold text-2xl leading-tight mb-3"
                  style={{ color: 'var(--brand-text-dark)' }}
                >
                  {art.title}
                </h3>
                <p
                  className="text-base leading-relaxed mb-5"
                  style={{ color: 'var(--brand-text-mid)' }}
                >
                  {art.teaser}
                </p>
                <div className="flex items-center justify-between gap-4">
                  <span
                    className="text-xs font-semibold uppercase tracking-eyebrow tabular-display"
                    style={{ color: 'var(--brand-text-light)' }}
                  >
                    {art.readTime} read
                  </span>
                  <span
                    className="inline-flex items-center text-xs font-semibold uppercase tracking-eyebrow"
                    style={{ color: 'var(--brand-primary)' }}
                  >
                    Read
                    <span
                      aria-hidden="true"
                      className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL STANDARDS BAND — deep teal + Cormorant pull quote ── */}
      <section
        className="px-container-sm sm:px-container py-section relative overflow-hidden"
        style={{ background: 'var(--brand-primary)' }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 60% at 82% 22%, rgba(91,192,222,0.18) 0%, transparent 60%)',
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(2deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 7px)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-container-wide grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                aria-hidden="true"
                className="h-px w-8"
                style={{ background: 'var(--brand-accent-light)' }}
              />
              <span
                className="text-2xs font-bold uppercase tracking-eyebrow"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                Editorial Standard
              </span>
            </div>
            <h2
              className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-white"
              style={{ lineHeight: 1.15 }}
            >
              The reference reads the same
              <br />
              <em
                className="not-italic font-display italic"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                whichever tank you arrived from.
              </em>
            </h2>
          </div>
          <div className="text-white/85 leading-relaxed space-y-5">
            <p className="text-base lg:text-lg">
              Every species profile carries its published parameter range —
              temperature, pH, hardness, tankmate logic — drawn from FishBase,
              peer-reviewed habitat surveys, and established care sheets, not
              forum lore. Every health entry names the disease, the protocol,
              and the WAVMA-listed aquatic-veterinarian line for when the tank
              is past hobbyist treatment.
            </p>
            <p className="text-base lg:text-lg">
              Equipment write-ups draw on retail receipts and manufacturer
              specifications. No paid scores. No undisclosed sponsorships. No
              brand bought a higher position. Where the evidence is mixed —
              planted-tank dosing strategies, marine refugium design, certain
              disease treatments — we say so on the page.
            </p>
            <div className="pt-2">
              <Link
                href="/editorial-standards"
                className="group inline-flex items-center text-sm font-semibold no-underline transition-colors"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                Read our editorial standards
                <span
                  aria-hidden="true"
                  className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE — cycling-guide lead magnet teaser ─────────── */}
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <div className="mx-auto max-w-container-wide">
          <EmailCapture
            variant="section"
            siteId="fish-com"
            source="homepage"
            title="The Cycling Guide, in your inbox"
            subtitle="An eight-email reference series that walks the nitrogen cycle from sterile glass to a colony reading zero ammonia and zero nitrite. Fishless and fish-in protocols, the parameter readings that mean what they mean, and the slow weeks that decide whether the tank reads stable a year from now. One email per stage. No upsells."
            ctaText="Send me the series"
            perks={[
              'Eight emails, one tank',
              'Citation-anchored',
              'Aquatic-vet respectful',
              'Unsubscribe anytime',
            ]}
          />
        </div>
      </section>
    </>
  )
}
