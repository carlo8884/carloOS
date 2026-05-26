import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Best Western Saddles 2025 — By Discipline & Budget | Saddle.com', description: 'Western saddles ranked by discipline — barrel racing, roping, trail, reining, and general use. Expert tested with price guides and brand comparisons.', path: '/western' })

const DISCIPLINES = [
  { title: 'Barrel Racing Saddles', desc: 'High rise forks, free swing stirrups, lightweight construction — what actually matters', href: '/western/barrel-racing', badge: 'Performance' },
  { title: 'Roping Saddles', desc: 'Horn strength, seat depth, tree construction for heading and heeling', href: '/western/roping', badge: 'Working' },
  { title: 'Trail Saddles', desc: 'All-day comfort, weight distribution, storage options', href: '/western/trail', badge: 'Leisure' },
  { title: 'Reining Saddles', desc: 'Slick seat, free motion, correct balance for spins and slides', href: '/western/reining', badge: 'Performance' },
  { title: 'General Purpose / Ranch', desc: 'Versatile working saddles for ranch and casual riding', href: '/western/ranch', badge: 'Versatile' },
]

const TOP_BRANDS = [
  { name: 'Circle Y', specialty: 'Trail & pleasure', priceRange: '$600–2,500' },
  { name: 'Martin Saddlery', specialty: 'Barrel racing', priceRange: '$1,200–4,000' },
  { name: 'Big Horn', specialty: 'Budget trail', priceRange: '$300–800' },
  { name: 'Cactus Saddlery', specialty: 'Roping & ranch', priceRange: '$800–2,500' },
  { name: 'Billy Cook', specialty: 'General western', priceRange: '$700–2,000' },
]

export default function WesternSaddlesPage() {
  return (
    <>
      <div className="bg-brand-dark px-container sm:px-container-sm py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,1) 2px, rgba(255,255,255,1) 3px)' }} aria-hidden="true" />
        <div className="relative z-10">
          <div className="flex items-center gap-2.5 mb-5"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Western Saddles</span></div>
          <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 52px)' }}>Western Saddles — By Discipline</h1>
          <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">The right western saddle depends entirely on what you do with it. Barrel saddles are wrong for roping. Trail saddles are wrong for reining. Here&apos;s how to navigate the market by discipline.</p>
        </div>
      </div>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {DISCIPLINES.map(d => (
            <Link key={d.href} href={d.href} className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{d.badge}</div>
              <div className="font-display font-bold text-brand-dark text-lg mb-2">{d.title}</div>
              <div className="text-sm text-brand-text-light leading-relaxed">{d.desc}</div>
            </Link>
          ))}
        </div>
        <h2 className="font-display text-2xl font-bold text-brand-dark mb-5 pb-3 border-b border-brand-border">Top Western Saddle Brands</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {TOP_BRANDS.map(b => (
            <div key={b.name} className="bg-brand-surface border border-brand-border rounded-lg p-4">
              <div className="font-display font-bold text-brand-dark text-base mb-1">{b.name}</div>
              <div className="text-xs text-brand-text-light mb-1">{b.specialty}</div>
              <div className="text-xs font-bold text-brand-primary">{b.priceRange}</div>
            </div>
          ))}
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[{ title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', desc: 'Check fit for horse and rider' }, { title: 'Buying Used', href: '/guides/used-saddle-buying-guide', desc: 'Inspection checklist before purchase' }, { title: 'English Saddles', href: '/english', desc: 'Compare English disciplines' }].map(l => (
            <Link key={l.href} href={l.href} className="block bg-brand-white border border-brand-border rounded-lg p-4 no-underline hover:border-brand-primary transition-colors">
              <div className="font-display font-bold text-brand-dark text-sm mb-1">{l.title}</div>
              <div className="text-xs text-brand-text-light">{l.desc}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-12">
        <EmailCapture variant="section" siteId="saddle-com" title="Free Western Saddle Buying Guide" subtitle="Brand reviews and market intelligence." source="western-hub" ctaText="Get Free Guide" perks={['🏇 Discipline-specific advice', '💰 Market pricing', '🚫 No spam']} />
      </div>
    </>
  )
}
