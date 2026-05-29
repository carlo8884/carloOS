import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'
import { GuideLayout } from '../GuideLayout'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'How to Qualify for a Hard Money Loan',
  description: 'Documents, credit thresholds, entity setup, experience requirements, and the underwriting questions that actually decide private lender approvals.',
  path: '/guides/how-to-qualify',
  type: 'article',
})

export default function Page() {
  return (
    <GuideLayout
      title="How to Qualify for a Hard Money Loan"
      intro="Asset-based lending isn't a free pass on documentation. Lenders still verify the borrower, the property, and the exit. Here's what they actually look at — and what you can do to improve approval odds before you apply."
    >
      <h2>The Five Underwriting Categories</h2>
      <ol>
        <li><strong>Property:</strong> Appraisal, as-is value, after-repair value, comp set, lien position.</li>
        <li><strong>Borrower credit:</strong> 660–680 minimum is typical; sub-660 borrowers can sometimes qualify with extra equity.</li>
        <li><strong>Borrower experience:</strong> Number of prior flips, rentals owned, years in real estate.</li>
        <li><strong>Liquidity:</strong> Cash + liquid assets to cover down payment, holding costs, and 3–6 months of payments.</li>
        <li><strong>Exit strategy:</strong> Clear documented plan — sale, refinance to DSCR, refinance to conventional, etc.</li>
      </ol>

      <h2>Documents You&apos;ll Need</h2>
      <ul>
        <li>Purchase contract or LOI</li>
        <li>Rehab budget (line-itemed)</li>
        <li>Appraisal or comparable sales analysis</li>
        <li>Personal credit report</li>
        <li>Two months of bank statements (liquidity verification)</li>
        <li>Entity formation documents (LLC operating agreement, EIN letter)</li>
        <li>Real estate resume or schedule of prior deals</li>
        <li>Insurance binder (builder&apos;s risk for fix-and-flip)</li>
        <li>Photo ID + entity authorized signer</li>
      </ul>

      <h2>Entity Setup</h2>
      <p>
        Most private lenders will not lend to an individual on an investment property. You&apos;ll need an LLC (single-member or multi-member) named on title. Set up the entity in your state of operation, file for an EIN, and open a dedicated bank account. The lender will want to see entity docs on day one.
      </p>

      <h2>Credit Score Reality</h2>
      <p>
        The published minimum and the actual approval threshold are different. Most national lenders advertise 660, but pricing improves significantly at 700+ and best terms are usually reserved for 740+. Borrowers between 620–659 can still qualify, but expect higher rates, more points, or larger down payments.
      </p>

      <h2>First-Timer Disadvantage</h2>
      <p>
        Lenders tier pricing by experience. A first-timer typically pays 0.5–1 full point more than a borrower with 5+ completed flips. The fix: complete one small deal even at break-even pricing — the second deal will price meaningfully better, and the third better still.
      </p>

      <h2>What Hurts Your Application</h2>
      <ul>
        <li>Recent late mortgage payments (especially in the last 12 months)</li>
        <li>Open collections or judgments</li>
        <li>Insufficient liquid reserves</li>
        <li>Aggressive rehab budgets without supporting bids</li>
        <li>Comps that don&apos;t support the projected ARV</li>
        <li>Vague or unrealistic exit timeline</li>
      </ul>
    </GuideLayout>
  )
}
