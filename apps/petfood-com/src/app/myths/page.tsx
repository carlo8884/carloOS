import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, StockImage, FAQAccordion } from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

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

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pet Food Myths Evidence-Checked',
  numberOfItems: MYTHS.length,
  itemListElement: MYTHS.map((m, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: m.title,
    url: `https://petfood.com/myths/${m.slug}`,
  })),
}

const mythsFAQItems: FAQItem[] = [
  {
    question: "Are by-products in pet food a sign of low quality?",
    answer: "No. By-products have a specific regulatory definition under AAFCO: they are the non-rendered, clean parts of slaughtered animals other than muscle meat — organ tissue such as liver, kidney, lung, and spleen, and in the case of poultry, heads, feet, and undeveloped eggs. These are nutritionally dense ingredients, particularly organ meats, which are higher in vitamins, minerals, and essential amino acids than skeletal muscle. The term became a negative marketing signal because premium brands used absence-of-by-products as a differentiator. The quality of any ingredient, by-product or otherwise, is determined by sourcing, freshness, and processing — none of which is visible from the ingredient name alone.",
    answerText: "No. By-products have a specific regulatory definition under AAFCO: they are the non-rendered, clean parts of slaughtered animals other than muscle meat — organ tissue such as liver, kidney, lung, and spleen, and in the case of poultry, heads, feet, and undeveloped eggs. These are nutritionally dense ingredients, particularly organ meats, which are higher in vitamins, minerals, and essential amino acids than skeletal muscle. The term became a negative marketing signal because premium brands used absence-of-by-products as a differentiator. The quality of any ingredient, by-product or otherwise, is determined by sourcing, freshness, and processing — none of which is visible from the ingredient name alone.",
  },
  {
    question: "Does grain-free pet food reduce the risk of food allergies?",
    answer: "Generally, no. Grains are not among the most common dietary allergens in dogs and cats. The most frequently identified food allergens in dogs are beef, dairy, and chicken; in cats, beef, fish, and chicken. Wheat appears on allergy lists but is not the dominant trigger. Grain-free diets substitute starchy carbohydrate sources such as peas, lentils, and potatoes for grains — and those substitutes also carry allergen potential. A pet with a true food allergy requires a veterinary-directed elimination diet using a hydrolyzed-protein or novel-protein therapeutic formula to identify the specific trigger, not simply a shift to grain-free marketing positioning.",
    answerText: "Generally, no. Grains are not among the most common dietary allergens in dogs and cats. The most frequently identified food allergens in dogs are beef, dairy, and chicken; in cats, beef, fish, and chicken. Wheat appears on allergy lists but is not the dominant trigger. Grain-free diets substitute starchy carbohydrate sources such as peas, lentils, and potatoes for grains — and those substitutes also carry allergen potential. A pet with a true food allergy requires a veterinary-directed elimination diet using a hydrolyzed-protein or novel-protein therapeutic formula to identify the specific trigger, not simply a shift to grain-free marketing positioning.",
  },
  {
    question: "What should I know about the FDA grain-free and DCM investigation?",
    answer: "In 2018 and 2019 the FDA Center for Veterinary Medicine issued alerts about a possible association between diets marketed as Boutique, Exotic-ingredient, or Grain-free (the BEG-diet category) and dilated cardiomyopathy in dogs. The mechanism under investigation involved diets high in legumes such as peas, lentils, and chickpeas, and a potential relationship to taurine bioavailability in certain breeds. As of the most recent FDA update, a confirmed causal mechanism has not been established, and DCM involves genetic, breed, and individual variation factors. Current guidance from the WSAVA and most board-certified veterinary nutritionists is to choose diets with a long clinical feeding-trial history, particularly for breeds with known DCM predisposition such as Golden Retrievers and Doberman Pinschers.",
    answerText: "In 2018 and 2019 the FDA Center for Veterinary Medicine issued alerts about a possible association between diets marketed as Boutique, Exotic-ingredient, or Grain-free (the BEG-diet category) and dilated cardiomyopathy in dogs. The mechanism under investigation involved diets high in legumes such as peas, lentils, and chickpeas, and a potential relationship to taurine bioavailability in certain breeds. As of the most recent FDA update, a confirmed causal mechanism has not been established, and DCM involves genetic, breed, and individual variation factors. Current guidance from the WSAVA and most board-certified veterinary nutritionists is to choose diets with a long clinical feeding-trial history, particularly for breeds with known DCM predisposition such as Golden Retrievers and Doberman Pinschers.",
  },
]

const faqSchema = buildFAQSchema({
  questions: mythsFAQItems.map((f) => ({
    question: f.question,
    answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
  })),
})

const mythsSchema = combineSchemas(breadcrumbSchema, itemListSchema, faqSchema)

export default function MythsHubPage() {
  return (
    <>
      <SchemaScript schema={mythsSchema} />
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
        <span>&#x203A;</span>
        <span className="text-brand-text-mid font-medium">Myths</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="petfood-com:myths-hero" aspect="16:9" variant="wide" priority />
      </div>

      <div className="px-container-sm sm:px-container py-10 max-w-content-wide">
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          Pet food marketing has generated a vocabulary of fear and aspiration that often has little grounding in AAFCO definitions, NRC nutritional requirements, or peer-reviewed evidence. Ingredients labeled as fillers, by-products, or corn are frequently condemned on packaging fronts by brands whose own formulations rely on the same nutrient chemistry under different names. This cluster addresses five categories of claim that recur most persistently in pet food decision-making and that are frequently misrepresented at the point of sale.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          Each page in this cluster follows the same structure: what the claim is, what the regulatory definition actually says, what the evidence supports, and what the practical owner-side guidance is. The framing is calibrated and referenced — claims are traced to AAFCO model regulations, FDA Center for Veterinary Medicine guidance, or WSAVA nutrition committee recommendations rather than marketing assertions. Where evidence is genuinely uncertain, such as the ongoing FDA DCM investigation, that uncertainty is stated plainly rather than resolved in either direction.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed">
          Start with the by-products or fillers pages if you are reading a new pet food label and encountering ingredient-list anxiety. Start with the marketing-terms-decoded page if you want a systematic framework for evaluating front-of-bag claims before reading the regulated information on the back.
        </p>
      </div>

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

      <div className="px-container-sm sm:px-container pb-12 max-w-content-wide">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-6">Frequently Asked Questions</h2>
        <FAQAccordion items={mythsFAQItems} includeSchema={false} />
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
