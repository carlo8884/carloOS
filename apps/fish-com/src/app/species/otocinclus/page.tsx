import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Otocinclus vestitus — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/otocinclus-vestitus/", publisher: "Seriously Fish" },
  { label: "Otocinclus spp. — FishBase genus page", url: "https://www.fishbase.se/identification/SpeciesList.php?genus=otocinclus", publisher: "FishBase" },
  { label: "Schaefer, S.A. Otocinclus (Loricariidae). Systematic Zoology, 1991.", publisher: "Systematic Zoology" },
  { label: "Reis, R.E. et al. Checklist of the Freshwater Fishes of South and Central America. EDIPUCRS, 2003.", publisher: "EDIPUCRS" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Otocinclus Care Guide — Algae, Starvation Risk | Fish.com', description: 'Otocinclus are the best algae eaters for small planted tanks but starve easily without established algae growth. Groups of 6+, established tanks only.', path: '/species/otocinclus', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Otocinclus Care Guide', description: 'Algae requirements, starvation prevention, and group care for otocinclus catfish.', url: 'https://fish.com/species/otocinclus', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function OtocinclsPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Otocinclus Care Guide', subtitle: 'Otocinclus vittatus — the best algae eater for small and nano planted tanks. At 1.5 inches they work glass and leaves without damaging plants, are completely peaceful, and are safe with shrimp. The challenge: they require an established tank with algae growth and starve easily in newly set up aquariums.', category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Otocinclus', href: '/species/otocinclus' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Bristlenose Pleco", href: "/species/bristlenose-pleco", category: "Species Guide" }, { title: "Corydoras", href: "/species/corydoras", category: "Species Guide" }, { title: "Aquarium Algae Control", href: "/setup/aquarium-algae-control", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Size', '1.5 inches'], ['Group', '6+ — social species'], ['Tank age', 'Established only (3+ months)'], ['Temperature', '72–82°F'], ['pH', '6.0–7.5'], ['Diet', 'Soft algae — must supplement'], ['Lifespan', '3–5 years']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Pleco Care', href: '/species/pleco' }, { label: 'Cherry Shrimp', href: '/species/cherry-shrimp' }, { label: 'Corydoras', href: '/species/corydoras' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-otocinclus" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <StockImage manifestKey="fish-com:species-otocinclus" aspect="16:9" variant="inline" caption="An otocinclus in a home aquarium." priority />
        <h2>The Starvation Problem — The Most Common Cause of Death</h2>
        <p>Otocinclus die from starvation more than any other cause. They are obligate soft algae eaters — their mouth is designed specifically to graze soft green algae (diatoms, green dust algae, green film algae) from smooth surfaces. They cannot eat hair algae, hard algae, or most commercial foods readily. In a new tank with no established algae growth, or in a tank that is kept spotlessly clean, otocinclus have nothing to eat and starve within weeks.</p>
        <p><strong>Requirements before adding otocinclus:</strong> The tank must be at least 2–3 months old with visible algae on the glass and plants. If you cannot see green film or a brownish diatom coating on surfaces, the tank is not ready. Otocinclus are not appropriate for new tanks, heavily cleaned tanks, or tanks without established algae growth.</p>

        <h2>Supplemental Feeding — Essential</h2>
        <p>Even in algae-rich tanks, otocinclus should receive supplemental feeding. Blanched vegetables weighted to the bottom: zucchini slices and cucumber rounds are the most accepted. Drop a slice into the tank after lights out and remove after 24 hours. Many otocinclus accept algae wafers and soft sinking foods — offer these regularly and observe whether they eat. A fat, rounded belly indicates adequate nutrition; a concave, sunken belly is a starvation warning requiring immediate dietary intervention.</p>

        <h2>Groups and Social Requirements</h2>
        <p>Otocinclus are social fish that congregate in groups in the wild. Single or paired otocinclus are stressed — they hide, decline to feed, and die faster than group-kept fish. Minimum 6 for wellbeing; 8–10 in a planted tank is ideal. In a group, they actively feed together on plant leaves and glass, rest in clusters, and show the normal behavior that indicates a healthy animal.</p>

        <h2>Acclimation — Higher Sensitivity Than Most Fish</h2>
        <p>Most wild-caught otocinclus (the majority in the trade come from South America) are stressed from collection and shipping and arrive in suboptimal condition. Drip acclimation (slow drip of tank water into the bag over 45–60 minutes) reduces osmotic shock from transport water chemistry. Quarantine for 2 weeks in a tank with established algae before introducing to the display tank. Avoid purchasing otocinclus that look thin or have sunken bellies — they will be very difficult to save.</p>

        <h2>Compatibility</h2>
        <p>Completely peaceful — compatible with all community fish, nano fish, dwarf shrimp (cherry shrimp, amano shrimp), and snails. They will not bother snail eggs, shrimp fry, or other small invertebrates. One of the few fish appropriate for shrimp tanks where most other species pose a risk. They share tank space with betta fish successfully in most cases — bettas typically ignore them due to their small size and rapid movement along surfaces.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Otocinclus — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for otocinclus care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/otocinclus%20tank%20setup?s=species-otocinclus" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Otocinclus Setup on Amazon →</a>
            <a href="/go/chewy-brand/otocinclus%20tank%20setup?s=species-otocinclus" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
  )
}
