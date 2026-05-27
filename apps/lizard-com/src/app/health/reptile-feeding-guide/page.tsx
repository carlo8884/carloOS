import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'lizard-com',
  title: 'Reptile Feeding Guide — Prey Size, Frequency | Lizard.com',
  description: 'Complete reptile feeding guide. Prey size charts by reptile size, feeding frequency by species, gut-loading protocols.',
  path: '/health/reptile-feeding-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'lizard-com',
  title: 'Reptile Feeding Guide',
  description: 'Prey size, feeding frequency, gut-loading, and supplementation for reptiles.',
  url: 'https://lizard.com/health/reptile-feeding-guide',
  imageUrl: '',
  authorName: 'Lizard.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const FREQ_TABLE = [
  { species: 'Bearded Dragon (baby)', prey: 'Dubia roaches, crickets', size: '≤ head width', freq: '3–5x daily (juveniles), 1–2x daily (adults)', notes: 'Juveniles 80% insects; adults 80% greens' },
  { species: 'Bearded Dragon (adult)', prey: 'Dubia roaches, BSFL, greens', size: '≤ head width', freq: '2–3x/week insects; greens daily', notes: 'Collard greens, mustard greens, dandelion' },
  { species: 'Leopard Gecko', prey: 'Dubia roaches, crickets, mealworms', size: '≤ head width', freq: 'Daily (juveniles), every 2–3 days (adults)', notes: 'Mealworms sparingly — high fat' },
  { species: 'Crested Gecko', prey: 'CGD (Pangea/Repashy) + insects', size: 'CGD ad lib; insects ≤ head width', freq: 'CGD every 2–3 days; insects 2x/week', notes: 'CGD alone is nutritionally complete' },
  { species: 'Ball Python', prey: 'Frozen/thawed mice or rats', size: '1–1.5x body diameter', freq: 'Every 7–14 days', notes: 'Always frozen/thawed — never live' },
  { species: 'Corn Snake', prey: 'Frozen/thawed mice', size: '1–1.5x body diameter', freq: 'Every 7–10 days', notes: 'Young snakes may need more frequent feeding' },
  { species: 'Blue-Tongue Skink', prey: 'Protein (meat/dog food) + vegetables', size: 'Bite-sized pieces', freq: 'Every 1–2 days', notes: '50% protein, 40% vegetables, 10% fruit' },
]

