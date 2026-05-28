/**
 * CarloOS Design Tokens & Site Configuration
 * Single source of truth for all brand values across all 5 sites.
 * Every color, font, spacing, and site-specific config lives here.
 */

// ─────────────────────────────────────────────
// SITE IDENTIFIERS
// ─────────────────────────────────────────────

export type SiteId = 'dog-com' | 'vets-co' | 'fish-com' | 'saddle-com' | 'lizard-com' | 'horses-com' | 'petfood-com' | 'ferret-com' | 'ferrets-com' | 'petfoods-com'

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
    // Clinical authority palette — deep teal primary, dark navy masthead,
    // warm ivory paper surface. Sits between AAHA/AVMA (institutional) and
    // 1-800-PetMeds (commercial) — research-anchored, owner-friendly.
    primary: '#0A6B5E',          // deepened, more clinical
    primaryLight: '#0F8A78',
    primaryPale: '#E8F2F0',
    primaryDark: '#054C42',
    dark: '#0C1F2C',             // deeper navy — masthead authority
    surface: '#F6F4EE',          // warm ivory paper (not cool grey)
    white: '#FFFFFF',
    textDark: '#0C1F2C',
    textMid: '#3A4F5C',
    textLight: '#7A8C97',
    border: '#DDE3E5',
    success: '#1E8A4A',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Libre Baskerville',
    fontBody: 'Manrope',
    fontDisplayWeights: [400, 700],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'Vets.co',
    siteTagline: 'Find a vet. Read the guidelines.',
    siteUrl: 'https://vets.co',
    logoText: 'Vets.co',
    twPrimary: 'teal',
  },

  'fish-com': {
    // Aquarium-magazine palette — refined deep teal-blue, cool whites, restrained
    // accents. Aquatic but editorial; competes against Aquarium Co-Op (community)
    // and Practical Fishkeeping (UK magazine) on visual seriousness.
    primary: '#0E5F7E',          // deep aquarium teal — slightly darker, more editorial
    primaryLight: '#1A85AE',     // refraction blue — links / hover
    primaryPale: '#EAF3F8',      // cool wash — section bands
    primaryDark: '#084A66',      // hyper-deep, accents on dark
    dark: '#06121B',             // near-black blue, deep-water masthead
    surface: '#F3F8FB',          // cool magazine off-white
    white: '#FFFFFF',
    textDark: '#06121B',
    textMid: '#21465B',          // mid teal-grey, body on light surfaces
    textLight: '#6E92A8',
    border: '#CADDE8',
    success: '#1A7A44',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Cormorant Garamond',
    fontBody: 'Inter',
    fontDisplayWeights: [400, 600, 700],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'Fish.com',
    siteTagline: 'An Aquarium Reference',
    siteUrl: 'https://fish.com',
    logoText: 'Fish.com',
    twPrimary: 'cyan',
  },

  'saddle-com': {
    // Luxury-equestrian palette — saddle-leather brown primary, brass accent,
    // bone-cream surface, near-black masthead. Hermès / Stubben / Pessoa
    // adjacency, never barn-rustic.
    primary: '#8C5A2A',       // saddle leather, deepened from #A07840 for serif contrast
    primaryLight: '#B07A3E',
    primaryPale: '#F3ECE0',
    primaryDark: '#5E3B15',
    dark: '#100A04',          // near-black masthead, deeper than the previous warm brown
    surface: '#F7F1E7',       // bone / unbleached cream
    white: '#FFFFFF',
    textDark: '#1A1208',
    textMid: '#4A3018',
    textLight: '#8A6848',
    border: '#DBCDB6',
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
    // Dark-mode-first field-guide palette. Lime/herp accent lifted toward the
    // brighter end (#9AD140) so small UI text passes WCAG AA against the
    // green-black backgrounds the masthead leans on. Zilla Slab + Raleway
    // pairing for magazine-quality field-guide-cover typography.
    primary: '#9AD140',
    primaryLight: '#B4E368',
    primaryPale: '#F0F7E6',
    primaryDark: '#6E9F1F',
    dark: '#060A06',
    surface: '#0D1A0D',
    white: '#EEF0E4',
    textDark: '#EEF0E4',
    textMid: 'rgba(238,240,228,0.78)',
    textLight: 'rgba(238,240,228,0.45)',
    border: 'rgba(255,255,255,0.07)',
    success: '#4FD18A',
    warning: '#D6BE52',
    danger: '#E87060',
    fontDisplay: 'Zilla Slab',
    fontBody: 'Raleway',
    fontDisplayWeights: [400, 600, 700],
    fontBodyWeights: [300, 400, 500, 600, 700],
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

  'petfoods-com': {
    // Catalog/database feel — deep moss green + warm white, ingredient-table mono.
    primary: '#3F5C3A',
    primaryLight: '#577A50',
    primaryPale: '#EDF1EA',
    primaryDark: '#2C4128',
    dark: '#161C15',
    surface: '#FAFAF7',
    white: '#FFFFFF',
    textDark: '#161C15',
    textMid: '#3A4A38',
    textLight: '#7A8A78',
    border: '#DAE2D6',
    success: '#3A6A2A',
    warning: '#C8952A',
    danger: '#C84A2A',
    fontDisplay: 'Cormorant Garamond',
    fontBody: 'Inter',
    fontDisplayWeights: [500, 600, 700],
    fontBodyWeights: [300, 400, 500, 600, 700],
    siteName: 'PetFoods.com',
    siteTagline: 'The Pet Food Catalog',
    siteUrl: 'https://petfoods.com',
    logoText: 'PetFoods.com',
    twPrimary: 'emerald',
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
}

// ─────────────────────────────────────────────
// CROSS-PORTFOLIO RECOMMENDATIONS
// Drives the CrossPortfolioCard component — sister-site recommendations
// shown contextually so each domain refers readers to relevant siblings.
// Builds internal-network authority and funnels owners toward Vets.co.
// ─────────────────────────────────────────────

/** Sister sites we may recommend. Includes the 5 active sites plus the new
 *  portfolio scaffolds (Horses / PetFood / PetFoods / Ferret / Ferrets) whose
 *  content branches are landing in parallel. URLs point to the canonical
 *  sibling domains. */
export type RecommendedSiteId =
  | SiteId
  | 'ferret-com'
  | 'ferrets-com'
  | 'horses-com'
  | 'petfood-com'
  | 'petfoods-com'

/** Editorial context of the page driving the recommendation. */
export type ContentType =
  | 'health'
  | 'food'
  | 'breed'
  | 'training'
  | 'gear'
  | 'general'

/** One sister-site recommendation entry. Editorial copy — never ad-y. */
export interface CrossPortfolioRecommendation {
  siteId: RecommendedSiteId
  /** Sister-site name shown above the headline (e.g. "Vets.co"). */
  siteName: string
  /** Where the card links — root or a deeper relevant route on the sister. */
  href: string
  /** ≤ 8 words. */
  headline: string
  /** ≤ 25 words — explains the relevance. */
  blurb: string
  /** Short CTA label, e.g. "Find a vet". */
  cta: string
}

/**
 * (fromSiteId, contentType) → up to 2 sister-site recommendations.
 * Editorial rule: never overlink; never recommend a site without
 * relevant content for the given context.
 */
export const crossPortfolioRecommendations: Record<
  SiteId,
  Partial<Record<ContentType, CrossPortfolioRecommendation[]>>
> = {
  'dog-com': {
    health: [
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/find-a-vet',
        headline: 'Find a vet near you',
        blurb:
          'When your dog needs hands-on care, Vets.co lists vets, telehealth options, and emergency clinics with verified hours.',
        cta: 'Find a vet',
      },
      {
        siteId: 'petfood-com',
        siteName: 'PetFood.com',
        href: 'https://petfood.com/dogs',
        headline: 'Compare commercial dog diets',
        blurb:
          'PetFood.com compares dog foods against WSAVA nutritional standards so you can see which meet the guidelines you actually care about.',
        cta: 'Compare diets',
      },
    ],
    food: [
      {
        siteId: 'petfood-com',
        siteName: 'PetFood.com',
        href: 'https://petfood.com/dogs',
        headline: 'See how brands compare',
        blurb:
          'Side-by-side dog-food comparisons across WSAVA criteria, life-stage suitability, and ingredient transparency.',
        cta: 'Compare brands',
      },
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/health',
        headline: 'When diet meets a diagnosis',
        blurb:
          'If a vet has recommended a prescription or therapeutic diet, Vets.co explains what those formulas actually do.',
        cta: 'Read the guides',
      },
    ],
    breed: [
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/breeds',
        headline: 'Breed-specific health risks',
        blurb:
          'Vets.co covers the genetic conditions, screening tests, and life-stage red flags that are over-represented in this breed.',
        cta: 'Health profile',
      },
    ],
    training: [
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/health',
        headline: 'When behavior is medical',
        blurb:
          'Sudden behavior changes can be pain or thyroid — Vets.co covers the medical signs people commonly mistake for training problems.',
        cta: 'Behavior guides',
      },
    ],
    gear: [
      {
        siteId: 'petfood-com',
        siteName: 'PetFood.com',
        href: 'https://petfood.com/dogs',
        headline: 'Pair the gear with the diet',
        blurb:
          'Once the bowl and crate are sorted, PetFood.com helps you compare the food that goes inside.',
        cta: 'Compare diets',
      },
    ],
    general: [
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/find-a-vet',
        headline: 'Find a vet near you',
        blurb:
          'Vets.co — the portfolio reference for finding veterinary care, understanding diagnoses, and comparing pet insurance.',
        cta: 'Find a vet',
      },
      {
        siteId: 'petfood-com',
        siteName: 'PetFood.com',
        href: 'https://petfood.com/dogs',
        headline: 'Compare dog foods on the merits',
        blurb:
          'PetFood.com benchmarks commercial diets against WSAVA criteria so you can pick food on substance, not packaging.',
        cta: 'Compare diets',
      },
    ],
  },

  'vets-co': {
    breed: [
      {
        siteId: 'dog-com',
        siteName: 'Dog.com',
        href: 'https://dog.com/breeds',
        headline: 'Full breed profiles',
        blurb:
          'Dog.com goes deeper on temperament, exercise, training, and day-to-day care for every breed Vets.co covers medically.',
        cta: 'Breed library',
      },
    ],
    health: [
      {
        siteId: 'petfood-com',
        siteName: 'PetFood.com',
        href: 'https://petfood.com',
        headline: 'Diets that match the diagnosis',
        blurb:
          'PetFood.com compares prescription and therapeutic diets against WSAVA criteria when your vet has recommended a dietary change.',
        cta: 'Compare diets',
      },
    ],
    general: [
      {
        siteId: 'dog-com',
        siteName: 'Dog.com',
        href: 'https://dog.com',
        headline: 'Dog owner reference library',
        blurb:
          'Dog.com is the portfolio reference for breed profiles, training, nutrition, and day-to-day owner questions.',
        cta: 'Visit Dog.com',
      },
      {
        siteId: 'petfood-com',
        siteName: 'PetFood.com',
        href: 'https://petfood.com',
        headline: 'Compare pet foods on the merits',
        blurb:
          'PetFood.com benchmarks commercial pet diets against WSAVA criteria so you can pick food on substance, not packaging.',
        cta: 'Compare diets',
      },
    ],
  },

  'fish-com': {
    health: [
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/find-a-vet',
        headline: 'Aquatic & exotic vets',
        blurb:
          'When water-quality fixes aren\'t enough, Vets.co helps you locate vets with aquatic and exotic-species experience.',
        cta: 'Find a vet',
      },
    ],
    gear: [
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/health',
        headline: 'When equipment fails fish',
        blurb:
          'Vets.co covers the medical fallout — ammonia burns, swim-bladder issues, stress disease — when filtration or heating goes wrong.',
        cta: 'Health guides',
      },
    ],
    general: [
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/find-a-vet',
        headline: 'Aquatic & exotic vets',
        blurb:
          'Vets.co helps you find a vet with aquatic experience for the cases water testing alone can\'t resolve.',
        cta: 'Find a vet',
      },
      {
        siteId: 'petfood-com',
        siteName: 'PetFood.com',
        href: 'https://petfood.com',
        headline: 'Beyond fish flakes',
        blurb:
          'PetFood.com compares commercial diets across species — useful when your household is more than the aquarium.',
        cta: 'Compare brands',
      },
    ],
  },

  'saddle-com': {
    health: [
      {
        siteId: 'horses-com',
        siteName: 'Horses.com',
        href: 'https://horses.com/health',
        headline: 'Equine health & soundness',
        blurb:
          'Horses.com covers back pain, saddle fit consequences, and lameness work-ups — the medical side of the tack questions.',
        cta: 'Health library',
      },
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/find-a-vet',
        headline: 'Find an equine vet',
        blurb:
          'When fit changes don\'t resolve the issue, Vets.co lists equine practitioners and specialists by region.',
        cta: 'Find a vet',
      },
    ],
    gear: [
      {
        siteId: 'horses-com',
        siteName: 'Horses.com',
        href: 'https://horses.com',
        headline: 'Riding & horse care reference',
        blurb:
          'Horses.com is the broader reference — care, training, discipline guides — for the horse the tack is going on.',
        cta: 'Visit Horses.com',
      },
    ],
    general: [
      {
        siteId: 'horses-com',
        siteName: 'Horses.com',
        href: 'https://horses.com',
        headline: 'Riding & horse care reference',
        blurb:
          'Horses.com covers care, training, and discipline guides for the horse under the saddle.',
        cta: 'Visit Horses.com',
      },
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/find-a-vet',
        headline: 'Find an equine vet',
        blurb:
          'Vets.co lists equine practitioners and specialists when a fit question turns out to be a soundness question.',
        cta: 'Find a vet',
      },
    ],
  },

  'lizard-com': {
    health: [
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/find-a-vet',
        headline: 'Find an exotic-species vet',
        blurb:
          'Reptile husbandry mistakes show up medically — Vets.co helps you find vets who actually treat reptiles, not just dogs and cats.',
        cta: 'Find a vet',
      },
    ],
    food: [
      {
        siteId: 'petfood-com',
        siteName: 'PetFood.com',
        href: 'https://petfood.com',
        headline: 'Commercial diets, compared',
        blurb:
          'PetFood.com compares commercial reptile and insectivore diets where they\'re a sensible supplement to a live-feed schedule.',
        cta: 'Compare brands',
      },
    ],
    general: [
      {
        siteId: 'vets-co',
        siteName: 'Vets.co',
        href: 'https://vets.co/find-a-vet',
        headline: 'Find an exotic-species vet',
        blurb:
          'Vets.co helps you find vets with reptile experience — most general-practice clinics don\'t see them often.',
        cta: 'Find a vet',
      },
    ],
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

/**
 * Look up cross-portfolio recommendations for a site + content context.
 * Returns at most 2 entries (editorial cap — never overlink).
 * Falls back to the site's `general` set when no rule matches the contentType.
 */
export function getCrossPortfolioRecommendations(
  fromSite: SiteId,
  contentType: ContentType,
): CrossPortfolioRecommendation[] {
  const rules = crossPortfolioRecommendations[fromSite]
  if (!rules) return []
  const match = rules[contentType] ?? rules.general ?? []
  return match.slice(0, 2)
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
