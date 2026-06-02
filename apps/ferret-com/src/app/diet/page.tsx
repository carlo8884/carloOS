import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Diet & Nutrition — Feeding the Obligate Carnivore | Ferret.com',
  description:
    'Evidence-based references on feeding ferrets: whole-prey vs kibble, raw feeding, protein and fat targets, treats, labels, life-stage, transitions, and weight.',
  path: '/diet',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Diet', url: 'https://ferret.com/diet' },
  ],
})

interface DietCard {
  slug: string
  eyebrow: string
  title: string
  description: string
}

const DIET_CARDS: DietCard[] = [
  {
    slug: 'whole-prey-vs-kibble',
    eyebrow: 'Diet model',
    title: 'Whole-Prey vs Kibble',
    description:
      'The central feeding decision. Biological appropriateness, convenience, cost, dental wear, and food safety compared across the two dominant feeding models.',
  },
  {
    slug: 'best-ferret-kibble',
    eyebrow: 'Commercial diet',
    title: 'Choosing a Ferret Kibble',
    description:
      'How to read an ingredient panel, the three commercial tiers, animal-first sourcing, carbohydrate by difference, and why most supermarket "ferret food" fails.',
  },
  {
    slug: 'raw-feeding-guide',
    eyebrow: 'Raw / frankenprey',
    title: 'Raw Feeding Guide',
    description:
      'Frankenprey ratios, whole-prey sourcing, freezing protocols, pathogen harm-reduction, and the calcium-to-phosphorus balance that home raw diets most often miss.',
  },
  {
    slug: 'protein-and-fat-requirements',
    eyebrow: 'Macronutrients',
    title: 'Protein & Fat Requirements',
    description:
      'The published macronutrient window for ferrets: 32–40% protein, 18–22% fat, under 3% carbohydrate, taurine, and why dry-matter basis matters.',
  },
  {
    slug: 'safe-treats',
    eyebrow: 'Treats',
    title: 'Safe Treats',
    description:
      'What to reach for and what to skip. Meat-based treats, egg, the no-sugar rule, and the long list of marketed "ferret treats" that are quietly inappropriate.',
  },
  {
    slug: 'supplements-and-vitamins',
    eyebrow: 'Supplements',
    title: 'Supplements & Vitamins',
    description:
      'Fatty-acid coat supplements, when a complete diet makes supplements redundant, the hairball-paste debate, and supplements to approach with caution.',
  },
  {
    slug: 'hydration-and-water',
    eyebrow: 'Water',
    title: 'Hydration & Water',
    description:
      'Bowl versus bottle, daily intake, dehydration warning signs, the role of moisture in a kibble-heavy diet, and water safety in hot weather.',
  },
  {
    slug: 'kit-vs-adult-feeding',
    eyebrow: 'Life stage',
    title: 'Kit vs Adult Feeding',
    description:
      'Why the first six months set lifelong food preferences, imprinting and food fixation, weaning, and how feeding changes from kit to adult to senior.',
  },
  {
    slug: 'weight-management',
    eyebrow: 'Body condition',
    title: 'Weight Management',
    description:
      'Body-condition scoring, the normal seasonal weight swing, distinguishing healthy gain from illness, and the feeding errors behind over- and underweight ferrets.',
  },
  {
    slug: 'reading-food-labels',
    eyebrow: 'Label literacy',
    title: 'Reading Food Labels',
    description:
      'Decode the ingredient split and guaranteed analysis, convert to a dry-matter basis, estimate carbohydrate by difference, and spot red-flag ingredients.',
  },
  {
    slug: 'senior-ferret-nutrition',
    eyebrow: 'Life stage',
    title: 'Senior Ferret Nutrition',
    description:
      'Feeding the older ferret: why protein stays high, softening food for worn teeth, watching body condition, and the diseases that reshape the diet.',
  },
  {
    slug: 'transitioning-foods',
    eyebrow: 'Switching diets',
    title: 'Transitioning Foods',
    description:
      'Why ferrets imprint on food and resist change, a gradual mixing schedule, soup-and-scent tricks for stubborn eaters, and the warning signs to stop.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ferret Diet and Nutrition Guides',
  numberOfItems: DIET_CARDS.length,
  itemListElement: DIET_CARDS.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    url: `https://ferret.com/diet/${d.slug}`,
  })),
}

const ferretDietSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function DietHubPage() {
  return (
    <>
      <SchemaScript schema={ferretDietSchema} />

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
              Diet & Nutrition
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
            Ferret Diet & Nutrition
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
            Ferrets are obligate carnivores with a short gut and a roughly three-hour transit time —
            diet is the single largest controllable input on lifespan. A growing set of references on
            feeding decisions, from the whole-prey-versus-kibble question to macronutrient targets, treats,
            food labels, life-stage feeding, and weight. Cited from exotic-mammal veterinary literature throughout.
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
        <span style={{ color: 'var(--brand-text-mid)', fontWeight: 500 }}>Diet</span>
      </nav>

      {/* Hero image */}
      <div style={{ maxWidth: '1180px', margin: '0 auto', padding: 'clamp(28px, 4vw, 48px) clamp(20px, 5vw, 80px) 0' }}>
        <StockImage manifestKey="ferret-com:diet-hero" aspect="16:9" variant="wide" priority />
      </div>

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
          These pages describe what ferrets need and why. They are editorial nutrition references,
          not personalized veterinary advice — a ferret diagnosed with insulinoma, adrenal disease,
          or a gastrointestinal condition should have any diet change supervised by a veterinarian
          with exotic-mammal experience. For the clinical side of these conditions, see the{' '}
          <Link href="/health" className="amber-link" style={{ fontWeight: 600 }}>Health</Link>{' '}
          hub; for husbandry, see{' '}
          <Link href="/care" className="amber-link" style={{ fontWeight: 600 }}>Care</Link>.
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
          {DIET_CARDS.map((card) => (
            <li key={card.slug}>
              <Link
                href={`/diet/${card.slug}`}
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
          title="The Ferret.com Nutrition Reference"
          subtitle="New articles on ferret diet, feeding, and care. Cited. No product pushes."
          ctaText="Subscribe"
          source="diet-hub"
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
