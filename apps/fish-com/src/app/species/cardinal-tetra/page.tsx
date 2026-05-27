import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Cardinal Tetra Care Guide — vs Neon Tetra, Blackwater | Fish.com', description: 'Cardinal tetras vs neon tetras — different requirements. Cardinals need soft, warm, acidic blackwater conditions and larger schools.', path: '/species/cardinal-tetra', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Cardinal Tetra Care Guide', description: 'Cardinal vs neon tetra, blackwater conditions, and schooling for Paracheirodon axelrodi.', url: 'https://fish.com/species/cardinal-tetra', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function CardinalTetraPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Cardinal Tetra Care Guide', subtitle: 'Paracheirodon axelrodi — the full-body red-and-blue cardinal tetra is widely considered the most beautiful schooling fish in the freshwater hobby. Unlike neon tetras, which extend only halfway, cardinals have red coloration running the full length of the belly. They require softer, warmer, more acidic water than neons — and reward the conditions with extraordinary displays.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Cardinal Tetra', href: '/species/cardinal-tetra' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Cardinal vs Neon</div>
          {[['Red stripe', 'Full body (cardinal) vs half (neon)'], ['pH tolerance', 'Softer/lower (cardinal)'], ['Temperature', 'Warmer (cardinal — 78-82°F)'], ['Hardiness', 'Neon hardier for beginners'], ['Availability', 'Both widely available'], ['Price', 'Cardinals slightly more expensive']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Neon Tetra Care', href: '/species/neon-tetra' }, { label: 'Discus Care', href: '/species/discus' }, { label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-cardinal-tetra" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Cardinal vs Neon — The Key Difference</h2>
        <p>New hobbyists often confuse the two species — they are visually similar and often sold side by side. The critical visual difference: the neon tetra's red stripe runs from the middle of the body to the tail; the cardinal's red runs the full length of the belly from nose to tail. Cardinals are more intensely colored adults. They are also more demanding in their water requirements.</p>
        <p>Neon tetras tolerate a wider range of pH and hardness — they are the appropriate beginner tetra. Cardinals require softer, more acidic water (pH 5.5–7.0, soft) and warmer temperatures (78–82°F) to thrive long-term. In hard, alkaline tap water, cardinals are more susceptible to disease and have shorter lifespans than in their preferred conditions. If your tap water is hard, consider RO/DI water with remineralization for cardinals.</p>

        <h2>Blackwater Biotope</h2>
        <p>Cardinal tetras are native to the Rio Negro and Orinoco basins in South America — blackwater rivers stained dark amber by tannins from decaying leaves and wood, with extremely soft and acidic water. A blackwater biotope setup — dark substrate, driftwood, catappa leaves releasing tannins — is not required but produces the most vibrant coloration and natural behavior. The tea-colored water is not a sign of poor quality; it is the correct environment for these fish.</p>
        <p>Adding Indian almond leaves (Terminalia catappa) to the aquarium releases tannins and humic acids, softens water slightly, has antibacterial properties, and creates the natural blackwater appearance cardinals thrive in. Replace leaves monthly as they decompose.</p>

        <h2>School Size and Tank Setup</h2>
        <p>Cardinal tetras are schooling fish — the visual impact that makes them extraordinary requires a proper school. Minimum 10 for a meaningful display; 20–30 in a 30-gallon+ aquarium creates the synchronized movement and color flash that is one of the most striking sights in the freshwater hobby. In small numbers they are just pretty fish; in proper schools they are breathtaking.</p>
        <p>Pair with low-light plants (Java fern, Anubias, floating plants like Amazon frogbit), dark substrate, and driftwood for the most natural and visually contrasting setup. Discus and German blue rams share the same water parameters and make ideal tankmates. Avoid hard-water fish (African cichlids, livebearers preferring hard water).</p>
      </div>
    </ArticleLayout>
  )
}
