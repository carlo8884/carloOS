import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture, StockImage, CrossPortfolioCard } from '@carloOS/ui'
import { Conditions, RESERVED_HEALTH_SLUGS, type ConditionCategory } from '../../data/conditions'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Health Library — Conditions & Vet Triage | Lizard.com',
  description:
    'Reptile health library: emergency conditions, chronic disease, husbandry-driven illness, diagnostic ladders, and ARAV-member reptile-vet triage.',
  path: '/health',
})

const FOUNDATIONAL_GUIDES = [
  {
    title: 'Sick Reptile Signs',
    href: '/health/sick-reptile-signs',
    badge: 'Essential First Read',
    desc: 'How to tell when a reptile is sick — the warning signs every keeper should know',
  },
  {
    title: 'Reptile Feeding Guide',
    href: '/health/reptile-feeding-guide',
    desc: 'Species-appropriate feeding, gut-loading, and supplementation',
  },
  {
    title: 'Metabolic Bone Disease',
    href: '/health/metabolic-bone-disease',
    desc: 'The most common nutritional disease in captive reptiles',
  },
  {
    title: 'Salmonella Prevention',
    href: '/health/salmonella-prevention',
    desc: 'Public-health basics for keepers of reptiles',
  },
  {
    title: 'UVB Lighting Guide',
    href: '/setup/uvb-lighting-guide',
    desc: 'The single most-mismanaged element of reptile husbandry',
  },
  {
    title: 'Temperature Guide',
    href: '/setup/temperature-guide',
    desc: 'Why immune function in reptiles is temperature-dependent',
  },
]

const EXISTING_HEALTH_PAGES: Array<{ slug: string; label: string }> = [
  { slug: 'dehydration-reptiles', label: 'Dehydration in Reptiles' },
  { slug: 'dysecdysis', label: 'Dysecdysis (Shedding Problems)' },
  { slug: 'egg-binding', label: 'Egg Binding (Dystocia)' },
  { slug: 'hypocalcemia', label: 'Hypocalcemia' },
  { slug: 'metabolic-bone-disease', label: 'Metabolic Bone Disease' },
  { slug: 'parasites', label: 'Reptile Parasites' },
  { slug: 'parasites-guide', label: 'Parasites Guide' },
  { slug: 'reptile-feeding-guide', label: 'Reptile Feeding Guide' },
  { slug: 'respiratory-infection', label: 'Respiratory Infection' },
  { slug: 'salmonella-prevention', label: 'Salmonella Prevention' },
  { slug: 'sick-reptile-signs', label: 'Sick Reptile Signs' },
  { slug: 'stomatitis', label: 'Stomatitis (Mouth Rot)' },
  { slug: 'thermal-burns', label: 'Thermal Burns' },
  { slug: 'vitamin-a-deficiency', label: 'Vitamin A Deficiency' },
  { slug: 'prolapse-first-aid', label: 'Cloacal Prolapse (Emergency)' },
  { slug: 'reptile-obesity', label: 'Obesity in Reptiles' },
  { slug: 'gout-prevention', label: 'Gout in Reptiles' },
  { slug: 'abscess-treatment', label: 'Abscesses in Reptiles' },
  { slug: 'snake-mite-eradication', label: 'Snake Mites' },
  { slug: 'retained-eye-caps', label: 'Retained Eye Caps' },
  { slug: 'anorexia-in-reptiles', label: 'Anorexia (Food Refusal)' },
  { slug: 'constipation-impaction', label: 'Constipation & Impaction' },
  { slug: 'gut-loading-guide', label: 'Gut-Loading Feeders' },
  { slug: 'feeder-insects-compared', label: 'Feeder Insects Compared' },
  { slug: 'dubia-roach-care', label: 'Dubia Roach Care' },
  { slug: 'feeding-frozen-thawed-rodents', label: 'Feeding Frozen-Thawed Rodents' },
  { slug: 'calcium-d3-supplementation', label: 'Calcium & D3 Supplementation' },
  { slug: 'herbivore-reptile-diet', label: 'Herbivore Reptile Diet' },
]

const CATEGORY_ORDER: ConditionCategory[] = [
  'Critical',
  'Common Chronic',
  'Husbandry-Driven',
  'Species-Specific',
]

