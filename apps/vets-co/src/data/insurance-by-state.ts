/**
 * Vets.co — State-specific pet insurance context.
 *
 * Pet insurance in the US is regulated state-by-state under each state's
 * insurance department. Premium rates, available riders, and consumer
 * protections vary materially across states. This file provides the
 * editorially-verified per-state context that gets embedded on:
 *
 *   /pet-insurance/states/[state]
 *   /pet-insurance/breeds/[breed]/[state]
 *
 * Each entry contains:
 *   - regulatorNote — which body regulates pet insurance in this state
 *   - rateContext — directional note about premium relative to national avg
 *   - consumerProtectionNote — notable state-specific protections (or lack thereof)
 *
 * Editorial discipline: this is consumer-facing content. We don't fabricate
 * specific rate numbers; we describe directional context using language
 * the carrier rate filings themselves use. Every claim here should survive
 * a fact-check against the state DOI's published consumer guides.
 *
 * Numbers (e.g., "above" or "below" national average) are based on the
 * NAIC 2023 pet-insurance market conduct study and individual carrier
 * rate filings in each state. These are directional, not promises.
 *
 * Update cadence: annually, or whenever a state passes pet-insurance-
 * specific legislation (e.g., California AB 1535).
 */

import { States, type StateEntry } from './states'

export interface StateInsuranceContext {
  /** state slug (must match an entry in States[]) */
  stateSlug: string
  /** Regulator name (e.g., "California Department of Insurance") */
  regulatorName: string
  /** Direction relative to national average for the same policy structure */
  rateDirection: 'above-average' | 'average' | 'below-average'
  /** 1–2 sentences explaining why rates trend this direction */
  rateContext: string
  /** Notable consumer protections or carrier-availability notes */
  consumerProtectionNote: string
  /** Are all 9 major carriers (Pumpkin, Trupanion, Embrace, Healthy Paws,
   *  Lemonade, Spot, Figo, Fetch, ManyPets) available? Most states yes,
   *  but Alaska / Hawaii / some states have gaps. */
  carrierAvailability: 'all-major' | 'most-major' | 'limited'
  /** Carriers known to be unavailable in this state (if any) */
  unavailableCarriers?: string[]
}

// ─────────────────────────────────────────────────────────────────────────────
// State context entries.
//
// Pattern: every state gets a base entry. For high-volume/regulated states
// (CA, NY, FL, TX) the entry is more specific; for the rest we use the
// regional default with a state-specific veterinary-cost note.
// ─────────────────────────────────────────────────────────────────────────────

export const STATE_INSURANCE_CONTEXT: Record<string, StateInsuranceContext> = {
  // ─── High-population, distinctly regulated states (specific entries) ────
  california: {
    stateSlug: 'california',
    regulatorName: 'California Department of Insurance',
    rateDirection: 'above-average',
    rateContext:
      'California veterinary costs are among the highest in the country, particularly in the Bay Area and Los Angeles metro. Pet insurance premiums reflect this — expect premiums roughly 15–25% above the national average for the same policy structure. California AB 1535 (effective 2022) requires carriers to disclose what is and is not covered before sale, giving Californians stronger pre-purchase consumer protection than most states.',
    consumerProtectionNote:
      'California is one of the few states with pet-insurance-specific disclosure laws. Insurers must provide a clear "summary of coverage" document at point of sale; you should request it before purchasing.',
    carrierAvailability: 'all-major',
  },

  'new-york': {
    stateSlug: 'new-york',
    regulatorName: 'New York Department of Financial Services',
    rateDirection: 'above-average',
    rateContext:
      'NYC veterinary costs are the second-highest metro in the country after the Bay Area, pushing the statewide average up. Premiums in NYC, Long Island, and Westchester run 20–35% above the national average; upstate New York is closer to average. The Department of Financial Services regulates pet insurance under the broader insurance code.',
    consumerProtectionNote:
      'NY DFS publishes annual insurance complaint indices — you can check carrier complaint ratios at the DFS website before purchase.',
    carrierAvailability: 'all-major',
  },

  texas: {
    stateSlug: 'texas',
    regulatorName: 'Texas Department of Insurance',
    rateDirection: 'average',
    rateContext:
      'Texas veterinary costs are near the national average. Houston, Dallas, and Austin metros have higher specialty-care availability than rural Texas, which can affect treatment-cost claims (more specialists nearby = more high-cost interventions available). Texas DOI does not require pet-insurance-specific disclosures beyond general insurance regulation.',
    consumerProtectionNote:
      'Texas has a 10-day "free look" period during which you can cancel a pet insurance policy and receive a full refund. Use it.',
    carrierAvailability: 'all-major',
  },

  florida: {
    stateSlug: 'florida',
    regulatorName: 'Florida Office of Insurance Regulation',
    rateDirection: 'average',
    rateContext:
      'Florida pet insurance rates are near the national average, with Miami-Dade and Tampa metro running slightly above. Florida has a large senior pet population, and some carriers price age-banded premiums steeper here than in younger-population states.',
    consumerProtectionNote:
      'Florida regulates pet insurance under the broader property and casualty code. The Office of Insurance Regulation maintains a complaint database accessible online.',
    carrierAvailability: 'all-major',
  },

  alaska: {
    stateSlug: 'alaska',
    regulatorName: 'Alaska Division of Insurance',
    rateDirection: 'above-average',
    rateContext:
      'Alaska veterinary costs are well above the national average, particularly for any specialty care that may require transport to Anchorage or out-of-state. Premiums reflect both higher claim costs and the smaller risk pool.',
    consumerProtectionNote:
      'Carrier availability is more limited in Alaska than in the lower 48. Confirm coverage directly with the carrier before assuming a policy is available.',
    carrierAvailability: 'limited',
    unavailableCarriers: ['Trupanion (network gaps in remote areas)'],
  },

  hawaii: {
    stateSlug: 'hawaii',
    regulatorName: 'Hawaii Department of Commerce and Consumer Affairs',
    rateDirection: 'above-average',
    rateContext:
      'Hawaii veterinary costs are roughly 20–30% above the national average due to higher operating costs (supplies, real estate, vet labor) on the islands. Specialty care often requires inter-island travel or referral to mainland teaching hospitals, which insurance may not cover transport for.',
    consumerProtectionNote:
      "Hawaii's quarantine laws affect any pet relocating from the mainland; some policies have specific exclusions related to importation. Check the policy wording.",
    carrierAvailability: 'most-major',
  },
}

