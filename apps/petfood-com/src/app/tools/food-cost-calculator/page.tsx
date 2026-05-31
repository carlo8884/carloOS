import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
} from '@carloOS/ui'
import { FoodCostCalculator } from '../../../components/visual/FoodCostCalculator'

const URL = 'https://petfood.com/tools/food-cost-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Pet Food Cost Calculator — Daily / Monthly / Yearly | PetFood.com',
  description: 'Free pet food cost calculator. Enter cups-per-day, bag size, and bag price; returns cost per day, month, year, cup. Compare two foods side-by-side.',
  path: '/tools/food-cost-calculator',
})

const schema = buildHowToSchema({
  name: 'How to calculate the true cost of a pet food',
  description:
    'Convert a pet food bag into daily, monthly, annual, and per-cup cost using cups-per-day, bag weight, and bag price. Compare two brands side-by-side to find the actual cheaper option.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    {
      name: 'Find your pet\'s cups-per-day',
      text: 'Check the feeding guide on the bag for the pet\'s weight class, or your vet\'s recommendation. Most dogs eat 1-4 cups per day; most cats eat 1/3-1 cup per day.',
    },
    {
      name: 'Enter the bag weight and price',
      text: 'Bag weight in pounds (e.g. 30 lb), bag price in USD. Use the price you actually pay, including auto-ship discounts if you use Chewy or Amazon Subscribe & Save.',
    },
    {
      name: 'Read the results',
      text: 'The calculator returns cost-per-day, cost-per-month, cost-per-year, and cost-per-cup. The per-cup number is the apples-to-apples comparison between brands.',
    },
    {
      name: 'Compare two foods side-by-side',
      text: 'Toggle "Compare 2 foods" to enter a second food. The calculator shows the annual cost difference and which is cheaper.',
    },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Pet Food Cost Calculator',
  url: URL,
  applicationCategory: 'FinanceApplication',
  applicationSubCategory: 'PetCareCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free interactive pet food cost calculator. Inputs: cups per day, bag size in pounds, bag price in USD. Outputs: cost per day, per month, per year, per cup, and days per bag. Side-by-side mode compares two foods with annual delta.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Daily, monthly, and annual cost from any cups-per-day + bag-size + bag-price combination',
    'Per-cup unit cost for apples-to-apples brand comparison',
    'Side-by-side comparison of any two foods',
    'Industry-standard 4-cups-per-pound conversion with explicit ±25% variation note',
    'No login required',
  ],
  publisher: { '@type': 'Organization', name: 'PetFood.com Editorial', url: 'https://petfood.com' },
}

const FAQS = [
  {
    question: 'Why is per-cup cost more useful than per-pound cost?',
    answer:
      'Per-cup is what you actually feed. Two foods at the same per-pound price but different kibble densities deliver different cups-per-pound, which means different days-per-bag and different real cost. The grocery-store-aisle habit of comparing per-pound prices doesn\'t hold for dry pet food — always compare per-cup or per-day.',
  },
  {
    question: 'Is "$X per cup" a fair brand comparison?',
    answer:
      'Per-cup is the right *cost* comparison. It is not the right *value* comparison — a premium food at $0.80/cup that meets daily nutrient needs at 2 cups/day for a 50-lb dog can be cheaper, all in, than a budget food at $0.35/cup that needs 4 cups/day for the same dog (because the dog needs more calories from less-dense food). The annual-cost number from the calculator captures both effects.',
  },
  {
    question: 'What about wet / canned food?',
    answer:
      'This calculator is built for dry kibble. For canned food, replace "cups per day" with "cans per day" and "bag size (lb)" with "case size (cans)" — the same per-unit math works. We\'ll ship a dedicated canned-food / mixed-feed calculator later.',
  },
  {
    question: 'My bag says "feed 2.5 cups per day." Is that right?',
    answer:
      'Manufacturer feeding guides are starting points based on average activity for the pet\'s weight. The actual right number depends on body condition (see <a href="https://horses.com/tools/body-condition-score">body condition scoring</a> for horses; the same logic applies to dogs and cats), neuter status, age, breed metabolism, and activity level. Most pets do best at 75-100% of the bag\'s suggested amount; consult a vet for any large deviation.',
  },
  {
    question: 'Do auto-ship discounts make a real difference?',
    answer:
      'Yes. Chewy Autoship typically saves 5-10% on the bag price, plus avoided sales-tax exposure depending on state. Amazon Subscribe & Save layers 5-15% depending on how many subscribed items you have. On a $720/year dog-food bill, 10% is $72 — enough to fund the next year\'s vet visit. Always price the bag at the actual subscribed price, not the one-time price.',
  },
]

export default function FoodCostCalculatorPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      hero={{
        title: 'Pet Food Cost Calculator',
        subtitle:
          'Daily, monthly, and annual cost per bag — plus side-by-side comparison of any two foods at the cup level.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'May 2026',
        readTime: '2 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Food Cost Calculator' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'Why per-cup, not per-pound', href: '#per-cup' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Nutrition references"
            links={[
              { label: 'Brand Database', href: '/brands' },
              { label: 'Ingredients Library', href: '/ingredients' },
              { label: 'Therapeutic Diets', href: '/conditions' },
              { label: 'Life-Stage Feeding', href: '/life-stage' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="PetFood.com nutrition letter"
            subtitle="Pet nutrition references and tool updates."
            source="food-cost-calculator"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />

        <h2 id="calculator">The calculator</h2>
        <p>
          Enter cups-per-day, bag size, and bag price. The calculator returns cost per day, per month, per year, and per cup. Toggle compare-mode to evaluate two foods side-by-side.
        </p>
        <FoodCostCalculator />

        <h2 id="per-cup">Why per-cup, not per-pound</h2>
        <p>
          The grocery-store reflex is to compare per-pound prices, but dry pet food kibble varies in density by ±25% across brands. A denser kibble has fewer cups per pound, which means the per-pound price misleads you about days-per-bag and total feeding cost.
        </p>
        <p>
          Per-cup is the true unit cost — what you pay each time you scoop. Two foods at $2.20/lb can have noticeably different per-cup costs if one is air-puffed and the other is dense extruded kibble. The calculator does this math for you; the per-cup number is the cleanest cross-brand comparison.
        </p>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The calculator uses an industry rule-of-thumb conversion of 4 cups per pound of standard dry kibble. Real density varies ±25% by kibble shape and air-puff. For exact numbers, use the manufacturer-stated cup weight on the bag (most bags publish "X cup weighs Y grams").
        </p>
        <p>
          The calculator does <strong>not</strong>:
        </p>
        <ul>
          <li>Adjust for kibble-specific density (uses the 4 cups/lb rule)</li>
          <li>Account for wet / canned food (canned should use can-count math)</li>
          <li>Account for varying portion sizes across the year (pets eat more in winter, etc.)</li>
          <li>Account for treats, supplements, or human-food extras</li>
          <li>Endorse any specific brand — for editorial reviews see <Link href="/brands">brand database</Link></li>
        </ul>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Pair this cost math with the <Link href="/ingredients">ingredients library</Link> and <Link href="/brands">brand database</Link> for the full picture on any food you&apos;re evaluating.
        </p>
      </div>
    </ArticleLayout>
  )
}
