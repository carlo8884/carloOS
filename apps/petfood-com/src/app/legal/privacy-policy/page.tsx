import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Privacy Policy | PetFood.com',
  description: 'PetFood.com privacy policy — how we collect, use, and protect your data.',
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
      <p>PetFood.com is owned and operated by Bolton Properties, LLC. This page describes how we collect, use, and protect information from visitors. We respect your privacy and limit collection to what is necessary to operate the site.</p>

      <h2>Information We Collect</h2>
      <p>We collect minimal site-analytics data via Google Analytics (anonymized IP), and the email address you provide if you sign up for our newsletter. We do not sell or rent personal information.</p>

      <h2>Cookies</h2>
      <p>PetFood.com uses cookies for analytics and to remember non-essential preferences (e.g., dismissed banners). You can disable cookies in your browser settings without losing access to the site’s content.</p>

      <h2>Affiliate Disclosure</h2>
      <p>PetFood.com participates in affiliate programs. When you click an affiliate link and make a purchase, we may earn a commission at no additional cost to you. See our <Link href="/disclosure" className="text-brand-primary no-underline hover:underline">full affiliate disclosure</Link> for details.</p>

      <h2>Third-Party Services</h2>
      <p>We use third-party services (analytics, email, hosting) that may collect data per their own policies. Notable providers: Google (Analytics), Mailchimp (email), Vercel (hosting), Supabase (database). Each has its own published privacy policy.</p>

      <h2>Your Rights</h2>
      <p>You can unsubscribe from our newsletter at any time using the link in each email. To request that we delete data we hold about you, email the address in the site Disclosure page.</p>

      <h2>Contact</h2>
      <p>Questions about this policy: see <Link href="/disclosure" className="text-brand-primary no-underline hover:underline">/disclosure</Link>.</p>
</div>
    </div>
  )
}
