import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Outward Hound vs Northmate | Dog.com',
  description: 'The Fun Feeder for a maze bowl, or the Northmate Green for a grass-pattern feeder. Printed prices are $10–18 and $25–35.',
  path: '/reviews/outward-hound-vs-northmate-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Outward Hound or Northmate',
  description: 'A maze bowl or a grass-pattern scatter feeder, using the prices on the slow-feeder review.',
  url: 'https://dog.com/reviews/outward-hound-vs-northmate-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which feeder does the review pick overall?',
    answer: 'The Outward Hound Fun Feeder, marked Best Overall. The printed price is $10–18. The card lists a maze of ridges, five sizes, a top-rack dishwasher line, and kibble that can wedge in the ridges.',
  },
  {
    question: 'When does the review point to the Northmate Green?',
    answer: 'When the job is foraging rather than a maze bowl. The Northmate Green is Best Puzzle Feeder. The printed price is $25–35. The card says the flat grass pattern cannot tip, and that kibble can stick deep in the segments.',
  },
  {
    question: 'Is the LickiMat one of these two?',
    answer: 'No. The slow-feeder review covers the LickiMat Splash for spreadable food and anxiety licking. It is not a kibble bowl, so its price stays on the slow-feeder review.',
  },
]

const RANKED = ['Outward Hound Fun Feeder', 'Northmate Green']
const itemList = buildItemListSchema({
  name: 'Outward Hound or Northmate',
  items: RANKED.map((name) => ({ name, url: ({ 'Northmate Green': 'https://dog.com/go/amazon-brand/northmate+green+interactive+feeder?s=reviews-outward-hound-vs-northmate-guide' }[name] ?? 'https://dog.com/reviews/outward-hound-vs-northmate-guide') })),
})

export default function OutwardHoundVsNorthmateGuidePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Outward Hound or Northmate',
        subtitle: 'A maze bowl that slows kibble, or a flat grass mat for foraging. Prices below are the ones on the slow-feeder review.',
        category: 'Buyer guide',
        authorName: 'Dog.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/northmate+green+interactive+feeder?s=reviews-outward-hound-vs-northmate-guide" label="Browse Northmate Green interactive feeders on Amazon" />}
      heroExtra={<HopDisclosure siteId="dog-com" href="/go/amazon-brand/northmate+green+interactive+feeder?s=reviews-outward-hound-vs-northmate-guide" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Outward Hound vs Northmate', href: '/reviews/outward-hound-vs-northmate-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Slow feeder review', href: '/reviews/best-slow-feeder-bowls' },
            { label: 'How much to feed', href: '/nutrition/how-much-to-feed' },
          ]}
        />
      }
      priceAsOf="2026-10-05"
    >
      <div className="carloOS-article">
        <p>Prices below are the ones on the <Link href="/reviews/best-slow-feeder-bowls">slow-feeder review</Link>. The Fun Feeder is the maze bowl. The Northmate Green is the floor mat that cannot tip. Dry food and puppy food are separate comparisons on this hub.</p>
        <h2>What the review says about the Fun Feeder</h2>
        <p>The Outward Hound Fun Feeder is Best Overall and the winner. The card describes a maze of ridges that stretches a typical meal from about 30 seconds toward 5–10 minutes, and it calls that extension about 10 times a typical meal. Five sizes run from mini to large breed. It is dishwasher safe on the top rack and has a non-slip base. The cons say tight ridges can trap kibble and need scrubbing, and that some dogs flip the bowl. The printed price is $10–18.</p>
        <p>How much food goes in the bowl is on the <Link href="/nutrition/how-much-to-feed">feeding guide</Link> and the calorie calculator. Those pages set the gram target.</p>
        <h2>What the review says about the Northmate Green</h2>
        <p>The Northmate Green is Best Puzzle Feeder. The card describes a grass-pattern silicone mat that hides kibble so the dog noses for pieces. Enrichment is listed as high. The flat design cannot tip, which the review also ties to low-mobility seniors who should not eat from a raised bowl. It says the mat works with wet food too and is easy to rinse. The cons say it costs more than a basic slow bowl and that kibble can stick deep in the grass segments. The printed price is $25–35.</p>
        <h2>Who should buy which feeder</h2>
        <p>Buy the Fun Feeder when the job is a sized maze bowl for kibble and the lower printed band is acceptable, including the scrubbing the card names. Buy the Northmate Green when the job is floor-level foraging and a bowl that cannot tip, and the higher printed band is acceptable. A spreadable lick mat is the third card on the review. It is for wet food and pre-stress licking, not this pair.</p>
        <p>The Northmate Green is the pick when the job is floor-level foraging and a bowl that cannot tip. The Fun Feeder’s shop link on that review is a Chewy search. The sale price can differ from either printed band.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
