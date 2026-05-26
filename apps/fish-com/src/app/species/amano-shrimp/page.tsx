import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Amano Shrimp Care Guide — Best Algae Eater, Molting & Tank Mates | Fish.com', description: 'Amano shrimp are the most effective algae-eating shrimp. 2-inch adults eat hair algae and biofilm. Groups of 5+, established tanks, and no copper. Complete care guide.', path: '/species/amano-shrimp', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Amano Shrimp Care Guide', description: 'Algae control, molting, group care, and compatibility for Caridina multidentata amano shrimp.', url: 'https://fish.com/species/amano-shrimp', imageUrl: '', authorName: 'Fish.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function AmanoShrimpPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Amano Shrimp Care Guide', subtitle: 'Caridina multidentata — named after Japanese aquascaper Takashi Amano who popularized their use for algae control. At 2 inches they are the largest commonly kept freshwater shrimp and the most effective algae eaters in the hobby. They eat hair algae, filamentous algae, and biofilm that smaller shrimp cannot manage.', category: 'Species Guide — Invertebrate', authorName: 'Fish.com Expert Team', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Amano Shrimp', href: '/species/amano-shrimp' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Caridina multidentata'], ['Adult size', '1.5–2 inches (larger than cherry shrimp)'], ['Min group', '5+ — more is better for algae control'], ['Temperature', '65–80°F (cooler preferred)'], ['pH', '6.0–8.0 (adaptable)'], ['Copper', 'LETHAL — check all additives'], ['Breeding', 'Requires brackish larvae — not in freshwater'], ['Lifespan', '2–3 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }, { label: 'Otocinclus Care', href: '/species/otocinclus' }, { label: 'Best Planted Fertilizers', href: '/reviews/best-planted-tank-fertilizers' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-amano-shrimp" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Best Algae Eater — Why Amano Shrimp Are Different</h2>
        <p>Amano shrimp eat algae that most other algae-eating species cannot or will not consume. Their primary target: hair algae (Spirogyra, Cladophora) — the long, stringy, thread-like algae that tangles around plants and decorations and is notoriously difficult to control. A group of 10+ amano shrimp in a planted tank with a hair algae problem will visibly reduce the algae load within a week. They also consume green dust algae, film algae, and biofilm from surfaces. They do not eat brush algae (BBA — black beard algae) effectively — CO2 and Excel spot treatments remain the best approach for BBA.</p>
        <p>Their larger size (compared to Neocaridina or Caridina species) means they can handle more robust algae material, are less easily eaten by community fish, and are more visible — watching a group of amano shrimp work through hair algae is genuinely satisfying.</p>

        <h2>Copper — Immediately Lethal</h2>
        <p>Copper kills invertebrates at extremely low concentrations — concentrations safe for fish are lethal to shrimp. This applies to: copper-based algaecides (API Algaefix contains copper), copper-based disease treatments, tap water from old copper pipes, and some fertilizers. Before adding amano shrimp to a tank: check the ingredients of every additive used in that tank. If you have ever used a copper-based treatment in the tank, test for copper residue before adding shrimp.</p>

        <h2>Tank Requirements and Water Quality</h2>
        <p>Amano shrimp are more tolerant of water parameters than crystal shrimp or bee shrimp, but require an established, cycled tank. Ammonia and nitrite must be 0 ppm — amano shrimp are sensitive to ammonia spikes during cycling. They prefer cooler temperatures than most tropical fish (65–78°F optimal) — at 80°F+ they are more stressed and shorter-lived. This makes them compatible with room-temperature setups, hillstream loach tanks, and cool planted tanks but less ideal for discus or German Blue Ram tanks running at 80–84°F.</p>
        <p>Minimum 5 per tank — amano shrimp are more active and visible in groups. For meaningful algae control in a planted tank, 1 amano shrimp per 2–5 gallons of tank volume is the commonly cited guideline (10 shrimp in a 20–30 gallon planted tank). They will always have more work than they can do in an algae-prone tank.</p>

        <h2>Molting — The Vulnerable Period</h2>
        <p>Amano shrimp molt periodically as they grow — shedding their exoskeleton completely. A freshly molted amano shrimp is soft, slow, and vulnerable for 12–24 hours. During this period, normally peaceful tankmates may attack them. Dense planting provides hiding spots. Leave the empty exoskeleton in the tank — other shrimp will consume it for the mineral content. If amano shrimp are frequently dying during molts, the calcium and magnesium content of the water may be insufficient — a GH of 6–8 supports healthy molting. Seachem Equilibrium raises GH without affecting KH if supplementation is needed.</p>

        <h2>Breeding — Why They Don't Breed in Freshwater</h2>
        <p>Amano shrimp have a unique larval stage that requires brackish water. The female carries eggs (visible as a dense green cluster under her abdomen), which hatch as larvae that must be transported to brackish water to develop. In a freshwater aquarium, larvae cannot survive and breeding does not succeed. The amano shrimp population in a tank only decreases over time — they do not breed and repopulate like cherry shrimp. This makes them more expensive per-tank-long-term but also means no population explosion concerns.</p>
      </div>
    </ArticleLayout>
  )
}
