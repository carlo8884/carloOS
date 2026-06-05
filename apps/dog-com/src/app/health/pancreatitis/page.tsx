import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Pancreatitis in Small Animals', url: 'https://www.merckvetmanual.com/digestive-system/the-exocrine-pancreas/pancreatitis-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'ACVIM: Consensus Statement on the Diagnosis of Pancreatitis in Dogs and Cats', url: 'https://www.acvim.org', publisher: 'ACVIM' },
  { label: 'AVMA: Pancreatitis in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Xenoulis PG et al. Serum triglyceride concentrations in Miniature Schnauzers with and without a history of hypertriglyceridemia. J Vet Intern Med. 2011;25(1):20-25.', publisher: 'JVIM' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Pancreatitis in Dogs — High-Fat Triggers, Signs | Dog.com', description: 'Pancreatitis in dogs is often triggered by high-fat meals — holiday table scraps are the classic cause. Signs, hospitalization criteria.', path: '/health/pancreatitis', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Pancreatitis in Dogs', description: 'Triggers, signs, hospitalization, and low-fat diet management for canine pancreatitis.', url: 'https://dog.com/health/pancreatitis', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Pancreatitis in Dogs', description: 'Canine pancreatitis — triggers, acute management, and long-term dietary management.', url: 'https://dog.com/health/pancreatitis', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function PancreatitisPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Pancreatitis in Dogs', subtitle: 'Pancreatitis — inflammation of the pancreas — is one of the most common gastrointestinal emergencies in dogs. The pancreas produces digestive enzymes that, when activated prematurely due to inflammation, essentially begin digesting the pancreas itself. It ranges from mild and manageable to severe and life-threatening.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Pancreatitis', href: '/health/pancreatitis' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Diabetes', href: '/health/dog-diabetes', category: 'Dog Health' }, { title: 'Dog Obesity', href: '/health/dog-obesity', category: 'Dog Health' }, { title: 'Dog Vomiting Guide', href: '/health/dog-vomiting', category: 'Dog Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">High-Risk Triggers</div>
            {['Fatty table scraps (ham, turkey skin, bacon)', 'Garbage ingestion', 'Corticosteroids — can precipitate pancreatitis', 'Hypothyroidism — associated predisposition', 'High-fat diet chronically', 'Obesity', 'Breed predispositions (Miniature Schnauzer, Cocker Spaniel)'].map(t => (
              <div key={t} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{t}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Vomiting', href: '/health/dog-vomiting' }, { label: 'Dog Liver Disease', href: '/health/dog-liver-disease' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-pancreatitis" />
        </>}
      >
        <div className="carloOS-article">
          <h2>The Holiday Meal Trigger</h2>
          <p>Veterinary emergency rooms see pancreatitis cases spike predictably after Thanksgiving and Christmas — the dogs that were given turkey skin, ham fat, or other high-fat holiday scraps as a treat. A dog that has been eating standard commercial kibble all year receives a massive high-fat bolus that overwhelms the pancreas's normal regulatory mechanisms, triggering acute inflammation. This is the most common presentation of acute pancreatitis: a previously healthy dog vomiting 12-24 hours after a high-fat meal, with abdominal pain and lethargy.</p>
          <p>The fat content is the critical variable — not the quantity alone. A small piece of very fatty meat (bacon fat, turkey skin) can trigger pancreatitis in susceptible dogs. Dogs that have had pancreatitis once are at significantly higher risk for recurrence with any dietary indiscretion. For these dogs, table scraps of any kind are permanently off the table.</p>

          <h2>Signs — Recognizing the Emergency</h2>
          <p>Classic acute pancreatitis presentation: vomiting (often repeated, projectile), abdominal pain (the "prayer position" — front end down, rear end up — or reluctance to move, hunched posture, yelping when the abdomen is touched), lethargy, anorexia, and diarrhea in some cases. Fever (rectal temperature above 102.5°F) is present in many cases. Severe pancreatitis adds: signs of shock (pale gums, rapid weak pulse), jaundice (yellowing of gums and whites of eyes from bile duct obstruction), and in some cases, cardiovascular collapse.</p>

          <h2>Diagnosis and Hospitalization</h2>
          <p>Diagnosis: serum cPLI (canine pancreatic lipase immunoreactivity) — the SNAP cPL rapid test provides a yes/no answer in clinic; the quantitative Spec cPL from a reference lab provides a severity indicator. Abdominal ultrasound shows pancreatic enlargement, peripancreatic fluid, and mesenteric inflammation. CBC and chemistry evaluate severity and concurrent complications (elevated bilirubin suggests bile duct involvement, elevated kidney values suggest systemic effects).</p>
          <p>Hospitalization criteria: any dog with significant vomiting and inability to keep water down, signs of dehydration, persistent abdominal pain, or any systemic signs (pale gums, weakness). IV fluid therapy corrects dehydration and improves pancreatic perfusion — the most critical supportive treatment for acute pancreatitis. Anti-nausea medication (maropitant — Cerenia), pain management (buprenorphine, butorphanol), and in severe cases, feeding tube placement for nutritional support when the dog cannot or will not eat.</p>

          <h2>The "Nothing by Mouth" Myth</h2>
          <p>Traditional pancreatitis management included prolonged fasting ("resting the pancreas"). Current evidence does not support prolonged NPO (nothing by mouth) — early enteral nutrition (feeding the GI tract, even in small amounts) actually supports mucosal integrity and reduces bacterial translocation. Dogs with mild pancreatitis who are not vomiting can be offered small amounts of bland, low-fat food 12-24 hours after symptoms stabilize. Dogs with severe pancreatitis who cannot eat may require nasogastric or jejunostomy tube feeding within 48-72 hours of hospitalization. Discuss nutritional timing with your veterinarian — it is case-specific.</p>

          <h2>Long-Term Management — Low-Fat Diet for Life</h2>
          <p>A dog that has experienced significant pancreatitis — particularly if it has been recurrent — should be maintained on a low-fat diet permanently. The threshold for "low fat" varies by individual: some dogs do well on any commercial food with under 10% fat (dry matter basis); dogs with severe recurrent pancreatitis may need prescription low-fat diets (Hill's i/d Low Fat, Royal Canin Gastrointestinal Low Fat, Purina EN Gastroenteric Low Fat) with fat content under 8% DM. Human food, high-fat treats, fatty table scraps, and any food with over 15% DM fat is permanently off-limits for severely affected dogs. This is not optional — dietary indiscretion is the most common trigger for recurrence.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
