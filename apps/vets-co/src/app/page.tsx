/**
 * Vets.co Homepage — /
 * Server component. Magazine-quality design pass — clinical authority feel.
 * Libre Baskerville (display) + Manrope (body) via next/font.
 *
 * Brand position: sits between AAHA / AVMA (institutional medical organisations)
 * and 1-800-PetMeds (commercial). Research-anchored, owner-friendly.
 *
 * No real photography — all hero treatments are CSS washes per QC-STANDARDS §1.
 * No fake credentialed authors. No "our doctors" claims. No invented bylines.
 */

import type { Metadata } from 'next'
import Image from 'next/image'
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

// ── Inline SVG icon set — clinical line illustration, no emoji ──────────────

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
      width="44"
      height="44"
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

// ── Page data ──────────────────────────────────────────────────────────────

const TRUST_CLAIMS = [
  'Research-anchored content',
  'AAHA-aligned guidance',
  'No paid placements',
  'Insurance & telehealth compared',
]

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

const FEATURED_GUIDES: {
  href: string
  eyebrow: string
  title: string
  teaser: string
  readTime: string
  /**
   * Optional cover photo. Per the COO photo-sourcing playbook, Vets.co
   * uses photography sparingly and avoids clinical-scene clichés. Only
   * breed-specific cards may carry a verified breed portrait — never an
   * actor-as-vet shot, never a fake exam scene. Photo IDs reuse the dog
   * breed CDN URLs already shipped on Dog.com (verified-in-production).
   */
  image?: string
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
    image:
      'https://images.unsplash.com/photo-1552053831-71594a27632d?w=900&q=80&auto=format&fit=crop',
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

// ── Page ───────────────────────────────────────────────────────────────────

export default function VetsHomePage() {
  return (
    <>
      <SchemaScript schema={homeSchema} />
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark">
        {/* CSS-only environmental wash — no clinical photography per QC §1.
            Two radial gradients (warm brass top-right, deep teal bottom-left)
            over the navy masthead, with a fine vertical grain. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 65% 55% at 82% 20%, rgba(182,136,48,0.16) 0%, transparent 60%)',
              'radial-gradient(ellipse 75% 65% at 10% 92%, rgba(10,107,94,0.40) 0%, transparent 60%)',
              'linear-gradient(180deg, rgba(12,31,44,0.0) 0%, rgba(12,31,44,0.55) 95%)',
            ].join(','),
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)',
          }}
        />

        {/* TODO(photography): hero slot intentionally CSS-only until an
            abstract clinical photograph is sourced and verified per the
            COO photo-sourcing playbook (ops/handoffs/2026-05-29). The
            playbook's Vets.co guidance prohibits:
              - generic vet-with-puppy stock cliché
              - any image that implies a real clinical scene with real staff
            Acceptable directions when a verified Unsplash CDN URL exists:
              - stethoscope on warm wood (texture-led, no humans)
              - dim clinic interior (architectural, no humans)
              - vector medical diagrams (Wikimedia Commons, with attribution)
            Until then the radial-wash field is honest and preserves the
            clinical-reference voice. Do not paste an unverified URL here. */}

        <div className="relative z-10 mx-auto max-w-container-wide px-container-sm sm:px-container py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Stethoscope mark + eyebrow */}
            <div
              className="flex items-center gap-3 mb-7"
              style={{ color: 'var(--brand-accent-light)' }}
            >
              <HeroMarkSvg />
              <span className="h-px w-8" style={{ background: 'var(--brand-accent)' }} aria-hidden="true" />
              <span className="text-2xs font-bold uppercase tracking-eyebrow">
                The Pet-Owner Reference
              </span>
            </div>

            {/* H1 — Libre Baskerville 700, generous size */}
            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.04] mb-6"
              style={{ fontSize: 'clamp(44px, 6.4vw, 78px)' }}
            >
              Vets.co
            </h1>

            {/* Italic Baskerville tagline — magazine masthead voice */}
            <p
              className="font-display italic mb-8"
              style={{
                color: 'var(--brand-accent-light)',
                fontSize: 'clamp(20px, 2.1vw, 28px)',
                lineHeight: 1.3,
                maxWidth: '44rem',
              }}
            >
              Find a vet. Read the guidelines.
            </p>

            {/* 80-word positioning paragraph */}
            <p className="text-base lg:text-lg font-light text-white/80 leading-relaxed max-w-2xl mb-9">
              Vets.co is the pet-owner&apos;s reference desk for veterinary medicine.
              We translate professional guidance — AVMA position statements, AAHA
              guidelines, ACVIM consensus papers — into plain English for the
              person who has to make the decision at the kitchen table. A
              directory organized by veterinary specialty, condition references for
              every common emergency, breed-specific risk profiles, and pet
              insurance compared on payout behavior. Citations on every claim.
              No paid placements. No fake bylines.
            </p>

            {/* Primary + secondary CTAs */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link
                href="/find-a-vet"
                className="inline-flex items-center font-semibold text-sm px-7 py-3.5 rounded no-underline transition-colors duration-200 hover:opacity-90"
                style={{
                  background: 'var(--brand-primary-light)',
                  color: '#FFFFFF',
                }}
              >
                Find a vet near you
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/health/emergency-signs"
                className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors"
              >
                Get the emergency triage card
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

      {/* ── HERO PHOTO — clinical/equipment, no staged scenes, manifest-managed ── */}
      <div
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-white)' }}
      >
        <div className="mx-auto max-w-container-wide">
          <StockImage manifestKey="vets-co:hero" priority aspect="16:9" variant="wide" />
        </div>
      </div>

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

      {/* ── LIVE TOOL — insurance reimbursement estimator (premium gate 3) ── */}
      <section className="px-container-sm sm:px-container py-section" style={{ background: 'var(--brand-white)' }}>
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
      </section>

      {/* ── CATEGORY GRID (6 cards) ─────────────────────────────────── */}
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
                {/* Cover photo — verified Unsplash breed portrait, only on
                    cards where a single subject makes editorial sense (not
                    on emergency-triage, insurance, or vaccine-schedule
                    cards, which stay text-led per the Vets.co playbook). */}
                {art.image && art.imageAlt ? (
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={art.image}
                      alt={art.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-carloOS group-hover:scale-[1.03]"
                    />
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
          Breed photography: contributors on{' '}
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
