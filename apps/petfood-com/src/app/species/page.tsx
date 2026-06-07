import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, StockImage, FAQAccordion } from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

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

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Dog vs Cat Nutrition Species Reference',
  numberOfItems: SPECIES.length,
  itemListElement: SPECIES.map((s, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: s.title,
    url: `https://petfood.com/species/${s.slug}`,
  })),
}

const speciesFAQItems: FAQItem[] = [
  {
    question: "Can I feed my dog food labeled for cats, or vice versa?",
    answer: "No. Cat food is formulated to meet feline nutritional requirements, which differ substantially from canine requirements. Cat food is higher in protein and fat, contains added taurine (which cats cannot synthesize adequately from precursors), and uses arachidonic acid from animal sources because cats lack the enzyme activity to convert linoleic acid efficiently. Feeding cat food long-term to a dog can contribute to obesity and, in some cases, gastrointestinal upset. Feeding dog food to cats is more serious: dog food does not contain sufficient taurine or preformed vitamin A (cats cannot convert beta-carotene), and deficiencies in these nutrients cause irreversible organ damage in cats. Always use food that carries the correct species on its AAFCO nutritional adequacy statement.",
    answerText: "No. Cat food is formulated to meet feline nutritional requirements, which differ substantially from canine requirements. Cat food is higher in protein and fat, contains added taurine (which cats cannot synthesize adequately from precursors), and uses arachidonic acid from animal sources because cats lack the enzyme activity to convert linoleic acid efficiently. Feeding cat food long-term to a dog can contribute to obesity and, in some cases, gastrointestinal upset. Feeding dog food to cats is more serious: dog food does not contain sufficient taurine or preformed vitamin A (cats cannot convert beta-carotene), and deficiencies in these nutrients cause irreversible organ damage in cats. Always use food that carries the correct species on its AAFCO nutritional adequacy statement.",
  },
  {
    question: "What does it mean that cats are obligate carnivores?",
    answer: "Obligate carnivore means a cat's metabolism is biologically dependent on nutrients found exclusively or predominantly in animal tissue. Cats have lost or downregulated several metabolic pathways that omnivores use to synthesize nutrients from plant precursors: they cannot convert beta-carotene to vitamin A, cannot synthesize taurine from sulfur amino acids in sufficient quantities, have limited delta-6-desaturase activity for fatty acid conversion, and require preformed niacin from animal tissue because they shunt tryptophan away from the niacin synthesis pathway. Practically, this means a nutritionally adequate cat diet must be built around animal-source ingredients — a requirement the AAFCO cat nutrient profiles reflect through higher minimums for protein, certain amino acids, and preformed micronutrients.",
    answerText: "Obligate carnivore means a cat's metabolism is biologically dependent on nutrients found exclusively or predominantly in animal tissue. Cats have lost or downregulated several metabolic pathways that omnivores use to synthesize nutrients from plant precursors: they cannot convert beta-carotene to vitamin A, cannot synthesize taurine from sulfur amino acids in sufficient quantities, have limited delta-6-desaturase activity for fatty acid conversion, and require preformed niacin from animal tissue because they shunt tryptophan away from the niacin synthesis pathway. Practically, this means a nutritionally adequate cat diet must be built around animal-source ingredients — a requirement the AAFCO cat nutrient profiles reflect through higher minimums for protein, certain amino acids, and preformed micronutrients.",
  },
  {
    question: "Are dogs carnivores or omnivores?",
    answer: "Dogs are best described as facultative omnivores — animals that evolved primarily as carnivores but have developed significant omnivore adaptations through domestication alongside humans. Genetic analysis shows that modern dogs have multiple copies of the AMY2B gene encoding salivary amylase, an adaptation that improves starch digestion not present in wolves. Dogs can synthesize taurine from precursor amino acids (though efficiency varies by individual and diet), convert some beta-carotene to vitamin A, and tolerate a wide range of carbohydrate levels in their diet. This does not mean dogs thrive on high-carbohydrate or plant-only diets, but it does mean that the dog-as-strict-carnivore framing behind many raw and grain-free marketing claims is not supported by the current nutritional science.",
    answerText: "Dogs are best described as facultative omnivores — animals that evolved primarily as carnivores but have developed significant omnivore adaptations through domestication alongside humans. Genetic analysis shows that modern dogs have multiple copies of the AMY2B gene encoding salivary amylase, an adaptation that improves starch digestion not present in wolves. Dogs can synthesize taurine from precursor amino acids (though efficiency varies by individual and diet), convert some beta-carotene to vitamin A, and tolerate a wide range of carbohydrate levels in their diet. This does not mean dogs thrive on high-carbohydrate or plant-only diets, but it does mean that the dog-as-strict-carnivore framing behind many raw and grain-free marketing claims is not supported by the current nutritional science.",
  },
]

const faqSchema = buildFAQSchema({
  questions: speciesFAQItems.map((f) => ({
    question: f.question,
    answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
  })),
})

const speciesSchema = combineSchemas(breadcrumbSchema, itemListSchema, faqSchema)

export default function SpeciesHubPage() {
  return (
    <>
      <SchemaScript schema={speciesSchema} />
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
        <span>&#x203A;</span>
        <span className="text-brand-text-mid font-medium">Species</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="petfood-com:category-species" aspect="16:9" variant="wide" priority />
      </div>

      <div className="px-container-sm sm:px-container py-10 max-w-content-wide">
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          Dogs and cats are the two species most pet food labels are written for, yet their nutritional biology differs in ways that matter enormously at the bowl. Cats are obligate carnivores: their metabolism is built around animal tissue and has lost several biosynthetic pathways omnivores rely on — they cannot make sufficient taurine from precursors, cannot convert beta-carotene to vitamin A, and require preformed arachidonic acid from animal sources. Dogs, by contrast, are facultative omnivores that evolved alongside humans eating a varied diet; they can tolerate a much wider range of macronutrient ratios and can synthesize several nutrients that cats cannot.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          These biological differences are codified in separate AAFCO nutrient profiles for dogs and cats — the cat profiles carry higher minimums for protein, taurine, vitamin A (as retinol, not beta-carotene), and niacin (as preformed niacin, not tryptophan conversion). They are also reflected in the WSAVA Global Nutrition Committee guidance on diet selection and in the NRC 2006 nutrient requirement tables. The four pages in this cluster explain the obligate-carnivore distinction in depth, trace the dog-omnivore evidence, compare practical feeding differences between the two species, and give a side-by-side species-overview reference.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed">
          Use this hub to orient your understanding of why species matters before reading the life-stage, nutrition fundamentals, or therapeutic-diet clusters. Key decision factors: always verify the AAFCO statement lists the correct species; never assume that higher protein or fewer carbohydrates is inherently better for either species without reading the condition-specific context.
        </p>
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

      <div className="px-container-sm sm:px-container pb-12 max-w-content-wide">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-6">Frequently Asked Questions</h2>
        <FAQAccordion items={speciesFAQItems} includeSchema={false} />
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
