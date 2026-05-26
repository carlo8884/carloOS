import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Kuhli Loach Care Guide — Burrowing, Groups & Hiding Behavior | Fish.com', description: 'Kuhli loaches are nocturnal burrowers that disappear for days. Groups of 5+ are required — they hide alone but are active in groups. Fine sand substrate essential.', path: '/species/kuhli-loach', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Kuhli Loach Care Guide', description: 'Burrowing behavior, group requirements, and sand substrate care for Pangio kuhlii kuhli loaches.', url: 'https://fish.com/species/kuhli-loach', imageUrl: '', authorName: 'Fish.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function KuhliLoachPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Kuhli Loach Care Guide', subtitle: 'Pangio kuhlii — the kuhli loach is a snake-like, eel-bodied loach from Southeast Asia. Banded in orange and dark brown, they spend most of their time hidden in substrate, under decorations, and crammed into the smallest available spaces. In groups, they become more active and visible. A single kuhli loach in a bare tank will disappear and be presumed dead within a week.', category: 'Species Guide', authorName: 'Fish.com Expert Team', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Kuhli Loach', href: '/species/kuhli-loach' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Pangio kuhlii'], ['Adult size', '3–4 inches'], ['Temperature', '73–86°F'], ['pH', '5.5–7.0 — soft acidic'], ['Group size', '5+ — essential, not optional'], ['Substrate', 'Fine sand — gravel injures barbels'], ['Activity', 'Nocturnal — dim light or evening active']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Corydoras Care', href: '/species/corydoras' }, { label: 'Hillstream Loach', href: '/species/hillstream-loach' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-kuhli" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Hiding Problem — And the Solution</h2>
        <p>A kuhli loach kept alone in a well-decorated tank will hide almost 24 hours a day, rarely emerging even at feeding time, and often not visibly at all for days at a stretch. New kuhli owners frequently post online asking if their loach has died — it has burrowed under the substrate or wedged itself into a filter intake and is invisible. This is not illness or poor adaptation; it is normal solitary behavior for a nocturnal prey species without the social security of a group.</p>
        <p>The solution is consistent: a group of 5 or more kuhli loaches shows dramatically different behavior. The group emerges at dusk and during feeding, tangles with each other in exploratory behavior, and is visible from the front glass regularly in a well-planted tank with appropriate substrate. The same species that "disappeared forever" as a single fish becomes one of the most active and interesting bottom dwellers in a group. The group requirement is not a nice-to-have — it fundamentally changes the animal's behavior and quality of life.</p>

        <h2>Sand Substrate — Not Optional</h2>
        <p>Kuhli loaches bury themselves in substrate — this is a behavioral need, not an occasional curiosity. They also have sensitive barbels (whisker-like sensory organs near the mouth) that they use to forage in soft substrate. Gravel substrate injures these barbels, leading to infection and loss of sensory function over time. Fine sand (pool filter sand, Carib Sea Torpedo Beach, or similar) 2–3 inches deep is the appropriate substrate. The loaches will completely disappear into the sand at times — this is normal, healthy behavior. Watch for them in the evening when they emerge to forage.</p>

        <h2>Feeding</h2>
        <p>Kuhli loaches are omnivorous bottom feeders. They consume sinking foods — sinking pellets, frozen bloodworms, daphnia, and brine shrimp that fall to the substrate. Hikari Sinking Wafers and similar sinking bottom-feeder foods are appropriate staples. Feed after lights-out when the loaches are most active — food added during the day often gets consumed by other fish before the nocturnal loaches emerge. They will also opportunistically consume leftover food from other tank inhabitants during their nighttime foraging, which makes them mildly useful in reducing organic waste accumulation.</p>

        <h2>Escape Artist Warning</h2>
        <p>Kuhli loaches are adept at escaping through any gap in the aquarium cover. They can fit through filter intake holes, overflow pipes, and tiny openings between the lid and the tank edge. A tank with even modest gaps is likely to produce a dried loach somewhere on the floor within the first few weeks of ownership. Ensure all openings are covered — filter intakes should have sponge pre-filters that kuhli loaches cannot enter. Check the area around the tank for escapees, particularly in the first weeks after introduction when the fish is most likely to explore unfamiliar territory.</p>
      </div>
    </ArticleLayout>
  )
}
