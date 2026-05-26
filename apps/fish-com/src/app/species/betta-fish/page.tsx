import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Betta Fish Care Guide — Tank Size, Water Parameters & Tankmates | Fish.com', description: 'Complete betta fish care. Why 2.5+ gallon heated tanks are required, water parameters, diet, tankmates, fin health, and the biggest beginner mistakes.', path: '/species/betta-fish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Betta Fish Care Guide', description: 'Tank size, water, diet, tankmates, and health for Betta splendens.', url: 'https://fish.com/species/betta-fish', imageUrl: '', authorName: 'Fish.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function BettaFishPage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{ title: 'Betta Fish Care Guide', subtitle: 'Betta fish are not cup fish. They are intelligent, interactive labyrinth fish that require heated, filtered tanks of at least 2.5 gallons — preferably 5+. Here\'s how to keep them well.', category: 'Species Guide', authorName: 'Fish.com Expert Team', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Betta Fish', href: '/species/betta-fish' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--brand-text-light)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Betta splendens'], ['Difficulty', 'Beginner'], ['Min tank size', '5 gallons (2.5 absolute minimum)'], ['Temperature', '76–82°F — heated tank required'], ['pH', '6.5–7.5'], ['Tankmates', 'Limited — no fin-nippers, no other male bettas'], ['Lifespan', '2–4 years'], ['Diet', 'Carnivore — protein-rich pellets']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid var(--brand-border)', fontSize: '13px' }}>
              <span style={{ color: 'var(--brand-text-light)' }}>{k}</span>
              <span style={{ color: 'var(--brand-dark)', fontWeight: 600, textAlign: 'right', maxWidth: '58%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Neon Tetra Care', href: '/species/neon-tetra' }, { label: 'Goldfish Care', href: '/species/goldfish' }]} />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-betta" />
      </>}
    >
      <div className="carloOS-article">
        <div style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.18)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '8px' }}>The Cup Myth</div>
          <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>Bettas sold in small cups in pet stores are not comfortable there — they are in transit containers, not living environments. The small cup is marketing-enabled cruelty, not evidence that bettas thrive in small spaces. A betta in a cup lives days to weeks. A betta in a proper 5-gallon heated, filtered tank lives 3–5 years.</p>
        </div>

        <h2>Tank Requirements</h2>
        <p><strong>Minimum:</strong> 2.5 gallons. <strong>Recommended:</strong> 5 gallons. More is always better. Bettas need horizontal swimming space, not tall narrow columns. A long, shallow tank is better than a tall, narrow one. Surface access is critical — bettas are labyrinth fish that breathe air from the surface and drown without access to it.</p>
        <p><strong>Heater required.</strong> Bettas are tropical fish from Southeast Asia. They cannot survive long-term at room temperature in most homes. Target 78–80°F. Below 72°F, bettas become lethargic and immune-compromised. Below 65°F, they die. A small, adjustable heater (Aqueon Pro 50W for 5-gallon tanks) is a $20 investment that is non-negotiable.</p>
        <p><strong>Filter required — but gentle flow.</strong> Bettas have long fins that are damaged by strong current, and they come from slow-moving water. Use a sponge filter (ideal) or a hang-on-back filter with a baffle to reduce flow. No powerheads, no strong wave makers.</p>

        <h2>Water Parameters</h2>
        <ul>
          <li><strong>Temperature:</strong> 76–82°F. Stability more important than exact value.</li>
          <li><strong>pH:</strong> 6.5–7.5. Most tap water falls within this range.</li>
          <li><strong>Ammonia:</strong> 0 ppm always. Cycle the tank before adding the betta — see nitrogen cycle guide.</li>
          <li><strong>Nitrite:</strong> 0 ppm always.</li>
          <li><strong>Nitrate:</strong> Under 20 ppm. Weekly 25–30% water changes.</li>
        </ul>

        <h2>Diet</h2>
        <p>Bettas are carnivores — their upturned mouth is designed for surface-feeding on insects and larvae. High-protein diet is essential; generic tropical flakes are nutritionally inadequate and cause bloating.</p>
        <ul>
          <li><strong>Primary:</strong> High-quality betta-specific pellets (Omega One Betta Buffet, Northfin Betta Bits, New Life Spectrum Betta). Feed 2–4 pellets twice daily.</li>
          <li><strong>Supplemental:</strong> Frozen bloodworms, frozen daphnia, brine shrimp — 2–3 times weekly.</li>
          <li><strong>Fast one day per week</strong> — prevents constipation and bloating, which are common in bettas overfed pellets.</li>
          <li><strong>Remove uneaten food within 5 minutes</strong> — decomposing food in small tanks spikes ammonia rapidly.</li>
        </ul>

        <h2>Tankmates</h2>
        <p>Male bettas cannot be housed together — they will fight. Female bettas can be housed together in groups of 5+ in a well-planted 20+ gallon tank (a "sorority"), though aggression still occurs.</p>
        <p><strong>Compatible tankmates</strong> in 10+ gallon tanks: small peaceful bottom-dwellers (Corydoras catfish, pygmy Corydoras), snails (nerite, mystery snails — bettas occasionally attack snails but most tolerate them), African dwarf frogs, small peaceful schoolers (neon tetras in larger tanks — note: some bettas attack them).</p>
        <p><strong>Avoid:</strong> Any fish with colorful, flowing fins (bettas attack them, seeing a threat). Tiger barbs (fin nippers). Goldfish (incompatible temperature and parameter needs). Other bettas. Gouramis (same family — aggression likely).</p>

        <h2>Common Health Issues</h2>
        <ul>
          <li><strong>Fin rot:</strong> Fraying, discoloration of fins — almost always water quality. Test water, do water changes, improve filtration. Antibiotics if bacterial secondary infection is severe.</li>
          <li><strong>Ich:</strong> White spots — standard freshwater ich protocol at 82–84°F with aquarium salt.</li>
          <li><strong>Swim bladder disorder:</strong> Floating sideways or inability to maintain buoyancy — fast 48 hours, feed a single blanched, shelled frozen pea.</li>
          <li><strong>Velvet:</strong> Gold dust on fins — turn off lights, copper-based medication.</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
