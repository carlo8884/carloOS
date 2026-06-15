import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'California Kingsnake Care Sheet — Setup, Feeding | Lizard.com', description: 'California kingsnake care sheet. A hardy 3–4 ft beginner snake. 4x2x2 ft enclosure, 85–88°F basking, frozen/thawed mice, and strict single-housing.', path: '/species/california-kingsnake', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'California Kingsnake Care Sheet', description: 'Enclosure, temperatures, feeding, and handling for Lampropeltis californiae.', url: 'https://lizard.com/species/california-kingsnake', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-15T00:00:00Z', modifiedAt: '2026-06-15T00:00:00Z' })

const FAQS = [
  { question: 'Is a California kingsnake a good beginner snake?', answer: 'Yes. The California kingsnake is one of the hardiest and most forgiving beginner snakes: a manageable 3–4 foot adult size, a strong feeding response, broad tolerance of normal household conditions, and a 15–20 year lifespan. The main beginner pitfalls are escape (kingsnakes are powerful and persistent) and cohabitation (they are cannibalistic and must be housed alone). Get a secure enclosure and house one snake per enclosure and the species is very straightforward.' },
  { question: 'Can I house two kingsnakes together?', answer: 'No — never house California kingsnakes together. The species is naturally ophiophagous (snake-eating) and will cannibalize cagemates, including others of its own kind. Always keep one kingsnake per enclosure. This is the single most important rule for the species and is not negotiable.' },
  { question: 'What do California kingsnakes eat?', answer: 'Feed appropriately sized frozen/thawed mice — never live prey, which can bite and injure the snake. Prey is the right size when it leaves a slight bulge after swallowing, roughly the width of the snake at its widest point. Hatchlings take pinky mice every 5–7 days; adults take adult mice every 7–10 days. Thaw prey in warm (not hot) water, and avoid handling for 48 hours after a meal to reduce regurgitation risk.' },
  { question: 'What temperature does a California kingsnake need?', answer: 'Provide a thermal gradient: a basking/warm surface of about 85–88°F, a warm-side ambient in the low 80s°F, and a cool side of 70–75°F. Nights can drop to the low 70s°F with no supplemental heat in most homes. Use a thermostat-controlled under-tank heater or overhead heat source and verify the warm surface with a temperature gun. UVB is not strictly required for this species, though low-level UVB can be provided as an enrichment.' },
  { question: 'Do California kingsnakes need UVB?', answer: 'California kingsnakes do not strictly require UVB and have been kept successfully for decades without it, provided their diet of whole rodent prey supplies vitamin D3 and calcium. That said, many modern keepers offer low-level UVB as a beneficial enrichment. The non-negotiables for this species are correct temperatures, a secure escape-proof enclosure, and solitary housing — not UVB.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function CaliforniaKingsnakePage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'California Kingsnake Care Sheet', subtitle: 'Lampropeltis californiae — among the hardiest beginner snakes in the hobby. A manageable 3–4 foot adult, a reliable feeder, and tolerant of ordinary household conditions. Two rules define its care: a genuinely escape-proof enclosure and strict single-housing, because kingsnakes eat other snakes.', category: 'Species Guide — Beginner Friendly', authorName: 'Lizard.com Editorial', publishedAt: 'June 2026', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'California Kingsnake', href: '/species/california-kingsnake' }]}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Which Reptile Is Right For You? (Quiz)', href: '/tools/reptile-match-quiz', category: 'Tools' },
        { title: 'Corn Snake Care', href: '/species/corn-snake', category: 'Species' },
        { title: 'Ball Python Care', href: '/species/ball-python', category: 'Species' },
        { title: 'Western Hognose Snake', href: '/species/western-hognose-snake', category: 'Species' },
        { title: 'Feeding Frozen/Thawed Rodents', href: '/health/feeding-frozen-thawed-rodents', category: 'Health' },
        { title: 'Best Beginner Reptiles', href: '/species/best-beginner-reptiles', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Scientific name', 'Lampropeltis californiae'], ['Difficulty', 'Beginner'], ['Adult size', '3–4 feet'], ['Enclosure (adult)', '4×2×2 ft minimum'], ['Basking surface', '85–88°F'], ['Cool side', '70–75°F'], ['UVB', 'Not required (low-level optional)'], ['Feeding', 'Frozen/thawed mice — never live'], ['Housing', 'Always solitary — cannibalistic'], ['Lifespan', '15–20 years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Corn Snake', href: '/species/corn-snake' }, { label: 'Western Hognose Snake', href: '/species/western-hognose-snake' }, { label: 'Dysecdysis Guide', href: '/health/dysecdysis' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-california-kingsnake" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="overview">Why It Is a Top Beginner Snake</h2>
        <p>The California kingsnake earns its reputation as a near-ideal first snake: it stays a manageable 3–4 feet, feeds reliably, tolerates the temperature and humidity swings of a normal home, and lives 15–20 years with basic care. Captive-bred animals are widely available in many color and pattern morphs. The species asks for very little — provided you respect its two defining traits: it is a determined escape artist, and it eats other snakes.</p>

        <h2 id="housing">Single-Housing — Non-Negotiable</h2>
        <p><strong>Never house two kingsnakes together.</strong> The genus <em>Lampropeltis</em> is naturally ophiophagous — snake-eating — and a kingsnake will cannibalize a cagemate, including another kingsnake. House exactly one snake per enclosure for its entire life. This is the single most important rule for the species.</p>

        <h2 id="enclosure">Enclosure &amp; Escape Prevention</h2>
        <p>The minimum adult enclosure is <strong>4 × 2 × 2 feet</strong>. Kingsnakes are terrestrial and active, so floor space matters more than height. Provide at least two hides (one on the warm side, one on the cool side), a sturdy water bowl large enough to soak in, and some clutter or cork bark for security.</p>
        <p>Kingsnakes are strong, persistent escape artists. Use an enclosure with a positively locking or clipping closure — not a lid that merely rests in place — and inspect seams and cord-entry points for any gap the width of the snake's head. A front-opening enclosure with locks is inherently more secure than a top-opening tank.</p>

        <h2 id="temps">Temperatures</h2>
        <ul>
          <li><strong>Warm/basking surface:</strong> 85–88°F, measured by temperature gun</li>
          <li><strong>Warm-side ambient:</strong> low 80s°F</li>
          <li><strong>Cool side:</strong> 70–75°F</li>
          <li><strong>Night:</strong> can drop to the low 70s°F — no supplemental heat needed in most homes</li>
        </ul>
        <p>Run any under-tank heater or overhead heat source on a thermostat. UVB is not strictly required — whole-prey diet supplies vitamin D3 and calcium — but low-level UVB can be offered as enrichment.</p>

        <h2 id="feeding">Feeding — Frozen/Thawed Only</h2>
        <p>Feed appropriately sized frozen/thawed mice. Thaw in warm (not hot) water and offer with tongs. Prey is the correct size when it leaves a slight bulge after swallowing — about the width of the snake at its widest point. Hatchlings eat pinky mice every 5–7 days; adults eat adult mice every 7–10 days. Avoid handling for 48 hours after a meal to prevent regurgitation. Never feed live prey: a live mouse can bite and seriously injure the snake.</p>
        <p>Because kingsnakes have a strong feeding response and recognize the scent of other snakes as food, wash your hands between handling another snake and your kingsnake, and feed in a way that does not encourage striking at your hand.</p>

        <h2 id="handling">Temperament &amp; Handling</h2>
        <p>California kingsnakes are generally docile but have an enthusiastic feeding response, so a hungry animal may strike at movement near the enclosure. Outside feeding context, regular gentle handling — short, calm sessions a few times a week — produces a relaxed, easy-to-handle snake. Avoid handling during the blue phase of a shed (the snake is semi-blind and more defensive) and for 48 hours after feeding.</p>

        <h2 id="health">Common Health Issues</h2>
        <ul>
          <li><strong>Retained shed (dysecdysis):</strong> incomplete sheds, retained eye caps, or a stuck tail tip — usually from low humidity. Provide a humid hide and a soak; see the shedding guide.</li>
          <li><strong>Scale rot &amp; respiratory infection:</strong> from chronically damp or cold conditions. Keep the substrate dry and temperatures correct.</li>
          <li><strong>Mites:</strong> tiny moving specks on the snake or in the water bowl. Treat promptly and quarantine new animals.</li>
          <li><strong>Regurgitation:</strong> often from oversized prey or handling too soon after feeding. Reduce prey size and rest the snake.</li>
        </ul>
        <p>Any persistent appetite loss, wheezing, or unusual behavior warrants a visit to a qualified reptile (exotic) veterinarian — husbandry guidance is not a substitute for veterinary care.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>California Kingsnake — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse secure enclosures, thermostats, heat sources, and substrate sized for California kingsnake care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/california%20kingsnake%20setup?s=species-california-kingsnake" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Kingsnake Setup on Amazon →</a>
            <a href="/go/chewy-brand/california%20kingsnake%20setup?s=species-california-kingsnake" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
    </>
  )
}
