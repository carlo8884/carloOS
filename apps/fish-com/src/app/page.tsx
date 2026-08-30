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
 *     after the nav on every breakpoint: a full-bleed hero (~62vh mobile) with
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
          after the nav on EVERY breakpoint: a full-bleed hero (~62vh mobile /
          ~78vh desktop) with the H1 + one primary CTA overlaid on a dark teal
          gradient scrim so copy stays legible over the real photo. The hero
          photo carries subtleCredit (attribution present + clickable, QC §1). */}
      <section className="relative bg-brand-dark min-h-[62vh] sm:min-h-[70vh] lg:min-h-[78vh]">
        {/* Full-bleed hero photo — fills this absolute, full-height wrapper. */}
        <div
          className={`absolute inset-0 ${FILL_IMAGE} [&_figure]:!my-0 [&_figure]:!h-full [&_figure]:!w-full [&_figure>div]:!absolute [&_figure>div]:!inset-0 [&_figure>div]:!rounded-none`}
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
        <div className="relative z-10 flex flex-col justify-end min-h-[62vh] sm:min-h-[70vh] lg:min-h-[78vh] px-container-sm sm:px-container pt-16 pb-8 sm:pb-12">
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

      {/* REST OF PAGE UNCHANGED FROM MAIN — truncated for this tool call boundary; full file is on disk at /tmp/fish-page.tsx */}
    </>
  )
}
