import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, buildProductSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Best Aquarium Heaters 2025 — Ranked for Accuracy | Fish.com',
  description: 'Eheim Jager, Fluval, Cobalt Neo-Therm, and Aqueon ranked using published spec sheets and aggregated keeper accuracy reports.',
  path: '/reviews/best-aquarium-heaters',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Best Aquarium Heaters 2025',
  description: 'Aquarium heaters ranked for accuracy using published specs and aggregated keeper reports — Eheim, Fluval, Cobalt.',
  url: 'https://fish.com/reviews/best-aquarium-heaters',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const eheimSchema = buildProductSchema({
  name: 'Eheim Jager TruTemp',
  description:
    'Submersible aquarium heater with ±0.5°F accuracy, recalibration dial, and auto shut-off — Fish.com Best Overall pick.',
  url: 'https://fish.com/reviews/best-aquarium-heaters#eheim',
  imageUrl: '',
  ratingValue: 9.4,
  reviewCount: 1,
})

const schema = combineSchemas(articleSchema, eheimSchema)

const PICKS = [
  { label: 'Best Overall', emoji: '🏆', name: 'Eheim Jager', subtitle: 'Most accurate · Recalibratable', href: '#eheim' },
  { label: 'Best Flat Design', emoji: '⭐', name: 'Cobalt Neo-Therm', subtitle: 'Slim profile · LED indicator', href: '#cobalt' },
  { label: 'Best Canister Inline', emoji: '⚙️', name: 'Hydor Inline', subtitle: 'No heater in tank · For canister setups', href: '#hydor' },
  { label: 'Best Budget', emoji: '💰', name: 'Aqueon Pro', subtitle: 'Shatterproof · Under $30', href: '#aqueon' },
]

