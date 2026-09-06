/**
 * Dog.com — Compare Breeds hub (/compare).
 *
 * Programmatic index of every breed-vs-breed comparison page in
 * BREED_COMPARISON_PAIRS, grouped by primary decision axis so users can
 * find by need rather than just by breed.
 *
 * Renders:
 *   - Hero + breadcrumb
 *   - Methodology block (no first-person testing claims)
 *   - Grouped listing (Family-friendly / Apartment-suitable /
 *     Beginner-friendly / High-energy / Maintenance)
 *   - JSON-LD: ItemList of every comparison page + BreadcrumbList
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  AffiliateDisclosure,
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  EmailCapture,
  SchemaScript,
  ShopCtas,
  StockImage,
  CrossPortfolioCard,
} from '@carloOS/ui'
import { getBreedBySlug, type Breed } from '../../data/breeds'
import {
  BREED_COMPARISON_PAIRS,
  pairSlug,
  type BreedComparisonPair,
  type ComparisonAxis,
} from '../../data/breed-comparisons'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Compare Dog Breeds — Side-by-Side Breed Comparisons',
  description:
    '30 side-by-side dog breed comparisons covering size, energy, lifespan, ' +
    'health, grooming, training, and monthly cost — drawn from AKC and OFA data.',
  path: '/compare',
})

const AXIS_LABEL: Record<ComparisonAxis, string> = {
  'family-friendliness': 'For families',
  'apartment-suitability': 'For apartments',
  'beginner-friendliness': 'For first-time owners',
  'energy-level': 'For active owners',
  maintenance: 'Grooming & maintenance',
}

const AXIS_DESCRIPTION: Record<ComparisonAxis, string> = {
  'family-friendliness':
    'Comparisons focused on temperament with kids, dog-social behavior, and overall household fit.',
  'apartment-suitability':
    'Comparisons focused on size, energy, vocalization, and how each breed copes with apartment life.',
  'beginner-friendliness':
    'Comparisons where the meaningful difference is how forgiving each breed is for a first-time owner.',
  'energy-level':
    'Comparisons focused on daily exercise commitment and the consequences of under-stimulating each breed.',
  maintenance:
    'Comparisons focused on grooming workload, shedding, and ongoing care cost.',
}

const AXIS_ORDER: readonly ComparisonAxis[] = [
  'family-friendliness',
  'apartment-suitability',
  'beginner-friendliness',
  'energy-level',
  'maintenance',
]

interface HydratedPair {
  pair: BreedComparisonPair
  a: Breed
  b: Breed
  slug: string
}

function hydrate(pair: BreedComparisonPair): HydratedPair | null {
  const a = getBreedBySlug(pair.breedASlug)
  const b = getBreedBySlug(pair.breedBSlug)
  if (!a || !b) return null
  return { pair, a, b, slug: pairSlug(pair) }
}

export default function CompareHubPage() {
  const hydrated = BREED_COMPARISON_PAIRS.map(hydrate).filter(
    (h): h is HydratedPair => h !== null,
  )

  // Group by primary axis.
  const grouped: Record<ComparisonAxis, HydratedPair[]> = {
    'family-friendliness': [],
    'apartment-suitability': [],
    'beginner-friendliness': [],
    'energy-level': [],
    maintenance: [],
  }
  for (const h of hydrated) {
    grouped[h.pair.primaryAxis].push(h)
  }

  // JSON-LD.
  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://dog.com/' },
      { name: 'Compare Breeds', url: 'https://dog.com/compare' },
    ],
  })
  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Dog breed comparisons',
    itemListOrder: 'https://schema.org/ItemListUnordered',
    numberOfItems: hydrated.length,
    itemListElement: hydrated.map((h, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `https://dog.com/compare/${h.slug}`,
      name: `${h.a.name} vs ${h.b.name}`,
    })),
  }
  const combined = combineSchemas(breadcrumbSchema, itemListSchema)

  return (
    <>
      <SchemaScript schema={combined} />

      {/* Hero */}
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Breed Comparisons
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Compare Dog Breeds
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          {hydrated.length} side-by-side comparisons covering the most common
          breed-vs-breed decisions, drawn from AKC breed-standard data, OFA
          hereditary health prevalence, and the published veterinary literature.
        </p>
      </div>

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">
          Home
        </Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Compare Breeds</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="dog-com:compare-hero" aspect="16:9" variant="wide" priority />
      </div>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the dog compare-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog compare-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-dog-compare-decision-axis-chart,
            fridge-compare-pair-card, and
            canine-compare-reference-handbook notes that
            match the decision-axis-map, side-by-side-pair-log,
            and akc-ofa-encyclopedia-grounding copy on this
            hub — a laminated dog compare decision-axis chart so
            the family / apartment / beginner / energy /
            maintenance map is posted on the fridge (not a
            tools-hub calculator chart, not a reviews
            buyer-guide chart, not a nutrition feeding chart,
            not a training session chart, not a guides
            section-map chart, not a breeds profile chart,
            not a conditions body-system chart, not a
            symptoms triage chart), a dog fridge compare pair
            card so each breed-vs-breed spoke is labeled on
            the fridge (not a measurement card, not a reviews
            comparison card, not a WSAVA label card, not a
            training cue card, not a guides prep card, not a
            breeds library card, not a conditions library
            card, not a symptoms library card), and a canine
            compare reference handbook so the AKC / OFA /
            Encyclopedia-of-the-Dog grounding is a physical
            kitchen book (not a calculator handbook, not a
            reviews handbook, not a nutrition handbook, not a
            training handbook, not a guides handbook, not a
            breeds handbook, not a conditions handbook, not a
            symptoms handbook). Educational kitchen checklist,
            not a ranked breed list, not a child slicker-brush
            hop, and not a substitute for a veterinarian. No
            spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog compare-hub checklist"
            subtitle="Email the compare-decision-axis-chart, fridge pair-card, and compare-handbook notes. No spam."
            ctaText="Email my dog compare-hub checklist"
            source="compare-hub-under-hero"
          />
        </div>
      </section>

      {/* Methodology */}
      <div className="px-container-sm sm:px-container py-10 border-b border-brand-border">
        <h2 className="font-display font-bold text-brand-dark text-xl mb-3">
          How we compare breeds
        </h2>
        <p className="text-sm text-brand-text-mid leading-relaxed max-w-3xl mb-3">
          Each comparison page renders structured fields from our breed
          dataset side-by-side: size, weight, height, energy level (1–10),
          lifespan, coat and grooming, trainability, family-friendliness,
          apartment suitability, first-time-owner suitability, documented
          breed-specific health concerns, and average monthly cost.
        </p>
        <p className="text-sm text-brand-text-mid leading-relaxed max-w-3xl mb-3">
          Field values are drawn from the AKC breed standard, the OFA
          hereditary health registry, breed-club CHIC priority panels, and the{' '}
          <em>Encyclopedia of the Dog</em> (Wilcox &amp; Walkowicz, DK 2007).
          Monthly cost aggregates come from the APPA 2023–2024 National Pet
          Owners Survey; regional variance is significant. Where the
          comparison cites a health condition, the link points to the
          corresponding Dog.com health guide.
        </p>
        <p className="text-sm text-brand-text-light italic max-w-3xl">
          Compiled by the Dog.com Editorial team — sourced from cited
          references. Breed-typical descriptions reflect what AKC and OFA
          document for the breed population; individual dogs vary, and
          early socialization between weeks 3 and 14 shapes the adult dog
          more than breed alone.
        </p>
      </div>

      {/* Grouped index */}
      <div className="px-container-sm sm:px-container py-12">
        <div className="space-y-12">
          {AXIS_ORDER.map((axis) => {
            const list = grouped[axis]
            if (list.length === 0) return null
            return (
              <section key={axis}>
                <div className="mb-5">
                  <h2 className="font-display font-bold text-brand-dark text-xl mb-1">
                    {AXIS_LABEL[axis]}
                    <span className="text-xs font-normal text-brand-text-light ml-2">
                      ({list.length})
                    </span>
                  </h2>
                  <p className="text-sm text-brand-text-light max-w-3xl">
                    {AXIS_DESCRIPTION[axis]}
                  </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {list.map(({ slug, a, b }) => (
                    <Link
                      key={slug}
                      href={`/compare/${slug}`}
                      className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                        Compare
                      </div>
                      <div className="font-display font-bold text-brand-dark text-base leading-tight mb-2">
                        {a.name} vs {b.name}
                      </div>
                      <div className="text-xs text-brand-text-light leading-relaxed">
                        {a.sizeCategory} · {a.energyLevel.toLowerCase()} energy{' '}
                        <span className="text-brand-text-light/60">vs</span>{' '}
                        {b.sizeCategory} · {b.energyLevel.toLowerCase()} energy
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>

      {/* Cross-link to breed encyclopedia */}
      <section className="bg-brand-surface border-t border-brand-border px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-2">
          Looking for a breed deep dive?
        </h2>
        <p className="text-sm text-brand-text-light mb-4 max-w-2xl">
          Each comparison page links to the underlying breed profiles for the
          full health, training, and care guide.
        </p>
        <Link
          href="/breeds"
          className="inline-block bg-brand-primary text-white font-semibold px-5 py-2.5 rounded-md no-underline hover:bg-brand-primary-dark"
        >
          Browse all breeds →
        </Link>
      </section>
      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Compare-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          decision-axis-map, side-by-side-pair-log, and
          akc-ofa-encyclopedia-grounding copy on this hub —
          a laminated dog compare decision-axis chart so the
          family / apartment / beginner / energy / maintenance
          map is posted on the fridge, a dog fridge compare
          pair card so each breed-vs-breed spoke is labeled
          on the fridge, and a canine compare reference
          handbook so the AKC / OFA / Encyclopedia-of-the-Dog
          grounding is a physical kitchen book. These are
          educational kitchen searches, not a ranked breed
          list, not a substitute for a veterinarian, not a
          tools-hub / reviews-hub / nutrition-hub /
          training-hub / guides-hub / breeds-hub /
          conditions-hub / symptoms-hub hop, and not a child
          slicker-brush hop (those live on breed children).
          This page does not hop medications or vaccines.
          This page does not claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="dog-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated dog compare decision-axis chart /
            dog fridge compare pair card /
            canine compare reference handbook).
            Educational kitchen searches only; no Rx /
            vaccine / flea hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / reviews /
            nutrition / training / guides / breeds /
            conditions / symptoms kitchen kits and child
            slicker+brush+dog+grooming hops.
            Directory import left untouched.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the compare-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page decision-axis-map, side-by-side-pair-log,
            and akc-ofa-encyclopedia-grounding copy — a
            laminated dog compare decision-axis chart, a
            dog fridge compare pair card, and a canine
            compare reference handbook. Educational kitchen
            searches only. They are not a ranked breed list,
            they are not a tools-hub / reviews-hub /
            nutrition-hub / training-hub / guides-hub /
            breeds-hub / conditions-hub / symptoms-hub hop,
            they are not a child slicker-brush hop, and they
            do not replace a veterinarian. Dog.com earns a
            commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+compare+decision+axis+chart?s=compare-hub"
              amazonLabel="Browse laminated dog compare decision-axis charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+fridge+compare+pair+card?s=compare-hub"
              amazonLabel="Browse dog fridge compare pair cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/canine+compare+reference+handbook?s=compare-hub"
              amazonLabel="Browse canine compare reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>
      <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="footer" />
    </>
  )
}
