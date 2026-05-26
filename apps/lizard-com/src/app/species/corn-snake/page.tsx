import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Corn Snake Care Guide — Morphs, Feeding & Escape Prevention | Lizard.com', description: 'Corn snakes are the best beginner snake. 100+ morphs from red wild-type to lavender. Frozen/thawed mice only — no live prey. Expert escape artists requiring secure lids.', path: '/species/corn-snake', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Corn Snake Care Guide', description: 'Morphs, feeding, escape prevention, and complete care for Pantherophis guttatus corn snakes.', url: 'https://lizard.com/species/corn-snake', imageUrl: '', authorName: 'Lizard.com Expert Team', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function CornSnakePage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Corn Snake Care Guide', subtitle: 'Pantherophis guttatus — the corn snake is the quintessential beginner snake. Manageable size, docile temperament, extraordinary morph diversity (100+ recognized color and pattern mutations), and forgiving of the small mistakes that beginning keepers make. A well-cared-for corn snake will live 15–20 years.', category: 'Species Guide — Beginner Friendly', authorName: 'Lizard.com Expert Team', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Corn Snake', href: '/species/corn-snake' }]}
      schema={schema}
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
      </>}
    >
      <div className="carloOS-article">
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
      </div>
    </ArticleLayout>
  )
}
