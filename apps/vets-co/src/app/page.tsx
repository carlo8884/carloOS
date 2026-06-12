/**
 * Vets.co Homepage — / (Pet-Owner's Veterinary Reference Desk)
 *
 * Image-led, mobile-first rebuild (2026-06-05) applying the APPROVED Dog.com
 * premium homepage pattern (dog-com reference v3/v4, merged to main #487) to
 * Vets.co's clinical-authority brand.
 *
 * What changed vs. the previous version:
 *   - The hero photo (vets-co:hero — a stethoscope on warm wood, object-led,
 *     NO human subjects) is now INTEGRATED into the navy masthead as a
 *     full-bleed background (~60vh mobile / ~78vh desktop) with the H1 + primary
 *     CTA overlaid on a dark gradient scrim. The old version pushed the photo
 *     into a separate white band BELOW the masthead, so on a phone the photo
 *     fell below the fold — fixed to match the dog reference.
 *   - Prominent section imagery now uses Vets' REAL synced photography
 *     (architecture / objects / animals only — never a staged clinical scene
 *     with real staff, per QC §1 + the Vets.co photo playbook).
 *   - subtleCredit on the hero + every image-backed tile so attribution stays
 *     present + clickable but unobtrusive (Unsplash/Pexels TOS + QC §1).
 *
 * Image strategy (QC §1 + Unsplash/Pexels TOS):
 *   - All imagery comes from the committed manifest via <StockImage>. No
 *     hardcoded stock-CDN URLs (trust-guard blocks them).
 *   - REAL synced keys only for prominent imagery:
 *       vets-co:hero               -> stethoscope on warm wood (object)
 *       vets-co:find-a-vet-hero    -> clinic building entrance (architecture)
 *       vets-co:health-hero        -> reference books on a shelf (object)
 *       vets-co:category-breeds    -> a purebred dog portrait (animal)
 *       vets-co:insurance-hero     -> paperwork + calculator on a desk (object)
 *   - We deliberately AVOID the not-yet-synced / failed keys (they are not in
 *     the manifest and would render a placeholder): vets-co:category-find-a-vet,
 *     cornerstone-breed-health, symptoms-hero, medications-hero,
 *     diagnostics-hero, specialists-hero, tools-hero. None are passed to a
 *     rendered <StockImage>.
 *   - Every text-over-image surface has a gradient scrim so copy stays legible.
 *
 * Trust posture (QC §1):
 *   - No fake credentials. No "our doctors". No invented bylines.
 *   - No AI-generated humans and no staged clinical actors. Prominent imagery
 *     is object / architecture / animal only.
 *   - FTC affiliate disclosure preserved in the footer (Footer component) +
 *     in-context on every commercial page (insurance / telehealth).
 *   - The SVG category icon set is preserved unchanged.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage } from '@carloOS/ui'
// Live insurance-reimbursement estimator embedded on the homepage so the
// first screens are a tool you use, not a link to one (premium gate 3).
import { InsuranceReimbursementEstimator } from '../components/visual/InsuranceReimbursementEstimator'
import { SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'

const homeSchema = combineSchemas(
  buildOrganizationSchema({ siteId: 'vets-co', name: 'Vets.co', url: 'https://vets.co' }),
  buildWebSiteSchema({ siteId: 'vets-co', name: 'Vets.co', url: 'https://vets.co' }),
)

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Find a Vet. Read the Guidelines.',
  description:
    'Find a vet. Read the guidelines. Research-anchored pet-health references and an emergency triage card — grounded in AVMA, AAHA, and ACVIM material.',
  path: '/',
  type: 'website',
})

// ── Inline SVG icon set — clinical line illustration, no emoji (preserved) ──

type CategoryIcon =
  | 'find-a-vet'
  | 'health-library'
  | 'breed-health'
  | 'telehealth'
  | 'pet-insurance'
  | 'emergency-triage'

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
    case 'find-a-vet':
      // Map pin with a small cross — locate-a-clinic motif
      return (
        <svg {...common}>
          <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
          <path d="M12 7v6" />
          <path d="M9 10h6" />
        </svg>
      )
    case 'health-library':
      // Open reference book — the library voice
      return (
        <svg {...common}>
          <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1V5z" />
          <path d="M12 6v14" />
        </svg>
      )
    case 'breed-health':
      // Abstract DNA double helix — breed-genetic motif
      return (
        <svg {...common}>
          <path d="M7 3c0 4 10 6 10 10s-10 4-10 8" />
          <path d="M17 3c0 4-10 6-10 10s10 4 10 8" />
          <path d="M9 6h6" />
          <path d="M9 18h6" />
        </svg>
      )
    case 'telehealth':
      // Monitor with a chat bubble — video-consult motif
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" rx="2" />
          <path d="M9 20h6" />
          <path d="M12 16v4" />
          <circle cx="10" cy="9.5" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="14" cy="9.5" r="0.6" fill="currentColor" stroke="none" />
          <path d="M10 11.5c.5.6 1.2.9 2 .9s1.5-.3 2-.9" />
        </svg>
      )
    case 'pet-insurance':
      // Shield with check — coverage / financial protection
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M8.5 12l2.5 2.5L16 9.5" />
        </svg>
      )
    case 'emergency-triage':
      // Triangle warning + cross — emergency-triage card motif
      return (
        <svg {...common}>
          <path d="M12 4l9 16H3z" />
          <path d="M12 10v4" />
          <circle cx="12" cy="17" r="0.7" fill="currentColor" stroke="none" />
        </svg>
      )
  }
}

// Brand mark — a stethoscope-bell glyph, used as a hero ornament.
function HeroMarkSvg() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 4v9a5 5 0 0 0 10 0V4" />
      <path d="M9 4h2" />
      <path d="M17 4h2" />
      <path d="M14 18v3a4 4 0 0 0 4 4h2" />
      <circle cx="23" cy="22" r="2.5" />
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

// ── Page data ──────────────────────────────────────────────────────────────

const TRUST_CLAIMS = [
  'Research-anchored content',
  'AAHA-aligned guidance',
  'No paid placements',
  'Insurance & telehealth compared',
]

// Owner-path category cards. The SVG icon set is preserved (Vets uses clinical
// line icons, not photos, on this grid — same as before).
const CATEGORIES: {
  icon: CategoryIcon
  title: string
  desc: string
  href: string
}[] = [
  {
    icon: 'find-a-vet',
    title: 'Find a Vet',
    desc:
      'Browse veterinary specialties by city and discipline — neurology, cardiology, oncology, ophthalmology, and more.',
    href: '/find-a-vet',
  },
  {
    icon: 'health-library',
    title: 'Health Library',
    desc:
      'Condition references on emergencies, infectious disease, chronic management, and senior care — every claim sourced.',
    href: '/health',
  },
  {
    icon: 'breed-health',
    title: 'Breed Health',
    desc:
      'Breed-specific health profiles covering screening tests, hereditary disease, and lifespan management.',
    href: '/breeds/golden-retriever-health',
  },
  {
    icon: 'telehealth',
    title: 'Telehealth',
    desc:
      'Honest comparisons of veterinary telehealth platforms — availability, credentials, cost, and what they will and will not treat remotely.',
    href: '/telehealth',
  },
  {
    icon: 'pet-insurance',
    title: 'Pet Insurance',
    desc:
      'Plan comparisons graded on payout speed, exclusion language, and waiting periods — not on commission rate.',
    href: '/reviews/best-pet-insurance',
  },
  {
    icon: 'emergency-triage',
    title: 'Emergency Triage',
    desc:
      'The fifteen-signs reference for pet owners — when to call a vet, when to drive to the ER, and what to do in the car.',
    href: '/health/emergency-signs',
  },
]

// Image-backed reference-desk entry points (REAL synced keys only — object /
// architecture / animal imagery, no staged clinical scenes).
const IMAGE_DESKS: {
  href: string
  eyebrow: string
  title: string
  desc: string
  cta: string
  manifestKey: string
  imageAlt: string
}[] = [
  {
    href: '/find-a-vet',
    eyebrow: 'Locate a clinic',
    title: 'Find a Vet',
    desc: 'Specialists by city and discipline — neurology to oncology.',
    cta: 'Browse the directory',
    manifestKey: 'vets-co:find-a-vet-hero',
    imageAlt: 'The exterior entrance of a clinic building',
  },
  {
    href: '/health',
    eyebrow: 'Read the guidelines',
    title: 'Health Library',
    desc: 'Condition references — every claim sourced to a primary paper.',
    cta: 'Open the library',
    manifestKey: 'vets-co:health-hero',
    imageAlt: 'Reference books arranged on a library shelf',
  },
  {
    href: '/breeds/golden-retriever-health',
    eyebrow: 'Know the breed',
    title: 'Breed Health',
    desc: 'Screening tests, hereditary disease, lifespan management.',
    cta: 'See breed profiles',
    manifestKey: 'vets-co:category-breeds',
    imageAlt: 'A purebred dog in natural light',
  },
]

const FEATURED_GUIDES: {
  href: string
  eyebrow: string
  title: string
  teaser: string
  readTime: string
  /**
   * Optional cover photo. Stored as a manifest key so attribution renders
   * automatically via StockImage. Only breed-specific cards carry a portrait —
   * never an actor-as-vet shot, never a staged exam scene.
   */
  manifestKey?: string
  imageAlt?: string
}[] = [
  {
    href: '/health/emergency-signs',
    eyebrow: 'Emergency Triage',
    title: 'Fifteen Signs Your Pet Needs Emergency Care',
    teaser:
      'A field-reference list every owner should read before the moment they need it. Breathing patterns, gum color, abdominal posture, and the calls that should not wait until morning.',
    readTime: '11 min',
    // No photo — emergency-triage content stays text-led; a photo would
    // editorialize an emergency unhelpfully.
  },
  {
    href: '/reviews/best-pet-insurance',
    eyebrow: 'Insurance',
    title: 'Pet Insurance, Compared on Payout Behavior',
    teaser:
      'Most rankings score policies on premium and brand. We compare on payout speed, exclusion language, bilateral-condition handling, and the renewal-year footnotes that quietly raise rates.',
    readTime: '18 min',
    // No photo — financial comparison content stays text/data-led.
  },
  {
    href: '/breeds/golden-retriever-health',
    eyebrow: 'Breed Health',
    title: 'Golden Retriever Health',
    teaser:
      'The most common hereditary risks in the modern Golden line — hemangiosarcoma, lymphoma, hip dysplasia, subaortic stenosis — plus the screening tests that change outcomes if you start early.',
    readTime: '14 min',
    manifestKey: 'dog-com:breed-golden-retriever',
    imageAlt: 'A Golden Retriever portrait in natural light',
  },
  {
    href: '/health/dog-vaccinations-guide',
    eyebrow: 'Preventive Care',
    title: 'Dog Vaccinations, Year by Year',
    teaser:
      'Core vs. lifestyle vaccines, current AAHA intervals, titer testing, and the three vaccines that get questioned the most by experienced clinicians.',
    readTime: '13 min',
    // No photo — vaccine schedule content stays text/data-led; a generic
    // dog photo here would imply a clinical context we are not staging.
  },
]

