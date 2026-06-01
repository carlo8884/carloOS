import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Bearded Dragon Care Guide — Enclosure, UVB, Diet | Lizard.com', description: 'Complete bearded dragon care guide. 4x2x2 enclosure minimum, Arcadia 12% UVB required, calcium supplementation, diet ratios.', path: '/species/bearded-dragon', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Bearded Dragon Care Guide', description: 'Enclosure, UVB, diet, supplementation, and health for bearded dragons.', url: 'https://lizard.com/species/bearded-dragon', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function BeardedDragonPage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      contentType="species"
      hero={{ title: 'Bearded Dragon Care Guide', subtitle: 'Pogona vitticeps — the most popular pet lizard in the US. Intelligent, interactive, and demanding. Here\'s what proper husbandry actually looks like — not what the pet store told you.', category: 'Species Guide', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '13 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Bearded Dragon', href: '/species/bearded-dragon' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Pogona vitticeps'], ['Difficulty', 'Intermediate'], ['Min enclosure', '4x2x2 feet'], ['UVB', 'Arcadia 12% — non-negotiable'], ['Basking temp', '100–110°F surface'], ['Cool side', '75–80°F'], ['Adult size', '18–24 inches'], ['Lifespan', '10–15 years'], ['Diet (juvenile)', '80% insects, 20% greens'], ['Diet (adult)', '20% insects, 80% greens']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '13px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <TableOfContents items={[{ label: 'Enclosure', href: '#enclosure' }, { label: 'Temperatures', href: '#temps' }, { label: 'UVB — Critical', href: '#uvb' }, { label: 'Diet by Age', href: '#diet' }, { label: 'Supplements', href: '#supplements' }, { label: 'Health Issues', href: '#health' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Temperature Guide', href: '/setup/temperature-guide' }, { label: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="20 species — free for subscribers." source="species-bearded-dragon" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="enclosure">Enclosure</h2>
        <DropCap letter="M"><strong>Minimum adult enclosure: 4 feet long × 2 feet wide × 2 feet tall.</strong> This is not a guideline — a smaller enclosure prevents the thermal gradient a bearded dragon needs to thermoregulate. A juvenile can live in a 3x1.5x1.5 enclosure, but you will need to upgrade within the first year. Buy the adult size from the start.</DropCap>

        <CalloutBox variant="tip" title="Impaction prevention">
          For juveniles under 12 inches, keep them on tile or paper rather than loose particulate substrate — they ingest sand and small particles while striking prey. For adults on bioactive soil, ensure a thermal gradient with a true cool side (75–80°F) so the dragon can hydrate without becoming hyperthermic. Always offer water in a shallow dish and gut-load insects on calcium-rich greens.
        </CalloutBox>
        <p><strong>Enclosure type:</strong> PVC or wood with glass front (Zen Habitats, Animal Plastics) for best heat retention and UVB reflection. All-glass tanks lose heat rapidly and are inefficient for desert species. The front-opening design of purpose-built reptile enclosures reduces stress compared to top-opening tanks (approach from above mimics predator behavior).</p>
        <p><strong>Substrate:</strong> Bioactive soil mix (60% topsoil / 30% sand / 10% organic matter) for adults. Tile or paper for juveniles under 12 inches (impaction risk from loose particle at small size). See substrate guide for full bioactive setup instructions.</p>

        <h2 id="temps">Temperatures</h2>
        <ul>
          <li><strong>Basking surface:</strong> 100–110°F measured by temperature gun directly on basking surface</li>
          <li><strong>Cool side:</strong> 80–85°F ambient</li>
          <li><strong>Night:</strong> Can drop to 65°F — no supplemental heat required in most homes; CHE if ambient drops below 65°F</li>
        </ul>
        <p>Heat source: basking bulb (incandescent or halogen) on a dimmer thermostat. No colored lights — red and blue "night lights" interfere with sleep cycles. Lights off at night, CHE or DHP if ambient temperature requires supplemental heat.</p>

        <h2 id="uvb">UVB — The Non-Negotiable</h2>
        <p>Bearded dragons are Zone 4 species — they bask in open desert sun at very high UV Index (4–7+). This requires the most powerful T5 HO UVB available: <strong>Arcadia 12% Desert</strong> or Zoo Med T5 HO 10.0. Arcadia 12% is preferred — higher and more consistent output.</p>
        <p>Distance from basking surface: 12–14 inches for Arcadia 12% without a reflector produces the target UVI of 4–6 at the basking spot. Use a <a href="https://solarmeter.com" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Solarmeter 6.5</a> to verify, or rely on published keeper testing data for your specific fixture.</p>
        <p>Replace every 12 months (Arcadia). The bulb appears to work — it still produces visible light — but UVB output declines well before visible light fails. Mark the date on installation with a Sharpie. A bearded dragon without adequate UVB develops MBD within months.</p>
        <p>Photoperiod: 12–14 hours light in summer, 10–12 in winter. This mimics natural day length variation and supports normal behavioral cycling.</p>

        <h2 id="diet">Diet by Age</h2>
        <p><strong>Juveniles (0–6 months): 80% insects, 20% salad.</strong> Growing juveniles need high protein for skeletal and muscle development. Feed 3–5 small dubia roaches or crickets twice daily (as many as they will eat in 10 minutes at each feeding), plus fresh salad available at all times.</p>
        <p><strong>Sub-adults (6–18 months): 60% insects, 40% salad.</strong> Transition the ratio gradually.</p>
        <p><strong>Adults (18+ months): 20–30% insects, 70–80% salad.</strong> Adult bearded dragons are primarily herbivores. The shift is significant and surprises many new keepers — adults fed primarily insects become obese and develop fatty liver disease.</p>
        <p><strong>Approved salad base:</strong> Collard greens, mustard greens, dandelion greens (including flowers), endive, escarole. These are calcium-rich and have good calcium-to-phosphorus ratios. Rotate for variety. Daily availability for juveniles and adults.</p>
        <p><strong>Avoid:</strong> Spinach (oxalates bind calcium), kale (goitrogens in large amounts), iceberg lettuce (nutritionally empty), avocado (toxic), rhubarb (toxic).</p>
        <p><strong>Best feeder insects:</strong> Dubia roaches (best calcium:phosphorus ratio, easy to gut-load), BSFL/Phoenix worms (high calcium — reduce need for calcium dusting), crickets (widely available, gut-load carefully). Avoid mealworms as a primary feeder — very high fat content.</p>

        <h2 id="supplements">Supplementation Schedule</h2>
        <ul>
          <li><strong>Every feeding:</strong> Calcium without D3 (plain calcium carbonate) — dust insects lightly</li>
          <li><strong>2x per month:</strong> Calcium with D3</li>
          <li><strong>1x per week:</strong> Reptile multivitamin (Repashy Herptivite, Rep-Cal Herptivite)</li>
        </ul>
        <p>With correct UVB (Arcadia 12%), D3 supplementation frequency is reduced because the dragon synthesizes D3 from UVB exposure. Without correct UVB, increase calcium-with-D3 to every feeding and use multivitamin 2x weekly.</p>

        <h2 id="health">Common Health Issues</h2>
        <ul>
          <li><strong>Metabolic Bone Disease (MBD):</strong> Soft, pliable bones — jaw and limbs. Caused by inadequate UVB and/or calcium. Correct husbandry immediately; vet evaluation for supplemental calcium treatment in severe cases.</li>
          <li><strong>Impaction:</strong> No feces, straining, lethargy — substrate, prey too large, or dehydration. Warm baths, gentle abdominal massage; vet for severe cases.</li>
          <li><strong>Parasites (coccidia, pinworms):</strong> Runny or bloody feces, weight loss. Fecal exam at vet; treat with appropriate antiparasitic.</li>
          <li><strong>Atadenovirus (ADV/Star Gazing):</strong> Neurological disease causing star gazing (head bent back), seizure-like episodes — no cure, euthanasia humane in severe cases. DNA test available before purchase.</li>
          <li><strong>Brumation:</strong> Seasonal winter slowdown — reduced activity, reduced appetite, possible complete inactivity for weeks. Normal; do not force-feed. Maintain temperatures and water availability.</li>
        </ul>
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Bearded Dragon — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for bearded dragon care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/bearded%20dragon%20setup?s=species-bearded-dragon" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Bearded Dragon Setup on Amazon →</a>
            <a href="/go/chewy-brand/bearded%20dragon%20setup?s=species-bearded-dragon" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
  )
}
