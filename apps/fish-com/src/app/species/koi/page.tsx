import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Koi Fish Care Guide — Pond Size, Filtration | Fish.com', description: 'Koi need 250+ gallons per fish, heavy pond filtration, and regular water changes. Kohaku, Taisho Sanke, Showa, and other varieties.', path: '/species/koi', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Koi Fish Care Guide', description: 'Pond size requirements, filtration, water quality, and variety overview for koi fish.', url: 'https://fish.com/species/koi', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function KoiPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Koi Fish Care Guide', subtitle: 'Cyprinus rubrofuscus — koi are among the most striking and long-lived ornamental fish available, capable of reaching 24–36 inches and living 25–35+ years with proper care. They are pond fish, not aquarium fish. Their size, waste production, and behavioral needs require a purpose-built pond environment, not a large aquarium.', category: 'Species Guide — Pond', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Koi', href: '/species/koi' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Pond Requirements</div>
          {[['Min pond volume', '1,000 gallons for 4-5 koi'], ['Per koi rule', '250 gallons per fish (minimum)'], ['Depth', '3+ feet (temperature buffer, predator deterrence)'], ['Filtration', 'Mechanical + biological — size for 2× fish load'], ['Water changes', '10-25% weekly minimum'], ['Temperature', '59–77°F optimal — cold tolerant in winter']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Pond Setup Guide', href: '/setup/pond-guide' }, { label: 'Goldfish Care', href: '/species/goldfish' }, { label: 'Water Chemistry', href: '/setup/water-chemistry-guide' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Pond and fishkeeping tips." source="species-koi" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Pond Size — The Non-Negotiable</h2>
        <p>The most common koi husbandry mistake: underestimating pond size requirements. A single koi purchased at 6 inches will reach 18–24 inches within 3–5 years under good conditions. Koi produce substantial waste — ammonia load per fish is significantly higher than smaller pond fish. The guideline of 250 gallons per koi is a conservative minimum; experienced koi keepers recommend 500–1,000 gallons per fish for high-quality water conditions and optimal growth.</p>
        <p>A 1,000-gallon pond supports 4–5 small-to-medium koi sustainably. A 2,500-gallon pond is the realistic minimum for a serious koi collection of 6–8 fish. Overstocking degrades water quality, stunts growth, stresses fish, and leads to disease. The temptation to add more fish to an existing pond is the most common route to a koi health disaster.</p>

        <h2>Filtration — Two Stages Required</h2>
        <p>Koi ponds require both mechanical and biological filtration running continuously. <strong>Mechanical filtration</strong> removes solid waste (fish feces, uneaten food, decomposing plant material) — drum filters, vortex chambers, or settlement tanks separate solids before they decompose into ammonia. <strong>Biological filtration</strong> houses the beneficial bacteria (Nitrosomonas and Nitrospira) that convert ammonia to nitrite and nitrate — large surface area media (biological brushes, K1 media, filter mats) in a biofilter or moving bed filter (MBBR/K1 reactor).</p>
        <p>Size filtration for approximately 2× the actual fish load — the pond will grow into it, and overfiltered ponds are far more stable than underfiltered ones. UV sterilizers (separate from filtration) kill single-celled algae (green water algae) and some pathogens — highly recommended for clear-water koi display ponds. A pond pump must circulate the entire pond volume through the filter system at least once every 1–2 hours.</p>

        <h2>Water Quality and Testing</h2>
        <p>Test weekly: ammonia (0 ppm always), nitrite (0 ppm always), nitrate (under 40 ppm for koi — they tolerate slightly higher than aquarium fish), pH (7.0–8.5 — koi prefer moderate alkalinity), KH (carbonate hardness — should be 4–8 dKH to buffer pH). Weekly 10–25% water changes maintain water quality between filter maintenance sessions. In summer (faster metabolism, more feeding, warmer water = faster bacterial growth), more frequent changes may be required.</p>
        <p>Koi in heavily planted ponds benefit from the nitrogen uptake of pond plants (water hyacinth, water lettuce, lotus, water lilies), which consume nitrate and reduce water change frequency. A heavily planted section (often called a "veggie filter") is a natural, effective supplement to mechanical and biological filtration.</p>

        <h2>Koi Varieties</h2>
        <p>Koi are classified into recognized varieties based on pattern, color, and scale type. The "Big 3" most prestigious varieties in traditional Japanese koi judging:</p>
        <p><strong>Kohaku:</strong> White body with red (hi) pattern. The most classic koi variety — "it begins with Kohaku and ends with Kohaku" in the koi world. Quality Kohaku have pure snow-white skin, vibrant red of consistent depth, and well-defined hi pattern edges.</p>
        <p><strong>Taisho Sanke (Sanke):</strong> White base with red and black (sumi) pattern. The red and black markings appear on the white base without black appearing on the head. Sumi pattern quality and distribution is key in judging.</p>
        <p><strong>Showa Sanshoku (Showa):</strong> Black base fish with red and white pattern — the black is the dominant color, in contrast to Sanke's white base. Sumi (black) wraps around the body and appears on the head. Difficult to distinguish from Sanke at juvenile stage.</p>
        <p>Other popular varieties: Ogon (solid metallic silver or gold), Asagi (blue-grey with red hi on the lower body), Butterfly koi (long flowing fins — controversial in traditional koi circles but popular in Western ponds), and Doitsu (reduced or absent scales in specific patterns).</p>

        <h2>Feeding and Seasonal Management</h2>
        <p>Feed a quality koi pellet appropriate to water temperature: high-protein in summer (water above 65°F — fast metabolism), wheat germ-based in spring and fall (cooler temperatures — more digestible lower protein), stop feeding below 50°F. Koi metabolize food slowly in cold water and undigested food causes health problems. Feed only what koi consume in 5 minutes, twice daily in summer.</p>
        <p>In winter in cold climates: stop feeding below 50°F. Do not break ice aggressively in a pond with koi — the shock can be fatal. A pond deicer or aerator prevents ice formation while allowing beneficial gas exchange. Koi remain at the pond bottom in a semi-dormant state — do not disturb them.</p>
      </div>
    </ArticleLayout>
  )
}
