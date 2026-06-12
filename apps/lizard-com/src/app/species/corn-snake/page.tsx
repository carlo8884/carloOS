import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard, ArticleByline, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Corn Snake Care Guide — Morphs, Feeding | Lizard.com', description: 'Corn snakes are the best beginner snake. 100+ morphs from red wild-type to lavender. Frozen/thawed mice only — no live prey.', path: '/species/corn-snake', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Corn Snake Care Guide', description: 'Morphs, feeding, escape prevention, and complete care for Pantherophis guttatus corn snakes.', url: 'https://lizard.com/species/corn-snake', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'Are corn snakes good for beginners?', answer: 'Corn snakes are a strong first snake: manageable adult size (4–5 feet, females slightly larger), docile temperament, and forgiving of the small mistakes beginning keepers make. Most individuals calm quickly with regular gentle handling — 10–15 minutes several times a week from a young age produces adults that emerge from their hides willingly and rarely bite defensively. Plan for the commitment: a well-cared-for corn snake lives 15–20 years.' },
  { question: 'Should I feed my corn snake live or frozen mice?', answer: 'Frozen/thawed only — never live. A live mouse that is not immediately consumed will bite the snake, and mouse bites become infected. Thaw prey in warm water (not a microwave, which creates hot spots that burn mouth tissue) to room temperature or slightly warmer. To transition a reluctant snake from live to frozen, offer the thawed prey with tongs and wiggle it near the snake’s head to simulate movement — most snakes accept it readily.' },
  { question: 'How often should a corn snake eat?', answer: 'Juveniles take pinky mice every 5–7 days; adults take adult mice or small rats every 7–14 days. Prey is appropriately sized when it creates a slight visible bulge after swallowing — roughly the width of the snake at its widest point. Avoid handling for 48–72 hours after feeding to reduce regurgitation risk.' },
  { question: 'Can a corn snake escape its enclosure?', answer: 'Yes — corn snakes are among the most accomplished escape artists in the snake hobby. They actively probe enclosure edges for gaps, push inadequately secured lids, and can squeeze through a gap the width of their head. A secure setup needs a positively locking or clipping top (not a lid that just sits in place), no cord-entry gaps larger than a few millimeters, and regular inspection of seams. Front-opening enclosures with locks are inherently more secure than top-opening ones.' },
  { question: 'How big do corn snakes get?', answer: 'Adults reach 4–5 feet, with females slightly larger than males. The minimum adult enclosure is 4×2×2 feet, with a basking surface of 85–90°F, a warm-side ambient of 78–82°F, and a cool side of 70–75°F.' },
]

const faqSchema = buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) })
const combinedSchema = combineSchemas(schema, faqSchema)

