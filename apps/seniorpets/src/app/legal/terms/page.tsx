import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'seniorpets', title: 'Terms of Use | SeniorPetPharmacy', description: 'SeniorPetPharmacy terms of use.', path: '/legal/terms' })

export default function TermsPage() {
  return (
    <div className="px-container sm:px-container-sm py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <span className="text-brand-text-mid">Terms of Use</span>
      </nav>
      <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">Terms of Use</h1>
      <p className="text-sm text-brand-text-light mb-10">Last updated: May 2025</p>
      <div className="carloOS-article">
        <h2>Acceptance of Terms</h2>
        <p>By using SeniorPetPharmacy, you agree to these Terms of Use. If you do not agree, do not use the site.</p>
        <h2>Not a Substitute for Professional Veterinary Advice</h2>
        <p><strong>Important:</strong> All content on SeniorPetPharmacy is for educational and informational purposes only. Nothing on this site constitutes veterinary advice, diagnosis, or treatment. Always consult a licensed veterinarian for any health concerns about your pet. In an emergency, contact your veterinarian or emergency veterinary clinic immediately. SeniorPetPharmacy is not responsible for actions taken based on information found on this site.</p>
        <h2>Affiliate Disclosure</h2>
        <p>SeniorPetPharmacy participates in affiliate programs and earns commissions on qualifying purchases. This does not affect the editorial independence of our rankings and recommendations. See our <Link href="/legal/affiliate-disclosure">Affiliate Disclosure</Link> for the FTC-required statement and our <Link href="/editorial-standards">Editorial Standards</Link> for the independence policy.</p>
        <h2>Intellectual Property</h2>
        <p>All content on SeniorPetPharmacy — text, images, graphics, and code — is owned by Bolton Properties, LLC or its content contributors and is protected by copyright law. You may not reproduce, distribute, or create derivative works without express written permission.</p>
        <h2>User Conduct</h2>
        <p>You agree not to use SeniorPetPharmacy to: violate any applicable law; scrape, crawl, or index content without permission; attempt to gain unauthorized access to any system; or engage in any activity that interferes with the site&apos;s normal operation.</p>
        <h2>Disclaimer of Warranties</h2>
        <p>SeniorPetPharmacy is provided "as is" without warranties of any kind, express or implied. We do not warrant that the site will be error-free, uninterrupted, or free of viruses or other harmful components.</p>
        <h2>Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Bolton Properties, LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of SeniorPetPharmacy.</p>
        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of the State of New York, without regard to conflict of law principles.</p>
        <h2>Contact</h2>
        <p>Legal questions: legal@dog.com</p>
      </div>
      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>
        <Link href="/legal/affiliate-disclosure" className="text-brand-primary hover:underline">Affiliate Disclosure</Link>
        <Link href="/editorial-standards" className="text-brand-primary hover:underline">Editorial Standards</Link>
      </div>
    </div>
  )
}
