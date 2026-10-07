/**
 * Horses.com Homepage — /
 * Hero lives in HomeHero so the H1 can change without touching the rest of the page.
 * Email capture sits under the hero via layout EmailUnderHero (single capture).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, StockImage, SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'
import { BodyConditionScoreCalculator } from '../components/visual/BodyConditionScoreCalculator'
import { DisciplineFilter } from '../components/DisciplineFilter'
import { HomeHero } from '../components/HomeHero'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'The Reference for Horse Owners',
  description:
    'Horses.com — research-based reference for horse owners: breed guides, equine health, gear reviews, supplement evaluations, and the 90-day first-horse roadmap.',
  path: '/',
  type: 'website',
})

const CATEGORIES: {
  title: string
  desc: string
  href: string
  manifestKey: string
  imageAlt: string
}[] = [
  { title: 'Breeds', desc: 'Discipline-tagged breed references with bloodlines, conformation, and genetic-panel coverage.', href: '/breeds/quarter-horse', manifestKey: 'horses-com:category-breeds', imageAlt: 'A horse standing in profile, showing conformation' },
  { title: 'Health', desc: 'Condition references with AAEP-aligned guidance and when-to-call-your-vet thresholds.', href: '/health', manifestKey: 'horses-com:category-care', imageAlt: 'A horse receiving routine care' },
  { title: 'Guides', desc: 'Tack, turnout, and management fundamentals — written for owners who own the decision.', href: '/guides/saddle-fit-basics', manifestKey: 'horses-com:guide-saddle-fit', imageAlt: 'A dressage horse and rider working in tack at the canter' },
  { title: 'Supplements', desc: 'Ingredient-by-ingredient evaluation with research citations and dosing context.', href: '/supplements/joint-supplements', manifestKey: 'horses-com:supplement-joint', imageAlt: 'A working sport horse, the focus of joint-supplement research' },
  { title: 'Reviews', desc: 'Gear comparisons scored on the same dimensions, discipline-filterable.', href: '/reviews/best-winter-horse-blankets', manifestKey: 'horses-com:category-reviews', imageAlt: 'Horse gear compared side by side' },
  { title: 'First-Horse Roadmap', desc: 'A free 90-day plan for the first-time owner — on the page, no email signup.', href: '/first-horse-roadmap', manifestKey: 'horses-com:featured-quarter-horse', imageAlt: 'A horse — the start of the first-horse journey' },
  { title: 'Racing Intelligence', desc: 'Thoroughbred, harness, and Quarter Horse racing as educational reference — disciplines, governance, and OTTB aftercare.', href: '/racing', manifestKey: 'horses-com:category-disciplines', imageAlt: 'Horses competing on a track' },
]

const FEATURED_GUIDES = [
  { eyebrow: 'Ownership', title: 'What a horse actually costs', desc: 'Board, farrier, vet, feed, and the once-a-year surprises — a realistic annual budget before you buy.', href: '/ownership/cost-of-owning-a-horse', manifestKey: 'horses-com:hero', imageAlt: 'Horses running through a grassy field' },
  { eyebrow: 'Free tool', title: 'Estimate your horse\u2019s weight', desc: 'No livestock scale needed — heart-girth and body-length measurements give a working bodyweight for dosing and feeding.', href: '/tools/horse-weight-calculator', manifestKey: 'horses-com:tool-bcs-calculator', imageAlt: 'Measuring a horse to estimate bodyweight' },
  { eyebrow: 'Breed guide', title: 'The American Quarter Horse', desc: 'The most populous breed in the U.S. — registry, the 5-panel genetic test, and what to expect as a first-time owner.', href: '/breeds/quarter-horse', manifestKey: 'horses-com:featured-quarter-horse', imageAlt: 'An American Quarter Horse and rider schooling' },
]

const FEATURED_ARTICLES = [
  { href: '/breeds/quarter-horse', eyebrow: 'Breed Guide', title: 'American Quarter Horse', teaser: 'The most populous horse breed in the United States — short-coupled, heavily muscled, and built for explosive acceleration.', readTime: '14 min', imageKey: 'horses-com:featured-quarter-horse', imageAlt: 'A horse and rider in an all-purpose schooling session' },
  { href: '/health/equine-ulcers', eyebrow: 'Equine Health', title: 'Equine Gastric Ulcer Syndrome', teaser: 'Up to 90% of racehorses and 60% of sport horses develop ulcers. Squamous vs. glandular disease, omeprazole protocols, and the management changes that actually move the needle.', readTime: '16 min', imageKey: 'horses-com:category-care', imageAlt: 'A horse receiving routine care' },
  { href: '/guides/saddle-fit-basics', eyebrow: 'Tack & Fitting', title: 'Saddle Fit Basics', teaser: 'A field reference for the owner checking tree width, wither clearance, and panel contact between professional fittings.', readTime: '12 min', imageKey: 'horses-com:guide-saddle-fit', imageAlt: 'A dressage horse and rider working in tack at the canter' },
  { href: '/supplements/joint-supplements', eyebrow: 'Supplements', title: 'Joint Supplements for the Working Horse', teaser: 'Glucosamine, chondroitin, hyaluronic acid, MSM — what the literature actually shows, and where to skip the marketing.', readTime: '13 min', imageKey: 'horses-com:featured-joint-supplements', imageAlt: 'A show jumper mid-flight over a fence' },
  { href: '/reviews/best-winter-horse-blankets', eyebrow: 'Gear Review', title: 'Best Winter Horse Blankets', teaser: 'Denier ratings, fill weight, gusset design, and shoulder-fit by build. Eight blankets compared on the same dimensions.', readTime: '11 min', imageKey: 'horses-com:category-reviews', imageAlt: 'Horse gear compared side by side' },
]

const TRUST_CHIPS = [
  {
    label: 'Research-based',
    note: 'Citation-anchored guides, signed on the page.',
    href: '/editorial-standards',
    imageKey: 'horses-com:hero',
    imageAlt: 'Horses running through a grassy field',
  },
  {
    label: 'Cross-discipline',
    note: 'Dressage through racing, as reference — not picks.',
    href: '/disciplines',
    imageKey: 'horses-com:category-disciplines',
    imageAlt: 'A dressage horse and rider in competition',
  },
  {
    label: 'No paid placements',
    note: 'Gear scored on the page. Affiliate links disclosed.',
    href: '/disclosure',
    imageKey: 'horses-com:category-reviews',
    imageAlt: 'A tacked-up horse at the jump',
  },
  {
    label: 'Veterinarian-respectful',
    note: 'When-to-call thresholds. No invented clinicians.',
    href: '/health',
    imageKey: 'horses-com:category-care',
    imageAlt: 'A horse receiving routine care',
  },
]

const FILL_IMAGE =
  '[&_figure]:!my-0 [&_figure]:!h-full [&_figure]:!w-full [&_figure>div]:!absolute [&_figure>div]:!inset-0 [&_figure>div]:!rounded-none'

const homeSchema = combineSchemas(
  buildOrganizationSchema({ siteId: 'horses-com', name: 'Horses.com', url: 'https://horses.com' }),
  buildWebSiteSchema({ siteId: 'horses-com', name: 'Horses.com', url: 'https://horses.com' }),
)

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={homeSchema} />
      <HomeHero />
      <section className="px-container-sm sm:px-container py-6" style={{ background: 'var(--brand-surface)', borderTop: '1px solid var(--brand-border)', borderBottom: '1px solid var(--brand-border)' }}>
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-end justify-between gap-4 flex-wrap mb-4">
            <div className="flex items-center gap-3">
              <span aria-hidden="true" className="h-px w-8" style={{ background: 'var(--brand-accent)' }} />
              <Link href="/editorial-standards" className="group flex items-center gap-2.5 no-underline">
                <span className={`relative h-9 w-14 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                  <StockImage manifestKey="horses-com:hero" fallbackKey="horses-com:hero" alt="Horses running through a grassy field" aspect="4:3" variant="inline" subtleCredit />
                </span>
                <span className="text-2xs font-bold uppercase tracking-eyebrow group-hover:underline" style={{ color: '#7a5520' }}>Why this site</span>
              </Link>
            </div>
            <Link href="/editorial-standards" className="group flex items-center gap-3 overflow-hidden rounded-md no-underline" style={{ background: 'var(--brand-white)', border: '1px solid var(--brand-border)' }}>
              <span className={`relative h-14 w-20 shrink-0 overflow-hidden ${FILL_IMAGE}`}>
                <StockImage manifestKey="horses-com:hero" fallbackKey="horses-com:hero" alt="Horses running through a grassy field" aspect="4:3" variant="inline" subtleCredit />
              </span>
              <span className="pr-3 py-2">
                <span className="mb-1 flex items-center gap-2">
                  <span className={`relative h-7 w-10 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                    <StockImage manifestKey="horses-com:hero" fallbackKey="horses-com:hero" alt="Horses running through a grassy field" aspect="4:3" variant="inline" subtleCredit />
                  </span>
                  <span className="block font-display font-bold text-sm leading-tight" style={{ color: 'var(--brand-text-dark)' }}>Editorial standards</span>
                </span>
                <span className="block text-xs mt-0.5" style={{ color: 'var(--brand-text-mid)' }}>Citation-anchored, signed on the page.</span>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {TRUST_CHIPS.map((item) => (
              <Link key={item.href} href={item.href} className="group block overflow-hidden rounded-md no-underline transition-all duration-300 ease-carloOS hover:-translate-y-0.5" style={{ background: 'var(--brand-white)', border: '1px solid var(--brand-border)' }}>
                <div className={`relative h-24 ${FILL_IMAGE}`}>
                  <StockImage manifestKey={item.imageKey} fallbackKey="horses-com:hero" alt={item.imageAlt} aspect="16:9" variant="inline" subtleCredit />
                </div>
                <div className="p-3.5">
                  <div className="mb-1 flex items-center gap-2">
                    <span className={`relative h-7 w-10 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                      <StockImage manifestKey={item.imageKey} fallbackKey="horses-com:hero" alt={item.imageAlt} aspect="4:3" variant="inline" subtleCredit />
                    </span>
                    <div className="font-display font-bold text-sm leading-tight" style={{ color: 'var(--brand-text-dark)' }}>{item.label}</div>
                  </div>
                  <p className="text-xs leading-relaxed mt-1" style={{ color: 'var(--brand-text-mid)' }}>{item.note}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-container-sm sm:px-container py-section" style={{ background: 'var(--brand-surface)' }}>
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span aria-hidden="true" className="h-px w-8" style={{ background: 'var(--brand-accent)' }} />
                <Link href="/breeds" className="group flex items-center gap-2.5 no-underline">
                  <span className={`relative h-9 w-14 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                    <StockImage manifestKey="horses-com:category-breeds" fallbackKey="horses-com:hero" alt="A horse standing in profile, showing conformation" aspect="4:3" variant="inline" subtleCredit />
                  </span>
                  <span className="text-2xs font-bold uppercase tracking-eyebrow group-hover:underline" style={{ color: '#7a5520' }}>By Category</span>
                </Link>
              </div>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-brand-text-dark">Where to start</h2>
            </div>
            <Link href="/breeds" className="group flex items-center gap-3 overflow-hidden rounded-md no-underline" style={{ background: 'var(--brand-white)', border: '1px solid var(--brand-border)' }}>
              <span className={`relative h-16 w-24 shrink-0 overflow-hidden ${FILL_IMAGE}`}>
                <StockImage manifestKey="horses-com:category-breeds" fallbackKey="horses-com:hero" alt="A horse standing in profile, showing conformation" aspect="4:3" variant="inline" subtleCredit />
              </span>
              <span className="pr-3 py-2">
                <span className="mb-1 flex items-center gap-2">
                  <span className={`relative h-7 w-10 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                    <StockImage manifestKey="horses-com:category-breeds" fallbackKey="horses-com:hero" alt="A horse standing in profile, showing conformation" aspect="4:3" variant="inline" subtleCredit />
                  </span>
                  <span className="block font-display font-bold text-sm leading-tight" style={{ color: 'var(--brand-text-dark)' }}>All breed guides</span>
                </span>
                <span className="block text-xs mt-0.5" style={{ color: 'var(--brand-text-mid)' }}>Conformation and genetic panels.</span>
              </span>
            </Link>
          </div>
          <DisciplineFilter />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group flex flex-col rounded-md overflow-hidden no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1" style={{ background: 'var(--brand-white)', border: '1px solid var(--brand-border)' }}>
                <div className={`relative aspect-[4/3] ${FILL_IMAGE}`}>
                  <StockImage manifestKey={cat.manifestKey} fallbackKey="horses-com:hero" alt={cat.imageAlt} aspect="4:3" variant="inline" subtleCredit />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-2 flex items-center gap-2.5">
                    <span className={`relative h-8 w-12 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                      <StockImage manifestKey={cat.manifestKey} fallbackKey="horses-com:hero" alt={cat.imageAlt} aspect="4:3" variant="inline" />
                    </span>
                    <h3 className="font-display font-bold text-xl leading-snug" style={{ color: 'var(--brand-text-dark)' }}>{cat.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--brand-text-mid)' }}>{cat.desc}</p>
                  <span className="mt-auto inline-flex items-center text-xs font-semibold uppercase tracking-eyebrow" style={{ color: 'var(--brand-primary)' }}>Read <span aria-hidden="true" className="ml-1.5 transition-transform group-hover:translate-x-0.5">→</span></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="px-container-sm sm:px-container py-section" style={{ background: 'var(--brand-white)' }}>
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span aria-hidden="true" className="h-px w-8" style={{ background: 'var(--brand-accent)' }} />
                <Link href="/breeds/quarter-horse" className="group flex items-center gap-2.5 no-underline">
                  <span className={`relative h-9 w-14 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                    <StockImage manifestKey="horses-com:featured-quarter-horse" fallbackKey="horses-com:hero" alt="An American Quarter Horse and rider schooling" aspect="4:3" variant="inline" subtleCredit />
                  </span>
                  <span className="text-2xs font-bold uppercase tracking-eyebrow group-hover:underline" style={{ color: '#7a5520' }}>Popular on Horses.com</span>
                </Link>
              </div>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-brand-text-dark">Where owners start most</h2>
            </div>
            <Link href="/breeds/quarter-horse" className="group flex items-center gap-3 overflow-hidden rounded-md no-underline" style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }}>
              <span className={`relative h-16 w-24 shrink-0 overflow-hidden ${FILL_IMAGE}`}>
                <StockImage manifestKey="horses-com:featured-quarter-horse" fallbackKey="horses-com:hero" alt="An American Quarter Horse and rider schooling" aspect="4:3" variant="inline" subtleCredit />
              </span>
              <span className="pr-3 py-2">
                <span className="mb-1 flex items-center gap-2">
                  <span className={`relative h-7 w-10 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                    <StockImage manifestKey="horses-com:featured-quarter-horse" fallbackKey="horses-com:hero" alt="An American Quarter Horse and rider schooling" aspect="4:3" variant="inline" subtleCredit />
                  </span>
                  <span className="block font-display font-bold text-sm leading-tight" style={{ color: 'var(--brand-text-dark)' }}>Quarter Horse guide</span>
                </span>
                <span className="block text-xs mt-0.5" style={{ color: 'var(--brand-text-mid)' }}>The breed owners open first.</span>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_GUIDES.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group flex flex-col rounded-md overflow-hidden no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1" style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }}>
                <div className={`relative aspect-video ${FILL_IMAGE}`}>
                  <StockImage manifestKey={guide.manifestKey} fallbackKey="horses-com:hero" alt={guide.imageAlt} aspect="16:9" variant="inline" subtleCredit />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="text-2xs font-bold uppercase tracking-eyebrow mb-2" style={{ color: 'var(--brand-primary)' }}>{guide.eyebrow}</div>
                  <h3 className="font-display font-bold text-xl leading-snug mb-2" style={{ color: 'var(--brand-text-dark)' }}>{guide.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--brand-text-mid)' }}>{guide.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-white px-container-sm sm:px-container py-section border-y border-brand-border">
        <div className="max-w-container mx-auto">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
            <div className="min-w-0"><BodyConditionScoreCalculator /></div>
            <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
              <div className={`relative min-h-[180px] overflow-hidden rounded-xl ring-1 ring-brand-border ${FILL_IMAGE}`}>
                <div className={`absolute inset-0 ${FILL_IMAGE}`}>
                  <StockImage manifestKey="horses-com:tool-bcs-calculator" fallbackKey="horses-com:hero" alt="A horse standing square for body condition assessment" aspect="4:3" variant="inline" subtleCredit />
                </div>
              </div>
              <div>
                <div className="flex items-end justify-between gap-3 flex-wrap mb-3">
                  <Link href="/tools/body-condition-score" className="group flex items-center gap-2.5 no-underline">
                    <span className="w-6 h-0.5 bg-brand-primary" />
                    <span className={`relative h-9 w-14 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                      <StockImage manifestKey="horses-com:tool-bcs-calculator" fallbackKey="horses-com:hero" alt="A horse standing square for body condition assessment" aspect="4:3" variant="inline" subtleCredit />
                    </span>
                    <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary group-hover:underline">Try it · Henneke body condition score</span>
                  </Link>
                  <Link href="/tools/body-condition-score" className="group flex items-center gap-3 overflow-hidden rounded-md no-underline" style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }}>
                    <span className={`relative h-12 w-16 shrink-0 overflow-hidden ${FILL_IMAGE}`}>
                      <StockImage manifestKey="horses-com:tool-bcs-calculator" fallbackKey="horses-com:hero" alt="A horse standing square for body condition assessment" aspect="4:3" variant="inline" subtleCredit />
                    </span>
                    <span className="pr-3 py-1.5">
                      <span className="mb-1 flex items-center gap-2">
                        <span className={`relative h-7 w-10 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                          <StockImage manifestKey="horses-com:tool-bcs-calculator" fallbackKey="horses-com:hero" alt="A horse standing square for body condition assessment" aspect="4:3" variant="inline" subtleCredit />
                        </span>
                        <span className="block font-display font-bold text-sm leading-tight" style={{ color: 'var(--brand-text-dark)' }}>Body condition tool</span>
                      </span>
                      <span className="block text-xs mt-0.5" style={{ color: 'var(--brand-text-mid)' }}>Six checkpoints, 1–9 score.</span>
                    </span>
                  </Link>
                </div>
                <h2 className="font-display font-bold text-brand-dark tracking-tight mb-3" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>Is your horse the right weight?</h2>
                <p className="text-sm text-brand-text-mid leading-relaxed mb-3">Body condition is the single most useful daily check an owner can make.</p>
                <p className="text-sm text-brand-text-mid leading-relaxed">Score the six Henneke checkpoints and the tool returns the 1–9 score vets and nutritionists use.</p>
              </div>
              <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
                <Link href="/tools" className="group mb-3 flex items-center gap-3 no-underline">
                  <span className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-md ring-1 ring-brand-border ${FILL_IMAGE}`}>
                    <StockImage manifestKey="horses-com:category-guides" fallbackKey="horses-com:hero" alt="A horse and rider working in the arena" aspect="4:3" variant="inline" subtleCredit />
                  </span>
                  <span>
                    <span className="block text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light">More free calculators</span>
                    <span className="block text-sm font-semibold text-brand-primary group-hover:underline">Tools hub, on the page</span>
                  </span>
                </Link>
                <div className="flex flex-col gap-2 text-sm font-semibold">
                  {[
                    { href: '/tools/horse-weight-calculator', label: 'Horse weight calculator', imageKey: 'horses-com:tool-bcs-calculator', imageAlt: 'A horse standing square for body condition assessment' },
                    { href: '/tools/horse-feed-calculator', label: 'Feed & hay calculator', imageKey: 'horses-com:hero', imageAlt: 'Horses running through a grassy field' },
                    { href: '/tools/stall-bedding-calculator', label: 'Stall bedding calculator', imageKey: 'horses-com:category-care', imageAlt: 'A horse receiving routine care' },
                    { href: '/tools', label: 'Browse the tools hub', imageKey: 'horses-com:category-guides', imageAlt: 'A horse and rider working in the arena' },
                  ].map((tool) => (
                    <Link key={tool.href} href={tool.href} className="group flex items-center gap-3 text-brand-primary no-underline hover:underline">
                      <span className={`relative h-12 w-16 shrink-0 overflow-hidden rounded-md ring-1 ring-brand-border ${FILL_IMAGE}`}>
                        <StockImage manifestKey={tool.imageKey} fallbackKey="horses-com:hero" alt={tool.imageAlt} aspect="4:3" variant="inline" subtleCredit />
                      </span>
                      <span>{tool.label} →</span>
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <section className="px-container-sm sm:px-container py-section" style={{ background: 'var(--brand-surface)' }}>
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span aria-hidden="true" className="h-px w-8" style={{ background: 'var(--brand-accent)' }} />
                <Link href="/health/equine-ulcers" className="group flex items-center gap-2.5 no-underline">
                  <span className={`relative h-9 w-14 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                    <StockImage manifestKey="horses-com:category-care" fallbackKey="horses-com:hero" alt="A horse receiving routine care" aspect="4:3" variant="inline" subtleCredit />
                  </span>
                  <span className="text-2xs font-bold uppercase tracking-eyebrow group-hover:underline" style={{ color: '#7a5520' }}>Cornerstone Articles</span>
                </Link>
              </div>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-brand-text-dark">Reference, maintained</h2>
            </div>
            <Link href="/health/equine-ulcers" className="group flex items-center gap-3 overflow-hidden rounded-md no-underline" style={{ background: 'var(--brand-white)', border: '1px solid var(--brand-border)' }}>
              <span className={`relative h-16 w-24 shrink-0 overflow-hidden ${FILL_IMAGE}`}>
                <StockImage manifestKey="horses-com:category-care" fallbackKey="horses-com:hero" alt="A horse receiving routine care" aspect="4:3" variant="inline" subtleCredit />
              </span>
              <span className="pr-3 py-2">
                <span className="mb-1 flex items-center gap-2">
                  <span className={`relative h-7 w-10 shrink-0 overflow-hidden rounded-md ${FILL_IMAGE}`}>
                    <StockImage manifestKey="horses-com:category-care" fallbackKey="horses-com:hero" alt="A horse receiving routine care" aspect="4:3" variant="inline" subtleCredit />
                  </span>
                  <span className="block font-display font-bold text-sm leading-tight" style={{ color: 'var(--brand-text-dark)' }}>Equine health</span>
                </span>
                <span className="block text-xs mt-0.5" style={{ color: 'var(--brand-text-mid)' }}>When-to-call thresholds, no invented clinicians.</span>
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {FEATURED_ARTICLES.map((art) => (
              <Link key={art.href} href={art.href} className="group block rounded-md overflow-hidden no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1" style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }}>
                <StockImage manifestKey={art.imageKey} alt={art.imageAlt} aspect="16:9" variant="inline" subtleCredit />
                <div className="p-7 lg:p-8">
                  <div className="text-2xs font-bold uppercase tracking-eyebrow mb-3" style={{ color: 'var(--brand-primary)' }}>{art.eyebrow}</div>
                  <h3 className="font-display font-bold text-2xl leading-tight mb-3" style={{ color: 'var(--brand-text-dark)' }}>{art.title}</h3>
                  <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--brand-text-mid)' }}>{art.teaser}</p>
                  <span className="text-xs font-semibold uppercase tracking-eyebrow" style={{ color: 'var(--brand-text-light)' }}>{art.readTime} read</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
