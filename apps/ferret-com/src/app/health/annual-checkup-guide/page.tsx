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
  CrossPortfolioCard,
  ArticleSourcesList,
} from '@carloOS/ui'

const SOURCES = [
  {
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret preventive medicine, wellness examination, and age-associated disease chapters.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Routine Health Care of Ferrets: examination cadence, screening bloodwork, vaccination schedules, and common age-associated conditions",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/routine-health-care-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — ferret preventive-care standards and wellness continuing-education resources",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical articles on ferret diagnostics, disease screening, and senior-ferret monitoring protocols",
    url: "https://www.sciencedirect.com/journal/journal-of-exotic-pet-medicine",
    publisher: "Journal of Exotic Pet Medicine",
  },
]
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Annual Checkup Guide — What a Wellness Exam Covers | Ferret.com',
  description:
    'What a ferret wellness exam includes, how often to go, and why ferrets over three need twice-yearly visits — the exam, bloodwork screening, and how to prepare.',
  path: '/health/annual-checkup-guide',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Annual Checkup Guide',
  description:
    "A guide to the ferret wellness exam — recommended frequency by age, what the physical exam and screening bloodwork cover, vaccination review, and early detection of insulinoma, adrenal, dental, and cardiac disease.",
  url: 'https://ferret.com/health/annual-checkup-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',

  citation: SOURCES,
})

const medSchema = buildMedicalWebPageSchema({
  name: 'Ferret Annual Checkup Guide',
  description:
    "Clinical reference on the ferret wellness examination — recommended frequency by age, exam components, screening diagnostics, and early detection of common middle-aged diseases.",
  url: 'https://ferret.com/health/annual-checkup-guide',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})


