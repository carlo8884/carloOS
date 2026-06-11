import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Chinese Water Dragon Care Guide — Arboreal | Lizard.com", description: "Chinese water dragons need tall planted enclosures, high humidity, strong UVB, and a large water feature. Why snout-rub damage is the main welfare risk.", path: "/species/chinese-water-dragon", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Chinese Water Dragon Care Guide", description: "Tall enclosure, humidity, UVB, water feature, snout-rub prevention, and care for Physignathus cocincinus.", url: "https://lizard.com/species/chinese-water-dragon", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'What size enclosure does a Chinese water dragon need?', answer: 'Adults need a minimum footprint of 4×2 feet with at least 4 feet of height, and taller is substantially better — many experienced keepers build 6-foot-tall enclosures for this arboreal climber. Furnish densely with sturdy diagonal branches, cork, and large-leaf plants, and include a water container or built-in pool deep enough for the dragon to submerge and swim, kept clean with frequent changes or filtration since water dragons drink, soak, and defecate in it.' },
  { question: 'Why does my water dragon rub its snout on the glass?', answer: 'Rostral (snout) abrasion is the defining captive welfare problem in this species. It develops when a dragon is housed too small or too exposed and repeatedly runs or rubs its nose against walls, often during panic or glass-surfing. Prevention is enclosure design: adequate size and height, dense visual cover, and calm handling that avoids triggering flight responses. Persistent snout damage or swelling needs a reptile veterinarian — chronic rostral infections are far easier to resolve early.' },
  { question: 'What do Chinese water dragons eat?', answer: 'They are primarily insectivorous: a varied diet of appropriately sized crickets, dubia roaches, locusts, and worms, with occasional whole prey (pinkie mice for adults) and a small amount of leafy greens and fruit, especially for adults. Gut-load feeders and dust with calcium and a multivitamin per schedule. Feed juveniles daily and adults every other day; variety prevents the nutritional gaps of a single feeder type.' },
  { question: 'Do Chinese water dragons need UVB?', answer: 'Yes — a high-output linear T5 UVB is required, placed so the basking branch sits in Ferguson Zone 2–3. Target a basking surface of 95–100°F on an elevated branch, ambient 80–85°F, and 70–80% humidity. Holding both high heat and high humidity favors a solid-walled (PVC or sealed wood) enclosure with controlled ventilation over an all-screen cage, which loses humidity too fast.' },
  { question: 'Can you handle a Chinese water dragon?', answer: 'Captive-bred animals can become tolerant of gentle, regular handling, though they remain flighty and may thrash or jump when startled; wild-caught animals are typically stressed and defensive. Approach calmly, support the body, and keep early sessions short — building trust without panic also protects against the glass-surfing that causes snout damage. Lifespan with good care is 10–15 years.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function SpeciesChineseWaterDragonPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Chinese Water Dragon Care Guide", subtitle: "Physignathus cocincinus is a striking green arboreal agamid from Southeast Asian rainforests, reaching 2 to 3 feet (mostly tail). It needs a tall, heavily planted, humid enclosure with a large water feature for swimming. Its biggest captive welfare problem is rostral (snout) damage from rubbing on enclosure walls when housed too small or too exposed.", category: "Species Guide — Intermediate", authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: "11 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Species", href: "/species" }, { name: "Chinese Water Dragon", href: "/species/chinese-water-dragon" }]}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Frilled Dragon Care', href: '/species/frilled-dragon', category: 'Species' },
        { title: 'Veiled Chameleon Care', href: '/species/veiled-chameleon', category: 'Species' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'UVB Lighting Guide', href: '/setup/uvb-lighting-guide', category: 'Setup' },
        { title: 'Bioactive Setup', href: '/setup/bioactive-setup', category: 'Setup' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Stats"}</div>
          {[["Scientific name", "Physignathus cocincinus"], ["Difficulty", "Intermediate"], ["Adult size", "2-3 ft including tail"], ["Enclosure (adult)", "4x2x4 ft minimum, taller better"], ["Basking surface", "95-100 F"], ["Ambient", "80-85 F"], ["Humidity", "70-80 percent"], ["UVB", "Required (Zone 2-3)"], ["Diet", "Insectivore, some plant/protein"], ["Lifespan", "10-15 years"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Veiled Chameleon Care", href: "/species/veiled-chameleon" }, { label: "Humidity Guide", href: "/setup/humidity-guide" }, { label: "UVB Lighting Guide", href: "/setup/uvb-lighting-guide" }, { label: "Screen vs PVC Enclosures", href: "/setup/screen-vs-pvc-enclosure" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-species-chinese-water-dragon"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"The Chinese water dragon is a semi-arboreal, semi-aquatic agamid that lives along forest streams, basking on overhanging branches and diving into the water to escape threats. In captivity it is rewarding but demanding: it needs height, humidity, a large soakable water feature, strong UVB, and, critically, an enclosure designed to prevent the snout injuries that plague this species. Captive-bred animals are far hardier and calmer than the wild-caught imports that still dominate the cheaper end of the trade."}</p>
          <h2>{"The Snout-Rub Problem"}</h2>

          <h2>{"Enclosure"}</h2>
          <p>{"Adults need a minimum footprint of 4 by 2 feet and at least 4 feet of height, with taller being substantially better for an arboreal climber; many experienced keepers build 6-foot-tall enclosures. Furnish densely with sturdy diagonal branches, cork, and large-leaf plants for cover and basking perches. Include a large water container or built-in pool deep enough for the dragon to submerge and swim, kept clean with frequent changes or filtration, since water dragons drink, soak, and defecate in water."}</p>
          <h2>{"Heat, UVB, and Humidity"}</h2>
          <ul>
            <li>{"Basking surface: 95-100 F on an elevated branch"}</li>
            <li>{"Ambient: 80-85 F, cooler at the base, mild night drop"}</li>
            <li>{"Humidity: 70-80 percent maintained by misting, a large water surface, and live plants"}</li>
            <li>{"UVB: required high-output linear T5 placed so the basking branch sits in Ferguson Zone 2-3"}</li>
          </ul>
          <p>{"Maintaining both high heat and high humidity favors a primarily solid-walled (PVC or sealed wood) enclosure with controlled ventilation over an all-screen cage, which loses humidity too fast; see our screen-versus-PVC comparison."}</p>
          <h2>{"Feeding"}</h2>
          <p>{"Chinese water dragons are primarily insectivorous, taking a varied diet of appropriately sized crickets, dubia roaches, locusts, and worms, with occasional whole prey (pinkie mice for adults) and a small amount of leafy greens and fruit, especially in adults. Gut-load feeders and dust with calcium and a multivitamin per schedule. Feed juveniles daily, adults every other day. Variety prevents the nutritional gaps that come from a single feeder type."}</p>
          <h2>{"Handling and Temperament"}</h2>
          <p>{"Captive-bred water dragons can become tolerant of gentle, regular handling, though they remain flighty and may thrash or jump when startled. Wild-caught animals are typically stressed and defensive. Approach calmly, support the body, and keep early sessions short to build trust without triggering the panic that leads to glass-surfing and snout damage."}</p>
          <h2>{"Common Health Concerns"}</h2>
          <ul>
            <li>{"Rostral (snout) abrasion and secondary infection; the defining husbandry problem"}</li>
            <li>{"Metabolic bone disease from inadequate UVB or calcium"}</li>
            <li>{"Respiratory infection from low temperatures"}</li>
            <li>{"Internal parasites and stress-related disease in wild-caught imports"}</li>
            <li>{"Thermal burns from unguarded basking bulbs"}</li>
          </ul>
          <p>{"Persistent snout damage, swelling, or respiratory signs need an ARAV-member reptile veterinarian; chronic rostral infections in particular are far easier to resolve early."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier)."}</li>
            <li>{"Baines, F. M., et al., Ferguson Zone UV-index guidance."}</li>
            <li>{"Reptiles Magazine, Physignathus cocincinus husbandry references."}</li>
          </ul>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Chinese Water Dragon — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse tall arboreal enclosures, UVB, basking bulbs, foggers, thermostats, and substrate sized for Chinese water dragon care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/chinese%20water%20dragon%20enclosure%20setup?s=species-chinese-water-dragon" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Water Dragon Setup on Amazon →</a>
            <a href="/go/chewy-brand/chinese%20water%20dragon%20enclosure%20setup?s=species-chinese-water-dragon" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
    </>
  )
}
