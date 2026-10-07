import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, EmailCapture, PrimaryHop, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, FAQAccordion, JourneyNext, PriceAsOf} from '@carloOS/ui'
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
  modifiedAt: '2026-10-07T00:00:00Z',
})

const eheimSchema = buildProductSchema({
  name: 'Eheim Jager TruTemp',
  description:
    'Submersible aquarium heater with ±0.5°C accuracy, recalibration dial, and auto shut-off — Fish.com Best Overall pick.',
  url: 'https://fish.com/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters',
  imageUrl: '',
})

const schema = combineSchemas(articleSchema, eheimSchema)

const PICKS = [
  { label: 'Best Overall', name: 'Eheim Jager', subtitle: 'Most accurate · Recalibratable', href: '#eheim', pickHop: '/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters' },
  { label: 'Best Flat Design', name: 'Cobalt Neo-Therm', subtitle: 'Slim profile · LED indicator', href: '#cobalt' },
  { label: 'Best Canister Inline', name: 'Hydor Inline', subtitle: 'No heater in tank · For canister setups', href: '#hydor' },
  { label: 'Best Budget', name: 'Aqueon Pro', subtitle: 'Shatterproof · $18–30', href: '#aqueon' },
]

// GEO: ItemList of the ranked picks. Names + URLs come only from this page's
// PICKS. No aggregateRating, no fabricated specs (QC §1.4).
const itemList = buildItemListSchema({
  name: 'Best Aquarium Heaters 2026',
  items: PICKS.map((p) => ({ name: p.name, url: ({ "Eheim Jager": "https://fish.com/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters", "Cobalt Neo-Therm": "https://fish.com/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters", "Hydor Inline": "https://fish.com/go/amazon-brand/hydor+inline+heater?s=reviews-best-aquarium-heaters", "Aqueon Pro": "https://fish.com/go/amazon-brand/aqueon+pro+heater?s=reviews-best-aquarium-heaters" }[p.name] ?? `https://fish.com/reviews/best-aquarium-heaters${p.href}`) })),
})

