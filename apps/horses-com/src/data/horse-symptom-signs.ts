/**
 * Horse symptom signs — shared data module.
 *
 * Single source of truth for the equine emergency/urgent signs used by
 * `/tools/is-this-a-horse-emergency`. Copy is grounded in existing
 * Horses.com owner-side references (colic, choke, laminitis/founder,
 * lameness-basics, first-aid kit, choosing a vet) plus AAEP / Merck
 * equine emergency framing.
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
    num: '01', level: 'emergency' as const, title: 'Classic Colic Red Flags',
    body: 'Rolling, looking at the flank, no manure, severe pain, or a high heart rate if you can check it (resting is typically 28–44 bpm; above 60 is concerning, above 80 raises surgical odds). These are the classic colic red flags on Horses.com. Call your equine veterinarian now. Do not give Banamine unless your vet has authorized it for this episode. Remove feed. Brief walking is a bridge, not a treatment.',
  },
  {
    num: '02', level: 'emergency' as const, title: 'Choke (Esophageal Obstruction)',
    body: 'Feed and saliva from both nostrils, repeated swallowing, coughing, or a stretched, arched neck. Equine choke blocks the esophagus, not the airway — the horse can usually still breathe — but it is an emergency because of aspiration and esophageal damage. Remove all feed and water, keep the head lowered, and call your veterinarian. Do not force food or water down.',
  },
  {
    num: '03', level: 'emergency' as const, title: 'Non-Weight-Bearing Lameness or Suspected Fracture',
    body: 'A horse that will not bear weight on a limb, hops, or is suspected of a fracture is an emergency. AAEP grade 5 is minimal weight-bearing or inability to move. Do not force the horse to walk. Call your equine veterinarian now. Mild, consistent trot lameness without non-weight-bearing is a different sign.',
  },
  {
    num: '04', level: 'emergency' as const, title: 'Heavy or Unstoppable Bleeding',
    body: 'Heavy or spurting bleeding that will not slow with several minutes of firm pressure. Apply pressure with a clean cloth, keep it there, and call your veterinarian. First aid stabilizes until the vet arrives; it does not replace them.',
  },
  {
    num: '05', level: 'emergency' as const, title: 'Down and Cannot Rise',
    body: 'A horse that is down and cannot get up, throws itself to the ground, or cannot stand quietly is an emergency — severe colic, neurologic crisis, or collapse. Do not wait for another sign. Keep people safe, keep the area clear, and call your equine veterinarian now.',
  },
  {
    num: '06', level: 'emergency' as const, title: 'Pale, Brick-Red, Purple, or Blue Gums',
    body: 'Normal equine gums are pink and moist, with capillary refill under about two seconds. Pale or white gums indicate shock or blood loss. Brick-red, purple, or blue gums indicate endotoxemia or oxygen debt — classic late colic and shock signs. If you are seeing those colors, go now.',
  },
  {
    num: '07', level: 'emergency' as const, title: 'Acute Laminitis or Founder',
    body: 'A bounding digital pulse, warm hooves, a short “pottery” gait, shifting weight, or the sawhorse stance (weight rocked onto the hindquarters). Acute laminitis is a veterinary emergency — the window before irreversible laminar failure can be hours to a few days. Move the horse onto deep soft footing, remove grain and lush pasture, do not force walking, and call your veterinarian.',
  },
  {
    num: '08', level: 'emergency' as const, title: 'Difficulty Breathing',
    body: 'Labored breathing at rest, flared nostrils, an elevated respiratory rate well above the typical 8–16 breaths per minute, or any rapid respiratory deterioration. Call your equine veterinarian now. Do not wait for this tool. Choke can look distressing but is a different sign — if the horse cannot move air, treat it as emergency either way.',
  },
  {
    num: '09', level: 'urgent' as const, title: 'Isolated Mild Scrape',
    body: 'One isolated mild scrape, not near a joint, not bleeding heavily, with normal energy and manure: monitor closely for a short window. Clean it, keep it covered if your vet has shown you how, and watch for heat, swelling, or lameness. A deep wound, a wound near a joint, or one that may need stitches: vet today. Heavy or spurting bleeding is an emergency, not this sign.',
  },
  {
    num: '10', level: 'urgent' as const, title: 'Skipped One Handful of Grain — Still Energetic',
    body: 'Missing one handful of grain in an otherwise bright horse with normal manure, normal energy, and no pawing or rolling: monitor closely. Inappetence is often the earliest colic sign, so stay close. Complete refusal, no manure, looking at the flank, pawing, rolling, or a high heart rate: that is colic — go now. Any skipped meal with lethargy or abnormal vitals: vet today.',
  },
  {
    num: '11', level: 'urgent' as const, title: 'Not Eating — More Than One Skipped Meal',
    body: 'A horse that walks away from hay or grain for more than one meal, especially with reduced manure, needs same-day veterinary evaluation. Inappetence is often the earliest colic sign. Escalate to emergency if rolling, looking at the flank, no manure, a high heart rate, or severe pain appears.',
  },
  {
    num: '12', level: 'urgent' as const, title: 'Fever or Markedly High Temperature',
    body: 'Textbook resting temperature is about 99–101°F (37.5–38.5°C). A high temperature with an otherwise stable horse: same-day veterinary care. A high temperature plus markedly abnormal vitals, colic red flags, laminitis signs, or rapid deterioration: go now. Learn your own horse’s baseline when it is well.',
  },
  {
    num: '13', level: 'urgent' as const, title: 'Pawing or Stretching — No Other Colic Red Flags',
    body: 'Isolated pawing or stretching as if to urinate, with manure still passing and a normal heart rate: same-day veterinary evaluation. The AAEP recommends calling at the first sign of colic rather than watch-and-wait — early trivial and catastrophic colic look alike. Rolling, no manure, looking at the flank with pain, or a high heart rate is an emergency, not this sign.',
  },
  {
    num: '14', level: 'urgent' as const, title: 'Eye Injury or Sudden Eye Pain',
    body: 'Squinting, a cloudy or swollen eye, discharge after trauma, or a horse that will not open the eye. First-aid guidance treats eye injuries as call-the-vet, not wait-and-see. Same-day at minimum; do not apply leftover ointment unless your veterinarian directed it for this horse.',
  },
  {
    num: '15', level: 'urgent' as const, title: 'Deep Wound or Wound Near a Joint',
    body: 'A deep wound, a wound near a joint or tendon sheath, or one that may need stitching is best seen within hours. Same-day veterinary care. Heavy or unstoppable bleeding is an emergency, not this sign. An isolated mild scrape on otherwise normal skin is a different sign.',
  },
]

export const STYLES = {
  emergency: { bg: 'rgba(200,74,42,0.05)', border: 'rgba(200,74,42,0.18)', numColor: '#C84A2A', badge: '🚨 Emergency', badgeColor: '#C84A2A', badgeBg: 'rgba(200,74,42,0.1)' },
  urgent:    { bg: 'rgba(200,149,42,0.05)', border: 'rgba(200,149,42,0.15)', numColor: '#C8952A', badge: '⚠️ Urgent', badgeColor: '#C8952A', badgeBg: 'rgba(200,149,42,0.1)' },
}

/**
 * Signs whose existing `body` copy explicitly permits monitoring a single
 * mild episode ("One isolated mild scrape... monitor" / "Missing one handful
 * of grain... monitor"). These are the ONLY signs that can produce a MONITOR
 * verdict — and that verdict always carries a hard escalation line.
 * Presentation mapping of EXISTING copy, not new clinical guidance.
 */
export const MONITOR_ELIGIBLE = new Set(['09', '10'])
