/**
 * Fish.com Homepage — / (Aquarist's Tank Control Center)
 *
 * Redesigned 2026-05-30 from a static aquarium reference homepage into a
 * problem-first decision hub. Above the fold answers "What's happening
 * in your tank?" with 6 quick-action problem cards rather than a
 * category grid.
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
 *   /disclosure, /editorial-standards
 *
 * Trust posture (QC §1):
 *   - No fake authority. "Source-grounded" and "research-based" only
 *   - Removed "Expert"-style review claims; replaced with "Practical Aquarium Guides"
 *   - Replaced "Expert content across every aspect" with "Source-grounded fishkeeping guides"
 *   - No fake aquarists, fake biologists, fake testing claims, fake hands-on
 *   - Editorial byline: "Fish.com Editorial"
 *   - FTC affiliate disclosure preserved (Footer renders portfolio-wide)
 */

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Fish.com — The Aquarist\'s Tank Control Center',
  description:
    'Cloudy water, ammonia spikes, fish gasping, algae, stocking — practical aquarium guides to help you fix or plan your tank.',
  path: '/',
  type: 'website',
  ogImage: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=1200&q=80&auto=format&fit=crop',
})

// ─── Quick-action problem cards (above the fold) ────────────────────────────

const PROBLEMS = [
  {
    icon: '☁️',
    title: 'Cloudy water',
    desc: 'White/grey haze, bacterial bloom, or green water — what caused it and what fixes it.',
    href: '/setup/water-chemistry-guide',
  },
  {
    icon: '🫧',
    title: 'Fish gasping at the surface',
    desc: 'Low oxygen, high ammonia, gill irritation — triage and emergency actions.',
    href: '/health/fish-disease-guide',
  },
  {
    icon: '⚠️',
    title: 'Ammonia / nitrite spike',
    desc: 'Cycle crash, overstocking, dead fish, new-tank syndrome — what the readings mean.',
    href: '/health/new-tank-syndrome',
  },
  {
    icon: '🌿',
    title: 'Algae outbreak',
    desc: 'Green water, brown diatoms, black beard, hair algae — identify and treat by type.',
    href: '/setup/planted-tank-setup',
  },
  {
    icon: '🔄',
    title: 'New tank cycling',
    desc: 'Fishless cycle, fish-in cycle, the nitrogen cycle in plain English — how long, what to test.',
    href: '/setup/aquarium-cycling-guide',
  },
  {
    icon: '🐟',
    title: 'Stocking & compatibility',
    desc: 'How many fish in your tank, who fights with whom, temperament + tank-size math.',
    href: '/tools/stocking-calculator',
  },
]

// ─── Featured species (most-searched freshwater) ─────────────────────────────

