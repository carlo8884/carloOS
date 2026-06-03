/**
 * Lizard.com Homepage — /
 * Server component. Magazine-quality dark-mode-first treatment.
 * Zilla Slab + Raleway pairing wired via next/font in layout.tsx.
 * No real photography — CSS-only field. Source-first reptile reference.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage } from '@carloOS/ui'
// Live UVB-distance tool embedded on the homepage — a calculator you use on
// the first screens, not a link to one (premium gate 3).
import { UvbDistanceCalculator } from '../components/visual/UvbDistanceCalculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Care, Source-First',
  description:
    'Husbandry built on published research: species profiles, UVB measurements, Ferguson zones, ARAV-aligned health, and tested-gear reviews for reptile keepers.',
  path: '/',
})

// ── Inline SVG icon set — restrained line illustration, no emoji ──────────

type CategoryIcon =
  | 'species'
  | 'setup'
  | 'health'
  | 'uvb'
  | 'reviews'
  | 'first-year'

function CategoryIconSvg({ name }: { name: CategoryIcon }) {
  const common = {
    width: 30,
    height: 30,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.35,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'species':
      // Stylised lizard silhouette in single-line stroke — field-guide motif
      return (
        <svg {...common}>
          <path d="M3 14c0-1.5 1-2.5 2.4-2.5 1.2 0 1.8.6 2.2 1.2.5.8 1.1 1.3 2 1.3 1 0 1.7-.5 2.3-1.2.7-.8 1.6-1.3 2.6-1.3 1.6 0 2.5.8 3 1.7.4.7.6 1.3.6 1.8" />
          <path d="M3 14c-.6 0-1-.4-1-1s.4-1 1-1" />
          <path d="M19 15.5c.7.4 1.5.3 2-.2.4-.5.5-1.2.2-1.7" />
          <path d="M5.5 11.5l-.3-1.3" />
          <path d="M8 14l-.2-1.5" />
          <path d="M13.5 13l.3-1.3" />
          <circle cx="20.4" cy="13.6" r="0.4" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'setup':
      // Terrarium outline — vivarium silhouette with bulb
      return (
        <svg {...common}>
          <rect x="3" y="6" width="18" height="13" rx="1" />
          <path d="M3 9h18" />
          <path d="M9 6V4h6v2" />
          <path d="M7 15c1.5-1.5 3-1.5 5 0s3.5 1.5 5 0" />
          <circle cx="18" cy="11" r="1" />
        </svg>
      )
    case 'health':
      // Caduceus-adjacent — clinical without the marketing red-cross
      return (
        <svg {...common}>
          <path d="M12 3v18" />
          <path d="M8 6c0 3 4 3 4 6s-4 3-4 6" />
          <path d="M16 6c0 3-4 3-4 6s4 3 4 6" />
          <circle cx="12" cy="3.5" r="1" />
        </svg>
      )
    case 'uvb':
      // Sun with ray-segments — the UVB reference motif
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2.5" />
          <path d="M12 19.5V22" />
          <path d="M2 12h2.5" />
          <path d="M19.5 12H22" />
          <path d="M4.9 4.9l1.8 1.8" />
          <path d="M17.3 17.3l1.8 1.8" />
          <path d="M4.9 19.1l1.8-1.8" />
          <path d="M17.3 6.7l1.8-1.8" />
        </svg>
      )
    case 'reviews':
      // Meter / gauge — the testing voice, not a marketing star
      return (
        <svg {...common}>
          <path d="M3 16a9 9 0 0 1 18 0" />
          <path d="M12 16l4-5" />
          <circle cx="12" cy="16" r="1" fill="currentColor" stroke="none" />
          <path d="M5.5 16h-.5" />
          <path d="M19 16h-.5" />
          <path d="M12 9.5V9" />
        </svg>
      )
    case 'first-year':
      // Calendar with milestone marks — first-year care roadmap
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="16" rx="1.5" />
          <path d="M3 10h18" />
          <path d="M8 3v4" />
          <path d="M16 3v4" />
          <circle cx="8" cy="14" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="12" cy="14" r="0.8" fill="currentColor" stroke="none" />
          <circle cx="16" cy="14" r="0.8" fill="currentColor" stroke="none" />
          <path d="M8 17.5h8" />
        </svg>
      )
  }
}

// ── Page data ─────────────────────────────────────────────────────────────

const CATEGORIES: {
  icon: CategoryIcon
  title: string
  desc: string
  href: string
}[] = [
  {
    icon: 'species',
    title: 'Species',
    desc: 'Care references for 15+ reptiles and amphibians — Ferguson zone, diet, lifespan, sourcing.',
    href: '/species',
  },
  {
    icon: 'setup',
    title: 'Setup',
    desc: 'Enclosure sizing, gradients, substrate, humidity, and bioactive build references.',
    href: '/setup',
  },
  {
    icon: 'health',
    title: 'Health',
    desc: 'Sick-reptile signs, MBD, parasites, and when-to-call-an-ARAV-vet thresholds.',
    href: '/health/metabolic-bone-disease',
  },
  {
    icon: 'uvb',
    title: 'UVB Reference',
    desc: 'Ferguson zones, T5 HO output curves, and Solarmeter-cited bulb performance over time.',
    href: '/setup/uvb-lighting-guide',
  },
  {
    icon: 'reviews',
    title: 'Reviews',
    desc: 'UVB bulbs, thermostats, and terrariums tested on the same dimensions — no paid scores.',
    href: '/reviews',
  },
  {
    icon: 'first-year',
    title: 'First-Year Care',
    desc: 'A staged reference for the first twelve months: setup checks, feed schedule, growth curves.',
    href: '/first-year-care-schedule',
  },
]

const FEATURED_ARTICLES: {
  href: string
  eyebrow: string
  title: string
  teaser: string
  readTime: string
  /**
   * Optional cover photo manifest key. Resolved via image-manifest.json
   * (populated by sync-images.mjs) so photographer attribution is always
   * rendered. Per QC §1: no raw CDN URLs here.
   */
  imageKey?: string
  imageAlt?: string
}[] = [
  {
    href: '/species/leopard-gecko',
    eyebrow: 'Species Reference',
    title: 'Leopard Gecko',
    teaser:
      'Crepuscular ground-dwelling gecko from the Iran–Afghanistan–Pakistan arid belt. Enclosure size, gradient, low-output UVB context, and the calcium-D3 protocol most pet-store guides get wrong.',
    readTime: '18 min',
    imageKey: 'lizard-com:featured-leopard-gecko',
    imageAlt: 'A leopard gecko (Eublepharis macularius) in profile',
  },
  {
    href: '/setup/uvb-lighting-guide',
    eyebrow: 'UVB Reference',
    title: 'UVB Lighting, Measured',
    teaser:
      'Ferguson zones explained with actual Solarmeter readings. T5 HO vs T8 vs compact, distance fall-off curves, and how output collapses 9–12 months in — even when the bulb is still visibly on.',
    readTime: '22 min',
    // No photo — Solarmeter data is the subject; no stock photo qualifies.
  },
  {
    href: '/health/sick-reptile-signs',
    eyebrow: 'Health',
    title: 'Sick Reptile, Read the Signs',
    teaser:
      'Eight observable changes that warrant an ARAV-board-certified visit, in priority order. What is normal brumation, what is metabolic bone disease, and the husbandry corrections to make on the way to the clinic.',
    readTime: '14 min',
    imageKey: 'lizard-com:featured-bearded-dragon',
    imageAlt: 'A bearded dragon (Pogona vitticeps) basking',
  },
  {
    href: '/setup/bioactive-setup',
    eyebrow: 'Setup',
    title: 'Bioactive Vivarium Build',
    teaser:
      'Drainage layer, substrate mix, springtail-and-isopod ratios, and plant species matched to humidity range. A field-tested build sheet for the keeper moving from paper-towel hygiene to a self-sustaining enclosure.',
    readTime: '17 min',
    // No photo — bioactive builds vary per species; CSS-only keeps it honest.
  },
]

