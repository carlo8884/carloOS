import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline,
  FAQAccordion,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Ozempic for Cats? GLP-1 Weight-Loss Drugs Explained | PetFood.com',
  description:
    'Cats are the first species in GLP-1 drug trials (OKV-119). What is real, why human Ozempic is unsafe for cats, and proven feline weight-loss methods.',
  path: '/feeding/ozempic-for-cats',
  type: 'article',
})

const SOURCES = [
  {
    label: 'OKAVA Announces First Cat Dosed in MEOW-1 Study of OKV-119, the World’s First GLP-1 Weight-Loss Therapy for Pets',
    url: 'https://okava.com/okava-announces-first-cat-dosed-in-meow-1-study-of-okv-119-the-worlds-first-glp-1-weight-loss-therapy-for-pets/',
    publisher: 'OKAVA / Vivani Medical, 2026',
  },
  {
    label: 'FDA Center for Veterinary Medicine — Animal Drug Approvals and Investigational New Animal Drug (INAD) process',
    url: 'https://www.fda.gov/animal-veterinary',
    publisher: 'U.S. Food and Drug Administration',
  },
  {
    label: 'Pet Obesity Prevalence Surveys and Position Statements',
    url: 'https://www.petobesityprevention.org/',
    publisher: 'Association for Pet Obesity Prevention',
  },
  {
    label: 'Nutrient Requirements of Dogs and Cats',
    url: 'https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats',
    publisher: 'National Research Council, National Academies Press, 2006',
  },
]

const FAQS = [
  {
    question: 'Is there an Ozempic for cats?',
    answer:
      'Not as an approved drug yet — but cats are the species furthest along. OKAVA’s OKV-119, a small under-the-skin implant that releases the GLP-1 receptor agonist exenatide, is in a clinical trial in overweight cats (the MEOW-1 study) under an FDA investigational application. No human GLP-1 drug such as semaglutide (Ozempic/Wegovy) is approved for cats, and a feline approval for OKV-119 is not expected before roughly 2027–2028.',
  },
  {
    question: 'Can I give my cat my own Ozempic or Wegovy?',
    answer:
      'No. Semaglutide has not been studied or dose-established in cats, and cats are exquisitely sensitive to medication and to weight changes. Off-label use risks vomiting, dehydration, and — because reduced food intake in cats can be dangerous — hepatic lipidosis (fatty liver), a potentially fatal condition. There are also documented cases of pets being injected with an owner’s GLP-1 pen by mistake instead of insulin. Never medicate a cat without veterinary direction.',
  },
  {
    question: 'Why are cats being studied before dogs?',
    answer:
      'Feline obesity and its downstream diseases — diabetes, urinary disease, arthritis — are widespread, and the developer designed OKV-119 around feline metabolism first. Results from the cat study are expected to guide whether and when similar dog trials begin, so the cat data is effectively leading the entire pet-GLP-1 field.',
  },
  {
    question: 'What is the safe way to help an overweight cat lose weight now?',
    answer:
      'Gradual, measured calorie reduction toward ideal body weight — never a crash diet, because rapid weight loss in cats can trigger hepatic lipidosis. Use body condition scoring rather than the scale alone, feed measured meals instead of free-choice grazing, and consider a veterinary weight-management diet. Any weight-loss plan for a cat should be set and monitored with a veterinarian.',
  },
]

const articleSchema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Ozempic for Cats? GLP-1 Weight-Loss Drugs Explained',
  description:
    'Cats are the first species in GLP-1 drug trials (OKV-119). What is real, why human Ozempic is unsafe for cats, and proven feline weight-loss methods.',
  url: 'https://petfood.com/feeding/ozempic-for-cats',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-15T00:00:00Z',
  modifiedAt: '2026-06-15T00:00:00Z',
  citation: SOURCES,
})
const faqSchema = buildFAQSchema({ questions: FAQS })
const schema = combineSchemas(articleSchema, faqSchema)

