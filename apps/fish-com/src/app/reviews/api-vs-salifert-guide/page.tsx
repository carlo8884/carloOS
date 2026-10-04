import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'API Master Kit vs Salifert Tests | Fish.com',
  description: 'Which water test to buy: the API Freshwater Master Kit for community tanks, or Salifert tests for reef alkalinity, calcium, and magnesium.',
  path: '/reviews/api-vs-salifert-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'API Master Kit or Salifert tests',
  description: 'The test-kit review already assigns the API Freshwater Master Kit to freshwater and Salifert tests to reef parameters.',
  url: 'https://fish.com/reviews/api-vs-salifert-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which kit does the test review pick for a freshwater community tank?',
    answer: 'The API Freshwater Master Test Kit, scored 9.3 and marked Best Overall. The card lists about 800 tests for pH, ammonia, nitrite, and nitrate, at $28–35. It does not cover saltwater, GH/KH, or reef alkalinity.',
  },
  {
    question: 'What does the review say about Salifert?',
    answer: 'Salifert individual tests are the reef pick for alkalinity, calcium, and magnesium. They cost more per test than API. The page says individual tests hold calibration better than combo kits. It does not publish a reagent count or a star rating for Salifert.',
  },
  {
    question: 'Does a pH meter replace the API kit?',
    answer: 'No. The review says a Bluelab or similar meter is for pH-critical setups and needs calibration every 1–2 weeks. It does not replace ammonia or nitrite testing.',
  },
]

export default function ApiVsSalifertGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={schema}
      hero={{
        title: 'API Master Kit or Salifert tests',
        subtitle: 'A freshwater community tank and a reef tank do not use the same tests. This guide only restates the test-kit review. It does not add a reagent count, a price, or a score.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'API vs Salifert', href: '/reviews/api-vs-salifert-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best water test kits', href: '/reviews/best-water-test-kits' },
            { label: 'Aquarium cycling', href: '/setup/aquarium-cycling-guide' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/reviews/best-water-test-kits">water-test review</Link> already assigns the API Freshwater Master Test Kit to freshwater pH, ammonia, nitrite, and nitrate, and Salifert individual tests to reef alkalinity, calcium, and magnesium. Only the API card has a score and a price. This page does not invent either for Salifert.</p>
        <h2>What the API card already says</h2>
        <p>The API Freshwater Master Test Kit is Best Overall, score 9.3, and the winner. It lists about 800 liquid-reagent tests, which the card calls roughly two or more years of weekly testing on one tank. Parameters are pH, ammonia, nitrite, and nitrate. The printed price is $28–35. The card says it is a freshwater kit: saltwater, GH/KH, and reef alkalinity are outside it. Color matching can be tricky in some lighting. Dip strips are not the substitute the card recommends for ammonia.</p>
        <h2>What the Salifert section already says</h2>
        <p>Salifert is the reef section, not a scored card. The page says the tests are more accurate than API on reef alkalinity, calcium, and magnesium, and more expensive per test. It tells you to buy individual parameter tests because they hold calibration better than combo kits. There is no reagent count and no star rating on that section. Do not treat this guide as if it added one.</p>
        <h2>Who should buy which test</h2>
        <p>Buy the API kit for a freshwater community tank that needs pH, ammonia, nitrite, and nitrate. Buy Salifert individual tests when the job is reef alkalinity, calcium, or magnesium. Keep the API kit if you also need ammonia and nitrite. A digital pH meter, when the review mentions Bluelab, is an extra for pH-critical tanks. It does not retire the reagent kit.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <p>The hop below is the same API Freshwater Master Test Kit search already on the test-kit review. It is a search, not a promise of a sale price.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/api+freshwater+master+test+kit?s=reviews-api-vs-salifert-guide">Browse the API Freshwater Master Test Kit on Amazon →</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
