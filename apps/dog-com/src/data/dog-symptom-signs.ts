/**
 * Dog symptom signs — shared data module.
 *
 * Single source of truth for the 15 emergency/urgent dog symptoms.
 * Lifted verbatim from the original inline data in
 * `app/health/dog-symptoms-guide/page.tsx` so that BOTH the static guide
 * and the `/tools/is-this-a-dog-emergency` triage helper render identical,
 * primary-source-backed (AVMA / Merck / AAHA / ASPCA) copy.
 *
 * DO NOT invent new signs, re-grade severities, or alter `body` copy.
 * `level` is the only triage tier; the helper maps presentation only.
 */

export interface Sign {
  num: string
  level: 'emergency' | 'urgent'
  title: string
  body: string
}

export const SIGNS: Sign[] = [
  {
    num: '01', level: 'emergency' as const, title: 'Difficulty Breathing or Labored Breathing',
    body: 'Open-mouth breathing in a dog at rest, exaggerated chest/belly movement, extended neck with elbows out, or blue/grey/white gum color indicates oxygen deprivation. This is the most urgent presentation in veterinary emergency medicine — tissue death begins within minutes. Do not wait for another symptom.',
  },
  {
    num: '02', level: 'emergency' as const, title: 'Pale, White, Blue, or Grey Gums',
    body: 'Normal dog gums are bubble-gum pink and moist. Pale or white gums indicate shock or severe blood loss — often from a ruptured splenic mass (hemangiosarcoma). Blue/grey gums indicate oxygen deprivation. Check gums regularly so you know your dog\'s baseline. If you\'re seeing white or blue, go immediately.',
  },
  {
    num: '03', level: 'emergency' as const, title: 'Sudden Collapse or Inability to Stand',
    body: 'A dog that collapses, cannot support its own weight, or falls repeatedly has something seriously wrong — cardiac event, internal bleeding, neurological emergency, or extreme pain. Do not assume it will pass.',
  },
  {
    num: '04', level: 'emergency' as const, title: 'Distended Abdomen with Retching',
    body: 'A belly that is visibly bloated or hard — particularly in a large or deep-chested breed — combined with retching or restlessness is Gastric Dilatation-Volvulus (GDV/Bloat) until proven otherwise. GDV is fatal within hours without surgery. At-risk breeds: Great Danes, German Shepherds, Standard Poodles, Weimaraners, Goldens, Labs.',
  },
  {
    num: '05', level: 'emergency' as const, title: 'Seizure Lasting More Than 2 Minutes',
    body: 'First seizure ever: go to emergency immediately. A known epileptic dog with a brief seizure: call your vet. Seizure lasting more than 2 minutes (status epilepticus) or multiple seizures in 24 hours: emergency. Prolonged seizures cause brain damage.',
  },
  {
    num: '06', level: 'emergency' as const, title: 'Suspected Poisoning or Toxic Ingestion',
    body: 'Call ASPCA Animal Poison Control (888-426-4435) and your emergency vet simultaneously. Do not wait for symptoms — for many toxins (xylitol, rat poison, certain mushrooms), treatment is most effective before symptoms appear.',
  },
  {
    num: '07', level: 'emergency' as const, title: 'Uncontrolled Bleeding',
    body: 'Wounds that do not stop bleeding with 5–10 minutes of firm continuous pressure. Deep lacerations, puncture wounds from animal bites, or wounds near major vessels. Apply pressure with clean cloth, keep it there, go.',
  },
  {
    num: '08', level: 'emergency' as const, title: 'Eye Injuries or Sudden Eye Changes',
    body: 'The eye is time-sensitive. Squinting with pawing at the eye, sudden cloudiness, redness with discharge, or any trauma to the eye area requires same-day care — hours can determine whether vision is preserved. Do not put anything in the eye and prevent pawing.',
  },
  {
    num: '09', level: 'urgent' as const, title: 'Vomiting or Diarrhea with Blood',
    body: 'One episode in an otherwise normal dog: monitor. More than 3 episodes in 24 hours, any blood (red or dark brown/coffee ground appearance), or a lethargic dog not eating: vet today. Hemorrhagic gastroenteritis can cause dangerous fluid loss within hours.',
  },
  {
    num: '10', level: 'urgent' as const, title: 'Straining to Urinate or Not Urinating',
    body: 'A dog repeatedly squatting/posturing to urinate with little or no output, crying while urinating, or producing blood-tinged urine needs same-day evaluation. A complete blockage is life-threatening within 24–48 hours.',
  },
  {
    num: '11', level: 'urgent' as const, title: 'Sudden Limb Weakness or Paralysis',
    body: 'Sudden hindlimb weakness, inability to walk, or dragging of rear feet: spinal cord injury (IVDD) until proven otherwise. Prognosis for recovery is significantly better when surgery is performed within 24 hours of severe onset.',
  },
  {
    num: '12', level: 'urgent' as const, title: 'Head Tilt, Circling, or Loss of Balance',
    body: 'Sudden head tilt, circling in one direction, falling to one side, or rapid involuntary eye movement (nystagmus) indicates vestibular disease. Requires same-day evaluation to distinguish peripheral (inner ear, often self-limiting) from central (brain, more serious).',
  },
  {
    num: '13', level: 'urgent' as const, title: 'Swollen Lymph Nodes',
    body: 'Lymph nodes you can feel under the jaw, in front of the shoulders, behind the knees, and in the groin. Bilateral firm swelling in multiple locations is the most common presentation of lymphoma. Evaluate within a few days — lymphoma treated early has more options.',
  },
  {
    num: '14', level: 'urgent' as const, title: 'Complete Food Refusal with Other Changes',
    body: 'Missing one meal in an otherwise normal dog: monitor. Complete refusal for 24+ hours with lethargy, vomiting, or behavioral changes: vet within 24 hours. The refusal matters less than what accompanies it.',
  },
  {
    num: '15', level: 'urgent' as const, title: 'Unexplained Weight Loss',
    body: 'A dog losing weight without dietary changes warrants investigation. In middle-aged and senior dogs, unexplained weight loss is often the earliest sign of cancer, diabetes, kidney disease, or GI conditions. Catching these early makes a real difference in outcome.',
  },
]

export const STYLES = {
  emergency: { bg: 'rgba(200,74,42,0.05)', border: 'rgba(200,74,42,0.18)', numColor: '#C84A2A', badge: '🚨 Emergency', badgeColor: '#C84A2A', badgeBg: 'rgba(200,74,42,0.1)' },
  urgent:    { bg: 'rgba(200,149,42,0.05)', border: 'rgba(200,149,42,0.15)', numColor: '#C8952A', badge: '⚠️ Urgent', badgeColor: '#C8952A', badgeBg: 'rgba(200,149,42,0.1)' },
}

/**
 * Signs whose existing `body` copy explicitly permits monitoring a single
 * mild episode ("One episode... monitor" / "Missing one meal... monitor").
 * These are the ONLY signs that can produce a MONITOR verdict in the triage
 * helper — and that verdict always carries a hard escalation line.
 * Presentation mapping of EXISTING copy, not new clinical guidance.
 */
export const MONITOR_ELIGIBLE = new Set(['09', '14'])