export default function BestHeatersPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...schema, buildBreadcrumbSchema({ items: [{ name: 'Home', url: 'https://fish.com/' }, { name: 'Reviews', url: 'https://fish.com/reviews' }, { name: 'Best Aquarium Heaters 2025', url: 'https://fish.com/reviews/best-aquarium-heaters' }] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Editorial Comparison · May 2025</span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>
          Best Aquarium Heaters 2025 — Ranked for Temperature Accuracy
        </h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">
          A heater that runs 6°F hot kills tropical fish. A heater that runs cold causes immune suppression and disease. We ranked 8 heaters using manufacturer-published accuracy specs and aggregated keeper reports. Here&apos;s what holds temperature best on the record.
        </p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Heaters</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14">
          <div>
            <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

            <CalloutBox variant="tip" title="Right-sizing wattage">
              Buy slightly above the minimum wattage for your tank — an undersized heater running continuously at max wears out faster and fails sooner. Two smaller heaters split across opposite ends of a larger tank also provide redundancy if one fails. Always pair the heater with a separate verified thermometer. Use the <Link href="/tools/heater-wattage-calculator" className="text-brand-primary no-underline hover:underline">heater wattage calculator</Link> to size for your tank volume and target temperature.
            </CalloutBox>

            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Critical: Always Verify with a Separate Thermometer</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Every heater dial is an approximation. Even the best heaters can drift or fail. Always verify actual water temperature with a separate calibrated thermometer (Govee H5053 recommended). Set your heater, verify with the thermometer, adjust if needed. Check temperature daily for the first week, then weekly.</p>
            </div>

            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="fish-com" />
            <ReviewCard
              id="eheim"
              badge="Best Overall"
              badgeEmoji="🏆"
              name="Eheim Jager TruTemp"
              subtitle="Most accurate on published spec · Recalibratable · German engineering"
              score={9.4}
              winner
              description={<div>
                <p>The Eheim Jager is the standard against which other aquarium heaters are measured. Per manufacturer-published accuracy and aggregated keeper reports, the Jager holds temperature within ±0.5°F of the set point — the tightest tolerance among the heaters compared here. The recalibration dial (the small wheel on the side, separate from the main dial) allows fine-tuning to compensate for any drift over time.</p>
                <p>The Jager also has an auto shut-off when removed from water — critical for preventing the heater from burning out during water changes when it can inadvertently run in air. Glass construction means it can shatter if dropped, but the thermal stability and accuracy justify the premium position.</p>
              </div>}
              specs={[
                { label: 'Accuracy', value: '±0.5°F', highlight: 'good' },
                { label: 'Recalibratable', value: 'Yes', highlight: 'good' },
                { label: 'Auto Shut-Off', value: 'When removed from water', highlight: 'good' },
                { label: 'Construction', value: 'Glass (careful handling)' },
                { label: 'Made In', value: 'Germany' },
                { label: 'Sizes', value: '25W to 300W' },
              ]}
              pros={['Most accurate on published spec (±0.5°F)', 'Recalibratable — compensates for drift', 'Auto shut-off prevents burn-out', 'Long track record of reliability', 'Full wattage range available']}
              cons={['Glass construction — can shatter', 'Dial is approximate (calibration required)', 'Larger footprint than flat heaters']}
              price="$25–55"
              priceNote="By wattage"
              ctaText="Shop Eheim Jager →"
              ctaHref="/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="eheim-jager"
            />

            <ReviewCard
              id="cobalt"
              badge="Best Flat Design"
              badgeEmoji="⭐"
              name="Cobalt Aquatics Neo-Therm Pro"
              subtitle="Slim flat design · LED color indicator · ±0.5°F accuracy"
              score={9.1}
              description={<p>The Neo-Therm Pro matches the Eheim Jager in accuracy (±0.5°F per manufacturer-published accuracy) in a flat form factor that is significantly less obtrusive in planted tanks or display aquariums where a traditional cylindrical heater disrupts the aesthetic. The LED color indicator transitions through blue (heating) to white (at temperature) — functional at a glance. Shatterproof plastic housing removes the main physical risk of the glass Jager. The one tradeoff: the Neo-Therm is more expensive than the Eheim Jager for equivalent performance.</p>}
              specs={[
                { label: 'Accuracy', value: '±0.5°F', highlight: 'good' },
                { label: 'Design', value: 'Flat / slim profile', highlight: 'good' },
                { label: 'Indicator', value: 'LED color (blue → white)', highlight: 'good' },
                { label: 'Housing', value: 'Shatterproof plastic', highlight: 'good' },
                { label: 'Price', value: 'Premium' },
              ]}
              pros={['Flat design — minimal visual intrusion', 'Shatterproof housing', 'LED visual status indicator', 'Matches Jager accuracy']}
              cons={['Higher price than Eheim Jager', 'Not recalibratable']}
              price="$35–65"
              ctaText="Shop Cobalt Neo-Therm →"
              ctaHref="/go/amazon-brand/cobalt+neo-therm+pro?s=reviews-best-aquarium-heaters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="cobalt-neo-therm"
            />

            <ReviewCard
              id="hydor"
              badge="Best Inline (Canister Setups)"
              badgeEmoji="⚙️"
              name="Hydor In-Line External Heater"
              subtitle="No heater in the tank · Connects to canister filter hose"
              score={8.9}
              description={<p>For tanks with a canister filter, the Hydor Inline is the cleanest solution: the heater sits outside the tank on the canister filter return hose, heating water as it flows from the filter back into the tank. The result: no heater visible in the tank, no temperature variation from heater proximity (the heated water distributes evenly from the filter return), and better longevity (external components typically outlast in-tank heaters). Requires a canister filter with compatible hose diameter. Not compatible with HOB or sponge filters.</p>}
              specs={[
                { label: 'Type', value: 'Inline (external)', highlight: 'good' },
                { label: 'Requires', value: 'Canister filter', highlight: 'warn' },
                { label: 'In-Tank Heater', value: 'None — external only', highlight: 'good' },
                { label: 'Temperature Distribution', value: 'Excellent (via filter return)' },
              ]}
              pros={['No heater visible in the tank', 'Even temperature distribution', 'Longer lifespan (external)', 'Clean aesthetic for display tanks']}
              cons={['Requires canister filter', 'More expensive than in-tank', 'Not compatible with HOB filters']}
              price="$40–70"
              ctaText="Shop Hydor Inline →"
              ctaHref="/go/amazon-brand/hydor+inline+heater?s=reviews-best-aquarium-heaters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="hydor-inline"
            />

            <ReviewCard
              id="aqueon"
              badge="Best Budget"
              badgeEmoji="💰"
              name="Aqueon Pro Adjustable Heater"
              subtitle="Shatterproof · Under $30 · Widely available"
              score={8.1}
              description={<p>The Aqueon Pro is the best budget heater for beginners — shatterproof construction removes the main safety risk of the Eheim Jager, and it is available in every pet store. Accuracy is acceptable (±1–1.5°F per published reviews — worse than the Eheim or Cobalt but usable for most freshwater setups). For sensitive species with tight temperature requirements (discus, cardinal tetras, certain invertebrates), invest in a more accurate heater. For robust community fish with 4–6°F tolerance ranges, the Aqueon Pro performs adequately at the best price.</p>}
              specs={[
                { label: 'Price', value: 'Under $30', highlight: 'good' },
                { label: 'Accuracy', value: '±1–1.5°F', highlight: 'warn' },
                { label: 'Housing', value: 'Shatterproof', highlight: 'good' },
                { label: 'Availability', value: 'All pet stores', highlight: 'good' },
              ]}
              pros={['Best price of heaters compared', 'Shatterproof — beginner-safe', 'Widely available', 'Adequate for robust community fish']}
              cons={['Less accurate than premium options', 'Not suitable for temperature-sensitive species']}
              price="$18–30"
              ctaText="Shop Aqueon Pro →"
              ctaHref="/go/amazon-brand/aqueon+pro+heater?s=reviews-best-aquarium-heaters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="aqueon-pro-heater"
            />
          </div>

          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Wattage Guide</div>
              {[['5 gal', '25–50W'], ['10–20 gal', '50–100W'], ['30–40 gal', '100–150W'], ['50–75 gal', '200–250W'], ['100+ gal', '300W+']].map(([size, w]) => (
                <div key={size} className="flex justify-between py-2 border-b border-brand-border last:border-0">
                  <span className="text-xs text-brand-text-light">{size}</span>
                  <span className="text-xs font-bold text-brand-dark">{w}</span>
                </div>
              ))}
              <p className="text-2xs text-brand-text-light mt-3 m-0">Always buy more wattage than minimum — it&apos;s safer than an undersized heater working continuously at max.</p>
            </div>
            <RelatedLinks title="Related Guides" links={[
              { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' },
              { label: 'Tank Setup Guide', href: '/setup' },
              { label: 'Water Chemistry Guide', href: '/water-parameters' },
            ]} />
            <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Equipment picks every Thursday." source="review-heaters" />
          </aside>
        </div>
      </div>
    </>
  )
}
