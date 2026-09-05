import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Senior Dog Bloodwork Guide — What Each Test Finds | Vets.co', description: 'What your senior dog\'s bloodwork actually measures. CBC, chemistry panel, urinalysis, SDMA, and thyroid explained', path: '/health/senior-bloodwork-guide', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Routine Laboratory Tests', url: 'https://www.merckvetmanual.com/special-subjects/clinical-pathology-and-procedures/laboratory-diagnosis-blood-chemistry-profile', publisher: 'Merck Vet Manual' },
  { label: 'AAHA: Senior Care Guidelines for Dogs and Cats', url: 'https://www.aaha.org/aaha-guidelines/senior-care-configuration/', publisher: 'AAHA' },
  { label: 'IRIS: SDMA and Early Kidney Disease Detection', url: 'https://www.iris-kidney.com/', publisher: 'International Renal Interest Society' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Senior Dog Bloodwork Guide', description: 'What CBC, chemistry panel, urinalysis, SDMA, and T4 measure in senior dogs.', url: 'https://vets.co/health/senior-bloodwork-guide', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Senior Dog Bloodwork Guide', description: 'Interpreting CBC, chemistry panel, and urinalysis in senior dogs.', url: 'https://vets.co/health/senior-bloodwork-guide', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
export default function SeniorBloodworkPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Senior Dog Bloodwork — What Each Test Finds', subtitle: 'Annual bloodwork for dogs over 7 is not a routine checkbox — it is an early warning system for the most common conditions affecting aging dogs. Understanding what each test measures helps owners make sense of results and participate more meaningfully in their dog\'s care decisions.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Senior Bloodwork', href: '/health/senior-bloodwork-guide' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Senior Dog Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
          { title: 'Find a Specialist', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <RelatedLinks title="Related Guides" links={[{ label: 'Senior Dog Care', href: '/health/senior-pet-care' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Find a Specialist', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-bloodwork" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the senior-dog bloodwork-visit checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Senior-dog bloodwork-visit checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the visit-prep notes — a letter-size
              expanding file organizer so serial CBC,
              chemistry, and SDMA printouts stay in date
              order, a sterile urine specimen cup so a
              first-morning free-catch sample can travel
              with the dog when the clinic asks for a
              home urinalysis, and a 12-hour mechanical
              kitchen timer so the pre-chemistry food
              hold is a set window instead of a guessed
              overnight skip. Educational checklist, not
              a diagnosis, not a lab interpretation, and
              not a substitute for the veterinarian who
              ordered the panel. Medical-records binders,
              vaccination record books, weight-log books,
              field notebooks, fecal-sample kits,
              leak-proof specimen bags, one-minute
              kitchen timers, handheld stopwatches,
              glucometers, and Rx stay on other pages.
              No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Senior-dog bloodwork-visit checklist"
              subtitle="Email the expanding-file, urine-cup, and 12-hour-timer notes. No spam."
              ctaText="Email my senior-dog bloodwork-visit checklist"
              source="health-senior-bloodwork-guide-under-hero"
            />
          </div>

          <h2>Complete Blood Count (CBC)</h2>
          <p>The CBC evaluates the cellular components of blood — the cells that carry oxygen, fight infection, and enable clotting. Key values:</p>
          <p><strong>Red blood cells (RBC) and hematocrit (HCT/PCV):</strong> Anemia (low RBC/HCT) in a senior dog has multiple causes — chronic disease, blood loss, bone marrow disease, immune-mediated destruction. The CBC&apos;s red cell indices (MCV, MCH, MCHC) help characterize the type of anemia and guide diagnosis. Erythrocytosis (elevated RBC) is less common but can indicate dehydration or polycythemia vera.</p>
          <p><strong>White blood cells (WBC) and differential:</strong> Elevated WBC (leukocytosis) indicates infection, inflammation, or — in some cases — leukemia. The differential breaks WBC into neutrophils, lymphocytes, monocytes, eosinophils, and basophils — each cell type elevation suggests different causes. A &quot;stress leukogram&quot; (elevated neutrophils with low lymphocytes) is a common normal finding in stressed or unwell dogs that can be misinterpreted without clinical context.</p>
          <p><strong>Platelets:</strong> Required for clot formation. Low platelets (thrombocytopenia) can cause bruising, bleeding, or petechiae (tiny bruises). Immune-mediated thrombocytopenia (ITP), certain tick-borne diseases (Ehrlichia), and bone marrow disease all cause low platelets.</p>

          <h2>Chemistry Panel — Organ Function</h2>
          <p><strong>BUN (Blood Urea Nitrogen) and Creatinine:</strong> Products of protein metabolism and muscle breakdown, respectively, excreted by the kidneys. Both elevated: suggests kidney disease or dehydration (pre-renal azotemia — reduced blood flow to kidneys). BUN elevated with normal creatinine: may indicate high protein diet, GI bleeding, or dehydration. Creatinine alone is less sensitive — rises only when 75% of kidney function is lost. SDMA (see below) detects kidney disease earlier.</p>
          <p><strong>ALT (Alanine Aminotransferase):</strong> Liver cell enzyme — elevated when hepatocytes are damaged. Elevated ALT indicates liver inflammation, infection, toxin exposure, or chronic liver disease. The degree of elevation does not correlate precisely with disease severity.</p>
          <p><strong>ALP (Alkaline Phosphatase):</strong> Produced by liver, bone, intestine, and adrenal cortex. Dramatically elevated in Cushing&apos;s disease (steroid-induced ALP) — one of the most common findings in canine hyperadrenocorticism. Also elevated with biliary disease and some liver conditions. Requires clinical context for interpretation.</p>
          <p><strong>Total Protein and Albumin:</strong> Albumin is produced by the liver and lost through the gut (protein-losing enteropathy) or kidneys (protein-losing nephropathy). Low albumin causes body cavity effusion (fluid accumulation) and indicates significant disease.</p>
          <p><strong>Glucose:</strong> Elevated fasting glucose suggests diabetes mellitus. Low glucose (hypoglycemia) can indicate insulinoma (insulin-producing pancreatic tumor), sepsis, or Addison&apos;s disease. A 12-hour mechanical kitchen timer is how the overnight food hold becomes a set window instead of a guessed skip — water typically stays available, and the clinic sets the exact fast. It is not a one-minute kitchen timer, not a handheld stopwatch, and not a glucometer. It does not diagnose diabetes and it does not replace the fasting instructions the veterinarian gives for this draw.</p>
          <p><strong>Calcium:</strong> Hypercalcemia in dogs has a differential dominated by malignancy (lymphoma, apocrine gland anal sac adenocarcinoma, multiple myeloma) — an elevated calcium in a senior dog warrants cancer investigation. Also elevated with hyperparathyroidism and Addison&apos;s disease.</p>

          <h2>SDMA — The Early Kidney Marker</h2>
          <p>Symmetric dimethylarginine (SDMA) is a newer kidney function marker included in most modern chemistry panels. SDMA rises when approximately 25% of kidney function is lost — compared to creatinine, which rises only when 75% is lost. This makes SDMA a significantly earlier indicator of chronic kidney disease (CKD), allowing dietary intervention and monitoring to begin years before the dog would otherwise show clinical signs. For senior dogs, a rising SDMA over multiple blood panels — even if still within the normal range — is a meaningful signal worth tracking. A letter-size expanding file organizer is how those serial CBC, chemistry, and SDMA printouts stay in date order so the next visit can be compared to the last, not reconstructed from memory. It is not a pet medical-records binder, not a vaccination record book, and not a weight-log book. It does not interpret the panel and it does not replace the veterinarian who reviews the trend.</p>

          <h2>Thyroid (T4)</h2>
          <p>Total T4 (thyroxine) screens for hypothyroidism — underactive thyroid. Low T4 in a dog with appropriate clinical signs (weight gain, lethargy, skin and coat changes, cold intolerance) suggests hypothyroidism. Hypothyroidism is common in middle-aged to older dogs and responds well to levothyroxine supplementation. Free T4 by equilibrium dialysis (fT4ed) is more specific and less affected by concurrent illness — used for confirmation when TT4 is borderline or ambiguous.</p>

          <h2>Urinalysis — What the Urine Tells You</h2>
          <p><strong>Urine specific gravity (USG):</strong> Measures the kidney&apos;s ability to concentrate urine. Normal dog: USG 1.025–1.040. Isosthenuria (USG 1.007–1.013 — urine dilute as plasma) in a senior dog is a significant finding suggesting reduced renal concentrating ability — often the first sign of CKD detectable on urinalysis, before bloodwork abnormalities appear.</p>
          <p><strong>Protein in urine (proteinuria):</strong> Small amounts are normal. Significant proteinuria (urine protein:creatinine ratio &gt; 0.5) indicates protein loss through damaged glomeruli — glomerular disease, hypertension, or early CKD. Persistent proteinuria in a senior dog warrants further investigation.</p>
          <p><strong>Glucose in urine (glucosuria):</strong> Glucose should not be in urine. Glucosuria indicates either blood glucose above the renal threshold (diabetes) or — in the absence of hyperglycemia — primary renal glucosuria (renal tubular disease).</p>
          <p><strong>Bacteria and white cells:</strong> Urinary tract infection. Culture and sensitivity testing should be performed on any urine showing bacterial growth to guide antibiotic selection — empirical antibiotic treatment without culture misses resistant organisms. When the clinic asks for a home free-catch sample to travel with the dog, a sterile urine specimen cup is that container — a first-morning catch with a lid, not a fecal-sample collection kit, not a leak-proof specimen bag, and not a clinic cystocentesis. It does not replace culture technique the laboratory requires, and it does not treat a UTI.</p>

          <h2 id="kit">Senior-dog bloodwork-visit kit</h2>
          <p>
            Everyday physical supplies that match the
            serial-panel, urinalysis, and fasting-glucose
            copy on this page — a letter-size expanding
            file organizer so CBC, chemistry, and SDMA
            printouts stay in date order, a sterile
            urine specimen cup so a first-morning
            free-catch sample can travel with the dog
            when the clinic asks for a home urinalysis,
            and a 12-hour mechanical kitchen timer so
            the pre-chemistry food hold is a set window.
            These are household visit-prep tools, not
            treatments. They do not interpret labs, they
            do not diagnose CKD or diabetes, they do not
            replace a veterinarian, and they are not a
            ranked product list. Pet medical-records
            binders, vaccination record books, dog
            weight-log books, waterproof field
            notebooks, resting-respiratory-rate
            notebooks, dry-erase monthly calendars,
            fecal-sample collection kits, leak-proof
            specimen bags, equine fecal-sample
            containers, one-minute kitchen timers,
            digital handheld stopwatches, analog
            bathroom scales, digital pet scales,
            kitchen gram scales, senior dog food, joint
            support treats, portion-control food scales,
            and pet glucometers already live on other
            pages. This page does not hop levothyroxine,
            Soloxine, Thyro-Tabs, Hill&apos;s, Royal
            Canin, or other Rx ASINs. This page does
            not hop diagnosis kits that imply treatment.
            This page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (letter-size expanding file organizer /
              sterile urine specimen cup /
              12-hour mechanical kitchen timer).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1069
              wire+small+animal+single+story+cage /
              non+slip+suction+bathtub+mat /
              stainless+steel+small+animal+crock,
              #1068 extra+small+animal+travel+kennel /
              scent+swap+fleece+sleep+pouch /
              portable+small+animal+playpen, #1067
              small+animal+rabies+certificate+holder /
              top+loading+small+animal+carrier /
              fleece+small+animal+bonding+pouch, #1066
              carnivore-care / baby-food / silicone
              dosing syringe, #1059
              adjustable+sliding+dog+food+scoop /
              reusable+dog+food+portion+cups /
              dog+weight+log+book, #1058
              digital+handheld+stopwatch /
              waterproof+field+notebook /
              foam+table+edge+bumper, #1057
              automatic+timed+dog+feeder /
              maze+slow+feed+dog+bowl /
              indoor+dog+house+line, #1056
              disposable+female+dog+diapers /
              inflatable+dog+collar /
              hard+sided+airline+dog+crate,
              pet+medical+records+binder,
              pet+vaccination+record+book,
              fecal+sample+collection+kit,
              leak-proof+specimen+bags,
              one+minute+kitchen+timer,
              senior+dog+food /
              joint+support+dog+treats /
              portion+control+food+scale+dog,
              pet+glucometer.
              Levothyroxine, Soloxine, Thyro-Tabs,
              Hill's, Royal Canin, and Rx ASINs are
              not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the senior-dog bloodwork-visit kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page serial-panel, urinalysis, and
              fasting-glucose copy — a letter-size
              expanding file organizer, a sterile urine
              specimen cup, and a 12-hour mechanical
              kitchen timer. Everyday physical supplies
              only. They are not a ranked product list,
              they are not a lab-interpretation or
              medication hop, they are not a #1069
              single-story-cage / bathtub-mat /
              stainless-crock hop, they are not a #1059
              scoop / portion-cups / weight-log-book
              hop, they are not a #1058 stopwatch /
              field-notebook / table-bumper hop, they
              are not a medical-records-binder /
              vaccination-record-book hop, they are not
              a fecal-sample-kit / leak-proof-bag hop,
              they are not a one-minute-timer /
              glucometer hop, and they do not replace
              a veterinarian. Vets.co earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons
              stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/letter+size+expanding+file+organizer?s=health-senior-bloodwork-guide"
                amazonLabel="Browse letter-size expanding file organizers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/sterile+urine+specimen+cup?s=health-senior-bloodwork-guide"
                amazonLabel="Browse sterile urine specimen cups on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/12+hour+mechanical+kitchen+timer?s=health-senior-bloodwork-guide"
                amazonLabel="Browse 12-hour mechanical kitchen timers on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
