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
  title: 'Ferret Lifespan — How Long Do Ferrets Live? | Ferret.com',
  description:
    'How long ferrets live: the typical 5-8 year lifespan, life stages from kit to senior, and how to support a long, healthy ferret life.',
  path: '/colors/ferret-lifespan',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Lifespan',
  description:
    'Typical ferret lifespan and life stages, the genetic and husbandry factors that influence longevity, and how to support a long, healthy life for a pet ferret.',
  url: 'https://ferret.com/colors/ferret-lifespan',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Colors & Choosing', url: 'https://ferret.com/colors' },
    { name: 'Ferret Lifespan', url: 'https://ferret.com/colors/ferret-lifespan' },
  ],
})

const FAQS = [
  {
    question: 'How long do ferrets live?',
    answer:
      "Pet ferrets commonly live around 5 to 8 years, with some reaching the upper end or slightly beyond with good care and a bit of luck. Lifespan varies with genetics, husbandry, and the burden of age-related disease that ferrets are unfortunately prone to.",
  },
  {
    question: 'What is the oldest a ferret can live?',
    answer:
      "While the typical range tops out around 8 years, individual ferrets occasionally live longer with attentive care and good fortune. These are exceptions rather than the rule. Most owners should plan around the 5-to-8-year expectation rather than counting on an unusually long life.",
  },
  {
    question: "What shortens a ferret's lifespan?",
    answer:
      "The big drivers are the age-related diseases ferrets are predisposed to — insulinoma, adrenal disease, and lymphoma chief among them — along with preventable problems like intestinal blockage from swallowed objects, poor diet, obesity, and untreated dental disease. Early veterinary care and a species-appropriate diet help on every front.",
  },
  {
    question: 'How can I help my ferret live longer?',
    answer:
      "Feed a high-protein, high-fat, low-carbohydrate diet appropriate for an obligate carnivore; keep vaccinations current; provide enrichment and exercise; ferret-proof against swallowable objects; and see an exotic-mammal vet for annual checkups and at the first sign of illness. Catching insulinoma, adrenal disease, and dental problems early makes a real difference.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function FerretLifespanPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'How Long Do Ferrets Live?',
          subtitle:
            "Bringing a ferret home means signing up for several years of one of the most entertaining companions in the small-pet world. Knowing what to expect — the typical lifespan, the life stages, and the factors you can actually influence — helps you give your ferret the longest, healthiest run possible. Here is the honest picture.",
          category: 'Ferret Facts',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Colors & Choosing', href: '/colors' },
          { name: 'Ferret Lifespan', href: '/colors/ferret-lifespan' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Typical Lifespan', href: '#typical' },
                { label: 'Ferret Life Stages', href: '#stages' },
                { label: 'What Influences Longevity', href: '#factors' },
                { label: 'Supporting a Long Life', href: '#support' },
                { label: 'Senior Ferret Care', href: '#senior' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
                { label: 'Insulinoma', href: '/health/insulinoma' },
                { label: 'Choosing a Healthy Ferret', href: '/colors/choosing-a-healthy-ferret' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret facts, monthly."
              source="colors-lifespan"
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
            A ferret packs an enormous amount of personality into a relatively
            short life. Understanding that timeline — and the things that shorten
            or extend it — is part of being a responsible owner. The good news is
            that several of the biggest levers on ferret longevity are squarely in
            your hands: diet, preventive care, ferret-proofing, and early disease
            detection.
          </DropCap>

          <h2 id="typical">The Typical Lifespan</h2>
          <p>
            Pet ferrets commonly live around <strong>5 to 8 years</strong>. Some
            reach the upper end or a little beyond with excellent care and good
            luck; others are cut short by the age-related diseases the species is
            prone to. As a planning figure, the 5-to-8-year range is the right
            expectation to set when you bring a ferret home.
          </p>

          <h2 id="stages">Ferret Life Stages</h2>
          <ul>
            <li>
              <strong>Kit (0-1 year).</strong> Rapid growth, intense play,
              teething, and socialization. This is when bite inhibition and
              bonding are established — see our{' '}
              <a href="/behavior/bonding-with-your-ferret">bonding guide</a>.
            </li>
            <li>
              <strong>Young adult (1-3 years).</strong> Peak energy and health.
              The ferret is fully grown, playful, and generally robust.
            </li>
            <li>
              <strong>Middle age (3-5 years).</strong> The window where the common
              ferret diseases — insulinoma and adrenal disease especially — start
              to appear. Regular vet checks earn their keep here.
            </li>
            <li>
              <strong>Senior (5+ years).</strong> Slowing down, higher disease
              burden, and a need for closer monitoring. Our{' '}
              <a href="/health/aging-ferret-care">aging ferret care</a> reference
              covers this stage in depth.
            </li>
          </ul>

          <h2 id="factors">What Influences Longevity</h2>
          <p>
            Several factors push lifespan up or down:
          </p>
          <ul>
            <li>
              <strong>Genetics.</strong> Some lines and individuals are simply
              hardier than others — a factor you cannot control but should be
              aware of.
            </li>
            <li>
              <strong>Age-related disease.</strong> Insulinoma,{' '}
              <a href="/health/adrenal-disease">adrenal disease</a>, and lymphoma
              are common and significantly affect lifespan. Early detection and
              treatment matter enormously.
            </li>
            <li>
              <strong>Diet.</strong> Ferrets are obligate carnivores; an
              appropriate high-protein, high-fat, low-carbohydrate diet supports
              long-term health.
            </li>
            <li>
              <strong>Preventable accidents.</strong> Intestinal blockage from
              swallowed objects is a leading, avoidable cause of ferret death —
              ferret-proofing is genuinely life-extending.
            </li>
            <li>
              <strong>Preventive care.</strong> Vaccinations, dental care, and
              annual exams catch problems while they are still treatable.
            </li>
          </ul>

          <h2 id="support">Supporting a Long, Healthy Life</h2>
          <CalloutBox variant="tip" title="The longevity checklist">
            <ul>
              <li>A species-appropriate, meat-based diet.</li>
              <li>Current vaccinations per your vet&apos;s protocol.</li>
              <li>
                Rigorous ferret-proofing against swallowable objects — see our{' '}
                <a href="/behavior/diy-enrichment-toys">toy-safety notes</a>.
              </li>
              <li>Daily enrichment, exercise, and out-of-cage time.</li>
              <li>Dental care to prevent painful, life-shortening disease.</li>
              <li>
                Annual exotic-mammal vet exams — and a prompt visit at the first
                sign of illness.
              </li>
            </ul>
          </CalloutBox>

          <h2 id="senior">Senior Ferret Care</h2>
          <p>
            Once a ferret crosses into its senior years around age five, the
            emphasis shifts toward monitoring and comfort. More frequent vet
            checks, attention to weight and appetite, and quick action on
            warning signs help an older ferret stay comfortable. Because the early
            signs of serious disease can be subtle, cross-reference our{' '}
            <a href="/behavior/stress-signs">stress and welfare guide</a> and our{' '}
            <a href="/health/aging-ferret-care">aging ferret care reference</a> —
            many &quot;old age&quot; changes are treatable conditions in disguise.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              ferret husbandry, lifespan, and disease chapters.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — articles on ferret
              longevity, geriatric care, and common diseases.
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — clinician
              resources on ferret geriatric medicine.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing care and longevity
              guidance.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            General reference information about ferret lifespan, not
            individualized veterinary advice. Concerns about a ferret&apos;s
            health or aging warrant evaluation by an exotic-mammal veterinarian.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
