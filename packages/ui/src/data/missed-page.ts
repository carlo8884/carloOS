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
  guides: readonly [MissedLink, MissedLink, MissedLink]
  calculator: MissedLink
}

/**
 * Top three guides from each earning site's hub, plus that site's daily
 * calculator. Fish has no /guides hub; the setup hub is the guide list.
 */
export const MISSED_PAGES: Partial<Record<SiteId, MissedPageContent>> = {
  'dog-com': {
    noun: 'guides',
    hub: { href: '/guides', title: 'Care guides', topic: 'dog care' },
    guides: [
      {
        href: '/guides/dog-body-condition-score',
        title: 'Dog body condition score',
        topic: 'Weight scale and how to read it',
      },
      {
        href: '/guides/dog-spay-neuter-timing',
        title: 'Spay and neuter timing',
        topic: 'What the cited research says about scheduling',
      },
      {
        href: '/guides/how-to-take-dogs-temperature',
        title: "How to take a dog's temperature",
        topic: 'Home vital signs and the ranges to know',
      },
    ],
    calculator: {
      href: '/tools/dog-food-amount-calculator',
      title: 'Daily dog food calculator',
      topic: 'Grams from weight and the bag',
    },
  },
  'fish-com': {
    noun: 'guides',
    hub: { href: '/setup', title: 'Setup guides', topic: 'aquarium setup' },
    guides: [
      {
        href: '/setup/aquarium-cycling-guide',
        title: 'Aquarium cycling guide',
        topic: 'Nitrogen cycle before fish go in',
      },
      {
        href: '/setup/water-chemistry-guide',
        title: 'Water chemistry guide',
        topic: 'Ammonia, nitrite, nitrate, and pH',
      },
      {
        href: '/setup/planted-tank-setup',
        title: 'Planted tank setup',
        topic: 'Low-tech plants, light, and substrate',
      },
    ],
    calculator: {
      href: '/tools/stocking-calculator',
      title: 'Stocking calculator',
      topic: 'A rough bioload ceiling from tank volume',
    },
  },
  'horses-com': {
    noun: 'guides',
    hub: { href: '/guides', title: 'Horse guides', topic: 'equine care' },
    guides: [
      {
        href: '/guides/saddle-fit-basics',
        title: 'Saddle fit basics',
        topic: 'Tree, panels, and the ridden check',
      },
      {
        href: '/guides/equine-dental-care',
        title: 'Equine dental care',
        topic: 'Floating, wolf teeth, and exam timing',
      },
      {
        href: '/guides/equine-vaccination-schedule',
        title: 'Vaccination schedule',
        topic: 'AAEP core and risk-based vaccines',
      },
    ],
    calculator: {
      href: '/tools/horse-feed-calculator',
      title: 'Daily horse feed calculator',
      topic: 'Hay and hard feed from body weight',
    },
  },
  'vets-co': {
    noun: 'guides',
    hub: { href: '/guides', title: 'Care guides', topic: 'vet care' },
    guides: [
      {
        href: '/guides/cost-of-veterinary-care',
        title: 'What vet care costs',
        topic: 'Typical fees for routine and urgent visits',
      },
      {
        href: '/guides/how-to-afford-vet-care',
        title: 'How to afford vet care',
        topic: 'Payment options owners actually use',
      },
      {
        href: '/guides/emergency-vet-costs',
        title: 'Emergency vet costs',
        topic: 'After-hours and ER fee ranges',
      },
    ],
    calculator: {
      href: '/tools/cat-food-amount-calculator',
      title: 'Daily cat food calculator',
      topic: 'Grams from weight and the label',
    },
  },
  'ferret-com': {
    noun: 'guides',
    hub: { href: '/care', title: 'Care guides', topic: 'ferret care' },
    guides: [
      {
        href: '/care/diet-basics',
        title: 'Diet basics',
        topic: 'Protein, fat, and carbohydrate limits',
      },
      {
        href: '/care/cage-setup',
        title: 'Cage setup',
        topic: 'Size, levels, bedding, and litter',
      },
      {
        href: '/care/exercise-and-enrichment',
        title: 'Exercise and enrichment',
        topic: 'Out-of-cage time and ferret-proofing',
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
