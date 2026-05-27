import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Boesemani Rainbowfish Care Guide — Blue-Orange Split | Fish.com', description: 'Boesemani rainbowfish are the most popular rainbowfish — vivid blue-purple front, orange-red rear. Locale-pure breeding matters.', path: '/species/boesemani-rainbowfish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Boesemani Rainbowfish Care Guide', description: 'Color development, group requirements, and water chemistry for Melanotaenia boesemani.', url: 'https://fish.com/species/boesemani-rainbowfish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BoesemaniPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Boesemani Rainbowfish', subtitle: 'Melanotaenia boesemani — the flagship rainbowfish of the aquarium hobby, named after Dr. Marinus Boeseman who first described the species. The split-color pattern — vivid blue-purple on the anterior half, deep orange-red on the posterior — makes Boesemani one of the most photogenic fish in freshwater. Males in peak condition display to each other constantly, intensifying both colors.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Boesemani Rainbowfish', href: '/species/boesemani-rainbowfish' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Melanotaenia boesemani'], ['Adult size', '3.5-4.5 inches (males larger)'], ['Temperature', '72–82°F'], ['pH', '7.0–8.0'], ['GH', '8-18 — harder water preferred'], ['Group', '8+ — 10-12 ideal'], ['Lifespan', '5-8 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Rainbowfish Guide', href: '/species/rainbow-fish' }, { label: 'Cardinal Tetra', href: '/species/cardinal-tetra' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-boesemani" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Color Development — Why Store Fish Look Different</h2>
        <p>Boesemani from fish stores are frequently juvenile males showing pale, washed-out versions of their adult colors — the blue may appear gray, the orange may appear yellowish, and the characteristic split may be barely defined. Full adult coloration in males takes 9–18 months to develop fully and requires: maturity, appropriate water chemistry (harder alkaline water produces better blue coloration), high-quality diet with color-enhancing foods, social stimulation (males displaying to each other and to females), and low nitrate (under 20 ppm — elevated nitrate consistently suppresses rainbowfish color). A Boesemani male in peak condition in ideal water, with a group of rivals and females, displaying with full intensity, is dramatically different from the same fish at 6 months in a fish store tank.</p>

        <h2>Water Chemistry — Harder Is Better</h2>
        <p>Boesemani come from Lake Ajamaru in West Papua (Irian Jaya) — a hard, alkaline lake with GH 14–20 and pH 7.5–8.5. They adapt to a range of conditions in captivity but show their best color and health in water that approximates their native lake: pH 7.2–8.0, GH 10–18, KH 6–10. This makes Boesemani ideal for areas with hard municipal water where soft-water species like tetras and discus struggle. The blue coloration in particular intensifies in harder, more alkaline water.</p>

        <h2>Gender Ratio and Group Dynamics</h2>
        <p>A mixed-sex group produces the most natural and visually engaging behavior. Males display constantly to each other — fin-spreading, color intensification, head-to-head posturing — as well as to females during spawning behavior. The display behavior is not aggressive (no injuries occur in most cases) but is vigorous and fascinating to watch. A 2:3 female-to-male ratio (more females than males) reduces the intensity of male competition directed at individual females while maintaining display behavior. A male-only group also works — the display behavior continues without female presence, driven by male hierarchy competition.</p>

        <h2>Tank and Compatibility</h2>
        <p>A 55-gallon minimum for a group of 8-10 Boesemani — they are active, open-water swimmers that need horizontal swimming space. Dense planting along the back and sides creates visual interest and refuge while keeping the central water column open for their schooling behavior. Compatible with other hard-water community fish: corydoras paleatus (one of the few cories tolerating harder water), other rainbowfish species, hillstream loaches, larger rasboras. Not compatible with fish requiring soft acidic water (discus, most tetras).</p>

        <h2>Conservation Note</h2>
        <p>Boesemani rainbowfish come from a very restricted native range — Lake Ajamaru and a few connected lakes in West Papua. Wild populations have declined due to aquarium collection pressure in the past (most current aquarium fish are captive-bred, significantly reducing wild collection). Responsible breeding by hobbyists maintains genetic diversity in captive populations and reduces pressure on wild stocks. When purchasing, captive-bred fish from reputable breeders are preferable to wild-caught imports.</p>
      </div>
    </ArticleLayout>
  )
}
