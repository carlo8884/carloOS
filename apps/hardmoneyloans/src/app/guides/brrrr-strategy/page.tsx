import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'
import { GuideLayout } from '../GuideLayout'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'BRRRR Strategy Financing Guide',
  description: 'How to finance the Buy/Rehab/Rent/Refinance/Repeat strategy — hard money on acquisition, DSCR rental loan on cash-out refi, and the seasoning rules that govern timing.',
  path: '/guides/brrrr-strategy',
  type: 'article',
})

export default function Page() {
  return (
    <GuideLayout
      title="BRRRR Strategy — Financing the Buy/Rehab/Rent/Refi/Repeat Loop"
      intro="BRRRR uses hard money on the acquisition and rehab, then refinances into a long-term DSCR loan after stabilization. Getting the financing transitions right is what makes the strategy work."
    >
      <h2>The Five Steps</h2>
      <ol>
        <li><strong>Buy:</strong> Acquire a property at a meaningful discount to ARV.</li>
        <li><strong>Rehab:</strong> Bring the property to market-ready condition using hard money draws.</li>
        <li><strong>Rent:</strong> Place a stabilized tenant and document rent for at least 30–90 days.</li>
        <li><strong>Refinance:</strong> Cash-out refinance into a 30-year DSCR rental loan to pay off the hard money.</li>
        <li><strong>Repeat:</strong> Roll the cash-out proceeds into the next acquisition.</li>
      </ol>

      <h2>The Financing Handoff</h2>
      <p>
        The handoff between hard money and DSCR refinance is the riskiest moment in BRRRR. Three things have to line up:
      </p>
      <ul>
        <li><strong>Seasoning:</strong> Most DSCR lenders want 3–6 months of ownership before they&apos;ll refinance at appraised value (versus capped at purchase price).</li>
        <li><strong>Rent verification:</strong> A signed lease and 30–90 days of bank deposits, or 1007 rent schedule from a licensed appraiser.</li>
        <li><strong>DSCR ratio:</strong> Most lenders want gross rent ≥ 1.0× PITI (Principal/Interest/Taxes/Insurance). Strong programs go to 1.25× or higher for better pricing.</li>
      </ul>

      <h2>Why a Single Lender Helps</h2>
      <p>
        Lenders like Kiavi and Lima One offer both hard money and 30-year DSCR products. Using one lender across both steps means underwriting is already familiar with your borrower profile, and the second loan often closes faster.
      </p>
      <p>
        That said, a single lender is not always the cheapest. It&apos;s sometimes worth running the deal twice — once with a unified lender, once with a bridge + outside DSCR refinance — to see which produces the better total cost of capital.
      </p>

      <h2>What Goes Wrong</h2>
      <ul>
        <li><strong>Appraisal short:</strong> The post-rehab appraisal lands below your projection, capping the refinance and trapping capital in the deal.</li>
        <li><strong>Cash-out limits:</strong> Most DSCR programs cap cash-out at 70%–75% LTV, not 80%–90% — leaving less than the hard money payoff.</li>
        <li><strong>Vacancy:</strong> The property doesn&apos;t rent in 30 days, the hard money clock keeps ticking, and refinance underwriting won&apos;t accept the rent yet.</li>
      </ul>
    </GuideLayout>
  )
}
