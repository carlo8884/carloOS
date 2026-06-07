import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: 'Saddle Fit Guide — How to Check Fit for Horse and Rider | Saddle.com',
  description: 'The 4-point fit check explained, how to identify poor fit from your horse\'s behavior and back, and when to call a professional fitter.',
  path: '/guides/saddle-fit-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com', title: 'Saddle Fit Guide',
  description: 'The 4-point check for horse and rider, explained.',
  url: 'https://saddle.com/guides/saddle-fit-guide', imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-05-28T00:00:00Z',
})

export default function SaddleFitGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: 'Saddle Fit Guide — For Horse and Rider', subtitle: 'A poorly fitting saddle is the most common cause of back pain, resistance, and behavior problems in ridden horses. A reference guide to what correct fit looks like and how to check it.', category: 'Fitting Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '12 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }]}
      schema={schema}
      relatedLinks={[
        { title: 'Guides Hub', href: '/guides', category: 'Hub' },
        { title: 'Seat Size Guide', href: '/guides/seat-size-guide', category: 'Fitting' },
        { title: 'Tree Size Estimator', href: '/tools/tree-size-estimator', category: 'Tool' },
        { title: 'Used Saddle Buying Guide', href: '/guides/used-saddle-buying-guide', category: 'Buying' },
        { title: 'Best English Saddles', href: '/reviews/best-english-saddles', category: 'Reviews' },
        { title: 'Best Western Saddles', href: '/reviews/best-western-saddles', category: 'Reviews' },
      ]}
      sidebar={<>
        <TableOfContents items={[
          { label: 'Why Fit Matters', href: '#why' },
          { label: '1. Wither Clearance', href: '#wither' },
          { label: '2. Panel Contact', href: '#panel' },
          { label: '3. Spinal Clearance', href: '#spine' },
          { label: '4. Balance & Level', href: '#balance' },
          { label: 'Signs of Poor Fit', href: '#signs' },
          { label: 'Rider Fit', href: '#rider' },
          { label: 'When to Call a Fitter', href: '#fitter' },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: 'Seat Size Guide', href: '/guides/seat-size-guide' },
          { label: 'Tree Size Estimator', href: '/tools/tree-size-estimator' },
          { label: 'Buying a Used Saddle', href: '/guides/used-saddle-buying-guide' },
          { label: 'Best English Saddles 2025', href: '/reviews/best-english-saddles' },
          { label: 'Best Western Saddles 2025', href: '/reviews/best-western-saddles' },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buying Guide" subtitle="Saddle reviews and market intelligence." source="guide-saddle-fit" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>
          Correct saddle fit comes down to a 4-point check: 2–3 fingers of wither
          clearance, even panel contact along the full bearing surface, full spinal
          channel clearance (no contact along the spinous processes), and a level
          balance point so the rider sits in the deepest part. Reassess fit annually
          and after major fitness or seasonal changes — horses change shape, and a
          poorly fitting saddle is the most overlooked cause of back pain, resistance,
          and behavior problems under saddle.
        </DropCap>

        <CalloutBox variant="tip" title="Owner tip">
          Check fit both <strong>statically and dynamically</strong>. A saddle that has adequate wither clearance with the horse standing still can still bridge the withers at trot. Have someone watch the saddle from the side as you ride at walk and trot before you commit to a fit verdict.
        </CalloutBox>

        <h2 id="why">Why Saddle Fit Is Non-Negotiable</h2>
        <p>The saddle is the interface between rider and horse — when it fits correctly, communication is clear and movement is free. When it fits poorly, every aid is distorted through a structure that is causing pain, restricting movement, or both.</p>
        <p>Poor saddle fit is the most commonly overlooked cause of behavioral problems in ridden horses. A horse that is reluctant to go forward, bucks when asked to canter, pins ears when saddled, or is stiff on one rein may simply be in pain. Before addressing behavior with training, rule out pain from saddle fit.</p>
        <p>Horses also change shape with fitness, age, and season — a saddle that fit correctly 18 months ago may no longer fit after a winter off. Annual saddle fit assessment by a qualified fitter is the standard recommendation.</p>

        <h2 id="wither">1. Wither Clearance</h2>
        <p>Place the saddle on the horse without a pad, girthed to normal working tension. Look directly down from above the pommel at the gap between the pommel arch and the withers.</p>
        <ul>
          <li><strong>Correct:</strong> 2–3 fingers of vertical clearance above the highest point of the wither, with the clearance maintained along the entire length of the wither</li>
          <li><strong>Too narrow (bridging):</strong> The pommel sits close to or on the withers — visible pressure on the side of the withers even without a rider. Causes bruising and soft tissue damage with use.</li>
          <li><strong>Too wide:</strong> Excessive clearance at the withers (4+ fingers) with the pommel dropping low. The saddle will rock and the tree points may dig into the shoulder.</li>
        </ul>
        <p>Check clearance both statically and dynamically — have someone watch the wither clearance as the horse moves at walk and trot. Saddles that have adequate clearance at rest can bridge the withers at movement in some horses with higher withers or pronounced movement.</p>

        <h2 id="panel">2. Panel Contact — The Contact Check</h2>
        <p>Slide your hand flat between the panel and the horse&apos;s back, starting at the front and working toward the rear. You should be able to move your hand but feel consistent, even resistance throughout.</p>
        <ul>
          <li><strong>Correct:</strong> Even, consistent contact across the full length of the panel on both sides. Your hand encounters resistance but can move.</li>
          <li><strong>Bridging:</strong> Easy movement under the middle of the panel (insufficient contact in the middle) with firm contact at front and rear. The panel is bridging the horse&apos;s back like a bridge — concentrating pressure at the endpoints. This is the most common panel fit problem.</li>
          <li><strong>Rock (too flat):</strong> Contact at the middle, gaps at front and rear. The panel is too straight for a horse with a more curved back.</li>
          <li><strong>Asymmetry:</strong> If one side has significantly different contact than the other, there is a fit asymmetry — possibly from uneven panel flocking or a horse with asymmetric musculature.</li>
        </ul>
        <p>This check must be done with the saddle girthed to normal working tension and on a horse standing squarely. An ungirthed saddle will not tell you the same information.</p>

        <h2 id="spine">3. Spinal Clearance — The Gullet Check</h2>
        <p>With a rider in the saddle at the normal working position, look from behind at the channel between the panels (the gullet). You should be able to see daylight through the entire length of the gullet.</p>
        <ul>
          <li><strong>Correct:</strong> A consistent channel of at least 3 fingers width visible along the full gullet length, even under rider weight.</li>
          <li><strong>Insufficient clearance:</strong> Panels pressing toward the midline under rider weight — direct spinal pressure. This is a serious problem that causes pain at the spinous processes.</li>
        </ul>
        <p>A saddle that has adequate gullet clearance without a rider may have insufficient clearance under a heavier rider — this check must be done under realistic conditions.</p>

        <h2 id="balance">4. Balance &amp; Level</h2>
        <p>With the saddle on the horse and girthed, look from the side at the saddle&apos;s position. The deepest point of the seat should be level or very slightly lower than the pommel. The cantle should be slightly higher than the pommel — never lower.</p>
        <ul>
          <li><strong>Tipped forward (cantle-high):</strong> Saddle is sitting too low at the pommel or too high at the cantle. Throws the rider behind the motion and drives seat bones into the horse&apos;s back.</li>
          <li><strong>Tipped back (cantle-low):</strong> Pommel is higher than it should be relative to cantle. Throws the rider forward onto the fork and increases wither pressure.</li>
        </ul>

        <h2 id="signs">Signs Your Saddle Doesn&apos;t Fit</h2>
        <p><strong>From the horse:</strong> White hairs appearing under the saddle area (pressure damage to hair follicles), muscle atrophy behind the shoulder or along the back, reluctance to stand still for saddling, pinned ears when girthed, cold-backed behavior (dipping back as rider mounts), reluctance to go forward, uneven gaits, stiffness on one rein, bucking or strong objection at canter, sensitivity to touch on back.</p>
        <p><strong>From the saddle after use:</strong> Uneven sweat patterns (dry patches indicate pressure points — no sweat because blood flow is restricted), uneven stuffing wear in panels, girth sores from saddle moving during work.</p>

        <h2 id="rider">Rider Fit — The Other Half of the Equation</h2>
        <p>A saddle can fit the horse perfectly and not fit the rider — or vice versa. Both must be addressed. For rider fit, the critical measurements are: seat size (see our <a href="/guides/seat-size-guide">seat size guide</a>), flap length (should allow knee to sit slightly behind the flap seam in the correct position), and tree width effect on rider position (a tree that is too narrow or too wide changes the rider&apos;s leg position regardless of rider size).</p>
        <p>For a directional starting point on tree width before booking a professional fitter, use the <a href="/tools/tree-size-estimator" className="text-brand-primary no-underline hover:underline">tree-size estimator</a> — wither-shape inputs map to a narrow/medium/wide tree band. It is a starting point, not a substitute for an in-person fitter.</p>
        <p>A rider sitting in a saddle that is too small is perched on the cantle with limited freedom of movement. A rider in a saddle that is too large has no stability and cannot communicate effectively. Both are significant problems.</p>

        <h2 id="fitter">When to Call a Professional Fitter</h2>
        <ul>
          <li>Any time you purchase a new saddle — before it is used</li>
          <li>Annually, or after any significant change in the horse&apos;s condition, fitness, or topline</li>
          <li>When behavioral or performance problems develop that cannot be explained by training or health factors</li>
          <li>After a horse returns from an injury or long-term rest</li>
          <li>When a young horse is growing rapidly (topline changes significantly in young horses)</li>
        </ul>
        <p>Look for a Certified Saddle Fitter (CSF, from the <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Society of Master Saddlers</a>) or a qualified independent fitter with verifiable credentials. Fitters employed by specific brands may have genuine expertise, but their conflict of interest in recommending their brand should be acknowledged.</p>
      </div>
    </ArticleLayout>
  )
}
