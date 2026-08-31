/**
 * Horses.com Homepage — /
 * Hero lives in HomeHero so the H1 can change without touching the rest of the page.
 * Always-on email capture lives in layout (HomeEmailCapture) above footer.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, StockImage, SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'
import { BodyConditionScoreCalculator } from '../components/visual/BodyConditionScoreCalculator'
import { HomeHero } from '../components/HomeHero'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'The Reference for Horse Owners',
  description:
    'Horses.com — research-based reference for horse owners: breed guides, equine health, gear reviews, supplement evaluations, and the 90-day first-horse roadmap.',
  path: '/',
  type: 'website',
})

type CategoryIcon = 'breeds' | 'health' | 'guides' | 'supplements' | 'reviews' | 'roadmap' | 'racing'

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
    case 'breeds':
      return (
        <svg {...common}>
          <path d="M6 20c0-3 1-5 2-7 .5-1 .8-2 .8-3.2 0-1.2-.5-2.3-1.2-3.1-.5-.5-.5-1.3 0-1.7.5-.5 1.3-.5 1.8 0 .6.6 1.3 1 2.1 1.2 1 .3 2 .4 3 .4 2 0 3.5.8 4.5 2.3.7 1 1 2.2 1 3.6 0 3.5-2 7.5-2 7.5" />
          <path d="M8.5 11.5l-1.5-1" />
          <path d="M14 9.5c.3-.3.6-.7.6-1.1" />
        </svg>
      )
    case 'health':
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 11v2a3 3 0 0 0 6 0v-2" />
          <circle cx="9" cy="10" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="15" cy="10" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'guides':
      return (
        <svg {...common}>
          <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1V5z" />
          <path d="M12 6v14" />
        </svg>
      )
    case 'supplements':
      return (
        <svg {...common}>
          <rect x="3" y="9" width="13" height="6" rx="3" />
          <path d="M9.5 9v6" />
          <circle cx="19" cy="6" r="1.4" />
          <circle cx="20.5" cy="17.5" r="1.2" />
        </svg>
      )
    case 'reviews':
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5.5" />
          <path d="M8.5 13L6 21l3.5-2 2.5 1.5 2.5-1.5L18 21l-2.5-8" />
          <path d="M12 6.5l1 2 2.2.2-1.7 1.4.6 2.2L12 11l-2.1 1.3.6-2.2-1.7-1.4 2.2-.2z" />
        </svg>
      )
    case 'roadmap':
      return (
        <svg {...common}>
          <path d="M4 17c4 0 4-10 8-10s4 10 8 10" />
          <circle cx="4" cy="17" r="1.4" />
          <circle cx="12" cy="11" r="1.4" />
          <circle cx="20" cy="17" r="1.4" />
        </svg>
      )
    case 'racing':
      return (
        <svg {...common}>
          <line x1="18" y1="3" x2="18" y2="21" strokeWidth="2" />
          <path d="M18 5l-6 2-6-2" />
          <path d="M4 14c2-1 4-1 5 0s3 2 5 1 3-2 5-1" />
          <path d="M4 18c2-1 4-1 5 0s3 2 5 1 3-2 5-1" />
        </svg>
      )
  }
}

const CATEGORIES: {
  icon: CategoryIcon
  title: string
  desc: string
  href: string
  manifestKey: string
  imageAlt: string
}[] = [
  {
    icon: 'breeds',
    title: 'Breeds',
    desc: 'Discipline-tagged breed references with bloodlines, conformation, and genetic-panel coverage.',
    href: '/breeds/quarter-horse',
    manifestKey: 'horses-com:category-breeds',
    imageAlt: 'A horse standing in profile, showing conformation',
  },
  {
    icon: 'health',
    title: 'Health',
    desc: 'Condition references with AAEP-aligned guidance and when-to-call-your-vet thresholds.',
    href: '/health',
    manifestKey: 'horses-com:category-care',
    imageAlt: 'A horse receiving routine care',
  },
  {
    icon: 'guides',
    title: 'Guides',
    desc: 'Tack, turnout, and management fundamentals — written for owners who own the decision.',
    href: '/guides/saddle-fit-basics',
    manifestKey: 'horses-com:category-tack',
    imageAlt: 'Tack and saddle fitting equipment',
  },
  {
    icon: 'supplements',
    title: 'Supplements',
    desc: 'Ingredient-by-ingredient evaluation with research citations and dosing context.',
    href: '/supplements/joint-supplements',
    manifestKey: 'horses-com:supplement-joint',
    imageAlt: 'A working sport horse, the focus of joint-supplement research',
  },
  {
    icon: 'reviews',
    title: 'Reviews',
    desc: 'Gear comparisons scored on the same dimensions, discipline-filterable.',
    href: '/reviews/best-winter-horse-blankets',
    manifestKey: 'horses-com:category-reviews',
    imageAlt: 'Horse gear compared side by side',
  },
  {
    icon: 'roadmap',
    title: 'First-Horse Roadmap',
    desc: 'A free 90-day plan and 8-email course for the first-time owner.',
    href: '/first-horse-roadmap',
    manifestKey: 'horses-com:featured-quarter-horse',
    imageAlt: 'A horse — the start of the first-horse journey',
  },
  {
    icon: 'racing',
    title: 'Racing Intelligence',
    desc: 'Thoroughbred, harness, and Quarter Horse racing as educational reference — disciplines, governance, and OTTB aftercare.',
    href: '/racing',
    manifestKey: 'horses-com:category-disciplines',
    imageAlt: 'Horses competing on a track',
  },
]

const FEATURED_GUIDES = [
  {
    eyebrow: 'Ownership',
    title: 'What a horse actually costs',
    desc: 'Board, farrier, vet, feed, and the once-a-year surprises — a realistic annual budget before you buy.',
    href: '/ownership/cost-of-owning-a-horse',
    manifestKey: 'horses-com:category-ownership',
    imageAlt: 'A horse owner caring for their horse',
  },
  {
    eyebrow: 'Free tool',
    title: 'Estimate your horse\u2019s weight',
    desc: 'No livestock scale needed — heart-girth and body-length measurements give a working bodyweight for dosing and feeding.',
    href: '/tools/horse-weight-calculator',
    manifestKey: 'horses-com:tool-bcs-calculator',
    imageAlt: 'Measuring a horse to estimate bodyweight',
  },
  {
    eyebrow: 'Breed guide',
    title: 'The American Quarter Horse',
    desc: 'The most populous breed in the U.S. — registry, the 5-panel genetic test, and what to expect as a first-time owner.',
    href: '/breeds/quarter-horse',
    manifestKey: 'horses-com:featured-quarter-horse',
    imageAlt: 'An American Quarter Horse and rider schooling',
  },
]

const FEATURED_ARTICLES: {
  href: string
  eyebrow: string
  title: string
  teaser: string
  readTime: string
  imageKey?: string
  imageAlt?: string
}[] = [
  {
    href: '/breeds/quarter-horse',
    eyebrow: 'Breed Guide',
    title: 'American Quarter Horse',
    teaser:
      'The most populous horse breed in the United States — short-coupled, heavily muscled, and built for explosive acceleration.',
    readTime: '14 min',
    imageKey: 'horses-com:featured-quarter-horse',
    imageAlt: 'A horse and rider in an all-purpose schooling session',
  },
  {
    href: '/health/equine-ulcers',
    eyebrow: 'Equine Health',
    title: 'Equine Gastric Ulcer Syndrome',
    teaser:
      'Up to 90% of racehorses and 60% of sport horses develop ulcers. Squamous vs. glandular disease, omeprazole protocols, and the management changes that actually move the needle.',
    readTime: '16 min',
  },
  {
    href: '/guides/saddle-fit-basics',
    eyebrow: 'Tack & Fitting',
    title: 'Saddle Fit Basics',
    teaser:
      'A field reference for the owner checking tree width, wither clearance, and panel contact between professional fittings.',
    readTime: '12 min',
  },
  {
    href: '/supplements/joint-supplements',
    eyebrow: 'Supplements',
    title: 'Joint Supplements for the Working Horse',
    teaser:
      'Glucosamine, chondroitin, hyaluronic acid, MSM — what the literature actually shows, and where to skip the marketing.',
    readTime: '13 min',
    imageKey: 'horses-com:featured-joint-supplements',
    imageAlt: 'A show jumper mid-flight over a fence',
  },
  {
    href: '/reviews/best-winter-horse-blankets',
    eyebrow: 'Gear Review',
    title: 'Best Winter Horse Blankets',
    teaser:
      'Denier ratings, fill weight, gusset design, and shoulder-fit by build. Eight blankets compared on the same dimensions.',
    readTime: '11 min',
  },
]

const TRUST_CLAIMS = [
  'Research-based, citation-anchored content',
  'Cross-discipline coverage',
  'No paid placements',
  'Veterinarian-respectful',
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

      <div
        className="px-container-sm sm:px-container py-4"
        style={{
          background: 'var(--brand-surface)',
          borderTop: '1px solid var(--brand-border)',
          borderBottom: '1px solid var(--brand-border)',
        }}
      >
        <div className="mx-auto max-w-container-wide flex flex-wrap items-center justify-center sm:justify-between gap-y-2">
          {TRUST_CLAIMS.map((item, i, arr) => (
            <span
              key={item}
              className="flex items-center text-2xs font-semibold uppercase tracking-eyebrow whitespace-nowrap"
              style={{ color: 'var(--brand-text-mid)' }}
            >
              <span aria-hidden="true" className="mr-2" style={{ color: 'var(--brand-accent)' }}>
                ✓
              </span>
              {item}
              {i < arr.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden sm:inline mx-5 h-3 w-px"
                  style={{ background: 'var(--brand-border)' }}
                />
              )}
            </span>
          ))}
        </div>
      </div>

      <section className="px-container-sm sm:px-container py-section" style={{ background: 'var(--brand-surface)' }}>
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-baseline justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span aria-hidden="true" className="h-px w-8" style={{ background: 'var(--brand-accent)' }} />
                <span className="text-2xs font-bold uppercase tracking-eyebrow" style={{ color: 'var(--brand-accent)' }}>
                  By Category
                </span>
              </div>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-brand-text-dark">
                Where to start
              </h2>
            </div>
          </div>

          <nav aria-label="Browse by discipline" className="mb-10 -mt-2 flex flex-wrap items-center gap-2 sm:gap-2.5">
            <span className="text-2xs font-bold uppercase tracking-eyebrow mr-1 sm:mr-2" style={{ color: 'var(--brand-text-light)' }}>
              For
            </span>
            {[
              { label: 'Dressage riders', href: '/disciplines/dressage' },
              { label: 'Show jumpers', href: '/disciplines/show-jumping' },
              { label: 'Eventers', href: '/disciplines/eventing' },
              { label: 'Western riders', href: '/disciplines/western-pleasure' },
              { label: 'Reining', href: '/disciplines/reining' },
              { label: 'Trail riders', href: '/disciplines/trail-riding' },
              { label: 'Racing', href: '/racing' },
              { label: 'All disciplines', href: '/disciplines' },
            ].map((chip) => (
              <Link
                key={chip.label}
                href={chip.href}
                className="inline-flex items-center text-xs font-semibold no-underline transition-all duration-200 rounded-pill px-3 py-1.5 hover:bg-brand-primary-pale"
                style={{
                  background: 'transparent',
                  color: 'var(--brand-text-mid)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                {chip.label}
              </Link>
            ))}
          </nav>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group flex flex-col rounded-md overflow-hidden no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
                style={{ background: 'var(--brand-white)', border: '1px solid var(--brand-border)' }}
              >
                <div className={`relative aspect-[4/3] ${FILL_IMAGE}`}>
                  <StockImage
                    manifestKey={cat.manifestKey}
                    fallbackKey="horses-com:hero"
                    alt={cat.imageAlt}
                    aspect="4:3"
                    variant="inline"
                    subtleCredit
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="mb-3" style={{ color: 'var(--brand-primary)' }}>
                    <CategoryIconSvg name={cat.icon} />
                  </div>
                  <h3 className="font-display font-bold text-xl leading-snug mb-2" style={{ color: 'var(--brand-text-dark)' }}>
                    {cat.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--brand-text-mid)' }}>
                    {cat.desc}
                  </p>
                  <span className="mt-auto inline-flex items-center text-xs font-semibold uppercase tracking-eyebrow" style={{ color: 'var(--brand-primary)' }}>
                    Read
                    <span aria-hidden="true" className="ml-1.5 transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-container-sm sm:px-container py-section" style={{ background: 'var(--brand-white)' }}>
        <div className="mx-auto max-w-container-wide">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span aria-hidden="true" className="h-px w-8" style={{ background: 'var(--brand-accent)' }} />
              <span className="text-2xs font-bold uppercase tracking-eyebrow" style={{ color: 'var(--brand-accent)' }}>
                Popular on Horses.com
              </span>
            </div>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-brand-text-dark">
              Where owners start most
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURED_GUIDES.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group flex flex-col rounded-md overflow-hidden no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
                style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }}
              >
                <div className={`relative aspect-video ${FILL_IMAGE}`}>
                  <StockImage
                    manifestKey={guide.manifestKey}
                    fallbackKey="horses-com:hero"
                    alt={guide.imageAlt}
                    aspect="16:9"
                    variant="inline"
                    subtleCredit
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="text-2xs font-bold uppercase tracking-eyebrow mb-2" style={{ color: 'var(--brand-primary)' }}>
                    {guide.eyebrow}
                  </div>
                  <h3 className="font-display font-bold text-xl leading-snug mb-2" style={{ color: 'var(--brand-text-dark)' }}>
                    {guide.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--brand-text-mid)' }}>
                    {guide.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-white px-container-sm sm:px-container py-section border-y border-brand-border">
        <div className="max-w-container mx-auto">
          <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-start">
            <div className="min-w-0">
              <BodyConditionScoreCalculator />
            </div>
            <aside className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-6 h-0.5 bg-brand-primary" />
                  <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
                    Try it · Henneke body condition score
                  </span>
                </div>
                <h2 className="font-display font-bold text-brand-dark tracking-tight mb-3" style={{ fontSize: 'clamp(24px, 3vw, 38px)' }}>
                  Is your horse the right weight?
                </h2>
                <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
                  Body condition is the single most useful daily check an owner can make.
                </p>
                <p className="text-sm text-brand-text-mid leading-relaxed">
                  Score the six Henneke checkpoints and the tool returns the 1–9 score vets and nutritionists use.
                </p>
              </div>
              <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">More free calculators</div>
                <div className="flex flex-col gap-2 text-sm font-semibold">
                  <Link href="/tools/horse-weight-calculator" className="text-brand-primary no-underline hover:underline">Horse weight calculator →</Link>
                  <Link href="/tools/horse-feed-calculator" className="text-brand-primary no-underline hover:underline">Feed & hay calculator →</Link>
                  <Link href="/tools" className="text-brand-primary no-underline hover:underline">Browse the tools hub →</Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="px-container-sm sm:px-container py-section" style={{ background: 'var(--brand-surface)' }}>
        <div className="mx-auto max-w-container-wide">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-3">
              <span aria-hidden="true" className="h-px w-8" style={{ background: 'var(--brand-accent)' }} />
              <span className="text-2xs font-bold uppercase tracking-eyebrow" style={{ color: 'var(--brand-accent)' }}>
                Cornerstone Articles
              </span>
            </div>
            <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-brand-text-dark">Reference, maintained</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {FEATURED_ARTICLES.map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="group block rounded-md overflow-hidden no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
                style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)' }}
              >
                {art.imageKey ? (
                  <StockImage manifestKey={art.imageKey} alt={art.imageAlt} aspect="16:9" variant="inline" />
                ) : null}
                <div className="p-7 lg:p-8">
                  <div className="text-2xs font-bold uppercase tracking-eyebrow mb-3" style={{ color: 'var(--brand-primary)' }}>
                    {art.eyebrow}
                  </div>
                  <h3 className="font-display font-bold text-2xl leading-tight mb-3" style={{ color: 'var(--brand-text-dark)' }}>
                    {art.title}
                  </h3>
                  <p className="text-base leading-relaxed mb-5" style={{ color: 'var(--brand-text-mid)' }}>
                    {art.teaser}
                  </p>
                  <span className="text-xs font-semibold uppercase tracking-eyebrow" style={{ color: 'var(--brand-text-light)' }}>
                    {art.readTime} read
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
