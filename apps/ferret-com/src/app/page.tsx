/**
 * Ferret.com — homepage.
 *
 * Editorial reference site for ferret owners. Chocolate-amber palette,
 * Playfair Display + Source Sans 3, full-bleed sections.
 *
 * Section order:
 *   1. Hero — H1 + tagline + dual CTAs
 *   2. Trust bar — dark masthead, 4 editorial claims
 *   3. Live tool — FerretFoodEvaluator inline (premium gate 3)
 *   4. Cluster hubs — six top-level authority hubs
 *   5. Featured categories grid (4 cards)
 *   6. Featured articles — 3 cornerstones with eyebrow + teaser
 *   7. Tools & Calculators — 3 feature cards (food-evaluator, cost-calculator, glossary)
 *   8. Email capture (homepage source)
 *   9. Editorial footer copy (separate from shared <Footer>)
 *
 * Visual strategy (per COO photo-sourcing playbook, ops/handoffs/
 * 2026-05-29-photo-sourcing-playbook.md):
 * - Brand mood: "playful but careful (ferret ownership skews
 *   informed/dedicated). Closest analog: an indie hobbyist magazine."
 * - PHOTO SOURCE: Unsplash has ~5K ferret photos (verifiable subset);
 *   Wikimedia Commons via scientific name "Mustela putorius furo" is
 *   the highest-quality reference; Marshall Pet Products is the
 *   manufacturer affiliate.
 * - NONE of those IDs exist yet in the verified CarloOS Unsplash
 *   catalog, and verification of new IDs from inside the sandbox
 *   workflow is not possible (web search returns gallery pages, not
 *   direct CDN URLs). Per task hard constraint — "ferret photos are
 *   limited but Unsplash has ~5K — verifiable ones only" — the
 *   homepage stays CSS-only until Carlo's next browsing pass selects
 *   the keeper IDs from Unsplash directly.
 * - Cross-site reuse of dog/horse/lizard photos would violate visual
 *   differentiation per playbook ("reuse across sites breaks visual
 *   differentiation — avoid") and would actively undermine the indie-
 *   hobbyist brand mood. Editorial honesty > placeholder photos.
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

// ── Cluster hubs ────────────────────────────────────────────────────────────
// The six top-level authority hubs. Surfaced on the homepage so the site reads
// as complete/deep on first load and every cluster has a homepage entry point
// (hub → cluster → spoke internal-link graph, per CLAUDE.md §6). These point at
// the hub index pages only; the per-hub card arrays live on each hub's own
// page.tsx (owned by the content agents).

const HUBS = [
  {
    href: '/health',
    label: 'Health',
    blurb: 'Insulinoma, adrenal disease, lymphoma, dental — conditions, diagnosis, and treatment ladders.',
  },
  {
    href: '/care',
    label: 'Care',
    blurb: 'Cage setup, litter training, grooming, exercise, and the ferret-proofing checklist.',
  },
  {
    href: '/behavior',
    label: 'Behavior',
    blurb: 'Training, bonding, nipping, and reading the body language of a working-curious carnivore.',
  },
  {
    href: '/colors',
    label: 'Colors',
    blurb: 'Coat colors, patterns, and markings — sable, albino, panda, blaze, and the rest.',
  },
  {
    href: '/diet',
    label: 'Diet',
    blurb: 'Obligate-carnivore feeding — macros, kibble vs. raw, treats, and what to never feed.',
  },
  {
    href: '/ownership',
    label: 'Ownership',
    blurb: 'Adoption, costs, legality, supplies, and what the first year of ownership actually demands.',
  },
]

// ── Featured categories ─────────────────────────────────────────────────────

const CATEGORIES = [
  {
    href: '/care/diet-basics',
    eyebrow: 'Care',
    title: 'Diet & Nutrition',
    description:
      'Obligate carnivore feeding — what to buy, what to avoid, and why high-carb diets matter for insulinoma risk.',
  },
  {
    href: '/health/insulinoma',
    eyebrow: 'Health',
    title: 'Health Conditions',
    description:
      'The middle-age neoplasms — insulinoma, adrenal disease, dental — recognition, diagnosis, and treatment ladders.',
  },
  {
    href: '/care/cage-setup',
    eyebrow: 'Equipment',
    title: 'Housing & Gear',
    description:
      'Cage minimums, bar spacing, hammocks over bedding, litter, and the ferret-proofing list first-timers miss.',
  },
  {
    href: '/first-year-schedule',
    eyebrow: 'Roadmap',
    title: 'First-Year Schedule',
    description:
      '52-week structured calendar — vaccines, neuter timing, dental onset, the insulinoma watch window.',
  },
]

// ── Featured articles ───────────────────────────────────────────────────────

const FEATURED_ARTICLES = [
  {
    href: '/care/diet-basics',
    eyebrow: 'Ferret Care',
    title: 'Diet Basics: Feeding an Obligate Carnivore',
    teaser:
      'Ferrets need 32–40% protein, 18–22% fat, under 3% carbohydrate. The carbohydrate target is the one most owners miss — and it is the lifestyle-level variable most consistently linked to insulinoma risk in middle age.',
    readTime: '11 min read',
  },
  {
    href: '/health/insulinoma',
    eyebrow: 'Ferret Health',
    title: 'Insulinoma: The Long-Term Watch Condition',
    teaser:
      'The most common neoplasm in middle-aged ferrets. Clinical signs are easily mistaken for "old age slowing down." Fasting-glucose thresholds, the prednisone–diazoxide–surgery treatment ladder, and emergency hypoglycemia response.',
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

// ── Component ───────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <SchemaScript schema={homeSchema} />
      {/* ════════════════════════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background:
            'linear-gradient(180deg, var(--brand-surface) 0%, var(--brand-white) 100%)',
          padding: 'clamp(72px, 10vw, 120px) 24px clamp(60px, 8vw, 96px)',
          borderBottom: '1px solid var(--brand-border)',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '24px' }}>
            <span className="eyebrow">
              <span className="eyebrow-rule" />
              Research-based ferret reference
            </span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6.5vw, 4.5rem)',
              fontWeight: 900,
              letterSpacing: '-0.025em',
              lineHeight: 1.04,
              color: 'var(--brand-text-dark)',
              marginBottom: '20px',
            }}
          >
            Ferret.com
          </h1>

          <p
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2.4vw, 1.75rem)',
              fontWeight: 400,
              fontStyle: 'italic',
              color: 'var(--brand-text-mid)',
              marginBottom: '28px',
              lineHeight: 1.3,
            }}
          >
            Research-based reference for ferret owners.
          </p>

          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.7,
              color: 'var(--brand-text-mid)',
              maxWidth: '680px',
              margin: '0 auto 40px',
            }}
          >
            Most ferret information online is either an outdated forum thread or a
            pet-store brand mouthpiece. Ferret.com is the modern alternative — an
            editorial reference grounded in exotic-mammal veterinary literature,
            written for owners who want straight answers about diet, health,
            housing, and the conditions that surface in years three through seven.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '14px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/first-year-schedule"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'var(--brand-primary)',
                color: 'var(--brand-white)',
                padding: '16px 28px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                border: '2px solid var(--brand-primary)',
                transition: 'all 0.2s ease',
                boxShadow: '0 4px 16px rgba(92, 58, 30, 0.18)',
              }}
            >
              Get the first-year schedule
              <span aria-hidden>→</span>
            </Link>
            <Link
              href="/care/diet-basics"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'transparent',
                color: 'var(--brand-primary)',
                padding: '16px 28px',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '1rem',
                textDecoration: 'none',
                border: '2px solid var(--brand-amber)',
                transition: 'all 0.2s ease',
              }}
            >
              Read the diet guide
            </Link>
          </div>

          <div style={{ maxWidth: '880px', margin: '48px auto 0' }}>
            <StockImage
              manifestKey="ferret-com:hero"
              aspect="16:9"
              variant="wide"
              priority
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          TRUST BAR — dark masthead
          ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--brand-dark)',
          padding: '28px 24px',
          borderBottom: '1px solid rgba(201, 157, 95, 0.18)',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            maxWidth: '1180px',
            marginInline: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px 32px',
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
              <span
                aria-hidden
                style={{
                  color: 'var(--brand-amber)',
                  fontSize: '1rem',
                  fontWeight: 700,
                }}
              >
                ✓
              </span>
              {claim}
            </li>
          ))}
        </ul>
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
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 38px)', fontWeight: 800, color: 'var(--brand-text-dark)', margin: '0 0 12px', lineHeight: 1.1 }}>
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
          CLUSTER HUBS — six top-level authority hubs
          ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--brand-surface)',
          padding: 'clamp(64px, 8vw, 96px) 24px',
          borderBottom: '1px solid var(--brand-border)',
        }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <header style={{ marginBottom: '40px', textAlign: 'center' }}>
            <div style={{ marginBottom: '14px' }}>
              <span className="eyebrow">
                <span className="eyebrow-rule" />
                Explore the library
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
              Six libraries, one reference
            </h2>
          </header>

          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {HUBS.map((hub) => (
              <li key={hub.href}>
                <Link
                  href={hub.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    padding: '26px 24px',
                    background: 'var(--brand-white)',
                    border: '1px solid var(--brand-border)',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.22s ease',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: 'var(--brand-text-dark)',
                      marginBottom: '10px',
                      lineHeight: 1.2,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {hub.label}
                  </div>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.55,
                      color: 'var(--brand-text-mid)',
                      margin: '0 0 16px',
                      flex: 1,
                    }}
                  >
                    {hub.blurb}
                  </p>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: 'var(--brand-primary)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Browse {hub.label.toLowerCase()} →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FEATURED CATEGORIES
          ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--brand-white)',
          padding: 'clamp(64px, 8vw, 96px) 24px',
        }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <header style={{ marginBottom: '48px', textAlign: 'center' }}>
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
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
            }}
          >
            {CATEGORIES.map((cat) => (
              <li key={cat.href}>
                <Link
                  href={cat.href}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    padding: '28px 26px',
                    background: 'var(--brand-surface)',
                    border: '1px solid var(--brand-border)',
                    borderRadius: '14px',
                    textDecoration: 'none',
                    color: 'inherit',
                    transition: 'all 0.22s ease',
                    position: 'relative',
                    overflow: 'hidden',
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
                      opacity: 0.8,
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
                    {cat.eyebrow}
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
                    {cat.title}
                  </div>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.55,
                      color: 'var(--brand-text-mid)',
                      margin: '0 0 16px',
                      flex: 1,
                    }}
                  >
                    {cat.description}
                  </p>
                  <span
                    style={{
                      fontSize: '0.875rem',
                      fontWeight: 700,
                      color: 'var(--brand-primary)',
                      letterSpacing: '0.01em',
                    }}
                  >
                    Read →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════════
          FEATURED ARTICLES — cornerstones
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
          <header style={{ marginBottom: '48px' }}>
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

          <ul
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
                      <span
                        style={{
                          fontSize: '0.8125rem',
                          color: 'var(--brand-text-light)',
                          fontWeight: 500,
                        }}
                      >
                        {article.readTime}
                      </span>
                      <span
                        style={{
                          fontSize: '0.875rem',
                          fontWeight: 700,
                          color: 'var(--brand-primary)',
                        }}
                      >
                        Read →
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
          Mirrors the Dog.com "Tools & Calculators" section pattern.
          The food evaluator runs inline above; this section surfaces the
          standalone tool pages and the glossary as polished feature cards
          so owners arriving from search can discover them from the homepage.
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
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
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
          EMAIL CAPTURE
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
