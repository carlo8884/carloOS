/**
 * otc-brands.ts — structured brand catalog for the /tools/compare-pet-foods tool.
 *
 * SOURCE-TRACEABILITY RULE (NON-NEGOTIABLE, see build brief §5 / §7):
 * Every field on every record is extracted ONLY from that brand's own
 * /brands/<evaluationSlug> evaluation prose. If the source page does not state
 * a field, it is `null` (or the format array is empty) — NEVER inferred, guessed,
 * or filled with a plausible value. `citedSources` lists the evaluation page plus
 * the primary source(s) that page cites for the regulatory/ownership facts.
 *
 * Monetization (build brief §8): OTC brands link to /go search SKUs. Vet-channel
 * brands (Hill's, Royal Canin) are `monetizable: false` (comparison-only, no buy CTA).
 * Brands the source eval flags in the FDA-CVM grain-free/DCM listing carry
 * `grainFreeDcmContext: true`; the tool suppresses the buy CTA on those columns and
 * surfaces a "discuss with your veterinarian" note instead.
 *
 * `priceBand` is a qualitative descriptor extracted from the eval prose ("$$ premium",
 * "$$ mid-tier", "$$ value tier", "premium price band") — NOT a current dollar figure.
 * `wsavaReadingNote` is a PetFood.com editorial reading against WSAVA-derived criteria,
 * explicitly NOT a score, certification, or ranking. No brand "wins".
 */

export interface OtcBrand {
  id: string
  name: string
  evaluationSlug: string // links to /brands/<slug>
  corporateOwner: string | null
  aafcoPosture: 'feeding-trials' | 'formulated-to-meet' | 'mixed' | null
  manufacturing: 'owned-facilities' | 'co-manufactured' | 'mixed' | null
  recallPosture: string | null // qualitative, sourced from eval
  formats: Array<'kibble' | 'canned' | 'fresh' | 'freeze-dried' | 'raw'>
  priceBand: 'value' | 'mid' | 'premium' | null // descriptive, NOT a price number
  grainFreeDcmContext: boolean // true => surface FDA-CVM note, suppress CTA
  monetizable: boolean // false for Rx-channel brands
  buyVendors: Array<'chewy-brand' | 'amazon-brand'>
  buySearchTerm: string
  wsavaReadingNote: string // PetFood.com editorial reading, NOT a score
  citedSources: { name: string; url: string }[]
}

const FDA_DCM_SOURCE = {
  name: 'FDA Investigation: Potential Link Between Certain Diets and Canine Dilated Cardiomyopathy (FDA CVM)',
  url: 'https://www.fda.gov/animal-veterinary/news-events/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy',
}

