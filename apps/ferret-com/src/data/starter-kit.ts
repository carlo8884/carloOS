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
        vendor: 'amazon',
        sku: 'B003AQM5OS',
        rationale:
          'The community-standard ferret cage. Two-level configuration, full-front access (huge for cleaning), removable shelves, locking casters. Big enough for 2 ferrets comfortably.',
        approxPriceUSD: 290,
      },
      {
        name: 'Ferret Nation 142 Single Unit',
        vendor: 'amazon',
        sku: 'B0002AQRJ8',
        rationale:
          'Single-level version of the Critter Nation. Better for one ferret or limited floor space. Same build quality.',
        approxPriceUSD: 200,
      },
      {
        name: 'Prevue Pet Products Feisty Ferret Cage',
        vendor: 'chewy',
        sku: '46912',
        rationale:
          'Cheaper alternative if budget is tight. Smaller interior — only suitable for one ferret with daily out-of-cage time of 4+ hours.',
        approxPriceUSD: 140,
        needsSkuVerification: true,
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
        name: 'Marshall Hide-N-Sleep Hammock',
        vendor: 'marshall',
        sku: 'hide-n-sleep-ferret',
        rationale:
          'Enclosed cocoon-style hammock. Most ferrets prefer enclosed sleeping over open hammocks. Washable. From the leading US ferret-specific brand.',
        approxPriceUSD: 18,
        needsSkuVerification: true,
      },
      {
        name: 'Niteangel Ferret Hammock Trio',
        vendor: 'amazon',
        sku: 'B07HFY1G9R',
        rationale:
          'Three-piece set: standard hammock + cocoon + crinkle tube. Reasonable starter set covering different sleep preferences.',
        approxPriceUSD: 25,
      },
    ],
  },
  {
    slug: 'litter',
    name: 'Litter & Litter Pan',
    whyItMatters:
      "Ferrets are litter-trainable. Use paper-based pellet litter (Yesterday's News or similar) — NEVER clay/clumping cat litter (causes respiratory and intestinal issues). Corner-style triangle pans fit the cage geometry.",
    picks: [
      {
        name: "Yesterday's News Cat Litter (paper pellet)",
        vendor: 'chewy',
        sku: '37070',
        rationale:
          "Despite the cat-litter label, this is the gold-standard ferret litter — paper-pellet, dust-free, low-odor, safe if ingested in small amounts. 30lb bag lasts 1 ferret about 6-8 weeks.",
        approxPriceUSD: 28,
        needsSkuVerification: true,
      },
      {
        name: 'Marshall Hi-Corner Litter Pan',
        vendor: 'marshall',
        sku: 'hi-corner-litter-pan',
        rationale:
          'Triangle shape fits the cage corner. The high back panel prevents ferrets from backing up against a flat litter wall (they prefer to back into a corner).',
        approxPriceUSD: 14,
        needsSkuVerification: true,
      },
    ],
  },
  {
    slug: 'food',
    name: 'Food',
    whyItMatters:
      "Ferrets are obligate carnivores. Minimum 35% protein, minimum 18% fat, NO corn/grain/fruit/vegetable as primary ingredient. Standard kibble brands marketed for ferrets often fail these thresholds — check the guaranteed analysis. Wysong Epigen 90 and Carniwhole are the two highest-protein commercial options; Marshall Premium is the most widely-available legacy choice.",
    picks: [
      {
        name: 'Wysong Epigen 90 (Starch-Free Ferret/Dog/Cat)',
        vendor: 'wysong',
        sku: 'epigen-90',
        rationale:
          "60%+ protein, 16% fat, near-zero starch. Wysong's flagship; the closest commercial kibble to a ferret's natural prey diet.",
        approxPriceUSD: 65,
        needsSkuVerification: true,
      },
      {
        name: 'Carniwhole Ferret Diet',
        vendor: 'carniwhole',
        sku: 'ferret-diet',
        rationale:
          'Newer entrant; freeze-dried raw blocks. Higher cost per pound than kibble but matches biological diet most closely.',
        approxPriceUSD: 45,
        needsSkuVerification: true,
      },
      {
        name: 'Marshall Premium Ferret Diet',
        vendor: 'marshall',
        sku: 'premium-ferret-diet',
        rationale:
          "Long-standing legacy formula. Slightly higher carb content than Wysong/Carniwhole but widely available, cheaper, and tolerated by ferrets transitioning from cheaper brands. Acceptable mid-tier choice.",
        approxPriceUSD: 30,
        needsSkuVerification: true,
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
        vendor: 'amazon',
        sku: 'B000H8V8H4',
        rationale:
          'Stainless-steel ball valve, glass body. The heavy-duty version of the standard rodent bottle.',
        approxPriceUSD: 18,
      },
      {
        name: 'Marshall Ferret Bathing Shampoo',
        vendor: 'marshall',
        sku: 'ferret-shampoo',
        rationale:
          'pH-balanced for ferret skin. Other animal shampoos are too acidic or alkaline and strip the protective oils.',
        approxPriceUSD: 11,
        needsSkuVerification: true,
      },
      {
        name: 'Kaytee Crinkle Tunnel (multipack)',
        vendor: 'chewy',
        sku: '101362',
        rationale:
          'Foldable nylon tunnel ferrets can play and sleep in. Multipack gives enough variety to rotate through.',
        approxPriceUSD: 16,
        needsSkuVerification: true,
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
      'Two ferrets, Critter Nation Double Unit, premium food (Wysong Epigen 90 or Carniwhole), full hammock + cocoon assortment, complete accessory kit. The "do it once" buildout.',
  },
]
