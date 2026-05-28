/**
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> origin/main
 * Horses.com — placeholder homepage.
 * Skeleton only: real content arrives in a later sprint.
 */

import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Horses.com',
  description:
    'Premium domain. Site coming soon — research-based reference for horse owners.',
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
 * Horses.com Homepage — /
 * Server component. Shared CarloOS components for all UI.
 * Visual pass: refined-equestrian palette, Playfair Display + Source Sans 3,
 * CSS-only hero (no real photography until image-strategy ships).
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'The Reference for Horse Owners',
  description:
    'Horses.com — research-based reference for horse owners across discipline lines. Breed guides, equine health, gear reviews, supplement evaluations, and the 90-day first-horse roadmap.',
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
  path: '/',
  type: 'website',
})

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/main
>>>>>>> origin/main
export default function HomePage() {
  const year = new Date().getFullYear()

  return (
    <div
      style={{
        maxWidth: '720px',
        margin: '0 auto',
        padding: '96px 24px 64px',
        textAlign: 'center',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '3rem',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          color: 'var(--brand-text-dark)',
          marginBottom: '20px',
        }}
      >
        Horses.com
      </h1>
      <p
        style={{
          fontSize: '1.125rem',
          lineHeight: 1.6,
          color: 'var(--brand-text-mid)',
        }}
      >
        Premium domain. Site coming soon — research-based reference for horse owners.
      </p>
      <footer
        style={{
          marginTop: '96px',
          fontSize: '0.875rem',
          color: 'var(--brand-text-light)',
        }}
      >
        © {year} Horses.com
      </footer>
    </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
// ── Inline SVG icon set — restrained line illustration, no emoji ────────────

type CategoryIcon =
  | 'breeds'
  | 'health'
  | 'guides'
  | 'supplements'
  | 'reviews'
  | 'roadmap'

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
      // Abstract horse head silhouette in line — restrained, no cartoon
      return (
        <svg {...common}>
          <path d="M6 20c0-3 1-5 2-7 .5-1 .8-2 .8-3.2 0-1.2-.5-2.3-1.2-3.1-.5-.5-.5-1.3 0-1.7.5-.5 1.3-.5 1.8 0 .6.6 1.3 1 2.1 1.2 1 .3 2 .4 3 .4 2 0 3.5.8 4.5 2.3.7 1 1 2.2 1 3.6 0 3.5-2 7.5-2 7.5" />
          <path d="M8.5 11.5l-1.5-1" />
          <path d="M14 9.5c.3-.3.6-.7.6-1.1" />
        </svg>
      )
    case 'health':
      // Shield with stethoscope arc — vet-respectful, not red-cross hospital
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 11v2a3 3 0 0 0 6 0v-2" />
          <circle cx="9" cy="10" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="15" cy="10" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'guides':
      // Open book — reference voice
      return (
        <svg {...common}>
          <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1V5z" />
          <path d="M12 6v14" />
        </svg>
      )
    case 'supplements':
      // Capsule + pellet — restrained, not bottle-marketing
      return (
        <svg {...common}>
          <rect x="3" y="9" width="13" height="6" rx="3" />
          <path d="M9.5 9v6" />
          <circle cx="19" cy="6" r="1.4" />
          <circle cx="20.5" cy="17.5" r="1.2" />
        </svg>
      )
    case 'reviews':
      // Award ribbon — comparison conclusion, not cheerleading star
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5.5" />
          <path d="M8.5 13L6 21l3.5-2 2.5 1.5 2.5-1.5L18 21l-2.5-8" />
          <path d="M12 6.5l1 2 2.2.2-1.7 1.4.6 2.2L12 11l-2.1 1.3.6-2.2-1.7-1.4 2.2-.2z" />
        </svg>
      )
    case 'roadmap':
      // Path with milestones — 90-day owner roadmap motif
      return (
        <svg {...common}>
          <path d="M4 17c4 0 4-10 8-10s4 10 8 10" />
          <circle cx="4" cy="17" r="1.4" />
          <circle cx="12" cy="11" r="1.4" />
          <circle cx="20" cy="17" r="1.4" />
        </svg>
      )
  }
}

// ── Page data — categories, articles, trust claims ─────────────────────────

