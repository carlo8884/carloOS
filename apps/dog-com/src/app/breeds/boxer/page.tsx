import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Boxer Breed Guide — Cancer Risk, Aortic Stenosis | Dog.com', description: 'Boxers have the highest cancer rate of any breed. Mast cell tumors, brain tumors, and heart disease (ARVC, SAS) are the primary concerns.', path: '/breeds/boxer', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Boxer Breed Guide', description: 'Cancer risk, cardiac disease, and health screening for Boxers.', url: 'https://dog.com/breeds/boxer', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'What health problems do Boxers have?', answer: 'Boxers have the highest cancer incidence of any breed studied — mast cell tumors, brain tumors, lymphoma, and histiocytic sarcoma are the most significant types. The breed also carries two cardiac predispositions: arrhythmogenic right ventricular cardiomyopathy (ARVC, also called Boxer cardiomyopathy) and subvalvular aortic stenosis (SAS). Build a screening protocol with your veterinarian from young adulthood.' },
  { question: 'What should I do if I find a lump on my Boxer?', answer: 'Have it aspirated promptly. Any new skin lesion on a Boxer warrants a fine-needle aspirate at the next available appointment — not watchful waiting — because mast cell tumors can look like harmless warts while being locally invasive. This single habit is the highest-yield cancer-detection intervention in the breed.' },
  { question: 'What heart screening does a Boxer need?', answer: 'Annual cardiac auscultation from age 2, with cardiology referral if a murmur is detected, and an annual 24-hour Holter monitor from age 3 to detect the ventricular premature contractions associated with ARVC — which can cause sudden death before any other sign appears. Discuss the right schedule for an individual dog with your veterinarian or a veterinary cardiologist.' },
  { question: 'Do Boxers tolerate heat?', answer: 'Poorly. Boxers are brachycephalic — the shortened muzzle compresses the airway, so they cannot pant as effectively as long-nosed breeds and are significantly more susceptible to heat stroke. In hot weather, limit exercise to early morning and evening, never leave a Boxer in a car, and treat collapse in heat as a veterinary emergency.' },
  { question: 'How long do Boxers live?', answer: 'Boxers average 9-12 years, a shortened lifespan driven largely by the breed\'s cancer and cardiac predispositions — the average age of cancer death in Boxers is approximately 6-7 years. Consistent screening (annual skin checks, cardiac evaluation, prompt aspirates of new lumps) with your veterinarian gives the best odds of early detection.' },
]
const combinedSchema = combineSchemas(schema, buildFAQSchema({ questions: FAQS }))

