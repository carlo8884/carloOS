import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Fi Series 3 vs Tractive | Dog.com',
  description: 'Fi Series 3 for the longest printed battery, or Tractive for the lower monthly fee. Printed prices are $140–160 plus $8–12 a month, or $40–60 plus $4–6.',
  path: '/reviews/fi-vs-tractive-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Fi Series 3 or Tractive',
  description: 'Fi Series 3 or Tractive, using the battery, coverage, and monthly fee on the GPS tracker review.',
  url: 'https://dog.com/reviews/fi-vs-tractive-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which tracker does the review pick overall?',
    answer: 'The Fi Series 3, marked Best Overall. The printed price is $140–160 plus $8–12 a month. The card says a subscription is required, the battery is about three months, and collar bands are sold separately.',
  },
  {
    question: 'When does the review point to Tractive?',
    answer: 'When the lowest printed device price and monthly fee matter more than battery life. Tractive is Best Budget. The printed price is $40–60 plus $4–6 a month. The card lists coverage in 175 countries, a 2–5 day battery, and no health monitoring.',
  },
  {
    question: 'Does either tracker replace a microchip?',
    answer: 'No. The GPS review says a registered microchip is the ID that still works if the battery dies. These two cards are location devices with a subscription, not a registry implant.',
  },
]

const RANKED = ['Fi Series 3', 'Tractive']
const itemList = buildItemListSchema({
  name: 'Fi Series 3 or Tractive',
  items: RANKED.map((name) => ({ name, url: ({ 'Fi Series 3': 'https://dog.com/go/amazon-brand/fi+series+3+dog+collar?s=reviews-fi-vs-tractive-guide' }[name] ?? 'https://dog.com/reviews/fi-vs-tractive-guide') })),
})

export default function FiVsTractiveGuidePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Fi Series 3 or Tractive',
        subtitle: 'The longest printed battery on the GPS review, or the lowest printed monthly fee. Prices below are the ones on that page.',
        category: 'Buyer guide',
        authorName: 'Dog.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/fi+series+3+dog+collar?s=reviews-fi-vs-tractive-guide" label="Browse Fi Series 3 GPS collars on Amazon" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Fi vs Tractive', href: '/reviews/fi-vs-tractive-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'GPS tracker review', href: '/reviews/best-dog-gps-tracker' },
            { label: 'Microchipping', href: '/guides/dog-microchipping' },
          ]}
        />
      }
      priceAsOf="2026-10-05"
    >
      <div className="carloOS-article">
        <p>Prices below are the ones on the <Link href="/reviews/best-dog-gps-tracker">GPS tracker review</Link>. This comparison is Fi Series 3 against Tractive. Whistle Go Explore is the health-monitoring collar on that review, and it is a different purchase.</p>
        <h2>What the review says about the Fi Series 3</h2>
        <p>Fi Series 3 is Best Overall and the winner. The card lists a three-month battery, an LTE-M network for broader rural coverage than standard LTE, instant geofence alerts, and an IP68 water-resistance line. The tracker module snaps into a collar band, and the review says collar bands are sold separately. A subscription is required. The printed price is $140–160 plus $8–12 a month. Step and sleep tracking are on the card. The cons say the upfront price is higher and the subscription is required.</p>
        <p>A registered microchip is a different product. The review points at <Link href="/guides/dog-microchipping">microchipping</Link> as the ID that still works when a battery dies. The implant cost is on that guide.</p>
        <h2>What the review says about Tractive</h2>
        <p>Tractive is Best Budget. The printed price is $40–60 plus $4–6 a month. The card says that monthly fee is the lowest of the trackers on the page and that the device works in 175 countries. Battery life is 2–5 days depending on tracking frequency, so charging is regular. The app is described as simple. Health monitoring is listed as none. The cons say the battery needs frequent charging and the app is less sophisticated than Fi.</p>
        <h2>Who should buy which tracker</h2>
        <p>Buy the Fi Series 3 when the review’s long battery and escape alerts are the reason, and the higher printed device price plus the monthly fee are acceptable. Buy Tractive when the lower printed device price and the $4–6 monthly line are the reason, including travel across the countries the card lists, and charging every few days is acceptable. Neither card is a health monitor. Whistle is the card for lick and scratch data, and it is not priced on this page.</p>
        <p>The link above searches Amazon for the Fi Series 3, the same search as on the GPS review. The sale price can differ from the printed band.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
