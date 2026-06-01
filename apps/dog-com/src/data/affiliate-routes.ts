/**
 * Dog.com — affiliate route registry.
 *
 * Vendor URL templates used by the /go/[vendor]/[sku] click-tracking handler.
 *
 * The tracking IDs are PLACEHOLDER values today. They will be populated once
 * the corresponding affiliate accounts are approved. The handler substitutes
 * `PLACEHOLDER` with `process.env.AFF_<VENDOR>_TAG` at request time (per
 * `ops/policies/bot-coordination.md` §6, rule 3) — env-var naming is:
 *   `AFF_` + uppercased vendor key, hyphens → underscores, + `_TAG`
 *   e.g. `healthy-paws` → `AFF_HEALTHY_PAWS_TAG`.
 * If the env var is unset, the redirect still works; only the attribution
 * tag is missing. See
 * `ops/handoffs/2026-05-30-affiliate-wiring-round-1-applications.md`
 * for the application checklist and the full env-var swap list.
 *
 * Per-site approved-vendor scope: see
 * `ops/policies/bot-coordination.md` §5 (dog-com row).
 */

export interface AffiliateRoute {
  /** Human-readable vendor name */
  name: string
  /** URL template — `{sku}` is replaced with the route param;
   *  `PLACEHOLDER` is replaced with the matching AFF_*_TAG env var */
  template: string
  /** Whether the vendor requires a non-empty SKU to redirect */
  requiresSku: boolean
}

