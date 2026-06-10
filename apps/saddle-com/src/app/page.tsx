/**
 * Saddle.com Homepage — /
 *
 * Magazine-quality treatment, server component, shared CarloOS UI.
 * Visual position: luxury-equestrian (Hermès / Stubben / Pessoa adjacency),
 * never barn-rustic. Bodoni Moda's high-contrast didone IS the identity —
 * everything else is restrained around it. CSS-only visuals: no real
 * photography until the image-strategy ships.
 *
 * Voice: research-anchored, used-market transparent, SMS / CSF referenced.
 * No fake authority claims, no paid placements implied, no smiling-rider
 * stock photography.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage , SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'
// Live tree-size estimator embedded on the homepage — a fit tool you use on
// the first screens, not a link to one (premium gate 3).
import { TreeSizeEstimator } from '../components/visual/TreeSizeEstimator'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddles & Equestrian Equipment, Compared',
  description:
    'Saddle reviews, fitting guides, leather care, and brand comparisons — drawn from CSF reviewer notes and Society of Master Saddlers material.',
  path: '/',
})

// ── Inline SVG icon set — restrained line illustration, no emoji ───────────

type CategoryIcon =
  | 'english'
  | 'western'
  | 'guides'
  | 'reviews'
  | 'inspection'
  | 'checklist'

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
    case 'english':
      // Close-contact saddle silhouette — flap + cantle line
      return (
        <svg {...common}>
          <path d="M3 14c2 0 4-2 7-2s5 1 7 1 3-1 4-2" />
          <path d="M4 14c0 2 1 4 3 4h10c2 0 3-2 3-4" />
          <path d="M10 9l1-2c.5-.8 1.2-1 2-1s1.5.2 2 1l1 2" />
        </svg>
      )
    case 'western':
      // Western saddle with horn
      return (
        <svg {...common}>
          <path d="M3 14c2 0 4-2 7-2s5 1 7 1 3-1 4-2" />
          <path d="M4 14c0 2.5 1 4.5 3 4.5h10c2 0 3-2 3-4.5" />
          <path d="M12 7v-3" />
          <circle cx="12" cy="4" r="1" />
        </svg>
      )
    case 'guides':
      // Open book
      return (
        <svg {...common}>
          <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1V5z" />
          <path d="M12 6v14" />
        </svg>
      )
    case 'reviews':
      // Award ribbon — comparative conclusion
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5.5" />
          <path d="M8.5 13L6 21l3.5-2 2.5 1.5 2.5-1.5L18 21l-2.5-8" />
          <path d="M12 6.5l1 2 2.2.2-1.7 1.4.6 2.2L12 11l-2.1 1.3.6-2.2-1.7-1.4 2.2-.2z" />
        </svg>
      )
    case 'inspection':
      // Magnifier over stitched leather grain
      return (
        <svg {...common}>
          <circle cx="10" cy="10" r="5" />
          <path d="M14 14l6 6" />
          <path d="M8 10h4M8 12h4" />
        </svg>
      )
    case 'checklist':
      // Clipboard with ticks
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="17" rx="1.5" />
          <path d="M9 3h6v3H9z" />
          <path d="M8.5 11l1.5 1.5L13 9.5" />
          <path d="M8.5 16l1.5 1.5L13 14.5" />
        </svg>
      )
  }
}

// ── Featured reviews — scorecard treatment, CSS-only ───────────────────────

interface FeaturedReview {
  badge: string
  discipline: string
  brand: string
  model: string
  score: string
  takeaway: string
  href: string
  /**
   * Optional cover photo manifest key. Resolved via image-manifest.json
   * (populated by sync-images.mjs) so photographer attribution is always
   * rendered. Per QC §1: no raw CDN URLs here.
   */
  imageKey?: string
  /**
   * Guaranteed-synced manifest key. Used when `imageKey` is not yet synced
   * so the card renders a real on-brand photo instead of the paw placeholder.
   */
  imageFallbackKey?: string
  imageAlt?: string
}

