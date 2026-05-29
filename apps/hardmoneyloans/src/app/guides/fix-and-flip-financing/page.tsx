import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'
import { GuideLayout } from '../GuideLayout'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Fix-and-Flip Financing Guide',
  description: 'How hard money lenders structure fix-and-flip loans — purchase + rehab funding, ARV-based LTV, rehab draws, and how exit timing affects total cost.',
  path: '/guides/fix-and-flip-financing',
  type: 'article',
})

export default function Page() {
  return (
    <GuideLayout
      title="Fix-and-Flip Financing — The Investor's Guide"
      intro="Fix-and-flip is the canonical hard money use case: buy a distressed property, rehab it, and sell within 6–12 months. The way the loan is structured affects every dollar of profit."
    >
      <h2>The Two-Part Loan Structure</h2>
      <p>
        Most fix-and-flip loans cover two things: the purchase price (at some loan-to-value, or LTV) and the rehab budget (often 100% of the rehab, funded as draws). Lenders typically express this as a percentage of after-repair value (ARV):
      </p>
      <ul>
        <li><strong>Up to 90% of purchase</strong></li>
        <li><strong>Up to 100% of rehab</strong></li>
        <li><strong>Cap at 70%–75% of ARV</strong></li>
      </ul>
      <p>
        The ARV cap protects the lender if rehab overruns or the comp set softens. Smart investors run the numbers at the ARV cap, not the purchase + rehab math, because the lender will trim the loan if those two collide.
      </p>

      <h2>Rehab Draws — How the Money Flows</h2>
      <p>
        The rehab budget is funded through draws. The borrower completes a chunk of work, requests a draw, the lender (or an inspector) verifies progress, and the funds are released. Draws are the slowest part of a flip — sloppy paperwork or unverified scope can cost days.
      </p>
      <p>
        Lenders with established digital draw portals (Kiavi, Groundfloor) tend to be faster than relationship lenders for routine draws. For complex scopes, a relationship lender who&apos;ll get on the phone often beats a portal.
      </p>

      <h2>The Math That Matters</h2>
      <p>
        Run the deal at <strong>ARV × 70%</strong> minus rehab costs minus holding costs (loan interest, taxes, insurance, utilities) minus selling costs (~8%) minus your target profit. What&apos;s left is the maximum allowable offer (MAO). If your purchase price is over MAO, the deal doesn&apos;t pencil.
      </p>
      <p>
        Holding costs are where new investors go wrong. A 12-month loan at 11% with 2 points on a $300k purchase is roughly $39,000 in interest plus $6,000 in points. If your project ships in 6 months instead of 12, you save $19,500 — more than most rehab line items.
      </p>

      <h2>Which Lenders Are Strongest Here</h2>
      <p>
        Kiavi, RCN Capital, Lima One, Anchor Loans, and Groundfloor all fund fix-and-flip. They differ on:
      </p>
      <ul>
        <li><strong>Speed of draws</strong> — digital portals vs. relationship</li>
        <li><strong>Minimum credit score</strong> — typically 660-680</li>
        <li><strong>State coverage</strong> — Nevada, North Dakota, South Dakota, and Vermont are restricted by several lenders</li>
        <li><strong>Experience tiers</strong> — first-timers usually pay 0.5–1 point more than 5+ deal investors</li>
      </ul>
    </GuideLayout>
  )
}
