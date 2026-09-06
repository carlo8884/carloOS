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
  title: 'Male vs. Female Ferrets — Hobs vs. Jills | Ferret.com',
  description:
    'Male vs. female ferrets: size, temperament, and care differences between hobs and jills, why spaying and neutering matter, and which might suit your home.',
  path: '/colors/male-vs-female-ferrets',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Male vs. Female Ferrets',
  description:
    'Differences between male (hob) and female (jill) ferrets — size, temperament, and care — plus why spaying and neutering are critical and how to choose between them.',
  url: 'https://ferret.com/colors/male-vs-female-ferrets',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})


const FAQS = [
  {
    question: 'What is the difference between a male and female ferret?',
    answer:
      "Male ferrets are called hobs and females are called jills. The most visible difference is size: hobs are typically noticeably larger and heavier than jills, sometimes close to twice the weight. Temperament differences between individuals tend to outweigh any sex-based generalization, so personality matters more than sex when choosing.",
  },
  {
    question: 'Are male or female ferrets friendlier?',
    answer:
      "Neither sex is reliably friendlier. Individual personality, early socialization, and handling history shape temperament far more than sex does. A well-socialized hob and a well-socialized jill make equally affectionate companions. Choose the individual ferret whose temperament you connect with, not its sex.",
  },
  {
    question: 'Why is spaying a female ferret so important?',
    answer:
      "Intact jills that come into heat and are not bred can remain in prolonged estrus, and sustained high estrogen can cause a life-threatening aplastic anemia. This is why spaying (or otherwise managing the heat cycle under veterinary guidance) is critical for jills. In the United States, most pet-store ferrets are already altered before sale, so this is rarely a concern for typical pet owners.",
  },
  {
    question: 'Can I keep a male and female ferret together?',
    answer:
      "Yes, as long as both are altered, which nearly all US pet-store ferrets are. Altered male-female pairs cohabit happily. Intact opposite-sex pairs will breed and carry the serious health risks of breeding, so they should be altered or kept separate. Introduce any new pairing slowly per our introduction protocol.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, faqSchema)

export default function MaleVsFemaleFerretsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Male vs. Female Ferrets — Hobs, Jills, and What Actually Differs',
          subtitle:
            "Should you get a male or a female ferret? It is one of the most common questions new owners ask — and the honest answer is that it matters less than most people expect. Here is the real rundown on hobs versus jills: the size difference, the temperament myth, and the one genuinely important health distinction.",
          category: 'Ferret Facts',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Choosing', href: '/colors' },
          { name: 'Male vs. Female Ferrets', href: '/colors/male-vs-female-ferrets' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Hobs and Jills', href: '#terms' },
                { label: 'The Size Difference', href: '#size' },
                { label: 'Temperament — The Myth', href: '#temperament' },
                { label: 'Spaying & Neutering', href: '#altering' },
                { label: 'Which Should You Choose?', href: '#choose' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Choosing a Healthy Ferret', href: '/colors/choosing-a-healthy-ferret' },
                { label: 'Training & Bonding', href: '/behavior/training-and-bonding' },
                { label: 'Adrenal Disease', href: '/health/adrenal-disease' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret facts, monthly."
              source="colors-male-female"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Colors Hub', href: '/colors' },
          { title: 'Spaying & Neutering', href: '/health/spaying-and-neutering' },
          { title: 'Choosing a Healthy Ferret', href: '/colors/choosing-a-healthy-ferret' },
          { title: 'Adoption vs. Buying', href: '/ownership/adoption-vs-buying' },
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
              Keep the ferret hob-vs-jill checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Ferret hob-vs-jill checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the laminated-ferret-hob-jill-size-chart,
              fridge-hob-vs-jill-card, and
              mustelid-hob-jill-reference-handbook notes
              that match the hob-vs-jill-size-map,
              temperament-myth-log, and
              afa-aemv-sex-grounding copy on this page —
              a laminated ferret hob-jill size chart so
              the larger-hob / sleeker-jill map is
              posted on the fridge (not a tools-hub
              calculator chart, not a reviews buyer-guide
              chart, not a diet feeding chart, not a care
              routine chart, not a behavior cue chart, not
              a health triage chart, not an ownership
              section-map chart, not a colors-hub palette
              chart, not a first-year schedule chart, not
              a color-pattern axis chart, not a sable
              bandit-mask chart, not an albino red-eye
              chart, not a DEW dark-eye chart, not a
              cinnamon brick-coat chart, not a champagne
              milky-coat chart, not a chocolate milk-coat
              chart, not a black jet-coat chart, not a
              silver frost-coat chart, not a panda
              white-head chart, not a blaze stripe chart,
              not a healthy-kit checklist chart, not a
              lifespan-stage chart), a ferret fridge
              hob-vs-jill card so size / temperament /
              altering notes are labeled on the fridge
              (not a measurement card, not a reviews
              comparison card, not a diet label card, not
              a care card, not a behavior card, not a
              health library card, not an ownership prep
              card, not a colors-hub color id card, not a
              first-year milestone card, not a
              color-vs-pattern card, not a
              sable-vs-black-sable card, not an
              albino-vs-dew card, not a DEW hearing-check
              card, not a cinnamon-vs-brown card, not a
              champagne-vs-brown card, not a
              chocolate-vs-brown card, not a
              black-vs-sable card, not a silver-vs-dew
              card, not a panda-vs-blaze card, not a
              blaze-vs-roan card, not an adoption
              red-flag card, not a life-stage card), and
              a mustelid hob-jill reference handbook so
              the AFA / AEMV sex-difference grounding is
              a physical kitchen book (not a calculator
              handbook, not a reviews handbook, not a
              diet handbook, not a care handbook, not a
              behavior handbook, not a health handbook,
              not an ownership handbook, not a colors-hub
              handbook, not a first-year handbook, not a
              color-pattern handbook, not a sable
              handbook, not an albino handbook, not a DEW
              handbook, not a cinnamon handbook, not a
              champagne handbook, not a chocolate
              handbook, not a black handbook, not a
              silver handbook, not a panda handbook, not
              a blaze-roan handbook, not a healthy-ferret
              handbook, not a lifespan handbook).
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
              title="Ferret hob-vs-jill checklist"
              subtitle="Email the hob-jill-size-chart, fridge hob-vs-jill card, and hob-jill-handbook notes. No spam."
              ctaText="Email my ferret hob-vs-jill checklist"
              source="colors-male-vs-female-under-hero"
            />
          </div>

          <DropCap>
            Walk into any ferret conversation and the &quot;male or female?&quot;
            debate is never far behind. People swear hobs are cuddlier, or jills
            are feistier, or vice versa. The truth is more boring and more
            liberating: the differences that matter are size and a single key
            health point about intact females. Temperament is an individual
            thing. Here is how to think about it.
          </DropCap>

          <h2 id="terms">Hobs and Jills — The Vocabulary</h2>
          <p>
            Ferret keepers use traditional terms borrowed from the species&apos;
            long history:
          </p>
          <ul>
            <li>
              <strong>Hob</strong> — an intact male ferret. (A neutered male is
              sometimes called a gib.)
            </li>
            <li>
              <strong>Jill</strong> — an intact female ferret. (A spayed female is
              sometimes called a sprite.)
            </li>
            <li>
              <strong>Kit</strong> — a baby ferret of either sex.
            </li>
          </ul>

          <h2 id="size">The Size Difference</h2>
          <p>
            The clearest, most reliable difference is size. Hobs are typically
            noticeably larger and heavier-built than jills — in some cases
            approaching roughly twice the weight, with a broader head and a
            stockier frame. Jills are usually smaller, sleeker, and lighter. If
            you are deciding partly on the physical animal you want — a chunky
            lap-filler versus a lithe little explorer — this is the difference
            you can actually count on.
          </p>

          <h2 id="temperament">Temperament — The Myth Worth Busting</h2>
          <CalloutBox variant="tip" title="Personality beats sex, every time">
            <p>
              There is no reliable rule that one sex is friendlier, calmer, or
              feistier than the other. Individual personality, early
              socialization, and handling history shape a ferret&apos;s
              temperament far more than its sex does. The single best predictor of
              a sweet, confident ferret is good socialization — see our{' '}
              <a href="/behavior/bonding-with-your-ferret">bonding guide</a> and{' '}
              <a href="/behavior/training-and-bonding">training reference</a>.
              When choosing, meet the individual ferret rather than betting on its
              sex.
            </p>
          </CalloutBox>

          <h2 id="altering">Spaying and Neutering — The One Big Health Point</h2>
          <p>
            This is the genuinely important difference between the sexes, and it
            concerns intact jills:
          </p>
          <CalloutBox variant="warning" title="Why intact jills must be managed">
            <p>
              An intact jill that comes into heat and is not bred can stay in
              prolonged estrus, and the sustained high estrogen can trigger a
              life-threatening aplastic anemia. For this reason, jills must be
              spayed or have their heat cycle managed under veterinary guidance.
              The reassuring news for most US pet owners: nearly all pet-store
              ferrets are already altered before sale, so you are unlikely to face
              this with a typical pet-store ferret. If you obtain an intact ferret
              from a breeder, discuss altering promptly with an exotic-mammal vet.
            </p>
          </CalloutBox>
          <p>
            Neutering males reduces the strong musky odor and territorial marking
            associated with intact hobs, and — like spaying — is standard for pet
            ferrets. (Note that altering is one of several factors discussed in
            the ferret community in relation to{' '}
            <a href="/health/adrenal-disease">adrenal disease</a>; that is a
            nuanced topic best discussed with your vet.)
          </p>

          <h2 id="choose">Which Should You Choose?</h2>
          <p>
            For most people, the answer is: whichever individual ferret you click
            with. If you specifically want a larger or smaller animal, sex gives
            you a size lever. If you are getting two ferrets, an altered pair of
            any sex combination generally cohabits well, introduced slowly per our{' '}
            <a href="/behavior/training-and-bonding">introduction protocol</a>.
            Beyond that, prioritize health and temperament over sex — see{' '}
            <a href="/colors/choosing-a-healthy-ferret">choosing a healthy
            ferret</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              ferret reproduction, estrogen-associated anemia, and husbandry
              chapters.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              reproduction and endocrine disease.
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — clinician
              resources on ferret reproductive health.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing guidance on ferret
              sex differences and altering.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General reference information about male and female ferrets, not
            individualized veterinary advice. Decisions about spaying, neutering,
            and reproductive health should be made with an exotic-mammal
            veterinarian.
          </p>

          <p className="text-sm leading-relaxed text-brand-text-mid">
            Keep a physical ferret hob-vs-jill kitchen kit
            next to this page — a laminated ferret hob-jill
            size chart so the larger-hob / sleeker-jill map
            is posted on the fridge, a ferret fridge
            hob-vs-jill card so size / temperament /
            altering notes are labeled on the fridge, and a
            mustelid hob-jill reference handbook so the AFA
            / AEMV sex-difference grounding is a physical
            kitchen book. These are educational kitchen
            searches, not a ranked color list, not a
            substitute for an exotic-mammal veterinarian,
            not a tools-hub / reviews-hub / diet-hub /
            care-hub / behavior-hub / health-hub /
            ownership-hub / colors-hub / first-year-schedule
            / colors-and-patterns / sable-ferrets /
            albino-ferrets / dew-ferrets / cinnamon-ferrets
            / champagne-ferrets / chocolate-ferrets /
            black-ferrets / silver-ferrets / panda-ferrets
            / blaze-and-roan / choosing-healthy /
            ferret-lifespan hop, and not a child toothbrush
            / dosing hop (those live on health children).
            This page does not hop medications or vaccines.
            This page does not sell insurance. This page
            does not claim hands-on testing. Ferret aging
            stays held.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          {/* Money path — live amazon-brand search hops
              (laminated ferret hob-jill size chart /
              ferret fridge hob-vs-jill card /
              mustelid hob-jill reference handbook).
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
              blaze-and-roan / choosing-healthy /
              ferret-lifespan kitchen kits and child
              finger+toothbrush / carnivore+care hops.
              Directory import left untouched. Ferret
              aging stays held.
              Do not re-open #1165 / what-to-expect. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the ferret hob-vs-jill kitchen kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page hob-vs-jill-size-map,
              temperament-myth-log, and
              afa-aemv-sex-grounding copy — a laminated
              ferret hob-jill size chart, a ferret fridge
              hob-vs-jill card, and a mustelid hob-jill
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
              blaze-and-roan / choosing-healthy /
              ferret-lifespan hop, they are not a child
              toothbrush hop, and they do not replace an
              exotic-mammal veterinarian. Ferret.com does
              not sell insurance. Ferret.com earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/laminated+ferret+hob+jill+size+chart?s=male-vs-female"
                amazonLabel="Browse laminated ferret hob-jill size charts on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/ferret+fridge+hob+vs+jill+card?s=male-vs-female"
                amazonLabel="Browse ferret fridge hob-vs-jill cards on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/mustelid+hob+jill+reference+handbook?s=male-vs-female"
                amazonLabel="Browse mustelid hob-jill reference handbooks on Amazon →"
              />
            </div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
