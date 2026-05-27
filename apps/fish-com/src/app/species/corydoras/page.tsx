import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Corydoras Care Guide — Species, Sand Substrate | Fish.com', description: 'Corydoras are the most popular bottom dwellers. Groups of 6+ same species required. Sand substrate essential.', path: '/species/corydoras', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Corydoras Catfish Care Guide', description: 'Species overview, sand requirements, and group care for corydoras catfish.', url: 'https://fish.com/species/corydoras', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function CorydorasPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Corydoras Catfish Care Guide', subtitle: 'Corydoras are the most widely kept bottom-dwelling fish in the freshwater hobby — peaceful, active, fascinating to watch, and available in over 150 species ranging from the tiny pygmy cory at 1 inch to the emerald catfish at 3.5 inches. One rule applies to all: groups of 6+, same species, on sand.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Corydoras', href: '/species/corydoras' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Popular Species</div>
          {[
            ['C. sterbai', '2.7" · Warm tolerant (82°F+) · Spotted'],
            ['C. panda', '2" · Black/white panda marking'],
            ['C. pygmaeus', '1" · Midwater swimming · Nano tanks'],
            ['C. julii', '2.5" · True julii vs trilineatus (common mix-up)'],
            ['C. paleatus', '3" · Hardy · Good beginner cory'],
            ['C. adolfoi', '2" · Orange head · Striking coloration'],
            ['C. duplicareus', '2.5" · Bold black stripe · Similar to adolfoi'],
          ].map(([n, d]) => (
            <div key={n} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{n}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Kuhli Loach', href: '/species/kuhli-loach' }, { label: 'Otocinclus Care', href: '/species/otocinclus' }, { label: 'Betta Tank Mates', href: '/species/betta-fish-tank-mates' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-corydoras" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Group Rule — Same Species, 6 Minimum</h2>
        <p>Corydoras are social catfish that school by species. A group of 6 mixed species — 2 panda cories, 2 sterbai, 2 paleatus — does not function as a cohesive social unit in the way that 6 panda cories do. Each species schools primarily with conspecifics. Mixed-species groups produce less confident, less active fish that hide more and school less. Six of the same species minimum is the correct approach — and 10-12 produces a noticeably more active, confident, and visually interesting group than 6.</p>
        <p>The exception: pygmy corydoras (C. pygmaeus, C. habrosus, C. hastatus) do interact somewhat across their miniature species and can be kept in mixed pygmy groups effectively — they also swim in the middle of the water column rather than the bottom, unlike most corydoras.</p>

        <h2>Sand Substrate — Non-Negotiable</h2>
        <p>Corydoras forage by pushing their sensitive barbels (whisker-like sensory organs around the mouth) through the substrate to find food. Coarse gravel and sharp substrates abrade these barbels — causing erosion, infection, and eventual loss. A corydoras with missing or shortened barbels has been kept on inappropriate substrate. Fine sand (pool filter sand, CaribSea Super Naturals, or play sand rinsed well) is required. Pool filter sand is the most economical option and works excellently. Sand depth: 2+ inches for corydoras that like to burrow (most species).</p>
        <p>Corydoras also swallow sand during foraging and expel it through their gills — this is normal behavior, not disease. Sand should be fine enough to pass through without causing internal damage, which fine sand does safely.</p>

        <h2>Water Temperature — Know Your Species</h2>
        <p>Most corydoras prefer 72–78°F — cooler than many tropical fish, which limits compatibility with warm-water species. The key exception: <strong>Corydoras sterbai</strong> tolerates temperatures up to 82–84°F comfortably, making it the only corydoras appropriate for discus tanks, German Blue Ram tanks, and other warm-water setups. Sterbai is distinctly spotted — do not confuse with C. haraldschultzi. For warmer community tanks (80°F+), sterbai is the corydoras to use.</p>

        <h2>Feeding</h2>
        <p>Corydoras are omnivorous scavengers — they eat what falls to the substrate. They do not eat algae like plecos or otocinclus. Primary diet: sinking wafers (Hikari Sinking Wafers, Omega One Veggie Rounds), sinking micro pellets, and frozen foods that reach the bottom — frozen bloodworms and frozen brine shrimp are enthusiastically consumed. They will also eat uneaten food from other fish, though relying on this for nutrition leads to malnutrition.</p>
        <p>Feed specifically for the corydoras at lights-out — drop sinking food near their foraging areas after other fish have finished eating. Competition from faster mid-water feeders can prevent corydoras from getting adequate nutrition if feeding is not targeted.</p>

        <h2>Spawning — A Sign of Good Care</h2>
        <p>Corydoras spawn in response to water temperature drops — mimicking the rainy season in their South American native range. Performing a partial water change with slightly cooler water (5–10°F below tank temperature) often triggers spawning behavior within hours. Eggs are deposited on glass, plants, and decorations. Parents do not guard eggs; other fish and even the parents will eat them. For fry: remove eggs to a separate container with gentle aeration, methylene blue to prevent fungal growth, and hatching typically in 3-5 days. Fry accept micro worms and baby brine shrimp.</p>

        <h2>Barbel Health — The Diagnostic Check</h2>
        <p>Check corydoras barbels at every water change. Full-length, intact barbels indicate correct substrate and good water quality. Shortened, eroded, or absent barbels indicate substrate problems (switch to fine sand immediately) or chronically poor water quality (elevated ammonia or nitrate). Barbel erosion in progress may partially recover on correct substrate if the underlying cause is addressed before complete barbel loss.</p>
      </div>
    </ArticleLayout>
  )
}