const FEATURED_REVIEWS: FeaturedReview[] = [
  {
    badge: 'Best Dressage',
    discipline: 'Dressage',
    brand: 'Stubben',
    model: 'Roxane',
    score: '9.5',
    takeaway:
      'Deep seat, narrow twist, hand-stitched bridle leather. Pricing aligned with the German-made cohort; resale holds among the strongest in the category.',
    href: '/reviews/stubben-saddle-review',
    imageKey: 'saddle-com:review-dressage',
    imageFallbackKey: 'saddle-com:category-dressage',
    imageAlt: 'Dressage horse in tack at the canter',
  },
  {
    badge: 'Best Jumping',
    discipline: 'Jumping',
    brand: 'Pessoa',
    model: 'Gen X Pro',
    score: '9.2',
    takeaway:
      'Forward flap, anatomic panels, calfskin grip. The benchmark performance jumper; widely fitted, with predictable resale.',
    href: '/reviews/pessoa-saddle-review',
    imageKey: 'saddle-com:review-jumping',
    imageFallbackKey: 'saddle-com:category-jumping',
    imageAlt: 'Show jumper mid-flight over a fence',
  },
  {
    badge: 'Best Value',
    discipline: 'All-Purpose',
    brand: 'Collegiate',
    model: 'Convertible AP',
    score: '8.7',
    takeaway:
      'Adjustable gullet, synthetic-blocked tree, calf-padded flap. The honest entry-tier choice for a growing horse or a second-saddle slot.',
    href: '/reviews/collegiate-saddle-review',
    imageKey: 'saddle-com:review-allpurpose',
    imageAlt: 'Horse and rider in an all-purpose schooling session',
  },
]

// ── Category grid — six lanes, restrained copy ─────────────────────────────

const CATEGORIES: Array<{
  icon: CategoryIcon
  title: string
  desc: string
  href: string
}> = [
  {
    icon: 'english',
    title: 'English Saddles',
    desc: 'Dressage, jumping, all-purpose — organized by discipline, ranked on tree fit, panel contact, balance, and resale.',
    href: '/english',
  },
  {
    icon: 'western',
    title: 'Western Saddles',
    desc: 'Roping, barrel, trail, and ranch — organized by discipline, evaluated on tree quality, rigging position, and rider geometry.',
    href: '/western',
  },
  {
    icon: 'guides',
    title: 'Buying Guides',
    desc: 'Seat size, leather grades, tree types — referenced against Society of Master Saddlers material.',
    href: '/guides/saddle-fit-guide',
  },
  {
    icon: 'reviews',
    title: 'Brand Reviews',
    desc: 'Stubben, Pessoa, Collegiate, Wintec, Bates — same rubric, no paid placements.',
    href: '/reviews',
  },
  {
    icon: 'inspection',
    title: 'Used-Saddle Inspection',
    desc: 'Tree integrity, panel symmetry, leather condition. Eleven checks before you wire a private seller.',
    href: '/guides/used-saddle-buying-guide',
  },
  {
    icon: 'checklist',
    title: 'Saddle-Fit Checklist',
    desc: 'Wither clearance, channel width, balance point, panel contact — the field check between professional fittings.',
    href: '/guides/saddle-fit-guide',
  },
]

// ── Trust claims — dark masthead bar ───────────────────────────────────────

const TRUST_CLAIMS: string[] = [
  'Research-anchored reviews',
  'SMS / MSA-aligned guidance',
  'No paid brand placements',
  'Used-market transparent',
]

const homeSchema = combineSchemas(
  buildOrganizationSchema({ siteId: 'saddle-com', name: 'Saddle.com', url: 'https://saddle.com' }),
  buildWebSiteSchema({ siteId: 'saddle-com', name: 'Saddle.com', url: 'https://saddle.com' }),
)

