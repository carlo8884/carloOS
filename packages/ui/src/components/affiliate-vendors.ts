/**
 * Affiliate vendor registry — server-side metadata for /go/[vendor]/[sku]
 *
 * Used by the Next.js redirect route in apps/*\/src/app/go/[vendor]/[sku]/route.ts
 * to build the actual outbound URL with affiliate tracking codes.
 *
 * Keep secrets in environment variables — never inline real affiliate
 * IDs in this file (build-time public envs are fine; private API keys
 * are not).
 *
 * Built per Architect Directive 2.
 */

import type { Vendor } from './AffiliateLink'

interface VendorConfig {
  /**
   * Function that takes a SKU and returns the full vendor URL with
   * affiliate tracking parameters injected.
   */
  buildUrl: (sku: string) => string

  /**
   * Human-readable label for analytics / display.
   */
  label: string

  /**
   * Affiliate program category — used in revenue reporting.
   */
  category:
    | 'pet-supplies'
    | 'pet-pharmacy'
    | 'pet-insurance'
    | 'telehealth'
    | 'dna'
    | 'training'
    | 'equine'
    | 'aquarium'
    | 'financing'
    | 'bereavement'
    | 'off-vertical'
}

// ─────────────────────────────────────────────
// Vendor URL builders
// ─────────────────────────────────────────────
// Each builder consumes a SKU and produces a tracked URL.
// Real affiliate IDs come from env vars (e.g. AFF_AMAZON_TAG).
// Until each program is approved, the placeholder is the unbranded URL.

function env(key: string, fallback = ''): string {
  // Server-side only — never expose private aff IDs to the client.
  if (typeof process === 'undefined') return fallback
  return process.env[key] ?? fallback
}