const FAQS = [
  {
    question: 'How often should a ferret see the vet?',
    answer:
      "A healthy young adult ferret should have a wellness exam at least once a year. From around age three onward, most exotic-pet veterinarians recommend twice-yearly visits, because the common middle-aged ferret diseases — insulinoma, adrenal disease, lymphoma, dental and heart disease — develop and progress quickly, and a six-month interval catches them earlier. Kits need a series of early visits for their vaccination schedule.",
  },
  {
    question: 'What does a ferret wellness exam include?',
    answer:
      "A thorough nose-to-tail physical: weight and body condition, heart and lung auscultation, abdominal palpation (feeling for an enlarged spleen, masses, or organ changes), an oral and dental check, ear and eye inspection, skin and coat assessment, and a review of diet, behavior, and vaccination status. From middle age onward the vet often recommends screening bloodwork, including a fasting blood glucose to look for insulinoma.",
  },
  {
    question: 'Does my ferret need bloodwork at every visit?',
    answer:
      "Not necessarily as a young adult, but it becomes increasingly valuable with age. A baseline blood panel in a healthy adult gives the vet a reference for the future, and from around age three a fasting glucose and a chemistry panel are commonly recommended at least annually to catch insulinoma and organ changes before symptoms appear. Your veterinarian sets the screening cadence based on the individual ferret.",
  },
  {
    question: 'How should I prepare for a ferret checkup?',
    answer:
      "Bring the ferret in a secure carrier, and bring notes: current diet, any behavior or appetite changes, weight trend if you track it, and a list of questions. If fasting bloodwork is planned, follow the clinic's fasting instructions exactly — ferret fasting is kept short because of insulinoma risk, so do not fast a ferret on your own without guidance. A recent stool sample can be useful if your vet requests one.",
  },
  {
    question: 'Why do older ferrets need more frequent checkups?',
    answer:
      "Because the diseases that dominate ferret medicine cluster in middle age and progress fast. Insulinoma and adrenal disease are common from around age three, dental disease accumulates, and heart disease and lymphoma become more likely. A twice-yearly exam roughly doubles the chance of catching these while they are still most treatable, which is why it is the standard recommendation for ferrets over three.",
  },
  {
    question: 'What vaccinations are reviewed at a checkup?',
    answer:
      "Canine distemper and rabies are the core ferret vaccinations, and the wellness visit is when boosters are reviewed and given on schedule. The vet also discusses any post-vaccination reaction history and may premedicate or monitor accordingly. Our vaccination schedule guide covers the kit series and adult booster timing in detail; the actual products and timing are the veterinarian's call.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function FerretAnnualCheckupGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Annual Checkup Guide',
          subtitle:
            "Ferrets pack a lot of disease into a short life, and most of the conditions that shorten it are far more treatable when caught early. The wellness exam is where early detection happens. Here is what a ferret checkup actually covers, how often to go at each life stage, and why the threshold shifts to twice a year once a ferret hits middle age.",
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Annual Checkup Guide', href: '/health/annual-checkup-guide' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Checkups Matter', href: '#why' },
                { label: 'How Often by Age', href: '#frequency' },
                { label: 'What the Exam Covers', href: '#exam' },
                { label: 'Screening Bloodwork', href: '#bloodwork' },
                { label: 'Vaccination Review', href: '#vaccines' },
                { label: 'How to Prepare', href: '#prepare' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
                { label: 'Vaccination Schedule', href: '/health/vaccinations' },
                { label: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-annual-checkup-guide"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Vaccinations', href: '/health/vaccinations' },
          { title: 'Vet Visit Prep', href: '/health/vet-visit-prep' },
          { title: 'First-Year Schedule', href: '/first-year-schedule' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
          />

          <DropCap>
            Ferrets live fast and develop disease young. By the time a ferret
            reaches middle age — around three years old — insulinoma, adrenal
            disease, dental disease, and heart disease all become realistic
            possibilities, and they share a common feature: each is far more
            manageable when found early. The wellness exam is the single best
            tool for that early detection, which is why the recommendation for
            ferrets is more aggressive than for many longer-lived pets.
          </DropCap>

          <h2 id="why">Why Wellness Checkups Matter So Much in Ferrets</h2>
          <p>
            Ferrets are masters at hiding illness, and their common diseases
            progress quickly. A ferret can look entirely normal at home while
            an insulinoma or an adrenal tumor is already developing. A wellness
            exam puts a trained clinician&apos;s hands and eyes — and, with age,
            bloodwork — on the animal at a regular interval, which is how
            problems get caught before the ferret shows obvious symptoms. By the
            time an owner notices something wrong, the disease is often advanced.
          </p>

          <h2 id="frequency">How Often by Age</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="text-left p-3 font-semibold">Life stage</th>
                  <th className="text-left p-3 font-semibold">Recommended frequency</th>
                  <th className="text-left p-3 font-semibold">Focus</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Kit (under ~6 mo)</td>
                  <td className="p-3">Series of early visits</td>
                  <td className="p-3">Vaccination schedule, baseline exam, spay/neuter discussion</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Young adult (~6 mo–3 yr)</td>
                  <td className="p-3">Annual</td>
                  <td className="p-3">Wellness exam, booster vaccines, optional baseline bloodwork</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Middle-aged (3–5 yr)</td>
                  <td className="p-3">Twice yearly</td>
                  <td className="p-3">Screening for insulinoma, adrenal, dental, cardiac disease</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Senior (5+ yr)</td>
                  <td className="p-3">Twice yearly or more</td>
                  <td className="p-3">Close monitoring, quality-of-life tracking</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>
            These are general patterns; your veterinarian sets the exact cadence
            for an individual ferret, more often if there is a known condition.
          </p>

          <h2 id="exam">What the Exam Covers</h2>
          <p>
            A thorough ferret wellness exam is a nose-to-tail assessment:
          </p>
          <ul>
            <li>
              <strong>Weight and body condition.</strong> Weight is one of the
              most sensitive early indicators in ferrets; a trend matters more
              than a single number, which is why home weighing between visits is
              valuable.
            </li>
            <li>
              <strong>Heart and lung auscultation.</strong> Listening for
              murmurs, arrhythmias, or abnormal lung sounds — early clues to{' '}
              <a href="/health/heart-disease">heart disease</a>.
            </li>
            <li>
              <strong>Abdominal palpation.</strong> Feeling for an enlarged
              spleen, masses, foreign material, or organ changes.
            </li>
            <li>
              <strong>Oral and dental check.</strong> Tartar, gingivitis, and
              periodontal disease are common and under-treated — see{' '}
              <a href="/health/dental-disease">dental disease</a>.
            </li>
            <li>
              <strong>Ears, eyes, skin, and coat.</strong> Checking for mites,
              infection, and the symmetrical hair loss that can flag{' '}
              <a href="/health/adrenal-disease">adrenal disease</a>.
            </li>
            <li>
              <strong>History review.</strong> Diet, behavior, appetite, water
              intake, litter habits, and vaccination status.
            </li>
          </ul>

          <h2 id="bloodwork">Screening Bloodwork</h2>
          <p>
            Diagnostics become increasingly central as a ferret ages. A baseline
            blood panel in a healthy young adult gives the vet a reference point
            for the future. From around age three, exotic-pet veterinarians
            commonly recommend periodic screening that may include:
          </p>
          <ul>
            <li>
              <strong>Fasting blood glucose</strong> to screen for{' '}
              <a href="/health/insulinoma">insulinoma</a>, the most common
              middle-aged ferret tumor. Fasting before this test is kept short
              and done on veterinary instruction because of the very
              hypoglycemia risk being screened for.
            </li>
            <li>
              <strong>Chemistry panel and complete blood count</strong> to assess
              organ function and detect early systemic changes.
            </li>
            <li>
              <strong>Hormone panels or imaging</strong> when adrenal disease,
              cardiac disease, or a mass is suspected on exam.
            </li>
          </ul>

          <CalloutBox variant="warning" title="Never fast a ferret on your own">
            <p>
              Ferrets have a high metabolic rate and limited reserves, and
              insulinoma makes prolonged fasting dangerous. If bloodwork requires
              fasting, follow the clinic&apos;s short, specific instructions
              exactly — do not withhold food from a ferret on your own initiative.
            </p>
          </CalloutBox>

          <h2 id="vaccines">Vaccination Review</h2>
          <p>
            The wellness visit is when vaccination status is reviewed and
            boosters given. Canine distemper and rabies are the core ferret
            vaccinations; the vet schedules boosters, notes any prior reaction
            history, and monitors or premedicates accordingly. Our{' '}
            <a href="/health/vaccinations">vaccination schedule guide</a> details
            the kit series and adult booster timing. The specific products and
            schedule are always the veterinarian&apos;s decision.
          </p>

          <h2 id="prepare">How to Prepare</h2>
          <ul>
            <li>
              <strong>Use a secure carrier</strong> and keep the ferret warm and
              calm in transit. Our{' '}
              <a href="/health/vet-visit-prep">vet visit prep guide</a> covers
              carrier setup and reducing travel stress.
            </li>
            <li>
              <strong>Bring notes:</strong> current diet, weight trend, any
              changes in appetite, energy, stool, or behavior, and a written list
              of questions.
            </li>
            <li>
              <strong>Follow fasting instructions precisely</strong> if bloodwork
              is planned — and only as the clinic directs.
            </li>
            <li>
              <strong>Bring a recent stool sample</strong> if your vet has
              requested one.
            </li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about ferret wellness care.
            It is not individualized veterinary advice and does not include
            medication dosing. Exam frequency, screening tests, and vaccination
            schedules are decisions for a veterinarian experienced with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
