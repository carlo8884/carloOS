import type { Metadata } from 'next'
import {
  buildMetadata,
  buildHowToSchema,
  combineSchemas,
  SchemaScript,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  RelatedLinks,
  CrossPortfolioCard,
} from '@carloOS/ui'
import ReptileCostCalculator from './Calculator'

const URL = 'https://lizard.com/tools/reptile-cost-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Cost of Ownership Calculator | Lizard.com',
  description:
    'How much does a reptile cost to keep? Estimate one-time setup plus monthly and yearly running cost — electricity, feeders, substrate, bulbs — by species.',
  path: '/tools/reptile-cost-calculator',
})

const appSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Reptile Cost of Ownership Calculator',
  url: URL,
  applicationCategory: 'FinanceApplication',
  applicationSubCategory: 'ReptileBudgetCalculator',
  operatingSystem: 'Web Browser (any HTML5-capable device)',
  description:
    'Free reptile cost-of-ownership calculator. Estimates one-time setup plus monthly and annual running cost (electricity, food/feeders, substrate, supplements, bulb replacement, vet fund) from species presets with fully editable line items.',
  inLanguage: 'en-US',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  featureList: [
    'Species presets: bearded dragon, leopard gecko, crested gecko, ball python, custom',
    'Computed electricity line: wattage x hours/day x 30 x $/kWh',
    'Amortised UVB/heat bulb replacement cost',
    'Monthly, annual, and first-year (setup + running) totals',
    'Every line item user-editable',
  ],
  publisher: { '@type': 'Organization', name: 'Lizard.com Editorial', url: 'https://lizard.com' },
}

const howToSchema = buildHowToSchema({
  name: 'How to estimate the cost of owning a reptile',
  description:
    'Estimate the one-time setup and ongoing monthly cost of keeping a reptile by adding setup, electricity, food, substrate, supplements, bulb replacement, and a vet fund.',
  url: URL,
  steps: [
    { name: 'Pick your species', text: 'Choose a species preset to seed realistic starting values, or pick Custom and edit everything.' },
    { name: 'Set the one-time setup', text: 'Enter the cost of the enclosure, heating, UVB, thermostat, and decor — or use the build guides for an itemized figure.' },
    { name: 'Enter running costs', text: 'Set heat/UVB wattage and hours per day (electricity is computed as watts x hours x 30 x your $/kWh), plus food, substrate, supplements, bulb replacement, and a vet fund.' },
    { name: 'Read the totals', text: 'The calculator returns monthly running cost, annual running cost, and first-year total including setup. Adjust any field to match your situation.' },
  ],
})

const schema = combineSchemas(appSchema, howToSchema)

const FAQS = [
  {
    question: 'How much does it cost to own a reptile?',
    answer:
      'For common pet lizards and snakes, expect a one-time setup of roughly $200–$400 and ongoing running costs in the rough range of $25–$60 per month once electricity, food, substrate, supplements, and amortised bulb replacement are added up. A bearded dragon — high heat plus strong UVB plus live insects — sits at the higher end; a crested gecko, kept at room temperature on a powdered diet, sits at the lower end. The calculator lets you set each line item for your animal.',
  },
  {
    question: 'Why does the calculator make such a point of electricity?',
    answer:
      'Heat and UVB are the lines new keepers most often underestimate, because they run every day for years. The calculator computes electricity directly as wattage × hours per day × 30 days × your local price per kWh, so you can see exactly what the basking bulb, heat source, and UVB add to the monthly bill. On higher-wattage setups it is frequently the single largest running cost after food.',
  },
  {
    question: 'Is the setup cost or the running cost the bigger commitment?',
    answer:
      'The setup is a one-time outlay; the running cost is what makes a reptile a multi-year financial commitment. A $300 setup is modest, but $40 a month for a decade is roughly $4,800 — and reptiles are long-lived, so that horizon is realistic. Budgeting the running cost honestly up front is the point of this tool.',
  },
  {
    question: 'Do these numbers include the animal and vet care?',
    answer:
      'The purchase price of the animal varies enormously by species and morph and is not included. The monthly figure includes a small editable "vet/emergency fund" line, but it is a placeholder — a single exotic-vet visit can exceed a year of that fund. Reptiles need a vet experienced with exotics, and that care is not optional once an animal is sick. Treat the vet line as a floor, not a ceiling.',
  },
]

