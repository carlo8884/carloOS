import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Equine Metabolic Syndrome (EMS) — Signs, Diagnosis, Management",
  description:
    "Reference guide to equine metabolic syndrome: insulin dysregulation, regional adiposity, laminitis risk, diagnostic testing, and dietary and exercise management.",
  path: '/health/equine-metabolic-syndrome',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Equine Metabolic Syndrome (EMS) — Signs, Diagnosis, Management",
  description:
    "Equine metabolic syndrome (EMS): insulin dysregulation, obesity and regional adiposity, laminitis risk, diagnosis, and management.",
  url: 'https://horses.com/health/equine-metabolic-syndrome',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Equine Metabolic Syndrome",
  description:
    "Equine metabolic syndrome (EMS): insulin dysregulation, obesity and regional adiposity, laminitis risk, diagnosis, and management.",
  url: 'https://horses.com/health/equine-metabolic-syndrome',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Can EMS be cured?",
    answer:
      "EMS is managed rather than cured. With weight control, a low-sugar and low-starch diet, exercise, and -- where PPID coexists -- veterinarian-prescribed medication, most horses stay sound and avoid laminitis indefinitely. The predisposition remains, so management is lifelong.",
    answerText:
      "EMS is managed, not cured. Weight control, a low-sugar diet, exercise, and treating any coexisting PPID keep most horses sound. The predisposition is lifelong.",
  },
  {
    question: "What is a cresty neck?",
    answer:
      "A cresty neck is an abnormal fat deposit along the top of the neck that becomes firm and can fall to one side. It is a hallmark of regional adiposity in EMS and is scored on a 0-to-5 cresty neck scale. A persistent firm crest is a marker of insulin dysregulation and laminitis risk.",
    answerText:
      "A cresty neck is an abnormal firm fat deposit along the top of the neck, a hallmark of EMS-associated regional adiposity and a marker of laminitis risk.",
  },
  {
    question: "Should I soak hay for an EMS horse?",
    answer:
      "Soaking hay for 30 to 60 minutes in cool water leaches out a portion of the water-soluble carbohydrate, lowering the sugar load. It is a useful tool when hay sugar content is unknown or high. Discard the soak water, and feed promptly to avoid spoilage in warm weather.",
    answerText:
      "Yes -- soaking hay 30 to 60 minutes leaches out water-soluble carbohydrate, lowering sugar. Discard the water and feed promptly.",
  },
]