export default function SaddleHomePage() {
  return (
    <>
      <SchemaScript schema={homeSchema} />
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark">
        {/* Refined leather-grain wash — three layered radial fields plus a
            subtle vertical grain, all CSS. The brass radial in the upper right
            mimics raking gallery light; the deep cordovan field lower-left
            grounds the masthead. No photography. */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 85% 65% at 82% 18%, rgba(182,136,48,0.20) 0%, transparent 55%)',
              'radial-gradient(ellipse 70% 70% at 10% 92%, rgba(94,59,21,0.25) 0%, transparent 60%)',
              'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(140,90,42,0.05) 0%, transparent 70%)',
              'linear-gradient(180deg, rgba(16,10,4,0) 0%, rgba(16,10,4,0.55) 95%)',
            ].join(','),
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(96deg, rgba(255,255,255,0.6) 0px, rgba(255,255,255,0.6) 1px, transparent 1px, transparent 4px)',
          }}
        />

        {/* Hero photo — manifest-managed StockImage with photographer
            attribution (subtle overlay). Image-first on mobile: a real,
            on-brand saddle-leather photo leads the first screen above the
            masthead text. On desktop it sits beside the masthead as the
            right rail. saddle-com:hero is a verified-synced key. Per QC §1:
            no raw CDN URLs, attribution always rendered. */}
        <div className="relative z-10 mx-auto max-w-container-wide px-container-sm sm:px-container py-12 sm:py-20 lg:py-28">
          <div className="lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:items-center">
            {/* Mobile-first hero photo — appears first on mobile (order-first),
                moves to the right rail on desktop. */}
            <div className="order-first lg:order-last mb-10 lg:mb-0">
              <div className="overflow-hidden rounded-xl border border-white/10 shadow-card-hover">
                <StockImage
                  manifestKey="saddle-com:hero"
                  alt="Hand-stitched saddle leather and tack"
                  aspect="4:3"
                  variant="inline"
                  priority
                  subtleCredit
                />
              </div>
            </div>
          <div className="max-w-3xl lg:order-first">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-7">
              <span
                aria-hidden="true"
                className="h-px w-10"
                style={{ background: 'var(--brand-accent)' }}
              />
              <span
                className="text-2xs font-bold uppercase tracking-eyebrow"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                The Saddle Reference
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.02] mb-6"
              style={{ fontSize: 'clamp(48px, 7.8vw, 96px)' }}
            >
              Saddle.com
            </h1>

            {/* Italic tagline — Bodoni's italic is where the luxury comes
                through. Brass-tinted, generous size, restrained line height. */}
            <p
              className="font-display italic mb-8"
              style={{
                color: 'var(--brand-accent-light)',
                fontSize: 'clamp(24px, 2.6vw, 34px)',
                lineHeight: 1.22,
                maxWidth: '46rem',
              }}
            >
              Saddles, tack, and equestrian equipment — compared with research.
            </p>

            {/* Positioning — ~80 words */}
            <p className="text-base lg:text-lg text-white/75 leading-relaxed max-w-2xl mb-10">
              Saddle.com is the comparative reference for English and Western
              equestrians who treat a saddle as the multi-thousand-dollar
              decision it is. Every review runs on the same rubric — tree fit,
              panel contact, leather grade, balance, and resale durability.
              Buying guides are anchored to Society of Master Saddlers and
              Master Saddlers Association reference material. Where the trade
              press runs features and tack shops exist to move stock, we
              compare the same way, every time, and we show the work.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link
                href="/guides/saddle-fit-guide"
                className="inline-flex items-center font-semibold text-sm px-7 py-3.5 rounded no-underline transition-colors duration-200"
                style={{
                  background: 'var(--brand-accent)',
                  color: 'var(--brand-dark)',
                }}
              >
                Read the saddle-fit guide
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/reviews/best-english-saddles"
                className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors"
              >
                See the English saddle ranking
                <span
                  aria-hidden="true"
                  className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>

            {/* Hairline + metric strip */}
            <div
              className="mt-14 pt-7 flex flex-wrap gap-x-12 gap-y-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              {[
                ['30+', 'Brands evaluated'],
                ['All', 'English & Western disciplines'],
                ['SMS', 'Reference-aligned'],
              ].map(([n, l]) => (
                <div key={l}>
                  <div
                    className="font-display text-2xl font-bold text-white tracking-tight"
                    style={{ fontFeatureSettings: '"lnum" 1, "tnum" 1' }}
                  >
                    {n}
                  </div>
                  <div className="text-2xs uppercase tracking-eyebrow mt-1 text-white/45">
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR — dark, restrained, brass ticks ────────────── */}
      <div
        className="px-container-sm sm:px-container py-4"
        style={{
          background: 'var(--brand-dark)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="mx-auto max-w-container-wide flex flex-wrap items-center justify-center sm:justify-between gap-y-2 gap-x-6">
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
                  className="ml-6 hidden sm:inline-block h-3 w-px"
                  style={{ background: 'rgba(255,255,255,0.14)' }}
                />
              )}
            </span>
          ))}
        </div>
      </div>

      {/* ── LIVE TOOL — saddle tree-size estimator (premium gate 3) ─── */}
      <section className="bg-brand-white px-container-sm sm:px-container py-section border-y border-brand-border">
        <div className="mx-auto max-w-container-wide">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Try it · Tree-size estimator
          </div>
          <h2 className="font-display font-black text-brand-dark tracking-tight mb-3" style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>
            What tree width does your horse need?
          </h2>
          <p className="text-sm text-brand-text-mid mb-7 max-w-2xl leading-relaxed">
            Wither profile and breed type point you to a starting tree width — the single
            biggest fit decision before you shop, and where most ill-fitting saddles go wrong.
          </p>
          <TreeSizeEstimator />
        </div>
      </section>

      {/* ── CATEGORY GRID — six lanes ───────────────────────────── */}
      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-end justify-between flex-wrap gap-y-3 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  aria-hidden="true"
                  className="h-px w-8"
                  style={{ background: 'var(--brand-accent)' }}
                />
                <span
                  className="text-2xs font-bold uppercase tracking-eyebrow"
                  style={{ color: 'var(--brand-accent-dark)' }}
                >
                  Where to start
                </span>
              </div>
              <h2
                className="font-display font-bold text-brand-text-dark tracking-tight"
                style={{ fontSize: 'clamp(30px, 3.6vw, 44px)', lineHeight: 1.1 }}
              >
                Six lanes, one rubric.
              </h2>
            </div>
            <Link
              href="/reviews"
              className="text-sm font-semibold text-brand-primary no-underline hover:underline"
            >
              See every review →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CATEGORIES.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group relative block bg-brand-white border border-brand-border rounded-lg p-7 no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-primary/40"
              >
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-7 bottom-7 w-px"
                  style={{ background: 'var(--brand-accent)', opacity: 0.4 }}
                />
                <div
                  className="mb-5"
                  style={{ color: 'var(--brand-primary-dark)' }}
                >
                  <CategoryIconSvg name={c.icon} />
                </div>
                <h3
                  className="font-display font-bold text-brand-text-dark tracking-tight mb-2"
                  style={{ fontSize: '1.35rem', lineHeight: 1.2 }}
                >
                  {c.title}
                </h3>
                <p className="text-sm text-brand-text-mid leading-relaxed">
                  {c.desc}
                </p>
                <span
                  aria-hidden="true"
                  className="absolute right-6 bottom-6 text-brand-primary/0 group-hover:text-brand-primary transition-colors"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED REVIEWS — scorecard treatment ──────────────── */}
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <div className="mx-auto max-w-container-wide">
          <div className="flex items-end justify-between flex-wrap gap-y-3 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  aria-hidden="true"
                  className="h-px w-8"
                  style={{ background: 'var(--brand-accent)' }}
                />
                <span
                  className="text-2xs font-bold uppercase tracking-eyebrow"
                  style={{ color: 'var(--brand-accent-dark)' }}
                >
                  Top of the rubric · 2025
                </span>
              </div>
              <h2
                className="font-display font-bold text-brand-text-dark tracking-tight"
                style={{ fontSize: 'clamp(30px, 3.6vw, 44px)', lineHeight: 1.1 }}
              >
                Saddle reviews.
              </h2>
            </div>
            <Link
              href="/reviews"
              className="text-sm font-semibold text-brand-primary no-underline hover:underline"
            >
              All reviews →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {FEATURED_REVIEWS.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group relative bg-brand-white border border-brand-border rounded-lg overflow-hidden no-underline transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover hover:border-brand-primary/40 flex flex-col"
              >
                {/* Cover photo — manifest-managed with photographer attribution.
                    Per QC §1: no raw CDN URLs. */}
                {r.imageKey ? (
                  <StockImage
                    manifestKey={r.imageKey}
                    fallbackKey={r.imageFallbackKey}
                    alt={r.imageAlt}
                    aspect="4:3"
                    variant="inline"
                  />
                ) : null}
                <div className="relative p-7 flex flex-col flex-1">
                {/* Brass top-rule */}
                <span
                  aria-hidden="true"
                  className="absolute left-7 right-7 top-0 h-px"
                  style={{ background: 'var(--brand-accent)' }}
                />

                {/* Eyebrow + score header */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex flex-col gap-1">
                    <span
                      className="text-2xs font-bold uppercase tracking-eyebrow"
                      style={{ color: 'var(--brand-accent-dark)' }}
                    >
                      {r.badge}
                    </span>
                    <span className="text-2xs uppercase tracking-wider text-brand-text-light">
                      {r.discipline}
                    </span>
                  </div>
                  <div className="text-right">
                    <div
                      className="font-display font-black text-brand-primary leading-none tracking-tight"
                      style={{ fontSize: '2.4rem', fontFeatureSettings: '"lnum" 1, "tnum" 1' }}
                    >
                      {r.score}
                    </div>
                    <div className="text-2xs uppercase tracking-eyebrow text-brand-text-light mt-1">
                      / 10
                    </div>
                  </div>
                </div>

                {/* Brand + model — Bodoni at full luxury weight */}
                <h3
                  className="font-display font-black text-brand-text-dark tracking-tight mb-1"
                  style={{ fontSize: '1.6rem', lineHeight: 1.05 }}
                >
                  {r.brand}
                </h3>
                <p
                  className="font-display italic text-brand-text-mid mb-5"
                  style={{ fontSize: '1.05rem' }}
                >
                  {r.model}
                </p>

                {/* Editor's take */}
                <p className="text-sm text-brand-text-mid leading-relaxed mb-6 flex-1">
                  {r.takeaway}
                </p>

                <span className="inline-flex items-center text-xs font-semibold text-brand-primary uppercase tracking-wider mt-auto">
                  Read the review
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

      {/* ── EDITORIAL BAND — saddle-leather wash + Bodoni italic pull quote ── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 70% 70% at 20% 20%, rgba(182,136,48,0.18) 0%, transparent 55%)',
              'radial-gradient(ellipse 60% 80% at 90% 90%, rgba(94,59,21,0.40) 0%, transparent 60%)',
              'linear-gradient(180deg, var(--brand-primary-dark) 0%, var(--brand-dark) 100%)',
            ].join(','),
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
          style={{
            backgroundImage:
              'repeating-linear-gradient(112deg, rgba(255,255,255,0.5) 0px, rgba(255,255,255,0.5) 1px, transparent 1px, transparent 4px)',
          }}
        />
        <div className="relative z-10 mx-auto max-w-container px-container-sm sm:px-container py-section">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span
                aria-hidden="true"
                className="h-px w-8"
                style={{ background: 'var(--brand-accent-light)' }}
              />
              <span
                className="text-2xs font-bold uppercase tracking-eyebrow"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                Editorial standard
              </span>
            </div>

            <blockquote
              className="font-display italic text-white"
              style={{
                fontSize: 'clamp(28px, 3.4vw, 44px)',
                lineHeight: 1.18,
                letterSpacing: '-0.005em',
              }}
            >
              &ldquo;A saddle is the most consequential piece of tack a rider
              will buy. It deserves to be evaluated like one — on tree fit,
              leather grade, panel contact, balance, and the depreciation curve
              a serious owner will eventually sell back into.&rdquo;
            </blockquote>

            <p className="mt-8 text-base text-white/65 leading-relaxed max-w-2xl">
              We don&apos;t run sponsored reviews. We don&apos;t inflate
              scores. Every saddle on this site is judged against the same
              published rubric — and re-rated when manufacturers change tree
              specs, panel construction, or leather sourcing.
            </p>

            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <Link
                href="/editorial-standards"
                className="inline-flex items-center font-semibold text-sm px-7 py-3.5 rounded no-underline transition-colors duration-200"
                style={{
                  background: 'var(--brand-accent)',
                  color: 'var(--brand-dark)',
                }}
              >
                Read the editorial standard
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/guides/used-saddle-buying-guide"
                className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors"
              >
                The used-saddle inspection guide
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

      {/* ── EMAIL CAPTURE ───────────────────────────────────────── */}
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-surface)' }}
      >
        <div className="mx-auto max-w-container">
          <EmailCapture
            variant="section"
            siteId="saddle-com"
            title="The Saddle Buyer's Reference"
            subtitle="New reviews, used-market intelligence, and fitting guidance — issued every other week. SMS and CSF-referenced, no sponsored content."
            ctaText="Get the reference"
            source="homepage-section"
            perks={[
              'Research-anchored',
              'All disciplines covered',
              'Used-market guidance',
              'No paid placements',
            ]}
          />
        </div>
      </section>

      {/* ── PHOTO ATTRIBUTION — restrained credit strip, Unsplash hygiene ── */}
      <aside
        className="px-container-sm sm:px-container py-6"
        style={{
          background: 'var(--brand-dark)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
        aria-label="Photo credits"
      >
        <p
          className="mx-auto max-w-container-wide text-2xs uppercase tracking-eyebrow"
          style={{ color: 'rgba(255,255,255,0.55)' }}
        >
          Hero & featured photography: contributors on{' '}
          <a
            href="https://unsplash.com"
            rel="noopener noreferrer"
            target="_blank"
            className="underline"
            style={{ color: 'rgba(255,255,255,0.78)' }}
          >
            Unsplash
          </a>
          . Used under the Unsplash License.
        </p>
      </aside>
    </>
  )
}
