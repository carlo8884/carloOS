/**
 * CarloOS Design Tokens & Site Configuration
 * Single source of truth for all brand values across all 5 sites.
 * Every color, font, spacing, and site-specific config lives here.
 */

// ─────────────────────────────────────────────
// SITE IDENTIFIERS
// ─────────────────────────────────────────────

export type SiteId = 'dog-com' | 'vets-co' | 'fish-com' | 'saddle-com' | 'lizard-com' | 'horses-com' | 'petfood-com' | 'ferret-com' | 'ferrets-com'

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
    primary: '#0A8A7A',
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
    primary: '#0E6B8A',
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
    primary: '#A07840',
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
    primary: '#7AB52A',
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
    primary: '#6E4A28',
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
    primary: '#D9622A',
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

  'ferret-com': {
    // Rich chocolate brown + warm cream + soft amber accent — ferret coloring.
    primary: '#5C3A1E',
    primaryLight: '#7A4F2C',
    primaryPale: '#F5EBDC',
    primaryDark: '#3F2710',
    dark: '#1E140A',
    surface: '#FBF5E8',
    white: '#FFFFFF',
    textDark: '#1E140A',
    textMid: '#4A3220',
    textLight: '#8A7058',
    border: '#E6D6BE',
    success: '#3A6A2A',
    warning: '#D6A22A',
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

  'ferrets-com': {
    // Library/reference feel — lighter chocolate + paper cream + warmer off-white.
    primary: '#6E4A28',
    primaryLight: '#8C6238',
    primaryPale: '#F5EBDC',
    primaryDark: '#523618',
    dark: '#1F140A',
    surface: '#FBF6EA',
    white: '#FFFDF7',
    textDark: '#1F140A',
    textMid: '#4A3220',
    textLight: '#8A7058',
    border: '#E2D6C2',
    success: '#3A6A2A',
    warning: '#D6A22A',
    danger: '#C84A2A',
    fontDisplay: 'Playfair Display',
    fontBody: 'Source Sans 3',
    fontDisplayWeights: [400, 700, 900],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'Ferrets.com',
    siteTagline: 'The Ferret Library & Directory',
    siteUrl: 'https://ferrets.com',
    logoText: 'Ferrets.com',
    twPrimary: 'amber',
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
          { label: 'Symptom Guide', href: '/health/dog-symptoms-guide' },
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
          { label: 'Pet Insurance', href: '/reviews/best-pet-insurance' },
          { label: 'Flea & Tick', href: '/reviews/best-flea-tick-prevention' },
          { label: 'Dog Beds', href: '/reviews/best-dog-beds' },
          { label: 'All Reviews', href: '/reviews' },
          { label: 'FAQ', href: '/faq' },
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
        ],
      },
      {
        heading: 'Pet Health',
        links: [
          { label: 'Pet Health Library', href: '/health' },
          { label: 'Senior Pet Care', href: '/health/senior-pet-care' },
          { label: 'Vaccinations Guide', href: '/health/dog-vaccinations-guide' },
          { label: 'Preventive Care', href: '/health/preventive-care-schedule' },
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
      { label: 'Aquarium Setup', href: '/setup' },
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
          { label: 'Water Change', href: '/tools/water-change-calculator' },
          { label: 'CO2 (KH/pH)', href: '/tools/co2-calculator' },
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
      { label: 'Buying Guides', href: '/guides/saddle-fit-guide' },
      { label: 'Brand Reviews', href: '/reviews' },
      { label: 'Saddle Care', href: '/guides/leather-care-guide' },
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
        heading: 'Buying Guides',
        links: [
          { label: 'Saddle Fit', href: '/guides/saddle-fit-guide' },
          { label: 'Seat Size', href: '/guides/seat-size-guide' },
          { label: 'Used Saddle', href: '/guides/used-saddle-buying-guide' },
          { label: 'First Horse', href: '/guides/buying-first-horse' },
        ],
      },
      {
        heading: 'Care & Tack',
        links: [
          { label: 'Leather Care', href: '/guides/leather-care-guide' },
          { label: 'Tack Cleaning', href: '/guides/tack-cleaning-schedule' },
          { label: 'Bit Selection', href: '/guides/bit-selection-guide' },
          { label: 'Bridle Guide', href: '/guides/horse-bridle-guide' },
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
      { label: 'Reptile Health', href: '/health/sick-reptile-signs' },
      { label: 'Enclosure Setup', href: '/setup' },
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
    ],
    footerLinks: [
      {
        heading: 'Horses.com',
        links: [
          { label: 'Home', href: '/' },
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
    ],
    footerLinks: [
      {
        heading: 'PetFood.com',
        links: [
          { label: 'Home', href: '/' },
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
    ],
    footerLinks: [
      {
        heading: 'Ferret.com',
        links: [
          { label: 'Home', href: '/' },
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
        heading: 'Ferrets.com',
        links: [
          { label: 'Home', href: '/' },
        ],
      },
    ],
    defaultOgImage: 'https://ferrets.com/og-default.jpg',
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
