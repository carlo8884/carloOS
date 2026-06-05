import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Stirrups and Rider Safety — Types, Sizing, and Avoiding Being Dragged",
  description:
    "Reference guide to stirrups and rider safety: how stirrups work, sizing to the foot, safety stirrup designs, breakaway features, and reducing drag risk.",
  path: '/tack/stirrups-and-safety',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Stirrups and Rider Safety — Types, Sizing, and Avoiding Being Dragged",
  description:
    "Reference guide to stirrups and rider safety: how stirrups work, sizing to the foot, safety stirrup designs, breakaway features, and reducing drag risk.",
  url: 'https://horses.com/tack/stirrups-and-safety',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const FAQS = [
  {
    question: "What size stirrup should I use?",
    answer:
      "The stirrup should be about an inch (roughly 2.5 cm) wider than the widest part of your riding boot -- enough that the foot is not pinched and can release in a fall, but not so wide that the whole foot can slide through and get trapped. Too small risks jamming; too large risks the foot going through to the ankle, both serious safety hazards.",
    answerText:
      "About an inch (2.5 cm) wider than the widest part of your boot -- enough to release the foot but not let it slide through. Too small jams; too large traps the foot at the ankle.",
  },
  {
    question: "Why do I need a heel on my riding boots?",
    answer:
      "A riding boot's smooth sole and defined heel stop the foot sliding too far through the stirrup and hold it in place, which prevents the foot becoming trapped in a fall. Trainers and treaded work boots are dangerous because a heavy tread or flat sole can jam in the stirrup, raising the risk of being dragged.",
    answerText:
      "The smooth sole and heel stop the foot sliding through and getting trapped in a fall. Treaded or heelless footwear can jam in the stirrup, risking being dragged.",
  },
  {
    question: "Are safety stirrups worth it?",
    answer:
      "Safety stirrups -- peacock, bent-leg, and modern breakaway designs -- are engineered to release the foot in a fall and meaningfully reduce the risk of being dragged, making them a worthwhile upgrade, especially for children and beginners. They complement, rather than replace, correctly sized stirrups and proper riding footwear.",
    answerText:
      "Yes -- they release the foot in a fall and reduce the dragging risk, especially for children and beginners. They complement, not replace, correct sizing and proper footwear.",
  },
]

export default function StirrupsSafetyPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="gear"
        relatedLinks={[
          { title: 'Tack Hub', href: '/tack', category: 'Tack & Gear' },
          { title: 'Riding Helmet Guide', href: '/tack/helmet-guide' },
          { title: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
          { title: 'Saddle Pads and Numnahs', href: '/tack/saddle-pads' },
        ]}
        hero={{
          title: "Stirrups and Rider Safety",
          subtitle:
            "Stirrups support the rider and aid balance and security, but a foot trapped in a stirrup during a fall is one of the most dangerous things that can happen on a horse -- the risk of being dragged. Choosing correctly sized stirrups, considering modern safety designs, and pairing them with proper footwear is a serious safety matter, not a styling choice. This is reference material to inform safety decisions alongside a qualified instructor.",
          category: "Tack & Gear",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "8 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Tack", href: "/tack" },
          { name: "Stirrups and Safety", href: '/tack/stirrups-and-safety' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "How Stirrups Work", href: "#how" },
            { label: "Sizing to the Foot", href: "#sizing" },
            { label: "Safety Stirrup Designs", href: "#safety" },
            { label: "Footwear and Treads", href: "#footwear" },
            { label: "Avoiding Being Dragged", href: "#dragged" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "Helmet Guide", href: "/tack/helmet-guide" },
              { label: "Saddle Fit Basics", href: "/guides/saddle-fit-basics" },
              { label: "Trail Riding", href: "/disciplines/trail-riding" },
              { label: "Buying Your First Horse", href: "/ownership/buying-your-first-horse" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="equipment" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="tack-stirrups"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="how">How Stirrups Work</h2>
          <p>Stirrups hang from the saddle by leathers (English) or fenders (western) and give the rider a platform for the ball of the foot, aiding balance, security, and the ability to rise and absorb the horse&apos;s movement. The foot should rest on the tread with the ball of the foot, heel down, so the foot can slip free in a fall rather than being trapped. The stirrup is a support to rest on lightly, not a stirrup to jam the foot through.</p>

          <h2 id="sizing">Sizing to the Foot</h2>
          <p>Stirrup size is a safety-critical fit. The stirrup should be roughly an inch (about 2.5 cm) wider than the widest part of the rider&apos;s boot -- enough clearance that the foot is not pinched and can release in a fall, but not so wide that the whole foot can slide through and become trapped. Too small risks the foot jamming; too large risks the foot going through to the ankle. Children and adults need stirrups matched to their own footwear.</p>

          <h2 id="safety">Safety Stirrup Designs</h2>
          <ul>
            <li><strong>Peacock (rubber-band) stirrups</strong> -- one side is a thick rubber loop that releases the foot under force, common for children.</li>
            <li><strong>Bent-leg and offset safety stirrups</strong> -- a curved outer branch designed to let the foot escape.</li>
            <li><strong>Modern breakaway / release stirrups</strong> -- engineered to open or release the foot in a fall, an increasingly popular safety upgrade.</li>
            <li><strong>Caged or tapadero western stirrups</strong> -- enclose the front of the foot to stop it sliding through, used in some western and trail contexts.</li>
          </ul>

          <h2 id="footwear">Footwear and Treads</h2>
          <p>Proper riding footwear is part of stirrup safety. A riding boot has a smooth sole and a defined heel, which together stop the foot sliding too far through the stirrup and hold it in place. Trainers, work boots with heavy treads, and flat shoes are dangerous because a treaded or heelless sole can jam in the stirrup. Stirrup treads (rubber grips on the footbed) add grip and comfort but do not replace the need for correct footwear.</p>

          <h2 id="dragged">Avoiding Being Dragged</h2>
          <p>Being dragged by a trapped foot after a fall can cause catastrophic injury, which is why every other point on this page exists. The defenses stack together: correctly sized stirrups that let the foot release, riding boots with a heel and smooth sole, safety or breakaway stirrup designs where appropriate (especially for children and beginners), riding with the ball of the foot on the tread and heels down, and never riding in unsuitable footwear. Together these dramatically reduce the chance of a foot being trapped in a fall.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>British Horse Society and Pony Club manuals, current editions (tack and rider safety).</li>
            <li>Equestrian safety organizations. Guidance on stirrup sizing and footwear.</li>
            <li>Research on equestrian fall injuries and entrapment, various.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
