import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture, CrossPortfolioCard,
  RelatedLinks,
  FAQAccordion,
  AffiliateDisclosure,
  ShopCtas,
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

const PAGE_URL = 'https://vets.co/breeds/pomeranian-health'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Pomeranian Health — Trachea, Patella & Alopecia X | Vets.co',
  description:
    'Pomeranian health priorities — patellar luxation, tracheal collapse, alopecia X, PDA and dental crowding. Screening, signs, and when to refer.',
  path: '/breeds/pomeranian-health',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Pomeranian Health — Owner Guide',
  description:
    'Patellar luxation, collapsing trachea, alopecia X, PDA, Legg-Calvé-Perthes, dental disease and hypoglycemia in Pomeranians.',
  url: PAGE_URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Pomeranian Health',
  description:
    'Veterinary owner guide to the most common Pomeranian health conditions, with screening guidance and citations.',
  url: PAGE_URL,
  authorName: 'Vets.co Editorial',
  lastReviewed: '2026-05-28',
})

const FAQS = [
  {
    question: 'At what age do Pomeranian health problems usually appear?',
    answer:
      'Congenital and orthopedic problems (patellar luxation, PDA, Legg-Calvé-Perthes, open fontanelle) typically present in the first year of life and are often detected at puppy visits. Tracheal collapse and dental disease usually appear in middle age (4–8 years). Alopecia X often starts between 1 and 5 years of age. Annual dental and orthopedic checks throughout life are appropriate for the breed.',
  },
  {
    question: 'Is alopecia X dangerous?',
    answer:
      'Alopecia X (also called Black Skin Disease, BSD, or coat funk) is primarily cosmetic. The skin itself is healthy and there is no associated systemic illness in most dogs. However, before accepting an alopecia X diagnosis a veterinarian should rule out hypothyroidism, hyperadrenocorticism (Cushing\'s disease), and sex hormone imbalances, all of which can mimic the same symmetric truncal hair loss and which do require treatment.',
  },
  {
    question: 'Why are Pomeranians prone to dental disease?',
    answer:
      'Pomeranians have full dentition (42 adult teeth) packed into a very small jaw. Crowding and rotation of teeth trap food and plaque, accelerating periodontal disease. Retained deciduous (baby) canines are also common and should be evaluated at the spay/neuter visit. The American Veterinary Dental College recommends home brushing, annual oral exams, and professional cleanings under anesthesia when indicated.',
  },
  {
    question: 'What is the best way to feed a Pomeranian puppy to prevent hypoglycemia?',
    answer:
      'Toy and small breed puppies under 3–4 months have limited glycogen reserves and can become hypoglycemic if meals are spaced too far apart, especially with stress or illness. Feed small meals four times per day and have a sugar source (corn syrup, honey) available. Sudden weakness, wobbliness, glassy eyes or seizures in a young Pomeranian is a medical emergency — rub a small amount of corn syrup on the gums and seek emergency care immediately.',
  },
  {
    question: 'Should I avoid neck collars on my Pomeranian?',
    answer:
      'Yes. The combination of collapsing trachea risk and the breed\'s small size means that pressure on the trachea from a collar can trigger coughing episodes and accelerate disease. A well-fitted Y-shape harness that does not press on the throat is preferred. This is supported by guidance from veterinary internal medicine specialists treating tracheal collapse.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

const combinedSchema = combineSchemas(
  articleSchema,
  medicalSchema,
  faqSchema,
)

export default function VetsPomeranianHealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="vets-co"
        contentType="breed"
        hero={{
          title: 'Pomeranian Health — A Veterinarian\'s Perspective',
          subtitle:
            'A small dog with a long working life — but a tight, breed-specific cluster of orthopedic, airway, dermatologic and dental conditions that benefit from early screening and proactive management.',
          category: 'Breed Health Guide',
          authorName: 'Vets.co Editorial',
         
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Breed Health', href: '/breeds' },
          { name: 'Pomeranian Health', href: '/breeds/pomeranian-health' },
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
                { label: 'Chihuahua Health', href: '/breeds/chihuahua-health' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="vets-co"
              title="Free Pet Health Tips"
              subtitle="Practical guidance every Tuesday."
              source="breeds-pomeranian"
            />
            <CrossPortfolioCard currentSite="vets-co" contentType="breed" variant="sidebar" />
          </>
        }
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the Pomeranian health checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Pomeranian health checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the prep notes that match the
              trachea, PDA, and alopecia X copy on
              this page — an analog indoor
              hygrometer so heat-and-humidity cough
              triggers stay a written reading, a
              6-column columnar pad so patellar
              grade, murmur, dental score, and body
              condition stay one well-visit row, and
              an undated daily planner so thyroid /
              ACTH / LDDS dates stay written before
              anyone accepts alopecia X. Educational
              checklist, not a diagnosis, not a
              substitute for veterinary care, and
              not a planner, columnar-pad, or
              sketch-pad hop. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Pomeranian health checklist"
              subtitle="Email the hygrometer, columnar-pad, and planner notes. No spam."
              ctaText="Email my Pomeranian health checklist"
              source="breeds-pomeranian-health-under-hero"
            />
          </div>

          <ArticleByline
            siteName="Vets.co Editorial"
            publishedAt="2026-05-28T00:00:00Z"
            updatedAt="2026-09-06T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <h2>TL;DR</h2>
          <p>
            The Pomeranian is a small (typically 3–7 lb), long-lived (12–16 years) toy spitz with a well-documented
            cluster of breed-predispositions: patellar luxation, tracheal collapse, dental crowding and periodontal
            disease, alopecia X (Black Skin Disease), congenital heart defects (particularly patent ductus
            arteriosus), Legg-Calvé-Perthes disease and juvenile hypoglycemia. Most are manageable when detected
            early. Look for a primary care veterinarian who is experienced with toy breeds and has working
            relationships with veterinary cardiology, ophthalmology and internal medicine specialists.
          </p>

          <h2>Quick Reference</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Breed group</td><td className="py-2 text-brand-text-mid">Toy (AKC); spitz family</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Adult weight</td><td className="py-2 text-brand-text-mid">3–7 lb (1.4–3.2 kg); breed standard 3–7 lb</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Lifespan</td><td className="py-2 text-brand-text-mid">12–16 years</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Urgency-tier conditions</td><td className="py-2 text-brand-text-mid">PDA (congenital, urgent if symptomatic); severe tracheal collapse with respiratory distress; juvenile hypoglycemia with seizure or collapse</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">High-prevalence chronic</td><td className="py-2 text-brand-text-mid">Patellar luxation, dental disease, tracheal collapse, alopecia X</td></tr>
                <tr><td className="py-2 pr-4 font-bold text-brand-dark">Screening recommended</td><td className="py-2 text-brand-text-mid">OFA patellar evaluation; ACVO eye exam; cardiac auscultation at every visit; annual oral exam</td></tr>
              </tbody>
            </table>
          </div>

          <h2>The Conditions I Monitor Most Closely</h2>

          <BreedHealthCard
            name="Patellar Luxation"
            riskLevel="very-high"
            description="The Pomeranian is consistently listed among the top breeds for medial patellar luxation in OFA’s patella database. The kneecap (patella) slips out of its groove, causing intermittent skipping or hopping lameness in the hind limbs. Grades range from I (slips with manual pressure) to IV (permanently luxated). Most cases are bilateral. Grade II and above frequently progress and can lead to cranial cruciate ligament rupture and early arthritis."
            signs={[
              'Intermittent skipping or three-legged hop',
              'Sudden cry, then return to normal gait',
              'Sitting with one leg held to the side',
              'Reluctance to jump up after years of doing so',
            ]}
            management="Orthopedic exam at every puppy and annual visit — the grade is determined by palpation. Maintain lean body condition (extra weight worsens symptoms significantly). Avoid repetitive high-impact jumping from couches and beds; ramps help. Grade III–IV and symptomatic Grade II often benefit from surgical correction (trochleoplasty + tibial tuberosity transposition) by a board-certified surgeon."
            guideHref="/find-a-vet"
            guideLabel="Find an orthopedic specialist →"
          />

          <BreedHealthCard
            name="Tracheal Collapse"
            riskLevel="very-high"
            description="The cartilage rings of the windpipe weaken and flatten, producing the characteristic dry, honking cough. Pomeranians, Yorkies and other toy breeds are over-represented. It is a chronic, slowly progressive disease that is staged 1–4 on tracheoscopy. Most dogs are managed medically for many years; a minority progress to severe disease requiring intraluminal stenting or extraluminal ring placement at a referral hospital."
            signs={[
              'Honking, goose-like cough',
              'Cough triggered by excitement, drinking, leash pressure',
              'Exercise intolerance, blue-tinged gums during episodes',
              'Worsening cough in heat or humidity',
            ]}
            management="Replace neck collar with a Y-shape harness. Maintain ideal body condition — weight loss alone can dramatically reduce cough frequency. Avoid smoke, dust and aerosolized irritants. Medical management commonly includes cough suppressants, anti-inflammatories and bronchodilators per ACVIM internal medicine specialists. Severe cases warrant evaluation for stenting."
          />

          <BreedHealthCard
            name="Dental Disease (Crowding & Periodontal)"
            riskLevel="very-high"
            description="The Pomeranian carries a standard 42-tooth dentition in a miniaturized jaw, producing crowding, rotation and retained deciduous teeth. The American Veterinary Dental College recognizes periodontal disease as the most common disease of small-breed dogs. By age 3, the majority of toy-breed dogs have radiographic evidence of periodontal disease."
            signs={[
              'Bad breath (halitosis is not normal)',
              'Brown tartar at the gumline',
              'Red, bleeding or receding gums',
              'Dropping food, chewing on one side, pawing at the face',
            ]}
            management="Daily toothbrushing with veterinary-formulated toothpaste — the single highest-impact home intervention. VOHC-accepted dental chews or water additives where brushing is not tolerated. Annual oral examination; professional cleaning under anesthesia with full-mouth dental radiographs when indicated. Extract retained deciduous canines at the spay/neuter visit."
          />

          <BreedHealthCard
            name="Alopecia X (Black Skin Disease)"
            riskLevel="moderate"
            description="A symmetric, non-pruritic (non-itchy) loss of guard hairs over the trunk, often progressing to bilateral hair loss with hyperpigmented skin underneath. The dog feels well and the skin is not inflamed. Pathogenesis is incompletely understood and likely involves a follicular arrest with sex hormone influences. Diagnosis is one of exclusion: hypothyroidism, hyperadrenocorticism, sex hormone–producing tumors and chronic dermatologic disease must be ruled out first."
            signs={[
              'Symmetric loss of guard hairs on trunk and tail',
              'Wooly remaining undercoat, eventually patchy',
              'Hyperpigmented (darker) skin in affected areas',
              'No itch, no scaling, no systemic illness',
            ]}
            management="Full thyroid panel, ACTH stimulation or low-dose dexamethasone suppression test, dermatology consultation. If true alopecia X is diagnosed: management is optional and cosmetic. Reported approaches (melatonin, deslorelin, neutering of intact dogs, oral trilostane under specialist supervision) have variable evidence and inconsistent response — manage expectations."
          />

          <CalloutBox variant="evidence" title="Rule out endocrine disease before accepting alopecia X">
            Hypothyroidism and Cushing’s disease can mimic the symmetric truncal hair loss of alopecia X and
            require entirely different treatment. The Merck Veterinary Manual and ACVIM internal medicine guidance
            both list a stepwise endocrine workup as the standard approach before settling on a diagnosis of
            exclusion.
          </CalloutBox>

          <BreedHealthCard
            name="Patent Ductus Arteriosus (PDA)"
            riskLevel="high"
            description="PDA is the most common congenital heart defect of dogs and is over-represented in Pomeranians and several other small breeds. The ductus arteriosus is a fetal blood vessel that should close in the first days of life. When it remains patent, blood shunts from the aorta into the pulmonary artery, eventually causing left-sided heart failure if uncorrected. A characteristic continuous (machinery) murmur on the left base is the cardinal sign and is detectable at the first puppy visit."
            signs={[
              'Continuous machinery murmur heard on routine auscultation',
              'Exercise intolerance or stunted growth in a puppy',
              'Cough, increased respiratory effort — late, urgent',
              'Failure to thrive compared to littermates',
            ]}
            management="Refer any puppy with a continuous murmur to a board-certified cardiologist (ACVIM — Cardiology) for echocardiography. Minimally invasive transcatheter ductal occlusion is now the standard of care at most veterinary teaching hospitals and produces excellent long-term outcomes when performed before heart failure develops. Surgical ligation is the alternative."
            guideHref="/find-a-vet"
            guideLabel="Find a veterinary cardiologist →"
          />

          <BreedHealthCard
            name="Legg-Calvé-Perthes Disease"
            riskLevel="moderate"
            description="An idiopathic avascular necrosis of the femoral head, primarily affecting small breeds under 25 lb. Typically presents between 4 and 12 months as progressive hind-limb lameness in young dogs. It is unilateral in most cases. Radiographs of the hips confirm the diagnosis. The condition is painful and does not resolve without intervention."
            signs={[
              'Progressive hind limb lameness in a 4–12 month old',
              'Muscle atrophy on the affected thigh',
              'Pain on hip extension',
              'Reluctance to bear weight on one leg',
            ]}
            management="Diagnosis by radiographs; consider OFA hip submission. Treatment of choice is femoral head and neck ostectomy (FHO) by a surgeon experienced with toy breeds. Functional outcomes are usually excellent given the dog’s small body weight. Physical therapy postoperatively materially shortens recovery."
          />

          <BreedHealthCard
            name="Juvenile & Toy-Adult Hypoglycemia"
            riskLevel="high"
            description="Toy breed puppies and very small adults have limited hepatic glycogen reserves and can drop blood glucose dangerously low if meals are skipped or with concurrent stress or illness. Hypoglycemic episodes range from weakness and tremors to seizure and collapse. The Pomeranian sits squarely in this risk group."
            signs={[
              'Weakness, wobbliness, glassy eyes',
              'Tremors, hypothermia',
              'Seizure or collapse — EMERGENCY',
              'Following any stressor (vaccine, travel, GI upset, surgery)',
            ]}
            management="Feed puppies 4 small meals per day until at least 4 months old, then 3 meals to adulthood. Maintain a sugar source (corn syrup, honey, oral glucose gel) at home and travel. For an awake but weak puppy, rub a pea-sized amount of corn syrup on the gums and proceed to the emergency hospital. For seizure or unresponsive, transport immediately while applying corn syrup to gums."
          />

          <CalloutBox variant="warning" title="Emergency triggers — go now">
            Sudden unresponsiveness, seizure, blue-tinged gums, severe respiratory distress, repeated honking cough
            with collapse, or sudden non-weight-bearing lameness with severe pain. Pomeranians decompensate quickly
            because of their small body size — do not wait until morning.
          </CalloutBox>

          <h2>Recommended Screening</h2>
          <DropCap>
            Every Pomeranian benefits from a standardized screening package built around the breed’s
            predispositions. At each well visit, the recommended workup is an orthopedic exam (patellar grade), cardiac
            auscultation, dental score, and body condition score. Eyes warrant an ACVO-listed ophthalmology
            examination at least once in the first year for breeding stock, and again at age 5–6 in pet dogs to
            screen for cataract.
          </DropCap>
          <ul>
            <li><strong>Patellar evaluation:</strong> Submit to <a href="https://ofa.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">OFA</a> for breeding stock; in pet dogs, palpate annually.</li>
            <li><strong>Cardiac auscultation:</strong> Every visit. Refer any continuous or loud systolic murmur to ACVIM (Cardiology).</li>
            <li><strong>ACVO eye exam:</strong> Once before 1 year for breeding dogs; periodic re-exam for cataract surveillance.</li>
            <li><strong>Dental:</strong> Annual oral exam; professional cleaning with full-mouth dental radiographs when indicated.</li>
            <li><strong>Bloodwork:</strong> Baseline at 12 months; annual from age 7.</li>
          </ul>

          <h2>Finding a Vet for a Pomeranian</h2>
          <p>
            Toy-breed medicine is its own clinical microclimate — the doses, the anesthetic protocols, the
            instrumentation and even the recovery cages are different. Look for a general practitioner with
            high toy-breed caseload and an established relationship with an ACVIM cardiologist (for PDA workup),
            an ACVS surgeon (for patellar luxation and FHO), and a veterinary dentist. Our directory filters by
            specialty and toy-breed comfort: <a href="/find-a-vet">find a vet →</a>.
          </p>

          <h2>Pet Insurance for a Pomeranian</h2>
          <p>
            Pomeranians live long, which is wonderful — and which also means a long window for chronic disease
            costs to accumulate. Patellar luxation correction runs roughly $2,000–4,000 per knee; PDA closure
            $3,500–5,500; tracheal stenting at a referral center commonly $4,500–7,500; lifetime dental
            care can easily exceed $5,000. Insurance bought before the first symptoms appear typically covers
            these as accident/illness with no breed exclusion. See our 2026 comparison:{' '}
            <a href="/reviews/best-pet-insurance">best pet insurance →</a>.
          </p>

          <h2 id="kit">Pomeranian-health kit</h2>
          <p>
            Everyday physical supplies that match the
            trachea, PDA, and alopecia X copy on
            this page — an analog indoor hygrometer
            so heat-and-humidity cough triggers stay
            a written reading, a 6-column columnar
            pad so patellar grade, murmur, dental
            score, and body condition stay one
            well-visit row, and an undated daily
            planner so thyroid / ACTH / LDDS dates
            stay written before anyone accepts
            alopecia X. These are educational
            Pomeranian-health / paperwork tools, not
            a ranked product list, not a substitute
            for veterinary care, and not a
            treatment. Academic-year planners,
            8-column columnar pads, and newsprint
            sketch pads already live on
            husky-health. 13-column analysis pads,
            desk blotter pads, and numbered log
            books already live on chihuahua-health.
            This page does not hop harnesses,
            toothpaste, melatonin, or insurance
            brands as Amazon searches. This page
            does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (analog indoor hygrometer /
              6-column columnar pad /
              undated daily planner).
              These are educational
              Pomeranian-health / paperwork
              tools, not a ranked product list, not
              a substitute for veterinary care, no
              Rx / first-aid kit / thermometer /
              carrier / insurance-brand ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1182
              academic+year+planner /
              8+column+columnar+pad /
              newsprint+sketch+pad,
              #1181
              13+column+analysis+pad /
              desk+blotter+pad /
              numbered+log+book. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the Pomeranian-health kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page trachea, PDA, and alopecia X
              copy — an analog indoor hygrometer, a
              6-column columnar pad, and an undated
              daily planner. Educational Pomeranian-
              health / paperwork tools only. They
              are not a ranked product list, they
              are not a substitute for veterinary
              care, they are not a #1182 planner /
              columnar-pad / sketch-pad hop, they
              are not a financing-brand or
              insurance-brand hop, and they do not
              replace a veterinarian. Vets.co earns
              a commission on qualifying purchases
              at no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/analog+indoor+hygrometer?s=breeds-pomeranian-health"
                amazonLabel="Browse analog indoor hygrometers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/6+column+columnar+pad?s=breeds-pomeranian-health"
                amazonLabel="Browse 6-column columnar pads on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/undated+daily+planner?s=breeds-pomeranian-health"
                amazonLabel="Browse undated daily planners on Amazon →"
              />
            </div>
          </div>

          <h2>FAQ</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <h2>Sources & Further Reading</h2>
          <ul>
            <li><a href="https://ofa.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Orthopedic Foundation for Animals (OFA)</a> — patellar and cardiac breed statistics.</li>
            <li><a href="https://www.ofa.org/diseases/eye-certification" rel="noopener" target="_blank" className="text-brand-primary hover:underline">ACVO / OFA Eye Certification Registry</a> — breed eye exam database.</li>
            <li><a href="https://avdc.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">American Veterinary Dental College (AVDC)</a> — periodontal disease in small breeds.</li>
            <li><a href="https://www.acvim.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">American College of Veterinary Internal Medicine (ACVIM)</a> — cardiology and internal medicine consensus statements.</li>
            <li>Maddison, Page & Church, <em>Small Animal Clinical Pharmacology</em>, 2nd ed., Saunders, on toy-breed pharmacology.</li>
            <li>Ettinger, Feldman & Cote, <em>Textbook of Veterinary Internal Medicine</em>, 8th ed., on tracheal collapse, PDA and Legg-Calvé-Perthes disease.</li>
          </ul>
        </div>
      </ArticleLayout>
    </>
  )
}
