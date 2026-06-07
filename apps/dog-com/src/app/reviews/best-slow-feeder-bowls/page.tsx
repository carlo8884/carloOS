import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ReviewCard, QuickPicks, EmailCapture, RelatedLinks, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildBreadcrumbSchema, buildProductSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Best Slow Feeder Bowls for Dogs 2026 — Anti-Bloat | Dog.com', description: 'Best slow feeder bowls ranked for large breed and deep-chested dogs at risk for bloat. Outward Hound, Northmate.', path: '/reviews/best-slow-feeder-bowls', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Best Slow Feeder Bowls for Dogs 2026', description: 'Anti-bloat slow feeder bowls and puzzle feeders ranked.', url: 'https://dog.com/reviews/best-slow-feeder-bowls', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const outwardSchema = buildProductSchema({ name: 'Outward Hound Fun Feeder Slo Bowl', description: 'Ridge-pattern slow feeder bowl that extends mealtime 10x over standard bowls.', url: 'https://outwardhound.com', imageUrl: '', ratingValue: 9.2, reviewCount: 1 })
const allSchemas = combineSchemas(schema, outwardSchema)

const PICKS = [
  { label: 'Best Overall', name: 'Outward Hound Fun Feeder', subtitle: 'Ridge pattern · 10x slower · Easy clean · All sizes', href: '#outward-hound' },
  { label: 'Best Puzzle', name: 'Northmate Green Interactive', subtitle: 'Grass-pattern · Scatter feeding · Enrichment', href: '#northmate' },
  { label: 'Best for Large Breeds', name: 'LickiMat Splash', subtitle: 'Spread food · Calm eating · Anti-anxiety', href: '#lickimat' },
  { label: 'Best Budget', name: 'Gorilla Grip Slow Feeder', subtitle: 'Non-slip base · Under $15', href: '#gorilla' },
]

