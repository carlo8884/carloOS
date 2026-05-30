/**
 * Saltwater Aquarium Starter Funnel — data model.
 *
 * Drives the /saltwater-starter funnel pages. Each WEEK has a focus
 * (e.g., "Tank + Stand + Plumbing"), explanatory copy, and a kit-list
 * at three budget tiers (entry / mid / expert).
 *
 * Each kit ITEM points at the /go/[vendor]/[sku] affiliate handler.
 * Vendors must be present in `apps/fish-com/src/data/affiliate-routes.ts`.
 * SKUs are placeholders today — they'll be replaced with real product
 * IDs once Bulk Reef Supply, LiveAquaria, and Marine Depot affiliate
 * accounts are wired (per policy §5 + the affiliate-wiring handoff).
 *
 * Vendor selection logic per category:
 *   Tanks / Stands / Plumbing       → Marine Depot, Bulk Reef Supply
 *   Lighting (high-AOV LED units)   → Bulk Reef Supply, Marine Depot
 *   Filtration / Skimmers / Flow    → Bulk Reef Supply, Marine Depot
 *   Rock / Sand / Cycling chems     → Bulk Reef Supply
 *   Livestock (CUC, fish, coral)    → LiveAquaria
 *   Test kits, general supplies     → Bulk Reef Supply, Amazon
 *
 * Editorial integrity note: every product on this list earned its
 * placement by reputation among reef-tank communities (Reef2Reef,
 * Bulk Reef Supply staff picks, R/Reeftank consensus). Sponsorship
 * does not influence selection. See Fish.com Editorial Standards.
 */

export type BudgetTier = 'entry' | 'mid' | 'expert'

export interface KitItem {
  /** Product name as displayed to readers */
  name: string
  /** Affiliate vendor key from affiliate-routes.ts */
  vendor: string
  /** Affiliate SKU (placeholder until product IDs are wired) */
  sku: string
  /** One-line description of why this product earned the slot */
  rationale: string
  /** Approximate retail price (used for budget totals; not a promise) */
  approxPriceUSD: number
}

export interface KitCategory {
  /** Category name (e.g., "Aquarium Tank", "Protein Skimmer") */
  name: string
  /** Why this category matters for this week */
  whyItMatters: string
  /** Item per budget tier (every tier MUST have an item) */
  items: Record<BudgetTier, KitItem>
}

export interface FunnelWeek {
  /** URL slug under /saltwater-starter/ */
  slug: string
  /** Sequence number (1–4) */
  weekNumber: number
  /** Page title (used in metadata + hero) */
  title: string
  /** One-line page summary */
  summary: string
  /** Why this week matters (intro copy) */
  intro: string
  /** Kit categories covered this week */
  categories: KitCategory[]
  /** Common mistakes to avoid in this phase */
  commonMistakes: { mistake: string; fix: string }[]
  /** What to do BEFORE moving to next week */
  readinessChecklist: string[]
}

// ─────────────────────────────────────────────────────────────────────────────
// WEEK 1 — Tank, Stand, Plumbing
// ─────────────────────────────────────────────────────────────────────────────

