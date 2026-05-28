import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Editorial Standards — How We Create Content | Fish.com',
  description: 'How Fish.com researches, writes, and updates its content. Sources, affiliate independence, and corrections.',
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
      <p className="text-sm text-brand-text-light mb-10">How we create, source, and update content at Fish.com</p>

      <div className="carloOS-article">
        <h2>What Fish.com Is</h2>
        <p>Fish.com is a consumer-facing reference site for the aquarium hobby — species profiles, tank setup, water chemistry, fish health, and equipment comparisons. Articles are written by the Fish.com editorial team and draw on publicly available sources: peer-reviewed ichthyology and aquaculture literature, professional aquarium-society material (such as the AGA and IAPLC), manufacturer documentation, hobbyist-society care sheets, and reputable industry reporting.</p>
        <p>Fish.com is <strong>not</strong> a veterinary practice and is not a substitute for one. If a fish is sick and you need diagnostic advice for a specific animal, consult an aquatic veterinarian (the World Aquatic Veterinary Medical Association lists practitioners worldwide).</p>

        <h2>How We Research and Write</h2>
        <ul>
          <li><strong>Sources are cited where it matters.</strong> When we name a parameter (pH range, hardness, temperature), we lean on published species data (<a href="https://fishbase.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">FishBase</a>, peer-reviewed habitat surveys, established care sheets) rather than forum lore.</li>
          <li><strong>Current guidance.</strong> Where consensus exists (nitrogen cycle, fish-in vs fishless cycling, quarantine protocols), we follow it rather than out-of-date advice.</li>
          <li><strong>We say when evidence is thin.</strong> The hobby has plenty of contested topics (planted-tank dosing strategies, marine refugium design, certain disease treatments). When the evidence is mixed, we say so.</li>
          <li><strong>Honest scope.</strong> We don&apos;t claim hands-on testing we haven&apos;t done. Equipment write-ups draw on manufacturer specifications, published reviews, and aggregated keeper feedback.</li>
        </ul>

        <h2>Affiliate Independence</h2>
        <p>Fish.com earns commissions through affiliate programs (including Amazon Associates and Chewy). To keep editorial decisions clean of commercial pressure:</p>
        <ul>
          <li>Product rankings are made before affiliate links are added, not after.</li>
          <li>Commission rates do not determine which products are recommended.</li>
          <li>We include products in comparisons even when they pay no affiliate commission, when they are the best fit.</li>
          <li>We disclose affiliate relationships on every page that contains affiliate links.</li>
        </ul>

        <h2>Corrections</h2>
        <p>Fishkeeping practice changes (cycling protocols, ich treatment, planted-tank dosing). If you find a factual error or out-of-date guidance, email us with the specific claim and, where possible, a source for the correction. We aim to review correction requests within 5 business days. Substantive corrections are noted on the article and the &quot;Updated&quot; date is revised.</p>

        <h2>Fish Health Notice</h2>
        <p>Fish.com content is general reference, not individual veterinary advice. If a fish is acutely ill, contact an aquatic veterinarian or your local aquarium store with an experienced staff member. The World Aquatic Veterinary Medical Association (wavma.org) maintains a worldwide directory of fish-experienced vets.</p>
      </div>
    </div>
  )
}
