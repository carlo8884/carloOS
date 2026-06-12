import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, StockImage, FAQAccordion, CrossPortfolioCard } from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Best Pet Food Reviews 2026 — Analysis-Led | PetFood.com',
  description:
    'Best-of pet food roundups built from guaranteed analysis, AAFCO adequacy statements, and ingredient quality — not marketing. Cat, senior dog, and puppy food.',
  path: '/reviews',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Reviews', url: 'https://petfood.com/reviews' },
  ],
})

const REVIEWS = [
  {
    slug: 'best-cat-food',
    title: 'Best Cat Food (2026)',
    description:
      'Foods ranked for obligate carnivores — minimum-acceptable animal protein, supplemented taurine, AAFCO cat maintenance/all-life-stages statements, and the wet-versus-dry hydration argument that matters more for cats than dogs.',
  },
  {
    slug: 'best-senior-dog-food',
    title: 'Best Senior Dog Food (2026)',
    description:
      'Aging-dog diets compared on protein quality for muscle and renal load, calorie density against slowing metabolism, joint-support nutrients (EPA/DHA, glucosamine), and the AAFCO adult-maintenance reality behind "senior" labels.',
  },
  {
    slug: 'best-puppy-food',
    title: 'Best Puppy Food (2026)',
    description:
      'Growth diets analyzed on the AAFCO growth statement, large-breed calcium/phosphorus ceilings, calcium maximums that prevent skeletal disease, and the grain-free/DCM association framed honestly as association, not causation.',
  },
]

// ItemList of the review roundups — a structured, citable index of the review
// cluster for AI Overviews / Perplexity (GEO authority signal).
const reviewListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Analysis-Led Pet Food Reviews at PetFood.com',
  numberOfItems: REVIEWS.length,
  itemListElement: REVIEWS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.title,
    url: `https://petfood.com/reviews/${r.slug}`,
  })),
}

const reviewsFAQItems: FAQItem[] = [
  {
    question: 'How is a PetFood.com "best food" roundup different from a typical shopping list?',
    answer:
      'PetFood.com roundups rank foods on the nutritional record an owner can verify from the label and public regulatory data — guaranteed analysis (protein, fat, fiber, moisture), the AAFCO nutritional-adequacy statement and how it was substantiated, the named-protein composition of the ingredient panel, and FDA-CVM recall history — rather than on price, packaging, or sponsored placement. We do not buy and feed products, and we do not claim hands-on testing. Picks are ranked on disclosed criteria and the underlying analysis is shown on each page so a reader can disagree with a ranking and see exactly why we placed a food where we did.',
    answerText:
      'PetFood.com roundups rank foods on the nutritional record an owner can verify from the label and public regulatory data — guaranteed analysis (protein, fat, fiber, moisture), the AAFCO nutritional-adequacy statement and how it was substantiated, the named-protein composition of the ingredient panel, and FDA-CVM recall history — rather than on price, packaging, or sponsored placement. We do not buy and feed products, and we do not claim hands-on testing. Picks are ranked on disclosed criteria and the underlying analysis is shown on each page so a reader can disagree with a ranking and see exactly why we placed a food where we did.',
  },
  {
    question: 'Why does PetFood.com review cat food when most "best dog food" sites do not?',
    answer:
      'PetFood.com is a species-broad nutrition reference covering both dogs and cats, and cat nutrition is where the most consequential analysis errors happen. Cats are obligate carnivores with absolute dietary requirements that dogs do not share — preformed vitamin A, arachidonic acid, and, most critically, taurine, a deficiency of which causes feline dilated cardiomyopathy and central retinal degeneration. A roundup that evaluates cat food on the same criteria used for dog food misses the points that matter most for a cat. Our cat-food page is built around those feline-specific requirements rather than retrofitted from a dog template.',
    answerText:
      'PetFood.com is a species-broad nutrition reference covering both dogs and cats, and cat nutrition is where the most consequential analysis errors happen. Cats are obligate carnivores with absolute dietary requirements that dogs do not share — preformed vitamin A, arachidonic acid, and, most critically, taurine, a deficiency of which causes feline dilated cardiomyopathy and central retinal degeneration. A roundup that evaluates cat food on the same criteria used for dog food misses the points that matter most for a cat. Our cat-food page is built around those feline-specific requirements rather than retrofitted from a dog template.',
  },
  {
    question: 'Does PetFood.com accept payment for placement in these roundups?',
    answer:
      'No. No brand pays for placement, for a higher ranking, or for inclusion. Where a page links to a retailer, that is disclosed and does not influence the ranking — picks are determined before any commercial link is considered, on the stated nutritional criteria alone. The methodology that governs these rankings is published and versioned so that the basis of every pick is auditable.',
    answerText:
      'No. No brand pays for placement, for a higher ranking, or for inclusion. Where a page links to a retailer, that is disclosed and does not influence the ranking — picks are determined before any commercial link is considered, on the stated nutritional criteria alone. The methodology that governs these rankings is published and versioned so that the basis of every pick is auditable.',
  },
]

