/**
 * Programmatic SEO source-of-truth for /medications/can-i-give-my-dog/[med].
 *
 * "Can I give my dog [human/OTC medication]?" is one of the highest-volume,
 * highest-urgency pet query families. This engine answers it responsibly:
 * a clear verdict (never / vet-dose-only / topical-ok), WHY, the critical
 * dog-vs-cat differences, and — non-negotiably — the rule that DOSING IS A
 * VETERINARIAN'S JOB. We never print a dose.
 *
 * TRUST (QC §1): health-critical. Verdicts reflect mainstream veterinary
 * pharmacology / toxicology (ASPCA Animal Poison Control, Pet Poison Helpline,
 * Merck/Plumb's veterinary references). No fabricated doses or thresholds.
 * Every page defers dosing to a veterinarian and surfaces the ASPCA hotline.
 *
 * Distinct from src/data/medications.ts (the veterinary-prescription library).
 */

export type MedVerdict = 'never' | 'vet-only' | 'topical-ok'

export type MedCategory =
  | 'Pain & Fever'
  | 'Allergy & Antihistamine'
  | 'Stomach & Digestive'
  | 'Anxiety & Sleep'
  | 'Topical & First Aid'
  | 'Cold & Decongestant'

export interface PetMed {
  slug: string
  /** Display name, brand (generic). */
  name: string
  aliases?: string[]
  category: MedCategory
  verdict: MedVerdict
  /** Extractable one-line answer (the AI-citation / snippet target). */
  shortAnswer: string
  /** The "why" — what it does / why it is or isn't usable in dogs. */
  detail: string
  /** The single most important safety point for this drug. */
  keyCaution: string
  /** Dog-vs-cat difference where it matters (cats are NOT small dogs). */
  catNote?: string
  /** Toxic drugs: signs of poisoning. */
  symptoms?: string[]
  /** Toxic drugs: what to do now. */
  whatToDo?: string
  related?: string[]
  sources: string[]
}

const ASPCA = 'ASPCA Animal Poison Control Center'
const PPH = 'Pet Poison Helpline'
const MERCK = 'Merck Veterinary Manual'
const PLUMBS = "Plumb's Veterinary Drug references"

