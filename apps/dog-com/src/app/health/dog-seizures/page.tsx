import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Seizures — Types, Causes, When to ER | Dog.com', description: 'Dog seizures: focal vs generalized, cluster vs status, idiopathic vs symptomatic causes, anticonvulsants, seizure journaling, and ER red flags.', path: '/health/dog-seizures', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Seizures in Dogs', description: 'Seizure types, causes, diagnostic workup, anticonvulsant management, and emergency criteria for dogs.', url: 'https://dog.com/health/dog-seizures', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-28T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Seizures in Dogs', description: 'Types, causes, emergency criteria, diagnostic workup, and anticonvulsant treatment for canine seizures.', url: 'https://dog.com/health/dog-seizures', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-28' })
const FAQS = [
  { question: 'My dog just had a first seizure — what do I do right now?', answer: 'During the event: do not put your hands near the dog\'s mouth, do not try to restrain the dog, time the seizure from start to finish, move hazards away, and if possible video the event for your veterinarian. After the seizure: keep the dog in a quiet, dim, soft space. The post-ictal period (confusion, temporary blindness, pacing) can last minutes to hours. Contact your vet the same day for a first seizure. If the dog is under one year old, over five years old, has had a seizure longer than five minutes, or has had more than one seizure in 24 hours, go to an emergency veterinarian immediately.' },
  { question: 'How urgent is a five-minute seizure?', answer: 'Five minutes is the published threshold for operational status epilepticus in both human and veterinary neurology (ACVIM consensus on canine epilepsy, JVIM 2016). At or beyond five minutes the seizure is unlikely to self-terminate, brain injury risk rises, and emergency anticonvulsant therapy (typically IV diazepam, midazolam, or levetiracetam) is indicated. This is an immediate ER visit.' },
  { question: 'Does every dog that has a seizure need lifelong medication?', answer: 'No. The ACVIM consensus and standard neurology textbooks describe criteria for starting maintenance anticonvulsant therapy: more than one seizure per six months (some clinicians use a more conservative threshold), cluster seizures, status epilepticus, severe or prolonged post-ictal signs, or an identified structural cause that warrants treatment. A single, isolated, self-limited seizure in an otherwise normal young adult dog with normal initial diagnostics is often observed rather than treated.' },
  { question: 'Can I stop phenobarbital if my dog has been seizure-free for a long time?', answer: 'Do not stop abruptly. Abrupt withdrawal of phenobarbital can precipitate severe rebound seizures, including status epilepticus. Tapering is sometimes considered after an extended seizure-free interval, but the decision is individualized and best made with a veterinary neurologist or with your primary vet in consultation with one. Seizure-free status on medication does not mean the epilepsy is resolved — it means the medication is working.' },
  { question: 'Is CBD a useful treatment for canine epilepsy?', answer: 'A small published pilot study (McGrath et al., JAVMA 2019) suggested a possible reduction in seizure frequency in dogs receiving CBD as an adjunct to standard anticonvulsants. The evidence base is preliminary, products are inconsistently labeled, and CBD has documented hepatic enzyme elevations and drug-interaction considerations. CBD is not a replacement for first-line anticonvulsants and should only be used under veterinary direction.' },
  { question: 'When should we see a veterinary neurologist?', answer: 'Reasonable triggers include: first seizure in a dog under one year or over five years (atypical age suggests structural disease), focal seizures, abnormal neurologic exam findings between seizures, cluster seizures or status epilepticus, refractory seizures on first-line medication, or a desire for advanced imaging (MRI) and cerebrospinal fluid analysis. Diplomates of the American College of Veterinary Internal Medicine specialty of Neurology (ACVIM-Neurology) are searchable through the ACVIM directory at acvim.org.' },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

export default function DogSeizuresPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Seizures in Dogs — Types, Causes, and Emergency Criteria', subtitle: 'Watching a dog seize is one of the most distressing experiences in pet ownership. Most single seizures are short and self-limiting; the urgent priorities are safety, accurate observation, and knowing the published thresholds that change a seizure from an outpatient event to an emergency. This page summarizes the ACVIM consensus on canine epilepsy and the standard neurology approach to work-up and treatment.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '13 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Seizures', href: '/health/dog-seizures' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Emergency — Go Now</div>
            <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
              {['Seizure lasting 5+ minutes', 'More than 2 seizures in 24 hours (cluster)', 'First seizure in a dog <1 year or >5 years', 'Not recovering between seizures', 'Known or suspected toxin exposure', 'Persistent post-ictal beyond 30–60 min'].map(s => <li key={s} className="flex gap-2"><span className="text-brand-danger">→</span>{s}</li>)}
            </ul>
          </div>
          <TableOfContents items={[{ label: 'What to Do During a Seizure', href: '#during' }, { label: 'Types of Seizures', href: '#types' }, { label: 'Cluster vs Status', href: '#cluster' }, { label: 'When to ER', href: '#er' }, { label: 'Causes', href: '#causes' }, { label: 'Diagnostic Workup', href: '#workup' }, { label: 'Anticonvulsants', href: '#meds' }, { label: 'Seizure Journal', href: '#journal' }, { label: 'FAQ', href: '#faq' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Symptoms Guide', href: '/health/dog-symptoms-guide' }, { label: 'Find a Vet', href: '/find-a-vet' }, { label: 'Toxic Foods', href: '/nutrition/toxic-foods' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-seizures" />
        </>}
      >
        <div className="carloOS-article">
          <div style={{ background: 'rgba(200,74,42,0.06)', border: '1px solid rgba(200,74,42,0.25)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '8px' }}>Action First</div>
            <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>If your dog is seizing right now: do not put your hands near the mouth, do not restrain the dog, start a timer, move hazards out of the way, dim the lights, and if you can, video the event. If the seizure passes five minutes or if multiple seizures occur, go to the emergency vet immediately. Call ahead. The rest of this page is for after.</p>
          </div>

          <h2 id="during">What to Do During a Seizure</h2>
          <p><strong>Do not put your hands near the dog&apos;s mouth.</strong> Contrary to a persistent myth carried over from human first-aid folklore, dogs cannot swallow their tongues. Putting fingers or objects into a seizing dog&apos;s mouth is a common route to a serious bite injury — the dog is not conscious and cannot control jaw movement.</p>
          <p><strong>Do not restrain the dog.</strong> Holding a seizing dog still does not shorten the seizure and increases bite risk to the handler. The exception is moving the dog away from an immediate hazard such as the top of a staircase or the edge of a pool; in that case, use a blanket or a board to slide the dog rather than handling it directly.</p>
          <p><strong>Start a timer.</strong> The single most useful piece of information for the veterinarian is the duration of the event from onset of motor activity to cessation. Owners almost always overestimate the duration of a seizure because of the stress of witnessing it; a phone stopwatch is much better than a guess.</p>
          <p><strong>Clear the environment.</strong> Move hard furniture, sharp objects, and other pets away. Dim the lights and reduce noise. If the dog is on stairs or near water, manage that hazard first.</p>
          <p><strong>Video the event.</strong> If two people are present, one should manage the environment and one should record video on a phone. A 30-second clip is enormously informative for the veterinarian; it answers questions about whether the event is truly a generalized seizure, a focal seizure, a syncopal episode, or a non-seizure paroxysmal disorder.</p>
          <p><strong>After the seizure, the post-ictal period.</strong> Most generalized seizures are followed by minutes to hours of confusion, disorientation, pacing, temporary blindness, excessive thirst or hunger, and ataxia. Keep the dog in a quiet, dim, padded space until oriented. Offer water. Do not offer food until alert and steady; aspiration risk is real in a disoriented dog.</p>

          <h2 id="types">Types of Seizures</h2>
          <p>Canine seizures are classified by the international veterinary epilepsy task force terminology (De Risio et al., BMC Vet Res 2015), parallel to the human International League Against Epilepsy framework.</p>
          <ul>
            <li><strong>Generalized tonic-clonic ("grand mal").</strong> The most commonly recognized presentation. Sudden loss of consciousness, lateral recumbency, paddling, jaw chomping, autonomic signs (urination, defecation, salivation). Usually 30 seconds to 3 minutes. Followed by post-ictal phase.</li>
            <li><strong>Focal seizures.</strong> Originate in a single brain region and may or may not generalize. Manifest as facial twitching, unilateral limb movements, rhythmic jaw chomping, fly-biting, or behavioral changes such as sudden fear or aggression. Frequently underrecognized — focal events are often described by owners as "weird episodes" rather than seizures.</li>
            <li><strong>Focal with secondary generalization.</strong> The seizure begins focally (often with facial or limb signs) and then progresses into a generalized event. Recognizing the focal onset, when present, can be diagnostically important because focal onset is more often associated with structural disease.</li>
            <li><strong>Absence-like / dialeptic.</strong> Brief lapses of awareness without prominent motor signs. Rare and difficult to confirm clinically in dogs.</li>
          </ul>

          <h2 id="cluster">Single, Cluster, and Status Epilepticus</h2>
          <p>The pattern of seizures matters as much as the individual event:</p>
          <ul>
            <li><strong>Single seizure</strong> — one isolated event with full recovery to baseline between. Outpatient evaluation in most cases.</li>
            <li><strong>Cluster seizures</strong> — operationally defined as two or more seizures within 24 hours, with recovery to baseline between events. Cluster seizures are associated with worse long-term prognosis and warrant emergent evaluation; many neurologists recommend starting maintenance anticonvulsant therapy after a documented cluster.</li>
            <li><strong>Status epilepticus</strong> — a single seizure lasting longer than five minutes, or repeated seizures without full recovery of consciousness between them. Operational threshold from the ACVIM consensus on canine epilepsy (Podell et al., JVIM 2016) and consistent with human neurology criteria. Status epilepticus is a true emergency: cerebral injury risk rises with duration, body temperature can rise rapidly from sustained muscle activity, and emergency parenteral anticonvulsant therapy is required.</li>
          </ul>

          <h2 id="er">When to Go to the Emergency Veterinarian — Immediately</h2>
          <p>Any of the following changes the situation from an outpatient phone call to an emergency room visit:</p>
          <ul>
            <li>A seizure lasting five minutes or longer (status epilepticus).</li>
            <li>More than two seizures in a 24-hour window (cluster).</li>
            <li>The dog does not return to normal between seizures.</li>
            <li>First seizure in a dog younger than approximately one year or older than approximately five years — atypical age of onset for idiopathic epilepsy raises the likelihood of an identifiable structural or metabolic cause.</li>
            <li>Persistent post-ictal signs beyond roughly 30 to 60 minutes — prolonged or progressive post-ictal phase can reflect ongoing electrical activity or significant insult.</li>
            <li>Known or suspected toxin exposure (xylitol, certain pesticides, ivermectin in sensitive breeds, ethylene glycol, lead, illicit drugs).</li>
            <li>Trauma preceding the seizure.</li>
            <li>Suspected hypoglycemia in a small-breed puppy, diabetic dog, or hunting dog after prolonged exertion — these dogs need glucose, not just observation.</li>
          </ul>

          <h2 id="causes">Causes — Idiopathic, Symptomatic, Reactive</h2>
          <p>The veterinary epilepsy task force divides canine seizures into three categories by underlying cause:</p>
          <p><strong>Idiopathic epilepsy.</strong> Recurrent seizures with no identifiable structural, metabolic, or toxic cause; presumed genetic in many cases. Most commonly first manifests between approximately 1 and 5 years of age. Genetic predisposition is documented or strongly suspected in a number of breeds, including Beagles, Border Collies, German Shepherds, Belgian Tervurens, Labrador Retrievers, Golden Retrievers, Australian Shepherds, Vizslas, Standard Poodles, Bernese Mountain Dogs, Irish Wolfhounds, and several others (Hülsmeyer et al., BMC Vet Res 2015 and breed-specific genetic studies). Idiopathic epilepsy is a diagnosis of exclusion.</p>
          <p><strong>Symptomatic (structural) epilepsy.</strong> Seizures caused by an identifiable lesion in the brain:</p>
          <ul>
            <li>Brain neoplasia (meningioma is the most common primary brain tumor in dogs; gliomas are common in brachycephalic breeds such as Boxers and Boston Terriers). Brain tumors are an important cause of first-seizure presentation in dogs older than approximately five years.</li>
            <li>Encephalitis — granulomatous meningoencephalitis (GME), necrotizing meningoencephalitis (NME), and necrotizing leukoencephalitis are immune-mediated encephalitides recognized particularly in young to middle-aged small-breed dogs.</li>
            <li>Infectious encephalitis — canine distemper virus, tick-borne diseases (Rocky Mountain spotted fever, ehrlichiosis), neosporosis, toxoplasmosis, cryptococcosis, and others, varying by geography.</li>
            <li>Vascular events — ischemic or hemorrhagic stroke, recognized increasingly with MRI availability.</li>
            <li>Hydrocephalus — congenital, more common in toy and brachycephalic breeds.</li>
            <li>Traumatic brain injury and post-traumatic epilepsy.</li>
            <li>Congenital malformations — porencephaly, lissencephaly, others.</li>
          </ul>
          <p><strong>Reactive seizures.</strong> The brain is structurally normal but is reacting to a metabolic or toxic insult. Reactive seizures are not epilepsy per se — they are a symptom of something else.</p>
          <ul>
            <li><strong>Hypoglycemia</strong> — toy-breed puppies, juvenile diabetics, hunting dogs after prolonged exertion, dogs with insulinoma.</li>
            <li><strong>Hepatic encephalopathy</strong> — portosystemic shunt (young dogs, especially small breeds) or acquired liver failure (older dogs).</li>
            <li><strong>Renal failure</strong> — uremic encephalopathy.</li>
            <li><strong>Electrolyte derangements</strong> — hyponatremia, hypocalcemia (postpartum eclampsia in lactating bitches).</li>
            <li><strong>Endocrine</strong> — hypothyroidism in some cases; pheochromocytoma rarely.</li>
            <li><strong>Toxin exposure</strong> — xylitol (hypoglycemia and hepatic injury), permethrin (in cats; problematic if a dog ingests cat-targeted product applied to a dog), organophosphate and carbamate insecticides, ivermectin in MDR1-mutant herding breeds, ethylene glycol antifreeze, lead, illicit drugs (THC ingestion is now a common cause of presentation in some jurisdictions).</li>
          </ul>

          <h2 id="workup">Diagnostic Workup</h2>
          <p>The ACVIM consensus and standard neurology references describe a tiered approach to first-seizure or new-onset cluster evaluation. The specific tier reached depends on signalment, exam findings, and clinical pattern.</p>
          <ul>
            <li><strong>Tier 1 — minimum database.</strong> Complete blood count, serum biochemistry (including glucose, calcium, sodium, liver enzymes), urinalysis. This catches most reactive seizures and several metabolic causes.</li>
            <li><strong>Tier 2 — extended bloodwork.</strong> Pre- and post-prandial bile acids (the most sensitive screen for portosystemic shunt and hepatic dysfunction), thyroid panel where indicated, fasting blood glucose with insulin if hypoglycemia is documented (insulinoma workup), infectious disease titers based on geographic exposure.</li>
            <li><strong>Tier 3 — advanced imaging and CSF.</strong> Magnetic resonance imaging of the brain and cerebrospinal fluid analysis are the standard of care for structural disease workup. Recommended in dogs with first seizure under approximately one year or over approximately five years, focal seizures, abnormal interictal neurologic exam, cluster seizures, status epilepticus, or refractoriness to first-line therapy. MRI requires general anesthesia and is typically performed at a referral hospital.</li>
            <li><strong>Tier 4 — specialty evaluation.</strong> Referral to a board-certified veterinary neurologist (ACVIM-Neurology) for atypical presentations, refractory epilepsy, or where the diagnosis remains unclear.</li>
          </ul>

          <h2 id="meds">Anticonvulsant Medications</h2>
          <p>The ACVIM consensus on canine epilepsy provides evidence-graded recommendations. The first-line maintenance anticonvulsants in current practice:</p>
          <ul>
            <li><strong>Phenobarbital.</strong> A barbiturate with the longest track record in canine epilepsy. Oral, twice daily. Steady-state in approximately 10 to 14 days. Reported efficacy in achieving adequate seizure control is on the order of 60 to 80 percent in idiopathic epilepsy as monotherapy. Side effects: sedation and polyphagia/polydipsia/polyuria early in therapy (often transient), elevation of hepatic enzymes (especially alkaline phosphatase) that is partly induced and partly hepatotoxic at high cumulative exposures, rare idiosyncratic hepatotoxicity, rare hematologic dyscrasias. Monitoring: trough phenobarbital level after steady state, CBC and biochemistry every six months, bile acids if liver enzymes rise substantially.</li>
            <li><strong>Potassium bromide (KBr).</strong> Halide anticonvulsant. Long elimination half-life — steady state takes roughly three months on standard dosing, shorter with a loading protocol. Used as monotherapy in some dogs and very commonly as the first add-on when phenobarbital alone is insufficient. Side effects: sedation and ataxia (often dose-related), polyphagia, gastrointestinal irritation, rare pancreatitis. Contraindicated or used with caution in dogs with renal disease because elimination is renal. Cats do not tolerate KBr (separate species concern).</li>
            <li><strong>Levetiracetam (Keppra).</strong> Increasingly used as a first-line option, particularly when avoidance of hepatic side effects is preferred. Oral, typically three times daily for standard release; extended-release formulations exist. Generally well tolerated. Pulse-dose protocols for cluster seizures are described in the published literature. A documented limitation is the "honeymoon effect" — initial efficacy that wanes in some dogs over months.</li>
            <li><strong>Zonisamide.</strong> Sulfonamide anticonvulsant. Oral, twice daily. Used as monotherapy or add-on. Side effects include sedation, ataxia, anorexia, and rare hepatotoxicity and renal tubular acidosis. Avoid in sulfa-sensitive dogs.</li>
          </ul>
          <p>Choice of first-line maintenance medication depends on the individual dog, owner factors (cost, dosing schedule), and the presence of comorbidities. The ACVIM consensus is a useful reference; the prescribing decision is the veterinarian&apos;s.</p>
          <p><strong>Cluster and status protocols.</strong> Owners of dogs with diagnosed epilepsy may be sent home with rescue medication for use during a cluster or prolonged seizure — most commonly rectal or intranasal diazepam, intranasal midazolam, or oral pulse-dose levetiracetam. These rescue protocols are individualized and require veterinary instruction.</p>

          <h2 id="journal">The Seizure Journal — Why It Matters</h2>
          <p>Seizure management is iterative. The most useful tool an owner can maintain is a written or app-based seizure journal that captures the data needed to adjust therapy intelligently. Standard fields:</p>
          <ul>
            <li><strong>Date and time of onset.</strong></li>
            <li><strong>Duration</strong> from onset of motor activity to cessation (use a timer).</li>
            <li><strong>Description</strong> — generalized vs focal, side affected, autonomic signs (urination, salivation), level of consciousness.</li>
            <li><strong>Post-ictal duration and signs.</strong></li>
            <li><strong>Possible triggers</strong> — missed medication dose, vaccination in the prior days, recent illness, new medication, dietary change, sleep deprivation, photic stimulus, intense exercise, stress.</li>
            <li><strong>Medication compliance</strong> — were all doses given on time in the prior week? Missed doses are one of the most common precipitants of breakthrough seizures.</li>
            <li><strong>Video clip</strong> if available — link or filename for the vet.</li>
          </ul>
          <p>Bringing the journal to follow-up visits transforms the conversation from impressionistic ("she had a few seizures this month") to actionable ("three seizures in the last 60 days, two within an 18-hour cluster on day 34, durations 90 seconds, 75 seconds, and 110 seconds, missed an evening dose two days before the cluster"). That is the level of detail that drives sensible dose adjustments.</p>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
