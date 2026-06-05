import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Blue-Tongued Skink Care Guide — Best Beginner Lizard | Lizard.com', description: 'Blue-tongued skinks are the best beginner lizard for adults. Omnivore diet (50% vegetables, 30% protein, 20% fruit), docile once established.', path: '/species/blue-tongued-skink', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Blue-Tongued Skink Care Guide', description: 'Omnivore diet, handling, and setup for blue-tongued skinks — the best beginner lizard for adults.', url: 'https://lizard.com/species/blue-tongued-skink', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BlueTonguedSkinkPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Blue-Tongued Skink Care Guide', subtitle: 'Tiliqua species — the best beginner lizard for adults who want a genuinely interactive reptile. Blue-tongued skinks are intelligent, curious, manageable in size, and become remarkably personable with regular handling. Their vivid blue tongue serves as a bluff defense display — and rarely needs to be used with well-handled captives.', category: 'Species Guide — Beginner Friendly', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Blue-Tongued Skink', href: '/species/blue-tongued-skink' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Fire Skink Care', href: '/species/fire-skink', category: 'Species' },
        { title: 'Bearded Dragon Care', href: '/species/bearded-dragon', category: 'Species' },
        { title: 'Temperature Guide', href: '/setup/temperature-guide', category: 'Setup' },
        { title: 'Herbivore Reptile Diet', href: '/health/herbivore-reptile-diet', category: 'Health' },
        { title: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Common species', 'T. scincoides (Northern/Irian Jaya), T. gigas'], ['Adult size', '18–24 inches'], ['Difficulty', 'Beginner-intermediate'], ['Enclosure', '4×2×2 ft minimum (adults)'], ['Basking surface', '100–110°F'], ['Ambient warm side', '85–90°F'], ['Diet', '50% veg, 30% protein, 20% fruit'], ['Lifespan', '20–30 years'], ['Handling', 'Excellent once established']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Bearded Dragon', href: '/species/bearded-dragon' }, { label: 'Uromastyx Care', href: '/species/uromastyx' }, { label: 'Temperature Guide', href: '/setup/temperature-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-bts" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Why BTS Are the Best Beginner Lizard for Adults</h2>
        <p>The beginner lizard recommendation is typically the leopard gecko (for children and those wanting a small, low-maintenance species) or the blue-tongued skink (for adults wanting a larger, interactive, genuinely personable lizard). Blue-tongued skinks win the "best adult beginner" category because: they are large enough to handle comfortably without feeling fragile, they are not climbers or escape artists in the way of arboreal species, they eat a varied omnivore diet that is easy to provide without maintaining live insect colonies, they tolerate handling very well once established, and they are robust enough to tolerate beginner mistakes that would be fatal to more delicate species like chameleons.</p>
        <p>They are also long-lived — a blue-tongued skink purchased at 2 years old will still be with you at 22 years old. This is a commitment worth acknowledging. Their intelligence and recognition of their keepers makes them genuinely rewarding pets rather than simple display animals.</p>

        <h2>Diet — The 50/30/20 Rule</h2>
        <p>Blue-tongued skinks are true omnivores in the wild, eating plant material, insects, snails, carrion, and whatever is nutritionally available. In captivity, a balanced omnivore diet: approximately 50% dark leafy greens and vegetables, 30% protein sources, 20% fruits.</p>
        <p><strong>Vegetables and greens (50%):</strong> Collard greens, mustard greens, dandelion greens, butternut squash, sweet potato, bell pepper. Avoid spinach (binds calcium), avocado (toxic), and iceberg lettuce (no nutritional value). Dark greens are far more nutritious than pale ones.</p>
        <p><strong>Protein sources (30%):</strong> Whole prey insects (dubia roaches, silkworms, hornworms) or commercial omnivore diets (Repashy Grub Pie, ZooMed PowerSun canned food), scrambled eggs occasionally, lean cooked chicken occasionally, high-quality dog or cat food as a base (controversial but practiced by many experienced keepers). Gut-load all feeder insects. Dust with calcium at every feeding and multivitamin 2× weekly.</p>
        <p><strong>Fruits (20%):</strong> Blueberries, mango, papaya, kiwi. Treat as supplement, not staple. High sugar fruits in excess cause obesity and hepatic lipidosis over time.</p>
        <p>Feed adults every 2–3 days. Juveniles can be fed daily. Remove uneaten food within 24 hours.</p>

        <h2>Enclosure Setup</h2>
        <p>Adults need 4×2×2 feet minimum — PVC enclosures are ideal for maintaining appropriate temperatures. Blue-tongued skinks are terrestrial and burrowers — depth of substrate matters more than height. Coconut fiber, topsoil, or a bioactive mix at 4–6 inches depth allows the natural burrowing behavior that helps them thermoregulate and feel secure.</p>
        <p>Basking surface: 100–110°F. Ambient warm side: 85–90°F. Cool side: 75–80°F. UVB: Arcadia 6% T5 HO at appropriate distance — required for vitamin D3 synthesis, even though BTS can tolerate dietary D3. A substantial hide on the cool side completes the setup.</p>

        <h2>Species Differences</h2>
        <p><strong>Tiliqua scincoides scincoides (Eastern BTS / Australian):</strong> Wild-caught imports are not legally available in the US — US population is captive-bred. Typically the most docile personality and the most recommended for beginners. Northern BTS (T. s. intermedia) are the most commonly captive-bred in the US.</p>
        <p><strong>Tiliqua gigas (Indonesian/Merauke/Irian Jaya):</strong> Various Indonesian locality BTS legally imported. Generally slightly more variable in personality — some animals are more defensive initially than Australian species. All become manageable with consistent handling.</p>
        <p><strong>Pygmy blue-tongued skink (T. adelaidensis):</strong> Critically endangered, rarely captive-bred, entirely different care — not a practical pet option and their conservation status makes collecting inappropriate.</p>
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Blue Tongued Skink — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for blue tongued skink care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/blue%20tongued%20skink%20setup?s=species-blue-tongued-skink" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Blue Tongued Skink Setup on Amazon →</a>
            <a href="/go/chewy-brand/blue%20tongued%20skink%20setup?s=species-blue-tongued-skink" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
