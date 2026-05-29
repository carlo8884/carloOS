import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dogpicture',
  title: 'Privacy Policy | DogPicture.com',
  description: 'How DogPicture.com handles personal data.',
  path: '/legal/privacy-policy',
})

export default function PrivacyPolicyPage() {
  return (
    <div className="px-container-sm sm:px-10 py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Privacy Policy</span>
      </nav>
      <h1 className="font-display font-black text-brand-text-dark text-3xl tracking-tight mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-brand-text-light mb-10">Last updated: May 2026</p>

      <div className="carloOS-article">
        <h2>What we collect</h2>
        <ul>
          <li><strong>Account & order data</strong>: email, shipping address (for physical products), order history.</li>
          <li><strong>Uploaded photos</strong>: the source images you submit for portrait generation.</li>
          <li><strong>Generated portraits</strong>: the AI-rendered output we deliver to you.</li>
          <li><strong>Usage analytics</strong>: page views, conversion events via Google Analytics 4 (anonymized IP).</li>
        </ul>

        <h2>How we use it</h2>
        <ul>
          <li>To generate, fulfill, and ship your portraits.</li>
          <li>To send order confirmations and download links via email.</li>
          <li>To send a weekly inspiration newsletter, only if you opt in.</li>
          <li>To prevent fraud and abuse.</li>
        </ul>

        <h2>Who we share it with</h2>
        <p>We share the minimum necessary data with these service providers:</p>
        <ul>
          <li><strong>Stripe</strong> — payment processing</li>
          <li><strong>OpenAI</strong> — AI image generation (your source photo + prompt)</li>
          <li><strong>Printify</strong> — print-on-demand fulfillment (your shipping address + generated portrait)</li>
          <li><strong>Mailchimp</strong> — newsletter delivery (email only, if opted in)</li>
          <li><strong>Resend</strong> — transactional email (your email + download link)</li>
          <li><strong>Supabase</strong> — encrypted database + file storage</li>
        </ul>
        <p>We do not sell your data. We do not run cross-site ad-targeting.</p>

        <h2>Your rights</h2>
        <p>
          You can request a copy or deletion of your data at any time by emailing
          <a href="mailto:privacy@dogpicture.com"> privacy@dogpicture.com</a>. EU/UK residents
          have GDPR rights; California residents have CCPA rights.
        </p>

        <h2>Cookies</h2>
        <p>
          We use essential cookies for checkout sessions and an analytics cookie for GA4. No
          third-party advertising cookies.
        </p>

        <h2>Retention</h2>
        <p>
          Source photos are retained for 90 days after delivery, then deleted. Generated portraits
          and order records are retained for 7 years to comply with tax law.
        </p>

        <h2>Contact</h2>
        <p>Privacy questions: <a href="mailto:privacy@dogpicture.com">privacy@dogpicture.com</a></p>
      </div>

      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/terms" className="text-brand-primary hover:underline">Terms of Use</Link>
        <Link href="/legal/refund-policy" className="text-brand-primary hover:underline">Refund Policy</Link>
      </div>
    </div>
  )
}
