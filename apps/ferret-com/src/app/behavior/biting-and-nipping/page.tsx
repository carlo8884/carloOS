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
  StockImage,
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
  title: 'Why Ferrets Bite & Nip — And How to Stop It | Ferret.com',
  description:
    'Why ferrets bite and nip: kit teething, play, fear, and pain. A calm plan to teach bite inhibition, plus when a sudden bite is a medical red flag.',
  path: '/behavior/biting-and-nipping',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Why Ferrets Bite and Nip',
  description:
    'Behaviour guide to ferret biting and nipping — the difference between play-mouthing, fear bites, and pain bites, and how to teach bite inhibition without punishment.',
  url: 'https://ferret.com/behavior/biting-and-nipping',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Behavior', url: 'https://ferret.com/behavior' },
    { name: 'Biting & Nipping', url: 'https://ferret.com/behavior/biting-and-nipping' },
  ],
})

const FAQS = [
  {
    question: 'Do all ferret bites hurt?',
    answer:
      "No. A well-socialized adult ferret mouths gently — soft 'grabs' that are part of play and rarely break skin. The hard, skin-puncturing bites people worry about are usually one of three things: an under-trained kit who never learned bite inhibition, a frightened ferret, or a ferret in pain. The goal of training is not zero mouth contact (ferrets explore with their mouths the way dogs explore with their noses); it is graduated, gentle pressure.",
  },
  {
    question: 'How long does it take to train a ferret out of biting?',
    answer:
      "For a young kit learning bite inhibition, expect a few weeks to a couple of months of consistent, calm handling. Kits removed from littermates early (5-6 weeks is typical for US pet-store ferrets) missed some of the natural bite-inhibition lessons their siblings would have taught, so they need a human to finish the job. Consistency matters more than intensity — short daily sessions beat occasional long ones.",
  },
  {
    question: 'Should I bite my ferret back or flick its nose?',
    answer:
      "No. Physical punishment — flicking, thumping, 'biting back' — teaches a ferret that hands are dangerous and tends to increase defensive biting rather than reduce it. The companion-animal behaviour literature is consistent across species that punishment-based methods raise bite incidence over time. Use calm interruption (a sharp 'no', ending play briefly) instead.",
  },
  {
    question: 'My friendly adult ferret suddenly started biting — why?',
    answer:
      "A ferret that has been gentle for years and abruptly turns bitey is sending a medical signal, not a behavioural one. Pain (dental disease, arthritis), hormonal disease (adrenal disease), and metabolic disease (insulinoma) are the usual drivers. A sudden personality change is a reason to see an exotic-mammal vet, not a reason to start a training program.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

const SOURCES = [
  {
    label: "Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery, 4th ed. — ferret behaviour, handling, and socialization chapters",
    publisher: "Quesenberry KE, Carpenter JW (eds.) — Saunders/Elsevier",
  },
  {
    label: "Journal of Exotic Pet Medicine — articles on ferret behaviour, socialization, and welfare assessment",
    publisher: "Elsevier",
  },
  {
    label: "American Ferret Association (AFA) — bite-inhibition and socialization owner guidance",
    url: "https://www.ferret.org",
    publisher: "AFA",
  },
  {
    label: "American Veterinary Society of Animal Behavior (AVSAB) — position statements on positive-reinforcement training",
    url: "https://avsab.org",
    publisher: "AVSAB",
  },
]

export default function FerretBitingNippingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Why Ferrets Bite and Nip — And How to Fix It',
          subtitle:
            "Almost every new ferret owner gets a few sharp surprises in the first month. Good news: biting is one of the most fixable ferret behaviours, and almost none of it requires punishment. The trick is reading WHY the ferret is biting — play, teething, fear, or pain — because each one has a different answer.",
          category: 'Ferret Behavior',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Behavior', href: '/behavior' },
          { name: 'Biting & Nipping', href: '/behavior/biting-and-nipping' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Ferrets Bite', href: '#why' },
                { label: 'Play vs. Fear vs. Pain', href: '#types' },
                { label: 'The No-Punishment Plan', href: '#plan' },
                { label: 'Kit Teething', href: '#teething' },
                { label: 'The Bitey Adult', href: '#adult' },
                { label: 'What Not to Do', href: '#dont' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Training & Bonding', href: '/behavior/training-and-bonding' },
                { label: 'Play Aggression', href: '/behavior/play-aggression' },
                { label: 'Bonding With Your Ferret', href: '/behavior/bonding-with-your-ferret' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret behavior, monthly."
              source="behavior-biting-nipping"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Behavior Hub', href: '/behavior' },
          { title: 'Training & Bonding', href: '/behavior/training-and-bonding' },
          { title: 'Play Aggression', href: '/behavior/play-aggression' },
          { title: 'Stress Signs', href: '/behavior/stress-signs' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:behavior-biting"
            alt="A ferret's face in close portrait — ferret biting and nipping behaviour guide"
            aspect="16:9"
            variant="inline"
            subtleCredit
          />
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            A ferret&apos;s mouth is its primary tool for exploring the world.
            It grabs, tugs, drags, and tests texture with its teeth the way a
            toddler grabs with hands. So the headline most owners need to hear
            first is this: a little mouthing is normal and is not the problem.
            The problem is uninhibited, skin-breaking pressure — and that is
            trainable, predictable, and almost always solvable without ever
            raising your voice in anger.
          </DropCap>

          <h2 id="why">Why Ferrets Bite in the First Place</h2>
          <p>
            Ferrets bite for a short, knowable list of reasons. Identify the
            reason and the fix usually follows directly:
          </p>
          <ul>
            <li>
              <strong>Play.</strong> Wrestling ferrets grab each other by the
              scruff and neck constantly. A ferret that grabs your hand may
              simply be inviting you to wrestle — it has thick skin and assumes
              you do too.
            </li>
            <li>
              <strong>Teething.</strong> Kits cut adult teeth in their first
              few months and chew everything in reach, including fingers, to
              relieve the discomfort.
            </li>
            <li>
              <strong>Fear.</strong> A ferret grabbed roughly, woken abruptly,
              or handled by an unfamiliar person may bite defensively. This is
              the bite that breaks skin and holds on.
            </li>
            <li>
              <strong>Pain or illness.</strong> A ferret that hurts when touched
              in a certain spot will bite to make the touching stop.
            </li>
            <li>
              <strong>Over-arousal.</strong> A ferret deep in the &quot;war
              dance&quot; frenzy can nip harder than it means to, the way an
              over-excited puppy mouths too hard.
            </li>
          </ul>

          <h2 id="types">Play vs. Fear vs. Pain — Reading the Bite</h2>
          <p>
            The single most useful skill is telling these apart, because the
            response is different for each.
          </p>
          <ul>
            <li>
              <strong>Play bites</strong> come with a loose, bouncy body, a
              puffed tail, dooking or chuckling, and an open-mouth grab-and-
              release rhythm. The ferret is having fun and wants you to chase
              or wrestle.
            </li>
            <li>
              <strong>Fear bites</strong> come with a tense body, a hiss or
              screech, flattened posture or backing into a corner, and a hard
              grab that holds. The ferret wants the interaction to stop.
            </li>
            <li>
              <strong>Pain bites</strong> are provoked by touching one specific
              area — a sore mouth, a tender belly, a stiff hind end — and the
              ferret may be fine everywhere else. A new pattern of pain biting
              is a vet flag.
            </li>
          </ul>

          <CalloutBox variant="tip" title="A two-second test">
            <p>
              Before responding to a bite, glance at the tail and the body. A
              puffed tail and loose, springy body almost always means play. A
              tense, low, hissing ferret means fear — and the right move is to
              give space, not to escalate. You will get this read wrong
              sometimes; that is fine. Watching for it at all is most of the
              battle.
            </p>
          </CalloutBox>

          <h2 id="plan">The No-Punishment Training Plan</h2>
          <p>
            Bite inhibition — teaching graduated, gentle pressure — is the
            same core protocol described across the exotic-pet behaviour
            literature and echoed in our{' '}
            <a href="/behavior/training-and-bonding">training and bonding guide</a>:
          </p>
          <ol>
            <li>
              <strong>Mark the hard bite.</strong> A sharp, calm &quot;no&quot;
              or &quot;ouch&quot; the instant the ferret bites too hard. You are
              labelling the moment, not scaring the ferret.
            </li>
            <li>
              <strong>End the fun.</strong> Immediately stop play and set the
              ferret down or step away for 30-60 seconds. Ferrets are smart:
              they quickly learn that hard bites end the game they wanted.
            </li>
            <li>
              <strong>Reward soft mouthing.</strong> When the ferret mouths
              gently, keep interacting. Continued calm play is the reward that
              shapes gentle pressure.
            </li>
            <li>
              <strong>Redirect the energy.</strong> Offer a tunnel, a crinkle
              toy, or a wrestling glove so the drive to grab and tug has a legal
              target.
            </li>
            <li>
              <strong>Repeat daily, briefly.</strong> Ten to twenty minutes of
              calm handling a day, every day, beats marathon weekend sessions.
            </li>
          </ol>

          <h2 id="teething">Kit Teething</h2>
          <p>
            A kit between roughly two and four months old is cutting its adult
            dentition and will chew with abandon. This phase is loud, nippy,
            and temporary. Three things help: provide hard, safe chew objects
            so there is a better option than your hand; keep handling sessions
            short and calm; and resist the urge to yank your hand away fast,
            which the kit reads as a fun chase game and which can tear skin on
            sharp baby teeth. Move slowly and deliberately instead.
          </p>

          <h2 id="adult">The Bitey Adult Ferret</h2>
          <p>
            An adult that bites falls into two very different buckets, and it is
            worth being precise about which one you have.
          </p>
          <p>
            <strong>Never-socialized adults</strong> — rescue ferrets, mill
            ferrets, or ferrets that were handled roughly — can be rehabilitated
            with the same calm, patient, no-punishment approach used for kits,
            just over a longer timeline. Trust-building comes first; correction
            comes later.
          </p>
          <p>
            <strong>Suddenly-bitey adults</strong> are a different story
            entirely. A ferret that was gentle for years and abruptly starts
            biting is almost always in pain or hormonally unwell.
          </p>

          <CalloutBox variant="warning" title="Sudden biting is a medical sign">
            <p>
              Dental disease, adrenal disease, insulinoma, arthritis, and GI
              pain all change a ferret&apos;s tolerance for handling. If a
              previously friendly ferret turns bitey over days or weeks, book an
              exotic-mammal vet visit before you treat it as a training problem.
              Training a painful ferret to &quot;behave&quot; just teaches it to
              endure pain silently.
            </p>
          </CalloutBox>

          <h2 id="dont">What Not to Do</h2>
          <ul>
            <li>
              <strong>Do not hit, flick, thump, or &quot;bite back.&quot;</strong>{' '}
              These raise defensive biting and damage the bond.
            </li>
            <li>
              <strong>Do not use scruffing as punishment.</strong> Scruffing is
              a calming-and-restraint tool, not a discipline tool — see the
              detailed treatment in our{' '}
              <a href="/behavior/training-and-bonding">training guide</a>.
            </li>
            <li>
              <strong>Do not yank away quickly.</strong> Fast retreat triggers
              the chase instinct and tears skin on teeth. Slow, boring
              withdrawal works better.
            </li>
            <li>
              <strong>Do not punish a fear bite.</strong> A frightened ferret
              that gets punished becomes a more frightened — and more bitey —
              ferret.
            </li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            General behaviour information about ferrets, not individualized
            veterinary or behavioural advice. A sudden change to biting in a
            previously gentle ferret frequently has a medical cause and warrants
            an exotic-pet vet visit.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
