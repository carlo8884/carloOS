import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'hardmoneyloans',
  title: 'Privacy Policy',
  description: 'How HardMoneyLoans.com collects, uses, and shares personal information.',
  path: '/legal/privacy',
})

export default function Page() {
  return (
    <article className="px-container sm:px-container-sm py-16">
      <div className="mx-auto max-w-3xl carloOS-article">
        <h1 className="font-display text-4xl font-black tracking-tight mb-3">Privacy Policy</h1>
        <p>Last updated: January 2026.</p>

        <h2>Information We Collect</h2>
        <ul>
          <li>Quote request submissions: name, email, phone, loan parameters, state.</li>
          <li>Newsletter signups: email and source tag.</li>
          <li>Analytics: aggregated page views via Google Analytics (no PII).</li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>Relay quote requests to the lender you selected.</li>
          <li>Send the weekly market-update newsletter (opt-in only).</li>
          <li>Improve editorial content based on aggregated analytics.</li>
        </ul>

        <h2>Sharing</h2>
        <p>
          We share your quote-request information only with the lender you explicitly select. We do not sell email lists. We use Mailchimp (for email), Supabase (for storage), and Google Analytics (for aggregated metrics) — each subject to their own privacy practices.
        </p>

        <h2>Your Rights</h2>
        <p>
          You may request access, correction, or deletion of your data by emailing privacy@hardmoneyloans.com.
        </p>

        <h2>Children</h2>
        <p>
          This site is not directed at children under 13.
        </p>
      </div>
    </article>
  )
}
