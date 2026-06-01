import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Bridle Types — Snaffle, Double, Western, and Bitless",
  description:
    "Reference guide to bridle types: the parts of a bridle, English snaffle and double bridles, western headstalls, bitless options, fit, and noseband basics.",
  path: '/tack/bridle-types',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Horse Bridle Types — Snaffle, Double, Western, and Bitless",
  description:
    "Reference guide to bridle types: the parts of a bridle, English snaffle and double bridles, western headstalls, bitless options, fit, and noseband basics.",
  url: 'https://horses.com/tack/bridle-types',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What is a double bridle used for?",
    answer:
      "A double bridle carries two bits -- a small snaffle (bradoon) and a curb -- on two pairs of reins, allowing very refined communication. It is used in upper-level dressage and some showing, and it demands an educated, independent rider hand. Lower-level riders use a single snaffle bridle, which is required at the lower dressage levels.",
    answerText:
      "It carries a snaffle and a curb on two reins for refined communication in upper-level dressage and showing, and demands an educated hand. Lower levels use a single snaffle bridle.",
  },
  {
    question: "Are bitless bridles gentler than bitted ones?",
    answer:
      "Not automatically. Bitless bridles apply pressure to the nose, jaw, and poll instead of the mouth, and some -- like the mechanical hackamore with its leverage shanks -- can be quite strong. As with bits, the kindness depends on the design, the fit, and above all the rider's hands. Competition eligibility for bitless also varies by discipline.",
    answerText:
      "Not automatically -- they pressure the nose, jaw, and poll, and some (like mechanical hackamores) can be strong. Kindness depends on design, fit, and hands, as with bits.",
  },
  {
    question: "How tight should a noseband be?",
    answer:
      "A noseband should be fitted loosely enough to allow the horse to chew and move its jaw comfortably -- research and many rulebooks now require room for at least a couple of fingers under the band. Over-tightened nosebands are a welfare concern, causing discomfort and restricting natural jaw movement, and should be avoided.",
    answerText:
      "Loosely enough to allow chewing and jaw movement -- many rules now require room for a couple of fingers under it. Over-tight nosebands are a welfare concern to avoid.",
  },
]

export default function BridleTypesPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        hero={{
          title: "Horse Bridle Types",
          subtitle:
            "The bridle holds the bit (or, in bitless designs, applies pressure directly) and carries the reins through which the rider communicates. Beneath the variety of English, western, and bitless styles lies a common set of parts and a common purpose. Understanding the types and how they fit helps an owner choose appropriately for the horse and discipline. This is reference material to inform choices alongside a qualified instructor.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "9 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Bridle Types", href: '/tack/bridle-types' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "Parts of a Bridle", href: "#parts" },
            { label: "English Bridles", href: "#english" },
            { label: "Western Headstalls", href: "#western" },
            { label: "Bitless Bridles", href: "#bitless" },
            { label: "Nosebands", href: "#nosebands" },
            { label: "Fit", href: "#fit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Bits Explained", href: "/tack/bits-guide" },
              { label: "Dressage", href: "/disciplines/dressage" },
              { label: "Trail Riding", href: "/disciplines/trail-riding" },
              { label: "Saddle Fit Basics", href: "/guides/saddle-fit-basics" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-bridle"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="parts">Parts of a Bridle</h2>
          <ul>
            <li><strong>Headpiece (crownpiece)</strong> over the poll, from which the bridle hangs.</li>
            <li><strong>Cheekpieces</strong> running down each side to attach the bit.</li>
            <li><strong>Browband</strong> across the forehead, preventing the bridle sliding back.</li>
            <li><strong>Throatlatch</strong> under the throat, stopping the bridle pulling off over the head.</li>
            <li><strong>Noseband (cavesson)</strong> around the nose, with various designs and purposes.</li>
            <li><strong>Reins</strong> the rider connection to the bit or bitless mechanism.</li>
          </ul>

          <h2 id="english">English Bridles</h2>
          <p>The standard English bridle is the snaffle bridle, carrying a single bit and one pair of reins, used across most English disciplines and lower-level dressage. The double bridle carries two bits -- a small snaffle (bradoon) and a curb -- on two pairs of reins, used in upper-level dressage and showing to refine communication; it demands an educated, independent hand. Bridles vary in leather weight and styling, from heavy hunting bridles to fine, elegant show bridles.</p>

          <h2 id="western">Western Headstalls</h2>
          <p>Western bridles, called headstalls, are typically simpler in appearance and often have no noseband. Common styles include the browband headstall and the one-ear or split-ear headstall (a loop around one ear in place of a browband). Western riding traditionally uses a curb bit ridden on a loose rein with neck-reining, so western headstalls are built around that style. Decorative tooling, silver, and rawhide reflect the western tradition.</p>

          <h2 id="bitless">Bitless Bridles</h2>
          <p>Bitless bridles apply pressure to the nose, jaw, poll, and cheeks rather than the mouth. Types include the side-pull (direct nose pressure), the bosal hackamore of the western tradition (a rawhide noseband acting on the nose and jaw), the mechanical hackamore (leverage shanks acting on the nose and poll, which can be quite strong), and cross-under designs. Bitless is not automatically gentler -- a mechanical hackamore can apply considerable force -- and, like bits, depends on the hands and fit. Competition eligibility for bitless varies by discipline and rulebook.</p>

          <h2 id="nosebands">Nosebands</h2>
          <ul>
            <li><strong>Cavesson</strong> -- the simple, standard noseband; should be fitted to allow comfort and jaw movement.</li>
            <li><strong>Flash</strong> -- a cavesson with an added lower strap, intended to keep the mouth closed and the bit stable.</li>
            <li><strong>Drop and grackle (figure-eight)</strong> -- act lower on the nose, used to discourage the mouth gaping or crossing the jaw.</li>
            <li><strong>Welfare note</strong> -- nosebands must not be over-tightened; research and many rules now require room for at least a couple of fingers under the band.</li>
          </ul>

          <h2 id="fit">Fit</h2>
          <p>A well-fitted bridle sits without pinching or rubbing: the browband does not pull the headpiece into the ears, the throatlatch is loose enough to allow flexion (roughly a hand&apos;s width), the bit sits at the correct height, and the noseband is positioned correctly and fitted loosely enough to allow chewing and comfort. Check for rubs behind the ears and at the corners of the mouth. Like all tack, a bridle that fits poorly causes pain and resistance no matter how good the riding.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (bridles and fitting).</li>
            <li>International Society for Equitation Science. Noseband-tightness and tack-fit research and position statements.</li>
            <li>USEF and FEI rulebooks, current editions (permitted bridles and bitless eligibility).</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
