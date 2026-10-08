import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, InlinePartnerQuote, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

// Request-time env, same as the insurance comparison. A set partner tag
// renders the quote link; an unset tag stays a disabled button.
export const dynamic = 'force-dynamic'

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
    answer: 'Trupanion, marked Best Overall. The review lists direct vet payment, 90% reimbursement, unlimited payouts, and a per-condition deductible. Wellness is not included. See the carrier\'s current terms for the monthly price.',
  },
  {
    question: 'When does the review point to Embrace?',
    answer: 'When you want a wellness add-on beside accident and illness coverage. Embrace. The review lists a wellness add-on and reimbursement of 70%, 80%, or 90%. The deductible program and the orthopedic waiting period: see the carrier\'s current terms.',
  },
  {
    question: 'Are the monthly figures a quote?',
    answer: 'No. They are the price bands printed in those reviews. A quote depends on the pet, the ZIP code, and the plan options. A quote depends on the pet, the ZIP code, and the plan options. Nothing here is a premium or a star rating.',
  },
]

export default function TrupanionVsEmbraceGuidePage() {
  return (
    <ArticleLayout
      priceAsOf="2026-10-07"
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'Trupanion or Embrace',
        subtitle: 'Direct vet payment and a wellness add-on are different reasons to open a sample policy. Prices below are the ones on the insurance review, not a quote for your pet.',
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
        <p>The <Link href="/reviews/best-pet-insurance">pet insurance review</Link> already scores Trupanion for direct payment at the clinic and Embrace for owners who want routine care on an add-on. The monthly bands are the figures printed in the review, not a quote for your pet.</p>
        <h2>What the review says about Trupanion</h2>
        <p>Trupanion is Best Overall and the winner. It lists 90% reimbursement, unlimited payouts, direct vet payment, and a per-condition deductible. Wellness is not included. See the carrier&apos;s current terms for the monthly price. The downsides are higher premiums and no wellness coverage. The review says Trupanion is the carrier whose policy pays the clinic at checkout rather than the pay-and-wait model.</p>
        <h2>What the review says about Embrace</h2>
        <p>Embrace is Wellness Included. The Wellness Rewards page, fetched 2026-10-08, lists wellness exams, vaccinations, flea, tick, and heartworm prevention, and preventative dental cleaning (https://www.embracepetinsurance.com/coverage/wellness-rewards). The verified registry marks that coverage as a standalone add-on. Reimbursement in the review is 70%, 80%, or 90%. The deductible program and the orthopedic waiting period: see the carrier&apos;s current terms. The review also says the plan options are more complex.</p>
        <p>To see what a deductible and a reimbursement percent do to a sample bill, use the <Link href="/tools/insurance-reimbursement-estimator">reimbursement estimator</Link>. This page does not run a new example.</p>
        <h2>Who should read which policy</h2>
        <p>Open the Trupanion sample when direct payment at checkout, 90% reimbursement, and unlimited payouts are the terms you need to confirm, and you are not buying the policy for wellness. Open the Embrace sample when the wellness add-on is the reason, and read the orthopedic waiting period on the carrier page before you enroll. Enroll before a condition is in the record. The insurance review says a condition noted before enrollment can be excluded. Healthy Paws is another option on that review, for fast reimbursement, and it is not this comparison.</p>
        <HopDisclosure siteId="vets-co" href="/go/trupanion/home?s=reviews-trupanion-vs-embrace-guide" showQuietNote={false} />
        <p><InlinePartnerQuote href="/go/trupanion/home?s=reviews-trupanion-vs-embrace-guide" label="Get a Trupanion quote →" holdWithoutPartnerId /></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
