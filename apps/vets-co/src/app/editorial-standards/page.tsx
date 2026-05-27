import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Editorial Standards — How We Create Content | Vets.co',
  description: 'How Vets.co researches, writes, and updates its content. Sources, affiliate independence, and corrections.',
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
      <p className="text-sm text-brand-text-light mb-10">How we create, source, and update content at Vets.co</p>

      <div className="carloOS-article">
        <h2>What Vets.co Is</h2>
        <p>Vets.co is a consumer-facing reference site for pet owners — specialist directories, breed-health guides, preventive-care reference material, insurance comparisons, and telehealth overviews. Articles are written by the Vets.co editorial team and draw on publicly available sources: AVMA, AAHA, and ACVIM guidance; published peer-reviewed veterinary literature; specialist-college reference material; insurer disclosures and public payout data; and reputable industry reporting.</p>
        <p>Vets.co is <strong>not</strong> a veterinary practice. Our content is general reference, not individual veterinary advice for a specific animal. If you need diagnostic guidance for your pet, please consult your own veterinarian.</p>

        <h2>How We Research and Write</h2>
        <ul>
          <li><strong>Sources are cited where it matters.</strong> Breed-health content draws on Morris Animal Foundation cohort data, breed-club health surveys, and the AVMA / ACVIM / AAHA literature. Insurance content draws on published policy documents and aggregated payout data.</li>
          <li><strong>Current guidance.</strong> Where consensus has updated (vaccine intervals, spay/neuter timing for large breeds, NSAID monitoring), we follow current professional guidance rather than the older version.</li>
          <li><strong>We say when evidence is thin.</strong> Plenty of veterinary topics are still under-studied or contested. Where the field is split, we say so.</li>
          <li><strong>Honest scope.</strong> We don&apos;t claim a medical-review process we don&apos;t run. Articles are written by the editorial team and grounded in cited sources, not signed off by a licensed clinician for individual animals.</li>
        </ul>

        <h2>Affiliate Independence</h2>
        <p>Vets.co earns commissions through affiliate programs (including pet-insurance referral programs and telehealth services). To keep editorial decisions clean of commercial pressure:</p>
        <ul>
          <li>Product rankings are made before affiliate links are added, not after.</li>
          <li>Commission rates do not determine which products are recommended.</li>
          <li>We include products in comparisons even when they pay no affiliate commission, when they are the best fit.</li>
          <li>We disclose affiliate relationships on every page that contains affiliate links.</li>
        </ul>

        <h2>Corrections</h2>
        <p>Veterinary recommendations evolve. If you find a factual error or out-of-date guidance, email us with the specific claim and, where possible, a source for the correction. We aim to review correction requests within 5 business days. Substantive corrections are noted on the article and the &quot;Updated&quot; date is revised.</p>

        <h2>Medical Emergency Notice</h2>
        <p>Vets.co content is not a substitute for veterinary care. If your pet is experiencing a medical emergency, contact your veterinarian or an emergency animal hospital immediately. In the United States, the ASPCA Animal Poison Control Center is available 24/7 at 888-426-4435 for suspected poisoning.</p>
      </div>
    </div>
  )
}
