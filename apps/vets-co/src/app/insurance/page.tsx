import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pet Insurance Education — How It Works | Vets.co', description: 'Plain-English, editorial pet insurance education from a clinical perspective: how coverage works, what is covered, when to enroll, and reading the fine print.', path: '/insurance' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Insurance', url: 'https://vets.co/insurance' },
  ],
})


const GUIDES = [
  { category: 'The Basics', items: [{ title: 'How Pet Insurance Works', href: '/insurance/how-pet-insurance-works', badge: '📘 Start Here' }, { title: 'What Pet Insurance Covers', href: '/insurance/what-pet-insurance-covers' }, { title: 'Pre-Existing Conditions Explained', href: '/insurance/pre-existing-conditions' }] },
  { category: 'Choosing & Timing', items: [{ title: 'When to Enroll Your Pet', href: '/insurance/when-to-enroll' }, { title: 'Reading the Fine Print', href: '/insurance/reading-the-fine-print' }, { title: 'Deductibles & Reimbursement', href: '/insurance/deductibles-reimbursement' }] },
  { category: 'Risk & Cost', items: [{ title: 'Breed-Specific Insurance Risk', href: '/insurance/breed-specific-risk' }, { title: 'Wellness Plans vs. Insurance', href: '/insurance/wellness-plans-vs-insurance' }] },
]

export default function VetsInsuranceHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <div className="flex items-center gap-2.5 mb-4"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Pet Insurance Education</span></div>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}>Pet Insurance, Explained</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">A clinical-perspective, jargon-free guide to how pet insurance actually works — what it covers, when to enroll, how deductibles and reimbursement function, and how to read a policy before you sign. Editorial only; we do not sell insurance.</p>
      </div>
      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="vets-co:insurance-hero" priority aspect="16:9" variant="wide" />
      </div>
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
        </div>
      </div>
      <div className="px-container-sm sm:px-container pb-14 pt-4">
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
        <EmailCapture variant="section" siteId="vets-co" title="Pet Insurance Decision Guide" subtitle="Get our plain-English insurance checklist by email." source="insurance-hub" ctaText="Send Me the Guide" perks={['✓ No jargon', '📬 One email', '🐾 Vet perspective']} />
      </div>
    </>
  </>
  )
}
