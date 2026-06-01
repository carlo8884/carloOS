import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Dog vs Cat Nutrition — Species Reference | PetFood.com',
  description:
    'How dog and cat nutritional needs differ — obligate carnivore vs facultative omnivore, taurine, vitamin A, protein, and why species-appropriate food matters.',
  path: '/species',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Species', url: 'https://petfood.com/species' },
  ],
})


const SPECIES = [
  {
    slug: 'dog-vs-cat-nutrition-overview',
    title: 'Dog vs Cat Nutrition',
    description:
      'Dogs and cats are not small versions of the same animal nutritionally.',
  },
  {
    slug: 'cats-are-obligate-carnivores',
    title: 'Cats Are Obligate Carnivores',
    description:
      "Obligate carnivore is a precise biological term, not a marketing slogan: the cat's metabolism is built around eating animal tissue and has lost the flexibility omnivores retain.",
  },
  {
    slug: 'are-dogs-carnivores-or-omnivores',
    title: 'Are Dogs Carnivores or Omnivores?',
    description:
      'The claim that dogs are carnivores like their wolf ancestors is a popular premise behind raw and meat-heavy diets, but the genetics of domestication tell a more nuanced story.',
  },
  {
    slug: 'feeding-cats-vs-dogs-differences',
    title: 'Feeding Cats vs Dogs — Practical Differences',
    description:
      'Beyond the biochemistry, cats and dogs differ in how they eat — and getting the routine right is as important as getting the formula right.',
  },
]

export default function SpeciesHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Species Nutrition
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Dog vs Cat Nutrition
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          The metabolic differences between dogs and cats that make species-appropriate food a requirement, not a preference.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Species</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="petfood-com:category-species" aspect="16:9" variant="wide" priority />
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {SPECIES.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/species/${i.slug}`}
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
          source="species-hub"
        />
      </section>
    </>
  </>
  )
}
