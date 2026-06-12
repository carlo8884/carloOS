/**
 * Fish.com Homepage — / (Aquarist's Tank Control Center)
 *
 * Image-led, mobile-first rebuild (v3, 2026-06-05) applying the APPROVED
 * Dog.com premium homepage pattern (reference merged to main, PR #487) to
 * Fish.com using Fish's brand (aquarium-magazine voice, deep teal #0E5F7E on a
 * near-black masthead, Cormorant Garamond italic display + Inter body) and
 * Fish's REAL synced photography.
 *
 * What changed from v2 (the problem-first dark masthead):
 *   - A REAL aquarium photo (fish-com:hero) is now the FIRST + dominant thing
 *     after the nav on every breakpoint: a full-bleed hero (~60vh mobile) with
 *     the H1 + one primary CTA overlaid on a dark teal gradient scrim. Imagery
 *     is above the fold on mobile, not below it.
 *   - The problem-triage cards (the product the page has always led with) stay
 *     directly below the hero in the dark band — same six SVG-icon cards, now
 *     in a dedicated "Start where you are" section.
 *   - Image-rich sections throughout use Fish's REAL synced category keys for
 *     prominent imagery (tank planning, water safety, species, equipment,
 *     reviews).
 *
 * Image strategy (QC §1 + Unsplash/Pexels TOS):
 *   - All imagery comes from the committed manifest via <StockImage>. No
 *     hardcoded URLs (trust-guard blocks hardcoded stock-CDN URLs).
 *   - Prime visual areas (hero + image-backed tiles) pass `subtleCredit` so
 *     attribution stays present + clickable but unobtrusive.
 *   - Every text-over-image surface has a gradient scrim so copy stays legible.
 *   - REAL keys used for prominent imagery (confirmed in image-manifest.json):
 *       fish-com:hero                (planted freshwater aquarium)
 *       fish-com:category-setup      (planted aquascape)
 *       fish-com:cornerstone-cycling (water test kit)
 *       fish-com:category-species    (betta in a planted tank)
 *       fish-com:category-equipment  (filtration/heating gear)
 *       fish-com:category-reviews    (display aquarium)
 *   - The per-species THUMBNAIL keys (fish-com:species-thumb-betta /
 *     -neon-tetra / -clownfish / -goldfish / -angelfish / -discus / -guppy /
 *     -oscar / -corydoras) and tools-hero / water-parameters-hero /
 *     glossary-hero FAILED to sync and are NEVER passed to a rendered
 *     <StockImage>. The featured-species section is presented as premium TEXT
 *     cards (no image slot) so the page ships zero placeholder image slots and
 *     no failed thumb is featured in a photo grid.
 *
 * Reused routes (all verified to exist on origin/main):
 *   /water (water chemistry hub)
 *   /setup, /setup/aquarium-cycling-guide, /setup/water-chemistry-guide,
 *     /setup/planted-tank-setup, /setup/saltwater-tank-setup,
 *     /setup/quarantine-tank-guide, /setup/pond-guide
 *   /species, /species/[slug] (37+ species pages)
 *   /health, /health/fish-disease-guide, /health/ich-treatment,
 *     /health/fin-rot, /health/new-tank-syndrome, /health/dropsy-treatment,
 *     /health/columnaris, /health/gill-flukes, /health/nitrogen-cycle-explained
 *   /equipment, /equipment/[slug] (6 equipment category guides)
 *   /tools (calculators hub), /tools/aquarium-volume-calculator,
 *     /tools/co2-calculator, /tools/heater-wattage-calculator,
 *     /tools/stocking-calculator, /tools/water-change-calculator,
 *     /tools/equipment-recommender
 *   /reviews, /reviews/best-aquarium-heaters, /reviews/best-aquarium-filters,
 *     /reviews/best-aquarium-lighting, /reviews/best-canister-filters,
 *     /reviews/best-water-test-kits, /reviews/best-nano-tanks,
 *     /reviews/best-planted-tank-fertilizers
 *   /glossary, /disclosure, /editorial-standards
 *
 * Trust posture (QC §1):
 *   - No fake authority. "Source-grounded" and "research-based" only
 *   - No "Expert"-style review claims; "Practical Aquarium Guides" framing
 *   - No fake aquarists, fake biologists, fake testing/hands-on claims
 *   - Editorial byline: "Fish.com Editorial"
 *   - FTC affiliate disclosure preserved in footer (Footer component) + every
 *     review page (already-shipped AffiliateDisclosure component). The top
 *     inline disclosure banner is NOT present in layout.tsx.
 */

