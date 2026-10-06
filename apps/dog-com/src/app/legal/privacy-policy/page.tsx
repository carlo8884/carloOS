import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Privacy Policy | Dog.com',
  description: 'Dog.com privacy policy — how we collect, use, and protect your data.',
  path: '/legal/privacy-policy',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://dog.com/' },
    { name: 'Privacy Policy', url: 'https://dog.com/legal/privacy-policy' },
  ],
})


export default function PrivacyPolicyPage() {
  const lastUpdated = 'October 2026'

  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <div className="px-container-sm sm:px-container py-16 max-w-content mx-auto">
      <nav aria-label="Breadcrumb" className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Privacy Policy</span>
      </nav>

      <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">Privacy Policy</h1>
      <p className="text-sm text-brand-text-light mb-10">Last updated: {lastUpdated}</p>

      <div className="carloOS-article">
        <h2>Who We Are</h2>
        <p>Dog.com is owned and operated by Bolton Properties, LLC. This privacy policy applies to dog.com and covers how we collect, use, and protect information from visitors to our site.</p>

        <h2>Information We Collect</h2>
        <h3>Information you provide</h3>
        <ul>
          <li><strong>Email address</strong> — when you submit it on a form. No newsletter is currently sent; addresses submitted to forms are used only to reply.</li>
          <li><strong>Contact information</strong> — if you contact us directly via email</li>
        </ul>

        <h3>Information collected automatically</h3>
        <ul>
          <li><strong>Usage data</strong> — pages visited, time on page, referring URL, browser type, device type</li>
          <li><strong>Cookies</strong> — session cookies for site functionality. Google Analytics is not currently connected.</li>
          <li><strong>IP address</strong> — for security and geographic analytics purposes</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To reply when you submit an address on a form. No newsletter is currently sent.</li>
          <li>To understand how the site is used and improve content</li>
          <li>To track affiliate link performance for product recommendations</li>
          <li>To prevent fraud and ensure site security</li>
        </ul>

        <h2>Email</h2>
        <p>No newsletter is currently sent. Addresses submitted to forms are used only to reply. We do not sell, rent, or share your email address with third parties for their marketing purposes.</p>

        <h2>Affiliate Links</h2>
        <p>Dog.com participates in affiliate programs including Amazon Associates and Chewy. Trupanion, Healthy Paws, and Embrace are not currently connected. When you click a link labeled with our affiliate disclosure and make a purchase, we earn a commission at no additional cost to you. Affiliate links do not affect our editorial rankings — see our <Link href="/editorial-standards">Editorial Standards</Link> for our independence policy and our <Link href="/legal/affiliate-disclosure">Affiliate Disclosure</Link> for the FTC-required statement.</p>

        <h2>Analytics</h2>
        <p>Google Analytics is not currently connected.</p>

        <h2>Cookies</h2>
        <p>We use essential cookies for site functionality (session management). Google Analytics is not currently connected. You can control cookies through your browser settings. Disabling cookies may affect site functionality.</p>

        <h2>Data Retention</h2>
        <p>Addresses submitted on forms are kept only as needed to reply. Google Analytics is not currently connected. We do not retain personal data beyond what is necessary for the purposes described above.</p>

        <h2>Your Rights</h2>
        <p>You may request access to, correction of, or deletion of your personal data by contacting us at privacy@dog.com. California residents have additional rights under CCPA, including the right to know what personal information is collected, the right to delete personal information, and the right to opt out of the sale of personal information (we do not sell personal information).</p>

        <h2>Children&apos;s Privacy</h2>
        <p>Dog.com is not directed at children under 13. We do not knowingly collect personal information from children under 13. If you believe we have collected such information, contact us and we will delete it.</p>

        <h2>Changes to This Policy</h2>
        <p>We may update this privacy policy periodically. We will note the date of the last update at the top of this page. Continued use of the site after changes constitutes acceptance of the updated policy.</p>

        <h2>Contact</h2>
        <p>Privacy questions: privacy@dog.com</p>
      </div>

      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/terms" className="text-brand-primary hover:underline">Terms of Use</Link>
        <Link href="/legal/affiliate-disclosure" className="text-brand-primary hover:underline">Affiliate Disclosure</Link>
        <Link href="/editorial-standards" className="text-brand-primary hover:underline">Editorial Standards</Link>
      </div>
    </div>
  </>
  )
}
