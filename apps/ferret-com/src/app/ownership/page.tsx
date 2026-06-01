import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Ownership & Lifestyle — Cost, Legality, Adoption | Ferret.com',
  description:
    'Eight references for prospective and new ferret owners: true cost of ownership, state legality, adopting vs buying, ferrets with other pets and kids, naming, glossary, and a first-week checklist.',
  path: '/ownership',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ownership', url: 'https://ferret.com/ownership' },
  ],
})

interface OwnershipCard {
  slug: string
  eyebrow: string
  title: string
  description: string
}

const OWNERSHIP_CARDS: OwnershipCard[] = [
  {
    slug: 'cost-of-owning-a-ferret',
    eyebrow: 'Budget',
    title: 'Cost of Owning a Ferret',
    description:
      'Startup and recurring costs broken out: ferret, cage, supplies, food, litter, vaccinations, routine vet care, and the insulinoma/adrenal surgery line item owners underestimate.',
  },
  {
    slug: 'ferret-legality-by-state',
    eyebrow: 'Law',
    title: 'Legality by State',
    description:
      'Ferrets are banned in California and Hawaii and restricted in some cities. How to verify current rules where you live before you bring a ferret home.',
  },
  {
    slug: 'adoption-vs-buying',
    eyebrow: 'Sourcing',
    title: 'Adoption vs Buying',
    description:
      'Shelters and rescues, breeders, and large-scale farm-bred pet-store ferrets compared on health, early-altering, descenting, and what each says about temperament.',
  },
  {
    slug: 'ferrets-and-other-pets',
    eyebrow: 'Multi-pet homes',
    title: 'Ferrets & Other Pets',
    description:
      'How ferrets coexist with dogs and cats, and the prey species — rabbits, rodents, birds, reptiles — that should never share unsupervised space with a ferret.',
  },
  {
    slug: 'ferrets-with-kids',
    eyebrow: 'Family',
    title: 'Ferrets With Kids',
    description:
      'Are ferrets good family pets? Supervision, nip training, age-appropriate handling, and the household-hygiene considerations for homes with young children.',
  },
  {
    slug: 'ferret-names',
    eyebrow: 'Naming',
    title: 'Ferret Names',
    description:
      'A naming reference: themed lists, what tends to suit a ferret’s personality, and a note on whether ferrets respond to their names at all.',
  },
  {
    slug: 'ferret-glossary',
    eyebrow: 'Reference',
    title: 'Ferret Glossary',
    description:
      'Hob, jill, kit, gib, sprite, dooking, the war dance, business, sploot — the vocabulary of ferret keeping defined in one place.',
  },
  {
    slug: 'first-week-checklist',
    eyebrow: 'New owner',
    title: 'First-Week Checklist',
    description:
      'A day-by-day plan for the first seven days: cage setup, vet booking, quarantine for multi-ferret homes, litter and bite training, and bonding without overwhelming a new ferret.',
  },
]

export default function OwnershipHubPage() {
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
              Ownership & Lifestyle
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
            Ferret Ownership & Lifestyle
          </h1>
          <p
            style={{
              fontSize: '1.0625rem',
              fontWeight: 300,
              color: 'rgba(251, 245, 232, 0.65)',
              maxWidth: '640px',
              lineHeight: 1.65,
              margin: 0,
            }}
          >
            Before the cage and the kibble comes the decision itself. Eight references for people
            deciding whether — and how — to bring a ferret home: real cost, where ferrets are legal,
            adopting versus buying, living with other pets and children, naming, vocabulary, and the
            first week. Practical, honest, and pushy about nothing.
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
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Ownership</span>
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
            maxWidth: '720px',
            lineHeight: 1.65,
          }}
        >
          A ferret is a 6–10 year commitment to an animal that needs daily out-of-cage time, an
          exotic-mammal vet, and a household that suits it. These pages help you decide well and
          start well. Once a ferret is home, the{' '}
          <Link href="/care" className="amber-link" style={{ fontWeight: 600 }}>Care</Link>{' '}and{' '}
          <Link href="/health" className="amber-link" style={{ fontWeight: 600 }}>Health</Link>{' '}
          hubs cover day-to-day husbandry and medical references.
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
          {OWNERSHIP_CARDS.map((card) => (
            <li key={card.slug}>
              <Link
                href={`/ownership/${card.slug}`}
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
          title="The Ferret.com Owner's Reference"
          subtitle="New articles on ferret ownership, care, and health. Cited. No product pushes."
          ctaText="Subscribe"
          source="ownership-hub"
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
