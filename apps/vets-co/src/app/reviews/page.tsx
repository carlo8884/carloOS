import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, DirectoryPlacesCta } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pet Product Reviews — Honest Comparisons | Vets.co', description: 'Pet product reviews from a veterinarian\'s perspective. Pet insurance, telehealth services ranked using public payout data and insurer disclosures.', path: '/reviews' })

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Reviews', url: 'https://vets.co/reviews' },
  ],
})


const REVIEWS = [
  { title: 'Best Pet Insurance 2026 — Owner Reference', desc: 'Which plans actually pay when your pet needs $5,000 of care at 11pm', href: '/reviews/best-pet-insurance', badge: 'Most Important' },
  { title: 'Best Pet Telehealth 2026', desc: 'Vetster, AskVet, Chewy Connect compared by availability and credentials', href: '/telehealth', badge: 'Convenient Care' },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Vets.co Pet Product Reviews',
  numberOfItems: REVIEWS.length,
  itemListElement: REVIEWS.map((r, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: r.title,
    url: `https://vets.co${r.href}`,
  })),
}
const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function VetsReviewsPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      <HubMasthead
        eyebrow="Honest Comparisons"
        title="Pet Product Reviews"
        intro="Ranked from a clinical perspective on what actually matters when your pet needs care — published payout and complaint data, policy disclosures, and the credentials behind the advice. No paid placements."
        manifestKey="vets-co:category-reviews"
        fallbackKey="vets-co:insurance-hero"
        imageAlt="A desk with documents and a calculator used to compare options"
        primaryCta={{ href: '/reviews/best-pet-insurance', label: 'Compare pet insurance' }}
        secondaryCta={{ href: '/telehealth', label: 'Compare telehealth' }}
      />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <span className="text-brand-text-mid">Reviews</span>
      </nav>
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
      <DirectoryPlacesCta listings={listings} noun="licensed veterinarians" />
    </>
  </>
  )
}
