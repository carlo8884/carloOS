/**
 * ER vs clinic vs telehealth — setting chooser (not a diagnosis).
 *
 * Conservative: mixed selections always resolve to the more urgent setting.
 * There is no "all clear." Signs are drawn from the existing Vets.co
 * emergency-signs, emergency-triage-card, and telehealth pages (AVMA / AAHA /
 * VECCS / ASPCA framing). QC §1: no diagnosis, no dose, no credential claim.
 */

export type Species = 'dog' | 'cat'
export type Setting = 'er' | 'clinic' | 'telehealth'

export interface Sign {
  id: string
  setting: Setting
  species: Species | 'both'
  title: string
  body: string
}

export const SIGNS: Sign[] = [
  {
    id: 'breathing',
    setting: 'er',
    species: 'both',
    title: 'Difficulty breathing, pale or blue gums',
    body: 'Labored breathing at rest, open-mouth breathing in a cat, or gums that are pale, white, blue, or gray. Go now.',
  },
  {
    id: 'collapse',
    setting: 'er',
    species: 'both',
    title: 'Collapse, unresponsive, or cannot stand',
    body: 'Sudden collapse or a pet that will not get up. Do not wait for another sign.',
  },
  {
    id: 'gdv',
    setting: 'er',
    species: 'dog',
    title: 'Unproductive retching or a hard, bloated belly',
    body: 'Trying to vomit with nothing coming up, especially in a large or deep-chested dog, is treated as bloat (GDV) until a vet says otherwise.',
  },
  {
    id: 'urinary',
    setting: 'er',
    species: 'both',
    title: 'Straining with little or no urine',
    body: 'A blocked urethra is a life-threatening emergency — especially in male cats. Do not wait for a morning clinic slot.',
  },
  {
    id: 'seizure',
    setting: 'er',
    species: 'both',
    title: 'Seizure lasting more than 2–3 minutes, or more than one',
    body: 'A first seizure, a cluster, or a seizure that will not stop needs an emergency hospital. A single brief seizure in a known epileptic that recovers fully is often same-day — when unsure, go.',
  },
  {
    id: 'poison',
    setting: 'er',
    species: 'both',
    title: 'Suspected poisoning',
    body: 'Antifreeze, rodenticide, xylitol, grapes, chocolate, or lilies (cats). Call ASPCA Animal Poison Control at 888-426-4435 and go. Do not induce vomiting unless a vet or poison-control specialist tells you to.',
  },
  {
    id: 'trauma',
    setting: 'er',
    species: 'both',
    title: 'Major trauma or bleeding that will not slow',
    body: 'Hit by a car, a fall from height, a penetrating wound, or bleeding that does not slow with several minutes of firm pressure.',
  },
  {
    id: 'vomit',
    setting: 'clinic',
    species: 'both',
    title: 'Repeated vomiting or diarrhea — pet is still responsive',
    body: 'More than one episode, but the pet is still standing, aware, and not bloated. Same-day clinic or urgent care. Escalate to ER if collapse, blood, or a hard belly appears.',
  },
  {
    id: 'appetite',
    setting: 'clinic',
    species: 'both',
    title: 'Not eating for most of a day',
    body: 'A dog that skips one meal and is otherwise bright can often wait for a same-day or next-morning slot. Cats escalate faster — hepatic lipidosis risk rises with fasting.',
  },
  {
    id: 'limp',
    setting: 'clinic',
    species: 'both',
    title: 'Limping but still putting some weight on the leg',
    body: 'Non-weight-bearing after trauma is closer to ER. Overnight limp that still bears weight is a clinic visit.',
  },
  {
    id: 'ear-eye',
    setting: 'clinic',
    species: 'both',
    title: 'Ear odor, head shaking, or eye squint without injury',
    body: 'Uncomfortable and worth a same-day or next-open clinic visit. A painful, rapidly swelling eye after trauma is more urgent — call ahead.',
  },
  {
    id: 'itch',
    setting: 'clinic',
    species: 'both',
    title: 'Mild itch or hives without facial swelling',
    body: 'Facial swelling, hives plus vomiting, or collapse is ER. Mild itch alone is a clinic or telehealth question.',
  },
  {
    id: 'meds',
    setting: 'telehealth',
    species: 'both',
    title: 'Medication, refill, or “can I give…?” question',
    body: 'The pet is otherwise well. A licensed telehealth vet can often triage the question. Never give human painkillers — acetaminophen and ibuprofen are toxic to cats and risky in dogs.',
  },
  {
    id: 'diet',
    setting: 'telehealth',
    species: 'both',
    title: 'Nutrition or diet question — pet is otherwise well',
    body: 'Food, treats, or a diet change with no vomiting, collapse, or breathing change. Telehealth or a scheduled clinic visit.',
  },
  {
    id: 'followup',
    setting: 'telehealth',
    species: 'both',
    title: 'Stable post-op or chronic-condition check-in',
    body: 'The pet is eating, drinking, and comfortable. A video or chat consult can decide whether an in-person recheck is needed.',
  },
  {
    id: 'behavior',
    setting: 'telehealth',
    species: 'both',
    title: 'Behavior or anxiety question — no injury',
    body: 'New fear, noise reactivity, or house-soiling in an otherwise well pet. Not for sudden collapse or a pet that cannot walk.',
  },
]

export function signsFor(species: Species): Sign[] {
  return SIGNS.filter((s) => s.species === 'both' || s.species === species)
}

export function deriveSetting(selectedIds: readonly string[], species: Species): Setting | null {
  const picked = signsFor(species).filter((s) => selectedIds.includes(s.id))
  if (picked.length === 0) return null
  if (picked.some((s) => s.setting === 'er')) return 'er'
  if (picked.some((s) => s.setting === 'clinic')) return 'clinic'
  return 'telehealth'
}

export const ASPCA_POISON = '888-426-4435'
