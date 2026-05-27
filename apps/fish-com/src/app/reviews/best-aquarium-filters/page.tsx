import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Best Aquarium Filters 2025 — HOB, Canister & Sponge Filters Ranked | Fish.com',
  description: 'Flow rate accuracy, biological filtration capacity, noise, and ease of maintenance compared across the major hang-on-back, canister, and sponge options. Hang-on-back, canister, and sponge filters ranked.',
  path: '/reviews/best-aquarium-filters',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Best Aquarium Filters 2025',
  description: 'HOB, canister, and sponge filters tested for biological capacity and reliability.',
  url: 'https://fish.com/reviews/best-aquarium-filters',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const PICKS = [
  { label: 'Best HOB', emoji: '🏆', name: 'Aquaclear 70', subtitle: 'Most biological capacity · Quiet · Refillable', href: '#aquaclear' },
  { label: 'Best Canister', emoji: '⚙️', name: 'Fluval 307', subtitle: 'Best for 50–70 gal · Near-silent', href: '#fluval' },
  { label: 'Best Sponge', emoji: '🧽', name: 'Hikari Bacto-Surge', subtitle: 'Nano tanks · Breeding · Shrimp', href: '#sponge' },
  { label: 'Best Budget HOB', emoji: '💰', name: 'Aqueon QuietFlow 30', subtitle: 'Under $35 · Widely available', href: '#aqueon' },
]

