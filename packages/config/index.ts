/**
 * CarloOS Design Tokens & Site Configuration
 * Single source of truth for all brand values across all 5 sites.
 * Every color, font, spacing, and site-specific config lives here.
 */

// ─────────────────────────────────────────────
// SITE IDENTIFIERS
// ─────────────────────────────────────────────

export type SiteId =
  | 'dog-com'
  | 'vets-co'
  | 'fish-com'
  | 'saddle-com'
  | 'lizard-com'
  | 'horses-com'
  | 'petfood-com'
  | 'ferret-com'
  | 'ferrets-com'
  | 'petfoods-com'
  // ─── New apps (Architect scaffold request 2026-05-30, Carlo-approved) ─
  | 'askthevet'         // S2 — AI symptom checker
  | 'seniorpets'        // S9 — senior pet Rx + content
  | 'dogpicture'        // S8 — AI pet portraits + POD
  | 'hardmoneyloans'    // S11 — off-vertical lead gen

// ─────────────────────────────────────────────
// DESIGN TOKENS — shared primitives
// ─────────────────────────────────────────────

export const spacing = {
  px: '1px',
  0: '0',
  0.5: '2px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  10: '40px',
  12: '48px',
  16: '64px',
  20: '80px',
  24: '96px',
  32: '128px',
} as const

export const borderRadius = {
  sm: '6px',
  md: '10px',
  lg: '16px',
  xl: '24px',
  pill: '9999px',
} as const

export const shadows = {
  card: '0 4px 24px rgba(0,0,0,0.07)',
  cardHover: '0 12px 40px rgba(0,0,0,0.12)',
  nav: '0 4px 24px rgba(0,0,0,0.08)',
} as const

export const transitions = {
  fast: 'all 0.15s ease',
  base: 'all 0.22s ease',
  slow: 'all 0.4s ease',
} as const

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const

// ─────────────────────────────────────────────
// SITE THEMES
// Each site overrides these exact token names.
// ─────────────────────────────────────────────

export interface SiteTheme {
  // Core brand
  primary: string
  primaryLight: string
  primaryPale: string
  primaryDark: string

  // Backgrounds
  dark: string          // hero, nav dark mode
  surface: string       // off-white section bg
  white: string

  // Text
  textDark: string
  textMid: string
  textLight: string

  // Borders
  border: string

  // Semantic
  success: string
  warning: string
  danger: string

  // Typography
  fontDisplay: string   // headline font (loaded via next/font or Google)
  fontBody: string      // body font
  fontDisplayWeights: number[]
  fontBodyWeights: number[]

  // Site metadata
  siteName: string
  siteTagline: string
  siteUrl: string
  logoText: string      // how the logo renders (e.g. "Dog.com", "Vets.co")

  // Tailwind color name for this site (used in tailwind.config)
  twPrimary: string
}

