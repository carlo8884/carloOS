import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Russian Tortoise Care Guide — Burrows, Dry Diet | Lizard.com', description: 'Russian tortoises (Horsfield\'s tortoise) are cold-tolerant, active, and long-lived (50+ years). They need deep burrow opportunities and a dry.', path: '/species/russian-tortoise', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Russian Tortoise Care Guide', description: 'Burrow requirements, dry fibrous diet, and care for Testudo horsfieldii Russian tortoises.', url: 'https://lizard.com/species/russian-tortoise', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function RussianTortoisePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Russian Tortoise Care Guide', subtitle: 'Testudo horsfieldii — the Russian tortoise (also called Horsfield\'s tortoise) is one of the most popular tortoise species in the hobby and one of the best-suited to captivity among the tortoises. Smaller than most common tortoise species (4–8 inches), active and personable, cold-tolerant enough for outdoor keeping in many climates, and long-lived — the tortoise in a child\'s home may still be there when the child has grandchildren.', category: 'Species Guide — Intermediate', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Russian Tortoise', href: '/species/russian-tortoise' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Adult size', '4–8 inches (females larger)'], ['Enclosure', '4×8 ft outdoor enclosure or large indoor'], ['Basking surface', '95–105°F'], ['Ambient', '70–85°F warm · 60–70°F cool'], ['Diet', 'Dry fibrous greens and weeds — no fruit'], ['Hibernation', 'Capable — optional in captivity'], ['Lifespan', '50–100+ years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease' }, { label: 'Dehydration Guide', href: '/health/dehydration-reptiles' }, { label: 'UVB Lighting', href: '/setup/uvb-lighting-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-russian-tortoise" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Why Russian Tortoises Are Recommended for Beginners</h2>
        <p>Among the commonly kept tortoise species, Russian tortoises stand out for several practical advantages: their smaller adult size (4–8 inches vs 10–12 inches for Greeks or Hermann's, and much larger for sulcatas) makes appropriate enclosures manageable. Their cold tolerance — they naturally inhabit the steppes of Central Asia where temperatures drop significantly — means outdoor keeping in temperate climates is possible and often beneficial. They are active, visible animals that do not spend the majority of time hiding, making them engaging to observe. Their personality is distinct — individual tortoises have recognizable temperaments and many become responsive to their keepers over years.</p>

        <h2>Burrow Access — Behavioral Requirement</h2>
        <p>Russian tortoises are burrowing animals. In the wild, they spend significant time in burrows — thermoregulating, avoiding temperature extremes, and hibernating through cold periods. In captivity, they need either deep substrate for burrowing (8–12 inches of a mixture of topsoil and sand that holds tunnel shape) or artificial burrows (closed wooden boxes, PVC pipe sections, cork bark caves). A Russian tortoise without burrow access is a stressed tortoise — it will pace the enclosure walls (called "glass surfing" in indoor enclosures) and spend excessive time seeking cover that does not exist.</p>
        <p>Outdoor enclosures with natural soil for burrowing are ideal — the tortoise can thermoregulate naturally by depth in the substrate and exhibit normal burrowing behavior. Perimeter walls must extend 12+ inches below ground level to prevent escape through tunneling under the barrier.</p>

        <h2>Diet — Dry, Fibrous, Mediterranean</h2>
        <p>Russian tortoises come from arid steppe environments where vegetation is dry, tough, and fibrous — the opposite of the lush, wet vegetation many tortoise keepers provide. Wet foods (fruit, cucumber, tomato, watery lettuces) cause diarrhea, dysbiosis of the intestinal microbiome, and can lead to metabolic problems over time. These foods should be avoided entirely or kept to absolute minimum (occasional tiny pieces as enrichment, not as diet staples).</p>
        <p>Appropriate diet: dark leafy greens with low oxalate content (collard greens, dandelion greens and flowers, mustard greens, turnip greens), weeds from pesticide-free areas (dandelion is excellent — leaves, flowers, and stems), hay (timothy or orchard grass — the fibrous backbone of the diet that mirrors their natural grass and forb consumption), and dried herbs (rosemary, thyme, lavender, dried hibiscus). Calcium carbonate dusted on all food at every feeding.</p>

        <h2>UVB and Supplementation</h2>
        <p>UVB is essential for Russian tortoises to synthesize vitamin D3 and metabolize calcium. Outdoor tortoises receive natural UVB from sunlight — the ideal situation. Indoor tortoises require an Arcadia T5 6% or 12% UVB tube positioned according to Arcadia's Ferguson Zone guidelines for Testudo species (Zone 3 — UVI 1.0-2.9 at the basking position). Supplement with calcium carbonate at every feeding; multivitamin containing D3 once weekly for fully indoor tortoises.</p>

        <h2>The Lifespan Reality — A Commitment</h2>
        <p>Russian tortoises live 50–100+ years. The tortoise purchased by a family today may outlive every member of that family. This is not hyperbole — tortoise longevity records extend well past 100 years in documented cases. Before acquiring a Russian tortoise, consider: who will care for this animal if you can no longer? Including the tortoise in estate planning, identifying a trusted person who would take ownership, or connecting with a tortoise rescue organization that accepts surrenders are all appropriate steps for a responsible long-term owner. Purchasing a tortoise without considering this is setting up a future surrender situation.</p>
      </div>
    </ArticleLayout>
  )
}
