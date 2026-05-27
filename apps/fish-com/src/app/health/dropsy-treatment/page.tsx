import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Dropsy in Fish — Pinecone Scales, Causes & Treatment | Fish.com', description: 'Dropsy causes pinecone-like scale standing from fluid accumulation in body cavity. Usually fatal — indicates organ failure.', path: '/health/dropsy-treatment', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Dropsy in Fish — Causes and Treatment', description: 'Pinecone scale standing, organ failure diagnosis, and treatment for fish dropsy.', url: 'https://fish.com/health/dropsy-treatment', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function DropsyPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Dropsy in Fish', subtitle: 'Dropsy is not a disease itself — it is a symptom of severe internal organ failure. The characteristic "pinecone" appearance of scales standing away from the body results from massive fluid accumulation in the body cavity. By the time dropsy is visually apparent, the underlying disease has typically progressed to an advanced state.', category: 'Fish Health', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Dropsy', href: '/health/dropsy-treatment' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Dropsy Signs</div>
          {['Scales standing outward — pinecone appearance', 'Bloated, distended abdomen', 'Protruding eyes (exophthalmia)', 'Lethargy, loss of appetite', 'Pale gills', 'Curved spine in advanced cases'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }, { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }, { label: 'Goldfish Care', href: '/species/goldfish' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-dropsy" />
      </>}
    >
      <div className="carloOS-article">
        <h2>What Dropsy Actually Is</h2>
        <p>Dropsy describes the accumulation of fluid (edema and ascites) within the body cavity of a fish, causing the characteristic distension and scale protrusion. It is not caused by a single pathogen — it is a final common endpoint of multiple serious conditions that damage internal organs to the point where normal fluid regulation fails.</p>
        <p>The most common underlying causes: bacterial infection involving the kidneys (Aeromonas, Pseudomonas, Edwardsiella) damaging the renal tubules responsible for fluid regulation; viral infection; parasitic organ infiltration; hepatic (liver) failure from any cause; and neoplasia (internal tumors). Bacterial kidney infection is by far the most common cause in aquarium fish, and this is why the condition is historically associated with poor water quality — elevated nitrate and ammonia predispose fish to systemic bacterial infection.</p>

        <h2>The Pinecone Sign — Why It Looks That Way</h2>
        <p>Fish scales are anchored in scale pockets in the skin. When fluid accumulates under the skin and within the body cavity, the pressure forces the scales outward from the body wall — producing the pinecone or "open book" appearance when viewed from above or the side. This sign — called "pine-coning" — is distinctive and visible before the full extent of abdominal distension is apparent. Dorsal view (looking down at the fish from above) typically reveals the pine-coning most clearly.</p>

        <h2>Prognosis — The Honest Assessment</h2>
        <p>Dropsy has a poor prognosis. By the time scales are visibly standing away from the body, significant organ damage has already occurred. Recovery is possible but uncommon — estimated at 10–30% even with aggressive treatment. The fish that do recover from dropsy typically have early presentations (mild scale standing, fish still eating) where treatment begins before multi-organ failure is established. A fish with full pine-coning, severe distension, lethargy, loss of appetite, and pale gills has a very poor prognosis regardless of treatment.</p>
        <p>Humane euthanasia — using clove oil at 400mg/L (overdose) in an isolated container of tank water — should be considered for fish with advanced dropsy showing signs of significant distress or those that have not responded to treatment within several days. Allowing a fish to die slowly of organ failure is not the most humane option.</p>

        <h2>Treatment Protocol</h2>
        <p>Isolate the affected fish to a hospital tank immediately — both to concentrate treatment and to reduce disease transmission risk. Maintain pristine water quality in the hospital tank with frequent water changes.</p>
        <p><strong>Kanamycin (Seachem KanaPlex) + metronidazole (Seachem MetroPlex):</strong> The combination most frequently recommended for dropsy with suspected bacterial kidney involvement. KanaPlex targets gram-negative bacteria commonly associated with internal bacterial infection. MetroPlex addresses potential protozoan involvement (Hexamita). Both can be mixed with food using Seachem Focus to improve internal delivery. Add to the water and mix into food simultaneously for best results.</p>
        <p><strong>Epsom salt:</strong> Magnesium sulfate at 1-3 teaspoons per 5 gallons creates an osmotic gradient that draws fluid from the tissues — providing temporary relief from the fluid accumulation. It is not a cure but reduces the pressure of ascites and may improve the fish's comfort during treatment. Use magnesium sulfate, not table salt (sodium chloride), which does not have this effect on osmosis in the same way.</p>

        <h2>Quarantine Remaining Fish</h2>
        <p>When one fish develops dropsy from a bacterial systemic infection, other fish in the same tank are at risk — particularly if they are stressed by the same water quality issues. Monitor all other fish closely. A preemptive course of antibiotics in the display tank is sometimes recommended when multiple fish are showing early signs, but should be weighed against the impact on biological filtration.</p>
      </div>
    </ArticleLayout>
  )
}
