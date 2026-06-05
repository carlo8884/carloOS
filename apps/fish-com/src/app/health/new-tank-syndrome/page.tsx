import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks , AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'New Tank Syndrome — Ammonia Spike, Cycling | Fish.com', description: 'New tank syndrome kills fish through ammonia poisoning. Fishless cycling with ammonia takes 4-6 weeks.', path: '/health/new-tank-syndrome', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'New Tank Syndrome', description: 'Ammonia spikes, cycling protocol, and fish-in emergency management for new aquariums.', url: 'https://fish.com/health/new-tank-syndrome', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function NewTankSyndromePage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'New Tank Syndrome', subtitle: 'New tank syndrome describes the ammonia and nitrite toxicity that kills fish in an uncycled aquarium. The nitrogen cycle — the establishment of beneficial bacteria that convert fish waste to less harmful compounds — takes 4–8 weeks to complete in a new tank. Fish added before this cycle is established are poisoned by their own waste.', category: 'Fish Health', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Nitrogen Cycle Explained", href: "/health/nitrogen-cycle-explained", category: "Fish Health" }, { title: "Aquarium Cycling Guide", href: "/setup/aquarium-cycling-guide", category: "Tank Setup" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">The Nitrogen Cycle</div>
          {[['Fish waste → ammonia (NH₃)', 'Toxic at very low levels'], ['Ammonia → nitrite (NO₂)', 'Nitrosomonas bacteria — also toxic'], ['Nitrite → nitrate (NO₃)', 'Nitrospira bacteria — lower toxicity'], ['Nitrate → water change', 'Only removed by water changes or plants']].map(([step, note]) => (
            <div key={step} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark font-mono">{step}</div>
              <div className="text-2xs text-brand-text-light">{note}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' }, { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' }, { label: 'Quarantine Tank Guide', href: '/setup/quarantine-tank-guide' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-new-tank" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Why Ammonia Kills</h2>
        <p>Ammonia (NH₃) is produced continuously by fish as a metabolic waste product — excreted through the gills and in urine. In a cycled tank, beneficial bacteria convert ammonia to nitrite (still toxic) and then to nitrate (much less toxic) rapidly enough that ammonia never accumulates to harmful levels. In a new, uncycled tank, these bacteria colonies do not yet exist. Ammonia builds up to concentrations that burn gill tissue, damage internal organs, suppress immune function, and kill fish — sometimes within days of the tank being set up.</p>
        <p>The signs of ammonia toxicity: fish hanging near the surface (gasping for oxygen — damaged gills cannot extract it efficiently), lethargy, red streaking on fins and body (hemorrhaging from irritated capillaries), and loss of equilibrium. By the time fish are showing these signs in a new tank, significant damage has occurred. Test the water: ammonia above 0.25 ppm is stressful; above 1 ppm is actively harmful; above 2 ppm is acutely life-threatening to most species.</p>

        <h2>Fishless Cycling — The Right Way</h2>
        <p>The correct approach: cycle the tank before adding any fish. Fishless cycling with pure ammonia (unscented household ammonia — no surfactants, no added ingredients — or Fritz Fishless Fuel which is pre-measured for aquarium use) doses the tank to establish the bacterial colonies before any livestock is present. Process:</p>
        <ol>
          <li>Fill and run the tank with filter running for 24 hours</li>
          <li>Add ammonia to raise the level to 2–4 ppm</li>
          <li>Add bottled beneficial bacteria (Fritz Complete, Seachem Stability, Dr. Tim's One and Only) to seed the cycle</li>
          <li>Test ammonia and nitrite daily — the cycle is progressing when nitrite begins rising as ammonia drops</li>
          <li>Continue dosing ammonia to 2 ppm when it drops to 0 — the bacteria need continuous food to establish</li>
          <li>Cycle is complete when: ammonia added to 2 ppm drops to 0 within 24 hours, AND nitrite drops to 0 within 24 hours simultaneously</li>
          <li>Do a large water change to reduce nitrate, then add fish</li>
        </ol>
        <p>Timeline: 4–8 weeks without seeding, 1–3 weeks with quality bottled bacteria. Seeded media from an established tank (a sponge filter, substrate, or filter media moved from a cycled tank to the new one) dramatically accelerates the cycle — sometimes to days rather than weeks.</p>

        <h2>Fish-In Cycling — Emergency Protocol</h2>
        <p>Already added fish before reading this? The fish-in emergency protocol buys time while the cycle establishes:</p>
        <ul>
          <li><strong>Test daily</strong> — API Master Test Kit for ammonia, nitrite, nitrate, pH. Free ammonia test strips are not reliable enough for this situation.</li>
          <li><strong>25-50% water change any day ammonia exceeds 0.25 ppm</strong> — this dilutes the toxin. Do not skip changes because "the tank needs to cycle" — cycling without killing the fish requires maintaining ammonia below harmful levels.</li>
          <li><strong>Dose Prime (Seachem) daily</strong> — Prime detoxifies ammonia and nitrite for approximately 24 hours without removing it or interfering with the cycling bacteria. At the standard dose, it keeps ammonia at the same measurable level but in a non-toxic form. Redose daily during the crisis period.</li>
          <li><strong>Do not add more fish</strong> — every fish adds more ammonia load to an already compromised situation.</li>
          <li><strong>Do not feed for 24-48 hours</strong> during the peak of an ammonia spike — food adds ammonia before the fish even digest it.</li>
        </ul>

        <h2>When the Cycle Is Complete</h2>
        <p>The cycle is complete — not "almost done," not "getting there" — when both ammonia and nitrite read 0 ppm on a test kit (not strips) 24 hours after dosing the tank with ammonia. A tank that shows 0 ammonia but 0.25 ppm nitrite is not cycled — the nitrite bacteria are still establishing. Introducing fish to a partially cycled tank restarts the stress cycle. Patience at this stage prevents weeks of emergency water changes later.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: '#f7fbfd', border: '1px solid #d4e5ee', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4a6573', marginBottom: '8px' }}>Test Kit + Dechlorinator</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: '#4a6573', lineHeight: 1.55 }}>New-tank-syndrome prevention is test-kit + dechlorinator. API Freshwater Master Test Kit covers ammonia/nitrite/nitrate/pH; Seachem Prime detoxifies chlorine + chloramine. This is husbandry equipment, not a substitute for veterinary care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/api%20freshwater%20master%20test%20kit%20seachem%20prime?s=health-new-tank-syndrome" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#232f3e', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/api%20freshwater%20master%20test%20kit%20seachem%20prime?s=health-new-tank-syndrome" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#1e90ff', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
