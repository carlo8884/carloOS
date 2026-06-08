import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Hyphessobrycon amandae — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/hyphessobrycon-amandae/", publisher: "Seriously Fish" },
  { label: "Hyphessobrycon amandae — FishBase species record", url: "https://www.fishbase.se/summary/Hyphessobrycon-amandae.html", publisher: "FishBase" },
  { label: "Weitzman, S.H. & Malabarba, L.R. Phylogeny of the Subtribe Tetragonopterinae. Ichthyological Exploration of Freshwaters, 1999.", publisher: "Ichthyological Exploration of Freshwaters" },
  { label: "Roberts, T.R. Nomenclature and Distribution of the Bleeding Heart Tetras. Proceedings of the California Academy of Sciences, 1973.", publisher: "California Academy of Sciences" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Ember Tetra Care Guide — Nano Glowing Orange Fish | Fish.com', description: 'Ember tetras are glowing orange 0.8-inch nano fish. Large schools in planted tanks create a stunning display. Hardy, peaceful, and compatible with shrimp.', path: '/species/ember-tetra', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Ember Tetra Care Guide', description: 'School size, planted tank setup, and shrimp compatibility for Hyphessobrycon amandae ember tetras.', url: 'https://fish.com/species/ember-tetra', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function EmberTetraPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Ember Tetra Care Guide', subtitle: 'Hyphessobrycon amandae — the fire ember tetra is a 0.8-inch Brazilian nano fish that glows amber-orange when healthy and well-lit. In groups of 20+ against a dark substrate and green plants, a school of ember tetras creates one of the most visually striking effects available in nano aquarium keeping.', category: 'Species Guide — Nano', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Ember Tetra', href: '/species/ember-tetra' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Cardinal Tetra", href: "/species/cardinal-tetra", category: "Species Guide" }, { title: "Neon Tetra", href: "/species/neon-tetra", category: "Species Guide" }, { title: "Celestial Pearl Danio", href: "/species/celestial-pearl-danio", category: "Species Guide" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Hyphessobrycon amandae'], ['Adult size', '0.8 inches — very nano'], ['Min school', '10 — 20+ for best display'], ['Temperature', '73–82°F'], ['pH', '5.5–7.0 preferred'], ['Shrimp safe', 'Yes — ignores adult shrimp'], ['Min tank', '5 gallons (10+ recommended)']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Celestial Pearl Danio', href: '/species/celestial-pearl-danio' }, { label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-ember-tetra" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-ember-tetra" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="An ember tetra in a home aquarium." priority />
        <h2>Why Ember Tetras Excel in Planted Nano Tanks</h2>
        <p>The ember tetra's orange-amber color is enhanced dramatically by: dark substrate (black or dark brown sand creates maximum contrast), green plant background (red-orange against green is one of the highest-contrast color combinations in nature), moderate lighting that illuminates the fish without washing out the coloration, and a group large enough to create the "school of fire" effect — 20+ fish moving together through a planted scape is a compelling sight in even a small tank.</p>
        <p>They are particularly valued in aquascaping ("Nature aquariums" in the Takashi Amano tradition) because their small size allows large apparent schools in modest tank volumes — a 20-gallon tank with 30 ember tetras and dense planting achieves a visual impact that suggests a much larger setup.</p>

        <h2>Shrimp Compatibility — Genuinely Safe</h2>
        <p>Ember tetras are one of the few fish reliably safe with cherry shrimp colonies, including shrimplets. At 0.8 inches, adult ember tetras cannot eat adult cherry shrimp, and their predatory drive toward tiny prey items appears limited — most aquarists report ember tetras ignoring shrimp completely. They are a popular choice for shrimp-focused planted tanks that want some fish movement without the shrimp predation risk of most species. Verify with your own fish individually, but the reputation for shrimp safety is well-established in the community.</p>

        <h2>Water and Care</h2>
        <p>Ember tetras prefer soft, slightly acidic water (pH 5.5–7.0) and tolerate a temperature range of 73–82°F — compatible with most planted tank setups. They are hardy once established and tolerate standard community parameters reasonably well, though the soft acidic end of their range produces better color and breeding behavior. They are active, confident fish in groups — more reclusive and less colorful when kept in small numbers.</p>
        <p>Feeding: very small food — they are 0.8 inches with a proportionally tiny mouth. Micro pellets (crushed fine), micro-size live foods (micro worms, baby brine shrimp), and very small flake. They compete well at feeding time within their small size class but will be outcompeted by larger, faster fish — keep with similarly sized species or provide targeted feeding near the bottom where ember tetras forage.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Ember Tetra — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for ember tetra care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/ember%20tetra%20tank%20setup?s=species-ember-tetra" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Ember Tetra Setup on Amazon →</a>
            <a href="/go/chewy-brand/ember%20tetra%20tank%20setup?s=species-ember-tetra" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
