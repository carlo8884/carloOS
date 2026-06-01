import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'New Ferret First-Week Checklist — Day by Day | Ferret.com',
  description:
    'A day-by-day plan for a new ferret’s first week: cage setup, vet booking, quarantine for multi-ferret homes, litter and bite training, and bonding without overwhelming the ferret.',
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
  modifiedAt: '2026-06-01T00:00:00Z',
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
          authorAvatar: '🦦',
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
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Owner Notes"
              subtitle="Evidence-based ferret ownership, monthly."
              source="ownership-first-week-checklist"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="before">Before You Bring It Home</h2>
          <p>
            Have the essentials in place before the ferret arrives, so its first day is calm rather than chaotic. The core setup: a properly sized multi-level cage with hammocks and bedding, litter boxes and ferret-safe litter, food and water dishes (a heavy ceramic bowl plus an optional backup bottle), a starter supply of an appropriate food — ideally the same one the ferret has been eating, to avoid an immediate diet change — and a carrier. Confirm ferrets are legal where you live before any of this (see <a href="/ownership/ferret-legality-by-state">legality by state</a>), and ferret-proof at least one room: ferrets squeeze through gaps as small as an inch or two, chew and swallow soft rubber and foam, and climb into appliances. The full cage and proofing detail is on the <a href="/care/cage-setup">cage setup</a> page.
          </p>

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

          <h2 id="sources">Sources</h2>
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
