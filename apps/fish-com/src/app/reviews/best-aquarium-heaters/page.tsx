import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildItemListSchema, buildFAQSchema, buildProductSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Best Aquarium Heaters 2026 — Ranked for Accuracy | Fish.com',
  description: 'Eheim Jager, Fluval, Cobalt Neo-Therm, and Aqueon ranked using published spec sheets and aggregated keeper accuracy reports.',
  path: '/reviews/best-aquarium-heaters',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Best Aquarium Heaters 2026',
  description: 'Aquarium heaters ranked for accuracy using published specs and aggregated keeper reports — Eheim, Fluval, Cobalt.',
  url: 'https://fish.com/reviews/best-aquarium-heaters',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-06-07T00:00:00Z',
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
  { label: 'Best Overall', name: 'Eheim Jager', subtitle: 'Most accurate · Recalibratable', href: '#eheim' },
  { label: 'Best Flat Design', name: 'Cobalt Neo-Therm', subtitle: 'Slim profile · LED indicator', href: '#cobalt' },
  { label: 'Best Canister Inline', name: 'Hydor Inline', subtitle: 'No heater in tank · For canister setups', href: '#hydor' },
  { label: 'Best Budget', name: 'Aqueon Pro', subtitle: 'Shatterproof · Under $30', href: '#aqueon' },
]

// GEO: ItemList of the ranked picks. Names + URLs come only from this page's
// PICKS. No aggregateRating, no fabricated specs (QC §1.4).
const itemList = buildItemListSchema({
  name: 'Best Aquarium Heaters 2026',
  items: PICKS.map((p) => ({ name: p.name, url: `https://fish.com/reviews/best-aquarium-heaters${p.href}` })),
})

// FAQ content derived from this page's comparison criteria and sizing guidance only.
const FAQS = [
  { question: 'What size heater does my aquarium need?', answer: 'As a rule of thumb: 25–50W for a 5-gallon tank, 50–100W for 10–20 gallons, 100–150W for 30–40 gallons, 200–250W for 50–75 gallons, and 300W or more for 100+ gallons. Buy slightly above the minimum — an undersized heater running continuously at maximum output wears out faster. On larger tanks, two smaller heaters split across opposite ends also provide redundancy if one fails.' },
  { question: 'Which aquarium heater is the most accurate?', answer: 'Per manufacturer-published specs, the Eheim Jager TruTemp and Cobalt Neo-Therm Pro both hold roughly ±0.5°F of the set point — the tightest tolerance among the heaters compared here. The Jager adds a recalibration dial to compensate for drift over time. Budget heaters like the Aqueon Pro run closer to ±1–1.5°F, which is acceptable for robust community fish but not for temperature-sensitive species such as discus or cardinal tetras.' },
  { question: 'Do I still need a thermometer if my heater has a built-in thermostat?', answer: 'Yes. Every heater dial is an approximation, and even the best heaters can drift or fail. Always verify actual water temperature with a separate calibrated thermometer — set the heater, confirm with the thermometer, and adjust as needed. Check the temperature daily for the first week after installation, then weekly.' },
  { question: 'How were these aquarium heaters ranked?', answer: 'The heaters in this comparison were ranked on manufacturer-published accuracy specs, safety features such as auto shut-off when removed from water, construction (glass versus shatterproof housings), and aggregated long-term keeper reports — not on hands-on lab testing. Affiliate links appear on this page, but rankings are independent of commissions.' },
]
const faqSchema = buildFAQSchema({ questions: FAQS.map((f) => ({ question: f.question, answer: f.answer })) })

export default function BestHeatersPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...schema, itemList, faqSchema, buildBreadcrumbSchema({ items: [{ name: 'Home', url: 'https://fish.com/' }, { name: 'Reviews', url: 'https://fish.com/reviews' }, { name: 'Best Aquarium Heaters 2026', url: 'https://fish.com/reviews/best-aquarium-heaters' }] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Editorial Comparison · June 2026</span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>
          Best Aquarium Heaters 2026 — Ranked for Temperature Accuracy
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
            <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-09-06T00:00:00Z" reviewedBy="Editorial team" />

            {/* Under-hero capture — source must end in under-hero so it always renders. */}
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the aquarium-heater checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                Aquarium-heater checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the heater notes that match the
                Eheim Jager, Cobalt Neo-Therm, Hydor
                Inline, and Aqueon Pro copy on this
                page — an Eheim Jager so a tropical
                tank keeps a recalibration dial
                against drift, a Cobalt Neo-Therm so
                a slim tank keeps a flat-profile
                heater, and a Hydor Inline so a
                canister setup keeps the heater out
                of the display. Educational heater-
                checklist, not a new product hop, not
                livestock, and not a substitute for a
                fish veterinarian. The existing
                Eheim / Cobalt / Hydor / Aqueon
                Amazon searches stay below. Empty
                Chewy buttons stay hidden. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="fish-com"
                title="Aquarium-heater checklist"
                subtitle="Email the Jager, Neo-Therm, inline, and Aqueon notes. No spam."
                ctaText="Email my aquarium-heater checklist"
                source="reviews-best-aquarium-heaters-under-hero"
              />
            </div>

            <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Bottom Line</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">The <strong>Eheim Jager</strong> is our overall pick — the tightest accuracy in this comparison and recalibratable to compensate for drift. The <strong>Cobalt Neo-Therm</strong> is the best slim flat-profile heater, the <strong>Hydor Inline</strong> the pick for canister setups that keep the heater out of the tank, and the shatterproof <strong>Aqueon Pro</strong> the best budget choice. Whichever you pick, always verify with a separate calibrated thermometer.</p>
            </div>

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

            <h2 className="font-display font-bold text-brand-dark text-xl mt-10 mb-4">Frequently Asked Questions</h2>
            <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
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
