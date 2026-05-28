import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Leptospirosis in Dogs — Zoonotic, Vaccine Recommended | Vets.co',
  description: "Leptospirosis is a zoonotic bacterial disease from wildlife urine in water. Serovars, signs, MAT testing, doxycycline, and the 4-serovar vaccine.",
  path: '/health/leptospirosis',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Leptospirosis in Dogs',
  description: 'Serovars, signs, MAT/PCR diagnosis, doxycycline treatment, and vaccination for canine leptospirosis.',
  url: 'https://vets.co/health/leptospirosis',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Leptospirosis in Dogs',
  description: 'Leptospira bacterial infection — serovars, clinical stages, diagnosis, treatment, and vaccination.',
  url: 'https://vets.co/health/leptospirosis',
  authorName: 'Vets.co Editorial',
  lastReviewed: '2025-05-01',
})

const combined = combineSchemas(schema, med)

const FAQS = [
  {
    question: 'Can humans catch leptospirosis from their dog?',
    answer:
      "Yes. Leptospirosis is one of the most widespread zoonotic diseases in the world, per the CDC. An infected dog sheds Leptospira in its urine for weeks during illness and sometimes after clinical recovery. People can be infected through contact with contaminated urine — handling the dog, cleaning indoor urine, or contact with bedding. Household members of a diagnosed dog should wear gloves when cleaning up urine, disinfect surfaces with dilute bleach, wash hands thoroughly, and tell their physician about the exposure if they develop flu-like illness (fever, headache, muscle pain) in the days to weeks after.",
  },
  {
    question: 'My indoor dog never goes near ponds — does it still need the lepto vaccine?',
    answer:
      "The AAHA 2022 Canine Vaccination Guidelines recommend leptospirosis as a non-core but generally recommended vaccine for most dogs, on the basis that essentially no dog in the continental US has zero exposure risk. Suburban and urban dogs encounter Leptospira in puddles, lawns, and storm drainage where wildlife (raccoons, rats, opossums) have urinated. Discuss your dog's specific lifestyle and local prevalence with your veterinarian; the decision is risk-based, not a flat yes or no.",
  },
  {
    question: 'Is the leptospirosis vaccine dangerous?',
    answer:
      "Modern subunit and updated bacterin lepto vaccines have adverse-event rates broadly comparable to other canine non-core vaccines per published surveillance and AAHA review. Earlier (pre-late-1990s) vaccines had a higher reaction reputation, which persists in some online discussion. Small-breed dogs and dogs with prior vaccine reactions warrant premedication and antigen spacing. For at-risk dogs, current AAHA guidance considers the risk of severe lepto — a disease that can require dialysis and is sometimes fatal — to outweigh the reaction risk.",
  },
  {
    question: 'Which serovars does the standard vaccine cover, and what about the others?',
    answer:
      "The current 4-serovar (L4) vaccine covers Canicola, Icterohaemorrhagiae, Grippotyphosa, and Pomona — the four most clinically important serovars in North American dogs. Older 2-serovar (L2) vaccines (Canicola + Icterohaemorrhagiae) are no longer considered adequate by AAHA because they miss Grippotyphosa and Pomona, which are now common in clinical disease. Serovar Bratislava is not in most US vaccines; its clinical role in US dogs is debated. Cross-protection between serovars is limited, so vaccine breadth matters.",
  },
  {
    question: 'How long after exposure do signs appear?',
    answer:
      "The incubation period is typically 4–12 days. Dogs with the acute renal form usually appear suddenly and severely ill — vomiting, lethargy, increased thirst, and reluctance to move within 24–48 hours of onset. Subclinical infections (no signs but seroconversion) are common and only detected through testing.",
  },
  {
    question: 'When should I go to the ER instead of waiting for my regular vet?',
    answer:
      "Go to an emergency hospital for persistent vomiting, inability to keep water down, weakness or collapse, jaundice (yellow gums or eye whites), no urine output for 12+ hours, or significant abdominal pain. Severe leptospirosis is an organ-failure emergency — IV fluid support, electrolyte management, and in severe cases hemodialysis (referral centers only) are time-sensitive. If signs are milder and your regular vet can see the dog within hours, primary care is reasonable — but flag your lepto concern so they prioritize urinalysis and kidney values.",
  },
]

