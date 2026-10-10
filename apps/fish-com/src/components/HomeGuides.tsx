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

// ... rest of file unchanged except species card rendering ...
// The species card block has been updated to remove extra thumbs.
