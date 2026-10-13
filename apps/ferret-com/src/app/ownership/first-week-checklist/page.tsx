import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, RelatedLinks, TableOfContents, TableShopLink, ShopCtas, CalloutBox, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'New Ferret First-Week Checklist — Day by Day | Ferret.com',
  description:
    'A day-by-day plan for a new ferret’s first week: cage setup, vet booking, quarantine, litter and bite training, and bonding without overwhelming the ferret.',
  path: '/ownership/first-week-checklist',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'New Ferret First-Week Checklist',
  description:
    'A practical day-by-day checklist for the first week with a new ferret, from setup and vet booking to early training and bonding.',
  url: 'https://ferret.com/ownership/first-week-checklist',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-10-13T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'New Ferret First-Week Checklist',
  description:
    'Reference checklist for the first week of caring for a newly acquired domestic ferret.',
  url: 'https://ferret.com/ownership/first-week-checklist',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

const FAQS = [
  {
    question: 'Does a new ferret need a vet visit right away?',
    answer:
      'The Merck Veterinary Manual recommends a yearly examination and vaccinations for pet ferrets. Booking that first exam soon after the ferret comes home confirms its vaccination status and gives you a ferret-experienced veterinarian before an emergency.',
  },
  {
    question: 'What vaccines does a new ferret need?',
    answer:
      'Ferrets should be vaccinated against canine distemper and rabies. Lafeber says pet-store ferrets usually get their first vaccine at about 6 to 8 weeks, with boosters by 10 to 12 weeks and at about 14 to 16 weeks, then annually. Merck advises not giving both vaccines on the same day and staying at the clinic 20 to 30 minutes afterward to watch for reactions.',
  },
  {
    question: 'Do I need a permit to keep a ferret?',
    answer:
      'It depends on where you live. Lafeber notes that some states, counties, and cities restrict ferret ownership or require permits, so check local rules before you bring one home.',
  },
]