export default function OzempicForCatsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Ozempic for Cats? What the GLP-1 Trend Means for Felines',
        subtitle:
          'Cats — not dogs or humans-for-pets — are the first species in a clinical trial of a purpose-built GLP-1 weight-loss therapy. This reference explains what is genuinely in development, why borrowing human Ozempic is dangerous for cats specifically, and the proven feline weight-loss methods that work today.',
        category: 'Feeding Guide',
        publishedAt: 'June 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Feeding', href: '/feeding' },
        { name: 'Ozempic for Cats', href: '/feeding/ozempic-for-cats' },
      ]}
      relatedLinks={[
        { title: 'Feeding Hub', href: '/feeding' },
        { title: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
        { title: 'Body Condition Scoring', href: '/feeding/body-condition-scoring' },
        { title: 'How Much to Feed a Cat', href: '/feeding/how-much-to-feed-a-cat' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Short Answer', href: '#short' },
              { label: 'Why Cats Are First', href: '#first' },
              { label: 'What OKV-119 Actually Is', href: '#okv119' },
              { label: 'Why Not Human Ozempic', href: '#offlabel' },
              { label: 'What Works for Cats Today', href: '#works' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
              { label: 'Body Condition Scoring', href: '/feeding/body-condition-scoring' },
              { label: 'How Much to Feed a Cat', href: '/feeding/how-much-to-feed-a-cat' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="ozempic-for-cats"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-15T00:00:00Z" updatedAt="2026-06-15T00:00:00Z" reviewedBy="Editorial team" />

        <h2 id="short">The Short Answer</h2>
        <p><strong>As of 2026, no GLP-1 weight-loss drug is approved for cats</strong> — not semaglutide (Ozempic/Wegovy), and not any veterinary product. However, cats are the <em>first</em> species in which a purpose-built pet GLP-1 therapy is being tested in the clinic, so this is a genuine emerging area rather than pure speculation. For an overweight cat today, the proven path is gradual, measured calorie reduction under veterinary guidance — covered in <a href="/diets/weight-management-diets">weight-management diets</a> and <a href="/feeding/how-much-to-feed-a-cat">how much to feed a cat</a>. The dog-side version of this question is covered on our sister site at <a href="https://dog.com/nutrition/ozempic-for-dogs">Dog.com: Ozempic for Dogs</a>.</p>

        <h2 id="first">Why Cats Are First in Line</h2>
        <p>Feline obesity is one of the most common nutritional disorders in companion animals, and it drives diabetes mellitus, urinary disease, and arthritis. Because so many indoor, neutered cats carry excess weight on a small frame — where even a few hundred grams matters — cats are both a large clinical need and a logical first target for a weight-loss therapy. The first GLP-1 pet drug in trials was designed around feline metabolism, and its cat results are expected to determine whether dog studies follow.</p>

        <h2 id="okv119">What OKV-119 Actually Is</h2>
        <p>OKV-119, developed by OKAVA with Vivani Medical, is not a weekly injection. It is a miniature subdermal implant that delivers exenatide — a GLP-1 receptor agonist — at a steady dose for up to roughly six months, placed during a routine veterinary visit. The MEOW-1 study is evaluating its safety, tolerability, and weight-loss effect in overweight client-owned cats under an FDA Center for Veterinary Medicine investigational application.</p>
        <ul>
          <li><strong>Status:</strong> In-trial, not approved. Early results are expected around summer 2026.</li>
          <li><strong>Regulatory timeline:</strong> The developer has indicated it aims to request FDA approval in roughly 2027–2028, contingent on trial outcomes.</li>
          <li><strong>Not a food:</strong> Some 2026 pet foods are marketed as "GLP-1-style" using amino-acid and probiotic blends. Those are foods, not drugs — they contain no GLP-1 medication and carry no drug approval. Total calories, not a label claim, control a cat’s weight.</li>
        </ul>

        <h2 id="offlabel">Why You Cannot Borrow Human Ozempic for a Cat</h2>
        <p>Reaching for a human semaglutide pen is not a shortcut — it is a distinct hazard in cats:</p>
        <ul>
          <li><strong>No feline dosing exists.</strong> Semaglutide has not been studied in cats; safe dose, interval, and interactions are unknown.</li>
          <li><strong>Hepatic lipidosis risk.</strong> Cats that abruptly stop eating — a plausible effect of an appetite-suppressing drug at the wrong dose — can develop hepatic lipidosis (fatty liver), a life-threatening emergency. This is the single most important reason feline weight loss must be gradual and monitored.</li>
          <li><strong>Accidental-exposure danger.</strong> There are documented cases of diabetic pets receiving an owner’s GLP-1 injection by mistake instead of insulin. Store any GLP-1 pen separately from pet insulin, label it, and keep it out of reach.</li>
        </ul>

        <h2 id="works">What Actually Works for Cats Today</h2>
        <p>The methods that reliably and safely reduce feline weight already exist:</p>
        <ul>
          <li><strong>Feed to ideal weight, measured.</strong> Derive a calorie target from the cat’s ideal body weight and measure portions — see <a href="/feeding/how-much-to-feed-a-cat">how much to feed a cat</a>. A lean 4 kg indoor cat often needs only ~200–250 kcal/day, so small overages add up fast.</li>
          <li><strong>Go gradual.</strong> Aim for slow loss and reassess every few weeks using <a href="/feeding/body-condition-scoring">body condition scoring</a>. Never crash-diet a cat.</li>
          <li><strong>Veterinary weight-management diets.</strong> Formulated to preserve satiety and lean mass while cutting calorie density — see <a href="/diets/weight-management-diets">weight-management diets</a>.</li>
          <li><strong>Meal feeding and foraging.</strong> Replace free-choice grazing with measured meals or puzzle feeders to make intake countable and add activity.</li>
        </ul>
        <p>This page will be updated as the OKV-119 cat trial reports out and as the feline GLP-1 picture changes. For now, the proven path — gradual, measured, vet-monitored weight loss — is also the available one.</p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS} />

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. Drug-approval status and trial timelines reflect publicly
          reported information as of June 2026 and may change. We do not provide individualized
          veterinary advice. Feline weight loss and any medication decision require a licensed
          veterinarian.
        </p>
      </div>
    </ArticleLayout>
  )
}
