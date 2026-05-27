import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pet Health Library — Sourced Guides | Vets.co', description: 'Complete pet health guides drawing on AVMA, ACVIM, and AAHA guidance. Emergency signs, breed health, preventive care, and specialist guidance.', path: '/health' })

const GUIDES = [
  { category: 'Emergency', items: [{ title: '15 Signs Your Pet Needs Emergency Care', href: '/health/emergency-signs', badge: '🚨 Must Read' }, { title: 'ASPCA Poison Control: 888-426-4435', href: 'tel:8884264435', badge: '☎️ Save This' }] },
  { category: 'Breed Health', items: [{ title: 'Golden Retriever Health Guide', href: '/breeds/golden-retriever-health' }, { title: 'Labrador Retriever Health', href: '/breeds/labrador-health' }, { title: 'French Bulldog Health', href: '/breeds/french-bulldog-health' }, { title: 'German Shepherd Health', href: '/breeds/german-shepherd-health' }] },
  { category: 'Finding Care', items: [{ title: 'Find a Veterinary Specialist', href: '/find-a-vet', badge: '🔍 Directory' }, { title: 'Best Pet Telehealth 2025', href: '/telehealth' }, { title: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' }] },
]

export default function VetsHealthHubPage() {
  return (
    <>
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <div className="flex items-center gap-2.5 mb-4"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Pet Health Library</span></div>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}>Pet Health Library</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Emergency guides, breed health, specialist directories, and insurance comparisons — all drawing on current AVMA, AAHA, and ACVIM guidance.</p>
      </div>
      <div className="px-container sm:px-container-sm py-14">
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
      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-10">
        <EmailCapture variant="section" siteId="vets-co" title="Free Pet Health Newsletter" subtitle="research-based health alerts every Tuesday." source="health-hub" ctaText="Subscribe Free" perks={['✓ Research-based', '📬 Weekly', '🐾 All species']} />
      </div>
    </>
  )
}
