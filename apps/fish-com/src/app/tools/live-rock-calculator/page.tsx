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
import LiveRockCalculator from './Calculator'

const URL = 'https://fish.com/tools/live-rock-calculator'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Live Rock Pounds per Gallon | Fish.com',
  description:
    'Convert display gallons to live-rock pounds using the saltwater setup page’s 1–1.5 pounds per gallon guideline.',
  path: '/tools/live-rock-calculator',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Live Rock Pounds per Gallon',
  description:
    'A live-rock weight range from tank gallons: 1 pound per gallon at the low end and 1.5 pounds per gallon at the high end.',
  url: URL,
  imageUrl: '',
  authorName: 'Fish.com Editorial',
})

const howToSchema = buildHowToSchema({
  name: 'How to estimate live rock for a saltwater tank',
  description: 'Multiply display gallons by 1 and by 1.5, the range on the saltwater setup page.',
  url: URL,
  steps: [
    { name: 'Enter display gallons', text: 'Use the water volume, not the tank’s empty glass rating if you already subtracted rock and sand.' },
    { name: 'Read the pound range', text: 'One pound per gallon is the low end. One and a half pounds per gallon is the high end.' },
    { name: 'Open the setup page’s starter-kit search', text: 'The kit is the existing next step. It is not a weighed live-rock order.' },
  ],
})

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Live Rock Pounds per Gallon',
  url: URL,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  isAccessibleForFree: true,
  publisher: { '@type': 'Organization', name: 'Fish.com Editorial', url: 'https://fish.com' },
}

const FAQS = [
  {
    question: 'How many pounds of live rock per gallon?',
    answer:
      'The saltwater setup page says 1 to 1.5 pounds of live rock per gallon of water volume. A 40-gallon display is 40 to 60 pounds. The page prefers aquacultured rock over wild-caught rock. Reef and fish-only tanks use that same range.',
  },
  {
    question: 'Does the result order the rock?',
    answer:
      'No. The closing link is the saltwater starter-kit search on the setup page. The sentence includes the pound range for the gallons you entered. The kit is not a substitute for rock sold by the pound.',
  },
  {
    question: 'Is this the stocking calculator?',
    answer:
      'No. Stocking is a separate tool and it rejects the old inch-per-gallon rule. Live rock here is biological-filter mass, not a fish count. Salinity on the setup page is a specific gravity of 1.025 for most fish, measured with a refractometer.',
  },
]

export default function LiveRockPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{
        title: 'Live Rock Pounds per Gallon',
        subtitle: 'Planning range from this site’s saltwater setup page: 1–1.5 pounds of live rock per gallon, not a published reef standard.',
        category: 'Tools',
        categoryHref: '/tools',
        publishedAt: 'October 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Live Rock Pounds per Gallon' },
      ]}
      schema={[articleSchema, howToSchema]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Saltwater setup', href: '/setup/saltwater-tank-setup' },
            { label: 'Stocking calculator', href: '/tools/stocking-calculator' },
            { label: 'How we pick', href: '/how-we-pick' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }} />
        <p>
          The <Link href="/setup/saltwater-tank-setup">saltwater setup guide</Link> says live rock is the biological
          filter in most saltwater systems and that 1 to 1.5 pounds per gallon is the traditional guideline. Volume,
          heater wattage, and stocking have their own tools. None of them answers how much rock that sentence
          is for the tank in front of you.
        </p>
        <h2 id="calculator">Calculator</h2>
        <LiveRockCalculator />
        <h2>How to use the range</h2>
        <p>
          Multiply the display gallons by 1 for the low end and by 1.5 for the high end. A sump does not change the
          rate, because the page states the rate against water volume and then says a sump can supplement rock rather
          than replace the guideline. Aquacultured rock is the page’s preference. Wild-caught rock is the option the
          page argues against on ecological grounds.
        </p>
        <p>
          The starter-kit link is the same search as on the setup page. It is a search,
          not a weighed invoice. Cycling still belongs on the cycling estimator after the rock is in the water. Product
          choices follow <Link href="/how-we-pick">How we pick</Link>.
        </p>
        <h2 id="faq">FAQ</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
