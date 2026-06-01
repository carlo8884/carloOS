import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'

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
      <div className="px-container-sm sm:px-container py-14">
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