const WEEK_1: FunnelWeek = {
  slug: 'week-1-tank-stand',
  weekNumber: 1,
  title: 'Week 1 — Tank, Stand, and Plumbing',
  summary:
    'The single most regretted decision in reef-keeping is buying the wrong tank size. Bigger is more forgiving, not harder.',
  intro:
    "Tank size dictates everything downstream — light requirement, flow rate, skimmer capacity, livestock options, even how often you'll be doing water changes. Most beginners buy a 20-gallon nano and upgrade within 12 months. We recommend starting at 40 gallons or higher; the operating math becomes dramatically more forgiving past 40 gallons.",
  categories: [
    {
      name: 'Aquarium Tank',
      whyItMatters:
        'Larger water volume = more stable parameters = more forgiving of beginner mistakes. The cost difference between a 20-gallon and a 40-gallon is small; the operational difference is enormous.',
      items: {
        entry: {
          name: 'Aqueon 40-Gallon Breeder',
          vendor: 'amazon',
          sku: 'B003ZS50DU',
          rationale:
            'Wide footprint gives more aquascaping options than a tall 40. Available at most LFS. Glass; rimmed.',
          approxPriceUSD: 110,
        },
        mid: {
          name: 'Waterbox AIO 50.3 (50 gallons all-in-one)',
          vendor: 'bulk-reef-supply',
          sku: 'waterbox-aio-50',
          rationale:
            'Built-in rear-filtration chamber, rimless. Cleaner aesthetic + reduced plumbing complexity vs. external sump.',
          approxPriceUSD: 600,
        },
        expert: {
          name: 'Red Sea Reefer 250 (54 gallons + sump)',
          vendor: 'bulk-reef-supply',
          sku: 'red-sea-reefer-250',
          rationale:
            'Industry-standard reefer system: sump included, drilled, professional aesthetic. Resale value is exceptional if you upgrade later.',
          approxPriceUSD: 1100,
        },
      },
    },
    {
      name: 'Aquarium Stand',
      whyItMatters:
        'A 40-gallon tank weighs ~400 lbs full. Furniture or non-rated stands will fail — often catastrophically. Buy a stand rated for your tank size.',
      items: {
        entry: {
          name: 'Aqueon Forge 40-Gallon Stand',
          vendor: 'amazon',
          sku: 'B0029WK7XW',
          rationale:
            'Matches the Aqueon 40 Breeder footprint. Composite construction; closed front prevents pet access.',
          approxPriceUSD: 220,
        },
        mid: {
          name: 'Waterbox AIO 50.3 Cabinet (matched)',
          vendor: 'bulk-reef-supply',
          sku: 'waterbox-50-cabinet',
          rationale:
            'Sold paired with the tank. Soft-close doors, integrated cable management.',
          approxPriceUSD: 450,
        },
        expert: {
          name: 'Red Sea Reefer 250 Cabinet (matched)',
          vendor: 'bulk-reef-supply',
          sku: 'red-sea-reefer-250-cabinet',
          rationale:
            'Stand is included in the Reefer system bundle — no separate purchase needed.',
          approxPriceUSD: 0,
        },
      },
    },
    {
      name: 'Sump (mid + expert only)',
      whyItMatters:
        "A sump is a secondary tank below the main display where filtration equipment lives. It increases system water volume (more stable parameters) and hides ugly equipment from view. Optional for entry-tier all-in-one systems.",
      items: {
        entry: {
          name: 'Skip — entry-tier uses internal AIO chamber',
          vendor: 'bulk-reef-supply',
          sku: 'placeholder-no-sump',
          rationale:
            'The 40-gallon breeder + internal hang-on-back gear is sufficient at entry tier. Sump can be added later if you upgrade.',
          approxPriceUSD: 0,
        },
        mid: {
          name: 'Waterbox AIO — sump is integrated rear chamber',
          vendor: 'bulk-reef-supply',
          sku: 'placeholder-aio-sump',
          rationale:
            'AIO systems have a built-in rear sump area — no separate purchase needed.',
          approxPriceUSD: 0,
        },
        expert: {
          name: 'Reefer 250 — sump included with the system',
          vendor: 'bulk-reef-supply',
          sku: 'placeholder-reefer-sump',
          rationale:
            'The Reefer 250 ships with its matched sump in the cabinet.',
          approxPriceUSD: 0,
        },
      },
    },
  ],
  commonMistakes: [
    {
      mistake: 'Buying a 20-gallon "starter" tank because it seems easier.',
      fix: 'It is not easier. Water parameters in 20 gallons swing fast — a single dead snail can spike ammonia in hours. Larger tanks are dramatically more forgiving.',
    },
    {
      mistake: 'Placing the tank on a furniture-grade dresser or non-rated stand.',
      fix: '400+ pounds requires a tank-rated stand. Furniture WILL fail — usually with no warning. Spend the $220+ on a proper stand.',
    },
    {
      mistake: 'Picking a tank that "fits the space" without leaving 3-6" rear clearance for plumbing and equipment.',
      fix: 'Measure twice. Reef tanks need rear clearance for the sump return, powerheads, skimmer, heaters, and cable management. Plan ahead.',
    },
  ],
  readinessChecklist: [
    'Tank is level on the stand (use a bubble level — even 1/8" off will stress the seams over time)',
    'Stand is rated for your tank size (check manufacturer spec)',
    'Tank is in a location with a nearby GFCI outlet (saltwater + electricity require GFCI protection)',
    'Tank is NOT near direct sunlight (algae nightmare) or a heating vent (thermal swings)',
    "You've left 3-6 inches behind the tank for equipment + cable runs",
  ],
}

