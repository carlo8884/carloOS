import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, StockImage, FAQAccordion, CrossPortfolioCard } from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Brand Evaluations | PetFood.com',
  description:
    'Independent evaluations of major pet food brands — corporate context, manufacturing, recall history, AAFCO posture, and WSAVA-aligned criteria.',
  path: '/brands',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Brands', url: 'https://petfood.com/brands' },
  ],
})


const BRANDS = [
  {
    slug: 'hills-vs-royal-canin',
    title: "Hill's vs Royal Canin",
    description:
      'Side-by-side reference comparison of the two largest veterinary therapeutic diet brands — Hill\'s Pet Nutrition (Colgate-Palmolive) and Royal Canin (Mars Petcare).',
  },
  {
    slug: 'blue-buffalo-evaluation',
    title: 'Blue Buffalo — An Independent Evaluation',
    description:
      'Five-dimension evaluation of Blue Buffalo: corporate history (General Mills 2018 acquisition), product lines, manufacturing, recall history, and the 2018 grain-free DCM listing.',
  },
  {
    slug: 'orijen-vs-acana-comparison',
    title: 'Orijen vs Acana',
    description:
      'Both Champion Petfoods (Mars 2022 acquisition) — comparing the premium and mid-tier lines on ingredients, sourcing, recall history, and price.',
  },
  {
    slug: 'purina-pro-plan-evaluation',
    title: 'Purina Pro Plan',
    description:
      'Five-dimension evaluation of the Nestle Purina premium line — research and nutritionist depth, feeding-trial substantiation, manufacturing, and recalls.',
  },
  {
    slug: 'taste-of-the-wild-evaluation',
    title: 'Taste of the Wild',
    description:
      'Grain-free, novel-protein line made by Diamond Pet Foods — the DCM question, manufacturing, and the 2012 Salmonella recall context.',
  },
  {
    slug: 'wellness-vs-merrick',
    title: 'Wellness vs Merrick',
    description:
      'Two natural-positioned premium brands now under large corporate ownership — formulation, AAFCO posture, manufacturing, and recall history.',
  },
  {
    slug: 'kirkland-signature-evaluation',
    title: 'Kirkland Signature',
    description:
      "Costco's store brand — a strong value proposition, the who-makes-it question, AAFCO posture, transparency limits, and recall exposure.",
  },
]

// ItemList of the brand reference guides — structured, citable index of the
// brand cluster for AI Overviews / Perplexity (GEO authority signal).
const brandListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pet Food Brand Reference Guides at PetFood.com',
  numberOfItems: BRANDS.length,
  itemListElement: BRANDS.map((b, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: b.title,
    url: `https://petfood.com/brands/${b.slug}`,
  })),
}

