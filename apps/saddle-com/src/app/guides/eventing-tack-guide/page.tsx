import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, DropCap, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'saddle-com',
  title: "Eventing Tack Guide — Three Phases, Three Setups | Saddle.com",
  description: "Eventing tack across dressage, cross-country, and show jumping: saddle choices, cross-country safety gear, studs, boots, and the equipment each phase demands.",
  path: "/guides/eventing-tack-guide",
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'saddle-com',
  title: "Eventing Tack Guide",
  description: "Eventing tack across the three phases — dressage, cross-country, and show jumping — including safety gear, studs, and boots.",
  url: "https://saddle.com/guides/eventing-tack-guide",
  imageUrl: '',
  authorName: 'Saddle.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function EventingTackGuidePage() {
  return (
    <ArticleLayout
      siteId="saddle-com"
      contentType="guide"
      hero={{ title: "Eventing Tack — Three Phases, Three Jobs", subtitle: "Eventing asks one horse to do dressage, gallop a cross-country course, and show jump. The tack must serve three different disciplines, with safety paramount across the country.", category: "Discipline Tack", authorName: 'Saddle.com Editorial', authorAvatar: '🐴', publishedAt: 'June 2026', readTime: "10 min" }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Guides' }, { name: "Eventing Tack Guide", href: "/guides/eventing-tack-guide" }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[
          { label: "One Horse, Three Disciplines", href: "#three" },
          { label: "Dressage Phase", href: "#dressage" },
          { label: "Cross-Country Phase", href: "#xc" },
          { label: "Show Jumping Phase", href: "#sj" },
          { label: "Safety Gear", href: "#safety" },
          { label: "Studs & Boots", href: "#studs" },
        ]} />
        <RelatedLinks title="Related Guides" links={[
          { label: "Show Jumping Tack Guide", href: "/guides/show-jumping-tack-guide" },
          { label: "Dressage Tack Guide", href: "/guides/dressage-tack-guide" },
          { label: "Body Protector Guide", href: "/guides/body-protector-guide" },
        ]} />
        <EmailCapture variant="sidebar" siteId="saddle-com" title="Free Buyer's Guide" subtitle="Saddle reviews and market intelligence." source="guide-eventing-tack-guide" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Saddle.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <DropCap>Eventing is three sports in one competition: a dressage test, a cross-country course at speed over solid fences, and a show jumping round. The tack has to serve all three, with cross-country adding a layer of safety equipment unmatched in any other discipline. Many eventers own multiple saddles; all of them take safety on the country seriously.</DropCap>

        <CalloutBox variant="tip" title="Cross-country is where the safety gear earns its place">
          Cross-country fences are solid and ridden at speed — the highest-risk phase in mainstream eventing. A certified helmet, a body protector, and increasingly an air vest over it are standard and often mandatory. This is not the phase to economize on safety equipment.
        </CalloutBox>

        <h2 id="three">One Horse, Three Disciplines</h2>
        <p>The eventer must produce a quiet, accurate dressage test, then gallop and jump solid cross-country fences, then return for a careful show jumping round — often across one or more days. The tack requirements pull in different directions, drawing on the <a href="/guides/dressage-tack-guide">dressage tack guide</a> and the <a href="/guides/show-jumping-tack-guide">show jumping tack guide</a>, plus cross-country-specific gear. Some riders use a versatile event saddle; many switch saddles between phases.</p>

        <h2 id="dressage">Dressage Phase</h2>
        <p>The dressage phase is ridden in dressage tack within eventing&apos;s rules — typically a dressage or all-purpose saddle and a snaffle bridle (doubles are restricted in eventing dressage), fitted and legal per the <a href="/guides/dressage-tack-guide">dressage tack guide</a>. Riders with the budget use a dedicated dressage saddle for the test, then change for the jumping phases. Turnout follows the eventing dress rules in the <a href="/guides/show-attire-guide">show attire guide</a>.</p>

        <h2 id="xc">Cross-Country Phase</h2>
        <p>Cross-country uses a forward, close-contact or event-specific saddle (often monoflap for lightness and closeness, per the <a href="/guides/monoflap-vs-double-flap-saddles">monoflap guide</a>), a secure breastplate (commonly a five-point), and bitting chosen for honest control at gallop. A stud-guard girth protects against studs. The position is forward and galloping; the tack must give control without restricting a horse jumping solid fences at speed.</p>

        <h2 id="sj">Show Jumping Phase</h2>
        <p>The final show jumping phase uses jumping tack as in the <a href="/guides/show-jumping-tack-guide">show jumping tack guide</a> — a close-contact saddle, appropriate bit, breastplate, and open-front and fetlock boots. After cross-country, the test is a careful, rideable round over knockable fences, so control and accuracy matter more than the raw scope of the country.</p>

        <h2 id="safety">Safety Gear</h2>
        <ul>
          <li>A certified helmet for every phase (see the <a href="/guides/riding-helmet-safety-standards">helmet standards guide</a>).</li>
          <li>A BETA Level 3 body protector, required for cross-country and widely worn jumping — see the <a href="/guides/body-protector-guide">body protector guide</a>.</li>
          <li>An air vest worn over the foam protector for cross-country, increasingly standard.</li>
          <li>A medical armband carrying rider medical information on cross-country.</li>
          <li>Frangible/safety technology on fences is a course matter, but the rider&apos;s personal protection is theirs to get right.</li>
        </ul>

        <h2 id="studs">Studs &amp; Boots</h2>
        <p>Studs give grip for galloping and jumping on grass, chosen for the going as in the <a href="/guides/show-jumping-tack-guide">show jumping tack guide</a>. Protective boots — open-front in front, fetlock behind, often with cross-country-specific protective boots for the solid fences, plus bell boots — guard the legs across the country and in show jumping, per the <a href="/guides/horse-boot-types">horse boot types guide</a>. Eventing demands the fullest protective kit of the mainstream disciplines.</p>
        <p>Eventing tack is three setups serving three phases, unified by an uncompromising approach to cross-country safety. Whether on one versatile saddle or several, the eventer&apos;s tack must let the horse perform a dressage test, gallop solid fences, and jump a careful round — safely, every time.</p>

        <CalloutBox variant="note" title="Sources">
          FEI Eventing Rules and British Eventing rulebook, including safety-equipment requirements. BETA body-protector and air-vest standards. Society of Master Saddlers fitting references, <a href="https://www.mastersaddlers.co.uk" rel="noopener" target="_blank" className="text-brand-primary hover:underline">mastersaddlers.co.uk</a>. Manufacturer boot and stud documentation.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
