/**
 * Cat symptom signs — shared data module.
 *
 * Single source of truth for the feline emergency/urgent signs used by
 * `/tools/is-this-a-cat-emergency`. Copy is grounded in existing Vets.co
 * owner-side references (ER vs clinic, FLUTD, emergency-triage-card) plus
 * AVMA / AAHA / ASPCA / Cornell feline framing.
 *
 * This is a planning / triage aid, NOT a diagnosis. `level` is the only
 * triage tier; the helper maps presentation only. Mixed selections always
 * resolve upward. There is no "all clear."
 */

export interface Sign {
  num: string
  level: 'emergency' | 'urgent'
  title: string
  body: string
}

export const SIGNS: Sign[] = [
  {
    num: '01', level: 'emergency' as const, title: 'Open-Mouth or Labored Breathing',
    body: 'Cats are not dogs — they do not pant to cool down. Open-mouth breathing at rest, exaggerated chest or belly movement, extended neck, or noisy effort to breathe is a feline emergency. Tissue oxygen debt begins within minutes. Do not wait for another sign.',
  },
  {
    num: '02', level: 'emergency' as const, title: 'Pale, White, Blue, or Grey Gums',
    body: 'Normal cat gums are pink and moist. Pale or white gums indicate shock, severe anemia, or blood loss. Blue or grey gums indicate oxygen deprivation. If you are seeing white or blue, go to an emergency hospital immediately.',
  },
  {
    num: '03', level: 'emergency' as const, title: 'Sudden Collapse or Inability to Stand',
    body: 'A cat that collapses, will not get up, or falls repeatedly has something seriously wrong — cardiac event, internal bleeding, thromboembolism, toxin, or extreme pain. Do not assume it will pass.',
  },
  {
    num: '04', level: 'emergency' as const, title: 'Unproductive Straining to Urinate',
    body: 'A cat — especially a male — repeatedly in the litter box, crying, producing little or no urine is a urethral obstruction until a veterinarian says otherwise. A complete blockage can be fatal within 24–48 hours as potassium rises and the bladder overfills. Do not wait for a morning clinic slot.',
  },
  {
    num: '05', level: 'emergency' as const, title: 'Known Lily or Toxin Ingestion',
    body: 'True lilies (Lilium and Hemerocallis — Easter, tiger, Asiatic, daylily) can cause fatal kidney failure in cats from a bite of leaf, pollen, or vase water. Other high-risk ingestions include antifreeze, rodenticide, and human painkillers (acetaminophen, ibuprofen). Call ASPCA Animal Poison Control (888-426-4435) and go. Do not wait for symptoms. Do not induce vomiting unless a veterinarian or poison-control specialist tells you to.',
  },
  {
    num: '06', level: 'emergency' as const, title: 'Trauma or Bleeding That Will Not Slow',
    body: 'Hit by a car, a fall from height, a bite or penetrating wound, or bleeding that does not slow with several minutes of firm pressure. Apply pressure with a clean cloth, keep it there, and go. Cats hide injury well — any known major trauma is an emergency even if the cat is still walking.',
  },
  {
    num: '07', level: 'emergency' as const, title: 'Seizure Lasting More Than 2–3 Minutes',
    body: 'First seizure ever: go to emergency immediately. A seizure lasting more than 2–3 minutes (status epilepticus) or more than one seizure in 24 hours: emergency. Prolonged seizures cause brain damage. A known epileptic with a single brief seizure that recovers fully is often same-day — when unsure, go.',
  },
  {
    num: '08', level: 'emergency' as const, title: 'Bloated or Hard Belly',
    body: 'A belly that is visibly bloated, tight, or painful to a light touch — especially with restlessness, hiding, or unproductive retching — can mean urinary obstruction, trauma, peritonitis, or other surgical emergencies. Cats rarely get classic GDV, but a hard abdomen is still treat-as-emergency until a veterinarian examines it.',
  },
  {
    num: '09', level: 'emergency' as const, title: 'Sudden Hind-Limb Paralysis or Cold Rear Paws',
    body: 'Sudden inability to use the back legs, crying in pain, or rear paws that feel cold compared with the front is aortic thromboembolism (saddle thrombus) until proven otherwise — a vascular emergency, most often in cats with heart disease. Go now. Do not wait to see if walking returns.',
  },
  {
    num: '10', level: 'urgent' as const, title: 'Isolated Vomiting or One Soft Stool',
    body: 'One episode of vomiting or one soft stool, with no blood, in an otherwise bright cat that is still eating, drinking, and using the litter box: monitor closely for a short window. More than one episode, any blood (red or dark), or a cat that becomes quiet or stops eating: vet today.',
  },
  {
    num: '11', level: 'urgent' as const, title: 'Repeated Vomiting or a Cat That Stops Eating',
    body: 'More than one vomiting episode, or a cat that will not eat. Cats escalate faster than dogs — hepatic lipidosis (fatty liver) risk rises with fasting, especially in overweight cats. Same-day clinic or urgent care. Escalate to emergency if collapse, blood, a hard belly, or unproductive straining appears.',
  },
  {
    num: '12', level: 'urgent' as const, title: 'Hiding, Lethargy, or Other Behavioral Change',
    body: 'A usually social cat that hides, will not jump, grooms poorly, or seems “off” with any other change (appetite, litter box, breathing). Cats conceal illness. Same-day evaluation. If hiding is paired with collapse, open-mouth breathing, or a blocked-bladder picture, treat it as emergency.',
  },
  {
    num: '13', level: 'urgent' as const, title: 'Eye Injury or Sudden Eye Change',
    body: 'The eye is time-sensitive. Squinting with pawing, sudden cloudiness, a third eyelid up, redness with discharge, or any trauma to the eye requires same-day care — hours can determine whether vision is preserved. A rapidly swelling or painful eye after trauma: call ahead and go sooner. Do not put anything in the eye.',
  },
  {
    num: '14', level: 'urgent' as const, title: 'Skipped One Meal — Still Drinking',
    body: 'Missing one meal in an otherwise bright cat that is still drinking and using the litter box: monitor closely. Complete refusal for most of a day, or any cat that stops drinking: vet today. Cats do not safely “wait it out” the way some dogs can — hepatic lipidosis risk rises with fasting.',
  },
  {
    num: '15', level: 'urgent' as const, title: 'Unexplained Weight Loss',
    body: 'A cat losing weight without a planned diet change warrants investigation. In mature and senior cats, unexplained weight loss is often the earliest sign of kidney disease, hyperthyroidism, diabetes, or GI disease. Evaluate within a few days — catching these early changes the options.',
  },
]

export const STYLES = {
  emergency: { bg: 'rgba(200,74,42,0.05)', border: 'rgba(200,74,42,0.18)', numColor: '#C84A2A', badge: '🚨 Emergency', badgeColor: '#C84A2A', badgeBg: 'rgba(200,74,42,0.1)' },
  urgent:    { bg: 'rgba(200,149,42,0.05)', border: 'rgba(200,149,42,0.15)', numColor: '#C8952A', badge: '⚠️ Urgent', badgeColor: '#C8952A', badgeBg: 'rgba(200,149,42,0.1)' },
}

/**
 * Signs whose existing `body` copy explicitly permits monitoring a single
 * mild episode ("One episode... monitor" / "Missing one meal... monitor").
 * These are the ONLY signs that can produce a MONITOR verdict — and that
 * verdict always carries a hard escalation line. Presentation mapping of
 * EXISTING copy, not new clinical guidance.
 */
export const MONITOR_ELIGIBLE = new Set(['10', '14'])
