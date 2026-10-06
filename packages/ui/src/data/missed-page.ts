import type { SiteId } from '@carloOS/config'

/** A real page offered when a URL is missing or search has nothing to show. */
export interface MissedLink {
  href: string
  title: string
  /** Extra words HubSearch matches, shown under the title. */
  topic: string
}

export interface MissedPageContent {
  noun: string
  hub: MissedLink
  guides: readonly [MissedLink, MissedLink, MissedLink, MissedLink, MissedLink]
  calculator: MissedLink
}

/**
 * The five money pages from each earning site's lighthouse budget, plus
 * that site's hub and daily calculator. Fish has no /guides hub; the setup
 * hub is the guide list.
 */
export const MISSED_PAGES: Partial<Record<SiteId, MissedPageContent>> = {
  'dog-com': {
    noun: 'pages',
    hub: { href: '/guides', title: 'Care guides', topic: 'dog care' },
    guides: [
      {
        href: '/reviews/best-dog-crates',
        title: 'Best dog crates',
        topic: 'Wire, plastic, heavy-duty, and furniture-style',
      },
      {
        href: '/reviews/best-dry-dog-food',
        title: 'Best dry dog food',
        topic: 'Life-stage dry formulas compared',
      },
      {
        href: '/reviews/best-dog-harnesses',
        title: 'Best dog harnesses',
        topic: 'Front-clip, back-clip, and escape-proof',
      },
      {
        href: '/reviews/best-dog-food-for-puppies',
        title: 'Best puppy food',
        topic: 'Large-breed and small-breed formulas',
      },
      {
        href: '/reviews/best-dog-gps-tracker',
        title: 'Best dog GPS trackers',
        topic: 'Fi, Whistle, and Tractive',
      },
    ],
    calculator: {
      href: '/tools/dog-food-amount-calculator',
      title: 'Daily dog food calculator',
      topic: 'Grams from weight and the bag',
    },
  },
  'fish-com': {
    noun: 'pages',
    hub: { href: '/setup', title: 'Setup guides', topic: 'aquarium setup' },
    guides: [
      {
        href: '/reviews/best-aquarium-filters',
        title: 'Best aquarium filters',
        topic: 'Hang-on-back, canister, and sponge',
      },
      {
        href: '/reviews/best-aquarium-heaters',
        title: 'Best aquarium heaters',
        topic: 'Eheim, Hydor, and Aqueon',
      },
      {
        href: '/reviews/best-water-test-kits',
        title: 'Best water test kits',
        topic: 'API, Salifert, and meters',
      },
      {
        href: '/reviews/best-nano-tanks',
        title: 'Best nano tanks',
        topic: 'Fluval Spec and Aqueon kits',
      },
      {
        href: '/reviews/best-canister-filters',
        title: 'Best canister filters',
        topic: 'Fluval 307 and Eheim Classic',
      },
    ],
    calculator: {
      href: '/tools/stocking-calculator',
      title: 'Stocking calculator',
      topic: 'A rough bioload ceiling from tank volume',
    },
  },
  'horses-com': {
    noun: 'pages',
    hub: { href: '/guides', title: 'Horse guides', topic: 'equine care' },
    guides: [
      {
        href: '/reviews/best-equine-supplements',
        title: 'Best equine supplements',
        topic: 'Joint, gastric, hoof, and electrolyte',
      },
      {
        href: '/reviews/best-winter-horse-blankets',
        title: 'Best winter horse blankets',
        topic: 'Turnout blankets by weight and denier',
      },
      {
        href: '/tack/saddle-pads',
        title: 'Saddle pads',
        topic: 'Quilted, sheepskin, and felt',
      },
      {
        href: '/tack/helmet-guide',
        title: 'Helmet guide',
        topic: 'Safety-rated riding helmets',
      },
      {
        href: '/tack/boots-and-wraps',
        title: 'Boots and wraps',
        topic: 'Brushing boots, bell boots, and standing wraps',
      },
    ],
    calculator: {
      href: '/tools/horse-feed-calculator',
      title: 'Daily horse feed calculator',
      topic: 'Hay and hard feed from body weight',
    },
  },
  'vets-co': {
    noun: 'pages',
    hub: { href: '/guides', title: 'Care guides', topic: 'vet care' },
    guides: [
      {
        href: '/reviews/best-pet-insurance',
        title: 'Best pet insurance',
        topic: 'Trupanion, Healthy Paws, and Embrace',
      },
      {
        href: '/telehealth',
        title: 'Pet telehealth',
        topic: 'Vetster, AskVet, and Chewy Connect',
      },
      {
        href: '/insurance/deductibles-reimbursement',
        title: 'Deductibles and reimbursement',
        topic: 'How the three levers change a quote',
      },
      {
        href: '/insurance/how-pet-insurance-works',
        title: 'How pet insurance works',
        topic: 'Premiums, claims, and limits',
      },
      {
        href: '/insurance/what-pet-insurance-covers',
        title: 'What pet insurance covers',
        topic: 'Covered conditions and common exclusions',
      },
    ],
    calculator: {
      href: '/tools/cat-food-amount-calculator',
      title: 'Daily cat food calculator',
      topic: 'Grams from weight and the label',
    },
  },
  'ferret-com': {
    noun: 'pages',
    hub: { href: '/care', title: 'Care guides', topic: 'ferret care' },
    guides: [
      {
        href: '/reviews/best-ferret-cage',
        title: 'Best ferret cage',
        topic: 'Bar spacing and floor space',
      },
      {
        href: '/reviews/best-ferret-litter',
        title: 'Best ferret litter',
        topic: 'Paper, wood, and grass pellets',
      },
      {
        href: '/reviews/best-ferret-harness',
        title: 'Best ferret harness',
        topic: 'Vest, H-style, and mesh',
      },
      {
        href: '/diet/best-ferret-kibble',
        title: 'Best ferret kibble',
        topic: 'Wysong and Marshall',
      },
      {
        href: '/care/bedding-and-litter-types',
        title: 'Bedding and litter types',
        topic: 'Fleece, hammocks, and litter pans',
      },
    ],
    calculator: {
      href: '/tools/cage-size-calculator',
      title: 'Cage size calculator',
      topic: 'Footprint from ferret count and playtime',
    },
  },
}

export function missedPage(siteId: SiteId): MissedPageContent | undefined {
  return MISSED_PAGES[siteId]
}
