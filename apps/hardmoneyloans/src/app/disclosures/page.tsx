import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Disclosures',
  description: 'FTC affiliate disclosures, advertising relationships, and consumer notices for HardMoneyLoans.com.',
  path: '/disclosures',
})

export default function Page() {
  return (
    <article className="px-container sm:px-container-sm py-16">
      <div className="mx-auto max-w-3xl carloOS-article">
        <h1 className="font-display text-4xl font-black tracking-tight mb-3">Disclosures</h1>

        <h2>Affiliate Disclosure (FTC)</h2>
        <p>
          HardMoneyLoans.com participates in affiliate referral programs operated by private lenders, mortgage bankers, and third-party affiliate networks. When you click an outbound link on this site and submit a quote request or fund a loan with a lender, we may earn a referral fee.
        </p>
        <p>
          Referral fees do not affect editorial rankings. Compensation does not affect rank order. Lenders we rank highly are ranked highly because of independent editorial criteria — not because they pay us more.
        </p>

        <h2>Not a Lender</h2>
        <p>
          HardMoneyLoans.com is not a lender. We do not approve loans, issue commitments, or guarantee outcomes. Every loan application, approval, and funding decision is made by the lender — not by this site.
        </p>

        <h2>Not Financial Advice</h2>
        <p>
          Content on this site is general information only. It is not legal, tax, or financial advice. Consult a licensed professional before making borrowing decisions.
        </p>

        <h2>Lead Submission Consent</h2>
        <p>
          When you submit a quote request, you explicitly consent to be contacted by the lender you selected. We relay your contact information directly to the lender&apos;s intake desk. You may withdraw consent at any time by contacting the lender directly.
        </p>

        <h2>Data Handling</h2>
        <p>
          Submitted quote requests are stored in our Supabase database, transmitted over HTTPS, and accessed only by authorized HardMoneyLoans.com staff and the lender you selected. See our Privacy Policy for full details.
        </p>
      </div>
    </article>
  )
}
