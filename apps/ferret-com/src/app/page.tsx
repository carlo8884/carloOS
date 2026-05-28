/**
 * Ferret.com — homepage.
 *
 * Editorial reference site for ferret owners. Chocolate-amber palette,
 * Playfair Display + Source Sans 3, full-bleed sections.
 *
 * Section order:
 *   1. Hero — H1 + tagline + dual CTAs
 *   2. Trust bar — dark masthead, 4 editorial claims
 *   3. Featured categories grid (4 cards)
 *   4. Featured articles — 3 cornerstones with eyebrow + teaser
 *   5. Email capture (homepage source)
 *   6. Sister-site teaser — Ferrets.com
 *   7. Editorial footer copy (separate from shared <Footer>)
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

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
                    display: 'grid',
                    gridTemplateColumns: '1fr auto',
                    alignItems: 'start',
                    gap: '28px',
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
          EMAIL CAPTURE
          ════════════════════════════════════════════════════════════════ */}
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

      {/* ════════════════════════════════════════════════════════════════
          SISTER-SITE TEASER — Ferrets.com
          ════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          background: 'var(--brand-dark)',
          padding: 'clamp(56px, 7vw, 80px) 24px',
        }}
      >
        <div
          style={{
            maxWidth: '780px',
            margin: '0 auto',
            textAlign: 'center',
            color: 'rgba(251, 245, 232, 0.92)',
          }}
        >
          <div style={{ marginBottom: '14px' }}>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--brand-amber)',
              }}
            >
              <span
                aria-hidden
                style={{
                  display: 'inline-block',
                  width: '24px',
                  height: '2px',
                  background: 'var(--brand-amber)',
                  marginRight: '10px',
                  verticalAlign: 'middle',
                }}
              />
              Sister site · coming soon
            </span>
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.625rem, 3vw, 2.125rem)',
              fontWeight: 800,
              letterSpacing: '-0.015em',
              color: 'var(--brand-white)',
              lineHeight: 1.2,
              margin: '0 0 14px',
            }}
          >
            Looking for a community of ferret owners?
          </h2>
          <p
            style={{
              fontSize: '1.0625rem',
              lineHeight: 1.65,
              color: 'rgba(251, 245, 232, 0.72)',
              margin: 0,
            }}
          >
            <span
              style={{
                fontWeight: 700,
                color: 'var(--brand-amber)',
              }}
            >
              Ferrets.com
            </span>{' '}
            (coming soon) — the directory and library sister site, for keeper
            communities, breeder listings, and shelter networks. Ferret.com is the
            editorial reference; Ferrets.com will be the connective tissue.
          </p>
        </div>
      </section>

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
          advice. Source base: Quesenberry &amp; Carpenter,{' '}
          <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em>;{' '}
          <em>Journal of Exotic Pet Medicine</em>;{' '}
          <em>Veterinary Clinics of North America: Exotic Animal Practice</em>;
          American Ferret Association (AFA); Association of Exotic Mammal
          Veterinarians (AEMV). Work with an exotic-pet vet for clinical
          decisions.
        </p>
      </section>
    </>
  )
}
