import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  FAQAccordion,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const PAGE_URL = 'https://vets.co/breeds/yorkshire-terrier-health'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Yorkshire Terrier Health — PSS, Trachea & Dental | Vets.co',
  description:
    'Yorkie health priorities — portosystemic shunt, patellar luxation, tracheal collapse, dental disease, hypoglycemia. Screening, signs, and referrals.',
  path: '/breeds/yorkshire-terrier-health',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Yorkshire Terrier Health — Owner Guide',
  description:
    'Portosystemic shunt, patellar luxation, tracheal collapse, dental disease, hereditary cataracts, retinal dysplasia and juvenile hypoglycemia in Yorkies.',
  url: PAGE_URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Yorkshire Terrier Health',
  description:
    'Veterinary owner guide to the most common Yorkshire Terrier health conditions with screening guidance and citations.',
  url: PAGE_URL,
  authorName: 'Vets.co Editorial',
  lastReviewed: '2026-05-28',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Breed Health', url: 'https://vets.co/breeds' },
    { name: 'Yorkshire Terrier Health', url: PAGE_URL },
  ],
})

const FAQS = [
  {
    question: 'What is a portosystemic shunt and why are Yorkies prone to it?',
    answer:
      'A portosystemic shunt (PSS, or liver shunt) is an abnormal blood vessel that bypasses the liver, so blood from the GI tract is not detoxified. The Yorkshire Terrier has one of the highest reported breed prevalences of congenital extrahepatic shunts among small breeds. Affected puppies are typically the runt, fail to thrive, may have neurologic signs after a protein-heavy meal, and often act dazed or wander aimlessly. Bile acids testing is the screening test of choice and is widely recommended by ACVIM internists before any anesthetic event in a Yorkie puppy.',
  },
  {
    question: 'Why does my Yorkie cough when she gets excited?',
    answer:
      'A goose-honk cough triggered by excitement, leash pressure, drinking, or wakening from sleep is classic for tracheal collapse — the most common cause of chronic cough in small-breed dogs. Yorkies are over-represented. Switch to a Y-shape harness, keep her at lean body weight, avoid smoke exposure, and ask your veterinarian about cough-suppressant trials. ACVIM internal medicine referral is appropriate for poorly controlled cases.',
  },
  {
    question: 'How important is dental care for a Yorkie?',
    answer:
      'Extremely important. The American Veterinary Dental College and multiple large-scale prevalence studies confirm that toy and small breeds have the highest rates of periodontal disease. Yorkies often need professional dental cleaning more frequently than larger breeds. Daily home brushing with veterinary toothpaste is the single most effective intervention.',
  },
  {
    question: 'Does my Yorkie need to be tested for hereditary eye disease?',
    answer:
      'The Yorkshire Terrier Club of America (YTCA) and OFA list hereditary cataracts and retinal dysplasia among the breed-related eye conditions. An ACVO eye examination by a board-certified veterinary ophthalmologist before breeding, and periodically in pet dogs from middle age, is appropriate. ACVO eye certifications can be searched on the OFA / CAER database.',
  },
  {
    question: 'My Yorkie puppy seems weak and shaky — what should I do?',
    answer:
      'Suspect juvenile hypoglycemia. Toy breeds under 4 months can drop blood glucose dangerously low after stress, missed meals, or illness. While transporting to an emergency hospital, rub a small amount of corn syrup or honey on the gums. If the puppy is having a seizure or is unresponsive, this is a life-threatening emergency — call ahead and go immediately.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

const combinedSchema = combineSchemas(
  articleSchema,
  medicalSchema,
  faqSchema,
  breadcrumbSchema,
)

export default function VetsYorkshireTerrierHealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="vets-co"
        contentType="breed"
        hero={{
          title: 'Yorkshire Terrier Health — A Veterinarian\'s Perspective',
          subtitle:
            'A tough little terrier in a 7-pound package, the Yorkie is long-lived but carries a distinct set of liver, orthopedic, airway and dental predispositions. Early bile-acids screening and committed dental care are the highest-yield interventions.',
          category: 'Breed Health Guide',
          authorName: 'Vets.co Editorial',
          authorAvatar: '🐾',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Breed Health', href: '/breeds' },
          { name: 'Yorkshire Terrier Health', href: '/breeds/yorkshire-terrier-health' },
        ]}
        schema={articleSchema}
        sidebar={
          <>
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Find a vet experienced with toy breeds', href: '/find-a-vet' },
                { label: 'Best Pet Insurance 2026', href: '/reviews/best-pet-insurance' },
                { label: 'Pomeranian Health', href: '/breeds/pomeranian-health' },
                { label: 'Chihuahua Health', href: '/breeds/chihuahua-health' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="vets-co"
              title="Free Pet Health Tips"
              subtitle="Practical guidance every Tuesday."
              source="breeds-yorkshire-terrier"
            />
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
            The Yorkshire Terrier is a small (4–7 lb), long-lived (12–15 years) toy terrier with a tightly
            defined cluster of breed predispositions: congenital portosystemic shunt, patellar luxation,
            tracheal collapse, very high rates of periodontal disease, hereditary cataracts and retinal
            dysplasia, and juvenile hypoglycemia. Bile-acids screening before any anesthetic event in a young
            Yorkie is appropriate. Look for a primary-care vet with a toy-breed caseload and referral
            relationships with ACVIM internal medicine and a veterinary dentist.
          </p>

          <h2>Quick Reference</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Breed group</td><td className="py-2 text-brand-text-mid">Toy (AKC); terrier ancestry</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Adult weight</td><td className="py-2 text-brand-text-mid">4–7 lb (1.8–3.2 kg); breed standard not to exceed 7 lb</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Lifespan</td><td className="py-2 text-brand-text-mid">12–15 years</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Urgency-tier conditions</td><td className="py-2 text-brand-text-mid">Hepatic encephalopathy from PSS; juvenile hypoglycemic seizure; severe tracheal collapse with cyanosis</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">High-prevalence chronic</td><td className="py-2 text-brand-text-mid">Patellar luxation, tracheal collapse, dental disease</td></tr>
                <tr><td className="py-2 pr-4 font-bold text-brand-dark">Screening recommended</td><td className="py-2 text-brand-text-mid">Bile-acids before puppy anesthesia; OFA patellar; ACVO eye exam; annual oral exam</td></tr>
              </tbody>
            </table>
          </div>

          <h2>The Conditions I Monitor Most Closely</h2>

          <BreedHealthCard
            name="Portosystemic Shunt (PSS / Liver Shunt)"
            riskLevel="very-high"
            description="An abnormal blood vessel diverts portal blood around the liver, leaving toxins (especially ammonia from protein digestion) in circulation. The Yorkshire Terrier has one of the highest reported breed prevalences of congenital extrahepatic shunts. Affected puppies often present as the runt, fail to thrive, may show neurologic signs (dazed, head-pressing, circling, seizure) particularly after a high-protein meal, and recover quickly between episodes. Bile-acids testing — a fasting and post-prandial pair — is the standard screening test."
            signs={[
              'Failure to thrive — runt of the litter',
              'Neurologic signs after meals (dazed, wandering, head-pressing, seizure)',
              'Stunted growth, copper-colored irises (occasional)',
              'Prolonged anesthetic recovery — major red flag',
            ]}
            management="Bile-acids screening before any anesthetic event in a puppy Yorkie. If elevated, refer to ACVIM internal medicine for abdominal ultrasound, CT angiography, or scintigraphy. Surgical attenuation (ameroid constrictor, cellophane banding, thin-film banding) at a referral hospital is curative in most extrahepatic cases. Medical management (low-protein hepatic diet, lactulose, antibiotics) bridges to surgery and is the long-term plan when surgery is not feasible."
            guideHref="/find-a-vet"
            guideLabel="Find an internal medicine specialist →"
          />

          <CalloutBox variant="evidence" title="Screen before you anesthetize">
            Multiple veterinary textbooks (Ettinger 8th ed.; Nelson & Couto, <em>Small Animal Internal Medicine</em>)
            recommend bile-acids testing in toy-breed puppies — and specifically Yorkies — before elective anesthesia.
            Undiagnosed PSS dramatically increases anesthetic risk because the liver cannot metabolize anesthetic
            agents normally and ammonia rises rapidly.
          </CalloutBox>

          <BreedHealthCard
            name="Patellar Luxation"
            riskLevel="very-high"
            description="Medial patellar luxation is among the most common orthopedic conditions of toy breeds. The Yorkshire Terrier consistently appears in the high-prevalence brackets in OFA’s patella database. Graded I–IV by orthopedic palpation; grades III–IV typically progress and predispose to cranial cruciate ligament rupture and arthritis."
            signs={[
              'Skipping or three-legged hop',
              'Sudden yelp followed by normal gait',
              'Sitting with one leg held out to the side',
              'Reluctance to jump or climb where she used to',
            ]}
            management="Orthopedic exam at every well visit. Lean body condition. Avoid repetitive jumps from furniture; provide ramps. Grade III–IV and symptomatic Grade II benefit from surgical correction (trochleoplasty + tibial tuberosity transposition) by an ACVS-board-certified surgeon."
          />

          <BreedHealthCard
            name="Tracheal Collapse"
            riskLevel="very-high"
            description="Progressive weakening and flattening of the tracheal cartilage rings producing a chronic, dry, honking cough. Yorkies are one of the classically over-represented breeds. Staged 1–4 by tracheoscopy. Most dogs are managed medically for years; severe cases (stage 3–4 with persistent respiratory distress) may require intraluminal stenting or extraluminal ring placement at a referral facility."
            signs={[
              'Honking cough triggered by excitement, leash pressure, drinking',
              'Worse in heat, humidity, after meals',
              'Exercise intolerance, blue-tinged gums during severe episodes',
              'Worsening, not improving, over months to years',
            ]}
            management="Y-shape harness — not a collar. Strict weight management. Avoid environmental irritants (smoke, dust, scented sprays). Pharmacologic management per ACVIM internist commonly combines a cough suppressant, anti-inflammatories, and sometimes bronchodilators. Tracheal stenting for refractory severe disease at a referral center."
          />

          <BreedHealthCard
            name="Dental Disease (Crowding & Periodontal)"
            riskLevel="very-high"
            description="Periodontal disease is the most common disease of toy-breed dogs per the American Veterinary Dental College. Yorkies often retain deciduous teeth, leading to crowding, root abnormalities and accelerated attachment loss. Untreated periodontal disease causes pain, tooth loss and bacteremia."
            signs={[
              'Halitosis (bad breath is not normal)',
              'Brown tartar at the gum line',
              'Red, bleeding, receding gums',
              'Dropping food, pawing at face, chewing on one side',
            ]}
            management="Daily home brushing with veterinary toothpaste. VOHC-accepted dental chews/water additives as adjuncts. Annual oral exam; professional cleaning under anesthesia with full-mouth dental radiographs when indicated. Extract retained deciduous canines at spay/neuter."
          />

          <BreedHealthCard
            name="Juvenile Hypoglycemia"
            riskLevel="high"
            description="Toy puppies under 4 months and very small adults have limited hepatic glycogen reserves and can drop glucose dangerously after missed meals, stress or illness. Yorkies are at the highest end of the risk distribution because of their extreme small size in tea-cup and very-small lines."
            signs={[
              'Weakness, wobbliness, glassy eyes',
              'Tremors, hypothermia',
              'Seizure or collapse — EMERGENCY',
              'Following any stressor (vaccine, travel, GI upset, surgery)',
            ]}
            management="Feed 4 small meals daily until ≥4 months old. Keep corn syrup or oral glucose gel at home and when traveling. Apply a pea-sized amount of corn syrup to the gums while transporting to an emergency hospital for any episode of weakness, seizure or unresponsiveness."
          />

          <BreedHealthCard
            name="Hereditary Cataracts"
            riskLevel="moderate"
            description="Cataract is an opacification of the lens that can lead to vision loss. Hereditary forms are recognized in Yorkshire Terriers by both OFA and ACVO. Most are bilateral but progress at different rates. Affected dogs may be vision-impaired well before owners notice — toy dogs adapt remarkably well to gradual vision loss."
            signs={[
              'Bluish or white cloudiness in the pupil',
              'Bumping into objects in new environments',
              'Hesitancy on stairs or in low light',
              'Secondary lens-induced uveitis (red, painful eye)',
            ]}
            management="ACVO eye exam annually for breeding stock; periodic in pet dogs from middle age. Surgical phacoemulsification by a veterinary ophthalmologist restores vision in most candidates. Untreated cataracts can luxate and trigger lens-induced uveitis or secondary glaucoma — both painful and vision-threatening."
          />

          <BreedHealthCard
            name="Retinal Dysplasia"
            riskLevel="moderate"
            description="A developmental abnormality of the retina that ranges from clinically silent multifocal folds to total retinal detachment with blindness. Listed by the YTCA among breed-related eye conditions and detectable on ACVO eye examination. Severe forms typically present early in life; mild forms may not affect vision."
            signs={[
              'Variable — often subclinical and detected only on eye exam',
              'Reluctance to navigate stairs or low-light areas (severe forms)',
              'Bumping into furniture in new environments',
            ]}
            management="ACVO eye examination of puppies; do not breed affected animals. No specific treatment for the dysplasia itself; supportive vision care for affected dogs."
          />

          <CalloutBox variant="warning" title="Emergency triggers — go now">
            Neurologic signs after a meal (dazed, head-pressing, circling, seizure), an unresponsive or seizing
            puppy, sudden severe respiratory distress with cyanosis, severe non-weight-bearing lameness with
            obvious pain. Yorkies decompensate fast; do not wait for morning.
          </CalloutBox>

          <h2>Screening I Recommend</h2>
          <DropCap>
            Build a year-one screening plan around bile-acids testing, patellar palpation, cardiac auscultation
            and an ACVO eye exam. A normal puppy screening doesn’t mean lifelong immunity, but it sets a clean
            baseline and identifies the dogs that need referral before complications emerge.
          </DropCap>
          <ul>
            <li><strong>Bile-acids testing:</strong> Before any anesthetic event in a puppy Yorkie. Pre- and post-prandial pair.</li>
            <li><strong>Patellar evaluation:</strong> Submit to <a href="https://ofa.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">OFA</a> for breeding stock; palpate annually in pet dogs.</li>
            <li><strong>ACVO eye exam:</strong> Once before 1 year; periodic in pet dogs from age 5–6 for cataract surveillance. Listed on the <a href="https://www.ofa.org/diseases/eye-certification" rel="noopener" target="_blank" className="text-brand-primary hover:underline">OFA / CAER registry</a>.</li>
            <li><strong>Dental:</strong> Annual oral exam; professional cleaning with full-mouth dental radiographs when indicated.</li>
            <li><strong>Bloodwork:</strong> Baseline at 12 months; annual from age 7.</li>
          </ul>

          <h2>Finding a Vet for a Yorkshire Terrier</h2>
          <p>
            Choose a general practitioner with substantial toy-breed caseload and working relationships with an
            ACVIM internist (for PSS and tracheal collapse), an ACVS surgeon (for shunt attenuation and
            patellar correction), a veterinary dentist and an ACVO ophthalmologist. Our directory lets you
            filter by specialty: <a href="/find-a-vet">find a vet →</a>.
          </p>

          <h2>Pet Insurance for a Yorkshire Terrier</h2>
          <p>
            Surgical attenuation of a single extrahepatic shunt at a referral center commonly runs
            $4,500–8,000; patellar luxation correction $2,000–4,000 per knee; tracheal stenting
            $4,500–7,500; lifetime dental care can easily exceed $6,000. Insurance bought before
            symptoms appear typically covers these as accident/illness with no breed exclusion. See our
            2026 comparison: <a href="/reviews/best-pet-insurance">best pet insurance →</a>.
          </p>

          <h2>FAQ</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <h2>Sources & Further Reading</h2>
          <ul>
            <li><a href="https://www.ytca.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Yorkshire Terrier Club of America</a> — breed health initiatives.</li>
            <li><a href="https://ofa.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Orthopedic Foundation for Animals (OFA)</a> — patellar, cardiac and eye registries.</li>
            <li><a href="https://www.acvs.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">American College of Veterinary Surgeons (ACVS)</a> — portosystemic shunt and patellar luxation owner resources.</li>
            <li><a href="https://avdc.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">American Veterinary Dental College (AVDC)</a> — periodontal disease in small breeds.</li>
            <li>Ettinger, Feldman & Cote, <em>Textbook of Veterinary Internal Medicine</em>, 8th ed., on PSS, tracheal collapse and small-breed pharmacology.</li>
            <li>Nelson & Couto, <em>Small Animal Internal Medicine</em>, 6th ed., on diagnosis and management of congenital portosystemic shunts.</li>
          </ul>
        </div>
      </ArticleLayout>
    </>
  )
}