export default function ReptileFeedingGuidePage() {
  return (
    <ArticleLayout
      siteId="lizard-com"
      hero={{
        title: 'Reptile Feeding Guide',
        subtitle: 'Prey size, feeding frequency, gut-loading protocols, and the supplementation schedule that prevents metabolic bone disease. Species-specific data for the most common captive reptiles.',
        category: 'Health & Husbandry',
        authorName: 'Lizard.com Editorial',
        authorAvatar: '🦎',
        publishedAt: 'May 2025',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Health' },
        { name: 'Feeding Guide', href: '/health/reptile-feeding-guide' },
      ]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: 'Prey Size — The Core Rule', href: '#prey-size' },
          { label: 'Frequency by Species', href: '#frequency' },
          { label: 'Gut-Loading', href: '#gut-load' },
          { label: 'Supplementation', href: '#supplements' },
          { label: 'Live vs Frozen/Thawed', href: '#live-vs-frozen' },
          { label: 'Refusal to Eat', href: '#refusal' },
        ]} />
        <RelatedLinks title="Related" links={[
          { label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' },
          { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' },
          { label: 'Leopard Gecko Care', href: '/species/leopard-gecko' },
        ]} />
        <EmailCapture variant="sidebar" siteId="lizard-com"
          title="Free Care Sheets"
          subtitle="20 species — free for subscribers."
          source="feeding-guide" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2 id="prey-size">Prey Size — The Core Rule</h2>
        <p>The universal rule for prey size: <strong>no wider than the widest part of your reptile&apos;s head</strong>. This applies to insects, rodents, and most other prey items. Prey that is too large causes regurgitation, impaction, and in severe cases, injury. When in doubt, go smaller.</p>
        <p>The head-width rule applies to the prey item&apos;s widest point, not its length. A cricket can be longer than the gecko&apos;s head as long as it isn&apos;t wider. For snakes, the rule is slightly different: prey should be 1–1.5x the diameter of the snake&apos;s body at its widest point — snakes can swallow proportionally larger prey because their jaws are not rigidly connected.</p>

        <h2 id="frequency">Feeding Frequency by Species</h2>
        <div style={{ borderRadius: '12px', overflow: 'hidden', margin: '24px 0', border: '1px solid rgba(255,255,255,0.07)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
            <thead>
              <tr style={{ background: 'rgba(122,181,42,0.12)' }}>
                {['Species', 'Prey Type', 'Prey Size', 'Frequency', 'Notes'].map(h => (
                  <th key={h} style={{ padding: '11px 14px', textAlign: 'left', color: 'var(--brand-primary)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', borderBottom: '1px solid rgba(122,181,42,0.15)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {FREQ_TABLE.map((row, i) => (
                <tr key={row.species} style={{ background: i % 2 === 0 ? 'rgba(255,255,255,0.02)' : 'transparent' }}>
                  <td style={{ padding: '10px 14px', color: 'var(--brand-white)', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.species}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.prey}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.size}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.7)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.freq}</td>
                  <td style={{ padding: '10px 14px', color: 'rgba(238,240,228,0.5)', fontSize: '11px', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>{row.notes}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 id="gut-load">Gut-Loading — Why Feeder Quality Matters</h2>
        <p>Feeder insects are nutritional carriers — they are what they eat. An insect that has been held on cardboard or fruit for 24 hours has minimal nutritional value. Gut-loading is the practice of feeding feeder insects a high-quality diet for 24–48 hours before offering them to your reptile, maximizing the nutritional transfer.</p>
        <p><strong>Effective gut-load foods:</strong></p>
        <ul>
          <li>Dark leafy greens: collard greens, mustard greens, dandelion greens, kale</li>
          <li>Vegetables: butternut squash, sweet potato, bell pepper, carrot</li>
          <li>Grains: wheat bran, oats, dry oatmeal</li>
          <li>Commercial gut-load (Repashy Bug Burger, Mazuri Hi-Ca Cricket Diet)</li>
        </ul>
        <p><strong>Avoid:</strong> Spinach and beets (high oxalates that bind calcium), iceberg lettuce (essentially empty), citrus fruits (acidic, causes digestive upset in many insects).</p>
        <p>Dubia roaches are the gold standard feeder insect — better calcium-to-phosphorus ratio than crickets, cannot jump or bite, do not smell, and are easy to breed at home. Crickets are widely available but die quickly, smell badly in large numbers, and have a less favorable calcium ratio. Black soldier fly larvae (BSFL / phoenix worms) have an exceptional calcium content and do not require calcium dusting if used regularly.</p>

        <h2 id="supplements">Supplementation Schedule</h2>
        <p>Reptiles synthesize vitamin D3 from UVB exposure — or must obtain it through supplementation if UVB is inadequate. Calcium supplementation replaces the calcium provided in wild prey (whole prey contains bones; feeder insects are calcium-poor by comparison). The supplementation schedule depends on your UVB setup.</p>

        <div style={{ background: 'rgba(122,181,42,0.07)', border: '1px solid rgba(122,181,42,0.2)', borderRadius: '12px', padding: '20px', margin: '20px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-primary)', marginBottom: '12px' }}>Standard Supplementation Protocol (with proper UVB)</div>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px', color: 'rgba(238,240,228,0.8)', fontSize: '14px' }}><strong style={{ color: 'var(--brand-white)' }}>Every feeding:</strong> Plain calcium carbonate (no D3) — lightly dust insects before offering</li>
            <li style={{ marginBottom: '8px', color: 'rgba(238,240,228,0.8)', fontSize: '14px' }}><strong style={{ color: 'var(--brand-white)' }}>2x per month:</strong> Calcium with D3 — for species with UVB access, D3 supplementation is reduced because UVB produces D3 in the skin</li>
            <li style={{ color: 'rgba(238,240,228,0.8)', fontSize: '14px' }}><strong style={{ color: 'var(--brand-white)' }}>1x per week:</strong> Multivitamin powder — provides vitamins A, E, and trace minerals</li>
          </ul>
        </div>

        <div style={{ background: 'rgba(200,149,42,0.08)', border: '1px solid rgba(200,149,42,0.2)', borderRadius: '12px', padding: '20px', margin: '20px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-warning)', marginBottom: '12px' }}>Protocol without UVB (indoor only)</div>
          <ul style={{ margin: 0, paddingLeft: '20px' }}>
            <li style={{ marginBottom: '8px', color: 'rgba(238,240,228,0.8)', fontSize: '14px' }}><strong style={{ color: 'var(--brand-white)' }}>Every feeding:</strong> Calcium with D3 — D3 must come entirely from supplementation if no UVB</li>
            <li style={{ color: 'rgba(238,240,228,0.8)', fontSize: '14px' }}><strong style={{ color: 'var(--brand-white)' }}>1x per week:</strong> Multivitamin</li>
          </ul>
        </div>

        <p><strong>Recommended products:</strong> Rep-Cal Herptivite (multivitamin), Repashy Calcium Plus (combined calcium + D3 + vitamins — simplified option), Zoo Med Repti Calcium (plain calcium). Avoid vitamin A supplementation beyond what is in your multivitamin — vitamin A toxicity is a real risk with oversupplementation.</p>

        <h2 id="live-vs-frozen">Live vs Frozen/Thawed</h2>
        <p>For snakes: <strong>always use frozen/thawed prey.</strong> Live rodents have injured and killed snakes that were not immediately hungry. They bite, scratch, and stress snakes that are digesting or in shed. There is no nutritional benefit to live prey over properly thawed frozen prey. Thaw frozen rodents in the refrigerator overnight, then warm to body temperature (100–105°F) in warm water before offering. Never microwave.</p>
        <p>For insectivores: live insects are preferred — movement triggers the feeding response and provides behavioral enrichment. The exception is dead insects offered with feeding tongs for species comfortable with tong-feeding.</p>

        <h2 id="refusal">Refusal to Eat</h2>
        <p>Every reptile will occasionally refuse food. Common causes:</p>
        <ul>
          <li><strong>In shed:</strong> Most reptiles stop eating during the 1–2 weeks before shedding. Normal — don&apos;t force feed.</li>
          <li><strong>Breeding season:</strong> Males often fast during breeding season. Ball pythons are notorious for extended seasonal fasts (2–6 months).</li>
          <li><strong>Temperature issues:</strong> Temperatures too low cause reptiles to stop feeding. Verify with a calibrated thermometer.</li>
          <li><strong>Stress:</strong> New enclosure, recent handling, incorrect photoperiod, too much foot traffic near the enclosure.</li>
          <li><strong>Illness:</strong> If refusal continues beyond seasonal norms with other symptoms (weight loss, lethargy, abnormal feces), vet visit is warranted.</li>
        </ul>
        <p>Track weight monthly. A snake that hasn&apos;t eaten for 3 months but maintains weight is probably fine. A snake that has lost 15% of body weight warrants veterinary attention.</p>
      </div>
    </ArticleLayout>
  )
}
