import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petsupplies',
  title: 'Privacy Policy',
  description: 'PetSupplies.com privacy policy — what we collect, what we don\'t, and how to opt out.',
  path: '/legal/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="px-container sm:px-container-sm py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Privacy Policy</span>
      </nav>
      <h1 className="font-display font-black text-brand-dark text-4xl tracking-tight mb-3">
        Privacy Policy
      </h1>
      <p className="text-base text-brand-text-light mb-10">Last updated: 2026</p>
      <div className="carloOS-article">
        <h2>What We Collect</h2>
        <p>
          PetSupplies.com collects minimal data. Standard server logs (IP address, user agent,
          referring URL) are retained for 30 days for security and analytics purposes. Google
          Analytics 4 is used for aggregate traffic analytics — page views and section interest.
          Email addresses submitted to the newsletter are stored by our email service provider
          (Mailchimp) tagged with the subscription source.
        </p>
        <h2>What We Don&apos;t Do</h2>
        <ul>
          <li>We do not sell email addresses or browsing data to third parties.</li>
          <li>We do not use cross-site behavioral tracking beyond GA4 defaults.</li>
          <li>
            We do not require account creation to read the site. The newsletter is opt-in only.
          </li>
        </ul>
        <h2>Cookies</h2>
        <p>
          We use first-party cookies for Google Analytics 4 (analytics) and session state.
          Affiliate-program cookies are set when you click an outbound affiliate link — these are
          controlled by the destination retailer (Amazon, Chewy, etc.).
        </p>
        <h2>Newsletter Unsubscribe</h2>
        <p>
          Every email contains an unsubscribe link. You can also email us to request immediate
          removal.
        </p>
        <h2>Data Requests</h2>
        <p>
          CCPA and GDPR data-access and deletion requests can be submitted by email. We respond
          within 30 days.
        </p>
      </div>
    </div>
  )
}