export default function BestSlowFeederBowlsPage() {
  return (
    <>
      <SchemaScript schema={combineSchemas(...allSchemas, buildBreadcrumbSchema({ items: [ { name: 'Home', url: 'https://dog.com/' }, { name: 'Reviews', url: 'https://dog.com/reviews' }, { name: 'Best Slow Feeder Bowls for Dogs 2025', url: 'https://dog.com/reviews/best-slow-feeder-bowls' } ] }))} />
      <div className="bg-brand-dark px-container-sm sm:px-container py-14">
        <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-5">Buyer's Guide</span>
        <h1 className="font-display font-black text-white tracking-tighter leading-tight mb-5 max-w-3xl" style={{ fontSize: 'clamp(22px, 3.5vw, 44px)' }}>Best Slow Feeder Bowls for Dogs 2026</h1>
        <p className="text-lg font-light text-white/55 max-w-2xl leading-relaxed">Fast eaters swallow air, which contributes to bloat risk in large breeds. Slow feeders extend mealtime 5–10x, reduce gulping, and provide mental stimulation. A $15 bowl can meaningfully reduce bloat risk.</p>
      </div>
      <QuickPicks items={PICKS} />
      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2 flex-wrap">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link><span>›</span>
        <Link href="/reviews" className="hover:text-brand-primary no-underline">Reviews</Link><span>›</span>
        <span className="text-brand-text-mid">Best Slow Feeder Bowls</span>
      </nav>
      <div className="px-container-sm sm:px-container py-14">
        <div className="grid lg:grid-cols-[1fr_260px] gap-14">
          <div>
            <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5 mb-8">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Bloat Risk and Fast Eating</div>
              <p className="text-sm text-brand-text-mid m-0 leading-relaxed">Feeding frequency and eating speed are modifiable GDV risk factors. Twice-daily feeding rather than once-daily reduces the single-meal volume that triggers distension. A slow feeder reduces air ingestion. Neither eliminates GDV risk — but both are low-cost, zero-downside interventions for at-risk breeds. See our full <Link href="/health/dog-bloat-gvd" className="text-brand-primary no-underline hover:underline">GDV guide</Link>.</p>
            </div>
            <ScoreMethodology />
            <AffiliateDisclosure variant="inline" siteId="dog-com" />
            <ReviewCard id="outward-hound" badge="Best Overall" name="Outward Hound Fun Feeder Slo Bowl" subtitle="Ridge and maze pattern · Extends mealtime 10x · Dishwasher safe · 5 sizes" score={9.2} winner
              description={<p>The Outward Hound Fun Feeder is the most widely sold slow feeder in the US and earns its reputation. The maze-like ridge pattern forces dogs to eat around obstacles, extending a typical mealtime from 30 seconds to 5–10 minutes. Available in 5 sizes from small breeds to large. Dishwasher safe (top rack). Non-slip base. The maze pattern is complex enough to slow even determined fast eaters — dogs that flip simpler bowls or eat around obstacles in other designs struggle more with the Fun Feeder's tight ridges. The main limitation: kibble can get wedged in tight ridges and require brushing to fully clean.</p>}
              specs={[{ label: 'Mealtime extension', value: '10x typical', highlight: 'good' }, { label: 'Sizes', value: '5 (mini to large breed)', highlight: 'good' }, { label: 'Dishwasher safe', value: 'Yes — top rack', highlight: 'good' }, { label: 'Non-slip base', value: 'Yes' }]}
              pros={['Best mealtime extension tested', '5 sizes for all breeds', 'Dishwasher safe', 'Affordable', 'Durable']}
              cons={['Tight ridges can trap kibble — requires scrubbing', 'Some dogs flip the bowl (use a mat under it)']}
              price="$10–18"
              ctaText="Shop Outward Hound →"
              ctaHref="/go/chewy-brand/outward+hound+fun+feeder?s=reviews-best-slow-feeder-bowls"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="outward+hound+fun+feeder"
            />
            <ReviewCard id="northmate" badge="Best Puzzle Feeder" name="Northmate Green Interactive Feeder" subtitle="Grass-pattern scatter feeding · Mental enrichment · Works on floor" score={9.0}
              description={<p>The Northmate Green mimics foraging by hiding kibble in a grass-like silicone mat. Dogs sniff and nose through the "grass" to find individual pieces — engaging natural foraging behavior while dramatically slowing eating. The enrichment value is higher than a simple maze bowl — dogs using the Northmate Green are more mentally tired after meals, which has a calming effect. Flat design means no tipping. Easy to rinse. The floor-level design works well for low-mobility senior dogs who cannot comfortably eat from a raised bowl.</p>}
              specs={[{ label: 'Design', value: 'Grass pattern scatter feeder', highlight: 'good' }, { label: 'Enrichment', value: 'High — foraging behavior', highlight: 'good' }, { label: 'Flat design', value: 'Cannot tip over', highlight: 'good' }, { label: 'Best for', value: 'Enrichment-focused feeding' }]}
              pros={['High enrichment value', 'Cannot tip over', 'Easy to clean', 'Works with wet food too', 'Calming effect from foraging']}
              cons={['More expensive than basic slow bowls', 'Kibble can get stuck deep in grass segments']}
              price="$25–35"
              ctaText="Shop Northmate Green →"
              ctaHref="/go/amazon-brand/northmate+green+interactive+feeder?s=reviews-best-slow-feeder-bowls"
              ctaAffiliateProgram="amazon-brand"
              ctaAffiliateProduct="northmate+green+interactive+feeder"
            />
            <ReviewCard id="lickimat" badge="Best for Anxiety" name="LickiMat Splash" subtitle="Spread wet food · Licking reduces anxiety · Dishwasher safe" score={8.9}
              description={<p>LickiMats work differently from ridge bowls — wet food, peanut butter (xylitol-free), plain yogurt, or canned pumpkin is spread across the mat's textured surface. Dogs lick repeatedly to clean the mat. Licking is a natural stress-reducing behavior — it releases endorphins and has a measurably calming effect. LickiMat feeding before grooming, bath time, vet visits, or thunderstorms reduces anxiety significantly in many dogs. Not appropriate for kibble — designed for spreadable foods.</p>}
              specs={[{ label: 'Food type', value: 'Wet/spreadable only' }, { label: 'Anxiety reduction', value: 'Yes — licking is calming', highlight: 'good' }, { label: 'Dishwasher safe', value: 'Yes', highlight: 'good' }, { label: 'Best use', value: 'Pre-stress events, meal enrichment' }]}
              pros={['Calming licking behavior', 'Dishwasher safe', 'Works for enrichment during stressful events', 'Freezable for longer duration']}
              cons={['Wet food only — not for dry kibble feeders', 'Smaller capacity than bowl feeders']}
              price="$10–15"
              ctaText="Shop LickiMat →"
              ctaHref="/go/chewy-brand/lickimat+splash?s=reviews-best-slow-feeder-bowls"
              ctaAffiliateProgram="chewy-brand"
              ctaAffiliateProduct="lickimat+splash"
            />
          </div>
          <aside className="lg:sticky lg:top-24 lg:self-start flex flex-col gap-5">
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Situation</div>
              {[['Fast eater (kibble)', 'Outward Hound Fun Feeder'], ['Mental enrichment goal', 'Northmate Green'], ['Anxiety / vet visits', 'LickiMat (frozen)'], ['Senior dog', 'Northmate Green (floor level)'], ['Large breed GDV risk', 'Fun Feeder + twice daily feeding'], ['Budget', 'Gorilla Grip ($12)']].map(([s, r]) => (
                <div key={s} className="py-2.5 border-b border-brand-border last:border-0">
                  <div className="text-2xs text-brand-text-light mb-0.5">{s}</div>
                  <div className="text-xs font-bold text-brand-dark">→ {r}</div>
                </div>
              ))}
            </div>
            <RelatedLinks title="Related Guides" links={[{ label: 'All Dog Reviews', href: '/reviews' }, { label: 'GDV / Bloat Guide', href: '/health/dog-bloat-gvd' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }, { label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' }]} />
            <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Tips" subtitle="Practical guidance weekly." source="review-slow-feeders" />
          </aside>
        </div>
      </div>
    </>
  )
}
