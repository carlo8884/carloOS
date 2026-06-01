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
  buildMedicalWebPageSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Spaying & Neutering Ferrets — Why Females Must Be Spayed | Ferret.com',
  description:
    'Intact female ferrets risk fatal estrogen toxicity if not bred or spayed. The biology behind it, the early-spay-neuter debate, and descenting.',
  path: '/health/spaying-and-neutering',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Spaying and Neutering Ferrets',
  description:
    'Desexing of domestic ferrets — the life-threatening estrogen toxicity of unspayed jills, the early-spay-neuter and adrenal-disease debate, and descenting.',
  url: 'https://ferret.com/health/spaying-and-neutering',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Spaying and Neutering Ferrets',
  description:
    'Clinical reference on spaying and neutering domestic ferrets, including estrogen toxicity in intact females and the adrenal-disease debate.',
  url: 'https://ferret.com/health/spaying-and-neutering',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Health', url: 'https://ferret.com/health' },
    { name: 'Spaying & Neutering', url: 'https://ferret.com/health/spaying-and-neutering' },
  ],
})

const FAQS = [
  {
    question: 'Why must female ferrets be spayed?',
    answer:
      "Female ferrets (jills) are induced ovulators that stay in heat until mated. If an intact jill comes into heat and is not bred or brought out of heat, prolonged high estrogen suppresses her bone marrow, causing a life-threatening anemia known as estrogen toxicity or aplastic anemia. This is why a non-breeding pet jill must be spayed or otherwise managed out of heat — it is a genuine survival issue, not just population control.",
  },
  {
    question: 'Are most pet ferrets already neutered?',
    answer:
      "In many regions, ferrets sold through large breeders are already spayed or neutered (and often descented) at a very young age before sale. Ferrets from smaller breeders or private sources may be intact. It is important to confirm a ferret's status, because an intact jill needs a plan to prevent estrogen toxicity.",
  },
  {
    question: 'What is the controversy around early spay-neuter?',
    answer:
      "Early desexing removes a source of sex hormones very young, and some researchers have proposed a link between very-early neutering and the high rate of adrenal disease seen in ferrets, theorizing that the loss of gonadal hormone feedback over-stimulates the adrenal glands. The evidence is debated and not settled. It is worth understanding alongside adrenal disease, but it does not change the fact that intact jills face estrogen toxicity.",
  },
  {
    question: 'What is descenting, and is it necessary?',
    answer:
      "Descenting removes the anal scent glands that produce the strong odor released when a ferret is startled. It does not remove the general musky body odor, which comes from skin glands. Many ferrets are descented at the same young age as desexing. Whether to descent is a values and welfare question to discuss with your veterinarian; it is a surgical procedure, not a grooming step.",
  },
  {
    question: 'What does the surgery and recovery involve?',
    answer:
      "Spaying and neutering are surgical procedures performed under general anesthesia, with the same species-specific anesthesia considerations as any ferret surgery. Recovery is usually quick, with pain control provided by the veterinarian and a short period of restricted activity. As with all ferret anesthesia, choosing a clinic experienced with the species matters.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, breadcrumbSchema, faqSchema)

export default function FerretSpayNeuterPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Spaying & Neutering Ferrets',
          subtitle:
            'For female ferrets, spaying is not optional cosmetic surgery — an unspayed jill left in heat can die of estrogen toxicity. The biology is unusual, the stakes are high, and the early-spay-neuter debate adds a real wrinkle worth understanding.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '11 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Spaying & Neutering', href: '/health/spaying-and-neutering' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'TL;DR', href: '#tldr' },
                { label: 'Estrogen Toxicity', href: '#estrogen' },
                { label: 'The Early-Spay Debate', href: '#early' },
                { label: 'Neutering Males', href: '#males' },
                { label: 'Descenting', href: '#descenting' },
                { label: 'Surgery & Recovery', href: '#surgery' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Anesthesia & Surgery Risk', href: '/health/anesthesia-and-surgery-risk' },
                { label: 'Adrenal Disease', href: '/health/adrenal-disease' },
                { label: 'Health Hub', href: '/health' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-spay-neuter"
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
            In most companion species, spaying is about preventing unwanted
            litters and reducing some long-term disease risk. In female ferrets,
            it is about survival. A jill is an induced ovulator who stays in
            heat until she is mated, and a jill left in prolonged heat can die
            of the resulting estrogen toxicity. That single fact reframes the
            whole conversation about desexing ferrets.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            Female ferrets (jills) are induced ovulators who remain in heat
            until bred. Prolonged heat floods the body with estrogen, which
            suppresses the bone marrow and causes a life-threatening aplastic
            anemia — so a non-breeding pet jill must be spayed or otherwise
            kept out of heat. Many ferrets are already desexed young before
            sale. There is an unsettled debate linking very-early spay-neuter to
            the high ferret rate of adrenal disease. Descenting is a separate
            procedure, and all of this involves general anesthesia.
          </p>

          <h2 id="estrogen">Estrogen Toxicity: The Core Reason</h2>
          <p>
            Ferret reproductive biology is the heart of the matter. Unlike many
            mammals, the jill is an <strong>induced ovulator</strong>: she does
            not cycle out of heat on her own but stays in estrus until breeding
            triggers ovulation. If she is not bred and not brought out of heat,
            she remains in prolonged estrus with persistently high estrogen.
          </p>
          <p>
            The exotic-mammal references (Quesenberry &amp; Carpenter,{' '}
            <em>Ferrets, Rabbits, and Rodents</em>) describe the consequence:
            sustained high estrogen is toxic to the bone marrow, suppressing
            production of red and white blood cells and platelets. The result is
            an <strong>aplastic anemia</strong> — pale gums, weakness,
            bruising, and bleeding — that is frequently fatal if not caught and
            treated. This is why a pet jill who will not be bred must be spayed,
            or managed out of heat by a veterinarian using hormonal means.
          </p>
          <CalloutBox variant="warning" title="An intact jill in heat is a clock">
            <p>
              If you have an intact female ferret, confirm a plan with your
              veterinarian before she comes into heat. Signs of estrogen
              toxicity — pale gums, lethargy, bruising, hair loss — in an intact
              jill are an emergency. This is not a wait-and-see situation; see
              our <a href="/health/emergency-warning-signs">emergency warning
              signs</a> reference.
            </p>
          </CalloutBox>

          <h2 id="early">The Early-Spay-Neuter Debate</h2>
          <p>
            In many markets, ferrets are spayed or neutered at a very young age
            by large breeders before they reach pet stores. This guarantees the
            jill is protected from estrogen toxicity — but it has also become
            the center of a genuine scientific debate. Some researchers have
            proposed that removing the gonads very early removes the normal
            hormonal feedback loop, leaving the adrenal glands chronically
            over-stimulated and contributing to the unusually high rate of{' '}
            <a href="/health/adrenal-disease">adrenal disease</a> seen in pet
            ferrets, especially in some regions.
          </p>
          <p>
            The evidence is debated and not settled, and other factors
            (lighting, genetics, diet) are also implicated in adrenal disease.
            The practical upshot for owners is nuance, not alarm: early desexing
            solves a definite, lethal problem (estrogen toxicity) while a
            possible contribution to adrenal disease remains under study. It is
            a topic worth understanding rather than a reason to leave a jill
            intact.
          </p>

          <h2 id="males">Neutering Males</h2>
          <p>
            Intact male ferrets (hobs) do not face an estrogen-toxicity
            equivalent, but neutering is still common for pet hobs. It reduces
            the strong seasonal body odor and the territorial and aggressive
            behaviors that intact males show during breeding season, and it
            prevents unwanted breeding in mixed-sex households. As with jills,
            many hobs are neutered young before sale.
          </p>

          <h2 id="descenting">Descenting</h2>
          <p>
            Descenting is often discussed alongside desexing but is a separate
            procedure. It removes the <strong>anal scent glands</strong> that
            produce the pungent secretion a startled ferret can release. It is
            important to understand what it does <em>not</em> do: it does not
            eliminate the general musky odor of a ferret, which comes from skin
            sebaceous glands, not the anal glands. Many ferrets are descented at
            the same young age as desexing. Whether descenting is appropriate is
            a welfare and values question — in some countries it is discouraged
            or restricted — and one to discuss with your veterinarian rather
            than assume.
          </p>

          <h2 id="surgery">Surgery and Recovery</h2>
          <p>
            Spaying, neutering, and descenting are surgical procedures performed
            under general anesthesia. They carry the same species-specific
            anesthetic considerations as any ferret surgery, detailed in our{' '}
            <a href="/health/anesthesia-and-surgery-risk">anesthesia and
            surgery risk</a> reference — which is the strongest argument for
            using a clinic experienced with ferrets. Recovery from routine
            desexing is generally quick; the veterinarian provides pain control,
            and a short period of restricted activity allows the incision to
            heal. The full ferret health library is organized at the{' '}
            <a href="/health">health hub</a>.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> Saunders/Elsevier —
              ferret reproduction, estrogen toxicity, and adrenal disease
              chapters.
            </li>
            <li>
              <em>Veterinary Clinics of North America: Exotic Animal
              Practice</em> — reviews of ferret reproductive and endocrine
              disease.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em> — clinical and review
              articles on early neutering and ferret adrenal disease.
            </li>
            <li>
              American Ferret Association (AFA) — owner-facing guidance on
              spaying, neutering, and descenting.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about spaying and
            neutering ferrets. It is not individualized veterinary advice.
            Surgical and anesthetic decisions require a clinician familiar with
            ferrets — ideally an AEMV member or an ABVP diplomate in Exotic
            Companion Mammal practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
