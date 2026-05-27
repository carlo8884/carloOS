import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Editorial Standards — How We Create Content | Dog.com',
  description: 'How Dog.com researches, writes, and updates its content, plus our affiliate independence policy and corrections process.',
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
      <p className="text-sm text-brand-text-light mb-10">How we create, source, and update content at Dog.com</p>

      <div className="carloOS-article">
        <h2>What Dog.com Is</h2>
        <p>Dog.com is a consumer-facing reference site about dogs — breed profiles, health overviews, nutrition guidance, product comparisons, and training basics. Articles are written by the Dog.com editorial team and draw on publicly available sources: peer-reviewed veterinary research, professional veterinary organisations (such as the WSAVA, AVMA, ACVIM, and AVDC), manufacturer documentation, and reputable industry reporting.</p>
        <p>Dog.com is <strong>not</strong> a veterinary practice and is not a substitute for one. Our articles are not individually authored or signed off by a licensed veterinarian. If you need medical advice for a specific animal, please consult your own vet.</p>

        <h2>How We Research and Write</h2>
        <ul>
          <li><strong>Sources are cited where it matters.</strong> When a recommendation reflects a published guideline or study, we name the guideline or study so you can verify it yourself.</li>
          <li><strong>Current guidance.</strong> Where consensus guidance exists (WSAVA nutrition, AAHA preventive care, VOHC dental, etc.) we follow it rather than folk wisdom.</li>
          <li><strong>We say when evidence is thin.</strong> If a topic is contested or under-studied, we say so instead of pretending certainty.</li>
          <li><strong>Honest scope.</strong> We don&apos;t claim hands-on testing we haven&apos;t done. Product write-ups are based on published reviews, manufacturer specifications, ingredient analysis, and aggregated owner feedback.</li>
        </ul>

        <h2>Affiliate Independence</h2>
        <p>Dog.com earns commissions through affiliate programs (including Amazon Associates, Chewy, Trupanion, and Healthy Paws). To keep editorial decisions clean of commercial pressure:</p>
        <ul>
          <li>Product rankings are made before affiliate links are added, not after.</li>
          <li>Commission rates do not determine which products are recommended.</li>
          <li>We include products in comparisons even when they pay no affiliate commission, when they are the best fit.</li>
          <li>We disclose affiliate relationships on every page that contains affiliate links.</li>
        </ul>

        <h2>Corrections</h2>
        <p>If you find a factual error, email us with the specific claim and, where possible, a source for the correction. We aim to review correction requests within 5 business days. Substantive corrections are noted on the article and the &quot;Updated&quot; date is revised.</p>

        <h2>Content Updates</h2>
        <p>Veterinary recommendations evolve. We re-read health and nutrition articles periodically and update them when the underlying guidance changes. The &quot;Updated&quot; date on each article reflects the most recent substantive review.</p>

        <h2>Medical Emergency Notice</h2>
        <p>Dog.com content is not a substitute for veterinary care. If your dog is experiencing a medical emergency, contact your veterinarian or an emergency animal hospital immediately. In the United States, the ASPCA Animal Poison Control Center is available 24/7 at 888-426-4435 for suspected poisoning.</p>
      </div>

      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>
        <Link href="/legal/terms" className="text-brand-primary hover:underline">Terms of Use</Link>
      </div>
    </div>
  )
}
