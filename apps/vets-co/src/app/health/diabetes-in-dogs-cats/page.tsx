import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, DropCap, PullQuote, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Diabetes Mellitus in Dogs & Cats — Signs, Management | Vets.co", description: "Diabetes mellitus in pets causes excessive thirst, urination, and weight loss. Insulin therapy, diet, and monitoring explained for dog and cat owners.", path: '/health/diabetes-in-dogs-cats', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Diabetes Mellitus in Dogs and Cats', description: 'Clinical signs, diagnosis, insulin management, and monitoring of diabetes in dogs and cats.', url: 'https://vets.co/health/diabetes-in-dogs-cats', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Diabetes Mellitus in Dogs and Cats', description: 'Signs, diagnosis, insulin therapy, and monitoring of diabetes mellitus in pets.', url: 'https://vets.co/health/diabetes-in-dogs-cats', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Can a cat's diabetes go into remission?", answer: "Yes. Cats with type 2-like diabetes can achieve diabetic remission — meaning insulin can be discontinued — particularly when diagnosed early, started promptly on insulin, and fed a low-carbohydrate diet. Remission rates of 30-50% are reported when these conditions are met within the first 6 months. Dogs almost never go into remission because canine diabetes is insulin-dependent (analogous to human type 1) with permanent loss of pancreatic beta cells. Remission in cats is not guaranteed and some cats relapse, so continued monitoring is essential even after insulin is stopped." },
  { question: "What is the difference between dog and cat diabetes?", answer: "Canine diabetes is almost always insulin-dependent, caused by immune-mediated or pancreatitis-related destruction of beta cells, and requires lifelong insulin. Feline diabetes more closely resembles human type 2 — driven by insulin resistance from obesity, with relative beta-cell dysfunction — which is why weight management, low-carbohydrate diets, and early treatment can produce remission in cats. Both species are diagnosed by persistent hyperglycemia with consistent clinical signs, and both are treated with insulin, but the prognosis and dietary approach differ meaningfully." },
  { question: "Why is my diabetic dog suddenly blind?", answer: "Cataracts are the most common complication of canine diabetes — the majority of diabetic dogs develop cataracts within a year of diagnosis, and onset can be rapid (over days to weeks). High blood glucose drives sorbitol accumulation in the lens, drawing in water and clouding the lens. Cataract surgery can restore vision in well-controlled diabetic dogs. Cats rarely develop diabetic cataracts. Sudden vision change in any diabetic pet warrants prompt veterinary evaluation." },
]

