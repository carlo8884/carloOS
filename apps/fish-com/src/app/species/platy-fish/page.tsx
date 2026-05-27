import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Platy Fish Care Guide — Color Varieties, Breeding Control & Hardiness | Fish.com', description: 'Platies are among the hardiest livebearers — tolerant of a wide range of water conditions. Available in dozens of color varieties. They reproduce relentlessly without management.', path: '/species/platy-fish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Platy Fish Care Guide', description: 'Color varieties, breeding control, and community care for Xiphophorus maculatus platies.', url: 'https://fish.com/species/platy-fish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function PlatyPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Platy Fish Care Guide', subtitle: 'Xiphophorus maculatus — platies are among the most forgiving and broadly recommended fish in the hobby. They adapt to a remarkable range of water conditions, eat almost anything, coexist peacefully with virtually all community fish, and come in dozens of color varieties. Their primary management consideration: they breed continuously, and without a plan, a few platies become dozens quickly.', category: 'Species Guide — Beginner', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Platy Fish', href: '/species/platy-fish' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Xiphophorus maculatus'], ['Adult size', '2.5 inches (females larger)'], ['Temperature', '65–80°F — very adaptable'], ['pH', '7.0–8.2 — prefers hard alkaline'], ['Breeding', 'Livebearer — every 4 weeks'], ['Difficulty', 'Beginner — most forgiving livebearer'], ['Lifespan', '3–5 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Guppy Care', href: '/species/guppy' }, { label: 'Molly Fish', href: '/species/guppy' }, { label: 'Best Nano Tanks', href: '/reviews/best-nano-tanks' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-platy" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Color Varieties — Dozens of Options</h2>
        <p>Platies have been selectively bred in the aquarium hobby for over a century, producing an extraordinary range of color varieties. Common named varieties include: sunset platy (orange-yellow fading), blue mirror platy (metallic blue), red wag platy (red body with black fins), tuxedo platy (two-toned with dark lower half), rainbow platy (multiple colors), salt-and-pepper platy (spotted), and many others. Body shape variants exist as well: hi-fin platies have extended dorsal fins; balloon or Mickey Mouse platies (named for dark spots at the tail base resembling Mickey Mouse ears) are popular novelties. All have identical care requirements regardless of the variety selected.</p>

        <h2>Why Platies Are Recommended for Beginners</h2>
        <p>Platies tolerate harder, more alkaline water than many tropical fish — which matches the tap water in many US cities without any modification needed. They tolerate a temperature range of 65–80°F, making them viable in slightly cooler rooms without a heater. They eat a varied omnivore diet including flake, pellet, frozen foods, and vegetable matter without difficulty. They coexist peacefully with virtually all non-aggressive community fish. And unlike bettas (which require careful tankmate selection) or discus (which require precise water chemistry), platies simply go in a tank with appropriate filtration and thrive.</p>
        <p>The one management consideration that catches beginners: platies reproduce every 4 weeks if a male and female are present. A 10-gallon "starter tank" with 2 males and 3 females will have 30+ fish in 3 months without intervention. Decide before purchase: all-male group (no breeding), all-female (may still produce fry from stored sperm for several batches), or accept the breeding management responsibility. Most community tanks eventually reach a stable population as adults eat some fry — but not all, so the population grows.</p>

        <h2>Breeding Management</h2>
        <p>Options: all-male groups display color as well as mixed groups without breeding. Separating pregnant females (identifiable by the squared-off belly and gravid spot near the vent) to a separate tank or breeding box allows controlled fry management. Fry can be sold, traded to fish stores, or given away on local fish keeping forums — they are generally easy to rehome. A heavily planted tank with floating plants provides enough cover that fry survival is partial rather than total, naturally limiting population growth.</p>

        <h2>Swordtails — The Close Relative</h2>
        <p>Xiphophorus helleri (swordtail) is the platy's larger relative — males develop the distinctive elongated lower tail fin that gives the species its name. At 4–5 inches, swordtails need larger tanks (30+ gallons for a group) and are more active swimmers. Care is essentially identical to platies. Male swordtails can occasionally be aggressive toward other males of similar appearance — provide enough space and visual breaks. Swordtails and platies hybridize readily in the aquarium — mixed-species tanks produce hybrid offspring with intermediate appearance.</p>
      </div>
    </ArticleLayout>
  )
}
