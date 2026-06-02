import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Cushing's Disease (PPID) — Signs, Testing, Treatment",
  description:
    "Reference guide to PPID (pituitary pars intermedia dysfunction), equine Cushing's disease: mechanism, signs, ACTH testing, pergolide, and laminitis risk.",
  path: '/health/cushings-ppid',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equine Cushing's Disease (PPID) — Signs, Testing, Treatment",
  description:
    "Pituitary pars intermedia dysfunction (PPID), equine Cushing's disease: mechanism, clinical signs, ACTH testing, treatment, and laminitis risk.",
  url: 'https://horses.com/health/cushings-ppid',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Cushing's Disease (PPID)",
  description:
    "Pituitary pars intermedia dysfunction (PPID), equine Cushing's disease: mechanism, clinical signs, ACTH testing, treatment, and laminitis risk.",
  url: 'https://horses.com/health/cushings-ppid',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const FAQS = [
  {
    question: "At what age do horses get PPID?",
    answer:
      "PPID is most common in horses and ponies over 15, with prevalence rising sharply with age -- studies estimate roughly one in five horses over 15 is affected. It occasionally appears in younger horses. Because it is progressive and treatable, testing older horses with any suggestive sign is worthwhile.",
    answerText:
      "PPID is most common over age 15 and prevalence rises with age, affecting roughly one in five horses over 15. It can occur earlier.",
  },
  {
    question: "Is PPID the same as equine metabolic syndrome?",
    answer:
      "No, but they overlap. PPID is a pituitary disease of older horses; EMS is a syndrome of insulin dysregulation often tied to obesity. Both cause insulin dysregulation and laminitis, and a horse can have both. The distinction matters because PPID is treated with pergolide while EMS is managed mainly through diet and exercise.",
    answerText:
      "No. PPID is a pituitary disease of older horses; EMS is an insulin-dysregulation syndrome. They overlap and both cause laminitis, but PPID is treated with pergolide and EMS mainly by diet and exercise.",
  },
  {
    question: "Why does a Cushing's horse have a long coat?",
    answer:
      "Excess hormones from the enlarged pars intermedia disrupt the normal seasonal shedding cycle, producing a long, thick, often curly coat that fails to shed (hypertrichosis). It is the most specific clinical sign of PPID. Body clipping helps affected horses stay cool in warm weather.",
    answerText:
      "Excess pituitary hormones disrupt seasonal shedding, producing the long, curly, non-shedding coat (hypertrichosis) that is the most specific sign of PPID. Clipping helps in summer.",
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : '') })),
})

const combined = combineSchemas(articleSchema, medSchema, faqSchema)