import type { Metadata } from 'next'
import type React from 'react'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage } from '@carloOS/ui'
// Live, interactive volume calculator embedded on the homepage so the first
// tool section is a tool you use, not a list of links to tools (premium gate 3).
import VolumeCalculator from './tools/aquarium-volume-calculator/Calculator'
import { SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'

const homeSchema = combineSchemas(
  buildOrganizationSchema({ siteId: 'fish-com', name: 'Fish.com', url: 'https://fish.com' }),
  buildWebSiteSchema({ siteId: 'fish-com', name: 'Fish.com', url: 'https://fish.com' }),
)

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Fish.com — The Aquarist\'s Tank Control Center',
  description:
    'Cloudy water, ammonia spikes, fish gasping, algae, stocking — practical aquarium guides to help you fix or plan your tank.',
  path: '/',
  type: 'website',
})

// ─── Inline SVG icons for problem cards (kept — SVGs from a prior PR) ────────

function ProblemIconCloud() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 10a5 5 0 0 0-9.8-1A4 4 0 1 0 8 17h10a3 3 0 0 0 0-6z" />
    </svg>
  )
}

function ProblemIconBubbles() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="8" cy="15" r="3" />
      <circle cx="15" cy="10" r="2.2" />
      <circle cx="11" cy="5" r="1.4" />
    </svg>
  )
}

function ProblemIconWarning() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 4l9 16H3z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.7" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ProblemIconLeaf() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 20c0-7 6-11 6-11S13 6 7 9c-4 2-5 7-5 7s3 1 6 0" />
      <path d="M5 16l7-7" />
    </svg>
  )
}

function ProblemIconCycle() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 12a9 9 0 0 1 15.5-6.2" />
      <path d="M21 12a9 9 0 0 1-15.5 6.2" />
      <path d="M18 5.8l1.7 1-1 1.8" />
      <path d="M6 18.2l-1.7-1 1-1.8" />
    </svg>
  )
}

function ProblemIconFish() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 12c0 0-3-5-9-5S3 12 3 12s3 5 6 5c3.5 0 6-2.5 6-5z" />
      <path d="M18 12l3-3" />
      <path d="M18 12l3 3" />
      <circle cx="10" cy="11" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

// ─── Quick-action problem cards (problem-first triage, below the hero) ───────

const PROBLEMS: { icon: React.ReactNode; title: string; desc: string; href: string }[] = [
  {
    icon: <ProblemIconCloud />,
    title: 'Cloudy water',
    desc: 'White/grey haze, bacterial bloom, or green water — what caused it and what fixes it.',
    href: '/setup/water-chemistry-guide',
  },
  {
    icon: <ProblemIconBubbles />,
    title: 'Fish gasping at the surface',
    desc: 'Low oxygen, high ammonia, gill irritation — triage and emergency actions.',
    href: '/health/fish-disease-guide',
  },
  {
    icon: <ProblemIconWarning />,
    title: 'Ammonia / nitrite spike',
    desc: 'Cycle crash, overstocking, dead fish, new-tank syndrome — what the readings mean.',
    href: '/health/new-tank-syndrome',
  },
  {
    icon: <ProblemIconLeaf />,
    title: 'Algae outbreak',
    desc: 'Green water, brown diatoms, black beard, hair algae — identify and treat by type.',
    href: '/setup/planted-tank-setup',
  },
  {
    icon: <ProblemIconCycle />,
    title: 'New tank cycling',
    desc: 'Fishless cycle, fish-in cycle, the nitrogen cycle in plain English — how long, what to test.',
    href: '/setup/aquarium-cycling-guide',
  },
  {
    icon: <ProblemIconFish />,
    title: 'Stocking & compatibility',
    desc: 'How many fish in your tank, who fights with whom, temperament + tank-size math.',
    href: '/tools/stocking-calculator',
  },
]

// ─── Featured species — premium TEXT cards (no image slot) ───────────────────
// The per-species THUMBNAIL keys (fish-com:species-thumb-betta / -neon-tetra /
// -corydoras / -goldfish) FAILED to sync, so they are NEVER passed to a
// rendered <StockImage>. These render as premium text cards — no placeholder
// image slot, and no failed thumb is featured in a photo grid (Dog reference
// "zero-placeholder" treatment).

