import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Dwarf Gourami Care Guide — DGD Virus, Honey Gourami | Fish.com', description: 'Dwarf gouramis are colorful but disease-prone. DGD (Dwarf Gourami Disease) is incurable and widespread. Honey gouramis are the hardier alternative.', path: '/species/dwarf-gourami', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Dwarf Gourami Care Guide', description: 'DGD virus risk, honey gourami alternative, and community tank compatibility for Trichogaster lalius.', url: 'https://fish.com/species/dwarf-gourami', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function DwarfGouramiPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Dwarf Gourami Care Guide', subtitle: 'Trichogaster lalius — the dwarf gourami\'s vivid coloration (powder blue and fiery orange in males) makes them one of the most sought-after community centerpiece fish. They are also, unfortunately, one of the most disease-prone fish widely sold in the hobby — primarily due to Dwarf Gourami Disease (DGD), a viral condition that has become endemic in mass-farmed dwarf gourami populations.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Dwarf Gourami', href: '/species/dwarf-gourami' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Dwarf Gourami vs Honey Gourami</div>
          <div className="py-2 border-b border-brand-border">
            <div className="text-xs font-bold text-brand-dark">Dwarf Gourami (T. lalius)</div>
            <div className="text-2xs text-brand-text-light">More vivid color · High DGD mortality risk · Wild-type harder to source</div>
          </div>
          <div className="py-2">
            <div className="text-xs font-bold text-brand-dark">Honey Gourami (T. chuna)</div>
            <div className="text-2xs text-brand-text-light">Softer coloration · Much hardier · Rarely carry DGD · Better for beginners</div>
          </div>
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Betta Fish', href: '/species/betta-fish' }, { label: 'Harlequin Rasbora', href: '/species/harlequin-rasbora' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-dwarf-gourami" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Dwarf Gourami Disease (DGD) — The Critical Issue</h2>
        <p>Dwarf Gourami Disease is caused by Dwarf Gourami Iridovirus (DGIV) — a systemic viral infection that has become endemic in the mass-farm operations that supply most of the global aquarium trade with dwarf gouramis. Estimates suggest that 22% or more of commercially produced dwarf gouramis carry the virus at time of purchase. There is no treatment and no cure. Infected fish may appear healthy for months before showing signs: color fading, lesions on the body, swollen abdomen, lethargy, and eventually death.</p>
        <p>The practical implication: a significant percentage of dwarf gouramis purchased from pet stores will die from DGD within 6-18 months regardless of care quality. This is not a reflection of the keeper's skill — it is a supply chain problem. Fish purchased from specialty fish stores or breeders who source from DGD-free suppliers have much better outcomes. The alternative for those who want a similar look without the disease risk: the honey gourami.</p>

        <h2>Honey Gourami — The Recommendation</h2>
        <p>Trichogaster chuna (honey gourami) is the hardier, more disease-resistant smaller gourami that most aquarists who have lost dwarf gouramis to DGD eventually switch to. Males develop golden-yellow to orange coloration with a dark ventral stripe when comfortable and in good condition — not as vivid as the electric dwarf gourami colors, but genuinely attractive. Females are silver-tan. Honey gouramis are smaller (1.5 inches), more peaceful, and more disease-resistant than dwarf gouramis. They are an excellent community centerpiece fish for 10-20 gallon planted tanks.</p>

        <h2>Tank Requirements and Behavior</h2>
        <p>Both species are labyrinth fish — like bettas, they breathe atmospheric air through a labyrinth organ and must have access to the water surface. Ensure the tank has a cover (to maintain warm, humid air above the water surface — breathing cold air stresses labyrinth fish) but leave a gap for air access. No strong surface agitation — they prefer calm water. Both species appreciate heavily planted tanks with floating plants (frogbit, water lettuce) that provide surface cover and diffused lighting. Temperature 76–82°F. pH 6.0–7.5.</p>
        <p>Males of both species are territorial toward other males of the same species — do not keep two males together in a community tank unless the tank is 30+ gallons with significant visual breaks. A single male (or a male-female pair) is appropriate for most community setups. Compatible with virtually all peaceful community fish — harlequin rasboras, corydoras, cherry shrimp, tetras.</p>

        <h2>Bubble Nest Building</h2>
        <p>Male gouramis build floating bubble nests at the water surface — a cluster of air bubbles coated in saliva, anchored to floating plants or the tank edge. Nest building is a sign of a comfortable, well-conditioned male. Eggs are deposited in the nest during spawning, and the male guards the nest aggressively (temporarily — remove the female after spawning to prevent harassment). Fry hatch in 24-36 hours and are very small — fed on infusoria initially. This behavior is one of the most interesting aspects of gourami keeping to observe even without intent to breed.</p>
      </div>
    </ArticleLayout>
  )
}
