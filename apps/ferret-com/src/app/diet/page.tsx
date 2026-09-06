import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, StockImage } from '@carloOS/ui'
import { HubHero } from '../../components/HubHero'

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
    slug: 'can-ferrets-eat',
    eyebrow: 'Food safety',
    title: 'Can Ferrets Eat…?',
    description:
      'An A–Z safe/not-recommended/toxic checker for the foods owners ask about most — chocolate, onion, fruit, grains, chicken, and egg — framed for an obligate carnivore.',
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

      {/* Hero — image-first overlaid masthead (matches the homepage identity) */}
      <HubHero
        eyebrow="Diet & Nutrition"
        title="Ferret Diet & Nutrition"
        intro="Ferrets are obligate carnivores with a short gut and a roughly three-hour transit time — diet is the single largest controllable input on lifespan. References on the feeding decisions that matter: the whole-prey-versus-kibble question, macronutrient targets, treats, food labels, life-stage feeding, and weight. Cited from exotic-mammal veterinary literature throughout."
        manifestKey="ferret-com:diet-hero"
        imageAlt="Ferret diet and nutrition reference"
        cta={{ href: '/diet/best-ferret-kibble', label: 'Choosing a ferret kibble' }}
      />

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

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the ferret diet-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ferret diet-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-ferret-diet-feeding-chart,
            fridge-diet-label-card, and
            mustelid-diet-reference-handbook notes that
            match the diet-section-map,
            macronutrient-and-label-log, and
            obligate-carnivore-and-AFA-grounding copy on
            this hub — a laminated ferret diet feeding
            chart so the section map (whole-prey vs
            kibble, protein/fat, treats, labels,
            hydration, weight) is posted on the fridge
            (not a tools-hub calculator chart, not a
            reviews buyer-guide chart), a ferret fridge
            diet label card so macronutrient-window and
            label-literacy notes are labeled on the
            fridge (not a measurement card, not a reviews
            comparison card), and a mustelid diet
            reference handbook so the obligate-carnivore /
            AFA / exotic-vet grounding is a physical
            kitchen book (not a calculator handbook, not
            a reviews handbook). Educational kitchen
            checklist, not a ranked kibble list, not a
            gram-scale / sipper-bottle hop, and not a
            substitute for a veterinarian. Aging pages
            stay held. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="ferret-com"
            title="Ferret diet-hub checklist"
            subtitle="Email the diet-feeding-chart, fridge label-card, and diet-handbook notes. No spam."
            ctaText="Email my ferret diet-hub checklist"
            source="diet-hub-under-hero"
          />
        </div>
      </section>

      {/* Featured diet spokes — three photo-backed pillar articles */}
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
              href: '/diet/whole-prey-vs-kibble',
              eyebrow: 'Diet model',
              title: 'Whole-Prey vs Kibble',
              desc: 'Biological appropriateness, convenience, cost, and dental wear compared across both feeding models.',
              manifestKey: 'ferret-com:diet-raw-vs-kibble',
              imageAlt: 'Raw meat and dry kibble — the ferret feeding model decision',
            },
            {
              href: '/diet/protein-and-fat-requirements',
              eyebrow: 'Macronutrients',
              title: 'Protein & Fat Requirements',
              desc: 'The published macronutrient window: 32–40% protein, 18–22% fat, under 3% carbs — and why dry-matter basis matters.',
              manifestKey: 'ferret-com:care-diet-basics',
              imageAlt: 'A ferret near its food bowl — protein and fat macronutrient requirements',
            },
            {
              href: '/diet/best-ferret-kibble',
              eyebrow: 'Commercial diet',
              title: 'Choosing a Ferret Kibble',
              desc: 'How to read an ingredient panel, the three commercial tiers, and why most supermarket ferret food fails.',
              manifestKey: 'ferret-com:tool-food-evaluator',
              imageAlt: 'Ferret food bowl — choosing the right commercial kibble',
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
                  boxShadow: 'inset 0 0 0 1px var(--brand-border)',
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

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Diet-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          diet-section-map, macronutrient-and-label-log,
          and obligate-carnivore-and-AFA-grounding copy
          on this hub — a laminated ferret diet feeding
          chart so the whole-prey / kibble / protein-fat /
          treats / labels / hydration / weight map is
          posted on the fridge, a ferret fridge diet
          label card so macronutrient-window and
          label-literacy notes are labeled on the fridge,
          and a mustelid diet reference handbook so the
          obligate-carnivore / AFA / exotic-vet grounding
          is a physical kitchen book. These are
          educational kitchen searches, not a ranked
          kibble list, not a substitute for a
          veterinarian, not a tools-hub / reviews-hub
          hop, and not a child gram-scale / sipper-bottle
          hop (those live on weight-management and
          hydration-and-water). This page does not hop
          medications or vaccines. This page does not
          claim hands-on testing. Ferret aging stays
          held.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated ferret diet feeding chart /
            ferret fridge diet label card /
            mustelid diet reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / kibble-SKU hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools-hub
            laminated+ferret+calculator+tools+chart /
            ferret+fridge+measurement+card /
            mustelid+calculator+reference+handbook,
            reviews-hub
            laminated+ferret+reviews+buyer+guide+chart /
            ferret+fridge+reviews+comparison+card /
            mustelid+reviews+reference+handbook,
            and child digital+gram+scale /
            heavy+ceramic+pet+water+bowl hops.
            No directory import on this page. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the diet-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page diet-section-map,
            macronutrient-and-label-log, and
            obligate-carnivore-and-AFA-grounding copy — a
            laminated ferret diet feeding chart, a ferret
            fridge diet label card, and a mustelid diet
            reference handbook. Educational kitchen
            searches only. They are not a ranked kibble
            list, they are not a tools-hub / reviews-hub
            hop, they are not a gram-scale / sipper
            hop, and they do not replace a veterinarian.
            Ferret.com earns a commission on qualifying
            purchases at no extra cost to you. Empty
            Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+ferret+diet+feeding+chart?s=diet-hub"
              amazonLabel="Browse laminated ferret diet feeding charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/ferret+fridge+diet+label+card?s=diet-hub"
              amazonLabel="Browse ferret fridge diet label cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/mustelid+diet+reference+handbook?s=diet-hub"
              amazonLabel="Browse mustelid diet reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

    </>
  )
}
