import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, EmailCapture, PrimaryHop, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, CrossPortfolioCard, JourneyNext, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript, buildItemListSchema} from '@carloOS/ui'
import { crossSiteHref } from '@carloOS/config'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Dog GPS Trackers 2026 — Fi and Tractive | Dog.com', description: 'Fi Series 3+ is the current collar. Tractive is the budget GPS pick. Whistle shut down on August 31, 2025.', path: '/reviews/best-dog-gps-tracker', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Dog GPS Trackers 2026', description: 'Fi Series 3+ and Tractive GPS dog trackers. Whistle shut down on August 31, 2025.', url: 'https://dog.com/reviews/best-dog-gps-tracker', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-10-07T00:00:00Z' })
const fiSchema = buildProductSchema({ name: 'Fi Series 3+ Dog Collar', description: 'Current Fi collar. Fi rates battery life at up to 3 months and has described membership from about $14 a month, with the collar kit included.', url: 'https://dog.com/go/amazon/B0HJ43BQGW?s=reviews-best-dog-gps-tracker', imageUrl: '' })
const allSchemas = combineSchemas(schema, fiSchema)
const PICKS = [
  { label: 'Best Overall', name: 'Fi Series 3+', subtitle: 'Current collar · Up to 3-month battery · LTE', href: '#fi', pickHop: '/go/amazon/B0HJ43BQGW?s=reviews-best-dog-gps-tracker' },
  { label: 'Best Budget', name: 'Tractive GPS', subtitle: 'Lower printed monthly fee · Works globally', href: '#tractive' },
]
const itemList = buildItemListSchema({
  name: "Best Dog GPS Trackers 2026",
  items: PICKS.map((pick) => ({ name: pick.name, url: ({ "Fi Series 3+": "https://dog.com/go/amazon/B0HJ43BQGW?s=reviews-best-dog-gps-tracker", "Tractive GPS": "https://dog.com/go/amazon-brand/tractive+gps+dog+tracker?s=reviews-best-dog-gps-tracker" }[pick.name] ?? `https://dog.com/reviews/best-dog-gps-tracker${pick.href}`) })),
})
export default function BestGPSTrackerPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Dog GPS Trackers 2026', url: 'https://dog.com/reviews/best-dog-gps-tracker' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Buyer's Guide</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Dog GPS Trackers 2026</h1>
        <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">The Fi Series 3+ is the top GPS collar because Fi rates the battery at up to three months.</p>
        <PriceAsOf date="2026-10-08" tone="dark" />
        <div data-fold="offer">
          <PrimaryHop href='/go/amazon/B0HJ43BQGW?s=reviews-best-dog-gps-tracker' label='Check price of the Fi Series 3+ collar on Amazon' />
        <HopDisclosure tone="on-dark" siteId="dog-com" href="/go/amazon/B0HJ43BQGW?s=reviews-best-dog-gps-tracker" />
        </div>
        <EmailCapture
          variant="inline"
          siteId="dog-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-best-dog-gps-tracker"
          checklist={[
            "Fi Series 3+ is the current collar. Fi rates battery life at up to 3 months.",
            "Fi described Series 3+ membership from about $14 a month, with the collar kit included. Confirm the live plan.",
            "Whistle Go Explore shut down on August 31, 2025. A unit on a shelf is not a working tracker.",
            "The Tractive card lists a 2–5 day battery and no health monitoring.",
            "A registered microchip is still the ID that works if the battery dies.",
          ]}
        />

        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">GPS trackers give you a location if your dog escapes, and they need a subscription. Fi Series 3+ is the current Fi collar. Whistle&apos;s service ended on August 31, 2025.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Dog GPS Trackers 2026</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14 min-w-0">
          <div className="min-w-0">
            <JourneyNext
              siteId="dog-com"
              nextHref="/guides/dog-microchipping"
              nextLabel="Register a microchip — GPS is not permanent ID"
              nextBlurb="A GPS collar needs a subscription and a charge. A registered microchip is the ID that still works if the battery dies. Microchipping is the next step: implant plus registry, then the tracker. The hop below is the same Fi Series 3+ search already on this page."
              resourceHref="/go/amazon/B0HJ43BQGW?s=reviews-best-dog-gps-tracker"
              resourceLabel="Browse Fi Series 3+ GPS collars on Amazon →"
            />
            <HopDisclosure siteId="dog-com" href={["/go/amazon/B0HJ43BQGW?s=reviews-best-dog-gps-tracker", "/go/amazon-brand/tractive+gps+dog+tracker?s=reviews-best-dog-gps-tracker"]} />
            <ReviewCard id="fi" badge="Best Overall" name="Fi Series 3+ Dog Collar" subtitle="Current Fi collar · Battery rated up to 3 months · Collar band included" winner
              description={<p>Fi&apos;s current collar is Series 3+, not the older Series 3. Fi rates Series 3+ battery life at up to 3 months and lists AT&amp;T as the cellular provider. The May 2025 Series 3+ announcement described membership from about $14 a month, with the collar kit included. Confirm the live plan before you buy. The app still covers location, activity, and escape alerts.</p>}
              specs={[{ label: 'Battery', value: 'Up to 3 months, per Fi', highlight: 'good' }, { label: 'Network', value: 'AT&T, per Fi' }, { label: 'Membership', value: 'From about $14/mo, kit included', highlight: 'good' }]}
              pros={['Current Fi collar, not the older Series 3', 'Fi rates battery life at up to 3 months', 'Collar band is part of the Series 3+ design']}
              cons={['Membership required', 'Live plan price can change — confirm it', 'Not a substitute for a registered microchip']}
              price="From about $14/mo, kit included"
              priceNote="dated 2026-10-07."
              ctaText="Shop Fi Series 3+ collar on Amazon →"
              ctaHref="/go/amazon/B0HJ43BQGW?s=reviews-best-dog-gps-tracker"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="fi+series+3+dog+collar"
            />
            <section id="whistle" className="border border-brand-border rounded-xl p-5 mb-6">
              <h2 className="font-display text-xl font-bold text-brand-dark mb-2">Whistle Go Explore is not a current pick</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed m-0">Tractive acquired Whistle in July 2025 and shut the Whistle service down on August 31, 2025. Whistle devices no longer report location or health data. Tractive&apos;s free replacement offer ended on September 30, 2025. Do not buy a Whistle Go Explore expecting a working tracker.</p>
            </section>
            <ReviewCard id="tractive" badge="Best Budget" name="Tractive GPS Dog Tracker" subtitle="Lower printed monthly fee than the older Fi card · Works in 175 countries · Simple app"
              description={<p>Tractive is the budget card on this page. The printed range is $4–6/mo on an annual plan and $40–60 for the device, dated 2026-10-07. Confirm the live plan before you buy. It works in 175 countries. Battery life is 2–5 days depending on tracking frequency. The app is simple. This card does not claim health monitoring. It fits owners who want a location and who travel with their dogs.</p>}
              specs={[{ label: 'Monthly fee', value: '$4–6/mo (annual)', highlight: 'good' }, { label: 'Countries', value: '175 — best global coverage', highlight: 'good' }, { label: 'Battery', value: '2–5 days' }, { label: 'Health monitoring', value: 'None' }]}
              pros={['Lower printed monthly fee than the Fi card', '175 countries on the card', 'Simple reliable app', 'Lightweight']}
              cons={['2–5 day battery — frequent charging', 'No health monitoring', 'Less sophisticated app than Fi']}
              price="$40–60 + $4–6/mo"
              priceNote="dated 2026-10-07."
              ctaText="Search Amazon for Tractive GPS"
              ctaHref="/go/amazon-brand/tractive+gps+dog+tracker?s=reviews-best-dog-gps-tracker"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="tractive+gps+dog+tracker"
            />
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which tracker</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Two trackers are current picks. Whistle is listed only so you do not buy a dead service. A microchip is not a live location; that difference is on the <a href="/guides/dog-microchipping" className="text-brand-primary underline">microchipping guide</a>.
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
                      <td className="p-3 text-brand-text-mid">The current Fi collar and escape alerts</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#fi" className="text-brand-primary">Fi Series 3+</a><TableShopLink href={"/go/amazon/B0HJ43BQGW?s=reviews-best-dog-gps-tracker"} product={"Fi Series 3+"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Overall. From about $14/mo, kit included, dated 2026-10-07</td>
                      <td className="p-3 text-brand-text-mid">You do not want a membership. Confirm the live plan</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A Whistle you already own, or a listing you found</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#whistle" className="text-brand-primary">Not a current pick</a></td>
                      <td className="p-3 text-brand-text-mid">Service ended August 31, 2025. No shop link</td>
                      <td className="p-3 text-brand-text-mid">Any new purchase. The devices no longer report a location</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">The lowest printed device price and monthly fee</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#tractive" className="text-brand-primary">Tractive GPS</a><TableShopLink href={"/go/amazon-brand/tractive+gps+dog+tracker?s=reviews-best-dog-gps-tracker"} product={"Tractive GPS"} label="Search Amazon for Tractive GPS" /></td>
                      <td className="p-3 text-brand-text-mid">Best Budget. $40–60 + $4–6/mo. 175 countries</td>
                      <td className="p-3 text-brand-text-mid">You do not want to charge every 2–5 days, or you want health monitoring. The card says there is none</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-09" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which tracker fits</h2>
              <FAQAccordion items={[
                {
                  question: 'Which tracker does this page pick overall?',
                  answer: 'Fi Series 3+, marked Best Overall. The card says membership is required and Fi described it from about $14 a month, dated 2026-10-07, with the collar kit included.',
                },
                {
                  question: 'Can I still buy a Whistle Go Explore?',
                  answer: 'No. Tractive shut the Whistle service down on August 31, 2025. Those devices no longer report location or health data, so this page does not shop them.',
                },
                {
                  question: 'Which tracker does this page pick at the lowest printed fee?',
                  answer: 'Tractive. The printed price is $40–60 plus $4–6 a month. The card lists a 2–5 day battery and no health monitoring.',
                },
              ]} />
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Situation</div>
              {[['Best all-around', 'Fi Series 3+'], ['Escape alerts', 'Fi Series 3+'], ['Whistle Go Explore', 'Not a current pick'], ['International travel', 'Tractive'], ['Lowest printed fee', 'Tractive'], ['Already own a Whistle', 'Service ended Aug 31, 2025']].map(([s, r]) => (
                <div key={s} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light">{s}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'All Dog Reviews', href: '/reviews' }, { label: 'Best Dog Harnesses', href: '/reviews/best-dog-harnesses' }, { label: 'Dachshund Breed Guide', href: '/breeds/dachshund' }, { label: 'Best Pet Insurance', href: crossSiteHref('vets-co', '/reviews/best-pet-insurance') }]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-dog-gps-tracker" />
    </>
  )
}
