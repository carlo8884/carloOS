import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript, StockImage } from '@carloOS/ui'
import { Diseases, RESERVED_HEALTH_SLUGS } from '../../data/diseases'

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Aquarium Health Guides — Disease, Chemistry & Disease | Fish.com', description: 'Aquarium health guides — the nitrogen cycle, water chemistry, fish disease identification and treatment.', path: '/health' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Health', url: 'https://fish.com/health' },
  ],
})


const GUIDES = [
  { title: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained', badge: '⚡ Essential First Read', desc: 'Why most new tanks fail and how to prevent it' },
  { title: 'Aquarium Water Chemistry', href: '/water-parameters', desc: 'pH, ammonia, nitrite, nitrate, KH, GH — all parameters explained' },
  { title: 'Fish Disease Guide', href: '/health/fish-disease-guide', desc: 'Identify and treat ich, velvet, fin rot, dropsy' },
  { title: 'Ich Treatment Guide', href: '/health/ich-treatment', desc: 'The most common aquarium disease — complete treatment' },
  { title: 'New Tank Syndrome', href: '/health/new-tank-syndrome', desc: 'What it is and exactly how to fix it' },
  { title: 'Tank Setup Guide', href: '/setup', desc: 'Step-by-step first aquarium setup' },
]

export default function FishHealthPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-12">
        <h1 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>Aquarium Health Library</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Water chemistry, disease identification, and the nitrogen cycle — everything that keeps your fish alive.</p>
      </div>
      <div className="px-container-sm sm:px-container pt-8">
        <StockImage manifestKey="fish-com:category-health" aspect="16:9" variant="wide" priority />
      </div>
      <div className="px-container-sm sm:px-container py-12">
        <div className="grid sm:grid-cols-2 gap-4 max-w-content-wide mx-auto">
          {GUIDES.map(g => (
            <Link key={g.href} href={g.href} className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary transition-colors">
              {g.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{g.badge}</div>}
              <div className="font-display font-bold text-brand-dark text-sm mb-1">{g.title}</div>
              <div className="text-xs text-brand-text-light">{g.desc}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture variant="section" siteId="fish-com" title="The Weekly Tank" subtitle="Water chemistry tips and fishkeeping guides every Thursday." source="health-hub" ctaText="Subscribe Free" perks={['🧪 Water chemistry', '🐠 Species guides', '🚫 No spam']} />
      </div>
      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Fish Health Topics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="bacterial-infections" href="/health/bacterial-infections" className="text-sm text-brand-primary no-underline hover:underline">Bacterial Infections</Link>
        <Link key="columnaris" href="/health/columnaris" className="text-sm text-brand-primary no-underline hover:underline">Columnaris</Link>
        <Link key="dropsy-treatment" href="/health/dropsy-treatment" className="text-sm text-brand-primary no-underline hover:underline">Dropsy Treatment</Link>
        <Link key="fin-rot" href="/health/fin-rot" className="text-sm text-brand-primary no-underline hover:underline">Fin Rot</Link>
        <Link key="fish-disease-guide" href="/health/fish-disease-guide" className="text-sm text-brand-primary no-underline hover:underline">Fish Disease Guide</Link>
        <Link key="fish-lice-anchor-worm" href="/health/fish-lice-anchor-worm" className="text-sm text-brand-primary no-underline hover:underline">Fish Lice Anchor Worm</Link>
        <Link key="fish-stress-and-immunity" href="/health/fish-stress-and-immunity" className="text-sm text-brand-primary no-underline hover:underline">Fish Stress and Immunity</Link>
        <Link key="gill-flukes" href="/health/gill-flukes" className="text-sm text-brand-primary no-underline hover:underline">Gill Flukes</Link>
        <Link key="ich-treatment" href="/health/ich-treatment" className="text-sm text-brand-primary no-underline hover:underline">Ich Treatment</Link>
        <Link key="medicating-aquarium-fish" href="/health/medicating-aquarium-fish" className="text-sm text-brand-primary no-underline hover:underline">Medicating Aquarium Fish</Link>
        <Link key="new-tank-syndrome" href="/health/new-tank-syndrome" className="text-sm text-brand-primary no-underline hover:underline">New Tank Syndrome</Link>
        <Link key="nitrogen-cycle-explained" href="/health/nitrogen-cycle-explained" className="text-sm text-brand-primary no-underline hover:underline">Nitrogen Cycle Explained</Link>
        <Link key="pop-eye" href="/health/pop-eye" className="text-sm text-brand-primary no-underline hover:underline">Pop Eye</Link>
        <Link key="swim-bladder-disease" href="/health/swim-bladder-disease" className="text-sm text-brand-primary no-underline hover:underline">Swim Bladder Disease</Link>
        <Link key="velvet-disease" href="/health/velvet-disease" className="text-sm text-brand-primary no-underline hover:underline">Velvet Disease</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
      <section className="border-t border-brand-border bg-brand-white px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-2">Disease Reference Catalog</h2>
        <p className="text-xs text-brand-text-light max-w-content-wide mb-4">25 common aquarium fish diseases with symptoms, diagnostic approach, treatment ladder, and prevention. Sourced from Noga, Roberts, WAVMA, UF/IFAS, and WOAH references.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2 max-w-content-wide">
          {Diseases.filter(d => !RESERVED_HEALTH_SLUGS.has(d.slug)).map(d => (
            <Link key={d.slug} href={`/health/${d.slug}`} className="text-sm text-brand-primary no-underline hover:underline">{d.name}</Link>
          ))}
        </div>
      </section>
</>
  </>
  )
}
