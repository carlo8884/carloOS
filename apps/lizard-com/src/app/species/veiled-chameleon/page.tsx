import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Veiled Chameleon Care Guide — Drip System, Humidity & Diet | Lizard.com', description: 'Veiled chameleons require a drip system for drinking, screen enclosures for airflow, and daily misting. Advanced care guide covering enclosure, hydration, and gut-loading.', path: '/species/veiled-chameleon', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Veiled Chameleon Care Guide', description: 'Drip system, screen enclosure, and diet for veiled chameleons.', url: 'https://lizard.com/species/veiled-chameleon', imageUrl: '', authorName: 'Lizard.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function VeiledChameleonPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Veiled Chameleon Care Guide', subtitle: 'Chamaeleo calyptratus — among the most visually stunning reptiles available. Also among the most demanding. Veiled chameleons have specific hydration, airflow, and stress management requirements that make them unsuitable for beginners.', category: 'Species Guide', authorName: 'Lizard.com Expert Team', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '11 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Veiled Chameleon', href: '/species/veiled-chameleon' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Chamaeleo calyptratus'], ['Difficulty', 'Advanced'], ['Enclosure', 'Screen (not glass) — 24x24x48"'], ['Temperature', '72–85°F gradient'], ['Humidity', '50–70%, drops between mists'], ['UVB', 'Arcadia 6% (Zone 2-3)'], ['Diet', 'Insects + some leafy greens'], ['Lifespan', '5–8 years (females shorter)']].map(([k,v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '13px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'UVB Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Humidity Guide', href: '/setup/humidity-guide' }, { label: 'Reptile Feeding', href: '/health/reptile-feeding-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="species-veiled-chameleon" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Screen Enclosure — Why Glass Doesn't Work</h2>
        <p>Chameleons require continuous fresh air circulation. In a glass enclosure, stagnant air leads to respiratory infections within weeks. Screen enclosures (all four sides and top are screen) provide the airflow chameleons need. Minimum for an adult male: 24×24×48 inches tall. Females are slightly smaller and can use 18×18×36 but bigger is always better.</p>
        <p>The tall, vertical orientation reflects their arboreal habitat — veiled chameleons spend their lives in trees and feel exposed and stressed without height to retreat to. Fill the enclosure with live plants (pothos, umbrella plants, hibiscus) — these provide cover, perching, and the natural environment that reduces stress.</p>

        <h2>Hydration — The Drip System is Required</h2>
        <p>Chameleons do not drink from standing water bowls. In the wild, they drink water droplets from leaves after rain. In captivity, they need: a drip system (a container with a small hole dripping onto leaves) running for several hours daily, plus twice-daily misting sessions of 2–3 minutes. Automated misting systems (MistKing is the standard) are the most reliable solution.</p>
        <p>Dehydration is the most common cause of death in captive veiled chameleons. Signs: sunken eyes, lethargy, skin wrinkling. Prevention is the only approach — established dehydration in chameleons is difficult to reverse and quickly fatal.</p>

        <h2>Temperatures and UVB</h2>
        <p>Basking spot: 85–90°F surface temperature. Ambient mid-enclosure: 75–80°F. Cool lower portion: 68–72°F. Night: 65–70°F — the temperature drop is important; constant warm temperatures stress chameleons and shorten their lives.</p>
        <p>UVB: Arcadia 6% or Forest 6% T5 HO, running the length of the enclosure. Linear UVB is preferred over compact bulbs for chameleons — it creates a gradient they can position within. Replace annually.</p>

        <h2>Diet and Gut-Loading</h2>
        <p>Primary feeders: dubia roaches, crickets, hornworms (high hydration value — use frequently). Supplemental: superworms (limit — high fat), silkworms, BSFL. Gut-load all feeders with leafy greens, squash, and commercial gut-load for 24–48 hours before feeding. An empty, poorly-nourished feeder insect provides minimal nutrition.</p>
        <p>Veiled chameleons will also eat some vegetation — hibiscus leaves and flowers, dandelion greens, and pothos leaves are accepted and provide additional hydration and nutrients.</p>

        <h2>Stress — The Silent Killer</h2>
        <p>Veiled chameleons are solitary and highly territorial. Signs of stress: dark coloration, gaping mouth, extended dewlap, hissing. Chronic stressors: being housed in visual contact with other chameleons (requires opaque barriers between enclosures), frequent unnecessary handling, high-traffic locations, reflections in glass. Minimize handling — chameleons do not benefit from human interaction the way dogs or even many other reptiles do. Keep in a quiet, low-traffic area.</p>
      </div>
    </ArticleLayout>
  )
}
