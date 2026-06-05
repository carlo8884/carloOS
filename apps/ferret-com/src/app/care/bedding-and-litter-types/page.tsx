import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Bedding & Litter Types — Safe Materials | Ferret.com',
  description:
    'A guide to ferret bedding and litter: why fleece and sleep sacks beat loose shavings, which litters are safe, and the hazards to avoid.',
  path: '/care/bedding-and-litter-types',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Bedding and Litter Types',
  description:
    'Material-by-material comparison of ferret bedding and litter options, with the respiratory and foreign-body hazards behind the recommendations.',
  url: 'https://ferret.com/care/bedding-and-litter-types',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})
const combined = combineSchemas(schema)

export default function BeddingAndLitterTypesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Bedding & Litter Types',
          subtitle:
            'Ferrets are burrowers who sleep face-buried for 16 hours a day and eliminate in corners by instinct. Those two facts decide almost every bedding and litter choice you will make. This is a material-by-material guide to what is safe, what is hazardous, and why.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Bedding & Litter Types', href: '/care/bedding-and-litter-types' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Two Instincts', href: '#instincts' },
                { label: 'Bedding That Works', href: '#bedding-good' },
                { label: 'Bedding to Avoid', href: '#bedding-bad' },
                { label: 'Litter Materials', href: '#litter' },
                { label: 'Litter to Avoid', href: '#litter-bad' },
                { label: 'Washing & Replacement', href: '#washing' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Cage Setup', href: '/care/cage-setup' },
                { label: 'Litter Training', href: '/care/litter-training' },
                { label: 'Multi-Level Housing', href: '/care/multi-level-housing' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-bedding-and-litter-types"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Care Hub', href: '/care' },
          { title: 'Cage Setup', href: '/care/cage-setup' },
          { title: 'Litter Training', href: '/care/litter-training' },
          { title: 'Cage Cleaning Routine', href: '/care/cage-cleaning-routine' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="instincts">The Two Instincts That Decide Everything</h2>
          <p>
            Two hardwired behaviors govern bedding and litter selection. First, ferrets are <strong>burrowers</strong>: they seek enclosed, dark, fabric-lined spaces to sleep, and they pull bedding around themselves. Second, they are <strong>corner eliminators</strong>: they back into a corner to defecate and urinate, and they will not reliably use an open central tray. Bedding satisfies the first instinct; litter accommodates the second. Confusing the two — using loose substrate as bedding, or expecting a ferret to nest in litter — is the root of most husbandry mistakes.
          </p>

          <h2 id="bedding-good">Bedding That Works</h2>
          <p>
            The correct bedding is enclosed fabric, washable, and free of loose fibers a ferret can swallow.
          </p>
          <ul>
            <li><strong>Sleep sacks and cube beds.</strong> Enclosed fleece pouches the ferret crawls inside. These best satisfy the burrowing drive and are the bedding most ferrets choose when given options.</li>
            <li><strong>Hammocks.</strong> Elevated fabric slings for lighter sleep and lounging. Hung in the upper third of the cage, they are the default daytime sleeping spot. Pair an open hammock with an enclosed sack so the ferret can choose by mood and temperature.</li>
            <li><strong>Fleece liners.</strong> Machine-washable fleece cut to fit each cage level. Fleece does not fray into ingestible threads the way looser-woven fabrics do, which is why it is the standard. Keep a second set so the cage is never bare on laundry day.</li>
            <li><strong>Fleece tunnels and tubes.</strong> Double as bedding and enrichment; many ferrets sleep in a tube as readily as a sack.</li>
            <li><strong>An old t-shirt or towel</strong> works in a pinch, but watch for loose threads and fraying hems — terrycloth loops can snag a claw or be chewed off and swallowed.</li>
          </ul>

          <h2 id="bedding-bad">Bedding to Avoid</h2>
          <p>
            Loose substrate piled in the cage as bedding is the central error, and it carries two distinct risks.
          </p>
          <ul>
            <li><strong>Cedar and untreated pine shavings.</strong> Aromatic softwoods release phenolic compounds that are documented respiratory irritants in small mammals. An animal that sleeps face-buried for most of the day should not be breathing them. This is a firm avoid.</li>
            <li><strong>Paper-pulp and crumble bedding.</strong> Marketed for rodents, it invites the ferret to ingest and burrow in loose material, raising the foreign-body risk without offering the enclosed nest a ferret actually wants.</li>
            <li><strong>Straw and hay.</strong> Dusty, abrasive, and prone to harboring mold; not appropriate ferret bedding.</li>
            <li><strong>Loosely woven or looped fabric.</strong> Terrycloth and chunky knits shed threads that wrap around toes or are swallowed. Tight fleece avoids both problems.</li>
          </ul>
          <p>
            The throughline is foreign-body gastrointestinal obstruction, one of the most common surgical presentations in pet ferrets reported in the exotic-mammal literature. Bedding that a ferret can shred and swallow contributes to that risk. Enclosed fleece does not.
          </p>

          <h2 id="litter">Litter Materials</h2>
          <p>
            Litter sits in a corner pan and is judged by safety if ingested, dust, and odor control. Ferrets investigate litter with their mouths and dig in it, so the "if ingested" axis dominates.
          </p>
          <ul>
            <li><strong>Recycled paper pellets.</strong> The default safe choice. Low dust, reasonable odor control, and benign if a small amount is swallowed. Widely sold under names familiar to anyone who has shopped small-pet aisles.</li>
            <li><strong>Compressed wood pellets (non-aromatic).</strong> Kiln-dried hardwood or heat-treated pellets that have had the aromatic oils driven off are acceptable and very absorbent. Avoid any pellet that still smells strongly of pine or cedar.</li>
            <li><strong>Pelleted grass or paper-based crumble</strong> formulated for small animals — acceptable provided it is low-dust and non-clumping.</li>
          </ul>
          <p>
            Whatever the material, the pan shape matters as much as the fill: a corner pan with a high back wall and a low front lip works with the ferret's instinct, as covered in our <a href="/care/litter-training">litter training</a> guide.
          </p>

          <h2 id="litter-bad">Litter to Avoid</h2>
          <ul>
            <li><strong>Clumping clay (sodium bentonite).</strong> Dangerous if ingested — it can clump in the gut — and dusty enough to irritate the airways of a low-to-the-ground animal. A firm avoid.</li>
            <li><strong>Silica crystal litter.</strong> Sharp, dusty, and not intended for an animal that digs and mouths its litter.</li>
            <li><strong>Aromatic cedar or pine litter.</strong> Same phenol concern as the shavings above.</li>
            <li><strong>Scented or deodorized cat litters.</strong> The added fragrances are unnecessary irritants in a small enclosure.</li>
          </ul>

          <h2 id="washing">Washing and Replacement Cadence</h2>
          <p>
            Fabric bedding should be washed roughly weekly, more often for sleep sacks the ferret nests in heavily. Use a fragrance-free detergent and skip fabric softener and dryer sheets, whose residues can irritate skin and airways. Rotate a spare set in so the cage is never without bedding.
          </p>
          <p>
            Inspect bedding at every wash and retire it when fleece thins, seams fray, or chew holes appear — typically every few months with regular laundering. A frayed sack is an ingestion hazard, not a frugal save.
          </p>
          <p>
            Litter pans want a daily spot-clean and a full empty-and-wipe weekly. Ferrets are fastidious about their corners; a pan left dirty is the fastest way to teach a ferret to eliminate beside it instead. For the placement and multi-pan strategy that makes litter actually work, see <a href="/care/litter-training">litter training</a>, and for how bedding and litter zones fit a tall cage, our <a href="/care/multi-level-housing">multi-level housing</a> guide.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Respiratory-irritant and foreign-body discussion references Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and case literature in the <em>Journal of Exotic Pet Medicine</em>. Bedding and litter-material recommendations align with American Ferret Association (AFA) owner-education guidance. This page covers general material safety and does not claim hands-on product testing. Return to the <a href="/care">Ferret Care hub</a> or pair this with our <a href="/care/cage-setup">cage setup</a> guide.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
