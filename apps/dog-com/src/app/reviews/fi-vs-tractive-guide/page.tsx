import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Fi Series 3+ vs Tractive | Dog.com',
  description: 'Fi Series 3+ membership is about $14 a month with the kit included. Tractive is $40–60 plus $4–6 a month. Whistle shut down on August 31, 2025.',
  path: '/reviews/fi-vs-tractive-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Fi Series 3+ or Tractive',
  description: 'Fi Series 3+ or Tractive, using the battery, coverage, and printed price on the GPS tracker review. Whistle shut down on August 31, 2025.',
  url: 'https://dog.com/reviews/fi-vs-tractive-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-07T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which tracker does the review pick overall?',
    answer: 'Fi Series 3+, marked Best Overall. The printed price is about $14 a month with the collar kit included, dated 2026-10-07. Confirm the live plan. The card says membership is required and Fi rates battery life at up to 3 months.',
  },
  {
    question: 'When does the review point to Tractive?',
    answer: 'When the lower printed device price matters more than battery life. Tractive is Best Budget. The printed price is $40–60 plus $4–6 a month, dated 2026-10-07. Confirm the live plan. The card lists coverage in 175 countries, a 2–5 day battery, and no health monitoring.',
  },
  {
    question: 'Does either tracker replace a microchip?',
    answer: 'No. The GPS review says a registered microchip is the ID that still works if the battery dies. These two cards are location devices with a subscription, not a registry implant.',
  },
]

const RANKED = ['Fi Series 3+', 'Tractive']
const itemList = buildItemListSchema({
  name: 'Fi Series 3+ or Tractive',
  items: RANKED.map((name) => ({ name, url: ({ 'Fi Series 3+': 'https://dog.com/go/amazon-brand/fi+series+3+dog+collar?s=reviews-fi-vs-tractive-guide' }[name] ?? 'https://dog.com/reviews/fi-vs-tractive-guide') })),
})

export default function FiVsTractiveGuidePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Fi Series 3+ or Tractive',
        subtitle: 'The current Fi collar on the GPS review, or the lower printed device price. Whistle shut down on August 31, 2025.',
        category: 'Buyer guide',
        authorName: 'Dog.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/fi+series+3+dog+collar?s=reviews-fi-vs-tractive-guide" label="Browse Fi Series 3+ GPS collars on Amazon" />}
      heroExtra={<HopDisclosure siteId="dog-com" href="/go/amazon-brand/fi+series+3+dog+collar?s=reviews-fi-vs-tractive-guide" />}
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
      priceAsOf="2026-10-07"
    >
      <div className="carloOS-article">
        <p>Prices below are the ones on the <Link href="/reviews/best-dog-gps-tracker">GPS tracker review</Link>. This comparison is Fi Series 3+ against Tractive. Whistle Go Explore is not a current pick. Tractive shut the Whistle service down on August 31, 2025.</p>
        <h2>What the review says about the Fi Series 3+</h2>
        <p>Fi Series 3+ is Best Overall. The printed price is about $14 a month with the collar kit included, dated 2026-10-07. Confirm the live plan before you buy. Fi rates battery life at up to 3 months and lists AT&amp;T as the cellular provider. The collar band is part of the Series 3+ design. Membership is required. The app covers location, activity, and escape alerts.</p>
        <p>A registered microchip is a different product. The review points at <Link href="/guides/dog-microchipping">microchipping</Link> as the ID that still works when a battery dies. The implant cost is on that guide.</p>
        <h2>What the review says about Tractive</h2>
        <p>Tractive is Best Budget. The printed price is $40–60 plus $4–6 a month, dated 2026-10-07. Confirm the live plan before you buy. The card says that monthly line is lower than the Fi card and that the device works in 175 countries. Battery life is 2–5 days depending on tracking frequency, so charging is regular. The app is described as simple. Health monitoring is listed as none.</p>
        <h2>Who should buy which tracker</h2>
        <p>Buy the Fi Series 3+ when the review’s long battery and escape alerts are the reason, and membership from about $14 a month with the kit included is acceptable. Buy Tractive when the printed price of $40–60 plus $4–6 a month is the reason, including travel across the countries the card lists, and charging every few days is acceptable. Neither card replaces a microchip. Whistle is not a current pick, and it is not priced on this page.</p>
        <p>The link above searches Amazon for the Fi Series 3+ collar, the same search as on the GPS review. The sale price can differ from the printed band.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
