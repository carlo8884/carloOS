import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pain Management in Dogs — NSAIDs, Gabapentin | Vets.co', description: 'Pain in dogs is undertreated. NSAIDs, gabapentin, Librela, and multimodal protocols for chronic pain. How to assess pain in dogs who hide it. Reference guide.', path: '/health/pain-management-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Pain Management in Dogs', description: 'NSAIDs, gabapentin, Librela, and multimodal pain protocols for dogs.', url: 'https://vets.co/health/pain-management-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Pain Management in Dogs', description: 'Assessment and multimodal treatment of acute and chronic pain in dogs.', url: 'https://vets.co/health/pain-management-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const SOURCES = [
  { label: 'WSAVA: Pain Management Guidelines', url: 'https://wsava.org/global-guidelines/global-pain-council-guidelines/', publisher: 'WSAVA' },
  { label: 'AAHA: Pain Management Guidelines for Dogs and Cats', url: 'https://www.aaha.org/aaha-guidelines/pain-management/', publisher: 'AAHA' },
  { label: 'Merck Veterinary Manual: Pain Assessment and Management', url: 'https://www.merckvetmanual.com/pharmacology/analgesia/pain-assessment-and-treatment-in-animals', publisher: 'Merck Vet Manual' },
]

export default function PainManagementPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Pain Management in Dogs', subtitle: 'Pain in dogs is significantly undertreated — partly because dogs hide pain as an evolutionary survival mechanism, partly because owners and even some veterinarians underestimate the signs, and partly because pain management options have historically been limited. All three of these barriers have improved substantially.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Pain Management', href: '/health/pain-management-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs', category: 'Veterinary Guide' },
          { title: 'Arthritis in Dogs', href: '/health/arthritis-in-dogs', category: 'Veterinary Guide' },
          { title: 'Senior Dog Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Subtle Pain Signs</div>
            {['Slowed pace on walks', 'Reluctance to jump onto furniture', 'Less interest in play', 'Sleeping more than usual', 'Changes in posture when resting', 'Reduced appetite', 'Irritability when touched in a specific area', 'Licking or chewing a joint or area'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Arthritis in Dogs', href: '/health/arthritis-in-dogs' }, { label: 'Senior Dog Care', href: '/health/senior-pet-care' }, { label: 'Find a Specialist', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-pain-mgmt" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Why Dogs Hide Pain — and How to See Through It</h2>
          <p>Dogs are descended from prey animals whose survival depended on not appearing weak — showing pain attracted predators. This evolutionary pressure remains: dogs with significant chronic pain often appear "fine" to casual observation while making behavioral adaptations that are the actual pain signal. The dog that used to bound up the stairs and now takes them slowly. The dog that stopped initiating play. The dog that gets up from rest with a brief hesitation before moving normally. These behavioral changes are pain signs that owners frequently attribute to "slowing down with age" — which is itself often a pain signal.</p>
          <p>The most useful owner exercise: compare a video of the dog at 3 years old with the same dog at 9 years old. Changes that look like "aging" — reduced bounce in gait, less spontaneous play, hesitation before movement — are frequently pain-driven and treatable.</p>

          <h2>NSAIDs — The First Line</h2>
          <p>Non-steroidal anti-inflammatory drugs are the foundation of canine pain management for musculoskeletal and postoperative pain. They block prostaglandin production, reducing inflammation and the pain signals associated with it. Veterinary NSAIDs (carprofen/Rimadyl, meloxicam/Metacam, grapiprant/Galliprant, deracoxib/Deramaxx) are significantly safer for dogs than human NSAIDs (ibuprofen, naproxen, aspirin) — do not use human NSAIDs in dogs. Even baby aspirin at regular doses causes GI ulceration in dogs.</p>
          <p>NSAID safety monitoring: baseline bloodwork (CBC, chemistry) before starting long-term NSAIDs, repeat at 6 months and annually thereafter. NSAIDs are processed through the kidneys and liver — compromised organ function requires dose adjustment or alternative pain management. GI side effects (vomiting, diarrhea, rarely ulceration) can be reduced by giving with food. Never combine NSAIDs with steroids or with other NSAIDs — combination increases GI ulceration risk significantly.</p>

          <h2>Gabapentin — Neuropathic and Multimodal</h2>
          <p>Gabapentin addresses neuropathic pain (pain from nerve damage or sensitization) — a pain type that NSAIDs alone do not adequately control. It works through calcium channel modulation in the dorsal horn of the spinal cord, reducing the "wind-up" phenomenon where chronic pain causes central sensitization. Clinical use: spinal cord disease (IVDD), post-surgical nerve pain, chronic arthritis (combined with NSAID), and cancer pain. Sedation is the most common side effect — start at a low dose and titrate up. Well-tolerated in most dogs. Generic gabapentin (identical to Neurontin) is available at low cost.</p>

          <h2>Librela (Bedinvetmab) — A New Class</h2>
          <p>Librela is a monoclonal antibody targeting nerve growth factor (NGF) — a key pain signaling molecule in osteoarthritis. Given as a monthly subcutaneous injection by a veterinarian, it provides 4 weeks of pain control per injection with a different mechanism than NSAIDs, making it appropriate for dogs that cannot tolerate NSAIDs (kidney disease, GI disease) or as an add-on for inadequate NSAID response. Clinical trial data showed significant improvement in mobility and pain scores in dogs with osteoarthritis. It works particularly well in dogs whose arthritis pain has not been adequately controlled by NSAIDs alone. It is not a replacement for all pain management — it targets one pain pathway in a complex pain condition.</p>

          <h2>Multimodal Pain Management</h2>
          <p>Chronic pain (osteoarthritis, cancer, spinal disease) is best managed with multiple simultaneous approaches targeting different pain pathways — multimodal analgesia. A multimodal protocol for a dog with osteoarthritis might include: an NSAID (anti-inflammatory), gabapentin (neuropathic/central sensitization), Librela monthly (NGF pathway), fish oil at therapeutic doses (anti-inflammatory), environmental modification (ramps, orthopedic bed, non-slip flooring), weight management (reduces joint loading), and physiotherapy or hydrotherapy (maintains muscle mass, reduces joint pain through movement). Each element addresses a different aspect of the pain experience — combined, they provide far better control than any single agent.</p>

          <h2>Weight Management as Pain Treatment</h2>
          <p>For osteoarthritic dogs, weight loss to ideal BCS is a pain management intervention, not just a wellness recommendation. Every pound of excess weight adds approximately 3-4 pounds of force on the joints with each step. A study in Labrador Retrievers showed that dogs at ideal body weight developed osteoarthritis significantly later and with lower severity than littermates maintained at slightly over ideal weight. For a dog already arthritic, losing 10% of body weight may produce pain reduction equivalent to starting an NSAID — without the medication cost or monitoring requirements.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
