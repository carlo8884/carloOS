import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
import { TableShopLink, RelatedReads, ComparisonFoot, PrimaryHop, EmailCapture, buildMetadata, ReviewCard, QuickPicks, RelatedLinks, CrossPortfolioCard, JourneyNext, FAQAccordion, PriceAsOf} from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript, buildItemListSchema} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Slow Feeder Bowls for Dogs 2026 — Anti-Bloat | Dog.com', description: 'Best slow feeder bowls ranked for large breed and deep-chested dogs at risk for bloat. Outward Hound, Northmate.', path: '/reviews/best-slow-feeder-bowls', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Slow Feeder Bowls for Dogs 2026', description: 'Anti-bloat slow feeder bowls and puzzle feeders ranked.', url: 'https://dog.com/reviews/best-slow-feeder-bowls', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const outwardSchema = buildProductSchema({ name: 'Outward Hound Fun Feeder Slo Bowl', description: 'Ridge-pattern slow feeder bowl that extends mealtime 10x over standard bowls.', url: 'https://dog.com/go/chewy-brand/outward+hound+fun+feeder?s=reviews-best-slow-feeder-bowls', imageUrl: '' })
const allSchemas = combineSchemas(schema, outwardSchema)

const PICKS = [
  { label: 'Best Overall', name: 'Outward Hound Fun Feeder', subtitle: 'Ridge pattern · 10x slower · Easy clean · All sizes', href: '#outward-hound', pickHop: '/go/chewy-brand/outward+hound+fun+feeder?s=reviews-best-slow-feeder-bowls' },
  { label: 'Best Puzzle', name: 'Northmate Green Interactive', subtitle: 'Grass-pattern · Scatter feeding · Enrichment', href: '#northmate' },
  { label: 'Best for Large Breeds', name: 'LickiMat Splash', subtitle: 'Spread food · Calm eating · Anti-anxiety', href: '#lickimat' },
]

