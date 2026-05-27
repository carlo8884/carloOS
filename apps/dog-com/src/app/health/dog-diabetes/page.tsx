import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Diabetes in Dogs — Signs, Insulin Treatment | Dog.com', description: 'Canine diabetes: PU/PD signs, why insulin injection is the treatment (not oral medication), blood glucose curves, and long-term management. research-based.', path: '/health/dog-diabetes', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Diabetes in Dogs', description: 'Signs, insulin treatment, glucose monitoring, and management of canine diabetes mellitus.', url: 'https://dog.com/health/dog-diabetes', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Diabetes in Dogs', description: 'Canine diabetes mellitus — signs, insulin, and management.', url: 'https://dog.com/health/dog-diabetes', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function DogDiabetesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Diabetes in Dogs', subtitle: 'Canine diabetes mellitus is manageable — many diabetic dogs live years of good-quality life with appropriate treatment. The commitment is real: twice-daily insulin injections at consistent times, consistent diet, and regular veterinary monitoring. The learning curve is steep at first and becomes routine within weeks.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '11 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Diabetes', href: '/health/dog-diabetes' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Signs', href: '#signs' }, { label: 'Diagnosis', href: '#diagnosis' }, { label: 'Insulin Treatment', href: '#insulin' }, { label: 'Diet', href: '#diet' }, { label: 'Glucose Monitoring', href: '#monitoring' }, { label: 'Hypoglycemia', href: '#hypoglycemia' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: "Cushing's Disease", href: '/health/cushing-disease' }, { label: 'Hypothyroidism', href: '/health/hypothyroidism' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-diabetes" />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="signs">Signs — The Classic Presentation</h2>
          <p>Diabetes mellitus in dogs presents with the classic "four Ps": polyuria (urinating more), polydipsia (drinking more), polyphagia (eating more), and weight loss despite increased appetite. The mechanism: insufficient insulin means glucose cannot enter cells — cells starve despite elevated blood glucose. The body excretes excess glucose in urine (glucosuria), drawing water with it (osmotic diuresis), causing the PU/PD cycle. The dog eats more to compensate for cellular starvation but loses weight as the body catabolizes fat and muscle for energy.</p>
          <p>Additional signs: cataracts developing rapidly (canine diabetics are uniquely prone to rapid cataract formation from glucose accumulation in the lens — this can occur within weeks of diagnosis), recurring urinary tract infections (glucose in urine promotes bacterial growth), and lethargy. Uncomplicated diabetes: drinking and urinating more, eating more, losing weight. Complicated diabetic ketoacidosis (DKA): vomiting, anorexia, lethargy, collapse — a medical emergency requiring hospitalization.</p>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>Blood glucose above 200 mg/dL on a fasting sample, combined with glucosuria (glucose in urine), and appropriate clinical signs is the typical diagnostic picture. A single high blood glucose can occur from stress — a fructosamine level (reflects blood glucose over the prior 2–3 weeks, not affected by acute stress) provides confirmation in ambiguous cases. Full workup at diagnosis: CBC, chemistry panel, urinalysis with culture (UTI is common at diagnosis), and abdominal ultrasound to evaluate the pancreas and identify concurrent disease. Spay at diagnosis for intact females — progesterone causes insulin resistance and dramatically impairs diabetic control in intact females.</p>

          <h2 id="insulin">Insulin — Why Injections, Not Pills</h2>
          <p>Dogs require insulin injections — oral antidiabetic medications used in human type 2 diabetes (metformin, glipizide) are not effective for canine diabetes. Canine diabetes is typically insulin-deficient (similar to human type 1) rather than insulin-resistant, and oral medications work by different mechanisms that are inadequate for the dog's diabetic physiology.</p>
          <p><strong>Vetsulin (porcine insulin zinc suspension):</strong> The only FDA-approved insulin for dogs in the US. Intermediate-acting. Given twice daily (every 12 hours) with meals. Starting dose: 0.25–0.5 U/kg, adjusted based on glucose curves. The twice-daily schedule with consistent timing is the foundation of diabetic management — irregular timing produces uncontrolled glucose swings.</p>
          <p><strong>NPH insulin (Humulin N, Novolin N):</strong> Human NPH insulin is used by many veterinarians and is less expensive than Vetsulin. Works similarly to Vetsulin in most dogs. Some dogs respond better to one formulation — if one is not achieving adequate control, the other can be tried under veterinary guidance.</p>

          <h2 id="diet">Diet — Consistency Is Everything</h2>
          <p>Same food, same amount, same time as insulin injections — consistency is the dietary requirement for diabetic dogs. Dietary changes alter glucose absorption kinetics and can destabilize previously controlled diabetes. High-fiber diets (Hill's w/d, Royal Canin Diabetic) slow glucose absorption and reduce post-meal glucose spikes. Feed immediately before or with each insulin injection. If the dog does not eat, give half the dose and contact your veterinarian — insulin given without food risks dangerous hypoglycemia.</p>

          <h2 id="monitoring">Blood Glucose Monitoring</h2>
          <p><strong>Glucose curves:</strong> Serial blood glucose measured every 1–2 hours over a full 12-hour dosing interval to assess the insulin's peak effect and duration. This identifies whether the dose is adequate, too high, or too low. Performed in clinic initially and then periodically during management adjustments. Home glucose monitoring using a pet glucometer or human glucometer (on the ear margin or inner lip) allows owners to detect hypoglycemia or poor control between clinic visits.</p>
          <p><strong>Continuous glucose monitors (CGM):</strong> Human CGMs (FreeStyle Libre, Dexterity) can be applied to a dog's skin with veterinary guidance — they provide continuous 24-hour glucose data without blood draws. A week of CGM data provides far more information about a dog's glucose pattern than a single clinic curve, and has changed the standard of care for attentive diabetic dog management.</p>
          <p><strong>Fructosamine:</strong> Reflects average blood glucose over 2–3 weeks. A single clinic value provides a useful "average control" metric. Target fructosamine: 350–450 μmol/L in well-controlled diabetic dogs.</p>

          <h2 id="hypoglycemia">Hypoglycemia — The Emergency to Know</h2>
          <p>Hypoglycemia (blood glucose below 60 mg/dL) is the most dangerous acute complication of insulin therapy. Signs: weakness, trembling, disorientation, seizures, coma. Every diabetic dog owner should have Karo corn syrup or honey accessible at all times. At the first sign of hypoglycemia: rub a tablespoon of Karo syrup on the gums and inside the cheeks, then get to the veterinarian immediately. Do not give anything by mouth if the dog is unconscious or seizing — go directly to the emergency vet. This is a life-threatening situation that requires IV dextrose.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
