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
  title: 'DIY Ferret Enrichment Toys — Cheap, Safe & Fun | Ferret.com',
  description:
    'Build cheap, safe ferret enrichment at home: tunnels, dig boxes, ball pits, and foraging games. Plus the safety rules that keep DIY toys from becoming a blockage hazard.',
  path: '/behavior/diy-enrichment-toys',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'DIY Ferret Enrichment Toys',
  description:
    'Homemade ferret enrichment ideas — tunnels, dig boxes, ball pits, and foraging games — built from cheap materials, with safety rules to prevent ingestion and blockage.',
  url: 'https://ferret.com/behavior/diy-enrichment-toys',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Behavior', url: 'https://ferret.com/behavior' },
    { name: 'DIY Enrichment Toys', url: 'https://ferret.com/behavior/diy-enrichment-toys' },
  ],
})

const FAQS = [
  {
    question: 'What is the easiest DIY ferret toy to make?',
    answer:
      "A tunnel. A length of wide, flexible dryer-vent hose, a few connected cardboard boxes, or fabric tubes instantly satisfy a ferret's deep love of burrowing and tunnelling. It costs almost nothing and is one of the most reliably loved enrichment items you can offer.",
  },
  {
    question: 'Are cardboard and paper safe for ferrets to chew?',
    answer:
      "Light chewing of cardboard and paper is generally low-risk, but ferrets that actually swallow chunks can develop intestinal blockages, which are a serious emergency. Supervise, and if your ferret is a determined eater rather than a chewer, choose toys it cannot tear off and swallow.",
  },
  {
    question: 'Why are rubber and foam toys dangerous for ferrets?',
    answer:
      "Ferrets are notorious for chewing off and swallowing pieces of soft rubber, foam, latex, and sponge — and these cause intestinal obstructions, one of the most common surgical emergencies in pet ferrets. Avoid squeaky latex dog toys, foam, soft rubber, and rubber bands entirely. Stick to materials a ferret cannot ingest in chunks.",
  },
  {
    question: 'How often should I rotate ferret toys?',
    answer:
      "Rotating toys every few days keeps novelty high and engagement strong. A ferret that has lost interest in a 'boring' toy often falls back in love with it after a week out of sight. Rotation is free enrichment and an easy way to keep a curious ferret stimulated.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function FerretDIYEnrichmentPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'DIY Ferret Enrichment Toys — Big Fun, Tiny Budget',
          subtitle:
            "Ferrets are relentlessly curious, easily bored, and absurdly easy to delight. You do not need an expensive shopping cart to keep one stimulated — a few cardboard boxes, a length of hose, and some household odds and ends go a remarkably long way. Here are safe, cheap, ferret-tested ideas, plus the safety rules that keep DIY fun from becoming a vet emergency.",
          category: 'Ferret Behavior',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Behavior', href: '/behavior' },
          { name: 'DIY Enrichment Toys', href: '/behavior/diy-enrichment-toys' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Enrichment Matters', href: '#why' },
                { label: 'Tunnels & Tubes', href: '#tunnels' },
                { label: 'Dig Boxes & Ball Pits', href: '#dig' },
                { label: 'Foraging Games', href: '#forage' },
                { label: 'Safety Rules', href: '#safety' },
                { label: 'Toy Rotation', href: '#rotation' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Digging & Burrowing', href: '/behavior/digging-and-burrowing' },
                { label: 'Exercise & Enrichment', href: '/care/exercise-and-enrichment' },
                { label: 'Stress Signs', href: '/behavior/stress-signs' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret behavior, monthly."
              source="behavior-diy-enrichment"
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
            A bored ferret is a destructive ferret. Channel that boundless
            curiosity into safe outlets and you get a happier, calmer, more
            engaged animal — and a carpet that survives the year. The best news
            for your wallet: ferrets are famously unimpressed by expensive toys
            and famously thrilled by a cardboard box. Enrichment is one area
            where cheap and homemade genuinely beats store-bought.
          </DropCap>

          <h2 id="why">Why Enrichment Matters</h2>
          <p>
            Ferrets are intelligent, high-energy predators built for hunting,
            tunnelling, and exploring. In a home, that drive needs an outlet.
            Without it, ferrets get bored, and bored ferrets dig at carpet, chew
            cage bars, and show the kinds of behaviour changes covered in our{' '}
            <a href="/behavior/stress-signs">stress signs guide</a>. Good
            enrichment is not a luxury — it is core welfare.
          </p>

          <h2 id="tunnels">Tunnels and Tubes</h2>
          <p>
            Nothing taps the ferret&apos;s burrowing instinct like a tunnel.
            Cheap, easy, and almost universally loved:
          </p>
          <ul>
            <li>
              <strong>Dryer-vent hose.</strong> A length of wide, flexible
              aluminium-free dryer hose is the classic ferret tunnel. Ferrets
              tear through it endlessly.
            </li>
            <li>
              <strong>Connected cardboard boxes.</strong> Cut doorways between a
              few boxes to build a maze. Supervise determined chewers.
            </li>
            <li>
              <strong>Fabric play tubes.</strong> Soft tunnels (often sold for
              cats) collapse for storage and pop open for play.
            </li>
            <li>
              <strong>PVC pipe sections.</strong> Wide-diameter pipe makes a
              sturdy, washable tunnel — just sand any sharp cut edges smooth.
            </li>
          </ul>

          <h2 id="dig">Dig Boxes and Ball Pits</h2>
          <p>
            Ferrets dig. Give them a legal place to do it and your floors are
            spared. (Our full{' '}
            <a href="/behavior/digging-and-burrowing">digging and burrowing
            guide</a> goes deeper on this.)
          </p>
          <ul>
            <li>
              <strong>Dig box.</strong> A large storage tub filled a few inches
              deep with uncooked long-grain rice, dried beans, or shredded paper.
              Bury a treat to start the fun.
            </li>
            <li>
              <strong>Ball pit.</strong> A tub of ball-pit balls is endlessly
              entertaining and easy to clean.
            </li>
            <li>
              <strong>River-stone pit.</strong> Large, smooth stones (too big to
              swallow) make a satisfying, no-ingest dig medium.
            </li>
          </ul>

          <h2 id="forage">Foraging and Puzzle Games</h2>
          <p>
            Make the ferret work a little for its rewards — it is mentally
            satisfying and slows down fast eaters:
          </p>
          <ul>
            <li>
              <strong>Treat-stuffed cardboard tubes.</strong> Fold the ends of a
              paper-towel tube around a treat; the ferret has to figure it out.
            </li>
            <li>
              <strong>Muffin-tin game.</strong> Hide treats under cups or in the
              wells of a muffin tin for a simple nose-work puzzle.
            </li>
            <li>
              <strong>Crinkle-bag rustle toys.</strong> A clean paper bag with a
              treat inside provides sound, texture, and reward.
            </li>
          </ul>

          <h2 id="safety">The Safety Rules — Read This Part</h2>
          <p>
            This is the most important section. Ferrets are champion swallowers,
            and intestinal blockage from ingested toy material is one of the most
            common surgical emergencies in pet ferrets. The rules:
          </p>
          <CalloutBox variant="warning" title="Materials to avoid entirely">
            <ul>
              <li>
                <strong>Soft rubber, latex, and foam.</strong> Ferrets chew off
                and swallow pieces — squeaky latex dog toys, foam, and sponge are
                classic blockage causes.
              </li>
              <li>
                <strong>Rubber bands, small balls, and bottle caps.</strong>{' '}
                Anything small enough to swallow whole.
              </li>
              <li>
                <strong>Stringy or fraying material</strong> that can be ingested
                as a linear foreign body.
              </li>
              <li>
                <strong>Styrofoam packing peanuts</strong> and easily-shredded
                plastic.
              </li>
            </ul>
          </CalloutBox>
          <CalloutBox variant="tip" title="Safety habits">
            <ul>
              <li>
                <strong>Supervise new toys</strong> until you know whether your
                ferret chews politely or eats everything.
              </li>
              <li>
                <strong>Inspect for damage</strong> regularly and retire anything
                that is breaking into swallowable pieces.
              </li>
              <li>
                <strong>Match the toy to the ferret.</strong> A determined
                ingester needs ingest-proof materials only.
              </li>
            </ul>
            <p>
              Signs of a possible blockage — repeated vomiting, straining,
              refusing food, or lethargy — are an emergency. Contact an
              exotic-mammal vet immediately.
            </p>
          </CalloutBox>

          <h2 id="rotation">Toy Rotation</h2>
          <p>
            The cheapest enrichment trick of all: put half the toys away and
            swap them out every few days. A ferret that has grown bored of a toy
            will rediscover it with full enthusiasm after a week in the closet.
            Rotation keeps novelty high at zero cost and is one of the easiest
            ways to keep a curious ferret mentally stimulated. For structured
            out-of-cage exercise routines to pair with these toys, see our{' '}
            <a href="/care/exercise-and-enrichment">exercise and enrichment
            guide</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              ferret husbandry chapters and the gastrointestinal foreign-body
              literature.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              enrichment, welfare, and GI foreign bodies.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing enrichment and
              toy-safety guidance.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General enrichment and behaviour information about ferrets, not
            individualized veterinary advice. Suspected toy ingestion or
            intestinal blockage — vomiting, straining, or loss of appetite — is a
            potential emergency requiring immediate exotic-pet veterinary care.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