export const themes: Record<SiteId, SiteTheme> = {
  'dog-com': {
    primary: '#E8622A',
    primaryLight: '#F07840',
    primaryPale: '#FEF3EE',
    primaryDark: '#C44E18',
    dark: '#1A0E08',
    surface: '#FBF7F4',
    white: '#FFFFFF',
    textDark: '#1A0E08',
    textMid: '#4A2E18',
    textLight: '#9A7A68',
    border: '#EDE0D8',
    success: '#2A6A3A',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Playfair Display',
    fontBody: 'DM Sans',
    fontDisplayWeights: [400, 700, 900],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'Dog.com',
    siteTagline: 'A Reference for Dog Owners',
    siteUrl: 'https://dog.com',
    logoText: 'Dog.com',
    twPrimary: 'orange',
  },

  'vets-co': {
    primary: '#0A6B5E',
    primaryLight: '#12B09C',
    primaryPale: '#E6F5F3',
    primaryDark: '#076B5E',
    dark: '#0D2535',
    surface: '#F8FAFB',
    white: '#FFFFFF',
    textDark: '#0D2535',
    textMid: '#3A5A6A',
    textLight: '#7A9AAA',
    border: '#DDE8EE',
    success: '#1E8A4A',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Libre Baskerville',
    fontBody: 'Manrope',
    fontDisplayWeights: [400, 700],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'Vets.co',
    siteTagline: 'Find a Vet. Read the Guidelines.',
    siteUrl: 'https://vets.co',
    logoText: 'Vets.co',
    twPrimary: 'teal',
  },

  'fish-com': {
    primary: '#0E5F7E',
    primaryLight: '#1490B8',
    primaryPale: '#E6F4F9',
    primaryDark: '#0A5470',
    dark: '#050E14',
    surface: '#F4F9FC',
    white: '#FFFFFF',
    textDark: '#050E14',
    textMid: '#1E3D50',
    textLight: '#6A90A8',
    border: '#C8DDE8',
    success: '#1A7A44',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Cormorant Garamond',
    fontBody: 'Inter',
    fontDisplayWeights: [400, 600, 700],
    fontBodyWeights: [300, 400, 500, 600],
    siteName: 'Fish.com',
    siteTagline: 'An Aquarium Reference',
    siteUrl: 'https://fish.com',
    logoText: 'Fish.com',
    twPrimary: 'cyan',
  },

  'saddle-com': {
    primary: '#8C5A2A',
    primaryLight: '#C8A060',
    primaryPale: '#F2EBE0',
    primaryDark: '#7A5C28',
    dark: '#1A1208',
    surface: '#FAF6EF',
    white: '#FFFFFF',
    textDark: '#1A1208',
    textMid: '#4A3018',
    textLight: '#8A6848',
    border: '#DDD0BC',
    success: '#2A6A3A',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Bodoni Moda',
    fontBody: 'Jost',
    fontDisplayWeights: [400, 700, 900],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'Saddle.com',
    siteTagline: 'Saddles & Equestrian Equipment, Compared',
    siteUrl: 'https://saddle.com',
    logoText: 'SADDLE.com',
    twPrimary: 'amber',
  },

  'lizard-com': {
    primary: '#9AD140',
    primaryLight: '#9AD040',
    primaryPale: '#F0F7E6',
    primaryDark: '#5C8A1A',
    dark: '#080C08',
    surface: '#0D1A0D',
    white: '#EEF0E4',
    textDark: '#EEF0E4',
    textMid: 'rgba(238,240,228,0.85)',
    textLight: 'rgba(238,240,228,0.4)',
    border: 'rgba(255,255,255,0.07)',
    success: '#2AC87A',
    warning: '#C8A840',
    danger: '#E05A3A',
    fontDisplay: 'Zilla Slab',
    fontBody: 'Raleway',
    fontDisplayWeights: [400, 600, 700],
    fontBodyWeights: [300, 400, 500, 600, 700, 900],
    siteName: 'Lizard.com',
    siteTagline: 'Reptile Care, Source-First',
    siteUrl: 'https://lizard.com',
    logoText: 'Lizard.com',
    twPrimary: 'lime',
  },

  'horses-com': {
    // Warm equestrian palette — saddle leather browns, cream, dark green accents.
    primary: '#1F3A2F',
    primaryLight: '#8C6238',
    primaryPale: '#F4ECDF',
    primaryDark: '#523618',
    dark: '#1F2B1E',
    surface: '#FAF4E8',
    white: '#FFFFFF',
    textDark: '#1F2B1E',
    textMid: '#4A3A28',
    textLight: '#8A7A68',
    border: '#E2D6C2',
    success: '#3A6A2A',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Playfair Display',
    fontBody: 'Source Sans 3',
    fontDisplayWeights: [400, 700, 900],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'Horses.com',
    siteTagline: 'A Reference for Horse Owners',
    siteUrl: 'https://horses.com',
    logoText: 'Horses.com',
    twPrimary: 'amber',
  },

  'petfood-com': {
    // Clean food-brand palette — warm white background with a single warm accent.
    primary: '#3F5C3A',
    primaryLight: '#E87A40',
    primaryPale: '#FBEEE3',
    primaryDark: '#B04A18',
    dark: '#1F1A14',
    surface: '#FBF8F2',
    white: '#FFFFFF',
    textDark: '#1F1A14',
    textMid: '#4A3E30',
    textLight: '#8A7E68',
    border: '#ECE4D6',
    success: '#2A7A3A',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Cormorant Garamond',
    fontBody: 'Inter',
    fontDisplayWeights: [400, 600, 700],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'PetFood.com',
    siteTagline: 'A Reference for Pet Nutrition',
    siteUrl: 'https://petfood.com',
    logoText: 'PetFood.com',
    twPrimary: 'orange',
  },

  // ─── Ferret.com — chocolate-amber, exotic-mammal hobbyist magazine ────
  'ferret-com': {
    primary: '#5C3A1E',
    primaryLight: '#8A5C38',
    primaryPale: '#F4E8D8',
    primaryDark: '#3E2810',
    dark: '#1E1408',
    surface: '#FBF5E8',
    white: '#FFFFFF',
    textDark: '#1E1408',
    textMid: '#4A3A28',
    textLight: '#8A7A68',
    border: '#E2D2B6',
    success: '#3A6A2A',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Playfair Display',
    fontBody: 'Source Sans 3',
    fontDisplayWeights: [400, 700, 900],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'Ferret.com',
    siteTagline: 'A Reference for Ferret Owners',
    siteUrl: 'https://ferret.com',
    logoText: 'Ferret.com',
    twPrimary: 'amber',
  },

  // ─── Ferrets.com — muted reference / directory sister site ────────────
  'ferrets-com': {
    primary: '#6E4A28',
    primaryLight: '#6E5538',
    primaryPale: '#EFE8DC',
    primaryDark: '#2E2218',
    dark: '#181208',
    surface: '#F8F2E6',
    white: '#FFFFFF',
    textDark: '#181208',
    textMid: '#4A3828',
    textLight: '#8A7A68',
    border: '#DDD2BC',
    success: '#3A6A2A',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Playfair Display',
    fontBody: 'Source Sans 3',
    fontDisplayWeights: [400, 700, 900],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'Ferrets.com',
    siteTagline: 'Directory & Community Reference',
    siteUrl: 'https://ferrets.com',
    logoText: 'Ferrets.com',
    twPrimary: 'amber',
  },

  // ─── PetFoods.com — reference-database sister to PetFood.com ──────────
  'petfoods-com': {
    primary: '#3F5C3A',
    primaryLight: '#5C7D55',
    primaryPale: '#E8EFE6',
    primaryDark: '#28401F',
    dark: '#1A1F18',
    surface: '#F4F6F0',
    white: '#FFFFFF',
    textDark: '#1A1F18',
    textMid: '#3A4A34',
    textLight: '#7A8A74',
    border: '#D8DED0',
    success: '#3A6A2A',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Cormorant Garamond',
    fontBody: 'Inter',
    fontDisplayWeights: [400, 600, 700],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'PetFoods.com',
    siteTagline: 'Brand & Ingredient Database',
    siteUrl: 'https://petfoods.com',
    logoText: 'PetFoods.com',
    twPrimary: 'green',
  },

  // ─── AskTheVet.com — AI symptom checker (Architect S2) ────────────────
  'askthevet': {
    primary: '#2563eb',
    primaryLight: '#3b82f6',
    primaryPale: '#eff6ff',
    primaryDark: '#1d4ed8',
    dark: '#0f172a',
    surface: '#f8fafc',
    white: '#ffffff',
    textDark: '#0f172a',
    textMid: '#334155',
    textLight: '#64748b',
    border: '#e2e8f0',
    success: '#16a34a',
    warning: '#d97706',
    danger: '#dc2626',
    fontDisplay: 'Inter',
    fontBody: 'Inter',
    fontDisplayWeights: [400, 500, 600, 700, 800],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'AskTheVet.com',
    siteTagline: 'AI Pet Symptom Checker — Triage in Seconds',
    siteUrl: 'https://askthevet.com',
    logoText: 'AskTheVet',
    twPrimary: 'blue',
  },

  // ─── SeniorPetPharmacy — senior pet Rx + care content (Architect S9) ──
  'seniorpets': {
    primary: '#7C6F59',
    primaryLight: '#9A8D74',
    primaryPale: '#F1EBDD',
    primaryDark: '#5A503F',
    dark: '#211D17',
    surface: '#FAF5EA',
    white: '#FFFFFF',
    textDark: '#211D17',
    textMid: '#4A4234',
    textLight: '#8A8070',
    border: '#E3D9C5',
    success: '#2A6A3A',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Lora',
    fontBody: 'Source Sans 3',
    fontDisplayWeights: [400, 500, 600, 700],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'SeniorPetPharmacy',
    siteTagline: 'Compassionate care for aging pets',
    siteUrl: 'https://seniorpetpharmacy.com',
    logoText: 'SeniorPetPharmacy',
    twPrimary: 'stone',
  },

  // ─── DogPicture.com — AI dog portraits + POD (Architect S8) ───────────
  'dogpicture': {
    primary: '#F97316',
    primaryLight: '#FB923C',
    primaryPale: '#FFF4EB',
    primaryDark: '#C2410C',
    dark: '#1F1408',
    surface: '#FFF8F0',
    white: '#FFFFFF',
    textDark: '#1A0F08',
    textMid: '#5C3E28',
    textLight: '#9A7860',
    border: '#F3E4D2',
    success: '#16A34A',
    warning: '#F59E0B',
    danger: '#DC2626',
    fontDisplay: 'Fraunces',
    fontBody: 'Nunito',
    fontDisplayWeights: [400, 700, 900],
    fontBodyWeights: [300, 400, 600, 700, 800],
    siteName: 'DogPicture.com',
    siteTagline: 'AI dog portraits — keepsakes for the dog you love',
    siteUrl: 'https://dogpicture.com',
    logoText: 'DogPicture',
    twPrimary: 'orange',
  },

  // ─── PetSupplies.com — NerdWallet for pet products (Architect S1) ─────

  // ─── HardMoneyLoans.com — off-vertical lead gen (Architect S11) ───────
  'hardmoneyloans': {
    primary: '#1e293b',
    primaryLight: '#334155',
    primaryPale: '#F1F5F9',
    primaryDark: '#0F172A',
    dark: '#0F172A',
    surface: '#F8FAFC',
    white: '#FFFFFF',
    textDark: '#0F172A',
    textMid: '#334155',
    textLight: '#64748B',
    border: '#E2E8F0',
    success: '#15803D',
    warning: '#B45309',
    danger: '#B91C1C',
    fontDisplay: 'Source Serif 4',
    fontBody: 'Inter',
    fontDisplayWeights: [400, 600, 700, 900],
    fontBodyWeights: [400, 500, 600, 700],
    siteName: 'HardMoneyLoans.com',
    siteTagline: 'Compare top hard money lenders for real estate investors',
    siteUrl: 'https://hardmoneyloans.com',
    logoText: 'HardMoneyLoans.com',
    twPrimary: 'slate',
  },
}

