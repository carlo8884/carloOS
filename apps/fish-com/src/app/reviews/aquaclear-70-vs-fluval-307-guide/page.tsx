import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'AquaClear 70 vs Fluval 307 | Fish.com',
  description: 'AquaClear 70 is the hang-on-back. Fluval 307 is the canister. Flow, tank size, and prices are the ones on the filter review.',
  path: '/reviews/aquaclear-70-vs-fluval-307-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'AquaClear 70 or Fluval 307',
  description: 'The AquaClear 70 hang-on-back, or the Fluval 307 canister. Scores and prices are on the filter review.',
  url: 'https://fish.com/reviews/aquaclear-70-vs-fluval-307-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which filter does the review pick as the hang-on-back?',
    answer: 'The AquaClear 70, scored 9.4 and marked Best HOB Overall. The review lists 300 GPH, tanks up to 70 gallons, a refillable media basket, and a price of $45–70. It also says the impeller needs cleaning about every three to four months.',
  },
  {
    question: 'When does the review point to the Fluval 307?',
    answer: 'For tanks of 40–70 gallons that need high biological filtration. The Fluval 307 scores 9.2. The review lists 303 GPH, a media volume of 780g, a self-priming button, near-silent running, cleaning every 3–6 months, and a price of $120–160. It needs space under the stand.',
  },
  {
    question: 'Does either filter cover a reef tank?',
    answer: 'No. The filter review does not name a reef filter. The AquaClear and Fluval reviews both stop at 70 gallons. The filter-GPH calculator is the turnover range for the tank you already have.',
  },
]

export default function AquaclearVsFluvalGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={schema}
      hero={{
        title: 'AquaClear 70 or Fluval 307',
        subtitle: 'A refillable hang-on-back, or a canister that cleans less often. Flow, tank size, and prices below are the ones on the filter review.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/aquaclear+70+filter?s=reviews-aquaclear-70-vs-fluval-307-guide" label="Check price of the AquaClear 70 on Amazon" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'AquaClear 70 vs Fluval 307', href: '/reviews/aquaclear-70-vs-fluval-307-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best aquarium filters', href: '/reviews/best-aquarium-filters' },
            { label: 'Filter GPH calculator', href: '/tools/filter-gph-calculator' },
          ]}
        />
      }
      priceAsOf="2026-10-04"
    >
      <div className="carloOS-article">
        <p>Prices and scores below are the ones on the <Link href="/reviews/best-aquarium-filters">filter review</Link>. The AquaClear 70 is the hang-on-back. The Fluval 307 is the canister. The type difference is also on the <Link href="/reviews/hob-vs-canister-guide">HOB versus canister guide</Link>.</p>
        <h2>What the review says about the AquaClear 70</h2>
        <p>The AquaClear 70 is Best HOB Overall, score 9.4, and the winner. Flow is 300 GPH and adjustable. The tank size in the review is up to 70 gallons. The media basket has three chambers and takes mechanical foam, carbon, and BioMax rings, so you are not locked to a proprietary cartridge. The review says noise stays low when the water level is correct, and that the impeller needs cleaning every three to four months or flow drops. The printed price is $45–70.</p>
        <p>The <Link href="/tools/filter-gph-calculator">filter-GPH calculator</Link> turns tank gallons into a turnover range. Match that range to the 300 GPH and 303 GPH already printed for these two filters.</p>
        <h2>What the review says about the Fluval 307</h2>
        <p>The Fluval 307 is Best Canister, score 9.2. The review names it for tanks of 40–70 gallons that need high biological filtration. Flow is 303 GPH. Media volume is 780g. It self-primes with a button, runs near-silent, and the review says the cleaning interval is every 3–6 months because the media takes longer to clog. Cleaning day is more involved than a hang-on-back rinse, the price is higher, and it needs space under the cabinet. The printed price is $120–160.</p>
        <h2>Who should buy which filter</h2>
        <p>Buy the AquaClear 70 when you want a hang-on-back you can refill with your own media, on a tank up to 70 gallons. Buy the Fluval 307 when the tank is 40–70 gallons, you want the longer cleaning interval, and you have room under the stand. The Hikari sponge and the Aqueon QuietFlow 30 are other filters on that review, for nano tanks and for tanks up to 30 gallons. Neither of those is this pair.</p>
        <p>The link above searches Amazon for the AquaClear 70, the same search as on the filter review. The sale price can differ from the band above.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
