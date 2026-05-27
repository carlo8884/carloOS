import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Rainbowfish Care Guide — Australian Species | Fish.com', description: 'Rainbowfish are underrated community gems. Boesemani, Turquoise, and Dwarf Neon rainbows need groups of 6+, quality food to develop color.', path: '/species/rainbow-fish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Rainbowfish Care Guide', description: 'School size, water requirements, and color development for Melanotaeniidae rainbowfish.', url: 'https://fish.com/species/rainbow-fish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function RainbowFishPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Rainbowfish Care Guide', subtitle: 'The Melanotaeniidae family — native to Australia, New Guinea, and nearby islands — produces some of the most spectacularly colored fish in the freshwater hobby when kept correctly. The problem: rainbowfish in fish store tanks rarely show their full color potential. A mature male Boesemani rainbowfish in a well-maintained planted tank with good food is a dramatically different animal from the pale juvenile in a stock tank.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Rainbowfish', href: '/species/rainbow-fish' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Popular Species</div>
          {[['Boesemani (M. boesemani)', '4" · Blue/orange split · Hardy'], ['Turquoise (M. lacustris)', '4" · Blue-green · Active'], ['Praecox/Dwarf Neon', '2" · Neon blue · Nano safe'], ['Threadfin (I. werneri)', '1.5" · Delicate · Nano species'], ['Banded (M. trifasciata)', '4.5" · Rainbow shimmer']].map(([n, d]) => (
            <div key={n} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{n}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Harlequin Rasbora', href: '/species/harlequin-rasbora' }, { label: 'Neon Tetra', href: '/species/neon-tetra' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-rainbowfish" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Color Development — Why Your Rainbowfish Looks Different</h2>
        <p>Rainbowfish are notoriously dull-looking in fish stores and reach their full color potential only under specific conditions: maturity (full color at 9–18 months — juveniles are pale), clean water (nitrate under 20 ppm — consistent water changes), varied high-quality diet (spirulina-based flakes plus frozen daphnia and brine shrimp develop the carotenoid pigments responsible for red and orange coloration), and social stimulation (males display to each other and to females — a mixed-sex group in the correct ratio produces the best coloration). A Boesemani rainbowfish in a bare tank with poor water and flake food is unimpressive. The same fish in a planted tank with clean water, good food, and other rainbowfish is stunning.</p>

        <h2>Groups and Social Requirements</h2>
        <p>Rainbowfish school by species and are more comfortable and display better in groups of 6+. Mixed-species rainbowfish groups (3 Boesemani + 3 Turquoise + 4 Praecox) work well — different species do not school as tightly together but coexist peacefully and all benefit from the security of conspecifics. Males display more intensely when competing for female attention — a 2:1 or 3:1 female:male ratio spreads the display behavior without excessive male harassment of individual females.</p>

        <h2>Water Requirements</h2>
        <p>Most rainbowfish species come from hard, slightly alkaline water in Australian lakes and New Guinea river systems — the opposite of the soft acidic water that South American species prefer. pH 7.0–8.0 and GH 8–15 suits most species. This makes rainbowfish ideal for areas with hard tap water where softer-water species struggle. They are adaptable to a wider range than their native conditions, but the alkaline hard water preference is consistent. Do not try to keep Boesemani in the same low-pH soft water tank as discus — the requirements are incompatible.</p>

        <h2>Compatibility</h2>
        <p>Rainbowfish are peaceful, active mid-water swimmers compatible with most community fish that share similar water preferences — corydoras catfish, bristlenose plecos, livebearers, Australian rainbowfish companions like blue-eyes (Pseudomugil species). They are fast enough to coexist with moderately aggressive species. Avoid keeping with very small, delicate fish (they may eat fish small enough to fit in their mouth) or with soft-water species requiring dramatically different parameters. They are excellent companions for hard-water tetras like Buenos Aires tetras.</p>
      </div>
    </ArticleLayout>
  )
}
