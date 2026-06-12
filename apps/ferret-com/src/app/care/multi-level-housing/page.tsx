import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Multi-Level Ferret Housing — Ramps & Vertical Layout | Ferret.com',
  description:
    'How to plan a multi-level ferret cage: usable habitat per square foot, ramp safety and fall risk, level spacing, zoning food/litter/sleep, and connecting cages.',
  path: '/care/multi-level-housing',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Multi-Level Ferret Housing',
  description:
    'Planning a vertical, multi-level ferret habitat: level spacing, ramp safety, zoning, and how to expand a cage without growing its footprint.',
  url: 'https://ferret.com/care/multi-level-housing',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})
const combined = combineSchemas(schema)

const SOURCES = [
  {
    label: "American Ferret Association (AFA) — cage sizing, level spacing, and out-of-cage time owner guidance",
    url: "https://www.ferret.org",
    publisher: "AFA",
  },
  {
    label: "Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery, 4th ed. — housing and husbandry chapters",
    publisher: "Quesenberry KE, Carpenter JW (eds.) — Saunders/Elsevier",
  },
  {
    label: "Journal of Exotic Pet Medicine — case reports on fall injuries and foot abrasion in ferrets",
    publisher: "Elsevier",
  },
]

export default function MultiLevelHousingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Multi-Level Ferret Housing',
          subtitle:
            'Ferrets are vertical animals in a way most small mammals are not. They climb, they perch, and they sleep elevated. A multi-level cage buys you more usable habitat per square foot than any single-floor model — but only if the levels are spaced, ramped, and zoned correctly.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Multi-Level Housing', href: '/care/multi-level-housing' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Vertical Wins', href: '#why-vertical' },
                { label: 'Level Spacing & Fall Risk', href: '#spacing' },
                { label: 'Ramp Design', href: '#ramps' },
                { label: 'Zoning the Levels', href: '#zoning' },
                { label: 'Connecting Multiple Cages', href: '#connecting' },
                { label: 'Common Layout Mistakes', href: '#mistakes' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Cage Setup', href: '/care/cage-setup' },
                { label: 'Bedding & Litter Types', href: '/care/bedding-and-litter-types' },
                { label: 'Exercise & Enrichment', href: '/care/exercise-and-enrichment' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-multi-level-housing"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Care Hub', href: '/care' },
          { title: 'Cage Setup', href: '/care/cage-setup' },
          { title: 'Bedding & Litter Types', href: '/care/bedding-and-litter-types' },
          { title: 'Exercise & Enrichment', href: '/care/exercise-and-enrichment' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="why-vertical">Why Vertical Layout Wins</h2>
          <p>
            A ferret evaluates a space in three dimensions. In the wild, the European polecat — the ancestor of the domestic ferret — moves through burrow systems, root tangles, and stacked cover, not open floor. That instinct survives in the pet: given a choice between a wide flat cage and a tall narrow one of equal volume, most ferrets use the tall one more completely, climbing between levels dozens of times a day.
          </p>
          <p>
            This has a practical consequence. The American Ferret Association recommends a minimum of roughly 24 × 24 inches of floor with at least 18 inches of height per ferret, but strongly prefers multi-level designs because stacking levels multiplies usable habitat without enlarging the cage's footprint in your room. A 36 × 24-inch base with three levels offers far more functional territory than a single 36 × 24-inch floor — and it does so in the same amount of floor space, which is the binding constraint in most apartments and homes.
          </p>
          <p>
            The right mental model is a small vertical apartment: a ground floor with the litter and access doors, a middle floor with food and water, and an upper floor of hammocks and sleep sacks where the ferret actually spends most of its sleeping hours. Each level does a job, and ramps connect them.
          </p>

          <h2 id="spacing">Level Spacing and Fall Risk</h2>
          <p>
            Ferrets climb confidently but do not land like cats. They lack the righting reflex and the body proportions that let a cat survive routine falls, and the exotic-mammal veterinary literature documents fractures and soft-tissue injuries in pet ferrets from household and cage falls — disproportionately in older animals, whose agility and bone quality both decline.
          </p>
          <p>
            The working rule keepers use is that no level should sit more than about two feet above the surface directly below it, and ideally the level below should be a soft or solid surface rather than open air down to a hard tray. The danger zone is a tall cage with a single uninterrupted vertical drop: a ferret that loses its footing on a high hammock can fall the full height. Breaking that drop with an intermediate shelf or a hammock strung across the mid-height of the cage turns a long fall into a short one.
          </p>
          <p>
            For kits and for senior ferrets — the two highest-risk groups — keepers often lower the top hammocks, add more intermediate levels, and reduce the spacing between them. A geriatric ferret with reduced hindlimb strength (a common sequela of conditions covered in our <a href="/health/aging-ferret-care">aging ferret care</a> guide) should not be asked to navigate the same vertical layout that suited it at eighteen months.
          </p>

          <h2 id="ramps">Ramp Design</h2>
          <p>
            Ramps are where most multi-level cages fail in practice. The bare metal grid ramps that ship with many cages are slick, hard on ferret feet, and a fall risk. Three design points matter:
          </p>
          <ul>
            <li><strong>Cover the ramp.</strong> Fleece ramp covers, PVC sheet, or fitted liners give traction and protect the feet. A bare wire ramp at a steep angle is the single most common cause of cage falls.</li>
            <li><strong>Keep the angle shallow.</strong> A ramp that approaches 45 degrees is a slide, not a stair. Longer, gentler ramps are safer even though they consume more cage volume. Spiral or switchback ramps let you keep the angle low in a tall cage.</li>
            <li><strong>Anchor both ends.</strong> A ramp that shifts when the ferret's weight lands on it will throw the animal. Cable ties, clips, or fitted ledges should fix the ramp at top and bottom.</li>
          </ul>
          <p>
            Some keepers replace ramps entirely with fabric tunnels and tubes running between levels, which ferrets enjoy and which double as enrichment. The principle is the same as in our <a href="/care/exercise-and-enrichment">exercise and enrichment</a> guidance: tunnels are high-value, and a vertical tunnel that connects two cage levels does double duty.
          </p>

          <h2 id="zoning">Zoning the Levels</h2>
          <p>
            Ferrets have strong opinions about which activities happen where, and a well-zoned cage works with those instincts rather than against them.
          </p>
          <ul>
            <li><strong>Litter on the lowest level.</strong> Ferrets default to eliminating in corners and prefer not to do it near food or sleep. A corner pan on the ground floor, plus the access doors there, keeps the messiest zone low and easy to clean. See our <a href="/care/litter-training">litter training</a> guide for the corner-pan strategy.</li>
            <li><strong>Food and water on a middle level.</strong> Separated from the litter, and away from the highest hammocks so the ferret is not carrying kibble up to its bed. A heavy ceramic crock and a clip-on or gravity water source belong here.</li>
            <li><strong>Sleep zone up top.</strong> Most ferrets preferentially sleep in elevated, enclosed bedding. Cluster hammocks and sleep sacks in the upper third of the cage. The bedding choices that matter — enclosed fabric over loose substrate — are covered in our <a href="/care/bedding-and-litter-types">bedding and litter types</a> guide.</li>
          </ul>
          <p>
            Zoning also helps litter training: a ferret that has learned "the bathroom is the ground-floor corner" generalizes that better than one whose litter box moves around or sits next to its food.
          </p>

          <h2 id="connecting">Connecting Multiple Cages</h2>
          <p>
            Households with several ferrets, or keepers who want to expand without buying one enormous unit, often connect two cages. Modular cage systems are designed for this — a second unit stacks on the first, doubling the levels. Where stacking is not an option, keepers link separate cages with secured tunnels so the animals can move between them during free-roam time.
          </p>
          <p>
            Two cautions apply. First, every junction between cages or tunnel openings is a potential escape point; ferrets test seams relentlessly, and any gap their skull can pass becomes an exit. Carabiner-secure every door and clip tunnels firmly. Second, when connecting cages that house ferrets who have not lived together, treat it as an introduction, not a merge — the slow-introduction process in our <a href="/care/introducing-a-second-ferret">introducing a second ferret</a> guide applies.
          </p>

          <h2 id="mistakes">Common Layout Mistakes</h2>
          <ul>
            <li><strong>Tall cage, single long drop.</strong> Height without intermediate levels or hammocks to break a fall is more dangerous than a shorter cage.</li>
            <li><strong>Wire-grid floors and ramps left uncovered.</strong> A defect for ferret feet; chronic abrasion and bumblefoot are documented in ferrets kept on grid surfaces.</li>
            <li><strong>Food next to litter.</strong> Ferrets dislike it and a cramped two-zone level invites both a messy crock and litter misses.</li>
            <li><strong>One level doing everything.</strong> Collapsing sleep, food, and litter onto a single shelf wastes the entire advantage of a multi-level cage.</li>
            <li><strong>Ignoring the senior ferret.</strong> The layout that suited a young ferret can become a hazard as it ages; lower the hammocks and add intermediate steps.</li>
          </ul>
          <p>
            Get the vertical layout right and a multi-level cage becomes what it should be: a secure, interesting home base the ferret returns to between the supervised out-of-cage hours that no amount of cage real estate replaces.
          </p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
