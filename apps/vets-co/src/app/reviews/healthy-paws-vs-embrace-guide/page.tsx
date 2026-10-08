import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

// Request-time env, same as the insurance comparison. A set partner tag
// renders the quote link; an unset tag stays a disabled button.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Healthy Paws vs Embrace Wellness | Vets.co',
  description: 'Healthy Paws for fast reimbursement, or Embrace when you want a wellness add-on. Printed prices are not a quote.',
  path: '/reviews/healthy-paws-vs-embrace-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Healthy Paws or Embrace wellness',
  description: 'Healthy Paws for reimbursement speed, or Embrace for a wellness add-on.',
  url: 'https://vets.co/reviews/healthy-paws-vs-embrace-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which carrier does the review pick for fast reimbursement?',
    answer: 'Healthy Paws. The review lists reimbursement up to 90 percent, claims in about two days, and an annual deductible. The annual limit is a choice. It does not pay the clinic directly, and it has no wellness add-on. See the carrier\'s current terms for the monthly price.',
  },
  {
    question: 'When does the review point to Embrace?',
    answer: 'When you want routine care on an add-on. Embrace. The review lists a wellness add-on for vaccines, heartworm testing, dental cleanings, and annual exams, and reimbursement of 70%, 80%, or 90%. The deductible program and the orthopedic waiting period: see the carrier\'s current terms.',
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
        title: 'Healthy Paws or Embrace wellness',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Healthy Paws is the top pick for fast reimbursement, and Embrace is the plan with a wellness add-on.</p>
          <div data-fold="offer">
          <PrimaryHop href="/go/healthy-paws/home?s=reviews-healthy-paws-vs-embrace-guide" label="Get a Healthy Paws quote" holdWithoutPartnerId />
          <HopDisclosure tone="on-dark" siteId="vets-co" href="/go/healthy-paws/home?s=reviews-healthy-paws-vs-embrace-guide" noteClassName="mt-3 mb-0 text-xs leading-relaxed text-white/80" />
        </div>
        </>
      }
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
      priceAsOf="2026-10-07"
    >
      <div className="carloOS-article">
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-healthy-paws-vs-embrace-guide"
          checklist={[
            "It does not pay the clinic directly, and it has no wellness add-on.",
            "They are the price bands printed on the insurance review.",
            "A quote depends on the pet, the ZIP code, and the plan options.",
            "Trupanion is a different comparison on that review.",
            "Healthy Paws is the reimbursement-speed pick.",
            "Embrace is for owners who want routine care on an add-on.",
          ]}
        />
        <p>Healthy Paws is the reimbursement-speed pick. Embrace is for owners who want routine care on an add-on. <Link href="/reviews/healthy-paws-vs-pets-best-guide">Healthy Paws versus Pets Best</Link> is the deductible-and-tier comparison, not this wellness add-on. Those bands are not a quote for your pet.</p>
        <h2>What the review says about Healthy Paws</h2>
        <p>Healthy Paws is Fastest Reimbursement. Reimbursement is up to 90 percent. The review says the app claim and an average of about two days make the wait short. The deductible is annual. See the carrier&apos;s current terms for the monthly price. It does not pay the clinic at checkout, and it has no wellness add-on. The review says it fits an owner who would rather pay the vet and be paid back quickly.</p>
        <p>The annual limit is a choice of $5,000, $7,000, or unlimited.</p>
        <h2>What the review says about Embrace</h2>
        <p>Embrace is Wellness Included. The wellness add-on covers vaccines, heartworm testing, dental cleanings, and annual exams. Reimbursement in the review is 70%, 80%, or 90%. The deductible program and the orthopedic waiting period: see the carrier&apos;s current terms. The review also says the plan options are more complex.</p>
        <p>To see what a deductible and a reimbursement percent do to a sample bill, use the <Link href="/tools/pet-insurance-worth-it-calculator">worth-it calculator</Link>.</p>
        <h2>Who should read which policy</h2>
        <p>Open the Healthy Paws sample when the annual limit on the quote is the one you want and you want a short reimbursement wait, and you are not buying the policy for wellness or for direct pay at the clinic. Open the Embrace sample when the wellness add-on is the reason, and read the orthopedic waiting period on the carrier page before you enroll. Enroll before a condition is in the record. Trupanion, the direct-pay carrier on that review, is a separate comparison.</p>
        <p>Healthy Paws reimburses after you pay the clinic, and the review says the app claim averages about two days. The Embrace wellness add-on covers vaccines, heartworm testing, dental cleanings, and annual exams.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
