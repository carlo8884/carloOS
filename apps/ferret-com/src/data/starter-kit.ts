/**
 * Ferret Starter Kit — data model.
 *
 * Drives the /ferret-starter-kit funnel page on Ferret.com.
 *
 * Ferrets are a high-AOV pet for new-owner kit: cage alone is $150-400,
 * full starter kit (cage + food + bedding + litter + accessories +
 * grooming) is $400-1200. Live traffic shows 11K monthly visitors per
 * Carlo's 2026-05-30 share — zero conversion surface today means high
 * upside from even basic monetization.
 *
 * Vendor selection (from policy §5 — Amazon, Chewy, Marshall, Wysong,
 * Carniwhole all pre-approved):
 *   Cages, accessories     → Amazon, Chewy
 *   Marshall-branded gear  → Marshall (direct)
 *   Premium food           → Wysong, Carniwhole (raw-style)
 *   Mid food               → Marshall (Marshall Premium Ferret Diet)
 *
 * Editorial discipline: every kit item is recommended on the basis of
 * Ferret Association of CT, Pet MD Ferret Care, and r/ferrets community
 * consensus. We don't accept paid placement. Marked items where the
 * exact SKU needs editorial review before launch with TODO.
 */

export interface KitItem {
  name: string
  vendor: string
  sku: string
  rationale: string
  approxPriceUSD: number
  /** Optional editorial flag for SKUs that need verification before launch */
  needsSkuVerification?: boolean
}

export interface KitCategory {
  slug: string
  name: string
  whyItMatters: string
  /** 2-3 picks per category */
  picks: KitItem[]
}

