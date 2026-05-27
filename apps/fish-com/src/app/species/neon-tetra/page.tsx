import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Neon Tetra Care Guide — School Size, NTD | Fish.com', description: 'Neon tetras are the best-known aquarium fish. Schools of 15+ in planted tanks are spectacular.', path: '/species/neon-tetra', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Neon Tetra Care Guide', description: 'School size, neon tetra disease, planted tank display, and care for Paracheirodon innesi.', url: 'https://fish.com/species/neon-tetra', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function NeonTetraPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Neon Tetra Care Guide', subtitle: 'Paracheirodon innesi — the neon tetra may be the most recognizable aquarium fish in existence. The electric blue stripe and vivid red tail have made it a fixture in the hobby since the 1930s. In groups of 15+ in a well-planted tank, the school creates a living light display that no other fish replicates at their size and price point.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Neon Tetra', href: '/species/neon-tetra' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Paracheirodon innesi'], ['Adult size', '1.25 inches'], ['Temperature', '68–79°F (cooler preferred)'], ['pH', '5.5–7.0 (soft acidic optimal)'], ['School size', '10 min — 15-20+ for display'], ['Cardinal vs neon', 'Cardinal tetra larger, more vivid red'], ['Lifespan', '5–10 years in good conditions']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Cardinal Tetra', href: '/species/cardinal-tetra' }, { label: 'Ember Tetra', href: '/species/ember-tetra' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-neon-tetra" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Why Store Neons Die — And How to Prevent It</h2>
        <p>Neon tetras have an undeserved reputation for being fragile. Wild-caught neons from the Amazon, properly handled and quarantined, are actually quite hardy. The fish that die within days of purchase are almost always mass-farmed specimens subjected to: overcrowded holding tanks, poor water quality in transit, exposure to multiple disease sources from mixed-source holding systems, and the compounded stress of temperature and chemistry changes during shipping. The solution is quarantine (4 weeks minimum in a separate tank before introducing to an established aquarium) and purchasing from quality sources — not cheap bulk-lot fish store stock.</p>
        <p>Neons that survive their first month in appropriate conditions typically prove hardy. Water quality maintenance (nitrate under 20 ppm, stable temperature and pH, 0 ammonia and nitrite) keeps them healthy long-term. The "neons always die" experience is almost entirely attributable to disease introduction from unquarantined fish and poor initial stock quality.</p>

        <h2>Neon Tetra Disease (NTD) — Know It, Fear It</h2>
        <p>Neon tetra disease — caused by the microsporidian parasite Pleistophora hyphessobryconis — is the most important health concern for neon keepers. Signs: a white or pale area developing on the body (typically starting near the dorsal fin), the loss of the iridescent blue-green color in affected areas, progressive deterioration over days to weeks, secondary infections at the lesion sites, and eventual death. There is no cure. The parasite's spores are released when infected fish die and are consumed by other fish — it spreads through the tank.</p>
        <p>Management when NTD appears: remove and euthanize affected fish immediately (clove oil overdose is humane — do not allow them to die slowly in the tank releasing spores). Do not add new fish to an infected tank until all fish have been removed and the tank has been stripped and disinfected. Prevention: quarantine all new neons rigorously, purchase only from reputable sources, do not feed infected fish to other fish, and do not introduce fish from unknown sources to an established neon colony.</p>

        <h2>Display — The School of 20</h2>
        <p>The visual impact of neon tetras scales dramatically with school size. Ten neons are pleasant. Twenty neons in a densely planted 30-gallon with dark substrate and good lighting are breathtaking — the school moves as a single organism, the blue stripe and red tail catching light from every angle simultaneously. The school cohesion (how tightly the fish school) also increases with group size — larger schools produce the coordinated, flowing movement behavior that is the most visually compelling aspect of schooling fish.</p>
        <p>Tank setup for best display: dark substrate (black sand), green plants creating visual contrast against which the blue-red stripe stands out (Java fern, Anubias, Rotala), moderate lighting, and a dark background. Tannins (Indian almond leaves, driftwood, peat) darken the water slightly, mimic the fish's natural blackwater environment, and produce the slightly acidic conditions that intensify their color.</p>

        <h2>Neon vs Cardinal Tetra</h2>
        <p>The cardinal tetra (Paracheirodon axelrodi) is the neon's larger cousin — 2 inches versus 1.25 inches, with the red coloration extending the full length of the belly rather than only the posterior half as in neons. Cardinals are generally considered more vivid and more impressive in large schools, but they are more sensitive to water quality than neons and prefer more strictly soft, acidic conditions. Cardinals also tend to be more expensive as they are predominantly wild-caught rather than farm-raised. For planted blackwater setups targeting optimal display with slightly acidic soft water, cardinals are the upgrade. For general community tanks with harder or more neutral water, neons are more appropriate.</p>
      </div>
    </ArticleLayout>
  )
}