export default function LeptospirosisPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="vets-co"
        hero={{
          title: 'Leptospirosis in Dogs',
          subtitle:
            'Leptospirosis is a bacterial disease caused by Leptospira spirochetes — transmitted through urine of infected wildlife (raccoons, deer, opossums, rodents) contaminating standing water, soil, and puddles. It can cause acute kidney and liver failure and is zoonotic — transmissible to humans from infected dog urine. This guide covers serovars, clinical stages, MAT/PCR diagnosis, doxycycline-based treatment, and the AAHA position on vaccination.',
          category: 'Veterinary Guide',
          authorName: 'Vets.co Editorial',
          authorAvatar: '🐾',
          publishedAt: 'May 2025',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Health', href: '/health' },
          { name: 'Leptospirosis', href: '/health/leptospirosis' },
        ]}
        sidebar={
          <>
            <div className="bg-brand-danger/8 border border-brand-danger/30 rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">ER — Same Day</div>
              {[
                "Persistent vomiting, can't keep water down",
                "Weakness, collapse, or won't stand",
                'Jaundice — yellow gums or eye whites',
                'No urine output for 12+ hours',
                'Known exposure + sudden severe illness',
              ].map((s) => (
                <div key={s} className="py-1 text-xs text-brand-text-mid border-b border-brand-danger/15 last:border-0 flex gap-2">
                  <span className="text-brand-danger font-bold">→</span>
                  {s}
                </div>
              ))}
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">L4 Vaccine Serovars</div>
              {[
                ['Canicola', 'Renal form, dog-adapted'],
                ['Icterohaemorrhagiae', 'Hepatic form, rat reservoir'],
                ['Grippotyphosa', 'Renal, raccoon reservoir'],
                ['Pomona', 'Renal + hepatic, livestock/wildlife'],
              ].map(([s, d]) => (
                <div key={s} className="py-2 border-b border-brand-border last:border-0">
                  <div className="text-xs font-bold text-brand-dark">{s}</div>
                  <div className="text-2xs text-brand-text-light">{d}</div>
                </div>
              ))}
            </div>
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' },
                { label: 'Dog Vaccinations Guide', href: '/health/dog-vaccinations-guide' },
                { label: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases' },
                { label: 'Emergency Signs', href: '/health/emergency-signs' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="vets-co"
              title="Free Pet Health Tips"
              subtitle="Practical guidance weekly."
              source="health-lepto"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2>Transmission and Geographic Risk</h2>
          <p>Leptospira bacteria survive in warm, moist environments — standing water, muddy soil, and waterways contaminated with infected wildlife urine. Dogs are exposed through contact with contaminated water (drinking from puddles, swimming in ponds or streams), contact with infected urine directly, or contact with contaminated soil. The bacteria enter through mucous membranes, skin abrasions, or the GI tract. Lepto is not only a rural problem — urban and suburban dogs encounter raccoons, opossums, and rodents that shed Leptospira in their urine in parks, yards, and storm drainage systems.</p>
          <p>Geographic risk is highest in warm, humid climates (Southeast US, Pacific Northwest, Hawaii) and following flooding events that disperse contaminated water widely. The CDC has noted a rising trend of canine leptospirosis in suburban areas where wildlife and dogs overlap. Risk is not zero anywhere in the continental US — it is variable. Dogs with outdoor access, dogs that frequent natural water sources, hunting dogs, farm dogs, and dogs in areas with high wildlife activity have the highest exposure.</p>

          <h2>Serovars — What Each One Tends to Cause</h2>
          <p>Leptospira interrogans has dozens of serovars; only a handful are clinically important in North American dogs. Serovar identity loosely predicts the dominant organ system affected, the wildlife reservoir in your area, and whether your dog&apos;s vaccine covers it. Cross-protection between serovars is limited.</p>
          <ul>
            <li><strong>Canicola</strong> — historically the dog-adapted serovar; dogs were the primary reservoir. Tends to produce the renal (kidney) form. Routine vaccination has reduced incidence in vaccinated populations.</li>
            <li><strong>Icterohaemorrhagiae</strong> — rat reservoir. Classically associated with the hepatic (liver) form and jaundice; severe cases present with both liver and kidney involvement and bleeding tendency.</li>
            <li><strong>Grippotyphosa</strong> — raccoon, skunk, and small-mammal reservoirs. Has become one of the most common serovars isolated in clinical disease in the past two decades, paralleling raccoon expansion into suburbs. Acute renal disease predominates.</li>
            <li><strong>Pomona</strong> — livestock and wildlife (skunks, opossums, deer) reservoirs. Causes both renal and hepatic disease. Important in farm dogs and dogs with rural exposure.</li>
            <li><strong>Bratislava</strong> — hedgehog and rodent reservoirs in Europe; less well-characterized in US dogs. Currently not included in most US canine vaccines.</li>
          </ul>

          <h2>Clinical Signs by Stage</h2>
          <p>Leptospirosis presents on a spectrum from subclinical to fulminant multi-organ failure. Stage depends on serovar, infectious dose, and how early in the course the dog is examined.</p>
          <p><strong>Subclinical / mild:</strong> The dog is infected but shows no signs, or only transient lethargy and mild fever for a few days. The dog clears the bacteremia, develops antibody titers, and may shed Leptospira in its urine for weeks afterward — posing zoonotic risk even though the dog looks healthy.</p>
          <p><strong>Acute renal form (most common clinical presentation):</strong> Sudden onset of vomiting, lethargy, anorexia, increased thirst and urination — followed in severe cases by reduced or absent urine output as acute kidney injury (AKI) sets in. Muscle pain is common (stiff gait, reluctance to jump). Bloodwork shows elevated BUN, creatinine, and phosphorus; urinalysis shows isosthenuria, glucosuria, and proteinuria. The most severe cases progress to anuric renal failure requiring hemodialysis.</p>
          <p><strong>Hepatic form:</strong> Jaundice, elevated liver enzymes (ALT, AST, ALP, bilirubin), vomiting, anorexia. Severe cases develop coagulopathy with petechiae or GI bleeding. Many dogs have a mixed renal-hepatic presentation rather than pure forms.</p>
          <p><strong>Pulmonary hemorrhage syndrome:</strong> A less common but lethal presentation where Leptospira-induced vasculitis causes bleeding into the lungs — respiratory distress and hemoptysis. High mortality even with aggressive care.</p>
          <p><strong>Late chronic disease:</strong> Survivors of severe acute lepto can be left with chronic kidney disease, persistent proteinuria, or chronic hepatitis. Long-term monitoring of kidney values, urine protein:creatinine ratio, and blood pressure is part of follow-up.</p>

          <h2>Diagnosis — MAT, PCR, and Urine Antigen</h2>
          <p>No single test reliably catches every case. Veterinarians combine signalment, exposure history, clinical signs, kidney and liver values, and pathogen-specific tests. Each pathogen test catches a different window of infection.</p>
          <p><strong>Microscopic Agglutination Test (MAT):</strong> Measures antibody titers against a panel of serovars in the dog&apos;s serum — the classic standard. Drawbacks: days for results (reference-lab send-out), can be negative early before seroconversion, and vaccinated dogs have baseline titers that complicate interpretation. The convention is a four-fold rise between an acute and convalescent (2–4 weeks later) sample — which does not help a critically ill dog in the moment. The highest-titer serovar is suggestive (not diagnostic) of infecting serovar.</p>
          <p><strong>PCR (whole blood and urine):</strong> Detects Leptospira DNA directly. Blood PCR is most useful in the first ~10 days while the dog is bacteremic. Urine PCR becomes useful once the bacteria localize to the kidneys and are shed in urine, typically after the first week. PCR turnaround is faster than MAT and can be positive before antibodies develop — which is why running blood and urine PCR alongside MAT on initial presentation is recommended per ACVIM consensus. PCR can miss cases if the dog has cleared bacteremia or received antibiotics before sampling.</p>
          <p><strong>In-clinic urine/serum antigen SNAP tests</strong> (e.g., the Zoetis WITNESS Lepto test) detect Leptospira-specific antibodies and give results in roughly 10 minutes — useful as a rapid rule-in for a sick dog with consistent signs, but a negative does not rule out very early infection.</p>
          <p>In practice: a critically ill dog with consistent signs is started on doxycycline (or IV ampicillin if not tolerating oral medication) and IV fluid support empirically while lab work returns. Early antibiotic coverage also limits zoonotic shedding.</p>

          <h2>Treatment Protocol</h2>
          <p><strong>Doxycycline first-line.</strong> Doxycycline 5 mg/kg PO BID (or 10 mg/kg PO SID) for two weeks is the ACVIM-recommended regimen. Doxycycline does two things penicillins do not: it kills Leptospira in the kidneys and clears the renal carrier state, ending urinary shedding. For dogs unable to tolerate oral medication initially (vomiting, anorexia), IV ampicillin or penicillin G controls bacteremia, then transitioned to doxycycline once oral is tolerated. The two-week course is required — shortening risks failure to clear the renal carrier state.</p>
          <p><strong>IV fluid therapy.</strong> The cornerstone of supportive care — supporting renal perfusion, correcting dehydration, managing electrolyte derangements (hyperkalemia is dangerous), and producing urine. Diuretics are added if the dog remains oliguric despite adequate fluid loading.</p>
          <p><strong>Hemodialysis when AKI is severe.</strong> Dogs with anuric or severely oliguric renal failure, persistent hyperkalemia, severe uremia, or fluid overload are candidates for hemodialysis or continuous renal replacement therapy. Dialysis is a bridge — it buys time for kidneys to recover. Lepto is one of the AKI causes with the best dialysis outcomes because the underlying injury is reversible if the dog survives the acute phase. Dialysis is available only at specialty referral centers.</p>
          <p><strong>Supportive care.</strong> Anti-emetics (maropitant, ondansetron); gastric protectants for uremic gastritis; nutritional support; transfusions for the bleeding subset; oxygen for the rare pulmonary hemorrhage cases. Hospitalization of moderate-to-severe cases is typically 4–10 days. Staff and household members wear gloves; urine is biohazard; cages disinfected with dilute bleach. Doxycycline ends urinary shedding quickly, but precautions continue through the course.</p>

          <h2>Prevention — Vaccines, AAHA Position, and Risk Discussion</h2>
          <p><strong>The current 4-serovar (L4) vaccine</strong> covers Canicola, Icterohaemorrhagiae, Grippotyphosa, and Pomona — the four most clinically prevalent serovars in North American dogs. Initial series: two doses 2–4 weeks apart, then annual boosters. Immunity wanes faster than core vaccines, so annual boosting is essential — a dog vaccinated three years ago is not protected.</p>
          <p><strong>Older 2-serovar (L2) vaccines</strong> (Canicola + Icterohaemorrhagiae only) are no longer considered adequate by AAHA because they miss Grippotyphosa and Pomona, which now account for a large share of clinical cases. If your dog has historically received L2, ask whether the practice has transitioned to L4.</p>
          <p><strong>The vaccine controversy.</strong> Earlier-generation lepto vaccines (pre-late-1990s) had a reputation for higher adverse-reaction rates than other canine vaccines, particularly in small breeds. Modern subunit and updated bacterin vaccines have substantially improved reaction profiles, with adverse-event rates broadly comparable to other non-core canine vaccines. The AAHA 2022 Canine Vaccination Guidelines recommend leptospirosis vaccination for most dogs in North America on a risk-based assessment, citing both the severity of disease and the wide geographic distribution of exposure risk. The AVMA has aligned with the AAHA position. Small-breed dogs and dogs with prior reactions warrant premedication and antigen spacing.</p>
          <p><strong>Non-vaccine prevention.</strong> Prevent access to standing water and puddles where wildlife congregate; secure trash and food to reduce rodent and raccoon activity; do not let dogs drink from unknown water sources; manage rodent populations in barns and outbuildings. These measures reduce exposure but do not replace vaccination for at-risk dogs.</p>

          <h2>High-Risk Geographies and Lifestyles</h2>
          <p>Highest exposure: dogs in the Southeast US, Pacific Northwest, Hawaii, and the Gulf Coast; dogs in flood-prone areas after storm events; hunting and field-trial dogs; farm and ranch dogs; dogs that swim in natural water or drink from puddles on walks; suburban dogs in neighborhoods with significant raccoon, opossum, or rat activity. Lower (but not zero) exposure: small indoor-only dogs that only potty in fenced, sanitized backyards. Even those dogs encounter Leptospira when carried into urban parks or visited by wildlife.</p>

          <h2>When to Go to the ER vs Primary Care</h2>
          <p><strong>Emergency hospital — same day.</strong> Persistent vomiting and inability to keep water down, weakness or collapse, jaundice, no urine output for 12+ hours, signs of abdominal pain, respiratory distress, or a dog with known wildlife-water exposure who has suddenly become severely lethargic. Severe leptospirosis is an organ-failure emergency where hours matter — early fluid resuscitation protects the kidneys.</p>
          <p><strong>Primary care, same or next day.</strong> Mild lethargy, mild appetite drop, low-grade fever, or a history of recent exposure (swimming in a pond, drinking from a puddle, contact with wildlife urine) without severe systemic signs. Tell the practice you are concerned about leptospirosis so they prioritize chemistry, urinalysis, and the appropriate testing rather than working through differential causes one at a time.</p>
          <p><strong>Family medicine for humans.</strong> If you have been exposed to an infected dog&apos;s urine and develop fever, headache, severe muscle aches, or jaundice in the following 1–4 weeks, tell your physician about the exposure. Human leptospirosis is treatable with doxycycline when caught early; the CDC has clinical guidance for human cases.</p>

          <h2>Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