export const VENDORS: Record<Vendor, VendorConfig> = {
  // ─── Pet supplies ───────────────────────────
  chewy: {
    label: 'Chewy',
    category: 'pet-supplies',
    buildUrl: (sku) =>
      `https://www.chewy.com/s?query=${encodeURIComponent(sku)}` +
      (env('AFF_CHEWY_TAG') ? `&utm_source=carloos&utm_medium=affiliate&utm_campaign=${env('AFF_CHEWY_TAG')}` : ''),
  },
  petco: {
    label: 'Petco',
    category: 'pet-supplies',
    buildUrl: (sku) =>
      `https://www.petco.com/shop/petcostore/search/${encodeURIComponent(sku)}` +
      (env('AFF_PETCO_TAG') ? `?cm_mmc=affiliate-_-${env('AFF_PETCO_TAG')}` : ''),
  },
  amazon: {
    label: 'Amazon',
    category: 'pet-supplies',
    buildUrl: (sku) => {
      const tag = env('AFF_AMAZON_TAG', 'carloos-20')
      // SKU may be an ASIN or a search query
      if (/^B0[A-Z0-9]{8}$/.test(sku)) {
        return `https://www.amazon.com/dp/${sku}?tag=${tag}`
      }
      return `https://www.amazon.com/s?k=${encodeURIComponent(sku)}&tag=${tag}`
    },
  },
  furhaven: {
    label: 'FurHaven',
    category: 'pet-supplies',
    buildUrl: (sku) => `https://furhaven.com/products/${encodeURIComponent(sku)}`,
  },
  innovet: {
    label: 'Innovet Pet',
    category: 'pet-supplies',
    buildUrl: (sku) => `https://www.innovetpet.com/products/${encodeURIComponent(sku)}`,
  },
  ollie: {
    label: 'Ollie',
    category: 'pet-supplies',
    buildUrl: () =>
      `https://www.myollie.com?utm_source=carloos&utm_medium=affiliate`,
  },
  spotandtango: {
    label: 'Spot & Tango',
    category: 'pet-supplies',
    buildUrl: () => `https://spotandtango.com`,
  },
  thefarmersdog: {
    label: "The Farmer's Dog",
    category: 'pet-supplies',
    buildUrl: () => `https://www.thefarmersdog.com`,
  },
  holistapet: {
    label: 'Holistapet',
    category: 'pet-supplies',
    buildUrl: (sku) => `https://www.holistapet.com/products/${encodeURIComponent(sku)}`,
  },
  prettylitter: {
    label: 'PrettyLitter',
    category: 'pet-supplies',
    buildUrl: () => `https://www.prettylitter.com`,
  },
  hepper: {
    label: 'Hepper',
    category: 'pet-supplies',
    buildUrl: (sku) => `https://www.hepper.com/products/${encodeURIComponent(sku)}`,
  },
  muttropolis: {
    label: 'Muttropolis',
    category: 'pet-supplies',
    buildUrl: (sku) => `https://www.muttropolis.com/products/${encodeURIComponent(sku)}`,
  },
  petwellbeing: {
    label: 'Pet Wellbeing',
    category: 'pet-supplies',
    buildUrl: (sku) => `https://petwellbeing.com/products/${encodeURIComponent(sku)}`,
  },
  nuvet: {
    label: 'NuVet Labs',
    category: 'pet-supplies',
    buildUrl: () => `https://www.nuvet.com`,
  },

  // ─── Pet pharmacy ───────────────────────────
  allivet: {
    label: 'Allivet',
    category: 'pet-pharmacy',
    buildUrl: (sku) => `https://www.allivet.com/p/${encodeURIComponent(sku)}`,
  },
  petmeds: {
    label: 'PetMeds',
    category: 'pet-pharmacy',
    buildUrl: (sku) => `https://www.1800petmeds.com/Search.process?keyword=${encodeURIComponent(sku)}`,
  },
  vetrxdirect: {
    label: 'VetRxDirect',
    category: 'pet-pharmacy',
    buildUrl: (sku) => `https://www.vetrxdirect.com/search?q=${encodeURIComponent(sku)}`,
  },
  entirelypets: {
    label: 'EntirelyPets',
    category: 'pet-pharmacy',
    buildUrl: (sku) => `https://www.entirelypets.com/searchresults.html?Keyword=${encodeURIComponent(sku)}`,
  },
  chewyrx: {
    label: 'Chewy Pharmacy',
    category: 'pet-pharmacy',
    buildUrl: (sku) => `https://www.chewy.com/rx/s?query=${encodeURIComponent(sku)}`,
  },

  // ─── Pet insurance ──────────────────────────
  trupanion: {
    label: 'Trupanion',
    category: 'pet-insurance',
    buildUrl: () => `https://trupanion.com`,
  },
  healthypaws: {
    label: 'Healthy Paws',
    category: 'pet-insurance',
    buildUrl: () => `https://www.healthypawspetinsurance.com`,
  },
  embrace: {
    label: 'Embrace',
    category: 'pet-insurance',
    buildUrl: () => `https://www.embracepetinsurance.com`,
  },
  lemonade: {
    label: 'Lemonade Pet',
    category: 'pet-insurance',
    buildUrl: () => `https://www.lemonade.com/pet`,
  },
  spot: {
    label: 'Spot',
    category: 'pet-insurance',
    buildUrl: () => `https://spotpetins.com`,
  },
  pumpkin: {
    label: 'Pumpkin',
    category: 'pet-insurance',
    buildUrl: () => `https://www.pumpkin.care`,
  },
  figo: {
    label: 'Figo',
    category: 'pet-insurance',
    buildUrl: () => `https://figopetinsurance.com`,
  },
  manypets: {
    label: 'ManyPets',
    category: 'pet-insurance',
    buildUrl: () => `https://manypets.com`,
  },
  fetch: {
    label: 'Fetch by The Dodo',
    category: 'pet-insurance',
    buildUrl: () => `https://www.fetchpet.com`,
  },
  wagmo: {
    label: 'Wagmo',
    category: 'pet-insurance',
    buildUrl: () => `https://wagmo.io`,
  },
  metlifepet: {
    label: 'MetLife Pet',
    category: 'pet-insurance',
    buildUrl: () => `https://www.metlifepetinsurance.com`,
  },
  petsbest: {
    label: 'Pets Best',
    category: 'pet-insurance',
    buildUrl: () => `https://www.petsbest.com`,
  },
  aspcapet: {
    label: 'ASPCA Pet',
    category: 'pet-insurance',
    buildUrl: () => `https://www.aspcapetinsurance.com`,
  },

  // ─── Telehealth ─────────────────────────────
  vetster: {
    label: 'Vetster',
    category: 'telehealth',
    buildUrl: () => `https://vetster.com`,
  },
  pawp: {
    label: 'Pawp',
    category: 'telehealth',
    buildUrl: () => `https://pawp.com`,
  },
  dutch: {
    label: 'Dutch',
    category: 'telehealth',
    buildUrl: () => `https://dutch.com`,
  },
  airvet: {
    label: 'AirVet',
    category: 'telehealth',
    buildUrl: () => `https://airvet.com`,
  },

  // ─── DNA ────────────────────────────────────
  embarkvet: {
    label: 'Embark Vet',
    category: 'dna',
    buildUrl: () => `https://embarkvet.com`,
  },
  wisdompanel: {
    label: 'Wisdom Panel',
    category: 'dna',
    buildUrl: () => `https://www.wisdompanel.com`,
  },
  basepaws: {
    label: 'Basepaws',
    category: 'dna',
    buildUrl: () => `https://basepaws.com`,
  },

  // ─── Training ───────────────────────────────
  spiritdog: {
    label: 'SpiritDog Training',
    category: 'training',
    buildUrl: () => `https://spiritdogtraining.com`,
  },
  doggydan: {
    label: 'Doggy Dan',
    category: 'training',
    buildUrl: () => `https://theonlinedogtrainer.com`,
  },
  k9ti: {
    label: 'K9 Training Institute',
    category: 'training',
    buildUrl: () => `https://k9trainingschool.com`,
  },
  braintrainingfordogs: {
    label: 'Brain Training for Dogs',
    category: 'training',
    buildUrl: () => `https://braintraining4dogs.com`,
  },

  // ─── Equine ─────────────────────────────────
  smartpak: {
    label: 'SmartPak',
    category: 'equine',
    buildUrl: (sku) => `https://www.smartpakequine.com/search?q=${encodeURIComponent(sku)}`,
  },
  doversaddlery: {
    label: 'Dover Saddlery',
    category: 'equine',
    buildUrl: (sku) => `https://www.doversaddlery.com/search?q=${encodeURIComponent(sku)}`,
  },
  ridingwarehouse: {
    label: 'Riding Warehouse',
    category: 'equine',
    buildUrl: (sku) => `https://www.ridingwarehouse.com/search.html?q=${encodeURIComponent(sku)}`,
  },
  statelinetack: {
    label: 'State Line Tack',
    category: 'equine',
    buildUrl: (sku) => `https://www.statelinetack.com/search?q=${encodeURIComponent(sku)}`,
  },
  schneiders: {
    label: 'Schneiders Saddlery',
    category: 'equine',
    buildUrl: () => `https://www.sstack.com`,
  },
  bigdees: {
    label: "Big Dee's Tack",
    category: 'equine',
    buildUrl: () => `https://www.bigdweb.com`,
  },
  horse: {
    label: 'Horse.com',
    category: 'equine',
    buildUrl: (sku) => `https://www.horse.com/search/?q=${encodeURIComponent(sku)}`,
  },

  // ─── Aquarium ───────────────────────────────
  bulkreefsupply: {
    label: 'Bulk Reef Supply',
    category: 'aquarium',
    buildUrl: (sku) => `https://www.bulkreefsupply.com/search?q=${encodeURIComponent(sku)}`,
  },
  marinedepot: {
    label: 'Marine Depot',
    category: 'aquarium',
    buildUrl: () => `https://www.marinedepot.com`,
  },
  liveaquaria: {
    label: 'LiveAquaria',
    category: 'aquarium',
    buildUrl: (sku) => `https://www.liveaquaria.com/search?q=${encodeURIComponent(sku)}`,
  },

  // ─── Pet financing ──────────────────────────
  carecredit: {
    label: 'CareCredit',
    category: 'financing',
    buildUrl: () => `https://www.carecredit.com/vetmed/`,
  },
  scratchpay: {
    label: 'Scratchpay',
    category: 'financing',
    buildUrl: () => `https://scratchpay.com`,
  },
  cherry: {
    label: 'Cherry',
    category: 'financing',
    buildUrl: () => `https://withcherry.com`,
  },

  // ─── Bereavement / trust ────────────────────
  betterhelp: {
    label: 'BetterHelp',
    category: 'bereavement',
    buildUrl: () => `https://www.betterhelp.com`,
  },
  legalzoom: {
    label: 'LegalZoom',
    category: 'bereavement',
    buildUrl: () => `https://www.legalzoom.com`,
  },
  trustandwill: {
    label: 'Trust & Will',
    category: 'bereavement',
    buildUrl: () => `https://trustandwill.com`,
  },

  // ─── Off-vertical ───────────────────────────
  wayfair: {
    label: 'Wayfair',
    category: 'off-vertical',
    buildUrl: (sku) => `https://www.wayfair.com/keyword.php?keyword=${encodeURIComponent(sku)}`,
  },
  buildcom: {
    label: 'Build.com',
    category: 'off-vertical',
    buildUrl: (sku) => `https://www.build.com/search?q=${encodeURIComponent(sku)}`,
  },
}

export function resolveVendorUrl(vendor: Vendor, sku: string): string | null {
  const config = VENDORS[vendor]
  if (!config) return null
  return config.buildUrl(sku)
}