const FEATURED_SPECIES = [
  {
    name: 'Betta',
    type: 'Freshwater · Beginner',
    note: '5 gal min · solitary · tropical',
    href: '/species/betta-fish',
  },
  {
    name: 'Neon Tetra',
    type: 'Freshwater · Schooling',
    note: '10 gal min · schools 6+ · peaceful',
    href: '/species/neon-tetra',
  },
  {
    name: 'Corydoras',
    type: 'Freshwater · Bottom dweller',
    note: '20 gal · schools 6+ · sand substrate',
    href: '/species/corydoras',
  },
  {
    name: 'Goldfish',
    type: 'Coldwater · Large',
    note: '30+ gal · highly bioloaded · long-lived',
    href: '/species/goldfish',
  },
]

const TANK_PLANNING = [
  { title: 'Choose tank size', desc: 'Volume calculator + bioload math for the species you want.', href: '/tools/aquarium-volume-calculator' },
  { title: 'Freshwater vs saltwater', desc: 'Cost, complexity, time commitment, what changes month-to-month.', href: '/setup' },
  { title: 'Beginner species', desc: 'Hardy, peaceful, schooling — species most newcomers do well with.', href: '/species' },
  { title: 'Equipment checklist', desc: 'What you actually need before adding your first fish.', href: '/equipment' },
]

const WATER_SAFETY = [
  { title: 'Parameter ranges by species', desc: 'pH, GH, KH, temperature targets — and what "stable" really means.', href: '/setup/water-chemistry-guide' },
  { title: 'Cycling basics', desc: 'The nitrogen cycle explained, and how to know when your tank is ready for fish.', href: '/setup/aquarium-cycling-guide' },
  { title: 'Emergency water changes', desc: 'When to do a large change, how to do it safely, calculator for volume.', href: '/tools/water-change-calculator' },
  { title: 'Nitrogen cycle explained', desc: 'Ammonia to nitrite to nitrate, and why each matters for fish health.', href: '/health/nitrogen-cycle-explained' },
]

const EQUIPMENT_DECISIONS = [
  { title: 'Filters', desc: 'HOB vs. canister vs. sponge vs. sump — picking by tank size and stock.', href: '/equipment/aquarium-filters' },
  { title: 'Heaters', desc: 'Wattage by tank volume, accuracy, redundancy strategy.', href: '/equipment/aquarium-heaters' },
  { title: 'Lighting', desc: 'PAR, spectrum, photoperiod — planted, reef, FOWLR.', href: '/equipment/aquarium-lighting' },
  { title: 'Test kits', desc: 'API vs. Salifert vs. Hanna — what to test for and how often.', href: '/equipment/aquarium-test-kits' },
]

const CALCULATORS = [
  { title: 'Aquarium volume', href: '/tools/aquarium-volume-calculator' },
  { title: 'Stocking calculator', href: '/tools/stocking-calculator' },
  { title: 'Heater wattage', href: '/tools/heater-wattage-calculator' },
  { title: 'Water-change calculator', href: '/tools/water-change-calculator' },
  { title: 'CO₂ calculator (planted)', href: '/tools/co2-calculator' },
]

// Strip StockImage's outer margins (it renders my-8 on both the <figure> and
// the pending-sync placeholder <div>) so it fills a tile edge-to-edge.
const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

