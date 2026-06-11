import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Diabetes Mellitus in Dogs', url: 'https://www.merckvetmanual.com/endocrine-system/the-pancreas/diabetes-mellitus-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'ACVIM: Consensus Statement on the Diagnosis and Management of Diabetes Mellitus in Dogs and Cats', url: 'https://www.acvim.org', publisher: 'ACVIM' },
  { label: 'AVMA: Diabetes Mellitus in Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/diabetes-mellitus-pets', publisher: 'AVMA' },
  { label: 'FDA CVM: Vetsulin (porcine insulin zinc suspension) — FDA-Approved for Canine Diabetes', url: 'https://www.fda.gov/animal-veterinary/approved-animal-drug-products/nada-141-236-vetsulin', publisher: 'FDA CVM' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Diabetes in Dogs — Signs, Insulin Treatment | Dog.com', description: 'Canine diabetes: PU/PD signs, why insulin injection is the treatment (not oral medication), blood glucose curves, and long-term management. research-based.', path: '/health/dog-diabetes', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Diabetes in Dogs', description: 'Signs, insulin treatment, glucose monitoring, and management of canine diabetes mellitus.', url: 'https://dog.com/health/dog-diabetes', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Diabetes in Dogs', description: 'Canine diabetes mellitus — signs, insulin, and management.', url: 'https://dog.com/health/dog-diabetes', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'What are the first signs of diabetes in dogs?', answer: 'The classic "four Ps": polyuria (urinating more), polydipsia (drinking more), polyphagia (eating more), and weight loss despite the increased appetite. Additional signs include rapidly developing cataracts (canine diabetics are uniquely prone to these, sometimes within weeks of diagnosis), recurring urinary tract infections, and lethargy. A dog drinking and urinating dramatically more while losing weight should be tested by a veterinarian promptly.' },
  { question: 'Can dog diabetes be treated with pills instead of insulin?', answer: 'No. Dogs require insulin injections — oral antidiabetic medications used in human type 2 diabetes (metformin, glipizide) are not effective for canine diabetes. Canine diabetes is typically insulin-deficient, similar to human type 1, and oral medications work by mechanisms inadequate for that physiology. The standard treatment is twice-daily insulin (Vetsulin — the only FDA-approved insulin for dogs in the US — or human NPH insulin under veterinary guidance) given at consistent times with meals.' },
  { question: 'What should I do if my diabetic dog will not eat?', answer: 'Do not give the usual insulin dose — insulin given without food risks dangerous hypoglycemia. Contact your veterinarian for instructions instead. Consistency is the dietary foundation for diabetic dogs: same food, same amount, same time as each insulin injection, because dietary changes alter glucose absorption and can destabilize previously controlled diabetes.' },
  { question: 'What do I do if my diabetic dog is shaking, wobbly, or disoriented?', answer: 'Treat it as a hypoglycemia emergency, exactly as the page above describes: rub a tablespoon of Karo corn syrup or honey on the gums and inside the cheeks, then travel to the veterinarian immediately — this is life-threatening and requires IV dextrose. Never give anything by mouth to an unconscious or seizing dog; in that case go directly to emergency care. Every diabetic dog household should keep corn syrup or honey accessible and an emergency-vet number saved.' },
  { question: 'How is a diabetic dog\'s blood sugar monitored?', answer: 'Several layers: glucose curves (serial measurements every 1–2 hours across a 12-hour dosing interval, used to set and adjust the insulin dose — never adjust insulin on your own), home glucometer checks on the ear margin or inner lip, continuous glucose monitors such as the FreeStyle Libre applied with veterinary guidance, and fructosamine bloodwork, which reflects average glucose over the prior 2–3 weeks (target 350–450 μmol/L in well-controlled dogs).' },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))
