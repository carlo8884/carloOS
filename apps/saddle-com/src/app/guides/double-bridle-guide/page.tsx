import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Double Bridle Guide — Bradoon, Weymouth, Fit | Saddle.com",
  description: "How the double bridle works: bradoon and Weymouth (curb) bits, curb chain, rein handling, when it is appropriate, and correct fit in dressage.",
  path: "/guides/double-bridle-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Double Bridle Guide",
  description: "The double bridle explained — bradoon and Weymouth bits, curb chain, four reins, and correct fit for upper-level dressage.",
  url: "https://saddle.com/guides/double-bridle-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function DoubleBridleGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "The Double Bridle — Two Bits, Four Reins", subtitle: "The double bridle pairs a snaffle and a curb for refinement at the top of dressage. It demands an educated hand and a horse already established on the bit.", category: "Tack Reference", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Double Bridle Guide", href: "/guides/double-bridle-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "What a Double Bridle Is", href: "#what" },
          { label: "Bradoon & Weymouth", href: "#bits" },
          { label: "The Curb Chain", href: "#chain" },
          { label: "Holding Four Reins", href: "#reins" },
          { label: "When It Is Appropriate", href: "#when" },
          { label: "Fitting", href: "#fit" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Bit Selection Guide", href: "/guides/bit-selection-guide" },
          { label: "Horse Bridle Guide", href: "/guides/horse-bridle-guide" },
          { label: "Dressage Basics Guide", href: "/guides/dressage-basics-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-double-bridle-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>A double bridle carries two bits — a small snaffle (the bradoon) and a curb (the Weymouth) — on two sets of cheekpieces, controlled with four reins. It is the bridle of upper-level dressage, prized for the refinement it allows a skilled rider on a confirmed horse, and easily misused by an unready hand on an unready horse.</DropCap>

        <CalloutBox variant="tip" title="A double is for refinement, not control">
          The double bridle does not fix a horse that leans, pulls, or is not yet on the bit — it amplifies whatever is there, good or bad. It belongs on a horse already established in a snaffle and in the hands of a rider with an independent seat. Reaching for a double to gain control is the classic mistake.
        </CalloutBox>

        <h2 id="what">What a Double Bridle Is</h2>
        <p>Where the snaffle and bitless bridles in the <a href="/guides/horse-bridle-guide">bridle guide</a> use one bit (or none), the double uses two: a thin snaffle and a curb, hung on separate cheekpieces from one headstall. The principle is division of labor — the bradoon raises and positions, the curb refines and asks for flexion at the poll — giving an educated rider a more nuanced set of aids than a single bit allows.</p>

        <h2 id="bits">Bradoon and Weymouth</h2>
        <p>The <strong>bradoon</strong> is a small-ringed snaffle, thinner than an ordinary snaffle so two bits fit comfortably in the mouth. It acts like a snaffle, with direct contact on the corners and bars. The <strong>Weymouth</strong> is the curb: a fixed mouthpiece with shanks (cheeks) below the mouthpiece that create leverage. Pressure on the curb rein rotates the shanks, applying poll pressure via the bridle and chin-groove pressure via the curb chain — the leverage action described in the <a href="/guides/bit-selection-guide">bit selection guide</a>. Longer shanks increase leverage.</p>

        <h2 id="chain">The Curb Chain</h2>
        <p>The curb chain runs through the chin groove and is what gives the Weymouth its action: as the shanks rotate, the chain tightens against the chin groove. Correct adjustment is critical — the chain should engage when the curb shank rotates to roughly 45 degrees, lying flat and twisted to sit smoothly. Too tight and the curb acts constantly and harshly; too loose and the shank over-rotates before the chain engages.</p>

        <h2 id="reins">Holding Four Reins</h2>
        <p>Four reins require an organized hand. The common arrangement places the bradoon rein outside the little finger and the curb rein between the little and ring fingers, or both reins managed so the bradoon carries most of the contact and the curb is used lightly and intermittently. The bradoon does the bulk of the work; the curb is a refinement applied with feel, not a constant pull.</p>

        <h2 id="when">When It Is Appropriate</h2>
        <ul>
          <li>The horse is confirmed and soft in a snaffle, on the bit, and accepting contact.</li>
          <li>The rider has an independent seat and educated, quiet hands.</li>
          <li>The level of work calls for it — doubles appear at the upper levels described in the <a href="/guides/dressage-basics-guide">dressage basics guide</a> and are required in some FEI tests.</li>
        </ul>

        <h2 id="fit">Fitting the Double</h2>
        <p>The bradoon sits slightly above where a single snaffle would, creating about one wrinkle at the lip corner; the Weymouth sits just below it, lower in the mouth, with little to no wrinkle. Both must be the correct width — narrow enough that two bits share the mouth without crowding, but not pinching. The noseband must allow room for two bits and the curb action, and the curb chain adjusted as above. Because fit here is exacting, confirm it with an experienced eye and follow the general principles in the <a href="/guides/bridle-fit-guide">bridle fit guide</a>.</p>

        <CalloutBox variant="note" title="Sources">
          FEI Dressage Rules and tack regulations. British Dressage and USEF dressage rulebooks. British Horse Society (BHS) bitting and double-bridle references. International Society for Equitation Science (ISES) on curb action and noseband fit.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
