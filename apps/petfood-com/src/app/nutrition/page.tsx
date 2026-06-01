import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Nutrition Fundamentals — Reference Library | PetFood.com',
  description:
    'Reference library on pet nutrition fundamentals — protein, fat, carbohydrate, calories, vitamins, minerals, taurine, water, and reading the guaranteed analysis.',
  path: '/nutrition',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Nutrition', url: 'https://petfood.com/nutrition' },
  ],
})


const NUTRITION = [
  {
    slug: 'dietary-protein-requirements',
    title: 'Dietary Protein for Dogs and Cats',
    description:
      'Protein is the most-marketed and least-understood macronutrient on a pet food bag.',
  },
  {
    slug: 'dietary-fat-and-fatty-acids',
    title: 'Dietary Fat and Essential Fatty Acids',
    description:
      'Fat is the most energy-dense macronutrient, the carrier for fat-soluble vitamins, and the source of the essential fatty acids that drive skin, coat, and inflammatory-pathway health.',
  },
  {
    slug: 'carbohydrates-in-pet-food',
    title: 'Carbohydrates in Pet Food',
    description:
      'Carbohydrate is the macronutrient with no AAFCO minimum, which marketing has converted into the claim that carbohydrate is unnecessary or harmful.',
  },
  {
    slug: 'calories-and-energy-density',
    title: 'Pet Food Calories and Energy Density',
    description:
      'Every weight problem and every feeding-guide error traces back to one number most owners never check: the caloric density of the food.',
  },
  {
    slug: 'dry-matter-basis-explained',
    title: 'Dry-Matter Basis Explained',
    description:
      'The single most useful piece of pet food math is the dry-matter conversion.',
  },
  {
    slug: 'vitamins-in-pet-food',
    title: 'Vitamins in Pet Food',
    description:
      'Vitamins are required in tiny quantities and supplied in a complete diet through ingredients plus a premix added at the mixer.',
  },
  {
    slug: 'minerals-in-pet-food',
    title: 'Minerals in Pet Food',
    description:
      'Minerals are inorganic nutrients that must be supplied in correct amounts and correct ratios — get the calcium-to-phosphorus ratio wrong in a growing large-breed puppy and you r...',
  },
  {
    slug: 'taurine-and-amino-acids',
    title: 'Taurine and Essential Amino Acids',
    description:
      'Amino acids are the reason crude protein on a label tells you so little.',
  },
  {
    slug: 'water-and-hydration',
    title: 'Water and Hydration in Pet Nutrition',
    description:
      'Water is the nutrient most easily overlooked and the one an animal can least afford to lack.',
  },
  {
    slug: 'guaranteed-analysis-explained',
    title: 'The Guaranteed Analysis Explained',
    description:
      'The guaranteed analysis is the small box of percentages on every pet food bag, and it is one of the most frequently misread label elements.',
  },
  {
    slug: 'antioxidants-and-functional-nutrients',
    title: 'Antioxidants and Functional Nutrients',
    description:
      'Beyond the essential nutrients, pet diets increasingly market functional ingredients — antioxidants, nutraceuticals, and additives claimed to support immunity, cognition, or aging.',
  },
]

export default function NutritionHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Nutrition Fundamentals
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Pet Nutrition Fundamentals
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          The macronutrients, micronutrients, and label math that underpin every diet decision — anchored to AAFCO nutrient profiles, the NRC requirements, and WSAVA guidance.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Nutrition</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="petfood-com:nutrition-hero" priority aspect="16:9" variant="wide" />
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {NUTRITION.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/nutrition/${i.slug}`}
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
          source="nutrition-hub"
        />
      </section>
    </>
  </>
  )
}
