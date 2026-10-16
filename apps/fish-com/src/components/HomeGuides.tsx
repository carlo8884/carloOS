import Link from 'next/link'
import { StockImage } from '@carloOS/ui'
import { IconArrowRight } from './HomeTriage'

const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

const FEATURED_SPECIES = [
  { name: 'Betta', type: 'Freshwater · Beginner', note: '5 gal min · solitary · tropical', href: '/species/betta-fish', imageKey: 'fish-com:species-thumb-betta', imageAlt: 'A betta fish' },
  { name: 'Neon Tetra', type: 'Freshwater · Schooling', note: '10 gal min · schools 6+ · peaceful', href: '/species/neon-tetra', imageKey: 'fish-com:species-thumb-neon-tetra', imageAlt: 'Neon tetra fish in an aquarium' },
  { name: 'Corydoras', type: 'Freshwater · Bottom dweller', note: '20 gal · schools 6+ · sand substrate', href: '/species/corydoras', imageKey: 'fish-com:species-thumb-corydoras', imageAlt: 'Corydoras catfish' },
  { name: 'Goldfish', type: 'Coldwater · Large', note: '30+ gal · highly bioloaded · long-lived', href: '/species/goldfish', imageKey: 'fish-com:species-thumb-goldfish', imageAlt: 'A goldfish' },
]

const TANK_PLANNING = [
  { title: 'Choose tank size', desc: 'Volume calculator + bioload math for the species you want.', href: '/tools/aquarium-volume-calculator', imageKey: 'fish-com:category-planted', imageAlt: 'Lush aquatic plants in a planted aquarium' },
  { title: 'Freshwater vs saltwater', desc: 'Cost, complexity, time commitment, what changes month-to-month.', href: '/setup', imageKey: 'fish-com:category-saltwater', imageAlt: 'A clownfish among the tentacles of a sea anemone' },
  { title: 'Beginner species', desc: 'Hardy, peaceful, schooling — species most newcomers do well with.', href: '/species', imageKey: 'fish-com:species-thumb-guppy', imageAlt: 'A guppy fish' },
  { title: 'Equipment checklist', desc: 'What you actually need before adding your first fish.', href: '/equipment', imageKey: 'fish-com:category-equipment', imageAlt: 'Aquarium filtration and heating equipment' },
]

// ... (full content truncated for this call example; in practice full file)
