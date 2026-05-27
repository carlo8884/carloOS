import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'saddle-com', title: 'Bit Selection Guide — Snaffle, Pelham | Saddle.com', description: 'How to choose the right bit. Snaffle vs curb action, mouthpiece thickness, ring type, and when to consult an equine dentist before changing bits.', path: '/guides/bit-selection-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'saddle-com', title: 'Bit Selection Guide', description: 'Snaffle, pelham, and double bridle bit selection for English riding.', url: 'https://saddle.com/guides/bit-selection-guide', imageUrl: '', authorName: 'Saddle.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BitSelectionGuidePage() {
  return (
    <ArticleLayout siteId="saddle-com"
      hero={{ title: 'Bit Selection Guide', subtitle: 'The right bit communicates clearly with the horse. The wrong bit causes pain, resistance, and training problems that are often misidentified as behavioral issues. Bit selection starts with horse anatomy and goes from there.', category: 'Equipment Guide', authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'May 2025', readTime: '10 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides', href: '/guides/saddle-fit-guide' }, { name: 'Bit Selection', href: '/guides/bit-selection-guide' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Bit Sizing</div>
          <p className="text-xs text-brand-text-mid leading-relaxed m-0 mb-2">Bit width: horse's mouth width plus 1/4 inch on each side. Too narrow pinches. Too wide slides side to side. Measure with a bit gauge or piece of dowel.</p>
          <p className="text-xs text-brand-text-mid leading-relaxed m-0">Mouthpiece thickness: thicker = gentler (pressure distributed over larger surface). Thinner = more precise but more intense. Start with 16-18mm for most horses.</p>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Horse Bridle Guide', href: '/guides/horse-bridle-guide' }, { label: 'Saddle Fit Guide', href: '/guides/saddle-fit-guide' }, { label: 'Best English Saddles', href: '/reviews/best-english-saddles' }]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Equipment Guides" subtitle="Expert reviews and fitting guides." source="guides-bit-selection" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Start With the Horse's Mouth</h2>
        <p>Before selecting a bit style, establish the anatomical reality of the individual horse's mouth. Key factors: palate height (high palate allows more bit room; low palate is easily contacted by mouthpiece), tongue thickness (fleshy thick tongue leaves less space; flat thin tongue has more room), jaw width (determines bit width and ring spacing), and dental condition. Have an equine dentist perform a dental examination before making bit changes — sharp points, wolf teeth, and soft tissue issues cause bitting problems that no bit change will fix.</p>

        <h2>Snaffle Action — Direct and Mild</h2>
        <p>A snaffle acts directly on the corners of the mouth, bars, and tongue with a 1:1 ratio between rein pressure and mouth pressure. There is no poll pressure and no curb chain. This makes snaffles the most straightforward and most appropriate starting bit for horses in early training and for most recreational riders. The diversity within snaffles is enormous:</p>
        <ul>
          <li><strong>Loose ring snaffle:</strong> The ring slides through the mouthpiece, allowing the bit to move freely. Self-correcting — horse feels the release when giving to the bit. Good for horses learning contact. The movement can pinch lip skin — use rubber bit guards if this occurs.</li>
          <li><strong>Eggbutt snaffle:</strong> Fixed junction between ring and mouthpiece. More stable in the mouth — less movement. Good for horses that are fussy about bit movement. Cannot pinch lips.</li>
          <li><strong>Full cheek snaffle:</strong> Long cheek pieces stabilize the bit laterally — excellent for young horses and steering. The cheeks prevent the bit from sliding through the mouth sideways.</li>
          <li><strong>D-ring snaffle:</strong> Flat side prevents sliding, slightly more lateral control than eggbutt. Good all-purpose ring type.</li>
        </ul>

        <h2>Curb Action — Leverage and Poll Pressure</h2>
        <p>Curb bits (pelhams, weymouths in double bridles) act through leverage — the shank multiplies rein pressure and creates poll pressure via the curb chain. A pelham in a 3-inch shank with a 5-inch curb chain has a leverage ratio of approximately 3:1. More precise communication but requires more educated hands. Not appropriate for beginning riders or horses in early training. The curb chain must be adjusted correctly — two fingers flat should fit between chain and jaw — too tight causes pain, too loose allows excessive shank rotation.</p>

        <h2>Mouthpiece Types</h2>
        <p><strong>Straight bar:</strong> Even pressure across tongue and bars. Stiff, more contact-sensitive. Not for horses that lean or are above the bit.</p>
        <p><strong>Single-jointed:</strong> The nutcracker action creates some tongue pressure and a narrowing effect that some horses find uncomfortable. The most common snaffle mouthpiece. Not ideal for horses with low palates.</p>
        <p><strong>Double-jointed (French link, Dr. Bristol):</strong> The central plate reduces nutcracker action and lies more comfortably on the tongue. Better for horses that resist single-jointed snaffles. The French link plate lies flat; the Dr. Bristol is angled, creating more pressure on the bars — a slightly stronger action.</p>
        <p><strong>Mullen mouth:</strong> Slight curve, no joint. Even, consistent pressure. Very mild. Good for sensitive horses and horses with low palates.</p>

        <h2>When a Bit Change Won't Help</h2>
        <p>If the horse resists contact, tosses its head, or is consistently above or behind the bit, rule out these causes before changing bits: dental issues (most common), saddle fit pain (transmitted to the mouth through tension), rider hands (unsteady contact causes horses to evade), and training gaps. A quieter, softer bit does not fix a training or pain problem — it delays addressing the real cause.</p>
      </div>
    </ArticleLayout>
  )
}