// ─────────────────────────────────────────────
// SITE CONFIG — non-visual metadata per site
// ─────────────────────────────────────────────

export interface SiteConfig {
  id: SiteId
  theme: SiteTheme

  // Analytics
  gaMeasurementId: string  // set via env var, placeholder here

  // Affiliate programs active on this site
  affiliates: {
    amazon: boolean
    chewy: boolean
    trupanion: boolean
    healthyPaws: boolean
    vetster: boolean
    sharesale: boolean   // saddle.com tack brands
  }

  // Email (Mailchimp audience per site)
  mailchimpAudienceId: string  // set via env var

  // Navigation structure
  nav: Array<{ label: string; href: string; highlight?: boolean }>

  // Footer link columns
  footerLinks: Array<{
    heading: string
    links: Array<{ label: string; href: string }>
  }>

  // SEO defaults
  defaultOgImage: string
  twitterHandle?: string

  // Efty listing URL (per csro-dir-2026-W22-008).
  // Set this PER SITE when Carlo provides the Efty listing URL.
  // When set, the shared Footer renders a discreet "This domain is for sale →" link.
  // Tier-A (Dog/Fish) and any other sites Carlo does NOT want to advertise as for-sale
  // leave this unset → the link is not rendered.
  eftyUrl?: string
}

