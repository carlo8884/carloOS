import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'ferret-com', title: 'Terms of Use | Ferret.com', description: 'Ferret.com terms of use.', path: '/legal/terms' })

export default function TermsPage() {
  return (
    <div className="px-container-sm sm:px-container py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <span className="text-brand-text-mid">Terms of Use</span>
      </nav>
      <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">Terms of Use</h1>
      <p className="text-sm text-brand-text-light mb-10">Last updated: June 2026</p>
      <div className="carloOS-article">
        <h2>Acceptance of Terms</h2>
        <p>By using Ferret.com, you agree to these Terms of Use. If you do not agree, do not use the site.</p>
        <h2>Not a Substitute for Professional Veterinary Advice</h2>
        <p><strong>Important:</strong> All content on Ferret.com is for educational and informational purposes only. Nothing on this site constitutes veterinary advice, diagnosis, or treatment. Always consult a licensed veterinarian — ideally one experienced with exotic mammals — for any health concerns about your ferret. In an emergency, contact your veterinarian or an emergency veterinary clinic immediately. Ferret.com is not responsible for actions taken based on information found on this site.</p>
        <h2>Affiliate Disclosure</h2>
        <p>Ferret.com participates in affiliate programs and earns commissions on qualifying purchases. This does not affect the editorial independence of our rankings and recommendations. See our <Link href="/legal/affiliate-disclosure">Affiliate Disclosure</Link> for the FTC-required statement.</p>
        <h2>Intellectual Property</h2>
        <p>All content on Ferret.com — text, images, graphics, and code — is owned by Bolton Properties, LLC or its content contributors and is protected by copyright law. You may not reproduce, distribute, or create derivative works without express written permission.</p>
        <h2>User Conduct</h2>
        <p>You agree not to use Ferret.com to: violate any applicable law; scrape, crawl, or index content without permission; attempt to gain unauthorized access to any system; or engage in any activity that interferes with the site&apos;s normal operation.</p>
        <h2>Disclaimer of Warranties</h2>
        <p>Ferret.com is provided "as is" without warranties of any kind, express or implied. We do not warrant that the site will be error-free, uninterrupted, or free of viruses or other harmful components.</p>
        <h2>Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Bolton Properties, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of Ferret.com.</p>
        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of the State of New York, without regard to conflict of law principles.</p>
        <h2>Contact</h2>
        <p>Legal questions: legal@ferret.com</p>
      </div>
      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>
        <Link href="/legal/affiliate-disclosure" className="text-brand-primary hover:underline">Affiliate Disclosure</Link>
        <Link href="/disclosure" className="text-brand-primary hover:underline">Disclosure</Link>
      </div>
    </div>
  )
}