export default function BoxerPage() {
  return (
    <>
    <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Boxer Breed Guide', subtitle: 'Playful, loyal, and perpetually puppy-like well into adulthood. Boxers are one of the most beloved family breeds — and one of the most health-compromised. They have the highest cancer rate of any breed, significant cardiac disease predisposition, and a shortened average lifespan of 9–12 years.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Boxer', href: '/breeds/boxer' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Bullmastiff Guide', href: '/breeds/bullmastiff', category: 'Breed Guide' }, { title: 'Rottweiler Guide', href: '/breeds/rottweiler', category: 'Breed Guide' }, { title: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance', category: 'Reviews' }]}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '55–70 lbs'], ['Lifespan', '9–12 years'], ['Cancer rate', 'Highest of any breed'], ['Cardiac screening', 'Annual cardiology exam recommended'], ['Exercise', '1–2 hours daily (young adults)'], ['Heat tolerance', 'Poor — brachycephalic']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Insurance for This Breed" links={[{ label: 'Is pet insurance worth it for a Boxer?', href: '/breeds/boxer/insurance' }, { label: 'Pet insurance by breed', href: '/breeds/insurance' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Cancer Signs', href: '/health/dog-cancer-signs' }, { label: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' }, { label: 'Cherry Eye', href: '/health/cherry-eye' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Boxer vs Bullmastiff', href: '/compare/boxer-vs-bullmastiff' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-boxer" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <BreedHealthCard name="Cancer — Highest Rate of Any Breed" riskLevel="very-high"
          description="Boxers have the highest cancer incidence of any breed studied. The most significant cancer types: mast cell tumors (skin tumors that can be benign or highly malignant — any new skin lump on a Boxer requires immediate fine needle aspirate, not watchful waiting), brain tumors (gliomas and meningiomas — Boxers and brachycephalic breeds are disproportionately affected, presenting with new-onset seizures, behavior changes, or neurological signs in a middle-aged to older dog), lymphoma, and histiocytic sarcoma. The average age of cancer death in Boxers is approximately 6–7 years."
          signs={['Any new skin lump — aspirate immediately', 'New-onset seizures in adult', 'Rapid neurological changes', 'Unexplained weight loss', 'Lymph node enlargement']}
          management="Annual skin check with aspirate of any new lesion. Brain tumor workup (MRI + CSF) for any adult Boxer with new seizures. Pet insurance before any condition is detected is essential — Boxer cancer treatment is expensive." />

        <BreedHealthCard name="Arrhythmogenic Right Ventricular Cardiomyopathy (ARVC)" riskLevel="high"
          description="ARVC (also called Boxer cardiomyopathy) is a genetic heart muscle disease unique to Boxers that causes abnormal electrical activity (arrhythmias) originating from the right ventricle. Unlike most cardiomyopathies, ARVC may cause sudden death before any other signs are apparent — the first sign may be collapse or death during exercise. The disease ranges from subclinical (arrhythmias on Holter monitor only) to severe (frequent ventricular tachycardia, syncope, sudden death). DNA test available (though not all affected dogs test positive — the test identifies one mutation but the disease has genetic complexity)."
          signs={['Syncope (fainting) during exercise or excitement', 'Weakness or sudden collapse', 'Irregular heartbeat detected on exam', 'May have no signs until sudden cardiac death']}
          management="Annual cardiac auscultation by cardiologist from age 2+. 24-hour Holter monitor (ambulatory ECG) annually to detect ventricular premature contractions (VPCs). Antiarrhythmic therapy (sotalol, mexiletine, amiodarone) when VPC frequency warrants treatment. Avoid strenuous exercise during high VPC periods." />

        <BreedHealthCard name="Subvalvular Aortic Stenosis (SAS)" riskLevel="moderate"
          description="SAS — the same cardiac defect that affects Cavalier King Charles Spaniels and other breeds — occurs at elevated frequency in Boxers. A ring of fibrous tissue below the aortic valve obstructs blood flow. Detected as a heart murmur; severity confirmed by echocardiogram. Mild cases: annual monitoring. Severe cases: significant risk of sudden death and require medical management."
          signs={['Heart murmur on auscultation', 'Exercise intolerance in severe cases', 'Syncope in severe cases']}
          management="Cardiologist evaluation when murmur detected. Annual echocardiogram for Grade 3+ murmurs. Atenolol for moderate-severe SAS to reduce cardiac workload." />

        <h2>Heat Sensitivity — Brachycephalic Considerations</h2>
        <DropCap>Boxers are brachycephalic — their shortened muzzle compresses the airway. Like Bulldogs and French Bulldogs, they cannot pant as effectively as long-nosed breeds, making them significantly more susceptible to heat stroke. During hot weather: limit exercise to early morning and evening, never leave in a car, provide constant cool water access, and watch for excessive panting, drooling, and weakness. Any Boxer that collapses in heat is a veterinary emergency. Boxers with more severe respiratory compromise (loud breathing at rest, sleep apnea) should be evaluated for BOAS (brachycephalic obstructive airway syndrome) surgery.</DropCap>

        <CalloutBox variant="evidence" title="Aspirate every new lump">
          The Boxer skin lump that &quot;looks like a wart&quot; is the mast cell tumor that is locally invasive and may have metastasized by the time it&apos;s removed. Any new skin lesion in a Boxer warrants a fine-needle aspirate at the next available appointment — not watchful waiting. This single habit is the highest-yield cancer-detection intervention in the breed.
        </CalloutBox>

        <h2>Screening Protocol for Boxer Owners</h2>
        <ul>
          <li>Annual comprehensive physical exam</li>
          <li>Annual cardiac auscultation from age 2 — cardiology referral for murmur detection</li>
          <li>Annual 24-hour Holter monitor from age 3 for ARVC monitoring</li>
          <li>Any new skin lump → fine needle aspirate before next appointment</li>
          <li>MRI for any adult Boxer with new-onset seizures or behavioral change</li>
          <li>Pet insurance obtained as a puppy before conditions develop</li>
        </ul>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
      </div>
    </ArticleLayout>
    </>
  )
}
