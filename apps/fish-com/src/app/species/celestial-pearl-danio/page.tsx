import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Celestial Pearl Danio Care Guide — Galaxy Rasbora & Nano Tanks | Fish.com', description: 'Celestial pearl danios (galaxy rasboras) are 1-inch jewels for nano tanks. Spotted pattern, stunning males, peaceful community fish. Groups of 8+ required.', path: '/species/celestial-pearl-danio', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Celestial Pearl Danio Care Guide', description: 'Nano tank care, breeding, and group requirements for Danio margaritatus celestial pearl danios.', url: 'https://fish.com/species/celestial-pearl-danio', imageUrl: '', authorName: 'Fish.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function CPDPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Celestial Pearl Danio', subtitle: 'Danio margaritatus — discovered only in 2006 in Myanmar and immediately popular in the hobby. At 1 inch, the celestial pearl danio (also marketed as the galaxy rasbora despite not being a rasbora) packs extraordinary visual impact into a nano-compatible package: pearlescent spots on a dark olive-blue body, red-orange fins edged in black.', category: 'Species Guide — Nano', authorName: 'Fish.com Expert Team', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Celestial Pearl Danio', href: '/species/celestial-pearl-danio' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Danio margaritatus'], ['Adult size', '1 inch — true nano fish'], ['Min group', '8+ — 10-12 ideal'], ['Temperature', '73–79°F'], ['pH', '6.5–7.5'], ['Min tank', '10 gallons for a group'], ['Breeding', 'Plant spawner — breeds readily']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Ember Tetra', href: '/species/ember-tetra' }, { label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }, { label: 'Best Nano Tanks', href: '/reviews/best-nano-tanks' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-cpd" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Males vs Females — Dramatic Dimorphism</h2>
        <p>CPD have striking sexual dimorphism — males have vivid orange-red fins with bold black edges and display intensely to each other and to females. Females are smaller with paler coloration and noticeably rounded abdomens when carrying eggs. The male's display behavior — fins flared, swimming in tight circles around females or rivals — is one of the most entertaining behavioral displays in nano fishkeeping. A tank with 5-6 males and 4-6 females produces continuous display activity that makes watching the tank genuinely captivating.</p>

        <h2>Group Dynamics and Tank Setup</h2>
        <p>CPD need groups — single fish or pairs are skittish and rarely seen. A group of 10-12 in a well-planted 10-15 gallon produces the confident, active schooling behavior the species is capable of. Dense planting with fine-leaved plants (Java moss, hornwort, Rotala) provides the visual complexity and cover that makes CPD comfortable enough to display fully. Dark substrate makes their coloration pop dramatically — CPD on light substrate appear washed out.</p>
        <p>CPD tolerate and thrive in soft to moderately hard water across a fairly wide pH range — they are adaptable to standard community tank conditions. Slightly cooler temperatures (73–77°F) suit them well, making them compatible with other cool-preference species.</p>

        <h2>Breeding</h2>
        <p>CPD breed readily in planted tanks — eggs are deposited among fine-leaved plants and Java moss. Unlike many small fish, CPD do not aggressively eat their eggs, and in a heavily planted nano tank, enough fry survive to establish a self-sustaining population without dedicated breeding setup. Fry are very small — they feed on infusoria and microfauna (naturally present in established planted tanks) before graduating to micro worms and baby brine shrimp. A dedicated breeding setup (spawning mop, separate fry tank) produces much higher yields.</p>

        <h2>Feeding</h2>
        <p>At 1 inch, CPD need small food. Micro pellets (New Life Spectrum Micro, Hikari Micro Wafers), small live foods (micro worms, baby brine shrimp, daphnia), and crushed flake. They are enthusiastic feeders that compete well at feeding time despite their small size. Feed twice daily — small amounts they consume in 2 minutes.</p>
      </div>
    </ArticleLayout>
  )
}