export default function ReptileCostCalculatorPage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: 'Reptile Cost of Ownership Calculator',
        subtitle:
          'How much does a reptile really cost to keep? Estimate the one-time setup plus the monthly and yearly running cost — electricity, food, substrate, bulbs, and a vet fund — starting from a species preset you can edit line by line.',
        category: 'Calculators',
        categoryHref: '/tools',
        publishedAt: 'June 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Reptile Cost Calculator' },
      ]}
      schema={schema}
      relatedLinks={[
        { title: 'Tools Hub', href: '/tools', category: 'Hub' },
        { title: 'Enclosure Size Calculator', href: '/tools/enclosure-size-calculator', category: 'Tools' },
        { title: 'UVB Distance Calculator', href: '/tools/uvb-distance-calculator', category: 'Tools' },
        { title: 'Vivarium Build Guides', href: '/builds', category: 'Setup' },
        { title: 'Best Reptile Terrariums', href: '/reviews/best-reptile-terrariums', category: 'Reviews' },
        { title: 'Species Library', href: '/species', category: 'Species' },
      ]}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The calculator', href: '#calculator' },
              { label: 'How it adds up', href: '#how' },
              { label: 'What it leaves out', href: '#caveats' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <RelatedLinks
            title="Plan your setup"
            links={[
              { label: 'Vivarium Build Guides', href: '/builds' },
              { label: 'Enclosure Size Calculator', href: '/tools/enclosure-size-calculator' },
              { label: 'Best Reptile Terrariums', href: '/reviews/best-reptile-terrariums' },
              { label: 'Species library', href: '/species' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="lizard-com"
            title="Lizard.com keeper letter"
            subtitle="Husbandry deep-dives and tool updates."
            source="reptile-cost-calculator"
          />
          <CrossPortfolioCard currentSite="lizard-com" contentType="tool" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <SchemaScript schema={schema} />

        <h2 id="calculator">The calculator</h2>
        <p>
          Pick your species to seed realistic starting values, then edit any line to match your animal and setup. The
          calculator returns your monthly running cost, the annual figure, and the first-year total including setup.
          For the itemized gear list behind the setup number, see the{' '}
          <a href="/builds">vivarium build guides</a>.
        </p>
        <ReptileCostCalculator />

        <h2 id="how">How it adds up</h2>
        <p>
          Every figure here is editable and seeded from commonly published keeper ranges — the calculator does not
          pretend to a precision the real world does not have. The one value it computes for you is electricity, because
          it is both the most formula-friendly and the most frequently underestimated:
        </p>
        <p>
          <strong>Monthly electricity = wattage × hours per day × 30 ÷ 1000 × price per kWh.</strong> A 150-watt
          beardie setup running 12 hours a day at the 2026 US average of about $0.17/kWh works out near $9 a month for
          power alone; a 24/7 ball-python heat source lands in a similar place. Add food, substrate, supplements, the
          amortised cost of replacing UVB and heat bulbs on schedule, and a vet fund, and you have a realistic monthly
          number. The right enclosure and equipment to plug into it are covered in the{' '}
          <a href="/builds">build guides</a> and{' '}
          <a href="/reviews/best-reptile-terrariums">terrarium reviews</a>.
        </p>

        <h2 id="caveats">What it leaves out</h2>
        <p>
          The price of the animal itself is not included — it ranges from modest to several hundred dollars by species
          and morph. The vet line is a small placeholder; a single exotic-vet visit can exceed a year of it, and reptiles
          need a vet experienced with exotics. Regional electricity and feeder prices vary widely, which is exactly why
          every field is editable. Use the output as a planning baseline, not a quote.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
