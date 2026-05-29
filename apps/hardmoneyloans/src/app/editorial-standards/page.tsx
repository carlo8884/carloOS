import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Editorial Standards',
  description: 'How HardMoneyLoans.com ranks lenders, sources data, and handles conflicts of interest.',
  path: '/editorial-standards',
})

export default function Page() {
  return (
    <article className="px-container sm:px-container-sm py-16">
      <div className="mx-auto max-w-3xl carloOS-article">
        <h1 className="font-display text-4xl font-black tracking-tight mb-3">Editorial Standards</h1>
        <p>
          HardMoneyLoans.com is an independent editorial site for real estate investors. We rank private lenders, surface deal-matched recommendations, and route quote requests directly to the lender each borrower selects.
        </p>

        <h2>Conflict of Interest Disclosure</h2>
        <p>
          We earn referral fees when readers connect with lenders through our platform. Rankings are editorial and independent of compensation — a lender does not improve its score by paying us, and we do not exclude lenders that decline to partner.
        </p>
        <p>
          Lender programs change frequently. We update each profile quarterly based on the lender&apos;s public marketing pages. If a fact in our profile is materially out of date, email us and we&apos;ll correct it within 5 business days.
        </p>

        <h2>How We Rank</h2>
        <p>The CarloOS editorial score (1.0–10.0) blends:</p>
        <ul>
          <li>Rate competitiveness vs the lender&apos;s peer set</li>
          <li>Loan product depth (fix-and-flip, DSCR, bridge, multifamily, new construction)</li>
          <li>State coverage and licensing posture</li>
          <li>Transparency of pricing and program details</li>
          <li>Borrower experience tier sensitivity (first-timer vs experienced)</li>
          <li>Operating history (year founded, cumulative origination volume)</li>
          <li>Independent borrower reviews and known issue patterns</li>
        </ul>

        <h2>Data Sources</h2>
        <p>
          Every program detail in our lender profiles is sourced from the lender&apos;s public marketing pages or widely reported industry coverage. We do not fabricate program details, and we do not publish data marked confidential by a lender. Rate ranges are floors and ceilings — not personalized quotes.
        </p>

        <h2>Not Financial Advice</h2>
        <p>
          Content on this site is for general information only. We do not provide legal, tax, or financial advice. Loan approval, terms, and rates are determined by each lender. Consult a licensed professional before making borrowing decisions.
        </p>

        <h2>Contact</h2>
        <p>
          Editorial corrections, lender program updates, or comments: editorial@hardmoneyloans.com.
        </p>
      </div>
    </article>
  )
}