const brandsFAQItems: FAQItem[] = [
  {
    question: "What criteria does PetFood.com use to evaluate pet food brands?",
    answer: "PetFood.com evaluates brands across five dimensions: corporate context (ownership history, acquisitions, corporate research investment), product line structure (range of formulations, intended AAFCO life-stage coverage), manufacturing footprint (owned facilities versus co-manufacturing, quality-control implications), AAFCO posture (whether primary substantiation is formulated-to-meet or animal feeding trials, which is a meaningful proxy for the depth of nutritional validation), and recall history (number, severity, and root cause of FDA-CVM recalls). These five dimensions are derived from the WSAVA Global Nutrition Committee criteria for evaluating pet food manufacturers, adapted for an independent reference context. No brand pays for placement or for any dimension of the scoring.",
    answerText: "PetFood.com evaluates brands across five dimensions: corporate context (ownership history, acquisitions, corporate research investment), product line structure (range of formulations, intended AAFCO life-stage coverage), manufacturing footprint (owned facilities versus co-manufacturing, quality-control implications), AAFCO posture (whether primary substantiation is formulated-to-meet or animal feeding trials, which is a meaningful proxy for the depth of nutritional validation), and recall history (number, severity, and root cause of FDA-CVM recalls). These five dimensions are derived from the WSAVA Global Nutrition Committee criteria for evaluating pet food manufacturers, adapted for an independent reference context. No brand pays for placement or for any dimension of the scoring.",
  },
  {
    question: "Does corporate ownership (for example, Mars or Nestle) affect pet food quality?",
    answer: "Corporate ownership is one input into brand evaluation, not a direct quality signal. Large conglomerate ownership typically means greater investment in nutritional research, larger internal quality-assurance teams, and in some cases proprietary feeding-trial programs — Hill's Pet Nutrition and Purina, both under large corporate parents, have among the deepest clinical feeding-trial histories in the industry. However, acquisition can also introduce cost-optimization pressures, sourcing consolidation, and formula changes that may not be immediately visible on the label. The evaluation pages track acquisition dates and note any formula or manufacturing changes that followed; the AAFCO substantiation claim and recall history are the most objectively verifiable quality proxies available to consumers from label data alone.",
    answerText: "Corporate ownership is one input into brand evaluation, not a direct quality signal. Large conglomerate ownership typically means greater investment in nutritional research, larger internal quality-assurance teams, and in some cases proprietary feeding-trial programs — Hill's Pet Nutrition and Purina, both under large corporate parents, have among the deepest clinical feeding-trial histories in the industry. However, acquisition can also introduce cost-optimization pressures, sourcing consolidation, and formula changes that may not be immediately visible on the label. The evaluation pages track acquisition dates and note any formula or manufacturing changes that followed; the AAFCO substantiation claim and recall history are the most objectively verifiable quality proxies available to consumers from label data alone.",
  },
  {
    question: "What is the difference between a brand that uses animal feeding trials and one that formulates to meet AAFCO profiles?",
    answer: "The AAFCO nutritional adequacy statement on a pet food label can be substantiated in two ways. Formulated-to-meet means the recipe was calculated by a nutritionist or software to hit the AAFCO minimum and maximum nutrient targets on paper; it does not require the food to have been fed to animals to verify those calculations in practice. Animal feeding trials means the product was fed to groups of dogs or cats under AAFCO protocols over a defined period and the animals maintained health parameters within acceptable ranges. Feeding trials are a more robust validation of real-world nutritional adequacy, particularly for detecting bioavailability differences that analytical chemistry does not capture. The WSAVA recommendation is to prefer brands with extensive feeding-trial histories, particularly for pets with health conditions or that are in life stages with higher nutrient demands such as growth and reproduction.",
    answerText: "The AAFCO nutritional adequacy statement on a pet food label can be substantiated in two ways. Formulated-to-meet means the recipe was calculated by a nutritionist or software to hit the AAFCO minimum and maximum nutrient targets on paper; it does not require the food to have been fed to animals to verify those calculations in practice. Animal feeding trials means the product was fed to groups of dogs or cats under AAFCO protocols over a defined period and the animals maintained health parameters within acceptable ranges. Feeding trials are a more robust validation of real-world nutritional adequacy, particularly for detecting bioavailability differences that analytical chemistry does not capture. The WSAVA recommendation is to prefer brands with extensive feeding-trial histories, particularly for pets with health conditions or that are in life stages with higher nutrient demands such as growth and reproduction.",
  },
]

const faqSchema = buildFAQSchema({
  questions: brandsFAQItems.map((f) => ({
    question: f.question,
    answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
  })),
})

const schema = combineSchemas(breadcrumbSchema, brandListSchema, faqSchema)

export default function BrandsHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Brand Evaluations
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Pet Food Brands
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          Independent brand evaluations against the PetFood.com five-dimension rubric — corporate
          context, product lines, manufacturing footprint, AAFCO posture, and recall history.
          Never paid placement.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#x203A;</span>
        <span className="text-brand-text-mid font-medium">Brands</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="petfood-com:brands-hero" priority aspect="16:9" variant="wide" />
      </div>

      <div className="px-container-sm sm:px-container py-10 max-w-content-wide">
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          The pet food market is dominated by a small number of large corporate groups — Mars Petcare, Nestle Purina, and Colgate-Palmolive (Hill's) account for the majority of US retail volume — alongside a long tail of independent, premium, and private-label brands. Corporate ownership, manufacturing footprint, recall history, and the depth of a brand's nutritional research investment all affect how much confidence you can reasonably place in a product, yet none of these factors appear on the front of the bag.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          The seven evaluations in this cluster apply the same five-dimension framework derived from WSAVA Global Nutrition Committee criteria: corporate and ownership context, product line coverage, manufacturing (owned facilities versus co-manufacturing), AAFCO substantiation posture (formulated-to-meet versus animal feeding trials), and recall history as reported to FDA-CVM. Each page also notes the grain-free and DCM context where relevant, and explains the Hill's versus Royal Canin distinction for therapeutic diet selection.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed">
          Start with the Hill&#x2019;s vs Royal Canin page if your veterinarian has recommended a therapeutic diet — those two brands dominate the veterinary-channel prescription segment and the evaluation explains the clinical evidence and practical differences. Start with the Purina Pro Plan evaluation if you are selecting a mainstream adult or performance diet and want the most evidence-backed independent summary available.
        </p>
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {BRANDS.map((b) => (
            <li key={b.slug}>
              <Link
                href={`/brands/${b.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {b.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {b.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-container-sm sm:px-container pb-12 max-w-content-wide">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-6">Frequently Asked Questions</h2>
        <FAQAccordion items={brandsFAQItems} includeSchema={false} />
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
          source="brands-hub"
        />
      </section>

      <div className="px-container-sm sm:px-container pb-12 max-w-content-wide">
        <CrossPortfolioCard currentSite="petfood-com" contentType="brand" variant="footer" />
      </div>
    </>
  </>
  )
}