const CATEGORY_DESCRIPTION: Record<ConditionCategory, string> = {
  Critical:
    'High-mortality reptile emergencies. These conditions warrant same-day veterinary contact.',
  'Common Chronic':
    'Common reptile disease that presents chronically but treats well with prompt veterinary care and husbandry correction.',
  'Husbandry-Driven':
    'Preventable conditions whose root cause is captive husbandry. Treatment without husbandry correction predictably fails.',
  'Species-Specific':
    'Disease tied to specific reptile groups — usually with collection-management implications.',
}

export default function LizardHealthPage() {
  const dynamicConditions = Conditions.filter((c) => !RESERVED_HEALTH_SLUGS.has(c.slug))

  const breadcrumbSchema = buildBreadcrumbSchema({
    items: [
      { name: 'Home', url: 'https://lizard.com/' },
      { name: 'Reptile Health', url: 'https://lizard.com/health' },
    ],
  })

  const itemListSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Reptile Health Library',
    numberOfItems: EXISTING_HEALTH_PAGES.length,
    itemListElement: EXISTING_HEALTH_PAGES.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.label,
      url: `https://lizard.com/health/${p.slug}`,
    })),
  }

  const lizardHealthSchema = combineSchemas(breadcrumbSchema, itemListSchema)

  return (
    <>
      <SchemaScript schema={lizardHealthSchema} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-12">
        <h1
          className="font-display font-bold text-white tracking-tight mb-3"
          style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}
        >
          Reptile Health Library
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Conditions, husbandry triggers, diagnostic ladders, treatment tiers, and ARAV-vet
          triage — drawn from Mader&rsquo;s Reptile and Amphibian Medicine and Surgery, the
          Journal of Herpetological Medicine and Surgery, and the Association of Reptilian and
          Amphibian Veterinarians (ARAV).
        </p>
      </div>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="lizard-com:category-health" aspect="16:9" variant="wide" priority />
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <div className="grid sm:grid-cols-2 gap-4 max-w-content-wide mx-auto">
          {FOUNDATIONAL_GUIDES.map((g) => (
            <Link
              key={g.href}
              href={g.href}
              className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary transition-colors"
            >
              {g.badge && (
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {g.badge}
                </div>
              )}
              <div className="font-display font-bold text-brand-dark text-sm mb-1">{g.title}</div>
              <div className="text-xs text-brand-text-light">{g.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture
          variant="section"
          siteId="lizard-com"
          title="Free Reptile Care Sheets"
          subtitle="Species-specific care guides and husbandry checklists for subscribers."
          source="health-hub"
          ctaText="Subscribe Free"
          perks={['Species care sheets', 'Husbandry checklists', 'No spam']}
        />
      </div>

      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">
          Existing Reptile-Health Guides
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
          {EXISTING_HEALTH_PAGES.map((p) => (
            <Link
              key={p.slug}
              href={`/health/${p.slug}`}
              className="text-sm text-brand-primary no-underline hover:underline"
            >
              {p.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-border bg-brand-white px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-2">
          Condition Reference Catalog
        </h2>
        <p className="text-xs text-brand-text-light max-w-content-wide mb-6">
          {dynamicConditions.length} reptile health conditions with symptoms, diagnostic ladder,
          treatment tiers, prevention via husbandry, and ARAV-vet triage. Sourced from
          Mader&rsquo;s Reptile and Amphibian Medicine and Surgery, the Journal of Herpetological
          Medicine and Surgery, ARAV continuing-education materials, and peer-reviewed reptile-
          medicine literature.
        </p>

        {CATEGORY_ORDER.map((cat) => {
          const inCat = dynamicConditions.filter((c) => c.category === cat)
          if (inCat.length === 0) return null
          return (
            <div key={cat} className="mb-8">
              <h3 className="font-display font-bold text-brand-dark text-sm mb-1">
                {cat} ({inCat.length})
              </h3>
              <p className="text-xs text-brand-text-light max-w-content-wide mb-3">
                {CATEGORY_DESCRIPTION[cat]}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {inCat.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/health/${c.slug}`}
                    className="block border border-brand-border rounded-md p-3 no-underline hover:border-brand-primary transition-colors"
                  >
                    <div className="font-display font-bold text-brand-dark text-sm mb-1">
                      {c.shortName ?? c.name}
                    </div>
                    <div className="text-xs text-brand-text-light">
                      {c.urgency} · {c.mortality} mortality ·{' '}
                      {c.contagious ? 'Contagious' : 'Not contagious'}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>

      <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="footer" />
    </>
  )
}
