import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Kasselmann, C. Aquarium Plants. Krieger Publishing, 2003.", publisher: "Krieger Publishing" },
  { label: "Walstad, D.L. Ecology of the Planted Aquarium, 3rd ed. Echinodorus Publishing, 2013.", publisher: "Echinodorus Publishing" },
  { label: "Amano, T. Nature Aquarium World, Book 1. TFH Publications, 1994.", publisher: "TFH Publications" },
  { label: "Aquatic Plants for the Aquarium — UF/IFAS Extension, FA-16", url: "https://edis.ifas.ufl.edu/publication/FA016", publisher: "UF/IFAS Extension" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Aquascaping Guide — Layout, Hardscape & Composition | Fish.com', description: "Aquascaping fundamentals: the rule of thirds, golden ratio, iwagumi and nature-style layouts, hardscape selection, and foreground-to-background planting.", path: '/setup/aquascaping-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Aquascaping Guide', description: 'Composition principles, layout styles, hardscape, and planting structure for aquascaping.', url: 'https://fish.com/setup/aquascaping-guide', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})
export default function AquascapingGuidePage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Aquascaping Guide', subtitle: "Aquascaping is the craft of arranging plants, rock, wood, and substrate into an underwater landscape that follows the same compositional principles as painting and garden design. A thoughtfully scaped tank reads as a single, intentional scene rather than a collection of objects. This guide covers the core layout styles, composition rules, and material choices that separate a deliberate aquascape from a decorated box.", category: 'Tank Setup', authorName: 'Fish.com Editorial', publishedAt: 'June 2026', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Tank Setup', href: '/setup' }, { name: 'Aquascaping Guide', href: '/setup/aquascaping-guide' }]}
      schema={schema}
      relatedLinks={[{ title: "Tank Setup Hub", href: "/setup", category: "Tank Setup" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }, { title: "Best Aquarium Lighting", href: "/reviews/best-aquarium-lighting", category: "Reviews" }, { title: "Best Planted-Tank Fertilizers", href: "/reviews/best-planted-tank-fertilizers", category: "Reviews" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Layout Styles</div>
          {[['Nature style', 'Asymmetric, naturalistic, plant-heavy'], ['Iwagumi', 'Stone-only, minimalist, odd numbers'], ['Dutch', 'Terraced plant beds, no hardscape'], ['Jungle', 'Wild, dense, low-maintenance'], ['Biotope', 'Faithful to one wild habitat'], ['Walstad', 'Soil-based, low-tech, self-sustaining']].map(([s, d]) => (
            <div key={s} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{s}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }, { label: 'Best Aquarium Lighting', href: '/reviews/best-aquarium-lighting' }, { label: 'Best Fertilizers', href: '/reviews/best-planted-tank-fertilizers' }, { label: 'Algae Control', href: '/setup/aquarium-algae-control' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="setup-aquascaping" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <h2>Composition First, Plants Second</h2>
        <DropCap>The defining lesson of aquascaping is that the layout is decided before a single plant goes in. The arrangement of substrate slopes, rock, and wood — the hardscape — is the skeleton of the scape, and plants merely clothe it. A common beginner error is to fill a flat-bottomed tank with assorted plants and decorations and hope it coheres; it never quite does. Established scapers begin with the empty tank, build the terrain and hardscape until the bones of the composition work on their own, and only then select plants to reinforce that structure. If the hardscape looks intentional and balanced before any greenery, the finished scape almost always does too.</DropCap>

        <h2>The Composition Rules</h2>
        <p>Aquascaping borrows directly from visual art. The <strong>rule of thirds</strong> places the main focal point — the tallest rock, the largest piece of wood, the densest plant mass — at roughly one-third across the tank rather than dead center, which feels static. The <strong>golden ratio</strong> (about 1.618) is a more precise version of the same idea and is used to position focal points and determine the height of features relative to the tank. <strong>Depth</strong> is created by sloping substrate upward toward the back, placing smaller materials and finer-leaved plants in the distance, and leaving open foreground space so the eye has somewhere to rest. Working with odd numbers of stones and avoiding perfectly symmetrical arrangements keeps a layout looking natural rather than manufactured.</p>

        <CalloutBox variant="info" title="Slope the substrate">
          Banking substrate higher at the back than the front is the simplest way to add the illusion of depth to a shallow glass box. A front-to-back rise of even an inch or two dramatically changes how a finished scape reads.
        </CalloutBox>

        <h2>The Major Styles</h2>
        <p>The <strong>nature style</strong> pioneered by Takashi Amano aims to evoke a natural landscape — a forest floor, a mountain stream — using asymmetric hardscape and naturalistic planting. The <strong>iwagumi</strong> is a minimalist subset using only carefully placed stones (traditionally an odd number, with one dominant) and a simple carpeting plant, demanding precision because there is nowhere to hide. The <strong>Dutch style</strong> dispenses with hardscape entirely in favor of terraced, contrasting beds of stem plants arranged like a formal garden. The <strong>jungle style</strong> embraces wild, dense, untrimmed growth for a lush, low-maintenance look, and the <strong>biotope</strong> attempts to faithfully recreate the plants, hardscape, and water conditions of a single real-world habitat.</p>

        <h2>Choosing Hardscape</h2>
        <p>Rock and wood are the most important visual elements. Popular aquascaping stones include Seiryu and Ohko (dragon stone) for their textured, rugged faces, and Seiryu in particular raises water hardness and pH, which matters for soft-water species. Driftwood types such as spiderwood, manzanita, and mopani each have characteristic forms; most need soaking or boiling to sink and to leach tannins. Choose materials of a consistent type and color so the scape reads as one place rather than an assortment, and select pieces in proportion to the tank — a few well-chosen large pieces almost always beat many small ones.</p>

        <h2>Planting for Structure</h2>
        <p>Once hardscape is set, plant in zones: low carpeting and foreground plants at the front, midground species filling the spaces around hardscape, and tall stem or background plants at the rear to build height and hide equipment. Use leaf size and color to reinforce depth — fine textures and muted greens recede, while bold leaves and reds advance and draw the eye to focal points. A planted scape is never truly finished; regular trimming shapes the growth and is part of the ongoing craft. For the equipment and substrate side of building a planted scape, see our <a href="/setup/planted-tank-setup">planted tank setup guide</a>.</p>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
