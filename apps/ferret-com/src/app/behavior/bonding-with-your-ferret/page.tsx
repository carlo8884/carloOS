import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
  ArticleSourcesList,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Bonding With Your Ferret — Build Trust Fast | Ferret.com',
  description:
    'A week-by-week plan for bonding with a new ferret: scent transfer, hand-feeding, floor time, and reading trust signals to win a shy ferret over.',
  path: '/behavior/bonding-with-your-ferret',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Bonding With Your Ferret',
  description:
    'How to bond with a new ferret — scent transfer, hand-feeding, floor-level play, and patient socialization for shy or rescue ferrets, with a week-by-week timeline.',
  url: 'https://ferret.com/behavior/bonding-with-your-ferret',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Behavior', url: 'https://ferret.com/behavior' },
    { name: 'Bonding With Your Ferret', url: 'https://ferret.com/behavior/bonding-with-your-ferret' },
  ],
})

const FAQS = [
  {
    question: 'How long does it take to bond with a ferret?',
    answer:
      "For a friendly, well-socialized kit, real trust often appears within the first couple of weeks of consistent daily handling. For a shy, fearful, or rescue ferret, it can take a couple of months of patient work. The variable that matters most is consistency — short daily sessions build trust far faster than occasional long ones.",
  },
  {
    question: 'Why does scent transfer help with bonding?',
    answer:
      "Ferrets navigate the world by smell far more than by sight. Putting a worn, unwashed shirt in the cage, or wearing the same shirt for a few days before handling, teaches the ferret that your scent means safety and good things. Familiar smell lowers a ferret's guard well before it is comfortable being touched.",
  },
  {
    question: "My rescue ferret hides and won't come to me — what do I do?",
    answer:
      "Go slow and let the ferret set the pace. Sit quietly on the floor at its level, offer treats from a flat palm, and avoid grabbing or chasing — both feel like predation. Hand-feeding through the cage bars builds positive association before any handling. If a ferret is still hiding or actively avoiding contact after six to eight weeks of patient socialization, ask an exotic-pet vet to rule out a medical contributor, since pain and illness can drive avoidance.",
  },
  {
    question: 'Should I wake my ferret up to play and bond?',
    answer:
      "Not abruptly. Ferrets sleep very deeply, and a startled wake-up undermines trust. Let the ferret rouse naturally, or wake it gently with warm hands and a soft voice. Bonding happens during the ferret's awake, playful windows — usually around dawn and dusk — not by forcing interaction during a deep sleep.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

const SOURCES = [
  {
    label: "Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery, 4th ed. — ferret social behaviour and welfare chapters",
    publisher: "Quesenberry KE, Carpenter JW (eds.) — Saunders/Elsevier",
  },
  {
    label: "Journal of Exotic Pet Medicine — articles on ferret behaviour, socialization, and welfare",
    publisher: "Elsevier",
  },
  {
    label: "American Ferret Association (AFA) — socialization and bonding owner guidance",
    url: "https://www.ferret.org",
    publisher: "AFA",
  },
  {
    label: "American Veterinary Society of Animal Behavior (AVSAB) — position statements on positive-reinforcement and trust-based handling",
    url: "https://avsab.org",
    publisher: "AVSAB",
  },
]

export default function FerretBondingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Bonding With Your Ferret — Earning Trust, Step by Step',
          subtitle:
            "A bonded ferret is a joy: it seeks you out, naps on your lap, and greets you with the bouncy war dance. Getting there is mostly about patience, consistency, and working with a ferret's instincts rather than against them. Here is a practical, week-by-week plan for building real trust with a new, shy, or rescue ferret.",
          category: 'Ferret Behavior',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Behavior', href: '/behavior' },
          { name: 'Bonding With Your Ferret', href: '/behavior/bonding-with-your-ferret' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'How Ferrets Bond', href: '#how' },
                { label: 'The First 72 Hours', href: '#first' },
                { label: 'Week-by-Week Plan', href: '#plan' },
                { label: 'Scent & Hand-Feeding', href: '#scent' },
                { label: 'Reading Trust Signals', href: '#signals' },
                { label: 'Shy & Rescue Ferrets', href: '#shy' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Training & Bonding', href: '/behavior/training-and-bonding' },
                { label: 'Dooking & Vocalizations', href: '/behavior/dooking-and-vocalizations' },
                { label: 'Biting & Nipping', href: '/behavior/biting-and-nipping' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret behavior, monthly."
              source="behavior-bonding"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Behavior Hub', href: '/behavior' },
          { title: 'Training & Bonding', href: '/behavior/training-and-bonding' },
          { title: 'Biting & Nipping', href: '/behavior/biting-and-nipping' },
          { title: 'Leash & Harness Training', href: '/behavior/leash-and-harness-training' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Bonding with a ferret is less like training a dog and more like
            befriending a small, busy, deeply curious wild animal that happens to
            live in your home. Ferrets are not motivated by pleasing you the way
            dogs are; they bond through trust, scent, and the steady accumulation
            of good experiences. Build those, and you get a companion that
            genuinely seeks out your company.
          </DropCap>

          <h2 id="how">How Ferrets Actually Bond</h2>
          <p>
            A ferret&apos;s social world is built on smell and safety. It bonds
            to people it associates with positive experiences — food, gentle
            play, warmth, and predictable handling — and it learns those
            associations through its nose first and its eyes second. The
            practical implication: bonding is a matter of becoming a familiar,
            safe, rewarding presence, not a matter of dominating or demanding
            attention.
          </p>

          <h2 id="first">The First 72 Hours</h2>
          <p>
            A new ferret — kit or adult — needs time to decompress. The first few
            days, expect cautious exploration, a great deal of sleep, and maybe
            some hiding.
          </p>
          <ul>
            <li>
              <strong>Set up in a calm, low-traffic spot.</strong> A quiet
              corner lowers stress while the ferret learns its new world.
            </li>
            <li>
              <strong>Hand-feed treats through the bars.</strong> This starts the
              all-important &quot;your hand = good things&quot; association
              before any handling.
            </li>
            <li>
              <strong>Keep early out-of-cage time short and optional.</strong>{' '}
              Let the ferret come to you. Chasing and grabbing a frightened new
              ferret sets you back.
            </li>
            <li>
              <strong>Don&apos;t force it.</strong> Pushing for cuddles in the
              first 72 hours usually backfires.
            </li>
          </ul>

          <h2 id="plan">A Week-by-Week Plan</h2>
          <ol>
            <li>
              <strong>Week 1 — familiarity.</strong> Daily hand-feeding, a worn
              shirt in the cage for scent transfer, and brief, calm out-of-cage
              sessions only if the ferret seeks contact. The goal is for your
              presence and scent to become ordinary and safe.
            </li>
            <li>
              <strong>Week 2 — floor time.</strong> Sit on the floor at the
              ferret&apos;s level during its active windows. Let it climb on you,
              sniff, and explore. Most well-adjusted ferrets begin{' '}
              <a href="/behavior/dooking-and-vocalizations">dooking</a> during
              play by now — a strong sign things are going well.
            </li>
            <li>
              <strong>Weeks 3-4 — handling and play.</strong> Build up gentle
              handling and interactive play. Pair any bite-inhibition work from
              our <a href="/behavior/biting-and-nipping">biting guide</a> with
              plenty of positive interaction.
            </li>
            <li>
              <strong>Month 2+ — partnership.</strong> A bonded ferret approaches
              you for attention, naps on or near you, and greets you with the war
              dance. This is the payoff.
            </li>
          </ol>

          <h2 id="scent">Scent and Hand-Feeding — The Two Power Tools</h2>
          <CalloutBox variant="tip" title="The two highest-leverage moves">
            <p>
              <strong>Scent transfer:</strong> wear a t-shirt for a few days, then
              leave it in the cage. The ferret learns your smell in a low-pressure
              way, long before it lets you handle it.{' '}
              <strong>Hand-feeding:</strong> offer a favourite treat from a flat
              palm. Few things build trust faster than a hand that reliably
              delivers good things. Together, these two habits do most of the
              bonding work.
            </p>
          </CalloutBox>

          <h2 id="signals">Reading Trust Signals</h2>
          <p>
            Ferrets tell you how the bond is going. Learn to read the signs:
          </p>
          <ul>
            <li>
              <strong>Dooking and the war dance</strong> in your presence: the
              ferret feels safe and playful with you.
            </li>
            <li>
              <strong>Falling asleep on or against you:</strong> a powerful trust
              signal — ferrets sleep deeply and only do so where they feel safe.
            </li>
            <li>
              <strong>Approaching, climbing, and seeking contact:</strong> the
              ferret has decided you are good company.
            </li>
            <li>
              <strong>Gentle mouthing without pressure:</strong> social, not
              aggressive, contact.
            </li>
            <li>
              <strong>Persistent hiding, hissing, or flinching:</strong> trust is
              still being built — slow down and add more scent and hand-feeding.
            </li>
          </ul>

          <h2 id="shy">Shy and Rescue Ferrets</h2>
          <p>
            Ferrets that were under-socialized, handled roughly, or surrendered
            need the same plan, stretched over a longer timeline. The cardinal
            rules: let the ferret set the pace, never chase or grab (both read as
            predation), and lean heavily on scent and hand-feeding. Sit quietly
            and let curiosity do the work — a ferret&apos;s natural nosiness is
            your ally.
          </p>
          <CalloutBox variant="warning" title="When shyness might be medical">
            <p>
              If a ferret is still hiding or actively avoiding human contact after
              six to eight weeks of patient, consistent socialization, ask an
              exotic-pet vet to check for an underlying cause. Pain and illness can
              both drive fear and avoidance, and a frightened ferret is sometimes a
              ferret that does not feel well.
            </p>
          </CalloutBox>
          <p>
            For litter habits, harness work, and the full multi-ferret
            introduction protocol that complements bonding, see our{' '}
            <a href="/behavior/training-and-bonding">training and bonding
            reference</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            General behaviour information about ferrets, not individualized
            veterinary or behavioural advice. Prolonged fear or avoidance can have
            a medical contributor and warrants an exotic-pet vet evaluation.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
