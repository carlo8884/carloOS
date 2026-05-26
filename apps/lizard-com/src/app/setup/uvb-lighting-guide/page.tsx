import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'UVB Lighting Guide for Reptiles — Ferguson Zones & T5 HO Setup | Lizard.com',
  description: 'Complete UVB lighting guide for reptiles. Ferguson Zones explained, T5 HO vs compact bulbs, correct distances, bulb replacement schedule, and species-specific requirements.',
  path: '/setup/uvb-lighting-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'lizard-com',
  title: 'UVB Lighting Guide for Reptiles',
  description: 'Ferguson Zones, T5 HO setup, and species-specific UVB requirements.',
  url: 'https://lizard.com/setup/uvb-lighting-guide',
  imageUrl: '',
  authorName: 'Lizard.com Expert Team',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const FERGUSON_ZONES = [
  { zone: 'Zone 1', uvi: '0–0.7', type: 'Shade dwellers', examples: 'Leopard geckos (optional), some snakes', bulb: 'Optional — 2% if used' },
  { zone: 'Zone 2', uvi: '0.7–1.0', type: 'Partial shade', examples: 'Crested geckos, chameleons (some), blue-tongue skinks (Indonesian)', bulb: 'Arcadia 6% or Zoo Med 5.0' },
  { zone: 'Zone 3', uvi: '1.0–2.9', type: 'Open shade/partial sun', examples: 'Ball pythons (beneficial), corn snakes (beneficial), most skinks', bulb: 'Arcadia 6% or Arcadia 12% at distance' },
  { zone: 'Zone 4', uvi: '2.9–4.5+', type: 'Full sun exposure', examples: 'Bearded dragons, uromastyx, tortoises, blue-tongue skinks (Northern)', bulb: 'Arcadia 12% or Zoo Med 10.0 T5 HO' },
]

