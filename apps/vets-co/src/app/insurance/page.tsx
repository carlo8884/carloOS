import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pet Insurance Education — How It Works | Vets.co', description: 'Plain-English, editorial pet insurance education from a clinical perspective: how coverage works, what is covered, when to enroll, and reading the fine print.', path: '/insurance' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Insurance', url: 'https://vets.co/insurance' },
  ],
})


const GUIDES = [
  { category: 'The Basics', items: [{ title: 'How Pet Insurance Works', href: '/insurance/how-pet-insurance-works', badge: 'Start Here' }, { title: 'What Pet Insurance Covers', href: '/insurance/what-pet-insurance-covers' }, { title: 'Pre-Existing Conditions Explained', href: '/insurance/pre-existing-conditions' }] },
  { category: 'Choosing & Timing', items: [{ title: 'When to Enroll Your Pet', href: '/insurance/when-to-enroll' }, { title: 'Reading the Fine Print', href: '/insurance/reading-the-fine-print' }, { title: 'Deductibles & Reimbursement', href: '/insurance/deductibles-reimbursement' }] },
  { category: 'Risk & Cost', items: [{ title: 'Breed-Specific Insurance Risk', href: '/insurance/breed-specific-risk' }, { title: 'Wellness Plans vs. Insurance', href: '/insurance/wellness-plans-vs-insurance' }] },
]

const insuranceGuides = GUIDES.flatMap((s) => s.items)
const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Pet Insurance Education Guides',
  numberOfItems: insuranceGuides.length,
  itemListElement: insuranceGuides.map((g, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: g.title,
    url: `https://vets.co${g.href}`,
  })),
}
const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function VetsInsuranceHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      <HubMasthead
        eyebrow="Pet Insurance Education"
        title="Pet Insurance, Explained"
        intro="A clinical-perspective, jargon-free guide to how pet insurance actually works — what it covers, when to enroll, how deductibles and reimbursement function, and how to read a policy before you sign. Editorial only; we do not sell insurance."
        manifestKey="vets-co:insurance-hero"
        fallbackKey="vets-co:hero"
        imageAlt="Insurance paperwork and a calculator on a desk"
        primaryCta={{ href: '/reviews/best-pet-insurance', label: 'Compare insurance plans' }}
        secondaryCta={{ href: '/insurance/how-pet-insurance-works', label: 'Start with the basics' }}
      />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <span className="text-brand-text-mid">Insurance</span>
      </nav>
      <div className="px-container-sm sm:px-container pt-14 pb-2">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-brand-dark mb-4 leading-tight">What this hub covers</h2>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            Pet insurance is one of the few financial decisions an owner makes years before they know whether they will need it, and the industry&apos;s language is built to obscure rather than clarify. This hub is a structured, jargon-free education in how coverage actually works &mdash; written from a clinical perspective so the explanations connect the policy mechanics to the real veterinary situations they are meant to cover. It is deliberately editorial: Vets.co does not sell insurance, take commissions on enrollments, or rank insurers for payment, so the guidance here is about understanding the product, not steering you toward one.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mb-4">
            The pages are organized to be read in sequence, from foundations to the finer trade-offs. Start with <Link href="/insurance/how-pet-insurance-works" className="text-brand-primary font-medium hover:underline">how pet insurance works</Link>, which explains the reimbursement model and the four levers &mdash; premium, deductible, reimbursement rate, and annual limit &mdash; that define every policy. From there, timing is the decision most owners get wrong, so <Link href="/insurance/when-to-enroll" className="text-brand-primary font-medium hover:underline">when to enroll your pet</Link> explains why premiums and exclusions both work against waiting. Before signing anything, <Link href="/insurance/reading-the-fine-print" className="text-brand-primary font-medium hover:underline">reading the fine print</Link> walks through the clauses &mdash; waiting periods, bilateral exclusions, condition-specific limits &mdash; that quietly decide whether a future claim is paid.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed">
            The remaining guides go deeper on the issues that separate a good policy from a costly one: what is and is not covered, how pre-existing conditions are treated, how deductibles and reimbursement interact, how breed shapes risk and price, and how wellness plans differ from true insurance. Everything is written and maintained by the Vets.co editorial team and sourced from cited references and insurer disclosures. The aim is to leave you able to compare any two policies on your own terms and to bring informed questions to your veterinarian about the conditions your specific pet is most likely to face.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mt-4">
            For quick definitions of any term you hit along the way, see the <Link href="/glossary" className="text-brand-primary font-medium hover:underline">pet health &amp; insurance glossary</Link>.
          </p>
          <p className="text-base text-brand-text-mid leading-relaxed mt-4">
            Ready to compare carriers? See our editorial comparison of the 11 major insurers: <Link href="/reviews/best-pet-insurance" className="text-brand-primary font-semibold hover:underline">Best Pet Insurance 2026 — How the 11 Major Carriers Compare</Link>. To narrow the field by the coverage features you care about, start with the <Link href="/tools/insurance-finder" className="text-brand-primary font-semibold hover:underline">Pet Insurance Coverage Finder</Link> — it filters carriers to options that may fit your priorities (no quotes, no rankings). Still weighing whether to buy at all? The <Link href="/tools/pet-insurance-worth-it-calculator" className="text-brand-primary font-semibold hover:underline">&ldquo;is pet insurance worth it?&rdquo; calculator</Link> turns a quote into a breakeven cost level and frames insurance honestly as catastrophic-cost protection.
          </p>
        </div>
      </div>

      {/* Featured: carrier comparison + funnel entry */}
      <div className="px-container-sm sm:px-container pt-4 pb-2">
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
          <Link href="/reviews/best-pet-insurance" className="block bg-brand-dark rounded-xl p-6 no-underline hover:opacity-90 transition-opacity">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Carrier Comparison</div>
            <div className="font-display font-bold text-white text-base leading-snug mb-2">Best Pet Insurance 2026 — 11 Carriers Compared</div>
            <p className="text-sm text-white/60 m-0 leading-relaxed">Trupanion, Healthy Paws, Embrace, and 8 more — ranked on reimbursement model, claims speed, and policy terms by the Vets.co editorial team.</p>
          </Link>
          <Link href="/pet-insurance" className="block bg-brand-primary-pale border border-brand-primary rounded-xl p-6 no-underline hover:border-brand-primary-dark transition-colors">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Get Personalized Quotes</div>
            <div className="font-display font-bold text-brand-dark text-base leading-snug mb-2">Compare Quotes for Your Pet</div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">See plans and pricing for your pet&apos;s breed, age, and location. Enroll before your first vet visit — exclusions apply from day one.</p>
          </Link>
        </div>
      </div>

      <div className="px-container-sm sm:px-container pb-14 pt-8">
        {GUIDES.map(section => (
          <div key={section.category} className="mb-10">
            <h2 className="font-display text-xl font-bold text-brand-dark mb-4 pb-3 border-b border-brand-border">{section.category}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.items.map(item => (
                <Link key={item.href} href={item.href} className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary transition-colors">
                  {(item as any).badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{(item as any).badge}</div>}
                  <div className="font-display font-bold text-brand-dark text-sm">{item.title}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture variant="section" siteId="vets-co" title="Pet Insurance Decision Guide" subtitle="Get our plain-English insurance checklist by email." source="insurance-hub" ctaText="Send Me the Guide" perks={['No jargon', 'One email', 'Vet perspective']} />
      </div>
    </>
  </>
  )
}