export const STARTER_KIT: KitCategory[] = [
  {
    slug: 'cage',
    name: 'The Cage',
    whyItMatters:
      "Ferrets need multi-level cages with horizontal climbing space — not vertical bird cages. Minimum interior dimensions: 36\"W × 24\"D × 18\"H per ferret. Smaller cages cause behavior problems and stress. This is the single largest line item and the one that absolutely cannot be undersized.",
    picks: [
      {
        name: 'Midwest Critter Nation Double Unit',
        vendor: 'amazon-brand',
        sku: 'midwest+critter+nation+double+unit',
        rationale:
          'The community-standard ferret cage. Two-level configuration, full-front access (huge for cleaning), removable shelves, locking casters. Big enough for 2 ferrets comfortably. The old product id is not on Amazon\'s current listing, so this opens the existing Critter Nation search.',
        approxPriceUSD: 290,
      },
      {
        name: 'Prevue Pet Products Feisty Ferret Cage',
        vendor: 'chewy-brand',
        sku: 'prevue+feisty+ferret',
        rationale:
          'Cheaper alternative if budget is tight. Smaller interior — only suitable for one ferret with daily out-of-cage time of 4+ hours. Chewy\'s old numeric id for this cage is not a confirmed current page, so this opens a Prevue Feisty Ferret search.',
        approxPriceUSD: 140,
      },
    ],
  },
  {
    slug: 'bedding',
    name: 'Bedding & Hammocks',
    whyItMatters:
      'Ferrets sleep 14-18 hours a day and need enclosed, fabric sleeping spaces — not the bare cage floor. Hammocks and sleep sacks are non-negotiable. Avoid cedar or pine shavings (toxic to ferrets).',
    picks: [
      {
        name: 'Marshall ferret hammock',
        vendor: 'marshall',
        sku: 'ferret+hammock',
        rationale:
          'Hide-N-Sleep\'s product page no longer resolves. This opens Marshall\'s current hammock search. Ferrets still need an enclosed, washable fabric bed rather than the bare cage floor.',
        approxPriceUSD: 18,
      },
      {
        name: 'Niteangel Ferret Hammock Trio',
        vendor: 'amazon-brand',
        sku: 'niteangel+ferret+hammock',
        rationale:
          'Three-piece set: standard hammock + cocoon + crinkle tube. Reasonable starter set covering different sleep preferences. The old product id is not on Amazon\'s current listing, so this opens a Niteangel ferret hammock search.',
        approxPriceUSD: 25,
      },
    ],
  },
  {
    slug: 'litter',
    name: 'Litter & Litter Pan',
    whyItMatters:
      'Ferrets are litter-trainable. Use recycled paper-pellet litter — never clay or clumping cat litter, which can cause respiratory and intestinal problems if swallowed. Corner-style triangle pans fit the cage geometry.',
    picks: [
      {
        name: 'Recycled paper-pellet litter',
        vendor: 'chewy-brand',
        sku: 'recycled+paper+pellet+litter+non+clumping',
        rationale:
          "Paper pellets are low-dust and non-clumping. Purina discontinued Yesterday's News on April 20, 2022. This Chewy search is for a recycled paper pellet still being sold. A 30 lb bag lasts 1 ferret about 6-8 weeks.",
        approxPriceUSD: 28,
      },
      {
        name: 'Marshall High Back Litter Pan',
        vendor: 'marshall',
        sku: 'high+back+litter+pan',
        rationale:
          'The Hi-Corner product page no longer resolves. Marshall\'s current catalog lists a high-back litter pan, and this opens that search. The high back is the part that keeps ferrets from backing into a flat litter wall.',
        approxPriceUSD: 14,
      },
    ],
  },
  {
    slug: 'food',
    name: 'Food',
    whyItMatters:
      "Ferrets are obligate carnivores. Minimum 35% protein, minimum 18% fat, NO corn/grain/fruit/vegetable as primary ingredient. Standard kibble brands marketed for ferrets often fail these thresholds — check the guaranteed analysis. Wysong Epigen 90 is the highest-protein commercial option still sold on Wysong. Marshall Premium is the widely available legacy choice. Carniwhole\'s site no longer resolves, so it is not a kit link.",
    picks: [
      {
        name: 'Wysong Epigen 90 (Starch-Free Ferret/Dog/Cat)',
        vendor: 'wysong',
        sku: 'epigen-90',
        rationale:
          "60%+ protein, 16% fat, near-zero starch. Wysong's flagship; the closest commercial kibble to a ferret's natural prey diet.",
        approxPriceUSD: 65,
      },
      {
        name: 'Marshall Premium Ferret Diet',
        vendor: 'marshall',
        sku: 'premium-ferret-diet',
        rationale:
          "Long-standing legacy formula. Slightly higher carb content than Wysong, but widely available, cheaper, and tolerated by ferrets transitioning from cheaper brands. Acceptable mid-tier choice.",
        approxPriceUSD: 30,
      },
    ],
  },
  {
    slug: 'accessories',
    name: 'Essential Accessories',
    whyItMatters:
      "Water bottles (not bowls — bowls get tipped). Two food bowls (heavy ceramic — easier to flip-proof). Tunnel/tube for enrichment (ferrets are tunneling animals; not optional). Ferret-safe shampoo (NEVER use cat/dog shampoo; pH is wrong).",
    picks: [
      {
        name: 'Lixit Quick-Lock Cage Water Bottle (32oz)',
        vendor: 'amazon-brand',
        sku: 'lixit+quick+lock+water+bottle',
        rationale:
          'Stainless-steel ball valve, glass body. The heavy-duty version of the standard rodent bottle. The old product id is not on Amazon\'s current listing, so this opens a Lixit Quick-Lock bottle search.',
        approxPriceUSD: 18,
      },
      {
        name: 'Marshall ferret shampoo',
        vendor: 'marshall',
        sku: 'ferret+shampoo',
        rationale:
          'The older ferret-shampoo product page no longer resolves. This opens Marshall\'s current shampoo search. Use a ferret shampoo and read the label; dog and cat shampoos are the wrong pH.',
        approxPriceUSD: 11,
      },
      {
        name: 'Kaytee Crinkle Tunnel (multipack)',
        vendor: 'chewy-brand',
        sku: 'kaytee+crinkle+tunnel',
        rationale:
          'Foldable nylon tunnel ferrets can play and sleep in. Multipack gives enough variety to rotate through. Chewy\'s old numeric id is not a confirmed current page, so this opens a Kaytee crinkle-tunnel search.',
        approxPriceUSD: 16,
      },
    ],
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Budget summary (used on the landing page)
// ─────────────────────────────────────────────────────────────────────────────

export interface BudgetSummary {
  label: string
  totalApprox: string
  tagline: string
  bestFor: string
}

export const BUDGET_SUMMARIES: BudgetSummary[] = [
  {
    label: 'Budget Starter',
    totalApprox: '$300–$450',
    tagline: "The lowest you can spend without compromising ferret welfare.",
    bestFor:
      'One ferret, smaller cage (Prevue), Marshall food, basic hammock + accessories. Plan to upgrade the cage within 12 months as you confirm ferrets are the right pet for you.',
  },
  {
    label: 'Standard Starter',
    totalApprox: '$550–$800',
    tagline: 'The kit most reasonable new owners actually buy.',
    bestFor:
      'One or two ferrets, Critter Nation cage (community standard), mid-tier food (Marshall Premium), trio hammock set, full accessory kit.',
  },
  {
    label: 'Top-Tier Starter',
    totalApprox: '$900–$1,400',
    tagline: 'Best gear, best food, no compromises.',
    bestFor:
      'Two ferrets, Critter Nation Double Unit, premium food (Wysong Epigen 90), full hammock assortment, complete accessory kit. The "do it once" buildout.',
  },
]
