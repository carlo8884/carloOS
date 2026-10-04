import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Trupanion vs Healthy Paws | Vets.co',
  description: 'Direct vet payment versus fast reimbursement. Figures are the ones on the pet insurance review, not a quote for your pet.',
  path: '/reviews/trupanion-vs-healthy-paws-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Trupanion vs Healthy Paws',
  description: 'Trupanion pays the clinic. Healthy Paws reimburses quickly. Both figures come from the insurance review.',
  url: 'https://vets.co/reviews/trupanion-vs-healthy-paws-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which carrier does the insurance review pick for payment at the clinic?',
    answer: 'Trupanion. The card lists 90 percent reimbursement, unlimited payouts, direct vet payment, a per-condition deductible, no wellness coverage, a price range of $65–120 a month, and an editorial score of 9.4. That range is not a quote.',
  },
  {
    question: 'Which carrier does it pick if you can pay the clinic yourself?',
    answer: 'Healthy Paws. The card lists about two-day claims, 80 to 90 percent reimbursement, unlimited payouts, an annual deductible, no direct vet payment, no wellness add-on, $40–85 a month, and a score of 9.1.',
  },
  {
    question: 'Does either card cover routine vaccines?',
    answer: 'No. Both cards say wellness is not included. The insurance review assigns routine-care budgeting to Embrace, which is a different card, with a 6-month orthopedic waiting period.',
  },
]

export default function TrupanionVsHealthyPawsGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={schema}
      hero={{
        title: 'Trupanion vs Healthy Paws',
        subtitle: 'One carrier pays the clinic at checkout. The other pays you back after you have paid the clinic. The numbers below are copied from the insurance review. They are not a premium for your pet.',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Trupanion vs Healthy Paws', href: '/reviews/trupanion-vs-healthy-paws-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best pet insurance', href: '/reviews/best-pet-insurance' },
            { label: 'Reimbursement estimator', href: '/tools/insurance-reimbursement-estimator' },
            { label: 'Wellness vs insurance', href: '/insurance/wellness-plans-vs-insurance' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/reviews/best-pet-insurance">pet insurance review</Link> ranks Trupanion, Healthy Paws, and Embrace on published contract terms. This guide is only the first two, because that is the choice between direct pay and fast reimbursement. Enroll before a condition is written into the record. The review says every insurer can exclude what is already documented. Model a bill in the <Link href="/tools/insurance-reimbursement-estimator">reimbursement estimator</Link> before you treat a monthly range as what you will pay.</p>
        <h2>Trupanion</h2>
        <p>The Trupanion card is the best-overall pick, scored 9.4. It lists 90 percent reimbursement, unlimited payouts, and payment to the clinic at checkout rather than a submit-and-wait claim. The deductible is per condition, which the card says favors a chronic disease once that deductible is met. Wellness is not included. The printed range is $65–120 a month. The cons are the higher premium and the missing wellness layer. The review says this is the carrier whose contract obligates direct payment. It does not say every clinic has the software integration turned on. Ask the clinic.</p>
        <h2>Healthy Paws</h2>
        <p>The Healthy Paws card is the fastest-reimbursement pick, scored 9.1. It lists 80 to 90 percent reimbursement, unlimited payouts, and claims the carrier describes as about two days. The deductible is annual, not per condition. There is no direct payment to the clinic and no wellness add-on. The printed range is $40–85 a month. Buy this when you can put the invoice on a card and wait for the reimbursement, and you do not need the clinic paid before you leave.</p>
        <h2>Who should start where</h2>
        <p>Start with Trupanion if the reason you are shopping is a large emergency you do not want to finance yourself at the front desk. Start with Healthy Paws if you can pay the clinic and you want the faster reimbursement the card describes, at the lower printed range. If the missing piece is vaccines and wellness exams, neither of these cards is that product. The review sends that job to Embrace. A wellness plan is also not a substitute for either policy. That distinction is the <Link href="/insurance/wellness-plans-vs-insurance">wellness versus insurance</Link> page.</p>
        <AffiliateDisclosure variant="inline" siteId="vets-co" />
        <p>The hop is the Trupanion quote path already on the insurance review. A quote is not the range printed above.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/trupanion/home?s=reviews-trupanion-vs-healthy-paws-guide">Get a Trupanion quote →</a></p>
        <h2>Update list</h2>
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Insurance comparison update list"
          subtitle="Leave an address to be on the list for changes to the Trupanion versus Healthy Paws note on this page."
          ctaText="Save my address"
          source="reviews-trupanion-vs-healthy-paws-guide"
        />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
