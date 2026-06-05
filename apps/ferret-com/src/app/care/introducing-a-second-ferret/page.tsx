import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Introducing a Second Ferret — Quarantine & Bonding | Ferret.com',
  description:
    'A step-by-step guide to introducing a second ferret: quarantine first, neutral-territory meetings, reading rough play vs aggression, and timeline.',
  path: '/care/introducing-a-second-ferret',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Introducing a Second Ferret',
  description:
    'How to introduce a new ferret to a resident: quarantine, neutral meetings, normal rough play versus aggression, and a realistic bonding timeline.',
  url: 'https://ferret.com/care/introducing-a-second-ferret',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})
const combined = combineSchemas(schema)

export default function IntroducingSecondFerretPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Introducing a Second Ferret',
          subtitle:
            'Ferrets are social and most thrive with company, so adding a second ferret is usually a good decision. But ferrets play rough, and the introduction has to be managed — quarantine first for health, then a gradual, supervised bonding on neutral ground. Here is how to do it without confusing normal play for a fight.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Introducing a Second Ferret', href: '/care/introducing-a-second-ferret' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why a Second Ferret', href: '#why' },
                { label: 'Quarantine First', href: '#quarantine' },
                { label: 'Neutral-Territory Meetings', href: '#neutral' },
                { label: 'Play vs. Aggression', href: '#play-aggression' },
                { label: 'Sharing a Cage', href: '#cage' },
                { label: 'Realistic Timeline', href: '#timeline' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Cage Setup', href: '/care/cage-setup' },
                { label: 'Multi-Level Housing', href: '/care/multi-level-housing' },
                { label: 'Vaccinations', href: '/health/vaccinations' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-introducing-a-second-ferret"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Care Hub', href: '/care' },
          { title: 'Multi-Ferret Introductions', href: '/behavior/multi-ferret-introductions' },
          { title: 'Stress Signs', href: '/behavior/stress-signs' },
          { title: 'Cage Setup', href: '/care/cage-setup' },
        ]}
>
        <div className="carloOS-article">
          <h2 id="why">Why a Second Ferret Is Usually a Good Idea</h2>
          <p>
            Ferrets are social animals. In most households a single ferret left alone for the hours its owner is at work is an under-stimulated ferret, and the common result is a more demanding, sometimes more frustrated animal. A bonded pair or group entertains itself, sleeps in a companionable pile, and engages in the wrestling play that is central to ferret behavior. For most keepers, two ferrets are not twice the work of one — the marginal effort is small and the welfare gain is large.
          </p>
          <p>
            That said, the introduction is a process, not an event. Ferrets do not always accept a newcomer instantly, and rushing it is the main way introductions go wrong. The two pillars are quarantine for health and gradual, neutral-territory bonding for behavior.
          </p>

          <h2 id="quarantine">Quarantine First</h2>
          <p>
            Before the new ferret meets the resident, it should spend a quarantine period housed separately — commonly a couple of weeks — to protect both animals from disease. A new ferret can carry illness that is not yet visible, and ferrets are susceptible to several contagious conditions. During quarantine:
          </p>
          <ul>
            <li><strong>House the newcomer in a separate cage in a separate room</strong> where the two cannot make contact, and tend to the resident ferret first to avoid carrying anything to it on your hands and clothes.</li>
            <li><strong>Wash your hands and ideally change clothes</strong> between handling the two ferrets.</li>
            <li><strong>Schedule a veterinary check-up</strong> for the new ferret to confirm it is healthy and current on its vaccinations before any introduction. Our <a href="/health/vaccinations">vaccinations</a> guide explains why a ferret's vaccination status matters, and bringing both animals' history along is part of the <a href="/health/vet-visit-prep">vet visit prep</a> we recommend.</li>
            <li><strong>Watch the newcomer for any signs of illness</strong> through the quarantine window; only a healthy, vet-checked ferret should move on to introductions.</li>
          </ul>
          <p>
            Skipping quarantine to speed things up is the one shortcut that can cost you both ferrets. Take the full window.
          </p>

          <h2 id="neutral">Neutral-Territory Meetings</h2>
          <p>
            Once the newcomer is cleared, begin scent and visual familiarization before any face-to-face contact. Swap bedding or sleep sacks between the two cages so each ferret grows used to the other's smell, and let them see each other through cage bars or a barrier for a few days.
          </p>
          <p>
            The first physical meetings should happen on <strong>neutral ground</strong> — a room or space neither ferret considers its own — so the resident does not defend its territory. Keep the sessions short at first and supervise every second. A bathtub (dry) or an unfamiliar playpen are common neutral-meeting spaces. Have a way to separate them quickly if needed: a towel to drop between them or a way to scoop one up. Gradually lengthen the supervised sessions as the two relax around each other, and only then move toward shared space.
          </p>

          <h2 id="play-aggression">Reading Normal Play Versus Real Aggression</h2>
          <p>
            This is the part new owners find most alarming, because <strong>normal ferret play looks startlingly rough</strong>. Ferrets wrestle, chase, pin one another, grab the scruff, drag each other around, and produce dramatic-sounding chatter and screeches in play. The first time you see it, it can look like a serious fight when it is not.
          </p>
          <p>
            Signs that what you are seeing is normal play:
          </p>
          <ul>
            <li>Both ferrets keep coming back for more and take turns chasing and being chased.</li>
            <li>There is dooking, bouncing, and the loose-limbed "war dance," and no one is trying to escape.</li>
            <li>No blood, no injuries, and the rough handling does not draw real distress.</li>
          </ul>
          <p>
            Signs of genuine aggression that mean you should separate them and slow down:
          </p>
          <ul>
            <li>One ferret is clearly trying to flee and is being pursued and pinned against its will.</li>
            <li>Locked-on biting that breaks skin or draws blood, rather than the grab-and-release of play.</li>
            <li>Constant terrified screaming from a ferret that is not re-engaging, raised fur, and a tail puffed in fear.</li>
          </ul>
          <p>
            When in doubt, separate them, give it a rest, and resume shorter neutral sessions later. The goal is a relationship that builds over repeated calm meetings, not one forced in a single long session.
          </p>

          <h2 id="cage">Moving to a Shared Cage</h2>
          <p>
            Only once the two are playing comfortably and showing no real aggression across several supervised sessions should they share a cage. When they do, give them room and resources so neither feels crowded into conflict: a cage large enough for both with the vertical layout from our <a href="/care/multi-level-housing">multi-level housing</a> guide, multiple sleep sacks and hammocks so each has a place to retreat, more than one litter pan, and enough food and water stations that they are not forced to compete. The general layout and security principles in our <a href="/care/cage-setup">cage setup</a> guide apply throughout. Supervise the first shared nights and confirm they are settling into a companionable pile rather than a standoff.
          </p>

          <h2 id="timeline">A Realistic Timeline</h2>
          <p>
            Some ferret pairs bond within days; others take several weeks of patient, repeated sessions. Both are normal. The variables are individual temperament, age, and prior socialization — a young, well-socialized ferret often accepts a companion quickly, while an older ferret long used to being an only pet may need more time. Let the ferrets set the pace, resist the urge to force shared space before the play is consistently friendly, and judge success by a calm, mutually engaged relationship rather than by hitting a deadline.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Social-behavior, quarantine, and introduction guidance draws on American Ferret Association (AFA) owner-education materials and Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier). Quarantine length and pre-introduction veterinary checks should be confirmed with your own exotics-capable veterinarian. This page is general behavior and husbandry guidance. Return to the <a href="/care">Ferret Care hub</a>.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
