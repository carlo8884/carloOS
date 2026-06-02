import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Supplements — Evidence Reference | PetFood.com',
  description:
    'Evidence-based reference on common pet supplements — fish oil, glucosamine, probiotics, multivitamins, joint, skin, and digestive supplements.',
  path: '/supplements',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Supplements', url: 'https://petfood.com/supplements' },
  ],
})


const SUPPLEMENTS = [
  {
    slug: 'fish-oil-omega-3',
    title: 'Fish Oil and Omega-3 Supplements',
    description:
      'Fish oil is the pet supplement with the strongest evidence base, supported for joint comfort, skin and coat, and as an adjunct in kidney and heart disease.',
  },
  {
    slug: 'glucosamine-and-joint-support',
    title: 'Glucosamine and Joint Supplements',
    description:
      'Glucosamine and chondroitin are the best-selling joint supplements for pets, but their evidence base is weaker than their marketing implies, and the loosely regulated supplement...',
  },
  {
    slug: 'probiotics-for-pets',
    title: 'Probiotics for Pets',
    description:
      'Probiotics have a genuine evidence base for specific uses in pets — notably acute diarrhea — but the benefits are strain-specific, human products are not interchangeable with pe...',
  },
  {
    slug: 'multivitamins-for-pets',
    title: 'Multivitamins for Pets',
    description:
      'Multivitamins are among the most-purchased and least-necessary pet supplements.',
  },
  {
    slug: 'skin-and-coat-supplements',
    title: 'Skin and Coat Supplements',
    description:
      'A dull, flaky, or shedding coat is one of the most common reasons owners reach for a supplement, and some skin-and-coat ingredients genuinely help.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pet Supplement Evidence Reference',
  numberOfItems: SUPPLEMENTS.length,
  itemListElement: SUPPLEMENTS.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://petfood.com/supplements/${s.slug}`,
  })),
}

const supplementsSchema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function SupplementsHubPage() {
  return (
    <>
      <SchemaScript schema={supplementsSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Supplement Reference
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Pet Supplements
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          What the evidence actually supports for the most-marketed pet supplements — and when a complete diet already covers the need.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Supplements</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {SUPPLEMENTS.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/supplements/${i.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {i.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {i.description}
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
          siteId="petfood-com"
          title="Free Label Decoder"
          subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
          source="supplements-hub"
        />
      </section>
    </>
  </>
  )
}
