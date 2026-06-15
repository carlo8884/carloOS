import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "White's Tree Frog Care Sheet — Setup, Diet | Lizard.com", description: "White's tree frog care sheet. A hardy, docile beginner amphibian. Vertical enclosure, 75–82°F, 50–70% humidity, dechlorinated water, gut-loaded insects.", path: '/species/whites-tree-frog', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "White's Tree Frog Care Sheet", description: "Enclosure, humidity, temperature, and feeding for Litoria caerulea, the White's tree frog.", url: 'https://lizard.com/species/whites-tree-frog', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-15T00:00:00Z', modifiedAt: '2026-06-15T00:00:00Z' })

const FAQS = [
  { question: "Are White's tree frogs good for beginners?", answer: "Yes. White's tree frogs (Litoria caerulea), also called dumpy tree frogs, are among the hardiest and most docile amphibians in the hobby. They are forgiving of minor husbandry mistakes, tolerate a wide range of normal household temperatures, and have a calm temperament. The two things a beginner must get right are dechlorinated water and humidity, plus avoiding overfeeding, since these frogs readily become overweight." },
  { question: "What size enclosure does a White's tree frog need?", answer: "Because they are arboreal, White's tree frogs need a vertically oriented enclosure with climbing space. A single adult does well in roughly an 18x18x24 inch (or larger) front-opening terrarium furnished with sturdy branches, broad-leaved plants (live or artificial), and at least one elevated hide. A group of two to three can be kept together in a proportionally larger enclosure, since the species is social and not cannibalistic toward similarly sized frogs." },
  { question: "What do White's tree frogs eat?", answer: "They are insectivores. Feed appropriately sized, gut-loaded insects — crickets and dubia roaches as staples, with occasional treats — dusted with a calcium supplement (and a periodic multivitamin). Juveniles eat daily or every other day; adults eat 2–4 appropriately sized insects every 2–3 days. White's tree frogs overeat easily and obesity is common, so resist the urge to overfeed a frog that always looks hungry." },
  { question: "What temperature and humidity does a White's tree frog need?", answer: "Keep daytime temperatures around 75–82°F with a slight night drop into the low 70s°F, and humidity in the 50–70% range — moderate, not swamp-like. Maintain humidity with a moisture-retentive substrate, a water dish, and daily misting using dechlorinated water. Avoid hot basking bulbs; a low-wattage heat source on a thermostat is only needed if the room runs cool." },
  { question: "Do White's tree frogs need UVB?", answer: "UVB is not strictly required and White's tree frogs have long been kept without it when their diet is well supplemented with calcium and vitamin D3. Many keepers now provide low-level UVB as a beneficial enrichment to support calcium metabolism, especially in growing or breeding frogs. The non-negotiables remain dechlorinated water, correct humidity and temperature, and a supplemented diet." },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function WhitesTreeFrogPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "White's Tree Frog Care Sheet", subtitle: "Litoria caerulea — the White's (or “dumpy”) tree frog is a plump, calm, hardy arboreal amphibian and one of the best first frogs. This care sheet covers the vertical enclosure, moderate humidity, dechlorinated water, and disciplined feeding it needs to thrive for a decade or more.", category: 'Species Guide — Beginner Friendly', authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: "White's Tree Frog", href: '/species/whites-tree-frog' }]}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Bioactive Setup', href: '/setup/bioactive-setup', category: 'Setup' },
        { title: 'Gut-Loading Guide', href: '/health/gut-loading-guide', category: 'Health' },
        { title: 'Reptile Obesity', href: '/health/reptile-obesity', category: 'Health' },
        { title: 'Pacman Frog Care', href: '/species/pacman-frog', category: 'Species' },
        { title: 'Mourning Gecko Care', href: '/species/mourning-gecko', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Litoria caerulea'], ['Difficulty', 'Beginner'], ['Adult size', '3–4.5 inches'], ['Enclosure (adult)', '18×18×24 in vertical, front-opening'], ['Day temp', '75–82°F'], ['Humidity', '50–70%'], ['UVB', 'Not required (low-level optional)'], ['Water', 'Dechlorinated only — absorbs through skin'], ['Diet', 'Gut-loaded insects — do not overfeed'], ['Lifespan', '10–15 years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Humidity Guide', href: '/setup/humidity-guide' }, { label: 'Gut-Loading Guide', href: '/health/gut-loading-guide' }, { label: 'Reptile Obesity', href: '/health/reptile-obesity' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-whites-tree-frog" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="overview">One of the Best First Frogs</h2>
        <p>The White's tree frog — also called the dumpy tree frog for its plump, folded appearance — is a calm, hardy, long-lived arboreal amphibian native to Australia and New Guinea. It tolerates a wide range of ordinary household conditions, has a docile temperament, and can live 10–15 years. Combined with its sociable nature (small groups can be housed together), this makes it one of the best amphibians for a first-time keeper, provided you respect amphibian skin and avoid overfeeding.</p>

        <h2 id="enclosure">Enclosure</h2>
        <p>White's tree frogs are arboreal, so a <strong>vertically oriented</strong> enclosure is best. A single adult thrives in an 18 × 18 × 24 inch (or larger) front-opening terrarium furnished with sturdy branches, broad-leaved live or artificial plants for cover, and an elevated hide. A moisture-retentive substrate (coco fiber, or a bioactive mix) helps hold humidity. Two to three frogs of similar size can share a proportionally larger enclosure.</p>

        <h2 id="water">Water — Dechlorinated Only</h2>
        <p><strong>Provide only dechlorinated or reptile-safe water.</strong> Amphibian skin absorbs water and dissolved chemicals directly, so untreated tap water can harm the frog. Treat tap water with a reptile water conditioner or use spring water for the shallow water dish and for misting. Keep the dish clean and change it frequently — frogs often soak and defecate in their water.</p>

        <h2 id="temps">Temperature &amp; Humidity</h2>
        <ul>
          <li><strong>Day temperature:</strong> 75–82°F</li>
          <li><strong>Night:</strong> a slight drop into the low 70s°F is fine</li>
          <li><strong>Humidity:</strong> 50–70% — moderate, maintained by misting and a water dish, not constantly saturated</li>
        </ul>
        <p>Avoid hot basking bulbs. If the room runs cool, use a low-wattage heat source on a thermostat. UVB is optional enrichment rather than a requirement.</p>

        <h2 id="diet">Diet — Insectivore, Prone to Obesity</h2>
        <p>Feed appropriately sized, gut-loaded insects — crickets and dubia roaches as staples — dusted with calcium and a periodic multivitamin. Prey should be no wider than the space between the frog's eyes.</p>
        <ul>
          <li><strong>Juveniles:</strong> daily or every other day</li>
          <li><strong>Adults:</strong> 2–4 appropriately sized insects every 2–3 days</li>
        </ul>
        <p>White's tree frogs are famous for begging and overeating, and obesity is common in captivity. A frog that always looks hungry does not need more food — stick to a measured schedule.</p>

        <h2 id="handling">Handling</h2>
        <p>These frogs tolerate occasional gentle handling better than most amphibians, but their skin remains delicate and absorbent. Handle only when necessary, with clean, wet, residue-free hands (no soap, lotion, or oils, which are toxic to amphibians), and keep sessions brief. Always wash your hands before and after, as with all amphibians, to reduce <em>Salmonella</em> risk.</p>

        <h2 id="health">Common Health Issues</h2>
        <ul>
          <li><strong>Obesity:</strong> the most common captive problem — from overfeeding. Keep to a schedule.</li>
          <li><strong>Metabolic Bone Disease (MBD):</strong> from inadequate calcium/vitamin D3. Dust prey correctly.</li>
          <li><strong>Bacterial/fungal skin infections ("red leg"):</strong> from dirty or chemically contaminated water. Keep water dechlorinated and clean.</li>
          <li><strong>Impaction:</strong> from oversized prey or ingested loose substrate. Feed correctly sized prey.</li>
        </ul>
        <p>Any bloating, unusual color change, or lethargy warrants a qualified reptile/amphibian (exotic) veterinarian. Husbandry guidance is not a substitute for veterinary care.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>White's Tree Frog — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse vertical terrariums, branches, coco-fiber substrate, water conditioner, and humidity gear sized for White's tree frog care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/whites%20tree%20frog%20setup?s=species-whites-tree-frog" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Tree Frog Setup on Amazon →</a>
            <a href="/go/chewy-brand/whites%20tree%20frog%20setup?s=species-whites-tree-frog" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
    </>
  )
}
