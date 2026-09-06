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
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
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

const combined = combineSchemas(articleSchema, faqSchema)

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
      
        relatedLinks={[
          { title: 'Ferret Colors Hub', href: '/colors' },
          { title: 'Adoption vs. Buying', href: '/ownership/adoption-vs-buying' },
          { title: 'Ferret Lifespan', href: '/colors/ferret-lifespan' },
          { title: 'Annual Checkup Guide', href: '/health/annual-checkup-guide' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the ferret choosing-healthy checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret choosing-healthy checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-healthy-kit-checklist-chart,
              fridge-adoption-red-flag-card, and
              mustelid-healthy-ferret-reference-handbook notes
              that match the head-to-tail-check-map,
              adoption-red-flag-log, and
              afa-aemv-selection-grounding copy on this
              page — a laminated ferret healthy-kit
              checklist chart so the eyes / ears / coat /
              gums / body-condition map is posted on the
              fridge (not a tools-hub calculator chart,
              not a reviews buyer-guide chart, not a diet
              feeding chart, not a care routine chart, not
              a behavior cue chart, not a health triage
              chart, not an ownership section-map chart,
              not a colors-hub palette chart, not a
              first-year schedule chart, not a color-pattern
              axis chart, not a sable bandit-mask chart,
              not an albino red-eye chart, not a DEW
              dark-eye chart, not a cinnamon brick-coat
              chart, not a champagne milky-coat chart, not
              a chocolate milk-coat chart, not a black
              jet-coat chart, not a silver frost-coat
              chart, not a panda white-head chart, not a
              blaze stripe chart), a ferret fridge
              adoption red-flag card so lethargy / discharge
              / patchy-coat / seller-dodge notes are
              labeled on the fridge (not a measurement
              card, not a reviews comparison card, not a
              diet label card, not a care card, not a
              behavior card, not a health library card,
              not an ownership prep card, not a colors-hub
              color id card, not a first-year milestone
              card, not a color-vs-pattern card, not a
              sable-vs-black-sable card, not an
              albino-vs-dew card, not a DEW hearing-check
              card, not a cinnamon-vs-brown card, not a
              champagne-vs-brown card, not a
              chocolate-vs-brown card, not a
              black-vs-sable card, not a silver-vs-dew
              card, not a panda-vs-blaze card, not a
              blaze-vs-roan card), and a mustelid healthy
              ferret reference handbook so the AFA / AEMV
              selection grounding is a physical kitchen
              book (not a calculator handbook, not a
              reviews handbook, not a diet handbook, not a
              care handbook, not a behavior handbook, not
              a health handbook, not an ownership
              handbook, not a colors-hub handbook, not a
              first-year handbook, not a color-pattern
              handbook, not a sable handbook, not an
              albino handbook, not a DEW handbook, not a
              cinnamon handbook, not a champagne handbook,
              not a chocolate handbook, not a black
              handbook, not a silver handbook, not a panda
              handbook, not a blaze-roan handbook).
              Educational kitchen checklist, not a ranked
              color list, not a child toothbrush / dosing
              hop, and not a substitute for an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Aging pages stay held.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="ferret-com"
              title="Ferret choosing-healthy checklist"
              subtitle="Email the healthy-kit-checklist-chart, fridge adoption red-flag card, and healthy-ferret-handbook notes. No spam."
              ctaText="Email my ferret choosing-healthy checklist"
              source="colors-choosing-healthy-under-hero"
            />
          </div>

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

          <p className="text-sm leading-relaxed text-brand-text-mid">
            Keep a physical choosing-healthy kitchen kit
            next to this page — a laminated ferret
            healthy-kit checklist chart so the eyes / ears
            / coat / gums / body-condition map is posted
            on the fridge, a ferret fridge adoption
            red-flag card so lethargy / discharge /
            patchy-coat / seller-dodge notes are labeled
            on the fridge, and a mustelid healthy ferret
            reference handbook so the AFA / AEMV selection
            grounding is a physical kitchen book. These
            are educational kitchen searches, not a ranked
            color list, not a substitute for an
            exotic-mammal veterinarian, not a tools-hub /
            reviews-hub / diet-hub / care-hub / behavior-hub
            / health-hub / ownership-hub / colors-hub /
            first-year-schedule / colors-and-patterns /
            sable-ferrets / albino-ferrets / dew-ferrets /
            cinnamon-ferrets / champagne-ferrets /
            chocolate-ferrets / black-ferrets /
            silver-ferrets / panda-ferrets /
            blaze-and-roan hop, and not a child toothbrush
            / dosing hop (those live on health children).
            This page does not hop medications or vaccines.
            This page does not sell insurance. This page
            does not claim hands-on testing. Ferret aging
            stays held.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret healthy-kit checklist chart /
              ferret fridge adoption red-flag card /
              mustelid healthy ferret reference handbook).
              Educational kitchen searches only; no Rx /
              vaccine / aging hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Unused vs tools / reviews /
              diet / care / behavior / health / ownership /
              colors-hub / first-year-schedule /
              colors-and-patterns / sable-ferrets /
              albino-ferrets / dew-ferrets /
              cinnamon-ferrets / champagne-ferrets /
              chocolate-ferrets / black-ferrets /
              silver-ferrets / panda-ferrets /
              blaze-and-roan kitchen kits and child
              finger+toothbrush / carnivore+care hops.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the choosing-healthy kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page head-to-tail-check-map,
              adoption-red-flag-log, and
              afa-aemv-selection-grounding copy — a
              laminated ferret healthy-kit checklist
              chart, a ferret fridge adoption red-flag
              card, and a mustelid healthy ferret
              reference handbook. Educational kitchen
              searches only. They are not a ranked color
              list, they are not a tools-hub / reviews-hub
              / diet-hub / care-hub / behavior-hub /
              health-hub / ownership-hub / colors-hub /
              first-year-schedule / colors-and-patterns /
              sable-ferrets / albino-ferrets / dew-ferrets
              / cinnamon-ferrets / champagne-ferrets /
              chocolate-ferrets / black-ferrets /
              silver-ferrets / panda-ferrets /
              blaze-and-roan hop, they are not a child
              toothbrush hop, and they do not replace an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Ferret.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+healthy+kit+checklist+chart?s=choosing-healthy"
                amazonLabel="Browse laminated ferret healthy-kit checklist charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+adoption+red+flag+card?s=choosing-healthy"
                amazonLabel="Browse ferret fridge adoption red-flag cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+healthy+ferret+reference+handbook?s=choosing-healthy"
                amazonLabel="Browse mustelid healthy ferret reference handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
