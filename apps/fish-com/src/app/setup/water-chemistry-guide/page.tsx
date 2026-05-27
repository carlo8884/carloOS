import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Aquarium Water Chemistry Guide — pH, GH, KH & TDS Explained | Fish.com', description: 'pH, GH (general hardness), KH (carbonate hardness), and TDS explained for aquarium fishkeeping. How each parameter affects fish and plants, and how to adjust them.', path: '/setup/water-chemistry-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Aquarium Water Chemistry Guide', description: 'pH, GH, KH, and TDS explained for freshwater aquariums.', url: 'https://fish.com/setup/water-chemistry-guide', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function WaterChemistryGuidePage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Aquarium Water Chemistry Guide', subtitle: 'pH gets most of the attention but GH and KH often matter more for fish health and breeding. Understanding what each parameter actually measures — and how they interact — allows you to match your water to your fish\'s requirements rather than chasing arbitrary numbers.', category: 'Tank Setup', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Setup', href: '/setup' }, { name: 'Water Chemistry', href: '/setup/water-chemistry-guide' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Reference</div>
          {[['Community fish', 'pH 6.8-7.4 · GH 8-15 · KH 4-8'], ['Discus / Cardinal tetra', 'pH 5.5-6.8 · GH 2-6 · KH 1-3'], ['African cichlid', 'pH 7.8-8.5 · GH 10-20 · KH 10-18'], ['Planted CO2 tank', 'pH 6.5-6.9 · GH 4-8 · KH 2-4'], ['Crystal shrimp', 'pH 6.2-6.8 · GH 4-6 · KH 0-1'], ['Saltwater FOWLR', 'pH 8.0-8.3 · SG 1.024-1.026']].map(([s, p]) => (
            <div key={s} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{s}</div>
              <div className="text-2xs text-brand-text-light font-mono">{p}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Cycling Guide', href: '/setup/aquarium-cycling-guide' }, { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping guides every Thursday." source="setup-water-chemistry" />
      </>}
    >
      <div className="carloOS-article">
        <h2>pH — The Scale and What It Means</h2>
        <p>pH is a logarithmic measure of hydrogen ion concentration — pH 7 is neutral, below 7 is acidic, above 7 is alkaline. Because the scale is logarithmic, pH 6 is 10× more acidic than pH 7, and pH 5 is 100× more acidic. Small numerical differences represent large actual differences in water chemistry. A stable pH within the appropriate range for your fish is more important than hitting a precise target number — fish handle a consistent pH that is slightly off-ideal better than they handle pH swings.</p>
        <p>What determines pH: the balance of carbonate buffering (KH), dissolved CO2, and other acids and bases in the water. In CO2-injected planted tanks, pH drops as CO2 dissolves into carbonic acid — this is intentional and managed. Understanding that pH is a result of other parameters (primarily KH and CO2), rather than something to be directly adjusted with pH-Up/pH-Down chemicals, allows for more stable management.</p>

        <h2>GH — General Hardness (Total Dissolved Minerals)</h2>
        <p>GH measures the concentration of divalent mineral ions in the water — primarily calcium (Ca²⁺) and magnesium (Mg²⁺). It is measured in degrees of hardness (dGH) or ppm. Hard water has high GH; soft water has low GH. GH is critically important for: fish osmoregulation (fish maintain internal mineral concentrations by regulating what they absorb or excrete across their gills — wrong GH requires extra energy), breeding (many soft-water fish like discus and tetras will not spawn in hard water), plant growth, and shrimp health (high GH is needed for successful molting).</p>
        <p>Most US municipal water has moderate to high GH (8–15 dGH). Fish adapted to soft water (South American tetras, discus, chocolate gouramis) struggle long-term in hard water. African cichlids, Central American cichlids, and livebearers prefer high GH. Match your fish to your water or be prepared to modify your water.</p>

        <h2>KH — Carbonate Hardness (Buffer Capacity)</h2>
        <p>KH measures carbonate and bicarbonate ions in the water. Its primary significance: KH determines buffering capacity — the water's resistance to pH change. High KH buffers pH swings; low KH allows pH to fluctuate rapidly. This is why KH matters even when GH is appropriate: a low-KH planted tank with CO2 injection can have wild pH swings during the CO2 on/off cycle. A low-KH water with no buffering can crash to dangerous acidity after a partial water change, bacterial die-off, or acid rain event.</p>
        <p>For most community tanks: KH 4–8 provides adequate buffering. For CO2-injected planted tanks targeting low pH: KH 2–4 allows CO2 to push pH down to the target range. For African cichlid tanks targeting high pH: KH 10+ maintains pH stability. Crystal shrimp breeding: KH 0–2 (essentially no buffering — requires very stable temperature and regular careful water changes to avoid parameter swings).</p>

        <h2>Adjusting Water Parameters</h2>
        <p><strong>To soften water (lower GH and KH):</strong> Mix tap water with RO/DI (reverse osmosis / deionized) water. A 50/50 mix roughly halves the hardness. Full RO/DI water remineralized with Seachem Equilibrium (adds GH without KH) gives precise control for specific targets.</p>
        <p><strong>To raise KH (add buffering):</strong> Seachem Alkalinity Buffer or Sodium bicarbonate (baking soda at 1 tsp per 20 gallons raises KH approximately 1 dKH). Add in small increments with water changes.</p>
        <p><strong>To raise GH without KH:</strong> Seachem Equilibrium. To raise both: reconstituted RO water with a remineralizer that contains carbonates. For African cichlid tanks: crushed coral or aragonite in the filter raises both GH and KH continuously.</p>
        <p><strong>To raise pH sustainably:</strong> Raise KH. pH will rise and stabilize as buffering increases. Direct pH chemicals (API pH Up) create instability — they shift pH temporarily without changing KH, and the pH drifts back. Address KH to address pH.</p>

        <h2>TDS — Total Dissolved Solids</h2>
        <p>TDS is measured with a simple meter and reflects the total concentration of dissolved substances in parts per million. It includes GH minerals, KH ions, nitrate, sodium, chloride, and everything else dissolved. TDS is useful as a quick check of overall water quality and RO membrane effectiveness (RO/DI water should read 0–10 TDS; tap water reads 100–400+ depending on your water supply). It does not distinguish between beneficial minerals and waste products — two waters with the same TDS can have very different chemistries. TDS is most useful as a consistency check and RO quality indicator rather than as a specific parameter to target.</p>
      </div>
    </ArticleLayout>
  )
}
