/**
 * Breed Match wizard questions and progress helpers. Kept apart from
 * wizard-logic.ts so the stepper can render without bundling the breed data;
 * the client loads the scoring module (and breeds.ts) as a separate chunk.
 */

// ─────────────────────────────────────────────
// QUESTION + ANSWER TYPES
// ─────────────────────────────────────────────

export type QuestionKey =
  | 'home'
  | 'timeDaily'
  | 'experience'
  | 'activity'
  | 'household'
  | 'grooming'
  | 'noise'

export interface AnswerOption {
  value: string
  label: string
  sub?: string
}

export interface Question {
  key: QuestionKey
  prompt: string
  helper?: string
  options: AnswerOption[]
}

export type Answers = Partial<Record<QuestionKey, string>>

// ─────────────────────────────────────────────
// QUESTION DEFINITIONS
// ─────────────────────────────────────────────

export const QUESTIONS: Question[] = [
  {
    key: 'home',
    prompt: 'What kind of home do you have?',
    helper: 'Living space is the strongest filter on which breeds realistically fit.',
    options: [
      { value: 'apartment', label: 'Apartment or condo', sub: 'No private yard, shared walls' },
      { value: 'house-small-yard', label: 'House with a small yard', sub: 'Some outdoor space' },
      { value: 'house-big-yard', label: 'House with a large yard', sub: 'Room to run' },
      { value: 'rural', label: 'Rural property / acreage', sub: 'Open land and space' },
    ],
  },
  {
    key: 'timeDaily',
    prompt: 'How much time can you give a dog each day?',
    helper: 'Exercise and attention needs vary enormously between breeds.',
    options: [
      { value: 'low', label: 'Under 1 hour', sub: 'A short walk and some play' },
      { value: 'moderate', label: '1 to 2 hours', sub: 'A solid daily walk plus playtime' },
      { value: 'high', label: '2 to 3 hours', sub: 'Long walks, training, active play' },
      { value: 'very-high', label: '3+ hours', sub: 'A dog can be at the center of my day' },
    ],
  },
  {
    key: 'experience',
    prompt: 'How much dog experience do you have?',
    helper: 'Some breeds forgive beginner mistakes; others need a confident handler.',
    options: [
      { value: 'first-time', label: 'First-time owner', sub: 'This is my first dog' },
      { value: 'some', label: 'Some experience', sub: 'I have owned a dog before' },
      { value: 'experienced', label: 'Experienced owner', sub: 'I have trained challenging dogs' },
    ],
  },
  {
    key: 'activity',
    prompt: 'How active is your lifestyle?',
    helper: 'A breed that matches your energy is far more likely to thrive.',
    options: [
      { value: 'relaxed', label: 'Relaxed', sub: 'Mostly calm days, gentle outings' },
      { value: 'moderate', label: 'Moderately active', sub: 'Regular walks, weekend outings' },
      { value: 'active', label: 'Very active', sub: 'Hiking, running, daily exercise' },
    ],
  },
  {
    key: 'household',
    prompt: 'Who shares your home?',
    helper: 'Kids and resident dogs change which breeds are the safest fit.',
    options: [
      { value: 'adults', label: 'Adults only', sub: 'No kids, no other dogs' },
      { value: 'kids', label: 'Young kids', sub: 'Children in the home' },
      { value: 'other-dogs', label: 'Another dog', sub: 'A resident dog already lives here' },
      { value: 'kids-and-dogs', label: 'Kids and another dog', sub: 'A full, busy household' },
    ],
  },
  {
    key: 'grooming',
    prompt: 'How much grooming and shedding can you tolerate?',
    helper: 'Coat care is an ongoing cost in time and money — be honest here.',
    options: [
      { value: 'minimal', label: 'As little as possible', sub: 'Low shedding, low upkeep' },
      { value: 'some', label: 'Some upkeep is fine', sub: 'Regular brushing is okay' },
      { value: 'any', label: 'Grooming does not bother me', sub: 'Happy to brush daily or book groomers' },
    ],
  },
  {
    key: 'noise',
    prompt: 'How sensitive are you to barking and vocal dogs?',
    helper: 'Some breeds are notably vocal — a real factor in apartments and shared walls.',
    options: [
      { value: 'quiet', label: 'I need a quiet dog', sub: 'Barking is a deal-breaker' },
      { value: 'some', label: 'Some barking is fine', sub: 'Occasional noise is okay' },
      { value: 'any', label: 'Noise does not bother me', sub: 'A talkative dog is welcome' },
    ],
  },
]

export function isComplete(answers: Answers): boolean {
  return QUESTIONS.every((q) => Boolean(answers[q.key]))
}

export function progressPercent(answers: Answers): number {
  const answered = QUESTIONS.filter((q) => answers[q.key]).length
  return Math.round((answered / QUESTIONS.length) * 100)
}
