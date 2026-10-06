import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Fluval 307 vs Eheim Classic | Fish.com',
  description: 'The Fluval 307 for AquaStop and quiet running, or the Eheim Classic 350 for a longer service life.',
  path: '/reviews/fluval-307-vs-eheim-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Fluval 307 or Eheim Classic',
  description: 'The Fluval 307 or the Eheim Classic 350 for a mid-size tank. Prices are on the canister review.',
  url: 'https://fish.com/reviews/fluval-307-vs-eheim-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which canister does the review pick overall?',
    answer: 'The Fluval 307, marked Best Overall. The review lists a 40–70 gallon tank, 303 GPH, near-silent running, an AquaStop valve, four media baskets, and a 5-year warranty. The printed price is $120–150. The primer can be finicky on the first start.',
  },
  {
    question: 'When does the review point to the Eheim Classic?',
    answer: 'When decades of runtime matter more than AquaStop. The Eheim Classic 350 (2215). The review lists 40–92 gallons, 264 GPH, quiet rather than silent running, and a field life of 10–15 or more years with impeller replacement. There is no AquaStop. The printed price is $100–130.',
  },
  {
    question: 'How do I check the flow against the tank?',
    answer: 'The canister review’s next step is the filter-GPH calculator: 4–6 times turnover, then the canister that actually hits it. The flow target stays that one.',
  },
]

export default function FluvalVsEheimGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={schema}
      hero={{
        title: 'Fluval 307 or Eheim Classic',
        subtitle: 'A quiet canister with AquaStop, or the Classic that the review credits with a much longer service life. Flow and prices below are the ones on the canister review.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/fluval+307+canister+filter?s=reviews-fluval-307-vs-eheim-guide" label="Check price of the Fluval 307 canister filter on Amazon" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Fluval 307 vs Eheim', href: '/reviews/fluval-307-vs-eheim-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Canister filters', href: '/reviews/best-canister-filters' },
            { label: 'Filter GPH calculator', href: '/tools/filter-gph-calculator' },
          ]}
        />
      }
      priceAsOf="2026-10-05"
    >
      <div className="carloOS-article">
        <EmailCapture
          variant="inline"
          siteId="fish-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-fluval-307-vs-eheim-guide"
          checklist={[
            "The primer can be finicky on the first start.",
            "When decades of runtime matter more than AquaStop.",
            "The Eheim Classic 350 is for a filter meant to keep running for years.",
            "Penn Plax on that page is the budget canister, and it is a different comparison.",
            "The Fluval 307 is Best Overall and the winner.",
            "Flow is 303 GPH, which the review calls an actual rate rather than an inflated one.",
          ]}
        />
        <p>Prices below are the ones on the <Link href="/reviews/best-canister-filters">canister review</Link>. This pair is two canisters. Hang-on-back versus canister is the <Link href="/reviews/hob-vs-canister-guide">AquaClear 70 versus Fluval 307</Link> page. The Fluval 307 is for a 40–70 gallon tank. The Eheim Classic 350 is for a filter meant to keep running for years. Penn Plax on that page is the budget canister, and it is a different comparison.</p>
        <h2>What the review says about the Fluval 307</h2>
        <p>The Fluval 307 is Best Overall and the winner. Tank size is 40–70 gallons. Flow is 303 GPH, which the review calls an actual rate rather than an inflated one. Noise is near-silent. AquaStop lets you change media without disconnecting the hoses. Media is four separated baskets. The warranty is 5 years. The printed price is $120–150. The cons say the primer button can be finicky on the first start, and that it costs more than the Penn Plax on the same page.</p>
        <p>The <Link href="/tools/filter-gph-calculator">filter-GPH calculator</Link> applies the 4–6 times turnover rule from that review. Match the result to the flow the review already prints.</p>
        <h2>What the review says about the Eheim Classic</h2>
        <p>The Eheim Classic 350, model 2215, is Most Reliable. Tank size is 40–92 gallons. Flow is 264 GPH. Noise is quiet, not silent, and the review says it is slightly louder than the Fluval 307. Reliability is listed as a decades-long track record, with Classics running 10–15 or more years on impeller replacement. There is no AquaStop, and the media baskets are less separated than the Fluval’s. The printed price is $100–130.</p>
        <h2>Who should buy which canister</h2>
        <p>Buy the Fluval 307 when the tank is in the 40–70 gallon band and you want AquaStop plus the quieter of the two. Buy the Eheim Classic when the tank can be as large as 92 gallons and you would rather have the simpler filter the review credits with the longer life. A hang-on-back filter is the other style on the aquarium-filter review, not a third canister here.</p>
        <p>The link above searches Amazon for the Fluval 307, the same search as on the canister review. The sale price can differ from the band above.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
