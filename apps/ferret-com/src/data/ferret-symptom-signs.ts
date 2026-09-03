/**
 * Ferret symptom signs — shared data module.
 *
 * Single source of truth for the ferret emergency/urgent signs used by
 * `/tools/is-this-a-ferret-emergency`. Copy is grounded in existing
 * Ferret.com owner-side references (emergency warning signs, GI blockage,
 * insulinoma, toxic foods, dead-sleep) plus Quesenberry & Carpenter /
 * Merck / AEMV / ASPCA framing.
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
    num: '01', level: 'emergency' as const, title: 'Labored or Open-Mouth Breathing',
    body: 'Ferrets do not pant to cool down the way dogs do. Rapid, labored, or open-mouth breathing at rest, exaggerated chest or belly effort, or blue-tinged gums is a ferret emergency — possible heart failure, pneumonia, or chest fluid. Tissue oxygen debt begins within minutes. Do not wait for another sign.',
  },
  {
    num: '02', level: 'emergency' as const, title: 'Pale, White, Blue, or Grey Gums',
    body: 'Normal ferret gums are pink and moist. Pale or white gums indicate shock, severe anemia, or blood loss. Blue or grey gums indicate oxygen deprivation. If you are seeing white or blue, go to a ferret-capable emergency hospital immediately.',
  },
  {
    num: '03', level: 'emergency' as const, title: 'Collapse, Unresponsive, or Inability to Stand',
    body: 'A ferret that collapses while awake, will not get up, or cannot be roused with gentle warming and a strong scent is an emergency — hypoglycemic crisis (insulinoma), heart disease, severe anemia, or toxin. Deep “dead sleep” is common, but do not assume it if the ferret was just active, gums are pale, or you cannot wake it. If conscious and able to swallow, a dab of a sugar source on the gums is a stabilizing step on the way to the vet — it is not a treatment.',
  },
  {
    num: '04', level: 'emergency' as const, title: 'Seizures, Tremors, or Stargazing',
    body: 'Seizures, whole-body tremors, or staring blankly upward (“stargazing”) can signal a hypoglycemic crisis from insulinoma, a toxin, or a neurologic emergency. First seizure ever: go now. A seizure that does not stop, or more than one in a short window: emergency. Prolonged seizures cause brain damage. When unsure, go.',
  },
  {
    num: '05', level: 'emergency' as const, title: 'Known Toxin Ingestion',
    body: 'Chocolate (especially dark or baking), xylitol (sugar-free gum, some peanut butters), ibuprofen, acetaminophen, antifreeze, and rodenticide are high-risk in a 1 kg ferret. Call ASPCA Animal Poison Control (888-426-4435) and go. Do not wait for symptoms. Do not induce vomiting unless a veterinarian or poison-control specialist tells you to.',
  },
  {
    num: '06', level: 'emergency' as const, title: 'Trauma or Bleeding That Will Not Slow',
    body: 'A fall, a bite or penetrating wound, being stepped on, or bleeding that does not slow with several minutes of firm pressure. Apply pressure with a clean cloth, keep it there, and go. Ferrets hide injury — any known major trauma is an emergency even if the ferret is still walking.',
  },
  {
    num: '07', level: 'emergency' as const, title: 'Bloated, Hard, or Painful Belly',
    body: 'A belly that is visibly bloated, tight, or painful to a light touch — especially with restlessness, teeth-grinding, or unproductive retching — can mean gastrointestinal blockage, urinary obstruction, or another surgical emergency. Ferrets swallow rubber and foam; a hard abdomen is treat-as-emergency until a veterinarian examines it.',
  },
  {
    num: '08', level: 'emergency' as const, title: 'Inability to Urinate or Unproductive Straining',
    body: 'A ferret — especially a male with adrenal disease — repeatedly straining, crying, and producing little or no urine is a urethral obstruction until a veterinarian says otherwise. A complete blockage is life-threatening as the bladder overfills. Do not wait for a morning clinic slot. Straining to defecate with nothing produced can also mean a GI obstruction — same urgency.',
  },
  {
    num: '09', level: 'emergency' as const, title: 'Sudden Hind Weakness or Profound Weakness',
    body: 'Sudden inability to use the back legs, dragging the rear, or profound whole-body weakness (a ferret that was just playing and now cannot stand) can be a hypoglycemic crisis, spinal or neurologic emergency, or severe systemic illness. Ferrets crash fast. Go now. Do not wait to see if walking returns.',
  },
  {
    num: '10', level: 'emergency' as const, title: 'Protracted Vomiting or Diarrhea with Lethargy',
    body: 'Repeated vomiting or diarrhea paired with a quiet, weak, or hiding ferret is a ferret emergency — fluid loss, blockage, ulcer, or toxin can turn critical in hours. Black tarry stool or fresh blood with lethargy belongs here too. Do not “wait it out.” A single isolated soft stool in an otherwise bright ferret is a different sign.',
  },
  {
    num: '11', level: 'urgent' as const, title: 'Isolated Mild Sneeze',
    body: 'One isolated mild sneeze, with no labored breathing, no discharge, and normal energy: monitor closely for a short window. Ferrets can catch human influenza — a cluster of sneezes, any breathing effort, lethargy, or a ferret that stops eating: vet today. Open-mouth or labored breathing is an emergency, not this sign.',
  },
  {
    num: '12', level: 'urgent' as const, title: 'Skipped One Meal — Still Energetic',
    body: 'Missing one meal in an otherwise bright, playful ferret that is still drinking and using the litter box: monitor closely. Ferrets have a rapid metabolism and a high insulinoma risk, so anorexia is more dangerous than in dogs. Complete refusal for most of a day, or any skipped meal with lethargy, teeth-grinding, or a hard belly: vet today or now.',
  },
  {
    num: '13', level: 'urgent' as const, title: 'Not Eating for a Day — Especially with Lethargy',
    body: 'A ferret that refuses food for a day, especially with lethargy, teeth-grinding, or hiding, needs same-day exotic-mammal care. Anorexia can point to blockage, ulcer, or insulinoma — all time-sensitive. Escalate to emergency if collapse, a hard belly, unproductive straining, or labored breathing appears.',
  },
  {
    num: '14', level: 'urgent' as const, title: 'Teeth-Grinding, Hunched Posture, or Hiding',
    body: 'Teeth-grinding, a hunched belly-tucked posture, or a usually social ferret that hides and will not play. Ferrets conceal pain. Same-day evaluation. If hiding is paired with collapse, labored breathing, a hard belly, or unproductive straining, treat it as emergency.',
  },
  {
    num: '15', level: 'urgent' as const, title: 'Blood in Stool or Urine — Still Bright',
    body: 'Fresh blood or black tarry stool, or blood-tinged urine, in a ferret that is still energetic: same-day exotic-mammal care. Paired with lethargy, collapse, pale gums, or a hard belly: emergency. Do not wait for a second bloody episode to decide.',
  },
]

export const STYLES = {
  emergency: { bg: 'rgba(200,74,42,0.05)', border: 'rgba(200,74,42,0.18)', numColor: '#C84A2A', badge: '🚨 Emergency', badgeColor: '#C84A2A', badgeBg: 'rgba(200,74,42,0.1)' },
  urgent:    { bg: 'rgba(200,149,42,0.05)', border: 'rgba(200,149,42,0.15)', numColor: '#C8952A', badge: '⚠️ Urgent', badgeColor: '#C8952A', badgeBg: 'rgba(200,149,42,0.1)' },
}

/**
 * Signs whose existing `body` copy explicitly permits monitoring a single
 * mild episode ("One isolated mild sneeze... monitor" / "Missing one meal...
 * monitor"). These are the ONLY signs that can produce a MONITOR verdict —
 * and that verdict always carries a hard escalation line. Presentation
 * mapping of EXISTING copy, not new clinical guidance.
 */
export const MONITOR_ELIGIBLE = new Set(['11', '12'])
