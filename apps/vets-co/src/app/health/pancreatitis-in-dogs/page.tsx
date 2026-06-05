import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Pancreatitis in Dogs — Causes, Signs, Recovery | Vets.co", description: "Pancreatitis in dogs is a painful inflammation of the pancreas, often triggered by fatty food. Learn the warning signs, diagnosis, and recovery diet.", path: '/health/pancreatitis-in-dogs', type: 'article' })
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Pancreatitis in Dogs', description: 'Causes, clinical signs, diagnosis, and recovery management of canine pancreatitis.', url: 'https://vets.co/health/pancreatitis-in-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Pancreatitis in Dogs', description: 'Causes, signs, diagnosis, and management of pancreatitis in dogs.', url: 'https://vets.co/health/pancreatitis-in-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Can a fatty meal really cause pancreatitis?", answer: "Yes — dietary indiscretion, especially a high-fat meal such as table scraps, bacon grease, or holiday leftovers, is one of the most commonly recognized triggers of acute pancreatitis in dogs. The fat stimulates the pancreas to release digestive enzymes, which in a susceptible dog can begin digesting the pancreas itself. This is why veterinarians advise against feeding fatty human food, particularly around holidays, and why breeds and individuals with a history of pancreatitis need strict lifelong low-fat diets." },
  { question: "How is pancreatitis diagnosed?", answer: "There is no single perfect test. Diagnosis combines the clinical picture (vomiting, abdominal pain, loss of appetite), a specific pancreatic blood test such as canine pancreatic lipase (cPLI/Spec cPL), and abdominal ultrasound, which can show an inflamed pancreas and surrounding changes. General bloodwork helps assess severity and rule out other causes. Because no test is definitive on its own, veterinarians weigh several findings together, and mild cases can be harder to confirm than severe ones." },
  { question: "Will my dog get pancreatitis again?", answer: "Some dogs have a single episode and recover fully, while others develop recurrent or chronic pancreatitis. Dogs that have had pancreatitis are at higher risk of future episodes, so prevention becomes a priority: a consistent low-fat diet, no fatty table scraps, weight control, and management of contributing conditions such as high blood triglycerides, diabetes, or Cushing disease. Lifelong dietary discipline is the most effective way to reduce recurrence." },
]
const SOURCES = [
  { label: 'Merck Veterinary Manual: Pancreatitis in Dogs', url: 'https://www.merckvetmanual.com/digestive-system/exocrine-pancreatic-disease/pancreatitis-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Pancreatitis in Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/pancreatitis', publisher: 'AVMA' },
  { label: 'AAHA: Nutritional Assessment Guidelines', url: 'https://www.aaha.org/aaha-guidelines/nutritional-assessment/', publisher: 'AAHA' },
]
export default function PancreatitisPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Pancreatitis in Dogs', subtitle: 'Pancreatitis — inflammation of the pancreas — ranges from a mild, self-limiting upset to a severe, life-threatening illness. It is frequently triggered by fatty food and is painful. Recognizing the signs early and acting quickly makes a real difference to outcome, and most dogs recover with prompt supportive care.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '🐾', publishedAt: 'June 2026', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Pancreatitis', href: '/health/pancreatitis-in-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Diabetes in Dogs and Cats', href: '/health/diabetes-in-dogs-cats', category: 'Veterinary Guide' },
          { title: 'Dehydration in Dogs', href: '/health/dehydration-in-dogs', category: 'Veterinary Guide' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Common Warning Signs</div>
            {[['Vomiting', 'Often repeated'], ['Abdominal pain', '"Praying" stance'], ['Appetite loss', 'Refusing food'], ['Lethargy', 'Weakness, fever']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Diabetes in Dogs and Cats', href: '/health/diabetes-in-dogs-cats' }, { label: 'Dehydration in Dogs', href: '/health/dehydration-in-dogs' }, { label: 'Emergency Signs', href: '/health/emergency-signs' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-pancreatitis" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Repeated vomiting and pain are urgent">
            A dog that is repeatedly vomiting, refusing food, painful in the belly, or lethargic needs same-day veterinary evaluation. Severe pancreatitis can progress to dehydration, organ involvement, and a dangerous systemic inflammatory response. Early fluids and supportive care dramatically improve the outcome.
          </CalloutBox>

          <h2>What the Pancreas Does and What Goes Wrong</h2>
          <p>The pancreas produces digestive enzymes and the hormones insulin and glucagon. Normally these enzymes stay inactive until they reach the intestine. In pancreatitis, enzymes activate prematurely within the pancreas and begin to digest the organ itself, triggering inflammation, pain, and the release of inflammatory mediators into the bloodstream. In severe cases this systemic inflammation can affect the liver, kidneys, clotting, and other organs.</p>

          <h2>Causes and Risk Factors</h2>
          <p>The most recognized trigger is a high-fat meal, but many cases have no single identifiable cause. Risk factors include obesity, high blood triglycerides, endocrine diseases such as diabetes and Cushing disease, certain medications, and a prior history of pancreatitis. Some breeds, including Miniature Schnauzers, appear predisposed. Middle-aged and older dogs are most commonly affected.</p>

          <h2>Recognizing the Signs</h2>
          <p>Typical signs are vomiting, loss of appetite, abdominal pain, lethargy, and sometimes diarrhea or fever. A dog in abdominal pain may adopt a hunched or "praying" posture, with front legs down and rear end up. Mild cases can look like simple stomach upset, while severe cases present as a very sick, dehydrated dog. Because the signs overlap with many other conditions, veterinary evaluation and testing are needed to confirm the diagnosis.</p>

          <h2>Diagnosis</h2>
          <p>Veterinarians combine the history and exam with a pancreas-specific blood test (such as Spec cPL), general bloodwork to gauge severity and hydration, and abdominal ultrasound to visualize the pancreas. No single test is perfect, so the diagnosis is built from the overall picture. Imaging and bloodwork also help rule out other causes of vomiting such as foreign bodies or organ disease.</p>

          <h2>Treatment and Recovery</h2>
          <p>Treatment is primarily supportive while the pancreas heals. The cornerstones are intravenous fluids to correct dehydration and maintain blood flow to the pancreas, pain control, anti-nausea medication, and early return to feeding with an appropriate low-fat diet once vomiting is controlled. Specific medications and doses are determined by your veterinarian. Many dogs improve within a few days, though severe cases need intensive hospitalization. Outdated advice to withhold food for long periods has largely been replaced by early, careful refeeding when tolerated.</p>

          <h2>Preventing Recurrence</h2>
          <p>For dogs that have had pancreatitis, prevention is mostly dietary: a consistent low-fat diet, strict avoidance of fatty table scraps and rich treats, and maintaining a lean body weight. Managing related conditions — diabetes, high triglycerides, Cushing disease — further lowers risk. Owners should be especially vigilant around holidays, when fatty leftovers cause a predictable surge in pancreatitis cases.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
