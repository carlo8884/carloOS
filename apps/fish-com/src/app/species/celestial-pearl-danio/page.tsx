import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Celestial Pearl Danio Care — Galaxy Rasbora, Groups | Fish.com', description: 'Celestial pearl danios are 1-inch jewels for nano tanks. Spotted pattern, stunning males, peaceful community fish. Groups of 8+ required. Complete care guide.', path: '/species/celestial-pearl-danio', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Celestial Pearl Danio Care Guide', description: 'Group requirements, breeding, and care for Danio margaritatus.', url: 'https://fish.com/species/celestial-pearl-danio', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function CPDPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Celestial Pearl Danio', subtitle: 'Danio margaritatus — discovered in 2006 in Myanmar and immediately popular in the hobby. At 1 inch, the celestial pearl danio (galaxy rasbora) packs extraordinary visual impact: pearlescent spots on a dark body, red-orange fins edged in black. Males display to each other constantly in groups, intensifying color to compete.', category: 'Species Guide — Nano', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Celestial Pearl Danio', href: '/species/celestial-pearl-danio' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Danio margaritatus'], ['Adult size', '1 inch'], ['Min group', '8 — 10-12 ideal'], ['Temperature', '73–79°F'], ['pH', '6.5–7.5'], ['Min tank', '10 gallons'], ['Breeding', 'Plant spawner — breeds readily']].map(([k, v]) => (
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
        <h2>Sexual Dimorphism and Display</h2>
        <p>CPD males are significantly more colorful than females — the iridescent pearlescent spots are vivid and the fin coloration (red-orange with bold black edges) is dramatic, especially during display. Females are rounder-bodied with less intense fin coloration. Males display to each other and to females in tight, circling, fin-flared behavioral exchanges that are one of the most engaging micro-fish behaviors available. In a group of 8-10 with a 3:2 female-to-male ratio, the display is near-constant and makes the tank feel alive.</p>

        <h2>Water Requirements and Care</h2>
        <p>CPD prefer soft, slightly acidic water (pH 6.5–7.5, GH under 10) — similar to other Southeast Asian fish but not as exacting as crystal shrimp. They adapt well to standard community tank parameters and tolerate moderate hardness. Temperature 73–79°F. Not as sensitive as their nano size might suggest — they are robust once established in appropriate conditions. Dark substrate and dense planting intensify their coloration dramatically compared to bare or light-substrate setups.</p>

        <h2>Breeding — Self-Sustaining in Planted Tanks</h2>
        <p>CPD breed readily among Java moss and fine-leaved plants. Eggs are scattered in vegetation; the parents show mild interest in eating eggs but in dense planting, enough survive to produce periodic batches of fry. Fry are tiny and feed initially on infusoria and micro-organisms naturally present in established planted tanks. A 10-gallon planted CPD colony will produce fry periodically without any deliberate breeding intervention — the population self-sustains at a manageable level.</p>
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Celestial Pearl Danio — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for celestial pearl danio care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/celestial%20pearl%20danio%20tank%20setup?s=species-celestial-pearl-danio" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Celestial Pearl Danio Setup on Amazon →</a>
            <a href="/go/chewy-brand/celestial%20pearl%20danio%20tank%20setup?s=species-celestial-pearl-danio" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
