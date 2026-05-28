/**
 * Dog.com Homepage — /
 *
 * Magazine-quality rebuild (2026-05-28). Server component.
 *
 * Positioning: "A reference for dog owners." Research-anchored, citation-
 * heavy, no fabricated authority. The destination — not a magazine, not a
 * marketplace, not a community forum.
 *
 * Visual voice: Playfair Display for editorial display type + DM Sans for
 * UI/body (wired by next/font in layout.tsx). Warm terracotta primary on
 * deep cocoa masthead; caramel accent rules for editorial polish. CSS-only
 * visuals — no real photography in this pass (image-strategy ships later).
 *
 * Strict trust posture (QC-STANDARDS §1): no "our team tested", no fake DVM
 * bylines, no invented superlatives. The trust bar reads as a constitution,
 * not a marketing flourish.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'A Reference for Dog Owners',
  description:
    'Dog.com is the research-based reference for dog owners — breed health, citation-anchored articles, honest editorial scores, and the printable puppy schedule.',
  path: '/',
  type: 'website',
})

// ── Inline SVG icon set — single visual voice, 1.5px stroke geometry ───────
// Server-component-safe (no JS shipped) line icons. No emoji anywhere on
// the page — iconography reads editorial, not playful.

type CategoryIconName =
  | 'breeds'
  | 'health'
  | 'nutrition'
  | 'training'
  | 'reviews'
  | 'puppy'

function CategoryIcon({ name }: { name: CategoryIconName }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  switch (name) {
    case 'breeds':
      // Open book / reference — encyclopedia voice
      return (
        <svg {...common}>
          <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1V5z" />
          <path d="M12 6v14" />
        </svg>
      )
    case 'health':
      // Shield + stethoscope arc — vet-respectful, not clinic-cross
      return (
        <svg {...common}>
          <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" />
          <path d="M9 11v2a3 3 0 0 0 6 0v-2" />
          <circle cx="9" cy="10" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="15" cy="10" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'nutrition':
      // Food bowl + steam — straightforward, not branded
      return (
        <svg {...common}>
          <path d="M3 11h18" />
          <path d="M4 11a8 8 0 0 0 16 0" />
          <path d="M9 7c0-1 .5-2 1.5-2.5M13 7c0-1 .5-2 1.5-2.5" />
        </svg>
      )
    case 'training':
      // Leash + clip — positive-reinforcement core tool
      return (
        <svg {...common}>
          <path d="M5 4c0 3 2 5 4.5 5S14 7 14 4" />
          <path d="M9.5 9v10" />
          <circle cx="9.5" cy="20" r="1.4" />
          <path d="M5 4l-1 1M14 4l1 1" />
          <path d="M17 12h3v3h-3z" />
        </svg>
      )
    case 'reviews':
      // Comparison rubric — three bars at different heights
      return (
        <svg {...common}>
          <path d="M4 20V10" />
          <path d="M12 20V4" />
          <path d="M20 20v-8" />
          <path d="M3 20h18" />
        </svg>
      )
    case 'puppy':
      // Paw pad — only allowed paw motif, geometric
      return (
        <svg {...common}>
          <ellipse cx="5.5" cy="10" rx="1.6" ry="2.2" />
          <ellipse cx="9" cy="6.5" rx="1.6" ry="2.2" />
          <ellipse cx="15" cy="6.5" rx="1.6" ry="2.2" />
          <ellipse cx="18.5" cy="10" rx="1.6" ry="2.2" />
          <path d="M8 17.5c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.4-1 2.5-2.4 2.5h-3.2C9 20 8 18.9 8 17.5z" />
        </svg>
      )
  }
}

// ── Page data ──────────────────────────────────────────────────────────────

const CATEGORIES: {
  icon: CategoryIconName
  title: string
  desc: string
  href: string
}[] = [
  {
    icon: 'breeds',
    title: 'Breeds',
    desc: 'Health-anchored breed references — genetic risk, conformation realities, and what changes after the puppy year.',
    href: '/breeds/golden-retriever',
  },
  {
    icon: 'health',
    title: 'Health',
    desc: 'Conditions, prevention, and when-to-call-your-vet thresholds, written against AVMA, WSAVA, and AAHA guidance.',
    href: '/health/dog-vaccinations',
  },
  {
    icon: 'nutrition',
    title: 'Nutrition',
    desc: 'AAFCO completeness, WSAVA manufacturer standards, and what a guaranteed-analysis panel actually tells you.',
    href: '/nutrition/wsava-explained',
  },
  {
    icon: 'training',
    title: 'Training',
    desc: 'Positive-reinforcement fundamentals, socialization windows, and the red flags that should make you change trainers.',
    href: '/training/positive-reinforcement',
  },
  {
    icon: 'reviews',
    title: 'Reviews',
    desc: 'Honest editorial scoring on the same rubric every time. Affiliate-aware; never affiliate-driven.',
    href: '/reviews/best-pet-insurance',
  },
  {
    icon: 'puppy',
    title: 'Puppy Schedule',
    desc: 'A printable week-by-week plan from 8 to 16 weeks plus an 8-week email course — free for new puppy owners.',
    href: '/puppy-schedule',
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
    href: '/reviews/best-pet-insurance',
    eyebrow: 'Editorial Review',
    title: 'Best Pet Insurance, 2026',
    teaser:
      'Eight national carriers compared on the same rubric: coverage limits, exclusions, hereditary-condition handling, claim turnaround, and how each handles pre-existing conditions. Honest scores, not affiliate-led rankings.',
    readTime: '18 min',
  },
  {
    href: '/health/dog-vaccinations',
    eyebrow: 'Preventive Care',
    title: 'Dog Vaccinations — Core, Non-Core, and the WSAVA Schedule',
    teaser:
      'What the WSAVA guidelines say about core vaccines, when boosters actually matter, and the lifestyle questions that decide which non-core vaccines belong on your dog’s record.',
    readTime: '14 min',
  },
  {
    href: '/health/dog-allergies',
    eyebrow: 'Dermatology',
    title: 'Dog Allergies — Atopy, Food, and Flea-Bite Hypersensitivity',
    teaser:
      'The three allergy categories your vet rules out in order, the elimination-diet protocol that actually works, and why a single positive blood panel is not a diagnosis.',
    readTime: '15 min',
  },
  {
    href: '/puppy-schedule',
    eyebrow: 'Lead Magnet',
    title: 'The Puppy Schedule, Weeks 8 to 16',
    teaser:
      'A printable week-by-week reference covering vaccinations, socialization windows, crate-training milestones, and food transitions. Paired with an 8-week email course written for first-time owners.',
    readTime: 'Printable + 8-email course',
  },
]

const TRUST_CLAIMS = [
  'Research-anchored content',
  'No fake DVM bylines',
  'Honest editorial scores',
  'Affiliate-aware, never affiliate-driven',
]

// ── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────
          CSS-only environmental wash. Two radial pools (warm terracotta
          glow upper-right, cocoa shadow lower-left) over the dark masthead,
          a subtle vertical-grain overlay so the field never reads flat.
          ──────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-dark">
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: [
              'radial-gradient(ellipse 80% 60% at 78% 18%, rgba(232,98,42,0.22) 0%, transparent 55%)',
              'radial-gradient(ellipse 70% 70% at 12% 95%, rgba(26,14,8,0.65) 0%, transparent 60%)',
              'linear-gradient(180deg, rgba(26,14,8,0) 0%, rgba(26,14,8,0.55) 95%)',
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

        <div className="relative z-10 mx-auto max-w-container-wide px-container-sm sm:px-container py-20 lg:py-28">
          <div className="max-w-3xl">
            {/* Eyebrow — caramel rule + caps */}
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
                The Dog Owner Reference
              </span>
            </div>

            {/* Headline — Playfair 700, generous size, brand title */}
            <h1
              className="font-display font-bold text-white tracking-tight leading-[1.02] mb-6"
              style={{ fontSize: 'clamp(48px, 7.5vw, 92px)' }}
            >
              Dog.com
            </h1>

            {/* Tagline — Playfair italic, caramel-tinted */}
            <p
              className="font-display italic mb-7"
              style={{
                color: 'var(--brand-accent-light)',
                fontSize: 'clamp(22px, 2.4vw, 30px)',
                lineHeight: 1.25,
                maxWidth: '46rem',
              }}
            >
              A reference for dog owners.
            </p>

            {/* Positioning paragraph — establishes what the site is and is
                not. Sticks to ~80 words. */}
            <p className="text-base lg:text-lg text-white/75 leading-relaxed max-w-2xl mb-9">
              Dog.com is the research-based destination for dog owners — breed
              health profiles, citation-anchored health articles, honest
              editorial scoring on the products you actually need, and a
              printable puppy schedule we keep current against WSAVA, AAHA,
              and AVMA guidance. Not a magazine. Not a marketplace. Not a
              community forum. Every claim is sourced and every score is
              published against the rubric we publish on the page.
            </p>

            {/* CTAs — primary terracotta-on-dark, secondary text-arrow */}
            <div className="flex items-center gap-6 flex-wrap">
              <Link
                href="/puppy-schedule"
                className="inline-flex items-center font-semibold text-sm px-7 py-3.5 rounded no-underline transition-colors duration-200 hover:bg-brand-primary-light"
                style={{
                  background: 'var(--brand-primary)',
                  color: 'var(--brand-white)',
                }}
              >
                Get the puppy schedule
                <span aria-hidden="true" className="ml-2">
                  &rarr;
                </span>
              </Link>
              <Link
                href="/breeds/golden-retriever"
                className="group inline-flex items-center text-sm font-semibold text-white/85 no-underline hover:text-white transition-colors"
              >
                Read the breed health series
                <span
                  aria-hidden="true"
                  className="ml-1.5 transition-transform group-hover:translate-x-0.5"
                >
                  &rarr;
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ──────────────────────────────────────────────────
          Dark masthead continuation. Reads as a constitution, not a
          marketing flourish. QC-STANDARDS §1: every claim is defensible.
          ──────────────────────────────────────────────────────────────── */}
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
                &#10003;
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

      {/* ── CATEGORIES ─────────────────────────────────────────────────
          Six-card grid, single visual voice. Inline SVG icons in the
          terracotta primary. Each card teases the section voice in a
          single sentence.
          ──────────────────────────────────────────────────────────────── */}
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
              Every section reads the same whether you arrived from a search
              for a symptom, a breed name, or a product comparison.
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
                  <CategoryIcon name={cat.icon} />
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
                    &rarr;
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLES ──────────────────────────────────────────
          Four cornerstone references. Eyebrow / Playfair title / two-
          sentence teaser / read-time / Read link. No images in this pass.
          ──────────────────────────────────────────────────────────────── */}
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
                  Cornerstone Articles
                </span>
              </div>
              <h2 className="font-display font-bold tracking-tight text-3xl sm:text-4xl text-brand-text-dark">
                Reference, maintained
              </h2>
            </div>
            <p
              className="text-sm max-w-md"
              style={{ color: 'var(--brand-text-light)' }}
            >
              The pieces we keep current as guidance changes. Every claim
              is sourced inline.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {FEATURED_ARTICLES.map((art) => (
              <Link
                key={art.href}
                href={art.href}
                className="group block p-7 lg:p-8 rounded-md no-underline transition-all duration-300 ease-carloOS hover:-translate-y-1 hover:shadow-card-hover"
                style={{
                  background: 'var(--brand-surface)',
                  border: '1px solid var(--brand-border)',
                }}
              >
                {/* Decorative top rule — caramel, signals premium */}
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
                    {art.readTime}
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
                      &rarr;
                    </span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── EDITORIAL POSITIONING BAND ─────────────────────────────────
          Dark cocoa band with a Playfair-italic accent pull paragraph
          and a route to /editorial-standards. Same architecture as the
          Horses.com positioning block, tuned to Dog.com voice.
          ──────────────────────────────────────────────────────────────── */}
      <section
        className="px-container-sm sm:px-container py-section relative overflow-hidden"
        style={{ background: 'var(--brand-dark)' }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(ellipse 60% 60% at 80% 20%, rgba(232,98,42,0.16) 0%, transparent 60%)',
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
              We say when
              <br />
              <em
                className="not-italic font-display italic"
                style={{ color: 'var(--brand-accent-light)' }}
              >
                the evidence is thin.
              </em>
            </h2>
          </div>
          <div className="text-white/85 leading-relaxed space-y-5">
            <p className="text-base lg:text-lg">
              Articles are written and updated by the Dog.com editorial team,
              anchored to the WSAVA, AAHA, AVMA, AVDC, and ACVIM where
              consensus guidance exists. Where it doesn&rsquo;t, we say so.
              We don&rsquo;t claim hands-on testing we haven&rsquo;t done and
              we don&rsquo;t put fabricated DVM signatures on the page.
            </p>
            <p className="text-base lg:text-lg">
              Product rankings are made before affiliate links are added,
              not after. The rubric for every review is published on the
              page. If we get a fact wrong, we correct it in place and date
              the correction.
            </p>
            <Link
              href="/editorial-standards"
              className="inline-flex items-center text-sm font-semibold no-underline transition-colors"
              style={{ color: 'var(--brand-accent-light)' }}
            >
              Read the full editorial standards
              <span aria-hidden="true" className="ml-1.5">
                &rarr;
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── EMAIL CAPTURE ──────────────────────────────────────────────
          Lead-magnet tone: hints at the puppy-schedule download but is
          honest that the weekly email is the durable value.
          ──────────────────────────────────────────────────────────────── */}
      <section
        className="px-container-sm sm:px-container py-section"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="dog-com"
          title="The Dog.com Reference, in your inbox"
          subtitle="One email a week: a deep dive on a breed, condition, or product category — plus the puppy schedule and 8-week email course free for new owners."
          ctaText="Subscribe"
          source="homepage"
          perks={[
            'Weekly reference',
            'Puppy schedule included',
            'Citation-anchored',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}