const itemList = buildItemListSchema({
  name: "Best Slow Feeder Bowls for Dogs 2026",
  items: PICKS.map((pick) => ({ name: pick.name, url: ({ 'Outward Hound Fun Feeder': 'https://dog.com/go/chewy-brand/outward+hound+fun+feeder?s=reviews-best-slow-feeder-bowls', 'Northmate Green Interactive': 'https://dog.com/go/amazon-brand/northmate+green+interactive+feeder?s=reviews-best-slow-feeder-bowls', 'LickiMat Splash': 'https://dog.com/go/chewy-brand/lickimat+splash?s=reviews-best-slow-feeder-bowls' }[pick.name] ?? `https://dog.com/reviews/best-slow-feeder-bowls${pick.href}`) })),
})
export default function BestSlowFeederBowlsPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, itemList, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Slow Feeder Bowls for Dogs 2026', url: 'https://dog.com/reviews/best-slow-feeder-bowls' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">🐾 Buyer's Guide</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Slow Feeder Bowls for Dogs 2026</h1>
        <PriceAsOf date="2026-10-05" tone="dark" />
        <PrimaryHop href='/go/chewy-brand/outward+hound+fun+feeder?s=reviews-best-slow-feeder-bowls' label='Check price of the Outward Hound Fun Feeder on Amazon' />
        <HopDisclosure siteId="dog-com" href="/go/chewy-brand/outward+hound+fun+feeder?s=reviews-best-slow-feeder-bowls" />
        <EmailCapture
          variant="inline"
          siteId="dog-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-best-slow-feeder-bowls"
          checklist={[
            "The Outward Hound Fun Feeder, marked Best Overall.",
            "Kibble wedges in the ridges, and some dogs flip the bowl.",
            "The Northmate Green, marked Best Puzzle Feeder.",
            "The LickiMat Splash, marked Best for Anxiety.",
            "Fast eaters swallow air, which contributes to bloat risk in large breeds.",
            "Slow feeders extend mealtime 5–10x, reduce gulping, and provide mental stimulation.",
          ]}
        />
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Fast eaters swallow air, which contributes to bloat risk in large breeds. Slow feeders extend mealtime 5–10x, reduce gulping, and provide mental stimulation. A slow feeder bowl can meaningfully reduce bloat risk.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid" aria-current="page">Best Slow Feeder Bowls for Dogs 2026</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14 min-w-0">
          <div className="min-w-0">
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Bloat Risk and Fast Eating</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Feeding frequency and eating speed are modifiable GDV risk factors. Twice-daily feeding rather than once-daily reduces the single-meal volume that triggers distension. A slow feeder reduces air ingestion. Neither eliminates GDV risk — but both are low-cost, zero-downside interventions for at-risk breeds. See our full <Link href="/health/dog-bloat-gvd" className="text-brand-primary no-underline hover:underline">GDV guide</Link>.</p>
            </div>
            <JourneyNext
              siteId="dog-com"
              nextHref="/nutrition/how-much-to-feed"
              nextLabel="Split the daily amount before you pick a maze"
              nextBlurb="The callout is the bloat rule — twice-daily feeding plus a slow feeder, not one giant gulp. How-much-to-feed is the next step so each bowl actually holds a smaller half-ration. The button below opens the same Northmate search on Amazon."
              resourceHref="/go/amazon-brand/northmate+green+interactive+feeder?s=reviews-best-slow-feeder-bowls"
              resourceLabel="Search Amazon for Northmate Green"
            />
            <HopDisclosure siteId="dog-com" href={["/go/chewy-brand/outward+hound+fun+feeder?s=reviews-best-slow-feeder-bowls", "/go/amazon-brand/northmate+green+interactive+feeder?s=reviews-best-slow-feeder-bowls", "/go/chewy-brand/lickimat+splash?s=reviews-best-slow-feeder-bowls"]} />
            <ReviewCard id="outward-hound" badge="Best Overall" name="Outward Hound Fun Feeder Slo Bowl" subtitle="Ridge and maze pattern · Extends mealtime 10x · Dishwasher safe · 5 sizes" winner
              description={<p>The Outward Hound Fun Feeder is a widely used slow feeder and earns its reputation. The maze-like ridge pattern forces dogs to eat around obstacles, extending a typical mealtime from 30 seconds to 5–10 minutes. Available in 5 sizes from small breeds to large. Dishwasher safe (top rack). Non-slip base. The maze pattern is complex enough to slow even determined fast eaters — dogs that flip simpler bowls or eat around obstacles in other designs struggle more with the Fun Feeder's tight ridges. The main limitation: kibble can get wedged in tight ridges and require brushing to fully clean.</p>}
              specs={[{ label: 'Mealtime extension', value: '10x typical', highlight: 'good' }, { label: 'Sizes', value: '5 (mini to large breed)', highlight: 'good' }, { label: 'Dishwasher safe', value: 'Yes — top rack', highlight: 'good' }, { label: 'Non-slip base', value: 'Yes' }]}
              pros={['Strong mealtime extension among bowls compared here', '5 sizes for all breeds', 'Dishwasher safe', 'Affordable', 'Durable']}
              cons={['Tight ridges can trap kibble — requires scrubbing', 'Some dogs flip the bowl (use a mat under it)']}
              price="$10–18"
              priceNote="dated 2026-10-05."
              ctaText="Shop Outward Hound Fun Feeder on Amazon →"
              ctaHref="/go/chewy-brand/outward+hound+fun+feeder?s=reviews-best-slow-feeder-bowls"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="outward+hound+fun+feeder"
            />
            <ReviewCard id="northmate" badge="Best Puzzle Feeder" name="Northmate Green Interactive Feeder" subtitle="Grass-pattern scatter feeding · Mental enrichment · Works on floor"
              description={<p>The Northmate Green mimics foraging by hiding kibble in a grass-like silicone mat. Dogs sniff and nose through the "grass" to find individual pieces — engaging natural foraging behavior while dramatically slowing eating. The enrichment value is higher than a simple maze bowl — dogs using the Northmate Green are more mentally tired after meals, which has a calming effect. Flat design means no tipping. Easy to rinse. The floor-level design works well for low-mobility senior dogs who cannot comfortably eat from a raised bowl.</p>}
              specs={[{ label: 'Design', value: 'Grass pattern scatter feeder', highlight: 'good' }, { label: 'Enrichment', value: 'High — foraging behavior', highlight: 'good' }, { label: 'Flat design', value: 'Cannot tip over', highlight: 'good' }, { label: 'Best for', value: 'Enrichment-focused feeding' }]}
              pros={['High enrichment value', 'Cannot tip over', 'Easy to clean', 'Works with wet food too', 'Calming effect from foraging']}
              cons={['More expensive than basic slow bowls', 'Kibble can get stuck deep in grass segments']}
              price="$25–35"
              priceNote="dated 2026-10-05."
              ctaText="Search Amazon for Northmate Green"
              ctaHref="/go/amazon-brand/northmate+green+interactive+feeder?s=reviews-best-slow-feeder-bowls"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="northmate+green+interactive+feeder"
            />
            <ReviewCard id="lickimat" badge="Best for Anxiety" name="LickiMat Splash" subtitle="Spread wet food · Licking reduces anxiety · Dishwasher safe"
              description={<p>LickiMats work differently from ridge bowls — wet food, peanut butter (xylitol-free), plain yogurt, or canned pumpkin is spread across the mat's textured surface. Dogs lick repeatedly to clean the mat. Licking is a natural stress-reducing behavior — it releases endorphins and has a measurably calming effect. LickiMat feeding before grooming, bath time, vet visits, or thunderstorms reduces anxiety significantly in many dogs. Not appropriate for kibble — designed for spreadable foods.</p>}
              specs={[{ label: 'Food type', value: 'Wet/spreadable only' }, { label: 'Anxiety reduction', value: 'Yes — licking is calming', highlight: 'good' }, { label: 'Dishwasher safe', value: 'Yes', highlight: 'good' }, { label: 'Best use', value: 'Pre-stress events, meal enrichment' }]}
              pros={['Calming licking behavior', 'Dishwasher safe', 'Works for enrichment during stressful events', 'Freezable for longer duration']}
              cons={['Wet food only — not for dry kibble feeders', 'Smaller capacity than bowl feeders']}
              price="$10–15"
              priceNote="dated 2026-10-05."
              ctaText="Shop LickiMat Splash on Amazon →"
              ctaHref="/go/chewy-brand/lickimat+splash?s=reviews-best-slow-feeder-bowls"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="lickimat+splash"
            />
            <div className="mt-10">
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-3">Who should buy which feeder</h2>
              <p className="text-sm text-brand-text-mid leading-relaxed mb-4">
                Three feeders have review cards. The job, the price, and the food type are already on those cards.
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
                      <td className="p-3 text-brand-text-mid">A kibble bowl that slows a fast eater</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#outward-hound" className="text-brand-primary">Outward Hound Fun Feeder</a><TableShopLink href={"/go/chewy-brand/outward+hound+fun+feeder?s=reviews-best-slow-feeder-bowls"} product={"Outward Hound Fun Feeder"} /></td>
                      <td className="p-3 text-brand-text-mid">Best Overall. Maze ridges. 5 sizes. Dishwasher safe, top rack. $10–18</td>
                      <td className="p-3 text-brand-text-mid">You will not scrub the ridges. Kibble wedges in them. Some dogs flip the bowl</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">Foraging enrichment, or a floor-level feeder a senior can use</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#northmate" className="text-brand-primary">Northmate Green</a><TableShopLink href={"/go/amazon-brand/northmate+green+interactive+feeder?s=reviews-best-slow-feeder-bowls"} product={"Northmate Green"} label="Search Amazon for Northmate Green" /></td>
                      <td className="p-3 text-brand-text-mid">Best Puzzle Feeder. Flat, so it cannot tip. Works with wet food. $25–35</td>
                      <td className="p-3 text-brand-text-mid">You want the cheapest maze bowl. Kibble can stick deep in the grass segments</td>
                    </tr>
                    <tr className="border-b border-brand-border">
                      <td className="p-3 text-brand-text-mid">A lick mat before a stressful event, using a spreadable food</td>
                      <td className="p-3 font-bold text-brand-dark"><a href="#lickimat" className="text-brand-primary">LickiMat Splash</a><TableShopLink href={"/go/chewy-brand/lickimat+splash?s=reviews-best-slow-feeder-bowls"} product={"LickiMat Splash"} /></td>
                      <td className="p-3 text-brand-text-mid">Best for Anxiety. Wet or spreadable food only. Dishwasher safe. Freezable. $10–15</td>
                      <td className="p-3 text-brand-text-mid">The dog eats dry kibble. The card says it is not a kibble bowl, and the capacity is smaller</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <ComparisonFoot updated="2026-10-09" />
              <h2 className="font-display text-2xl font-bold text-brand-dark mb-4">Which feeder fits which meal</h2>
              <FAQAccordion items={[
                {
                  question: 'Which feeder does this page pick for a dog that gulps kibble?',
                  answer: 'The Outward Hound Fun Feeder, marked Best Overall. The card lists maze ridges, five sizes, a top-rack dishwasher, and a printed price of $10–18. Kibble wedges in the ridges, and some dogs flip the bowl.',
                },
                {
                  question: 'Which feeder does this page pick for foraging or a senior?',
                  answer: 'The Northmate Green, marked Best Puzzle Feeder. The card says it is flat so it cannot tip, it works with wet food, and the printed price is $25–35. Kibble can stick deep in the grass segments.',
                },
                {
                  question: 'Which feeder does this page pick before a stressful event?',
                  answer: 'The LickiMat Splash, marked Best for Anxiety. The card says it takes wet or spreadable food only, is dishwasher safe and freezable, and the printed price is $10–15. It is not a kibble bowl.',
                },
              ]} />
            </div>
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Situation</div>
              {[['Fast eater (kibble)', 'Outward Hound Fun Feeder'], ['Mental enrichment goal', 'Northmate Green'], ['Anxiety / vet visits', 'LickiMat (frozen)'], ['Senior dog', 'Northmate Green (floor level)'], ['Large breed GDV risk', 'Fun Feeder + twice daily feeding'], ['Budget', 'Outward Hound Fun Feeder ($10–18)']].map(([s, r]) => (
                <div key={s} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{s}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'All Dog Reviews', href: '/reviews' }, { label: 'GDV / Bloat Guide', href: '/health/dog-bloat-gvd' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }, { label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' }]} />

          </aside>
        </div>
      </div>
      <CrossPortfolioCard currentSite="dog-com" contentType="review" variant="footer" />
      <RelatedReads siteId="dog-com" path="/reviews/best-slow-feeder-bowls" />
    </>
  )
}
