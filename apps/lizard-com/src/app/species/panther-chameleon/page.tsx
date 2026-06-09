import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Panther Chameleon Care Guide — Locale Colors | Lizard.com', description: 'Panther chameleons display stunning locale-specific colors. Arboreal, solitary, and stress-sensitive. Drip system required, no handling except necessity.', path: '/species/panther-chameleon', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Panther Chameleon Care Guide', description: 'Locale color varieties, drip watering, and stress management for Furcifer pardalis panther chameleons.', url: 'https://lizard.com/species/panther-chameleon', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function PantherChameleonPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Panther Chameleon Care Guide', subtitle: 'Furcifer pardalis — one of the most visually spectacular reptiles in the hobby. Males from different locales in Madagascar display dramatically different colors — Ambilobe males are red and green or blue and red; Nosy Be males are brilliant turquoise blue; Ambanja males show vivid blue-green with red bars. These are not pets in the traditional sense — they are living displays that require expert-level husbandry.', category: 'Species Guide — Advanced', authorName: 'Lizard.com Editorial', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Panther Chameleon', href: '/species/panther-chameleon' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'UVB Distance Calculator', href: '/tools/uvb-distance-calculator', category: 'Tools' },
        { title: 'Enclosure Size Calculator', href: '/tools/enclosure-size-calculator', category: 'Tools' },
        { title: 'Best UVB Bulbs', href: '/reviews/best-uvb-bulbs', category: 'Reviews' },
        { title: 'Best Reptile Terrariums', href: '/reviews/best-reptile-terrariums', category: 'Reviews' },
        { title: 'Veiled Chameleon Care', href: '/species/veiled-chameleon', category: 'Species' },
        { title: 'Chinese Water Dragon Care', href: '/species/chinese-water-dragon', category: 'Species' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide', category: 'Setup' },
        { title: 'Dehydration in Reptiles', href: '/health/dehydration-reptiles', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Furcifer pardalis'], ['Difficulty', 'Advanced — chameleon experience needed'], ['Male adult size', '17–20 inches'], ['Enclosure', 'Screen cage 24×24×48" min (males)'], ['Basking temp', '90–95°F surface'], ['Ambient', '75–85°F warm, 65–72°F cool side'], ['UVB', 'Arcadia 6% or 12% depending on distance'], ['Watering', 'Drip system — essential'], ['Social', 'Solitary — no cohabitation'], ['Lifespan', 'Males 5–7 yrs · Females 3–5 yrs']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Veiled Chameleon', href: '/species/veiled-chameleon' }, { label: 'Frilled Dragon', href: '/species/frilled-dragon' }, { label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="species-panther-chameleon" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>Locale Color Varieties</h2>
        <p>Panther chameleons from different locales in Madagascar display distinct, genetically fixed color patterns. The locale is the region of origin — breeding within locales maintains color integrity. Mixing locales produces uncertain offspring coloration and is discouraged among serious breeders. When buying a panther chameleon, ask for the locale of both parents.</p>
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          {[
            { locale: 'Ambilobe', colors: 'Red/green or blue/red — most variable and popular locale' },
            { locale: 'Nosy Be', colors: 'Brilliant turquoise blue — one of the bluest reptiles in existence' },
            { locale: 'Ambanja', colors: 'Blue-green base with vivid red or orange bars' },
            { locale: 'Tamatave', colors: 'Red and green — classic panther look' },
            { locale: 'Sambava', colors: 'Red, orange, yellow — warm color emphasis' },
            { locale: 'Nosy Mitsio', colors: 'Blue with yellow lateral spots — rare locale' },
          ].map(l => (
            <div key={l.locale} className="bg-brand-surface border border-brand-border rounded-lg p-3">
              <div className="font-bold text-brand-dark text-xs mb-1">{l.locale}</div>
              <div className="text-2xs text-brand-text-light">{l.colors}</div>
            </div>
          ))}
        </div>

        <h2>Stress — The Most Important Concept</h2>
        <p>Chameleons die from stress. This is not hyperbole — chronic stress suppresses immune function, causes anorexia, and leads to death in chameleons faster than in most reptiles. Sources of stress in captivity: seeing their own reflection in glass (use screen cages, not glass), seeing other chameleons (solitary by nature — never cohabitate), being handled frequently, inappropriate temperatures, dehydration, and insufficient visual cover in the enclosure.</p>
        <p>A panther chameleon that is green-brown and staying low in the enclosure is stressed. A panther chameleon displaying its locale colors and actively basking and hunting is not stressed. Color is the health indicator. Learn to read your animal's color vocabulary — vibrant, locale-appropriate colors indicate wellbeing; dark, muted, or abnormal colors indicate stress or illness.</p>

        <h2>Enclosure — Screen Mandatory</h2>
        <p>Screen enclosures (not glass) are required for chameleons. Chameleons need maximum airflow — stagnant, humid air causes respiratory infections. Glass enclosures, even with screen tops, create the stagnant air conditions that kill chameleons. The standard: Reptibreeze or equivalent screen cage, 24×24×48 inches for adult males (the largest commonly available size), taller if possible. Pack the enclosure with live plants (pothos, Ficus, hibiscus — all safe for chameleons) for visual cover, perching structure, and humidity buffering.</p>

        <h2>Drip System — Not Optional</h2>
        <p>Chameleons drink by lapping water droplets from leaves — they do not recognize standing water in a bowl. They require a drip system or manual misting 2–3 times daily to deposit water droplets on leaves and enclosure walls. A commercial dripper (Zoo Med Big Dripper, Exo Terra Water Drip) or homemade bucket-and-airline-tube setup delivers a slow drip onto leaves. An automated misting system (Mist King, Cli-Mist) provides the most consistent hydration. A dehydrated chameleon has sunken eyes and pulled-in casque flanges — these are emergency signs requiring immediate veterinary evaluation.</p>

        <h2>Lifespan — Female vs Male</h2>
        <p>Female panther chameleons have a significantly shorter lifespan than males — 3–5 years vs 5–7 years for males. This is directly related to egg production. Even unmated females produce infertile clutches — the metabolic cost of egg production shortens their lives. Some keepers use hormonal interventions to suppress egg production, but this is controversial and should only be done under veterinary guidance. Males, which do not bear the metabolic cost of egg production, live longer and are generally considered the better choice for first-time chameleon keepers.</p>
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Panther Chameleon — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for panther chameleon care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/panther%20chameleon%20setup?s=species-panther-chameleon" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Panther Chameleon Setup on Amazon →</a>
            <a href="/go/chewy-brand/panther%20chameleon%20setup?s=species-panther-chameleon" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
