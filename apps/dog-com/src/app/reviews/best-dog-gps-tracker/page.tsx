import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Dog GPS Trackers 2026 — Fi, Whistle | Dog.com', description: 'Best GPS trackers for dogs — Fi Series 3, Whistle Go Explore, and Tractive ranked for accuracy, battery life, and monthly subscription cost.', path: '/reviews/best-dog-gps-tracker', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Dog GPS Trackers 2026', description: 'Fi, Whistle, and Tractive GPS dog trackers ranked.', url: 'https://dog.com/reviews/best-dog-gps-tracker', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const fiSchema = buildProductSchema({ name: 'Fi Series 3 Dog Collar', description: 'GPS dog tracker with 3-month battery life and LTE-M network coverage.', url: 'https://tryfi.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const whistleSchema = buildProductSchema({ name: 'Whistle Go Explore', description: 'GPS dog tracker with health and activity monitoring.', url: 'https://whistle.com', imageUrl: '', ratingValue: 9.0, reviewCount: 1 })
const allSchemas = combineSchemas(schema, fiSchema, whistleSchema)
const PICKS = [
  { label: 'Best Overall', name: 'Fi Series 3', subtitle: '3-month battery · LTE-M · Escape alerts', href: '#fi' },
  { label: 'Best with Health Data', name: 'Whistle Go Explore', subtitle: 'GPS + activity + health monitoring', href: '#whistle' },
  { label: 'Best Budget', name: 'Tractive GPS', subtitle: 'Lowest monthly fee · Works globally', href: '#tractive' },
]
export default function BestGPSTrackerPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Dog GPS Trackers 2025', url: 'https://dog.com/reviews/best-dog-gps-tracker' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Buyer's Guide</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Dog GPS Trackers 2026</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">GPS trackers give you real-time location if your dog escapes. All require a monthly subscription — we ranked by accuracy, battery life, and total cost of ownership.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Dog GPS Trackers</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="dog-com" />
            <ReviewCard id="fi" badge="Best Overall" name="Fi Series 3 Dog Collar" subtitle="3-month battery · LTE-M network · Geofence escape alerts · Sleek collar design" score={9.4} winner
              description={<p>Fi's standout feature is the 3-month battery life — the longest of any GPS tracker by a significant margin. Competitors need weekly or daily charging; Fi charges once per quarter. The LTE-M network gives broader coverage in rural and low-signal areas than standard LTE trackers. The app shows real-time location, daily step count, sleep tracking, and instantly alerts when the dog leaves a defined geofence (your yard, a friend's house). The collar replaces your dog's existing collar — the tracker module snaps into a standard collar band. Monthly subscription: $9.99/mo (annual) or $14.99/mo (monthly).</p>}
              specs={[{ label: 'Battery', value: '3 months', highlight: 'good' }, { label: 'Network', value: 'LTE-M (broader coverage)', highlight: 'good' }, { label: 'Geofence alerts', value: 'Yes — instant', highlight: 'good' }, { label: 'Monthly fee', value: '$9.99/mo (annual)' }, { label: 'Water resistant', value: 'IP68' }]}
              pros={['3-month battery — best by far', 'LTE-M for rural coverage', 'Instant escape alerts', 'Replaces collar — no extra bulk', 'Step and sleep tracking']}
              cons={['More expensive upfront ($149)', 'Monthly subscription required', 'Collar bands sold separately']}
              price="$149 + $9.99/mo"
              ctaText="Shop Fi Series 3 →"
              ctaHref="/go/amazon-brand/fi+series+3+dog+collar?s=reviews-best-dog-gps-tracker"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="fi+series+3+dog+collar"
            />
            <ReviewCard id="whistle" badge="Best Health Monitoring" name="Whistle Go Explore" subtitle="GPS + health monitoring · Lick and scratch tracking · Vet alerts" score={9.0}
              description={<p>Whistle Go Explore combines GPS tracking with health behavior monitoring — it detects excessive licking, scratching, sleeping, and activity changes that may indicate health issues before they are visible. The app can alert you when behaviors change significantly from the dog's baseline, which some owners find clinically useful. GPS accuracy is solid in urban environments. Battery life is 20 days — shorter than Fi but longer than Tractive. Monthly subscription: $9.95/mo. The health monitoring layer differentiates it from pure-GPS competitors.</p>}
              specs={[{ label: 'Battery', value: '20 days' }, { label: 'GPS', value: 'LTE' }, { label: 'Health monitoring', value: 'Lick, scratch, activity, sleep', highlight: 'good' }, { label: 'Monthly fee', value: '$9.95/mo' }]}
              pros={['Health behavior monitoring (licking, scratching)', 'Good GPS accuracy', '20-day battery', 'Vet alert integration']}
              cons={['Shorter battery than Fi', 'Health data requires interpretation', 'Bulkier than Fi']}
              price="$79 + $9.95/mo"
              ctaText="Shop Whistle Go Explore →"
              ctaHref="/go/amazon-brand/whistle+go+explore?s=reviews-best-dog-gps-tracker"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="whistle+go+explore"
            />
            <ReviewCard id="tractive" badge="Best Budget" name="Tractive GPS Dog Tracker" subtitle="Lowest monthly fee · Works in 175 countries · Simple app" score={8.8}
              description={<p>Tractive has the lowest monthly fee of any GPS tracker ($5/mo annual) and works in 175 countries — making it the best option for dogs that travel internationally or for owners who want basic GPS without the premium features of Fi or Whistle. Battery life is 2–5 days depending on tracking frequency — requires regular charging. The app is simple and accurate. No health monitoring. Best for: budget-conscious owners who just want to know where their dog is, and owners who travel internationally with their dogs.</p>}
              specs={[{ label: 'Monthly fee', value: '$5/mo (annual)', highlight: 'good' }, { label: 'Countries', value: '175 — best global coverage', highlight: 'good' }, { label: 'Battery', value: '2–5 days' }, { label: 'Health monitoring', value: 'None' }]}
              pros={['Lowest monthly cost', 'Best international coverage', 'Simple reliable app', 'Lightweight']}
              cons={['2–5 day battery — frequent charging', 'No health monitoring', 'Less sophisticated app than Fi']}
              price="$49 + $5/mo"
              ctaText="Shop Tractive GPS →"
              ctaHref="/go/amazon-brand/tractive+gps+dog+tracker?s=reviews-best-dog-gps-tracker"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="tractive+gps+dog+tracker"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Situation</div>
              {[['Best all-around', 'Fi Series 3'], ['Escape artist dog', 'Fi (instant alerts)'], ['Health monitoring', 'Whistle Go Explore'], ['International travel', 'Tractive'], ['Lowest cost', 'Tractive ($5/mo)'], ['Rural / low signal', 'Fi (LTE-M)']].map(([s, r]) => (
                <div key={s} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{s}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'All Dog Reviews', href: '/reviews' }, { label: 'Best Dog Harnesses', href: '/reviews/best-dog-harnesses' }, { label: 'Dachshund Breed Guide', href: '/breeds/dachshund' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Tips" subtitle="Practical guidance weekly." source="review-gps" />
          </aside>
        </div>
      </div>
    </>
  )
}
