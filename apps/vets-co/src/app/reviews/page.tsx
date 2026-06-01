import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, SchemaScript, StockImage } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pet Product Reviews — Honest Comparisons | Vets.co', description: 'Pet product reviews from a veterinarian\'s perspective. Pet insurance, telehealth services ranked using public payout data and insurer disclosures.', path: '/reviews' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Reviews', url: 'https://vets.co/reviews' },
  ],
})


const REVIEWS = [
  { title: 'Best Pet Insurance 2025 — Owner Reference', desc: 'Which plans actually pay when your pet needs $5,000 of care at 11pm', href: '/reviews/best-pet-insurance', badge: '🏆 Most Important' },
  { title: 'Best Pet Telehealth 2025', desc: 'Vetster, AskVet, Chewy Connect compared by availability and credentials', href: '/telehealth', badge: '📱 Convenient Care' },
]

export default function VetsReviewsPage() {
  return (
    <>
      <SchemaScript schema={breadcrumbSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-12">
        <h1 className="font-display font-bold text-white tracking-tight mb-3" style={{ fontSize: 'clamp(24px, 4vw, 44px)' }}>Pet Product Reviews — Honest Comparisons</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Ranked from a veterinarian&apos;s perspective — what actually matters when your pet needs care.</p>
      </div>
      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="vets-co:category-reviews" aspect="16:9" variant="wide" priority />
      </div>
      <div className="px-container-sm sm:px-container pt-12 pb-2">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-4 leading-tight">How these reviews are decided</h2>
          <p className="text-base text-brand-text-light leading-relaxed mb-4">
            The products covered on this hub are the ones where a bad choice is expensive and hard to reverse: pet insurance you commit to before your pet is sick, and telehealth services you reach for at the worst possible moment. Rather than rank them on marketing or sign-up bonuses, our comparisons lean on the evidence an owner can actually verify &mdash; published payout and complaint data, insurer policy disclosures, the credentials of the people answering a telehealth call, and the fine print that determines whether a claim is paid or denied. The goal is to surface what matters when care is needed, not what is easiest to advertise.
          </p>
          <p className="text-base text-brand-text-light leading-relaxed mb-4">
            The two anchor comparisons here approach the same problem &mdash; affording and accessing care &mdash; from different angles. Our <Link href="/reviews/best-pet-insurance" className="text-brand-primary font-medium hover:underline">best pet insurance reference</Link> looks at which plans hold up when a pet needs several thousand dollars of care at eleven at night, weighing reimbursement structure, exclusions, and the gap between an advertised price and a real claim. The <Link href="/telehealth" className="text-brand-primary font-medium hover:underline">pet telehealth comparison</Link> evaluates the services that connect you to a veterinarian remotely, judged on availability, the credentials behind the advice, and where virtual care genuinely substitutes for an in-person visit and where it does not.
          </p>
          <p className="text-base text-brand-text-light leading-relaxed">
            Everything here is written from a clinical perspective by the Vets.co editorial team and sourced from cited references and public disclosures. Vets.co does not sell insurance or accept payment for favorable placement; rankings reflect the data, not a commercial relationship. These pages are meant to help you make a confident decision and then have a sharper conversation with your own veterinarian &mdash; not to replace professional judgment about your individual pet.
          </p>
        </div>
      </div>
      <div className="px-container-sm sm:px-container pb-12 pt-4">
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
      <div className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-10">
        <EmailCapture variant="section" siteId="vets-co" title="Free Pet Health Tips" subtitle="research-based guidance every Tuesday." source="reviews-hub" ctaText="Subscribe Free" perks={['✓ Research-based', '📬 Weekly']} />
      </div>
    </>
  </>
  )
}
