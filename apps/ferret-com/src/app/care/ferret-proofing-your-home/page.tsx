import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret-Proofing Your Home — Room-by-Room Hazard Checklist | Ferret.com',
  description:
    'A room-by-room ferret-proofing guide: gap-blocking, recliner and appliance dangers, ingestion hazards, and building a safe free-roam space.',
  path: '/care/ferret-proofing-your-home',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret-Proofing Your Home',
  description:
    'Room-by-room ferret-proofing: gaps, recliners, appliances, ingestion hazards, toxic plants, and building a controlled free-roam space.',
  url: 'https://ferret.com/care/ferret-proofing-your-home',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})
const combined = combineSchemas(schema)

const SOURCES = [
  {
    label: "Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery, 4th ed. — foreign-body, appliance-injury, and household-hazard chapters",
    publisher: "Quesenberry KE, Carpenter JW (eds.) — Saunders/Elsevier",
  },
  {
    label: "Journal of Exotic Pet Medicine — case reports on ferret foreign-body obstruction and household injuries",
    publisher: "Elsevier",
  },
  {
    label: "American Ferret Association (AFA) — ferret-proofing and household safety owner-education materials",
    url: "https://www.ferret.org",
    publisher: "AFA",
  },
]

export default function FerretProofingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret-Proofing Your Home',
          subtitle:
            'A ferret will find every gap, every hazard, and every soft object in a room within its first hour loose. Ferret-proofing is not optional housekeeping — it is the precondition for the daily out-of-cage time a ferret must have. This is the room-by-room checklist.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Ferret-Proofing Your Home', href: '/care/ferret-proofing-your-home' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'How Ferrets Differ', href: '#how-differ' },
                { label: 'The Gap Rule', href: '#gaps' },
                { label: 'Crush Hazards', href: '#crush' },
                { label: 'Ingestion Hazards', href: '#ingestion' },
                { label: 'Toxic Plants & Chemicals', href: '#toxins' },
                { label: 'Building a Safe Room', href: '#safe-room' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Exercise & Enrichment', href: '/care/exercise-and-enrichment' },
                { label: 'Toxic Foods', href: '/care/toxic-foods' },
                { label: 'Cage Setup', href: '/care/cage-setup' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-ferret-proofing-your-home"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Care Hub', href: '/care' },
          { title: 'Cage Setup', href: '/care/cage-setup' },
          { title: 'Exercise & Enrichment', href: '/care/exercise-and-enrichment' },
          { title: 'Gastrointestinal Blockage', href: '/health/gastrointestinal-blockage' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="how-differ">How Ferret-Proofing Differs From Puppy-Proofing</h2>
          <p>
            People who have child- or puppy-proofed a home tend to assume they are most of the way there. They are not. Ferrets break three of the assumptions that ordinary baby-proofing relies on. They <strong>squeeze through any opening their skull fits through</strong> — the body deforms around the skeleton, so an opening that looks far too small is not. They <strong>investigate by mouthing soft objects</strong>, which turns a huge range of household items into ingestion hazards. And they <strong>climb anything with texture</strong>, reaching shelves and surfaces a puppy never could. A room that is safe for a crawling baby can be lethal for a loose ferret.
          </p>

          <h2 id="gaps">The Gap Rule</h2>
          <p>
            The governing principle: block, fill, or screen any opening wider than about one inch at floor level, and inspect at a ferret's eye height — get down and look along the floor line. The highest-risk gaps are the ones you cannot see from standing height.
          </p>
          <ul>
            <li><strong>Behind and under appliances.</strong> Refrigerators, dishwashers, washers, dryers, and stoves have open undersides and rear cavities that lead to motors, heating elements, and moving parts. Ferrets that crawl into appliance interiors and contact those components are a recurring exotic-mammal emergency. Block the access entirely.</li>
            <li><strong>Heating and AC vents, dryer vents, and ductwork.</strong> Screen or cover any opening a ferret could enter.</li>
            <li><strong>Gaps under doors and around pipes.</strong> Cabinet kick-spaces, the holes where plumbing enters walls under sinks, and the gap beneath an exterior door are all escape routes.</li>
            <li><strong>Holes in box springs and upholstered furniture.</strong> Ferrets climb inside sofas and mattresses through small tears and nest in the frame. Screen the undersides of upholstered furniture or keep it out of the ferret room.</li>
          </ul>
          <p>
            Assume that any unblocked gap will be found and used. The escape-proofing logic is the same one that governs cage door latches in our <a href="/care/cage-setup">cage setup</a> guide: ferrets are relentless about testing seams.
          </p>

          <h2 id="crush">Crush and Trap Hazards</h2>
          <p>
            The most-cited cause of preventable ferret death in keeper communities is the <strong>reclining chair and the sofa bed</strong>. A ferret asleep or hiding inside the mechanism is crushed when someone sits, reclines, or folds the furniture. The rule is absolute: lock recliners in the open position, do not operate a sofa bed with a ferret loose, or simply keep these out of the free-roam room. There is no safe way to use a moving-mechanism chair around a loose ferret.
          </p>
          <ul>
            <li><strong>Doors.</strong> A ferret underfoot in a doorway can be crushed by a closing door. Move deliberately and look before you swing a door.</li>
            <li><strong>Rocking chairs and office chairs with rolling bases</strong> can trap a foot or tail.</li>
            <li><strong>Toilets with the lid up</strong> are a drowning risk; keep lids down.</li>
            <li><strong>Washers and dryers.</strong> A ferret can climb into a laundry pile or an open machine. Check before you start any load anywhere the ferret has access.</li>
          </ul>

          <h2 id="ingestion">Ingestion Hazards</h2>
          <p>
            Foreign-body gastrointestinal obstruction is one of the most common surgical emergencies in pet ferrets in the exotic-mammal literature, and the offending objects are remarkably consistent.
          </p>
          <ul>
            <li><strong>Soft rubber and foam</strong> top the list: shoe and sneaker soles, rubber bands, foam earplugs, soft erasers, foam mattress and cushion bits, rubber feet from electronics, latex. Ferrets chew and swallow these compulsively. Remove every accessible piece.</li>
            <li><strong>Carpet edges and baseboards.</strong> Ferrets dig at loose edges and swallow the rubber backing and fibers. Secure or block loose carpet edges.</li>
            <li><strong>Small ingestible objects</strong> — coins, beads, buttons, jewelry, small toys, packaging bits — anything that fits in the mouth.</li>
            <li><strong>String, ribbon, and elastic</strong> can cause a linear foreign body, a particularly dangerous obstruction.</li>
          </ul>
          <p>
            Toy selection follows the same logic: hard rubber and durable plastic only, no soft or foam toys. The enrichment that is both safe and engaging — tunnels, dig boxes, puzzle feeders — is covered in our <a href="/care/exercise-and-enrichment">exercise and enrichment</a> guide.
          </p>

          <h2 id="toxins">Toxic Plants and Chemicals</h2>
          <p>
            Curious, low-to-the-ground, and prone to mouthing things, ferrets are exposed to household toxins many owners overlook.
          </p>
          <ul>
            <li><strong>Toxic houseplants.</strong> Lilies, pothos, philodendron, dieffenbachia, and many other common houseplants are toxic to small mammals. When in doubt, keep plants well out of reach or out of the room.</li>
            <li><strong>Cleaning products and chemicals.</strong> Store all household cleaners, pest baits, and rodenticides where a ferret cannot reach them. Rodent and insect baits are designed to be eaten by small mammals and are lethal.</li>
            <li><strong>Human and pet medications</strong> left within reach are a poisoning risk; ferrets will chew pill bottles.</li>
            <li><strong>Toxic foods.</strong> Chocolate, onions, raisins, xylitol, and other human foods are dangerous to ferrets; the full list is in our <a href="/care/toxic-foods">toxic foods</a> guide. Keep counters and trash inaccessible.</li>
            <li><strong>Electrical cords.</strong> Bundle, cover, or route them out of reach to prevent both shock and chewing damage.</li>
          </ul>

          <h2 id="safe-room">Building a Safe Free-Roam Room</h2>
          <p>
            The practical approach for most keepers is to fully proof a single room and make it the dedicated ferret play space rather than trying to secure an entire home at once. In that room: block every gap, remove recliners and crush hazards, clear ingestible objects to a height the ferret cannot reach, secure cords and plants, and add the enrichment a ferret needs to burn energy. Supervise — proofing reduces risk but does not replace watching the animal.
          </p>
          <p>
            This dedicated room is what makes the daily out-of-cage time workable. Ferrets are not cage animals; they need several hours out every day, and a single thoroughly proofed room is far safer and easier to maintain than ad-hoc whole-house access. From there you can expand to additional proofed rooms as your confidence and the proofing grow.
          </p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
