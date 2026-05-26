import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Discus Care Guide — Soft Warm Water, Daily Changes & Disease | Fish.com', description: 'Discus are the most demanding freshwater fish. 82-86°F, pH 5.5-6.8, daily or large water changes, and high protein diet. Not a beginner species — comprehensive guide.', path: '/species/discus', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Discus Care Guide', description: 'Water requirements, daily water changes, and disease prevention for Symphysodon discus.', url: 'https://fish.com/species/discus', imageUrl: '', authorName: 'Fish.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function DiscusPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Discus Fish Care Guide', subtitle: 'Symphysodon — the "king of the aquarium." Discus are breathtakingly beautiful, highly intelligent, and the most demanding freshwater fish commonly kept. Their water requirements are strict, their sensitivity to pathogens is high, and their cost is significant. Experienced aquarists only.', category: 'Species Guide — Advanced', authorName: 'Fish.com Expert Team', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '11 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Discus', href: '/species/discus' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Discus Requirements</div>
          {[['Temperature', '82–86°F — warm end critical'], ['pH', '5.5–6.8 — soft acidic'], ['GH', 'Under 8 — soft water'], ['Water changes', '30-50% daily or EOD'], ['Min tank', '55 gallons for 6 discus'], ['Group size', 'Minimum 6 — reduces aggression'], ['Diet', 'Beef heart, bloodworms, high protein'], ['Experience', 'Advanced — not a first cichlid']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'German Blue Ram', href: '/species/blue-ram' }, { label: 'Cardinal Tetra', href: '/species/cardinal-tetra' }, { label: 'Corydoras Sterbai', href: '/species/corydoras' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Advanced fishkeeping guides." source="species-discus" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Why Discus Are Advanced</h2>
        <p>Discus are sensitive to water quality in a way that most fish are not — they show stress responses at nitrate levels that most community fish handle easily, they are susceptible to pathogens that hardy fish resist, and they require water parameters (soft, warm, acidic) that require active management in most US households with hard tap water. The daily or every-other-day water changes required to maintain discus — large volume, temperature-matched — represent a significant time commitment. A discus keeper does water changes the way a planted tank keeper doses fertilizers: consistently, on schedule, without exception.</p>
        <p>The cost: quality wild-caught discus run $60–150+ per fish. Tank-bred discus from quality breeders run $30–80+. A group of 6 discus in an appropriate tank represents $200–600+ in fish alone before any equipment is purchased. If they die from inadequate water quality, that loss is significant. Research thoroughly before purchasing.</p>

        <h2>Water — The Critical Foundation</h2>
        <p>Target: pH 5.5–6.8, GH under 8, temperature 82–86°F. Most US tap water is too hard and too alkaline. RO/DI water remineralized with Seachem Equilibrium (to achieve GH 4–6 with minimal KH, allowing peat or CO2 to set a stable low pH) is the most reliable approach. Indian almond leaves and peat filtration add tannins that lower pH naturally and provide beneficial compounds. A discus-specific water conditioner (Seachem Discus Trace, Aquavitro Synthesis) replenishes trace minerals removed by RO.</p>
        <p><strong>Water change protocol:</strong> The standard discus keeper approach is 30–50% water changes daily or every other day. This maintains pristine water quality and simulates the natural dilution of the soft, rain-fed rivers discus inhabit. The water added must be pre-heated to tank temperature — cold water additions cause temperature shock that immediately stresses discus and triggers disease. Pre-heated RO water stored in large containers (30–50 gallon trash cans with a heater) simplifies daily changes.</p>

        <h2>Temperature — Warmer Than Most</h2>
        <p>82–86°F is the correct range — the warmer end is preferred by most discus keepers and is appropriate for the wild fish's native habitat in the Amazon basin. At this temperature, the metabolism of beneficial bacteria is also higher, processing waste faster. The challenge: most community fish do not thrive at 84°F. Discus-compatible tankmates are limited to species that share warm water preferences: cardinal tetras, rummy nose tetras, Corydoras sterbai (the one cory species that tolerates warm water), and some other Amazonian species. Standard community fish (neons, platies, most cories) are incompatible with discus temperatures.</p>

        <h2>Diet — High Protein Required</h2>
        <p>Discus are omnivorous but protein-forward. The traditional discus staple: beef heart mix — ground beef heart (fat removed) combined with frozen seafood, spinach, and vitamins, formed into thin sheets and frozen. Commercial alternatives: Hikari Discus Bio-Gold, NLS Discus Formula, Sera Discus Granules. Frozen bloodworms are eagerly accepted and valuable for conditioning. Feed 3–4 times daily — discus need frequent feeding due to their high metabolism. Remove uneaten food within 10 minutes to maintain water quality.</p>

        <h2>Disease — The Primary Challenge</h2>
        <p>Discus are disproportionately susceptible to internal parasites (particularly Capillaria, Hexamita, and Spironucleus) and external parasites (flukes). New fish should be quarantined for 4–6 weeks and prophylactically treated for parasites before introduction to an established discus tank. The most common disease presentation in discus: "darkening" — the fish turns very dark in color, a stress response that accompanies disease, poor water quality, or aggression. A dark discus is a discus under stress, with disease and water quality being the two primary causes to investigate first.</p>
        <p><strong>Hexamita/Spironucleus (hole-in-the-head):</strong> Causes pitting lesions on the head and lateral line. Common in discus stressed by poor water quality. Treated with metronidazole (Seachem MetroPlex in food and water). Prevention: pristine water quality and stress reduction.</p>

        <h2>Group Dynamics</h2>
        <p>Discus are cichlids — they establish social hierarchies. A group of 6+ distributes aggression across the group so no single fish bears the full burden. Fewer than 6 often results in 1–2 dominant fish relentlessly harassing the submissive fish until they stop eating and die. 6 minimum; 8–10 in a 75+ gallon tank allows stable hierarchies to form. Remove any fish that is being singled out for persistent aggression — isolated from the group, dark in color, and refusing food.</p>
      </div>
    </ArticleLayout>
  )
}
