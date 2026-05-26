import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Ich Treatment Guide — Temperature, Salt & Medication Protocol | Fish.com', description: 'Complete ich (white spot disease) treatment guide. Why spots on fish are the wrong stage to kill, the temperature + salt protocol, and when to use medication.', path: '/health/ich-treatment', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Ich Treatment Guide', description: 'Temperature, salt, and medication protocol for ich in freshwater aquariums.', url: 'https://fish.com/health/ich-treatment', imageUrl: '', authorName: 'Fish.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function IchTreatmentPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Ich Treatment Guide', subtitle: 'Ichthyophthirius multifiliis (ich) is the most common aquarium disease. The white spots visible on fish are not what you are treating — they are a protected stage that medication cannot touch. This guide explains why and what to do.', category: 'Fish Health', authorName: 'Fish.com Expert Team', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Ich Treatment', href: '/health/ich-treatment' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'The Lifecycle (Why It\'s Hard)', href: '#lifecycle' }, { label: 'Heat Treatment Protocol', href: '#heat' }, { label: 'Salt Protocol', href: '#salt' }, { label: 'Medication', href: '#medication' }, { label: 'After Treatment', href: '#after' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }, { label: 'Water Chemistry', href: '/water' }, { label: 'Nitrogen Cycle', href: '/health/nitrogen-cycle-explained' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-ich" />
      </>}
    >
      <div className="carloOS-article">
        <h2 id="lifecycle">The Lifecycle — Why Ich Is Hard to Treat</h2>
        <p>Ich has a three-stage lifecycle, and only one stage is vulnerable to most treatments:</p>
        <ol>
          <li><strong>Trophozoite (on the fish):</strong> The white spots you see. The parasite is embedded in the fish&apos;s skin with a protective membrane. This stage is largely invulnerable to medication and immune to salt. This is what most people try to treat — and why many treatments fail.</li>
          <li><strong>Tomont (off the fish, on substrate):</strong> The trophozoite drops off the fish and forms a cyst on substrate. Inside, it divides into 200–2,000 daughter cells. Also largely invulnerable at this stage.</li>
          <li><strong>Theront (free-swimming):</strong> Daughter cells break free and swim to find a new host. This is the only vulnerable stage. Heat speeds the lifecycle, producing more vulnerable theronts per day. Most treatments target this stage.</li>
        </ol>
        <p>This is why you must treat for at least 7–10 days after the last visible spot — the visible spots are just the early stage of a cycle that will produce another round of free-swimmers even after the fish appear clear.</p>

        <h2 id="heat">Heat Treatment Protocol (Recommended First-Line)</h2>
        <p>Raising temperature shortens the lifecycle, producing vulnerable theronts faster and in greater numbers — significantly increasing treatment effectiveness. This is the preferred first-line treatment for most freshwater tropical fish.</p>
        <ol>
          <li><strong>Raise temperature to 86°F (30°C)</strong> — increase by no more than 2°F per hour to avoid stressing fish. Most tropical fish tolerate 86°F; scaleless fish (cory catfish, loaches) are more sensitive — go to 82–84°F for these.</li>
          <li><strong>Add increased aeration</strong> — warm water holds less oxygen. Add an air stone or increase surface agitation.</li>
          <li><strong>Add aquarium salt (optional but effective):</strong> 1 tablespoon per 5 gallons of freshwater. Salt stresses the theront stage. Do not use with scaleless fish or plants.</li>
          <li><strong>Maintain 86°F for 10–14 days</strong> after the last visible spot. The temperature cannot be dropped early — remnants of the cycle are still in the substrate.</li>
          <li><strong>Daily water changes of 25%</strong> during treatment — vacuuming the substrate removes tomonts and theronts from the water column before they can reinfect.</li>
        </ol>

        <h2 id="salt">Salt-Only Protocol (for temperature-sensitive fish)</h2>
        <p>For coldwater fish (goldfish, some loaches) or scaleless fish that cannot tolerate 86°F:</p>
        <ul>
          <li>Aquarium salt at 1 tablespoon per gallon — this concentration kills theronts and stresses ich at all stages</li>
          <li>Raise temperature as high as the fish safely tolerates (72–78°F for goldfish)</li>
          <li>Daily 25% water changes with replacement salt to maintain concentration</li>
          <li>Continue 10–14 days after last visible spot</li>
        </ul>

        <h2 id="medication">When to Use Medication</h2>
        <p>Medication is indicated when: heat treatment is not producing results after 7 days, fish are severely infected (heavy spot load, fish are in distress), or the fish cannot tolerate temperature treatment.</p>
        <ul>
          <li><strong>API Super Ick Cure (malachite green + formalin):</strong> Most widely available, fast-acting. Remove carbon from filter before use (carbon removes medication). Follow dosing instructions exactly — overdose is toxic.</li>
          <li><strong>Seachem ParaGuard:</strong> Safer than malachite green for sensitive fish and scaleless species. Slightly slower acting.</li>
          <li><strong>Copper-based medications (Copper Power, Cupramine):</strong> Most effective — copper is acutely toxic to ich at all stages. Requires careful dosing (copper is toxic to fish at overdose) and a copper test kit. Not safe for invertebrates or planted tanks.</li>
        </ul>
        <p>Always remove activated carbon before adding any medication. Carbon removes medication from the water within hours, rendering treatment ineffective.</p>

        <h2 id="after">After Treatment — Preventing Recurrence</h2>
        <p>Ich is nearly always introduced by: new fish, plants, or decorations from infected tanks. Prevention: 4-week quarantine for all new fish in a separate tank. Dip new plants in potassium permanganate or bleach solution. Never share equipment (nets, siphons) between tanks without sterilization.</p>
        <p>Ich is present in small numbers in most aquariums — fish with strong immune function do not develop clinical ich even when exposed. An ich outbreak is almost always triggered by immune compromise from: temperature swings, poor water quality, overcrowding, or stress from transportation. Maintain stable temperatures, excellent water quality, and appropriate stocking — these are the real long-term prevention.</p>
      </div>
    </ArticleLayout>
  )
}