// Strip StockImage's outer margins (it renders my-8 on both the <figure> and
// the pending-sync placeholder <div>) so it fills a tile edge-to-edge.
const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

// ── Page ───────────────────────────────────────────────────────────────────

export default function VetsHomePage() {
  return (
    <>
      <SchemaScript schema={homeSchema} />

      {/* ── HERO: full-bleed IMAGE-FIRST navy masthead ───────────────────
          The hero photo (vets-co:hero — a stethoscope on warm wood, object-led,
          NO human subjects) is integrated INTO the deep-navy masthead as a
          full-bleed background so it is the first + dominant thing in the
          viewport on EVERY breakpoint (~60vh mobile / ~78vh desktop). The H1,
          tagline, and primary CTA overlay a dark gradient scrim so copy stays
          legible over the photo. subtleCredit keeps attribution present +
          clickable (QC §1). No staged clinical scene; no human subject. */}
      <section className="relative overflow-hidden bg-brand-dark">
        {/* Full-bleed hero photo — first + dominant. Inline variant with
            FILL_IMAGE overrides so the photo fills this absolute full-height
            wrapper. */}
        <div
          className={`absolute inset-0 ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto] [&_figure>div]:h-full [&_figure>div]:!rounded-none [&>div]:h-full`}
        >
          <StockImage
            manifestKey="vets-co:hero"
            alt="A stethoscope resting on warm wood — clinical reference, no human subjects"
            aspect="16:9"
            variant="inline"
            priority
            subtleCredit
          />
        </div>

        {/* Dark gradient scrim — bottom-up so the overlaid copy stays legible. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-brand-dark/35"
        />
        {/* Brand wash for depth — brass top-right + teal bottom-left, matching
            the prior masthead's environmental field. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-90"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 65% 55% at 85% 12%, rgba(182,136,48,0.20) 0%, transparent 60%)',
              'radial-gradient(ellipse 75% 70% at 8% 95%, rgba(10,107,94,0.45) 0%, transparent 60%)',
            ].join(','),
          }}
        />
        {/* Fine vertical grain — preserved masthead texture. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)',
          }}
        />

        {/* Overlaid copy + primary action — pinned to the bottom of the photo */}
        <div className="relative z-10 mx-auto max-w-container-wide flex flex-col justify-end min-h-[60vh] sm:min-h-[68vh] lg:min-h-[78vh] px-container-sm sm:px-container pt-16 pb-9 sm:pb-12">
          <div className="max-w-3xl">
            {/* Stethoscope mark + eyebrow */}
            <div
              className="flex items-center gap-3 mb-5"
              style={{ color: 'var(--brand-accent-light)' }}
            >
              <HeroMarkSvg />
              <span className="h-px w-8" style={{ background: 'var(--brand-accent)' }} aria-hidden="true" />
              <span className="text-2xs font-bold uppercase tracking-eyebrow">
                The Pet-Owner Reference
              </span>
            </div>

            {/* H1 — Libre Baskerville 700 */}
            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.05] mb-4"
              style={{
                fontSize: 'clamp(38px, 6vw, 74px)',
                textShadow: '0 2px 18px rgba(0,0,0,0.45)',
              }}
            >
              Find a vet. Read the guidelines.
            </h1>

            {/* Italic Baskerville tagline — magazine masthead voice */}
            <p
              className="font-display italic mb-6"
              style={{
                color: 'var(--brand-accent-light)',
                fontSize: 'clamp(18px, 2vw, 26px)',
                lineHeight: 1.3,
                maxWidth: '44rem',
                textShadow: '0 1px 12px rgba(0,0,0,0.5)',
              }}
            >
              The pet-owner&apos;s reference desk for veterinary medicine.
            </p>

            {/* Positioning paragraph */}
            <p
              className="text-base lg:text-lg font-light text-white/85 leading-relaxed max-w-2xl mb-8"
              style={{ textShadow: '0 1px 10px rgba(0,0,0,0.5)' }}
            >
              We translate professional guidance — AVMA position statements, AAHA
              guidelines, ACVIM consensus papers — into plain English for the
              person making the decision at the kitchen table. A directory by
              specialty, condition references for every common emergency, breed
              risk profiles, and pet insurance compared on payout behavior.
              Citations on every claim. No paid placements. No fake bylines.
            </p>

            {/* Primary + secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/find-a-vet"
                className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded no-underline transition-colors duration-200 hover:opacity-90 shadow-[0_6px_24px_rgba(10,107,94,0.4)]"
                style={{
                  background: 'var(--brand-primary-light)',
                  color: '#FFFFFF',
                }}
              >
                Find a vet near you
                <IconArrowRight />
              </Link>
              <Link
                href="/health/emergency-signs"
                className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold text-sm px-6 py-3.5 rounded no-underline hover:bg-white/20 hover:border-white/40 transition-colors duration-200"
              >
                Get the emergency triage card
                <IconArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── DARK TRUST BAR ──────────────────────────────────────────── */}
      <div
        className="px-container-sm sm:px-container py-5"
        style={{
          background: 'var(--brand-primary-dark)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-container-wide flex flex-wrap items-center justify-center sm:justify-between gap-x-8 gap-y-3">
          {TRUST_CLAIMS.map((item, i, arr) => (
            <span
              key={item}
              className="flex items-center text-2xs font-semibold uppercase tracking-eyebrow whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,0.85)' }}
            >
              <span
                aria-hidden="true"
                className="mr-2.5"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                ✓
              </span>
              {item}
              {i < arr.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden sm:inline mx-2 h-3 w-px"
                  style={{ background: 'rgba(255,255,255,0.18)' }}
                />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── REFERENCE-DESK ENTRY POINTS — image-backed tiles (REAL keys) ──
          Three image-led entry points using real synced photography
          (architecture / object / animal — no staged clinical scenes). Each
          tile carries a bottom-up scrim so the white label stays legible over
          the photo, plus subtleCredit for attribution (QC §1). */}
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-white)' }}
      >
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-center gap-3 mb-7">
            <span aria-hidden="true" className="h-px w-8" style={{ background: 'var(--brand-accent)' }} />
            <span className="text-2xs font-bold uppercase tracking-eyebrow" style={{ color: 'var(--brand-primary)' }}>
              Where are you starting?
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {IMAGE_DESKS.map((desk) => (
              <Link
                key={desk.href}
                href={desk.href}
                className={`group relative block rounded-md overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary hover:shadow-card-hover transition-all duration-300 ease-carloOS ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
              >
                {/* Real photo fills the tile */}
                <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
                  <StockImage
                    manifestKey={desk.manifestKey}
                    alt={desk.imageAlt}
                    aspect="3:4"
                    variant="inline"
                    subtleCredit
                  />
                </div>
                {/* Bottom-up scrim keeps the label legible over the photo */}
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/35 to-transparent" />
                {/* Label */}
                <div className="relative z-10 flex flex-col justify-end min-h-[230px] sm:min-h-[260px] p-5">
                  <div className="text-2xs font-bold tracking-eyebrow uppercase mb-1.5" style={{ color: 'var(--brand-accent-light)' }}>
                    {desk.eyebrow}
                  </div>
                  <h2 className="font-display font-bold text-white text-xl sm:text-2xl leading-tight mb-1.5">
                    {desk.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-3">
                    {desk.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-eyebrow text-white group-hover:gap-2.5 transition-all">
                    {desk.cta}
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── LIVE TOOL — insurance reimbursement estimator (premium gate 3) ── */}
      <section className="px-container-sm sm:px-container py-section" style={{ background: 'var(--brand-surface)' }}>
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Try it · Insurance reimbursement estimator
            </span>
          </div>
          <h2 className="font-display font-bold text-brand-dark tracking-tight mb-3" style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>
            What would pet insurance actually pay back?
          </h2>
          <p className="text-sm text-brand-text-mid mb-7 max-w-2xl leading-relaxed">
            Enter a bill, deductible, and reimbursement rate to see your real out-of-pocket cost —
            the NAIC/NAPHIA math, before you compare plans.
          </p>
          <InsuranceReimbursementEstimator />
        </div>
      </section>

      {/* ── CATEGORY GRID (6 cards, SVG icons preserved) ────────────── */}
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
                  style={{ background: 'var(--brand-accent)' }}
                />
                <span
                  className="text-2xs font-bold uppercase tracking-eyebrow"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Six Reference Desks
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
              Every section reads the same whether you arrived from a panic
              symptom search at 11pm or a Saturday-morning insurance comparison.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block p-7 rounded-md no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1 hover:shadow-card-hover"
                style={{
                  background: 'var(--brand-white)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                <div
                  className="mb-5"
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
                  Open
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

      {/* ── INSURANCE & COST PLANNING — image-backed band (REAL key) ──────
          Pairs the payout-behavior pitch with a real object photo
          (insurance paperwork + calculator — no human subject) so the band is
          image-rich without staging a clinical scene. */}
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-surface)' }}
      >
        <div className="mx-auto max-w-container-wide grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span aria-hidden="true" className="h-px w-8" style={{ background: 'var(--brand-accent)' }} />
              <span className="text-2xs font-bold uppercase tracking-eyebrow" style={{ color: 'var(--brand-primary)' }}>
                Insurance & cost planning
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-text-dark tracking-tight text-3xl sm:text-4xl mb-4">
              Plan for the bill before it arrives.
            </h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-6 max-w-xl">
              Emergency visits routinely run $1,500–$5,000, and chronic conditions
              can cost hundreds a month for years. We compare pet insurance on the
              metrics that decide whether a policy pays the bill — payout speed,
              exclusion language, bilateral-condition handling, and the
              renewal-year footnotes that quietly raise rates.
            </p>
            <Link
              href="/reviews/best-pet-insurance"
              className="inline-flex items-center gap-2 font-semibold text-sm px-7 py-3.5 rounded no-underline transition-colors duration-200 hover:opacity-90"
              style={{ background: 'var(--brand-primary)', color: '#FFFFFF' }}
            >
              Compare pet insurance plans
              <IconArrowRight />
            </Link>
          </div>

          {/* Real object photo — insurance paperwork + calculator */}
          <Link
            href="/reviews/best-pet-insurance"
            className={`group relative block rounded-md overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary transition-all duration-300 ease-carloOS min-h-[240px] ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
          >
            <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage
                manifestKey="vets-co:insurance-hero"
                alt="Insurance paperwork and a calculator on a desk"
                aspect="4:3"
                variant="inline"
                subtleCredit
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/25 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[240px] p-5">
              <div className="text-2xs font-bold uppercase tracking-eyebrow mb-1.5" style={{ color: 'var(--brand-accent-light)' }}>
                Plans compared
              </div>
              <div className="font-display font-bold text-white text-lg leading-tight">
                Graded on payout behavior, not commission rate.
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── TOOLS & REFERENCES (dark band, SVG icons preserved) ─────── */}
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-primary-dark)' }}
      >
        <div className="mx-auto max-w-container-wide">
          {/* Section header */}
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span
                  aria-hidden="true"
                  className="h-px w-8"
                  style={{ background: 'var(--brand-accent-light)' }}
                />
                <span
                  className="text-2xs font-bold uppercase tracking-eyebrow"
                  style={{ color: 'var(--brand-accent-light)' }}
                >
                  Tools &amp; References
                </span>
              </div>
              <h2
                className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-white"
                style={{ lineHeight: 1.1 }}
              >
                Use the tools. Know the terms.
              </h2>
              <p
                className="text-sm mt-2 max-w-xl"
                style={{ color: 'rgba(255,255,255,0.60)' }}
              >
                Interactive calculators, a printable triage card, and a plain-English
                clinical glossary built for owners making decisions at the kitchen table.
              </p>
            </div>
            <Link
              href="/tools"
              className="text-sm font-semibold no-underline hover:underline whitespace-nowrap"
              style={{ color: 'var(--brand-accent-light)' }}
            >
              All tools &rarr;
            </Link>
          </div>

          {/* Three tool/reference cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

            {/* Card 1 -- Insurance Reimbursement Estimator (standalone page) */}
            <Link
              href="/tools/insurance-reimbursement-estimator"
              className="group block rounded-md p-7 no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              {/* Shield-with-columns SVG -- finance/protection motif, clinical line style */}
              <div className="mb-5" style={{ color: 'var(--brand-accent-light)' }}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
                  <path d="M9 12h2" />
                  <path d="M13 12h2" />
                  <path d="M9 15h2" />
                  <path d="M13 15h2" />
                  <path d="M10 9h4" />
                </svg>
              </div>
              <div
                className="text-2xs font-bold uppercase tracking-eyebrow mb-3"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                Calculator
              </div>
              <h3 className="font-display font-bold text-xl leading-snug mb-3 text-white">
                Insurance Reimbursement Estimator
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'rgba(255,255,255,0.60)' }}
              >
                Enter premium, deductible, reimbursement rate, and annual cap to see your
                real out-of-pocket cost before you compare plans. NAIC/NAPHIA math, no signup.
              </p>
              <span
                className="inline-flex items-center text-xs font-semibold uppercase tracking-eyebrow"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                Open estimator
                <span
                  aria-hidden="true"
                  className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </span>
            </Link>

            {/* Card 2 -- Emergency Triage Card (dedicated page /emergency-triage-card) */}
            <Link
              href="/emergency-triage-card"
              className="group block rounded-md p-7 no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              {/* Triangle-warning SVG -- triage/emergency motif (matches CategoryIconSvg 'emergency-triage') */}
              <div className="mb-5" style={{ color: 'var(--brand-accent-light)' }}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 4l9 16H3z" />
                  <path d="M12 10v4" />
                  <circle cx="12" cy="17" r="0.7" fill="currentColor" stroke="none" />
                </svg>
              </div>
              <div
                className="text-2xs font-bold uppercase tracking-eyebrow mb-3"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                Reference Card
              </div>
              <h3 className="font-display font-bold text-xl leading-snug mb-3 text-white">
                Emergency Triage Card
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'rgba(255,255,255,0.60)' }}
              >
                Wallet and fridge card: species vital-sign ranges, which signs warrant
                an ER visit, which are same-day, and what to do in the car. Printable. Free.
              </p>
              <span
                className="inline-flex items-center text-xs font-semibold uppercase tracking-eyebrow"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                Get the card
                <span
                  aria-hidden="true"
                  className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </span>
            </Link>

            {/* Card 3 -- Clinical Glossary (/glossary) */}
            <Link
              href="/glossary"
              className="group block rounded-md p-7 no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              {/* Open-book SVG -- glossary/reference motif (matches CategoryIconSvg 'health-library') */}
              <div className="mb-5" style={{ color: 'var(--brand-accent-light)' }}>
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1V5z" />
                  <path d="M12 6v14" />
                </svg>
              </div>
              <div
                className="text-2xs font-bold uppercase tracking-eyebrow mb-3"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                Glossary
              </div>
              <h3 className="font-display font-bold text-xl leading-snug mb-3 text-white">
                Pet Health &amp; Insurance Glossary
              </h3>
              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: 'rgba(255,255,255,0.60)' }}
              >
                Plain-English definitions for veterinary and insurance terms:
                deductible, triage, bilateral conditions, ACVIM, referral, and 60+
                more -- every entry sourced.
              </p>
              <span
                className="inline-flex items-center text-xs font-semibold uppercase tracking-eyebrow"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                Browse glossary
                <span
                  aria-hidden="true"
                  className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </span>
            </Link>

          </div>
        </div>
      </section>

      {/* ── WHY VETS.CO — positioning band ──────────────────────────── */}
      <section
        className="px-container-sm sm:px-container py-section relative overflow-hidden"
        style={{ background: 'var(--brand-primary)' }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 55% 60% at 82% 18%, rgba(182,136,48,0.20) 0%, transparent 60%)',
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
                Why Vets.co
              </span>
            </div>
            <h2
              className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-white"
              style={{ lineHeight: 1.14 }}
            >
              We translate professional guidance
              <br />
              <em
                className="font-display italic"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                for the people who own the animal.
              </em>
            </h2>
          </div>

          <div className="text-white/85 leading-relaxed space-y-5">
            <p className="text-base lg:text-lg">
              We are not a hospital. We are not a directory of paid listings.
              We are not a referral service. We are an editorial reference desk
              that reads the AVMA position statements, the AAHA preventive-care
              guidelines, and the ACVIM consensus papers — then rewrites them
              for the owner who needs an answer tonight.
            </p>
            <p className="text-base lg:text-lg">
              Where AAHA and AVMA write for the profession, we write for the
              kitchen table. Where commercial pet-health sites optimize for
              affiliate revenue, we evaluate insurance on payout speed and
              exclusion language — the metrics that decide whether the policy
              pays the bill. Every clinical claim cites a primary source.
            </p>

            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 pt-4">
              {[
                'Citation-anchored content',
                'AAHA-aligned guidance',
                'No paid placements in editorial',
                'Affiliate disclosure on every commercial link',
                'No fabricated bylines',
                'No fabricated credential stamps',
              ].map((claim) => (
                <li
                  key={claim}
                  className="flex items-start text-sm text-white/85"
                >
                  <span
                    aria-hidden="true"
                    className="mr-3 mt-0.5 inline-block flex-shrink-0"
                    style={{ color: 'var(--brand-accent-light)' }}
                  >
                    ✓
                  </span>
                  {claim}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FEATURED GUIDES (cornerstones) ──────────────────────────── */}
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
                  style={{ background: 'var(--brand-accent)' }}
                />
                <span
                  className="text-2xs font-bold uppercase tracking-eyebrow"
                  style={{ color: 'var(--brand-primary)' }}
                >
                  Cornerstone References
                </span>
              </div>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-brand-text-dark">
                The articles we maintain
              </h2>
            </div>
            <Link
              href="/health"
              className="text-sm font-semibold no-underline hover:underline"
              style={{ color: 'var(--brand-primary)' }}
            >
              Browse the full library →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {FEATURED_GUIDES.map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="group block rounded-md overflow-hidden no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
                style={{
                  background: 'var(--brand-surface)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                {/* Cover photo — manifest-backed breed portrait via StockImage,
                    only on cards where a single subject makes editorial sense
                    (not on emergency-triage, insurance, or vaccine-schedule
                    cards, which stay text-led per the Vets.co playbook). */}
                {art.manifestKey ? (
                  <div className="[&>figure]:my-0 [&>figure]:rounded-none overflow-hidden">
                    <StockImage manifestKey={art.manifestKey} alt={art.imageAlt} aspect="16:9" subtleCredit />
                  </div>
                ) : null}
                <div className="p-7 lg:p-8">
                <span
                  aria-hidden="true"
                  className="block h-px w-10 mb-5"
                  style={{ background: 'var(--brand-accent)' }}
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
                    className="text-xs font-semibold uppercase tracking-eyebrow"
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
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE — emergency triage card lead magnet ──────── */}
      {process.env.NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED === 'true' && (
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <div className="mx-auto max-w-container">
          <EmailCapture
            variant="section"
            siteId="vets-co"
            title="The Emergency Triage Card"
            subtitle="A one-page reference: the fifteen signs that mean drive to the ER, the four that mean call your vet by morning, and what to do in the car. Free for subscribers."
            ctaText="Get the card"
            source="homepage-triage-card"
            perks={[
              'One PDF, one page',
              'Citation-anchored',
              'No paid placements',
              'Unsubscribe anytime',
            ]}
          />
        </div>
      </section>
      )}

      {/* ── PHOTO ATTRIBUTION — restrained credit, Unsplash hygiene ─── */}
      <aside
        className="px-container-sm sm:px-container py-6"
        style={{
          background: 'var(--brand-primary-dark)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
        aria-label="Photo credits"
      >
        <p
          className="mx-auto max-w-container-wide text-2xs uppercase tracking-eyebrow"
          style={{ color: 'rgba(255,255,255,0.60)' }}
        >
          Photography: contributors on{' '}
          <a
            href="https://unsplash.com"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
            style={{ color: 'rgba(255,255,255,0.80)' }}
          >
            Unsplash
          </a>
          . Used under the Unsplash License. Vets.co does not stage clinical
          scenes; medical imagery, when added, will be sourced from NIH /
          CDC / AVMA libraries with attribution.
        </p>
      </aside>
    </>
  )
}