export default function UVBLightingGuidePage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: 'UVB Lighting Guide for Reptiles',
        subtitle: 'UVB is not optional for most reptile species. It is the difference between metabolic bone disease and skeletal health. This guide covers everything from Ferguson Zones to bulb selection to the replacement schedule most keepers miss.',
        category: 'Setup Guide',
        authorName: 'Lizard.com Expert Team',
        authorAvatar: '🦎',
        publishedAt: 'May 2025',
        readTime: '13 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Setup', href: '/setup' },
        { name: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'Why UVB Matters', href: '#why' },
          { label: 'Ferguson Zones', href: '#ferguson' },
          { label: 'T5 HO vs Compact Bulbs', href: '#bulbs' },
          { label: 'Correct Distance', href: '#distance' },
          { label: 'Replacement Schedule', href: '#replace' },
          { label: 'By Species', href: '#species' },
        ]} />
        <RelatedLinks title="Related" links={[
          { label: 'Best UVB Bulbs 2025', href: '/reviews/best-uvb-bulbs' },
          { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' },
          { label: 'Leopard Gecko Care', href: '/species/leopard-gecko' },
        ]} />
        <EmailCapture variant="sidebar" siteId="lizard-com"
          title="Free Care Sheets"
          subtitle="20 species — free for subscribers."
          source="uvb-lighting-guide" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">

        <h2 id="why">Why UVB Matters</h2>

        <p>UVB radiation enables reptiles to synthesize vitamin D3 in their skin — the same process that occurs in humans through sun exposure. Vitamin D3 is essential for calcium metabolism. Without adequate UVB (or dietary D3 supplementation), calcium cannot be absorbed from food regardless of how much calcium the animal consumes.</p>

        <p>The result is metabolic bone disease (MBD) — weakened, deformed bones that fracture under normal movement. MBD is preventable. It is also one of the most common conditions in captive reptiles, almost always caused by inadequate UVB or incorrect supplementation.</p>

        <p>The important nuance: not all reptile species require the same UVB intensity. A uromastyx basking in full desert sun has very different needs than a crested gecko living in a humid forest canopy. The Ferguson Zone system provides a research-based framework for matching UVB intensity to species requirements.</p>

        <h2 id="ferguson">Ferguson Zones — The Research Framework</h2>

        <p>The Ferguson Zone system was developed through field research measuring actual UVI (UV Index) levels in different microhabitats occupied by different reptile species. Four zones correspond to different exposure levels from shade-dweller to full sun basker.</p>

        <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '24px 0', border: '1px solid rgba(255,255,255,0.07)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: 'rgba(122,181,42,0.12)' }}>
                {['Zone', 'UVI Range', 'Type', 'Example Species', 'Recommended Bulb'].map(h => (
                  <th key={h} style={{ padding: '11px 14px', textAlign: 'left', color: 'var(--brand-primary)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid rgba(122,181,42,0.15)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FERGUSON_ZONES.map((row, i) => (
                <tr key={row.zone} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <td style={{ padding: '10px 14px', color: 'var(--brand-primary)', fontWeight: 700, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.zone}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.85)', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.uvi}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.65)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.type}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.65)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.examples}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.65)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.bulb}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="bulbs">T5 HO vs Compact (Coil) Bulbs</h2>

        <p><strong>Use T5 HO fluorescent tubes.</strong> This is not a preference — it is the current standard of care based on measured performance. Compact/coil UVB bulbs (the screw-in type) have a fundamental physical limitation: their output drops to near zero at distances beyond 10–15cm. A basking reptile at 30cm from a compact bulb receives almost no UVB.</p>

        <p>T5 HO (High Output) tubes produce consistent UVB across the tube length and penetrate 30–60cm — enough to create a meaningful UVB gradient across the enclosure. They are also more consistent in their output decline over time.</p>

        <p>Top T5 HO UVB bulbs ranked by Solarmeter 6.5 testing:</p>
        <ul>
          <li><strong>Arcadia T5 HO 12% Desert</strong> — highest measured UVI, best output retention (85–90% at 6 months). Zone 4 species. See <Link href="/reviews/best-uvb-bulbs">our full review →</Link></li>
          <li><strong>Arcadia T5 HO 6% Forest</strong> — Zone 2–3 species. Same exceptional build quality as the 12%.</li>
          <li><strong>Zoo Med T5 HO Reptisun 10.0</strong> — good output, wider availability, faster output decline (70–75% at 6 months — replace every 6 months not 12).</li>
        </ul>

        <h2 id="distance">Correct Bulb Distance</h2>

        <p>UVI falls off with distance according to the inverse square law — double the distance, quarter the UVI. This means distance is the primary tool for adjusting UVI to species requirements, not bulb selection alone.</p>

        <ul>
          <li><strong>Zone 4 species (bearded dragons, uromastyx)</strong> — Arcadia 12% with a reflector: 30–35cm from bulb to basking surface produces UVI 4–7. Without reflector: 20–25cm needed.</li>
          <li><strong>Zone 2–3 species (crested geckos, skinks)</strong> — Arcadia 6%: 30–40cm produces UVI 1.5–3.</li>
          <li><strong>Always measure</strong> — a Solarmeter 6.5 is the definitive tool ($110–130). Alternatively, use published keeper data for your specific bulb/fixture/distance combination.</li>
          <li><strong>Provide a UVB gradient</strong> — not the entire enclosure at maximum UVI. The animal should be able to move into and out of the UVB zone to self-regulate exposure.</li>
        </ul>

        <h2 id="replace">Replacement Schedule — The Most Common Mistake</h2>

        <p>UVB output declines long before visible light output does. A bulb that appears to be working normally — lighting the enclosure perfectly — may be producing little to no UVB. This is how MBD develops in animals that appear to have "correct" UVB setup.</p>

        <ul>
          <li><strong>Arcadia bulbs:</strong> Replace every 12 months</li>
          <li><strong>Zoo Med T5 HO:</strong> Replace every 6 months (faster decline)</li>
          <li><strong>Any compact/coil bulb:</strong> Replace every 3–4 months (rapid decline)</li>
          <li><strong>With a Solarmeter 6.5:</strong> Replace when UVI drops below zone target at standard distance</li>
        </ul>

        <p>Mark the replacement date on the fixture with a Sharpie on installation day. This single habit prevents most UVB-related MBD in properly set-up enclosures.</p>

        <h2 id="species">Species-Specific UVB Requirements</h2>

        <ul>
          <li><strong>Bearded dragon</strong> — Zone 4. Arcadia 12% required. Non-negotiable.</li>
          <li><strong>Leopard gecko</strong> — Ferguson Zone 1–2. UVB optional but beneficial, particularly for vitamin D3 synthesis and improved color/activity. If provided: Arcadia 6% at distance (40+ cm) or low-output 5.0.</li>
          <li><strong>Ball python</strong> — Zone 2–3. Beneficial when provided. Research shows improved immune function and behavior. Not strictly required with dietary D3, but current best practice recommends providing low-level UVB.</li>
          <li><strong>Crested gecko</strong> — Zone 2. UVB beneficial. Arcadia 6% at 30–40cm. Critical: temperature cap at 80°F must be maintained — crested geckos cannot thermoregulate away from UVB in a warm enclosure.</li>
          <li><strong>Blue-tongue skink (Northern)</strong> — Zone 3–4. Arcadia 12% or 6% depending on subspecies. Northern BTS are high-UVB animals.</li>
          <li><strong>Corn snake</strong> — Zone 2. Beneficial. Low-output Arcadia 6% if provided.</li>
          <li><strong>Tortoise (all species)</strong> — Zone 4. High-output UVB essential. Arcadia 12% minimum.</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
