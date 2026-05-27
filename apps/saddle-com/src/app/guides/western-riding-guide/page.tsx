import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Western Riding Guide — Disciplines | Saddle.com', description: 'Introduction to western riding. Reining, cutting, barrel racing, ranch, and trail disciplines compared.', path: '/guides/western-riding-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Western Riding Guide', description: 'Western disciplines, neck reining, equipment, and position fundamentals.', url: 'https://saddle.com/guides/western-riding-guide', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function WesternRidingGuidePage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Western Riding Guide', subtitle: 'Western riding evolved from the working practices of cattle ranchers in the American West — all of its equipment and techniques reflect the practical demands of managing cattle over long days on diverse terrain. From the deep-seated western saddle (designed for security when roping) to the one-handed neck rein (leaving the other hand free for work), western riding is functionally elegant.', category: 'Equestrian Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Western Riding Guide', href: '/guides/western-riding-guide' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Essential Equipment</div>
          {[['Western saddle', 'Deep seat, high cantle, horn'], ['Pad', 'Thick felt or wool — absorbs impact'], ['Bridle', 'Split reins standard · Romal for show'], ['Bit', 'Curb bit for neck rein · Snaffle for training'], ['Boots', 'Cowboy boots — heel keeps foot in stirrup'], ['Hat/helmet', 'Western hat or ASTM helmet (safety)']].map(([e, d]) => (
            <div key={e} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{e}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Best Western Saddles', href: '/reviews/best-western-saddles' }, { label: 'Western Saddle Guide', href: '/guides/western-saddle-guide' }, { label: 'Bit Selection Guide', href: '/guides/bit-selection-guide' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert care and fitting guides." source="guides-western-riding" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Western Disciplines — The Spectrum</h2>
        <p><strong>Reining:</strong> Often called "the western dressage" — a precision pattern sport performed entirely at the lope (canter) and gallop. Patterns include sliding stops (horse skids to a stop on its hind feet with dramatic momentum), 360-degree spins (horse pivots on the hindquarters at high speed), and flying lead changes. The degree of collection, athleticism, and partnership required makes reining one of the technically demanding western disciplines. Quarter Horses dominate.</p>
        <p><strong>Cutting:</strong> Horse and rider isolate a single cow from a herd, and the horse must prevent the cow from returning — entirely on its own, without rein contact from the rider once the cow is selected. The horse reads the cow's movements and mirrors them athletically. The rider drops the reins on the horse's neck (the "cow work" phase) and simply maintains balance while the horse works. One of the most impressive athletic displays in all of equestrian sport.</p>
        <p><strong>Barrel racing:</strong> Timed speed event — horse and rider complete a cloverleaf pattern around three barrels, minimum knock penalties. Quarter Horses and Paints dominate. One of the fastest equestrian sports — times in the 13-17 second range for top horses. Athleticism of both horse and rider is extreme.</p>
        <p><strong>Ranch riding:</strong> Tests practical horsemanship skills a working ranch horse would need — walk, jog, lope transitions, extended trot, stops, backing, turns. Judged on horse's manners and rider's effectiveness. Growing AQHA discipline that rewards functional horsemanship over specialized performance training.</p>
        <p><strong>Trail/pleasure:</strong> The most widely participated western discipline — trail classes (simulated trail obstacles: gates, bridges, pole weaving) and western pleasure (flat class rewarding slow, rhythmical gaits and quiet manners). The entry point for most western riders.</p>

        <h2>Neck Reining — The Defining Skill</h2>
        <p>English riding uses two reins held separately with direct (plow) rein contact — pressure on the left rein turns left. Western riding's neck rein technique uses one hand: laying the rein against the horse's neck on the side away from the desired direction turns the horse. Left turn: right rein lays against the right side of the neck; the horse has been trained to turn away from rein pressure. This frees the other hand for work (rope, gate latch, anything a working cowboy needs).</p>
        <p>Neck reining is taught over direct rein foundation — young horses are first ridden with two hands using direct rein contact (usually in a snaffle bit), then progressively transitioned to neck rein as the training advances. A horse that neck reins well has developed softness, balance, and responsiveness that makes the subtle neck rein pressure sufficient direction. Forcing neck reining on a horse that does not have the direct rein foundation produces mechanical, resistant responses.</p>

        <h2>Position in the Western Saddle</h2>
        <p>Western riding position shares the fundamental balance principles of all equestrian disciplines: ear-shoulder-hip-heel vertical alignment, soft and following seat, quiet hands. The western saddle's deeper seat and higher cantle provide more support than an English saddle — the rider sits "in" the saddle rather than "on" it. This security is valuable for the physical demands of working cattle, but it can mask seat deficiencies that would be immediately apparent in an English saddle.</p>
        <p>The western jog (equivalent to the English trot) is intended to be ridden sitting — the motion is absorbed through a relaxed, following lower back. The extended trot or "trot out" uses a light rising motion. The lope (equivalent to canter) is ridden sitting with the seat following the three-beat motion — a rocking-chair rhythm that skilled western riders make appear completely effortless.</p>
      </div>
    </ArticleLayout>
  )
}
