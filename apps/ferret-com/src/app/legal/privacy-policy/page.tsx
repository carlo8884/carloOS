import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Privacy Policy | Ferret.com',
  description: 'Ferret.com privacy policy — how we collect, use, and protect your data.',
  path: '/legal/privacy-policy',
})

export default function PrivacyPolicyPage() {
  const lastUpdated = 'June 2026'

  return (
    <div className="px-container-sm sm:px-container py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Privacy Policy</span>
      </nav>

      <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm text-brand-text-light mb-10">Last updated: {lastUpdated}</p>

      <div className="carloOS-article">
        <h2>Who We Are</h2>
        <p>Ferret.com is owned and operated by Bolton Properties, LLC. This privacy policy applies to ferret.com and covers how we collect, use, and protect information from visitors to our site.</p>

        <h2>Information We Collect</h2>
        <h3>Information you provide</h3>
        <ul>
          <li><strong>Email address</strong> — when you subscribe to our newsletter via any email capture form on the site</li>
          <li><strong>Contact information</strong> — if you contact us directly via email</li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li><strong>Usage data</strong> — pages visited, time on page, referring URL, browser type, device type</li>
          <li><strong>Cookies</strong> — session cookies for site functionality; analytics cookies (Google Analytics) for traffic measurement</li>
          <li><strong>IP address</strong> — for security and geographic analytics purposes</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To send the newsletter you subscribed to (email subscribers only)</li>
          <li>To understand how the site is used and improve content</li>
          <li>To track affiliate link performance for product recommendations</li>
          <li>To prevent fraud and ensure site security</li>
        </ul>

        <h2>Email Subscriptions</h2>
        <p>If you subscribe to our newsletter, we use a third-party email service provider to manage email delivery. Your email address is transferred to and stored by that provider in accordance with their privacy policy. You can unsubscribe at any time via the unsubscribe link in any email. We do not sell, rent, or share your email address with third parties for their marketing purposes.</p>

        <h2>Affiliate Links</h2>
        <p>Ferret.com participates in affiliate programs including Amazon Associates, Chewy, and other pet-supply retailers. When you click a link labeled with our affiliate disclosure and make a purchase, we earn a commission at no additional cost to you. Affiliate links do not affect our editorial rankings — see our <Link href="/legal/affiliate-disclosure">Affiliate Disclosure</Link> for the FTC-required statement.</p>

        <h2>Analytics</h2>
        <p>We use Google Analytics to understand site traffic. Google Analytics uses cookies and collects anonymized usage data. You can opt out of Google Analytics tracking using the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.</p>

        <h2>Cookies</h2>
        <p>We use essential cookies for site functionality (session management) and analytics cookies (Google Analytics). You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p>

        <h2>Data Retention</h2>
        <p>Email subscription data is retained until you unsubscribe. Analytics data is retained for 26 months per Google Analytics defaults. We do not retain personal data beyond what is necessary for the purposes described above.</p>

        <h2>Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data by contacting us at privacy@ferret.com. California residents have additional rights under CCPA, including the right to know what personal information is collected, the right to delete personal information, and the right to opt out of the sale of personal information (we do not sell personal information).</p>

        <h2>Children&apos;s Privacy</h2>
        <p>Ferret.com is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, contact us and we will delete it.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this privacy policy periodically. We will note the date of the last update at the top of this page. Continued use of the site after changes constitutes acceptance of the updated policy.</p>

        <h2>Contact</h2>
        <p>Privacy questions: privacy@ferret.com</p>
      </div>

      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/terms" className="text-brand-primary hover:underline">Terms of Use</Link>
        <Link href="/legal/affiliate-disclosure" className="text-brand-primary hover:underline">Affiliate Disclosure</Link>
        <Link href="/disclosure" className="text-brand-primary hover:underline">Disclosure</Link>
      </div>
    </div>
  )
}
