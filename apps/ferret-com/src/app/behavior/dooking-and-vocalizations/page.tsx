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
  CrossPortfolioCard,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Sounds Decoded — Dooking, Hissing & Screaming | Ferret.com',
  description:
    'What ferret sounds mean: the happy dook, warning hiss, alarm scream, chirps, whimpers, and barks — a field guide to ferret vocalizations.',
  path: '/behavior/dooking-and-vocalizations',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Dooking and Vocalizations',
  description:
    'A field guide to ferret sounds — the dook, hiss, scream, chirp, whimper, and bark — and what each vocalization signals about a ferret’s mood and welfare.',
  url: 'https://ferret.com/behavior/dooking-and-vocalizations',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
  speakable: true,
})


const FAQS = [
  {
    question: 'What is dooking?',
    answer:
      "Dooking is the soft, clucking, chuckling sound a happy, excited ferret makes — often during play, exploration, or the famous bouncy 'weasel war dance.' It is the single most reliable sign of a content, stimulated ferret. If your ferret dooks while bounding around, you have a happy ferret on your hands.",
  },
  {
    question: 'My ferret is hissing — is it angry?',
    answer:
      "Hissing is a broad signal that can mean irritation, mild fear, frustration, or simple over-arousal during rough play. Context decides. A hiss during a wrestling match between two ferrets is usually just play talk. A hiss directed at you, paired with a tense body and retreat, means 'back off, I need space.' Give it.",
  },
  {
    question: 'Why is my ferret screaming?',
    answer:
      "A genuine ferret scream is loud, sharp, and unmistakable — it signals fear, pain, or extreme distress. Sudden screaming during play between ferrets can mean one has been hurt or pinned too hard, and you should check that everyone is alright. A ferret that screams when picked up or touched in a specific spot may be in pain and warrants an exotic-mammal vet check.",
  },
  {
    question: 'Do ferrets make noise in their sleep?',
    answer:
      "Sometimes, yes — soft whimpers, twitches, and little squeaks during deep sleep are normal and usually nothing to worry about. Ferrets sleep extremely deeply (see our 'dead sleep' explainer), and the occasional dream-noise is part of that.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

const SOURCES = [
  {
    label: "Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery, 4th ed. — ferret behaviour and communication chapters",
    publisher: "Quesenberry KE, Carpenter JW (eds.) — Saunders/Elsevier",
  },
  {
    label: "Journal of Exotic Pet Medicine — articles on ferret behaviour and welfare assessment",
    publisher: "Elsevier",
  },
  {
    label: "American Ferret Association (AFA) — ferret behaviour and communication owner guidance",
    url: "https://www.ferret.org",
    publisher: "AFA",
  },
]

export default function FerretVocalizationsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Sounds Decoded — From the Happy Dook to the Alarm Scream',
          subtitle:
            "Ferrets are chattier than most people expect. Once you learn the handful of sounds in their vocabulary, your ferret becomes a lot easier to read — and a lot more entertaining. Here is the full field guide, from the joyful dook to the rare and serious scream.",
          category: 'Ferret Behavior',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Behavior', href: '/behavior' },
          { name: 'Dooking & Vocalizations', href: '/behavior/dooking-and-vocalizations' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Dook (Happy)', href: '#dook' },
                { label: 'The Hiss', href: '#hiss' },
                { label: 'The Scream', href: '#scream' },
                { label: 'Chirps, Squeaks & Whimpers', href: '#chirps' },
                { label: 'Barking & Other Sounds', href: '#bark' },
                { label: 'Reading the Whole Ferret', href: '#context' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Dead Sleep Explained', href: '/behavior/dead-sleep-explained' },
                { label: 'Stress Signs', href: '/behavior/stress-signs' },
                { label: 'Bonding With Your Ferret', href: '/behavior/bonding-with-your-ferret' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret behavior, monthly."
              source="behavior-vocalizations"
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="behavior" variant="sidebar" />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Behavior Hub', href: '/behavior' },
          { title: 'Dead Sleep Explained', href: '/behavior/dead-sleep-explained' },
          { title: 'Stress Signs', href: '/behavior/stress-signs' },
          { title: 'Bonding With Your Ferret', href: '/behavior/bonding-with-your-ferret' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Ferrets are not loud animals — they spend most of the day asleep —
            but when they do speak, every sound carries meaning. A ferret&apos;s
            vocal repertoire is small enough to learn in an afternoon and useful
            enough to last a lifetime. Knowing the difference between a happy
            dook and a distress scream is one of the fastest ways to become a
            fluent ferret owner.
          </DropCap>

          <h2 id="dook">The Dook — The Sound of Pure Joy</h2>
          <p>
            The dook is the signature ferret noise: a soft, rapid, clucking
            chuckle, a bit like a muffled laugh. It is the sound of a ferret
            that is excited, happy, and stimulated. You will hear it most during
            the &quot;weasel war dance&quot; — that frenzied, sideways,
            open-mouthed bouncing ferrets do when they are delighted — and
            during energetic play and exploration.
          </p>
          <p>
            If your ferret dooks a lot, congratulations: it is a content,
            well-enriched animal. A dook is your reward for a good play session
            and your single best real-time signal that the ferret is having a
            wonderful time.
          </p>

          <h2 id="hiss">The Hiss — &quot;I Need Some Space&quot;</h2>
          <p>
            Hissing is the most context-dependent ferret sound. It can mean mild
            annoyance, frustration, over-arousal in play, or genuine fear. Read
            it with the body:
          </p>
          <ul>
            <li>
              <strong>Hiss during ferret-on-ferret wrestling</strong> with loose
              bodies and dooking mixed in: usually just play talk. No
              intervention needed.
            </li>
            <li>
              <strong>Hiss aimed at you</strong> with a tense body, retreat, or
              flattened posture: a request for space. Honour it — pushing past a
              hiss is how you earn a bite.
            </li>
            <li>
              <strong>Frustrated hiss</strong> when a ferret can&apos;t reach
              something it wants: harmless, and kind of funny.
            </li>
          </ul>

          <h2 id="scream">The Scream — Take It Seriously</h2>
          <p>
            A true ferret scream is loud, piercing, and impossible to mistake
            for anything else. It signals fear, pain, or acute distress.
          </p>
          <CalloutBox variant="warning" title="When you hear a scream">
            <p>
              During play between two ferrets, a sudden scream may mean one was
              bitten too hard or pinned painfully — separate them briefly and
              check both are uninjured. A ferret that screams when handled, lifted,
              or touched in one particular spot may be in pain; a new pattern of
              pain-screaming is a reason to see an exotic-mammal vet rather than
              to assume it is &quot;just being dramatic.&quot;
            </p>
          </CalloutBox>
          <p>
            That said, a startled ferret can also let out a single sharp shriek
            and then bounce right back to play. One isolated scream in an
            otherwise happy ferret is rarely an emergency — it is the pattern,
            the context, and the pairing with other signs that matter.
          </p>

          <h2 id="chirps">Chirps, Squeaks, and Whimpers</h2>
          <ul>
            <li>
              <strong>Chirps and squeaks</strong> are soft, conversational
              noises, often during exploration or mild excitement. They are the
              vocal equivalent of a ferret thinking out loud.
            </li>
            <li>
              <strong>Whimpers and whines</strong> can mean mild distress,
              loneliness, or a young kit calling for attention. A persistently
              whimpering ferret is asking for something — company, food, or a
              way out of a frustrating situation.
            </li>
            <li>
              <strong>Sleep sounds</strong> — soft squeaks and whimpers during
              the deep, hard-to-wake ferret sleep — are normal dream-noises. See
              our <a href="/behavior/dead-sleep-explained">dead-sleep explainer</a>{' '}
              for why ferret sleep is so alarmingly deep.
            </li>
          </ul>

          <h2 id="bark">Barking and Other Rare Sounds</h2>
          <p>
            Occasionally a highly excited or startled ferret produces a sharp,
            bark-like sound — uncommon, and usually tied to a moment of intense
            arousal. It is not a cause for concern on its own. Like every ferret
            vocalization, the meaning lives in the surrounding context far more
            than in the sound itself.
          </p>

          <h2 id="context">Reading the Whole Ferret</h2>
          <p>
            No ferret sound means just one thing. The reliable approach is to
            combine the vocalization with body language: tail (puffed and
            bottle-brushed often means excitement or arousal), posture (loose
            and bouncy vs. tense and low), and behaviour (approaching vs.
            retreating). A hiss from a bouncing, dooking ferret means something
            very different from a hiss from a flattened, cornered one.
          </p>
          <p>
            When sounds shift toward the distress end of the spectrum and stay
            there, cross-reference our guide to{' '}
            <a href="/behavior/stress-signs">ferret stress signs</a> — chronic
            vocal distress is one piece of a larger welfare picture.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            General behaviour information about ferrets, not individualized
            veterinary advice. New or persistent distress vocalizations,
            especially pain-screaming when handled, warrant an exotic-pet vet
            evaluation.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
