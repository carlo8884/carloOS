import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Green Iguana Care Sheet — Enclosure, UVB, Diet | Lizard.com', description: 'Green iguana care sheet. They grow 5–6 ft and need a custom 8x4x6 ft enclosure, high UVB, and a strictly herbivorous diet. Not a beginner reptile.', path: '/species/green-iguana', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Green Iguana Care Sheet', description: 'Enclosure size, UVB, temperatures, and herbivorous diet for Iguana iguana.', url: 'https://lizard.com/species/green-iguana', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-15T00:00:00Z', modifiedAt: '2026-06-15T00:00:00Z' })

const FAQS = [
  { question: 'Are green iguanas good beginner pets?', answer: 'No. The green iguana is one of the most commonly surrendered and rehomed reptiles precisely because new keepers underestimate it. A hatchling sold at 8 inches becomes a 5–6 foot, 10–18 pound adult within a few years and lives 15–20 years. Meeting its needs requires a custom enclosure measured in feet of floor and height, high-output UVB, warm humid temperatures, and a carefully balanced herbivorous diet. It is an advanced species best suited to keepers who have kept reptiles before and have the space and budget for a room-sized habitat.' },
  { question: 'What size enclosure does a green iguana need?', answer: 'An adult green iguana needs a custom enclosure — a standard glass terrarium is never adequate. Aim for a minimum of roughly 8 feet long by 4 feet deep by 6 feet tall, taller than it is wide because iguanas are arboreal and climb. Many experienced keepers dedicate an entire room or build a closet-sized habitat. Provide sturdy, securely anchored branches at the basking height, since a falling adult iguana can injure itself.' },
  { question: 'What do green iguanas eat?', answer: 'Green iguanas are obligate herbivores — they should eat no animal protein. The diet is built on calcium-rich leafy greens such as collard greens, mustard greens, turnip greens, dandelion greens, and escarole, supplemented with a smaller portion of other vegetables and a little fruit. Avoid spinach and beet greens (oxalates bind calcium) and never feed insects, eggs, or meat, which over time cause kidney damage and gout. Dust food with a calcium supplement and provide correct UVB so the iguana can use that calcium.' },
  { question: 'Do green iguanas need UVB?', answer: 'Yes — strong UVB is essential. Green iguanas bask in open tropical sun and have a high UVB requirement, so they need a high-output T5 HO UVB tube (for example a 10–12% / "Desert" or "Forest" grade fixture) spanning much of the enclosure length, positioned so the basking branch sits at the correct distance for that bulb. Without adequate UVB and dietary calcium, iguanas rapidly develop metabolic bone disease. Replace UVB bulbs every 12 months even though they still emit visible light.' },
  { question: 'What temperature does a green iguana need?', answer: 'Provide a basking surface of about 95–100°F, a warm ambient of 85–90°F, and a cooler side around 80°F, with humidity kept high (60–80%) to support hydration and shedding. Night temperatures can fall into the mid-70s°F. Measure the basking surface with a temperature gun rather than estimating from air temperature, and run heat sources on a thermostat to prevent burns.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function GreenIguanaPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Green Iguana Care Sheet', subtitle: 'Iguana iguana — the green iguana is sold as a tiny hatchling and grows into a 5–6 foot, room-dominating arboreal herbivore that lives 15–20 years. It is not a beginner pet. This care sheet covers the enclosure, UVB, temperatures, and strictly plant-based diet that proper husbandry actually requires.', category: 'Species Guide — Advanced', authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: '11 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Green Iguana', href: '/species/green-iguana' }]}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Enclosure Size Calculator', href: '/tools/enclosure-size-calculator', category: 'Tools' },
        { title: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide', category: 'Setup' },
        { title: 'Herbivore Reptile Diet', href: '/health/herbivore-reptile-diet', category: 'Health' },
        { title: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease', category: 'Health' },
        { title: 'Chinese Water Dragon Care', href: '/species/chinese-water-dragon', category: 'Species' },
        { title: 'Beginner vs Advanced Reptiles', href: '/species/beginner-vs-advanced-reptiles', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Iguana iguana'], ['Difficulty', 'Advanced'], ['Adult size', '5–6 feet (10–18 lb)'], ['Enclosure (adult)', '~8×4×6 ft custom, taller than wide'], ['Basking surface', '95–100°F'], ['Cool side', '~80°F'], ['Humidity', '60–80%'], ['UVB', 'High-output T5 HO — required'], ['Diet', 'Strict herbivore — no animal protein'], ['Lifespan', '15–20 years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Herbivore Reptile Diet', href: '/health/herbivore-reptile-diet' }, { label: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide' }, { label: 'Humidity Guide', href: '/setup/humidity-guide' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-green-iguana" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="reality">The Reality Check First</h2>
        <p>The green iguana is one of the most commonly surrendered reptiles in the hobby, and the reason is simple: the cute 8-inch hatchling at the pet store becomes a 5–6 foot, 10–18 pound adult that needs a room-sized enclosure and lives 15–20 years. Almost everything that goes wrong with pet iguanas traces back to a keeper who did not plan for the adult animal. If you are choosing your first reptile, a green iguana is the wrong choice — start with a beginner-tier species and work up. If you have the space, budget, and experience, the iguana can be a rewarding long-term animal.</p>

        <h2 id="enclosure">Enclosure</h2>
        <p><strong>Adults need a custom enclosure</strong> — no commercially sold glass terrarium is large enough. Plan for a minimum of roughly 8 feet long, 4 feet deep, and 6 feet tall, prioritizing <em>height</em> because iguanas are arboreal and spend most of their time climbing and basking off the ground. Many experienced keepers dedicate an entire spare room or build a closet-sized habitat.</p>
        <p>Furnish the enclosure with sturdy, securely anchored climbing branches positioned so the iguana can reach the basking zone. Anchor everything well: a falling adult iguana can injure itself. PVC or sealed-wood construction holds heat and humidity far better than screen or glass.</p>

        <h2 id="temps">Temperatures &amp; Humidity</h2>
        <ul>
          <li><strong>Basking surface:</strong> 95–100°F, measured by temperature gun on the branch surface</li>
          <li><strong>Warm ambient:</strong> 85–90°F</li>
          <li><strong>Cool side:</strong> ~80°F</li>
          <li><strong>Night:</strong> can fall to the mid-70s°F</li>
          <li><strong>Humidity:</strong> 60–80% — supports hydration and clean shedding</li>
        </ul>
        <p>Run all heat sources on a thermostat to prevent burns, and maintain humidity with a large water source, misting, or a humidifier. A persistently dry enclosure leads to dehydration and retained shed.</p>

        <h2 id="uvb">UVB — Required</h2>
        <p>Green iguanas bask in open tropical sun and have a high UVB requirement. Provide a high-output T5 HO UVB tube — a 10–12% / "Desert" or "Forest" grade fixture — running along much of the enclosure length, with the basking branch set at the correct distance for that specific bulb. Without adequate UVB and dietary calcium, iguanas develop metabolic bone disease quickly. Replace UVB bulbs every 12 months: output declines well before the visible light fails.</p>

        <h2 id="diet">Diet — Strict Herbivore</h2>
        <p><strong>Green iguanas are obligate herbivores and should eat no animal protein.</strong> Feeding insects, eggs, or meat — still occasionally recommended by outdated sources — damages the kidneys over time and contributes to gout. Build the diet around calcium-rich leafy greens:</p>
        <ul>
          <li><strong>Staple greens:</strong> collard greens, mustard greens, turnip greens, dandelion greens, escarole</li>
          <li><strong>Supporting vegetables:</strong> squash, green beans, bell pepper, snap peas (smaller portion)</li>
          <li><strong>Occasional fruit:</strong> small amounts of berries, papaya, mango as a minor part of the diet</li>
          <li><strong>Avoid:</strong> spinach and beet greens (oxalates bind calcium), iceberg lettuce (nutritionally empty), and all animal protein</li>
        </ul>
        <p>Dust food with a reptile calcium supplement, and rely on correct UVB so the iguana can metabolize that calcium. Chop greens to a size appropriate for the animal and offer fresh food daily.</p>

        <h2 id="handling">Temperament &amp; Handling</h2>
        <p>Iguanas are not inherently tame — they earn trust through patient, consistent, gentle interaction from a young age. A poorly socialized or stressed adult can deliver a strong tail whip, sharp claws, and a serious bite, and males can become territorial during breeding season. Regular calm handling, a predictable routine, and respect for the animal's body language produce the best long-term relationship. Wash hands before and after handling, as with all reptiles, to reduce <em>Salmonella</em> risk.</p>

        <h2 id="health">Common Health Issues</h2>
        <ul>
          <li><strong>Metabolic Bone Disease (MBD):</strong> soft jaw and limbs, swelling, tremors — from inadequate UVB and/or calcium. Correct husbandry and see a reptile veterinarian.</li>
          <li><strong>Kidney disease &amp; gout:</strong> linked to chronic dehydration and inappropriate (animal-protein) diet. Keep the diet strictly herbivorous and humidity correct.</li>
          <li><strong>Thermal burns:</strong> from unguarded heat sources. Use thermostats and shield bulbs.</li>
          <li><strong>Retained shed &amp; dehydration:</strong> from low humidity. Increase humidity and provide soaking opportunities.</li>
        </ul>
        <p>Any sign of illness, swelling, or appetite loss warrants evaluation by a qualified reptile (exotic) veterinarian — care-sheet husbandry is not a substitute for veterinary care.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Green Iguana — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse large enclosures, high-output UVB, thermostats, and substrate sized for green iguana care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/green%20iguana%20setup?s=species-green-iguana" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Green Iguana Setup on Amazon →</a>
            <a href="/go/chewy-brand/green%20iguana%20setup?s=species-green-iguana" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
    </>
  )
}
