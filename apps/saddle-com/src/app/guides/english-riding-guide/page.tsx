import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'English Riding Guide — Disciplines, Equipment | Saddle.com', description: 'Introduction to English riding. Disciplines compared (dressage, hunter/jumper, eventing), essential equipment.', path: '/guides/english-riding-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'English Riding Guide', description: 'English riding disciplines, equipment, and position fundamentals.', url: 'https://saddle.com/guides/english-riding-guide', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function EnglishRidingGuidePage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'English Riding Guide', subtitle: '"English riding" encompasses a broad family of equestrian disciplines — from the precise geometry of dressage to the athleticism of show jumping to the three-phase demands of eventing. What they share: a close-contact saddle, two-handed rein contact, and a riding position built around balance, following the horse\'s movement.', category: 'Equestrian Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'English Riding Guide', href: '/guides/english-riding-guide' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides', category: 'Hub' },
        { title: 'Dressage Basics Guide', href: '/guides/dressage-basics-guide', category: 'Disciplines' },
        { title: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide', category: 'Fitting' },
        { title: 'Best English Saddles', href: '/reviews/best-english-saddles', category: 'Reviews' },
        { title: 'Best Riding Helmets', href: '/reviews/best-riding-helmets', category: 'Reviews' },
        { title: 'Best Riding Boots', href: '/reviews/best-riding-boots', category: 'Reviews' },
        { title: 'Best Riding Gloves', href: '/reviews/best-riding-gloves', category: 'Reviews' },
      ]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Essential Equipment</div>
          {[['Helmet', 'ASTM/SEI certified — required'], ['Boots', 'Tall or paddock + half-chaps'], ['Breeches', 'English-specific (knee patch or full seat)'], ['Gloves', 'Riding gloves recommended'], ['Body protector', 'Jumping disciplines — BETA 3 minimum'], ['Saddle', 'All-purpose, dressage, or jump saddle']].map(([e, d]) => (
            <div key={e} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{e}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Best English Saddles', href: '/reviews/best-english-saddles' }, { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }, { label: 'Best Riding Helmets', href: '/reviews/best-riding-helmets' }, { label: 'Best Riding Boots', href: '/reviews/best-riding-boots' }, { label: 'Best Riding Gloves', href: '/reviews/best-riding-gloves' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert fitting and care guides." source="guides-english-riding" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>English Disciplines — Which One?</h2>
        <p><strong>Dressage:</strong> The art of riding — developing the horse's natural movement and responsiveness through progressive training. At its base levels, dressage is the foundation of all English riding — correct, harmonious, connected riding. At upper levels, it is one of the most technically demanding equestrian sports. Dressage horses perform walk, trot, and canter movements with precision and self-carriage. The rider appears still while communicating through invisible aids. Competitions are judged on movement quality, submission, and harmony.</p>
        <p><strong>Hunter/Jumper:</strong> The most popular English discipline in the US. Hunters are judged on the horse's movement, manners, and jumping style over a course of natural-looking fences. Jumpers are judged only on whether fences are cleared within the time allowed — the horse and rider's style is irrelevant, only the rail count and time matter. Hunters require a consistent, rhythmical, ground-covering canter and a horse that jumps in a quiet, round arc. Jumpers reward speed and accuracy.</p>
        <p><strong>Eventing:</strong> Three disciplines combined — dressage, cross-country jumping, and stadium jumping, performed over one to three days depending on level. Cross-country involves galloping over solid, natural terrain obstacles that do not fall if contacted — significant risk element. Eventing produces the most complete horses and riders in the English disciplines. Requires fitness, boldness, and technical skill from both horse and rider.</p>
        <p><strong>Equitation:</strong> The rider is judged, not the horse. Hunter seat equitation evaluates position, effectiveness, and style over a jumping course. The gold standard equitation classes (Maclay, USEF Medal, ASPCA Maclay) are among the most competitive junior classes in the country.</p>

        <h2>Position Fundamentals</h2>
        <p>English riding position builds on a common foundation regardless of discipline. The straight line from ear to shoulder to hip to heel: the rider's ear, shoulder, hip, and heel should form a vertical line when viewed from the side. This balanced position allows the rider to follow the horse's movement without gripping for security. Deviations from this line — chair seat (leg too far forward), fork seat (leg too far back), tipping forward from the hip — all compromise balance and communication.</p>
        <p><strong>Heels down:</strong> The heel pressing down lengthens the leg and stabilizes the lower leg position. More importantly, a flexible ankle that absorbs motion prevents the leg from gripping and blocking — tight, fixed legs create blocked, tense horses. "Heels down" as a mental cue often produces the relaxed, flexible ankle that allows proper weight distribution through the stirrup.</p>
        <p><strong>Soft contact:</strong> English riding maintains consistent contact with the horse's mouth through the reins — not pulling, but a conversation. The rider's arm follows the horse's head movement at walk and canter (where the head nods), maintaining consistent weight in the rein. At trot, the head is still; the elbow absorbs any variation. Rein contact should feel like holding a bird — firm enough not to let it fly away, gentle enough not to crush it.</p>

        <h2>Learning to Post the Trot</h2>
        <p>The posting trot (rising trot) is the first coordinated skill English riders develop. The rider rises from the saddle on one diagonal pair of legs (inside hind + outside fore) and sits as the other diagonal moves. Posting reduces concussion on horse and rider during the trot. The "correct diagonal" — rising as the outside foreleg advances — positions the rider's weight to encourage the horse's balance and throughness. Initially, riders focus on the rhythm; correctness of diagonal follows.</p>
        <p>Two-point position (half-seat) — standing in the stirrups with hips angled toward the horse's neck — is used in jumping disciplines for the approach and landing phases of jumps and for galloping. It allows the rider's weight off the horse's back while maintaining balance over the center of gravity. Developing a secure two-point is foundational to jumping work at any level.</p>

        <h2>Choosing the Right Saddle</h2>
        <p>English saddles are discipline-specific. An all-purpose saddle (moderate forward flap, moderate knee roll) is the appropriate choice for beginners and riders who do both flat work and low-level jumping. A dressage saddle has a straighter flap, deeper seat, and longer billets — designed for the long-leg dressage position. A jump saddle has a more forward flap, prominent knee roll, and shallower seat — designed for the shortened stirrup and two-point position of jumping. Most recreational English riders, lesson programs, and beginning competitors use an all-purpose saddle successfully across disciplines up to moderate levels.</p>
      </div>
    </ArticleLayout>
  )
}
