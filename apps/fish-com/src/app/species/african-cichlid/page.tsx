import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'African Cichlid Care Guide — Malawi, Tanganyika & Aggressive Setup | Fish.com', description: 'African cichlids require hard alkaline water, overstocking to dilute aggression, and rockwork. Lake Malawi vs Tanganyika species have different care needs. Complete guide.', path: '/species/african-cichlid', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'African Cichlid Care Guide', description: 'Lake Malawi vs Tanganyika species, hard water requirements, and aggression management for African cichlids.', url: 'https://fish.com/species/african-cichlid', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function AfricanCichlidPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'African Cichlid Care Guide', subtitle: 'African cichlids from Lakes Malawi, Tanganyika, and Victoria represent some of the most colorful freshwater fish in the world — and some of the most behaviorally complex. The same cichlid aggression that makes them challenging to keep also makes their social dynamics endlessly fascinating to observe.', category: 'Species Guide — Intermediate', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'African Cichlid', href: '/species/african-cichlid' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Lake Comparison</div>
          {[['Lake Malawi', 'pH 7.8-8.5 · GH 10-20 · KH 10-18 · Most popular · Mbuna + haps + peacocks'], ['Lake Tanganyika', 'pH 8.5-9.5 · Very hard · Smaller species available · More species-specific care'], ['Lake Victoria', 'pH 7.5-8.5 · Moderate hardness · Many endangered in wild']].map(([lake, params]) => (
            <div key={lake} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{lake}</div>
              <div className="text-2xs text-brand-text-light">{params}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Oscar Fish', href: '/species/oscar' }, { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' }, { label: 'Best Canister Filters', href: '/reviews/best-canister-filters' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="species-african-cichlid" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Water Chemistry — Hard and Alkaline</h2>
        <p>African rift lake cichlids require hard, alkaline water that is the opposite of South American cichlids like discus and rams. Lake Malawi: pH 7.8–8.5, GH 10–20, KH 10–18. Lake Tanganyika: even harder — pH 8.5–9.5, extremely high KH. These parameters reflect the mineral-rich water of the rift lakes, which have no outflow and concentrate dissolved minerals over millions of years. In soft or acidic water, African cichlids are dull-colored, stressed, disease-prone, and short-lived.</p>
        <p>Most US municipal tap water is too soft and neutral for Lake Malawi/Tanganyika cichlids. Options: add crushed coral or aragonite to the filter (raises KH and pH continuously), use African cichlid-specific substrate (CaribSea Eco-Complete African Cichlid substrate releases calcium carbonate), or use African cichlid salt mixes (Seachem Malawi/Victoria Buffer, Tanganyika Buffer) to achieve target parameters. Regular testing and stable parameters matter more than hitting exact targets.</p>

        <h2>Lake Malawi Species Groups</h2>
        <p><strong>Mbuna ("rock fish"):</strong> The most commonly kept African cichlids — vivid, aggressive, relatively small (3–6 inches), rock-dwelling, primarily algae-grazing herbivores. Popular genera: Pseudotropheus, Melanochromis, Labidochromis (Yellow Lab — one of the most peaceable mbuna), Cynotilapia. Kept in single-species or carefully selected multi-species groups in rock-filled tanks. The aggression is intense — mbuna need enough fish (12+ in a 55+ gallon) that no single fish bears the brunt of male territorial aggression.</p>
        <p><strong>Haplochromines ("haps"):</strong> Larger (6–12 inches), open-water hunters. Less aggressive than mbuna but require larger tanks. Popular: Sciaenochromis (electric blue ahli), Copadichromis, Aulonocara (peacocks). Peacock cichlids are more peaceful than mbuna and excellent for community African cichlid setups — stunning coloration without the extreme aggression of mbuna.</p>

        <h2>Aggression Management — The Counterintuitive Solution</h2>
        <p>Overstocking is the correct approach for mbuna tanks — not the opposite. The logic: a dominant male in an understocked tank focuses aggression on one or two subordinate fish, which are harassed to death. In a heavily stocked tank with many fish, the dominant male cannot focus on any single target — aggression is diffused across many fish. A 55-gallon mbuna tank with 20-25 fish is less problematic than the same tank with 10 fish.</p>
        <p>Dense rockwork is equally important — it creates territories and visual breaks so subordinate fish can find refuge. A tank that is 60-70% rocks with many caves, crevices, and hiding spots supports a stable cichlid community better than an open tank with a few decorations. Build rock structures from floor to near the surface to create multiple territory zones.</p>

        <h2>Feeding — Match the Species</h2>
        <p>Mbuna are primarily herbivores — their natural diet is algae scraped from rocks (aufwuchs). Feeding high-protein foods (bloodworms, beef heart) causes Malawi bloat — a fatal metabolic condition involving intestinal bacteria. Feed mbuna a high-quality spirulina or vegetable-based cichlid pellet as the primary diet. Peacocks and haps are carnivores that accept and thrive on higher protein — pellets plus frozen mysis and krill. Know which species you have and feed accordingly.</p>
      </div>
    </ArticleLayout>
  )
}
