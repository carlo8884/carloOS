import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Editorial Standards — How We Create Content | Saddle.com',
  description: 'How Saddle.com researches, writes, and updates its content. Sources, affiliate independence, and corrections.',
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
      <p className="text-sm text-brand-text-light mb-10">How we create, source, and update content at Saddle.com</p>

      <div className="carloOS-article">
        <h2>What Saddle.com Is</h2>
        <p>Saddle.com is a consumer-facing reference site for saddles, tack, and equestrian equipment — saddle reviews, fit guides, leather care, bit and bridle selection, and buying guides. Articles are written by the Saddle.com editorial team and draw on publicly available sources: Society of Master Saddlers (SMS) inspection and fitting material, published Certified Saddle Fitter (CSF) reviewer notes, manufacturer specifications, established equestrian texts, and aggregated rider reports.</p>
        <p>Saddle.com is <strong>not</strong> a saddle-fitting practice and is not a substitute for an in-person fitting. For an actual saddle to be fit to an actual horse, please book a qualified saddle fitter — the SMS maintains a worldwide directory at mastersaddlers.co.uk.</p>

        <h2>How We Research and Write</h2>
        <ul>
          <li><strong>Sources are cited where it matters.</strong> Fit-check material draws on SMS reference. Saddle-comparison material draws on published CSF reviewer write-ups, manufacturer geometry data, and aggregated rider reports.</li>
          <li><strong>Current guidance.</strong> Where modern fitting practice has updated its consensus (girthing geometry, gullet width assessment, panel flocking vs foam), we follow current professional practice.</li>
          <li><strong>We say when evidence is thin.</strong> Tack design has genuine disagreements between schools of thought. Where the field is split, we say so.</li>
          <li><strong>Honest scope.</strong> We don&apos;t claim hands-on testing we haven&apos;t done. We are not a fitting practice. Saddle write-ups draw on manufacturer geometry, CSF reviewer notes, and aggregated rider reports rather than an in-house fitting bench.</li>
        </ul>

        <h2>Affiliate Independence</h2>
        <p>Saddle.com participates in affiliate programs (including Amazon Associates and tack-retailer programs). To keep editorial decisions clean of commercial pressure:</p>
        <ul>
          <li>Product rankings are made before affiliate links are added, not after.</li>
          <li>Commission rates do not determine which products are recommended.</li>
          <li>We include products in comparisons even when they pay no affiliate commission, when they are the best fit.</li>
          <li>We disclose affiliate relationships on every page that contains affiliate links.</li>
        </ul>

        <h2>Corrections</h2>
        <p>If you find a factual error or out-of-date guidance, email us with the specific claim and, where possible, a source for the correction. We aim to review correction requests within 5 business days. Substantive corrections are noted on the article and the &quot;Updated&quot; date is revised.</p>

        <h2>Saddle Fit Notice</h2>
        <p>Saddle.com content is general reference, not individual fitting advice. Every horse and every rider is different. Before buying or making significant changes to a saddle, please consult a qualified independent fitter. The SMS (Society of Master Saddlers) directory at mastersaddlers.co.uk is the best starting point.</p>
      </div>
    </div>
  )
}
