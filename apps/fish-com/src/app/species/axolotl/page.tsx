import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Axolotl Care Guide — Cold Water, Neoteny | Fish.com', description: 'Axolotls are permanently aquatic salamanders that never metamorphose. Cold water (60-68°F), soft substrate essential (no gravel).', path: '/species/axolotl', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Axolotl Care Guide', description: 'Cold water requirements, neoteny, substrate safety, and feeding for Ambystoma mexicanum axolotls.', url: 'https://fish.com/species/axolotl', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function AxolotlPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Axolotl Care Guide', subtitle: 'Ambystoma mexicanum — the axolotl is one of the most scientifically significant animals kept as a pet. A neotenic salamander that permanently retains larval characteristics, it never undergoes the metamorphosis of related species. Native only to Lake Xochimilco in Mexico (critically endangered in the wild), the aquarium population is large, captive-bred, and genetically distant from the tiny wild population.', category: 'Species Guide — Aquatic', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Axolotl', href: '/species/axolotl' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Ambystoma mexicanum'], ['Adult size', '9–12 inches'], ['Temperature', '60–68°F — cold critical'], ['Max temp', '72°F absolute max (causes fatal stress)'], ['Substrate', 'Fine sand or bare bottom — NO gravel'], ['Filtration', 'Gentle — strong currents stress them'], ['Lifespan', '10–15 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'White Cloud Minnow', href: '/species/white-cloud-mountain-minnow' }, { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' }, { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-axolotl" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Neoteny — Why Axolotls Stay "Larval"</h2>
        <p>Most salamander species undergo metamorphosis — transitioning from aquatic larvae to terrestrial adults. Axolotls are neotenic: they reach sexual maturity while retaining larval characteristics (external gills, aquatic lifestyle, larval body proportions). The metamorphosis pathway still exists in their genetics — it can be triggered by thyroid hormone administration — but in normal conditions it does not occur. This means an axolotl is not a "baby" that will grow into something different; it is a sexually mature adult in its natural form, permanently aquatic, permanently displaying the feathery external gills and broad, flat head that make them distinctive.</p>
        <p>The feathery structures extending from their heads are external gills — the gill filaments are densely branched to maximize surface area for oxygen uptake. Gill plumage health is an indicator of water quality: full, fluffy, well-branched gills indicate good conditions; thin, receding, or curling gills indicate stress, poor water quality, or disease.</p>

        <h2>Temperature — The Critical Constraint</h2>
        <p>Axolotls come from the cold mountain lakes of central Mexico (altitude 2,000+ meters) and require cold water. The optimal range is 60–68°F. Above 72°F, axolotls enter heat stress — appetite decreases, immune function declines, and bacterial and fungal infections become more common. Above 75°F for extended periods is potentially fatal. This temperature requirement is the primary challenge of axolotl keeping in warm climates: a standard room-temperature tank in a house kept at 72°F may already be at the upper limit during summer.</p>
        <p>Solutions for warm climates: an aquarium chiller (expensive but definitive), placing the tank in a naturally cool basement or air-conditioned room, floating frozen water bottles to lower temperature temporarily during heat waves, or a fan blowing across the water surface (evaporative cooling — lowers temperature 3-5°F in appropriate conditions). Do not rely on water bottle cooling as a primary strategy — it creates large temperature swings that stress axolotls as much as sustained warmth.</p>

        <h2>Substrate — Gravel Kills Axolotls</h2>
        <p>This bears emphasis: gravel substrate kills axolotls. Axolotls eat by suction — they lunge at food and create a vacuum that draws prey into their mouths. Loose gravel is ingested during this feeding behavior and causes intestinal impaction. This is not rare — it is common and it kills axolotls. The correct substrates: fine sand (pool filter sand, play sand) that passes through the GI tract harmlessly if ingested, or a completely bare-bottom tank. Decorative gravel, pea gravel, and any loose substrate with particles larger than fine sand is inappropriate and dangerous.</p>

        <h2>Limb Regeneration — Real and Remarkable</h2>
        <p>Axolotls can regenerate lost limbs, portions of their heart and brain, and significant portions of their spinal cord — a regenerative capacity that makes them one of the most studied animals in developmental biology. A missing toe regrows in weeks; a missing limb regenerates over months. The regenerated structure is functionally equivalent to the original. This regenerative ability is one reason axolotls have been extensively used in laboratory research on wound healing and tissue regeneration, with implications for human medicine. In captivity, minor injuries (nipped gill tips from tank companions) typically regenerate completely with appropriate water quality and nutrition.</p>

        <h2>Morphs and Colors</h2>
        <p>Wild-type axolotls are dark brown-green with iridescent speckles. Captive breeding has produced several widely kept color morphs: leucistic (pale pink body with dark eyes — the most common "white axolotl"), albino (white with red eyes and gold iridophores), golden albino (yellow-gold), melanoid (fully dark, reduced iridophores), and piebald (patches of dark and leucistic). All morphs have identical care requirements. Leucistic axolotls are particularly susceptible to bright light — provide shaded areas in their enclosure.</p>
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Axolotl — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for axolotl care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/axolotl%20tank%20setup?s=species-axolotl" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Axolotl Setup on Amazon →</a>
            <a href="/go/chewy-brand/axolotl%20tank%20setup?s=species-axolotl" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
