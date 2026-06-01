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
  title: 'Ferret Digging & Burrowing — Why & How to Redirect It | Ferret.com',
  description:
    'Ferrets dig because their polecat ancestors were tunnelers. Learn why ferrets dig at carpet, plants, and litter — and how to build a dig box that saves your floor.',
  path: '/behavior/digging-and-burrowing',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Digging and Burrowing',
  description:
    'Why ferrets dig and burrow, the polecat instinct behind it, and how to redirect digging to a dig box instead of carpet, houseplants, and litter.',
  url: 'https://ferret.com/behavior/digging-and-burrowing',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Behavior', url: 'https://ferret.com/behavior' },
    { name: 'Digging & Burrowing', url: 'https://ferret.com/behavior/digging-and-burrowing' },
  ],
})

const FAQS = [
  {
    question: 'Why does my ferret dig at the corner of the carpet?',
    answer:
      "Digging is hard-wired. Ferrets descend from the European polecat, a tunneling predator that excavated burrows and chased prey underground. Corners, carpet edges, and the soil of houseplants all trigger the same dig-and-burrow program. It is not misbehaviour — it is a strong instinct with nowhere appropriate to go. The fix is to give it somewhere appropriate: a dedicated dig box.",
  },
  {
    question: 'What is the best filler for a ferret dig box?',
    answer:
      "Safe, low-dust options people use include uncooked long-grain rice, dried beans, large smooth river stones (too big to swallow), shredded paper, and ball-pit balls. Avoid anything dusty, anything small enough to inhale or swallow, aromatic softwood shavings (respiratory irritant), and clumping clay litter. Supervise the first few sessions to confirm your ferret digs rather than eats the filler.",
  },
  {
    question: 'Can I stop my ferret from digging entirely?',
    answer:
      "No, and trying tends to backfire. The dig drive is one of the strongest, least-trainable ferret instincts. Suppressing it without an outlet usually just moves the digging somewhere worse. The realistic, humane goal is redirection: make a dig box more rewarding than the carpet, and block access to the spots you most want to protect.",
  },
  {
    question: 'Why does my ferret dig in the litter box and fling litter everywhere?',
    answer:
      "Same instinct, different target. Some ferrets treat the litter box as a dig pit. A high-backed corner box, paper-pellet litter (which flings less than fine litter), and a separate, more appealing dig box nearby usually reduce the litter-flinging considerably.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function FerretDiggingBurrowingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Digging and Burrowing — The Polecat in the Living Room',
          subtitle:
            "If you have ever watched a ferret attack the corner of a rug with the focus of a tiny excavator, you have met one of the species' oldest instincts. Digging is not a behaviour problem — it is a feature. The job is not to eliminate it but to point it somewhere that doesn't cost you your carpet.",
          category: 'Ferret Behavior',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Behavior', href: '/behavior' },
          { name: 'Digging & Burrowing', href: '/behavior/digging-and-burrowing' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Polecat Instinct', href: '#instinct' },
                { label: 'Common Dig Targets', href: '#targets' },
                { label: 'Building a Dig Box', href: '#digbox' },
                { label: 'Safe & Unsafe Fillers', href: '#fillers' },
                { label: 'Protecting Your Floors', href: '#protect' },
                { label: 'When Digging Signals Stress', href: '#stress' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'DIY Enrichment Toys', href: '/behavior/diy-enrichment-toys' },
                { label: 'Exercise & Enrichment', href: '/care/exercise-and-enrichment' },
                { label: 'Stress Signs', href: '/behavior/stress-signs' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret behavior, monthly."
              source="behavior-digging-burrowing"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Watch a ferret discover loose soil and you are watching ten thousand
            years of polecat behaviour switch on at once. The front paws blur,
            the back end braces, and the dirt flies. Domestic ferrets
            (<em>Mustela furo</em>) carry the burrowing instinct of their wild
            ancestor essentially intact — which is wonderful, except when the
            &quot;soil&quot; in question is your brand-new carpet.
          </DropCap>

          <h2 id="instinct">The Polecat Instinct Behind the Mess</h2>
          <p>
            Ferrets were domesticated from the European polecat, a small
            mustelid that hunts rabbits and rodents in their own burrows. To do
            that for a living, an animal needs to be a confident tunneler:
            squeezing into tight underground spaces, digging out blocked
            passages, and following prey through the dark. That entire toolkit —
            the digging, the burrowing, the love of tunnels and tubes — came
            along for the ride into domestication.
          </p>
          <p>
            This is why your ferret tunnels into the laundry basket, burrows
            under the couch cushions, and digs at the carpet. None of it is
            naughtiness. It is a predator doing exactly what its body was built
            to do, indoors, with no rabbits available.
          </p>

          <h2 id="targets">Common Dig Targets</h2>
          <ul>
            <li>
              <strong>Carpet edges and corners.</strong> The texture and the
              &quot;give&quot; mimic loose earth. Corners are favourites
              because they offer a wall to brace against.
            </li>
            <li>
              <strong>Houseplant soil.</strong> Actual dirt is irresistible —
              and many common houseplants are toxic, so this one matters for
              safety, not just tidiness.
            </li>
            <li>
              <strong>Litter boxes.</strong> Some ferrets excavate the litter
              and fling it across the room.
            </li>
            <li>
              <strong>Soft furnishings.</strong> Couch cushions, blankets, and
              bedding get burrowed into for the tunnel experience.
            </li>
          </ul>

          <h2 id="digbox">Building a Dig Box</h2>
          <p>
            The single best fix is a dedicated dig box — a container of safe
            filler that is more fun to dig in than anything else in the house.
            A large plastic storage tub or under-bed box works well:
          </p>
          <ol>
            <li>
              <strong>Pick a roomy, sturdy container</strong> with sides high
              enough to contain most of the flying filler but low enough for
              easy ferret entry.
            </li>
            <li>
              <strong>Fill it a few inches deep</strong> with a safe medium (see
              the next section).
            </li>
            <li>
              <strong>Bury a treat or a favourite toy</strong> the first few
              times to teach the ferret that good things live in the box.
            </li>
            <li>
              <strong>Place it where the ferret already wants to dig</strong> —
              near the problem corner, so the box intercepts the instinct.
            </li>
          </ol>
          <p>
            See our <a href="/behavior/diy-enrichment-toys">DIY enrichment toys</a>{' '}
            guide for more cheap, ferret-safe builds that channel the same
            energy.
          </p>

          <h2 id="fillers">Safe and Unsafe Fillers</h2>
          <CalloutBox variant="tip" title="Good dig-box fillers">
            <p>
              Uncooked long-grain rice, dried beans, large smooth river stones
              (too big to swallow), shredded paper, crumpled newspaper, and
              ball-pit balls are popular, low-mess, low-risk choices. Rotate
              them to keep novelty high.
            </p>
          </CalloutBox>
          <CalloutBox variant="warning" title="Avoid these">
            <p>
              Skip anything dusty (respiratory irritation), anything small
              enough to swallow or inhale, aromatic softwood shavings, clumping
              clay litter (ingestion risk), and styrofoam packing peanuts (which
              shred and get eaten). Always supervise the first few sessions to
              confirm your ferret digs the filler rather than dining on it —
              ferrets are prone to swallowing things, and intestinal blockages
              are a genuine emergency.
            </p>
          </CalloutBox>

          <h2 id="protect">Protecting Your Floors</h2>
          <p>
            Redirection works best alongside a little environmental management:
          </p>
          <ul>
            <li>
              <strong>Cover tempting corners</strong> with a heavy mat, a
              plastic floor protector, or a ceramic tile the ferret cannot dig
              through.
            </li>
            <li>
              <strong>Block access</strong> to houseplants entirely — many are
              toxic, and the soil is a magnet. Elevate them out of reach.
            </li>
            <li>
              <strong>Use runner rugs</strong> in heavy dig zones; they are
              cheaper to replace than wall-to-wall carpet.
            </li>
            <li>
              <strong>Provide tunnels.</strong> Flexible dryer-hose tunnels and
              fabric tubes satisfy the burrow half of the instinct and reduce
              couch-cushion mining.
            </li>
          </ul>

          <h2 id="stress">When Digging Signals Stress</h2>
          <p>
            Most ferret digging is happy, healthy instinct. Occasionally,
            relentless, frantic digging at one spot — especially paired with
            other changes — can be a sign of under-stimulation or stress rather
            than play. A ferret with too little out-of-cage time, too few toys,
            or no companion sometimes funnels that pent-up energy into obsessive
            digging or bar-chewing.
          </p>
          <p>
            If digging looks compulsive rather than joyful, review your{' '}
            <a href="/care/exercise-and-enrichment">enrichment routine</a> and
            check for the broader{' '}
            <a href="/behavior/stress-signs">signs of stress</a> covered
            elsewhere in this section. More play, more space, and more novelty
            usually settle it.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              ferret natural history and behaviour chapters.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              behaviour, enrichment, and welfare.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing enrichment and
              housing guidance.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General behaviour and enrichment information about ferrets, not
            individualized veterinary advice. Suspected ingestion of dig-box
            filler — straining, vomiting, or loss of appetite — is a potential
            blockage emergency and warrants immediate exotic-pet veterinary
            care.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
