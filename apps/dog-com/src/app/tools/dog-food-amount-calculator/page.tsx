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
import DogFoodAmountCalculator from './Calculator'

const URL = 'https://dog.com/tools/dog-food-amount-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Daily Dog Food Grams | Dog.com',
  description:
    'Turn body weight and activity into daily food grams using the same RER formula as the calorie calculator and the bag’s kcal per kg.',
  path: '/tools/dog-food-amount-calculator',
})

const articleSchema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Daily Dog Food Grams',
  description:
    'Estimate grams of dog food per day from body weight, the calorie calculator’s life-stage factor, and the kcal per kg printed on the bag.',
  url: URL,
  imageUrl: '',
  authorName: 'Dog.com Editorial',
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate daily dog food grams',
  description: 'Use resting energy, the same life-stage factor as the calorie calculator, and the bag’s kcal per kg.',
  url: URL,
  steps: [
    { name: 'Weigh the dog', text: 'Enter body weight in pounds or kilograms.' },
    { name: 'Pick the life stage', text: 'Use the same factors as the calorie calculator, from 1.0 for weight loss to 3.0 for a puppy under four months.' },
    { name: 'Read kcal per kg on the bag', text: 'Divide the resulting daily calories by that energy density to get grams.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Daily Dog Food Grams',
  url: URL,
  applicationCategory: 'HealthApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  isAccessibleForFree: true,
  publisher: { '@type': 'Organization', name: 'Dog.com Editorial', url: 'https://dog.com' },
}

const FAQS = [
  {
    question: 'How are daily dog food grams calculated?',
    answer:
      'Resting energy is 70 times body weight in kilograms to the power of 0.75. The life-stage factor from the calorie calculator multiplies that number. Grams per day are those calories times 1,000, divided by the kcal per kg on the bag. A 30-pound neutered adult at 3,500 kcal per kg is about 227 grams.',
  },
  {
    question: 'Why not just use cups?',
    answer:
      'The calorie calculator can turn calories into cups when you enter kcal per cup. Cups change with how they are packed. Grams follow the kcal-per-kg statement, which is the energy density the label prints by weight.',
  },
  {
    question: 'Does the gram result pick a brand?',
    answer:
      'The closing link follows the same cards as the calorie calculator: large-breed puppy food when the stage is a puppy and the current weight is 50 pounds or more, the senior food when the stage is senior, and the dry-food review’s adult card otherwise. The gram result does not name a different food.',
  },
]

export default function DogFoodAmountPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'Daily Dog Food Grams',
        subtitle: 'Weight, the calorie calculator’s activity factor, and the bag’s kcal per kg.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'October 2026',
        readTime: '5 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Daily Dog Food Grams' },
      ]}
      schema={[articleSchema, howToSchema]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Calorie calculator', href: '/tools/dog-calorie-calculator' },
            { label: 'Dry dog food review', href: '/reviews/best-dry-dog-food' },
            { label: 'How we pick', href: '/how-we-pick' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <h2 id="calculator" className="sr-only">Calculator</h2>
        <DogFoodAmountCalculator />
        <p>
          The <Link href="/tools/dog-calorie-calculator">calorie calculator</Link> turns weight and life stage into
          kilocalories, and it can show cups when the bag lists kcal per cup. This page answers the next question: how many
          grams that energy is when the label states kcal per kilogram. The factors are not new. Neutered adult is 1.6,
          intact adult is 1.8, weight loss is 1.0, weight gain is 1.7, light work is 2.0, a puppy under four months is 3.0,
          a puppy from four to twelve months is 2.0, and a less active senior is 1.4.
        </p>
        <h2>Worked example</h2>
        <p>
          A 30-pound neutered adult is about 13.6 kilograms. Resting energy is 70 times that weight to the power of 0.75.
          Multiplying by 1.6 is the neutered-adult maintenance energy. At 3,500 kcal per kg, daily grams are that energy
          times 1,000 divided by 3,500. Change the kcal per kg when the bag prints a different number. The 3,500 figure is
          only an example density, not a brand.
        </p>
        <p>
          Treats still belong inside the same daily energy, not on top of it. The calorie page keeps treats near a tenth of
          daily calories. Weigh the bowl on a kitchen scale. This estimate is not a diagnosis, and a dog that is losing or
          gaining condition needs a veterinarian to set the target weight. Picks on the closing link follow{' '}
          <Link href="/how-we-pick">How we pick</Link>.
        </p>
        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