const SOURCES = [
  { label: 'Rand JS et al. ISFM and AAFP Consensus Guidelines: Management of Feline Diabetes. J Feline Med Surg. 2013;15(10):905-913.', publisher: 'J Feline Med Surg' },
  { label: 'Behrend E et al. Diagnosis of Spontaneous Canine Hyperadrenocorticism: 2012 ACVIM Consensus Statement. J Vet Intern Med. 2013;27(6):1292-1304.', publisher: 'ACVIM / JVIM' },
  { label: 'Merck Veterinary Manual: Diabetes Mellitus in Animals', url: 'https://www.merckvetmanual.com/endocrine-system/the-pancreas/diabetes-mellitus-in-animals', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Diabetes in Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/diabetes', publisher: 'AVMA' },
  { label: 'Gilor C et al. Continuous Glucose Monitoring in Cats with Diabetes. J Vet Intern Med. 2016;30(4):1207-1217.', publisher: 'JVIM' },
]

export default function DiabetesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Diabetes Mellitus in Dogs and Cats', subtitle: 'Diabetes mellitus is one of the most common endocrine diseases in companion animals, affecting roughly 1 in 300 dogs and 1 in 230 cats. It is a manageable chronic disease — most pets diagnosed and treated promptly go on to live full, comfortable lives — but it requires consistent daily insulin, dietary control, and owner commitment to monitoring.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '', publishedAt: 'June 2026', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Diabetes', href: '/health/diabetes-in-dogs-cats' }]}
        relatedLinks={[
          { title: 'Health Hub', href: '/health', category: 'Hub' },
          { title: "Cushing's Disease in Dogs", href: '/health/cushing-disease-dogs', category: 'Veterinary Guide' },
          { title: 'Weight Management', href: '/health/weight-management', category: 'Veterinary Guide' },
          { title: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide', category: 'Veterinary Guide' },
          { title: 'Pancreatitis in Dogs', href: '/health/pancreatitis-in-dogs', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">The Classic Four Signs</div>
            {[['Polyuria', 'Excessive urination'], ['Polydipsia', 'Excessive thirst'], ['Polyphagia', 'Increased appetite'], ['Weight loss', 'Despite eating well']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Health Hub', href: '/health' }, { label: "Cushing's Disease", href: '/health/cushing-disease-dogs' }, { label: 'Weight Management', href: '/health/weight-management' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-diabetes" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-05T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Diabetic ketoacidosis is an emergency">
            A diabetic pet that stops eating, vomits, becomes lethargic, or shows rapid breathing may be developing diabetic ketoacidosis (DKA) — a life-threatening metabolic emergency. Do not wait. Seek emergency veterinary care the same day. Never give insulin to a pet that is not eating without veterinary guidance, as this risks dangerous hypoglycemia.
          </CalloutBox>

          <DropCap>Diabetes mellitus is a failure of glucose regulation. Normally, the pancreas secretes insulin in response to rising blood glucose, and insulin allows cells to take up glucose for energy. In diabetes, either the pancreas does not make enough insulin (insulin-dependent, typical of dogs) or the body cannot respond to it (insulin resistance, typical of cats). The result is persistently elevated blood glucose while cells starve. The body begins breaking down fat and muscle for energy, producing the classic picture of a hungry pet that drinks and urinates excessively while losing weight.</DropCap>

          <h2>Recognizing the Signs</h2>
          <p>The four hallmark signs are excessive thirst, excessive urination, increased appetite, and weight loss despite eating. Owners often first notice the pet asking to go out more frequently, urinating in the house after years of being reliable, or emptying the water bowl unusually fast. Cats may urinate large clumps in the litter box. As disease progresses, appetite can decline, lethargy sets in, and dogs may develop cloudy eyes from cataracts. Any combination of these signs warrants blood and urine testing.</p>

          <h2>How Diabetes Is Diagnosed</h2>
          <p>Diagnosis requires both persistently elevated blood glucose and glucose spilling into the urine, alongside consistent clinical signs. A single high glucose reading is not enough in cats — stress alone can transiently raise a cat's blood glucose well above normal. For this reason veterinarians often measure fructosamine, a blood marker reflecting average glucose over the prior two to three weeks, which is not affected by momentary stress. Additional bloodwork screens for concurrent disease such as pancreatitis, urinary tract infection, kidney disease, and in dogs, Cushing disease, which can complicate diabetes control.</p>

          <PullQuote
            variant="inline"
            quote="Consistency matters more than perfection: giving insulin at the same times relative to meals, storing it correctly, and never doubling a missed dose are the practical keys to stable control."
            attribution="Vets.co Editorial"
          />

          <h2>Insulin Therapy</h2>
          <p>Insulin is the cornerstone of treatment for nearly all diabetic pets. Several veterinary and human insulin products are used in dogs and cats; the choice, dose, and frequency are determined entirely by your veterinarian based on the individual pet's response, and are adjusted over time using glucose monitoring. Owners learn to give small subcutaneous injections, typically twice daily after meals, using fine insulin needles that most pets tolerate well. Consistency matters more than perfection: giving insulin at the same times relative to meals, storing it correctly, and never doubling a missed dose are the practical keys to stable control.</p>

          <h2>Diet and Weight</h2>
          <p>Diet is a powerful tool. Diabetic cats benefit from low-carbohydrate, high-protein diets that reduce insulin demand and improve remission odds. Diabetic dogs do best on consistent, measured meals with moderate fiber to slow glucose absorption, fed on a fixed schedule that matches insulin timing. Obesity worsens insulin resistance, so a structured weight-loss plan often improves control. Treats and table scraps should be minimized and standardized, because erratic feeding undermines insulin dosing.</p>

          <CalloutBox variant="evidence" title="Feline diabetic remission: diet and early treatment">
            ISFM and AAFP consensus guidelines report diabetic remission rates of 30-50% in cats when a low-carbohydrate diet is combined with early, consistent insulin therapy. Remission is defined as the ability to discontinue insulin while maintaining normal blood glucose. It is most likely when treatment begins within the first six months of diagnosis and the cat achieves a lean body weight.
          </CalloutBox>

          <h2>Monitoring at Home and at the Clinic</h2>
          <p>Good control depends on monitoring. Continuous glucose monitors and periodic glucose curves let the veterinary team see how glucose rises and falls through the day and adjust insulin accordingly. Owners track water intake, appetite, weight, and energy. The goal is not a perfect glucose number but resolution of clinical signs with no episodes of dangerous low blood sugar. Signs of hypoglycemia — weakness, wobbliness, tremors, disorientation, or seizures — require immediate action: offer food or rub corn syrup on the gums and contact a veterinarian.</p>

          <h2>Prognosis</h2>
          <p>With committed daily care, most diabetic dogs and cats live well for years. Cats may achieve remission with early, aggressive management. The disease is demanding for owners — daily injections, scheduled feeding, and regular rechecks — but the payoff is a comfortable pet with a normal quality of life. The pets that do poorly are usually those diagnosed late, with uncontrolled concurrent disease, or where treatment is inconsistent.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