export default function EMSPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        hero={{
          title: "Equine Metabolic Syndrome",
          subtitle:
            "Equine metabolic syndrome (EMS) is the leading driver of laminitis in horses and ponies. It is not a single disease but a cluster of findings centered on insulin dysregulation, often accompanied by obesity or regional fat deposits and a high risk of laminitis. EMS is largely a disease of management, and the good news is that the same tools that diagnose it -- body condition scoring, blood insulin testing, and diet review -- also reverse it. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "12 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Equine Metabolic Syndrome", href: '/health/equine-metabolic-syndrome' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is EMS", href: "#what" },
            { label: "Insulin Dysregulation", href: "#insulin" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Diagnosis", href: "#diagnosis" },
            { label: "Dietary Management", href: "#diet" },
            { label: "Exercise", href: "#exercise" },
            { label: "Prognosis", href: "#prognosis" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Laminitis Risk</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Any EMS horse showing a bounding digital pulse, heat in the feet, or a shortened gait should be treated as a laminitis emergency. Call your veterinarian.
            </p>
          </div>
          <RelatedLinks
            title="Related Health"
            links={[
              { label: "Equine Laminitis", href: "/health/laminitis" },
              { label: "Cushing's / PPID", href: "/health/cushings-ppid" },
              { label: "Feeding the Easy Keeper", href: "/nutrition/feeding-the-easy-keeper" },
              { label: "Body Condition Score Tool", href: "/tools/body-condition-score" },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Citation-anchored equine reference articles."
            source="health-ems"
          />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="what">What Is EMS</h2>
          <p>Equine metabolic syndrome describes a horse with insulin dysregulation and an elevated risk of laminitis, frequently in combination with generalized obesity or localized fat deposits over the crest of the neck, the tailhead, behind the shoulder, and around the sheath or mammary region. The syndrome was formalized in the early 2000s and refined by the Equine Endocrinology Group, which publishes the consensus diagnostic and management guidance veterinarians follow.</p>
          <p>Certain breeds are genetically predisposed. Ponies, Morgans, Arabians, Paso Finos, Saddlebreds, and many warmblood and gaited types are classic &apos;easy keepers&apos; that evolved to thrive on sparse forage and store energy efficiently -- a survival trait that becomes a liability on modern rich pasture and calorie-dense feed.</p>

          <h2 id="insulin">Insulin Dysregulation</h2>
          <p>The central abnormality in EMS is insulin dysregulation: an exaggerated insulin response to dietary sugars and starches, fasting hyperinsulinemia, or tissue insulin resistance. High circulating insulin is directly laminitis-triggering, which is why EMS and laminitis are so tightly linked. Controlling insulin -- by controlling the sugar and starch the horse eats -- is the heart of management.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li><strong>Regional adiposity</strong> -- a cresty neck, fat pads at the tailhead, behind the shoulder, and around the sheath or udder.</li>
            <li><strong>Generalized obesity</strong> -- a body condition score of 7 or higher on the Henneke 1-9 scale, though some EMS horses are not overtly fat.</li>
            <li><strong>Laminitis</strong> -- recurrent or low-grade, often the first thing that brings the horse to veterinary attention.</li>
            <li><strong>Difficulty losing weight</strong> despite restricted feeding.</li>
            <li><strong>Abnormal fat distribution</strong> that persists even when overall condition is moderate.</li>
          </ul>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>Diagnosis combines the clinical picture with blood testing for insulin dysregulation. Resting (basal) insulin measured after a controlled fast is the simplest screen, but a dynamic test -- the oral sugar test, in which a measured dose of corn syrup is given and insulin is checked at set intervals -- is more sensitive. Because PPID (equine Cushing&apos;s) also causes insulin dysregulation and laminitis, older horses are usually tested for PPID as well, via basal ACTH. Interpretation follows the Equine Endocrinology Group reference ranges, which are season-adjusted.</p>

          <h2 id="diet">Dietary Management</h2>
          <ul>
            <li><strong>Restrict non-structural carbohydrate (NSC).</strong> Aim for forage under roughly 10 to 12 percent NSC; soaking hay for 30 to 60 minutes leaches out a meaningful fraction of sugar. Test hay when possible.</li>
            <li><strong>Eliminate grain and treats</strong> for the affected horse; replace with a low-calorie ration balancer to supply vitamins and minerals without sugar and starch.</li>
            <li><strong>Control pasture access</strong> with a grazing muzzle, a dry lot, or strip grazing. Pasture sugar peaks on sunny afternoons after cool nights and during spring and autumn flushes.</li>
            <li><strong>Feed by weight, not volume</strong> -- typically 1.5 percent of ideal (not current) bodyweight per day in forage dry matter for weight loss, never below 1.25 percent without veterinary supervision.</li>
            <li><strong>Use slow feeders</strong> to extend a restricted ration and reduce the long fasting gaps that promote ulcers.</li>
          </ul>

          <h2 id="exercise">Exercise</h2>
          <p>When the horse is sound, structured exercise improves insulin sensitivity independent of weight loss. The standard recommendation is progressive aerobic work -- brisk trotting, hill work, and conditioning rides several times a week. Exercise is contraindicated during active laminitis; in those cases, diet and the underlying endocrine control come first, and exercise resumes once the feet are stable.</p>

          <h2 id="prognosis">Prognosis</h2>
          <p>EMS is managed, not cured. Horses whose owners commit to diet, exercise, and -- where PPID coexists -- veterinarian-prescribed pergolide generally stay sound and avoid laminitis. The relapse risk is real whenever management lapses, particularly during spring grass, so EMS horses need a lifelong plan rather than a one-time fix.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Equine Endocrinology Group. “Recommendations for the Diagnosis and Management of Equine Metabolic Syndrome,” current edition. sites.tufts.edu/equineendogroup.</li>
            <li>Frank N, Geor RJ, Bailey SR, Durham AE, Johnson PJ. “Equine Metabolic Syndrome.” Journal of Veterinary Internal Medicine, 2010; 24(3):467–475.</li>
            <li>Durham AE, Frank N, McGowan CM, et al. “ECEIM Consensus Statement on Equine Metabolic Syndrome.” Journal of Veterinary Internal Medicine, 2019; 33(2):335–349.</li>
            <li>American Association of Equine Practitioners. “Equine Metabolic Syndrome” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
