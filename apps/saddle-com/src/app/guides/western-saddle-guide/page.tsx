import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Western Saddle Guide — Tree Fit, Disciplines | Saddle.com', description: 'Western saddle guide. How to fit a western saddle to your horse, the differences between roping, barrel, cutting, and trail saddles, and cinch selection.', path: '/guides/western-saddle-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Western Saddle Guide', description: 'Tree fit, discipline selection, and cinch guide for western saddles.', url: 'https://saddle.com/guides/western-saddle-guide', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function WesternSaddleGuidePage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Western Saddle Guide', subtitle: 'Western saddles are built for specific disciplines — a barrel saddle designed for agility and tight turns is a different tool from a roping saddle built for stopping power and strength, which is different from a comfortable trail saddle designed for 8-hour rides. Choosing the right western saddle starts with understanding what you\'re asking it to do.', category: 'Equipment Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Western Saddle Guide', href: '/guides/western-saddle-guide' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">By Discipline</div>
          {[['Trail / pleasure', 'Lightweight, comfortable, full skirt'], ['Barrel racing', 'Close contact, built-up seat, tall horn'], ['Roping', 'Heavy duty, 14"+ horn, reinforced rigging'], ['Cutting', 'Flat seat, minimal horn, deep seat'], ['Reining', 'Deep seat, small horn, free movement'], ['Ranch work', 'Durable, versatile, comfort for long days']].map(([d, r]) => (
            <div key={d} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{d}</div>
              <div className="text-2xs text-brand-text-light">{r}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }, { label: 'Best Western Saddles', href: '/reviews/best-western-saddles' }, { label: 'Seat Size Guide', href: '/guides/seat-size-guide' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert reviews and fitting guides." source="guides-western" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Western Saddle Tree Fit — The Foundation</h2>
        <p>Like English saddles, the western saddle's fit to the horse begins with the tree. The gullet (the channel running the length of the saddle's underside) must clear the horse's spine by at least 2–3 fingers when the saddle is cinched. The bars (the panels of the tree that contact the horse's back) must lay flat along the horse's back without bridging (contacting only at front and back while floating in the middle) or rocking (contacting only in the middle while lifting at front and back).</p>
        <p>Western saddle tree widths are measured differently than English: Narrow (fits high-withered, mutton-withered, or very lean horses), Regular (7" gullet — fits most Quarter Horses and similar), Wide (8" gullet — wider-backed horses, heavy horses), and Extra Wide (fits wide-backed drafts and draft crosses). The gullet width measurement refers to the width at the fork/pommel, not the full gullet width — these terms are not standardized across manufacturers, adding complexity to selection.</p>

        <h2>Discipline-Specific Features</h2>
        <p><strong>Trail saddles:</strong> The largest western saddle category by sales volume. Priority: comfort for rider and horse over multiple hours. Features: padded or seat-jockey leather seats, lighter weight (some synthetic trail saddles under 20 lbs), larger tooled skirts for protection, and comfortable rigging positions. Look for padded fenders that reduce knee strain on long rides.</p>
        <p><strong>Barrel saddles:</strong> Built for the explosive speed and tight turns of barrel racing. Features: close contact design (minimal leather between rider's leg and horse), high cantle and built-up seat to secure the rider through turns, tall strong horn for quick checks, lightweight construction for speed, and forward-set rigging to accommodate the horse's movement during runs. Common brands: Circle Y, Martin Saddlery, Cactus Saddlery.</p>
        <p><strong>Roping saddles:</strong> Built to hold. When a rope is dallied (wrapped) around the horn and a 1,200-lb steer hits the end of it, enormous force transfers through the saddle to the horse. Roping saddles feature: a thick, reinforced horn built to withstand dally forces, heavy-duty tree construction, double rigging to distribute the load, and deep seat to help the rider absorb the shock. Much heavier than trail saddles — 40–60 lbs. Not appropriate for casual riding.</p>
        <p><strong>Cutting saddles:</strong> Cutting (working cattle) requires the rider to sit still and balanced while the horse makes rapid lateral movements. Features: flat seat (no built-up thigh rolls — the rider needs to move freely), minimal horn (small and low — the rider doesn't need it), and a free-swinging fender that allows the rider to feel every movement. The seat is deep in the back with a relatively flat front — opposite of barrel.</p>
        <p><strong>Reining saddles:</strong> Reining (precision maneuvers including spins and sliding stops) needs close contact and freedom. Features: deep seat for security, small low horn, smooth leather seat and fenders for minimal drag, and rigging positioned to avoid interfering with the horse's shoulders during maneuvers.</p>

        <h2>Rigging Position</h2>
        <p>Western saddle rigging position — where the cinch rings are positioned relative to the saddle — affects how the cinch sits on the horse. Full rigging (ring directly below the horn) works for most horses. 7/8 rigging (ring slightly back) is common for barrel and reining. 3/4 rigging positions the cinch further back — used for horses with mutton withers or forward-girthing conformation. In-skirt rigging (rings sewn into the skirt rather than hanging below) creates a cleaner profile and is popular in barrel and trail saddles.</p>

        <h2>Cinch Selection</h2>
        <p>Western cinches are measured in inches (34", 36", 38" — the most common adult horse sizes). Measure by placing a soft measuring tape from ring to ring along the horse's girth line and subtracting 16" (to account for the billets and adjusters). Materials: mohair (natural fiber — traditional, comfortable, good grip, requires care), neoprene (easy care, good grip, can cause sweating and galling in some horses), and cord (woven cotton or synthetic — good airflow, traditional). Cinches with rollers at the center allow the hardware to move and reduce friction. Avoid neoprene for horses that sweat heavily or develop girth galls.</p>
      </div>
    </ArticleLayout>
  )
}