export default function PPIDPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: "Equine Cushing's Disease (PPID)",
          subtitle:
            "Pituitary pars intermedia dysfunction (PPID), historically called equine Cushing's disease, is the most common endocrine disorder of older horses -- prevalence rises steeply after age 15. It is a slowly progressive neurodegenerative condition that disrupts hormonal control from the pituitary gland, producing the classic long, curly, non-shedding coat alongside muscle loss, lethargy, and a serious risk of laminitis. It is highly manageable with a single veterinarian-prescribed medication, and early testing of any older horse pays off. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "12 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Cushing's / PPID", href: '/health/cushings-ppid' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is PPID", href: "#what" },
            { label: "The Mechanism", href: "#mechanism" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Diagnosis", href: "#diagnosis" },
            { label: "Treatment", href: "#treatment" },
            { label: "PPID and Laminitis", href: "#laminitis" },
            { label: "Management", href: "#management" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <RelatedLinks
            title="Related Health"
            links={[
              { label: "Equine Laminitis", href: "/health/laminitis" },
              { label: "Equine Metabolic Syndrome", href: "/health/equine-metabolic-syndrome" },
              { label: "Senior Horse Care", href: "/ownership/senior-horse-care" },
              { label: "Feeding Senior Horses", href: "/nutrition/feeding-senior-horses" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-ppid"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Is PPID</h2>
          <p>PPID is a disease of the pars intermedia, the middle lobe of the pituitary gland at the base of the brain. With age, the dopamine-producing neurons that normally restrain this lobe degenerate, the pars intermedia enlarges, and it oversecretes a group of hormones derived from a precursor called proopiomelanocortin (POMC), including ACTH. The result is a cascade of downstream effects on coat, muscle, immune function, and -- critically -- insulin regulation. PPID is most common in horses and ponies over 15, but it can appear earlier.</p>

          <h2 id="mechanism">The Mechanism</h2>
          <p>Normally, dopamine released from the hypothalamus inhibits the pars intermedia. In PPID, oxidative loss of those dopaminergic neurons removes that brake, so the pars intermedia grows and pours out excess hormones. This is why treatment uses pergolide, a dopamine agonist that restores the missing inhibitory signal. Because the disease is neurodegenerative and progressive, it is controlled rather than cured.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li><strong>Hypertrichosis</strong> -- a long, thick, curly coat that fails to shed normally. This is the most specific sign of PPID and, when present, is nearly diagnostic.</li>
            <li><strong>Laminitis</strong> -- often the first or most serious presentation, driven by associated insulin dysregulation.</li>
            <li><strong>Muscle wasting</strong> especially over the topline, giving a pot-bellied, sway-backed appearance.</li>
            <li><strong>Lethargy and reduced performance.</strong></li>
            <li><strong>Regional fat deposits</strong> and abnormal sweating (either excessive or reduced).</li>
            <li><strong>Increased drinking and urination</strong> in some horses.</li>
            <li><strong>Recurrent infections</strong> -- skin, sinus, hoof abscesses, and slow wound healing from immune suppression.</li>
          </ul>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>The workhorse test is basal plasma ACTH, interpreted against season-adjusted reference ranges (ACTH normally rises in autumn, which the laboratory accounts for). In early or equivocal cases, a TRH stimulation test -- measuring ACTH before and after a dose of thyrotropin-releasing hormone -- improves sensitivity. The clinical picture, especially hypertrichosis, supports the diagnosis. Many veterinarians also test for insulin dysregulation, because the combination changes the laminitis-risk conversation.</p>

          <h2 id="treatment">Treatment</h2>
          <p>Pergolide mesylate, a dopamine agonist, is the standard veterinarian-prescribed treatment and the only product licensed for PPID in horses in many regions. It restores dopaminergic inhibition of the pars intermedia, normalizing ACTH and improving clinical signs over weeks to months. Dosing and monitoring are determined by the veterinarian, with follow-up ACTH testing to confirm response. A transient reduced appetite when starting pergolide is common and usually managed by dose adjustment under veterinary guidance.</p>

          <h2 id="laminitis">PPID and Laminitis</h2>
          <p>The most dangerous consequence of PPID is laminitis, mediated largely through insulin dysregulation. Any older horse with unexplained or recurrent laminitis should be tested for PPID. Conversely, a PPID diagnosis prompts a laminitis-prevention plan: diet control, weight management, and prompt treatment of the endocrine disease.</p>

          <h2 id="management">Management</h2>
          <p>Beyond medication, PPID horses benefit from body clipping in summer (the heavy coat impairs cooling), excellent dental and hoof care, attentive deworming, prompt treatment of infections, and a diet matched to their metabolic status. With pergolide and good husbandry, many PPID horses live comfortably for years after diagnosis.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Equine Endocrinology Group. “Recommendations for the Diagnosis and Treatment of PPID,” current edition. sites.tufts.edu/equineendogroup.</li>
            <li>McFarlane D. “Equine Pituitary Pars Intermedia Dysfunction.” Veterinary Clinics of North America: Equine Practice, 2011; 27(1):93–113.</li>
            <li>Ireland JL, McGowan CM. “Epidemiology of Pituitary Pars Intermedia Dysfunction.” Veterinary Journal, 2018; 235:22–30.</li>
            <li>American Association of Equine Practitioners. “PPID (Equine Cushing&apos;s Disease)” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
