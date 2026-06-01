import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript, EmailCapture, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Colors & Patterns — Sable, Albino, DEW & More | Ferret.com',
  description:
    'A field guide to ferret colors and patterns — sable, albino, dark-eyed white, cinnamon, champagne, black, chocolate — plus lifespan and choosing one.',
  path: '/colors',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Patterns', url: 'https://ferret.com/colors' },
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
    eyebrow: 'Start here',
    title: 'Colors & Patterns',
    description:
      'The full ferret color and pattern map — sable, champagne, chocolate, cinnamon, black, albino, and DEW — plus pattern overlays like mitt, panda, blaze, and roan.',
  },
  {
    slug: 'sable-ferrets',
    eyebrow: 'Most common color',
    title: 'Sable Ferrets',
    description:
      'The classic "wild" ferret look: warm-brown guard hairs over a pale undercoat with a dark bandit mask. Why sable is the most common color and how it shifts with the seasons.',
  },
  {
    slug: 'albino-ferrets',
    eyebrow: 'White, red-eyed',
    title: 'Albino Ferrets',
    description:
      'True albinos: white coat, pink nose, ruby eyes, and no melanin. The genetics behind albinism, the laboratory history, sun sensitivity, and the deafness myth.',
  },
  {
    slug: 'dark-eyed-white-ferrets',
    eyebrow: 'White, dark-eyed',
    title: 'Dark-Eyed White (DEW)',
    description:
      'White coat but burgundy-to-black eyes — not albinos. How DEW ferrets differ genetically, the link to coat-color deafness, and what panda and blaze share with them.',
  },
  {
    slug: 'cinnamon-ferrets',
    eyebrow: 'Rare & warm-toned',
    title: 'Cinnamon Ferrets',
    description:
      'A reddish-brown coat over a golden undercoat — one of the rarest and most contested labels, often confused with champagne and chocolate.',
  },
  {
    slug: 'champagne-ferrets',
    eyebrow: 'Diluted sable',
    title: 'Champagne Ferrets',
    description:
      'A pale, milky-coffee dilution of the sable coat with a faint mask and pinkish nose. How to tell champagne from cinnamon and chocolate, and why the line is blurry.',
  },
  {
    slug: 'black-ferrets',
    eyebrow: 'Deepest pigment',
    title: 'Black Ferrets',
    description:
      'Black sable and true black coats with blackish noses and near-black guard hairs — the darkest end of the spectrum, and how it differs from a standard sable.',
  },
  {
    slug: 'chocolate-ferrets',
    eyebrow: 'Warm brown',
    title: 'Chocolate Ferrets',
    description:
      'Milk-chocolate guard hairs over a white-to-amber undercoat with a brown nose. Where chocolate sits between sable and champagne on the warm-brown gradient.',
  },
  {
    slug: 'ferret-lifespan',
    eyebrow: 'How long they live',
    title: 'Ferret Lifespan',
    description:
      'The typical 5–8 year span, the factors that shorten or lengthen it, and the honest answer to whether coat color has anything to do with longevity.',
  },
  {
    slug: 'male-vs-female-ferrets',
    eyebrow: 'Hobs vs. jills',
    title: 'Male vs. Female',
    description:
      'Size, temperament, and care differences between hobs (males) and jills (females), the role of spaying and neutering, and which might fit your home.',
  },
  {
    slug: 'silver-ferrets',
    eyebrow: 'Frosted & shifting',
    title: 'Silver Ferrets',
    description:
      'White-tipped guard hairs over a darker base for a steely, frosted grey — and the famously unstable coat that often whitens with every molt. How silver differs from dark-eyed white.',
  },
  {
    slug: 'panda-ferrets',
    eyebrow: 'White-headed pattern',
    title: 'Panda Ferrets',
    description:
      'A fully white head and shoulders over a colored saddle, with white mitts. What defines the panda pattern, how it differs from blaze, and why most pandas warrant a hearing check.',
  },
  {
    slug: 'blaze-and-roan-patterns',
    eyebrow: 'Stripe & salt-and-pepper',
    title: 'Blaze & Roan Patterns',
    description:
      'Blaze is a white stripe up the head; roan is a salt-and-pepper mix of white and colored guard hairs. How the two overlap, and the deafness flag that travels with the blaze.',
  },
  {
    slug: 'choosing-a-healthy-ferret',
    eyebrow: 'Before you adopt',
    title: 'Choosing a Healthy Ferret',
    description:
      'A head-to-tail checklist for picking a bright, sound ferret — coat, eyes, ears, body condition, temperament — and the color-linked health notes worth knowing first.',
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
              Colors &amp; Patterns
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
            Ferret Colors &amp; Patterns
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
            Sable, albino, dark-eyed white, cinnamon, champagne, black, chocolate — ferret coats
            come in a small but gorgeously confusing palette. This is the field guide: what each
            color actually looks like, how the labels overlap, and where coat color does (and
            doesn&apos;t) connect to health and lifespan.
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
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Colors &amp; Patterns</span>
      </nav>

      {/* Hero image */}
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: 'clamp(28px, 4vw, 48px) clamp(20px, 5vw, 80px) 0' }}>
        <StockImage manifestKey="ferret-com:colors-hero" aspect="16:9" variant="wide" priority />
      </div>

      {/* Intro */}
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
            maxWidth: '700px',
            lineHeight: 1.65,
          }}
        >
          One quick myth-bust before you dive in: domestic ferrets (<em>Mustela furo</em>) are a
          single species, not a set of breeds. Color names are descriptive, not genetic — the same
          animal can be labeled differently by two breeders, and a coat shifts shade between the
          heavy winter coat and the sparse summer one. Use these guides for the look and the
          language, then see{' '}
          <Link href="/health" className="amber-link" style={{ fontWeight: 600 }}>Health</Link> and{' '}
          <Link href="/care" className="amber-link" style={{ fontWeight: 600 }}>Care</Link> for what
          actually keeps a ferret of any color thriving.
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
          title="The Ferret.com Field Notes"
          subtitle="New color guides, care references, and health explainers. Cited. No product pushes."
          ctaText="Subscribe"
          source="colors-hub"
          perks={[
            'Plain-English field guides',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}