export const siteConfigs: Record<SiteId, SiteConfig> = {
  'dog-com': {
    id: 'dog-com',
    theme: themes['dog-com'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: true,
      chewy: true,
      trupanion: true,
      healthyPaws: true,
      vetster: true,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [
      { label: 'Breed Guide', href: '/breeds' },
      { label: 'Dog Health', href: '/health' },
      { label: 'Nutrition', href: '/nutrition' },
      { label: 'Training', href: '/training' },
      { label: 'Compare Breeds', href: '/compare' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Find a Vet', href: '/find-a-vet', highlight: true },
    ],
    footerLinks: [
      {
        heading: 'Breeds',
        links: [
          { label: 'Golden Retriever', href: '/breeds/golden-retriever' },
          { label: 'Labrador Retriever', href: '/breeds/labrador-retriever' },
          { label: 'French Bulldog', href: '/breeds/french-bulldog' },
          { label: 'German Shepherd', href: '/breeds/german-shepherd' },
          { label: 'All Breeds', href: '/breeds' },
        ],
      },
      {
        heading: 'Health',
        links: [
          { label: 'Symptoms (urgency-tiered)', href: '/symptoms' },
          { label: 'Diagnosed Conditions', href: '/conditions' },
          { label: 'Dog Nutrition', href: '/nutrition' },
          { label: 'Senior Dog Care', href: '/health/senior-dog-care' },
          { label: 'Dental Health', href: '/health/dog-dental-care' },
          { label: 'Find a Vet', href: '/find-a-vet' },
        ],
      },
      {
        heading: 'Reviews',
        links: [
          { label: 'Best Dog Food', href: '/reviews/best-dry-dog-food' },
          { label: 'Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance' },
          { label: 'Flea & Tick', href: '/reviews/best-flea-tick-prevention' },
          { label: 'Dog Beds', href: '/reviews/best-dog-beds' },
          { label: 'All Reviews', href: '/reviews' },
          { label: 'FAQ', href: '/faq' },
        ],
      },
      {
        heading: 'Tools & Guides',
        links: [
          { label: 'All Tools & Calculators', href: '/tools' },
          { label: 'Puppy First-Year Budget', href: '/tools/puppy-first-year-budget' },
          { label: 'Harness & Collar Size', href: '/tools/harness-collar-size' },
          { label: 'Compare Breeds', href: '/compare' },
          { label: 'Which Pet Quiz', href: '/which-pet' },
          { label: 'Puppy Schedule', href: '/puppy-schedule' },
          { label: 'Care Guides', href: '/guides' },
          { label: 'Directory', href: '/directory' },
        ],
      },
    ],
    defaultOgImage: 'https://dog.com/og-default.jpg',
    twitterHandle: '@dogcom',
  },

  'vets-co': {
    id: 'vets-co',
    theme: themes['vets-co'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: false,
      chewy: true,
      trupanion: true,
      healthyPaws: true,
      vetster: true,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [
      { label: 'Find a Vet', href: '/find-a-vet' },
      { label: 'Pet Health', href: '/health' },
      { label: 'Tools', href: '/tools' },
      { label: 'Telehealth', href: '/telehealth' },
      { label: 'Pet Insurance', href: '/reviews/best-pet-insurance', highlight: true },
    ],
    footerLinks: [
      {
        heading: 'Find Care',
        links: [
          { label: 'Find a Vet', href: '/find-a-vet' },
          { label: 'Telehealth Options', href: '/telehealth' },
          { label: 'Emergency Signs', href: '/health/emergency-signs' },
          { label: 'Emergency Triage Card', href: '/emergency-triage-card' },
          { label: 'Directory', href: '/directory' },
        ],
      },
      {
        heading: 'Pet Health',
        links: [
          { label: 'Pet Health Library', href: '/health' },
          { label: 'Symptom Checker', href: '/symptoms' },
          { label: 'Medications', href: '/medications' },
          { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
          { label: 'Preventive Care', href: '/health/preventive-care-schedule' },
        ],
      },
      {
        heading: 'Tools & Reference',
        links: [
          { label: 'Tools & Calculators', href: '/tools' },
          { label: 'ER vs Clinic vs Telehealth', href: '/tools/er-vs-clinic' },
          { label: 'Diagnostics Guide', href: '/diagnostics' },
          { label: 'Specialists', href: '/specialists' },
          { label: 'Pet Health Data', href: '/data' },
        ],
      },
      {
        heading: 'Breed Guides',
        links: [
          { label: 'Golden Retriever', href: '/breeds/golden-retriever-health' },
          { label: 'Labrador', href: '/breeds/labrador-health' },
          { label: 'French Bulldog', href: '/breeds/french-bulldog-health' },
          { label: 'German Shepherd', href: '/breeds/german-shepherd-health' },
        ],
      },
      {
        heading: 'Insurance',
        links: [
          { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' },
          { label: 'All Reviews', href: '/reviews' },
        ],
      },
    ],
    defaultOgImage: 'https://vets.co/og-default.jpg',
  },

  'fish-com': {
    id: 'fish-com',
    theme: themes['fish-com'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: true,
      chewy: true,
      trupanion: false,
      healthyPaws: false,
      vetster: false,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [
      { label: 'Fish Species', href: '/species' },
      { label: 'Water Parameters', href: '/water-parameters' },
      { label: 'Aquarium Setup', href: '/setup' },
      { label: 'Equipment', href: '/equipment' },
      { label: 'Calculators', href: '/tools' },
      { label: 'Fish Health', href: '/health' },
      { label: 'Reviews', href: '/reviews' },
    ],
    footerLinks: [
      {
        heading: 'Species',
        links: [
          { label: 'Betta Fish', href: '/species/betta-fish' },
          { label: 'Goldfish', href: '/species/goldfish' },
          { label: 'Neon Tetra', href: '/species/neon-tetra' },
          { label: 'Discus', href: '/species/discus' },
          { label: 'All Species', href: '/species' },
        ],
      },
      {
        heading: 'Setup',
        links: [
          { label: 'Cycling Guide', href: '/setup/aquarium-cycling-guide' },
          { label: 'Planted Tank', href: '/setup/planted-tank-setup' },
          { label: 'Saltwater Tank', href: '/setup/saltwater-tank-setup' },
          { label: 'Water Chemistry', href: '/setup/water-chemistry-guide' },
        ],
      },
      {
        heading: 'Reviews',
        links: [
          { label: 'Aquarium Filters', href: '/reviews/best-aquarium-filters' },
          { label: 'Heaters', href: '/reviews/best-aquarium-heaters' },
          { label: 'Lighting', href: '/reviews/best-aquarium-lighting' },
          { label: 'All Reviews', href: '/reviews' },
        ],
      },
      {
        heading: 'Calculators',
        links: [
          { label: 'Tank Volume', href: '/tools/aquarium-volume-calculator' },
          { label: 'Stocking', href: '/tools/stocking-calculator' },
          { label: 'Heater Wattage', href: '/tools/heater-wattage-calculator' },
          { label: 'Filter GPH', href: '/tools/filter-gph-calculator' },
          { label: 'Water Change', href: '/tools/water-change-calculator' },
          { label: 'CO2 (KH/pH)', href: '/tools/co2-calculator' },
        ],
      },
      {
        heading: 'Fish.com',
        links: [
          { label: 'Aquarium Calculators', href: '/tools' },
          { label: 'Data Partnerships', href: '/data' },
          { label: 'Directory', href: '/directory' },
        ],
      },
    ],
    defaultOgImage: 'https://fish.com/og-default.jpg',
  },

  'saddle-com': {
    id: 'saddle-com',
    theme: themes['saddle-com'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: false,
      chewy: false,
      trupanion: false,
      healthyPaws: false,
      vetster: false,
      sharesale: true,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [
      { label: 'English Saddles', href: '/reviews/best-english-saddles' },
      { label: 'Western Saddles', href: '/reviews/best-western-saddles' },
      { label: 'Brands', href: '/brands' },
      { label: 'Guides', href: '/guides' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Fit Checklist', href: '/saddle-fit-checklist' },
      { label: 'Tools', href: '/tools' },
    ],
    footerLinks: [
      {
        heading: 'Reviews',
        links: [
          { label: 'Best English Saddles', href: '/reviews/best-english-saddles' },
          { label: 'Best Western Saddles', href: '/reviews/best-western-saddles' },
          { label: 'Stubben Review', href: '/reviews/stubben-saddle-review' },
          { label: 'Pessoa Review', href: '/reviews/pessoa-saddle-review' },
          { label: 'All Reviews', href: '/reviews' },
        ],
      },
      {
        heading: 'Guides',
        links: [
          { label: 'All Guides', href: '/guides' },
          { label: 'Saddle Fit', href: '/guides/saddle-fit-guide' },
          { label: 'Seat Size', href: '/guides/seat-size-guide' },
          { label: 'Used Saddle', href: '/guides/used-saddle-buying-guide' },
          { label: 'First Horse', href: '/guides/buying-first-horse' },
          { label: 'Fit by Discipline', href: '/fit' },
        ],
      },
      {
        heading: 'Care & Tack',
        links: [
          { label: 'Leather Care', href: '/guides/leather-care-guide' },
          { label: 'Tack Cleaning', href: '/guides/tack-cleaning-schedule' },
          { label: 'Bit Selection', href: '/guides/bit-selection-guide' },
          { label: 'Bridle Guide', href: '/guides/horse-bridle-guide' },
          { label: 'Accessories', href: '/accessories' },
        ],
      },
    ],
    defaultOgImage: 'https://saddle.com/og-default.jpg',
  },

  'lizard-com': {
    id: 'lizard-com',
    theme: themes['lizard-com'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: true,
      chewy: false,
      trupanion: false,
      healthyPaws: false,
      vetster: false,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [
      { label: 'Species Guides', href: '/species' },
      { label: 'Health', href: '/health' },
      { label: 'Enclosure Setup', href: '/setup' },
      { label: 'Vivarium Builds', href: '/builds' },
      { label: 'Tools', href: '/tools' },
      { label: 'Reviews', href: '/reviews' },
    ],
    footerLinks: [
      {
        heading: 'Species',
        links: [
          { label: 'Bearded Dragon', href: '/species/bearded-dragon' },
          { label: 'Leopard Gecko', href: '/species/leopard-gecko' },
          { label: 'Ball Python', href: '/species/ball-python' },
          { label: 'Crested Gecko', href: '/species/crested-gecko' },
          { label: 'All Species', href: '/species' },
        ],
      },
      {
        heading: 'Setup',
        links: [
          { label: 'UVB Lighting', href: '/setup/uvb-lighting-guide' },
          { label: 'Temperature', href: '/setup/temperature-guide' },
          { label: 'Humidity', href: '/setup/humidity-guide' },
          { label: 'Substrate', href: '/setup/substrate-guide' },
          { label: 'Bioactive Setup', href: '/setup/bioactive-setup' },
        ],
      },
      {
        heading: 'Reviews',
        links: [
          { label: 'UVB Bulbs', href: '/reviews/best-uvb-bulbs' },
          { label: 'Terrariums', href: '/reviews/best-reptile-terrariums' },
          { label: 'Thermostats', href: '/reviews/best-thermostats' },
          { label: 'All Reviews', href: '/reviews' },
        ],
      },
      {
        heading: 'Tools & Reference',
        links: [
          { label: 'Reptile Calculators', href: '/tools' },
          { label: 'UVB Distance Calculator', href: '/tools/uvb-distance-calculator' },
          { label: 'Health Hub', href: '/health' },
          { label: 'Legality by State', href: '/states' },
          { label: 'First-Year Care Schedule', href: '/first-year-care-schedule' },
        ],
      },
    ],
    defaultOgImage: 'https://lizard.com/og-default.jpg',
  },

  'horses-com': {
    id: 'horses-com',
    theme: themes['horses-com'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: true,
      chewy: false,
      trupanion: false,
      healthyPaws: false,
      vetster: false,
      sharesale: true,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [
      { label: 'Home', href: '/' },
      { label: 'Breeds', href: '/breeds' },
      { label: 'Disciplines', href: '/disciplines' },
      { label: 'Racing', href: '/racing' },
      { label: 'Health', href: '/health' },
      { label: 'Care', href: '/care' },
      { label: 'Nutrition', href: '/nutrition' },
      { label: 'Tack', href: '/tack' },
      { label: 'Tools', href: '/tools' },
    ],
    footerLinks: [
      {
        heading: 'Reference',
        links: [
          { label: 'Breeds', href: '/breeds' },
          { label: 'Disciplines', href: '/disciplines' },
          { label: 'Racing Intelligence', href: '/racing' },
          { label: 'Health', href: '/health' },
          { label: 'Guides', href: '/guides' },
          { label: 'Tools', href: '/tools' },
          { label: 'Stall Bedding Calculator', href: '/tools/stall-bedding-calculator' },
          { label: 'Horse Age Calculator', href: '/tools/horse-age-calculator' },
          { label: 'Is This a Horse Emergency?', href: '/tools/is-this-a-horse-emergency' },
          { label: 'Directory', href: '/directory' },
        ],
      },
      {
        heading: 'Owner Resources',
        links: [
          { label: 'Care & Husbandry', href: '/care' },
          { label: 'Nutrition', href: '/nutrition' },
          { label: 'Tack & Gear', href: '/tack' },
          { label: 'Ownership', href: '/ownership' },
          { label: 'First-Horse Roadmap', href: '/first-horse-roadmap' },
          { label: 'Supplements', href: '/supplements' },
          { label: 'Reviews', href: '/reviews' },
          { label: 'Data Partnerships', href: '/data' },
        ],
      },
    ],
    defaultOgImage: 'https://horses.com/og-default.jpg',
  },

  'petfood-com': {
    id: 'petfood-com',
    theme: themes['petfood-com'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: true,
      chewy: true,
      trupanion: false,
      healthyPaws: false,
      vetster: false,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [
      { label: 'Home', href: '/' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Compare Foods', href: '/compare' },
      { label: 'Brands', href: '/brands' },
      { label: 'Conditions', href: '/conditions' },
      { label: 'Ingredients', href: '/ingredients' },
      { label: 'Life Stage', href: '/life-stage' },
      { label: 'Guides', href: '/guides' },
      { label: 'Tools', href: '/tools' },
    ],
    footerLinks: [
      {
        heading: 'Browse',
        links: [
          { label: 'Reviews', href: '/reviews' },
          { label: 'Compare Foods', href: '/compare' },
          { label: 'Brands', href: '/brands' },
          { label: 'Conditions', href: '/conditions' },
          { label: 'Therapeutic Diets', href: '/diets' },
          { label: 'Ingredients', href: '/ingredients' },
          { label: 'Nutrition', href: '/nutrition' },
          { label: 'Feeding', href: '/feeding' },
          { label: 'Life Stage', href: '/life-stage' },
          { label: 'Supplements', href: '/supplements' },
          { label: 'Species', href: '/species' },
        ],
      },
      {
        heading: 'Reference',
        links: [
          { label: 'Guides', href: '/guides' },
          { label: 'Scoring Methodology', href: '/guides/methodology' },
          { label: 'Myths', href: '/myths' },
          { label: 'Tools', href: '/tools' },
        ],
      },
      {
        heading: 'About',
        links: [
          { label: 'Editorial Standards', href: '/editorial-standards' },
          { label: 'Affiliate Disclosure', href: '/disclosure' },
        ],
      },
    ],
    defaultOgImage: 'https://petfood.com/og-default.jpg',
  },

  'ferret-com': {
    id: 'ferret-com',
    theme: themes['ferret-com'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: true,
      chewy: true,
      trupanion: false,
      healthyPaws: false,
      vetster: false,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [
      { label: 'Home', href: '/' },
      { label: 'Health', href: '/health' },
      { label: 'Care', href: '/care' },
      { label: 'Behavior', href: '/behavior' },
      { label: 'Colors', href: '/colors' },
      { label: 'Diet', href: '/diet' },
      { label: 'Ownership', href: '/ownership' },
      { label: 'Reviews', href: '/reviews' },
      { label: 'Tools', href: '/tools' },
    ],
    footerLinks: [
      {
        heading: 'Ferret.com',
        links: [
          { label: 'Home', href: '/' },
          { label: 'Health', href: '/health' },
          { label: 'Find an Exotic Vet', href: '/find-an-exotic-vet' },
          { label: 'Care', href: '/care' },
          { label: 'Behavior', href: '/behavior' },
          { label: 'Colors', href: '/colors' },
          { label: 'Diet', href: '/diet' },
          { label: 'Ownership', href: '/ownership' },
          { label: 'First-Year Schedule', href: '/first-year-schedule' },
          { label: 'Reviews', href: '/reviews' },
          { label: 'Tools', href: '/tools' },
          { label: 'Cost Calculator', href: '/tools/cost-calculator' },
          { label: 'Litter Planner', href: '/tools/litter-planner' },
          { label: 'Cage Size Calculator', href: '/tools/cage-size-calculator' },
          { label: 'Ferret Age Calculator', href: '/tools/ferret-age-calculator' },
          { label: 'Is This a Ferret Emergency?', href: '/tools/is-this-a-ferret-emergency' },
          { label: 'Directory', href: '/directory' },
        ],
      },
    ],
    defaultOgImage: 'https://ferret.com/og-default.jpg',
  },

  'ferrets-com': {
    id: 'ferrets-com',
    theme: themes['ferrets-com'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: false,
      chewy: false,
      trupanion: false,
      healthyPaws: false,
      vetster: false,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [
      { label: 'Home', href: '/' },
    ],
    footerLinks: [
      {
        heading: 'Ferrets.com',
        links: [
          { label: 'Home', href: '/' },
        ],
      },
    ],
    defaultOgImage: 'https://ferrets.com/og-default.jpg',
  },

  'petfoods-com': {
    id: 'petfoods-com',
    theme: themes['petfoods-com'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: true,
      chewy: true,
      trupanion: false,
      healthyPaws: false,
      vetster: false,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [
      { label: 'Home', href: '/' },
    ],
    footerLinks: [
      {
        heading: 'PetFoods.com',
        links: [
          { label: 'Home', href: '/' },
        ],
      },
    ],
    defaultOgImage: 'https://petfoods.com/og-default.jpg',
  },

  // ─── AskTheVet.com ────────────────────────────────────────────────────
  'askthevet': {
    id: 'askthevet',
    theme: themes['askthevet'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: true,
      chewy: true,
      trupanion: false,
      healthyPaws: false,
      vetster: true,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [{ label: 'Home', href: '/' }],
    footerLinks: [{ heading: 'AskTheVet', links: [{ label: 'Home', href: '/' }] }],
    defaultOgImage: 'https://askthevet.com/og-default.jpg',
  },

  // ─── SeniorPetPharmacy ────────────────────────────────────────────────
  'seniorpets': {
    id: 'seniorpets',
    theme: themes['seniorpets'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: true,
      chewy: true,
      trupanion: true,
      healthyPaws: true,
      vetster: true,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [{ label: 'Home', href: '/' }],
    footerLinks: [{ heading: 'SeniorPetPharmacy', links: [{ label: 'Home', href: '/' }] }],
    defaultOgImage: 'https://seniorpetpharmacy.com/og-default.jpg',
  },

  // ─── DogPicture.com ───────────────────────────────────────────────────
  'dogpicture': {
    id: 'dogpicture',
    theme: themes['dogpicture'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: false,
      chewy: true,
      trupanion: false,
      healthyPaws: false,
      vetster: false,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [{ label: 'Home', href: '/' }],
    footerLinks: [{ heading: 'DogPicture', links: [{ label: 'Home', href: '/' }] }],
    defaultOgImage: 'https://dogpicture.com/og-default.jpg',
  },

  // ─── HardMoneyLoans.com ───────────────────────────────────────────────
  'hardmoneyloans': {
    id: 'hardmoneyloans',
    theme: themes['hardmoneyloans'],
    gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-XXXXXXXXXX',
    affiliates: {
      amazon: false,
      chewy: false,
      trupanion: false,
      healthyPaws: false,
      vetster: false,
      sharesale: false,
    },
    mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID ?? '',
    nav: [{ label: 'Home', href: '/' }],
    footerLinks: [{ heading: 'HardMoneyLoans.com', links: [{ label: 'Home', href: '/' }] }],
    defaultOgImage: 'https://hardmoneyloans.com/og-default.jpg',
  },
}

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

export function getSiteConfig(siteId: SiteId): SiteConfig {
  const config = siteConfigs[siteId]
  if (!config) throw new Error(`Unknown site: ${siteId}`)
  return config
}

export function getTheme(siteId: SiteId): SiteTheme {
  return themes[siteId]
}

/** CSS custom properties string for a given site — inject into :root */
export function themeToCSS(theme: SiteTheme): string {
  return `
    --brand-primary: ${theme.primary};
    --brand-primary-light: ${theme.primaryLight};
    --brand-primary-pale: ${theme.primaryPale};
    --brand-primary-dark: ${theme.primaryDark};
    --brand-dark: ${theme.dark};
    --brand-surface: ${theme.surface};
    --brand-white: ${theme.white};
    --brand-text-dark: ${theme.textDark};
    --brand-text-mid: ${theme.textMid};
    --brand-text-light: ${theme.textLight};
    --brand-border: ${theme.border};
    --brand-success: ${theme.success};
    --brand-warning: ${theme.warning};
    --brand-danger: ${theme.danger};
    --font-display: '${theme.fontDisplay}', Georgia, serif;
    --font-body: '${theme.fontBody}', system-ui, sans-serif;
  `.trim()
}

// ─────────────────────────────────────────────
// CROSS-PORTFOLIO RECOMMENDATIONS
// ─────────────────────────────────────────────
// Sister-site recommendations rendered by <CrossPortfolioCard>.
// Maps (currentSiteId, contentType) → 0-3 curated sibling references.
// Drives internal network authority, pages-per-session, and revenue intent
// hand-off (e.g., dog.com health → vets-co specialist → pet insurance).

export type ContentType =
  | 'health'
  | 'nutrition'
  | 'diet'
  | 'behavior'
  | 'breed'
  | 'species'
  | 'condition'
  | 'medication'
  | 'specialty'
  | 'equipment'
  | 'gear'
  | 'brand'
  | 'training'
  | 'care'
  | 'directory'
  | 'discipline'
  | 'review'
  | 'guide'
  | 'tool'

export interface CrossPortfolioRecommendation {
  siteId: SiteId
  siteName: string
  headline: string
  blurb: string
  cta: string
  href: string
}

// Static recommendation table. Each entry has (currentSite × contentType)
// keyed on `${siteId}:${contentType}` → array of 2-3 sibling recs.
// Editorial decisions: dog/cat health → vets-co; product/diet → petfood/petfoods;
// equestrian discipline ↔ saddle brand; ferret care ↔ ferrets-com state info.
const RECOMMENDATIONS: Record<string, CrossPortfolioRecommendation[]> = {
  // ── dog-com ───────────────────────────────────────────
  'dog-com:health': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Find a Specialist Vet', blurb: 'Board-certified veterinary specialists by condition, with average cost ranges.', cta: 'Browse specialists', href: 'https://vets.co/specialists' },
    { siteId: 'petfood-com', siteName: 'PetFood.com', headline: 'AAFCO Life-Stage Guides', blurb: 'How to read pet food labels by life stage — puppy, adult, senior.', cta: 'Read guides', href: 'https://petfood.com/life-stage' },
  ],
  'dog-com:nutrition': [
    { siteId: 'petfoods-com', siteName: 'PetFoods.com', headline: 'WSAVA Brand Reviews', blurb: 'Independent reviews of Royal Canin, Hill\'s, Purina, Orijen and more — scored against WSAVA guidelines.', cta: 'See rankings', href: 'https://petfoods.com/brands' },
    { siteId: 'petfood-com', siteName: 'PetFood.com', headline: 'Life-Stage Deep Dives', blurb: 'AAFCO-anchored guides on puppy, adult, senior, and large-breed nutrition.', cta: 'Read more', href: 'https://petfood.com/life-stage' },
  ],
  'dog-com:breed': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Breed Health Profiles', blurb: 'Hereditary screening recommendations and breed-specific conditions, sourced from veterinary references.', cta: 'See breed health', href: 'https://vets.co/breeds' },
  ],
  'dog-com:training': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Behavioral Specialists', blurb: 'When to consult a veterinary behaviorist for training-resistant issues.', cta: 'Find a specialist', href: 'https://vets.co/specialists/veterinary-behavior' },
  ],
  'dog-com:review': [
    { siteId: 'petfood-com', siteName: 'PetFood.com', headline: 'Life-Stage Nutrition Guides', blurb: 'AAFCO-anchored puppy, adult, senior, and large-breed nutrition to pair with any food pick.', cta: 'Read nutrition guides', href: 'https://petfood.com/life-stage' },
    { siteId: 'petfoods-com', siteName: 'PetFoods.com', headline: 'Brand Reference Database', blurb: 'Who makes each brand, where ingredients are sourced, and how they score on WSAVA criteria.', cta: 'See brand ratings', href: 'https://petfoods.com/brands' },
  ],
  'dog-com:tool': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Find a Vet', blurb: 'When a number from a calculator needs a professional read, find a local veterinarian or specialist.', cta: 'Find a vet', href: 'https://vets.co/find-a-vet' },
    { siteId: 'petfood-com', siteName: 'PetFood.com', headline: 'Life-Stage Nutrition', blurb: 'Turn a calorie or weight estimate into a real feeding plan with AAFCO-anchored life-stage guides.', cta: 'Read nutrition guides', href: 'https://petfood.com/life-stage' },
  ],

  // ── vets-co ───────────────────────────────────────────
  'vets-co:medication': [
    { siteId: 'dog-com', siteName: 'Dog.com', headline: 'Best Pet Insurance', blurb: 'Compare pet insurance plans that cover chronic prescriptions — Lemonade, Embrace, Pets Best, Spot.', cta: 'Compare plans', href: 'https://dog.com/reviews/best-pet-insurance' },
  ],
  'vets-co:specialty': [
    { siteId: 'dog-com', siteName: 'Dog.com', headline: 'Pet Insurance Comparison', blurb: 'Specialist visits run $3,000–15,000/year. Find a plan that covers them.', cta: 'See comparison', href: 'https://dog.com/reviews/best-pet-insurance' },
  ],
  'vets-co:breed': [
    { siteId: 'dog-com', siteName: 'Dog.com', headline: 'Breed Care Guides', blurb: 'In-depth breed-specific care, feeding, and training resources.', cta: 'Browse breeds', href: 'https://dog.com/breeds' },
  ],
  'vets-co:tool': [
    { siteId: 'dog-com', siteName: 'Dog.com', headline: 'Compare Pet Insurance', blurb: 'Once you know your likely vet costs, compare plans that cover them — Lemonade, Embrace, Pets Best, Spot.', cta: 'Compare plans', href: 'https://dog.com/reviews/best-pet-insurance' },
  ],
  'vets-co:health': [
    { siteId: 'dog-com', siteName: 'Dog.com', headline: 'Breed Condition Guides', blurb: 'Golden Retriever, Labrador, Frenchie, German Shepherd — breed-specific hereditary conditions explained.', cta: 'Browse breed guides', href: 'https://dog.com/breeds' },
    { siteId: 'petfood-com', siteName: 'PetFood.com', headline: 'Disease-Specific Nutrition', blurb: 'Renal, cardiac, hepatic, and diabetic diets — how food choices interact with a diagnosis.', cta: 'See condition diets', href: 'https://petfood.com/conditions' },
  ],

  // ── horses-com ────────────────────────────────────────
  'horses-com:discipline': [
    { siteId: 'saddle-com', siteName: 'Saddle.com', headline: 'Saddle Brand Reviews', blurb: 'Independent reviews of Stübben, Pessoa, Bates, County, and Custom Saddlery for English riders.', cta: 'See brand reviews', href: 'https://saddle.com/brands' },
  ],
  'horses-com:equipment': [
    { siteId: 'saddle-com', siteName: 'Saddle.com', headline: 'Saddle Fit & Brands', blurb: 'Discipline-specific saddle brand recommendations and fit guides.', cta: 'Browse saddles', href: 'https://saddle.com/brands' },
  ],
  'horses-com:breed': [
    { siteId: 'saddle-com', siteName: 'Saddle.com', headline: 'Saddle-Fit Guidance', blurb: 'How conformation affects saddle fit — including breed-specific notes.', cta: 'Read more', href: 'https://saddle.com' },
  ],

  // ── saddle-com ────────────────────────────────────────
  'saddle-com:brand': [
    { siteId: 'horses-com', siteName: 'Horses.com', headline: 'Discipline Equipment Guides', blurb: 'Required and optional equipment for dressage, hunter-jumper, eventing, western, trail, and endurance.', cta: 'Browse disciplines', href: 'https://horses.com/disciplines' },
  ],
  'saddle-com:review': [
    { siteId: 'horses-com', siteName: 'Horses.com', headline: 'Discipline Selection', blurb: 'Pick the right discipline for your goals — then come back for the right saddle.', cta: 'Explore disciplines', href: 'https://horses.com/disciplines' },
  ],

  // ── lizard-com ────────────────────────────────────────
  'lizard-com:health': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Find an Exotic Vet', blurb: 'ARAV-certified reptile veterinarians + what to expect at the visit.', cta: 'Find a specialist', href: 'https://vets.co/specialists/veterinary-internal-medicine' },
  ],
  'lizard-com:species': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Reptile Health Conditions', blurb: 'Cross-reference species-specific conditions with veterinary specialist guidance.', cta: 'Browse conditions', href: 'https://vets.co/specialists' },
  ],
  'lizard-com:care': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Find an Exotic / Reptile Vet', blurb: 'ARAV-certified reptile veterinarians, what to expect at a visit, and how to prepare.', cta: 'Find a specialist', href: 'https://vets.co/find-a-vet' },
  ],
  'lizard-com:tool': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Find a Reptile Vet', blurb: 'A husbandry calculator gets the setup right; an ARAV-certified reptile vet handles the rest.', cta: 'Find a specialist', href: 'https://vets.co/find-a-vet' },
  ],

  // ── fish-com ──────────────────────────────────────────
  'fish-com:equipment': [],  // Same-site reviews handle this; no fish sister site.
  'fish-com:species': [],
  'fish-com:health': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Find an Aquatic Vet', blurb: 'Aquatic and exotic-animal veterinarians — for when a fish needs more than a water change.', cta: 'Find a specialist', href: 'https://vets.co/find-a-vet' },
  ],

  // ── petfood-com ───────────────────────────────────────
  'petfood-com:nutrition': [
    { siteId: 'petfoods-com', siteName: 'PetFoods.com', headline: 'WSAVA Brand Scorecards', blurb: 'Independent brand-by-brand WSAVA compliance reviews to pair with life-stage choice.', cta: 'See brand rankings', href: 'https://petfoods.com/brands' },
  ],
  'petfood-com:tool': [
    { siteId: 'petfoods-com', siteName: 'PetFoods.com', headline: 'Brand Reference Database', blurb: 'Once you know the portion or cost, see who makes the food well — brand-by-brand WSAVA scorecards.', cta: 'Explore brands', href: 'https://petfoods.com/brands' },
  ],
  'petfood-com:guide': [
    { siteId: 'petfoods-com', siteName: 'PetFoods.com', headline: 'Independent Brand Reference', blurb: 'When you know what to feed, find out who makes it well.', cta: 'Explore brands', href: 'https://petfoods.com/brands' },
  ],

  // ── petfoods-com ──────────────────────────────────────
  'petfoods-com:brand': [
    { siteId: 'petfood-com', siteName: 'PetFood.com', headline: 'Life-Stage Nutrition Guides', blurb: 'AAFCO-anchored advice on matching food to your pet\'s life stage and special needs.', cta: 'Read guides', href: 'https://petfood.com/life-stage' },
  ],
  'petfoods-com:nutrition': [
    { siteId: 'petfood-com', siteName: 'PetFood.com', headline: 'Reading the Label', blurb: 'What AAFCO statements, guaranteed analysis, and ingredient lists actually tell you.', cta: 'Learn more', href: 'https://petfood.com/guides' },
  ],

  // ── ferret-com ────────────────────────────────────────
  'ferret-com:health': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Find an Exotic Vet', blurb: 'AEMV-certified exotic-animal veterinarians and what to expect at the visit.', cta: 'Find a vet', href: 'https://vets.co/find-a-vet' },
    { siteId: 'ferrets-com', siteName: 'Ferrets.com', headline: 'State Legality + Adoption', blurb: 'Ferret legality varies by state. Check your state\'s rules before acquiring.', cta: 'Check your state', href: 'https://ferrets.com/states' },
  ],
  'ferret-com:care': [
    { siteId: 'ferrets-com', siteName: 'Ferrets.com', headline: 'State Adoption Directory', blurb: 'Find local shelters, rescues, and AEMV-certified exotic vets by state.', cta: 'Browse states', href: 'https://ferrets.com/states' },
  ],
  'ferret-com:diet': [
    { siteId: 'petfood-com', siteName: 'PetFood.com', headline: 'Reading Pet Food Labels', blurb: 'AAFCO statements, guaranteed analysis, and ingredient lists — the same skills apply to ferret kibble.', cta: 'Learn to read labels', href: 'https://petfood.com/guides/reading-pet-food-labels' },
  ],
  'ferret-com:behavior': [
    { siteId: 'ferrets-com', siteName: 'Ferrets.com', headline: 'Ferret Legality by State', blurb: 'Ferrets are prohibited or regulated in California, Hawaii, and several cities — verify before acquiring.', cta: 'Check your state', href: 'https://ferrets.com/states' },
  ],
  'ferret-com:tool': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Find an Exotic Vet', blurb: 'AEMV-certified exotic-animal veterinarians for the ferret-specific care a calculator can\'t cover.', cta: 'Find a vet', href: 'https://vets.co/find-a-vet' },
    { siteId: 'ferrets-com', siteName: 'Ferrets.com', headline: 'State Legality + Adoption', blurb: 'Before you budget for a ferret, confirm they\'re legal where you live.', cta: 'Check your state', href: 'https://ferrets.com/states' },
  ],

  // ── ferrets-com ───────────────────────────────────────
  'ferrets-com:directory': [
    { siteId: 'ferret-com', siteName: 'Ferret.com', headline: 'Complete Care Guides', blurb: 'Litter training, vaccinations, diet, dental care — everything new owners need.', cta: 'Browse care guides', href: 'https://ferret.com/care' },
    { siteId: 'ferret-com', siteName: 'Ferret.com', headline: 'Ferret Health Library', blurb: 'Adrenal disease, insulinoma, lymphoma — what to watch for and when.', cta: 'See health topics', href: 'https://ferret.com/health' },
  ],

  // ── horses-com (activate already-placed cards: care/gear/health/nutrition/training)
  // Equestrian sibling Saddle.com is the relevant cross-portfolio target.
  'horses-com:health': [
    { siteId: 'saddle-com', siteName: 'Saddle.com', headline: 'Horse Care & First-Aid Guides', blurb: 'Grooming, first aid, dentistry, and trailer-safety guides for owners.', cta: 'Browse guides', href: 'https://saddle.com/guides' },
  ],
  'horses-com:nutrition': [
    { siteId: 'saddle-com', siteName: 'Saddle.com', headline: 'Horse Nutrition & Body Condition', blurb: 'Body-condition scoring and feeding guidance from the equestrian library.', cta: 'Browse guides', href: 'https://saddle.com/guides' },
  ],
  'horses-com:care': [
    { siteId: 'saddle-com', siteName: 'Saddle.com', headline: 'Tack, Grooming & Daily Care', blurb: 'Leather care, tack cleaning, and grooming routines for the well-kept horse.', cta: 'See care guides', href: 'https://saddle.com/guides' },
  ],
  'horses-com:gear': [
    { siteId: 'saddle-com', siteName: 'Saddle.com', headline: 'Saddles, Tack & Accessories', blurb: 'Independent saddle, bridle, and accessory buyer guidance by discipline.', cta: 'Shop the guide', href: 'https://saddle.com/accessories' },
  ],
  'horses-com:training': [
    { siteId: 'saddle-com', siteName: 'Saddle.com', headline: 'Discipline & Riding Guides', blurb: 'English, western, dressage, and discipline-specific tack and technique.', cta: 'Browse disciplines', href: 'https://saddle.com/guides' },
  ],

  // ── petfood-com (activate already-placed brand card) — sibling ingredient/brand DB
  'petfood-com:brand': [
    { siteId: 'petfoods-com', siteName: 'PetFoods.com', headline: 'Brand & Ingredient Database', blurb: 'WSAVA compliance, ingredient sourcing, and brand evaluations side by side.', cta: 'Compare brands', href: 'https://petfoods.com/brands' },
  ],

  // ── saddle-com (activate already-placed guide card) — equestrian sibling authority
  'saddle-com:guide': [
    { siteId: 'horses-com', siteName: 'Horses.com', headline: 'Equine Health & Breed Authority', blurb: 'Breed profiles, health, nutrition, and discipline references for owners.', cta: 'Explore Horses.com', href: 'https://horses.com/tack' },
  ],
  'saddle-com:tool': [
    { siteId: 'horses-com', siteName: 'Horses.com', headline: 'Horse Care & Ownership', blurb: 'A fit or girth measurement is half the picture — the horse-care side lives on Horses.com.', cta: 'Explore Horses.com', href: 'https://horses.com/ownership' },
  ],
  'horses-com:tool': [
    { siteId: 'saddle-com', siteName: 'Saddle.com', headline: 'Saddle Fit & Tack', blurb: 'Weight and measurement in hand, get the tack right — saddle fit guides and brand reviews.', cta: 'Browse saddles', href: 'https://saddle.com/brands' },
  ],

  // ── dog-com guide spokes (general dog-owner guides → clinical + nutrition siblings)
  'dog-com:guide': [
    { siteId: 'vets-co', siteName: 'Vets.co', headline: 'Veterinary Care Reference', blurb: 'Conditions, medications, and specialist directories from a clinical-authority desk.', cta: 'Browse vet topics', href: 'https://vets.co/health' },
    { siteId: 'petfood-com', siteName: 'PetFood.com', headline: 'Feeding & Nutrition Guides', blurb: 'AAFCO life-stage profiles, label-reading, and feeding fundamentals.', cta: 'Read nutrition guides', href: 'https://petfood.com/nutrition' },
  ],

  // ── horses-com guide spokes (equestrian sibling)
  'horses-com:guide': [
    { siteId: 'saddle-com', siteName: 'Saddle.com', headline: 'Tack Fit & Care Guides', blurb: 'Saddle fit, leather care, and discipline-specific tack guidance.', cta: 'Browse guides', href: 'https://saddle.com/guides' },
  ],
}

/**
 * Returns 0-3 curated sister-site recommendations for the given site + content type.
 * Empty array if no recommendations are defined (component will render nothing).
 */
export function getCrossPortfolioRecommendations(
  currentSite: SiteId,
  contentType: ContentType,
  limit = 3,
): CrossPortfolioRecommendation[] {
  const key = `${currentSite}:${contentType}`
  const recs = RECOMMENDATIONS[key] ?? []
  return recs.slice(0, limit)
}

export {
  resolveAffiliateHop,
  resolveTag,
  stripPlaceholder,
  partnerHome,
  isChewyHop,
  isChewyHopLive,
  visibleChewyHref,
  amazonFallbackFromChewyHref,
  visibleShopHref,
  VETS_PET_INSURANCE_REVIEW,
} from './affiliate-hop'
export type { HopResult } from './affiliate-hop'
export {
  parseDirectoryCsv,
  paginateDirectory,
  findListing,
  directoryClaimPrefill,
  directorySitemapEntries,
  directorySitemapIds,
  buildSitemapIndexXml,
  sitemapIndexResponse,
  directorySlugParams,
  directoryCityParams,
  directoryPlaceTitle,
  directoryListingTitle,
  directoryListingH1,
  listingLocalBusinessJsonLd,
  cityPlaceJsonLd,
  cityLocalBusinessListJsonLd,
  directoryStatePath,
  directoryCityPath,
  directoryListingPath,
  DIRECTORY_PAGE_SIZE,
  DIRECTORY_FEATURED_MAX,
  DIRECTORY_SITEMAP_DETAIL_CAP,
  DIRECTORY_TITLE_MAX,
} from './directory'
export type { DirectoryListing, DirectoryPage } from './directory'
export {
  handleSubscribePost,
  isValidSubscribeEmail,
  parseSubscribeBody,
} from './subscribe'
