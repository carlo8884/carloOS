import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, CrossPortfolioCard } from '@carloOS/ui'
import { PremiumMasthead } from '../../components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Nutrition — Forage, Feeds, Water, and Feeding for the Job",
  description:
    "Equine nutrition references: forage-first feeding, hay types, feeding easy and hard keepers, grain, water, ration balancers, seniors, and performance.",
  path: '/nutrition',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: "Nutrition", url: 'https://horses.com/nutrition' },
  ],
})

const ENTRIES = [
  {
    slug: "forage-basics",
    eyebrow: "Foundations",
    title: "Forage Basics",
    description:
      "Why fiber comes first, how the hindgut works, how much forage a horse needs, and trickle feeding.",
  },
  {
    slug: "hay-types",
    eyebrow: "Foundations",
    title: "Hay Types Compared",
    description:
      "Grass, legume, and mixed hays, judging quality, and matching hay to the horse.",
  },
  {
    slug: "grain-and-concentrates",
    eyebrow: "Concentrates",
    title: "Grain and Concentrates",
    description:
      "When concentrates are needed, why big grain meals are risky, and safe feeding rules.",
  },
  {
    slug: "ration-balancers",
    eyebrow: "Concentrates",
    title: "Ration Balancers",
    description:
      "Filling nutritional gaps without calories, who benefits most, and balancer vs regular feed.",
  },
  {
    slug: "beet-pulp",
    eyebrow: "Feeds",
    title: "Beet Pulp Explained",
    description:
      "The super-fiber benefits, why and how to soak it, who it suits, and common myths.",
  },
  {
    slug: "feeding-the-easy-keeper",
    eyebrow: "By type",
    title: "Feeding the Easy Keeper",
    description:
      "Weight control without starvation, controlling sugar, slow feeding, and avoiding laminitis.",
  },
  {
    slug: "feeding-the-hard-keeper",
    eyebrow: "By type",
    title: "Feeding the Hard Keeper",
    description:
      "Ruling out causes, maximizing forage, and adding calories safely with fat and fiber.",
  },
  {
    slug: "feeding-senior-horses",
    eyebrow: "By type",
    title: "Feeding Senior Horses",
    description:
      "Dental decline, senior feeds and hay replacers, protein, and dealing with PPID.",
  },
  {
    slug: "feeding-the-performance-horse",
    eyebrow: "By type",
    title: "Feeding the Performance Horse",
    description:
      "Matching energy to work, energy sources, feeding around work, and avoiding problems.",
  },
  {
    slug: "water-requirements",
    eyebrow: "Water",
    title: "Water Requirements",
    description:
      "How much horses drink, what drives intake up, the link to colic, and encouraging drinking.",
  },
  {
    slug: "salt-and-electrolytes",
    eyebrow: "Water",
    title: "Salt and Electrolytes",
    description:
      "Why every horse needs daily salt, replacing salty sweat, and using electrolytes safely.",
  },
  {
    slug: "toxic-plants",
    eyebrow: "Safety",
    title: "Toxic Plants for Horses",
    description:
      "The most dangerous plants and trees, how poisoning happens, signs, and prevention.",
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Equine Nutrition Reference Guides',
  numberOfItems: ENTRIES.length,
  itemListElement: ENTRIES.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: e.title,
    url: `https://horses.com/nutrition/${e.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function NutritionHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <PremiumMasthead
        manifestKey="horses-com:category-nutrition"
        eyebrow="Equine Nutrition"
        title="Equine Nutrition"
        subtitle="Evidence-led references on feeding horses well, built on the forage-first principle and tuned to the individual horse and its job."
      />

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&rsaquo;</span>
        <span className="text-brand-text-mid font-medium">Nutrition</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Nutrition references grounded in the NRC Nutrient Requirements of Horses, the Equine Endocrinology Group, and the equine clinical-nutrition literature. None of these replace a veterinarian or qualified equine nutritionist.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0">
          {ENTRIES.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/nutrition/${entry.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {entry.eyebrow}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {entry.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {entry.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Reference"
          subtitle="One email a week: a deep-dive on a breed, condition, or piece of gear. Citation-anchored."
          ctaText="Subscribe"
          source="nutrition-hub"
          perks={[
            'One email weekly',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
      <CrossPortfolioCard currentSite="horses-com" contentType="nutrition" variant="footer" />
    </>
  )
}