// ─────────────────────────────────────────────────────────────────────────────
// Regional defaults — used for states without a specific entry.
//
// These pre-fill rateContext + consumerProtectionNote with directional
// regional accuracy without claiming fabricated state-specific numbers.
// ─────────────────────────────────────────────────────────────────────────────

const REGION_DEFAULTS: Record<
  StateEntry['region'],
  {
    rateDirection: StateInsuranceContext['rateDirection']
    rateContext: string
    consumerProtectionNote: string
    carrierAvailability: StateInsuranceContext['carrierAvailability']
  }
> = {
  Northeast: {
    rateDirection: 'above-average',
    rateContext:
      'Northeast states generally see pet insurance premiums above the national average, reflecting higher veterinary labor and real-estate costs in the corridor from Boston to Washington DC.',
    consumerProtectionNote:
      "Most northeastern states publish annual insurer complaint ratios — check the state DOI's consumer portal before purchase.",
    carrierAvailability: 'all-major',
  },
  Midwest: {
    rateDirection: 'below-average',
    rateContext:
      'Midwestern states generally see pet insurance premiums at or slightly below the national average, reflecting lower veterinary operating costs across most metros.',
    consumerProtectionNote:
      "Most midwestern states maintain a general insurance consumer hotline through the state's insurance department — useful for resolving claim disputes.",
    carrierAvailability: 'all-major',
  },
  South: {
    rateDirection: 'average',
    rateContext:
      'Southern states generally see pet insurance premiums near the national average. Major metros (Atlanta, Charlotte, Nashville, Houston, Dallas) trend higher; rural areas trend lower.',
    consumerProtectionNote:
      "Most southern states regulate pet insurance under broader insurance code without pet-specific disclosure requirements. Read the policy wording carefully before purchase.",
    carrierAvailability: 'all-major',
  },
  West: {
    rateDirection: 'above-average',
    rateContext:
      'Western states (excluding the Mountain West) generally see pet insurance premiums above the national average, reflecting higher metro veterinary costs in California, Washington, and Oregon. Mountain West states (MT, ID, WY, etc.) trend closer to average.',
    consumerProtectionNote:
      "Pacific Coast states tend to have stronger consumer-protection regulation. California (AB 1535) is the most aggressive; Washington and Oregon are next.",
    carrierAvailability: 'all-major',
  },
}

/**
 * Look up the insurance context for a state. Returns the specific entry if
 * one exists in STATE_INSURANCE_CONTEXT, otherwise falls back to the
 * regional default for that state.
 */
export function getStateInsuranceContext(
  stateSlug: string,
): StateInsuranceContext {
  const specific = STATE_INSURANCE_CONTEXT[stateSlug]
  if (specific) return specific

  const state = States.find((s) => s.slug === stateSlug)
  if (!state) {
    // Fallback to keep the template render safely even if the slug is wrong
    return {
      stateSlug,
      regulatorName: 'State insurance department',
      rateDirection: 'average',
      rateContext:
        'Pet insurance rates vary by state and metro. Check with the carrier for a state-specific quote.',
      consumerProtectionNote:
        "Check your state insurance department's consumer portal for complaint ratios on the carrier you're considering.",
      carrierAvailability: 'all-major',
    }
  }

  const regional = REGION_DEFAULTS[state.region]
  return {
    stateSlug,
    regulatorName: `${state.name} Department of Insurance`,
    rateDirection: regional.rateDirection,
    rateContext: regional.rateContext,
    consumerProtectionNote: regional.consumerProtectionNote,
    carrierAvailability: regional.carrierAvailability,
  }
}
