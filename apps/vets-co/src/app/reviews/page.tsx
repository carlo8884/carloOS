import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pet Product Reviews — Honest Comparisons | Vets.co', description: 'Pet insurance and telehealth services ranked using public payout data, insurer disclosures, and contract analysis.', path: '/reviews' })

const REVIEWS = [
  { title: 'Best Pet Insurance 2025 — Owner Reference', desc: 'Which plans actually pay when your pet needs $5,000 of care at 11pm', href: '/reviews/best-pet-insurance', badge: '🏆 Most Important' },
  { title: 'Best Pet Telehealth 2025', desc: 'Vetster, AskVet, Chewy Connect compared by availability and credentials', href: '/telehealth', badge: '📱 Convenient Care' },
]

export default function VetsReviewsPage() {
  return (
    <>
      <div className="bg-brand-dark px-container sm:px-container-sm py-12">
        <h1 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}>Pet Product Reviews — Honest Comparisons</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Ranked on payout data, contract terms, and what actually matters when your pet needs care.</p>
      </div>
      <div className="px-container sm:px-container-sm py-12">
        <div className="grid sm:grid-cols-2 gap-5 max-w-content-wide mx-auto">
          {REVIEWS.map(r => (
            <Link key={r.href} href={r.href} className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card transition-all">
              {r.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{r.badge}</div>}
              <div className="font-display font-bold text-brand-dark text-base mb-1.5">{r.title}</div>
              <div className="text-xs text-brand-text-light">{r.desc}</div>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-10">
        <EmailCapture variant="section" siteId="vets-co" title="Free Pet Health Tips" subtitle="research-based guidance every Tuesday." source="reviews-hub" ctaText="Subscribe Free" perks={['✓ Research-based', '📬 Weekly']} />
      </div>
    </>
  )
}