export default function CornSnakePage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Corn Snake Care Guide', subtitle: 'Pantherophis guttatus — the corn snake is the quintessential beginner snake. Manageable size, docile temperament, extraordinary morph diversity (100+ recognized color and pattern mutations), and forgiving of the small mistakes that beginning keepers make. A well-cared-for corn snake will live 15–20 years.', category: 'Species Guide — Beginner Friendly', authorName: 'Lizard.com Editorial', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Corn Snake', href: '/species/corn-snake' }]}
      relatedLinks={[
        { title: 'Species Library', href: '/species', category: 'Hub' },
        { title: 'Which Reptile Is Right For You? (Quiz)', href: '/tools/reptile-match-quiz', category: 'Tools' },
        { title: 'Ball Python Care', href: '/species/ball-python', category: 'Species' },
        { title: 'Western Hognose Snake', href: '/species/western-hognose-snake', category: 'Species' },
        { title: 'Kenyan Sand Boa', href: '/species/kenyan-sand-boa', category: 'Species' },
        { title: 'Feeding Frozen/Thawed Rodents', href: '/health/feeding-frozen-thawed-rodents', category: 'Health' },
        { title: 'Best Beginner Reptiles', href: '/species/best-beginner-reptiles', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Quick Stats</div>
          {[['Adult size', '4–5 feet (females slightly larger)'], ['Enclosure (adult)', '4×2×2 ft minimum'], ['Basking surface', '85–90°F'], ['Ambient warm side', '78–82°F'], ['Cool side', '70–75°F'], ['Feeding', 'Frozen/thawed mice — never live'], ['Lifespan', '15–20 years']].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Ball Python', href: '/species/ball-python' }, { label: 'Boa Constrictor', href: '/species/boa-constrictor' }, { label: 'Dysecdysis Guide', href: '/health/dysecdysis' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="species-corn-snake" ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="species" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>Morph Overview — 100+ Color Variations</h2>
        <p>The corn snake has the most diverse morph library of any commonly kept snake species — decades of selective breeding have produced mutations affecting every aspect of color and pattern. Understanding the genetic system unlocks the ability to predict breeding outcomes.</p>
        <p><strong>Classic base morphs:</strong> Amel (amelanistic/albino) — removes black pigment, leaving red, orange, and white; vivid and very popular. Anerythristic (anery) — removes red pigment, leaving black, white, and gray. Hypomelanistic (hypo) — reduces black pigment without eliminating it. Snow — amel + anery = white with pale pink patterns.</p>
        <p><strong>Pattern morphs:</strong> Motley (irregular connected pattern replacing normal saddle marks), Stripe (continuous dorsal stripe), Zigzag (angular saddle pattern), Sunkissed (reduced and diffused pattern).</p>
        <p><strong>Popular combos:</strong> Coral Snow (amel + anery + hypo = white/cream), Ultramel (reduces melanin further than standard amel), Scaleless (reduced scalation — smooth appearance, rare and expensive).</p>
        <p>Wild-type corn snakes — the classic orange and red with dark-bordered saddles and black-and-white checkered belly — are underrated; their coloration has evolved for crypsis in leaf litter and is genuinely beautiful under proper lighting.</p>

        <h2>Feeding — Frozen/Thawed Only</h2>
        <p>Feed pre-killed frozen mice, thawed to room temperature or slightly warmer (use warm water, not microwave — hot spots cause burns to mouth tissue). Prey size: appropriately sized when it creates a slight visible bulge in the snake's body after swallowing — roughly the width of the snake at its widest point. Juveniles: pinky mice every 5–7 days. Adults: adult mice or small rats every 7–14 days.</p>
        <p>Never feed live prey. A live mouse that is not immediately consumed will bite the snake — mouse bites become infected, and a mouse left with a snake that is not hungry will cause significant injuries. Pre-killed frozen prey is safer for the snake, more convenient, and allows for reliable nutritional quality control. Transitioning a snake from live to frozen: offer the frozen/thawed prey with tongs, wiggle it to simulate movement, try near the snake's head. Most snakes accept frozen prey readily; persistent live-feeders may require braining (cutting the skull slightly to release blood scent) as a transition aid.</p>

        <h2>Escape Prevention — The Critical Item</h2>
        <p>Corn snakes are among the most accomplished escape artists in the snake hobby. They actively probe enclosure edges for gaps, are strong enough to push inadequately secured lids, and can squeeze through gaps that seem impossibly small (a corn snake can fit through a gap the width of its head). A missing corn snake is a corn snake exploring the walls of a building — they can travel remarkably far and may not be found for days.</p>
        <p>Secure enclosures require: a top that locks or clips positively (push-and-turn or clip latch — not a lid that just sits on top), no gaps at cord entry points larger than a few millimeters, and regular inspection of all seams and joints. Front-opening enclosures (sliding glass, hinged doors with locks) are inherently more secure than top-opening ones for active snakes.</p>

        <h2>Handling and Temperament</h2>
        <p>Corn snakes are among the calmest and most handleable snakes in captivity. Most individuals calm quickly with regular, gentle handling — 10–15 minutes several times a week from a young age produces adults that emerge from their hides willingly and rarely bite defensively. Avoid handling for 48–72 hours after feeding (regurgitation risk during digestion) and during the blue phase of shedding (the snake is semi-blind and more defensive). Otherwise, corn snakes are excellent for both beginner and experienced handlers.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        <AffiliateDisclosure variant="inline" siteId="lizard-com" />
        <div style={{ background: 'var(--brand-surface, #1a1f2b)', border: '1px solid var(--brand-border, #2d3548)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #8a96ad)', marginBottom: '8px' }}>Corn Snake — Setup Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #8a96ad)', lineHeight: 1.55 }}>Browse enclosures, UVB lighting, thermostats, and substrate sized for corn snake care. Lizard.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial inclusion above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/corn%20snake%20setup?s=species-corn-snake" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Corn Snake Setup on Amazon →</a>
            <a href="/go/chewy-brand/corn%20snake%20setup?s=species-corn-snake" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #7bc25c)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

      </div>
      </ArticleLayout>
    </>
  )
}
