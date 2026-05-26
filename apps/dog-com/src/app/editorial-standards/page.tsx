import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Editorial Standards — How We Create and Review Content | Dog.com',
  description: 'Dog.com editorial standards. How we research, write, and review content. Our DVM review process, affiliate independence policy, and correction procedure.',
  path: '/editorial-standards',
})

export default function EditorialStandardsPage() {
  return (
    <div className="px-container sm:px-container-sm py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Editorial Standards</span>
      </nav>

      <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">Editorial Standards</h1>
      <p className="text-sm text-brand-text-light mb-10">How we create, review, and maintain content at Dog.com</p>

      <div className="carloOS-article">
        <h2>Our Mission</h2>
        <p>Dog.com exists to give dog owners the accurate, DVM-reviewed health information they need to make good decisions for their pets. We believe that better-informed dog owners lead to better outcomes for dogs — and that the internet has too much content optimized for search ranking rather than genuine usefulness.</p>

        <h2>DVM Review Process</h2>
        <p>All health content on Dog.com is reviewed by at least one licensed veterinarian before publication. Our veterinary reviewers include general practitioners and board-certified specialists in internal medicine, oncology, surgery, and emergency medicine.</p>
        <p>The review process includes:</p>
        <ul>
          <li>Verification of medical accuracy against current veterinary guidelines</li>
          <li>Review of cited studies and data sources</li>
          <li>Assessment of whether recommendations reflect current standard of care</li>
          <li>Final sign-off on content flagged with the "DVM Reviewed" badge</li>
        </ul>
        <p>Content with the "DVM Reviewed" badge has been through this process. Content without the badge (including some product reviews and general guides) is written by our expert team and does not carry DVM certification.</p>

        <h2>How We Write Content</h2>
        <p>Our editorial team prioritizes:</p>
        <ul>
          <li><strong>Accuracy over simplicity</strong> — we don&apos;t oversimplify complex medical topics to make them easier to write or read. If something is medically nuanced, we explain the nuance.</li>
          <li><strong>Current guidelines</strong> — we follow current veterinary guidelines (WSAVA, ACVIM, AVDC, etc.) rather than conventional wisdom that may be outdated</li>
          <li><strong>Evidence grading</strong> — we distinguish between high-evidence recommendations and those based on clinical consensus or expert opinion</li>
          <li><strong>Honest limitations</strong> — when evidence is limited or conflicting, we say so</li>
        </ul>

        <h2>Affiliate Independence Policy</h2>
        <p>Dog.com earns commissions through affiliate programs (Amazon Associates, Chewy, Trupanion, Healthy Paws, and others). Our editorial team operates independently of our affiliate relationships. This means:</p>
        <ul>
          <li>Products are ranked based on editorial merit — efficacy, quality, value, and genuine usefulness to dog owners</li>
          <li>Affiliate commission rates do not influence product rankings or recommendations</li>
          <li>We include products in reviews that pay no affiliate commission when they are the best option</li>
          <li>Advertisers do not pay for placement in editorial content</li>
          <li>We disclose affiliate relationships on all pages with affiliate links</li>
        </ul>
        <p>If you believe any content was influenced by commercial considerations, contact us at editorial@dog.com.</p>

        <h2>Corrections Policy</h2>
        <p>We take accuracy seriously and correct errors promptly. If you find a factual error in our content:</p>
        <ul>
          <li>Email editorial@dog.com with the specific error and, where possible, a source for the correction</li>
          <li>We review all correction requests within 5 business days</li>
          <li>Confirmed errors are corrected and the article&apos;s last-updated date is revised</li>
          <li>Significant corrections include a correction note at the bottom of the article</li>
        </ul>

        <h2>Content Updates</h2>
        <p>Veterinary medicine evolves. We review health content annually against current guidelines and update when significant changes occur. The "Updated" date on each article reflects the most recent substantial review.</p>

        <h2>Medical Emergency Disclaimer</h2>
        <p>Dog.com content is not a substitute for professional veterinary care. If your pet is experiencing a medical emergency, contact your veterinarian or emergency animal hospital immediately. In the United States, the ASPCA Animal Poison Control Center is available 24/7 at 888-426-4435 for poisoning emergencies.</p>

        <h2>Contact</h2>
        <p>Editorial questions: editorial@dog.com</p>
        <p>DVM reviewer inquiries: medical@dog.com</p>
        <p>Corrections: editorial@dog.com</p>
      </div>

      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>
        <Link href="/legal/terms" className="text-brand-primary hover:underline">Terms of Use</Link>
      </div>
    </div>
  )
}