const productSchema0 = buildProductSchema({ name: 'AquaClear 70 Power Filter', description: 'Hang-on-back aquarium filter with refillable media basket for up to 70 gallons.', url: 'https://fluvalaquatics.com', imageUrl: '', ratingValue: 9.4, reviewCount: 1 })
const productSchema1 = buildProductSchema({ name: 'Fluval 307 Canister Filter', description: 'Near-silent canister filter for 40-70 gallon aquariums.', url: 'https://fluvalaquatics.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, productSchema0, productSchema1)

export default function BestAquariumFiltersPage() {
  return (
    <>
      <SchemaScript schema={allSchemas} />
      <div className="bg-brand-dark px-container sm:px-container-sm py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">⚡ Editor Pick · May 2025</span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-5 max-w-3xl"
          style={{ fontSize: 'clamp(24px, 4vw, 46px)' }}>
          Best Aquarium Filters 2025 — HOB, Canister & Sponge Ranked
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          The filter is where your beneficial bacteria live — it is the most important piece of equipment in your tank. The picks below compare biological capacity, flow accuracy, and long-term reliability across the major hang-on-back, canister, and sponge options.
        </p>
      </div>
      <QuickPicks items={PICKS} />
      <nav className="px-container sm:px-container-sm py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Filters</span>
      </nav>
      <div className="px-container sm:px-container-sm py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Filter Type Guide</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
                <strong>HOB (Hang-On-Back):</strong> Best for 10–75 gallon tanks. Easy to maintain. Good biological capacity. Most common choice for beginners and intermediate keepers.<br />
                <strong>Canister:</strong> Best for 50+ gallons. Superior biological capacity and flow. Quiet. More expensive and less convenient to clean.<br />
                <strong>Sponge:</strong> Best for nano tanks, breeding setups, and shrimp tanks. Excellent biological surface area. Safe for fry and invertebrates. Low flow.
              </p>
            </div>

            <ReviewCard
              id="aquaclear"
              badge="Best HOB Overall"
              badgeEmoji="🏆"
              name="AquaClear 70 Power Filter"
              subtitle="Refillable media basket · Most biological capacity in HOB class · Quiet"
              score={9.4}
              winner
              description={<div>
                <p>The AquaClear 70 is widely considered the benchmark HOB filter for a reason: its media basket is among the largest in the hang-on-back class — 3 separate chambers for mechanical (foam), chemical (carbon), and biological (BioMax ceramic rings) filtration. The refillable design means you control the media rather than paying for proprietary cartridges. The sponge alone provides exceptional biological filtration surface area.</p>
                <p>Flow is adjustable (from full 300GPH to reduced flow for sensitive fish), noise level is low at the correct water level, and the design has been refined over decades. The one maintenance note: the impeller needs cleaning every 3–4 months or flow drops significantly.</p>
              </div>}
              specs={[
                { label: 'Type', value: 'Hang-on-back' },
                { label: 'Flow Rate', value: '300 GPH', highlight: 'good' },
                { label: 'For Tanks', value: 'Up to 70 gallons' },
                { label: 'Media', value: 'Refillable — any media', highlight: 'good' },
                { label: 'Noise', value: 'Low (at correct level)', highlight: 'good' },
                { label: 'Maintenance', value: 'Monthly rinse, quarterly impeller' },
              ]}
              pros={['Among the largest media baskets in its class', 'Refillable — no proprietary cartridge lock-in', 'Excellent biological capacity', 'Adjustable flow', 'Proven 30+ year track record']}
              cons={['Impeller needs quarterly cleaning', 'Noisier if water level drops', 'Larger footprint than competitors']}
              price="$45–70"
              ctaText="Shop AquaClear →"
              ctaHref="https://www.amazon.com/s?k=aquaclear+70+filter"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="aquaclear-70"
            />

            <ReviewCard
              id="fluval"
              badge="Best Canister"
              badgeEmoji="⚙️"
              name="Fluval 307 Canister Filter"
              subtitle="Near-silent · Excellent biological capacity · Self-priming"
              score={9.2}
              description={<p>The Fluval 307 is the correct choice for tanks 40–70 gallons requiring high biological filtration. At 303 GPH with a media volume of 780g, it outperforms most HOB filters at this tank size. The self-priming mechanism (push-button) makes startup and post-maintenance restart simple. Near-silent operation — the 307 runs quieter than most HOBs. The maintenance cycle is longer (every 3–6 months vs monthly for HOBs) because the large media volume takes longer to clog. The tradeoff: cleaning day is more involved.</p>}
              specs={[
                { label: 'Type', value: 'Canister' },
                { label: 'Flow Rate', value: '303 GPH', highlight: 'good' },
                { label: 'For Tanks', value: 'Up to 70 gallons' },
                { label: 'Noise', value: 'Near-silent', highlight: 'good' },
                { label: 'Self-Priming', value: 'Yes — button', highlight: 'good' },
                { label: 'Cleaning', value: 'Every 3–6 months' },
              ]}
              pros={['Near-silent operation', 'Superior biological capacity vs HOB', 'Self-priming button', 'Longer cleaning intervals', 'Fluval build quality']}
              cons={['More complex to clean than HOB', 'Higher price than equivalent HOB', 'Under-cabinet space required']}
              price="$120–160"
              ctaText="Shop Fluval 307 →"
              ctaHref="https://www.amazon.com/s?k=fluval+307+canister+filter"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="fluval-307"
            />

            <ReviewCard
              id="sponge"
              badge="Best Sponge Filter"
              badgeEmoji="🧽"
              name="Hikari Bacto-Surge Sponge Filter"
              subtitle="Nano tanks · Shrimp · Breeding setups · Safe for fry"
              score={9.0}
              description={<p>Sponge filters are the correct choice for: shrimp tanks (no intake risk), breeding setups (fry cannot be sucked in), nano tanks under 20 gallons, and hospital/quarantine tanks. The Hikari Bacto-Surge has excellent sponge surface area for biological filtration and runs off an air pump (sold separately). The gentle flow is ideal for low-flow species (bettas, small tetras) and shrimp. Cleaning is the easiest of any filter type: squeeze the sponge in old tank water, reinstall. Never use tap water — it kills the beneficial bacteria.</p>}
              specs={[
                { label: 'Type', value: 'Sponge (air-driven)' },
                { label: 'Best For', value: 'Nano tanks, shrimp, breeding', highlight: 'good' },
                { label: 'Fry-Safe', value: 'Yes — no intake', highlight: 'good' },
                { label: 'Requires', value: 'Air pump (sold separately)' },
                { label: 'Cleaning', value: 'Monthly squeeze in tank water' },
                { label: 'Price', value: 'Very low' },
              ]}
              pros={['Safe for shrimp and fry', 'Excellent biological surface area', 'Easy cleaning', 'Low cost', 'Quiet']}
              cons={['Requires separate air pump', 'Not suitable for larger tanks alone', 'Less mechanical filtration than HOB']}
              price="$10–20"
              ctaText="Shop Hikari Sponge →"
              ctaHref="https://www.amazon.com/s?k=hikari+bacto+surge+sponge+filter"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="hikari-sponge"
            />

            <ReviewCard
              id="aqueon"
              badge="Best Budget HOB"
              badgeEmoji="💰"
              name="Aqueon QuietFlow 30"
              subtitle="Under $35 · LED indicator light · Widely available"
              score={8.3}
              description={<p>The Aqueon QuietFlow 30 is the most widely available budget HOB filter — found at every pet store, reliable, and functional for smaller tanks. The LED indicator light that signals when the cartridge needs replacement is a useful feature for beginners. Main limitation: the proprietary cartridge system requires purchasing Aqueon replacement cartridges rather than custom media. For beginners who prefer a simpler maintenance workflow, this is a minor concern. For keepers who want to optimize biological filtration, upgrade to the AquaClear.</p>}
              specs={[
                { label: 'Price', value: 'Under $35', highlight: 'good' },
                { label: 'For Tanks', value: 'Up to 30 gallons' },
                { label: 'Indicator', value: 'LED cartridge alert', highlight: 'good' },
                { label: 'Media', value: 'Proprietary cartridge', highlight: 'warn' },
                { label: 'Availability', value: 'Every pet store', highlight: 'good' },
              ]}
              pros={['Lowest price of HOBs tested', 'Widely available', 'LED maintenance indicator', 'Simple setup']}
              cons={['Proprietary cartridge lock-in', 'Lower biological capacity than AquaClear', 'Can be noisy if impeller collects debris']}
              price="$25–40"
              ctaText="Shop Aqueon QuietFlow →"
              ctaHref="https://www.amazon.com/s?k=aqueon+quietflow+30"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="aqueon-quietflow-30"
            />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Filter by Tank Size</div>
              {[
                { size: 'Under 10 gal', pick: 'Sponge filter' },
                { size: '10–30 gal', pick: 'AquaClear 30 or Aqueon 30' },
                { size: '30–70 gal', pick: 'AquaClear 70' },
                { size: '50–70 gal (high bioload)', pick: 'Fluval 307 canister' },
                { size: 'Shrimp tank', pick: 'Sponge filter only' },
                { size: 'Breeding/fry', pick: 'Sponge filter' },
              ].map(item => (
                <div key={item.size} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-xs text-brand-text-light mb-0.5">{item.size}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {item.pick}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[
              { label: 'Tank Setup Guide', href: '/setup' },
              { label: 'Nitrogen Cycle', href: '/health/nitrogen-cycle-explained' },
              { label: 'Water Chemistry', href: '/water' },
            ]} />
            <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Equipment picks every Thursday." source="review-filters" />
          </aside>
        </div>
      </div>
    </>
  )
}
