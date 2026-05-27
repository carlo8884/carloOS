import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Goldfish Care Guide — Tank Size, Lifespan & Fancy vs Common | Fish.com', description: 'Goldfish are not bowl fish. Common goldfish need 75+ gallons and can live 20+ years. Fancy goldfish have different needs than single-tail varieties. Complete care guide.', path: '/species/goldfish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Goldfish Care Guide', description: 'Tank size, filtration, and care for common and fancy goldfish.', url: 'https://fish.com/species/goldfish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function GoldfishPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Goldfish Care Guide', subtitle: 'Carassius auratus — goldfish are among the most misunderstood fish in the hobby. A common goldfish kept correctly — in an appropriately sized tank or pond with proper filtration — can live 20–25 years and grow to 12–14 inches. The fish dying in bowls is not a reflection of their lifespan; it is a reflection of their conditions. Goldfish deserve better, and with correct care they deliver.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Goldfish', href: '/species/goldfish' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Single-Tail vs Fancy</div>
          <div className="py-2 border-b border-brand-border">
            <div className="text-xs font-bold text-brand-dark">Single-tail (common, comet, shubunkin)</div>
            <div className="text-2xs text-brand-text-light">Fast, active, 12–14"+ adults · Pond or 75+ gal · 20+ year lifespan · Cold tolerant</div>
          </div>
          <div className="py-2">
            <div className="text-xs font-bold text-brand-dark">Fancy (oranda, ryukin, ranchu, telescope)</div>
            <div className="text-2xs text-brand-text-light">Slow, round body, 6–8" · 30+ gal for 2 · Swim bladder issues common · Warmer water</div>
          </div>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Koi Care Guide', href: '/species/koi' }, { label: 'Pond Setup Guide', href: '/setup/pond-guide' }, { label: 'Swim Bladder Disease', href: '/health/swim-bladder-disease' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="species-goldfish" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Bowl Myth — Why Goldfish Don't Belong in Bowls</h2>
        <p>Goldfish in bowls die quickly for predictable reasons: inadequate water volume (a 1-gallon bowl with a 4-inch fish has a toxically high fish-to-water ratio), no filtration (ammonia accumulates rapidly in standing water), and no nitrogen cycle (no beneficial bacteria to convert waste). A common goldfish produces significant waste — they are heavy feeders with fast metabolisms and generate more ammonia per inch than most tropical fish. The "goldfish only live 3 years" belief persists because that is roughly how long goldfish survive in bowls — it is not their natural lifespan.</p>
        <p>Correct housing: a common, comet, or shubunkin goldfish requires a minimum of 30 gallons for the first fish plus 10 gallons per additional fish — and this is the minimum for juveniles. Adults require significantly more, or a pond. A well-filtered 75-gallon tank or 300+ gallon pond allows a small group of single-tail goldfish to reach their full potential — beautiful, 12-inch animals that recognize their owners, swim actively, and live for two decades.</p>

        <h2>The Two Types — Different Fish, Different Needs</h2>
        <p><strong>Single-tail varieties (common goldfish, comet, shubunkin, wakin):</strong> Fast, active, streamlined body. These are the pond goldfish — they need large volumes of water, tolerate cold temperatures including outdoor winters, and grow to 12–14+ inches. Their speed and activity level makes them poor companions for fancy goldfish (they outcompete for food). Common goldfish in well-maintained outdoor ponds routinely live 15–25 years. Cold water tolerant (can overwinter in outdoor ponds in most US climates provided the pond does not freeze solid).</p>
        <p><strong>Fancy varieties (oranda, ryukin, ranchu, telescope eye, lionhead, bubble eye, celestial):</strong> Round, compressed bodies, twin tails, and various head and eye growths. Smaller at 6–8 inches. Slower and less competitive for food. Warmer water preferred (65–72°F). Highly prone to swim bladder disorders due to their compressed anatomy. Cannot outcompete single-tails and should not be housed with them. Fancy goldfish need 20+ gallons for the first fish, 10 gallons per additional fish — and sinking food to prevent surface air ingestion that worsens swim bladder problems.</p>

        <h2>Filtration — Oversized Is the Goal</h2>
        <p>Goldfish are among the highest-waste fish in the hobby — they are nicknamed "aquatic pigs" for their continuous eating and waste production. Filter sizing for goldfish: a filter rated for 3–4× the actual tank volume in turnover per hour. A 40-gallon goldfish tank benefits from a filter rated for 120–160 gallons. Canister filters are ideal — high capacity biological media, easy maintenance, and high flow rates. Sponge filters as supplemental biological filtration add beneficial bacteria capacity without adding significant mechanical filtration. Weekly 25–30% water changes are standard maintenance regardless of filtration quality — goldfish produce dissolved waste that accumulates even with excellent filtration.</p>

        <h2>Feeding — Quality Over Quantity</h2>
        <p>Goldfish are omnivores that will eat continuously if food is available — overfeeding is the most common husbandry mistake. Feed once or twice daily, only what they consume in 2 minutes. A high-quality goldfish pellet (Hikari Lionhead, Repashy Soilent Green, Northfin Goldfish) as the staple. Supplement with blanched vegetables (zucchini, spinach, peas — excellent for gut motility in fancy varieties prone to constipation) and gel food. Avoid cheap goldfish flakes as the primary diet — they break down rapidly and cloud the water.</p>
        <p>Feeding temperature matters: below 50°F, goldfish metabolism slows significantly. Reduce feeding at cooler temperatures and stop feeding below 50°F for goldfish in ponds preparing for winter dormancy — undigested food causes intestinal problems in cold-dormant fish.</p>
      </div>
    </ArticleLayout>
  )
}
