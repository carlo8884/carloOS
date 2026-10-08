import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, EmailCapture, PrimaryHop, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, JourneyNext, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildItemListSchema, buildProductSchema, buildBreadcrumbSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Best Canister Filters 2026 — Fluval, Eheim | Fish.com', description: 'Best canister filters for aquariums 40-150 gallons. Fluval 307, Eheim Classic, and Penn Plax Cascade ranked for flow rate, media capacity, and noise.', path: '/reviews/best-canister-filters', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Best Canister Filters 2026', description: 'Fluval, Eheim, and Penn Plax canister filters ranked for mid-to-large aquariums.', url: 'https://fish.com/reviews/best-canister-filters', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-10-07T00:00:00Z' })
const fluvalSchema = buildProductSchema({ name: 'Fluval 307 Performance Canister Filter', description: 'Near-silent canister filter for 40-70 gallon aquariums with AquaStop valve.', url: 'https://fish.com/go/amazon/B07JH4JHTC?s=reviews-best-canister-filters', imageUrl: '' })
const eheimSchema = buildProductSchema({ name: 'Eheim Classic 350 Canister Filter', description: 'German-engineered classic canister filter — bulletproof reliability for 40-92 gallons.', url: 'https://fish.com/go/amazon/B0002AQXV8?s=reviews-best-canister-filters', imageUrl: '' })
const allSchemas = combineSchemas(schema, fluvalSchema, eheimSchema)
const PICKS = [
  { label: 'Best Overall', name: 'Fluval 307', subtitle: 'Near-silent · AquaStop · 40-70 gal', href: '#fluval', pickHop: '/go/amazon/B07JH4JHTC?s=reviews-best-canister-filters' },
  { label: 'Most Reliable', name: 'Eheim Classic 350', subtitle: 'German engineering · Runs forever', href: '#eheim' },
  { label: 'Best Budget', name: 'Penn Plax Cascade 1000', subtitle: 'Good value · 100 gal · Lower cost', href: '#penn-plax' },
]
// GEO: ItemList of the ranked picks. Names + URLs come only from this page's
// PICKS. No aggregateRating, no fabricated specs (QC §1.4).
const itemList = buildItemListSchema({
  name: 'Best Canister Filters 2026',
  items: PICKS.map((p) => ({ name: p.name, url: ({ "Fluval 307": "https://fish.com/go/amazon/B07JH4JHTC?s=reviews-best-canister-filters", "Eheim Classic 350": "https://fish.com/go/amazon/B0002AQXV8?s=reviews-best-canister-filters" }[p.name] ?? `https://fish.com/reviews/best-canister-filters${p.href}`) })),
})
export default function BestCanisterFiltersPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [{ name: 'Home', url: 'https://fish.com/' }, { name: 'Reviews', url: 'https://fish.com/reviews' }, { name: 'Best Canister Filters 2026', url: 'https://fish.com/reviews/best-canister-filters' }] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-4">Buyer's Guide</span>
        <h1 className="font-display font-bold text-white tracking-tight leading-tight mb-4 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Canister Filters 2026</h1>
        <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">The Fluval 307 is the top canister filter because separate baskets hold mechanical, chemical, and biological media.</p>
        <PriceAsOf date="2026-10-05" tone="dark" />
        <div data-fold="offer">
          <PrimaryHop href='/go/amazon/B07JH4JHTC?s=reviews-best-canister-filters' label='Check price of the Fluval 307 canister filter on Amazon' />
        <HopDisclosure tone="on-dark" siteId="fish-com" href="/go/amazon/B07JH4JHTC?s=reviews-best-canister-filters" />
        </div>
        <EmailCapture
          variant="inline"
          siteId="fish-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-best-canister-filters"
          checklist={[
            "The card says the primer button can be finicky on first start.",
            "The card says it has no AquaStop and is slightly louder than the Fluval 307.",
            "Canister filters sit outside the tank, hold more media than HOB filters, and run quietly.",
            "For planted tanks, heavily stocked tanks, and aquariums 40+ gallons \u2014 canister filters are the standard.",
            "Setup is straightforward for a canister.",
            "Impeller design is efficient \u2014 flow rates are real-world accurate rather than inflated marketing numbers.",
          ]}
        />

        <p className="text-lg font-normal text-white/55 max-w-2xl leading-relaxed">Canister filters sit outside the tank, hold more media than HOB filters, and run quietly. For planted tanks, heavily stocked tanks, and aquariums 40+ gallons — canister filters are the standard. How that compares with a hang-on-back is on the <a href="/reviews/hob-vs-canister-guide" className="underline text-white">HOB versus canister guide</a>.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Canister Filters 2026</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14 min-w-0">
          <div className="min-w-0">

            <div className="bg-brand-surface border border-brand-border rounded-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Bottom Line</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">For 40–70 gallon tanks the <strong>Fluval 307</strong> is our overall pick — near-silent, with an AquaStop valve that lets you change media without disconnecting hoses. For maximum long-term reliability, the <strong>Eheim Classic 350</strong> is the pick — decades of track record. The <strong>Penn Plax Cascade 1000</strong> is the best-value budget canister for larger tanks.</p>
            </div>
            <JourneyNext
              siteId="fish-com"
              nextHref="/tools/filter-gph-calculator"
              nextLabel="Size canister GPH against the tank before you buy the 307"
              nextBlurb="The bottom line is the size band — Fluval 307 for 40–70 gallons, Eheim Classic when you want decades of runtime. Filter-GPH is the next step: 4–6× turnover, then pick the canister that actually hits it. The hop below is the same Fluval 307 search already on this page."
              resourceHref="/go/amazon/B07JH4JHTC?s=reviews-best-canister-filters"
              resourceLabel="Browse Fluval 307 canister filters on Amazon →"
            />
            <HopDisclosure siteId="fish-com" href={["/go/amazon/B07JH4JHTC?s=reviews-best-canister-filters", "/go/amazon/B0002AQXV8?s=reviews-best-canister-filters"]} />
            <ReviewCard id="fluval" badge="Best Overall" name="Fluval 307 Performance Canister Filter" subtitle="Near-silent · AquaStop valve · Multi-stage media baskets · 40-70 gal" winner
              description={<p>The Fluval 307 is the current benchmark for canister filters in the 40–70 gallon range — near-silent operation, excellent media capacity with 4 separated baskets (mechanical, chemical, biological staged properly), and the AquaStop valve that allows media changes without disconnecting hoses. The sound dampening is genuinely impressive compared to older canister filters — you have to get very close to hear it running. Setup is straightforward for a canister. The current Fluval page prints pump output of 303 US GPH and filter circulation of 206 US GPH. Lid design seals reliably. 5-year warranty.</p>}
              specs={[{ label: 'Tank size', value: '40–70 gallons' }, { label: 'Flow rate', value: 'Pump output 303 US GPH. Circulation 206 US GPH.', highlight: 'good' }, { label: 'Noise', value: 'Near-silent', highlight: 'good' }, { label: 'AquaStop', value: 'Yes — media change without disconnect', highlight: 'good' }, { label: 'Warranty', value: '5 years' }]}
              pros={['Near-silent', 'AquaStop for easy maintenance', 'Excellent media capacity', '5-year warranty', 'Pump output and circulation are both printed']}
              cons={['Primer button can be finicky on first start', 'More expensive than Penn Plax']}
              price="$120–150"
              priceNote="dated 2026-10-05."
              ctaText="Check price of the Fluval 307 canister filter on Amazon"
              ctaHref="/go/amazon/B07JH4JHTC?s=reviews-best-canister-filters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="fluval-307"
            />
            <ReviewCard id="eheim" badge="Most Reliable" name="Eheim Classic 350 (2215)" subtitle="German engineering · Runs for decades · Simple design · Up to 92 US gal"
              description={<p>The Eheim Classic line has been running continuously in aquariums since the 1960s. The 2215 is not the most feature-rich or the quietest filter on the market, but it is widely regarded as among the most reliable — with one of the longest field track records in the category. Simple impeller design, robust construction, and a track record measured in decades. Many hobbyists have Classic filters running continuously for 10–15+ years with only impeller replacement. The media basket system is less sophisticated than Fluval's staged baskets, but the Eheim's longevity and bulletproof reliability justify its continued popularity among serious hobbyists who have been burned by cheaper filters dying in year 3.</p>}
              specs={[{ label: 'Tank size', value: 'About 120 liters, up to 92 US gallons' }, { label: 'Flow rate', value: '164 US GPH at 120 V / 60 Hz' }, { label: 'Reliability', value: 'Among the best — decades of track record', highlight: 'good' }, { label: 'Noise', value: 'Quiet (not silent)' }]}
              pros={['Legendary long-term reliability', 'Simple to maintain', 'German engineering quality', 'Runs for 10-15+ years']}
              cons={['Less sophisticated media separation than Fluval', 'Older design — no AquaStop', 'Slightly louder than Fluval 307']}
              price="$100–130"
              priceNote="dated 2026-10-05."
              ctaText="Shop Eheim Classic 2215 on Amazon →"
              ctaHref="/go/amazon/B0002AQXV8?s=reviews-best-canister-filters"
              ctaAffiliateProgram="amazon"
              ctaAffiliateProduct="eheim-classic-2215"
            />
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which filter</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Two canisters have review cards. Penn Plax Cascade is named in the picks strip and does not have a card or a printed price here.
              </p>
              <div className="overflow-x-auto max-w-full min-w-0 mb-8">
                <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
                  <thead>
                    <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                      <th className="p-3 font-bold text-brand-dark">If you need</th>
                      <th className="p-3 font-bold text-brand-dark">Buy</th>
                      <th className="p-3 font-bold text-brand-dark">From the card</th>
                      <th className="p-3 font-bold text-brand-dark">Skip it when</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A quiet canister for about 40–70 gallons</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#fluval" className="text-brand-primary">Fluval 307</a><TableShopLink href={"/go/amazon/B07JH4JHTC?s=reviews-best-canister-filters"} product={"Fluval 307"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Overall. $120–150</td>
                      <td className="p-3 text-brand-text-mid">The primer button is finicky on first start. The card also says it costs more than Penn Plax</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A canister meant to run for years</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#eheim" className="text-brand-primary">Eheim Classic 350</a><TableShopLink href={"/go/amazon/B0002AQXV8?s=reviews-best-canister-filters"} product={"Eheim Classic 350"} /></td>
                      <td className="p-3 text-brand-text-mid">Most Reliable. $100–130</td>
                      <td className="p-3 text-brand-text-mid">You want AquaStop or quieter media baskets. The card says this older design has neither, and it is slightly louder than the Fluval 307</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-08" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which canister fits</h2>
              <FAQAccordion items={[
                {
                  question: 'Which canister does this page pick overall?',
                  answer: 'The Fluval 307, marked Best Overall. The printed price is $120–150. The card says the primer button can be finicky on first start.',
                },
                {
                  question: 'Which canister does this page pick for long-term reliability?',
                  answer: 'The Eheim Classic 350. The printed price is $100–130. The card says it has no AquaStop and is slightly louder than the Fluval 307.',
                },
              ]} />
            </div>
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

          </aside>
        </div>
      </div>
      <RelatedReads siteId="fish-com" path="/reviews/best-canister-filters" />
    </>
  )
}
