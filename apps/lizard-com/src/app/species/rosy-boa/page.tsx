import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Rosy Boa Care Sheet — Setup, Feeding, Heat | Lizard.com', description: 'Rosy boa care sheet. A small, docile, low-humidity desert boa for beginners. 2–3 ft, 88–90°F warm side, dry substrate, frozen/thawed mice, secure lid.', path: '/species/rosy-boa', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Rosy Boa Care Sheet', description: 'Enclosure, temperatures, feeding, and handling for Lichanura trivirgata, the rosy boa.', url: 'https://lizard.com/species/rosy-boa', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-15T00:00:00Z', modifiedAt: '2026-06-15T00:00:00Z' })

const FAQS = [
  { question: 'Are rosy boas good beginner snakes?', answer: 'Yes. The rosy boa is one of the best beginner snakes: small (2–3 feet), exceptionally docile, slow-moving, and adapted to dry desert conditions, which makes its husbandry simple. They are calm handlers and rarely bite. Their long lifespan (often 25–30+ years) is the main commitment to consider. The main husbandry notes are a dry enclosure, a secure escape-proof lid, and a warm basking zone.' },
  { question: 'What temperature does a rosy boa need?', answer: 'Provide a thermal gradient with a warm side of about 88–90°F, a basking surface that can reach the low 90s°F, and a cool side around 75–80°F. Nights can drop into the low 70s°F. As a desert species, the rosy boa tolerates warmth well but still needs a true cool side to thermoregulate. Use a thermostat-controlled heat source and verify temperatures with a temperature gun. Many keepers also cool the snake seasonally (brumation) for breeding, but this is optional for a pet.' },
  { question: 'What humidity does a rosy boa need?', answer: 'Low — the rosy boa is a desert species and should be kept dry, with ambient humidity around 30–50%. Excess humidity causes scale rot and respiratory infection in this species, so use a dry substrate such as aspen and provide a small water dish rather than a humid enclosure. A brief humidity boost or a small humid hide is only needed to help with shedding.' },
  { question: 'What do rosy boas eat?', answer: 'Feed appropriately sized frozen/thawed mice — never live prey. Prey is the right size when it leaves a slight bulge after swallowing, roughly the width of the snake at its widest point. Because rosy boas are small, hatchlings start on pinky mice; adults take an appropriately sized mouse every 7–14 days. Thaw prey in warm (not hot) water and avoid handling for about 48 hours after a meal to reduce regurgitation risk.' },
  { question: 'Do rosy boas need UVB?', answer: 'Rosy boas do not strictly require UVB and have been kept successfully for decades without it, since their whole-prey diet supplies vitamin D3 and calcium. Some keepers offer low-level UVB as enrichment. The essentials for this species are correct warm temperatures, low humidity with a dry substrate, and a genuinely secure lid — rosy boas are strong, persistent escape artists for their size.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function RosyBoaPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Rosy Boa Care Sheet', subtitle: 'Lichanura trivirgata — the rosy boa is a small, slow, supremely docile desert boa and one of the most beginner-friendly snakes in the hobby. Dry husbandry, a warm basking zone, and a truly secure lid are all it asks. Plan for the long haul: rosy boas commonly live 25–30+ years.', category: 'Species Guide — Beginner Friendly', authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Rosy Boa', href: '/species/rosy-boa' }]}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Which Reptile Is Right For You? (Quiz)', href: '/tools/reptile-match-quiz', category: 'Tools' },
        { title: 'Kenyan Sand Boa Care', href: '/species/kenyan-sand-boa', category: 'Species' },
        { title: 'Corn Snake Care', href: '/species/corn-snake', category: 'Species' },
        { title: 'Western Hognose Snake', href: '/species/western-hognose-snake', category: 'Species' },
        { title: 'Feeding Frozen/Thawed Rodents', href: '/health/feeding-frozen-thawed-rodents', category: 'Health' },
        { title: 'Best Beginner Reptiles', href: '/species/best-beginner-reptiles', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Lichanura trivirgata'], ['Difficulty', 'Beginner'], ['Adult size', '2–3 feet'], ['Enclosure (adult)', '3×1.5×1 ft (~20–40 gal)'], ['Warm side', '88–90°F'], ['Cool side', '75–80°F'], ['Humidity', 'Low — 30–50%, keep dry'], ['UVB', 'Not required (low-level optional)'], ['Feeding', 'Frozen/thawed mice — never live'], ['Lifespan', '25–30+ years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Kenyan Sand Boa', href: '/species/kenyan-sand-boa' }, { label: 'Corn Snake', href: '/species/corn-snake' }, { label: 'Dysecdysis Guide', href: '/health/dysecdysis' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-rosy-boa" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="overview">A Small, Forgiving Desert Boa</h2>
        <p>The rosy boa is a slow-moving, small (2–3 foot) boa native to the deserts of the American Southwest and Baja, and it is one of the gentlest, most beginner-friendly snakes available. Its desert origins make husbandry simple: dry conditions, a warm basking zone, and a secure enclosure. The one thing to plan for is longevity — rosy boas routinely live 25–30 years or more, so this is a long commitment.</p>

        <h2 id="enclosure">Enclosure &amp; Escape Prevention</h2>
        <p>An adult rosy boa is comfortable in a roughly <strong>3 × 1.5 × 1 foot</strong> enclosure (about a 20–40 gallon footprint). They are terrestrial and like to burrow, so prioritize floor space and a dry, loose substrate such as aspen. Provide two hides (warm and cool side) and a small water dish.</p>
        <p>Despite their calm demeanor, rosy boas are strong, determined escape artists. Use a positively locking or clipping lid — not one that merely rests in place — and check for any gap the width of the snake's head. A secure top-opening tank or a front-opening enclosure with locks both work, as long as the closure is genuinely escape-proof.</p>

        <h2 id="temps">Temperatures</h2>
        <ul>
          <li><strong>Warm side:</strong> 88–90°F, with a basking surface that can reach the low 90s°F</li>
          <li><strong>Cool side:</strong> 75–80°F</li>
          <li><strong>Night:</strong> can drop into the low 70s°F</li>
        </ul>
        <p>As a desert species the rosy boa tolerates warmth well, but it still needs a true cool side to thermoregulate. Run any heat source on a thermostat and verify the warm surface with a temperature gun.</p>

        <h2 id="humidity">Humidity — Keep It Dry</h2>
        <p>The rosy boa is a desert animal and must be kept <strong>dry</strong>, with ambient humidity around 30–50%. Persistent high humidity causes scale rot and respiratory infection in this species. Use a dry substrate (aspen is ideal), a modest water dish, and good ventilation. Only provide a brief humidity boost or a small humid hide if needed to help complete a shed.</p>

        <h2 id="feeding">Feeding — Frozen/Thawed Only</h2>
        <p>Feed appropriately sized frozen/thawed mice — never live prey, which can bite and injure the snake. Prey is the right size when it leaves a slight bulge after swallowing, about the width of the snake at its widest point. Hatchlings start on pinky mice; adults take an appropriately sized mouse every 7–14 days. Thaw in warm (not hot) water, offer with tongs, and avoid handling for about 48 hours after a meal to reduce regurgitation risk. Rosy boas can be shy feeders, so feeding in a dim, undisturbed setting helps.</p>

        <h2 id="handling">Temperament &amp; Handling</h2>
        <p>Rosy boas are among the calmest snakes in the hobby — slow, deliberate, and very reluctant to bite. They tolerate regular gentle handling well, which makes them excellent for nervous beginners and families. Avoid handling during the blue phase of a shed and for about 48 hours after feeding. Otherwise short, calm sessions a few times a week keep the snake relaxed.</p>

        <h2 id="health">Common Health Issues</h2>
        <ul>
          <li><strong>Scale rot &amp; respiratory infection:</strong> from excess humidity or a damp enclosure — the most relevant risk for a desert species. Keep conditions dry.</li>
          <li><strong>Retained shed (dysecdysis):</strong> retained eye caps or a stuck tail tip, usually from a shed attempted while too dry. Offer a humid hide during shedding.</li>
          <li><strong>Mites:</strong> tiny moving specks on the snake or in the water bowl. Treat promptly and quarantine new animals.</li>
          <li><strong>Regurgitation:</strong> often from oversized prey or handling too soon after feeding. Reduce prey size and rest the snake.</li>
        </ul>
        <p>Any persistent appetite loss, wheezing, or skin discoloration warrants a qualified reptile (exotic) veterinarian. Husbandry guidance is not a substitute for veterinary care.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Rosy Boa — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse secure enclosures, aspen substrate, thermostats, and heat sources sized for rosy boa care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/rosy%20boa%20setup?s=species-rosy-boa" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Rosy Boa Setup on Amazon →</a>
            <a href="/go/chewy-brand/rosy%20boa%20setup?s=species-rosy-boa" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
    </>
  )
}
