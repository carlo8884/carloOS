/**
 * Hub index page definitions. Cards are derived automatically from the page
 * clusters so the index never drifts from the actual pages on disk.
 */
import { NUTRITION } from './nutrition.mjs'
import { DIETS } from './diets.mjs'
import { FEEDING } from './feeding.mjs'
import { COMPARE } from './compare.mjs'
import { SUPPLEMENTS } from './supplements.mjs'
import { SPECIES } from './species.mjs'
import { MYTHS } from './myths.mjs'

// Short card descriptions per slug (kept here so hub copy is curated, not just
// a truncation of the hero). Falls back to a trimmed hero if absent.
const CARD_DESC = {}

function cardsFrom(pages) {
  return pages.map((p) => ({
    slug: p.slug,
    title: p.title,
    description: CARD_DESC[p.slug] || trimHero(p.hero),
  }))
}

function trimHero(hero) {
  // First sentence, capped, as a card blurb.
  const firstSentence = hero.split('. ')[0]
  const s = firstSentence.length > 180 ? firstSentence.slice(0, 177) + '...' : firstSentence + '.'
  return s
}

export const HUBS = [
  {
    dir: 'nutrition',
    metaTitle: 'Pet Nutrition Fundamentals — Reference Library | PetFood.com',
    metaDesc:
      'Reference library on pet nutrition fundamentals — protein, fat, carbohydrate, calories, vitamins, minerals, taurine, water, and reading the guaranteed analysis.',
    eyebrow: 'Nutrition Fundamentals',
    h1: 'Pet Nutrition Fundamentals',
    intro:
      'The macronutrients, micronutrients, and label math that underpin every diet decision — anchored to AAFCO nutrient profiles, the NRC requirements, and WSAVA guidance.',
    breadcrumb: 'Nutrition',
    cards: cardsFrom(NUTRITION),
  },
  {
    dir: 'diets',
    metaTitle: 'Condition-Specific Pet Diets — Reference Library | PetFood.com',
    metaDesc:
      'Reference on therapeutic and condition-specific diets — kidney, allergy, weight, diabetic, senior, urinary, GI, liver, and pancreatitis nutrition.',
    eyebrow: 'Condition-Specific Diets',
    h1: 'Condition-Specific Diets',
    intro:
      'How diet is used to manage diagnosed conditions — what the therapeutic nutrient targets are, what the evidence supports, and what requires veterinary oversight.',
    breadcrumb: 'Diets',
    cards: cardsFrom(DIETS),
  },
  {
    dir: 'feeding',
    metaTitle: 'Pet Feeding Guides — How Much and How Often | PetFood.com',
    metaDesc:
      'Feeding guides and calculator companions — portion math, feeding frequency, life-stage feeding, transitions, body condition scoring, and treat budgeting.',
    eyebrow: 'Feeding Guides',
    h1: 'Feeding Guides',
    intro:
      'The practical side of nutrition — how much to feed, how often, how to transition foods, and how to read body condition. Companions to the food-cost and portion calculators.',
    breadcrumb: 'Feeding',
    cards: cardsFrom(FEEDING),
  },
  {
    dir: 'compare',
    metaTitle: 'Pet Food Type Comparisons — Reference Library | PetFood.com',
    metaDesc:
      'Even-handed comparisons of pet food formats and philosophies — wet vs dry, raw vs cooked, fresh vs kibble, grain-free vs grain-inclusive, and more.',
    eyebrow: 'Food-Type Comparisons',
    h1: 'Food-Type Comparisons',
    intro:
      'Format-versus-format and philosophy-versus-philosophy comparisons, scored on the same evidence rubric rather than on marketing claims.',
    breadcrumb: 'Compare',
    cards: cardsFrom(COMPARE),
  },
  {
    dir: 'supplements',
    metaTitle: 'Pet Supplements — Evidence Reference | PetFood.com',
    metaDesc:
      'Evidence-based reference on common pet supplements — fish oil, glucosamine, probiotics, multivitamins, joint, skin, and digestive supplements.',
    eyebrow: 'Supplement Reference',
    h1: 'Pet Supplements',
    intro:
      'What the evidence actually supports for the most-marketed pet supplements — and when a complete diet already covers the need.',
    breadcrumb: 'Supplements',
    cards: cardsFrom(SUPPLEMENTS),
  },
  {
    dir: 'species',
    metaTitle: 'Dog vs Cat Nutrition — Species Reference | PetFood.com',
    metaDesc:
      'How dog and cat nutritional needs differ — obligate carnivore vs facultative omnivore, taurine, vitamin A, protein, and why species-appropriate food matters.',
    eyebrow: 'Species Nutrition',
    h1: 'Dog vs Cat Nutrition',
    intro:
      'The metabolic differences between dogs and cats that make species-appropriate food a requirement, not a preference.',
    breadcrumb: 'Species',
    cards: cardsFrom(SPECIES),
  },
  {
    dir: 'myths',
    metaTitle: 'Pet Food Myths — Evidence Check | PetFood.com',
    metaDesc:
      'Common pet food myths checked against the evidence — by-products, grain, fillers, corn, the BEG-diet debate, and marketing claims that do not hold up.',
    eyebrow: 'Myth-Busting',
    h1: 'Pet Food Myths',
    intro:
      'Widely repeated claims about pet food, checked against AAFCO definitions, peer-reviewed evidence, and regulatory sources — what holds up and what does not.',
    breadcrumb: 'Myths',
    cards: cardsFrom(MYTHS),
  },
]
