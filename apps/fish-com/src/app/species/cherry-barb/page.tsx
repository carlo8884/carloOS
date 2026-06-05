import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Cherry Barb Care Guide — Peaceful Barb, School Size | Fish.com', description: 'Cherry barbs are the only barb safe for peaceful community tanks. Males are vivid red when conditioned. School of 8+ required, planted tanks preferred.', path: '/species/cherry-barb', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Cherry Barb Care Guide', description: 'School size, conditioning color, and planted tank setup for Puntius titteya cherry barbs.', url: 'https://fish.com/species/cherry-barb', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function CherryBarbPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Cherry Barb Care Guide', subtitle: 'Puntius titteya — the one barb that belongs in a peaceful community tank. Unlike tiger barbs or rosy barbs, cherry barbs are gentle, non-fin-nipping, and compatible with small peaceful species. Males in breeding condition are a striking deep red. Often underestimated in the fish store, extraordinary in the right setup.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Cherry Barb', href: '/species/cherry-barb' }]}
      schema={schema}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Harlequin Rasbora", href: "/species/harlequin-rasbora", category: "Species Guide" }, { title: "Ember Tetra", href: "/species/ember-tetra", category: "Species Guide" }, { title: "Planted Tank Setup", href: "/setup/planted-tank-setup", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Puntius titteya'], ['Adult size', '2 inches'], ['Min school', '8 — 10-12 for best display'], ['Temperature', '73–81°F'], ['pH', '6.0–7.5'], ['Min tank', '20 gallons for a school'], ['Lifespan', '4–7 years'], ['Aggression', 'None — peaceful with all']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Neon Tetra', href: '/species/neon-tetra' }, { label: 'Corydoras Care', href: '/species/corydoras' }, { label: 'Betta Tank Mates', href: '/species/betta-fish-tank-mates' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-cherry-barb" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Why Cherry Barbs Are Different From Other Barbs</h2>
        <p>The barb family has an undeserved reputation for aggression — deserved by tiger barbs (notorious fin-nippers), rosy barbs (semi-aggressive), and odessa barbs (males fight). Cherry barbs are the exception. They are peaceful with every species small enough to not eat them. They will not nip fins, harass smaller fish, or bother invertebrates. This makes them one of the few barbs appropriate for tanks with guppies, bettas, neon tetras, and shrimp.</p>
        <p>Cherry barbs are listed as vulnerable on the IUCN Red List — their native Sri Lankan stream habitats are under pressure from deforestation and agricultural runoff. All cherry barbs in the trade are commercially bred, but that wild population status is worth knowing.</p>

        <h2>The Color Difference — Males vs Females</h2>
        <p>Female cherry barbs are brown with a horizontal dark stripe — attractive but not spectacular. Males are where the color is: under good conditions (well-fed, clean water, compatible tank, adequate hiding), males develop an intense red coloration that becomes deeper during breeding displays. A male in peak condition is one of the most vivid small fish in the freshwater hobby. The key is conditioning: high-quality varied diet (flake + frozen brine shrimp + daphnia), clean water, and some female presence to trigger male coloration.</p>
        <p>Sex ratio: a 2:1 female-to-male ratio reduces stress on females (males pursue females during breeding). A species-only tank with more females produces the best male coloration and behavior. In a community tank, a balanced ratio (4 males + 6 females, for example) works well.</p>

        <h2>School Size and Tank Setup</h2>
        <p>Minimum 8 cherry barbs for a natural display — 10–12 produces the group dynamics (males displaying to each other and to females, coordinated movement) that makes them worth keeping. In fewer numbers they are drab and reclusive. In proper schools they are active, confident, and colorful.</p>
        <p>Cherry barbs are a mid-water swimmer that appreciates planted tanks with some open swimming space. Dense planting (Java fern, Vallisneria, stem plants, floating plants that diffuse light) replicates the dappled light of their native stream habitats and produces better color. Darker substrate and background makes their red stand out. They can be kept in standard community tanks but show their best in a planted setup.</p>

        <h2>Feeding</h2>
        <p>Omnivores and easy feeders — high-quality small flake food (New Life Spectrum Small Fish Formula, Hikari Micro Pellets) as the staple. Frozen daphnia and frozen baby brine shrimp 3–4 times weekly intensifies male red coloration significantly. They will also eat small live foods and graze on algae. Feed small amounts 2–3 times daily. Competitive but not aggressive at feeding — slower fish can access food alongside cherry barbs without being pushed out.</p>

        <h2>Breeding</h2>
        <p>Cherry barbs breed readily in the aquarium. Males display (flaring, circling) to females and chase them through plants. Eggs are scattered among fine-leaved plants — Java moss is ideal as a spawning medium. Parents do not exhibit significant parental care and will eat eggs and fry if not removed. Fry are tiny — fed infusoria initially, then baby brine shrimp. A small breeding setup with Java moss, a sponge filter, and a pair or trio produces regular fry with minimal management.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Cherry Barb — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for cherry barb care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/cherry%20barb%20tank%20setup?s=species-cherry-barb" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Cherry Barb Setup on Amazon →</a>
            <a href="/go/chewy-brand/cherry%20barb%20tank%20setup?s=species-cherry-barb" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
