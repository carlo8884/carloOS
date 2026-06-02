import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Frilled Dragon Care Guide — Frill Display, Climbing | Lizard.com', description: 'Frilled dragons are arboreal Australian lizards with dramatic frill displays. Tall enclosures, hot basking spots, and insect diets.', path: '/species/frilled-dragon', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Frilled Dragon Care Guide', description: 'Frill behavior, enclosure height, UVB, and diet for Chlamydosaurus kingii frilled dragons.', url: 'https://lizard.com/species/frilled-dragon', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function FrilledDragonPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Frilled Dragon Care Guide', subtitle: 'Chlamydosaurus kingii — the frilled-neck lizard of Australia and southern New Guinea. The frill that makes this species iconic is not just a display prop: it is an active communication organ used in thermoregulation, territorial displays, courtship, and the dramatic threat posture that made these lizards famous. In captivity, a healthy frilled dragon that displays freely is a sign of wellbeing.', category: 'Species Guide — Intermediate', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Frilled Dragon', href: '/species/frilled-dragon' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Adult size', '24–36 inches (tail is 2/3 of length)'], ['Enclosure', '4×2×4 ft — height critical'], ['Basking surface', '105–115°F — hot end required'], ['Ambient warm', '88–95°F'], ['Cool side', '75–80°F'], ['UVB', 'Arcadia 12% T5 HO — high output'], ['Diet', 'Insects primarily — dubia, crickets, hornworms'], ['Lifespan', '10–20 years captive']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Bearded Dragon', href: '/species/bearded-dragon' }, { label: 'Uromastyx', href: '/species/uromastyx' }, { label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-frilled-dragon" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <h2>The Frill — What It Means</h2>
        <p>The frill is a skin membrane supported by elongated hyoid bones that can be rapidly erected by muscular contraction. It is richly vascular and is used for: thermoregulation (angling toward the sun to absorb heat, or fully spreading to increase surface area for cooling), communication between conspecifics (territorial displays between males, courtship displays toward females), and the defensive threat display (full frill erection combined with open mouth, body flattening, bipedal stance, hissing — designed to appear larger and more threatening to a predator). In captivity, a frilled dragon that displays willingly is a comfortable, confident animal. A frilled dragon that never displays is often one that is stressed, cold, or in an environment that suppresses normal behavior.</p>
        <p>The defensive display is not dangerous to humans — it is theatrical rather than functional. A frilled dragon that threat-displays at its keeper is communicating discomfort, not aggression. Regular, gentle interaction from a young age produces adults that display rarely at humans. The display is more commonly seen toward their own reflections in glass, toward other lizards, and when encountering new objects in the enclosure.</p>

        <h2>Enclosure — Vertical Space Is Non-Negotiable</h2>
        <p>Frilled dragons are arboreal — they spend the majority of their time elevated, in trees in the wild. An enclosure that lacks vertical space forces them to live in an unnatural, ground-level posture that suppresses normal behavior and causes chronic stress. Minimum dimensions: 4 feet wide × 2 feet deep × 4 feet tall. Most frilled dragons will spend the majority of their time in the upper third of the enclosure when structure is provided. Cork bark tubes positioned diagonally and vertically, large branches, and sturdy live plants (Ficus, pothos) create the three-dimensional arboreal environment they require.</p>
        <p>PVC enclosures with screen or mesh front panels provide better humidity retention than all-screen setups, which is important for Australian species that prefer moderate humidity (50-70%). Full glass front-opening enclosures with ventilation panels at the top and bottom provide humidity retention with adequate airflow.</p>

        <h2>Temperature — Hotter Than Most Realize</h2>
        <p>Frilled dragons come from the tropical savanna of northern Australia — one of the hottest inhabited environments on earth. Their basking surface temperature of 105–115°F is among the highest of any commonly kept lizard species. This extreme basking temperature is essential for proper digestion, immune function, and behavior. A frilled dragon that cannot reach 105°F on its basking surface will be lethargic, have reduced appetite, and eventually develop health problems from chronic suboptimal thermoregulation. Measure basking surface temperature with an infrared thermometer — ambient air thermometers do not capture surface temperature accurately.</p>

        <h2>Diet — Insect Heavy, Variety Essential</h2>
        <p>Frilled dragons are primarily insectivorous with some plant matter consumed opportunistically. Primary feeders: dubia roaches (best nutritional profile, long shelf life), black soldier fly larvae (high calcium, excellent), hornworms (high moisture, good for hydration), and silkworms. Crickets are acceptable but less nutritious than dubia and carry higher disease risk. Superworms and mealworms as occasional treats only — high fat, low nutritional value. Adults may accept some leafy greens (collard, mustard, dandelion) and occasional soft fruits, but plant matter should not exceed 15-20% of diet.</p>
        <p>Dust all feeders with calcium carbonate at every feeding for juveniles, every other feeding for adults. Multivitamin 2× weekly. Gut-load all insects for 24+ hours before feeding with collard greens, bell pepper, and commercial gut-load. Feed juveniles daily; adults every other day.</p>

        <h2>Handling — Gradual Trust Building</h2>
        <p>Wild-caught frilled dragons are very difficult to tame and spend considerable time in defensive displays. Captive-bred juveniles, handled gently and consistently from 6-8 weeks old, become remarkably calm and interactive adults. The key is not forcing interaction but building positive associations: offer food from tongs then from the hand, allow the dragon to climb onto you voluntarily rather than grabbing, and keep initial sessions very short (5 minutes). A well-socialized adult frilled dragon is a genuinely impressive animal — large, responsive, and active in a way that smaller lizards cannot match.</p>
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Frilled Dragon — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for frilled dragon care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/frilled%20dragon%20setup?s=species-frilled-dragon" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Frilled Dragon Setup on Amazon →</a>
            <a href="/go/chewy-brand/frilled%20dragon%20setup?s=species-frilled-dragon" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