export const otcBrands: OtcBrand[] = [
  {
    id: 'blue-buffalo',
    name: 'Blue Buffalo',
    evaluationSlug: 'blue-buffalo-evaluation',
    // "the 2018 acquisition by General Mills — a wholly-owned subsidiary of a large packaged-foods conglomerate"
    corporateOwner: 'General Mills',
    // "Most SKUs use formulation-pathway substantiation. Few feeding-trial-substantiated SKUs in the catalog." → average / formulated-to-meet
    aafcoPosture: 'formulated-to-meet',
    // "the brand historically used contract manufacturers rather than owned plants" + "opened the BLUE Buffalo plant in Joplin, Missouri, which adds owned-plant capacity but does not... fully replace co-manufacturing" → mixed
    manufacturing: 'mixed',
    // "more recall events on file than the average premium brand... multiple distinct recall events over the past decade, addressed with voluntary recall and corrective action"
    recallPosture:
      'Above peer-average recall frequency: multiple distinct events over the past decade (incl. 2010 vitamin D, 2017 thyroid-hormone and packaging recalls), all voluntary with corrective action; no recurring fatal pattern.',
    // "each with dry, wet, and treat SKUs" — kibble + canned (wet) stated; treats not a comparison format
    formats: ['kibble', 'canned'],
    priceBand: 'premium', // "premium pricing" / "premium-natural segment"
    // BLUE Wilderness grain-free SKUs named in the FDA CVM 2019 DCM update
    grainFreeDcmContext: true,
    monetizable: true,
    buyVendors: ['chewy-brand', 'amazon-brand'],
    buySearchTerm: 'Blue Buffalo',
    wsavaReadingNote:
      'PetFood.com editorial reading: above-average ingredient transparency; average AAFCO substantiation; below-average manufacturing transparency and recall record. BLUE Wilderness grain-free SKUs are named in the FDA CVM 2019 DCM update.',
    citedSources: [
      { name: 'PetFood.com — Blue Buffalo: An Independent Evaluation', url: 'https://petfood.com/brands/blue-buffalo-evaluation' },
      FDA_DCM_SOURCE,
    ],
  },
  {
    id: 'orijen',
    name: 'Orijen',
    evaluationSlug: 'orijen-vs-acana-comparison',
    // "Champion Petfoods... acquired by Mars Petcare in 2022"
    corporateOwner: 'Champion Petfoods (Mars Petcare)',
    // "the majority of dry SKUs carry an AAFCO nutritional adequacy statement via the formulation pathway rather than via feeding trial"
    aafcoPosture: 'formulated-to-meet',
    // "DogStar Kitchens, Auburn, Kentucky... NorthStar Kitchens, Morinville, Alberta" — company-owned facilities
    manufacturing: 'owned-facilities',
    // "does not return a Class I or Class II recall affecting U.S.-distributed product"
    recallPosture: 'No Class I or Class II FDA-CVM recall affecting U.S.-distributed product over the past decade (per the eval).',
    formats: [], // source eval states no explicit format; nulled per source-traceability (renders '—') // eval discusses "dry recipes" only
    priceBand: 'premium', // "~$0.13–$0.18 per 100 kcal... higher price point" / "premium grain-free"
    // "Brand named in 2019 update" (FDA CVM DCM dataset)
    grainFreeDcmContext: true,
    monetizable: true,
    buyVendors: ['chewy-brand', 'amazon-brand'],
    buySearchTerm: 'Orijen',
    wsavaReadingNote:
      'PetFood.com editorial reading: among the more ingredient-transparent premium grain-free lines; formulation-pathway AAFCO on most SKUs (not feeding-trial); named in the FDA CVM 2019 DCM update.',
    citedSources: [
      { name: 'PetFood.com — Orijen vs Acana', url: 'https://petfood.com/brands/orijen-vs-acana-comparison' },
      FDA_DCM_SOURCE,
    ],
  },
  {
    id: 'acana',
    name: 'Acana',
    evaluationSlug: 'orijen-vs-acana-comparison',
    corporateOwner: 'Champion Petfoods (Mars Petcare)',
    aafcoPosture: 'formulated-to-meet', // "majority of dry SKUs... via the formulation pathway rather than via feeding trial"
    manufacturing: 'owned-facilities', // DogStar / NorthStar Kitchens
    recallPosture: 'No Class I or Class II FDA-CVM recall affecting U.S.-distributed product over the past decade (per the eval).',
    formats: [], // source eval states no explicit format; nulled per source-traceability (renders '—')
    priceBand: 'premium', // "~$0.08–$0.12 per 100 kcal", lower than Orijen but still premium grain-free segment
    grainFreeDcmContext: true, // "Brand named in 2019 update"
    monetizable: true,
    buyVendors: ['chewy-brand', 'amazon-brand'],
    buySearchTerm: 'Acana',
    wsavaReadingNote:
      'PetFood.com editorial reading: ingredient-transparent; formulation-pathway AAFCO on most SKUs; named in the FDA CVM 2019 DCM update. Wholesome Grains sub-line is grain-inclusive and not in the named formulation category.',
    citedSources: [
      { name: 'PetFood.com — Orijen vs Acana', url: 'https://petfood.com/brands/orijen-vs-acana-comparison' },
      FDA_DCM_SOURCE,
    ],
  },
  {
    id: 'purina-pro-plan',
    name: 'Purina Pro Plan',
    evaluationSlug: 'purina-pro-plan-evaluation',
    corporateOwner: 'Nestle Purina PetCare', // "the premium line of Nestle Purina PetCare"
    // "Many Pro Plan diets are substantiated by AAFCO feeding trials rather than formulation alone" — but "substantiation can vary by product" → mixed, feeding-trial-leaning
    aafcoPosture: 'mixed',
    manufacturing: 'owned-facilities', // "Purina owns and operates its manufacturing facilities rather than relying on anonymous co-packing"
    // "Purina has had recalls over the years... evaluated by cause, severity, and response rather than by count" — no specific frequency verdict stated
    recallPosture: 'Has had recalls over the years; the eval frames them as best judged by cause/severity/response, with FDA-CVM as the record. No specific frequency verdict stated.',
    formats: [], // source eval states no explicit format; nulled per source-traceability (renders '—') // eval describes life-stage / breed-size / performance diets; no wet/format detail to cite
    priceBand: 'premium', // ReviewCard price "$$ premium"
    grainFreeDcmContext: false, // eval does not flag Pro Plan in the DCM listing
    monetizable: true,
    buyVendors: ['chewy-brand'], // eval's only buy CTA is chewy-brand (Rx Veterinary Diets explicitly NOT linked)
    buySearchTerm: 'Purina Pro Plan',
    wsavaReadingNote:
      'PetFood.com editorial reading: strong on the WSAVA selection criteria — board-certified nutritionists on staff, company-owned plants, published research, and feeding-trial substantiation on many (not all) diets. The separate Pro Plan Veterinary Diets line is prescription-channel and excluded here.',
    citedSources: [
      { name: 'PetFood.com — Purina Pro Plan: An Independent Evaluation', url: 'https://petfood.com/brands/purina-pro-plan-evaluation' },
      { name: 'WSAVA Global Nutrition Guidelines', url: 'https://wsava.org/committees/global-nutrition-committee/' },
    ],
  },
  {
    id: 'taste-of-the-wild',
    name: 'Taste of the Wild',
    evaluationSlug: 'taste-of-the-wild-evaluation',
    corporateOwner: 'Diamond Pet Foods', // "owned and manufactured by Diamond Pet Foods"
    aafcoPosture: null, // eval says to "confirm whether diets are feeding-trial tested" — does not state the brand's posture
    manufacturing: 'owned-facilities', // "Diamond Pet Foods manufactures Taste of the Wild in its own facilities"
    recallPosture:
      'Manufacturer (Diamond Pet Foods) was at the center of a major 2012 Salmonella recall affecting multiple Diamond-made brands; the eval flags this as material under its recall dimension.',
    formats: [], // source eval states no explicit format; nulled per source-traceability (renders '—') // eval describes dry grain-free recipes; no other format stated
    priceBand: 'mid', // ReviewCard price "$$ mid-tier", "mid-priced"
    grainFreeDcmContext: true, // "the pattern at the center of the DCM investigation"; "several grain-free brands in this category were named in the FDA's case reporting"
    monetizable: false, // grain-free-DCM column → CTA suppressed per build brief §8 (default-suppress on clinical ambiguity)
    buyVendors: [],
    buySearchTerm: 'Taste of the Wild',
    wsavaReadingNote:
      'PetFood.com editorial reading: mid-priced grain-free, legume-inclusive line — the formulation pattern at the center of the FDA CVM diet-associated DCM investigation (unresolved, not proven causal). Thinner research disclosure than the largest research-driven manufacturers; manufacturer recall history (Diamond 2012 Salmonella).',
    citedSources: [
      { name: 'PetFood.com — Taste of the Wild: An Independent Evaluation', url: 'https://petfood.com/brands/taste-of-the-wild-evaluation' },
      FDA_DCM_SOURCE,
    ],
  },
  {
    id: 'wellness',
    name: 'Wellness',
    evaluationSlug: 'wellness-vs-merrick',
    // "Wellness sits within a large pet-nutrition holding company" — eval also names the entity "Wellness Pet Company"
    corporateOwner: 'Wellness Pet Company',
    aafcoPosture: null, // eval directs owners to "confirm the AAFCO statement on the specific product"; does not state the brand's posture
    manufacturing: null, // "Manufacturing arrangements... differ and should be evaluated per brand" — not stated for Wellness specifically
    recallPosture: 'Has had recalls over the years (as most established brands have), per the eval; best assessed by cause/severity/response, with FDA-CVM as the record. No specific verdict stated.',
    formats: [], // source eval states no explicit format; nulled per source-traceability (renders '—') // eval references grain-inclusive and grain-free dry lines; no other format detail to cite
    priceBand: 'premium', // ReviewCard price "$$ premium" / "premium natural-positioned"
    grainFreeDcmContext: false, // eval notes grain-free formulas "intersect the DCM question" generally but does not name the brand in the FDA listing
    monetizable: true,
    buyVendors: ['chewy-brand'], // eval buy CTA is chewy-brand only
    buySearchTerm: 'Wellness pet food',
    wsavaReadingNote:
      'PetFood.com editorial reading: premium natural-positioned line with named-meat-forward panels; owned by a large pet-nutrition holding company despite the artisan image. Confirm AAFCO substantiation per formula; grain-free legume-heavy recipes carry the general DCM caution.',
    citedSources: [
      { name: 'PetFood.com — Wellness vs Merrick', url: 'https://petfood.com/brands/wellness-vs-merrick' },
    ],
  },
  {
    id: 'merrick',
    name: 'Merrick',
    evaluationSlug: 'wellness-vs-merrick',
    corporateOwner: 'Nestle Purina', // "Merrick was acquired by Nestle Purina"
    aafcoPosture: null, // "confirm the AAFCO statement on the specific product" — brand posture not stated
    manufacturing: null, // not stated for Merrick specifically
    recallPosture: 'Has had recalls over the years (as most established brands have), per the eval; best assessed by cause/severity/response. No specific verdict stated.',
    formats: [], // source eval states no explicit format; nulled per source-traceability (renders '—') // grain-inclusive + grain-free dry lines referenced
    priceBand: 'premium', // ReviewCard price "$$ premium"
    grainFreeDcmContext: true, // Merrick IS named in the FDA 2019 16-brand list (per the site's own Blue Buffalo eval) — flag + suppress CTA for cross-page trust consistency
    monetizable: true,
    buyVendors: ['chewy-brand'],
    buySearchTerm: 'Merrick pet food',
    wsavaReadingNote:
      'PetFood.com editorial reading: premium whole-food natural line acquired by Nestle Purina, which can bring research/QC resources behind the natural branding. Confirm AAFCO per formula; grain-free legume-heavy recipes carry the general DCM caution.',
    citedSources: [
      { name: 'PetFood.com — Wellness vs Merrick', url: 'https://petfood.com/brands/wellness-vs-merrick' },
    ],
  },
  {
    id: 'kirkland-signature',
    name: 'Kirkland Signature',
    evaluationSlug: 'kirkland-signature-evaluation',
    // "Costco's private-label brand" — store brand, contract-manufactured; Costco is the brand owner
    corporateOwner: 'Costco (store brand)',
    aafcoPosture: null, // eval: "Confirm the AAFCO... statement on the specific Kirkland formula"; posture not stated
    manufacturing: 'co-manufactured', // "manufactured by a contract producer rather than by Costco itself; Diamond Pet Foods has been a known manufacturer"
    recallPosture:
      'Recall exposure follows the contract manufacturer (Diamond Pet Foods), whose record includes the major 2012 Salmonella recall; the store-brand model ties recall risk to that maker.',
    formats: [], // source eval states no explicit format; nulled per source-traceability (renders '—') // grain-inclusive + grain-free dry formulas referenced
    priceBand: 'value', // ReviewCard price "$$ value tier", "premium value", "below name brands"
    grainFreeDcmContext: false, // eval notes the legume-heavy DCM question generally; does not name the brand in the FDA listing
    monetizable: true,
    buyVendors: ['amazon-brand'], // eval buy CTA is amazon-brand only (limited retail outside Costco)
    buySearchTerm: 'Kirkland Signature pet food',
    wsavaReadingNote:
      'PetFood.com editorial reading: strong value (premium-positioned formula below name-brand price), with the main weakness being transparency — a contract-manufactured store brand discloses less on sourcing/QC than brands that own their plants and publish research.',
    citedSources: [
      { name: 'PetFood.com — Kirkland Signature: An Independent Evaluation', url: 'https://petfood.com/brands/kirkland-signature-evaluation' },
    ],
  },
  // ── Veterinary-channel brands: comparison-only, monetizable:false, NO buy CTA ──
  {
    id: 'hills',
    name: "Hill's Pet Nutrition",
    evaluationSlug: 'hills-vs-royal-canin',
    corporateOwner: 'Colgate-Palmolive', // "Hill's Pet Nutrition is a wholly-owned subsidiary of Colgate-Palmolive Company"
    // "feeding-trial-tested adult lines and formulated-to-meet maintenance lines"
    aafcoPosture: 'mixed',
    manufacturing: 'owned-facilities', // "own and operate the bulk of their manufacturing... Owned plants in Kansas, Indiana, Tennessee, Iowa"
    recallPosture: "Hill's January 2019 voluntary canned dog food recall (elevated vitamin D), expanded March 2019, per FDA-CVM.",
    formats: ['kibble', 'canned'], // "feeding-trial-tested adult lines"; the recall was a canned dog food recall
    priceBand: 'premium', // "comparable price tier"; "premium options... ~$0.18–$0.30 per 100 kcal"
    grainFreeDcmContext: false,
    monetizable: false, // veterinary-therapeutic channel — no buy CTA
    buyVendors: [],
    buySearchTerm: '',
    wsavaReadingNote:
      'PetFood.com editorial reading: among the manufacturers that publish enough to satisfy the WSAVA selection criteria — owned plants, board-certified nutritionist staffing, and feeding-trial substantiation on adult lines. Therapeutic Prescription Diet SKUs are set by the treating veterinarian.',
    citedSources: [
      { name: "PetFood.com — Hill's vs Royal Canin", url: 'https://petfood.com/brands/hills-vs-royal-canin' },
      { name: 'WSAVA Global Nutrition Guidelines', url: 'https://wsava.org/committees/global-nutrition-committee/' },
    ],
  },
  {
    id: 'royal-canin',
    name: 'Royal Canin',
    evaluationSlug: 'hills-vs-royal-canin',
    corporateOwner: 'Mars (Mars Petcare)', // "Royal Canin acquisition by Mars in 2002"
    aafcoPosture: 'mixed', // "feeding-trial-tested adult lines and formulated-to-meet maintenance lines"
    manufacturing: 'owned-facilities', // "Owned plants in South Dakota, Missouri"
    recallPosture: 'Industry-wide 2007 melamine-contamination recalls included Royal Canin USA, per FDA-CVM.',
    formats: ['kibble', 'canned'],
    priceBand: 'premium', // "comparable price tier", same premium band as Hill's
    grainFreeDcmContext: false,
    monetizable: false, // veterinary-therapeutic channel — no buy CTA
    buyVendors: [],
    buySearchTerm: '',
    wsavaReadingNote:
      'PetFood.com editorial reading: substantively comparable to Hill\'s on the WSAVA criteria — owned plants, board-certified nutritionist staffing, feeding-trial adult lines. Therapeutic Veterinary Diet SKUs are set by the treating veterinarian.',
    citedSources: [
      { name: "PetFood.com — Hill's vs Royal Canin", url: 'https://petfood.com/brands/hills-vs-royal-canin' },
      { name: 'WSAVA Global Nutrition Guidelines', url: 'https://wsava.org/committees/global-nutrition-committee/' },
    ],
  },
]

