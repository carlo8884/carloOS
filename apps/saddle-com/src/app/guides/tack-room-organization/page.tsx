import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Tack Room Organization — Storage, Humidity | Saddle.com', description: 'How to organize a tack room for efficiency and leather longevity. Saddle racks, bridle hooks, humidity control.', path: '/guides/tack-room-organization', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Tack Room Organization Guide', description: 'Saddle storage, bridle hooks, humidity control, and leather care in the tack room.', url: 'https://saddle.com/guides/tack-room-organization', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function TackRoomPage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Tack Room Organization', subtitle: 'A well-organized tack room is not just about aesthetics — it directly affects the longevity of leather equipment that represents thousands of dollars of investment, the efficiency of your barn routine, and the ease of identifying when something needs maintenance or replacement before it fails during a ride.', category: 'Equestrian Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Tack Room Organization', href: '/guides/tack-room-organization' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Checklist</div>
          {['Saddle rack for each saddle — not floor storage', 'Bridle rack with banana hook shape', 'Humidity between 40-60%', 'No direct sunlight on leather', 'Ventilation — no damp stagnant air', 'Dedicated cleaning station', 'First aid kit visible and accessible'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2">
              <span className="text-green-600 font-bold">✓</span>{s}
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Leather Care Guide', href: '/guides/leather-care-guide' }, { label: 'Tack Cleaning Schedule', href: '/guides/tack-cleaning-schedule' }, { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert care and fitting guides." source="guides-tack-room" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Saddle Storage — The Foundation</h2>
        <p>Saddles should never be stored on the floor, on a flat surface, or stacked. Incorrect storage deforms the tree (the rigid internal structure), warps the panels, and causes irreversible shape distortion that affects both saddle fit and rider position. Proper storage: a wall-mounted saddle rack or freestanding rack that supports the saddle's pommel and cantle in the same orientation the saddle sits on the horse — slightly elevated at the front, panels supported evenly on both sides.</p>
        <p>Commercial saddle racks are available in fixed and folding versions. Folding racks (swing-out from the wall) maximize space efficiency in tight tack rooms. Padded racks (covered in carpet or foam) protect the saddle's underside from pressure marks. Each saddle needs its own dedicated rack — saddles stacked or sharing a rack develop permanent indentations at the contact points. Budget one rack per saddle and build around that requirement.</p>

        <h2>Bridle Storage</h2>
        <p>Bridles must be stored on appropriately shaped hooks to maintain the shape of the headstall and prevent cracking at folds. A straight hook (like a nail) folds the cheek pieces at sharp angles that crack the leather over time. The correct solution: a curved or banana-shaped bridle rack that supports the crown piece in a gentle arc, allowing the cheek pieces to hang straight without sharp bends. Most commercial bridle racks have this shape.</p>
        <p>Reins should be looped and hung — never coiled tightly, which creates permanent curl. Hang the browband and noseband in their natural resting position. Bits should be removed, cleaned, and stored separately after each use — leaving the bit in the bridle creates pressure folds at the attachment points that eventually crack the leather. A bit hook or small hook next to the bridle rack keeps bit and bridle together while allowing proper drying of both.</p>

        <h2>Humidity and Climate Control</h2>
        <p>Leather's worst enemies in the tack room are humidity extremes. Too dry (below 40% relative humidity): leather desiccates, becomes stiff, and eventually cracks — particularly at the billet area and stirrup leather fold points where flex is repeated. Too humid (above 70%): mold grows on leather surfaces (especially inside the saddle panels and in any area with reduced airflow), stitching deteriorates, and billets become soft and potentially weak.</p>
        <p>The ideal tack room humidity range is 40–60%. In humid climates: a small dehumidifier running continuously maintains this range. In dry climates or heated barns in winter: a humidifier or damp-proofing of stored leather with quality conditioner (Leather CPR, Effax, Passier Lederbalsam) more frequently. A hygrometer ($10–20) provides accurate humidity readings — worth having in every tack room.</p>
        <p>Temperature: avoid extremes in both directions. Freezing temperatures make leather brittle. Excessive heat (120°F+ in a closed trailer tack storage area in summer sun) dries and damages leather rapidly. The most dangerous scenario: a horse trailer tack compartment in summer sun in a southern state — temperature can reach 150°F+, which will ruin conditioner and desiccate leather in hours.</p>

        <h2>Organization Systems That Work</h2>
        <p>The most functional tack room organizations follow a zone-based logic: equipment used together is stored together. Zone 1 (daily use): your primary riding saddle on its rack, primary bridle on its hook, girth hanging from the saddle's billets (or on a nearby hook), brushes and grooming kit. Zone 2 (regular use): additional saddles and bridles, blankets on racks or blanket bars, leg boots and wraps in labeled bins or cubbies. Zone 3 (seasonal or occasional): show equipment, backup gear, first aid supplies.</p>
        <p>Labeling: in a shared barn, clear labeling prevents equipment from being borrowed or confused. Label bins, hooks, and racks with horse or owner names. Use consistent color-coding if multiple horses share a tack room — one color per horse for all associated equipment.</p>

        <h2>The Cleaning Station</h2>
        <p>Build a dedicated cleaning area into the tack room design: a saddle rack at a comfortable working height (not floor-mounted), a bucket hook or freestanding bucket holder, a shelf for cleaning supplies at arm's reach. Required supplies always present: good saddle soap (Effax, Bickmore), leather conditioner (separate from soap — conditioning after cleaning, not during), a small bucket, natural sponges, clean cloths. Cleaning station at saddle height eliminates the back strain of cleaning from a low rack or the floor — a small ergonomic consideration that matters over years of regular cleaning.</p>
      </div>
    </ArticleLayout>
  )
}