const TRUST_CLAIMS = [
  'Solarmeter-cited UVB data',
  'ARAV-aligned health references',
  'No paid editorial scores',
  'Dark-mode-first reading',
]

// ── Page ──────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: 'var(--brand-dark)' }}>
        {/* Moody CSS-only environmental wash. Two radial pools (lime accent
            upper-left, deep forest shadow lower-right) over the near-black
            field, plus a subtle grain to keep the dark mode from going flat. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 65% 55% at 12% 28%, rgba(154,209,64,0.16) 0%, transparent 60%)',
              'radial-gradient(ellipse 80% 70% at 88% 90%, rgba(20,40,20,0.85) 0%, transparent 65%)',
              'linear-gradient(180deg, rgba(6,10,6,0.0) 0%, rgba(6,10,6,0.65) 95%)',
            ].join(','),
          }}
        />
        {/* Vertical grain — barely-there scan that reads as paper texture. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-screen"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 3px)',
          }}
        />
        {/* Hairline horizon — top seam keeps the dark field bounded. */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(154,209,64,0.35), transparent)' }}
        />

        {/* Hero photo slot — manifest-managed StockImage renders below the hero
            with photographer attribution. Desktop background removed per QC §1;
            CSS gradients supply the dark-mode atmospheric wash on all viewports. */}

        <div className="relative z-10 mx-auto max-w-container-wide px-container-sm sm:px-container py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <span
                aria-hidden="true"
                className="h-px w-8"
                style={{ background: 'var(--brand-primary)' }}
              />
              <span
                className="text-2xs font-bold uppercase tracking-eyebrow"
                style={{ color: 'var(--brand-primary)' }}
              >
                A Reptile-Keeping Reference
              </span>
            </div>

            {/* H1 — Zilla Slab display */}
            <h1
              className="font-display font-bold text-brand-white tracking-tight leading-[1.02] mb-5"
              style={{ fontSize: 'clamp(46px, 7.2vw, 86px)' }}
            >
              Reptile care,
              <br />
              <span style={{ color: 'var(--brand-primary)' }}>source-first.</span>
            </h1>

            {/* Tagline — Zilla Slab italic, field-guide voice */}
            <p
              className="font-display italic mb-7"
              style={{
                fontSize: 'clamp(20px, 2.4vw, 26px)',
                color: 'var(--brand-text-mid)',
                lineHeight: 1.35,
              }}
            >
              Built on published herpetology — not pet-store folklore.
            </p>

            {/* Positioning paragraph — 80 words of source-first claim */}
            <p
              className="font-body font-light leading-relaxed mb-10 max-w-2xl"
              style={{ fontSize: '17px', color: 'var(--brand-text-mid)' }}
            >
              Husbandry guidance built on published research. Every species profile cites
              Ferguson zone classifications, peer-reviewed herpetology, and actual UVB
              measurements taken with a Solarmeter — not bulb-box marketing. Health
              references align with the Association of Reptile and Amphibian Veterinarians.
              Equipment is rated on testable dimensions, not paid placements. This is the
              field-guide reference for keepers who would rather read the source than the
              forum post that paraphrased it.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/species/leopard-gecko"
                className="inline-flex items-center gap-2 font-body font-bold text-sm uppercase tracking-wide px-7 py-3.5 rounded no-underline transition-colors"
                style={{
                  background: 'var(--brand-primary)',
                  color: '#0A1004',
                  letterSpacing: '0.06em',
                }}
              >
                Start with the leopard gecko
                <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                href="/setup"
                className="inline-flex items-center gap-2 font-body font-semibold text-sm uppercase tracking-wide px-7 py-3.5 rounded no-underline transition-colors"
                style={{
                  border: '1px solid var(--brand-border-strong)',
                  color: 'var(--brand-white)',
                  letterSpacing: '0.06em',
                }}
              >
                The setup hub
              </Link>
            </div>

            {/* Inline stat strip — small editorial footer to the hero */}
            <div
              className="flex flex-wrap gap-x-10 gap-y-4 mt-14 pt-8"
              style={{ borderTop: '1px solid var(--brand-border)' }}
            >
              {[
                ['15+', 'Species references'],
                ['Solarmeter', 'UVB measurements'],
                ['ARAV', 'Health-aligned'],
                ['No paid', 'Editorial scores'],
              ].map(([n, l]) => (
                <div key={l as string}>
                  <div
                    className="font-display font-bold text-brand-white"
                    style={{ fontSize: '22px', lineHeight: 1.1 }}
                  >
                    {n}
                  </div>
                  <div
                    className="text-2xs font-medium uppercase tracking-eyebrow mt-1"
                    style={{ color: 'var(--brand-text-light)' }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ───────────────────────────────────────────────────── */}
      <div
        className="relative z-10"
        style={{
          background: '#08110A',
          borderTop: '1px solid rgba(154,209,64,0.18)',
          borderBottom: '1px solid var(--brand-border)',
        }}
      >
        <div className="mx-auto max-w-container-wide px-container-sm sm:px-container py-4 flex flex-wrap items-center gap-x-8 gap-y-2">
          {TRUST_CLAIMS.map((claim) => (
            <span
              key={claim}
              className="inline-flex items-center gap-2 font-body text-xs font-semibold"
              style={{ color: 'var(--brand-primary)' }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M4 12l5 5L20 6" />
              </svg>
              {claim}
            </span>
          ))}
        </div>
      </div>

      {/* ── LIVE TOOL — UVB distance calculator (premium gate 3) ────────── */}
      <section className="relative z-10" style={{ background: 'var(--brand-dark)' }}>
        <div className="mx-auto max-w-container-wide px-container-sm sm:px-container py-section">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Try it · UVB distance calculator
            </span>
          </div>
          <h2 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>
            How far should the UVB lamp sit?
          </h2>
          <p className="text-sm mb-7 max-w-2xl leading-relaxed" style={{ color: 'var(--brand-text-mid)' }}>
            Pick your species&apos; Ferguson zone and lamp, and get the correct basking-surface
            distance and mesh-loss adjustment — the most common way new keepers get UVB wrong.
          </p>
          <UvbDistanceCalculator />
        </div>
      </section>

      {/* ── CATEGORY GRID ───────────────────────────────────────────────── */}
      <section
        className="relative z-10"
        style={{ background: 'var(--brand-surface)' }}
      >
        <div className="mx-auto max-w-container-wide px-container-sm sm:px-container py-section">
          <div className="flex items-end justify-between gap-6 mb-10 flex-wrap">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span
                  aria-hidden="true"
                  className="h-px w-8"
                  style={{ background: 'var(--brand-primary)' }}
                />
                <span
                  className="text-2xs font-bold uppercase tracking-eyebrow"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Reference Library
                </span>
              </div>
              <h2
                className="font-display font-bold text-brand-white tracking-tight leading-tight"
                style={{ fontSize: 'clamp(30px, 3.5vw, 42px)' }}
              >
                Six entry points to the field guide.
              </h2>
              <p
                className="font-body mt-4 max-w-xl"
                style={{ color: 'var(--brand-text-mid)', fontSize: '16.5px' }}
              >
                Each section is a working reference — not a feed of opinion. Species pages
                point back to setup, setup points back to UVB, UVB points back to the
                health implications. Start anywhere.
              </p>
            </div>
            <Link
              href="/species"
              className="font-body font-semibold text-sm no-underline whitespace-nowrap"
              style={{ color: 'var(--brand-primary)' }}
            >
              All species &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CATEGORIES.map((c) => (
              <Link
                key={c.href + c.title}
                href={c.href}
                className="group block rounded-lg p-7 no-underline transition-all duration-300"
                style={{
                  background: 'var(--brand-panel)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                <span
                  className="inline-flex mb-5 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--brand-primary)' }}
                  aria-hidden="true"
                >
                  <CategoryIconSvg name={c.icon} />
                </span>
                <div
                  className="font-display font-bold text-brand-white mb-2"
                  style={{ fontSize: '20px', letterSpacing: '-0.01em' }}
                >
                  {c.title}
                </div>
                <div
                  className="font-body text-sm leading-relaxed"
                  style={{ color: 'var(--brand-text-mid)' }}
                >
                  {c.desc}
                </div>
                <div
                  className="mt-5 font-body text-2xs font-bold uppercase tracking-eyebrow opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Open reference &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED CORNERSTONES ───────────────────────────────────────── */}
      <section
        className="relative z-10"
        style={{
          background: 'var(--brand-dark)',
          borderTop: '1px solid var(--brand-border)',
        }}
      >
        <div className="mx-auto max-w-container-wide px-container-sm sm:px-container py-section">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <span
                aria-hidden="true"
                className="h-px w-8"
                style={{ background: 'var(--brand-primary)' }}
              />
              <span
                className="text-2xs font-bold uppercase tracking-eyebrow"
                style={{ color: 'var(--brand-primary)' }}
              >
                Cornerstones
              </span>
            </div>
            <h2
              className="font-display font-bold text-brand-white tracking-tight leading-tight"
              style={{ fontSize: 'clamp(30px, 3.5vw, 42px)' }}
            >
              The references most keepers come back to.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {FEATURED_ARTICLES.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group block rounded-lg overflow-hidden no-underline transition-all duration-300"
                style={{
                  background: 'var(--brand-panel)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                {/* Cover photo — manifest-managed with photographer attribution.
                    Only renders for species-leaning cards. UVB and Setup
                    cards stay CSS-only by design. */}
                {a.imageKey ? (
                  <StockImage
                    manifestKey={a.imageKey}
                    alt={a.imageAlt}
                    aspect="16:9"
                    variant="inline"
                  />
                ) : null}
                <div className="p-8">
                <div
                  className="font-body text-2xs font-bold uppercase tracking-eyebrow mb-4"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  {a.eyebrow}
                </div>
                <h3
                  className="font-display font-bold text-brand-white mb-4 transition-colors group-hover:text-brand-primary-light"
                  style={{ fontSize: 'clamp(22px, 2.4vw, 28px)', letterSpacing: '-0.01em', lineHeight: 1.15 }}
                >
                  {a.title}
                </h3>
                <p
                  className="font-body leading-relaxed mb-5"
                  style={{ color: 'var(--brand-text-mid)', fontSize: '15.5px' }}
                >
                  {a.teaser}
                </p>
                <div
                  className="flex items-center justify-between font-body text-2xs uppercase tracking-eyebrow font-semibold"
                >
                  <span style={{ color: 'var(--brand-text-light)' }}>{a.readTime} read</span>
                  <span style={{ color: 'var(--brand-primary)' }}>Read &rarr;</span>
                </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL BAND — pull quote on deep moss ───────────────────── */}
      <section
        className="relative z-10 overflow-hidden"
        style={{ background: 'var(--brand-accent)' }}
      >
        {/* Lime washes anchored top-right and bottom-left to keep the dark
            green band from reading dead. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 50% 70% at 88% 0%, rgba(154,209,64,0.18) 0%, transparent 65%)',
              'radial-gradient(ellipse 60% 60% at 8% 100%, rgba(154,209,64,0.08) 0%, transparent 65%)',
            ].join(','),
          }}
        />

        <div className="relative z-10 mx-auto max-w-content-wide px-container-sm sm:px-container py-section">
          <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-7 md:gap-10 items-start">
            {/* Quotation mark glyph in Zilla Slab — the editorial cue */}
            <div
              aria-hidden="true"
              className="font-display font-bold leading-none"
              style={{
                fontSize: 'clamp(80px, 10vw, 140px)',
                color: 'var(--brand-primary)',
                marginTop: '-0.1em',
              }}
            >
              &ldquo;
            </div>
            <div>
              <p
                className="font-display italic text-brand-white mb-6 leading-tight"
                style={{ fontSize: 'clamp(22px, 2.8vw, 34px)', fontWeight: 400 }}
              >
                A reptile lives or dies on the husbandry — UVB output, thermal gradient,
                humidity, calcium-D3 ratio. None of those are matters of opinion. The
                evidence is published. This is the reference that treats it that way.
              </p>
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8"
                  style={{ background: 'var(--brand-primary)' }}
                />
                <span
                  className="font-body text-2xs font-bold uppercase tracking-eyebrow"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Lizard.com Editorial Standard
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ───────────────────────────────────────────────── */}
      <section
        className="relative z-10"
        style={{
          background: 'var(--brand-surface)',
          borderTop: '1px solid var(--brand-border)',
        }}
      >
        <div className="mx-auto max-w-content px-container-sm sm:px-container py-section text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span
              aria-hidden="true"
              className="h-px w-8"
              style={{ background: 'var(--brand-primary)' }}
            />
            <span
              className="text-2xs font-bold uppercase tracking-eyebrow"
              style={{ color: 'var(--brand-primary)' }}
            >
              The Field Guide
            </span>
            <span
              aria-hidden="true"
              className="h-px w-8"
              style={{ background: 'var(--brand-primary)' }}
            />
          </div>
          <h2
            className="font-display font-bold text-brand-white tracking-tight mb-4 leading-tight"
            style={{ fontSize: 'clamp(28px, 3.4vw, 40px)' }}
          >
            New species references, in your inbox.
          </h2>
          <p
            className="font-body mb-8 max-w-xl mx-auto"
            style={{ color: 'var(--brand-text-mid)', fontSize: '16.5px' }}
          >
            Every other week: a new species reference, a UVB measurement, or a husbandry
            correction worth knowing. No marketing. Unsubscribe with one click.
          </p>
          <EmailCapture
            variant="inline"
            siteId="lizard-com"
            ctaText="Subscribe"
            source="homepage"
          />
          <p
            className="font-body text-2xs mt-4"
            style={{ color: 'var(--brand-text-light)' }}
          >
            No spam. No paid placements. Your address is never sold.
          </p>
        </div>
      </section>

      {/* ── PHOTO ATTRIBUTION — restrained credit strip, Unsplash hygiene ── */}
      <aside
        className="relative z-10 px-container-sm sm:px-container py-6"
        style={{
          background: 'var(--brand-dark)',
          borderTop: '1px solid var(--brand-border)',
        }}
        aria-label="Photo credits"
      >
        <p
          className="mx-auto max-w-container-wide font-body text-2xs uppercase tracking-eyebrow"
          style={{ color: 'var(--brand-text-light)' }}
        >
          Hero & species photography: contributors on{' '}
          <a
            href="https://unsplash.com"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
            style={{ color: 'var(--brand-primary)' }}
          >
            Unsplash
          </a>
          . Used under the Unsplash License. Species pages will migrate to
          Wikimedia Commons for taxonomic accuracy.
        </p>
      </aside>
    </>
  )
}