/** Diet-type rows for the comparison picker. Comparison-only — no SKU, no buy CTA. */
export interface DietType {
  id: string
  name: string
  compareSlug: string // links to /compare/<slug>
}

export const dietTypes: DietType[] = [
  { id: 'wet-vs-dry-food', name: 'Wet vs Dry Food', compareSlug: 'wet-vs-dry-food' },
  { id: 'raw-vs-cooked-diets', name: 'Raw vs Cooked Diets', compareSlug: 'raw-vs-cooked-diets' },
  { id: 'fresh-vs-kibble', name: 'Fresh vs Kibble', compareSlug: 'fresh-vs-kibble' },
  { id: 'grain-free-vs-grain-inclusive', name: 'Grain-Free vs Grain-Inclusive', compareSlug: 'grain-free-vs-grain-inclusive' },
  { id: 'home-cooked-vs-commercial', name: 'Home-Cooked vs Commercial', compareSlug: 'home-cooked-vs-commercial' },
  { id: 'kibble-vs-canned-for-cats', name: 'Kibble vs Canned for Cats', compareSlug: 'kibble-vs-canned-for-cats' },
  { id: 'freeze-dried-and-dehydrated', name: 'Freeze-Dried & Dehydrated', compareSlug: 'freeze-dried-and-dehydrated' },
  { id: 'prescription-vs-otc-diets', name: 'Prescription vs OTC Diets', compareSlug: 'prescription-vs-otc-diets' },
  { id: 'breed-specific-diets', name: 'Breed-Specific Diets', compareSlug: 'breed-specific-diets' },
]

/** Human-readable labels for the comparison-table criterion rows. */
export const aafcoLabels: Record<NonNullable<OtcBrand['aafcoPosture']>, string> = {
  'feeding-trials': 'Feeding trials (most SKUs)',
  'formulated-to-meet': 'Formulated to meet (most SKUs)',
  mixed: 'Mixed (feeding-trial adult + formulated maintenance)',
}

export const manufacturingLabels: Record<NonNullable<OtcBrand['manufacturing']>, string> = {
  'owned-facilities': 'Company-owned facilities',
  'co-manufactured': 'Contract / co-manufactured',
  mixed: 'Mixed (owned + co-manufactured)',
}

export const priceBandLabels: Record<NonNullable<OtcBrand['priceBand']>, string> = {
  value: 'Value tier',
  mid: 'Mid tier',
  premium: 'Premium tier',
}
