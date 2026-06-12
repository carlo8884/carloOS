import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, StockImage, EmailCapture, RelatedLinks, TableOfContents, FAQAccordion, CrossPortfolioCard, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

const SOURCES = [
  {
    label: "Quesenberry KE, Carpenter JW (eds.). Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery. 4th ed. Saunders/Elsevier — ferret endocrine-disease and insulinoma chapters.",
    url: "https://www.elsevier.com/books/ferrets-rabbits-and-rodents/quesenberry/978-1-4160-6621-7",
    publisher: "Elsevier/Saunders",
  },
  {
    label: "Merck Veterinary Manual — Endocrine Diseases of Ferrets: insulinoma overview, clinical signs, diagnosis, and treatment",
    url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/ferrets/endocrine-diseases-of-ferrets",
    publisher: "Merck Veterinary Manual",
  },
  {
    label: "Association of Exotic Mammal Veterinarians (AEMV) — exotic-mammal practitioner directory and ferret medicine continuing-education resources",
    url: "https://aemv.org",
    publisher: "AEMV",
  },
  {
    label: "Journal of Exotic Pet Medicine — clinical articles on ferret insulinoma diagnosis, surgical outcomes, and medical management",
    url: "https://www.sciencedirect.com/journal/journal-of-exotic-pet-medicine",
    publisher: "Journal of Exotic Pet Medicine",
  },
]

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Insulinoma in Ferrets — Signs, Diagnosis, Treatment | Ferret.com',
  description:
    'Insulinoma is the most common neoplasm in middle-aged ferrets. Clinical signs, glucose thresholds, the treatment ladder, and emergency hypoglycemia response.',
  path: '/health/insulinoma',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Insulinoma in Ferrets',
  description:
    'Pancreatic beta-cell tumor in domestic ferrets — pathophysiology, clinical signs, diagnostic workup, medical and surgical management, prognosis, and emergency response.',
  url: 'https://ferret.com/health/insulinoma',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-06-11T00:00:00Z',
  speakable: true,

  citation: SOURCES,
})

const med = buildMedicalWebPageSchema({
  name: 'Insulinoma in Ferrets',
  description:
    'Clinical reference on pancreatic beta-cell tumor (insulinoma) in domestic ferrets, including diagnosis, treatment, and emergency management.',
  url: 'https://ferret.com/health/insulinoma',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-05-28',
})

