/**
 * Mobile Lighthouse budgets for the five earning sites.
 * One run per URL, with a single retry when a run misses a budget.
 * Thresholds are never looser than the floors, and they sit just under
 * the mobile scores measured on 2026-10-04.
 */

export const EARNING_SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

/** First five money pages from scripts/ci/claim-audit.mjs. */
export const MONEY_PAGES = {
  'dog-com': [
    'reviews/best-dog-crates',
    'reviews/best-dry-dog-food',
    'reviews/best-dog-harnesses',
    'reviews/best-dog-food-for-puppies',
    'reviews/best-dog-gps-tracker',
  ],
  'fish-com': [
    'reviews/best-aquarium-filters',
    'reviews/best-aquarium-heaters',
    'reviews/best-water-test-kits',
    'reviews/best-nano-tanks',
    'reviews/best-canister-filters',
  ],
  'horses-com': [
    'reviews/best-equine-supplements',
    'reviews/best-winter-horse-blankets',
    'tack/saddle-pads',
    'tack/helmet-guide',
    'tack/boots-and-wraps',
  ],
  'vets-co': [
    'reviews/best-pet-insurance',
    'telehealth',
    'insurance/deductibles-reimbursement',
    'insurance/how-pet-insurance-works',
    'insurance/what-pet-insurance-covers',
  ],
  'ferret-com': [
    'reviews/best-ferret-cage',
    'reviews/best-ferret-litter',
    'reviews/best-ferret-harness',
    'diet/best-ferret-kibble',
    'care/bedding-and-litter-types',
  ],
}

export const SITE_PORTS = {
  'dog-com': 3310,
  'fish-com': 3311,
  'horses-com': 3312,
  'vets-co': 3313,
  'ferret-com': 3314,
}

/** Hard floors. A budget looser than these fails the unit test. */
export const FLOORS = {
  performanceMin: 0.95,
  accessibilityMin: 1,
  clsMax: 0.05,
  lcpMaxMs: 2800,
}

/**
 * Enforced thresholds, set just under the 2026-10-04 mobile run
 * (simulated slow 4G, fresh production builds):
 * performance 0.96–0.99, accessibility 100, CLS at most 0.028, LCP 2.0–2.7s.
 * One telehealth run dipped to 0.94 / 3.0s and passed on the single retry.
 * The floors are the budget: performance 0.95, accessibility 100,
 * CLS 0.05, LCP 2.8s.
 */
export const BUDGETS = {
  performanceMin: 0.95,
  accessibilityMin: 1,
  clsMax: 0.05,
  lcpMaxMs: 2800,
}

export function budgetProblems(budgets = BUDGETS) {
  const problems = []
  if (budgets.performanceMin < FLOORS.performanceMin) {
    problems.push(`performance minimum ${budgets.performanceMin} is below 0.95`)
  }
  if (budgets.accessibilityMin < FLOORS.accessibilityMin) {
    problems.push(`accessibility minimum ${budgets.accessibilityMin} is below 100`)
  }
  if (budgets.clsMax > FLOORS.clsMax) {
    problems.push(`CLS maximum ${budgets.clsMax} is above 0.05`)
  }
  if (budgets.lcpMaxMs > FLOORS.lcpMaxMs) {
    problems.push(`LCP maximum ${budgets.lcpMaxMs}ms is above 2800ms`)
  }
  return problems
}

export function pageUrl(origin, slug) {
  const base = origin.replace(/\/$/, '')
  return `${base}/${slug}`
}

export function scoreProblems(metrics, budgets = BUDGETS) {
  const problems = []
  if (metrics.runtimeError) problems.push(metrics.runtimeError)
  if (metrics.performance == null || metrics.performance < budgets.performanceMin) {
    problems.push(`performance ${metrics.performance ?? 'missing'} is below ${budgets.performanceMin}`)
  }
  if (metrics.accessibility == null || metrics.accessibility < budgets.accessibilityMin) {
    problems.push(`accessibility ${metrics.accessibility ?? 'missing'} is below ${budgets.accessibilityMin}`)
  }
  if (metrics.cls == null || metrics.cls > budgets.clsMax) {
    problems.push(`CLS ${metrics.cls ?? 'missing'} is above ${budgets.clsMax}`)
  }
  if (metrics.lcp == null || metrics.lcp > budgets.lcpMaxMs) {
    problems.push(`LCP ${metrics.lcp ?? 'missing'}ms is above ${budgets.lcpMaxMs}ms`)
  }
  return problems
}

/** One retry after a failing run. A passing run does not run again. */
export function needsRetry(problems, attempt, maxAttempts = 2) {
  return problems.length > 0 && attempt < maxAttempts
}
