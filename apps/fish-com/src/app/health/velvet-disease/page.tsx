import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Velvet Disease in Fish — Gold Dust Appearance & Copper Treatment | Fish.com', description: 'Velvet (Oodinium) is a parasite that looks like gold dust on the fish surface. Highly contagious. Treat with copper or chloroquine phosphate — not salt or general tonics.', path: '/health/velvet-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Velvet Disease in Fish', description: 'Gold dust appearance, diagnosis, and copper treatment for Oodinium velvet disease.', url: 'https://fish.com/health/velvet-disease', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function VelvetDiseasePage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Velvet Disease in Fish', subtitle: 'Velvet — caused by the dinoflagellate parasite Oodinium (Piscinoodinium pillulare in freshwater, Amyloodinium ocellatum in saltwater) — is the second most common fish disease after ich. It is faster-moving than ich, more visually subtle until advanced, and more lethal if not caught and treated promptly.', category: 'Fish Health', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Velvet Disease', href: '/health/velvet-disease' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Velvet vs Ich</div>
          {[['Appearance', 'Gold/rust dust (velvet) vs white salt grains (ich)'], ['Visibility', 'Velvet harder to see — use flashlight'], ['Speed', 'Velvet more rapid progression'], ['Treatment', 'Copper or chloroquine (both) — salt alone insufficient'], ['Saltwater', 'Amyloodinium — much more dangerous']].map(([k, v]) => (
            <div key={k} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{k}</div>
              <div className="text-2xs text-brand-text-light">{v}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Ich Treatment', href: '/health/ich-treatment' }, { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }, { label: 'Betta Fish Care', href: '/species/betta-fish' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-velvet" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Identification — The Flashlight Test</h2>
        <p>Velvet in its early stages is difficult to see under normal aquarium lighting — the gold or rust-colored dust that gives the disease its name is often invisible until fish are examined with a flashlight held at an angle to the body. This flashlight inspection reveals the gold sheen on the fish's skin that is characteristic of Oodinium. By the time velvet is clearly visible to the naked eye under normal lighting, the infection is advanced.</p>
        <p>Early behavioral signs before the gold dust is visible: fish scratching against surfaces (flashing or glancing — same as ich), lethargy, clamped fins, rapid gill movement (Oodinium infects gill tissue heavily — gill involvement causes labored breathing that often precedes visible skin signs). A fish that is flashing and breathing rapidly in an otherwise clean, well-maintained tank should be examined with a flashlight for velvet.</p>

        <h2>The Parasite Life Cycle — Why Treatment Is Timed</h2>
        <p>Oodinium has three stages: the trophont (attached feeding stage on the fish — visible as the gold dust), the tomont (fallen to substrate, dividing — not visible and not treatable), and the dinospore (free-swimming, infective stage — the only stage that can be killed by medication). Treatment must continue long enough to catch all dinospores as they are released from tomonts — the tomont stage lasts 3–6 days at typical aquarium temperatures. Treatment for a minimum of 2 weeks ensures all dinospores are exposed.</p>

        <h2>Treatment — What Works</h2>
        <p><strong>Copper sulfate or chelated copper (Cupramine by Seachem):</strong> The most reliable treatment for freshwater and saltwater velvet. Cupramine (chelated copper) is safer than ionic copper at therapeutic concentrations and maintains efficacy more consistently. Must be maintained at therapeutic levels (0.15–0.20 mg/L free copper in freshwater; 0.15–0.25 mg/L in marine) — copper concentration falls as it binds to organic matter and substrate. Regular testing with a copper test kit is required to maintain therapeutic levels. Copper is lethal to invertebrates, coral, and live rock — treat in a hospital tank, never in a reef system.</p>
        <p><strong>Chloroquine phosphate:</strong> Anti-malarial medication effective against Oodinium. Can be used in hospital tanks. Somewhat safer for fish than copper. Used at 40mg/gallon. 2-week treatment minimum. More difficult to obtain than copper products but preferred by some marine fish keepers.</p>
        <p><strong>Temperature and blackout:</strong> Oodinium is photosynthetic — it requires light to complete its lifecycle. Total aquarium blackout (covering the tank completely for 24–72 hours) combined with elevated temperature (raise to 82–84°F if species tolerates) weakens the parasite and reduces reproduction rate. This is a supportive measure — not curative alone, but useful combined with medication.</p>

        <h2>Saltwater Velvet (Amyloodinium) — More Dangerous</h2>
        <p>Amyloodinium ocellatum in marine aquariums is significantly more lethal than freshwater Piscinoodinium. It progresses faster, the dinospore infective stage is shorter, and it can kill a full tank of fish within 48-72 hours of first visible signs. Marine velvet is an emergency — treatment must begin immediately. The same copper or chloroquine phosphate protocols apply, in a quarantine tank separate from any invertebrates or coral.</p>
      </div>
    </ArticleLayout>
  )
}
