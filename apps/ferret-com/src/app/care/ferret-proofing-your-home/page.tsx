import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  ArticleLayout,
  ArticleByline,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CrossPortfolioCard,
  ArticleSourcesList,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret-Proofing Your Home — Room-by-Room Hazard Checklist | Ferret.com',
  description:
    'A room-by-room ferret-proofing guide: gap-blocking, recliner and appliance dangers, ingestion hazards, and building a safe free-roam space.',
  path: '/care/ferret-proofing-your-home',
  type: 'article',
})

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
const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret-Proofing Your Home',
  description:
    'Room-by-room ferret-proofing: gaps, recliners, appliances, ingestion hazards, toxic plants, and building a controlled free-roam space.',
  url: 'https://ferret.com/care/ferret-proofing-your-home',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-04T00:00:00Z',

  citation: SOURCES,
})

const FAQS = [
  {
    question: 'How do I ferret-proof a room?',
    answer:
      'Block, fill, or screen any opening wider than about one inch at floor level — and inspect at ferret eye height by getting down and looking along the floor line. Then remove crush hazards (recliners and sofa beds above all), clear soft rubber and foam objects and other ingestibles, secure carpet edges, cords, plants, and chemicals, and add safe enrichment. Most keepers fully proof one dedicated room rather than the whole house at once.',
  },
  {
    question: 'How small a gap can a ferret fit through?',
    answer:
      'Any opening its skull fits through — the body deforms around the skeleton, so an opening that looks far too small is not. That is why the working gap rule is one inch at floor level, and why the highest-risk gaps are the ones invisible from standing height: appliance undersides, plumbing holes under sinks, cabinet kick-spaces, vents, and tears in box springs and upholstered furniture.',
  },
  {
    question: 'Why are recliners dangerous for ferrets?',
    answer:
      'The reclining chair and sofa bed are the most-cited cause of preventable ferret death in keeper communities — a ferret asleep or hiding inside the mechanism is crushed when someone sits, reclines, or folds the furniture. The rule is absolute: lock recliners open, never operate a sofa bed with a ferret loose, or keep this furniture out of the free-roam room entirely.',
  },
  {
    question: 'What household items do ferrets swallow?',
    answer:
      'Soft rubber and foam top the list — shoe soles, rubber bands, foam earplugs, erasers, cushion foam, rubber feet from electronics, latex — and ferrets chew and swallow these compulsively. Foreign-body gastrointestinal obstruction is one of the most common surgical emergencies in pet ferrets in the exotic-mammal literature. String, ribbon, and elastic are especially dangerous because they can cause a linear foreign body.',
  },
  {
    question: 'Are houseplants poisonous to ferrets?',
    answer:
      'Many common ones are — lilies, pothos, philodendron, and dieffenbachia are frequent offenders toxic to small mammals. When in doubt, keep plants well out of reach or out of the room. The same caution applies to cleaning products, rodent and insect baits (designed to be eaten by small mammals and lethal), medications, and toxic human foods. If ingestion is suspected, contact a veterinarian familiar with ferrets immediately.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(schema, faqSchema)


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
                { label: 'FAQ', href: '#faq' },
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
            updatedAt="2026-09-04"
            reviewedBy="Editorial team"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret-proofing checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret-proofing room checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the dedicated-room order — floor vent covers to screen
              heating and AC openings, cord covers so electrical cables stay
              out of reach, hardware cloth to screen gaps and furniture
              undersides, hard-rubber chew toys (no foam), and a dig box so
              the proofed room has safe work to do. Educational checklist,
              not a diagnosis. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret-proofing room checklist"
              subtitle="Email the vent-cover, cord-cover, hardware-cloth, hard-toy, and dig-box order. No spam."
              ctaText="Email my ferret-proofing checklist"
              source="care-ferret-proofing-your-home-under-hero"
            />
          </div>

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

          {/* Money path — live amazon-brand search hops (proofing / safe-room gear).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — educational gear, not medications, not a ranked list. */}
          <AffiliateDisclosure variant="inline" siteId="ferret-com" />
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop ferret-proofing setup
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page room-by-room
              copy — floor vent covers for heating and AC openings, cord
              covers so electrical cables stay bundled and out of reach,
              hardware cloth to screen gaps and the undersides of
              upholstered furniture, hard-rubber ferret chew toys (durable
              plastic only — no foam), and a dig box so the dedicated
              free-roam room has safe work to do. Same ferret-chew-toy hop
              used on the{' '}
              <Link
                href="/care/toxic-foods"
                className="text-brand-primary no-underline hover:underline"
              >
                toxic-foods
              </Link>
              {' '}guide and the same dig-box hop used on the{' '}
              <Link
                href="/tools/readiness-quiz"
                className="text-brand-primary no-underline hover:underline"
              >
                ferret readiness quiz
              </Link>
              . They are not a ranked product list, they are not
              medications, and they do not diagnose or replace an exotic-pet
              veterinarian. Soft rubber, foam, and household toxins stay off
              this list on purpose. Ferret.com earns a commission on
              qualifying purchases at no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/floor+vent+cover?s=care-ferret-proofing-your-home"
                amazonLabel="Browse floor vent covers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/cable+cord+cover?s=care-ferret-proofing-your-home"
                amazonLabel="Browse cable and cord covers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/hardware+cloth?s=care-ferret-proofing-your-home"
                amazonLabel="Browse hardware cloth on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+chew+toys?s=care-ferret-proofing-your-home"
                amazonLabel="Browse hard-rubber ferret chew toys on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+dig+box?s=care-ferret-proofing-your-home"
                amazonLabel="Browse ferret dig boxes on Amazon →"
              />
            </div>
            <p className="text-2xs text-brand-text-light mt-3">
              See also:{' '}
              <Link href="/care/exercise-and-enrichment" className="text-brand-primary hover:underline">
                Exercise &amp; Enrichment
              </Link>
              {' · '}
              <Link href="/care/toxic-foods" className="text-brand-primary hover:underline">
                Toxic Foods
              </Link>
              {' · '}
              <Link href="/health/gastrointestinal-blockage" className="text-brand-primary hover:underline">
                Gastrointestinal Blockage
              </Link>
            </p>
          </div>

          <h2 id="safe-room">Building a Safe Free-Roam Room</h2>
          <p>
            The practical approach for most keepers is to fully proof a single room and make it the dedicated ferret play space rather than trying to secure an entire home at once. In that room: block every gap, remove recliners and crush hazards, clear ingestible objects to a height the ferret cannot reach, secure cords and plants, and add the enrichment a ferret needs to burn energy. Supervise — proofing reduces risk but does not replace watching the animal.
          </p>
          <p>
            This dedicated room is what makes the daily out-of-cage time workable. Ferrets are not cage animals; they need several hours out every day, and a single thoroughly proofed room is far safer and easier to maintain than ad-hoc whole-house access. From there you can expand to additional proofed rooms as your confidence and the proofing grow.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