export const PET_MEDS: PetMed[] = [
  // ---------------- NEVER ----------------
  {
    slug: 'acetaminophen', name: 'Acetaminophen (Tylenol)', aliases: ['tylenol', 'paracetamol'], category: 'Pain & Fever', verdict: 'never',
    shortAnswer: 'No. Never give your dog acetaminophen (Tylenol) unless a veterinarian specifically prescribes it — and never give it to a cat, for whom it is frequently fatal.',
    detail: 'Acetaminophen is dangerous for pets. In dogs it can cause liver damage and red-blood-cell injury; in cats it is especially deadly because cats cannot process it, and even a single regular tablet can kill a cat. Veterinarians very rarely use it in dogs under strict supervision, but it is never an at-home choice.',
    keyCaution: 'Do not give acetaminophen to a dog on your own, and never to a cat under any circumstances.',
    catNote: 'Acetaminophen is one of the most common fatal poisonings in cats — a single tablet can be lethal. Treat any feline exposure as an emergency.',
    symptoms: ['Brown or muddy gums', 'Difficulty breathing', 'Swelling of the face or paws', 'Vomiting, lethargy', 'Jaundice (yellow gums/eyes)'],
    whatToDo: 'Call ASPCA Animal Poison Control (888-426-4435) or an emergency vet immediately — this is time-critical, especially in cats. Bring the packaging.',
    related: ['ibuprofen', 'aspirin', 'naproxen'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'ibuprofen', name: 'Ibuprofen (Advil, Motrin)', aliases: ['advil', 'motrin'], category: 'Pain & Fever', verdict: 'never',
    shortAnswer: 'No. Ibuprofen is toxic to dogs and cats — it causes stomach ulcers and kidney damage, and the margin between a "normal" dose and a toxic one is very small.',
    detail: 'Ibuprofen is a human NSAID that pets clear far less safely than people do. Even modest amounts can cause bleeding stomach ulcers and acute kidney injury, and higher doses affect the nervous system. Dogs need dog-specific NSAIDs (prescribed and monitored by a vet) — never the human version.',
    keyCaution: 'There is no safe at-home ibuprofen dose for a dog or cat. Use only vet-prescribed canine NSAIDs.',
    catNote: 'Cats are even more sensitive to ibuprofen than dogs.',
    symptoms: ['Vomiting (sometimes with blood)', 'Black, tarry stool', 'Loss of appetite, lethargy', 'Increased or decreased thirst/urination'],
    whatToDo: 'Call ASPCA Poison Control (888-426-4435) or your vet right away with the amount and your pet’s weight. Do not wait for symptoms.',
    related: ['acetaminophen', 'naproxen', 'aspirin'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'naproxen', name: 'Naproxen (Aleve)', aliases: ['aleve'], category: 'Pain & Fever', verdict: 'never',
    shortAnswer: 'No. Naproxen (Aleve) is highly toxic to dogs and cats — it is long-acting and even one pill can poison a dog.',
    detail: 'Naproxen is a potent, long-lasting human NSAID, and pets are extremely sensitive to it. Because it stays in the body a long time, even a single tablet can cause severe stomach ulceration and kidney failure in a dog. It is one of the more dangerous human painkillers for pets.',
    keyCaution: 'Never give naproxen to a pet; a single tablet can be a serious poisoning.',
    symptoms: ['Vomiting, possibly bloody', 'Black tarry stool', 'Weakness, lethargy', 'Reduced urination'],
    whatToDo: 'Treat as an emergency — call ASPCA Poison Control (888-426-4435) or an emergency vet immediately.',
    related: ['ibuprofen', 'acetaminophen', 'aspirin'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'pseudoephedrine', name: 'Pseudoephedrine (Sudafed)', aliases: ['sudafed', 'decongestant'], category: 'Cold & Decongestant', verdict: 'never',
    shortAnswer: 'No. Pseudoephedrine (Sudafed) and other decongestants are toxic stimulants for dogs and cats.',
    detail: 'Pseudoephedrine is a stimulant decongestant found in many cold and sinus medicines. In pets it overstimulates the heart and nervous system, causing a racing heart, agitation, high blood pressure, and tremors even at small amounts. Combination "cold and flu" products are doubly risky because they also contain acetaminophen.',
    keyCaution: 'Avoid all decongestant and combination cold medicines; "-D" versions of antihistamines (e.g., Claritin-D, Zyrtec-D) contain pseudoephedrine.',
    symptoms: ['Restlessness, agitation', 'Rapid heart rate', 'Tremors or seizures', 'Vomiting, dilated pupils'],
    whatToDo: 'Call ASPCA Poison Control (888-426-4435) or an emergency vet immediately.',
    related: ['claritin', 'zyrtec', 'acetaminophen'],
    sources: [ASPCA, PPH],
  },

  // ---------------- VET-ONLY (usable, but ONLY at a vet-determined dose) ----------------
  {
    slug: 'aspirin', name: 'Aspirin', aliases: ['acetylsalicylic acid', 'baby aspirin'], category: 'Pain & Fever', verdict: 'vet-only',
    shortAnswer: 'Only if your veterinarian directs it. Aspirin can be used short-term in some dogs, but it readily causes stomach ulcers and bleeding — and it is dangerous for cats.',
    detail: 'Aspirin is an NSAID that vets occasionally use in dogs for short periods, but it has a narrow safety margin and commonly causes GI ulceration and bleeding, and it interferes with platelets. Modern dog-specific NSAIDs are safer, so aspirin is rarely first-choice. The dose depends on weight and health and must come from your vet.',
    keyCaution: 'Never combine aspirin with other NSAIDs or steroids, and never start it before a planned surgery. Dosing is a veterinary decision.',
    catNote: 'Cats metabolize aspirin very slowly and are easily overdosed — only ever under direct veterinary supervision.',
    related: ['ibuprofen', 'acetaminophen', 'pepto-bismol'],
    sources: [ASPCA, MERCK, PLUMBS],
  },
  {
    slug: 'benadryl', name: 'Benadryl (diphenhydramine)', aliases: ['diphenhydramine'], category: 'Allergy & Antihistamine', verdict: 'vet-only',
    shortAnswer: 'Often yes for dogs, at a veterinarian-determined dose — but only plain diphenhydramine, never combination Benadryl products.',
    detail: 'Diphenhydramine (plain Benadryl) is one of the more commonly vet-recommended human antihistamines for dogs, used for mild allergies, itching, or travel. The catch is the product: many "Benadryl" boxes are combination products containing decongestants (toxic) or acetaminophen, and liquid versions may contain xylitol. The correct dose is weight-based and should be confirmed by your vet.',
    keyCaution: 'Use only plain diphenhydramine (no "-D", no "cold/sinus", no nighttime combos), check for xylitol in liquids, and get the dose from your vet.',
    catNote: 'It can be used in cats too, but cats are dose-sensitive — confirm with your vet first.',
    related: ['zyrtec', 'claritin', 'pseudoephedrine'],
    sources: [ASPCA, MERCK, PLUMBS],
  },
  {
    slug: 'zyrtec', name: 'Zyrtec (cetirizine)', aliases: ['cetirizine'], category: 'Allergy & Antihistamine', verdict: 'vet-only',
    shortAnswer: 'Usually yes for dogs at a vet-determined dose — but only plain cetirizine, never the "-D" (Zyrtec-D) decongestant version.',
    detail: 'Cetirizine (plain Zyrtec) is a non-drowsy antihistamine commonly used in dogs for allergic itch, and it is generally well tolerated. As always, the hazard is the combination product: Zyrtec-D contains pseudoephedrine, which is toxic. Dose by weight is a vet decision.',
    keyCaution: 'Plain cetirizine only — Zyrtec-D contains a toxic decongestant. Confirm the dose with your vet.',
    related: ['benadryl', 'claritin', 'pseudoephedrine'],
    sources: [ASPCA, PLUMBS],
  },
  {
    slug: 'claritin', name: 'Claritin (loratadine)', aliases: ['loratadine'], category: 'Allergy & Antihistamine', verdict: 'vet-only',
    shortAnswer: 'Often yes for dogs at a vet-determined dose — but only plain loratadine, never Claritin-D, and watch for xylitol in dissolvable tablets.',
    detail: 'Loratadine (plain Claritin) is another non-drowsy antihistamine sometimes used for canine allergies. Two cautions dominate: Claritin-D contains pseudoephedrine (toxic), and some rapid-dissolve tablets are sweetened with xylitol (toxic). Plain loratadine at a vet-set dose is the only safe form.',
    keyCaution: 'Avoid Claritin-D and xylitol-sweetened dissolvable tablets. Dose is a veterinary decision.',
    related: ['zyrtec', 'benadryl', 'pseudoephedrine'],
    sources: [ASPCA, PLUMBS],
  },
  {
    slug: 'pepcid', name: 'Pepcid (famotidine)', aliases: ['famotidine'], category: 'Stomach & Digestive', verdict: 'vet-only',
    shortAnswer: 'Often yes, at a vet-determined dose. Famotidine (plain Pepcid) is commonly used in dogs and cats for stomach acid — but get the dose and the reason from your vet.',
    detail: 'Famotidine reduces stomach acid and is frequently recommended by vets for dogs and cats with acid-related stomach upset. It is relatively safe, but vomiting can signal something that needs diagnosis rather than just acid suppression, so it should be used with veterinary guidance rather than as a stand-in for a check-up.',
    keyCaution: 'Use plain famotidine (not "Complete" or combination antacids), and let your vet confirm the dose and that acid suppression is the right approach.',
    related: ['prilosec', 'pepto-bismol', 'imodium'],
    sources: [MERCK, PLUMBS],
  },
  {
    slug: 'prilosec', name: 'Prilosec (omeprazole)', aliases: ['omeprazole'], category: 'Stomach & Digestive', verdict: 'vet-only',
    shortAnswer: 'Sometimes, at a vet-determined dose. Omeprazole is used in dogs and cats for certain stomach conditions, but it is a vet decision, not a routine home remedy.',
    detail: 'Omeprazole is a proton-pump inhibitor that vets use for ulcers and significant acid-related disease in pets. It is generally well tolerated but is meant for specific situations and durations, so the decision to use it — and for how long — belongs with your veterinarian.',
    keyCaution: 'Not a first-line home remedy for occasional upset — use under veterinary direction.',
    related: ['pepcid', 'pepto-bismol'],
    sources: [MERCK, PLUMBS],
  },
  {
    slug: 'pepto-bismol', name: 'Pepto-Bismol (bismuth subsalicylate)', aliases: ['bismuth subsalicylate'], category: 'Stomach & Digestive', verdict: 'vet-only',
    shortAnswer: 'Sometimes for dogs, only if your vet directs it — and never for cats. Pepto-Bismol contains a salicylate (aspirin-like) compound.',
    detail: 'Pepto-Bismol contains bismuth subsalicylate; the salicylate part is aspirin-like and risky, and the bismuth turns the stool dark (which can hide or mimic GI bleeding). It is occasionally used short-term in dogs under veterinary advice, but plain diarrhea often has causes that need addressing rather than masking.',
    keyCaution: 'Never give it to a cat (salicylate toxicity), and only to a dog with veterinary direction.',
    catNote: 'Cats cannot safely process salicylates — Pepto-Bismol is not for cats.',
    related: ['imodium', 'pepcid', 'aspirin'],
    sources: [ASPCA, PPH, MERCK],
  },
  {
    slug: 'imodium', name: 'Imodium (loperamide)', aliases: ['loperamide'], category: 'Stomach & Digestive', verdict: 'vet-only',
    shortAnswer: 'Only with your vet’s guidance — and it is dangerous for certain breeds. Imodium can cause serious problems in dogs with the MDR1 gene mutation.',
    detail: 'Loperamide (Imodium) slows the gut, but it can be hazardous in dogs that carry the MDR1 (ABCB1) gene mutation — common in collies, Australian shepherds, and other herding breeds — where it can cause severe neurological effects. It can also worsen diarrhea caused by infection or toxins by keeping the offending agent inside. Veterinary guidance is essential.',
    keyCaution: 'Herding breeds (collie, Aussie, Sheltie) may have the MDR1 mutation and can react badly — do not give without veterinary advice.',
    catNote: 'Not recommended for cats without veterinary direction.',
    related: ['pepto-bismol', 'pepcid'],
    sources: [ASPCA, MERCK, PLUMBS],
  },
  {
    slug: 'melatonin', name: 'Melatonin', category: 'Anxiety & Sleep', verdict: 'vet-only',
    shortAnswer: 'Often yes for dogs at a vet-determined dose — but only xylitol-free products, since many gummies and chewables contain xylitol.',
    detail: 'Melatonin is sometimes used to help with mild anxiety, noise phobia, or sleep–wake issues in dogs, and it is generally low-risk. The dominant hazard is the formulation: many melatonin gummies and chewable tablets are sweetened with xylitol, which is highly toxic to dogs. Choose a plain, xylitol-free product and confirm the dose with your vet.',
    keyCaution: 'Check the label for xylitol — it is common in gummies — and get the dose from your vet.',
    related: ['benadryl'],
    sources: [ASPCA, PLUMBS],
  },
  {
    slug: 'dramamine', name: 'Dramamine (dimenhydrinate)', aliases: ['dimenhydrinate'], category: 'Allergy & Antihistamine', verdict: 'vet-only',
    shortAnswer: 'Sometimes yes for dogs at a vet-determined dose, for motion sickness — but your vet may prefer a dog-specific anti-nausea drug.',
    detail: 'Dimenhydrinate (Dramamine) is an antihistamine used for car/motion sickness, and it can be used in dogs at a weight-based dose. That said, vets often prefer maropitant (Cerenia), a dog-specific anti-nausea medication, which is more effective for travel. Confirm the choice and dose with your vet.',
    keyCaution: 'Avoid "less-drowsy" formulas (they contain a different drug) and confirm the dose with your vet.',
    related: ['benadryl'],
    sources: [MERCK, PLUMBS],
  },

  // ---------------- TOPICAL-OK (small external use generally tolerated) ----------------
  {
    slug: 'neosporin', name: 'Neosporin (triple antibiotic ointment)', aliases: ['triple antibiotic ointment', 'bacitracin neomycin polymyxin'], category: 'Topical & First Aid', verdict: 'topical-ok',
    shortAnswer: 'A small amount on a minor surface scrape is usually fine for dogs — but never the "+ pain relief" version, and stop your dog from licking it off.',
    detail: 'Plain triple-antibiotic ointment can be used on a minor, superficial wound in dogs in a thin layer. Two caveats matter: avoid the "+ pain relief / -PR" versions (they contain pramoxine, which is not for pets), and prevent licking, since ingesting ointment can upset the stomach. Anything deeper than a surface scrape needs a vet.',
    keyCaution: 'Plain ointment only (no "+pain relief"), thin layer, keep your dog from licking it, and see a vet for anything more than a minor surface wound.',
    catNote: 'Use extra caution in cats and check with your vet first; some topical antibiotics are problematic for cats.',
    related: ['hydrocortisone-cream', 'hydrogen-peroxide'],
    sources: [MERCK, ASPCA],
  },
  {
    slug: 'hydrocortisone-cream', name: 'Hydrocortisone cream', aliases: ['cortisone cream'], category: 'Topical & First Aid', verdict: 'topical-ok',
    shortAnswer: 'A small amount of plain low-strength hydrocortisone on a small itchy spot is usually tolerated in dogs — but prevent licking, and see a vet for anything widespread.',
    detail: 'Over-the-counter hydrocortisone cream can calm a small, localized itchy area in dogs short-term. The main risks are ingestion from licking and masking a problem (allergy, infection, parasites) that needs real treatment. Use sparingly, keep it from being licked, and involve your vet for recurring or spreading itch.',
    keyCaution: 'Small area, short-term, prevent licking — and get persistent or widespread itching properly diagnosed.',
    related: ['neosporin', 'benadryl'],
    sources: [MERCK],
  },
  {
    slug: 'hydrogen-peroxide', name: 'Hydrogen peroxide (3%)', aliases: ['peroxide'], category: 'Topical & First Aid', verdict: 'vet-only',
    shortAnswer: 'Only to induce vomiting in a dog when a veterinarian or poison control specifically tells you to — never on your own, and never for cats.',
    detail: 'Fresh 3% hydrogen peroxide is sometimes used to make a dog vomit after eating something dangerous — but only when a professional directs it, because for some poisons (caustics, petroleum products, sharp objects) vomiting causes more harm, and the wrong amount injures the stomach. It is not a wound cleaner of choice and is not safe for inducing vomiting in cats.',
    keyCaution: 'Never induce vomiting without first calling ASPCA Poison Control (888-426-4435) or your vet — some poisons must not be vomited back up.',
    catNote: 'Do not use hydrogen peroxide to induce vomiting in cats — it is unsafe; call your vet.',
    whatToDo: 'If your pet ate something dangerous, call ASPCA Poison Control (888-426-4435) or your vet first and follow their direction.',
    related: ['neosporin'],
    sources: [ASPCA, PPH],
  },
]

export const PET_MED_CATEGORIES: MedCategory[] = [
  'Pain & Fever', 'Allergy & Antihistamine', 'Stomach & Digestive', 'Anxiety & Sleep', 'Cold & Decongestant', 'Topical & First Aid',
]

export function getPetMed(slug: string): PetMed | undefined {
  return PET_MEDS.find((m) => m.slug === slug)
}

export function getRelatedMeds(med: PetMed): PetMed[] {
  const out: PetMed[] = []
  for (const slug of med.related ?? []) {
    const m = getPetMed(slug)
    if (m && m.slug !== med.slug && !out.includes(m)) out.push(m)
  }
  if (out.length < 4) {
    for (const m of PET_MEDS) {
      if (out.length >= 4) break
      if (m.slug !== med.slug && m.category === med.category && !out.includes(m)) out.push(m)
    }
  }
  return out.slice(0, 4)
}

export function medFaqs(med: PetMed): { question: string; answer: string }[] {
  const faqs: { question: string; answer: string }[] = [
    { question: `Can I give my dog ${med.name.split(' (')[0]}?`, answer: `${med.shortAnswer} ${med.detail}` },
  ]
  if (med.verdict === 'never') {
    faqs.push({
      question: `What happens if my dog eats ${med.name.split(' (')[0]}?`,
      answer: `${(med.symptoms ?? []).join('; ') || 'Signs depend on the amount and the pet.'}. ${med.whatToDo ?? 'Call ASPCA Animal Poison Control (888-426-4435) or your veterinarian right away.'}`,
    })
  } else {
    faqs.push({
      question: `How much ${med.name.split(' (')[0]} can I give my dog?`,
      answer: `We do not publish doses, because the right amount depends on your dog’s exact weight, age, other medications, and health — and the wrong amount is dangerous. ${med.keyCaution} Ask your veterinarian (or a telehealth vet) for the dose.`,
    })
  }
  if (med.catNote) {
    faqs.push({ question: `Is ${med.name.split(' (')[0]} safe for cats?`, answer: med.catNote })
  }
  return faqs
}

export const MED_VERDICT_META: Record<MedVerdict, { label: string; tone: 'good' | 'warn' | 'danger'; color: string }> = {
  'never': { label: 'No — Never give this', tone: 'danger', color: '#b91c1c' },
  'vet-only': { label: 'Only at a vet-determined dose', tone: 'warn', color: '#b45309' },
  'topical-ok': { label: 'Small topical use usually OK', tone: 'good', color: '#15803d' },
}
