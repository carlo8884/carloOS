import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture, buildBreadcrumbSchema, buildFAQSchema, combineSchemas, SchemaScript, StockImage, FAQAccordion } from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Condition-Specific Pet Diets — Reference Library | PetFood.com',
  description:
    'Reference on therapeutic and condition-specific diets — kidney, allergy, weight, diabetic, senior, urinary, GI, liver, and pancreatitis nutrition.',
  path: '/diets',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://petfood.com/' },
    { name: 'Diets', url: 'https://petfood.com/diets' },
  ],
})


const DIETS = [
  {
    slug: 'kidney-disease-diets',
    title: 'Kidney Disease Diets for Dogs and Cats',
    description:
      'Chronic kidney disease is one of the most common conditions of older cats and a frequent diagnosis in older dogs, and diet is the single intervention with the strongest evidence...',
  },
  {
    slug: 'food-allergy-and-elimination-diets',
    title: 'Food Allergy and Elimination Diets',
    description:
      'Food allergy in dogs and cats is real but less common than the marketing suggests, and it cannot be diagnosed by a blood or saliva test.',
  },
  {
    slug: 'weight-management-diets',
    title: 'Weight-Management Diets',
    description:
      'More than half of dogs and cats in many surveys are overweight or obese, and excess weight shortens lifespan and worsens nearly every chronic disease.',
  },
  {
    slug: 'diabetic-diets',
    title: 'Diabetic Diets for Dogs and Cats',
    description:
      'Diabetes mellitus is managed primarily with insulin, but diet is a powerful co-therapy — and the dietary approach differs sharply between cats and dogs because their diabetes differs in kind.',
  },
  {
    slug: 'senior-pet-diets',
    title: 'Senior Pet Diets',
    description:
      'Senior is the most-marketed and least-regulated label on a pet food bag.',
  },
  {
    slug: 'urinary-tract-diets',
    title: 'Urinary and Bladder Stone Diets',
    description:
      'Urinary therapeutic diets manage two of the most common lower-urinary-tract problems: mineral stones (uroliths) and feline idiopathic cystitis.',
  },
  {
    slug: 'fiber-and-digestive-health',
    title: 'Fiber and Digestive Health Diets',
    description:
      'Gastrointestinal therapeutic diets are among the most-used veterinary diets, because digestive upset is one of the most common reasons pets visit the clinic.',
  },
  {
    slug: 'liver-disease-diets',
    title: 'Liver Disease Diets',
    description:
      'The liver is central to metabolism, and liver disease demands a careful nutritional balance — enough high-quality protein to support regeneration without overwhelming a compromised organ, with copper and antioxidants tailored to the diagnosis.',
  },
  {
    slug: 'pancreatitis-low-fat-diets',
    title: 'Pancreatitis and Low-Fat Diets',
    description:
      'Pancreatitis is painful, sometimes life-threatening, and strongly linked to dietary fat in dogs.',
  },
  {
    slug: 'joint-and-mobility-diets',
    title: 'Joint and Mobility Diets',
    description:
      'Osteoarthritis is extremely common in older dogs and underdiagnosed in cats, and diet is a genuine tool for managing it — though the evidence is strongest for the least-marketed levers: weight control and omega-3 fatty acids.',
  },
  {
    slug: 'hydrolyzed-protein-diets',
    title: 'Hydrolyzed and Novel-Protein Diets',
    description:
      'Hydrolyzed and novel-protein diets are the therapeutic backbone of food-allergy and food-responsive gastrointestinal management.',
  },
  {
    slug: 'puppy-and-kitten-growth-diets',
    title: 'Puppy and Kitten Growth Diets',
    description:
      'Growth is the most nutritionally demanding life stage, and the consequences of getting it wrong — skeletal disease in large-breed puppies, developmental deficits in kittens — can be lasting, which is why AAFCO sets a distinct growth nutrient profile.',
  },
  {
    slug: 'cardiac-and-low-sodium-diets',
    title: 'Cardiac and Low-Sodium Diets',
    description:
      'Heart disease is common in older dogs and cats, and diet is a meaningful adjunct to medical management — chiefly through sodium control, but also protein preservation, taurine, and omega-3 fatty acids, staged to the disease.',
  },
  {
    slug: 'hyperthyroid-cat-diets',
    title: 'Hyperthyroid Cat Diets',
    description:
      'Hyperthyroidism is one of the most common endocrine diseases of older cats, and dietary iodine restriction is one of several treatment options — a genuinely effective one, but with a strict all-or-nothing requirement.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Condition-Specific Pet Diets Reference',
  numberOfItems: DIETS.length,
  itemListElement: DIETS.map((d, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: d.title,
    url: `https://petfood.com/diets/${d.slug}`,
  })),
}

