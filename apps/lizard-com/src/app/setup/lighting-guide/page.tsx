import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Reptile Lighting Guide — UVB, Basking, Photoperiod & LED Myths | Lizard.com', description: 'Complete reptile lighting guide. UVB requirements by species, basking vs ambient heat, photoperiod for seasonal species, and why LED grow lights don\'t replace UVB.', path: '/setup/lighting-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Reptile Lighting Guide', description: 'UVB requirements, basking lights, photoperiod, and full-spectrum lighting for reptiles.', url: 'https://lizard.com/setup/lighting-guide', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function LightingGuidePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Reptile Lighting Guide', subtitle: 'Reptile lighting serves three separate functions — UVB (for vitamin D3 synthesis), visible light (for circadian rhythm and behavior), and heat (for thermoregulation). Each is provided by different equipment and serves different physiological needs. Understanding what each does prevents the common mistake of assuming one light source does everything.', category: 'Setup Guide', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Setup', href: '/setup' }, { name: 'Lighting Guide', href: '/setup/lighting-guide' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>UVB by Category</div>
          {[['None needed', 'Nocturnal geckos (leo, crested)'], ['Low (2-6%)', 'Crepuscular — skinks, BTS, snakes'], ['Medium (6%)', 'Most diurnal lizards — anoles, chameleons'], ['High (12%)', 'High desert — bearded dragon, uromastyx'], ['Zone 4', 'Frilled dragons, open desert species']].map(([level, species]) => (
            <div key={level} style={{ padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <div style={{ color: 'var(--brand-white)', fontWeight: 600 }}>{level}</div>
              <div style={{ color: 'rgba(238,240,228,0.45)', fontSize: '11px' }}>{species}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Temperature Guide', href: '/setup/temperature-guide' }, { label: 'Bioactive Setup', href: '/setup/bioactive-setup' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="setup-lighting" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>UVB — What It Does and Why It Matters</h2>
        <p>Ultraviolet B radiation (wavelength 290–320nm) penetrates the skin and triggers the conversion of 7-dehydrocholesterol to previtamin D3, which is then converted to vitamin D3 through heat. Vitamin D3 is essential for calcium absorption from the gut — without adequate D3, reptiles cannot absorb dietary calcium regardless of how much is supplemented, leading to metabolic bone disease (MBD). This is why UVB exposure is not optional for diurnal (active-during-daytime) reptiles: they evolved to receive significant solar UVB exposure and their calcium metabolism depends on it.</p>
        <p>Important clarification: UVB is not heat. A high-wattage incandescent basking bulb produces no UVB. A CHE (ceramic heat emitter) produces no UVB. A standard LED grow light produces no biologically active UVB. Only specialized reptile UVB fluorescent tubes or mercury vapor bulbs produce the wavelengths required for vitamin D3 synthesis.</p>

        <h2>Choosing the Right UVB Tube</h2>
        <p><strong>Arcadia T5 HO linear tubes</strong> are the current gold standard — specifically the 6% (Arcadia Forest 6%) and 12% (Arcadia Desert 12%) formulations. T5 High Output tubes are significantly brighter than T8 tubes of the same wattage — they produce more UV at greater distances, allowing for taller enclosures without inadequate UVB reaching the animal. The Arcadia brand is particularly well-characterized for its spectral output and actual UV index (UVI) at various distances.</p>
        <p><strong>Zoo Med Reptisun 5.0 and 10.0</strong> are reliable alternatives widely available. The 5.0 is for forest/moderate UVB species; the 10.0 for desert species. T5 versions are preferable to T8 for the same reasons as above.</p>
        <p><strong>Mercury vapor bulbs (MegaRay, Arcadia Dragon Light):</strong> Self-ballasted bulbs that provide both UVB and heat from a single source. Good for large open enclosures and overhead installations. Higher initial cost but serve dual purpose. Not appropriate for all enclosures — research compatibility with your setup before purchasing.</p>

        <h2>UVI Zones — The Arcadia Framework</h2>
        <p>Arcadia's Dr. Frances Baines developed a UVI (UV Index) zone system for reptile care that provides concrete targets rather than vague recommendations:</p>
        <ul>
          <li><strong>Zone 1 (UVI 0–0.7):</strong> Shade dwellers — nocturnal geckos, some burrowing species</li>
          <li><strong>Zone 2 (UVI 0.7–1.0):</strong> Crepuscular and low-light species — ball pythons, some skinks</li>
          <li><strong>Zone 3 (UVI 1.0–2.9):</strong> Forest and semi-arboreal species — chameleons, day geckos, anoles</li>
          <li><strong>Zone 4 (UVI 3.0–5.9):</strong> Open savanna species — bearded dragons, uromastyx, blue-tongued skinks</li>
          <li><strong>Zone 5 (UVI 6.0+):</strong> Desert and direct sun species — Saharan uromastyx, frilled dragons</li>
        </ul>

        <h2>Basking Lights — Separate from UVB</h2>
        <p>The basking spot is created by a heat source — an incandescent bulb, halogen flood, or PAR38 flood positioned to heat a specific surface to the target temperature. The basking bulb produces visible light and heat but minimal to no useful UVB. It is positioned separately from or alongside the UVB tube to create an overlap zone where the animal can bask and receive UVB simultaneously — replicating the natural situation where the sun provides both warmth and UV.</p>

        <h2>Photoperiod — Light Schedule</h2>
        <p>Reptiles regulate seasonal behaviors (reproduction, brumation, appetite changes) by day length. A photoperiod — consistent on/off schedule — provides the environmental cue that tells the reptile what time of year it is. Standard recommendation: 12–14 hours of light in spring and summer, 10–12 hours in fall and winter. Timer-controlled lighting maintains this automatically. Species with strong seasonal behaviors (many temperate species, some mediterranean species) benefit from seasonally adjusted photoperiods that mimic their natural environment's day-length cycle.</p>
      </div>
    </ArticleLayout>
  )
}
