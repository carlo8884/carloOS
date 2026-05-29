import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'
import { GuideLayout } from '../GuideLayout'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'DSCR Loans vs Hard Money — Side-by-Side',
  description: 'How DSCR rental loans differ from short-term hard money on rate, term, LTV, qualification, and use case. When to use each.',
  path: '/guides/dscr-vs-hard-money',
  type: 'article',
})

export default function Page() {
  return (
    <GuideLayout
      title="DSCR Loans vs Hard Money — A Side-by-Side Comparison"
      intro="DSCR rental loans and hard money loans are both asset-based products for investors, but they solve different problems. The right pick depends on holding period, property condition, and exit strategy."
    >
      <h2>Quick Comparison</h2>
      <p>The cleanest way to think about this:</p>
      <ul>
        <li><strong>Hard money</strong> — short-term, rehab-ready, fast close, higher rate.</li>
        <li><strong>DSCR</strong> — long-term (30-year), stabilized property, slower close, lower rate.</li>
      </ul>

      <h2>Hard Money — Profile</h2>
      <ul>
        <li><strong>Term:</strong> 6–24 months</li>
        <li><strong>Rate:</strong> 8%–13.5%</li>
        <li><strong>LTV:</strong> Up to 90% purchase + 100% rehab, capped at 70–75% ARV</li>
        <li><strong>Qualification:</strong> Asset-first; minimum 660 credit typical; entity (LLC) friendly</li>
        <li><strong>Use case:</strong> Fix-and-flip, bridge, distressed acquisition</li>
        <li><strong>Speed:</strong> 7–21 days to close</li>
      </ul>

      <h2>DSCR Rental — Profile</h2>
      <ul>
        <li><strong>Term:</strong> 30 years (typical), some 5/1 and 7/1 ARMs</li>
        <li><strong>Rate:</strong> 7%–9.5%</li>
        <li><strong>LTV:</strong> Up to 80% purchase, 70–75% cash-out refi</li>
        <li><strong>Qualification:</strong> Property cash flow (DSCR ratio); 660–680 credit; no W-2 / no tax returns required</li>
        <li><strong>Use case:</strong> Long-term rental hold, BRRRR exit, portfolio expansion</li>
        <li><strong>Speed:</strong> 25–45 days to close</li>
      </ul>

      <h2>When They Overlap</h2>
      <p>
        Several lenders — Kiavi, Lima One, Civic, CrossCountry — offer both products under one roof. If you&apos;re running BRRRR, this matters: underwriting and servicing systems are already familiar with your borrower profile when you swap from hard money into the DSCR refinance.
      </p>
      <p>
        For a clean buy-and-hold acquisition of a stabilized property, skip hard money entirely and go straight to a DSCR loan. The rate and term advantage is large enough that it nearly always wins versus a bridge + refi structure.
      </p>

      <h2>The Decision Framework</h2>
      <p>Ask three questions:</p>
      <ol>
        <li><strong>Is the property stabilized (rent-ready) at acquisition?</strong> If yes — DSCR. If no — hard money, then DSCR.</li>
        <li><strong>How long will I hold it?</strong> Under 18 months — hard money or short-term bridge. Over 18 months — DSCR.</li>
        <li><strong>Do I need to close in under 14 days?</strong> If yes — hard money. DSCR cannot match that timeline.</li>
      </ol>
    </GuideLayout>
  )
}
