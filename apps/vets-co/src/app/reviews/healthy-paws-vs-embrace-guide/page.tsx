import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Healthy Paws vs Embrace Pet Insurance | Vets.co',
  description: 'Healthy Paws for fast reimbursement, or Embrace when you want a wellness add-on. Printed prices are not a quote.',
  path: '/reviews/healthy-paws-vs-embrace-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Healthy Paws or Embrace',
  description: 'Healthy Paws for reimbursement speed, or Embrace for a wellness add-on. Scores are on the insurance review.',
  url: 'https://vets.co/reviews/healthy-paws-vs-embrace-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which carrier does the review pick for fast reimbursement?',
    answer: 'Healthy Paws, scored 9.1. The review lists reimbursement of 80–90%, claims in about two days, unlimited payouts, an annual deductible, and $40–85 a month. It does not pay the clinic directly, and it has no wellness add-on.',
  },
  {
    question: 'When does the review point to Embrace?',
    answer: 'When you want routine care on an add-on. Embrace scores 8.8. The review lists a wellness add-on for vaccines, heartworm testing, dental cleanings, and annual exams, reimbursement of 70–90%, a deductible that drops $50 each claim-free year, a 6-month orthopedic wait, and $45–95 a month plus the add-on.',
  },
  {
    question: 'Are the monthly figures a quote?',
    answer: 'No. They are the price bands printed on the insurance review. A quote depends on the pet, the ZIP code, and the plan options. Trupanion is a different comparison on that review.',
  },
]

export default function HealthyPawsVsEmbraceGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'Healthy Paws or Embrace',
        subtitle: 'Fast reimbursement, or a wellness add-on. Prices and scores below are the ones on the insurance review, not a quote for your pet.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/healthy-paws/home?s=reviews-healthy-paws-vs-embrace-guide" label="Get a Healthy Paws quote" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Healthy Paws vs Embrace', href: '/reviews/healthy-paws-vs-embrace-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best pet insurance', href: '/reviews/best-pet-insurance' },
            { label: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator' },
          ]}
        />
      }
      priceAsOf="2026-10-04"
    >
      <div className="carloOS-article">
        <p>Scores and monthly bands below are the ones on the <Link href="/reviews/best-pet-insurance">pet insurance review</Link>. Healthy Paws is the reimbursement-speed pick. Embrace is for owners who want routine care on an add-on. Those bands are not a quote for your pet.</p>
        <h2>What the review says about Healthy Paws</h2>
        <p>Healthy Paws is Fastest Reimbursement, score 9.1. Reimbursement is 80–90%. The review says the app claim and an average of about two days make the wait short. Payouts are unlimited. The deductible is annual. The printed price is $40–85 a month. It does not pay the clinic at checkout, and it has no wellness add-on. The review says it fits an owner who would rather pay the vet and be paid back quickly.</p>
        <h2>What the review says about Embrace</h2>
        <p>Embrace is Wellness Included, score 8.8. The wellness add-on covers vaccines, heartworm testing, dental cleanings, and annual exams. The deductible drops by $50 each claim-free year. Reimbursement in the review is 70–90%. The orthopedic waiting period is 6 months. The printed price is $45–95 a month plus the wellness add-on. The review also says the plan options are more complex.</p>
        <p>To see what a deductible and a reimbursement percent do to a sample bill, use the <Link href="/tools/pet-insurance-worth-it-calculator">worth-it calculator</Link>.</p>
        <h2>Who should read which policy</h2>
        <p>Open the Healthy Paws sample when you want unlimited payouts and a short reimbursement wait, and you are not buying the policy for wellness or for direct pay at the clinic. Open the Embrace sample when the wellness add-on is the reason, and read the 6-month orthopedic wait before you enroll. Enroll before a condition is in the record. Trupanion, the direct-pay carrier on that review, is a separate comparison.</p>
        <p>The link above opens the Healthy Paws quote from the insurance review. The price you see there is the carrier’s quote.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
