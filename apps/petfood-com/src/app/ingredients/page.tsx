import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Ingredients — Reference Library | PetFood.com',
  description:
    'Independent reference on commonly-discussed pet food ingredients — animal protein sources, grain-free and DCM, preservatives — anchored to FDA CVM and AAFCO sources.',
  path: '/ingredients',
})

const INGREDIENTS = [
  {
    slug: 'animal-protein-sources',
    title: 'Animal Protein Sources',
    description:
      'Named meats vs by-product meals, rendering, "meat meal" definitions, and what AAFCO ingredient names actually denote.',
  },
  {
    slug: 'grain-free-dcm-risk',
    title: 'Grain-Free and DCM Risk',
    description:
      'The FDA CVM 2018-2019 investigation into nutritionally-mediated DCM in dogs, the brands named, and what the evidence supports today.',
  },
  {
    slug: 'preservatives-pet-food',
    title: 'Preservatives in Pet Food',
    description:
      'Natural (mixed tocopherols, rosemary) vs synthetic (BHA, BHT, ethoxyquin) preservatives — what the toxicology evidence says.',
  },
]

export default function IngredientsHubPage() {
  return (
    <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Ingredient Reference
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Pet Food Ingredients
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Reference library on the ingredients owners ask about most — what they are, what
          AAFCO ingredient names actually denote, and what the evidence supports about safety
          and nutritional value.
        </p>
      </div>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Ingredients</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {INGREDIENTS.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/ingredients/${i.slug}`}
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
          source="ingredients-hub"
        />
      </section>
    </>
  )
}