// At-a-glance map of condition -> primary dietary lever. Each row summarizes the
// most-supported intervention covered on the linked spoke page; the spoke pages
// carry the nuance, the staging, and the caveats. Therapeutic diet selection is a
// veterinary decision (QC §1: no clinical claims made here beyond what the spokes state).
const LEVERS = [
  { slug: 'kidney-disease-diets', condition: 'Chronic kidney disease', lever: 'Phosphorus restriction; moderated high-quality protein' },
  { slug: 'food-allergy-and-elimination-diets', condition: 'Food allergy', lever: 'Strict elimination diet trial (novel or hydrolyzed protein)' },
  { slug: 'weight-management-diets', condition: 'Overweight / obesity', lever: 'Controlled calories; higher protein and fiber for satiety' },
  { slug: 'diabetic-diets', condition: 'Diabetes mellitus', lever: 'Low carbohydrate (cats); consistent fiber and timing (dogs)' },
  { slug: 'urinary-tract-diets', condition: 'Bladder stones / cystitis', lever: 'Mineral and urine-pH control; increased moisture' },
  { slug: 'pancreatitis-low-fat-diets', condition: 'Pancreatitis (dogs)', lever: 'Fat restriction' },
  { slug: 'liver-disease-diets', condition: 'Liver disease', lever: 'Balanced high-quality protein; copper and antioxidants by diagnosis' },
  { slug: 'cardiac-and-low-sodium-diets', condition: 'Heart disease', lever: 'Sodium restriction staged to disease; protein preservation' },
  { slug: 'hyperthyroid-cat-diets', condition: 'Feline hyperthyroidism', lever: 'Strict dietary iodine restriction' },
  { slug: 'fiber-and-digestive-health', condition: 'GI / digestive upset', lever: 'Digestibility and fiber type matched to the problem' },
  { slug: 'joint-and-mobility-diets', condition: 'Osteoarthritis', lever: 'Weight control and omega-3 fatty acids' },
]

// FAQ derived only from facts stated on this hub and its linked spoke pages.
// Calibrated, defers therapeutic decisions to a veterinarian (QC §1).
const FAQ: FAQItem[] = [
  {
    question: 'What is a condition-specific or therapeutic pet diet?',
    answer:
      'It is a food formulated to manage a diagnosed medical condition by adjusting specific nutrients — for example restricting phosphorus for kidney disease, restricting fat for canine pancreatitis, or restricting iodine for feline hyperthyroidism. These are tools tied to a diagnosis, not wellness categories, and most are sold through the veterinary channel because using them without the matching condition can cause harm.',
  },
  {
    question: 'Do I need a veterinary diagnosis before using a therapeutic diet?',
    answer:
      'Yes. The diets in this library are matched to specific diagnosed conditions and, for several conditions, to a disease stage established by bloodwork — kidney diets are tied to IRIS staging, cardiac diets are staged to the disease. Feeding a restricted therapeutic diet to a healthy animal that does not need it provides no benefit and can cause harm, particularly to growing animals. Diagnosis, diet selection, and monitoring require a licensed veterinarian, and where indicated a board-certified veterinary nutritionist.',
  },
  {
    question: 'Are prescription diets fundamentally different from over-the-counter foods?',
    answer:
      'They are formulated to hit therapeutic nutrient targets that ordinary maintenance foods are not designed to meet, and they are intended to be used under veterinary direction for a diagnosed condition. The "prescription" framing is largely a distribution and oversight model rather than a drug classification. Our prescription-vs-OTC comparison explains where the line actually falls.',
  },
  {
    question: 'Can one diet cover more than one condition?',
    answer:
      'Sometimes the nutrient goals overlap — increased moisture supports both urinary and kidney patients, for instance — but conditions can also pull in opposite directions, and a single animal may have several diagnoses at once. Reconciling competing nutritional needs is exactly the kind of decision that belongs with a veterinarian or a veterinary nutritionist rather than a label comparison.',
  },
]

const dietsSchema = combineSchemas(
  breadcrumbSchema,
  itemListSchema,
  buildFAQSchema({
    questions: FAQ.map((f) => ({
      question: f.question,
      answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
    })),
  }),
)

