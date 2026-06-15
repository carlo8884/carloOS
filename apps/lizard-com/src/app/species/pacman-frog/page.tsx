import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Pacman Frog Care Sheet — Setup, Humidity, Diet | Lizard.com', description: 'Pacman frog care sheet. A low-maintenance burrowing amphibian. Moist substrate, 75–82°F, ~70–80% humidity, gut-loaded insects, and dechlorinated water only.', path: '/species/pacman-frog', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Pacman Frog Care Sheet', description: 'Enclosure, humidity, temperature, and feeding for Ceratophrys (Pacman frog).', url: 'https://lizard.com/species/pacman-frog', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-15T00:00:00Z', modifiedAt: '2026-06-15T00:00:00Z' })

const FAQS = [
  { question: 'Are Pacman frogs good for beginners?', answer: 'Yes — Pacman frogs (genus Ceratophrys) are among the most beginner-friendly amphibians. They are sedentary ambush predators that spend most of their time burrowed in moist substrate, so they need only a modest enclosure and a simple feeding routine. The main things a new keeper must get right are clean, dechlorinated moisture (amphibian skin absorbs everything), correct humidity, and not overfeeding, since captive Pacman frogs easily become obese.' },
  { question: 'What kind of water do Pacman frogs need?', answer: 'Only dechlorinated or reptile-safe water — never untreated tap water. Amphibians absorb water and dissolved chemicals directly through their permeable skin, so chlorine, chloramine, and heavy metals in tap water are harmful. Use a reptile water conditioner or spring water for the shallow water dish and for misting, keep the dish shallow (the frog soaks, it does not swim), and change the water frequently because the frog will often defecate in it.' },
  { question: 'What do Pacman frogs eat?', answer: 'Pacman frogs are voracious insectivores and opportunistic ambush predators. Feed appropriately sized, gut-loaded insects — crickets, dubia roaches, and the occasional earthworm — dusted with a calcium (and periodic multivitamin) supplement. Juveniles eat every 1–2 days; adults eat 2–3 appropriately sized items every 5–7 days. Do not overfeed: obesity is the most common husbandry problem in captive Pacman frogs. Prey should be no wider than the space between the frog\'s eyes.' },
  { question: 'What temperature and humidity does a Pacman frog need?', answer: 'Keep the enclosure at roughly 75–82°F during the day, with a slight night drop, and humidity around 70–80%. Maintain humidity with a deep, moist (not waterlogged) substrate such as coconut fiber and regular misting with dechlorinated water. Avoid hot basking bulbs and high heat: as amphibians, Pacman frogs do not bask and overheat easily. A low-wattage heat source on a thermostat is only needed if the room runs cold.' },
  { question: 'Do Pacman frogs need UVB?', answer: 'UVB is not strictly required for Pacman frogs and they have long been kept without it, provided the diet is well supplemented with calcium and vitamin D3. Many keepers now provide low-level UVB as a beneficial enrichment that can support calcium metabolism. The essentials remain correct temperature, high humidity, clean dechlorinated moisture, and a properly supplemented diet — not strong UVB.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function PacmanFrogPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Pacman Frog Care Sheet', subtitle: 'Ceratophrys spp. — the Pacman frog is a sedentary, big-mouthed ambush predator that spends its life half-buried in moist substrate. It is one of the easiest amphibians to keep, with a short list of essentials: clean dechlorinated moisture, correct humidity, and a disciplined feeding schedule to prevent obesity.', category: 'Species Guide — Beginner Friendly', authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Pacman Frog', href: '/species/pacman-frog' }]}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Substrate Guide', href: '/setup/substrate-guide', category: 'Setup' },
        { title: 'Gut-Loading Guide', href: '/health/gut-loading-guide', category: 'Health' },
        { title: 'Reptile Obesity', href: '/health/reptile-obesity', category: 'Health' },
        { title: 'Low-Maintenance Reptiles', href: '/species/low-maintenance-reptiles', category: 'Species' },
        { title: 'Mourning Gecko Care', href: '/species/mourning-gecko', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Ceratophrys spp.'], ['Difficulty', 'Beginner'], ['Adult size', '4–7 inches (females larger)'], ['Enclosure (adult)', '10–20 gal floor space'], ['Day temp', '75–82°F'], ['Humidity', '70–80%'], ['UVB', 'Not required (low-level optional)'], ['Water', 'Dechlorinated only — absorbs through skin'], ['Diet', 'Gut-loaded insects — do not overfeed'], ['Lifespan', '6–10+ years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Humidity Guide', href: '/setup/humidity-guide' }, { label: 'Gut-Loading Guide', href: '/health/gut-loading-guide' }, { label: 'Reptile Obesity', href: '/health/reptile-obesity' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-pacman-frog" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="overview">An Easy First Amphibian</h2>
        <p>Pacman frogs — named for their enormous, round, Pac-Man-like mouths — are sit-and-wait ambush predators that spend nearly all their time burrowed in damp substrate waiting for prey to wander by. Because they barely move, they need only a modest enclosure and a simple routine, which makes them one of the most beginner-friendly amphibians. The catch is that, like all amphibians, their permeable skin absorbs whatever is in their water and substrate, so cleanliness and dechlorinated moisture matter more than with a reptile.</p>

        <h2 id="enclosure">Enclosure</h2>
        <p>A single adult does well in a <strong>10–20 gallon</strong> enclosure with more floor space than height — these frogs do not climb. The key feature is a deep layer of moist, burrowable substrate (coconut fiber / coco husk is ideal) so the frog can bury itself. Add a shallow water dish, a hide or two, and some sphagnum moss to help hold humidity. Keep the substrate moist but never waterlogged.</p>
        <p>Because Pacman frogs are cannibalistic and aggressive eaters, <strong>house them one per enclosure</strong>.</p>

        <h2 id="water">Water — The Critical Detail</h2>
        <p><strong>Use only dechlorinated or reptile-safe water.</strong> Amphibian skin absorbs water and dissolved chemicals directly, so untreated tap water — with chlorine, chloramine, or metals — is harmful. Treat tap water with a reptile water conditioner or use spring water for both the water dish and misting. Keep the dish shallow (the frog soaks, it does not swim) and change it frequently, since the frog will often defecate in its water.</p>

        <h2 id="temps">Temperature &amp; Humidity</h2>
        <ul>
          <li><strong>Day temperature:</strong> 75–82°F</li>
          <li><strong>Night:</strong> a slight drop is fine</li>
          <li><strong>Humidity:</strong> 70–80%, maintained by moist substrate and regular misting</li>
        </ul>
        <p>Pacman frogs do not bask and overheat easily, so avoid hot basking bulbs. If the room runs cold, use a low-wattage heat source on a thermostat rather than a bright spotlight. UVB is not required, though low-level UVB can be offered as enrichment.</p>

        <h2 id="diet">Diet — Voracious, but Do Not Overfeed</h2>
        <p>Pacman frogs are aggressive insectivores. Feed appropriately sized, gut-loaded prey — crickets, dubia roaches, and the occasional earthworm — dusted with calcium (and a periodic multivitamin). Prey should be no wider than the space between the frog's eyes.</p>
        <ul>
          <li><strong>Juveniles:</strong> every 1–2 days</li>
          <li><strong>Adults:</strong> 2–3 appropriately sized items every 5–7 days</li>
        </ul>
        <p><strong>Obesity is the most common health problem in captive Pacman frogs.</strong> They will eat far more than they need, so a disciplined schedule matters. Avoid feeding prey that is too large or vertebrate prey as a staple.</p>

        <h2 id="handling">Handling</h2>
        <p>Pacman frogs are display animals, not handling pets. Their skin is delicate and absorbent, and a hungry frog has a strong bite. Handle only when necessary — for example to clean the enclosure — and only with clean, wet, residue-free hands (lotions, soaps, and oils are toxic to amphibians). Always wash your hands before and after, as with all amphibians and reptiles, to reduce <em>Salmonella</em> risk.</p>

        <h2 id="health">Common Health Issues</h2>
        <ul>
          <li><strong>Obesity:</strong> from overfeeding — the leading captive health issue. Stick to a measured schedule.</li>
          <li><strong>Metabolic Bone Disease (MBD):</strong> from inadequate calcium/vitamin D3 supplementation — soft jaw and limbs. Dust prey correctly.</li>
          <li><strong>Bacterial/fungal skin infections &amp; "red leg":</strong> from dirty or chemically contaminated water. Keep water dechlorinated and the enclosure clean.</li>
          <li><strong>Impaction:</strong> from oversized prey or ingesting loose substrate. Feed correctly sized prey on a clean surface.</li>
        </ul>
        <p>Amphibian illness can progress quickly; any unusual color change, bloating, or lethargy warrants a qualified reptile/amphibian (exotic) veterinarian. Husbandry guidance is not a substitute for veterinary care.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Pacman Frog — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, coco-fiber substrate, water conditioner, and humidity gear sized for Pacman frog care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/pacman%20frog%20setup?s=species-pacman-frog" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Pacman Frog Setup on Amazon →</a>
            <a href="/go/chewy-brand/pacman%20frog%20setup?s=species-pacman-frog" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
    </>
  )
}
