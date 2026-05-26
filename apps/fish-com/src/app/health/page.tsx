import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Aquarium Health Guides — Disease, Chemistry & Disease | Fish.com', description: 'Aquarium health guides — the nitrogen cycle, water chemistry, fish disease identification and treatment.', path: '/health' })

const GUIDES = [
  { title: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained', badge: '⚡ Essential First Read', desc: 'Why most new tanks fail and how to prevent it' },
  { title: 'Aquarium Water Chemistry', href: '/water', desc: 'pH, ammonia, nitrite, nitrate, KH, GH — all parameters explained' },
  { title: 'Fish Disease Guide', href: '/health/fish-disease-guide', desc: 'Identify and treat ich, velvet, fin rot, dropsy' },
  { title: 'Ich Treatment Guide', href: '/health/ich-treatment', desc: 'The most common aquarium disease — complete treatment' },
  { title: 'New Tank Syndrome', href: '/health/new-tank-syndrome', desc: 'What it is and exactly how to fix it' },
  { title: 'Tank Setup Guide', href: '/setup', desc: 'Step-by-step first aquarium setup' },
]

export default function FishHealthPage() {
  return (
    <>
      <div className="bg-brand-dark px-container sm:px-container-sm py-12">
        <h1 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: 'clamp(26px, 4vw, 48px)' }}>Aquarium Health Library</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Water chemistry, disease identification, and the nitrogen cycle — everything that keeps your fish alive.</p>
      </div>
      <div className="px-container sm:px-container-sm py-12">
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
      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-10">
        <EmailCapture variant="section" siteId="fish-com" title="The Weekly Tank" subtitle="Water chemistry tips and fishkeeping guides every Thursday." source="health-hub" ctaText="Subscribe Free" perks={['🧪 Water chemistry', '🐠 Species guides', '🚫 No spam']} />
      </div>
    </>
  )
}
