import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Product Reviews 2025 — Expert Tested & Ranked | Dog.com', description: 'Dog product reviews tested by experts. Pet insurance, dog food, flea prevention, beds, crates — ranked with honest editorial criteria.', path: '/reviews' })

const REVIEWS = [
  { title: 'Best Pet Insurance 2025', desc: 'Trupanion, Healthy Paws, Embrace ranked by actual payout rates', href: '/reviews/best-pet-insurance', badge: '🏆 Most Important' },
  { title: 'Best Dry Dog Food 2025', desc: 'Royal Canin, Purina Pro Plan, Hill\'s ranked by WSAVA compliance', href: '/reviews/best-dry-dog-food', badge: '🥩 Nutrition' },
  { title: 'Best Flea & Tick Prevention 2025', desc: 'Simparica Trio, Bravecto, NexGard — efficacy and safety compared', href: '/reviews/best-flea-tick-prevention', badge: '🛡️ Prevention' },
  { title: 'Best Dog Beds 2025', desc: 'Orthopedic, elevated, and washable beds tested over 6 months', href: '/reviews/best-dog-beds', badge: '😴 Comfort' },
  { title: 'Best Dog Crates 2025', desc: 'Wire, heavy duty, airline-approved, and furniture style ranked', href: '/reviews/best-dog-crates', badge: '🏠 Housing' },
]

export default function DogReviewsPage() {
  return (
    <>
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <div className="flex items-center gap-2.5 mb-4"><span className="w-6 h-0.5 bg-brand-primary" /><span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Product Reviews</span></div>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-4" style={{ fontSize: 'clamp(28px, 5vw, 50px)' }}>Dog Product Reviews 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">Expert-tested reviews with honest editorial criteria — we rank what actually works, not what has the best marketing budget.</p>
      </div>
      <div className="px-container sm:px-container-sm py-12">
        <div className="grid sm:grid-cols-2 gap-5 max-w-content-wide mx-auto">
          {REVIEWS.map(r => (
            <Link key={r.href} href={r.href} className="block bg-brand-white border border-brand-border rounded-xl p-6 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200">
              {r.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{r.badge}</div>}
              <div className="font-display font-bold text-brand-dark text-base mb-1.5">{r.title}</div>
              <div className="text-xs text-brand-text-light leading-relaxed">{r.desc}</div>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center">
          <p className="text-sm text-brand-text-light mb-2">Affiliate Disclosure: We earn commissions on purchases. Rankings are editorially independent.</p>
          <Link href="/editorial-standards" className="text-xs font-semibold text-brand-primary no-underline hover:underline">Read our editorial standards →</Link>
        </div>
      </div>
      <div className="bg-brand-primary-pale border-t border-brand-border px-container sm:px-container-sm py-10">
        <EmailCapture variant="section" siteId="dog-com" title="Free Dog Health Tips" subtitle="Product picks, health guides, and DVM-written advice every Tuesday." source="reviews-index" ctaText="Subscribe Free" perks={['🏆 Expert picks', '⚠️ What to avoid', '🚫 No spam']} />
      </div>
    </>
  )
}
