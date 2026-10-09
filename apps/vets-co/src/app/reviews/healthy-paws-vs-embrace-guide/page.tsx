import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata, ArticleSourcesList, LastUpdated, ComparisonFoot } from '@carloOS/ui'
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
    answer: 'Healthy Paws. The review lists reimbursement up to 90 percent and an annual deductible. The Healthy Paws claims page, fetched 2026-10-08, says most claims are processed in 2 days (https://www.healthypawspetinsurance.com/pet-insurance-claims.html). The annual limit is a choice. Our notes list no wellness add-on. See the carrier\'s current terms for the monthly price.',
  },
  {
    question: 'When does the review point to Embrace?',
    answer: 'When you want routine care on an add-on. Embrace. The Wellness Rewards page, fetched 2026-10-08, lists wellness exams, vaccinations, flea, tick, and heartworm prevention, and preventative dental cleaning (https://www.embracepetinsurance.com/coverage/wellness-rewards). The review lists reimbursement of 70%, 80%, or 90%. The deductible program and the orthopedic waiting period: see the carrier\'s current terms.',
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
          <LastUpdated date="2026-10-09" />
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-healthy-paws-vs-embrace-guide"
          checklist={[
            "Our notes list no wellness add-on. The claims page says most claims are processed in 2 days.",
            "They are the price bands printed on the insurance review.",
            "A quote depends on the pet, the ZIP code, and the plan options.",
            "Trupanion is a different comparison on that review.",
            "Healthy Paws is the reimbursement-speed pick.",
            "Embrace is for owners who want routine care on an add-on.",
          ]}
        />
        <p>Healthy Paws is the reimbursement-speed pick. Embrace is for owners who want routine care on an add-on. <Link href="/reviews/healthy-paws-vs-pets-best-guide">Healthy Paws versus Pets Best</Link> is the deductible-and-tier comparison, not this wellness add-on. Those bands are not a quote for your pet.</p>
        <h2>What the review says about Healthy Paws</h2>
        <p>Healthy Paws is Fastest Reimbursement. Reimbursement is up to 90 percent. The Healthy Paws claims page, fetched 2026-10-08, says most claims are processed in 2 days, and that Direct Pay can reimburse the vet when funding is urgent (<span className="break-all">https://www.healthypawspetinsurance.com/pet-insurance-claims.html</span>). The deductible is annual. See the carrier&apos;s current terms for the monthly price. Our notes list no wellness add-on.</p>
        <p>The annual limit is a choice of $5,000, $7,000, or unlimited.</p>
        <h2>What the review says about Embrace</h2>
        <p>Embrace is Wellness Included. The Wellness Rewards page, fetched 2026-10-08, lists wellness exams, vaccinations, flea, tick, and heartworm prevention, and preventative dental cleaning (<span className="break-all">https://www.embracepetinsurance.com/coverage/wellness-rewards</span>). Our notes mark that coverage as a standalone add-on. Reimbursement in the review is 70%, 80%, or 90%. The deductible program and the orthopedic waiting period: see the carrier&apos;s current terms. The review also says the plan options are more complex.</p>
        <p>To see what a deductible and a reimbursement percent do to a sample bill, use the <Link href="/tools/pet-insurance-worth-it-calculator">worth-it calculator</Link>.</p>
        <h2>Who should read which policy</h2>
        <p>Open the Healthy Paws sample when the annual limit on the quote is the one you want and you want the claims page&apos;s processing window, and you are not buying the policy for a wellness add-on. Open the Embrace sample when the wellness add-on is the reason, and read the orthopedic waiting period on the carrier page before you enroll. Enroll before a condition is in the record. Trupanion, the direct-pay carrier on that review, is a separate comparison.</p>
        <p>The Healthy Paws claims page, fetched 2026-10-08, says most claims are processed in 2 days (<span className="break-all">https://www.healthypawspetinsurance.com/pet-insurance-claims.html</span>). The Embrace Wellness Rewards page, fetched the same day, lists wellness exams, vaccinations, flea, tick, and heartworm prevention, and preventative dental cleaning (<span className="break-all">https://www.embracepetinsurance.com/coverage/wellness-rewards</span>).</p>
        <div className="my-6 max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
            <caption className="text-left font-semibold text-brand-dark p-3">Side by side, from the sentences on this page</caption>
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th scope="col" className="p-3 font-bold text-brand-dark">Point</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Healthy Paws</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Embrace</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Role</th>
                <td className="p-3">Fastest reimbursement</td>
                <td className="p-3">Wellness add-on</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Reimbursement</th>
                <td className="p-3">Up to 90 percent</td>
                <td className="p-3">70%, 80%, or 90%</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Deductible</th>
                <td className="p-3">Annual</td>
                <td className="p-3">See the carrier’s current terms</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Wellness</th>
                <td className="p-3">Our notes list no add-on</td>
                <td className="p-3">Standalone add-on: exams, vaccines, flea, tick, heartworm, and preventative dental</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Open the sample when</th>
                <td className="p-3">You want the 2-day claims window, not a wellness add-on</td>
                <td className="p-3">The wellness add-on is the reason. Read the orthopedic waiting period first</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-09" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList title="Sources"
            sources={[
            { label: 'Healthy Paws claims', url: 'https://www.healthypawspetinsurance.com/pet-insurance-claims.html', publisher: 'Healthy Paws' },
            { label: 'Embrace Wellness Rewards', url: 'https://www.embracepetinsurance.com/coverage/wellness-rewards', publisher: 'Embrace' },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
