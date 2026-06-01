import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Uromastyx Care Guide — High Heat, Seed Diet | Lizard.com', description: 'Uromastyx (spiny-tailed lizards) need extreme heat (120°F basking), a dry desert setup, and a primarily seed-based herbivore diet.', path: '/species/uromastyx', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Uromastyx Care Guide', description: 'High basking temps, seed diet, and desert setup for uromastyx spiny-tailed lizards.', url: 'https://lizard.com/species/uromastyx', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function UromastcyxPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Uromastyx Care Guide', subtitle: 'The spiny-tailed lizards of North Africa and the Middle East — uromastyx are deceptively charming, surprisingly personable once established, and completely unlike most commonly kept lizards in their dietary and thermal requirements. Their combination of high intelligence and willingness to interact makes them rewarding to keep.', category: 'Species Guide — Intermediate', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Uromastyx', href: '/species/uromastyx' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Difficulty', 'Intermediate'], ['Common species', 'U. ornata, U. geyri, U. maliensis'], ['Adult size', '10–18" depending on species'], ['Enclosure', '4×2×2 ft (adults)'], ['Basking surface', '120–130°F — extreme heat required'], ['Ambient', '90–100°F warm, 80–85°F cool'], ['Humidity', 'Under 30% — dry desert'], ['Diet', 'Seeds, leafy greens, minimal fruit'], ['Water', 'Rarely needs water bowl — seeds provide moisture'], ['Lifespan', '15–25+ years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Bearded Dragon', href: '/species/bearded-dragon' }, { label: 'Blue-Tongued Skink', href: '/species/blue-tongued-skink' }, { label: 'Temperature Guide', href: '/setup/temperature-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="species-uromastyx" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Temperature Requirement — Higher Than Almost Any Other Lizard</h2>
        <p>Uromastyx come from some of the hottest desert environments on Earth — North African rock deserts where midday surface temperatures regularly exceed 120°F. In captivity, they require a basking surface of 120–130°F (measured directly on the surface with an infrared thermometer, not air temperature). At lower basking temperatures they cannot properly thermoregulate, digest food, or maintain immune function. The ambient warm-side temperature should be 90–100°F — significantly hotter than most other reptile setups.</p>
        <p>Achieving these temperatures requires high-wattage incandescent or halogen bulbs — a single 100W or 150W basking bulb over a basking rock or slate. Test the surface temperature with an infrared gun and adjust wattage until the correct surface temperature is reached. CHE (ceramic heat emitters) provide ambient warmth but not the radiant heat needed at the basking surface.</p>

        <h2>Diet — Seeds and Dry Greens</h2>
        <p>Uromastyx are primarily herbivorous with a strong preference for seeds and dry plant material — reflecting their desert-adapted physiology. The diet that produces the best health outcomes: a mix of dry seeds and legumes (millet, lentils, split peas, dried beans) as the primary staple, combined with dark leafy greens (collard, dandelion, turnip greens, mustard greens) as daily greens component. Avoid high-water-content vegetables — cucumber, zucchini, lettuce — that provide excessive moisture in a system adapted to extreme dryness.</p>
        <p>Many uromastyx keepers do not provide a water bowl — the seeds and greens provide sufficient moisture for their desert-adapted kidneys. Juvenile uromastyx and animals that appear dehydrated should have a shallow water dish available 2-3 times weekly. Adults in established, healthy condition rarely drink from standing water. Never give high-protein foods (insects, meat) — uromastyx are not well-adapted to digest significant animal protein.</p>

        <h2>Burrow Access — Behavioral Requirement</h2>
        <p>Uromastyx are burrowing animals that spend the hottest part of the day underground in the wild. In captivity, they need either deep substrate for burrowing (8+ inches of excavator clay or compressed coconut fiber) or artificial burrows (PVC pipe sections, half-log hides positioned at the cooler end). Without burrow access, uromastyx are chronically stressed. The burrow provides: thermal refuge, hiding during vulnerable periods, and the ability to thermoregulate through depth in the substrate.</p>

        <h2>Temperament — Surprisingly Interactive</h2>
        <p>Well-established uromastyx with regular gentle interaction become remarkably personable — they learn to recognize their keepers, respond to food cues, and some individuals actively seek contact. Their intelligence is notably higher than most lizards their size. They are territorial (males particularly) and should not be cohabitated except under very specific conditions with large enclosures and careful monitoring. Males engage in head-bobbing territorial displays that are entertaining to observe.</p>

        <h2>Common Species</h2>
        <p><strong>U. ornata (Ornate uromastyx):</strong> The most colorful — males display vivid blue, green, and orange patterns. Native to Egypt and the Middle East. 14–16 inches. The most popular and widely available.</p>
        <p><strong>U. geyri (Saharan uromastyx):</strong> Yellow-orange coloration, slightly smaller at 10–13 inches. More docile temperament than ornata — often recommended for beginners to the species.</p>
        <p><strong>U. maliensis (Mali uromastyx):</strong> Dark base with yellow or red patterning. Robust and adaptable. 10–14 inches. One of the hardier species for beginners.</p>
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Uromastyx — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for uromastyx care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/uromastyx%20setup?s=species-uromastyx" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Uromastyx Setup on Amazon →</a>
            <a href="/go/chewy-brand/uromastyx%20setup?s=species-uromastyx" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
