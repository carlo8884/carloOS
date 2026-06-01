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
  title: 'Ferret Scratching & Digging at Furniture | Ferret.com',
  description:
    'Why ferrets dig at couches, carpet edges, and houseplants, the polecat instinct behind it, and how to redirect the drive with dig boxes instead of fighting it.',
  path: '/behavior/scratching-and-digging-furniture',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Scratching and Digging at Furniture',
  description:
    'Why domestic ferrets scratch and dig at furniture, carpet, and plants, and how to redirect the instinct safely.',
  url: 'https://ferret.com/behavior/scratching-and-digging-furniture',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Behavior', url: 'https://ferret.com/behavior' },
    { name: 'Scratching & Digging at Furniture', url: 'https://ferret.com/behavior/scratching-and-digging-furniture' },
  ],
})

const FAQS = [
  {
    question: "Why does my ferret dig at the carpet in the same corner every day?",
    answer:
      "Corners and edges trigger the strongest digging response because they mimic the entrance to a burrow. The polecat ancestor of the domestic ferret is a fossorial hunter that excavates and follows tunnels, and that drive is hard-wired. Repeated digging at one spot usually means that location has the right tactile and visual cues — an edge, a seam, a transition between surfaces. The fix is to give a more rewarding dig target nearby, not to try to extinguish the behaviour.",
  },
  {
    question: "Can I train a ferret to stop digging entirely?",
    answer:
      "No, and trying to is a common source of frustration. Digging is an instinctive appetitive behaviour, not a learned habit, so it cannot be trained out the way a nuisance habit can. The realistic goal is redirection: provide a dig box filled with a safe medium, and protect the furniture and carpet edges the ferret currently targets. Owners who accept the instinct and channel it have far fewer problems than those who try to suppress it.",
  },
  {
    question: "Is it safe to let my ferret dig in potted plants?",
    answer:
      "No. Potting soil can contain fertilizers, perlite, and fungal spores, and many common houseplants are toxic to small mammals. A ferret that digs in a planter may also ingest soil, which carries an intestinal-blockage and irritation risk. Move plants out of reach and offer a dedicated dig box instead. See our toxic-foods and plants references for the species-level concerns.",
  },
  {
    question: "What can I put in a dig box that is safe?",
    answer:
      "Safe options include uncooked long-grain rice, dried beans (used whole, supervised), shredded paper, smooth river stones too large to swallow, and ball-pit balls. Avoid anything small enough to ingest and swallow, anything dusty (clay litter, fine sand) that irritates the airways, and anything sharp. Always supervise the first few sessions with a new medium to confirm the ferret digs rather than eats.",
  },
  {
    question: "My ferret scratches at the bottom of the cage at night — is that normal?",
    answer:
      "Yes, this is extremely common and usually a request for out-of-cage time or a sign of under-stimulation. Ferrets are most active at dawn and dusk, and a bored ferret will dig at the cage pan, scratch the door, or chew the bars. Increase enrichment, add a dig box to the cage, and ensure adequate daily free-roam time. Persistent frantic digging paired with appetite or weight changes warrants a vet check.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function ScratchingDiggingFurniturePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Scratching and Digging at Furniture',
          subtitle:
            'Digging is one of the strongest instincts a ferret has, and it is the source of more frustrated owner questions than almost any other behaviour. The good news: it is entirely manageable once you stop trying to suppress it and start redirecting it.',
          category: 'Ferret Behavior',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Behavior', href: '/behavior' },
          { name: 'Scratching & Digging at Furniture', href: '/behavior/scratching-and-digging-furniture' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Ferrets Dig', href: '#why' },
                { label: 'Common Targets', href: '#targets' },
                { label: 'The Dig Box Solution', href: '#digbox' },
                { label: 'Protecting Furniture', href: '#protect' },
                { label: 'When Digging Is a Stress Sign', href: '#stress' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Digging & Burrowing', href: '/behavior/digging-and-burrowing' },
                { label: 'DIY Enrichment Toys', href: '/behavior/diy-enrichment-toys' },
                { label: 'Stress Signs', href: '/behavior/stress-signs' },
                { label: 'Behavior Hub', href: '/behavior' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret behavior, monthly."
              source="behavior-scratching-digging"
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
            A ferret tearing at the corner of a sofa or excavating the carpet
            edge looks destructive, but it is doing exactly what its body was
            built to do. The European polecat — the wild ancestor of every
            domestic ferret — is a burrowing predator that digs out prey and
            follows tunnel systems underground. That drive does not switch off
            in a living room. The owner&apos;s job is not to fight the instinct
            but to give it somewhere acceptable to go.
          </DropCap>

          <h2 id="why">Why Ferrets Dig</h2>
          <p>
            Digging in ferrets is an appetitive behaviour: it is intrinsically
            rewarding, performed for its own sake, and not dependent on a payoff
            at the end. This is why it resists conventional training. A behaviour
            that is its own reward cannot be extinguished by withholding treats
            or attention; the activity itself satisfies the animal.
          </p>
          <p>
            Several distinct drives feed the digging behaviour you see at home:
          </p>
          <ul>
            <li>
              <strong>Burrow-building instinct.</strong> Wild polecats dig dens
              and den entrances. Carpet corners, the gap under a couch, and the
              soil in a planter all present the right edges and textures.
            </li>
            <li>
              <strong>Foraging and hunting.</strong> In the wild, digging
              unearths prey. A ferret pawing at the litter or food bowl is
              running the same motor pattern.
            </li>
            <li>
              <strong>Temperature and comfort regulation.</strong> Wild dens
              buffer temperature. A ferret digging into bedding or a hammock is
              nesting, a related behaviour described in the husbandry literature.
            </li>
            <li>
              <strong>Boredom and excess energy.</strong> An under-stimulated
              ferret defaults to instinctive behaviours, and digging is high on
              the list. This overlaps with the cage-scratching seen in confined,
              under-exercised animals.
            </li>
          </ul>

          <h2 id="targets">Common Targets and Why They Attract</h2>
          <p>
            Ferrets do not dig randomly. Certain features reliably trigger the
            behaviour, and recognizing them helps you predict and pre-empt
            damage:
          </p>
          <ul>
            <li>
              <strong>Carpet edges and seams.</strong> The transition between
              carpet and wall or between two flooring types reads as a burrow
              entrance. This is the single most-reported target.
            </li>
            <li>
              <strong>Upholstery corners and cushion gaps.</strong> Soft,
              yielding material that gives way under the paws mimics loose soil.
            </li>
            <li>
              <strong>Potted plants.</strong> Actual soil is the closest thing
              to the natural substrate, which is exactly why it is so attractive
              and so hazardous — see the toxicity and ingestion concerns in the
              FAQ.
            </li>
            <li>
              <strong>Litter and food bowls.</strong> Pawing litter out of the
              box or tipping a food bowl is the foraging pattern misdirected.
            </li>
          </ul>

          <CalloutBox variant="warning" title="The ingestion risk behind digging">
            <p>
              The danger in furniture and carpet digging is not just property
              damage — it is gastrointestinal obstruction. Ferrets that dig at
              foam cushions, rubber backing, or carpet fibres frequently mouth
              and swallow the material. Foam-rubber ingestion is a classic cause
              of intestinal blockage in ferrets and is a surgical emergency.
              Redirecting digging to a safe medium is partly a foreign-body
              prevention measure.
            </p>
          </CalloutBox>

          <h2 id="digbox">The Dig Box Solution</h2>
          <p>
            The single most effective intervention is a dedicated dig box. The
            principle is simple: give the ferret a target that is more rewarding
            than the furniture, and the furniture loses its appeal. A dig box
            does for the digging instinct what a corner litter box does for
            elimination — it works with the animal&apos;s preferences instead of
            against them.
          </p>
          <p>
            A workable dig box is a deep, sturdy plastic tub with a cut-out
            entrance, filled with a safe medium the ferret can plunge into and
            excavate:
          </p>
          <ul>
            <li>
              <strong>Uncooked long-grain rice</strong> — pours and shifts like
              soil, easy to clean up, and unappealing to eat in quantity.
            </li>
            <li>
              <strong>Smooth river stones</strong> too large to swallow — heavy,
              satisfying to move, and impossible to ingest.
            </li>
            <li>
              <strong>Shredded paper or a ball pit</strong> — lightweight and
              endlessly diggable, with no dust.
            </li>
            <li>
              <strong>Dried beans</strong> used whole and supervised — a popular
              foraging medium, though it must be monitored for ingestion.
            </li>
          </ul>
          <p>
            Avoid clay litter, fine sand, and cedar or pine shavings: the dust
            irritates the ferret&apos;s sensitive respiratory tract. Avoid
            anything small enough to swallow. Always supervise the first few
            sessions with any new medium to confirm the ferret digs rather than
            eats. For more build ideas, see our{' '}
            <a href="/behavior/diy-enrichment-toys">DIY enrichment toys</a> guide,
            and for the broader instinct, our{' '}
            <a href="/behavior/digging-and-burrowing">digging and burrowing</a>{' '}
            reference.
          </p>

          <h2 id="protect">Protecting Furniture and Carpet</h2>
          <p>
            A dig box reduces but rarely eliminates interest in favourite spots.
            Pair it with physical protection of the targets the ferret already
            prefers:
          </p>
          <ul>
            <li>
              <strong>Block carpet corners.</strong> A heavy plastic chair mat,
              a section of ceramic tile, or a piece of acrylic over the targeted
              corner removes the diggable texture. Some owners use clear plastic
              carpet runners pinned along baseboards.
            </li>
            <li>
              <strong>Close gaps under furniture.</strong> Blocking the space
              under a couch with a board removes both the den-entrance cue and
              the hiding spot that reinforces it.
            </li>
            <li>
              <strong>Move plants entirely out of reach.</strong> This is
              non-negotiable given the toxicity and soil-ingestion risks.
            </li>
            <li>
              <strong>Supervise free-roam time.</strong> Most furniture damage
              happens during unsupervised roaming. A ferret-proofed play space
              with a dig box present channels the behaviour where you want it.
            </li>
          </ul>
          <p>
            Punishment does not work and is counterproductive. As covered in our{' '}
            <a href="/behavior/training-and-bonding">training and bonding</a>{' '}
            guide, aversive responses teach a ferret that human hands are
            dangerous and damage the bond without reducing an instinctive
            behaviour.
          </p>

          <h2 id="stress">When Digging Is a Stress Sign</h2>
          <p>
            Normal digging is relaxed, exploratory, and self-limiting — the
            ferret digs, loses interest, and moves on. Frantic, repetitive
            digging at the cage pan or a single spot for long stretches,
            especially at night, can signal under-stimulation, insufficient
            out-of-cage time, or stress. Read it alongside other welfare signals
            described in our <a href="/behavior/stress-signs">stress signs</a>{' '}
            reference.
          </p>
          <p>
            A sudden change in digging behaviour — a previously calm ferret
            digging compulsively, or a digging ferret that suddenly stops moving
            altogether — should be evaluated alongside appetite, weight, and
            energy. Behaviour changes in ferrets frequently have medical
            underpinnings, and an exotic-pet vet visit is the right response to a
            sudden, unexplained shift.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> 4th ed.
              Saunders/Elsevier — ferret behaviour and gastrointestinal
              foreign-body chapters.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              behaviour, enrichment, and foreign-body presentation.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing enrichment and
              behaviour guidance.
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — clinician
              resources on ferret welfare and enrichment.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            This page is general behaviour information about ferrets and is not
            individualized veterinary advice. Sudden or compulsive behaviour
            changes warrant an exotic-pet vet visit before pursuing a
            behaviour-only solution.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