const CATEGORIES: {
  icon: CategoryIcon
  title: string
  desc: string
  href: string
}[] = [
  {
    icon: 'breeds',
    title: 'Breeds',
    desc: 'Discipline-tagged breed references with bloodlines, conformation, and genetic-panel coverage.',
    href: '/breeds/quarter-horse',
  },
  {
    icon: 'health',
    title: 'Health',
    desc: 'Condition references with AAEP-aligned guidance and when-to-call-your-vet thresholds.',
    href: '/health/equine-ulcers',
  },
  {
    icon: 'guides',
    title: 'Guides',
    desc: 'Tack, turnout, and management fundamentals — written for owners who own the decision.',
    href: '/guides/saddle-fit-basics',
  },
  {
    icon: 'supplements',
    title: 'Supplements',
    desc: 'Ingredient-by-ingredient evaluation with research citations and dosing context.',
    href: '/supplements/joint-supplements',
  },
  {
    icon: 'reviews',
    title: 'Reviews',
    desc: 'Gear comparisons scored on the same dimensions, discipline-filterable.',
    href: '/reviews/best-winter-horse-blankets',
  },
  {
    icon: 'roadmap',
    title: 'First-Horse Roadmap',
    desc: 'A free 90-day plan and 8-email course for the first-time owner.',
    href: '/first-horse-roadmap',
  },
]

const FEATURED_ARTICLES: {
  href: string
  eyebrow: string
  title: string
  teaser: string
  readTime: string
}[] = [
  {
    href: '/breeds/quarter-horse',
    eyebrow: 'Breed Guide',
    title: 'American Quarter Horse',
    teaser:
      'The most populous horse breed in the United States — short-coupled, heavily muscled, and built for explosive acceleration. AQHA registry, the 5-panel genetic test, and what to expect as a first-time owner.',
    readTime: '14 min',
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
      'A field reference for the owner checking tree width, wither clearance, and panel contact between professional fittings. Eight checks, in order, that catch the most common fit problems.',
    readTime: '12 min',
  },
  {
    href: '/reviews/best-winter-horse-blankets',
    eyebrow: 'Gear Review',
    title: 'Best Winter Horse Blankets',
    teaser:
      'Denier ratings, fill weight, gusset design, and shoulder-fit by build. Eight blankets compared on the same dimensions, discipline-tagged, with a turnout-vs-stable decision tree.',
    readTime: '11 min',
  },
]

const TRUST_CLAIMS = [
  'Research-based, citation-anchored content',
  'Cross-discipline coverage',
  'No paid placements',
  'Veterinarian-respectful',
]

// ── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark">
        {/* Moody environmental wash — CSS only until photography ships.
            Two radial washes (warm dawn light upper-right, deep green shadow
            lower-left) over the green-black masthead, with a subtle vertical
            grain to keep the field from reading flat. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 80% 60% at 78% 18%, rgba(182,136,48,0.22) 0%, transparent 55%)',
              'radial-gradient(ellipse 70% 70% at 12% 95%, rgba(31,58,47,0.55) 0%, transparent 60%)',
              'linear-gradient(180deg, rgba(19,36,28,0.0) 0%, rgba(19,36,28,0.55) 95%)',
            ].join(','),
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.07] mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(90deg, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.4) 1px, transparent 1px, transparent 3px)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-container-wide px-container-sm sm:px-container py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow — brass rule + tracking-eyebrow caps */}
            <div className="flex items-center gap-3 mb-6">
              <span
                aria-hidden="true"
                className="h-px w-8"
                style={{ background: 'var(--brand-accent)' }}
              />
              <span
                className="text-2xs font-bold uppercase tracking-eyebrow"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                The Horse Owner Reference
              </span>
            </div>

            {/* Headline — Playfair Display 700 */}
            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.02] mb-6"
              style={{ fontSize: 'clamp(48px, 7.5vw, 92px)' }}
            >
              Horses.com
            </h1>

            {/* Tagline — Playfair italic, brass-tinted, generous size */}
            <p
              className="font-display italic mb-7"
              style={{
                color: 'var(--brand-accent-light)',
                fontSize: 'clamp(22px, 2.4vw, 30px)',
                lineHeight: 1.25,
                maxWidth: '46rem',
              }}
            >
              The reference for horse owners — across discipline lines.
            </p>

            {/* Subtitle — 60-90 words establishing what the site is and is not */}
            <p className="text-base lg:text-lg text-white/75 leading-relaxed max-w-2xl mb-9">
              Horses.com is the category-defining knowledge hub for horse owners
              across English, Western, trail, racing, eventing, and driving. Not
              a magazine. Not a shop. Not a community forum. Every gear category,
              every supplement, every common ailment — evaluated with the rigor a
              veterinary textbook would apply, written for the owner who has to
              make the decision at 7am before the farrier arrives. Where Practical
              Horseman runs features and Dover sells product, Horses.com explains
              what the product is, when it matters, and which discipline it
              belongs to.
            </p>

            {/* CTAs — primary brass-on-dark, secondary text-arrow */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link
                href="/health/equine-ulcers"
                className="inline-flex items-center font-semibold text-sm px-7 py-3.5 rounded no-underline transition-colors duration-200"
                style={{
                  background: 'var(--brand-accent)',
                  color: 'var(--brand-dark)',
                }}
              >
                Read the breed health series
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
              <Link
                href="/first-horse-roadmap"
                className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors"
              >
                Get the 90-day first-horse roadmap
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

      {/* ── TRUST BAR ──────────────────────────────────────────────── */}
      <div
        className="px-container-sm sm:px-container py-4"
        style={{
          background: 'var(--brand-dark)',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        <div className="mx-auto max-w-container-wide flex flex-wrap items-center justify-center sm:justify-between gap-y-2">
          {TRUST_CLAIMS.map((item, i, arr) => (
            <span
              key={item}
              className="flex items-center text-2xs font-semibold uppercase tracking-eyebrow whitespace-nowrap"
              style={{ color: 'rgba(255,255,255,0.78)' }}
            >
              <span
                aria-hidden="true"
                className="mr-2"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                ✓
              </span>
              {item}
              {i < arr.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden sm:inline mx-5 h-3 w-px"
                  style={{ background: 'rgba(255,255,255,0.18)' }}
                />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── CATEGORIES ─────────────────────────────────────────────── */}
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
                  style={{ color: 'var(--brand-accent)' }}
                >
                  By Category
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
              Every section reads the same whether you arrived from a search for
              colic symptoms or a comparison of dressage saddles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group block p-7 rounded-md no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
                style={{
                  background: 'var(--brand-white)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                <div
                  className="mb-5 transition-colors"
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
                  Read
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

      {/* ── FEATURED ARTICLES ──────────────────────────────────────── */}
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
                  style={{ color: 'var(--brand-accent)' }}
                >
                  Cornerstone Articles
                </span>
              </div>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-brand-text-dark">
                Reference, maintained
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {FEATURED_ARTICLES.map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="group block p-7 lg:p-8 rounded-md no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1"
                style={{
                  background: 'var(--brand-surface)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                {/* Decorative top rule — brass, signals premium */}
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL POSITIONING BLOCK ────────────────────────────── */}
      <section
        className="px-container-sm sm:px-container py-section relative overflow-hidden"
        style={{ background: 'var(--brand-primary)' }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 60% at 80% 20%, rgba(182,136,48,0.18) 0%, transparent 60%)',
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
                Editorial Standard
              </span>
            </div>
            <h2
              className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-white"
              style={{ lineHeight: 1.15 }}
            >
              The site reads the same
              <br />
              <em
                className="not-italic font-display italic"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                whichever door you came in.
              </em>
            </h2>
          </div>
          <div className="text-white/85 leading-relaxed space-y-5">
            <p className="text-base lg:text-lg">
              Every claim is sourced — veterinary journal, AAEP, breed registry,
              FEI rule book, manufacturer spec sheet. Every gear review is
              discipline-tagged so an English rider does not get Western
              recommendations by accident. Every health article carries a
              veterinary disclaimer and points to <em>when to call your vet</em>.
            </p>
            <p className="text-base lg:text-lg">
              We are confident, grounded, vet-respectful, technical, and
              plainspoken. We do not say <em>revolutionary</em>. We do not say
              <em> game-changing</em>. We explain the cannon bone is the bone
              between the knee and the fetlock, and we move on.
            </p>
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ──────────────────────────────────────────── */}
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Reference"
          subtitle="One email a week: a deep-dive on a single breed, condition, or piece of gear. Citation-anchored. No product pushes."
          ctaText="Subscribe"
          source="homepage"
          perks={[
            'One email weekly',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
>>>>>>> origin/main
>>>>>>> origin/main
>>>>>>> origin/main
  )
}