// ─────────────────────────────────────────────────────────────────────────────
// WEEK 2 — Lighting, Filtration, Flow (stub — fleshed out next iteration)
// ─────────────────────────────────────────────────────────────────────────────

const WEEK_2: FunnelWeek = {
  slug: 'week-2-lighting-filtration',
  weekNumber: 2,
  title: 'Week 2 — Lighting, Filtration, and Flow',
  summary:
    'The "life support" gear: LED lights, protein skimmer, return pump, and powerheads. This is where the budget tiers diverge most.',
  intro:
    "Lighting is the single most expensive category in reef-keeping. Cheap lights grow brown algae; great lights grow corals you can keep for a decade. We'll cover the LED choice in depth (Kessil vs. AI Hydra vs. Radion), then cover skimmers, return pumps, and flow.",
  categories: [],
  commonMistakes: [],
  readinessChecklist: [],
}

// ─────────────────────────────────────────────────────────────────────────────
// WEEK 3 — Rock, Sand, Cycling (stub)
// ─────────────────────────────────────────────────────────────────────────────

const WEEK_3: FunnelWeek = {
  slug: 'week-3-rock-sand-cycling',
  weekNumber: 3,
  title: 'Week 3 — Rock, Sand, and Cycling',
  summary:
    'Live rock vs. dry rock, substrate selection, and the most-skipped step: properly cycling the tank before adding livestock.',
  intro:
    "The cycle is the only step that has no shortcut. Adding fish before the tank is cycled is the single most common cause of tank failure. We'll cover the dry-rock vs. live-rock decision, substrate selection, and the 4-week cycling process.",
  categories: [],
  commonMistakes: [],
  readinessChecklist: [],
}

// ─────────────────────────────────────────────────────────────────────────────
// WEEK 4 — Livestock Readiness (stub)
// ─────────────────────────────────────────────────────────────────────────────

const WEEK_4: FunnelWeek = {
  slug: 'week-4-livestock-readiness',
  weekNumber: 4,
  title: 'Week 4 — Adding Livestock Safely',
  summary:
    'Cleanup crew first, then a single hardy fish, then evaluate. The quarantine question, first fish recommendations, and coral-readiness criteria.',
  intro:
    "After cycling, the temptation is to fill the tank immediately. Don't. Add cleanup crew first, observe for two weeks, then add one fish. This phased approach saves you from cascade failures.",
  categories: [],
  commonMistakes: [],
  readinessChecklist: [],
}

export const WEEKS: FunnelWeek[] = [WEEK_1, WEEK_2, WEEK_3, WEEK_4]

// ─────────────────────────────────────────────────────────────────────────────
// Budget summary — used on the landing page
// ─────────────────────────────────────────────────────────────────────────────

export interface BudgetSummary {
  tier: BudgetTier
  label: string
  totalApprox: string
  tagline: string
  bestFor: string
}

export const BUDGET_SUMMARIES: BudgetSummary[] = [
  {
    tier: 'entry',
    label: 'Entry Tier',
    totalApprox: '$800–$1,200',
    tagline: "Get reef-keeping right the first time without breaking the bank.",
    bestFor:
      'First-time reef-keeper, 40-gallon system, fish-only with live rock (FOWLR) initially with the option to add easy corals later.',
  },
  {
    tier: 'mid',
    label: 'Mid Tier',
    totalApprox: '$2,000–$3,000',
    tagline: 'All-in-one rimless aesthetic, broader livestock options, room to grow.',
    bestFor:
      'Reader who values cleaner aesthetics, plans to keep softies and LPS corals within 6 months, wants integrated filtration without an external sump.',
  },
  {
    tier: 'expert',
    label: 'Expert Tier',
    totalApprox: '$4,000–$5,500',
    tagline: 'Reefer-class system with a real sump — the "do it once" buildout.',
    bestFor:
      "Reader who wants to keep SPS corals long-term, has budget headroom, and prefers a system that won't be outgrown within 24 months.",
  },
]