export const affiliateRoutes: Record<string, AffiliateRoute> = {
  // ─── Generalist retailers (Amazon Associates + Impact-Chewy) ───
  amazon: {
    // Network: Amazon Associates. Carlo-approved per policy §5.
    // See roadmap §1 row 1.1.
    name: 'Amazon',
    template: 'https://amazon.com/dp/{sku}?tag=PLACEHOLDER',
    requiresSku: true,
  },
  'amazon-brand': {
    // Network: Amazon Associates. Carlo-approved per policy §5.
    // Search-style variant: `{sku}` is a URL-encoded search query, not an
    // ASIN — used by review/buy-box CTAs that point at a product search
    // rather than a single ASIN. Mirrors fish-com / ferret-com usage.
    name: 'Amazon',
    template: 'https://amazon.com/s?k={sku}&tag=PLACEHOLDER',
    requiresSku: true,
  },
  'chewy-brand': {
    // Network: Impact (Chewy umbrella). Carlo-approved per policy §5.
    // Search-style variant: `{sku}` is a URL-encoded search query.
    name: 'Chewy',
    template: 'https://chewy.com/s?query={sku}&utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  chewy: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Chewy',
    template: 'https://chewy.com/p/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },

  // ─── Pet insurance (Impact + Awin + direct) — per policy §5 dog-com row ───
  trupanion: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Trupanion (Pet Insurance)',
    template: 'https://trupanion.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  'healthy-paws': {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Healthy Paws (Pet Insurance)',
    template: 'https://healthypawspetinsurance.com/?affid=PLACEHOLDER&pid={sku}',
    requiresSku: false,
  },
  lemonade: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Lemonade Pet (Pet Insurance)',
    template: 'https://lemonade.com/pet?affid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },
  pumpkin: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Pumpkin Pet Insurance',
    template: 'https://pumpkin.care/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  manypets: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'ManyPets (Pet Insurance)',
    template: 'https://manypets.com/us/?affid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  embrace: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Embrace (Pet Insurance)',
    template: 'https://embracepetinsurance.com/?source=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  spot: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Spot Pet Insurance',
    template: 'https://spotpetins.com/?refid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },
  fetch: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Fetch by The Dodo (Pet Insurance)',
    template: 'https://fetchpet.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  'pets-best': {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Pets Best (Pet Insurance)',
    template: 'https://petsbest.com/?affid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  aspca: {
    // Network: Direct (ASPCA / Crum & Forster). Carlo-approved per policy §5.
    name: 'ASPCA Pet Insurance',
    template: 'https://aspcapetinsurance.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  figo: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'Figo Pet Insurance',
    template: 'https://figopetinsurance.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  metlife: {
    // Network: Impact. Carlo-approved per policy §5.
    name: 'MetLife Pet Insurance',
    template: 'https://metlifepetinsurance.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  wagmo: {
    // Network: Impact. Carlo-approved per policy §5 (wellness plan).
    name: 'Wagmo (Pet Wellness)',
    template: 'https://wagmo.io/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },

  // ─── DNA testing (Impact + CJ) ───
  embark: {
    // Network: Impact. Carlo-approved per policy §5 (DNA testing).
    name: 'Embark Vet (DNA)',
    template: 'https://embarkvet.com/products/{sku}?refid=PLACEHOLDER',
    requiresSku: true,
  },
  'wisdom-panel': {
    // Network: CJ. Carlo-approved per policy §5 (DNA testing).
    name: 'Wisdom Panel (DNA)',
    template: 'https://wisdompanel.com/en-us/shop/{sku}?cjevent=PLACEHOLDER',
    requiresSku: true,
  },
  basepaws: {
    // Network: Direct (or Impact — adjust at env-var time). Carlo-approved
    // per policy §5 (DNA testing — CSRO confirmed scope in
    // csro-dir-2026-W22-015). Template uses a homepage URL with sku passed
    // as utm_campaign so the page's `/go/basepaws/home` CTA resolves to
    // basepaws.com homepage with tracking, AND a future product-level CTA
    // (e.g. /go/basepaws/cat-dna-kit) still works without 404 — it lands
    // on the homepage with the campaign tag preserved for analytics.
    name: 'Basepaws (Cat DNA)',
    template: 'https://basepaws.com/?ref=PLACEHOLDER&utm_source=carloOS&utm_campaign={sku}',
    requiresSku: true,
  },

  // ─── Telehealth (Impact) ───
  vetster: {
    // Network: Impact. Carlo-approved per policy §5 (telehealth).
    name: 'Vetster (Telehealth)',
    template: 'https://vetster.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  pawp: {
    // Network: Impact. Carlo-approved per policy §5 (telehealth).
    name: 'Pawp (Telehealth)',
    template: 'https://pawp.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  dutch: {
    // Network: Impact. Carlo-approved per policy §5 (telehealth).
    name: 'Dutch (Telehealth)',
    template: 'https://dutch.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  airvet: {
    // Network: Impact. Carlo-approved per policy §5 (telehealth).
    name: 'AirVet (Telehealth)',
    template: 'https://airvet.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },

  // ─── Training (ShareASale + ClickBank) ───
  spiritdog: {
    // Network: ShareASale. Carlo-approved per policy §5 (training).
    name: 'SpiritDog Training',
    template: 'https://spiritdogtraining.com/product/{sku}/?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
  'doggy-dan': {
    // Network: ClickBank or direct. Carlo-approved per policy §5 (training).
    name: 'Doggy Dan (Online Dog Trainer)',
    template: 'https://theonlinedogtrainer.com/?hop=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  'brain-training': {
    // Network: ClickBank. Carlo-approved per policy §5 (training).
    name: 'Brain Training for Dogs',
    template: 'https://braintraining4dogs.com/?hop=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },

  // ─── Pet specialty (ShareASale + Impact + Skimlinks) ───
  furhaven: {
    // Network: ShareASale. Carlo-approved per policy §5 (pet specialty).
    name: 'FurHaven',
    template: 'https://furhaven.com/products/{sku}?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
  ollie: {
    // Network: Impact. Carlo-approved per policy §5 (DTC food).
    name: 'Ollie (Fresh Dog Food)',
    template: 'https://myollie.com/?refid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },
  'spot-tango': {
    // Network: Impact. Carlo-approved per policy §5 (DTC food).
    name: 'Spot & Tango',
    template: 'https://spotandtango.com/?refid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },
  'farmers-dog': {
    // Network: Skimlinks (per architect §5 — DTC fresh food via Skimlinks).
    // Carlo-approved per policy §5.
    name: "The Farmer's Dog",
    template: 'https://thefarmersdog.com/?refid=PLACEHOLDER&offer={sku}',
    requiresSku: false,
  },
  hepper: {
    // Network: ShareASale. Carlo-approved per policy §5 (pet specialty).
    name: 'Hepper',
    template: 'https://hepper.com/products/{sku}?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
  muttropolis: {
    // Network: ShareASale. Carlo-approved per policy §5 (pet specialty,
    // 120-day cookie).
    name: 'Muttropolis',
    template: 'https://muttropolis.com/products/{sku}?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
  petwellbeing: {
    // Network: ShareASale. Carlo-approved per policy §5 (senior supplements).
    name: 'PetWellbeing',
    template: 'https://petwellbeing.com/products/{sku}?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
  nuvet: {
    // Network: ShareASale. Carlo-approved per policy §5 (supplements).
    name: 'NuVet Labs',
    template: 'https://nuvet.com/{sku}?afftrack=PLACEHOLDER',
    requiresSku: true,
  },

  // ─── Pet pharmacy (ShareASale + Impact under Chewy umbrella) ───
  'chewy-pharmacy': {
    // Network: Impact (Chewy umbrella). Carlo-approved per policy §5
    // (Chewy Pharmacy is included in Chewy affiliate per architect §5).
    name: 'Chewy Pharmacy',
    template: 'https://chewy.com/pharmacy/{sku}?utm_source=carloOS&aff=PLACEHOLDER',
    requiresSku: true,
  },
  allivet: {
    // Network: ShareASale. Carlo-approved per policy §5 (pet pharmacy).
    name: 'Allivet',
    template: 'https://allivet.com/p-{sku}.aspx?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
  petmeds: {
    // Network: ShareASale. Carlo-approved per policy §5 (pet pharmacy).
    name: 'PetMeds',
    template: 'https://1800petmeds.com/{sku}?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
  vetrxdirect: {
    // Network: ShareASale. Carlo-approved per policy §5 (pet pharmacy).
    name: 'VetRxDirect',
    template: 'https://vetrxdirect.com/product/{sku}?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
  entirelypets: {
    // Network: ShareASale. Carlo-approved per policy §5 (pet pharmacy).
    name: 'EntirelyPets',
    template: 'https://entirelypets.com/{sku}.html?afftrack=PLACEHOLDER',
    requiresSku: true,
  },
  'pet-meds-1800': {
    // Network: ShareASale. Carlo-approved per policy §5 (pet pharmacy).
    name: '1-800-PetMeds',
    template: 'https://1800petmeds.com/product-prod{sku}.html?afftrack=PLACEHOLDER',
    requiresSku: true,
  },

  // ─── Financing (Impact + direct) ───
  carecredit: {
    // Network: Impact. Carlo-approved per policy §5 (financing).
    name: 'CareCredit',
    template: 'https://carecredit.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  scratchpay: {
    // Network: Direct. Carlo-approved per policy §5 (financing).
    name: 'Scratchpay',
    template: 'https://scratchpay.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },
  cherry: {
    // Network: Direct. Carlo-approved per policy §5 (financing).
    name: 'Cherry Pet Financing',
    template: 'https://withcherry.com/?refid=PLACEHOLDER&campaign={sku}',
    requiresSku: false,
  },

  // ─── Catch-all aggregator routes (pre-existing) ───
  impact: {
    name: 'Pet Insurance Network (Impact Radius)',
    template: 'https://impact.com/campaign-direct?advid=PLACEHOLDER&offerid={sku}',
    requiresSku: true,
  },
  awin: {
    name: 'Pet Insurance Network (Awin)',
    template: 'https://www.awin1.com/cread.php?awinmid=PLACEHOLDER&awinaffid=PLACEHOLDER&p={sku}',
    requiresSku: true,
  },
}
