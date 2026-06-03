/**
 * Dog.com Homepage — / (Owner's Operating System)
 *
 * Image-led, mobile-first reference rebuild (v2, 2026-06-03). Carlo rejected
 * v1 for reading "dark text-first" on a phone: the hero photo was hidden on
 * mobile (`hidden lg:block`). v2 fixes that — a strong dog photo is above the
 * fold on EVERY breakpoint, owner-path entry points are image-backed tiles,
 * and every major lower section carries real dog imagery instead of being a
 * pure text wall.
 *
 * Reused routes (all verified to exist on origin/main):
 *   /breeds, /breeds/[slug], /breeds/[slug]/feeding, /breeds/[slug]/health
 *   /health, /health/dog-symptoms-guide, /health/dog-vaccinations,
 *     /health/senior-dog-care, /health/dog-dental-care, /health/dog-anxiety,
 *     /health/dog-allergies
 *   /nutrition, /nutrition/weight-management, /nutrition/wsava-explained,
 *     /nutrition/puppy-nutrition
 *   /training, /training/puppy-schedule, /training/dog-socialization-window
 *   /reviews, /reviews/best-dry-dog-food, /reviews/best-pet-insurance,
 *     /reviews/best-large-breed-dog-food, /reviews/best-flea-tick-prevention,
 *     /reviews/best-joint-supplements, /reviews/best-dental-chews
 *   /puppy-schedule (lead magnet)
 *   /guides/dog-body-condition-score, /guides/dog-spay-neuter-timing
 *   /find-a-vet, /disclosure, /editorial-standards
 *
 * Image strategy (QC §1 + Unsplash/Pexels TOS):
 *   - All imagery comes from the committed manifest via <StockImage>. No
 *     hardcoded URLs (trust-guard blocks images.unsplash.com).
 *   - Prime visual areas (hero + image-backed tiles) pass `subtleCredit` so
 *     attribution stays present + clickable but unobtrusive.
 *   - Every text-over-image surface has a gradient scrim so copy stays legible
 *     whether the manifest entry is a real photo or a neutral placeholder.
 *
 * Trust posture (QC §1):
 *   - No fake authority. "Sourced" and "research-based" only; no "expert" claims
 *   - No "Products Reviewed" — softened to "Products Compared"
 *   - No fake testing. No fake vets. No AI-generated humans.
 *   - Editorial byline: "Dog.com Editorial"
 *   - FTC affiliate disclosure preserved in footer (Footer component) + every
 *     review page (already-shipped AffiliateDisclosure component)
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage } from '@carloOS/ui'
import { SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'
// Live decision wizard embedded on the homepage so the flagship's first
// screens are a product you use, not links to tools (premium gate 3).
import { WhichPetWizard } from './which-pet/wizard-client'

const homeSchema = combineSchemas(
  buildOrganizationSchema({ siteId: 'dog-com', name: 'Dog.com', url: 'https://dog.com' }),
  buildWebSiteSchema({ siteId: 'dog-com', name: 'Dog.com', url: 'https://dog.com' }),
)

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog.com — The Owner\'s Operating System for Your Dog',
  description:
    'Breed risks, health decisions, nutrition, training, insurance, and product guides — built to help owners decide, not just read.',
  path: '/',
  type: 'website',
})

// ─── Owner-path cards (above the fold) ──────────────────────────────────────
// The 5 most common reasons someone arrives. Each routes to existing content
// (or, for the symptom path, to the symptoms guide until /ask MVP ships).
// v2: each card is image-backed via a dog-com:category-* manifest key, with a
// dark bottom-up scrim so the white label stays legible over any photo OR the
// neutral placeholder.

const OWNER_PATHS = [
  {
    eyebrow: 'Is something wrong?',
    title: 'Health & Symptoms',
    desc: 'Symptoms by urgency — when to call the vet.',
    href: '/symptoms',
    cta: 'Start with symptoms',
    manifestKey: 'dog-com:category-health',
    imageAlt: 'Dog being checked for health symptoms',
    tone: 'urgent' as const,
  },
  {
    eyebrow: 'I have a specific breed',
    title: 'Breed Risk Center',
    desc: 'Lifespan, hereditary risk, screening, diet by breed.',
    href: '/breeds',
    cta: 'Find your breed',
    manifestKey: 'dog-com:category-breeds',
    imageAlt: 'Dog breed portrait',
    tone: 'primary' as const,
  },
  {
    eyebrow: 'I have a new puppy',
    title: 'Puppy First-Year Roadmap',
    desc: 'Vaccines, feeding, crate training, the 8-16 week plan.',
    href: '/puppy-schedule',
    cta: 'See the puppy roadmap',
    manifestKey: 'dog-com:category-puppy',
    imageAlt: 'Puppy in its first weeks',
    tone: 'primary' as const,
  },
  {
    eyebrow: 'I have a senior dog',
    title: 'Senior Dog Care Hub',
    desc: 'Pain, mobility, kidney, weight, and diet after age 7.',
    href: '/health/senior-dog-care',
    cta: 'Senior care guidance',
    manifestKey: 'dog-com:category-guides',
    imageAlt: 'Senior dog resting',
    tone: 'primary' as const,
  },
  {
    eyebrow: 'I\'m deciding on a product',
    title: 'Product Comparison Guides',
    desc: 'Food, insurance, flea/tick — compared, not ad-ranked.',
    href: '/reviews',
    cta: 'Browse product guides',
    manifestKey: 'dog-com:category-reviews',
    imageAlt: 'Dog products compared',
    tone: 'primary' as const,
  },
]

// ─── Breed-risk featured (6 portraits — visual grid) ─────────────────────────

const FEATURED_BREEDS = [
  {
    name: 'Golden Retriever',
    type: 'Sporting · Large',
    keyRisk: 'Cancer risk · hip dysplasia',
    href: '/breeds/golden-retriever',
    manifestKey: 'dog-com:breed-golden-retriever',
    imageAlt: 'Golden Retriever',
  },
  {
    name: 'Labrador Retriever',
    type: 'Sporting · Large',
    keyRisk: 'Hip dysplasia · obesity',
    href: '/breeds/labrador-retriever',
    manifestKey: 'dog-com:breed-labrador-retriever',
    imageAlt: 'Labrador Retriever',
  },
  {
    name: 'French Bulldog',
    type: 'Non-Sporting · Small',
    keyRisk: 'Brachycephalic syndrome · IVDD',
    href: '/breeds/french-bulldog',
    manifestKey: 'dog-com:breed-french-bulldog',
    imageAlt: 'French Bulldog',
  },
  {
    name: 'German Shepherd',
    type: 'Herding · Large',
    keyRisk: 'Hip dysplasia · degenerative myelopathy',
    href: '/breeds/german-shepherd',
    manifestKey: 'dog-com:breed-german-shepherd',
    imageAlt: 'German Shepherd',
  },
  {
    name: 'Beagle',
    type: 'Hound · Small',
    keyRisk: 'Obesity · ear infections · IVDD',
    href: '/breeds/beagle',
    manifestKey: 'dog-com:breed-beagle',
    imageAlt: 'Beagle',
  },
  {
    name: 'Poodle',
    type: 'Non-Sporting · Varies',
    keyRisk: 'Addison\'s · bloat · hip dysplasia',
    href: '/breeds/poodle',
    manifestKey: 'dog-com:breed-poodle',
    imageAlt: 'Poodle',
  },
]

// ─── Decision sections (replace the old magazine grid) ───────────────────────

const HEALTH_DECISIONS = [
  { title: 'Body condition scoring', desc: 'Visual + hands-on check for healthy weight (1-9 scale).', href: '/guides/dog-body-condition-score' },
  { title: 'Vaccination decisions', desc: 'Core vs. non-core, schedule by age, what each protects against.', href: '/health/dog-vaccinations' },
  { title: 'Spay/neuter timing', desc: 'What current evidence says about optimal timing by breed.', href: '/guides/dog-spay-neuter-timing' },
  { title: 'Dental care', desc: 'The most overlooked issue. What works, what\'s marketing.', href: '/health/dog-dental-care' },
  { title: 'Allergy guidance', desc: 'Food, environmental, atopic — what to track and discuss with your vet.', href: '/health/dog-allergies' },
  { title: 'Anxiety + separation', desc: 'Causes, evidence-based interventions, when behaviorist referral helps.', href: '/health/dog-anxiety' },
]

const FOOD_TOOLS = [
  { title: 'Best dry dog food', desc: 'WSAVA-compliant brands compared on manufacturing rigor.', href: '/reviews/best-dry-dog-food' },
  { title: 'Large-breed food', desc: 'Calcium, phosphorus, and growth-rate considerations.', href: '/reviews/best-large-breed-dog-food' },
  { title: 'Weight management', desc: 'How much to feed, body condition scoring, exercise plans.', href: '/nutrition/weight-management' },
  { title: 'WSAVA explained', desc: 'What the gold-standard nutrition guidelines actually mean.', href: '/nutrition/wsava-explained' },
]

const TRAINING_DECISIONS = [
  { title: 'Puppy schedule (8-16 weeks)', desc: 'Sleep, feeding, potty, socialization, vet visits by week.', href: '/puppy-schedule', badge: 'Free download' },
  { title: 'Socialization window', desc: 'The 3-14 week window that shapes adult temperament.', href: '/training/dog-socialization-window' },
  { title: 'All training methods', desc: 'Positive reinforcement, marker training, crate training, more.', href: '/training' },
]

const PRODUCT_GUIDES = [
  { title: 'Pet insurance', desc: 'Carriers compared on premium, deductible, exam fees, waiting periods.', href: '/reviews/best-pet-insurance' },
  { title: 'Flea & tick prevention', desc: 'Oral vs. topical, by region, efficacy data, side-effect profiles.', href: '/reviews/best-flea-tick-prevention' },
  { title: 'Joint supplements', desc: 'Glucosamine, chondroitin, MSM, fish oil — what evidence says.', href: '/reviews/best-joint-supplements' },
  { title: 'Dental chews', desc: 'VOHC-accepted options vs. marketing. Per-day cost.', href: '/reviews/best-dental-chews' },
]

// ─── Inline SVG icons (replace emoji; 24px, stroke=currentColor) ─────────────

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function IconCalorie({ className }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3c1.5 2 2.5 3.6 2.5 5.5a2.5 2.5 0 0 1-5 0" />
      <path d="M5 13a7 7 0 0 0 14 0c0-2-1-3.8-2.4-5.2" />
    </svg>
  )
}

function IconAge({ className }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

function IconGlossary({ className }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v16H5.5A1.5 1.5 0 0 1 4 18.5z" />
      <path d="M20 5.5A1.5 1.5 0 0 0 18.5 4H13v16h5.5a1.5 1.5 0 0 0 1.5-1.5z" />
    </svg>
  )
}

// Strip StockImage's outer margins (it renders my-8 on both the <figure> and
// the pending-sync placeholder <div>) so it fills a tile edge-to-edge.
const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

// ─── Page component ─────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={homeSchema} />
      {/* ── HERO: split-column masthead — image-led, mobile-first ──────────
          Mobile: H1 + primary action + a large hero photo are ALL within the
          first viewport (image is NOT hidden). Desktop: split column (text
          left, generous photo right). The hero photo carries subtleCredit. */}
      <section className="bg-brand-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 30% 30%, rgba(232,98,42,0.25) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-container-sm sm:px-container pt-10 sm:pt-16 pb-8">
          <div className="grid lg:grid-cols-[5fr_4fr] gap-7 lg:gap-10 items-center">
            {/* Left column — text + primary action */}
            <div className="order-1">
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-0.5 bg-brand-primary" />
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                  Dog.com &mdash; Owner&apos;s reference
                </span>
              </div>
              <h1
                className="font-display font-black text-white tracking-tighter leading-[1.05] mb-4"
                style={{ fontSize: 'clamp(32px, 5.5vw, 64px)' }}
              >
                Everything your dog needs you to know.
              </h1>
              <p className="text-base sm:text-lg font-light text-white/65 leading-relaxed max-w-xl mb-6">
                Decisions, not definitions. Pick where you are &mdash; symptoms, breed risks, a new
                puppy, a senior dog, or a product call &mdash; and we&apos;ll route you to sourced
                guidance.
              </p>
              {/* Primary action — above the fold on mobile */}
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/symptoms"
                  className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-brand-primary-light transition-colors duration-200"
                >
                  Start with symptoms
                  <IconArrowRight />
                </Link>
                <Link
                  href="/breeds"
                  className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/15 text-white font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-white/[0.14] hover:border-white/30 transition-colors duration-200"
                >
                  Find your breed
                  <IconArrowRight />
                </Link>
              </div>
            </div>

            {/* Right column — flagship photo, prominent on ALL breakpoints */}
            <div className="order-2">
              <div className={`rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.45)] ${FILL_IMAGE}`}>
                <StockImage
                  manifestKey="dog-com:hero"
                  alt="A happy, healthy dog"
                  aspect="4:3"
                  variant="wide"
                  priority
                  subtleCredit
                />
              </div>
            </div>
          </div>
        </div>

        {/* Owner-path cards — image-backed tiles, full width below the hero */}
        <div className="relative z-10 px-container-sm sm:px-container pb-16">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {OWNER_PATHS.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className={[
                  'group relative block rounded-xl overflow-hidden no-underline transition-all duration-200',
                  'ring-1',
                  path.tone === 'urgent'
                    ? 'ring-brand-primary/60 hover:ring-brand-primary'
                    : 'ring-white/10 hover:ring-white/30',
                ].join(' ')}
              >
                {/* Background image (fills the tile) */}
                <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}>
                  <StockImage
                    manifestKey={path.manifestKey}
                    alt={path.imageAlt}
                    aspect="3:4"
                    variant="inline"
                    subtleCredit
                  />
                </div>
                {/* Bottom-up scrim — keeps the label legible over any photo */}
                <div
                  aria-hidden="true"
                  className={[
                    'absolute inset-0 bg-gradient-to-t to-transparent',
                    path.tone === 'urgent' ? 'from-brand-primary/85 via-black/45' : 'from-black/85 via-black/30',
                  ].join(' ')}
                />
                {/* Label content */}
                <div className="relative z-10 flex flex-col justify-end min-h-[180px] sm:min-h-[210px] p-4">
                  <div className="text-2xs font-bold tracking-eyebrow uppercase text-white/85 mb-1">
                    {path.eyebrow}
                  </div>
                  <h2 className="font-display font-bold text-white text-sm sm:text-base leading-tight mb-1.5">
                    {path.title}
                  </h2>
                  <p className="hidden sm:block text-xs text-white/70 leading-relaxed mb-2">
                    {path.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-white group-hover:gap-2 transition-all">
                    {path.cta}
                    <IconArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUST BAR — softened (no "expert", no "reviewed") ──────────── */}
      <div className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-3 flex flex-wrap gap-x-6 gap-y-1.5 items-center">
        {[
          'Research-based health content',
          '50+ breed profiles with hereditary risk data',
          'Products compared, not paid placements',
          'Editorial standards in public',
        ].map((item, i) => (
          <span key={item} className="text-xs font-semibold text-brand-primary inline-flex items-center gap-2">
            {i > 0 && <span className="text-brand-primary/30">·</span>}
            {item}
          </span>
        ))}
      </div>

      {/* ── PUPPY LEAD-MAGNET BANNER (preserved) ───────────────────────── */}
      <Link
        href="/puppy-schedule"
        className="block bg-brand-dark border-b border-brand-border px-container-sm sm:px-container py-4 hover:bg-brand-dark/95 transition-colors duration-200 no-underline"
      >
        <div className="flex items-center justify-between gap-6 flex-wrap">
          <div className="flex items-center gap-4">
            <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-brand-primary/15 text-brand-primary shrink-0" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M8 3v3M16 3v3M4 9h16M9 13h2M9 16h6" />
              </svg>
            </span>
            <div>
              <div className="text-xs font-bold tracking-eyebrow uppercase text-brand-primary mb-0.5">Free for puppy owners</div>
              <div className="text-sm sm:text-base text-white font-semibold">
                Puppy Schedule, Weeks 8 to 16 — printable + 8-week email course
              </div>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-primary ml-auto sm:ml-0">
            Get the schedule
            <IconArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </Link>

      {/* ── LIVE TOOL — "which dog is right for you?" wizard (premium gate 3) ── */}
      <section className="bg-brand-white px-container-sm sm:px-container py-section border-b border-brand-border">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Try it · Breed match wizard
          </span>
        </div>
        <h2 className="font-display font-black text-brand-dark tracking-tight mb-3" style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}>
          Which dog actually fits your life?
        </h2>
        <p className="text-sm text-brand-text-mid mb-7 max-w-2xl leading-relaxed">
          Answer a few questions about your home, time, and experience — get matched to breeds
          that fit, with the trade-offs spelled out. No email required.
        </p>
        <WhichPetWizard />
      </section>

      {/* ── TOOLS & CALCULATORS ────────────────────────────────────────── */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Tools &amp; Calculators
          </span>
        </div>
        <h2
          className="font-display font-black text-white tracking-tight mb-3 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}
        >
          Get a number, not just advice.
        </h2>
        <p className="text-base text-white/60 mb-8 max-w-2xl leading-relaxed">
          Interactive tools built on veterinary reference data — answer a few questions and get
          a precise, sourced answer for your dog right now.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Calorie Calculator */}
          <Link
            href="/tools/dog-calorie-calculator"
            className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-primary/15 text-brand-primary mb-4">
              <IconCalorie />
            </div>
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Calculator
            </div>
            <h3 className="font-display font-bold text-white text-xl leading-tight mb-2">
              Dog Calorie Calculator
            </h3>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Enter your dog&apos;s weight, age, and activity level — get their daily calorie target
              based on AAFCO/NRC resting energy formulas.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary group-hover:gap-2.5 transition-all">
              Calculate daily calories
              <IconArrowRight />
            </span>
          </Link>

          {/* Age Calculator */}
          <Link
            href="/tools/dog-age-calculator"
            className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-primary/15 text-brand-primary mb-4">
              <IconAge />
            </div>
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Calculator
            </div>
            <h3 className="font-display font-bold text-white text-xl leading-tight mb-2">
              Dog Age Calculator
            </h3>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Not the &quot;multiply by 7&quot; myth. Uses the genomic aging curve research to convert
              your dog&apos;s age to a human-equivalent by size class.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary group-hover:gap-2.5 transition-all">
              Convert dog age
              <IconArrowRight />
            </span>
          </Link>

          {/* Glossary */}
          <Link
            href="/glossary"
            className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-brand-primary/15 text-brand-primary mb-4">
              <IconGlossary />
            </div>
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Reference
            </div>
            <h3 className="font-display font-bold text-white text-xl leading-tight mb-2">
              Dog Health Glossary
            </h3>
            <p className="text-sm text-white/55 leading-relaxed mb-5">
              Plain-English definitions for vet terminology — from ACTH stimulation tests to
              zoonotic disease — with source citations.
            </p>
            <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary group-hover:gap-2.5 transition-all">
              Browse the glossary
              <IconArrowRight />
            </span>
          </Link>
        </div>
      </section>

      {/* ── BREED-SPECIFIC RISK CENTER — 6-portrait visual grid ─────────── */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Breed-specific risk center
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl">
              What does your breed need?
            </h2>
            <p className="text-sm text-brand-text-mid mt-2 max-w-xl">
              Hereditary conditions, screening tests by age, breed-specific nutrition, training tendencies.
            </p>
          </div>
          <Link href="/breeds" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All breeds
            <IconArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {FEATURED_BREEDS.map((breed) => (
            <Link
              key={breed.name}
              href={breed.href}
              className="group relative block rounded-lg overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary transition-all duration-200"
            >
              <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}>
                <StockImage
                  manifestKey={breed.manifestKey}
                  alt={breed.imageAlt}
                  aspect="3:4"
                  subtleCredit
                />
              </div>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end min-h-[200px] sm:min-h-[220px] p-3">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                  {breed.type}
                </div>
                <div className="font-display font-bold text-white text-sm mb-1 leading-tight">
                  {breed.name}
                </div>
                <div className="text-2xs text-white/70 leading-snug">
                  {breed.keyRisk}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHEN TO CALL THE VET (decision-tree CTAs) ──────────────────── */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section text-white">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center mb-8">
          {/* Symptom hero image */}
          <div className={`order-2 lg:order-1 rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.4)] ${FILL_IMAGE}`}>
            <StockImage
              manifestKey="dog-com:symptoms-hero"
              alt="Owner watching a dog for symptoms"
              aspect="4:3"
              variant="wide"
              subtleCredit
            />
          </div>
          {/* Copy */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                When to call the vet
              </span>
            </div>
            <h2 className="font-display font-bold tracking-tight text-3xl mb-4 max-w-3xl">
              Triage the symptom. Vet visit, wait-and-watch, or emergency?
            </h2>
            <p className="text-base text-white/60 leading-relaxed">
              Each symptom guide tells you the most likely causes, what to monitor at home, and the
              specific red flags that mean &quot;go now&quot; — sourced from AVMA, AAHA, and ACVECC criteria.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {HEALTH_DECISIONS.map((item) => (
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

        <Link
          href="/find-a-vet"
          className="inline-flex items-center gap-2 mt-8 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-brand-primary-light transition-colors duration-200"
        >
          Find a vet near you
          <IconArrowRight />
        </Link>
      </section>

      {/* ── FOOD & WEIGHT TOOLS — with nutrition image ─────────────────── */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Food & weight
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl">
              Pick the right food. Maintain the right weight.
            </h2>
            <p className="text-sm text-brand-text-mid mt-2 max-w-xl">
              WSAVA-compliant brand picks · macronutrient profiles by life stage · body condition scoring.
            </p>
          </div>
          <Link href="/nutrition" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All nutrition guides
            <IconArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
          {/* Nutrition image panel */}
          <Link
            href="/nutrition"
            className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary transition-all duration-200 min-h-[220px] ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
          >
            <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}>
              <StockImage
                manifestKey="dog-com:category-nutrition"
                alt="Dog nutrition and feeding"
                aspect="4:3"
                subtleCredit
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[220px] p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">Nutrition hub</div>
              <div className="font-display font-bold text-white text-lg leading-tight mb-1">Feed for the life stage in front of you</div>
              <div className="text-xs text-white/70 leading-relaxed">Puppy, adult, senior — the macronutrient shifts that matter.</div>
            </div>
          </Link>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FOOD_TOOLS.map((tool) => (
              <Link
                key={tool.href}
                href={tool.href}
                className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
              >
                <div className="font-display font-bold text-brand-dark text-base mb-2 leading-tight">{tool.title}</div>
                <div className="text-xs text-brand-text-mid leading-relaxed">{tool.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PUPPY + TRAINING ── dark anchor section for contrast rhythm ── */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Puppy &amp; training
              </span>
            </div>
            <h2 className="font-display font-bold text-white tracking-tight text-3xl">
              The first year shapes everything.
            </h2>
            <p className="text-sm text-white/60 mt-2 max-w-xl">
              Schedules, vaccinations, socialization, crate training — what actually works, in order.
            </p>
          </div>
          <Link href="/training" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All training guides
            <IconArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TRAINING_DECISIONS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block bg-white/[0.05] border border-white/[0.10] rounded-lg p-5 no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200 relative"
              >
                {item.badge && (
                  <span className="absolute top-3 right-3 text-2xs font-bold tracking-eyebrow uppercase text-brand-primary bg-brand-primary/15 border border-brand-primary/30 rounded-full px-2 py-0.5">
                    {item.badge}
                  </span>
                )}
                <div className="font-display font-bold text-white text-base mb-2 leading-tight pr-20">{item.title}</div>
                <div className="text-xs text-white/55 leading-relaxed">{item.desc}</div>
              </Link>
            ))}
          </div>

          {/* Training image panel */}
          <Link
            href="/training"
            className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-white/10 hover:ring-brand-primary transition-all duration-200 min-h-[200px] ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
          >
            <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}>
              <StockImage
                manifestKey="dog-com:category-training"
                alt="Dog training session"
                aspect="4:3"
                subtleCredit
              />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[200px] p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">Training hub</div>
              <div className="font-display font-bold text-white text-lg leading-tight">Build the habits before they harden.</div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── INSURANCE & COST PLANNING — with product/compare image ─────── */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Insurance & cost planning
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl mb-4">
              Plan for the bills before they arrive.
            </h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-6 max-w-xl">
              The average emergency vet visit runs $1,500–$5,000. Chronic conditions like atopic dermatitis,
              kidney disease, or arthritis can cost $300–$800/month long-term. Pet insurance is the cheapest
              when your dog is young and healthy — and pre-existing conditions are universally excluded by
              every major carrier.
            </p>
            <Link
              href="/reviews/best-pet-insurance"
              className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-brand-primary-light transition-colors duration-200"
            >
              Compare pet insurance carriers
              <IconArrowRight />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {/* Compare/review image header */}
            <Link
              href="/reviews"
              className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary transition-all duration-200 min-h-[140px] ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
            >
              <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}>
                <StockImage
                  manifestKey="dog-com:compare-hero"
                  alt="Comparing dog products"
                  aspect="16:9"
                  subtleCredit
                />
              </div>
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
              <div className="relative z-10 flex flex-col justify-end h-full min-h-[140px] p-4">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">All product guides</div>
                <div className="font-display font-bold text-white text-base leading-tight">Compared, not ranked by ad spend.</div>
              </div>
            </Link>

            {PRODUCT_GUIDES.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
              >
                <div className="font-display font-bold text-brand-dark text-sm mb-1 leading-tight">{p.title}</div>
                <div className="text-xs text-brand-text-mid leading-snug">{p.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE — "This week for your dog" ───────────────────────
          Gated off until the email backend is live (matches the other sites)
          so we don't ship an empty/inactive capture surface. */}
      {process.env.NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED === 'true' && (
        <section className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-section">
          <EmailCapture
            variant="section"
            siteId="dog-com"
            title="This week for your dog"
            subtitle="One short Tuesday email: what to do this week (by life stage), one product worth the money, one trap to avoid."
            source="homepage"
            ctaText="Get the weekly"
            perks={[
              'By life stage (puppy / adult / senior)',
              'Sourced — no paid placements',
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
          <h2 className="font-display font-bold text-brand-dark tracking-tight text-2xl mb-4">
            Sourced, not opinionated.
          </h2>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
            Dog.com Editorial writes the guides on this site. We cite WSAVA, AAFCO, AAHA, AVMA, OFA, CHIC, and
            peer-reviewed veterinary literature on every health page. We don&apos;t use AI-generated experts.
            We don&apos;t accept payment for favorable reviews. We disclose affiliate relationships above the
            fold on every product page.
          </p>
          <div className="flex gap-5 mt-4 flex-wrap">
            <Link href="/editorial-standards" className="text-sm font-semibold text-brand-primary no-underline hover:underline">
              Editorial standards →
            </Link>
            <Link href="/disclosure" className="text-sm font-semibold text-brand-primary no-underline hover:underline">
              Affiliate disclosure →
            </Link>
            <Link href="/faq" className="text-sm font-semibold text-brand-primary no-underline hover:underline">
              FAQ →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
