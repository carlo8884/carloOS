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

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Choosing', url: 'https://ferret.com/colors' },
    { name: 'Male vs. Female Ferrets', url: 'https://ferret.com/colors/male-vs-female-ferrets' },
  ],
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

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

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
          authorAvatar: '🦦',
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
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

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
        </div>
      </ArticleLayout>
    </>
  )
}
