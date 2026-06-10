import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Caridina multidentata — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/caridina-multidentata/", publisher: "Seriously Fish" },
  { label: "Caridina multidentata — FishBase species record", url: "https://www.fishbase.se/summary/Caridina-multidentata.html", publisher: "FishBase" },
  { label: "Takahashi, K. Larvae of Caridina multidentata (Stimpson, 1860) reared in the laboratory. Crustaceana, 1977.", publisher: "Crustaceana" },
  { label: "Algae and Macrophytes in Freshwater Aquaria — UF/IFAS Extension", url: "https://edis.ifas.ufl.edu/publication/FA161", publisher: "UF/IFAS Extension" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Amano Shrimp Care Guide — Best Algae Eater | Fish.com', description: 'Amano shrimp are the most effective algae-eating freshwater invertebrate. They cannot breed in freshwater. How many per tank and what algae they actually eat.', path: '/species/amano-shrimp', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Amano Shrimp Care Guide', description: 'Algae control effectiveness, freshwater breeding impossibility, and group sizing for Caridina multidentata.', url: 'https://fish.com/species/amano-shrimp', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function AmanoShrimpPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Amano Shrimp Care Guide', subtitle: 'Caridina multidentata — named for Takashi Amano who popularized their use in aquascaping — are the most effective algae-eating invertebrates available for freshwater aquariums. At 2 inches, they tackle algae that smaller cherry shrimp and otocinclus ignore, and they do it visibly and actively in the foreground of the tank.', category: 'Species Guide — Invertebrate', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Amano Shrimp', href: '/species/amano-shrimp' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Cherry Shrimp", href: "/species/cherry-shrimp", category: "Species Guide" }, { title: "Mystery Snail", href: "/species/mystery-snail", category: "Species Guide" }, { title: "Low-Tech Planted Tank", href: "/setup/low-tech-planted-tank", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Caridina multidentata'], ['Adult size', '1.5–2 inches (females larger)'], ['Temperature', '65–78°F'], ['pH', '6.0–7.5'], ['Breeds in freshwater', 'No — larvae require brackish/saltwater'], ['Group sizing', '1 per 5 gallons for algae control'], ['Lifespan', '2–3 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }, { label: 'Otocinclus Care', href: '/species/otocinclus' }, { label: 'Mystery Snail', href: '/species/mystery-snail' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-amano" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-amano-shrimp" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="An Amano shrimp in a home aquarium." priority />
        <h2>Why Amano Shrimp Are the Best Algae Eaters</h2>
        <p>In the planted aquarium and aquascaping community, Amano shrimp have a near-universal recommendation for algae control — specifically for the algae types that other commonly kept algae eaters ignore. They are particularly effective at: thread algae / string algae (long, hair-like green algae that wraps around plants), staghorn algae (short gray filaments on plant edges — often iron deficiency indicator), BBA (black brush/beard algae — notoriously difficult to eliminate), and general biofilm and surface algae. Otocinclus are better for diatoms and spot algae on glass; Amanos win for hair and beard algae.</p>
        <p>The key to Amano shrimp effectiveness: groups, not individuals. A single Amano shrimp in a 30-gallon planted tank makes no visible impact. Eight Amano shrimp in the same tank provide meaningful algae control. The standard recommendation for planted tanks with moderate algae: one Amano shrimp per 5 gallons as a starting point, adjusted based on algae load. In a tank with significant hair algae problems, temporarily doubling the population often provides rapid visible improvement.</p>

        <h2>No Breeding in Freshwater — The Biology</h2>
        <p>Amano shrimp eggs hatch as larvae (zoea) rather than as fully formed juvenile shrimp. These larvae are marine — they require saltwater (specific gravity 1.020-1.024) to survive the larval stages before metamorphosing into juvenile shrimp, which then return to freshwater. In a standard freshwater aquarium, amano larvae hatch and die immediately — they cannot survive in fresh water. This is why Amano shrimp populations decline over time without replacement: attrition is not offset by reproduction. Successful Amano breeding requires a dedicated larval rearing setup with marine saltwater, a specific feeding protocol for the larvae (phytoplankton), and gradual acclimation of juveniles back to freshwater — an advanced project that most hobbyists do not attempt.</p>

        <h2>Compatibility and Predation Risk</h2>
        <p>At 2 inches, Amano shrimp are significantly larger than cherry shrimp and less vulnerable to predation. They can coexist with bettas in some cases (individual betta temperament varies — a peaceful betta may ignore Amanos; an aggressive one will hunt them). Generally compatible with: corydoras, otocinclus, small tetras, small rasboras, and other peaceful community fish. Avoid keeping with: angels (eat adult Amanos readily), large cichlids, puffers, large gouramis, loaches that prey on invertebrates (clown loaches eat shrimp and snails). When in doubt about a fish's predatory interest, observe carefully during the first 24 hours after introduction.</p>

        <h2>Feeding and Behavior</h2>
        <p>Amanos are primarily algae and biofilm grazers but will accept supplemental food — algae wafers, blanched vegetables, and leftover food that sinks to the substrate. They are active during the day (unlike some shrimp that hide) and visibly forage across plants, substrate, and hardscape. A well-fed group of Amanos actively working through a planted tank is genuinely pleasing to observe — they are large enough to follow individually and their methodical grazing behavior is distinctive. Occasional "escape events" from open-topped tanks are possible — they can climb filter intake tubes and tank edges; cover all access points.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Amano Shrimp — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for amano shrimp care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/amano%20shrimp%20tank%20setup?s=species-amano-shrimp" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Amano Shrimp Setup on Amazon →</a>
            <a href="/go/chewy-brand/amano%20shrimp%20tank%20setup?s=species-amano-shrimp" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
