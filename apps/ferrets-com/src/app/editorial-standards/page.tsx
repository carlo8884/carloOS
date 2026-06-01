import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferrets-com',
  title: 'Editorial Standards | Ferrets.com',
  description: 'Ferrets.com editorial standards — how we research, source, and review our content.',
  path: '/editorial-standards',
})

export default function EditorialStandardsPage() {
  const lastUpdated = 'June 2026'
  return (
    <div className="px-container-sm sm:px-container py-16 max-w-content mx-auto">
      <nav className="text-xs text-brand-text-light flex gap-2 mb-8">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid">Editorial Standards</span>
      </nav>

      <h1 className="font-display font-black text-brand-dark text-3xl tracking-tight mb-2">Editorial Standards</h1>
      <p className="text-sm text-brand-text-light mb-10">Last updated: {lastUpdated}</p>

      <div className="carloOS-article">
      <p>Ferrets.com is a reference publication. The editorial standards below explain how we research, source, fact-check, and disclose interests. They are the same standards that govern every CarloOS-family site.</p>

      <h2>Sources We Cite</h2>
      <p>Primary sources first. We prefer peer-reviewed veterinary literature, regulatory bodies (FDA CVM, AAFCO, state veterinary boards), recognized professional associations (AVMA, AAHA, WSAVA, AAEP, AEMV), breed and species clubs with documented health programs, and original manufacturer disclosures. Secondary sources are used only as pointers to the primary source.</p>

      <h2>Authorship</h2>
      <p>Articles are bylined by the Ferrets.com editorial team. Where a specific reviewer or contributor has subject-matter expertise, that credential is named in the byline. We do not impersonate clinical credentials our authors do not hold. “Editorial team” is our default attribution.</p>

      <h2>Fact-Checking</h2>
      <p>Every article is reviewed against its cited sources before publication. Numbers, dosages, and clinical claims are checked against primary sources. Where evidence is mixed or evolving, we say so rather than overstate certainty.</p>

      <h2>Editorial Independence</h2>
      <p>We accept affiliate revenue (see <Link href="/disclosure" className="text-brand-primary no-underline hover:underline">/disclosure</Link>) but never accept paid placement that would alter editorial rankings on a buyer guide. We do not accept gifts of products in exchange for favorable coverage. Rankings on our review pages reflect the editorial team’s judgment based on the criteria stated on each page.</p>

      <h2>Corrections</h2>
      <p>If we publish a substantive error of fact, we correct it and note the change at the bottom of the affected page. Material corrections are summarized in the page’s “Last updated” date.</p>

      <h2>Conflicts of Interest</h2>
      <p>Ferrets.com does not own equity in any brand it reviews. Affiliate commercial relationships with named vendors are disclosed on every affected page and centrally on <Link href="/disclosure" className="text-brand-primary no-underline hover:underline">/disclosure</Link>.</p>

      <h2>Contact</h2>
      <p>Feedback on this policy or a specific article: see <Link href="/disclosure" className="text-brand-primary no-underline hover:underline">/disclosure</Link>.</p>
</div>
    </div>
  )
}
