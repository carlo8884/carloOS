import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Health — Conditions, Vaccinations & Vet Prep | Ferret.com',
  description:
    'Seven ferret health references: insulinoma, adrenal disease, lymphoma, dental disease, aging care, vaccinations, and vet-visit prep — grounded in exotic-mammal veterinary literature.',
  path: '/health',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Health', url: 'https://ferret.com/health' },
  ],
})

interface HealthCard {
  slug: string
  eyebrow: string
  title: string
  description: string
}

const HEALTH_CARDS: HealthCard[] = [
  {
    slug: 'insulinoma',
    eyebrow: 'Most common neoplasm',
    title: 'Insulinoma',
    description:
      'The most common middle-aged-ferret cancer. Fasting glucose thresholds, the prednisone–diazoxide–surgery treatment ladder, and emergency hypoglycemia response.',
  },
  {
    slug: 'adrenal-disease',
    eyebrow: 'Endocrine',
    title: 'Adrenal Disease',
    description:
      'Second most common middle-aged disease after insulinoma. Hormone-panel diagnosis, deslorelin (Suprelorin) implants, surgical adrenalectomy, and prognosis.',
  },
  {
    slug: 'lymphoma',
    eyebrow: 'Oncology',
    title: 'Lymphoma',
    description:
      'Juvenile and adult presentations with distinct prognoses. Diagnostic workup, multi-agent chemotherapy protocols, and realistic outcome ranges.',
  },
  {
    slug: 'dental-disease',
    eyebrow: 'Dentistry',
    title: 'Dental Disease',
    description:
      'Ferrets accumulate tartar fast and develop gingivitis by age 2–3. Daily brushing, annual scaling under anesthesia, and periodontal staging.',
  },
  {
    slug: 'aging-ferret-care',
    eyebrow: 'Senior ferrets (5+)',
    title: 'Aging Ferret Care',
    description:
      'Rising insulinoma and adrenal incidence, dental decline, weight loss, and arthritis. Quality-of-life monitoring and the euthanasia conversation.',
  },
  {
    slug: 'vaccinations',
    eyebrow: 'Preventive care',
    title: 'Vaccination Schedule',
    description:
      'Canine distemper kit series at 8, 11, and 14 weeks plus annual booster. Rabies at 12+ weeks plus annual. Reaction signs and premedication protocol.',
  },
  {
    slug: 'vet-visit-prep',
    eyebrow: 'Veterinary care',
    title: 'Vet Visit Prep',
    description:
      'Finding an exotic-mammal vet, carrier setup, what bloodwork to expect, fasting rules, and what to bring to an annual or sick visit.',
  },
]

export default function HealthHubPage() {
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
              Health Reference
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
            Ferret Health
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
            Seven evidence-based references on the conditions ferret owners encounter most often,
            from the two most common neoplasms to preventive care and aging. Citations from
            peer-reviewed exotic-mammal veterinary literature throughout.
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
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Health</span>
      </nav>

      {/* Cards */}
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 72px) clamp(20px, 5vw, 80px)',
        }}
      >
        <p
          style={{
            fontSize: '0.9375rem',
            color: 'var(--brand-text-light)',
            marginBottom: '40px',
            maxWidth: '680px',
            lineHeight: 1.65,
          }}
        >
          These reference pages do not replace veterinary consultation. Ferrets in the United States
          should be seen by a veterinarian with exotic-mammal experience. The AEMV (Association of
          Exotic Mammal Veterinarians) member directory is the best starting point if your general-practice
          vet does not treat ferrets.
        </p>

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
          {HEALTH_CARDS.map((card) => (
            <li key={card.slug}>
              <Link
                href={`/health/${card.slug}`}
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
          title="The Ferret.com Health Reference"
          subtitle="New articles and updates on ferret health, diet, and care. Cited. No product pushes."
          ctaText="Subscribe"
          source="health-hub"
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