export default function DogDiabetesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Diabetes in Dogs', subtitle: 'Canine diabetes mellitus is manageable — many diabetic dogs live years of good-quality life with appropriate treatment. The commitment is real: twice-daily insulin injections at consistent times, consistent diet, and regular veterinary monitoring. The learning curve is steep at first and becomes routine within weeks.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '11 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Diabetes', href: '/health/dog-diabetes' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Obesity', href: '/health/dog-obesity', category: 'Dog Health' }, { title: "Cushing's Disease", href: '/health/cushing-disease', category: 'Dog Health' }, { title: 'Pancreatitis in Dogs', href: '/health/pancreatitis', category: 'Dog Health' }, { title: 'Prescription Diets', href: '/nutrition/prescription-diets', category: 'Nutrition' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Signs', href: '#signs' }, { label: 'Diagnosis', href: '#diagnosis' }, { label: 'Insulin Treatment', href: '#insulin' }, { label: 'Diet', href: '#diet' }, { label: 'Glucose Monitoring', href: '#monitoring' }, { label: 'Hypoglycemia', href: '#hypoglycemia' }, { label: 'FAQ', href: '#faq' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: "Cushing's Disease", href: '/health/cushing-disease' }, { label: 'Hypothyroidism', href: '/health/hypothyroidism' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }]} />
          <div className="bg-brand-dark rounded-lg p-5 mb-4">
            <div className="text-xs uppercase tracking-wide text-brand-primary mb-1 font-bold">Diabetes + Insurance</div>
            <h3 className="font-display text-base font-bold text-brand-white mb-2">Insulin + monitoring is forever</h3>
            <p className="text-xs text-white/60 mb-3 leading-relaxed">Diabetic management — insulin, syringes, glucose curves, recheck bloodwork — runs $100-$300/month for life. Insurance with no chronic-claim reset (Trupanion-style) is purpose-built for this.</p>
            <a href="/reviews/best-pet-insurance" className="inline-block text-xs font-bold text-brand-primary hover:underline">Compare pet insurance →</a>
          </div>
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-diabetes" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

          <h2 id="signs">Signs — The Classic Presentation</h2>
          <DropCap>Diabetes mellitus in dogs presents with the classic "four Ps": polyuria (urinating more), polydipsia (drinking more), polyphagia (eating more), and weight loss despite increased appetite. The mechanism: insufficient insulin means glucose cannot enter cells — cells starve despite elevated blood glucose. The body excretes excess glucose in urine (glucosuria), drawing water with it (osmotic diuresis), causing the PU/PD cycle. The dog eats more to compensate for cellular starvation but loses weight as the body catabolizes fat and muscle for energy.</DropCap>
          <p>Additional signs: cataracts developing rapidly (canine diabetics are uniquely prone to rapid cataract formation from glucose accumulation in the lens — this can occur within weeks of diagnosis), recurring urinary tract infections (glucose in urine promotes bacterial growth), and lethargy. Uncomplicated diabetes: drinking and urinating more, eating more, losing weight. Complicated diabetic ketoacidosis (DKA): vomiting, anorexia, lethargy, collapse — a medical emergency requiring hospitalization.</p>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>Blood glucose above 200 mg/dL on a fasting sample, combined with glucosuria (glucose in urine), and appropriate clinical signs is the typical diagnostic picture. A single high blood glucose can occur from stress — a fructosamine level (reflects blood glucose over the prior 2–3 weeks, not affected by acute stress) provides confirmation in ambiguous cases. Full workup at diagnosis: CBC, chemistry panel, urinalysis with culture (UTI is common at diagnosis), and abdominal ultrasound to evaluate the pancreas and identify concurrent disease. Spay at diagnosis for intact females — progesterone causes insulin resistance and dramatically impairs diabetic control in intact females.</p>

          <h2 id="insulin">Insulin — Why Injections, Not Pills</h2>
          <p>Dogs require insulin injections — oral antidiabetic medications used in human type 2 diabetes (metformin, glipizide) are not effective for canine diabetes. Canine diabetes is typically insulin-deficient (similar to human type 1) rather than insulin-resistant, and oral medications work by different mechanisms that are inadequate for the dog's diabetic physiology.</p>
          <p><strong>Vetsulin (porcine insulin zinc suspension):</strong> The only <a href="https://www.fda.gov/animal-veterinary" rel="noopener" target="_blank" className="text-brand-primary hover:underline">FDA</a>-approved insulin for dogs in the US. Intermediate-acting, typically given twice daily (every 12 hours) with meals. The starting dose and all adjustments are set by your veterinarian based on glucose curves — never adjust insulin on your own. The twice-daily schedule with consistent timing is the foundation of diabetic management — irregular timing produces uncontrolled glucose swings.</p>
          <p><strong>NPH insulin (Humulin N, Novolin N):</strong> Human NPH insulin is used by many veterinarians and is less expensive than Vetsulin. Works similarly to Vetsulin in most dogs. Some dogs respond better to one formulation — if one is not achieving adequate control, the other can be tried under veterinary guidance.</p>

          <h2 id="diet">Diet — Consistency Is Everything</h2>
          <p>Same food, same amount, same time as insulin injections — consistency is the dietary requirement for diabetic dogs. Dietary changes alter glucose absorption kinetics and can destabilize previously controlled diabetes. High-fiber diets (Hill's w/d, Royal Canin Diabetic) slow glucose absorption and reduce post-meal glucose spikes. Feed immediately before or with each insulin injection. If the dog does not eat, do not give the usual insulin dose — contact your veterinarian for instructions, because insulin given without food risks dangerous hypoglycemia.</p>

          <h2 id="monitoring">Blood Glucose Monitoring</h2>
          <p><strong>Glucose curves:</strong> Serial blood glucose measured every 1–2 hours over a full 12-hour dosing interval to assess the insulin's peak effect and duration. This identifies whether the dose is adequate, too high, or too low. Performed in clinic initially and then periodically during management adjustments. Home glucose monitoring using a pet glucometer or human glucometer (on the ear margin or inner lip) allows owners to detect hypoglycemia or poor control between clinic visits.</p>
          <p><strong>Continuous glucose monitors (CGM):</strong> Human CGMs (FreeStyle Libre, Dexterity) can be applied to a dog's skin with veterinary guidance — they provide continuous 24-hour glucose data without blood draws. A week of CGM data provides far more information about a dog's glucose pattern than a single clinic curve, and has changed the standard of care for attentive diabetic dog management.</p>
          <p><strong>Fructosamine:</strong> Reflects average blood glucose over 2–3 weeks. A single clinic value provides a useful "average control" metric. Target fructosamine: 350–450 μmol/L in well-controlled diabetic dogs.</p>

          <h2 id="hypoglycemia">Hypoglycemia — The Emergency to Know</h2>
          <CalloutBox variant="warning" title="Hypoglycemia kit at the front door">
            Every diabetic dog household should keep Karo corn syrup or honey somewhere accessible and an emergency-vet number saved in every phone. If a diabetic dog is wobbly, trembling, or disoriented: rub a tablespoon of Karo syrup on the gums and travel to the vet immediately. Never give anything by mouth to an unconscious or seizing dog — go directly to emergency care. This is a life-threatening complication that requires IV dextrose.
          </CalloutBox>

          <p>Hypoglycemia (blood glucose below 60 mg/dL) is the most dangerous acute complication of insulin therapy. Signs: weakness, trembling, disorientation, seizures, coma. Every diabetic dog owner should have Karo corn syrup or honey accessible at all times. At the first sign of hypoglycemia: rub a tablespoon of Karo syrup on the gums and inside the cheeks, then get to the veterinarian immediately. Do not give anything by mouth if the dog is unconscious or seizing — go directly to the emergency vet. This is a life-threatening situation that requires IV dextrose.</p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
