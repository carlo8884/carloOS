import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture, CrossPortfolioCard,
  RelatedLinks,
  FAQAccordion,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const PAGE_URL = 'https://vets.co/breeds/chihuahua-health'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Chihuahua Health — Patella, Hydrocephalus & Heart | Vets.co',
  description:
    'Chihuahua health priorities — patellar luxation, hydrocephalus, dental crowding, hypoglycemia, mitral valve disease and tracheal collapse.',
  path: '/breeds/chihuahua-health',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Chihuahua Health — Owner Guide',
  description:
    'Patellar luxation, hydrocephalus (open fontanelle / molera), dental disease, hypoglycemia, mitral valve disease, tracheal collapse and syringomyelia in Chihuahuas.',
  url: PAGE_URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Chihuahua Health',
  description:
    'Veterinary owner guide to common Chihuahua health conditions with screening guidance and citations.',
  url: PAGE_URL,
  authorName: 'Vets.co Editorial',
  lastReviewed: '2026-05-28',
})

const FAQS = [
  {
    question: 'Is the soft spot (molera) on my Chihuahua\'s head dangerous?',
    answer:
      'A molera is an open fontanelle — an unfused area on the top of the skull. It is recognized in the Chihuahua breed standard, but is not itself a diagnosis of hydrocephalus. Many Chihuahuas with a molera have normal brains; conversely, some hydrocephalic Chihuahuas have closed fontanelles. The molera should be protected from impact, and any puppy with a large or persistent fontanelle plus dome-shaped head, eyes deviated downward, abnormal mentation or developmental delay warrants neurology referral and brain imaging.',
  },
  {
    question: 'At what age does mitral valve disease start in Chihuahuas?',
    answer:
      'The Chihuahua is among the small breeds at elevated risk for myxomatous mitral valve disease (MMVD). Murmurs commonly become detectable in middle age (often 7–10 years). The 2019 ACVIM consensus on the diagnosis and treatment of MMVD provides the framework most cardiologists use — including the recommendation to start pimobendan in pre-clinical Stage B2 disease after echocardiographic confirmation.',
  },
  {
    question: 'Why does my Chihuahua shake all the time?',
    answer:
      'Mild, intermittent trembling in a healthy adult Chihuahua is often physiologic — small body mass, high metabolic rate, cold sensitivity, excitement. Trembling with weakness, glassy eyes or wobbliness in a puppy or very small adult suggests hypoglycemia. Persistent tremor at rest, head tilt, ataxia or behavior change warrants neurology workup. Do not assume all trembling is benign.',
  },
  {
    question: 'Do all apple-head Chihuahuas have syringomyelia?',
    answer:
      'No. Syringomyelia is best described in Cavalier King Charles Spaniels and is documented but less common in small toy breeds including some Chihuahuas. Suggestive signs include scratching at the air around the neck or shoulders without skin contact ("phantom scratching"), facial scratching, yelping for no obvious reason, and altered gait. Diagnosis requires MRI by a neurologist; treatment is medical or, in severe cases, neurosurgical decompression.',
  },
  {
    question: 'How small is too small for a healthy Chihuahua?',
    answer:
      'The AKC breed standard sets a maximum of 6 lb and gives no minimum, but Chihuahuas under approximately 3 lb tend to have a higher rate of anesthetic complications, dental crowding, hypoglycemia and orthopedic injury. The Chihuahua Club of America discourages marketing dogs as "teacup" or "micro" — these are not recognized varieties and the dogs are often chronically more fragile than the standard size.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

const combinedSchema = combineSchemas(
  articleSchema,
  medicalSchema,
  faqSchema,
)

export default function VetsChihuahuaHealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="vets-co"
        contentType="breed"
        hero={{
          title: 'Chihuahua Health — A Veterinarian\'s Perspective',
          subtitle:
            'The world\'s smallest dog breed brings outsized longevity — and a focused cluster of orthopedic, neurologic, cardiac and dental predispositions that benefit from informed screening from puppyhood.',
          category: 'Breed Health Guide',
          authorName: 'Vets.co Editorial',
         
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Breed Health', href: '/breeds' },
          { name: 'Chihuahua Health', href: '/breeds/chihuahua-health' },
        ]}
        schema={articleSchema}
        sidebar={
          <>
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Find a vet experienced with toy breeds', href: '/find-a-vet' },
                { label: 'Best Pet Insurance 2026', href: '/reviews/best-pet-insurance' },
                { label: 'Yorkshire Terrier Health', href: '/breeds/yorkshire-terrier-health' },
                { label: 'Pomeranian Health', href: '/breeds/pomeranian-health' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="vets-co"
              title="Free Pet Health Tips"
              subtitle="Practical guidance every Tuesday."
              source="breeds-chihuahua"
            />
            <CrossPortfolioCard currentSite="vets-co" contentType="breed" variant="sidebar" />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Vets.co Editorial"
            publishedAt="2026-05-28T00:00:00Z"
            updatedAt="2026-05-28T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <h2>TL;DR</h2>
          <p>
            The Chihuahua is a small (typically 3–6 lb), long-lived (12–16 years) toy breed with a
            well-described cluster of predispositions: patellar luxation, hydrocephalus (more often suspected
            than confirmed because of the molera), severe dental crowding, juvenile and small-adult
            hypoglycemia, myxomatous mitral valve disease as they age, and tracheal collapse. Syringomyelia is
            documented in some apple-head lines but is far less common than in the Cavalier King Charles
            Spaniel. Look for a primary-care vet with toy-breed experience and access to ACVIM cardiology and
            neurology.
          </p>

          <h2>Quick Reference</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Breed group</td><td className="py-2 text-brand-text-mid">Toy (AKC); world&apos;s smallest recognized dog breed</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Adult weight</td><td className="py-2 text-brand-text-mid">3–6 lb (1.4–2.7 kg); breed standard not to exceed 6 lb</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Lifespan</td><td className="py-2 text-brand-text-mid">12–16 years; some individuals into late teens</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Urgency-tier conditions</td><td className="py-2 text-brand-text-mid">Hydrocephalus with rapidly progressive signs; congestive heart failure from MMVD; juvenile hypoglycemic seizure</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">High-prevalence chronic</td><td className="py-2 text-brand-text-mid">Patellar luxation, dental disease, MMVD in seniors, tracheal collapse</td></tr>
                <tr><td className="py-2 pr-4 font-bold text-brand-dark">Screening recommended</td><td className="py-2 text-brand-text-mid">OFA patellar; cardiac auscultation every visit; ACVO eye exam; annual oral exam</td></tr>
              </tbody>
            </table>
          </div>

          <h2>The Conditions I Monitor Most Closely</h2>

          <BreedHealthCard
            name="Patellar Luxation"
            riskLevel="very-high"
            description="Medial patellar luxation is among the most commonly diagnosed orthopedic conditions in Chihuahuas and the breed appears consistently in the high-prevalence brackets in the OFA patellar database. Graded I–IV by palpation; most cases are bilateral. Symptomatic Grade II and all of Grade III–IV typically progress and predispose to cruciate disease and arthritis."
            signs={[
              'Skipping or three-legged hop',
              'Sudden yelp, then back to normal gait',
              'Sitting with one leg out to the side',
              'Reluctance to jump where she used to',
            ]}
            management="Patellar palpation at every well visit. Lean body condition (critical at this size). Avoid repetitive jumping from furniture; ramps and steps for couch and bed. Grade III–IV and symptomatic Grade II benefit from surgical correction (trochleoplasty + tibial tuberosity transposition) by an ACVS-board-certified surgeon."
            guideHref="/find-a-vet"
            guideLabel="Find an orthopedic specialist →"
          />

          <BreedHealthCard
            name="Hydrocephalus (and the Molera)"
            riskLevel="moderate"
            description={'Hydrocephalus is the abnormal accumulation of cerebrospinal fluid within the ventricles of the brain. The Chihuahua is among the small toy breeds at elevated risk. The molera — the open fontanelle on the top of the skull — is recognized in the breed standard and is not itself diagnostic. Clinically significant hydrocephalus typically presents in young puppies with dome-shaped head, eyes deviated downward (ventrolateral strabismus or "sunset gaze"), abnormal mentation, gait abnormalities, seizures or delayed learning.'}
            signs={[
              'Dome-shaped or visibly enlarged head',
              'Eyes deviated down and out ("sunset gaze")',
              'Slow learner / failure to house-train',
              'Seizures, circling, head-pressing — urgent',
            ]}
            management="Refer to ACVIM neurology for examination and brain imaging (ultrasound through the molera in very young puppies; MRI in older puppies and adults). Medical management with osmotic diuretics, corticosteroids and antiepileptic medications can stabilize many cases. Severe or progressive cases may require ventriculoperitoneal shunting at a referral neurosurgery center."
          />

          <CalloutBox variant="evidence" title="A molera is not a diagnosis">
            The Chihuahua Club of America and AKC breed standard both note that the molera is a normal feature
            of the breed. It can be detected on routine puppy exam by palpation. Diagnosis of hydrocephalus
            requires neurologic signs plus imaging — not the molera alone — and is best made by a
            board-certified veterinary neurologist.
          </CalloutBox>

          <BreedHealthCard
            name="Dental Disease (Crowding & Periodontal)"
            riskLevel="very-high"
            description="Chihuahuas carry full dentition in a very small jaw, producing rotation, crowding and retained deciduous teeth. The AVDC documents periodontal disease as the most common disease of toy-breed dogs. Untreated periodontal disease in this breed routinely leads to multiple extractions in middle age."
            signs={[
              'Bad breath',
              'Brown tartar at the gum line',
              'Red, bleeding, receding gums',
              'Dropping food, pawing at face, chewing on one side',
            ]}
            management="Daily home brushing with veterinary toothpaste. VOHC-accepted dental chews/water additives. Annual oral exam with full-mouth dental radiographs when indicated. Extract retained deciduous canines at spay/neuter to prevent crowding-driven periodontal disease in adulthood."
          />

          <BreedHealthCard
            name="Juvenile & Small-Adult Hypoglycemia"
            riskLevel="high"
            description="Toy puppies under 4 months and very small adults have minimal glycogen reserves. The Chihuahua sits at the smallest end of the canine size spectrum and is therefore at the highest end of hypoglycemia risk. Episodes range from weakness and tremor to seizure and collapse and can be triggered by missed meals, stress or concurrent illness."
            signs={[
              'Weakness, wobbliness, glassy eyes',
              'Tremor, hypothermia',
              'Seizure or collapse — EMERGENCY',
              'Following any stressor (vaccine, travel, GI upset, surgery)',
            ]}
            management="Feed puppies 4 small meals daily until ≥4 months. Maintain corn syrup or oral glucose gel at home and when traveling. For any episode of weakness, seizure or unresponsiveness, apply a pea-sized amount to the gums and transport to an emergency hospital immediately."
          />

          <BreedHealthCard
            name="Myxomatous Mitral Valve Disease (MMVD)"
            riskLevel="high"
            description="MMVD is the most common acquired heart disease of small-breed dogs and the Chihuahua is among the over-represented breeds. The mitral valve leaflets thicken and leak, producing a left apical systolic murmur. Progression from pre-clinical murmur to clinical congestive heart failure (CHF) takes years in most dogs but is highly individual. The 2019 ACVIM Consensus Statement defines staging (A–D) and treatment thresholds — including pre-clinical pimobendan after echocardiographic confirmation of Stage B2."
            signs={[
              'Soft left apical systolic murmur on routine auscultation',
              'Cough, increased respiratory rate at rest, exercise intolerance — refer urgently',
              'Fainting (syncope) episodes — refer urgently',
              'Abdominal distension or labored breathing — emergency',
            ]}
            management="Cardiac auscultation at every visit. Echocardiography by an ACVIM cardiologist once a murmur is detected to stage the disease. Pre-clinical Stage B2 patients typically benefit from pimobendan per the 2019 ACVIM consensus. Once CHF develops, combination therapy (pimobendan + furosemide + ACE inhibitor +/- spironolactone) is standard."
            guideHref="/find-a-vet"
            guideLabel="Find a veterinary cardiologist →"
          />

          <BreedHealthCard
            name="Tracheal Collapse"
            riskLevel="moderate"
            description="The dry honking cough of tracheal collapse is well-recognized in Chihuahuas, though somewhat less common than in Yorkies and Pomeranians. Progressive weakening of the tracheal cartilage rings produces a chronic cough that worsens with excitement, leash pressure, drinking, heat and humidity. Staged 1–4 by tracheoscopy."
            signs={[
              'Honking cough triggered by excitement, leash, drinking',
              'Worse in heat and humidity',
              'Exercise intolerance, cyanosis in severe episodes',
            ]}
            management="Replace collar with a Y-shape harness. Strict weight management. Avoid environmental irritants. Pharmacologic management per ACVIM internal medicine. Refractory severe disease may warrant evaluation for tracheal stenting at a referral center."
          />

          <BreedHealthCard
            name="Syringomyelia (in apple-head lines)"
            riskLevel="moderate"
            description="Syringomyelia is the formation of fluid-filled cavities (syrinxes) within the spinal cord secondary to abnormal cerebrospinal fluid dynamics — most often associated with Chiari-like malformation. It is best characterized in the Cavalier King Charles Spaniel; it is documented but less common in apple-head Chihuahuas and other small toy breeds. Diagnosis requires MRI."
            signs={[
              '"Phantom scratching" — scratching at the air near neck or shoulder without skin contact',
              'Facial scratching, yelping for no obvious reason',
              'Altered gait, weakness, pain on neck manipulation',
              'Severe cases: progressive neurologic decline',
            ]}
            management="Referral to ACVIM neurology for examination and MRI. Medical management commonly includes gabapentin or pregabalin and CSF-reducing drugs (e.g., omeprazole, furosemide) per neurologist. Severe progressive cases may warrant neurosurgical decompression at a referral center."
          />

          <CalloutBox variant="warning" title="Emergency triggers — go now">
            Seizure, sudden change in mentation, dramatic increase in resting respiratory rate or labored
            breathing, severe non-weight-bearing lameness, prolonged unresponsiveness or repeated syncope.
            Chihuahuas decompensate fast — do not wait for morning.
          </CalloutBox>

          <h2>Recommended Screening</h2>
          <DropCap>
            A Chihuahua well-puppy plan should include patellar palpation, careful skull and fontanelle
            assessment, full neurologic and cardiac auscultation, an ACVO eye examination, and a frank
            conversation with the owner about lifelong dental care. From middle age forward, every visit
            should include a deliberate listen for a developing mitral murmur.
          </DropCap>
          <ul>
            <li><strong>Patellar evaluation:</strong> Submit to <a href="https://ofa.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">OFA</a> for breeding stock; palpate annually in pet dogs.</li>
            <li><strong>Cardiac auscultation:</strong> Every visit. Refer any left apical systolic murmur to ACVIM (Cardiology) for echocardiography and staging.</li>
            <li><strong>Neurology workup:</strong> Any Chihuahua puppy with abnormal mentation, dome-shaped head plus large molera, or seizures.</li>
            <li><strong>ACVO eye exam:</strong> Once before 1 year for breeding dogs; periodic in pet dogs for cataract surveillance. <a href="https://www.ofa.org/diseases/eye-certification" rel="noopener" target="_blank" className="text-brand-primary hover:underline">OFA / CAER registry</a>.</li>
            <li><strong>Dental:</strong> Annual oral exam; professional cleaning with full-mouth dental radiographs when indicated.</li>
          </ul>

          <h2>Finding a Vet for a Chihuahua</h2>
          <p>
            Look for a general practitioner with high toy-breed caseload and working relationships with an
            ACVIM cardiologist (for MMVD), an ACVIM neurologist (for hydrocephalus and syringomyelia), an
            ACVS surgeon (for patellar luxation) and a veterinary dentist. Anesthetic protocols for dogs
            this small differ meaningfully from large-breed protocols — ask whether the practice routinely
            anesthetizes dogs under 5 lb. Our directory filters by specialty: <a href="/find-a-vet">find a vet →</a>.
          </p>

          <h2>Pet Insurance for a Chihuahua</h2>
          <p>
            Patellar luxation correction commonly runs $2,000–4,000 per knee; hydrocephalus shunting can
            exceed $5,000–8,000 at a referral center; lifetime MMVD medical management can total
            $5,000–10,000; dental disease can easily exceed $5,000 across a normal Chihuahua lifespan.
            Insurance bought before symptoms appear typically covers these as accident/illness with no
            breed exclusion. See our 2026 comparison: <a href="/reviews/best-pet-insurance">best pet insurance →</a>.
          </p>

          <h2>FAQ</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <h2>Sources & Further Reading</h2>
          <ul>
            <li><a href="https://www.chihuahuaclubofamerica.com" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Chihuahua Club of America</a> — breed standard and health initiatives.</li>
            <li><a href="https://www.acvs.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">American College of Veterinary Surgeons (ACVS)</a> — patellar luxation and orthopedic owner resources.</li>
            <li><a href="https://ofa.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Orthopedic Foundation for Animals (OFA)</a> — patellar, cardiac and eye registries.</li>
            <li>Keene BW, Atkins CE, Bonagura JD et al. ACVIM Consensus Guidelines for the Diagnosis and Treatment of Myxomatous Mitral Valve Disease in Dogs. <em>J Vet Intern Med</em>. 2019;33(3):1127–1140.</li>
            <li>Ettinger, Feldman & Cote, <em>Textbook of Veterinary Internal Medicine</em>, 8th ed., on hydrocephalus, MMVD and tracheal collapse.</li>
            <li><a href="https://avdc.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">American Veterinary Dental College (AVDC)</a> — periodontal disease in small breeds.</li>
          </ul>
        </div>
      </ArticleLayout>
    </>
  )
}
