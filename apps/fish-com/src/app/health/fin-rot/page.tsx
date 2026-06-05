import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Fin Rot in Fish — Causes, Bacterial vs Fungal | Fish.com', description: 'Fin rot is almost always caused by poor water quality. Fraying, ragged edges progressing toward the body. Treatment: water quality first.', path: '/health/fin-rot', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Fin Rot in Fish', description: 'Causes, bacterial vs fungal distinction, and treatment for fin rot in aquarium fish.', url: 'https://fish.com/health/fin-rot', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function FinRotPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Fin Rot in Fish', subtitle: 'Fin rot is the most common disease in aquarium fish — fraying, ragged, or deteriorating fins caused by bacterial or fungal infection of damaged fin tissue. Almost every case of fin rot is preventable. Water quality is both the cause and the treatment foundation.', category: 'Fish Health', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Fin Rot', href: '/health/fin-rot' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Bacterial Infections", href: "/health/bacterial-infections", category: "Fish Health" }, { title: "Nitrogen Cycle Explained", href: "/health/nitrogen-cycle-explained", category: "Fish Health" }, { title: "Ich Treatment Guide", href: "/health/ich-treatment", category: "Fish Health" }]}
      sidebar={<>
        <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Fin Rot Stages</div>
          <div className="space-y-2">
            {[['Early', 'Ragged fin edges, slight discoloration at margins'], ['Moderate', 'Fin tissue eroding, white or brown edges, red inflammation'], ['Severe', 'Fins eroded to body, body rot beginning — emergency']].map(([s, d]) => (
              <div key={s} className="text-xs">
                <span className="font-bold text-brand-danger">{s}: </span>
                <span className="text-brand-text-mid">{d}</span>
              </div>
            ))}
          </div>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Ich Treatment', href: '/health/ich-treatment' }, { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }, { label: 'Betta Fish Care', href: '/species/betta-fish' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-fin-rot" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Root Cause — Almost Always Water Quality</h2>
        <p>Healthy fish in clean water do not develop fin rot. The bacteria and fungi that cause fin rot (primarily Aeromonas, Pseudomonas, and Flavobacterium species for bacterial; Saprolegnia for fungal) are present in virtually all aquarium water as normal environmental organisms. They only cause disease when fish are immunocompromised — and the most common cause of immunocompromise in fish is poor water quality.</p>
        <p>Elevated ammonia, elevated nitrite, high nitrate, and temperature stress all suppress fish immune function. The pathway: ammonia accumulates (from overfeeding, overcrowding, or inadequate filtration) → fish immune system compromises → opportunistic bacteria establish infection at fin margins → fin rot develops. Treating fin rot with medication without correcting the water quality allows reinfection after treatment.</p>

        <h2>Bacterial vs Fungal — Identification</h2>
        <p><strong>Bacterial fin rot</strong> (most common): Fin edges appear ragged and frayed, often with a red or inflamed border at the line between healthy and affected tissue. The deterioration has a "eaten away" appearance. May progress rapidly (24–48 hours in acute cases with elevated ammonia).</p>
        <p><strong>Fungal fin rot (Saprolegnia):</strong> Cotton-like, fluffy white growth on fin edges — clearly three-dimensional and fuzzy rather than simply ragged. Often secondary to an injury or bacterial infection. True fungal infections require different treatment than bacterial.</p>
        <p>In practice, many cases involve both bacterial and fungal components simultaneously. Treatment that covers both is appropriate when uncertain.</p>

        <h2>Treatment Protocol</h2>
        <p><strong>Step 1 — Water quality first:</strong> Test ammonia, nitrite, and nitrate immediately. If ammonia or nitrite is above 0, do a 25–50% water change immediately and determine the cause (overcrowding, overfeeding, filter failure, new tank syndrome). No medication will permanently resolve fin rot in poor water quality. Fix the water first.</p>
        <p><strong>Step 2 — Isolate if possible:</strong> Move the affected fish to a hospital tank for treatment. This concentrates medication where it is needed and protects the main tank's beneficial bacteria from antibiotic disruption.</p>
        <p><strong>Step 3 — Bacterial treatment:</strong> API Fin & Body Cure (kanamycin + nitrofurazone combination) or Seachem KanaPlex are effective against bacterial fin rot. Follow manufacturer's dosing protocol for the full course. Remove activated carbon from the filter before treating — carbon removes medication.</p>
        <p><strong>Fungal component:</strong> API Pimafix (pimaricin-based) or API Fungus Cure for confirmed fungal cases. Pimafix can be used alongside KanaPlex to cover both bacterial and fungal simultaneously.</p>
        <p><strong>Aquarium salt:</strong> 1 teaspoon per gallon of aquarium salt creates an osmotic environment less favorable to pathogens while reducing fish stress. Freshwater fish tolerate low salt concentrations that inhibit many fin rot pathogens.</p>

        <h2>Recovery — What to Expect</h2>
        <p>Fins regenerate — damaged fin tissue grows back over weeks to months in fish that recover from fin rot, provided the underlying water quality issue is resolved. Early-stage fin rot treated promptly often leaves no permanent damage. Severe fin rot that reached the body wall may leave scarring. Fins that regenerated after infection may not be identical to the original — slight color or shape differences are common.</p>
        <p>The fish that has recovered from fin rot and is kept in consistently clean water with appropriate filtration will not develop fin rot again. Recurrence is almost always a water quality management problem.</p>

        <h2>Fin Rot in Bettas — The Specific Case</h2>
        <p>Bettas are disproportionately affected by fin rot because: they are often kept in small, under-filtered tanks where water quality degrades quickly, their long fins are easily damaged by rough decorations or fin-nipping fish, and their elaborate fins provide more surface area for infection. Betta fin rot treatment follows the same protocol — but tank size and filtration upgrade is the most important preventive measure. A betta in a 5-gallon properly filtered tank rarely develops fin rot; a betta in an unfiltered 1-gallon bowl frequently does.</p>

        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div style={{ background: '#f7fbfd', border: '1px solid #d4e5ee', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4a6573', marginBottom: '8px' }}>Water Test Kit + Gravel Vacuum</div>
          <p style={{ fontSize: '14px', margin: '0 0 8px', color: '#4a6573', lineHeight: 1.55 }}>Fin rot is almost always a water quality problem. Step 1 of the treatment protocol is testing ammonia, nitrite, and nitrate accurately — which requires a liquid test kit, not strips. Step 2 is removing accumulated waste from the substrate with a gravel vacuum during water changes to prevent the ammonia spike from recurring. These are maintenance tools, not disease treatments; they address the environmental root cause. They are not a substitute for correct diagnosis or veterinary guidance when a fish is significantly unwell.</p>
          <p style={{ fontSize: '12px', margin: '0 0 12px', color: '#7a95a0', lineHeight: 1.4 }}>Fish.com earns an affiliate commission on qualifying purchases at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/api%20freshwater%20master%20test%20kit%20gravel%20vacuum%20siphon?s=health-fin-rot" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#232f3e', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/aquarium%20test%20kit%20gravel%20vacuum%20water%20change?s=health-fin-rot" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#1e90ff', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