const FAQS = [
  {
    question: 'What is insulinoma in ferrets?',
    answer:
      'Insulinoma is a functional tumor of the pancreatic beta cells — the cells that produce insulin. The tumor cells secrete insulin in an unregulated way, independent of the normal feedback loop, producing chronic, intermittent, often severe hypoglycemia. It is the most commonly diagnosed neoplasm in middle-aged and older domestic ferrets, typically appearing between roughly 3 and 7 years of age.',
  },
  {
    question: 'What are the first signs of insulinoma in a ferret?',
    answer:
      'The early signs map cleanly onto "my ferret is getting older", which is why they are frequently missed: episodic lethargy after sleep or fasting, hindlimb weakness or wobbliness, pawing at the mouth with drooling, and "stargazing" vacant stares. Episodes are intermittent — a ferret can have a 30-second hypoglycemic episode in the morning and look normal at the vet that afternoon. Any otherwise-healthy ferret over 3 showing these signs after a fast should be screened with bloodwork by a veterinarian experienced with ferrets.',
  },
  {
    question: 'How is insulinoma diagnosed in ferrets?',
    answer:
      'The diagnostic centerpiece is a fasting blood glucose after a controlled 3- to 4-hour in-clinic fast (longer fasts risk precipitating a crisis). A fasting glucose under 60 mg/dL in the absence of another explanation is considered diagnostic; normal ferret fasting glucose sits roughly between 90 and 125 mg/dL. A paired insulin-to-glucose ratio is the gold-standard biochemical confirmation. Ultrasound is used to screen for visible nodules and concurrent adrenal disease, but most insulinomas are too small to see — a negative scan does not rule out the diagnosis. This workup belongs with an exotic-animal veterinarian.',
  },
  {
    question: 'How long can a ferret live with insulinoma?',
    answer:
      'Published case series in the exotic-pet veterinary literature report median survival on medical management in the range of 12-24 months from diagnosis, with substantial individual variation. Surgical cases report median disease-free intervals of roughly 6-18 months, with most ferrets eventually returning to medical management. Quality of life on appropriate management is generally good — most insulinoma ferrets continue to eat, play, and engage between episodes.',
  },
  {
    question: 'Can diet prevent insulinoma in ferrets?',
    answer:
      'There is no proven prevention. The leading working hypothesis in the exotic-pet literature is that chronic dietary carbohydrate drives sustained insulin demand and eventual beta-cell change — the evidence is associational rather than experimentally proven. The consistent recommendation from the American Ferret Association and exotic-pet veterinary references is to minimize dietary carbohydrate from kithood onward: a high-protein, low-carbohydrate diet and no sugary treats.',
  },
  {
    question: 'Is a ferret hypoglycemic episode an emergency?',
    answer:
      'Collapse, seizure, or unresponsiveness is a medical emergency. Seizures lasting more than two minutes, recurrent crises within a single day, or any episode that does not resolve cleanly within 5-10 minutes are all reasons to be on the way to an emergency veterinary hospital — ideally one with exotic-mammal capability — rather than waiting at home. Crisis-level hypoglycemia warrants inpatient evaluation even if the ferret appears to recover. Every household with an insulinoma ferret should review the crisis response with their exotic-animal veterinarian in advance.',
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(schema, med, faqSchema)

export default function FerretInsulinomaPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        contentType="health"
        hero={{
          title: 'Insulinoma in Ferrets',
          subtitle:
            'Insulinoma — a functional tumor of the pancreatic beta cells — is the most commonly diagnosed neoplasm in middle-aged and older domestic ferrets. The clinical picture is easily mistaken for "an old ferret slowing down". The biochemistry is unambiguous when looked for, and the treatment is well-established. Early recognition meaningfully changes the prognosis.',
          category: 'Ferret Health',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'May 2026',
          readTime: '13 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Health', href: '/health' },
          { name: 'Insulinoma', href: '/health/insulinoma' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What It Is', href: '#pathophys' },
                { label: 'Who Gets It', href: '#epidemiology' },
                { label: 'Clinical Signs', href: '#signs' },
                { label: 'Diagnosis', href: '#diagnosis' },
                { label: 'Staging', href: '#staging' },
                { label: 'Treatment Ladder', href: '#treatment' },
                { label: 'Emergency Crisis Protocol', href: '#emergency' },
                { label: 'Prognosis', href: '#prognosis' },
                { label: 'Supportive Nutrition', href: '#supportive' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Diet Basics', href: '/care/diet-basics' },
                { label: 'Cage Setup', href: '/care/cage-setup' },
              ]}
            />
            <div className="bg-brand-dark rounded-lg p-5 mb-4">
              <div className="text-xs uppercase tracking-wide text-brand-primary mb-1 font-bold">
                Insulinoma + Insurance
              </div>
              <h3 className="font-display text-base font-bold text-brand-white mb-2">
                Cover this condition before it&apos;s diagnosed
              </h3>
              <p className="text-xs text-white/60 mb-3 leading-relaxed">
                Insulinoma surgery + lifelong management runs $2,000–$5,000.
                Exotic-pet insurance covers it — but ONLY if enrolled before
                symptoms appear.
              </p>
              <a
                href="https://vets.co/pet-insurance"
                rel="noopener"
                className="inline-block text-xs font-bold text-brand-primary hover:underline"
              >
                Compare exotic-pet insurance →
              </a>
            </div>
            <CrossPortfolioCard currentSite="ferret-com" contentType="health" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Health Notes"
              subtitle="Evidence-based ferret health, monthly."
              source="health-insulinoma"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Health Hub', href: '/health' },
          { title: 'Adrenal Disease', href: '/health/adrenal-disease' },
          { title: 'Aging Ferret Care', href: '/health/aging-ferret-care' },
          { title: 'Weight Management', href: '/diet/weight-management' },
        ]}
>
        <div className="carloOS-article">
          <StockImage
            manifestKey="ferret-com:health-insulinoma"
            aspect="16:9"
            variant="inline"
          />
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-28"
            updatedAt="2026-06-11"
            reviewedBy="Editorial team"
          />

          <h2 id="pathophys">What It Is</h2>
          <p>
            Insulinoma is a functional neoplasm of the pancreatic islet beta cells — the cells that produce insulin. The tumor cells continue to secrete insulin in an unregulated manner, independent of the normal feedback loop that suppresses insulin release when blood glucose is low. The result is chronic, intermittent, often severe hypoglycemia. Most ferret insulinomas are classified histopathologically as adenomas or low-grade adenocarcinomas. Metastasis to regional lymph nodes and liver does occur but is less common than the equivalent canine disease.
          </p>
          <p>
            The condition is described and characterized in detail in Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and across multiple case series and reviews in the <em>Journal of the American Veterinary Medical Association (JAVMA)</em> and the <em>Veterinary Clinics of North America: Exotic Animal Practice</em>.
          </p>

          <h2 id="epidemiology">Who Gets It</h2>
          <p>
            Insulinoma is most commonly diagnosed in ferrets aged roughly 3 to 7 years, although cases are reported in younger and older animals. There is no consistent sex predisposition in the published literature. In North American pet ferret populations — most of which originate from a small number of large commercial breeders — case series suggest insulinoma is encountered in a substantial fraction of middle-aged animals seen by exotic-mammal specialists.
          </p>
          <p>
            The leading working hypothesis for the unusually high prevalence in domestic ferrets is chronic dietary carbohydrate exposure driving sustained insulin demand and eventual beta-cell hyperplasia. The American Ferret Association (AFA) and exotic-pet veterinary references both flag minimizing dietary carbohydrate as the primary lifestyle-level risk-reduction strategy. The evidence is associational rather than experimentally proven.
          </p>

          <h2 id="signs">Clinical Signs — Easy to Miss</h2>
          <p>
            Insulinoma is frequently missed at home because the signs map cleanly onto "my ferret is getting older". A useful frame: any otherwise-healthy ferret over 3 years old showing intermittent neurological signs after a fast — first thing in the morning, after a long sleep, or after skipping a meal — should be screened.
          </p>
          <ul>
            <li><strong>Episodic lethargy</strong>, especially after sleep or fasting. The ferret seems "spaced out", slow to wake, or unresponsive to normal stimulation.</li>
            <li><strong>Hindlimb weakness or ataxia.</strong> The ferret’s back end gives out, drags, or appears wobbly. Owners often describe this as "old age in the back legs".</li>
            <li><strong>Pawing at the mouth, drooling, or excessive salivation (ptyalism).</strong> The classic sign that is most strongly associated with hypoglycemic episodes. Easily misinterpreted as dental pain.</li>
            <li><strong>Stargazing or vacant stare.</strong> The ferret stops mid-activity and stares at a wall or middle distance for seconds to minutes.</li>
            <li><strong>Tremor, seizure, or collapse.</strong> The severe end of the spectrum. Constitutes a medical emergency.</li>
            <li><strong>Weight changes.</strong> Variable — some insulinoma ferrets gain weight (the anabolic effect of excess insulin), some lose weight, and many remain stable.</li>
          </ul>
          <p>
            Many of these signs are intermittent. A ferret can have a 30-second hypoglycemic episode in the morning and look completely normal at the veterinary appointment that afternoon. This is why screening bloodwork is more sensitive than physical exam in early disease.
          </p>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>
            The diagnostic centerpiece is a <strong>fasting blood glucose</strong>. A 3- to 4-hour fast is standard in clinic — longer fasts are not appropriate in suspected insulinoma cases because they risk precipitating a hypoglycemic crisis.
          </p>
          <ul>
            <li><strong>Fasting blood glucose under 60 mg/dL (3.3 mmol/L)</strong> in a fasted ferret is considered diagnostic for insulinoma in the absence of another explanation (sepsis, severe hepatic disease, iatrogenic insulin). Some references use a 70 mg/dL threshold for a presumptive diagnosis with consistent signs.</li>
            <li><strong>Normal fasting glucose in ferrets</strong> sits roughly between 90 and 125 mg/dL. Values between 60 and 90 mg/dL are equivocal — recheck after a controlled in-clinic fast or proceed to the insulin-to-glucose ratio.</li>
            <li><strong>Paired insulin and glucose (insulin:glucose ratio).</strong> An elevated serum insulin concentration in the face of low glucose confirms inappropriate insulin secretion. This is the gold-standard biochemical confirmation and is described in JAVMA case series. Reference ranges vary by laboratory; interpret in consultation with the lab.</li>
            <li><strong>Imaging.</strong> Abdominal ultrasound is performed to screen for visible pancreatic nodules and to evaluate for concurrent adrenal disease (which is common comorbidity in middle-aged ferrets). Most insulinomas are too small to see on ultrasound; a negative scan does not rule out the diagnosis.</li>
            <li><strong>Concurrent workup.</strong> CBC, full chemistry panel, and urinalysis to rule out alternative causes of hypoglycemia and to baseline organ function before starting steroids.</li>
          </ul>

          <h2 id="staging">Staging — Medical vs Surgical Candidate</h2>
          <p>
            After diagnosis, the practical question is whether the ferret is a candidate for surgical exploration and partial pancreatectomy, or whether to go straight to medical management. The decision depends on the ferret’s age and overall condition, owner preference and budget, available exotic-surgery expertise, and the presence of concurrent disease (adrenal disease, cardiomyopathy, lymphoma — all common in this age group).
          </p>
          <p>
            Younger ferrets in good condition with a clear single insulinoma diagnosis and no significant comorbidities are stronger surgical candidates. Older ferrets, ferrets with cardiac disease, or ferrets with severe metastatic disease at imaging are typically managed medically. Neither path is "wrong"; the data on long-term outcomes differs but both produce meaningful good-quality-of-life time in most cases.
          </p>

          <h2 id="treatment">Treatment Ladder</h2>
          <p>
            Standard exotic-pet veterinary practice is a stepped approach. The protocols below summarize the framework described in Quesenberry &amp; Carpenter and in the <em>Vet Clinics NA Exotic Animal Practice</em> ferret endocrine-disease reviews. These medications are veterinarian-prescribed; dosing must be determined by a veterinarian based on the ferret&apos;s condition, glucose trends, and overall health.
          </p>
          <p>
            <strong>Step 1 — Diet management.</strong> Frequent small meals of a high-protein, low-carbohydrate diet. No fasting. No sugary treats. Many early-stage insulinoma ferrets are stable on diet alone for months.
          </p>
          <p>
            <strong>Step 2 — Prednisone (prednisolone).</strong> Glucocorticoids promote hepatic gluconeogenesis and counter the hypoglycemic effect of inappropriate insulin secretion. This is the workhorse medication, and the majority of medically-managed cases are on prednisolone alone for the duration of treatment. It is titrated by the veterinarian against fasting glucose and clinical signs.
          </p>
          <p>
            <strong>Step 3 — Diazoxide.</strong> When prednisone alone no longer holds glucose adequately, a veterinarian may add diazoxide (a direct inhibitor of insulin secretion). Cost and availability are real barriers for some owners.
          </p>
          <p>
            <strong>Step 4 — Surgical partial pancreatectomy and nodulectomy.</strong> Exploratory laparotomy with removal of visible pancreatic nodules, partial pancreatectomy of the affected lobe, and biopsy/removal of any abnormal-appearing tissue. Surgery does not "cure" insulinoma in most ferrets — microscopic disease remains and recurrence is the rule rather than the exception — but it materially extends the period of normoglycemia and reduces or eliminates the need for medication for a meaningful interval. Should be performed by a veterinarian experienced in ferret abdominal surgery.
          </p>

          <h2 id="emergency">Emergency Hypoglycemic Crisis Protocol</h2>
          <p>
            A hypoglycemic crisis — collapse, seizure, or unresponsiveness — is a medical emergency. Every household with an insulinoma ferret should have the response practiced and the supplies stocked.
          </p>
          <ol>
            <li><strong>If the ferret is responsive enough to swallow:</strong> offer a high-value protein meal (a small amount of meat baby food, a piece of cooked chicken, a meat-based recovery diet such as Carnivore Care). Food beats sugar for medium-term stabilization in a ferret because protein and fat are their primary metabolic substrate.</li>
            <li><strong>If the ferret is collapsed, seizing, or cannot swallow safely:</strong> use Karo (light corn) syrup, honey, or maple syrup. Rub a small amount — roughly 1–2 drops, no more than a quarter teaspoon — on the gums and inside the cheek. Sugar absorbs across mucous membranes quickly. Do not pour sugar into the mouth of an unresponsive ferret; aspiration is a real risk.</li>
            <li><strong>Once the ferret is alert:</strong> offer a protein meal as in step 1. Sugar alone produces a rebound — the ferret’s remaining functional beta cells respond to the glucose load with another insulin spike, and the crisis recurs in 20–40 minutes.</li>
            <li><strong>Transport to an emergency veterinary hospital immediately</strong>, ideally one with exotic-mammal capability. Crisis-level hypoglycemia warrants IV dextrose and inpatient monitoring even after the ferret appears to have recovered at home.</li>
          </ol>
          <p>
            Seizures lasting more than two minutes, recurrent crises within a single day, or any episode that does not resolve cleanly within 5–10 minutes of oral sugar are all reasons to be in the car on the way to the ER rather than waiting at home.
          </p>

          <h2 id="prognosis">Prognosis</h2>
          <p>
            Published case series in the exotic-pet veterinary literature report median survival on medical management in the range of 12–24 months from diagnosis, with substantial individual variation. Surgical cases report median disease-free intervals in the 6–18 month range, with most ferrets eventually returning to medical management as residual or recurrent disease becomes clinically apparent.
          </p>
          <p>
            Quality of life on appropriate management is generally good. Most insulinoma ferrets continue to eat well, play, and engage with their household between episodes. The trajectory is not "rapid decline"; it is "stable on management with intermittent breakthrough episodes that become more frequent over time".
          </p>

          <h2 id="supportive">Supportive Nutrition</h2>
          <p className="text-sm font-medium text-brand-primary mb-3">
            The products below are supportive-nutrition tools used alongside veterinary treatment — they do NOT treat or cure insulinoma. Insulinoma requires diagnosis and a management plan from a veterinarian experienced with ferrets.
          </p>
          <p>
            A high-calorie, protein- and fat-based critical-care supplement (such as Oxbow Carnivore Care) is commonly used in ferret convalescent feeding — as a between-meal supplement and as the food offered during or after a hypoglycemic episode, because it avoids the rebound insulin spike that pure sugar causes. It is syringe- or spoon-fed and does not treat insulinoma; use it only as a nutritional support tool under your veterinarian&apos;s guidance.
          </p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <ArticleSourcesList sources={SOURCES} />
          <p className="text-sm text-brand-text-light">
            This page is general clinical information about insulinoma in ferrets. It is not individualized veterinary advice. Any ferret with signs consistent with hypoglycemia needs to be evaluated by a veterinarian familiar with ferrets — ideally a clinician with active AEMV membership or board certification in exotic-companion-mammal practice.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
