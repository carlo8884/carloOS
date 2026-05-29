// Canine senior conditions — partial 2 (5 conditions)

export const CANINE_CONDITIONS_2 = {
  'hypothyroidism-dogs': {
    slug: 'hypothyroidism-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Hypothyroidism is the most common endocrine disease of dogs. In senior dogs, the classic constellation of weight gain despite reduced appetite, hair loss without itching, exercise intolerance, and cold intolerance is highly suggestive — and once-daily levothyroxine reliably restores quality of life within weeks.',
    overview: [
      'Canine hypothyroidism is caused by progressive destruction of the thyroid gland, most often by lymphocytic thyroiditis (an autoimmune process) or by idiopathic thyroid atrophy. Both lead to a deficiency of circulating T4 and T3 hormones and a generalized slowing of metabolism.',
      'The disease is most often diagnosed in middle-aged to older dogs of medium-to-large breeds. Predisposed breeds include Golden Retrievers, Doberman Pinschers, Cocker Spaniels, and Irish Setters. Concurrent endocrine disease (especially Cushing’s) and severe non-thyroidal illness can artificially lower thyroid hormones and complicate diagnosis — a topic owners should discuss with their veterinarian.',
      'Diagnosis is based on consistent clinical signs plus a full thyroid panel (total T4, free T4 by equilibrium dialysis, and TSH). A low total T4 alone is not diagnostic in a sick or chronically ill dog. Free T4 ED with concurrently elevated TSH is the most specific combination.',
    ],
    clinicalSigns: [
      'Weight gain despite a normal or reduced appetite',
      'Lethargy, decreased exercise tolerance, sleeping more',
      'Symmetric (non-itchy) hair loss on the flanks, tail ("rat tail"), and bridge of the nose',
      'Dry, brittle coat; recurring skin and ear infections',
      'Cold intolerance — seeking heat sources, shivering at moderate temperatures',
      'Facial nerve paralysis or vestibular signs in some chronic cases',
    ],
    redFlags: [
      'Acute collapse, hypothermia, and slow heart rate ("myxedema coma") — a rare but life-threatening emergency',
      'Sudden facial droop or head tilt in a known hypothyroid dog warrants veterinary evaluation',
      'Heart murmur, atrial fibrillation, or signs of CHF developing alongside hypothyroid signs',
    ],
    treatment: [
      'Levothyroxine is the standard therapy. Common veterinary brands include Soloxine and Thyro-Tabs. Initial dosing is approximately 0.02 mg/kg every 12 hours, with dose adjustments based on a recheck T4 level performed 4–6 hours after a dose, typically 4–6 weeks after starting.',
      'Most dogs are eventually transitioned to once-daily dosing, though some require twice-daily dosing to maintain steady control. Generic human levothyroxine can be used but bioavailability is variable; staying with a single product long-term is preferred.',
      'Improvement is rapid: energy and attitude often return within 1–2 weeks, while skin and coat changes resolve over 6–12 weeks. Owners are encouraged to take photos before therapy begins to track improvement.',
    ],
    lifestyleChanges: [
      'Give the medication on an empty stomach when possible; calcium and high-fat meals can reduce absorption.',
      'Maintain consistent timing of doses and rechecks; T4 levels are checked annually once stable.',
      'Avoid soybean-heavy diets, which interfere with thyroid hormone absorption.',
      'Recheck thyroid values after any major medication change — corticosteroids in particular alter thyroid levels.',
      'Keep an organized list of medications and supplements; many interact subtly with thyroid replacement.',
    ],
    prognosis: [
      'With appropriate levothyroxine therapy, the prognosis for canine hypothyroidism is excellent. Most dogs return to normal activity and weight, regrow lost coat, and live a normal lifespan.',
      'Treatment is lifelong. Suddenly stopping levothyroxine produces a return of clinical signs within weeks. The condition is well-tolerated and inexpensive to manage long-term, making it one of the most rewarding senior-dog diagnoses to treat.',
    ],
    recommendedProducts: [
      {
        name: 'Thyro-Tabs (Levothyroxine)',
        description:
          'Veterinary-labeled levothyroxine — consistent bioavailability, dosed twice daily initially.',
        vendor: 'chewyrx',
        path: '/rx/thyro-tabs',
      },
      {
        name: 'Soloxine (Levothyroxine)',
        description:
          'Long-established veterinary brand of levothyroxine.',
        vendor: 'chewyrx',
        path: '/rx/soloxine',
      },
      {
        name: 'Welactin Omega-3 Fish Oil',
        description:
          'Omega-3 supplement for skin/coat support during the regrowth phase of treatment.',
        vendor: 'chewy',
        path: '/b/welactin',
      },
    ],
    faqs: [
      {
        question: 'Will my dog need bloodwork forever?',
        answer:
          'Yes, but only periodically. After initial dose adjustments, most dogs are checked once a year as part of routine senior bloodwork.',
      },
      {
        question: 'Can the dose change over time?',
        answer:
          'Yes. As the dog ages or changes weight, the dose may need to be adjusted. Any new medication or comorbidity is also a reason to recheck T4.',
      },
      {
        question: 'Is hypothyroidism a behavior diagnosis?',
        answer:
          'Severe hypothyroidism can produce lethargy that looks like depression, but behavior changes alone are usually not enough to diagnose. Reliable diagnosis requires consistent clinical signs plus a full thyroid panel.',
      },
      {
        question: 'Are there generic alternatives to brand-name levothyroxine?',
        answer:
          'Yes — both human generics and veterinary generics exist. Bioavailability can vary, so once a brand is producing good control, it is usually best to stay on that brand long-term.',
      },
    ],
    citations: [
      {
        label: 'AAHA Endocrine Disease — Hypothyroidism',
        url: 'https://www.aaha.org/aaha-guidelines/',
      },
      {
        label: 'VCA Animal Hospitals — Hypothyroidism in Dogs',
        url: 'https://vcahospitals.com/know-your-pet/hypothyroidism-in-dogs',
      },
      {
        label: 'Merck Veterinary Manual — Hypothyroidism in Dogs',
        url: 'https://www.merckvetmanual.com/endocrine-system/the-thyroid-gland/hypothyroidism-in-animals',
      },
    ],
  },

  'cushings-disease-dogs': {
    slug: 'cushings-disease-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Hyperadrenocorticism (HAC, Cushing’s disease) is a chronic over-production of cortisol. It is most often caused by a small benign pituitary tumor and is one of the most common endocrine diagnoses in senior dogs. The clinical picture — pot-bellied appearance, thinning coat, ravenous appetite, and excessive drinking — is highly characteristic.',
    overview: [
      'About 80–85% of canine Cushing’s cases are pituitary-dependent (PDH), driven by a benign microadenoma that signals the adrenal glands to over-produce cortisol. The remaining 15–20% are caused by an adrenal tumor (functional adrenocortical tumor). Iatrogenic Cushing’s, caused by chronic exogenous steroid administration, is a third category that resolves with steroid withdrawal.',
      'The disease is most common in middle-aged to senior small-breed dogs, especially Miniature Poodles, Dachshunds, Boxers, and Boston Terriers. Many owners describe the gradual onset of an "older dog look" — pot belly, thin skin, hair loss — that develops over many months.',
      'Diagnosis is famously expensive and time-consuming. Screening uses the urine cortisol:creatinine ratio (sensitive but not specific). Confirmation typically requires a low-dose dexamethasone suppression test (LDDST) or ACTH stimulation, plus abdominal ultrasound to differentiate PDH from an adrenal tumor.',
    ],
    clinicalSigns: [
      'Marked polyuria and polydipsia (the most reliable early sign)',
      'Insatiable appetite, food stealing, garbage raiding',
      'Pot-bellied appearance and muscle wasting',
      'Symmetric truncal hair loss, thin skin with visible vessels',
      'Recurrent skin and urinary tract infections',
      'Excessive panting, exercise intolerance',
    ],
    redFlags: [
      'Sudden collapse, severe weakness, or rapid breathing in a Cushing’s dog on trilostane — possible iatrogenic Addisonian crisis; same-day emergency',
      'Acute neurologic signs (seizures, head pressing, ataxia) — possible expanding pituitary mass',
      'Pulmonary thromboembolism in a Cushing’s dog presents as sudden severe difficulty breathing',
    ],
    treatment: [
      'Trilostane (Vetoryl) is the most commonly used treatment for both PDH and adrenal Cushing’s. Trilostane inhibits adrenal cortisol synthesis; doses are titrated based on ACTH stimulation tests or pre-pill cortisol measurements. Most dogs are dosed once or twice daily.',
      'Mitotane (Lysodren) selectively destroys cortisol-producing adrenal tissue. It is less commonly used today but remains an option in dogs that do not tolerate trilostane.',
      'Adrenal tumors that are not invasive and have not metastasized may be treated surgically by adrenalectomy at a referral hospital. This is a curative option in selected cases.',
      'Regardless of medication, periodic monitoring is essential. ACTH stimulation tests are typically performed 10–14 days after starting therapy, again at 30 days, and then every 3–6 months. Pre-pill cortisol monitoring has become an increasingly common alternative.',
    ],
    lifestyleChanges: [
      'Ensure constant water access — Cushing’s dogs drink large volumes and dehydrate quickly without it.',
      'Avoid corticosteroid medications and corticosteroid skin sprays/shampoos, which complicate diagnosis and management.',
      'Monitor for urinary tract infections proactively — many Cushing’s dogs have asymptomatic UTIs.',
      'Provide soft bedding; thin skin and muscle wasting make pressure sores more likely.',
      'Schedule rechecks faithfully. Trilostane requires periodic dose adjustment based on monitoring.',
    ],
    prognosis: [
      'With well-managed trilostane therapy, many dogs with pituitary-dependent Cushing’s live 2–4 additional years of good-quality life. Adrenal tumor cases vary depending on tumor type and surgical candidacy.',
      'The most common cause of death in treated Cushing’s dogs is unrelated senior disease. Treatment failure usually traces to inconsistent monitoring or to inadequately addressed comorbidities such as diabetes or hypertension.',
    ],
    recommendedProducts: [
      {
        name: 'Vetoryl (Trilostane)',
        description:
          'FDA-approved trilostane capsules — the first-line therapy for both pituitary-dependent and adrenal Cushing’s in dogs.',
        vendor: 'chewyrx',
        path: '/rx/vetoryl',
      },
      {
        name: 'Hill’s Prescription Diet w/d Multi-Benefit',
        description:
          'High-fiber therapeutic diet that supports satiety in dogs whose appetite is dramatically increased.',
        vendor: 'chewyrx',
        path: '/rx/hills-wd',
      },
      {
        name: 'Welactin Omega-3 Fish Oil',
        description:
          'Skin/coat support during the slow process of coat regrowth on treatment.',
        vendor: 'chewy',
        path: '/b/welactin',
      },
    ],
    faqs: [
      {
        question: 'Is Cushing’s disease painful?',
        answer:
          'Cushing’s itself is not typically painful. The disease causes a "feels old" appearance and behavior, but the dog is not in distress from the cortisol elevation in most cases.',
      },
      {
        question: 'Should every senior dog with PU/PD be tested for Cushing’s?',
        answer:
          'Many should. Increased drinking and urination in an older dog is a non-specific finding; the differential includes Cushing’s, diabetes, kidney disease, hypercalcemia, and urinary tract disease. Screening is part of a standard PU/PD workup.',
      },
      {
        question: 'Why is the workup so expensive?',
        answer:
          'Cushing’s diagnosis often requires multiple tests because no single test is both highly sensitive and specific. Ultrasound, LDDST, and sometimes endogenous ACTH together typically cost several hundred to over a thousand dollars depending on the region.',
      },
      {
        question: 'Can I just treat empirically without confirming the diagnosis?',
        answer:
          'No. Trilostane in a dog without Cushing’s can cause life-threatening Addisonian crisis. Confirmation before treatment is the standard of care.',
      },
    ],
    citations: [
      {
        label: 'ACVIM Consensus Statement on Hyperadrenocorticism',
        url: 'https://onlinelibrary.wiley.com/journal/19391676',
      },
      {
        label: 'Cornell University CVM — Cushing’s Disease in Dogs',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/cushings-disease-dogs',
      },
      {
        label: 'Merck Veterinary Manual — Hyperadrenocorticism (Cushing Syndrome)',
        url: 'https://www.merckvetmanual.com/endocrine-system/the-adrenal-glands/hyperadrenocorticism-cushing-syndrome-in-animals',
      },
    ],
  },

  'addisons-disease-dogs': {
    slug: 'addisons-disease-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Hypoadrenocorticism (Addison’s disease) is often called the "great pretender" because its clinical signs mimic many other diseases. While more common in young to middle-aged dogs, atypical presentations are sometimes diagnosed in seniors and are eminently treatable once recognized.',
    overview: [
      'Addison’s disease is the loss of adrenal cortex function, leading to deficiency of glucocorticoids (cortisol), mineralocorticoids (aldosterone), or both. Most cases are immune-mediated. The disease is over-represented in certain breeds (Standard Poodle, Bearded Collie, Portuguese Water Dog) and in middle-aged female dogs.',
      'The hallmark presentation is a dog with vague, waxing-and-waning illness — intermittent vomiting, diarrhea, lethargy, weakness — that improves with supportive care and then recurs. The classic emergency presentation is the "Addisonian crisis": collapse, dehydration, slow heart rate, and shock.',
      'Diagnosis is confirmed with an ACTH stimulation test. Owners and veterinarians often suspect Addison’s when bloodwork shows sodium and potassium abnormalities (low Na, high K, low Na:K ratio) — though atypical Addison’s with normal electrolytes does occur.',
    ],
    clinicalSigns: [
      'Intermittent lethargy, weakness, or "just not right" episodes',
      'Episodic vomiting and diarrhea, sometimes with blood',
      'Decreased appetite, weight loss',
      'Bradycardia (slow heart rate) — sometimes detected at routine exam',
      'Polyuria and polydipsia in some cases',
      'Acute collapse in severe crisis',
    ],
    redFlags: [
      'Collapse, profound weakness, slow heart rate, dehydration — Addisonian crisis is a true emergency',
      'Persistent vomiting and diarrhea that recurs after each supportive care visit',
      'A dog on long-term steroids whose steroid is abruptly stopped — iatrogenic Addisonian crisis is possible',
    ],
    treatment: [
      'In acute crisis, treatment begins immediately with IV fluids, IV dexamethasone, and correction of electrolyte abnormalities. Most dogs respond rapidly once therapy is initiated.',
      'Long-term therapy combines mineralocorticoid replacement (DOCP — Percorten or Zycortal — given by injection every 25–30 days) with daily oral physiologic-dose prednisone or hydrocortisone. The doses are individualized and may be adjusted at times of stress.',
      'Owners are instructed in stress-dose management: doubling the daily steroid dose for a few days during travel, boarding, surgery, or significant illness, then returning to baseline.',
    ],
    lifestyleChanges: [
      'Maintain a low-stress, predictable daily routine. Acute stressors can precipitate crises if steroid dosing is not adjusted.',
      'Inform every veterinarian and groomer about the Addison’s diagnosis. Anesthesia and dental procedures require stress-dose steroid coverage.',
      'Carry a written medication list and the date of the most recent DOCP injection at all times.',
      'Avoid abrupt withdrawal of any corticosteroid product, including topical steroid creams and ear treatments.',
    ],
    prognosis: [
      'With appropriate replacement therapy, the prognosis is excellent. Most dogs live normal lifespans.',
      'The main causes of poor outcome are missed diagnosis (the dog crashes during an unrelated stress event), missed DOCP injections, and inadequate stress-dose coverage during illness or anesthesia.',
    ],
    recommendedProducts: [
      {
        name: 'Zycortal (Desoxycorticosterone Pivalate)',
        description:
          'Long-acting mineralocorticoid replacement — typically administered by your veterinarian every 25–30 days.',
        vendor: 'chewyrx',
        path: '/rx/zycortal',
      },
      {
        name: 'Prednisone Tablets',
        description:
          'Glucocorticoid replacement — typically dosed at a low physiologic level long-term in Addisonian dogs.',
        vendor: 'chewyrx',
        path: '/rx/prednisone',
      },
      {
        name: 'Pet ID Tag — Medical Alert',
        description:
          'A clearly visible ID tag noting the dog’s Addison’s diagnosis is useful in emergencies.',
        vendor: 'amazon',
        search: 'medical alert pet ID tag',
      },
    ],
    faqs: [
      {
        question: 'Why is Addison’s called the great pretender?',
        answer:
          'Because its signs — intermittent vomiting, diarrhea, lethargy, weakness — overlap with many gastrointestinal and metabolic diseases. Many Addisonian dogs are treated for "GI upset" multiple times before the underlying diagnosis is made.',
      },
      {
        question: 'Is Addison’s a senior pet disease?',
        answer:
          'It is most commonly diagnosed in young to middle-aged dogs, but senior dogs do present occasionally — and atypical presentations may be missed for years before diagnosis.',
      },
      {
        question: 'Can my dog ever stop steroid therapy?',
        answer:
          'No. Addison’s replacement is lifelong, but doses are usually low and the medications are inexpensive.',
      },
      {
        question: 'What should I do if my dog seems sick on the day of a DOCP injection?',
        answer:
          'Call your veterinary team. Mild illness usually still requires the regular injection; significant illness may require additional steroid coverage and same-day evaluation.',
      },
    ],
    citations: [
      {
        label: 'ACVIM Consensus Statement on Hypoadrenocorticism in Dogs',
        url: 'https://onlinelibrary.wiley.com/journal/19391676',
      },
      {
        label: 'Cornell University CVM — Addison’s Disease in Dogs',
        url: 'https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center/canine-health-information/addisons-disease-dogs',
      },
      {
        label: 'Merck Veterinary Manual — Hypoadrenocorticism in Animals',
        url: 'https://www.merckvetmanual.com/endocrine-system/the-adrenal-glands/hypoadrenocorticism-in-animals',
      },
    ],
  },

  'periodontal-disease-dogs': {
    slug: 'periodontal-disease-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Periodontal disease is the most common health problem in adult and senior dogs. Studies estimate that 80% of dogs over age three show some degree of periodontal disease. Untreated, it is a significant source of chronic pain, tooth loss, and systemic inflammation — and yet it is among the most undertreated senior conditions.',
    overview: [
      'Periodontal disease begins with plaque (a soft bacterial film) that mineralizes into tartar (calculus). Bacterial inflammation extends below the gumline, destroying the periodontal ligament and bone that anchor the tooth. Once attachment is lost, it does not regenerate.',
      'The disease is staged 0–4 based on percentage of attachment loss on dental radiographs. By Stage 2, professional therapy is required to halt progression; by Stage 3–4, extraction is often the most humane option.',
      'A complete oral exam requires general anesthesia and full-mouth dental radiographs. Most disease — especially feline-style resorptive lesions and below-gumline bone loss — is invisible to an awake exam. "Anesthesia-free dentistry" does not assess these areas and is not equivalent to a proper dental procedure.',
    ],
    clinicalSigns: [
      'Bad breath that is not improved by chews or water additives',
      'Visible tartar at the gumline, gum redness or recession',
      'Pawing at the face, dropping food, chewing on one side',
      'Reluctance to chew hard treats or play with chew toys',
      'Bloody saliva or blood on toys',
      'In advanced disease: facial swelling, draining tract under the eye, weight loss from chronic pain',
    ],
    redFlags: [
      'Facial swelling below an eye — possible tooth root abscess; same-day evaluation',
      'Active bleeding from the mouth',
      'Acute drooling, pawing, vocalizing — possible fractured tooth or oral mass',
      'Weight loss from chronic oral pain, especially in dogs that have refused dental procedures',
    ],
    treatment: [
      'Treatment requires a complete oral health assessment and treatment (COHAT) under general anesthesia, including full-mouth dental radiographs, probing, scaling above and below the gumline, polishing, and extraction of non-salvageable teeth. Most senior dogs benefit from a COHAT every 12–24 months.',
      'Anesthesia in older dogs is safer than the persistent risk of chronic dental infection. Modern protocols use pre-anesthetic bloodwork, IV fluids, multimodal pain control, and monitoring; healthy senior dogs tolerate dental procedures very well.',
      'Daily home tooth brushing with a soft brush and a pet-safe toothpaste is the most effective home preventive measure. Dental chews bearing the Veterinary Oral Health Council (VOHC) seal have evidence for reducing plaque and tartar.',
    ],
    lifestyleChanges: [
      'Brush daily if the dog tolerates it; even three times a week is meaningfully better than nothing.',
      'Choose VOHC-accepted dental chews and treats instead of hard bones (which fracture teeth).',
      'Add a VOHC-accepted water additive for dogs that resist brushing.',
      'Schedule professional dental cleanings according to your veterinarian’s recommendation, typically every 1–2 years for senior dogs.',
    ],
    prognosis: [
      'Periodontal disease is essentially universal in unmanaged senior dogs. With consistent home care and periodic professional cleanings, it can be controlled indefinitely.',
      'Untreated dental disease shortens life. Beyond chronic pain, it produces bacteremia that may contribute to heart, liver, and kidney inflammation. Studies have demonstrated correlations between periodontal disease severity and markers of systemic disease in dogs.',
    ],
    recommendedProducts: [
      {
        name: 'Virbac C.E.T. Enzymatic Toothpaste',
        description:
          'Veterinary enzymatic toothpaste with poultry flavor — the most widely recommended brushing paste.',
        vendor: 'chewy',
        path: '/b/virbac-cet',
      },
      {
        name: 'OraVet Dental Hygiene Chews',
        description:
          'VOHC-accepted daily chew that creates a barrier against plaque formation.',
        vendor: 'chewy',
        path: '/b/oravet',
      },
      {
        name: 'TropiClean Fresh Breath Water Additive',
        description:
          'Water additive option for dogs who will not tolerate brushing.',
        vendor: 'amazon',
        search: 'TropiClean fresh breath water additive',
      },
    ],
    faqs: [
      {
        question: 'Is anesthesia safe in older dogs?',
        answer:
          'Yes, when performed with pre-anesthetic bloodwork, IV fluids, modern anesthetic agents, and proper monitoring. The risk of chronic dental pain and infection in an untreated dog is meaningfully higher than the risk of a properly executed dental procedure.',
      },
      {
        question: 'My dog still eats — does that mean their teeth do not hurt?',
        answer:
          'No. Dogs almost always continue to eat even with severe oral pain. Owners typically only notice improvement in attitude and behavior after extractions are performed.',
      },
      {
        question: 'Are bones good for cleaning teeth?',
        answer:
          'Bones and antlers are a leading cause of fractured teeth in senior dogs. Most veterinary dentists recommend against them.',
      },
      {
        question: 'How often should my dog have professional cleanings?',
        answer:
          'Most senior dogs benefit from a professional cleaning every 12–18 months, though some breeds (small-breed and brachycephalic) need annual cleanings.',
      },
    ],
    citations: [
      {
        label: 'AAHA Dental Care Guidelines for Dogs and Cats',
        url: 'https://www.aaha.org/aaha-guidelines/dental-care/dental-care-home/',
      },
      {
        label: 'Veterinary Oral Health Council (VOHC) — Accepted Products List',
        url: 'https://vohc.org/accepted-products/',
      },
      {
        label: 'AVMA — Periodontal Disease in Dogs and Cats',
        url: 'https://www.avma.org/resources-tools/pet-owners/petcare/dental-care-your-pet',
      },
    ],
  },

  'cataracts-vision-loss-dogs': {
    slug: 'cataracts-vision-loss-dogs',
    publishedAt: '2026-05-29T00:00:00Z',
    updatedAt: '2026-05-29T00:00:00Z',
    abstract:
      'Vision loss in senior dogs has several distinct causes — cataracts, nuclear sclerosis, progressive retinal atrophy, sudden acquired retinal degeneration syndrome (SARDS), and glaucoma. Distinguishing them matters because some are reversible with surgery, others are not, and a few signal underlying systemic disease.',
    overview: [
      'A cataract is an opacity of the lens that scatters light and reduces vision. Nuclear sclerosis is a normal age-related hardening of the lens that produces a bluish-gray appearance but does not significantly reduce vision. Both are visible at the lens, but only cataract is visually impairing.',
      'In senior dogs, cataracts most often arise from diabetes mellitus (a "diabetic cataract" can develop within weeks of diagnosis) or from age. Hereditary cataracts also occur and are recognized in many breeds. Progressive retinal atrophy (PRA) is a separate retinal disease that causes gradual painless blindness without visible lens changes.',
      'A definitive diagnosis requires a veterinary ophthalmology examination. Owners should not equate the "cloudy eye" of nuclear sclerosis with cataract — the implications and treatment differ substantially.',
    ],
    clinicalSigns: [
      'Cloudy or whitish appearance of the lens (cataract) vs. bluish-gray haze (nuclear sclerosis)',
      'Bumping into furniture, especially after a room rearrangement',
      'Difficulty finding food in the bowl, or missing tossed treats',
      'Reluctance to navigate stairs, especially down',
      'Hesitation in low light (early sign of PRA)',
      'Disorientation in unfamiliar environments while remaining confident at home',
    ],
    redFlags: [
      'Sudden onset of blindness over hours to days — possible SARDS, retinal detachment, or hypertensive retinopathy; urgent ophthalmology referral',
      'Cloudy or red painful eye with squinting — possible lens-induced uveitis or glaucoma; same-day evaluation',
      'Acute blindness with concurrent PU/PD — workup for Cushing’s, kidney disease, and hypertension is warranted',
      'New vision loss in a dog with measured hypertension — emergency blood pressure control to prevent further retinal damage',
    ],
    treatment: [
      'Cataract surgery (phacoemulsification) is curative for most cataracts and restores functional vision in roughly 90% of cases. Surgery requires a veterinary ophthalmologist and pre-operative testing (ERG, ocular ultrasound) to confirm the retina is still functional.',
      'Lens-induced uveitis from an untreated cataract can lead to glaucoma and a painful blind eye. Even if surgery is not pursued, an ophthalmologist will typically recommend topical anti-inflammatories to manage lens-induced inflammation.',
      'Progressive retinal atrophy has no current effective therapy; management focuses on environmental adaptation. SARDS likewise has no treatment; affected dogs do well with home environmental adaptation.',
      'Hypertensive retinopathy requires identification and treatment of the underlying cause — kidney disease, Cushing’s, hyperthyroidism in cats — plus immediate blood pressure control (amlodipine in dogs).',
    ],
    lifestyleChanges: [
      'Do not rearrange furniture. Vision-impaired dogs navigate by memory.',
      'Use scent cues at key locations — a dab of vanilla extract on a doorway or food station.',
      'Add tactile cues: textured rugs at stair tops and bottoms, and at room transitions.',
      'Speak before approaching to avoid startling.',
      'Keep stairs gated or carpeted to prevent falls; vision-impaired senior dogs can do well with stairs once a routine is learned.',
    ],
    prognosis: [
      'Cataract surgery has high success rates in appropriately selected patients. Vision loss from PRA and SARDS does not recover, but most dogs adapt remarkably well — a blind dog with a stable home environment can live a happy life.',
      'Prognosis worsens when an untreated cataract causes glaucoma, which is painful and may require enucleation. Early ophthalmology evaluation prevents this trajectory in many dogs.',
    ],
    recommendedProducts: [
      {
        name: 'OcluVet (antioxidant cataract supplement)',
        description:
          'Antioxidant supplement marketed for cataract progression; evidence is limited but it is widely used as an adjunct.',
        vendor: 'amazon',
        search: 'OcluVet cataract supplement',
      },
      {
        name: 'Halo Pet Halo for Blind Dogs',
        description:
          'Halo harness that helps blind dogs avoid bumping into furniture during the adjustment period.',
        vendor: 'amazon',
        search: 'Halo for blind dogs',
      },
      {
        name: 'Pet Stairs / Ramp',
        description:
          'Low-rise stairs or a ramp for couch and bed access — improves confidence and reduces falls in vision-impaired senior dogs.',
        vendor: 'amazon',
        search: 'senior dog pet stairs',
      },
    ],
    faqs: [
      {
        question: 'My dog’s eyes look cloudy — is that cataracts?',
        answer:
          'Possibly, but more often it is nuclear sclerosis, a normal aging change that does not affect vision. A veterinarian can distinguish the two with a flashlight exam.',
      },
      {
        question: 'Is cataract surgery worth it in a senior dog?',
        answer:
          'It can be, particularly in a healthy senior with no other vision-limiting disease and a temperament that tolerates the post-operative regimen. The decision is made jointly with a veterinary ophthalmologist after a full workup.',
      },
      {
        question: 'Can blind dogs have a good quality of life?',
        answer:
          'Yes — blind dogs adapt remarkably well to familiar environments. Owners are routinely surprised by how confidently a blind senior dog navigates a home it has lived in for years.',
      },
      {
        question: 'Are there drops that dissolve cataracts?',
        answer:
          'Despite consumer marketing, there is no eye drop currently proven to dissolve canine cataracts. The standard treatment for vision-impairing cataracts remains surgery.',
      },
    ],
    citations: [
      {
        label: 'American College of Veterinary Ophthalmologists — Vision in Dogs',
        url: 'https://www.acvo.org/',
      },
      {
        label: 'Cornell University CVM — Cataracts',
        url: 'https://www.vet.cornell.edu/',
      },
      {
        label: 'Merck Veterinary Manual — Cataracts in Animals',
        url: 'https://www.merckvetmanual.com/eye-diseases-and-disorders/diseases-of-the-lens/cataracts',
      },
    ],
  },
}
