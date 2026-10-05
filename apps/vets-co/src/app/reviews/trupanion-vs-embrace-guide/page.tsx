import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, FAQAccordion, InlinePartnerQuote, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Trupanion vs Embrace Pet Insurance | Vets.co',
  description: 'Which policy to read first: Trupanion for direct vet pay, or Embrace when you want a wellness add-on. Printed prices are not a quote.',
  path: '/reviews/trupanion-vs-embrace-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Trupanion or Embrace',
  description: 'The insurance review already scores Trupanion for direct vet pay and Embrace for a wellness add-on.',
  url: 'https://vets.co/reviews/trupanion-vs-embrace-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which carrier does the insurance review mark as the winner?',
    answer: 'Trupanion, scored 9.4 and marked Best Overall. The review lists direct vet payment, 90% reimbursement, unlimited payouts, a per-condition deductible, and $65–120 a month. Wellness is not included.',
  },
  {
    question: 'When does the review point to Embrace?',
    answer: 'When you want a wellness add-on beside accident and illness coverage. Embrace scores 8.8. The review lists a wellness add-on, reimbursement of 70–90%, a diminishing deductible, a 6-month orthopedic waiting period, and $45–95 a month plus the add-on.',
  },
  {
    question: 'Are the monthly figures a quote?',
    answer: 'No. They are the price bands printed in those reviews. A quote depends on the pet, the ZIP code, and the plan options. A quote depends on the pet, the ZIP code, and the plan options. Nothing here is a premium or a star rating.',
  },
]

export default function TrupanionVsEmbraceGuidePage() {
  return (
    <ArticleLayout
      priceAsOf="2026-10-04"
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'Trupanion or Embrace',
        subtitle: 'Direct vet payment and a wellness add-on are different reasons to open a sample policy. Prices and scores below are the ones on the insurance review, not a quote for your pet.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Trupanion vs Embrace', href: '/reviews/trupanion-vs-embrace-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best pet insurance', href: '/reviews/best-pet-insurance' },
            { label: 'Reimbursement estimator', href: '/tools/insurance-reimbursement-estimator' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/reviews/best-pet-insurance">pet insurance review</Link> already scores Trupanion for direct payment at the clinic and Embrace for owners who want routine care on an add-on. Those scores are editorial scores, not shopper star ratings. The monthly bands are the figures printed in the review, not a quote for your pet.</p>
        <h2>What the review says about Trupanion</h2>
        <p>Trupanion is Best Overall, score 9.4, and the winner. It lists 90% reimbursement, unlimited payouts, direct vet payment, and a per-condition deductible. Wellness is not included. The printed price band is $65–120 a month. The downsides are higher premiums and no wellness coverage. The review says Trupanion is the carrier whose policy pays the clinic at checkout rather than the pay-and-wait model.</p>
        <h2>What the review says about Embrace</h2>
        <p>Embrace is Wellness Included, score 8.8. The wellness add-on covers vaccines, heartworm testing, dental cleanings, and annual exams. The deductible diminishes by $50 each claim-free year. Reimbursement in the review is 70–90%. The orthopedic waiting period is 6 months. The printed price is $45–95 a month plus the wellness add-on. The review also says the plan options are more complex.</p>
        <p>To see what a deductible and a reimbursement percent do to a sample bill, use the <Link href="/tools/insurance-reimbursement-estimator">reimbursement estimator</Link>. This page does not run a new example.</p>
        <h2>Who should read which policy</h2>
        <p>Open the Trupanion sample when direct payment at checkout, 90% reimbursement, and unlimited payouts are the terms you need to confirm, and you are not buying the policy for wellness. Open the Embrace sample when the wellness add-on is the reason, and read the 6-month orthopedic wait before you enroll. Enroll before a condition is in the record. The insurance review says a condition noted before enrollment can be excluded. Healthy Paws is another option on that review, for fast reimbursement, and it is not this comparison.</p>
        <AffiliateDisclosure variant="inline" siteId="vets-co" />
        <p>The quote button stays off until a partner ID is set. When that ID is set, it opens the Trupanion quote from the insurance review. The price you see there is the carrier&apos;s quote, not a figure from this page.</p>
        <p><InlinePartnerQuote href="/go/trupanion/home?s=reviews-trupanion-vs-embrace-guide" label="Get a Trupanion quote →" /></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
