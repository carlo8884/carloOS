/**
 * Dog.com Homepage — / (Owner's Operating System)
 *
 * Redesigned 2026-05-30 from a static reference homepage into an owner
 * decision hub. Above the fold answers "What do you need help with for
 * your dog today?" with 5 owner-path cards rather than a magazine cover.
 *
 * Reused routes (all verified to exist on origin/main):
 *   /breeds, /breeds/[slug], /breeds/[slug]/feeding, /breeds/[slug]/health
 *   /health, /health/dog-symptoms-guide, /health/dog-vaccinations,
 *     /health/senior-dog-care, /health/dog-dental-care, /health/dog-anxiety,
 *     /health/dog-allergies
 *   /nutrition, /nutrition/weight-management, /nutrition/wsava-explained,
 *     /nutrition/puppy-nutrition
 *   /training, /training/puppy-schedule, /training/socialization-window
 *   /reviews, /reviews/best-dry-dog-food, /reviews/best-pet-insurance,
 *     /reviews/best-large-breed-dog-food, /reviews/best-flea-tick-prevention,
 *     /reviews/best-joint-supplements, /reviews/best-dental-chews
 *   /puppy-schedule (lead magnet)
 *   /guides/dog-body-condition-score, /guides/dog-spay-neuter-timing
 *   /find-a-vet, /disclosure, /editorial-standards
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
import Image from 'next/image'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog.com — The Owner\'s Operating System for Your Dog',
  description:
    'Breed risks, health decisions, nutrition, training, insurance, and product guides — built to help owners decide, not just read.',
  path: '/',
  type: 'website',
  ogImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=80&auto=format&fit=crop',
})

// ─── Owner-path cards (above the fold) ──────────────────────────────────────
// The 5 most common reasons someone arrives. Each routes to existing content
// (or, for the symptom path, to the symptoms guide until /ask MVP ships).

const OWNER_PATHS = [
  {
    icon: '🚨',
    eyebrow: 'Is something wrong?',
    title: 'Health & Symptoms',
    desc: 'Lethargy, vomiting, limping, scratching — symptoms by urgency, when to call the vet.',
    href: '/symptoms',
    cta: 'Start with symptoms',
    tone: 'urgent',
  },
  {
    icon: '🐕',
    eyebrow: 'I have a specific breed',
    title: 'Breed Risk Center',
    desc: 'Lifespan, hereditary conditions, screening recommendations, diet, and training by breed.',
    href: '/breeds',
    cta: 'Find your breed',
    tone: 'primary',
  },
  {
    icon: '🐶',
    eyebrow: 'I have a new puppy',
    title: 'Puppy First-Year Roadmap',
    desc: 'Vaccines, feeding, crate training, socialization, and the 8-to-16-week schedule.',
    href: '/puppy-schedule',
    cta: 'See the puppy roadmap',
    tone: 'primary',
  },
  {
    icon: '👴',
    eyebrow: 'I have a senior dog',
    title: 'Senior Dog Care Hub',
    desc: 'Pain, mobility, kidney function, weight, diet shifts, and vet-visit prep after age 7.',
    href: '/health/senior-dog-care',
    cta: 'Senior care guidance',
    tone: 'primary',
  },
  {
    icon: '🛒',
    eyebrow: 'I\'m deciding on a product',
    title: 'Product Comparison Guides',
    desc: 'Food, insurance, flea/tick, joint supplements, dental chews — compared, not ranked by ad spend.',
    href: '/reviews',
    cta: 'Browse product guides',
    tone: 'primary',
  },
]

// ─── Breed-risk featured (4 highest-traffic) ─────────────────────────────────

const FEATURED_BREEDS = [
  {
    name: 'Golden Retriever',
    type: 'Sporting · Large',
    keyRisk: 'Cancer risk · hip dysplasia',
    href: '/breeds/golden-retriever',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'Golden Retriever',
  },
  {
    name: 'Labrador Retriever',
    type: 'Sporting · Large',
    keyRisk: 'Hip dysplasia · obesity',
    href: '/breeds/labrador-retriever',
    image: 'https://images.unsplash.com/photo-1579213838058-2aeeda8d6e2d?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'Labrador Retriever',
  },
  {
    name: 'French Bulldog',
    type: 'Non-Sporting · Small',
    keyRisk: 'Brachycephalic syndrome · IVDD',
    href: '/breeds/french-bulldog',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'French Bulldog',
  },
  {
    name: 'German Shepherd',
    type: 'Herding · Large',
    keyRisk: 'Hip dysplasia · degenerative myelopathy',
    href: '/breeds/german-shepherd',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=400&q=80&auto=format&fit=crop',
    imageAlt: 'German Shepherd',
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
  { title: 'Socialization window', desc: 'The 3-14 week window that shapes adult temperament.', href: '/training/socialization-window' },
  { title: 'All training methods', desc: 'Positive reinforcement, marker training, crate training, more.', href: '/training' },
]

const PRODUCT_GUIDES = [
  { title: 'Pet insurance', desc: 'Carriers compared on premium, deductible, exam fees, waiting periods.', href: '/reviews/best-pet-insurance' },
  { title: 'Flea & tick prevention', desc: 'Oral vs. topical, by region, efficacy data, side-effect profiles.', href: '/reviews/best-flea-tick-prevention' },
  { title: 'Joint supplements', desc: 'Glucosamine, chondroitin, MSM, fish oil — what evidence says.', href: '/reviews/best-joint-supplements' },
  { title: 'Dental chews', desc: 'VOHC-accepted options vs. marketing. Per-day cost.', href: '/reviews/best-dental-chews' },
]

// ─── Page component ─────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO: "What do you need help with for your dog today?" ─────── */}
      <section className="bg-brand-dark relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(ellipse at 30% 30%, rgba(232,98,42,0.25) 0%, transparent 55%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 px-container-sm sm:px-container pt-16 pb-8">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
              Dog.com — Owner&apos;s reference
            </span>
          </div>
          <h1
            className="font-display font-black text-white tracking-tighter leading-[1.05] mb-4 max-w-4xl"
            style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
          >
            What do you need help with for your dog today?
          </h1>
          <p className="text-base sm:text-lg font-light text-white/65 leading-relaxed max-w-2xl">
            Decisions, not definitions. Pick where you are — symptoms, breed risks, a new puppy,
            a senior dog, or a product call you&apos;re trying to make — and we&apos;ll route you
            to sourced guidance.
          </p>
        </div>

        {/* Owner-path cards */}
        <div className="relative z-10 px-container-sm sm:px-container pb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {OWNER_PATHS.map((path) => (
              <Link
                key={path.href}
                href={path.href}
                className={[
                  'group block rounded-xl p-5 no-underline transition-all duration-200',
                  path.tone === 'urgent'
                    ? 'bg-brand-primary/15 border border-brand-primary/40 hover:bg-brand-primary/25 hover:border-brand-primary'
                    : 'bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.1] hover:border-white/20',
                ].join(' ')}
              >
                <div className="text-3xl mb-3" aria-hidden="true">{path.icon}</div>
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1.5">
                  {path.eyebrow}
                </div>
                <h2 className="font-display font-bold text-white text-base leading-tight mb-2">
                  {path.title}
                </h2>
                <p className="text-xs text-white/55 leading-relaxed mb-3">
                  {path.desc}
                </p>
                <span className="inline-flex items-center text-xs font-bold text-brand-primary group-hover:underline">
                  {path.cta} →
                </span>
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
            <span className="text-2xl" aria-hidden="true">🐶</span>
            <div>
              <div className="text-xs font-bold tracking-eyebrow uppercase text-brand-primary mb-0.5">Free for puppy owners</div>
              <div className="text-sm sm:text-base text-white font-semibold">
                Puppy Schedule, Weeks 8 to 16 — printable + 8-week email course
              </div>
            </div>
          </div>
          <span className="text-xs font-semibold text-brand-primary ml-auto sm:ml-0">
            Get the schedule →
          </span>
        </div>
      </Link>

      {/* ── BREED-SPECIFIC RISK CENTER ─────────────────────────────────── */}
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
          <Link href="/breeds" className="text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All breeds →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURED_BREEDS.map((breed) => (
            <Link
              key={breed.name}
              href={breed.href}
              className="group block bg-brand-white border border-brand-border rounded-lg overflow-hidden no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-brand-surface">
                <Image
                  src={breed.image}
                  alt={breed.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">
                  {breed.type}
                </div>
                <div className="font-display font-bold text-brand-dark text-base mb-1.5 leading-tight">
                  {breed.name}
                </div>
                <div className="text-xs text-brand-text-mid leading-snug">
                  Key risks: {breed.keyRisk}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── WHEN TO CALL THE VET (decision-tree CTAs) ──────────────────── */}
      <section className="bg-brand-dark px-container-sm sm:px-container py-section text-white">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            When to call the vet
          </span>
        </div>
        <h2 className="font-display font-bold tracking-tight text-3xl mb-4 max-w-3xl">
          Triage the symptom. Decide if it&apos;s a vet visit, a wait-and-watch, or an emergency.
        </h2>
        <p className="text-base text-white/60 mb-8 max-w-2xl leading-relaxed">
          Each symptom guide tells you the most likely causes, what to monitor at home, and the
          specific red flags that mean &quot;go now&quot; — sourced from AVMA, AAHA, and ACVECC criteria.
        </p>

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
          className="inline-flex items-center mt-8 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors duration-200"
        >
          Find a vet near you →
        </Link>
      </section>

      {/* ── FOOD & WEIGHT TOOLS ────────────────────────────────────────── */}
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
          <Link href="/nutrition" className="text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All nutrition guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
      </section>

      {/* ── PUPPY + TRAINING ───────────────────────────────────────────── */}
      <section className="bg-brand-white px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                Puppy & training
              </span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl">
              The first year shapes everything.
            </h2>
            <p className="text-sm text-brand-text-mid mt-2 max-w-xl">
              Schedules, vaccinations, socialization, crate training — what actually works, in order.
            </p>
          </div>
          <Link href="/training" className="text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All training guides →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TRAINING_DECISIONS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block bg-brand-surface border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200 relative"
            >
              {item.badge && (
                <span className="absolute top-3 right-3 text-2xs font-bold tracking-eyebrow uppercase text-brand-primary bg-brand-primary-pale border border-brand-primary/30 rounded-full px-2 py-0.5">
                  {item.badge}
                </span>
              )}
              <div className="font-display font-bold text-brand-dark text-base mb-2 leading-tight pr-20">{item.title}</div>
              <div className="text-xs text-brand-text-mid leading-relaxed">{item.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── INSURANCE & COST PLANNING ──────────────────────────────────── */}
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
              className="inline-flex items-center bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded no-underline hover:bg-brand-primary-light transition-colors duration-200"
            >
              Compare pet insurance carriers →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-3">
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

      {/* ── EMAIL CAPTURE — "This week for your dog" ───────────────────── */}
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
