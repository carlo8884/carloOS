import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'
import { GuideLayout } from '../GuideLayout'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'What Is a Hard Money Loan?',
  description: 'Plain-language primer on hard money loans: how they work, what they cost, when investors use them, and how they differ from conventional mortgages.',
  path: '/guides/what-is-hard-money',
  type: 'article',
})

export default function Page() {
  return (
    <GuideLayout
      title="What Is a Hard Money Loan?"
      intro="A hard money loan is short-term real estate financing secured by the property itself, not the borrower's W-2. Investors use it to fund deals that conventional lenders won't touch — fast closes, properties needing rehab, or borrowers without recent tax returns."
    >
      <h2>How a Hard Money Loan Works</h2>
      <p>
        A private lender — sometimes called a hard money lender or private money lender — funds a loan secured by the real estate itself. The lender focuses on three things: the property&apos;s as-is value, the after-repair value (ARV), and the borrower&apos;s exit plan. Personal credit and W-2 income matter less than they do for a conventional mortgage, but they aren&apos;t ignored.
      </p>
      <p>
        Most loans close in 7–21 days. Terms run 6–24 months for fix-and-flip deals and up to 30 years for DSCR rental products. Rates currently fall in the 8%–13.5% range, with origination fees of 1–3 points (a &quot;point&quot; equals 1% of the loan amount).
      </p>

      <h2>When Investors Use Hard Money</h2>
      <ul>
        <li><strong>Fix-and-flip:</strong> Buy a distressed property, rehab it, and resell within 6–12 months.</li>
        <li><strong>Bridge loan:</strong> Hold a property short-term while waiting for a longer financing event.</li>
        <li><strong>BRRRR:</strong> Buy, rehab, rent, refinance into a 30-year DSCR loan, repeat.</li>
        <li><strong>Distressed acquisition:</strong> The property won&apos;t qualify for a Fannie/Freddie loan in its current state.</li>
        <li><strong>Speed:</strong> An auction closing in 10 days that conventional lenders cannot match.</li>
      </ul>

      <h2>How It Differs from a Conventional Mortgage</h2>
      <p>
        Conventional mortgages prioritize the borrower: income documentation, debt-to-income ratios, credit score, and a clean title chain. Hard money prioritizes the asset: appraisal, ARV, equity cushion, and the investor&apos;s track record on prior deals.
      </p>
      <p>
        That asset-first underwriting is why rates are higher. The lender is taking on more risk per dollar, and they price for it. The tradeoff is speed and flexibility — a hard money lender will fund a deal a bank will turn down, and they&apos;ll close in days rather than weeks.
      </p>

      <h2>What This Site Is Not</h2>
      <p>
        We are not a lender. We do not approve loans, set rates, or guarantee outcomes. We&apos;re an editorial guide that ranks lenders, surfaces deal-matched recommendations, and routes qualified borrowers to the right desk. Always read each lender&apos;s terms in full before signing.
      </p>
    </GuideLayout>
  )
}
