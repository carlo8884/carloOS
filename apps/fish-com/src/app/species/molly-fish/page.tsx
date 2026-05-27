import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Molly Fish Care Guide — Brackish Tolerance | Fish.com', description: 'Mollies are livebearers that tolerate salt — adding 1 tablespoon per 5 gallons reduces disease and stress.', path: '/species/molly-fish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Molly Fish Care Guide', description: 'Brackish tolerance, varieties, and care for Poecilia sphenops and Poecilia latipinna mollies.', url: 'https://fish.com/species/molly-fish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function MollyPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Molly Fish Care Guide', subtitle: 'Poecilia sphenops and Poecilia latipinna — mollies are livebearing fish native to coastal areas of the Americas where freshwater meets the sea, giving them an unusual tolerance for brackish (lightly salted) water that reduces disease and stress. Available in dozens of color varieties and distinctively shaped forms including the sailfin molly with its dramatic extended dorsal fin.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Molly Fish', href: '/species/molly-fish' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Poecilia sphenops', 'Short-fin molly · 3" · Most common variety'], ['Poecilia latipinna', 'Sailfin molly · 4–6" · Needs larger tank'], ['Temperature', '72–82°F'], ['pH', '7.5–8.5 — harder water preferred'], ['Salt', '1 tbsp per 5 gal — reduces disease'], ['Breeding', 'Livebearer — every 4–6 weeks']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Platy Fish', href: '/species/platy-fish' }, { label: 'Guppy Care', href: '/species/guppy' }, { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-molly" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Salt Tolerance — The Unique Advantage</h2>
        <p>Mollies are unique among commonly kept freshwater fish in their genuine tolerance for brackish water — water with salinity between freshwater and seawater. Their natural habitat includes estuaries, coastal lagoons, and even open ocean in some populations. In captivity, adding aquarium salt (not marine salt) at 1 tablespoon per 5 gallons creates a lightly brackish environment that: reduces osmotic stress on the fish (they spend less metabolic energy maintaining internal salt balance), inhibits many freshwater pathogens that cannot tolerate the salt, and reduces the frequency of diseases like ich and velvet. Mollies kept with a small amount of salt are demonstrably healthier and longer-lived than those kept in pure freshwater, on average.</p>
        <p>The tradeoff: the salt level appropriate for mollies (1 tbsp/5 gal ≈ specific gravity 1.002) is tolerated by some plants and most other livebearers (platies, guppies) but is harmful to many tropical fish and all freshwater invertebrates (shrimp, snails). A molly-specific setup or a livebearer community tank works well; a mixed tropical community is more complicated.</p>

        <h2>Varieties</h2>
        <p><strong>Black molly:</strong> Solid jet black — one of the most dramatic solid-color freshwater fish. The black coloration results from a melanin concentration that is dramatically different from other molly varieties. Easy to find, reliably popular, and genuinely striking in planted tanks or against light substrate.</p>
        <p><strong>Sailfin molly (P. latipinna, P. velifera):</strong> The sailfin — an extended, sail-like dorsal fin that the male erects during display and courtship — is the most visually dramatic molly form. Larger (4–6 inches) than standard mollies and need more swimming room (30+ gallons for a group). Males display constantly to females and rival males, making them one of the most behaviorally engaging livebearers.</p>
        <p><strong>Dalmatian molly:</strong> White body with black spots in a random pattern — the aquarium equivalent of a Dalmatian dog. Consistent in coloration across the variety. Popular in community setups for the contrast against green plants.</p>
        <p><strong>Lyretail molly:</strong> The tail fin develops extended filaments forming a lyre shape. Available in multiple base colors. The extended fins require careful tankmate selection — fin-nipping species will destroy the tail extensions.</p>

        <h2>"Molly Disease" — Shimmying</h2>
        <p>Mollies are prone to a condition called "shimmying" — the fish rocks or shimmies in place without making forward progress, as if swimming hard but not moving. This is associated with salt deficiency, chilling (temperature below 72°F), or poor water quality. It is often the first sign that mollies in a community tank are stressed by conditions that other fish tolerate but mollies find difficult. First response: add salt (if not already present), verify temperature, and test water quality. Shimmying mollies in a properly maintained, appropriately salty, warm tank often recover quickly.</p>
      </div>
    </ArticleLayout>
  )
}
