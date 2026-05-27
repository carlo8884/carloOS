import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Betta Fish Care Guide — Carnivore Diet, Fin Types & Heater Requirement | Fish.com', description: 'Bettas are carnivores that need protein-rich pellets, not flake food. They need a heater — room temperature is too cold. Complete guide to fins, tankmates, and enrichment.', path: '/species/betta-fish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Betta Fish Care Guide', description: 'Carnivore diet, heater requirement, fin types, and enrichment for Betta splendens.', url: 'https://fish.com/species/betta-fish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BettaFishPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Betta Fish Care Guide', subtitle: 'Betta splendens — the Siamese fighting fish is one of the most commonly purchased aquarium fish and one of the most commonly mistreated. The bowls, vases, and tiny containers sold for betta fish do not constitute adequate housing. A heated, filtered tank of at least 5 gallons is the minimum for a betta to thrive rather than survive.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Betta Fish', href: '/species/betta-fish' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Min tank', '5 gallons — 10 gallons is better'], ['Temperature', '76–82°F — heater required'], ['pH', '6.5–7.5'], ['Diet', 'Carnivore — pellets + frozen protein'], ['Filter', 'Gentle flow — sponge filter ideal'], ['Males together', 'Never — fatal fights'], ['Lifespan', '3–5 years with proper care']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Betta Tank Mates', href: '/species/betta-fish-tank-mates' }, { label: 'Best Nano Tanks', href: '/reviews/best-nano-tanks' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-betta" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Bowl Myth — Why Bettas Die Young</h2>
        <p>The betta in a small unheated bowl or vase is not thriving — it is surviving, slowly, in conditions that compromise immune function and lifespan. The misconception originates from wild bettas living in shallow rice paddies and puddles — technically true, but those environments are large, warm (Thailand's climate keeps water at 78–82°F naturally), and subject to rain dilution that provides regular partial water changes. A 1-gallon unheated bowl in an air-conditioned room provides none of these. Room temperature in most US homes (68–72°F) is below betta's optimal range — cold enough to suppress immune function and promote disease.</p>
        <p>Minimum correct housing: 5-gallon tank with a gentle filter (sponge filter or low-flow internal filter — bettas' long fins are damaged by strong currents) and a heater maintaining 76–82°F. A 10-gallon tank allows planting, more stable water parameters, and more enrichment options. Bettas in appropriately sized, heated, filtered, planted tanks live 3–5 years and display vivid colors and active, curious behavior. The same fish in a bowl rarely reaches 2 years.</p>

        <h2>Bettas Are Carnivores — Feed Accordingly</h2>
        <p>Bettas are insectivores/carnivores that feed on insects, larvae, and small invertebrates in the wild. Their digestive system is not adapted to a plant-heavy diet. Standard tropical fish flake — a staple diet for many community fish — is too low in protein and too high in carbohydrate for optimal betta health. Signs of poor diet over time: fading color, bloating from carbohydrate fermentation in the gut, and reduced immune function.</p>
        <p>Correct betta diet: a high-quality betta-specific pellet (Northfin Betta Bits, Repashy Spawn and Grow, New Life Spectrum Betta Formula — all high-protein with named protein sources) as the primary staple. Supplement with frozen protein 3-4 times weekly: frozen bloodworms (their favorite and excellent conditioning food), frozen daphnia (natural laxative properties — excellent for preventing constipation), frozen mysis shrimp. Feed small amounts twice daily — bettas have stomachs roughly the size of their eye and are prone to overfeeding.</p>

        <h2>Fin Types and Their Care Implications</h2>
        <p><strong>Veil tail:</strong> The most common pet store betta — long, flowing, asymmetrical tail. Prone to fin rot and fin biting (bettas sometimes bite their own fins, apparently from boredom or stress). Requires careful tankmate selection — no fin-nippers.</p>
        <p><strong>Halfmoon:</strong> 180-degree tail spread. Popular show type. The large fins create significant drag — swimming is effortful. Provide resting spots near the surface (floating plants, betta hammocks) so the fish can rest without expending energy to stay near the air they breathe through their labyrinth organ.</p>
        <p><strong>Crowntail:</strong> Spiky, webbing-reduced fins giving a crown-like appearance. Less prone to fin tears than halfmoon but the spikes can catch on rough decorations — keep decor smooth.</p>
        <p><strong>Plakat:</strong> Short-finned — resembling wild-type bettas. More agile, better swimmers, less susceptible to fin damage. Often more aggressive than long-finned varieties. Many experienced betta keepers prefer plakats for their natural behavior and robustness.</p>

        <h2>Intelligence and Enrichment</h2>
        <p>Bettas are among the most intelligent fish commonly kept — they recognize their owners, follow movement at the glass, investigate new objects, and can be trained to swim through hoops and push balls through goals using positive reinforcement (pellet reward). A bored betta in a bare tank develops lethargy, glass-surfing, and sometimes self-harm (fin biting). Enrichment: live or silk plants (bettas rest on broad leaves — silk plants don't tear fins like plastic can), a mirror shown briefly 1-2 times weekly stimulates display behavior and activity (don't overdo it — sustained mirror exposure is stressful), novel objects added to the tank periodically. Bettas genuinely benefit from environmental complexity.</p>

        <h2>Tankmates — What Actually Works</h2>
        <p>Male bettas cannot be kept together — they fight to the death. Female bettas can sometimes be kept in a "sorority" (5+ females in a 20+ gallon heavily planted tank) but aggression is unpredictable and requires monitoring. With other species: bottom dwellers they tend to ignore (small corydoras, kuhli loaches, otocinclus), small peaceful mid-water fish that don't resemble other bettas or have flowing fins (ember tetras, endler's livebearers, small rasboras in larger tanks). Avoid: guppies (male guppies' flowing fins trigger betta aggression), tiger barbs (fin-nippers), any fish with red coloration that resembles a rival male. Individual betta personality varies significantly — the same species that coexists peacefully in one betta's tank may be attacked in another's.</p>
      </div>
    </ArticleLayout>
  )
}
