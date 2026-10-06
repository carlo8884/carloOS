import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ArticleLayout,
  FAQAccordion,
  RelatedLinks,
  buildArticleSchema,
  buildHowToSchema,
  buildMetadata,
} from '@carloOS/ui'
import CatFoodAmountCalculator from './Calculator'

const URL = 'https://vets.co/tools/cat-food-amount-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Daily Cat Food Grams | Vets.co',
  description:
    'Estimate daily cat food grams from weight, the calorie calculator’s feline factor, and the label’s kcal per kg.',
  path: '/tools/cat-food-amount-calculator',
})

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Daily Cat Food Grams',
  description:
    'Grams of cat food per day from body weight, the feline calorie factors on the calorie calculator, and kcal per kg.',
  url: URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate daily cat food grams',
  description: 'Use feline resting energy, the calorie calculator’s factor, and the label’s kcal per kg.',
  url: URL,
  steps: [
    { name: 'Weigh the cat', text: 'Enter body weight in pounds or kilograms.' },
    { name: 'Pick the life stage', text: 'Indoor neutered adults use 1.2. Kittens use 2.5. The weight-loss factor is 0.8 and is marked vet-supervised on the calorie calculator.' },
    { name: 'Read kcal per kg', text: 'Divide daily calories by that density to get grams.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Daily Cat Food Grams',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  isAccessibleForFree: true,
  publisher: { '@type': 'Organization', name: 'Vets.co Editorial', url: 'https://vets.co' },
}

const FAQS = [
  {
    question: 'Which formula does the cat food gram calculator use?',
    answer:
      'The same one as the cat calorie calculator. Resting energy is 70 times kilograms to the power of 0.75. A neutered indoor adult multiplies by 1.2, a kitten by 2.5, and the vet-supervised weight-loss factor is 0.8. Grams are those calories times 1,000, divided by kcal per kg on the label.',
  },
  {
    question: 'What does the result link to?',
    answer:
      'A weight-loss stage links the kitchen gram scale on the calorie page, because the smaller portion is the thing to weigh. A kitten stage links the measured-food search on that page. Other stages link the slow-feeder bowl search. None of those searches is a cat-food ranking. Vets.co does not publish a cat-food review.',
  },
  {
    question: 'Is this a feeding prescription?',
    answer:
      'No. It is a portion estimate from published energy factors and the label in front of you. Body condition, the food the cat will actually eat, and any disease belong with a veterinarian. The weight-loss factor is labeled vet-supervised for that reason.',
  },
]

export default function CatFoodAmountPage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      hero={{
        title: 'Daily Cat Food Grams',
        subtitle: 'The calorie calculator’s feline factors, expressed as grams from the label’s kcal per kg.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'October 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Daily Cat Food Grams' },
      ]}
      schema={[articleSchema, howToSchema]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Cat calorie calculator', href: '/tools/cat-calorie-calculator' },
            { label: 'Body condition score', href: '/tools/cat-body-condition-score' },
            { label: 'How we pick', href: '/how-we-pick' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <h2 id="calculator" className="sr-only">Calculator</h2>
        <CatFoodAmountCalculator />
        <p>
          The <Link href="/tools/cat-calorie-calculator">cat calorie calculator</Link> estimates daily kilocalories
          and can show cups from kcal per cup. Labels also print kcal per kilogram. This calculator keeps every feline
          factor on that page and converts the energy into grams. Neutered indoor adult is 1.2, intact indoor is 1.4,
          neutered outdoor is 1.4, intact outdoor is 1.6, weight loss is 0.8, weight gain is 1.3, kitten is 2.5, senior
          indoor is 1.1, and obese-prone indoor is 1.0.
        </p>
        <h2>How to read the grams</h2>
        <p>
          Divide the daily energy by the label density. A higher kcal-per-kg food is a smaller pile of grams for the same
          cat. Wet food and dry food cannot share one density, so type the number from the food you are actually scooping.
          The calorie page notes that dry cat food often lands around a few hundred kcal per cup; this tool does not turn
          that cup range into a gram default. If the label omits kcal per kg, use the calorie calculator’s cup field instead
          of guessing a density here.
        </p>
        <p>
          Ribs, waist, and the belly tuck still matter more than one day’s grams. The{' '}
          <Link href="/tools/cat-body-condition-score">body condition score</Link> is the check on whether the portion should
          move. Appetite changes and disease belong with a veterinarian. Daily calories stay on the calorie page. Editorial method
          is on <Link href="/how-we-pick">How we pick</Link>.
        </p>
        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
