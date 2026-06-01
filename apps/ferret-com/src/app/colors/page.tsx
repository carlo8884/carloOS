import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Colors, Patterns & Choosing One | Ferret.com',
  description:
    'Ferret colors and patterns — sable, albino, dark-eyed white, cinnamon — plus lifespan, male vs. female differences, and how to choose a healthy ferret.',
  path: '/colors',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Choosing', url: 'https://ferret.com/colors' },
  ],
})

interface ColorCard {
  slug: string
  eyebrow: string
  title: string
  description: string
}

const COLOR_CARDS: ColorCard[] = [
  {
    slug: 'ferret-colors-and-patterns',
    eyebrow: 'The overview',
    title: 'Colors & Patterns',
    description:
      'The full ferret color and pattern map — sable, champagne, chocolate, cinnamon, black, albino, and DEW — plus pattern types like mitt, panda, blaze, and roan.',
  },
  {
    slug: 'sable-ferrets',
    eyebrow: 'Most common color',
    title: 'Sable Ferrets',
    description:
      'The classic "wild" ferret look: warm brown guard hairs over a pale undercoat with a dark mask. Why sable is the most common color and how it changes with the seasons.',
  },
  {
    slug: 'albino-ferrets',
    eyebrow: 'White, red-eyed',
    title: 'Albino Ferrets',
    description:
      'True albinos: pure white coat, pink nose, red eyes, and no melanin. The genetics behind albinism, the laboratory history, and care notes for these striking ferrets.',
  },
  {
    slug: 'dark-eyed-white-ferrets',
    eyebrow: 'White, dark-eyed',
    title: 'Dark-Eyed White (DEW)',
    description:
      'White coat but burgundy-to-black eyes — not albinos. How DEW ferrets differ genetically from albinos, why the distinction matters, and what to know.',
  },
  {
    slug: 'cinnamon-ferrets',
    eyebrow: 'Rare & warm-toned',
    title: 'Cinnamon Ferrets',
    description:
      'A reddish-brown coat with a brick-toned undercoat — one of the rarer recognized colors. What "cinnamon" means, how it differs from champagne and chocolate, and the naming confusion.',
  },
  {
    slug: 'ferret-lifespan',
    eyebrow: 'How long they live',
    title: 'Ferret Lifespan',
    description:
      'Typical ferret lifespan, life stages from kit to senior, the factors that influence longevity, and how to support a long, healthy ferret life.',
  },
  {
    slug: 'male-vs-female-ferrets',
    eyebrow: 'Hobs vs. jills',
    title: 'Male vs. Female',
    description:
      'Size, temperament, and care differences between hobs (males) and jills (females), the role of spaying and neutering, and which might fit your home.',
  },
  {
    slug: 'choosing-a-healthy-ferret',
    eyebrow: 'Before you adopt',
    title: 'Choosing a Healthy Ferret',
    description:
      'A pre-adoption checklist — what a healthy kit or adult looks like, the questions to ask, breeder vs. shelter vs. pet store, and the red flags to walk away from.',
  },
]

export default function ColorsHubPage() {
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
              Colors &amp; Choosing
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
            Ferret Colors &amp; Choosing One
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
            Ferrets do not come in breeds — they come in colors and patterns. This hub maps the
            full palette from sable to albino, explains lifespan and the hob-versus-jill question,
            and walks you through choosing a healthy ferret before you bring one home.
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
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Colors &amp; Choosing</span>
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
          One quick myth-bust before you dive in: domestic ferrets (<em>Mustela furo</em>) are a
          single species, not a set of breeds. The terms you will hear at a shelter or pet store —
          sable, albino, cinnamon, DEW — describe coat color and pattern, not breed. For health and
          day-to-day care, browse our{' '}
          <Link href="/health" className="amber-link" style={{ fontWeight: 600 }}>health</Link> and{' '}
          <Link href="/care" className="amber-link" style={{ fontWeight: 600 }}>care</Link> references.
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
          {COLOR_CARDS.map((card) => (
            <li key={card.slug}>
              <Link
                href={`/colors/${card.slug}`}
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
          title="The Ferret.com Reference"
          subtitle="New articles on ferret colors, health, and care. Cited. No product pushes."
          ctaText="Subscribe"
          source="colors-hub"
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