const faqSchema = buildFAQSchema({
  questions: reviewsFAQItems.map((f) => ({
    question: f.question,
    answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
  })),
})

const schema = combineSchemas(breadcrumbSchema, reviewListSchema, faqSchema)

export default function ReviewsHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Analysis-Led Reviews
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Pet Food Reviews
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          &quot;Best food&quot; roundups built from guaranteed analysis, AAFCO adequacy statements,
          and ingredient quality — the reference-desk lens, not a shopping list. Never paid placement.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&#x203A;</span>
        <span className="text-brand-text-mid font-medium">Reviews</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="petfood-com:reviews-hero" fallbackKey="petfood-com:compare-hero" priority aspect="16:9" variant="wide" />
      </div>

      <div className="px-container-sm sm:px-container py-10 max-w-content-wide">
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          Almost every &quot;best dog food&quot; article online is a shopping list: a row of
          products, a price, a star rating, and an affiliate button. PetFood.com takes the opposite
          approach. A food earns a place in one of these roundups because of what its guaranteed
          analysis, AAFCO nutritional-adequacy statement, and ingredient panel actually say — read
          the way a veterinary-nutrition reference would read them — not because of its marketing or
          its retail margin.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed mb-4">
          Each roundup applies the same published rubric. We start from the AAFCO statement (is the
          food complete and balanced, for which life stage, and was that substantiated by formulation
          or by an animal feeding trial?), move to the guaranteed analysis on a dry-matter basis so
          wet and dry foods can be compared fairly, examine the ingredient panel for named-protein
          quality and red-flag inclusions, and finally weigh recall history and manufacturer
          transparency. The full scoring framework lives on our{' '}
          <Link href="/guides/methodology" className="text-brand-primary underline-offset-2 hover:underline">methodology page</Link>;
          every pick on every page below is justified against those criteria in plain text.
        </p>
        <p className="text-base text-brand-text-mid leading-relaxed">
          We lead with the categories where the analysis lens adds the most: cat food, where feline
          obligate-carnivore biology makes taurine and animal-protein content non-negotiable; senior
          dogs, where protein quality and calorie density matter more than the word &quot;senior&quot;
          on the bag; and puppies, where the calcium-to-phosphorus ratio and the AAFCO growth
          statement are genuine safety issues, especially for large breeds. To put two or three
          specific brands side by side on disclosed criteria, use the{' '}
          <Link href="/tools/compare-pet-foods" className="text-brand-primary underline-offset-2 hover:underline">Compare Pet Foods tool</Link>.
        </p>
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {REVIEWS.map((r) => (
            <li key={r.slug}>
              <Link
                href={`/reviews/${r.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {r.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {r.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-container-sm sm:px-container pb-12 max-w-content-wide">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-6">Frequently Asked Questions</h2>
        <FAQAccordion items={reviewsFAQItems} includeSchema={false} />
      </div>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="petfood-com"
          title="Free Label Decoder"
          subtitle="One-page printable label decoder, plus our independent analysis-led reviews as we publish them."
          source="reviews-hub"
        />
      </section>

      <div className="px-container-sm sm:px-container pb-12 max-w-content-wide">
        <CrossPortfolioCard currentSite="petfood-com" contentType="brand" variant="footer" />
      </div>
    </>
  </>
  )
}
