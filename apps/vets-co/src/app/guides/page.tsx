import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Vet Visit & Cost-of-Care Guides | Vets.co', description: 'Practical guides to the cost of veterinary care, what to expect at the vet, emergency vs. ER visits, and getting the most from every appointment.', path: '/guides' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Guides', url: 'https://vets.co/guides' },
  ],
})


const SECTIONS = [
  { category: 'Cost of Care', items: [{ title: 'What Vet Care Really Costs', href: '/guides/cost-of-veterinary-care', badge: '💵 Start Here' }, { title: 'How to Afford Vet Care', href: '/guides/how-to-afford-vet-care' }, { title: 'Emergency Vet Costs Explained', href: '/guides/emergency-vet-costs' }] },
  { category: 'The Vet Visit', items: [{ title: 'What to Expect at the Vet', href: '/guides/what-to-expect-at-the-vet' }, { title: 'Questions to Ask Your Vet', href: '/guides/questions-to-ask-your-vet' }, { title: 'Choosing a Veterinarian', href: '/guides/choosing-a-veterinarian' }] },
  { category: 'Urgent vs. Routine', items: [{ title: 'ER vs. Urgent Care vs. Regular Vet', href: '/guides/er-vs-urgent-care' }, { title: 'When to Go to the Vet', href: '/guides/when-to-go-to-the-vet' }] },
]

export default function VetsGuidesHubPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <div className="flex items-center gap-2.5 mb-4"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Owner Guides</span></div>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}>Vet Visit & Cost-of-Care Guides</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Straight answers to the practical questions every pet owner faces: what care costs, how to pay for it, when a problem is an emergency, and how to get the most from every veterinary visit.</p>
      </div>
      <div className="px-container-sm sm:px-container py-14">
        {SECTIONS.map(section => (
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
        <EmailCapture variant="section" siteId="vets-co" title="Free Pet Owner Newsletter" subtitle="Practical, vet-informed guidance every week." source="guides-hub" ctaText="Subscribe Free" perks={['✓ Practical', '📬 Weekly', '🐾 Owner-focused']} />
      </div>
    </>
  </>
  )
}