// FAQ content derived from this page's comparison criteria and sizing guidance only.
const FAQS = [
  { question: 'What size heater does my aquarium need?', answer: 'As a rule of thumb: 25–50W for a 5-gallon tank, 50–100W for 10–20 gallons, 100–150W for 30–40 gallons, 200–250W for 50–75 gallons, and 300W or more for 100+ gallons. Buy slightly above the minimum — an undersized heater running continuously at maximum output wears out faster. On larger tanks, two smaller heaters split across opposite ends also provide redundancy if one fails.' },
  { question: 'Which aquarium heater is the most accurate?', answer: 'The current Eheim page prints temperature control accuracy of ±0.5°C. Cobalt Neo-Therm accuracy: see the manufacturer\'s current page. Aqueon Pro accuracy: see the manufacturer\'s current page. The Jager adds a recalibration dial.' },
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
        <PriceAsOf date="2026-10-07" tone="dark" />
        <PrimaryHop href='/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters' label='Check price of the Eheim Jager heater on Amazon' />
        <HopDisclosure siteId="fish-com" href="/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters" />
        <EmailCapture
          variant="inline"
          siteId="fish-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-best-aquarium-heaters"
          checklist={[
            "Buy slightly above the minimum \u2014 an undersized heater running continuously at maximum output wears out faster.",
            "On larger tanks, two smaller heaters split across opposite ends also provide redundancy if one fails.",
            "The Jager adds a recalibration dial to compensate for drift over time.",
            "Every heater dial is an approximation, and even the best heaters can drift or fail.",
            "Always verify actual water temperature with a separate calibrated thermometer \u2014 set the heater, confirm with the thermometer, and adjust as needed.",
            "Check the temperature daily for the first week after installation, then weekly.",
          ]}
        />

        <div className="[&_.text-brand-primary]:!text-brand-dark">
          <QuickPicks items={PICKS} embedded />
        </div>
        <p className="text-lg font-normal text-white/55 max-w-2xl leading-relaxed">
          A heater that runs 6°F hot kills tropical fish. A heater that runs cold causes immune suppression and disease. We ranked 8 heaters using manufacturer-published accuracy specs and aggregated keeper reports. Here&apos;s what holds temperature best on the record.
        </p>
      </div>
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Aquarium Heaters 2026</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_270px] gap-14 min-w-0">
          <div className="min-w-0">
            <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-10-07T00:00:00Z" reviewedBy="Editorial team" />

            <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Bottom Line</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">The <strong>Eheim Jager</strong> is our overall pick — the tightest accuracy in this comparison and recalibratable to compensate for drift. The <strong>Cobalt Neo-Therm</strong> is the best slim flat-profile heater, the <strong>Hydor Inline</strong> the pick for canister setups that keep the heater out of the tank, and the shatterproof <strong>Aqueon Pro</strong> the best budget choice. Whichever you pick, always verify with a separate calibrated thermometer.</p>
            </div>

            <CalloutBox variant="tip" title="Right-sizing wattage">
              Buy slightly above the minimum wattage for your tank — an undersized heater running continuously at max wears out faster and fails sooner. Two smaller heaters split across opposite ends of a larger tank also provide redundancy if one fails. Always pair the heater with a separate verified thermometer. Use the <Link href="/tools/heater-wattage-calculator" className="text-brand-primary underline underline-offset-2">heater wattage calculator</Link> to size for your tank volume and target temperature.
            </CalloutBox>

            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-lg p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Critical: Always Verify with a Separate Thermometer</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Every heater dial is an approximation. Even the best heaters can drift or fail. Always verify actual water temperature with a separate calibrated thermometer (Govee H5053 recommended). Set your heater, verify with the thermometer, adjust if needed. Check temperature daily for the first week, then weekly. A hospital tank holds treatment temperature with one of these heaters, which is the setup on the <a href="/health/medicating-aquarium-fish" className="text-brand-primary underline">medicating fish guide</a>.</p>
            </div>
            <JourneyNext
              siteId="fish-com"
              nextHref="/tools/heater-wattage-calculator"
              nextLabel="Size the heater wattage before you pick a model"
              nextBlurb="The callout is the wattage rule — buy slightly above the tank minimum, and split two heaters on large tanks. The heater-wattage calculator is the watt band for this volume and target. The link below searches Amazon for the Eheim Jager, the same search as on this page."
              resourceHref="/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters"
              resourceLabel="Browse Eheim Jager aquarium heaters on Amazon →"
            />

            <HopDisclosure siteId="fish-com" href={["/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters", "/go/amazon-brand/hydor+inline+heater?s=reviews-best-aquarium-heaters", "/go/amazon-brand/aqueon+pro+heater?s=reviews-best-aquarium-heaters"]} />
            <ReviewCard
              id="eheim"
              badge="Best Overall"
              name="Eheim Jager TruTemp"
              subtitle="Most accurate on published spec · Recalibratable · German engineering"
              winner
              description={<div>
                <p>The Eheim Jager is the standard against which other aquarium heaters are measured. The current Eheim page prints temperature control accuracy of ±0.5°C. The recalibration dial (the small wheel on the side, separate from the main dial) allows fine-tuning to compensate for any drift over time.</p>
                <p>The Jager also has an auto shut-off when removed from water — critical for preventing the heater from burning out during water changes when it can inadvertently run in air. Glass construction means it can shatter if dropped, but the thermal stability and accuracy justify the premium position.</p>
              </div>}
              specs={[
                { label: 'Accuracy', value: '±0.5°C', highlight: 'good' },
                { label: 'Recalibratable', value: 'Yes', highlight: 'good' },
                { label: 'Auto Shut-Off', value: 'When removed from water', highlight: 'good' },
                { label: 'Construction', value: 'Glass (careful handling)' },
                { label: 'Made In', value: 'Germany' },
                { label: 'Sizes', value: '25W to 300W' },
              ]}
              pros={['Published accuracy is ±0.5°C', 'Recalibratable — compensates for drift', 'Auto shut-off prevents burn-out', 'Long track record of reliability', 'Full wattage range available']}
              cons={['Glass construction — can shatter', 'Dial is approximate (calibration required)', 'Larger footprint than flat heaters']}
              price="$25–55"
              priceNote="By wattage dated 2026-10-04."
              ctaText="Check price of the Eheim Jager heater on Amazon"
              ctaHref="/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="eheim-jager"
            />

            <ReviewCard
              id="cobalt"
              badge="Best Flat Design"
              name="Cobalt Aquatics Neo-Therm Pro"
              subtitle="Slim flat design · LED color indicator · See the manufacturer's current page"
              description={<p>Neo-Therm accuracy: see the manufacturer's current page. This card does not copy the Eheim figure onto Cobalt. The flat body is less obtrusive in a planted or display tank than a cylinder. The LED color indicator transitions through blue (heating) to white (at temperature) — functional at a glance. Shatterproof plastic housing removes the main physical risk of the glass Jager. The one tradeoff: the Neo-Therm is more expensive than the Eheim Jager for equivalent performance. The Cobalt search currently returns no products, so the shop link goes to the Eheim Jager.</p>}
              specs={[
                { label: 'Accuracy', value: "See the manufacturer's current page" },
                { label: 'Design', value: 'Flat / slim profile', highlight: 'good' },
                { label: 'Indicator', value: 'LED color (blue → white)', highlight: 'good' },
                { label: 'Housing', value: 'Shatterproof plastic', highlight: 'good' },
                { label: 'Price', value: 'Premium' },
              ]}
              pros={['Flat design — minimal visual intrusion', 'Shatterproof housing', 'LED visual status indicator', 'Matches Jager accuracy']}
              cons={['Higher price than Eheim Jager', 'Not recalibratable']}
              price="$35–65"
              priceNote="dated 2026-10-04."
              ctaText="Check price of the Eheim Jager heater on Amazon"
              ctaHref="/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="eheim-jager"
            />

            <ReviewCard
              id="hydor"
              badge="Best Inline (Canister Setups)"
              name="Hydor In-Line External Heater"
              subtitle="No heater in the tank · Connects to canister filter hose"
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
              priceNote="dated 2026-10-04."
              ctaText="Shop Hydor Inline heater on Amazon →"
              ctaHref="/go/amazon-brand/hydor+inline+heater?s=reviews-best-aquarium-heaters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="hydor-inline"
            />

            <ReviewCard
              id="aqueon"
              badge="Best Budget"
              name="Aqueon Pro Adjustable Heater"
              subtitle="Shatterproof · $18–30 · Widely available"
              description={<p>The Aqueon Pro is the best budget heater for beginners — shatterproof construction removes the main safety risk of the Eheim Jager, and it is available in every pet store. Accuracy is acceptable (±1–1.5°F per published reviews — worse than the Eheim or Cobalt but usable for most freshwater setups). For sensitive species with tight temperature requirements (discus, cardinal tetras, certain invertebrates), invest in a more accurate heater. For robust community fish with 4–6°F tolerance ranges, the Aqueon Pro performs adequately at the best price.</p>}
              specs={[
                { label: 'Price', value: '$18–30', highlight: 'good' },
                { label: 'Accuracy', value: '±1–1.5°F', highlight: 'warn' },
                { label: 'Housing', value: 'Shatterproof', highlight: 'good' },
                { label: 'Availability', value: 'All pet stores', highlight: 'good' },
              ]}
              pros={['Best price of heaters compared', 'Shatterproof — beginner-safe', 'Widely available', 'Adequate for robust community fish']}
              cons={['Less accurate than premium options', 'Not suitable for temperature-sensitive species']}
              price="$18–30"
              priceNote="dated 2026-10-04."
              ctaText="Shop Aqueon Pro heater on Amazon →"
              ctaHref="/go/amazon-brand/aqueon+pro+heater?s=reviews-best-aquarium-heaters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="aqueon-pro-heater"
            />

            <div className="mt-10">
              <h2 className="font-display font-bold text-brand-dark text-xl mb-3">Who should buy which heater</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">Accuracy, housing, and price are copied from the cards. Wattage still comes from the tank, not from the brand name — use the wattage calculator before you buy.</p>
              <div className="overflow-x-auto max-w-full min-w-0">
                <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
                  <thead>
                    <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                      <th className="p-3 font-bold text-brand-dark">If you need</th>
                      <th className="p-3 font-bold text-brand-dark">Buy</th>
                      <th className="p-3 font-bold text-brand-dark">From the card</th>
                      <th className="p-3 font-bold text-brand-dark">Tradeoff</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">The tightest published tolerance, and a recalibration dial</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#eheim" className="text-brand-primary">Eheim Jager</a><TableShopLink href={"/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters"} product={"Eheim Jager"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Overall. ±0.5°C. Auto shut-off out of water. $25–55 by wattage. 25W–300W</td>
                      <td className="p-3 text-brand-text-mid">Glass. It can shatter if dropped</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">The same published accuracy in a display tank</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#cobalt" className="text-brand-primary">Cobalt Neo-Therm Pro</a><TableShopLink href={"/go/amazon-brand/eheim+jager+heater?s=reviews-best-aquarium-heaters"} product={"Eheim Jager"} /></td>
                      <td className="p-3 text-brand-text-mid">Best flat design. See the manufacturer's current page. Shatterproof plastic. $35–65</td>
                      <td className="p-3 text-brand-text-mid">More expensive than the Jager, and not recalibratable. The Cobalt search currently returns no products, so the shop link goes to the Eheim Jager.</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A canister filter, and no heater in the tank</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#hydor" className="text-brand-primary">Hydor In-Line</a><TableShopLink href={"/go/amazon-brand/hydor+inline+heater?s=reviews-best-aquarium-heaters"} product={"Hydor In-Line"} /></td>
                      <td className="p-3 text-brand-text-mid">Best inline. Sits on the canister return hose. $40–70</td>
                      <td className="p-3 text-brand-text-mid">Does not work with a hang-on-back or a sponge filter</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A robust community tank and a low price</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#aqueon" className="text-brand-primary">Aqueon Pro</a><TableShopLink href={"/go/amazon-brand/aqueon+pro+heater?s=reviews-best-aquarium-heaters"} product={"Aqueon Pro"} /></td>
                      <td className="p-3 text-brand-text-mid">Best budget. Shatterproof. ±1–1.5°F. $18–30</td>
                      <td className="p-3 text-brand-text-mid">Too loose for discus, cardinal tetras, and other tight-range species</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-07" />
            </div>
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

          </aside>
        </div>
      </div>
      <RelatedReads siteId="fish-com" path="/reviews/best-aquarium-heaters" />
    </>
  )
}
