import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Terms of Use',
  description: 'Terms governing use of HardMoneyLoans.com.',
  path: '/legal/terms',
})

export default function Page() {
  return (
    <article className="px-container sm:px-container-sm py-16">
      <div className="mx-auto max-w-3xl carloOS-article">
        <h1 className="font-display text-4xl font-black tracking-tight mb-3">Terms of Use</h1>
        <p>Last updated: January 2026.</p>

        <h2>Acceptance</h2>
        <p>By using this site you agree to these terms. If you do not agree, do not use the site.</p>

        <h2>Editorial Use Only</h2>
        <p>
          Content on HardMoneyLoans.com is for general information only. Nothing here is legal, tax, or financial advice. We are not a lender, broker, or licensed advisor. All loan terms and approvals are determined by the lender, not by this site.
        </p>

        <h2>No Guarantee</h2>
        <p>
          We make no guarantee of accuracy, completeness, timeliness, or fitness for purpose. Rate ranges, program details, and licensing notes change frequently and may be out of date.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, HardMoneyLoans.com and its operators are not liable for any direct, indirect, incidental, or consequential damages arising from use of this site.
        </p>

        <h2>Affiliate Compensation</h2>
        <p>
          We earn referral fees when readers connect with lenders through our platform. See our Disclosures and Editorial Standards pages for the full conflict-of-interest policy.
        </p>

        <h2>Contact</h2>
        <p>legal@hardmoneyloans.com</p>
      </div>
    </article>
  )
}
