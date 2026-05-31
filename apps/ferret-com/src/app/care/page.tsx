import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Care — Diet, Housing, Grooming & Safety | Ferret.com',
  description:
    'Six ferret care references: diet basics, cage setup, bathing and grooming, exercise and enrichment, litter training, and toxic foods — grounded in obligate-carnivore physiology.',
  path: '/care',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Care', url: 'https://ferret.com/care' },
  ],
})

interface CareCard {
  slug: string
  eyebrow: string
  title: string
  description: string
}

const CARE_CARDS: CareCard[] = [
  {
    slug: 'diet-basics',
    eyebrow: 'Nutrition',
    title: 'Diet Basics',
    description:
      'Ferrets are obligate carnivores: 32–40% protein, 18–22% fat, under 3% carbs. Commercial diet tiers, raw-feeding context, and the carbohydrate–insulinoma link.',
  },
  {
    slug: 'cage-setup',
    eyebrow: 'Housing',
    title: 'Cage Setup',
    description:
      'Minimum cage size, wire spacing, ramp safety, bedding options, litter placement, and enrichment layout for a multi-level ferret home.',
  },
  {
    slug: 'exercise-and-enrichment',
    eyebrow: 'Activity',
    title: 'Exercise & Enrichment',
    description:
      'Minimum out-of-cage time, ferret-proofing a room, tunnel systems, dig boxes, and rotating enrichment to prevent stereotypies.',
  },
  {
    slug: 'litter-training',
    eyebrow: 'Husbandry',
    title: 'Litter Training',
    description:
      'Corner-pan placement strategy, multi-pan households, setback management, and why ferret-specific pans matter over standard cat boxes.',
  },
  {
    slug: 'bathing-and-grooming',
    eyebrow: 'Grooming',
    title: 'Bathing & Grooming',
    description:
      'Why less bathing is more (sebaceous overcompensation), safe frequency, ear cleaning technique, nail trimming, and the full seasonal groom.',
  },
  {
    slug: 'toxic-foods',
    eyebrow: 'Safety',
    title: 'Toxic Foods',
    description:
      'Chocolate, onions, raisins, sugar, xylitol, dairy, and the full category-by-category list of what must never reach a ferret.',
  },
]

export default function CareHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />

      {/* Hero */}
      <div
        style={{
          background: 'var(--brand-dark)',
          padding: 'clamp(48px, 8vw, 80px) clamp(20px, 5vw, 80px)',
        }}
      >
        <div style={{ maxWidth: '1180px', margin: '0 auto' }}>
          <div style={{ marginBottom: '16px' }}>
            <span className="eyebrow">
              <span className="eyebrow-rule" />
              Care Reference
            </span>
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 5vw, 3.25rem)',
              fontWeight: 800,
              color: 'var(--brand-primary-pale)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              margin: '0 0 16px',
            }}
          >
            Ferret Care
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              fontWeight: 300,
              color: 'rgba(251, 245, 232, 0.65)',
              maxWidth: '600px',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Six references covering the daily and seasonal care a domestic ferret needs — from
            obligate-carnivore nutrition through housing, grooming, and toxicity safety. Each
            page cites exotic-mammal veterinary literature.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <nav
        style={{
          padding: '12px clamp(20px, 5vw, 80px)',
          fontSize: '0.8125rem',
          color: 'var(--brand-text-light)',
          background: 'var(--brand-surface)',
          borderBottom: '1px solid var(--brand-border)',
          display: 'flex',
          gap: '8px',
        }}
      >
        <Link href="/" className="amber-link" style={{ fontWeight: 600 }}>Home</Link>
        <span>›</span>
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Care</span>
      </nav>

      {/* Cards */}
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px)',
        }}
      >
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '20px',
          }}
        >
          {CARE_CARDS.map((card) => (
            <li key={card.slug}>
              <Link
                href={`/care/${card.slug}`}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  padding: '24px 22px',
                  background: 'var(--brand-white)',
                  border: '1px solid var(--brand-border)',
                  borderRadius: '12px',
                  textDecoration: 'none',
                  color: 'inherit',
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
                    opacity: 0.7,
                  }}
                />
                <div
                  style={{
                    fontSize: '0.6875rem',
                    fontWeight: 700,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color: 'var(--brand-amber-dark)',
                    marginBottom: '8px',
                  }}
                >
                  {card.eyebrow}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 800,
                    color: 'var(--brand-text-dark)',
                    marginBottom: '8px',
                    lineHeight: 1.2,
                  }}
                >
                  {card.title}
                </div>
                <p
                  style={{
                    fontSize: '0.9rem',
                    lineHeight: 1.55,
                    color: 'var(--brand-text-mid)',
                    margin: '0 0 14px',
                    flex: 1,
                  }}
                >
                  {card.description}
                </p>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    fontWeight: 700,
                    color: 'var(--brand-primary)',
                  }}
                >
                  Read →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Email Capture */}
      <section
        style={{
          background: 'var(--brand-primary-pale)',
          borderTop: '1px solid var(--brand-border)',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px)',
        }}
      >
        <EmailCapture
          variant="section"
          siteId="ferret-com"
          title="The Ferret.com Care Library"
          subtitle="New articles and updates on ferret diet, housing, and husbandry. No product pushes."
          ctaText="Subscribe"
          source="care-hub"
          perks={[
            'Evidence-based only',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}
