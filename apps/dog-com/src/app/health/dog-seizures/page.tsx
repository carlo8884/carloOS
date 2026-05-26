import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Seizures in Dogs — Types, Causes, Phenobarbital & Emergency Protocol | Dog.com', description: 'Dog seizures: what to do during one, idiopathic epilepsy vs symptomatic causes, when to start medication, and the phenobarbital monitoring protocol.', path: '/health/dog-seizures', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Seizures in Dogs', description: 'Seizure types, causes, emergency protocol, and anticonvulsant management for dogs.', url: 'https://dog.com/health/dog-seizures', imageUrl: '', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Seizures in Dogs', description: 'Types, causes, emergency response, and anticonvulsant treatment for canine seizures.', url: 'https://dog.com/health/dog-seizures', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: 'My dog just had a first seizure — what do I do now?', answer: 'After the seizure ends, keep the dog quiet and calm in a darkened room — the post-ictal period (recovery phase) can last minutes to hours, during which the dog may be disoriented, temporarily blind, or unsteady. Contact your vet the same day for a first seizure. The workup typically includes bloodwork, urinalysis, and possibly an MRI and CSF tap to determine the cause.' },
  { question: 'Does every dog that has a seizure need medication?', answer: 'No. Many neurologists recommend starting anticonvulsant therapy when: seizures occur more than once per month, the dog has cluster seizures (multiple in 24 hours), individual seizures last more than 5 minutes, or the dog has a prolonged post-ictal phase. A single isolated seizure in a dog under 5 with normal diagnostics may be observed without medication initially.' },
  { question: 'Can I stop phenobarbital if my dog has been seizure-free?', answer: 'Do not stop phenobarbital suddenly — abrupt withdrawal can trigger severe rebound seizures (withdrawal seizure cluster). If considering tapering, discuss with your neurologist. Many dogs require lifelong medication. Seizure-free status on medication does not mean the epilepsy is resolved — it means the medication is working.' },
]
export default function DogSeizuresPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Seizures in Dogs', subtitle: 'Witnessing a dog seizure is frightening. Most seizures are brief and self-limiting — the priority during a seizure is safety, not intervention. Understanding what is happening and having a response plan in place before a seizure occurs makes an enormous difference.', category: 'Dog Health', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', authorCredentials: 'Internal Medicine Specialist', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '10 min', dvmReviewed: true }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Seizures', href: '/health/dog-seizures' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Emergency — Go Now</div>
            <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
              {['Seizure lasting 5+ minutes', 'Multiple seizures in 24 hours (cluster)', 'First seizure ever', 'Dog does not recover between seizures', 'Known toxin exposure'].map(s => <li key={s} className="flex gap-2"><span className="text-brand-danger">→</span>{s}</li>)}
            </ul>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs', href: '/health/dog-symptoms-guide' }, { label: 'Find a Vet', href: '/find-a-vet' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance weekly." source="health-seizures" />
        </>}
      >
        <div className="carloOS-article">
          <h2>What to Do During a Seizure</h2>
          <p><strong>Do not restrain the dog.</strong> Restraining a seizing dog can result in bites — dogs are not conscious and cannot control their jaws during a generalized seizure. Do not put your hands near the dog's mouth. Contrary to common advice, dogs cannot swallow their tongues.</p>
          <p>Clear the area of hazards — stairs, furniture edges, hard objects. If the dog is near a dangerous edge (pool, stairs), slide something soft under them. Time the seizure from onset. Stay calm. Speak quietly. Many owners find it helpful to gently cover the dog with a blanket — this is fine and may provide some sensory dampening.</p>
          <p><strong>Call the emergency vet if</strong> the seizure lasts more than 5 minutes (status epilepticus — a neurological emergency), if multiple seizures occur within 24 hours, if the dog does not recover to near-normal within 30 minutes of the seizure ending, or if this is the first seizure the dog has ever had.</p>

          <h2>Types of Seizures</h2>
          <p><strong>Generalized tonic-clonic (grand mal):</strong> The most commonly recognized — the dog falls on its side, paddles with limbs, may vocalize, urinate, or defecate. Lasts 30 seconds to 3 minutes typically. The post-ictal phase (recovery) follows — confusion, temporary blindness, pacing, excessive thirst or hunger. Recovery minutes to hours.</p>
          <p><strong>Focal seizures:</strong> Involve one body part — facial twitching, rhythmic leg movement, fly-biting (snapping at invisible flies), repetitive behaviors. May or may not generalize to a full grand mal. May be subtle enough that owners mistake them for tics or odd behavior.</p>
          <p><strong>Absence seizures:</strong> Brief — dog seems to stare or "check out" for seconds and returns to normal. Rare in dogs compared to humans.</p>

          <h2>Causes — Idiopathic vs Symptomatic</h2>
          <p><strong>Idiopathic epilepsy</strong> (no identifiable cause) is the most common cause of seizures in dogs aged 1–5 years. Genetic predisposition is well-documented in several breeds: Border Collies, German Shepherds, Belgian Tervurens, Labrador Retrievers, Golden Retrievers, Beagles, and others. Diagnosis of exclusion — all other causes ruled out, then idiopathic epilepsy is assumed.</p>
          <p><strong>Symptomatic causes</strong> include: brain tumors (more common in dogs over 5, especially Boxers, Boston Terriers), intracranial infection or inflammation, hydrocephalus, metabolic disease (hepatic encephalopathy from liver disease, hypoglycemia, electrolyte abnormalities), toxin ingestion, and post-traumatic epilepsy.</p>

          <h2>Anticonvulsant Treatment</h2>
          <p><strong>Phenobarbital</strong> is the first-line anticonvulsant for most dogs. Taken twice daily. Takes 2–3 weeks to reach stable blood levels. Reduces seizure frequency by 50%+ in approximately 80% of dogs. Side effects initially: sedation, increased appetite, increased thirst — most resolve as the dog adjusts. Long-term: liver enzyme elevation is common; liver damage is rare but monitored with 6-month blood panels including pre- and post-pill phenobarbital levels.</p>
          <p><strong>Potassium bromide (KBr)</strong> is often added when phenobarbital alone does not achieve adequate control. Takes 3–4 months to reach stable levels. Dose monitored by blood level. Side effects: sedation, hind limb weakness at toxic levels. Cannot be used in dogs with renal disease.</p>
          <p><strong>Newer options:</strong> Zonisamide, levetiracetam (Keppra), and pregabalin are used in refractory cases or when phenobarbital cannot be tolerated. A veterinary neurologist should be involved in complex or refractory epilepsy management.</p>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