export default function FirstWeekChecklistPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'New Ferret First-Week Checklist',
          subtitle:
            'The first week sets the tone for everything that follows. A new ferret arrives stressed by the move, and a calm, structured introduction to its home builds the trust that makes training and bonding possible. This is a day-by-day plan — what to have ready before the ferret arrives, and how to pace the first seven days without overwhelming a small, nervous animal.',
          category: 'Ownership & Lifestyle',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ownership', href: '/ownership' },
          { name: 'First-Week Checklist', href: '/ownership/first-week-checklist' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Before You Bring It Home', href: '#before' },
                { label: 'Day 1: Arrival', href: '#day1' },
                { label: 'Days 2–3: Settling In', href: '#day23' },
                { label: 'Days 4–5: First Training', href: '#day45' },
                { label: 'Days 6–7: Expanding Trust', href: '#day67' },
                { label: 'The Vet Visit', href: '#vet' },
                { label: 'Quarantine for Multi-Ferret Homes', href: '#quarantine' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Cost of Owning a Ferret', href: '/ownership/cost-of-owning-a-ferret' },
                { label: 'Adoption vs Buying', href: '/ownership/adoption-vs-buying' },
                { label: 'Cage Setup', href: '/care/cage-setup' },
                { label: 'Ownership Hub', href: '/ownership' },
              ]}
            />

          </>
        }

        relatedLinks={[
          { title: 'Ferret Ownership Hub', href: '/ownership' },
          { title: 'Ferret Supplies Checklist', href: '/ownership/ferret-supplies-checklist' },
          { title: 'Cage Setup', href: '/care/cage-setup' },
          { title: 'First-Year Schedule', href: '/first-year-schedule' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-10-13"
            reviewedBy="Editorial team"
          />
          <CalloutBox variant="info" title="Short answer">
            <p>
              Before day one, check local ferret rules (some places restrict ownership or require permits, per <a href="https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf">Lafeber</a>). In the first week, book an exam with a ferret-experienced veterinarian; the <a href="https://www.merckvetmanual.com/all-other-pets/ferrets/routine-health-care-for-ferrets">Merck Veterinary Manual</a> recommends yearly exams and vaccination against rabies and canine distemper.
            </p>
          </CalloutBox>

          <h2 id="before">Before You Bring It Home</h2>
          <p>
            Have the essentials in place before the ferret arrives, so its first day is calm rather than chaotic. The core setup: a properly sized multi-level cage with hammocks and bedding, litter boxes and ferret-safe litter, food and water dishes (a heavy ceramic bowl plus an optional backup bottle), a starter supply of an appropriate food — ideally the same one the ferret has been eating, to avoid an immediate diet change — and a carrier. Confirm ferrets are legal where you live before any of this (see <a href="/ownership/ferret-legality-by-state">legality by state</a>), and ferret-proof at least one room: ferrets squeeze through gaps as small as an inch or two, chew and swallow soft rubber and foam, and climb into appliances. The full cage and proofing detail is on the <a href="/care/cage-setup">cage setup</a> page.
          </p>

          <div className="not-prose my-8 rounded-lg border border-brand-border bg-brand-primary-pale/30 p-6">
            <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Getting the core setup together</p>
            <p className="mt-2 text-base font-semibold text-brand-text-dark">See the starter essentials</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-text-mid">
              The ferret starter essentials page collects the day-one core above — cage, bedding, litter,
              food and water, and a carrier — in one place so nothing is missing on arrival day. The{' '}
              <a href="/ownership/ferret-supplies-checklist" className="text-brand-primary underline-offset-2 hover:underline">supplies checklist</a>{' '}
              walks the same categories item by item.
            </p>
            <p className="mt-3 text-2xs leading-relaxed text-brand-text-light">
              The starter essentials page includes shop links, and we never accept payment for favorable placement.{' '}
              <a href="/disclosure" className="font-medium text-brand-primary underline-offset-2 hover:underline">Disclosure</a>.
            </p>
            <a
              href="/ferret-starter-kit"
              className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-brand-primary px-5 py-2.5 text-sm font-semibold text-white no-underline hover:bg-brand-primary-dark"
            >
              See the ferret starter essentials &rarr;
            </a>
          </div>

          <h2 id="day1">Day 1: Arrival</h2>
          <p>
            Keep the first day low-key. Bring the ferret home, let it explore its cage and immediate area quietly, and resist the urge to handle it constantly or show it off. Make sure it knows where its food, water, and litter are. A new ferret may sleep heavily, hide, or be skittish — all normal responses to a stressful move. Speak softly, move slowly, and let the ferret set the pace. The goal of day one is simply that the ferret feels safe, not that you have bonded.
          </p>

          <h2 id="day23">Days 2–3: Settling In</h2>
          <p>
            As the ferret begins to relax, start brief, gentle handling sessions and short periods of supervised out-of-cage time in your ferret-proofed room. Keep these sessions calm and end them before the ferret becomes overwhelmed. Begin establishing the litter routine — ferrets tend to back into corners to eliminate, so place litter boxes accordingly and reward correct use. Watch eating and drinking closely; a ferret that is not eating is a concern, since ferrets can become hypoglycemic quickly, and persistent refusal warrants a call to your vet.
          </p>

          <h2 id="day45">Days 4–5: First Training</h2>
          <p>
            With some trust established, begin gentle litter and bite-inhibition training using positive reinforcement — a high-value meat treat is the most effective reward (see <a href="/diet/safe-treats">safe treats</a>). Keep sessions short and upbeat. Nipping is normal in a new or young ferret and responds to consistent, gentle correction over time, not punishment. The fuller behavioral approach is on the <a href="/behavior/training-and-bonding">training and bonding</a> page. Continue expanding supervised playtime as the ferret grows more confident.
          </p>

          <h2 id="day67">Days 6–7: Expanding Trust</h2>
          <p>
            By the end of the first week, most ferrets are noticeably more settled — exploring confidently, dooking during play, perhaps initiating contact with you. Lengthen out-of-cage sessions, introduce enrichment like tunnels and dig boxes, and keep reinforcing the litter and handling routines. If you have other pets, this is still too early for unsupervised mixing; introductions come gradually and under close watch (see <a href="/ownership/ferrets-and-other-pets">ferrets and other pets</a>). The first week is about foundation, not finished training.
          </p>

          <h2 id="vet">The Vet Visit</h2>
          <p>
            Book a wellness exam with an exotic-mammal veterinarian within the first week or so, even if the ferret seems healthy. The visit establishes a baseline, confirms vaccination status and schedules any needed vaccines (see <a href="/health/vaccinations">the vaccination schedule</a>), and gives you a relationship with a ferret-experienced vet before you need one urgently. Because relatively few clinics treat ferrets, identify and book your vet early rather than scrambling in an emergency. The <a href="/health/vet-visit-prep">vet visit prep</a> page covers what to bring and expect.
          </p>

          <h2 id="quarantine">Quarantine for Multi-Ferret Homes</h2>
          <p>
            If you already have ferrets, quarantine the newcomer separately for the first couple of weeks before introductions. This protects your resident ferrets from any transmissible illness the new arrival may be incubating and gives the newcomer space to settle. Handle resident ferrets and the newcomer with attention to hygiene between them, and introduce them gradually and under supervision once the quarantine period has passed without signs of illness.
          </p>

          <HopDisclosure siteId="ferret-com" href={["/go/amazon/B001NJ0DAY?s=first-week-checklist", "/go/amazon-brand/ferret+hammock?s=first-week-checklist", "/go/amazon-brand/ferret+fleece+liner?s=first-week-checklist", "/go/amazon-brand/ferret+corner+litter+pan?s=first-week-checklist", "/go/amazon-brand/ferret+litter?s=first-week-checklist", "/go/amazon-brand/high+protein+ferret+food+kibble?s=first-week-checklist"]} />

          <div id="shop-first-week" className="my-6 overflow-x-auto max-w-full min-w-0 not-prose">
            <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
              <caption className="text-left font-semibold text-brand-dark p-3">Shop the first-week setup</caption>
              <thead>
                <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                  <th scope="col" className="p-3 font-bold text-brand-dark">Item</th>
                  <th scope="col" className="p-3 font-bold text-brand-dark">On Amazon</th>
                  <th scope="col" className="p-3 font-bold text-brand-dark">When</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Cage</th>
                  <td className="p-3">Critter Nation double unit<TableShopLink href="/go/amazon/B001NJ0DAY?s=first-week-checklist" product="Critter Nation double unit" /></td>
                  <td className="p-3">Set up before arrival day</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Hammock</th>
                  <td className="p-3">Ferret hammock<TableShopLink href="/go/amazon-brand/ferret+hammock?s=first-week-checklist" product="Ferret hammock" /></td>
                  <td className="p-3">A dark place to sleep on day 1</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Fleece bedding</th>
                  <td className="p-3">Ferret fleece cage liner<TableShopLink href="/go/amazon-brand/ferret+fleece+liner?s=first-week-checklist" product="Ferret fleece cage liner" /></td>
                  <td className="p-3">Before arrival day</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Litter pan</th>
                  <td className="p-3">Ferret corner litter pan<TableShopLink href="/go/amazon-brand/ferret+corner+litter+pan?s=first-week-checklist" product="Ferret corner litter pan" /></td>
                  <td className="p-3">Litter training, days 4–5</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Litter</th>
                  <td className="p-3">Ferret litter<TableShopLink href="/go/amazon-brand/ferret+litter?s=first-week-checklist" product="Ferret litter" /></td>
                  <td className="p-3">Litter training, days 4–5</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <th scope="row" className="p-3 font-bold text-brand-dark text-left">Food</th>
                  <td className="p-3">High-protein ferret kibble<TableShopLink href="/go/amazon-brand/high+protein+ferret+food+kibble?s=first-week-checklist" product="High-protein ferret kibble" /></td>
                  <td className="p-3">From day 1</td>
                </tr>
              </tbody>
            </table>
            <p className="mt-2 text-xs text-brand-text-mid">The cage link opens one Amazon product page; the other links open an Amazon search. They are not a ranked list and do not replace veterinary care.</p>
          </div>

          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Litter for training week
            </div>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+litter?s=first-week-checklist"
                amazonLabel="Browse ferret litter on Amazon →"
              />
            </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <h2 id="sources">Sources</h2>
          <ul>
            <li><a href="https://lafeber.com/vet/wp-content/uploads/2020/08/Care-of-the-Ferret-2020.pdf">Lafeber Company: Care of the Ferret (2020)</a></li>
            <li><a href="https://www.merckvetmanual.com/all-other-pets/ferrets/routine-health-care-for-ferrets">Merck Veterinary Manual: Routine Health Care for Ferrets</a></li>
          </ul>
          <p>
            New-ferret acclimation, early training, quarantine practice, and wellness-exam recommendations are drawn from Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and American Ferret Association owner guidance. Vaccination expectations follow standard exotic-mammal veterinary practice. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general information, not individualized veterinary advice. Schedule a wellness exam with a veterinarian familiar with ferrets, and seek prompt care if a new ferret stops eating or shows signs of illness.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
