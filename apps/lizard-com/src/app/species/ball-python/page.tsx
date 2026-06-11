import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Ball Python Care Guide — Morphs, Feeding Strikes | Lizard.com', description: 'Ball pythons are the most popular pet snake. 400+ morphs, humidity 60-80%, and feeding strikes are normal. Why most feeding refusals are not emergencies.', path: '/species/ball-python', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Ball Python Care Guide', description: 'Morphs, humidity, feeding refusal management, and setup for Python regius ball pythons.', url: 'https://lizard.com/species/ball-python', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'How long can a ball python go without eating?', answer: 'Feeding refusals of 4–8 weeks are normal seasonal behavior for ball pythons — in the wild they may not eat for 3–6 months during dry season. A healthy adult that is maintaining or gaining weight can safely fast for 6 months or more. The combination to act on is refusal plus sustained weight loss, mucus discharge, respiratory sounds, or visible illness — that warrants veterinary evaluation. Weigh monthly on a digital kitchen scale so you have the data to tell a normal fast from an actual problem.' },
  { question: 'What humidity does a ball python need?', answer: 'Target 60–80% ambient humidity, measured with a digital hygrometer at substrate level, rising to 80–90% inside a humid hide stocked with moist sphagnum moss. Inadequate humidity is the most common husbandry problem in ball python keeping and the most common cause of incomplete sheds and respiratory infections. PVC or glass enclosures with limited ventilation hold humidity far more reliably than screen-top tanks, and humidity-retaining substrate (coco fiber, organic topsoil, bioactive blends) outperforms paper, which requires constant misting.' },
  { question: 'What size enclosure does an adult ball python need?', answer: 'Minimum 4×2 feet of floor space for an adult; a 4×2×2 front-opening PVC enclosure is the widely regarded ideal. Counter-intuitively, a huge open space stresses ball pythons — they are ambush predators that feel secure in snug, tight-fitting hides that touch their body on all sides. Whatever the enclosure, provide secure hides and the temperature gradient: hot spot 88–92°F at the surface, warm ambient 80–85°F, cool side 76–80°F.' },
  { question: 'How big do ball pythons get?', answer: 'Adults reach 3–5 feet, with females larger than males — manageable for most keepers. The longer commitment is lifespan: a well-kept ball python lives 20–30 years.' },
  { question: 'What do ball pythons eat?', answer: 'Frozen/thawed rats, offered every 7–14 days for adults. Refusals around shedding (the blue/opaque pre-shed phase), in late fall and winter, during female reproductive season, or after enclosure changes are common and expected. When a ball python refuses food, the first step is checking that temperatures and humidity are correct and asking what changed — not medication.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function BallPythonPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Ball Python Care Guide', subtitle: 'Python regius — the ball python is the most popular pet snake in the world, and for good reason: they are docile, manageable in size (3–5 feet), available in extraordinary morph diversity, and long-lived (20–30 years). Understanding their natural biology — particularly their tendency toward feeding refusals — is the key to keeping them confidently.', category: 'Species Guide — Beginner Friendly', authorName: 'Lizard.com Editorial', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Ball Python', href: '/species/ball-python' }]}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Enclosure Size Calculator', href: '/tools/enclosure-size-calculator', category: 'Tools' },
        { title: 'Reptile Feeding Calculator', href: '/tools/reptile-feeding-calculator', category: 'Tools' },
        { title: 'Basking Temperature Calculator', href: '/tools/basking-temperature-calculator', category: 'Tools' },
        { title: 'Best Reptile Terrariums', href: '/reviews/best-reptile-terrariums', category: 'Reviews' },
        { title: 'Best Thermometers & Hygrometers', href: '/reviews/best-thermometers-hygrometers', category: 'Reviews' },
        { title: 'Ball Python Morphs', href: '/species/ball-python-morphs', category: 'Species' },
        { title: 'Corn Snake Care', href: '/species/corn-snake', category: 'Species' },
        { title: 'Humidity Guide', href: '/setup/humidity-guide', category: 'Setup' },
        { title: 'Feeding Frozen/Thawed Rodents', href: '/health/feeding-frozen-thawed-rodents', category: 'Health' },
        { title: 'Anorexia in Reptiles', href: '/health/anorexia-in-reptiles', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Adult size', '3–5 feet (females larger)'], ['Enclosure (adult)', '4×2×2 ft minimum'], ['Hot spot', '88–92°F surface'], ['Warm ambient', '80–85°F'], ['Cool side', '76–80°F'], ['Humidity', '60–80% — critical'], ['Feeding', 'Frozen/thawed rats — every 7-14 days'], ['Lifespan', '20–30 years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Corn Snake', href: '/species/corn-snake' }, { label: 'Boa Constrictor', href: '/species/boa-constrictor' }, { label: 'Dysecdysis Guide', href: '/health/dysecdysis' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-ball-python" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <h2>Feeding Refusals — The Biggest Beginner Fear</h2>
        <DropCap>Ball pythons are notorious for feeding strikes — periods of weeks to months where they refuse food entirely. This behavior is normal and rooted in their biology: in the wild, West African ball pythons may not eat for 3–6 months during dry season when prey is scarce. A healthy, well-maintained adult ball python refusing food for 4–8 weeks is not cause for panic — it is normal seasonal behavior.</DropCap>
        <p>Common triggers for feeding refusals: seasonal (late fall and winter — even captive snakes respond to changing day length and temperature), shedding cycle (snakes often refuse food while in the blue/opaque pre-shed phase), reproductive season in females, stress from handling or enclosure changes, and recent cage cleaning. When a ball python refuses food, the first step is not medication — it is asking what has changed and whether the husbandry parameters are correct.</p>
        <p><strong>When to actually be concerned:</strong> A feeding refusal combined with weight loss (weigh monthly — a scale is essential), mucus discharge, respiratory sounds, or visible illness warrants veterinary evaluation. A feeding refusal in an otherwise healthy-appearing snake that is maintaining or gaining weight over months is almost never medically urgent. A healthy adult ball python can safely fast for 6 months or more.</p>

        <CalloutBox variant="tip" title="Weigh monthly, not weekly">
          A monthly weigh-in on a digital kitchen scale tells you whether a feeding strike is a healthy seasonal fast or an actual concern. Stable or rising weight during a refusal means the snake is fine; sustained weight loss accompanied by any other sign (mucus, wheezing, lethargy) is worth a vet call.
        </CalloutBox>

        <h2>Humidity — More Important Than Most Think</h2>
        <p>Ball pythons come from the humid forests and grasslands of West and Central Africa where relative humidity averages 60–80%. Inadequate humidity is the most common husbandry problem in ball python keeping — and the most common cause of dysecdysis (incomplete shed), respiratory infections, and skin condition problems. In screen-top enclosures (the standard decade ago), maintaining 60-80% humidity is nearly impossible without covering most of the screen. PVC or glass enclosures with limited ventilation maintain humidity far more reliably and are now the standard recommendation.</p>
        <p>Measure humidity with a digital hygrometer placed at the substrate level. Target 60–80% ambient, rising to 80–90% in the hide. A humid hide (a hide box with moist sphagnum moss inside) is essential — the snake retreats to it during shedding for the moisture needed to complete a clean shed. Substrate that holds humidity (coco fiber, organic topsoil, a bioactive blend) outperforms paper towels and newspaper, which do not contribute to humidity and require constant misting.</p>

        <h2>Morphs — 400+ and Growing</h2>
        <p>Ball python morphs represent the most extensive color and pattern mutation library of any reptile species. Key base mutations that combine to produce most of the designer morphs: Pastel (reduces black pigment, brightens yellows), Spider (reduces pattern, adds head stamp — controversial due to neurological wobble association in some lines), Piebald (random white patches on normal patterning), Banana/Coral Glow (vivid yellow-orange), Albino (removes black pigment entirely), Axanthic (removes yellow, leaves black/white/grey), Clown (reduced pattern, unique dorsal striping), GHI (Ghost Het Ivory — darkens base color), Lesser/Butter (lightens color — produces Blue Eyed Leucistic in combination).</p>
        <p>Combo morphs multiply the possibilities — a Banana Pastel Clown combines three mutations, a Blue Eyed Leucistic (BEL) requires a Lesser or Butter combined with another co-dominant morph. Entry-level morphs (Pastel, Cinnamon, Spotnose) are affordable; designer combos with 3-4 mutations command hundreds to thousands of dollars.</p>

        <h2>Enclosure — Tub vs Tank vs PVC</h2>
        <p>Ball pythons do best in secure, humid, snug enclosures — not large open spaces. Counter-intuitively, a massive tank with lots of open space stresses ball pythons. They are ambush predators that feel secure in tight-fitting hides that touch their body on all sides. Three enclosure options: (1) Plastic tubs (the breeder standard — cheap, secure, hold humidity, easy to clean; aesthetically plain), (2) PVC enclosures (Reptile Sciences, Boamaster — expensive but retain humidity excellently and look good; recommended), (3) Glass tanks (poor humidity retention with screen tops; require partial screen covering). Minimum adult dimensions: 4×2 feet floor space. A 4×2×2 PVC with front-opening sliding doors is the widely regarded ideal adult ball python enclosure.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Ball Python — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for ball python care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/ball%20python%20setup?s=species-ball-python" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Ball Python Setup on Amazon →</a>
            <a href="/go/chewy-brand/ball%20python%20setup?s=species-ball-python" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
    </>
  )
}
