import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Myths — Evidence Check | PetFood.com',
  description:
    'Common pet food myths checked against the evidence — by-products, grain, fillers, corn, the BEG-diet debate, and marketing claims that do not hold up.',
  path: '/myths',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Myths', url: 'https://petfood.com/myths' },
  ],
})


const MYTHS = [
  {
    slug: 'by-products-myth',
    title: 'The By-Products Myth',
    description:
      'By-products is among the most effective negative marketing terms in pet food, evoking floor sweepings and waste.',
  },
  {
    slug: 'fillers-myth',
    title: 'The Pet Food Fillers Myth',
    description:
      'Filler is one of the most-used words in pet food criticism and one of the least meaningful: it has no regulatory definition and is applied loosely to any ingredient a marketer w...',
  },
  {
    slug: 'corn-in-pet-food-myth',
    title: 'Corn in Pet Food Myth',
    description:
      'Corn is the single most maligned ingredient in pet food, accused of being an indigestible filler and a common allergen.',
  },
  {
    slug: 'marketing-terms-decoded',
    title: 'Pet Food Marketing Terms Decoded',
    description:
      'The front of a pet food bag is marketing; the regulated information is on the back.',
  },
  {
    slug: 'limited-ingredient-diet-myth',
    title: 'The Limited-Ingredient Diet Myth',
    description:
      'Limited-ingredient diets are marketed as a solution for food-sensitive pets, with the implication that fewer ingredients means hypoallergenic.',
  },
]

export default function MythsHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Myth-Busting
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Pet Food Myths
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Widely repeated claims about pet food, checked against AAFCO definitions, peer-reviewed evidence, and regulatory sources — what holds up and what does not.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Myths</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {MYTHS.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/myths/${i.slug}`}
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
          source="myths-hub"
        />
      </section>
    </>
  </>
  )
}
