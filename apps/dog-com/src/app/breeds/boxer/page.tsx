import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Boxer Breed Guide — Cancer Risk, Aortic Stenosis & Heart Screening | Dog.com', description: 'Boxers have the highest cancer rate of any breed. Mast cell tumors, brain tumors, and heart disease (ARVC, SAS) are the primary concerns. What every Boxer owner should know.', path: '/breeds/boxer', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Boxer Breed Guide', description: 'Cancer risk, cardiac disease, and health screening for Boxers.', url: 'https://dog.com/breeds/boxer', imageUrl: '', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BoxerPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Boxer Breed Guide', subtitle: 'Playful, loyal, and perpetually puppy-like well into adulthood. Boxers are one of the most beloved family breeds — and one of the most health-compromised. They have the highest cancer rate of any breed, significant cardiac disease predisposition, and a shortened average lifespan of 9–12 years.', category: 'Breed Guide', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', authorCredentials: 'Internal Medicine Specialist', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '9 min', dvmReviewed: true }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Boxer', href: '/breeds/boxer' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '55–70 lbs'], ['Lifespan', '9–12 years'], ['Cancer rate', 'Highest of any breed'], ['Cardiac screening', 'Annual cardiology exam recommended'], ['Exercise', '1–2 hours daily (young adults)'], ['Heat tolerance', 'Poor — brachycephalic']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Dog Cancer Signs', href: '/health/dog-cancer-signs' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }, { label: 'Cherry Eye', href: '/health/cherry-eye' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance weekly." source="breed-boxer" />
      </>}
    >
      <div className="carloOS-article">
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
        <p>Boxers are brachycephalic — their shortened muzzle compresses the airway. Like Bulldogs and French Bulldogs, they cannot pant as effectively as long-nosed breeds, making them significantly more susceptible to heat stroke. During hot weather: limit exercise to early morning and evening, never leave in a car, provide constant cool water access, and watch for excessive panting, drooling, and weakness. Any Boxer that collapses in heat is a veterinary emergency. Boxers with more severe respiratory compromise (loud breathing at rest, sleep apnea) should be evaluated for BOAS (brachycephalic obstructive airway syndrome) surgery.</p>

        <h2>Screening Protocol for Boxer Owners</h2>
        <ul>
          <li>Annual comprehensive physical exam</li>
          <li>Annual cardiac auscultation from age 2 — cardiology referral for murmur detection</li>
          <li>Annual 24-hour Holter monitor from age 3 for ARVC monitoring</li>
          <li>Any new skin lump → fine needle aspirate before next appointment</li>
          <li>MRI for any adult Boxer with new-onset seizures or behavioral change</li>
          <li>Pet insurance obtained as a puppy before conditions develop</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
