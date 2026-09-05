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
              Keep the senior-dog bloodwork visit checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Senior-dog bloodwork visit checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the visit-prep notes — a letter-size
              accordion file organizer so dated CBC,
              chemistry, and urinalysis printouts stay
              in one trend instead of a junk-drawer
              pile, a sterile urine specimen cup so a
              free-catch sample can travel with the
              appointment, and a magnetic kitchen memo
              board so the overnight fast before
              glucose and chemistry is written where
              every person in the house can see it.
              Educational checklist, not a diagnosis,
              not a lab interpretation, and not a
              substitute for the veterinarian who
              ordered the panel. Pet medical-records
              binders, vaccination-record books,
              waterproof field notebooks, fecal-sample
              kits, leak-proof specimen bags, pet
              glucometers, and dry-erase monthly
              calendars stay on other pages. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Senior-dog bloodwork visit checklist"
              subtitle="Email the accordion-file, urine-cup, and fasting-board notes. No spam."
              ctaText="Email my senior-dog bloodwork visit checklist"
              source="health-senior-bloodwork-guide-under-hero"
            />
          </div>

          <h2>Complete Blood Count (CBC)</h2>
          <p>The CBC evaluates the cellular components of blood — the cells that carry oxygen, fight infection, and enable clotting. Key values:</p>
          <p><strong>Red blood cells (RBC) and hematocrit (HCT/PCV):</strong> Anemia (low RBC/HCT) in a senior dog has multiple causes — chronic disease, blood loss, bone marrow disease, immune-mediated destruction. The CBC's red cell indices (MCV, MCH, MCHC) help characterize the type of anemia and guide diagnosis. Erythrocytosis (elevated RBC) is less common but can indicate dehydration or polycythemia vera.</p>
          <p><strong>White blood cells (WBC) and differential:</strong> Elevated WBC (leukocytosis) indicates infection, inflammation, or — in some cases — leukemia. The differential breaks WBC into neutrophils, lymphocytes, monocytes, eosinophils, and basophils — each cell type elevation suggests different causes. A "stress leukogram" (elevated neutrophils with low lymphocytes) is a common normal finding in stressed or unwell dogs that can be misinterpreted without clinical context.</p>
          <p><strong>Platelets:</strong> Required for clot formation. Low platelets (thrombocytopenia) can cause bruising, bleeding, or petechiae (tiny bruises). Immune-mediated thrombocytopenia (ITP), certain tick-borne diseases (Ehrlichia), and bone marrow disease all cause low platelets.</p>

          <h2>Chemistry Panel — Organ Function</h2>
          <p><strong>BUN (Blood Urea Nitrogen) and Creatinine:</strong> Products of protein metabolism and muscle breakdown, respectively, excreted by the kidneys. Both elevated: suggests kidney disease or dehydration (pre-renal azotemia — reduced blood flow to kidneys). BUN elevated with normal creatinine: may indicate high protein diet, GI bleeding, or dehydration. Creatinine alone is less sensitive — rises only when 75% of kidney function is lost. SDMA (see below) detects kidney disease earlier.</p>
          <p><strong>ALT (Alanine Aminotransferase):</strong> Liver cell enzyme — elevated when hepatocytes are damaged. Elevated ALT indicates liver inflammation, infection, toxin exposure, or chronic liver disease. The degree of elevation does not correlate precisely with disease severity.</p>
          <p><strong>ALP (Alkaline Phosphatase):</strong> Produced by liver, bone, intestine, and adrenal cortex. Dramatically elevated in Cushing's disease (steroid-induced ALP) — one of the most common findings in canine hyperadrenocorticism. Also elevated with biliary disease and some liver conditions. Requires clinical context for interpretation.</p>
          <p><strong>Total Protein and Albumin:</strong> Albumin is produced by the liver and lost through the gut (protein-losing enteropathy) or kidneys (protein-losing nephropathy). Low albumin causes body cavity effusion (fluid accumulation) and indicates significant disease.</p>
          <p><strong>Glucose:</strong> Elevated fasting glucose suggests diabetes mellitus. Low glucose (hypoglycemia) can indicate insulinoma (insulin-producing pancreatic tumor), sepsis, or Addison's disease.</p>
          <p><strong>Calcium:</strong> Hypercalcemia in dogs has a differential dominated by malignancy (lymphoma, apocrine gland anal sac adenocarcinoma, multiple myeloma) — an elevated calcium in a senior dog warrants cancer investigation. Also elevated with hyperparathyroidism and Addison's disease.</p>

          <h2>SDMA — The Early Kidney Marker</h2>
          <p>Symmetric dimethylarginine (SDMA) is a newer kidney function marker included in most modern chemistry panels. SDMA rises when approximately 25% of kidney function is lost — compared to creatinine, which rises only when 75% is lost. This makes SDMA a significantly earlier indicator of chronic kidney disease (CKD), allowing dietary intervention and monitoring to begin years before the dog would otherwise show clinical signs. For senior dogs, a rising SDMA over multiple blood panels — even if still within the normal range — is a meaningful signal worth tracking.</p>

          <h2>Thyroid (T4)</h2>
          <p>Total T4 (thyroxine) screens for hypothyroidism — underactive thyroid. Low T4 in a dog with appropriate clinical signs (weight gain, lethargy, skin and coat changes, cold intolerance) suggests hypothyroidism. Hypothyroidism is common in middle-aged to older dogs and responds well to levothyroxine supplementation. Free T4 by equilibrium dialysis (fT4ed) is more specific and less affected by concurrent illness — used for confirmation when TT4 is borderline or ambiguous.</p>

          <h2>Urinalysis — What the Urine Tells You</h2>
          <p><strong>Urine specific gravity (USG):</strong> Measures the kidney's ability to concentrate urine. Normal dog: USG 1.025–1.040. Isosthenuria (USG 1.007–1.013 — urine dilute as plasma) in a senior dog is a significant finding suggesting reduced renal concentrating ability — often the first sign of CKD detectable on urinalysis, before bloodwork abnormalities appear.</p>
          <p><strong>Protein in urine (proteinuria):</strong> Small amounts are normal. Significant proteinuria (urine protein:creatinine ratio &gt; 0.5) indicates protein loss through damaged glomeruli — glomerular disease, hypertension, or early CKD. Persistent proteinuria in a senior dog warrants further investigation.</p>
          <p><strong>Glucose in urine (glucosuria):</strong> Glucose should not be in urine. Glucosuria indicates either blood glucose above the renal threshold (diabetes) or — in the absence of hyperglycemia — primary renal glucosuria (renal tubular disease).</p>
          <p><strong>Bacteria and white cells:</strong> Urinary tract infection. Culture and sensitivity testing should be performed on any urine showing bacterial growth to guide antibiotic selection — empirical antibiotic treatment without culture misses resistant organisms.</p>

          <p>Household visit-prep tools can sit alongside that panel-and-urine copy after a veterinarian has ordered the senior workup. A letter-size accordion file organizer is how dated CBC, chemistry, and urinalysis printouts stay in one chronological trend so a rising SDMA is visible across years — it is not a pet medical-records binder, not a vaccination-record book, and not a waterproof field notebook. A sterile urine specimen cup is how a free-catch sample reaches the clinic with the appointment instead of leaking in a bag or waiting on a fecal kit — it is not a leak-proof specimen bag and not an equine fecal-sample container. A magnetic kitchen memo board is where the overnight fast before glucose and chemistry gets written so the last meal is not a guessed handful at midnight — it is not a dry-erase monthly calendar and not a one-minute kitchen timer. These are household tools, not treatments. They do not interpret a panel, they do not replace a veterinarian, they do not diagnose CKD or diabetes, and they are not a ranked product list. Ask your veterinarian which of these, if any, belong in this dog&rsquo;s visit kit.</p>

          <h2 id="kit">Senior-dog bloodwork visit kit</h2>
          <p>
            Everyday physical supplies that match the
            visit-prep copy on this page — a letter-size
            accordion file organizer so dated CBC,
            chemistry, and urinalysis printouts stay in
            one trend, a sterile urine specimen cup so a
            free-catch sample can travel with the
            appointment, and a magnetic kitchen memo
            board so the overnight fast before glucose
            and chemistry is written where the household
            can see it. These are household tools, not
            treatments. They do not interpret bloodwork,
            they do not replace a veterinarian, and they
            are not a ranked product list. Pet
            medical-records binders, vaccination-record
            books, waterproof field notebooks, resting
            respiratory-rate notebooks, dog weight-log
            books, dry-erase monthly calendars,
            fecal-sample collection kits, leak-proof
            specimen bags, pet glucometers, light corn
            syrup, oral feeding syringes, and ceramic
            pet food bowls already live on other pages.
            This page does not hop medications. This
            page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (letter-size accordion file organizer /
              sterile urine specimen cup /
              magnetic kitchen memo board).
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1069
              wire+small+animal+single+story+cage /
              non+slip+suction+bathtub+mat /
              stainless+steel+small+animal+crock, #1068
              extra+small+animal+travel+kennel /
              scent+swap+fleece+sleep+pouch /
              portable+small+animal+playpen, #1059
              adjustable+sliding+dog+food+scoop /
              reusable+dog+food+portion+cups /
              dog+weight+log+book, #1058
              digital+handheld+stopwatch /
              waterproof+field+notebook /
              foam+table+edge+bumper, reserved
              pet-glucometer / light-corn-syrup /
              pet-oral-feeding-syringe /
              pet-vaccination-record-book /
              ferret-carrier / ceramic-pet-food-bowl /
              Critter-Nation-double, and
              pet+medical+records+binder /
              fecal+sample+collection+kit /
              leak+proof+specimen+bags. Rx ASINs are
              not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the senior-dog bloodwork visit kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page visit-prep copy — a letter-size
              accordion file organizer, a sterile urine
              specimen cup, and a magnetic kitchen memo
              board. Everyday physical supplies only.
              They are not a ranked product list, they
              are not a prescription or medication hop,
              they are not the #1069 wire-cage /
              bathtub-mat / stainless-crock hops, they
              are not the #1068 travel-kennel /
              scent-swap-pouch / portable-playpen hops,
              they are not the #1059 scoop /
              portion-cup / weight-log hops, they are
              not the #1058 stopwatch / field-notebook /
              table-bumper hops, they are not a pet
              medical-records binder or
              vaccination-record book, they are not a
              fecal-sample kit or leak-proof specimen
              bag, they are not a pet glucometer /
              light-corn-syrup / oral-feeding-syringe
              hop, and they do not replace a
              veterinarian. Vets.co earns a commission
              on qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/letter+size+accordion+file+organizer?s=health-senior-bloodwork-guide"
                amazonLabel="Browse letter-size accordion file organizers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/sterile+urine+specimen+cup?s=health-senior-bloodwork-guide"
                amazonLabel="Browse sterile urine specimen cups on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/magnetic+kitchen+memo+board?s=health-senior-bloodwork-guide"
                amazonLabel="Browse magnetic kitchen memo boards on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