const FEATURED_SPECIES = [
  {
    name: 'Betta',
    type: 'Freshwater · Beginner',
    note: '5 gal min · solitary · tropical',
    href: '/species/betta-fish',
    image: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'Betta fish in a planted aquarium',
  },
  {
    name: 'Neon Tetra',
    type: 'Freshwater · Schooling',
    note: '10 gal min · schools 6+ · peaceful',
    href: '/species/neon-tetra',
    image: 'https://images.unsplash.com/photo-1522069213448-443a614da9b6?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'School of neon tetras',
  },
  {
    name: 'Corydoras',
    type: 'Freshwater · Bottom dweller',
    note: '20 gal · schools 6+ · sand substrate',
    href: '/species/corydoras',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c55a?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'Corydoras catfish on aquarium sand',
  },
  {
    name: 'Goldfish',
    type: 'Coldwater · Large',
    note: '30+ gal · highly bioloaded · long-lived',
    href: '/species/goldfish',
    image: 'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'Goldfish swimming',
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
  { title: 'Nitrogen cycle explained', desc: 'Ammonia → nitrite → nitrate, and why each matters for fish health.', href: '/health/nitrogen-cycle-explained' },
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

// ─── Page component ─────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 30% 30%, rgba(14,107,138,0.4) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-container-sm sm:px-container pt-16 pb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Fish.com — Tank control center
            </span>
          </div>
          <h1
            className="font-display font-bold text-white tracking-tighter leading-[1.05] mb-4 max-w-4xl italic"
            style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
          >
            What&apos;s happening in your tank?
          </h1>
          <p className="text-base sm:text-lg font-light text-white/65 leading-relaxed max-w-2xl">
            Cloudy water, fish gasping, ammonia spike, algae taking over, mid-cycle confusion,
            picking your next fish — start where you are and we&apos;ll route you to the right
            guide or calculator.
          </p>
        </div>

        <div className="relative z-10 px-container-sm sm:px-container pb-16">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
            {PROBLEMS.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group block rounded-xl p-5 no-underline bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/20 transition-all duration-200"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{p.icon}</div>
                <h2 className="font-display font-bold text-white text-base leading-tight mb-2">
                  {p.title}
                </h2>
                <p className="text-xs text-white/55 leading-relaxed mb-3">
                  {p.desc}
                </p>
                <span className="inline-flex items-center text-xs font-bold text-brand-primary-light group-hover:underline">
                  Start here →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── HERO PHOTO — flagship visual moment ──────────────────────────── */}
      <div className="bg-brand-white px-container-sm sm:px-container">
        <StockImage manifestKey="fish-com:hero" priority aspect="16:9" variant="inline" />
      </div>

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
              5 free aquarist calculators — volume, stocking, heater wattage, water changes, CO₂
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

      {/* ── TANK PLANNING ──────────────────────────────────────────────── */}
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
          <Link href="/setup" className="text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All setup guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TANK_PLANNING.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
            >
              <div className="font-display font-bold text-brand-dark text-base mb-2 leading-tight">{item.title}</div>
              <div className="text-xs text-brand-text-mid leading-relaxed">{item.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WATER SAFETY ───────────────────────────────────────────────── */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section text-white">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Water safety
          </span>
        </div>
        <h2 className="font-display font-bold tracking-tight text-3xl italic mb-4 max-w-3xl">
          The cycle, the parameters, the emergencies.
        </h2>
        <p className="text-base text-white/60 mb-8 max-w-2xl leading-relaxed">
          Most aquarium problems trace back to one of four water issues. Each guide covers what
          the readings mean, what causes them, and the specific action that fixes them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {WATER_SAFETY.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 no-underline hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
            >
              <div className="font-display font-bold text-white text-base mb-1.5 leading-tight">{item.title}</div>
              <div className="text-xs text-white/55 leading-relaxed">{item.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── SPECIES COMPATIBILITY ──────────────────────────────────────── */}
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
          <Link href="/species" className="text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All species →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_SPECIES.map((sp) => (
            <Link
              key={sp.name}
              href={sp.href}
              className="group block bg-brand-white border border-brand-border rounded-lg overflow-hidden no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface">
                <Image
                  src={sp.image}
                  alt={sp.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                  {sp.type}
                </div>
                <div className="font-display font-bold text-brand-dark text-base mb-1.5 leading-tight">
                  {sp.name}
                </div>
                <div className="text-xs text-brand-text-mid leading-snug">
                  {sp.note}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          href="/tools/stocking-calculator"
          className="inline-flex items-center mt-8 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors duration-200"
        >
          Try the stocking calculator →
        </Link>
      </section>

      {/* ── EQUIPMENT DECISIONS ────────────────────────────────────────── */}
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
          <Link href="/equipment" className="text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All equipment guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {EQUIPMENT_DECISIONS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-brand-surface border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
            >
              <div className="font-display font-bold text-brand-dark text-base mb-2 leading-tight">{item.title}</div>
              <div className="text-xs text-brand-text-mid leading-relaxed">{item.desc}</div>
            </Link>
          ))}
        </div>

        <div className="mt-6 flex gap-4 flex-wrap">
          <Link
            href="/reviews"
            className="inline-flex items-center bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors duration-200"
          >
            Compare specific products →
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center border border-brand-border text-brand-text-dark font-medium text-sm px-6 py-3 rounded no-underline hover:border-brand-primary hover:text-brand-primary transition-all duration-200"
          >
            Browse all calculators
          </Link>
        </div>
      </section>

      {/* ── EMAIL CAPTURE — "The Weekly Tank" ──────────────────────────── */}
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
