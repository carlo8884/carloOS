import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, StockImage, FAQAccordion } from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

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

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pet Nutrition Fundamentals',
  numberOfItems: NUTRITION.length,
  itemListElement: NUTRITION.map((i, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: i.title,
    url: `https://petfood.com/nutrition/${i.slug}`,
  })),
}

const nutritionFAQItems: FAQItem[] = [
  {
    question: "Why does the guaranteed analysis on a pet food bag show percentages but not tell me whether the food is nutritionally complete?",
    answer: "The guaranteed analysis is a regulatory disclosure of minimum crude protein, minimum crude fat, maximum crude fiber, and maximum moisture — four numbers that are legally required on every bag. These numbers tell you the analytical composition of the food as manufactured, not whether the food meets AAFCO nutrient profiles for a specific life stage. A food could hit 30% crude protein and still be deficient in one or more essential amino acids such as taurine, methionine, or cysteine, because crude protein measures nitrogen content, not amino acid completeness. The nutritional adequacy statement — the sentence that says the food is formulated to meet or substantiated by animal feeding trials to meet AAFCO profiles for a specific life stage — is the regulatory signal for completeness. The guaranteed analysis supports but does not replace it.",
    answerText: "The guaranteed analysis is a regulatory disclosure of minimum crude protein, minimum crude fat, maximum crude fiber, and maximum moisture — four numbers that are legally required on every bag. These numbers tell you the analytical composition of the food as manufactured, not whether the food meets AAFCO nutrient profiles for a specific life stage. A food could hit 30% crude protein and still be deficient in one or more essential amino acids such as taurine, methionine, or cysteine, because crude protein measures nitrogen content, not amino acid completeness. The nutritional adequacy statement — the sentence that says the food is formulated to meet or substantiated by animal feeding trials to meet AAFCO profiles for a specific life stage — is the regulatory signal for completeness. The guaranteed analysis supports but does not replace it.",
  },
  {
    question: "What is dry-matter basis and why does it matter for comparing wet and dry pet food?",
    answer: "Dry-matter basis is a mathematical conversion that removes the water content from nutrient percentages so that wet food and dry food can be compared on the same scale. A wet food labeled at 10% crude protein contains roughly 88% moisture, so on a dry-matter basis the protein content is approximately 83% — far higher than the as-fed label suggests. Without this conversion, comparing a dry kibble at 28% protein to a wet food at 9% protein appears to favor the kibble, when the wet food may actually deliver more protein per calorie once moisture is accounted for. The dry-matter basis formula is: (nutrient percentage / (100 minus moisture percentage)) times 100. The dry-matter basis page in this cluster walks through the calculation step by step with worked examples.",
    answerText: "Dry-matter basis is a mathematical conversion that removes the water content from nutrient percentages so that wet food and dry food can be compared on the same scale. A wet food labeled at 10% crude protein contains roughly 88% moisture, so on a dry-matter basis the protein content is approximately 83% — far higher than the as-fed label suggests. Without this conversion, comparing a dry kibble at 28% protein to a wet food at 9% protein appears to favor the kibble, when the wet food may actually deliver more protein per calorie once moisture is accounted for. The dry-matter basis formula is: nutrient percentage divided by (100 minus moisture percentage), multiplied by 100. The dry-matter basis page in this cluster walks through the calculation step by step with worked examples.",
  },
  {
    question: "Does a higher protein percentage on a pet food label mean it is a better food?",
    answer: "Not necessarily. Crude protein percentage measures total dietary nitrogen, not protein quality, amino acid completeness, or digestibility. A food with 35% crude protein from a low-digestibility plant protein source may deliver less usable amino acids than a food with 28% crude protein from a highly digestible animal source. The AAFCO nutrient profiles set minimum requirements for total crude protein and for specific essential amino acids such as arginine, lysine, methionine, and taurine — meeting both is required for nutritional adequacy, and crude protein alone does not confirm amino acid sufficiency. For most healthy adult dogs and cats eating a complete-and-balanced diet, protein level within a normal range is less important than the overall nutrient profile and the quality of the protein sources used.",
    answerText: "Not necessarily. Crude protein percentage measures total dietary nitrogen, not protein quality, amino acid completeness, or digestibility. A food with 35% crude protein from a low-digestibility plant protein source may deliver less usable amino acids than a food with 28% crude protein from a highly digestible animal source. The AAFCO nutrient profiles set minimum requirements for total crude protein and for specific essential amino acids such as arginine, lysine, methionine, and taurine — meeting both is required for nutritional adequacy, and crude protein alone does not confirm amino acid sufficiency. For most healthy adult dogs and cats eating a complete-and-balanced diet, protein level within a normal range is less important than the overall nutrient profile and the quality of the protein sources used.",
  },
]

const faqSchema = buildFAQSchema({
  questions: nutritionFAQItems.map((f) => ({
    question: f.question,
    answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
  })),
})

const schema = combineSchemas(breadcrumbSchema, itemListSchema, faqSchema)

export default function NutritionHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
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
        <span>&#x203A;</span>
        <span className="text-brand-text-mid font-medium">Nutrition</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="petfood-com:nutrition-hero" priority aspect="16:9" variant="wide" />
      </div>

      <div className="px-container-sm sm:px-container py-10 max-w-content-wide">
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          Understanding what is actually in a pet food bag — and what the label does and does not tell you — starts with the underlying nutrient science. AAFCO 2025 Chapter 6 sets the regulatory framework for macronutrient and micronutrient minimums and maximums in complete-and-balanced pet food; the NRC 2006 Nutrient Requirements of Dogs and Cats provides the underlying biological requirements those profiles are built on. This cluster of eleven reference pages covers the nutrient categories that appear on labels, explain the label math required to interpret them, and addresses the marketing claims built around them.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          The pages are organized by nutrient type: macronutrients (protein, fat, carbohydrate, calories), label math (dry-matter basis, guaranteed analysis), micronutrients (vitamins, minerals, taurine and amino acids), hydration, and functional nutrients. Each page explains what the nutrient does, what the AAFCO profile requires, how it appears on the label, and what marketing claims are typically attached to it and whether those claims are supported. Decision factors to look for: the AAFCO nutritional adequacy statement (not just the crude protein number), the dry-matter basis protein and fat when comparing across formats, and the calcium-to-phosphorus ratio if selecting food for a growing large-breed puppy.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed">
          New to reading labels? Start with the <Link href="/glossary" className="text-brand-primary hover:underline">pet food glossary</Link> for plain-language definitions, then return to this cluster to go deeper on individual nutrients.
        </p>
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

      <div className="px-container-sm sm:px-container pb-12 max-w-content-wide">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-6">Frequently Asked Questions</h2>
        <FAQAccordion items={nutritionFAQItems} includeSchema={false} />
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
