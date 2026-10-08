import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, EmailCapture, FAQAccordion, InlinePartnerQuote, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

// Request-time env, same as the insurance comparison. A set Trupanion tag
// renders the quote link; an unset tag stays a disabled button.
export const dynamic = 'force-dynamic'

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
    answer: 'Trupanion. It lists 90 percent reimbursement, unlimited payouts, direct vet payment, a per-condition deductible, and no wellness coverage. See the carrier\'s current terms for the monthly price.',
  },
  {
    question: 'Which carrier does it pick if you can pay the clinic yourself?',
    answer: 'Healthy Paws. The review lists about two-day claims, reimbursement up to 90 percent, an annual deductible, no direct vet payment, and no wellness add-on. The annual limit is a choice. See the carrier\'s current terms for the monthly price.',
  },
  {
    question: 'Does either policy cover routine vaccines?',
    answer: 'No. Both reviews say wellness is not included. The insurance review assigns routine-care budgeting to Embrace, which is a different option. Orthopedic waiting period: see the carrier\'s current terms.',
  },
]

export default function TrupanionVsHealthyPawsGuidePage() {
  return (
    <ArticleLayout
      priceAsOf="2026-10-07"
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
        <p>The Trupanion listing is the best-overall pick. It lists 90 percent reimbursement, unlimited payouts, and payment to the clinic at checkout rather than a submit-and-wait claim. The deductible is per condition, which the review says favors a chronic disease once that deductible is met. Wellness is not included. See the carrier&apos;s current terms for the monthly price. The cons are the higher premium and the missing wellness layer. The review says this is the carrier whose contract obligates direct payment. It does not say every clinic has the software integration turned on. Ask the clinic.</p>
        <h2>Healthy Paws</h2>
        <p>The Healthy Paws listing is the fastest-reimbursement pick. It lists reimbursement up to 90 percent and The Healthy Paws claims page says most claims are processed in 2 days, and Direct Pay can reimburse the vet when funding is urgent (<a className="break-all" href="https://www.healthypawspetinsurance.com/pet-insurance-claims.html">https://www.healthypawspetinsurance.com/pet-insurance-claims.html</a>). The deductible is annual, not per condition. There is no direct payment to the clinic and no wellness add-on. See the carrier&apos;s current terms for the monthly price. Buy this when you can put the invoice on a credit card and wait to be paid back, and you do not need the clinic paid before you leave.</p>
        <p>The annual limit is a choice of $5,000, $7,000, or unlimited.</p>
        <h2>Who should start where</h2>
        <p>Start with Trupanion if the reason you are shopping is a large emergency you do not want to finance yourself at the front desk. Start with Healthy Paws if you can pay the clinic and you want the faster reimbursement the review describes. If the missing piece is vaccines and wellness exams, neither of these policies is that product. The review sends that job to Embrace. A wellness plan is also not a substitute for either policy. That distinction is the <Link href="/insurance/wellness-plans-vs-insurance">wellness versus insurance</Link> page.</p>
        <HopDisclosure siteId="vets-co" href="/go/trupanion/home?s=reviews-trupanion-vs-healthy-paws-guide" showQuietNote={false} />
        <p><InlinePartnerQuote href="/go/trupanion/home?s=reviews-trupanion-vs-healthy-paws-guide" label="Get a Trupanion quote →" holdWithoutPartnerId /></p>
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Save an address with this guide"
          ctaText="Save my address"
          source="reviews-trupanion-vs-healthy-paws-guide"
          checklist={[
            'Start with Trupanion if the reason you are shopping is a large emergency you do not want to finance yourself at the front desk.',
            'Start with Healthy Paws if you can pay the clinic and you want the faster reimbursement the review describes.',
            'If the missing piece is vaccines and wellness exams, neither of these policies is that product.',
            'The review sends that job to Embrace.',
            'A wellness plan is also not a substitute for either policy.',
            'Get a Trupanion quote',
          ]}
        />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
