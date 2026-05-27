import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Saltwater Aquarium Setup Guide — FOWLR vs Reef, Salinity & Cycling | Fish.com', description: 'How to set up a saltwater aquarium. FOWLR vs reef tank, salinity maintenance, live rock, protein skimmer, and the longer cycling process explained.', path: '/setup/saltwater-tank-setup', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Saltwater Aquarium Setup Guide', description: 'FOWLR vs reef, salinity, live rock, and cycling for saltwater aquariums.', url: 'https://fish.com/setup/saltwater-tank-setup', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Set Up a Saltwater Aquarium', description: 'Step-by-step guide to setting up a FOWLR or reef saltwater aquarium.', url: 'https://fish.com/setup/saltwater-tank-setup', totalTime: 'P60D', steps: [
  { name: 'Choose FOWLR or reef', text: 'FOWLR (Fish Only With Live Rock) is significantly easier and cheaper. Reef tanks add corals and invertebrates requiring precise water chemistry and stronger lighting. Start with FOWLR unless you have marine experience.' },
  { name: 'Mix saltwater to correct salinity', text: 'Use RO/DI water (reverse osmosis deionized — not tap water). Mix with marine salt mix (Instant Ocean, Red Sea). Target specific gravity 1.025 (or salinity 35 ppt) for most fish. Use a refractometer for accurate measurement.' },
  { name: 'Add live rock', text: '1-1.5 lbs live rock per gallon of water volume. Live rock provides biological filtration surface and seeds the nitrogen cycle. Aquacultured rock is preferred over wild-caught for ecological reasons.' },
  { name: 'Run the nitrogen cycle', text: 'Saltwater tanks take longer to cycle than freshwater — 4-8 weeks typical. Seed with bottled bacteria (Fritz Turbo Start, Dr. Tim\'s One & Only Marine). Test daily for ammonia, nitrite, and nitrate.' },
  { name: 'Add a protein skimmer', text: 'A protein skimmer removes dissolved organic compounds before they break down into ammonia. Essential for most saltwater tanks. Size for 1.5-2x your tank volume.' },
  { name: 'Add fish slowly', text: 'Saltwater fish are more sensitive to water quality changes than freshwater fish. Add one or two fish at a time, wait 2-4 weeks between additions. Quarantine all new fish for 4-6 weeks.' },
]})
const combined = combineSchemas(schema, howTo)
export default function SaltwaterTankSetupPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="fish-com"
        hero={{ title: 'Saltwater Aquarium Setup Guide', subtitle: 'Saltwater aquariums are more demanding than freshwater — but the fish and reef inhabitants are some of the most spectacular animals in the hobby. Clownfish, tangs, wrasses, and reef corals are attainable with proper setup. Start with FOWLR and graduate to reef once you understand saltwater chemistry.', category: 'Tank Setup', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '12 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Tank Setup', href: '/setup' }, { name: 'Saltwater Setup', href: '/setup/saltwater-tank-setup' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Saltwater Parameters</div>
            {[['Salinity', '34–36 ppt (1.024–1.026 SG)'], ['Temperature', '76–80°F'], ['pH', '8.1–8.3'], ['Ammonia', '0 ppm — always'], ['Nitrite', '0 ppm — always'], ['Nitrate', 'Under 20 ppm (FOWLR), 5 (reef)'], ['Alkalinity', '8–12 dKH (reef)']].map(([k, v]) => (
              <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
                <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Clownfish Care', href: '/species/clownfish' }, { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' }, { label: 'Nitrogen Cycle', href: '/health/nitrogen-cycle-explained' }]} />
          <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Saltwater tips every Thursday." source="setup-saltwater" />
        </>}
      >
        <div className="carloOS-article">
          <h2>FOWLR vs Reef — Choose First</h2>
          <p><strong>FOWLR (Fish Only With Live Rock):</strong> Saltwater fish in a tank with live rock for biological filtration. No corals or invertebrates. Much more forgiving water chemistry requirements. Standard lighting. Less equipment. Less expensive. The appropriate starting point for most people entering saltwater keeping. Many popular marine fish — tangs, angelfish, triggers, lionfish — are kept in FOWLR tanks.</p>
          <p><strong>Reef tank:</strong> Corals, invertebrates, and fish. Corals require precise alkalinity, calcium, magnesium, and phosphate levels, high-intensity lighting, and low nitrate/phosphate. Significantly higher equipment cost ($500–2000+ for lighting and dosing equipment alone) and daily monitoring requirements. Not appropriate as a first saltwater tank. Recommend 12+ months of FOWLR experience before reef.</p>

          <h2>Water — The Critical Difference from Freshwater</h2>
          <p>Do not use tap water for saltwater tanks. Tap water contains chlorine, chloramine, phosphates, silicates, and heavy metals that cause algae problems and harm marine life. Use RO/DI (reverse osmosis + deionized) water: either a home RO/DI unit ($150–400 one-time purchase that produces unlimited pure water) or purchasing RO/DI water from a local fish store. Check with a TDS (total dissolved solids) meter — target under 10 ppm, ideally 0 ppm TDS.</p>
          <p>Salinity is maintained with a quality marine salt mix. Instant Ocean and Reef Crystals (for reef) are reliable and widely available. Mix in a container outside the tank with a powerhead for circulation. Measure with a refractometer (not a swing arm hydrometer — they are inaccurate). Top off evaporation with fresh RO/DI water (not saltwater — salt does not evaporate, only water does).</p>

          <h2>Live Rock and Biological Filtration</h2>
          <p>Live rock is the biological filter in most saltwater systems — it hosts the same nitrifying bacteria as a freshwater filter, but in the porous structure of the rock. 1–1.5 lbs per gallon is the traditional guideline. Aquacultured live rock (grown specifically for the aquarium trade) is preferred over wild-caught Fiji rock from an ecological standpoint — and often comes with interesting coralline algae and hitchhiker organisms.</p>
          <p>A sump with biological media (MarinePure blocks, Siporax) supplements live rock biological filtration and allows housing equipment (protein skimmer, heater, refugium) out of the display tank.</p>

          <h2>Protein Skimmer — Essential Equipment</h2>
          <p>A protein skimmer removes dissolved organic compounds (DOC) from the water before they break down into ammonia — a form of water quality management unique to saltwater. Skimmers produce "skimmate" — dark, foul-smelling concentrated organic waste. A well-adjusted skimmer produces wet, dark skimmate daily. Size the skimmer for 1.5–2× your display tank volume. Good brands at accessible price points: Aqua C Remora (HOB), SCA 301/302, and Reef Octopus.</p>

          <h2>Quarantine — Non-Negotiable in Saltwater</h2>
          <p>Marine fish diseases (marine ich/Cryptocaryon, velvet/Amyloodinium) are significantly harder to treat in a reef or established display tank than in a bare quarantine tank. Copper-based treatments kill corals and invertebrates. The standard of care: quarantine all new saltwater fish in a bare-bottom QT tank for 4–6 weeks, observe for disease, treat if necessary, then move to the display tank. Skipping quarantine is the single most common mistake that causes disease outbreaks in established reef tanks.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
