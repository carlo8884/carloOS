/**
 * /ask safety layer for Dog.com.
 *
 * Front-line filter that runs BEFORE the question reaches Anthropic.
 * If it matches anything here, we don't bill an API call — we route the
 * user to the right human/emergency resource instead.
 *
 * Per the AI assistant brief (PR #67), this is layer 1 of the 5-layer
 * safety stack. Cheap, fast, and the most important one.
 */

export interface SafetyDecision {
  /** true = allow the question through to Anthropic */
  allow: boolean
  /** When allow=false, the canned response to show instead. */
  cannedResponse?: string
  /** Reason category, logged for periodic audit. */
  reason?: 'emergency' | 'diagnosis-request' | 'dosing-request' | 'off-topic' | 'too-long' | 'too-short'
}

const EMERGENCY_PATTERNS = [
  /\b(my (dog|puppy|pet) (is dying|just died|won'?t (wake|breathe)|stopped breathing|collaps))/i,
  /\b(emergenc|poison(ed|ing)|toxic|swallow(ed)|ingest(ed)|ate)\b.*(chocolate|grapes?|raisins?|onion|xylitol|antifreeze|rat poison|advil|tylenol|ibuprofen|aspirin|marijuana|edibles?)/i,
  /\b(seizure|seizing|convulsion|stroke|heart attack|cardiac arrest|hit by car|hit by a car|drowning)\b/i,
  /\b(bloat|gdv|gastric dilatation)\b/i,
  /\b(can'?t breathe|trouble breathing|gasping|choking)\b/i,
  /\b(bleeding (heavily|profusely|won'?t stop)|hemorrhag)/i,
]

const DIAGNOSIS_PATTERNS = [
  /\b(what (is wrong|condition|disease|illness)|diagnos(e|is)|does my (dog|puppy|pet) have)\b/i,
  /\b(symptoms (of|for)|signs (of|that))\b.+\?/i,
]

const DOSING_PATTERNS = [
  /\b(how much|what dose|dosage|how many (mg|milligrams|ml|tablets|pills))\b.+(give|administer|feed)/i,
  /\b(can I give my (dog|puppy|pet))\b.+(benadryl|tylenol|advil|aspirin|ibuprofen|melatonin|cbd|cannabis|insulin)/i,
]

const OFF_TOPIC_PATTERNS = [
  // Block anything clearly not pet-related to avoid burning Anthropic credits on jokes/tests
  /\b(write (me )?a (poem|story|essay|code|email)|generate (a |an )?(image|video|song))\b/i,
  /\b(election|political|politician|trump|biden|harris|musk|crypto|bitcoin|stock market)\b/i,
]

export function safetyCheck(rawInput: string): SafetyDecision {
  const input = rawInput.trim()

  if (input.length < 5) {
    return {
      allow: false,
      reason: 'too-short',
      cannedResponse: "Please ask a more specific question about dog care, nutrition, breed health, or training.",
    }
  }

  if (input.length > 500) {
    return {
      allow: false,
      reason: 'too-long',
      cannedResponse: "Please keep your question under 500 characters. Longer questions cost more to process and rarely produce better answers.",
    }
  }

  for (const pattern of EMERGENCY_PATTERNS) {
    if (pattern.test(input)) {
      return {
        allow: false,
        reason: 'emergency',
        cannedResponse:
          "🚨 This sounds like an emergency. Please call your vet, the nearest 24-hour emergency animal hospital, or the ASPCA Animal Poison Control Center: **(888) 426-4435** (a $95 consultation fee may apply).\n\nThis tool is for general dog care questions only. It cannot diagnose conditions or give emergency advice. Please call a real veterinarian now.",
      }
    }
  }

  for (const pattern of DIAGNOSIS_PATTERNS) {
    if (pattern.test(input)) {
      return {
        allow: false,
        reason: 'diagnosis-request',
        cannedResponse:
          "I can't diagnose conditions — only a veterinarian who can examine your dog can do that. I can answer general questions about breed predispositions, common conditions, or what symptoms typically lead a vet to recommend specific tests. Try rephrasing as a general question.\n\nFor diagnosis, book a visit with your vet or use a vet telehealth service like Vetster or Pawp.",
      }
    }
  }

  for (const pattern of DOSING_PATTERNS) {
    if (pattern.test(input)) {
      return {
        allow: false,
        reason: 'dosing-request',
        cannedResponse:
          "I never recommend specific drug doses — even for over-the-counter medications, the right dose depends on your dog's weight, kidney/liver function, other medications, and condition severity. **Always ask your veterinarian** before giving any medication.\n\nFor over-the-counter questions, the ASPCA Animal Poison Control hotline is (888) 426-4435.",
      }
    }
  }

  for (const pattern of OFF_TOPIC_PATTERNS) {
    if (pattern.test(input)) {
      return {
        allow: false,
        reason: 'off-topic',
        cannedResponse:
          "This tool only answers dog care questions. Please ask about nutrition, breed health, training, or general pet ownership.",
      }
    }
  }

  return { allow: true }
}

/**
 * System prompt enforcing the editorial position + hard rules.
 * This is layer 2 of the safety stack.
 */
export const SYSTEM_PROMPT = `You are an AI assistant on Dog.com, an editorial dog care reference.

YOUR ROLE:
- Answer general dog care, nutrition, training, and breed questions
- Cite authoritative sources when relevant (WSAVA, AAFCO, AVMA, AAHA, OFA, CHIC, peer-reviewed veterinary literature)
- Keep answers conversational but informative — aim for 80-200 words
- Use plain English, not jargon

HARD RULES (NEVER VIOLATE):
1. NEVER diagnose conditions. If asked "what's wrong with my dog", redirect to "you need a vet to examine your dog"
2. NEVER recommend specific drug doses, including OTC medications. Defer to a veterinarian
3. NEVER suggest skipping vet visits, vaccinations, or recommended preventive care
4. NEVER recommend raw diets without acknowledging the FDA + AVMA + WSAVA positions on infection risk
5. NEVER claim to be a veterinarian or hold credentials. You are an AI assistant providing general guidance only
6. ALWAYS end the response with: "Always consult your veterinarian for your specific dog's situation."

WHEN UNSURE:
- Say so. "I'd recommend asking your vet about this specific scenario" is a better answer than guessing
- Don't pad responses with unrelated information

FORMAT:
- Plain text. No markdown headers. No bullet lists unless directly useful.
- 80-200 words ideal. 300 max.`
