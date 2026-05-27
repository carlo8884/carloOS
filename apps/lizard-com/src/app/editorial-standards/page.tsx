import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Editorial Standards — How We Create Content | Lizard.com',
  description: 'How Lizard.com researches, writes, and updates its content. Sources, affiliate independence, and corrections.',
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
      <p className="text-sm text-brand-text-light mb-10">How we create, source, and update content at Lizard.com</p>

      <div className="carloOS-article">
        <h2>What Lizard.com Is</h2>
        <p>Lizard.com is a consumer-facing reference site for reptile and amphibian keepers — species profiles, husbandry guides, UVB lighting, enclosure setup, feeding, and health overviews. Articles are written by the Lizard.com editorial team and draw on publicly available sources: peer-reviewed reptile husbandry research, the Ferguson Zone framework, published Solarmeter 6.5 UVI measurements, ARAV (Association of Reptilian and Amphibian Veterinarians) reference material, manufacturer documentation, and established keeper-society care sheets.</p>
        <p>Lizard.com is <strong>not</strong> a veterinary practice. If your animal is sick, find an experienced exotics vet — the ARAV maintains a worldwide member directory at arav.org.</p>

        <h2>How We Research and Write</h2>
        <ul>
          <li><strong>Sources are cited where it matters.</strong> UVI numbers are referenced to published Solarmeter measurements. Temperature, humidity, and dietary parameters draw on Ferguson Zones, peer-reviewed husbandry literature, and zoological reference works.</li>
          <li><strong>Current guidance.</strong> Where the hobby has updated its consensus (e.g. compact UVB bulbs, sand impaction risk, fruit-based bearded-dragon diets), we follow the current evidence rather than legacy pet-store advice.</li>
          <li><strong>We say when evidence is thin.</strong> Plenty of reptile husbandry is still under-studied. When the evidence is contested, we say so.</li>
          <li><strong>Honest scope.</strong> We don&apos;t claim hands-on testing we haven&apos;t done. UVB-bulb and equipment write-ups draw on published spectroradiometric measurements, manufacturer specifications, and aggregated keeper feedback rather than a controlled in-house test rig.</li>
        </ul>

        <h2>Affiliate Independence</h2>
        <p>Lizard.com earns commissions through affiliate programs (including Amazon Associates). To keep editorial decisions clean of commercial pressure:</p>
        <ul>
          <li>Product rankings are made before affiliate links are added, not after.</li>
          <li>Commission rates do not determine which products are recommended.</li>
          <li>We include products in comparisons even when they pay no affiliate commission, when they are the best fit.</li>
          <li>We disclose affiliate relationships on every page that contains affiliate links.</li>
        </ul>

        <h2>Corrections</h2>
        <p>Reptile husbandry recommendations evolve as the field studies more species. If you find a factual error or out-of-date guidance, email us with the specific claim and, where possible, a source for the correction. We aim to review correction requests within 5 business days. Substantive corrections are noted on the article and the &quot;Updated&quot; date is revised.</p>

        <h2>Animal Health Notice</h2>
        <p>Lizard.com content is general reference, not individual veterinary advice. If your animal is acutely ill, contact an experienced exotics vet. The ARAV directory (arav.org) is the best starting point for finding a qualified reptile vet near you.</p>
      </div>

      <div className="mt-12 pt-8 border-t border-brand-border flex gap-6 text-sm">
        <Link href="/legal/privacy-policy" className="text-brand-primary hover:underline">Privacy Policy</Link>
        <Link href="/legal/terms" className="text-brand-primary hover:underline">Terms of Use</Link>
      </div>
    </div>
  )
}
