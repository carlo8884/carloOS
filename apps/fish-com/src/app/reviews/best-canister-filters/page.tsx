import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Best Canister Filters 2025 — Fluval, Eheim | Fish.com', description: 'Best canister filters for aquariums 40-150 gallons. Fluval 307, Eheim Classic, and Penn Plax Cascade ranked for flow rate, media capacity, and noise.', path: '/reviews/best-canister-filters', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Best Canister Filters 2025', description: 'Fluval, Eheim, and Penn Plax canister filters ranked for mid-to-large aquariums.', url: 'https://fish.com/reviews/best-canister-filters', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const fluvalSchema = buildProductSchema({ name: 'Fluval 307 Performance Canister Filter', description: 'Near-silent canister filter for 40-70 gallon aquariums with AquaStop valve.', url: 'https://fluvalaquatics.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const eheimSchema = buildProductSchema({ name: 'Eheim Classic 350 Canister Filter', description: 'German-engineered classic canister filter — bulletproof reliability for 40-92 gallons.', url: 'https://eheim.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, fluvalSchema, eheimSchema)
const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Fluval 307', subtitle: 'Near-silent · AquaStop · 40-70 gal', href: '#fluval' },
  { label: 'Most Reliable', emoji: '🔧', name: 'Eheim Classic 350', subtitle: 'German engineering · Runs forever', href: '#eheim' },
  { label: 'Best Budget', emoji: '💰', name: 'Penn Plax Cascade 1000', subtitle: 'Good value · 100 gal · Lower cost', href: '#penn-plax' },
]
export default function BestCanisterFiltersPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, buildBreadcrumbSchema({ items: [{ name: 'Home', url: 'https://fish.com/' }, { name: 'Reviews', url: 'https://fish.com/reviews' }, { name: 'Best Canister Filters 2025', url: 'https://fish.com/reviews/best-canister-filters' }] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">💧 Buyer's Guide</span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Canister Filters 2025</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Canister filters sit outside the tank, hold more media than HOB filters, and run quietly. For planted tanks, heavily stocked tanks, and aquariums 40+ gallons — canister filters are the standard.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Canister Filters</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="fish-com" />
            <ReviewCard id="fluval" badge="Best Overall" badgeEmoji="🏆" name="Fluval 307 Performance Canister Filter" subtitle="Near-silent · AquaStop valve · Multi-stage media baskets · 40-70 gal" score={9.4} winner
              description={<p>The Fluval 307 is the current benchmark for canister filters in the 40–70 gallon range — near-silent operation, excellent media capacity with 4 separated baskets (mechanical, chemical, biological staged properly), and the AquaStop valve that allows media changes without disconnecting hoses. The sound dampening is genuinely impressive compared to older canister filters — you have to get very close to hear it running. Setup is straightforward for a canister. Impeller design is efficient — flow rates are real-world accurate rather than inflated marketing numbers. Lid design seals reliably. 5-year warranty.</p>}
              specs={[{ label: 'Tank size', value: '40–70 gallons' }, { label: 'Flow rate', value: '303 GPH (actual)', highlight: 'good' }, { label: 'Noise', value: 'Near-silent', highlight: 'good' }, { label: 'AquaStop', value: 'Yes — media change without disconnect', highlight: 'good' }, { label: 'Warranty', value: '5 years' }]}
              pros={['Near-silent', 'AquaStop for easy maintenance', 'Excellent media capacity', '5-year warranty', 'Accurate flow rate']}
              cons={['Primer button can be finicky on first start', 'More expensive than Penn Plax']}
              price="$120–150"
              ctaText="Shop Fluval 307 →"
              ctaHref="/go/amazon-brand/fluval+307+canister+filter?s=reviews-best-canister-filters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="fluval-307"
            />
            <ReviewCard id="eheim" badge="Most Reliable" badgeEmoji="🔧" name="Eheim Classic 350 (2215)" subtitle="German engineering · Runs for decades · Simple design · 40-92 gal" score={9.2}
              description={<p>The Eheim Classic line has been running continuously in aquariums since the 1960s. The 2215 is not the most feature-rich or the quietest filter on the market — it is the most reliable. Simple impeller design, robust construction, and a track record measured in decades. Many hobbyists have Classic filters running continuously for 10–15+ years with only impeller replacement. The media basket system is less sophisticated than Fluval's staged baskets, but the Eheim's longevity and bulletproof reliability justify its continued popularity among serious hobbyists who have been burned by cheaper filters dying in year 3.</p>}
              specs={[{ label: 'Tank size', value: '40–92 gallons' }, { label: 'Flow rate', value: '264 GPH' }, { label: 'Reliability', value: 'Best in class — decades of track record', highlight: 'good' }, { label: 'Noise', value: 'Quiet (not silent)' }]}
              pros={['Legendary long-term reliability', 'Simple to maintain', 'German engineering quality', 'Runs for 10-15+ years']}
              cons={['Less sophisticated media separation than Fluval', 'Older design — no AquaStop', 'Slightly louder than Fluval 307']}
              price="$100–130"
              ctaText="Shop Eheim Classic →"
              ctaHref="/go/amazon-brand/eheim+classic+350+2215?s=reviews-best-canister-filters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="eheim-classic-2215"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Tank Size</div>
              {[['20-40 gallons', 'HOB filter or Fluval 207'], ['40-70 gallons', 'Fluval 307'], ['70-100 gallons', 'Fluval 407 or Eheim 2217'], ['100+ gallons', 'Fluval FX4/FX6 or dual filters'], ['Heavily planted', 'Eheim 2217 (low flow option)']].map(([s, r]) => (
                <div key={s} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{s}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' }, { label: 'Nitrogen Cycle', href: '/health/nitrogen-cycle-explained' }, { label: 'Tank Setup Guide', href: '/setup' }]} />
            <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Equipment picks every Thursday." source="review-canister-filters" />
          </aside>
        </div>
      </div>
    </>
  )
}
