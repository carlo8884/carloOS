/**
 * Ferret.com — homepage.
 *
 * Image-led, mobile-first premium rebuild (Dog.com reference rollout,
 * 2026-06-05). Follows the APPROVED Dog.com pattern (apps/dog-com/src/app/
 * page.tsx, merged to main #487): a REAL ferret photo is the FIRST + dominant
 * element after the nav on every breakpoint — a full-bleed hero (~62vh mobile /
 * ~78vh desktop) with the H1 + one primary CTA overlaid on a dark gradient
 * scrim. No disclosure banner sits above it (the top inline disclosure was
 * already removed from layout.tsx; disclosure stays in the footer one-liner +
 * in-context near monetized surfaces). Cluster hubs, featured categories, and
 * the live tool are image-backed by REAL synced photography — no PROMINENT
 * rendered image is a placeholder.
 *
 * Adapted from the Dog reference to Ferret's brand:
 *   - Chocolate-amber palette (CSS variables --brand-*; no new colors)
 *   - Playfair Display + Source Sans 3
 *   - Warm cream surfaces, indie-hobbyist-magazine voice
 * Ferret's homepage keeps its inline-style / CSS-variable convention (the rest
 * of the site is built that way) rather than copying Dog's Tailwind class set,
 * so the existing brand tokens stay the single source of truth.
 *
 * Image strategy (QC §1 + Unsplash/Pexels TOS):
 *   - All imagery comes from the committed manifest via <StockImage>. No
 *     hardcoded URLs (trust-guard blocks hardcoded stock-CDN URLs).
 *   - Prime visual areas (hero + image-backed tiles) pass `subtleCredit` so
 *     attribution stays present + clickable but unobtrusive.
 *   - Every text-over-image surface has a gradient scrim so copy stays legible.
 *   - PROMINENT imagery uses only REAL synced ferret keys (verified to carry a
 *     url in packages/ui/src/data/image-manifest.json):
 *       hero, health-hero, care-hero, behavior-hero, colors-hero, diet-hero,
 *       ownership-hero, care-diet-basics, health-insulinoma, care-cage-setup.
 *     The not-yet-synced keys (tools-hero, first-year-hero, find-vet-hero,
 *     glossary-hero) are NEVER passed to a prominent <StockImage>.
 *
 * Trust posture (QC §1): no fake authority, no AI-generated humans, no fake
 * testing. Editorial byline stays "Ferret.com Editorial". FTC affiliate
 * disclosure preserved in footer (shared <Footer showAffiliateDisclosure />)
 * + every monetized page's in-context AffiliateDisclosure.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, StockImage } from '@carloOS/ui'
// Live ferret food evaluator embedded on the homepage — score a food on the
// first screens, not a link to a tool (premium gate 3).
import { FerretFoodEvaluator } from '../components/visual/FerretFoodEvaluator'
import { SchemaScript, combineSchemas, buildOrganizationSchema, buildWebSiteSchema } from '@carloOS/ui'

const homeSchema = combineSchemas(
  buildOrganizationSchema({ siteId: 'ferret-com', name: 'Ferret.com', url: 'https://ferret.com' }),
  buildWebSiteSchema({ siteId: 'ferret-com', name: 'Ferret.com', url: 'https://ferret.com' }),
)

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret.com — A Reference for Ferret Owners',
  description:
    'Ferret.com — research-based reference for ferret owners. Diet, health, equipment, and the first-year schedule, grounded in exotic-mammal veterinary literature.',
  path: '/',
  type: 'website',
})

// ── Trust bar claims ────────────────────────────────────────────────────────

const TRUST_CLAIMS = [
  'Research-anchored content',
  'Exotic-vet-respectful guidance',
  'Honest product recommendations',
  'No marketplace listings here',
]

// ── Owner-path / cluster hubs (image-backed entry tiles) ─────────────────────
// The six top-level authority hubs. Each tile is image-backed by a REAL synced
// hub photo (hub → cluster → spoke internal-link graph, per CLAUDE.md §6).
// These point at the hub index pages only; per-hub card arrays live on each
// hub's own page.tsx (owned by the content agents).

const HUBS = [
  {
    href: '/health',
    label: 'Health',
    blurb: 'Insulinoma, adrenal disease, lymphoma, dental — conditions, diagnosis, and treatment ladders.',
    manifestKey: 'ferret-com:health-hero',
    imageAlt: 'Ferret health reference',
    cta: 'Browse health',
  },
  {
    href: '/care',
    label: 'Care',
    blurb: 'Cage setup, litter training, grooming, exercise, and the ferret-proofing checklist.',
    manifestKey: 'ferret-com:care-hero',
    imageAlt: 'Ferret care reference',
    cta: 'Browse care',
  },
  {
    href: '/behavior',
    label: 'Behavior',
    blurb: 'Training, bonding, nipping, and reading the body language of a working-curious carnivore.',
    manifestKey: 'ferret-com:behavior-hero',
    imageAlt: 'Ferret behavior reference',
    cta: 'Browse behavior',
  },
  {
    href: '/colors',
    label: 'Colors',
    blurb: 'Coat colors, patterns, and markings — sable, albino, panda, blaze, and the rest.',
    manifestKey: 'ferret-com:colors-hero',
    imageAlt: 'Ferret coat colors',
    cta: 'Browse colors',
  },
  {
    href: '/diet',
    label: 'Diet',
    blurb: 'Obligate-carnivore feeding — macros, kibble vs. raw, treats, and what to never feed.',
    manifestKey: 'ferret-com:diet-hero',
    imageAlt: 'Ferret diet reference',
    cta: 'Browse diet',
  },
  {
    href: '/ownership',
    label: 'Ownership',
    blurb: 'Adoption, costs, legality, supplies, and what the first year of ownership actually demands.',
    manifestKey: 'ferret-com:ownership-hero',
    imageAlt: 'Ferret ownership reference',
    cta: 'Browse ownership',
  },
]

// ── Featured categories (image-backed) ───────────────────────────────────────
// Four pillar cards. The first three are backed by REAL synced photography;
// the First-Year Schedule card stays a premium text card because its dedicated
// key (first-year-hero) has not synced — it is never passed to a rendered photo.

const PHOTO_CATEGORIES = [
  {
    href: '/care/diet-basics',
    eyebrow: 'Care',
    title: 'Diet & Nutrition',
    description:
      'Obligate carnivore feeding — what to buy, what to avoid, and why high-carb diets matter for insulinoma risk.',
    manifestKey: 'ferret-com:care-diet-basics',
    imageAlt: 'Ferret diet and nutrition',
  },
  {
    href: '/health/insulinoma',
    eyebrow: 'Health',
    title: 'Health Conditions',
    description:
      'The middle-age neoplasms — insulinoma, adrenal disease, dental — recognition, diagnosis, and treatment ladders.',
    manifestKey: 'ferret-com:health-insulinoma',
    imageAlt: 'Ferret health conditions',
  },
  {
    href: '/care/cage-setup',
    eyebrow: 'Equipment',
    title: 'Housing & Gear',
    description:
      'Cage minimums, bar spacing, hammocks over bedding, litter, and the ferret-proofing list first-timers miss.',
    manifestKey: 'ferret-com:care-cage-setup',
    imageAlt: 'Ferret housing and cage setup',
  },
]

// First-Year Schedule — premium TEXT card (no image slot; its key isn't synced).
const ROADMAP_CARD = {
  href: '/first-year-schedule',
  eyebrow: 'Roadmap',
  title: 'First-Year Schedule',
  description:
    '52-week structured calendar — vaccines, neuter timing, dental onset, the insulinoma watch window.',
}

// ── Featured articles ───────────────────────────────────────────────────────

const FEATURED_ARTICLES = [
  {
    href: '/care/diet-basics',
    eyebrow: 'Ferret Care',
    title: 'Diet Basics: Feeding an Obligate Carnivore',
    teaser:
      'Ferrets need 32-40% protein, 18-22% fat, under 3% carbohydrate. The carbohydrate target is the one most owners miss — and it is the lifestyle-level variable most consistently linked to insulinoma risk in middle age.',
    readTime: '11 min read',
  },
  {
    href: '/health/insulinoma',
    eyebrow: 'Ferret Health',
    title: 'Insulinoma: The Long-Term Watch Condition',
    teaser:
      'The most common neoplasm in middle-aged ferrets. Clinical signs are easily mistaken for "old age slowing down." Fasting-glucose thresholds, the prednisone-diazoxide-surgery treatment ladder, and emergency hypoglycemia response.',
    readTime: '14 min read',
  },
  {
    href: '/care/cage-setup',
    eyebrow: 'Ferret Care',
    title: 'Cage Setup: The Bedroom, Not the House',
    teaser:
      'A ferret cage is for sleep, litter, and water — not for living. Minimum dimensions and bar spacing, hammocks over loose bedding, corner litter boxes, and the four-hours-out-of-cage rule.',
    readTime: '12 min read',
  },
]

// Strip StockImage's outer margins (it renders my-8 on both the <figure> and
// the pending-sync placeholder <div>) so it fills a tile edge-to-edge.
const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

// ── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={homeSchema} />

      {/* ════════════════════════════════════════════════════════════════
          HERO — full-bleed IMAGE-FIRST masthead (Dog reference #487)
          A REAL ferret photo (ferret-com:hero) is the first + dominant thing
          after the nav on EVERY breakpoint. H1 + one primary CTA overlaid on a
          dark gradient scrim so copy stays legible over the real photo. The
          hero carries subtleCredit (attribution present + clickable, QC §1).
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', background: 'var(--brand-dark)', minHeight: 'clamp(62vh, 70vh, 78vh)' }}>
        {/* Full-bleed hero photo — fills this absolute, full-height wrapper.
            Uses the inline variant with FILL_IMAGE overrides so the photo
            simply fills the parent (the 'full-bleed' variant's transform
            fights an absolute parent). */}
        <div
          className={`${FILL_IMAGE} [&_figure]:h-full [&_figure>div]:h-full [&_figure>div]:!rounded-none [&>div]:h-full`}
          style={{ position: 'absolute', inset: 0 }}
        >
          <StockImage
            manifestKey="ferret-com:hero"
            alt="A curious, healthy ferret"
            aspect="16:9"
            variant="inline"
            priority
            subtleCredit
          />
        </div>

        {/* Dark gradient scrim — bottom-up so the overlaid H1 + CTA stay legible. */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, var(--brand-dark) 0%, rgba(30,20,10,0.66) 45%, rgba(30,20,10,0.22) 100%)',
          }}
        />
        {/* Warm amber wash for depth */}
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.28,
            backgroundImage:
              'radial-gradient(ellipse at 22% 78%, rgba(201,157,95,0.4) 0%, transparent 60%)',
          }}
        />

        {/* Overlaid copy + primary action — pinned to the bottom of the photo */}
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            minHeight: 'clamp(62vh, 70vh, 78vh)',
            maxWidth: '1180px',
            margin: '0 auto',
            padding: 'clamp(64px, 9vw, 88px) clamp(20px, 5vw, 40px) clamp(36px, 5vw, 56px)',
          }}
        >
          <div style={{ marginBottom: '18px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-amber)',
              }}
            >
              <span
                aria-hidden
                style={{ display: 'inline-block', width: '24px', height: '2px', background: 'var(--brand-amber)', flexShrink: 0 }}
              />
              Ferret.com — Owner&apos;s reference
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 6vw, 4.25rem)',
              fontWeight: 900,
              letterSpacing: '-0.025em',
              lineHeight: 1.04,
              color: 'rgba(251, 245, 232, 0.98)',
              maxWidth: '20ch',
              margin: '0 0 18px',
              textShadow: '0 2px 18px rgba(0,0,0,0.45)',
            }}
          >
            Everything a ferret needs you to know.
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.0625rem, 2.2vw, 1.5rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.4,
              color: 'rgba(251, 245, 232, 0.86)',
              maxWidth: '34ch',
              margin: '0 0 28px',
              textShadow: '0 1px 10px rgba(0,0,0,0.5)',
            }}
          >
            Diet, health, housing, and the conditions that surface in years three
            through seven — grounded in exotic-mammal veterinary literature.
          </p>

          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <Link
              href="/first-year-schedule"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--brand-amber)',
                color: 'var(--brand-dark)',
                padding: '15px 26px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                border: '2px solid var(--brand-amber)',
                boxShadow: '0 6px 24px rgba(201,157,95,0.35)',
              }}
            >
              Get the first-year schedule
              <span aria-hidden>&rarr;</span>
            </Link>
            <Link
              href="/care/diet-basics"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(251, 245, 232, 0.1)',
                color: 'rgba(251, 245, 232, 0.97)',
                padding: '15px 26px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                border: '1px solid rgba(251, 245, 232, 0.28)',
                backdropFilter: 'blur(4px)',
              }}
            >
              Read the diet guide
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TRUST BAR — dark masthead
          ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--brand-dark)',
          padding: '24px',
          borderTop: '1px solid rgba(201, 157, 95, 0.18)',
          borderBottom: '1px solid rgba(201, 157, 95, 0.18)',
        }}
      >
        <ul
          role="list"
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            maxWidth: '1180px',
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '14px 32px',
          }}
        >
          {TRUST_CLAIMS.map((claim) => (
            <li
              key={claim}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                color: 'rgba(251, 245, 232, 0.92)',
                fontSize: '0.875rem',
                fontWeight: 500,
                letterSpacing: '0.01em',
              }}
            >
              <span aria-hidden style={{ color: 'var(--brand-amber)', fontSize: '1rem', fontWeight: 700 }}>
                ✓
              </span>
              {claim}
            </li>
          ))}
        </ul>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          CLUSTER HUBS — image-backed entry tiles (Dog owner-path pattern)
          Six top-level authority hubs, each backed by a REAL synced hub photo
          with a bottom-up scrim keeping the label legible over the image.
          ════════════════════════════════════════════════════════════════ */}
      <section style={{ background: 'var(--brand-dark)', position: 'relative', overflow: 'hidden' }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.1,
            backgroundImage: 'radial-gradient(ellipse at 72% 28%, rgba(201,157,95,0.3) 0%, transparent 55%)',
          }}
        />
        <div
          style={{
            position: 'relative',
            zIndex: 10,
            maxWidth: '1180px',
            margin: '0 auto',
            padding: 'clamp(56px, 7vw, 80px) clamp(20px, 5vw, 40px)',
          }}
        >
          <div style={{ marginBottom: '28px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-amber)',
              }}
            >
              <span aria-hidden style={{ display: 'inline-block', width: '24px', height: '2px', background: 'var(--brand-amber)', flexShrink: 0 }} />
              Explore the library
            </span>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.875rem, 3.5vw, 2.75rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: 'rgba(251, 245, 232, 0.97)',
                lineHeight: 1.12,
                margin: '14px 0 0',
              }}
            >
              Six libraries, one reference
            </h2>
          </div>

          <ul
            role="list"
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '16px',
            }}
          >
            {HUBS.map((hub) => (
              <li key={hub.href}>
                <Link
                  href={hub.href}
                  style={{
                    position: 'relative',
                    display: 'block',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    color: 'inherit',
                    boxShadow: 'inset 0 0 0 1px rgba(251, 245, 232, 0.1)',
                    minHeight: '230px',
                  }}
                >
                  {/* Real hub photo fills the tile */}
                  <div
                    className={`${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <StockImage
                      manifestKey={hub.manifestKey}
                      alt={hub.imageAlt}
                      aspect="3:4"
                      variant="inline"
                      subtleCredit
                    />
                  </div>
                  {/* Bottom-up scrim — keeps label legible over any photo */}
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(30,20,10,0.92) 0%, rgba(30,20,10,0.4) 50%, rgba(30,20,10,0.1) 100%)',
                    }}
                  />
                  {/* Label content */}
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 10,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      minHeight: '230px',
                      padding: '22px 22px',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.5rem',
                        fontWeight: 800,
                        color: 'rgba(251, 245, 232, 0.98)',
                        marginBottom: '8px',
                        lineHeight: 1.15,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {hub.label}
                    </div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                        color: 'rgba(251, 245, 232, 0.78)',
                        margin: '0 0 12px',
                      }}
                    >
                      {hub.blurb}
                    </p>
                    <span
                      style={{
                        fontSize: '0.8125rem',
                        fontWeight: 700,
                        color: 'var(--brand-amber)',
                        letterSpacing: '0.01em',
                      }}
                    >
                      {hub.cta} &rarr;
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          LIVE TOOL — ferret food evaluator (premium gate 3)
          ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--brand-surface)',
          padding: 'clamp(56px, 7vw, 88px) 24px',
          borderBottom: '1px solid var(--brand-border)',
        }}
      >
        <div style={{ maxWidth: '1180px', marginInline: 'auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-primary)', margin: '0 0 12px' }}>
            Try it · Ferret food evaluator
          </p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, color: 'var(--brand-text-dark)', margin: '0 0 12px', lineHeight: 1.1 }}>
            Is that food right for a ferret?
          </h2>
          <p style={{ fontSize: '0.95rem', color: 'var(--brand-text-mid)', margin: '0 0 28px', maxWidth: '42rem', lineHeight: 1.6 }}>
            Ferrets are obligate carnivores. Read the first few ingredients off the bag and score
            the food on protein source, carbs, and fillers — before you buy.
          </p>
          <FerretFoodEvaluator />
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FEATURED CATEGORIES — three image-backed pillars + one text card
          ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--brand-white)',
          padding: 'clamp(64px, 8vw, 96px) 24px',
        }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <header style={{ marginBottom: '40px' }}>
            <div style={{ marginBottom: '14px' }}>
              <span className="eyebrow">
                <span className="eyebrow-rule" />
                Browse by topic
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.015em',
                color: 'var(--brand-text-dark)',
                lineHeight: 1.15,
                margin: 0,
              }}
            >
              Four pillars of ferret keeping
            </h2>
          </header>

          <ul
            role="list"
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
              gap: '18px',
            }}
          >
            {PHOTO_CATEGORIES.map((cat) => (
              <li key={cat.href}>
                <Link
                  href={cat.href}
                  style={{
                    position: 'relative',
                    display: 'block',
                    height: '100%',
                    minHeight: '300px',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    textDecoration: 'none',
                    color: 'inherit',
                    boxShadow: 'inset 0 0 0 1px var(--brand-border)',
                  }}
                >
                  <div
                    className={`${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
                    style={{ position: 'absolute', inset: 0 }}
                  >
                    <StockImage
                      manifestKey={cat.manifestKey}
                      alt={cat.imageAlt}
                      aspect="3:4"
                      variant="inline"
                      subtleCredit
                    />
                  </div>
                  <div
                    aria-hidden
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(to top, rgba(30,20,10,0.9) 0%, rgba(30,20,10,0.35) 55%, rgba(30,20,10,0.08) 100%)',
                    }}
                  />
                  <div
                    style={{
                      position: 'relative',
                      zIndex: 10,
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      height: '100%',
                      minHeight: '300px',
                      padding: '24px 22px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--brand-amber)',
                        marginBottom: '8px',
                      }}
                    >
                      {cat.eyebrow}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.375rem',
                        fontWeight: 800,
                        color: 'rgba(251, 245, 232, 0.98)',
                        marginBottom: '8px',
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {cat.title}
                    </div>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        lineHeight: 1.5,
                        color: 'rgba(251, 245, 232, 0.82)',
                        margin: '0 0 12px',
                      }}
                    >
                      {cat.description}
                    </p>
                    <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--brand-amber)', letterSpacing: '0.01em' }}>
                      Read &rarr;
                    </span>
                  </div>
                </Link>
              </li>
            ))}

            {/* First-Year Schedule — premium TEXT card (key not synced) */}
            <li>
              <Link
                href={ROADMAP_CARD.href}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  minHeight: '300px',
                  padding: '28px 26px',
                  background: 'var(--brand-surface)',
                  border: '1px solid var(--brand-border)',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  color: 'inherit',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.22s ease',
                }}
              >
                <span
                  aria-hidden
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '3px',
                    background: 'var(--brand-amber)',
                    opacity: 0.85,
                  }}
                />
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-amber-dark)',
                    marginBottom: '10px',
                  }}
                >
                  {ROADMAP_CARD.eyebrow}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 800,
                    color: 'var(--brand-text-dark)',
                    marginBottom: '10px',
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {ROADMAP_CARD.title}
                </div>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.55, color: 'var(--brand-text-mid)', margin: '0 0 16px', flex: 1 }}>
                  {ROADMAP_CARD.description}
                </p>
                <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--brand-primary)', letterSpacing: '0.01em' }}>
                  Open the schedule &rarr;
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FEATURED ARTICLES — cornerstones (with a real care image panel)
          ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--brand-surface)',
          padding: 'clamp(64px, 8vw, 96px) 24px',
          borderTop: '1px solid var(--brand-border)',
          borderBottom: '1px solid var(--brand-border)',
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <header style={{ marginBottom: '36px' }}>
            <div style={{ marginBottom: '14px' }}>
              <span className="eyebrow">
                <span className="eyebrow-rule" />
                Cornerstone reading
              </span>
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.015em',
                color: 'var(--brand-text-dark)',
                lineHeight: 1.15,
                margin: '0 0 12px',
              }}
            >
              Start here
            </h2>
            <p
              style={{
                fontSize: '1.0625rem',
                color: 'var(--brand-text-mid)',
                maxWidth: '640px',
                margin: 0,
                lineHeight: 1.6,
              }}
            >
              The three pieces a new ferret owner should read first. Each is built
              from peer-reviewed exotic-mammal literature, not from generic
              pet-care templates.
            </p>
          </header>

          {/* Real care-hero image banner above the article list */}
          <Link
            href="/care"
            style={{
              position: 'relative',
              display: 'block',
              borderRadius: '14px',
              overflow: 'hidden',
              textDecoration: 'none',
              color: 'inherit',
              minHeight: '180px',
              marginBottom: '20px',
              boxShadow: 'inset 0 0 0 1px var(--brand-border)',
            }}
          >
            <div
              className={`${FILL_IMAGE} [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full`}
              style={{ position: 'absolute', inset: 0 }}
            >
              <StockImage
                manifestKey="ferret-com:care-hero"
                alt="Ferret care reference"
                aspect="16:9"
                variant="inline"
                subtleCredit
              />
            </div>
            <div
              aria-hidden
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(30,20,10,0.88) 0%, rgba(30,20,10,0.25) 60%, rgba(30,20,10,0.05) 100%)',
              }}
            />
            <div
              style={{
                position: 'relative',
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                minHeight: '180px',
                padding: '22px 22px',
              }}
            >
              <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-amber)', marginBottom: '6px' }}>
                Care hub
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'rgba(251, 245, 232, 0.98)', lineHeight: 1.2 }}>
                The husbandry that keeps a ferret thriving.
              </div>
            </div>
          </Link>

          <ul
            role="list"
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gap: '20px',
            }}
          >
            {FEATURED_ARTICLES.map((article) => (
              <li key={article.href}>
                <Link
                  href={article.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0',
                    padding: '28px 32px',
                    background: 'var(--brand-white)',
                    border: '1px solid var(--brand-border)',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.22s ease',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '0.7rem',
                        fontWeight: 700,
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--brand-amber-dark)',
                        marginBottom: '8px',
                      }}
                    >
                      {article.eyebrow}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.25rem, 2.2vw, 1.5rem)',
                        fontWeight: 800,
                        color: 'var(--brand-text-dark)',
                        marginBottom: '12px',
                        lineHeight: 1.2,
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {article.title}
                    </div>
                    <p
                      style={{
                        fontSize: '1rem',
                        lineHeight: 1.6,
                        color: 'var(--brand-text-mid)',
                        margin: '0 0 16px',
                      }}
                    >
                      {article.teaser}
                    </p>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '14px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span style={{ fontSize: '0.8125rem', color: 'var(--brand-text-light)', fontWeight: 500 }}>
                        {article.readTime}
                      </span>
                      <span style={{ fontSize: '0.875rem', fontWeight: 700, color: 'var(--brand-primary)' }}>
                        Read &rarr;
                      </span>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TOOLS & CALCULATORS
          The food evaluator runs inline above; this section surfaces the
          standalone tool pages and the glossary as polished feature cards.
          ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--brand-dark)',
          padding: 'clamp(64px, 8vw, 96px) 24px',
          borderTop: '1px solid rgba(201, 157, 95, 0.18)',
          borderBottom: '1px solid rgba(201, 157, 95, 0.18)',
        }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          {/* Section eyebrow */}
          <div style={{ marginBottom: '12px' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-amber)',
              }}
            >
              <span
                aria-hidden
                style={{ display: 'inline-block', width: '24px', height: '2px', background: 'var(--brand-amber)', flexShrink: 0 }}
              />
              Tools &amp; Calculators
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(26px, 3.5vw, 44px)',
              fontWeight: 900,
              letterSpacing: '-0.025em',
              lineHeight: 1.08,
              color: 'rgba(251, 245, 232, 0.97)',
              margin: '0 0 12px',
            }}
          >
            Get a number, not just advice.
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.65,
              color: 'rgba(251, 245, 232, 0.55)',
              maxWidth: '42rem',
              margin: '0 0 40px',
            }}
          >
            Interactive tools and reference built on ferret husbandry data &mdash; evaluate
            a food in the store aisle, plan your first-year budget, or look up the exact
            term your vet used.
          </p>

          <ul
            role="list"
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '20px',
            }}
          >
            {/* Card 1 — Food Evaluator */}
            <li>
              <Link
                href="/tools/food-evaluator"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  padding: '28px 26px',
                  background: 'rgba(251, 245, 232, 0.05)',
                  border: '1px solid rgba(201, 157, 95, 0.18)',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background 0.22s ease, border-color 0.22s ease',
                }}
              >
                <div
                  aria-hidden
                  style={{ marginBottom: '18px', lineHeight: 1, color: 'var(--brand-amber)' }}
                >
                  {/* Beaker / flask icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 3h6" />
                    <path d="M10 3v7l-4 8h12l-4-8V3" />
                    <path d="M8 17h8" />
                    <circle cx="14" cy="13" r="0.8" fill="currentColor" stroke="none" />
                    <circle cx="11" cy="15" r="0.8" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-amber)',
                    marginBottom: '8px',
                  }}
                >
                  Nutrition tool
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 800,
                    color: 'rgba(251, 245, 232, 0.97)',
                    marginBottom: '10px',
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Ferret Food Evaluator
                </div>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.55,
                    color: 'rgba(251, 245, 232, 0.55)',
                    margin: '0 0 18px',
                    flex: 1,
                  }}
                >
                  Paste the guaranteed analysis from any kibble bag. Score protein, fat,
                  fiber, and ash against published ferret nutrient targets and get a clear
                  &ldquo;appropriate / marginal / avoid&rdquo; verdict with per-nutrient notes.
                </p>
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--brand-amber)',
                    letterSpacing: '0.01em',
                  }}
                >
                  Evaluate a food &#x2192;
                </span>
              </Link>
            </li>

            {/* Card 2 — Cost Calculator */}
            <li>
              <Link
                href="/tools/cost-calculator"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  padding: '28px 26px',
                  background: 'rgba(251, 245, 232, 0.05)',
                  border: '1px solid rgba(201, 157, 95, 0.18)',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background 0.22s ease, border-color 0.22s ease',
                }}
              >
                <div
                  aria-hidden
                  style={{ marginBottom: '18px', lineHeight: 1, color: 'var(--brand-amber)' }}
                >
                  {/* Coin / cost icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v10" />
                    <path d="M9 9.5c0-1.4 1.3-2.5 3-2.5s3 1.1 3 2.5c0 2-3 2.5-3 4.5" />
                    <path d="M9 14.5c0 1.4 1.3 2.5 3 2.5s3-1.1 3-2.5" />
                  </svg>
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-amber)',
                    marginBottom: '8px',
                  }}
                >
                  Budgeting calculator
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 800,
                    color: 'rgba(251, 245, 232, 0.97)',
                    marginBottom: '10px',
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Ferret Cost Calculator
                </div>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.55,
                    color: 'rgba(251, 245, 232, 0.55)',
                    margin: '0 0 18px',
                    flex: 1,
                  }}
                >
                  Estimate one-time setup, yearly recurring costs, and the lifetime total
                  of ferret ownership &mdash; scaled by number of ferrets, with a separate
                  prompt to budget for adrenal, insulinoma, and blockage care.
                </p>
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--brand-amber)',
                    letterSpacing: '0.01em',
                  }}
                >
                  Calculate your costs &#x2192;
                </span>
              </Link>
            </li>

            {/* Card 3 — Ferret Glossary */}
            <li>
              <Link
                href="/ownership/ferret-glossary"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  padding: '28px 26px',
                  background: 'rgba(251, 245, 232, 0.05)',
                  border: '1px solid rgba(201, 157, 95, 0.18)',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  color: 'inherit',
                  transition: 'background 0.22s ease, border-color 0.22s ease',
                }}
              >
                <div
                  aria-hidden
                  style={{ marginBottom: '18px', lineHeight: 1, color: 'var(--brand-amber)' }}
                >
                  {/* Open book icon */}
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v13c-3-1-6-1-9 1-3-2-6-2-9-1V5z" />
                    <path d="M12 6v14" />
                  </svg>
                </div>
                <div
                  style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-amber)',
                    marginBottom: '8px',
                  }}
                >
                  Reference
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.375rem',
                    fontWeight: 800,
                    color: 'rgba(251, 245, 232, 0.97)',
                    marginBottom: '10px',
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  Ferret Glossary
                </div>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.55,
                    color: 'rgba(251, 245, 232, 0.55)',
                    margin: '0 0 18px',
                    flex: 1,
                  }}
                >
                  Hob, jill, kit, gib, sprite, business, dooking, the war dance &mdash; and
                  the husbandry and health terms owners meet at the vet and in the community.
                  Plain-English definitions in one place.
                </p>
                <span
                  style={{
                    fontSize: '0.875rem',
                    fontWeight: 700,
                    color: 'var(--brand-amber)',
                    letterSpacing: '0.01em',
                  }}
                >
                  Browse the glossary &#x2192;
                </span>
              </Link>
            </li>
          </ul>

          {/* "See all tools" link */}
          <div style={{ marginTop: '28px' }}>
            <Link
              href="/tools"
              style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: 'var(--brand-amber)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}
            >
              All ferret tools &#x2192;
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          EMAIL CAPTURE — env-gated (no empty surface when backend is off)
          ════════════════════════════════════════════════════════════════ */}
      {process.env.NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED === 'true' && (
      <section
        style={{
          background: 'var(--brand-white)',
          padding: 'clamp(64px, 8vw, 96px) 24px',
        }}
      >
        <div
          style={{
            maxWidth: '640px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <div style={{ marginBottom: '14px' }}>
            <span className="eyebrow">
              <span className="eyebrow-rule" />
              Free email course
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.875rem, 3.5vw, 2.5rem)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              color: 'var(--brand-text-dark)',
              lineHeight: 1.15,
              margin: '0 0 14px',
            }}
          >
            The first-year schedule, in your inbox
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'var(--brand-text-mid)',
              margin: '0 0 32px',
            }}
          >
            A printable 52-week schedule plus an eight-email course covering
            vaccines, neuter timing, dental onset, diet milestones, and the
            insulinoma watch window. One signup. Free.
          </p>
          <div
            style={{
              background: 'var(--brand-surface)',
              border: '1px solid var(--brand-border)',
              borderRadius: '14px',
              padding: '28px',
            }}
          >
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title=""
              ctaText="Send me the schedule →"
              placeholder="your@email.com"
              source="homepage"
            />
            <p
              style={{
                fontSize: '0.75rem',
                color: 'var(--brand-text-light)',
                marginTop: '14px',
                lineHeight: 1.5,
              }}
            >
              One-click unsubscribe in every email. We do not sell or rent your
              address.
            </p>
          </div>
        </div>
      </section>
      )}

      {/* ════════════════════════════════════════════════════════════════
          EDITORIAL FOOTER NOTE (above shared <Footer />)
          ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--brand-white)',
          padding: '40px 24px',
          borderTop: '1px solid var(--brand-border)',
        }}
      >
        <p
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            fontSize: '0.8125rem',
            lineHeight: 1.65,
            color: 'var(--brand-text-light)',
            textAlign: 'center',
          }}
        >
          Ferret.com publishes general reference, not individualized veterinary
          advice — work with an exotic-pet vet for clinical decisions. See our{' '}
          <Link
            href="/editorial-standards"
            style={{ color: 'var(--brand-primary)', textDecoration: 'underline' }}
          >
            editorial standards &amp; sources
          </Link>
          .
        </p>
      </section>
    </>
  )
}
