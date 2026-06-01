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
  title: 'Choosing a Healthy Ferret — Pre-Adoption Checklist | Ferret.com',
  description:
    'A head-to-tail checklist for choosing a healthy ferret: what a sound kit or adult looks like, the questions to ask, and red flags to avoid.',
  path: '/colors/choosing-a-healthy-ferret',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Choosing a Healthy Ferret',
  description:
    'A pre-adoption guide to choosing a healthy ferret — the head-to-tail signs of a sound animal, where to get a ferret, the questions to ask, and the red flags to walk away from.',
  url: 'https://ferret.com/colors/choosing-a-healthy-ferret',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Choosing', url: 'https://ferret.com/colors' },
    { name: 'Choosing a Healthy Ferret', url: 'https://ferret.com/colors/choosing-a-healthy-ferret' },
  ],
})

const FAQS = [
  {
    question: 'What does a healthy ferret look like?',
    answer:
      "A healthy ferret is bright, alert, and curious when awake, with clear eyes, clean ears, a smooth full coat, pink gums, and a well-muscled body that is neither bony nor obese. It moves easily, shows interest in its surroundings, and breathes quietly. Lethargy, discharge, a dull or patchy coat, hair loss, and difficulty moving are warning signs.",
  },
  {
    question: 'Where is the best place to get a ferret?',
    answer:
      "There is no single right answer — reputable breeders, shelters and ferret rescues, and pet stores are all options. Shelters and rescues often have adult ferrets in need of homes and can share known history. A responsible breeder can offer background on lineage and socialization. Wherever you go, the priority is a healthy, well-socialized individual and an honest seller who answers your questions.",
  },
  {
    question: 'Should I adopt a kit or an adult ferret?',
    answer:
      "Both have merits. Kits are blank slates you socialize yourself, but they are nippy, energetic, and need bite-inhibition training. Adults often come pre-socialized and calmer, and shelters have many wonderful ones, though an adult may carry an unknown history. Choose based on the time you can invest in training versus your preference for a more settled companion.",
  },
  {
    question: 'What health records should I ask for?',
    answer:
      "Ask about vaccination status (canine distemper and rabies per local protocol), whether the ferret is altered, any known medical history, and the source's return or health-guarantee policy. A new ferret should also see an exotic-mammal vet for a wellness exam soon after coming home, and any new ferret entering a multi-ferret household should be quarantined first.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function ChoosingHealthyFerretPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Choosing a Healthy Ferret — A Head-to-Tail Checklist',
          subtitle:
            "Picking the right ferret is part heart, part head. The heart part takes care of itself — ferrets are irresistible. The head part is this checklist: a calm, head-to-tail assessment of health and temperament that helps you bring home a sound, well-socialized companion and spot the red flags worth walking away from.",
          category: 'Ferret Facts',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Choosing', href: '/colors' },
          { name: 'Choosing a Healthy Ferret', href: '/colors/choosing-a-healthy-ferret' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Before You Go', href: '#before' },
                { label: 'The Head-to-Tail Check', href: '#check' },
                { label: 'Temperament Signs', href: '#temperament' },
                { label: 'Where to Get a Ferret', href: '#where' },
                { label: 'Questions to Ask', href: '#questions' },
                { label: 'Red Flags', href: '#redflags' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Male vs. Female Ferrets', href: '/colors/male-vs-female-ferrets' },
                { label: 'Ferret Lifespan', href: '/colors/ferret-lifespan' },
                { label: 'Bonding With Your Ferret', href: '/behavior/bonding-with-your-ferret' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret facts, monthly."
              source="colors-choosing"
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
            A ferret will share your home for several years, and the choice you
            make at the shelter or store shapes how those years go. A few minutes
            of calm, deliberate observation — coat, eyes, ears, body, behaviour —
            tells you most of what you need to know. Lead with your head here;
            your heart has already made up its mind anyway.
          </DropCap>

          <h2 id="before">Before You Go</h2>
          <p>
            A little preparation makes the visit far more useful. Decide what you
            can offer in terms of time and training (a nippy kit versus a settled
            adult), read up on the size and sex differences in our{' '}
            <a href="/colors/male-vs-female-ferrets">male vs. female guide</a>,
            and set realistic expectations on lifespan and the health journey
            ahead via our{' '}
            <a href="/colors/ferret-lifespan">ferret lifespan reference</a>.
            Have your home ferret-proofed and a cage ready before the ferret
            arrives.
          </p>

          <h2 id="check">The Head-to-Tail Health Check</h2>
          <p>
            When awake and active, a healthy ferret should pass this physical
            run-through:
          </p>
          <ul>
            <li>
              <strong>Eyes:</strong> clear, bright, and free of discharge or
              cloudiness.
            </li>
            <li>
              <strong>Nose:</strong> clean, with no crusting or runny discharge.
            </li>
            <li>
              <strong>Ears:</strong> clean inside, no heavy dark wax, no foul
              smell, no constant scratching (which can suggest ear mites).
            </li>
            <li>
              <strong>Coat:</strong> smooth, full, and even — no bald patches,
              especially the symmetrical tail-and-flank hair loss associated with{' '}
              <a href="/health/adrenal-disease">adrenal disease</a>.
            </li>
            <li>
              <strong>Gums and teeth:</strong> gums healthy pink, teeth intact and
              not heavily tartar-coated.
            </li>
            <li>
              <strong>Body condition:</strong> well-muscled, neither bony nor
              obese, with a firm, comfortable belly.
            </li>
            <li>
              <strong>Movement:</strong> easy and coordinated, with no limping,
              weakness, or hind-end wobble.
            </li>
            <li>
              <strong>Breathing:</strong> quiet and effortless, with no wheezing
              or coughing.
            </li>
            <li>
              <strong>Rear end:</strong> clean, with no diarrhea staining.
            </li>
          </ul>

          <h2 id="temperament">Temperament Signs</h2>
          <p>
            Health is half the picture; temperament is the other half.
          </p>
          <ul>
            <li>
              <strong>Curiosity.</strong> A confident ferret investigates you and
              its surroundings rather than freezing or cowering.
            </li>
            <li>
              <strong>Playfulness.</strong> Bouncy, dooking, war-dancing behaviour
              is a great sign in an awake ferret.
            </li>
            <li>
              <strong>Handling response.</strong> Some squirming is normal; what
              you want to avoid is hard, fearful, skin-breaking biting. A nippy kit
              can be trained (see our{' '}
              <a href="/behavior/biting-and-nipping">biting guide</a>), but note
              the starting point.
            </li>
            <li>
              <strong>Recovery.</strong> A well-adjusted ferret startles, then
              bounces back to curiosity quickly rather than staying fearful.
            </li>
          </ul>
          <CalloutBox variant="tip" title="Remember: ferrets sleep hard">
            <p>
              Do not judge a ferret that seems &quot;lethargic&quot; while it is
              deeply asleep — ferrets sleep extraordinarily deeply (our{' '}
              <a href="/behavior/dead-sleep-explained">dead-sleep explainer</a>{' '}
              covers this). Assess temperament when the ferret is genuinely awake
              and active, not mid-nap.
            </p>
          </CalloutBox>

          <h2 id="where">Where to Get a Ferret</h2>
          <p>
            Reputable breeders, shelters and ferret rescues, and pet stores all
            place ferrets. Shelters and rescues frequently have adult ferrets
            needing homes and often know each animal&apos;s history. A responsible
            breeder can speak to lineage and early socialization. The source
            matters less than the individual ferret and the honesty of the seller:
            a good source welcomes your questions and lets you observe and handle
            the ferret.
          </p>

          <h2 id="questions">Questions to Ask</h2>
          <ul>
            <li>What is the ferret&apos;s vaccination status?</li>
            <li>Is it spayed or neutered?</li>
            <li>How old is it, and what is its known history?</li>
            <li>Has it had any health problems or vet care?</li>
            <li>Is there a health guarantee or return policy?</li>
            <li>How has it been socialized and handled?</li>
          </ul>

          <h2 id="redflags">Red Flags — When to Walk Away</h2>
          <CalloutBox variant="warning" title="Signs to reconsider">
            <ul>
              <li>
                Lethargy or unresponsiveness in a ferret that is genuinely awake.
              </li>
              <li>Eye, nose, or ear discharge; persistent scratching.</li>
              <li>
                A dull, patchy, or thinning coat — especially symmetrical hair
                loss.
              </li>
              <li>Diarrhea, a soiled rear end, or a bloated belly.</li>
              <li>Difficulty moving, weakness, or labored breathing.</li>
              <li>
                Visible signs of illness across multiple animals in the same
                enclosure.
              </li>
              <li>A seller who dodges health questions or rushes you.</li>
            </ul>
            <p>
              Whatever you choose, book an exotic-mammal vet wellness exam soon
              after bringing a ferret home, and quarantine any new ferret before
              introducing it to existing ferrets per our{' '}
              <a href="/behavior/training-and-bonding">introduction protocol</a>.
            </p>
          </CalloutBox>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              ferret wellness, husbandry, and common-disease chapters.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              wellness and preventive care.
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — clinician
              resources and member directory for ferret care.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing adoption and
              selection guidance.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General reference information for choosing a ferret, not
            individualized veterinary advice. Any new ferret should receive a
            wellness exam from an exotic-mammal veterinarian, and suspected
            illness warrants prompt veterinary care.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