export default function DietsHubPage() {
  return (
    <>
      <SchemaScript schema={dietsSchema} />
      <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            Condition-Specific Diets
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          Condition-Specific Diets
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          How diet is used to manage diagnosed conditions — what the therapeutic nutrient targets are, what the evidence supports, and what requires veterinary oversight.
        </p>
      </div>

      <nav aria-label="Breadcrumb" className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Diets</span>
      </nav>

      <div className="px-container-sm sm:px-container pt-12">
        <StockImage manifestKey="petfood-com:diets-hero" priority aspect="16:9" variant="wide" />
      </div>

      <div className="px-container-sm sm:px-container pt-12 max-w-content-wide">
        <div
          className="rounded-xl border border-brand-border bg-brand-surface p-6 sm:p-7"
          style={{ borderLeft: '4px solid var(--brand-primary)' }}
        >
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-dark mb-2 font-mono">
            The Short Answer
          </div>
          <p className="text-base text-brand-text-mid leading-relaxed m-0">
            A therapeutic or condition-specific diet manages a <strong>diagnosed</strong> medical condition by
            adjusting specific nutrients — restricting phosphorus for kidney disease, restricting fat for canine
            pancreatitis, restricting iodine for feline hyperthyroidism, and so on. These are formulated tools tied
            to a diagnosis and, for several conditions, to a disease stage set by bloodwork — not wellness
            categories. Feeding one to a healthy animal that does not need it offers no benefit and can cause harm.
            Diet selection, staging, and monitoring belong with a licensed veterinarian, and where indicated a
            board-certified veterinary nutritionist. Use the table below to find the primary dietary lever for each
            condition, then read the linked page for the detail.
          </p>
        </div>
      </div>

      <div className="px-container-sm sm:px-container pt-10 max-w-content-wide">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-2">Therapeutic Diets at a Glance</h2>
        <p className="text-sm text-brand-text-mid leading-relaxed mb-5 max-w-2xl">
          The primary dietary lever for each condition covered in this library. The spoke pages carry the staging,
          the evidence, and the caveats; this is the map, not the territory.
        </p>
        <div className="overflow-x-auto rounded-lg border border-brand-border">
          <table className="w-full text-sm border-collapse bg-brand-white">
            <thead>
              <tr className="bg-brand-surface text-left">
                <th className="px-4 py-3 font-semibold text-brand-dark border-b border-brand-border">Condition</th>
                <th className="px-4 py-3 font-semibold text-brand-dark border-b border-brand-border">Primary dietary lever</th>
                <th className="px-4 py-3 font-semibold text-brand-dark border-b border-brand-border">Reference</th>
              </tr>
            </thead>
            <tbody>
              {LEVERS.map((row) => (
                <tr key={row.slug} className="align-top">
                  <td className="px-4 py-3 font-medium text-brand-dark border-b border-brand-border">{row.condition}</td>
                  <td className="px-4 py-3 text-brand-text-mid border-b border-brand-border">{row.lever}</td>
                  <td className="px-4 py-3 border-b border-brand-border">
                    <Link href={`/diets/${row.slug}`} className="text-brand-primary hover:text-brand-primary-dark font-medium no-underline">
                      Read &rsaquo;
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-brand-text-light leading-relaxed mt-3 max-w-2xl">
          New to this material? Start with <Link href="/guides/how-to-choose-a-pet-food" className="text-brand-primary no-underline hover:underline">how to choose a pet food</Link>{' '}
          and our explainer on <Link href="/compare/prescription-vs-otc-diets" className="text-brand-primary no-underline hover:underline">prescription vs. over-the-counter diets</Link>.
          For the underlying nutrient science, see the <Link href="/nutrition" className="text-brand-primary no-underline hover:underline">nutrition reference</Link>.
        </p>
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <h2 className="font-display font-bold text-brand-dark text-2xl mb-5 max-w-content-wide">Browse the Library</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {DIETS.map((i) => (
            <li key={i.slug}>
              <Link
                href={`/diets/${i.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {i.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {i.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section className="px-container-sm sm:px-container py-12 border-t border-brand-border">
        <div className="max-w-content-wide">
          <h2 className="font-display font-bold text-brand-dark text-2xl mb-2">Common Questions</h2>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-6 max-w-2xl">
            About therapeutic diets as a category. Condition-specific detail lives on each linked page.
          </p>
          <FAQAccordion items={FAQ} includeSchema={false} />
          <p className="text-xs text-brand-text-light leading-relaxed mt-6 max-w-2xl">
            PetFood.com is reference material. We do not provide individualized veterinary advice. Therapeutic
            diets, diagnosed disease, and breed-specific nutritional concerns require a licensed veterinarian and,
            where indicated, a board-certified veterinary nutritionist.
          </p>
        </div>
      </section>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="petfood-com"
          title="Free Label Decoder"
          subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
          source="diets-hub"
        />
      </section>
    </>
  </>
  )
}
