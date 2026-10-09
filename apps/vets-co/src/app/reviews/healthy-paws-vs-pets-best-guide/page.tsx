import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas, ArticleSourcesList, LastUpdated, ComparisonFoot } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

// Request-time env, same as the insurance comparison. A set partner tag
// renders the quote link; an unset tag stays a disabled button.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Healthy Paws vs Pets Best Tiers | Vets.co',
  description: 'Healthy Paws for one plan, or Pets Best for several tiers. Both prices are quote-based.',
  path: '/reviews/healthy-paws-vs-pets-best-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Healthy Paws or Pets Best tiers',
  description: 'Healthy Paws for one set of levers, or Pets Best for several plan tiers.',
  url: 'https://vets.co/reviews/healthy-paws-vs-pets-best-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which carrier does the deductible page mark as the winner?',
    answer: 'Healthy Paws, marked Simple Levers. The review lists one accident-and-illness plan, a deductible and reimbursement rate you set, and fast reimbursement. There is no wellness add-on. The price line is quote-based.',
  },
  {
    question: 'When does that page point to Pets Best?',
    answer: 'When you want several plan tiers and a wider set of deductible and reimbursement combinations. Pets Best. Pets Best\'s FAQ, fetched 2026-10-08, says there is no upper age limit (https://www.petsbest.com/faq). The review lists multiple tiers and a pay-then-claim model. The price line is quote-based.',
  },
  {
    question: 'Does this page publish a monthly premium?',
    answer: 'No. Both cards say quote-based. The premium, reimbursement percent, and annual limit are on the carrier quote, which is where the deductible page leaves them.',
  },
]

const RANKED = ['Healthy Paws', 'Pets Best']
const itemList = buildItemListSchema({
  name: 'Healthy Paws or Pets Best',
  items: RANKED.map((name) => ({ name, url: ({ 'Healthy Paws': 'https://vets.co/go/healthy-paws/home?s=reviews-healthy-paws-vs-pets-best-guide' }[name] ?? 'https://vets.co/reviews/healthy-paws-vs-pets-best-guide') })),
})

export default function HealthyPawsVsPetsBestGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Healthy Paws or Pets Best tiers',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Healthy Paws is the top pick because one accident-and-illness plan has two levers, the deductible and the reimbursement rate.</p>
          <div data-fold="offer">
          <PrimaryHop href="/go/healthy-paws/home?s=reviews-healthy-paws-vs-pets-best-guide" label="Get a Healthy Paws quote" holdWithoutPartnerId />
          <HopDisclosure tone="on-dark" siteId="vets-co" href="/go/healthy-paws/home?s=reviews-healthy-paws-vs-pets-best-guide" noteClassName="mt-3 mb-0 text-xs leading-relaxed text-white/80" />
        </div>
        </>
      }
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Healthy Paws vs Pets Best', href: '/reviews/healthy-paws-vs-pets-best-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Deductibles and reimbursement', href: '/insurance/deductibles-reimbursement' },
            { label: 'Quote prep checklist', href: '/tools/insurance-quote-prep' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
          <LastUpdated date="2026-10-09" />
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-healthy-paws-vs-pets-best-guide"
          checklist={[
            "The review lists one accident-and-illness plan, a deductible and reimbursement rate you set, and fast reimbursement.",
            "When you want several plan tiers and a wider set of deductible and reimbursement combinations.",
            "Pets Best's FAQ, fetched 2026-10-08, says there is no upper age limit (https://www.petsbest.com/faq).",
            "The premium, reimbursement percent, and annual limit are on the carrier quote, which is where the deductible page leaves them.",
            "That page puts Healthy Paws and Pets Best side by side as two ways to set the same levers.",
            "Trupanion, Lemonade, and Spot have their own guides.",
          ]}
        />
        <p>Healthy Paws and Pets Best are two ways to set the same deductible and reimbursement levers. <Link href="/reviews/healthy-paws-vs-embrace-guide">Healthy Paws versus Embrace</Link> is the wellness-add-on comparison. Trupanion, Lemonade, and Spot have their own guides. Neither card prints a monthly premium.</p>
        <h2>What the page says about Healthy Paws</h2>
        <p>Healthy Paws is Simple Levers and the winner. The card describes a single accident-and-illness plan where you choose the deductible and the reimbursement rate. Reimbursement is listed as fast, on a pay-then-claim model. The cons say there is no wellness add-on and that you should confirm the annual-limit structure on the quote, because that limit is the catastrophe protection. The price line is quote-based. Healthy Paws is one accident-and-illness plan with a deductible and a reimbursement rate you set.</p>
        <h2>What the page says about Pets Best</h2>
        <p>Pets Best is Tiered Options. The card says several plan tiers offer a wide range of deductible and reimbursement combinations, which is the point when you want to see how each lever moves a premium. The model is pay-then-claim. Pets Best’s FAQ, fetched 2026-10-08, says there is no upper age limit (<span className="break-all">https://www.petsbest.com/faq</span>). Cons say there are more options to compare and that standard exclusions apply. The price line is quote-based. The reimbursement percent is the one on this card, not a figure copied from another carrier.</p>
        <p>What to have ready before either quote is on the <Link href="/tools/insurance-quote-prep">quote-prep checklist</Link>: age, breed, pre-existing conditions, and the deductible and reimbursement choices.</p>
        <h2>Who should quote which carrier</h2>
        <p>Start the Healthy Paws quote when one plan and two levers are enough, and wellness coverage is not the reason you are buying. Start the Pets Best quote when you want several tiers, including for an older pet the card says can still enroll, and you are willing to compare more structures. On both, read the annual limit, exclusions, and waiting periods in the sample policy. Do not treat either quote-based line as a price from this page.</p>
        <div className="my-6 max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
            <caption className="text-left font-semibold text-brand-dark p-3">Side by side, from the sentences on this page</caption>
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th scope="col" className="p-3 font-bold text-brand-dark">Point</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Healthy Paws</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Pets Best</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Role</th>
                <td className="p-3">Simple Levers, and the winner</td>
                <td className="p-3">Tiered Options</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">What you set</th>
                <td className="p-3">One accident-and-illness plan. You choose the deductible and the reimbursement rate</td>
                <td className="p-3">Several plan tiers, with a wide range of deductible and reimbursement combinations</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Claims</th>
                <td className="p-3">Pay, then claim. Reimbursement is listed as fast</td>
                <td className="p-3">Pay, then claim</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Also on the page</th>
                <td className="p-3">No wellness add-on. Confirm the annual-limit structure on the quote</td>
                <td className="p-3">No upper age limit. More options to compare. Standard exclusions apply</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Price line</th>
                <td className="p-3">Quote-based</td>
                <td className="p-3">Quote-based</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-09" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList title="Sources"
            sources={[
            { label: 'Pets Best FAQ', url: 'https://www.petsbest.com/faq', publisher: 'Pets Best' },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
