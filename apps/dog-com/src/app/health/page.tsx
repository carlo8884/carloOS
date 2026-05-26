import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Health Library — 50+ DVM-Reviewed Guides | Dog.com', description: 'Complete dog health guides. Breed-specific conditions, emergency signs, dental care, senior dog care, symptoms guide — all DVM-reviewed.', path: '/health' })

const SECTIONS = [
  { category: '🚨 Emergency', items: [{ title: '15 Dog Symptoms to Never Ignore', href: '/health/dog-symptoms-guide', badge: 'Essential' }, { title: 'Find an Emergency Vet', href: '/find-a-vet' }] },
  { category: '🐕 Breed Health Guides', items: [{ title: 'Golden Retriever Health', href: '/health/golden-retriever-health', badge: '60%+ cancer rate' }, { title: 'Labrador Retriever Health', href: '/health/labrador-health' }, { title: 'French Bulldog Health', href: '/health/french-bulldog-health', badge: 'BOAS · IVDD' }, { title: 'German Shepherd Health', href: '/health/german-shepherd-health', badge: 'DM · GDV' }] },
  { category: '🦷 Preventive Care', items: [{ title: 'Dog Dental Care Guide', href: '/health/dog-dental-care' }, { title: 'Senior Dog Care Guide', href: '/health/senior-dog-care' }, { title: 'Dog Vaccination Guide', href: '/health/dog-vaccinations' }, { title: 'Heartworm Prevention', href: '/health/heartworm-prevention' }] },
  { category: '💊 Treatments & Products', items: [{ title: 'Best Flea & Tick Prevention', href: '/reviews/best-flea-tick-prevention' }, { title: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food' }, { title: 'Best Pet Insurance 2025', href: '/reviews/best-pet-insurance' }] },
]

export default function DogHealthHubPage() {
  return (
    <>
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <div className="flex items-center gap-2.5 mb-4"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Dog Health Library</span></div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}>Dog Health — DVM-Reviewed</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">50+ health guides reviewed by licensed veterinarians. Breed-specific conditions, emergency protocols, preventive care, and honest product comparisons.</p>
      </div>
      <div className="px-container sm:px-container-sm py-14">
        {SECTIONS.map(section => (
          <div key={section.category} className="mb-10">
            <h2 className="font-display text-xl font-bold text-brand-dark mb-4 pb-3 border-b border-brand-border">{section.category}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {section.items.map(item => (
                <Link key={item.href} href={item.href} className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors">
                  {(item as any).badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-1.5">{(item as any).badge}</div>}
                  <div className="font-display font-semibold text-brand-dark text-sm">{item.title}</div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-10">
        <EmailCapture variant="section" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written breed health guides and health alerts every Tuesday." source="health-hub" ctaText="Subscribe Free" perks={['✓ DVM-reviewed', '📬 Weekly', '🐾 Breed-specific']} />
      </div>
    </>
  )
}