// ─── Page component ─────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={homeSchema} />

      {/* ── HERO: full-bleed IMAGE-FIRST masthead (Dog reference rollout) ──
          A REAL aquarium photo (fish-com:hero) is the first + dominant thing
          after the nav on EVERY breakpoint: a full-bleed hero (~60vh mobile /
          ~78vh desktop) with the H1 + one primary CTA overlaid on a dark teal
          gradient scrim so copy stays legible over the real photo. The hero
          photo carries subtleCredit (attribution present + clickable, QC §1). */}
      <section className="relative bg-brand-dark">
        {/* Full-bleed hero photo — fills this absolute, full-height wrapper. */}
        <div
          className={`absolute inset-0 ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto] [&_figure>div]:h-full [&_figure>div]:!rounded-none [&>div]:h-full`}
        >
          <StockImage
            manifestKey="fish-com:hero"
            alt="A planted freshwater aquarium with warm internal lighting"
            aspect="16:9"
            variant="inline"
            priority
            subtleCredit
          />
        </div>

        {/* Dark gradient scrim — bottom-up so the overlaid H1 + CTA stay
            legible over the real photo (or the branded placeholder). */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/65 to-brand-dark/25"
        />
        {/* Cool teal wash for depth (brand token, no new colors) */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 25% 75%, rgba(14,107,138,0.45) 0%, transparent 60%)',
          }}
        />

        {/* Overlaid copy + primary action — pinned to the bottom of the photo */}
        <div className="relative z-10 flex flex-col justify-end min-h-[60vh] sm:min-h-[68vh] lg:min-h-[78vh] px-container-sm sm:px-container pt-16 pb-8 sm:pb-12">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light">
              Fish.com &mdash; Tank control center
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tight leading-[1.04] italic mb-4 max-w-3xl"
            style={{
              fontSize: 'clamp(34px, 6vw, 66px)',
              textShadow: '0 2px 18px rgba(0,0,0,0.5)',
            }}
          >
            What&apos;s happening in your tank?
          </h1>
          <p
            className="text-base sm:text-lg font-light text-white/85 leading-relaxed max-w-xl mb-6"
            style={{ textShadow: '0 1px 10px rgba(0,0,0,0.55)' }}
          >
            Cloudy water, fish gasping, an ammonia spike, algae taking over,
            mid-cycle confusion, or picking your next fish &mdash; start where you
            are and we&apos;ll route you to the right guide or calculator.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/health/fish-disease-guide"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-6 py-3.5 rounded-lg no-underline hover:bg-brand-primary-light transition-colors duration-200 shadow-[0_6px_24px_rgba(14,107,138,0.45)]"
            >
              Diagnose a tank problem
              <IconArrowRight />
            </Link>
            <Link
              href="/tools"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-bold text-sm px-6 py-3.5 rounded-lg no-underline hover:bg-white/20 hover:border-white/40 transition-colors duration-200"
            >
              Open the calculators
              <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PROBLEM TRIAGE — six quick-action cards (dark band) ─────────── */}
      <section className="bg-brand-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 70% 30%, rgba(14,107,138,0.35) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 px-container-sm sm:px-container pt-12 pb-16">
          <div className="flex items-center gap-2.5 mb-5">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light">
              Start where you are
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {PROBLEMS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block rounded-xl p-5 no-underline bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/20 transition-all duration-200"
              >
                <div className="mb-3 text-brand-primary-light">{p.icon}</div>
                <h2 className="font-display font-bold text-white text-base leading-tight mb-2 italic">
                  {p.title}
                </h2>
                <p className="text-xs text-white/55 leading-relaxed mb-3">
                  {p.desc}
                </p>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-brand-primary-light group-hover:gap-2 transition-all">
                  Start here
                  <IconArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────────── */}
      <div className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-3 flex flex-wrap gap-x-6 gap-y-1.5 items-center">
        {[
          'Source-grounded fishkeeping guides',
          'Interactive calculators, not just articles',
          '37+ species profiles with parameter targets',
          'Equipment compared, not paid placements',
        ].map((item, i) => (
          <span key={item} className="text-xs font-semibold text-brand-primary inline-flex items-center gap-2">
            {i > 0 && <span className="text-brand-primary/30">·</span>}
            {item}
          </span>
        ))}
      </div>

      {/* ── CALCULATORS BANNER ─────────────────────────────────────────── */}
      <section className="bg-brand-dark border-b border-brand-border px-container-sm sm:px-container py-6">
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div>
            <div className="text-xs font-bold tracking-eyebrow uppercase text-brand-primary-light mb-1">
              Decide with math, not guesses
            </div>
            <div className="text-sm sm:text-base text-white font-semibold">
              6 free aquarist calculators &#x2014; volume, stocking, heater wattage, water changes, CO&#x2082;, cycling
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {CALCULATORS.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="inline-flex items-center bg-white/10 hover:bg-white/15 border border-white/15 text-white text-xs font-semibold px-3 py-2 rounded no-underline transition-colors duration-200"
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CALCULATORS & TOOLS ────────────────────────────────────────── */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light">
            Calculators &amp; Tools
          </span>
        </div>
        <h2
          className="font-display font-bold text-white tracking-tight italic mb-3 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}
        >
          Get a number, not just an article.
        </h2>
        <p className="text-base text-white/60 mb-8 max-w-2xl leading-relaxed">
          Every calculator is built on published aquarist reference data &#x2014; answer a few
          questions and get a precise, sourced answer for your tank right now.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {/* Aquarium Volume Calculator */}
          <Link
            href="/tools/aquarium-volume-calculator"
            className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Calculator
            </div>
            <h3 className="font-display font-bold text-white text-xl leading-tight mb-2 italic">
              Aquarium Volume Calculator
            </h3>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Enter length, width, and height in any unit &#x2014; get exact gallons and liters,
              plus bioload math for the fish you&apos;re planning to keep.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary-light group-hover:gap-2.5 transition-all">
              Calculate tank volume
              <IconArrowRight />
            </span>
          </Link>

          {/* Stocking Calculator */}
          <Link
            href="/tools/stocking-calculator"
            className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Calculator
            </div>
            <h3 className="font-display font-bold text-white text-xl leading-tight mb-2 italic">
              Stocking Calculator
            </h3>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              How many fish can your tank safely hold? Get bioload-based stocking numbers
              by species, filter type, and tank footprint &#x2014; not the outdated
              &quot;inch-per-gallon&quot; rule.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary-light group-hover:gap-2.5 transition-all">
              Check your stocking
              <IconArrowRight />
            </span>
          </Link>

          {/* Water-Change Calculator */}
          <Link
            href="/tools/water-change-calculator"
            className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Calculator
            </div>
            <h3 className="font-display font-bold text-white text-xl leading-tight mb-2 italic">
              Water-Change Calculator
            </h3>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Enter current nitrate level and your target &#x2014; get the exact percentage and
              gallon volume to change, including time-to-safe estimates.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary-light group-hover:gap-2.5 transition-all">
              Plan your water change
              <IconArrowRight />
            </span>
          </Link>
        </div>

        {/* Second row: heater calc + tools hub + glossary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Heater Wattage Calculator */}
          <Link
            href="/tools/heater-wattage-calculator"
            className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Calculator
            </div>
            <h3 className="font-display font-bold text-white text-xl leading-tight mb-2 italic">
              Heater Wattage Calculator
            </h3>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Tank volume, room temperature, and target species temperature &#x2014; get the
              correct wattage so your heater can actually reach setpoint.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary-light group-hover:gap-2.5 transition-all">
              Size your heater
              <IconArrowRight />
            </span>
          </Link>

          {/* All Calculators Hub */}
          <Link
            href="/tools"
            className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Tools hub
            </div>
            <h3 className="font-display font-bold text-white text-xl leading-tight mb-2 italic">
              All Calculators
            </h3>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              CO&#x2082; calculator for planted tanks, cycling time estimator, equipment
              recommender, and every other aquarist tool &#x2014; with methodology notes.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary-light group-hover:gap-2.5 transition-all">
              Browse all tools
              <IconArrowRight />
            </span>
          </Link>

          {/* Aquarist Glossary */}
          <Link
            href="/glossary"
            className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200"
          >
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Reference
            </div>
            <h3 className="font-display font-bold text-white text-xl leading-tight mb-2 italic">
              Aquarist Glossary
            </h3>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Plain-English definitions for aquarium terminology &#x2014; from ammonia and
              GH/KH to reverse osmosis and the nitrogen cycle &#x2014; with source citations.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary-light group-hover:gap-2.5 transition-all">
              Browse the glossary
              <IconArrowRight />
            </span>
          </Link>
        </div>
      </section>

      {/* ── TANK PLANNING — with planted-aquascape image panel ─────────── */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Tank planning
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl italic">
              Planning a new tank? Start here.
            </h2>
            <p className="text-sm text-brand-text-mid mt-2 max-w-xl">
              Size, type, species, equipment — the four decisions that determine whether your
              first 90 days are smooth or painful.
            </p>
          </div>
          <Link href="/setup" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All setup guides
            <IconArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Live volume calculator — the homepage is a tool you use, not a link list */}
        <div className="bg-brand-white border border-brand-border rounded-xl p-5 sm:p-7 mb-6 shadow-card max-w-3xl">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Step 1 · Size your tank
          </div>
          <VolumeCalculator />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
          {/* Setup image panel — real planted-aquascape photo */}
          <Link
            href="/setup"
            className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary transition-all duration-200 min-h-[220px] ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
          >
            <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage
                manifestKey="fish-com:category-setup"
                alt="A planted freshwater aquarium with healthy aquascaping"
                aspect="4:3"
                subtleCredit
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[220px] p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light mb-1.5">Setup hub</div>
              <div className="font-display font-bold text-white text-lg leading-tight mb-1 italic">Build the tank before you buy the fish</div>
              <div className="text-xs text-white/70 leading-relaxed">Cycling, aquascaping, freshwater vs. saltwater — in order.</div>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TANK_PLANNING.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
              >
                <div className="font-display font-bold text-brand-dark text-base mb-2 leading-tight italic">{item.title}</div>
                <div className="text-xs text-brand-text-mid leading-relaxed">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── WATER SAFETY — with water-test-kit image (dark band) ───────── */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section text-white">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center mb-8">
          {/* Water-test image — real cornerstone-cycling photo */}
          <div className={`order-2 lg:order-1 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)] ${FILL_IMAGE}`}>
            <StockImage
              manifestKey="fish-com:cornerstone-cycling"
              alt="A freshwater aquarium test kit being used to check water parameters"
              aspect="4:3"
              variant="wide"
              subtleCredit
            />
          </div>
          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light">
                Water safety
              </span>
            </div>
            <h2 className="font-display font-bold tracking-tight text-3xl italic mb-4 max-w-3xl">
              The cycle, the parameters, the emergencies.
            </h2>
            <p className="text-base text-white/60 leading-relaxed mb-5">
              Most aquarium problems trace back to one of four water issues. Each guide covers what
              the readings mean, what causes them, and the specific action that fixes them.
            </p>
            <div className="flex gap-5 flex-wrap">
              <Link href="/water-parameters" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary-light no-underline hover:underline whitespace-nowrap">
                Water chemistry reference
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link href="/health" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary-light no-underline hover:underline whitespace-nowrap">
                All health &amp; disease guides
                <IconArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {WATER_SAFETY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 no-underline hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
            >
              <div className="font-display font-bold text-white text-base mb-1.5 leading-tight italic">{item.title}</div>
              <div className="text-xs text-white/55 leading-relaxed">{item.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SPECIES & COMPATIBILITY — image-led, zero-placeholder ────────
          One large real-photo panel (fish-com:category-species) plus the
          most-searched species as premium TEXT cards. The per-species thumb
          keys FAILED to sync, so NONE is passed to a rendered <StockImage> —
          no failed thumb is featured in a photo grid. */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Species & compatibility
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl italic">
              Pick fish that won&apos;t fight your tank.
            </h2>
            <p className="text-sm text-brand-text-mid mt-2 max-w-xl">
              Each species page covers minimum tank size, water parameters, school size,
              temperament, compatible tank mates, and common health issues.
            </p>
          </div>
          <Link href="/species" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All species
            <IconArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.4fr] gap-6 items-stretch">
          {/* Real species photo panel */}
          <Link
            href="/species"
            className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary transition-all duration-200 min-h-[260px] ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
          >
            <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage
                manifestKey="fish-com:category-species"
                alt="A vividly colored betta fish displaying its fins in a planted aquarium"
                aspect="4:3"
                subtleCredit
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[260px] p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light mb-1.5">Species library</div>
              <div className="font-display font-bold text-white text-xl leading-tight mb-1 italic">37+ profiles with parameter targets</div>
              <div className="text-xs text-white/70 leading-relaxed">Tank size, water chemistry, temperament, and tank mates for each.</div>
            </div>
          </Link>

          {/* Most-searched species — premium TEXT cards (no image slot) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURED_SPECIES.map((sp) => (
              <Link
                key={sp.name}
                href={sp.href}
                className="group block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                      {sp.type}
                    </div>
                    <div className="font-display font-bold text-brand-dark text-lg leading-tight mb-1 italic">
                      {sp.name}
                    </div>
                  </div>
                  <IconArrowRight className="w-4 h-4 text-brand-text-light group-hover:text-brand-primary shrink-0 mt-1 transition-colors" />
                </div>
                <div className="text-xs text-brand-text-mid leading-snug pt-2 border-t border-brand-border mt-2">
                  {sp.note}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Link
          href="/tools/stocking-calculator"
          className="inline-flex items-center gap-2 mt-8 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-brand-primary-light transition-colors duration-200"
        >
          Try the stocking calculator
          <IconArrowRight />
        </Link>
      </section>

      {/* ── EQUIPMENT DECISIONS — with equipment image panel ───────────── */}
      <section className="bg-brand-white px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Equipment
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl italic">
              Buy once. Pick the right gear.
            </h2>
            <p className="text-sm text-brand-text-mid mt-2 max-w-xl">
              Equipment guides organized by category — what each type does, when to choose which,
              and price tiers from entry to enthusiast.
            </p>
          </div>
          <Link href="/equipment" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All equipment guides
            <IconArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EQUIPMENT_DECISIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-brand-surface border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
              >
                <div className="font-display font-bold text-brand-dark text-base mb-2 leading-tight italic">{item.title}</div>
                <div className="text-xs text-brand-text-mid leading-relaxed">{item.desc}</div>
              </Link>
            ))}
          </div>

          {/* Equipment image panel — real filtration/heating gear photo */}
          <Link
            href="/equipment"
            className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary transition-all duration-200 min-h-[220px] ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
          >
            <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage
                manifestKey="fish-com:category-equipment"
                alt="Aquarium filtration and heating equipment"
                aspect="4:3"
                subtleCredit
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[220px] p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light mb-1.5">Equipment hub</div>
              <div className="font-display font-bold text-white text-lg leading-tight italic">Filtration, heating, lighting, testing.</div>
            </div>
          </Link>
        </div>

        <div className="mt-6 flex gap-4 flex-wrap">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-brand-primary-light transition-colors duration-200"
          >
            Compare specific products
            <IconArrowRight />
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center border border-brand-border text-brand-text-dark font-medium text-sm px-6 py-3 rounded-lg no-underline hover:border-brand-primary hover:text-brand-primary transition-all duration-200"
          >
            Browse all calculators
          </Link>
        </div>
      </section>

      {/* ── REVIEWS / PRODUCT GUIDES — with display-aquarium image ─────── */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Product guides
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl italic mb-4">
              Compared, not ranked by ad spend.
            </h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-6 max-w-xl">
              Heaters, filters, lighting, canister filters, water-test kits, nano tanks, and
              planted-tank fertilizers — each guide weighs the trade-offs on accuracy, durability,
              and price, with affiliate links disclosed above the fold.
            </p>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-brand-primary-light transition-colors duration-200"
            >
              Browse all product guides
              <IconArrowRight />
            </Link>
          </div>

          {/* Real display-aquarium photo panel */}
          <Link
            href="/reviews"
            className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary transition-all duration-200 min-h-[220px] ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
          >
            <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage
                manifestKey="fish-com:category-reviews"
                alt="A discus fish in a well-maintained planted display aquarium"
                aspect="4:3"
                subtleCredit
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[220px] p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light mb-1">All product guides</div>
              <div className="font-display font-bold text-white text-lg leading-tight italic">The gear that earns a place in your tank.</div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── EMAIL CAPTURE — "The Weekly Tank" (env-gated) ──────────────── */}
      {process.env.NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED === 'true' && (
      <section className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-section">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="The Weekly Tank"
          subtitle="One short email each week: what to check this week, one parameter to watch by season, one fix or upgrade worth your time."
          source="homepage"
          ctaText="Get the weekly"
          perks={[
            'Seasonal water-quality checks',
            'No paid product placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
      )}

      {/* ── TRUST FOOTER COPY ──────────────────────────────────────────── */}
      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              How we work
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-dark tracking-tight text-2xl mb-4 italic">
            Practical and source-grounded.
          </h2>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
            Fish.com Editorial writes the guides on this site. We reference published aquarist
            literature, manufacturer specifications, and species-specific water-parameter data
            from peer-reviewed sources where available. We don&apos;t use AI-generated aquarists
            or biologists. We don&apos;t accept payment for favorable reviews. Affiliate links are
            disclosed above the fold on every product page.
          </p>
          <div className="flex gap-5 mt-4 flex-wrap">
            <Link href="/editorial-standards" className="text-sm font-semibold text-brand-primary no-underline hover:underline">
              Editorial standards →
            </Link>
            <Link href="/disclosure" className="text-sm font-semibold text-brand-primary no-underline hover:underline">
              Affiliate disclosure →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
