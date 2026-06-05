import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Behavior — Training, Bonding & Enrichment | Ferret.com',
  description:
    'Ferret behavior references: litter training, kit bite inhibition, harness training, ferret-to-ferret introductions, and multi-ferret group dynamics.',
  path: '/behavior',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Behavior', url: 'https://ferret.com/behavior' },
  ],
})

interface BehaviorCard {
  slug: string
  eyebrow: string
  title: string
  description: string
}

const BEHAVIOR_CARDS: BehaviorCard[] = [
  {
    slug: 'training-and-bonding',
    eyebrow: 'Training & socialization',
    title: 'Training & Bonding',
    description:
      'Litter training, kit bite inhibition, scruffing as a calming reflex (not punishment), H-style harness training, slow ferret-to-ferret introductions, and multi-ferret group dynamics.',
  },
  {
    slug: 'biting-and-nipping',
    eyebrow: 'Behavior fixes',
    title: 'Biting & Nipping',
    description:
      'Why ferrets bite — play, teething, fear, or pain — and a calm, no-punishment plan to teach bite inhibition. Plus when a sudden bite is a medical red flag.',
  },
  {
    slug: 'play-aggression',
    eyebrow: 'Reading body language',
    title: 'Play Aggression',
    description:
      'How to tell exuberant rough play — the weasel war dance, neck-biting, dominance dragging — from genuine aggression, and exactly when to step in.',
  },
  {
    slug: 'dooking-and-vocalizations',
    eyebrow: 'Ferret sounds',
    title: 'Dooking & Vocalizations',
    description:
      'A field guide to ferret sounds: the happy dook, the warning hiss, the alarm scream, chirps, whimpers, and what each one is telling you.',
  },
  {
    slug: 'dead-sleep-explained',
    eyebrow: 'Don’t panic',
    title: 'Dead Sleep Explained',
    description:
      'Why ferrets sleep so deeply that they seem unresponsive, how to wake them safely, and how to tell a normal deep sleep from a true emergency.',
  },
  {
    slug: 'digging-and-burrowing',
    eyebrow: 'The polecat instinct',
    title: 'Digging & Burrowing',
    description:
      'Why ferrets dig at carpet, plants, and litter, and how to build a dig box that channels the instinct and saves your floor.',
  },
  {
    slug: 'stress-signs',
    eyebrow: 'Welfare',
    title: 'Stress Signs',
    description:
      'The subtle behavioural and physical signs of a stressed ferret, common causes, and the critical overlap between stress and early illness.',
  },
  {
    slug: 'bonding-with-your-ferret',
    eyebrow: 'Building trust',
    title: 'Bonding With Your Ferret',
    description:
      'A week-by-week plan to earn a new, shy, or rescue ferret’s trust — scent transfer, hand-feeding, floor time, and reading the trust signals.',
  },
  {
    slug: 'diy-enrichment-toys',
    eyebrow: 'Cheap & safe',
    title: 'DIY Enrichment Toys',
    description:
      'Build cheap, safe ferret enrichment at home — tunnels, dig boxes, ball pits, foraging games — plus the safety rules that prevent a blockage emergency.',
  },
  {
    slug: 'leash-and-harness-training',
    eyebrow: 'Outdoor walks',
    title: 'Leash & Harness Training',
    description:
      'Why ferrets need an H-style harness over a collar, the two-finger fit rule, an indoor break-in schedule, and how to start outdoor walks safely.',
  },
  {
    slug: 'litter-box-troubleshooting',
    eyebrow: 'House training',
    title: 'Litter Box Troubleshooting',
    description:
      'Why ferrets miss the box — placement, the corner instinct, cleaning, and litter choice — plus the medical causes behind a sudden regression.',
  },
  {
    slug: 'multi-ferret-introductions',
    eyebrow: 'Group dynamics',
    title: 'Multi-Ferret Introductions',
    description:
      'A staged protocol for adding a ferret: quarantine, neutral-ground sessions, what normal dominance posturing looks like, and when a pairing is not working.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ferret Behavior Guides',
  numberOfItems: BEHAVIOR_CARDS.length,
  itemListElement: BEHAVIOR_CARDS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.title,
    url: `https://ferret.com/behavior/${b.slug}`,
  })),
}

const ferretBehaviorSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function BehaviorHubPage() {
  return (
    <>
      <SchemaScript schema={ferretBehaviorSchema} />

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
              Behavior Reference
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
            Ferret Behavior
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
            Training, bonding, and enrichment references for domestic ferrets — from kit bite
            inhibition through harness training, ferret-to-ferret introductions, and
            multi-ferret group dynamics.
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
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Behavior</span>
      </nav>

      {/* Hero image */}
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: 'clamp(28px, 4vw, 48px) clamp(20px, 5vw, 80px) 0' }}>
        <StockImage manifestKey="ferret-com:behavior-hero" aspect="16:9" variant="wide" priority subtleCredit />
      </div>

      {/* Featured behavior spokes — three photo-backed pillar articles */}
      <div
        style={{
          maxWidth: '1180px',
          margin: '0 auto',
          padding: 'clamp(32px, 5vw, 56px) clamp(20px, 5vw, 80px) 0',
        }}
      >
        <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-amber-dark)', margin: '0 0 20px' }}>
          Start here
        </p>
        <ul
          style={{
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
            gap: '18px',
          }}
        >
          {[
            {
              href: '/behavior/training-and-bonding',
              eyebrow: 'Training & socialization',
              title: 'Training & Bonding',
              desc: 'Litter training, bite inhibition, harness work, and slow ferret-to-ferret introductions.',
              manifestKey: 'ferret-com:behavior-training',
              imageAlt: 'A ferret being handled gently during training',
            },
            {
              href: '/behavior/biting-and-nipping',
              eyebrow: 'Behavior fixes',
              title: 'Biting & Nipping',
              desc: 'Why ferrets bite and a calm, no-punishment plan to teach bite inhibition.',
              manifestKey: 'ferret-com:behavior-biting',
              imageAlt: 'A close ferret portrait — biting and nipping behaviour guide',
            },
            {
              href: '/behavior/bonding-with-your-ferret',
              eyebrow: 'Building trust',
              title: 'Bonding With Your Ferret',
              desc: 'A week-by-week plan to earn a new or shy ferret\'s trust — hand-feeding, floor time, and reading trust signals.',
              manifestKey: 'ferret-com:behavior-hero',
              imageAlt: 'A ferret at play — building a bond with your ferret',
            },
          ].map((card) => (
            <li key={card.href}>
              <a
                href={card.href}
                style={{
                  position: 'relative',
                  display: 'block',
                  height: '100%',
                  minHeight: '260px',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  textDecoration: 'none',
                  color: 'inherit',
                  boxShadow: 'inset 0 0 0 1px rgba(251, 245, 232, 0.1)',
                }}
              >
                <div
                  className="[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0 [&_figure>div]:!rounded-none [&>div]:h-full [&_figure]:h-full"
                  style={{ position: 'absolute', inset: 0 }}
                >
                  <StockImage
                    manifestKey={card.manifestKey}
                    alt={card.imageAlt}
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
                    background: 'linear-gradient(to top, rgba(30,20,10,0.92) 0%, rgba(30,20,10,0.35) 55%, rgba(30,20,10,0.08) 100%)',
                  }}
                />
                <div
                  style={{
                    position: 'relative',
                    zIndex: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    minHeight: '260px',
                    padding: '22px',
                  }}
                >
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-amber)', marginBottom: '6px' }}>
                    {card.eyebrow}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 800, color: 'rgba(251, 245, 232, 0.98)', lineHeight: 1.2, marginBottom: '8px' }}>
                    {card.title}
                  </div>
                  <p style={{ fontSize: '0.875rem', lineHeight: 1.5, color: 'rgba(251, 245, 232, 0.78)', margin: '0 0 10px' }}>
                    {card.desc}
                  </p>
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: 'var(--brand-amber)' }}>
                    Read &rarr;
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
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
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          {BEHAVIOR_CARDS.map((card) => (
            <li key={card.slug}>
              <Link
                href={`/behavior/${card.slug}`}
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
          subtitle="New articles on ferret behavior, health, and care. Cited. No product pushes."
          ctaText="Subscribe"
          source="behavior-hub"
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
