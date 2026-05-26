import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Aquarium Nitrogen Cycle Guide — How to Cycle a Fish Tank Fast | Fish.com', description: 'The nitrogen cycle is the most important concept in fishkeeping. How to cycle a tank correctly (with and without fish), how to speed it up, and how to know when it\'s done.', path: '/setup/aquarium-cycling-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Aquarium Nitrogen Cycle Guide', description: 'How to cycle a fish tank — fishless cycling, seeded media, and completing the nitrogen cycle.', url: 'https://fish.com/setup/aquarium-cycling-guide', imageUrl: '', authorName: 'Fish.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const howTo = buildHowToSchema({ name: 'How to Cycle a Fish Tank (Fishless Cycling)', description: 'Step-by-step guide to establishing the nitrogen cycle in a new aquarium.', url: 'https://fish.com/setup/aquarium-cycling-guide', totalTime: 'P5W', steps: [
  { name: 'Set up the tank and add dechlorinated water', text: 'Fill the tank with tap water treated with a dechlorinator (Seachem Prime). Run the filter, heater, and any air pumps. Do not add fish.' },
  { name: 'Add an ammonia source', text: 'For fishless cycling: add ammonia to reach 2 ppm. Use pure ammonia drops (Dr. Tim\'s Ammonium Chloride) or add a pinch of fish food and wait for it to decompose. Test with an API ammonia test kit to confirm 2 ppm.' },
  { name: 'Add beneficial bacteria', text: 'Add a bottled bacteria supplement: Seachem Stability (shake vigorously, dose daily for 7 days), Dr. Tim\'s One & Only (single dose), or Fritz Turbo Start 700. These introduce real Nitrosomonas and Nitrospira bacteria.' },
  { name: 'Test every 2-3 days', text: 'Test ammonia, nitrite, and nitrate with an API Master Test Kit. You will first see nitrite appear as ammonia drops. Then nitrate appears as nitrite drops. The cycle is complete when both ammonia and nitrite read 0 within 24 hours of a 2 ppm ammonia dose.' },
  { name: 'Do a large water change and add fish', text: 'Once cycled, do a 50% water change to reduce accumulated nitrate. Then add fish — slowly, one or two species at a time, with 2-week intervals. Test water weekly for the first month.' },
]})
const combined = combineSchemas(schema, howTo)
export default function CyclingGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="fish-com"
        hero={{ title: 'Aquarium Nitrogen Cycle — Complete Cycling Guide', subtitle: 'The nitrogen cycle is the foundation of every aquarium. Without it, fish die within days of ammonia poisoning. With it, fish live for years in stable, healthy water. Every fishkeeper needs to understand this process — it is not optional knowledge.', category: 'Tank Setup', authorName: 'Fish.com Expert Team', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '10 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Setup', href: '/setup' }, { name: 'Cycling Guide', href: '/setup/aquarium-cycling-guide' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Target Parameters</div>
            {[['Ammonia', '0 ppm — always'], ['Nitrite', '0 ppm — always'], ['Nitrate', 'Under 20 ppm'], ['Cycle time (no seed)', '4-8 weeks'], ['Cycle time (seeded)', '1-2 weeks'], ['Cycle time (instant)', '24-48 hours with large seed']].map(([k, v]) => (
              <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
                <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }, { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' }, { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' }]} />
          <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping guides every Thursday." source="setup-cycling" />
        </>}
      >
        <div className="carloOS-article">
          <h2>What the Nitrogen Cycle Is</h2>
          <p>Fish excrete ammonia (NH₃) as a metabolic waste product through their gills. Ammonia is highly toxic — even at 0.5 ppm it damages gill tissue and causes stress. Two groups of beneficial bacteria convert ammonia to progressively less toxic compounds in a two-step process:</p>
          <ol>
            <li><strong>Nitrosomonas species</strong> convert ammonia (NH₃) → nitrite (NO₂⁻)</li>
            <li><strong>Nitrospira species</strong> convert nitrite (NO₂⁻) → nitrate (NO₃⁻)</li>
          </ol>
          <p>Nitrate is significantly less toxic than ammonia or nitrite and is removed through regular partial water changes. A cycled aquarium has established colonies of both bacterial types living primarily in the filter media, substrate, and on surfaces — providing continuous water processing as long as the tank is running.</p>
          <p>These bacteria grow slowly from scratch (4–8 weeks), need an ammonia source to colonize, are killed by chlorine (always dechlorinate water), and die without ammonia to consume (do not leave a tank running empty without an ammonia source for more than a few days).</p>

          <h2>Fishless Cycling — The Right Way</h2>
          <p>Fishless cycling establishes the beneficial bacteria before any fish are added — eliminating the ammonia poisoning that kills fish in uncycled tanks. The fish-in cycling approach (adding fish and doing large frequent water changes while the cycle completes) is possible but stressful for fish and requires daily water changes. Fishless cycling is more humane and more reliable.</p>
          <p><strong>The fastest fishless cycling method (1–2 weeks):</strong></p>
          <ol>
            <li>Set up tank fully — water, filter running, heater at temperature</li>
            <li>Add Dr. Tim's Ammonium Chloride to reach 2 ppm ammonia (test to confirm)</li>
            <li>Add a full dose of Dr. Tim's One & Only or Fritz Turbo Start 700 — these contain actual live Nitrospira and Nitrosomonas in high concentration</li>
            <li>Maintain temperature at 76–82°F (optimal for bacterial growth)</li>
            <li>Test ammonia and nitrite every 2–3 days — re-dose ammonia to 2 ppm when it drops to 0</li>
            <li>Cycle is complete when: ammonia drops from 2 ppm to 0 AND nitrite drops from its peak to 0, both within 24 hours of a 2 ppm ammonia dose</li>
          </ol>

          <h2>The Fastest Method — Seeded Media</h2>
          <p>Transferring established filter media from a running cycled tank to the new tank provides an instant population of beneficial bacteria. A fully seeded sponge from a healthy established tank can cycle a new tank in 24–48 hours. Sources: your local fish store may provide a seeded sponge on request, an established hobbyist in your area, or your own established tank if you're setting up an additional one. This is the fastest possible cycling method — faster than any bottled bacteria product.</p>

          <h2>What Kills Your Cycle</h2>
          <ul>
            <li><strong>Chlorine and chloramine</strong> in tap water — always add dechlorinator (Seachem Prime) to tap water before adding to the tank</li>
            <li><strong>Antibiotics</strong> in the water — antibiotics used to treat fish disease kill beneficial bacteria. Always treat fish in a separate hospital tank</li>
            <li><strong>Cleaning the filter with tap water</strong> — rinse filter media in old tank water removed during a water change, never in tap water</li>
            <li><strong>Replacing all filter media at once</strong> — most of the bacterial colony lives in the filter media. Replace media gradually (one pad at a time, not all at once)</li>
            <li><strong>Running the tank without ammonia</strong> for extended periods — the bacteria starve and die without their food source</li>
          </ul>
        </div>
      </ArticleLayout>
    </>
  )
}
