import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Pleco Care Guide — Bristlenose vs Common Pleco | Fish.com', description: 'Plecos: the common pleco grows to 24 inches and does not belong in most tanks. Bristlenose plecos stay at 5 inches and are ideal community fish.', path: '/species/pleco', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Pleco Care Guide', description: 'Bristlenose vs common pleco, driftwood requirements, and diet for plecos.', url: 'https://fish.com/species/pleco', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function PlecoPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Pleco Care Guide', subtitle: '"Pleco" encompasses hundreds of Loricariidae species ranging from 2-inch nano plecos to 24-inch commons. The fish stores sell mostly common plecos (Hypostomus plecostomus) as algae eaters for community tanks — but they grow to 24 inches and produce enormous waste. The bristlenose pleco (Ancistrus sp.) is what most community tanks actually need.', category: 'Species Guide', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Pleco', href: '/species/pleco' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Popular Species</div>
          {[
            ['Bristlenose (Ancistrus)', '4-5" · Community safe · Best choice'],
            ['Common Pleco (H. plecostomus)', '18-24" · Outgrows tanks · Not recommended'],
            ['Rubber Lip Pleco', '5-7" · Peaceful · Good algae eater'],
            ['Clown Pleco (L104)', '3.5" · Driftwood specialist · Nano safe'],
            ['Royal Pleco (L190)', '17" · Spectacular · Expert only'],
            ['Zebra Pleco (L046)', '3.5" · Carnivore · Very expensive'],
          ].map(([n, d]) => (
            <div key={n} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{n}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Corydoras Care', href: '/species/corydoras' }, { label: 'Kuhli Loach', href: '/species/kuhli-loach' }, { label: 'Otocinclus Care', href: '/species/otocinclus' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-pleco" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Common Pleco vs Bristlenose — The Critical Distinction</h2>
        <p><strong>Common pleco (Hypostomus plecostomus):</strong> Sold as juvenile algae eaters at 2–3 inches in virtually every fish store. Adults reach 18–24 inches. A 24-inch fish requires a tank of 125+ gallons minimum and produces waste equivalent to a heavily stocked community tank. They also stop eating algae as adults and transition primarily to a bottom-scavenging carnivore diet. The vast majority of common plecos purchased for community tanks are eventually surrendered to stores or left in tanks that cannot support them. <strong>Do not buy a common pleco for a standard community tank.</strong></p>
        <p><strong>Bristlenose pleco (Ancistrus sp.):</strong> Adults at 4–5 inches, heavy algae eaters throughout their lives, peaceful with all community fish, and appropriate for tanks as small as 20 gallons. Males develop distinctive "bristles" on the snout at maturity — the identifying feature. The correct default pleco recommendation for every community tank. They breed readily in captivity — a pair in a well-planted tank with driftwood will produce regular clutches.</p>

        <h2>Driftwood — A Dietary Requirement for Many Species</h2>
        <p>Many pleco species — particularly wood-specialist species like clown plecos and some Panaque species — require driftwood as part of their diet. They rasp cellulose from the driftwood surface using specialized teeth. Without driftwood, these species may develop digestive issues. Bristlenose plecos benefit from driftwood (they rasp it and use it as a surface to graze) but are not as strictly dependent as wood-specialist species.</p>
        <p>Driftwood also serves as a territory anchor — plecos are territorial bottom dwellers that feel more secure with defined hiding spaces. Hollow driftwood, caves, and PVC pipe provide shelter and breeding sites. A 5-inch bristlenose in an open, bare-bottomed tank is a stressed bristlenose; the same fish with a hollow driftwood piece becomes territorial and confident.</p>

        <h2>Diet — Not Just Algae</h2>
        <p>The "algae eater" label is misleading. Plecos are omnivores that consume algae, plant matter, biofilm, and protein. Relying on algae alone to feed a pleco results in a starving fish that eventually dies or begins eating live plants out of hunger.</p>
        <p><strong>Sinking foods required:</strong> Algae wafers (Hikari Algae Wafers, Omega One Veggie Rounds) — sink to the bottom and are available when the pleco is most active (at night). Blanched vegetables: zucchini, cucumber, spinach, and sweet potato weighted to the bottom with a fork or veggie clip. These should be removed after 24 hours to prevent water quality issues. Protein supplement 1–2 times weekly: frozen bloodworms, sinking protein pellets, shrimp pellets.</p>
        <p>Feed after lights out — plecos are nocturnal. Dropping food in just before the tank lights go off ensures they find it before other fish consume it.</p>

        <h2>Tank Conditions and Compatibility</h2>
        <p>Most pleco species prefer slightly acidic to neutral water (pH 6.5–7.5), moderate hardness, and temperatures of 73–82°F. They are adaptable to a wide range of community tank parameters. Bristlenose plecos are particularly hardy and tolerate a range of conditions.</p>
        <p>Compatibility: plecos are generally peaceful but territorial with their own kind — most species should be kept one per tank unless the tank is very large with multiple territory-defining structures. They are compatible with virtually all fish that cannot eat them (most community fish). They will not harm shrimp in most cases, though hungry plecos may chase shrimp — provide adequate food to prevent this.</p>

        <h2>L-Numbers — Understanding the System</h2>
        <p>Unidentified or newly discovered pleco species are assigned L-numbers (from Loricariidae) by aquarist publications pending formal scientific description. L046 (zebra pleco), L190 (royal pleco), L134 (leopard frog pleco), L066 (king tiger pleco) are popular examples. Some L-number plecos are scientifically described but retain their L-number in the hobby. L-number plecos vary enormously in size, diet, and temperament — research the specific L-number before purchasing.</p>
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Pleco — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for pleco care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/pleco%20tank%20setup?s=species-pleco" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Pleco Setup on Amazon →</a>
            <a href="/go/chewy-brand/pleco%20tank%20setup?s=species-pleco" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
