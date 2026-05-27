import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Kuhli Loach Care Guide — Sand Substrate, Groups & Hiding | Fish.com', description: 'Kuhli loaches are eel-shaped bottom fish that require sand, groups of 6+, and dense hiding spots. Nocturnal scavengers that vanish during the day — care guide.', path: '/species/kuhli-loach', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Kuhli Loach Care Guide', description: 'Sand substrate, group size, and hiding requirements for kuhli loaches.', url: 'https://fish.com/species/kuhli-loach', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function KuhliLoachPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Kuhli Loach Care Guide', subtitle: 'Pangio kuhlii — the eel-shaped, tiger-banded loach that spends most of its life invisible under substrate, inside decorations, or tangled in a pile with other kuhli loaches. They are real fish, they are alive, and they are wonderful — you just rarely see them until the lights go out.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Kuhli Loach', href: '/species/kuhli-loach' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Size', '3–4 inches'], ['Group', '6+ required'], ['Substrate', 'Fine sand — essential'], ['Activity', 'Nocturnal — rarely visible daytime'], ['Temperature', '75–86°F'], ['pH', '5.5–7.0 (soft acidic preferred)'], ['Lifespan', '10+ years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Corydoras Care', href: '/species/corydoras' }, { label: 'Otocinclus Care', href: '/species/otocinclus' }, { label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-kuhli-loach" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Sand Substrate — Non-Negotiable</h2>
        <p>Kuhli loaches burrow into substrate. Their soft, scaleless skin is easily damaged by coarse gravel or sharp substrates. Fine sand (pool filter sand, Caribsea Super Naturals, or play sand) is required. In gravel substrates, kuhli loaches attempt to burrow and injure themselves, become stressed, and develop skin abrasions that lead to infection. This is not optional — sand is a welfare requirement for kuhli loaches, not a preference.</p>
        <p>Depth matters: a minimum of 2 inches of fine sand allows them to burrow properly. They will bury themselves completely when stressed or during the day. Finding nothing but sand in the tank after adding kuhli loaches is normal — they are simply hiding.</p>

        <h2>Groups — Why 6+ Changes Everything</h2>
        <p>Kuhli loaches kept singly or in pairs are stressed, reclusive, and spend virtually all their time hiding. In groups of 6+, they become significantly more active — they pile together in hides, emerge more frequently, and exhibit the social behavior that makes them interesting. A group of 10+ kuhli loaches in a planted tank with appropriate hiding spots produces genuinely entertaining behavior, particularly around feeding time when they actively hunt through the substrate.</p>

        <h2>Hiding Spots — More Is More</h2>
        <p>Kuhli loaches are crepuscular to nocturnal and need dense hiding options: hollow driftwood, PVC pipe sections, caves, dense Java moss, and floating plants that reduce light intensity. The more hiding spots, the more secure they feel and the more they venture out. A sparsely decorated tank with kuhli loaches will have invisible kuhli loaches. A densely planted tank with multiple hides will have active, visible (especially at dusk) kuhli loaches.</p>

        <h2>Feeding</h2>
        <p>Bottom scavengers that eat sinking foods. Primary: sinking micro pellets (Hikari Micro Wafers), sinking algae wafers, and frozen foods that reach the bottom — frozen bloodworms (they go wild for these), frozen daphnia, frozen brine shrimp. Feed at lights-out so they can find food without competition from surface and mid-water feeders. They will also scavenge any uneaten food that reaches the bottom — a useful cleanup function. They do not eat hair algae or soft algae the way plecos and otocinclus do — their feeding is scavenging-based, not algae-grazing.</p>

        <h2>Water Parameters and Compatibility</h2>
        <p>Prefer soft, slightly acidic water (pH 6.0–7.0) with good warmth (75–82°F). Adaptable to neutral community tank conditions. Compatible with virtually all peaceful community fish — they occupy bottom territory that does not overlap with mid-water or surface fish. Compatible with peaceful shrimp (they may eat very small shrimp but ignore adult cherry shrimp and larger). Avoid aggressive cichlids and any fish large enough to eat a 4-inch loach.</p>
        <p>Warning: kuhli loaches can squeeze through extremely small gaps in tank lids and equipment — check for any openings in filter inlets (use a pre-filter sponge) and lid gaps before adding them. They will find any gap and explore it.</p>
      </div>
    </ArticleLayout>
  )
}
