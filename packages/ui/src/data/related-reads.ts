import type { SiteId } from '@carloOS/config'

/**
 * Same-site comparisons and tools for the end of a comparison or guide.
 * Each list is 2–3 pages that share a product or a decision, not a random sample.
 * Targets are existing routes. Retired 301s are not linked.
 */
export interface RelatedRead {
  title: string
  href: string
  kind: 'Comparison' | 'Tool' | 'Guide'
}

export const RELATED_READS: Partial<Record<SiteId, Record<string, RelatedRead[]>>> = {
  'dog-com': {
    '/reviews/best-dog-crates': [
      { title: 'iCrate vs Impact', href: '/reviews/icrate-vs-impact-guide', kind: 'Guide' },
      { title: 'Puppy house-training crate', href: '/reviews/best-puppy-crate-guide', kind: 'Guide' },
      { title: 'Crate size calculator', href: '/tools/dog-crate-size-calculator', kind: 'Tool' },
    ],
    '/reviews/icrate-vs-impact-guide': [
      { title: 'Dog crates', href: '/reviews/best-dog-crates', kind: 'Comparison' },
      { title: 'Puppy house-training crate', href: '/reviews/best-puppy-crate-guide', kind: 'Guide' },
      { title: 'Crate size calculator', href: '/tools/dog-crate-size-calculator', kind: 'Tool' },
    ],
    '/reviews/best-puppy-crate-guide': [
      { title: 'Dog crates', href: '/reviews/best-dog-crates', kind: 'Comparison' },
      { title: 'Crate size calculator', href: '/tools/dog-crate-size-calculator', kind: 'Tool' },
      { title: 'New puppy checklist', href: '/tools/new-puppy-checklist', kind: 'Tool' },
    ],
    '/reviews/best-dog-beds': [
      { title: 'Big Barker vs Casper', href: '/reviews/big-barker-vs-casper-guide', kind: 'Guide' },
      { title: 'Dog crates', href: '/reviews/best-dog-crates', kind: 'Comparison' },
      { title: 'Joint supplements', href: '/reviews/best-joint-supplements', kind: 'Comparison' },
    ],
    '/reviews/big-barker-vs-casper-guide': [
      { title: 'Dog beds', href: '/reviews/best-dog-beds', kind: 'Comparison' },
      { title: 'Joint supplements', href: '/reviews/best-joint-supplements', kind: 'Comparison' },
      { title: 'Dog crates', href: '/reviews/best-dog-crates', kind: 'Comparison' },
    ],
    '/reviews/best-dog-harnesses': [
      { title: 'Easy Walk vs Front Range', href: '/reviews/easy-walk-vs-front-range-guide', kind: 'Guide' },
      { title: 'Front-clip vs back-clip', href: '/reviews/front-clip-vs-back-clip-guide', kind: 'Guide' },
      { title: 'Harness and collar size', href: '/tools/harness-collar-size', kind: 'Tool' },
    ],
    '/reviews/easy-walk-vs-front-range-guide': [
      { title: 'Dog harnesses', href: '/reviews/best-dog-harnesses', kind: 'Comparison' },
      { title: 'Front-clip vs back-clip', href: '/reviews/front-clip-vs-back-clip-guide', kind: 'Guide' },
      { title: 'Harness and collar size', href: '/tools/harness-collar-size', kind: 'Tool' },
    ],
    '/reviews/front-clip-vs-back-clip-guide': [
      { title: 'Dog harnesses', href: '/reviews/best-dog-harnesses', kind: 'Comparison' },
      { title: 'Harness and collar size', href: '/tools/harness-collar-size', kind: 'Tool' },
    ],
    '/reviews/best-dry-dog-food': [
      { title: 'Royal Canin vs Pro Plan', href: '/reviews/royal-canin-vs-pro-plan-guide', kind: 'Guide' },
      { title: 'Puppy food', href: '/reviews/best-dog-food-for-puppies', kind: 'Comparison' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
    '/reviews/royal-canin-vs-pro-plan-guide': [
      { title: 'Dry dog food', href: '/reviews/best-dry-dog-food', kind: 'Comparison' },
      { title: 'Puppy food', href: '/reviews/best-dog-food-for-puppies', kind: 'Comparison' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
    '/reviews/best-dog-food-for-puppies': [
      { title: 'Dry dog food', href: '/reviews/best-dry-dog-food', kind: 'Comparison' },
      { title: 'Large-breed food', href: '/reviews/best-large-breed-dog-food', kind: 'Comparison' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
    '/reviews/best-dog-food-senior': [
      { title: 'Dry dog food', href: '/reviews/best-dry-dog-food', kind: 'Comparison' },
      { title: 'Joint supplements', href: '/reviews/best-joint-supplements', kind: 'Comparison' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
    '/reviews/best-large-breed-dog-food': [
      { title: 'Puppy food', href: '/reviews/best-dog-food-for-puppies', kind: 'Comparison' },
      { title: 'Joint supplements', href: '/reviews/best-joint-supplements', kind: 'Comparison' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
    '/reviews/best-dog-food-small-breed': [
      { title: 'Dry dog food', href: '/reviews/best-dry-dog-food', kind: 'Comparison' },
      { title: 'Puppy food', href: '/reviews/best-dog-food-for-puppies', kind: 'Comparison' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
    '/reviews/best-dog-food-sensitive-stomach': [
      { title: 'Dry dog food', href: '/reviews/best-dry-dog-food', kind: 'Comparison' },
      { title: 'Fresh food', href: '/reviews/fresh-dog-food-worth-it', kind: 'Guide' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
    '/reviews/fresh-dog-food-worth-it': [
      { title: 'Dry dog food', href: '/reviews/best-dry-dog-food', kind: 'Comparison' },
      { title: 'Sensitive-stomach food', href: '/reviews/best-dog-food-sensitive-stomach', kind: 'Comparison' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
    '/reviews/best-dental-chews': [
      { title: 'Greenies vs Whimzees', href: '/reviews/greenies-vs-whimzees-guide', kind: 'Guide' },
      { title: 'Slow feeder bowls', href: '/reviews/best-slow-feeder-bowls', kind: 'Comparison' },
    ],
    '/reviews/greenies-vs-whimzees-guide': [
      { title: 'Dental chews', href: '/reviews/best-dental-chews', kind: 'Comparison' },
      { title: 'Treats', href: '/nutrition/dog-treats-guide', kind: 'Guide' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
    '/reviews/best-slow-feeder-bowls': [
      { title: 'Dry dog food', href: '/reviews/best-dry-dog-food', kind: 'Comparison' },
      { title: 'Dental chews', href: '/reviews/best-dental-chews', kind: 'Comparison' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
    '/reviews/best-joint-supplements': [
      { title: 'Cosequin vs Dasuquin', href: '/reviews/cosequin-vs-dasuquin-guide', kind: 'Guide' },
      { title: 'Senior dog food', href: '/reviews/best-dog-food-senior', kind: 'Comparison' },
      { title: 'Large-breed food', href: '/reviews/best-large-breed-dog-food', kind: 'Comparison' },
    ],
    '/reviews/cosequin-vs-dasuquin-guide': [
      { title: 'Joint supplements', href: '/reviews/best-joint-supplements', kind: 'Comparison' },
      { title: 'Senior dog food', href: '/reviews/best-dog-food-senior', kind: 'Comparison' },
      { title: 'Dog beds', href: '/reviews/best-dog-beds', kind: 'Comparison' },
    ],
    '/reviews/best-flea-tick-prevention': [
      { title: 'Heartworm prevention', href: '/reviews/best-heartworm-prevention', kind: 'Comparison' },
      { title: 'Wellness exam', href: '/guides/dog-wellness-exam', kind: 'Guide' },
    ],
    '/reviews/best-heartworm-prevention': [
      { title: 'Flea and tick prevention', href: '/reviews/best-flea-tick-prevention', kind: 'Comparison' },
      { title: 'Wellness exam', href: '/guides/dog-wellness-exam', kind: 'Guide' },
    ],
    '/reviews/best-dog-gps-tracker': [
      { title: 'Microchipping', href: '/guides/dog-microchipping', kind: 'Guide' },
      { title: 'Dog harnesses', href: '/reviews/best-dog-harnesses', kind: 'Comparison' },
    ],
    '/guides/dog-microchipping': [
      { title: 'GPS trackers', href: '/reviews/best-dog-gps-tracker', kind: 'Comparison' },
      { title: 'New puppy checklist', href: '/tools/new-puppy-checklist', kind: 'Tool' },
    ],
    '/guides/dog-wellness-exam': [
      { title: 'Body condition score', href: '/tools/dog-body-condition-score', kind: 'Tool' },
      { title: 'Ideal weight calculator', href: '/tools/dog-ideal-weight-calculator', kind: 'Tool' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
    '/guides/dog-first-aid-kit': [
      { title: 'Is this an emergency?', href: '/tools/is-this-a-dog-emergency', kind: 'Tool' },
      { title: 'Grimace scale', href: '/tools/dog-grimace-scale', kind: 'Tool' },
      { title: 'Chocolate toxicity calculator', href: '/tools/dog-chocolate-toxicity-calculator', kind: 'Tool' },
    ],
    '/guides/how-to-take-dogs-temperature': [
      { title: 'Is this an emergency?', href: '/tools/is-this-a-dog-emergency', kind: 'Tool' },
      { title: 'Grimace scale', href: '/tools/dog-grimace-scale', kind: 'Tool' },
    ],
    '/guides/dog-body-condition-score': [
      { title: 'Body condition score tool', href: '/tools/dog-body-condition-score', kind: 'Tool' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
      { title: 'Ideal weight calculator', href: '/tools/dog-ideal-weight-calculator', kind: 'Tool' },
    ],
    '/guides/dog-spay-neuter-timing': [
      { title: 'New puppy checklist', href: '/tools/new-puppy-checklist', kind: 'Tool' },
      { title: 'Puppy first-year budget', href: '/tools/puppy-first-year-budget', kind: 'Tool' },
      { title: 'Puppy food', href: '/reviews/best-dog-food-for-puppies', kind: 'Comparison' },
    ],
    '/health/dog-symptoms-guide': [
      { title: 'Is this an emergency?', href: '/tools/is-this-a-dog-emergency', kind: 'Tool' },
      { title: 'Grimace scale', href: '/tools/dog-grimace-scale', kind: 'Tool' },
      { title: 'Chocolate toxicity calculator', href: '/tools/dog-chocolate-toxicity-calculator', kind: 'Tool' },
    ],
    '/nutrition/dog-treats-guide': [
      { title: 'Dental chews', href: '/reviews/best-dental-chews', kind: 'Comparison' },
      { title: 'Greenies vs Whimzees', href: '/reviews/greenies-vs-whimzees-guide', kind: 'Guide' },
      { title: 'Calorie calculator', href: '/tools/dog-calorie-calculator', kind: 'Tool' },
    ],
  },
  'fish-com': {
    '/reviews/best-aquarium-filters': [
      { title: 'AquaClear 70 vs Fluval 307', href: '/reviews/aquaclear-70-vs-fluval-307-guide', kind: 'Guide' },
      { title: 'HOB vs canister', href: '/reviews/hob-vs-canister-guide', kind: 'Guide' },
      { title: 'Filter GPH calculator', href: '/tools/filter-gph-calculator', kind: 'Tool' },
    ],
    '/reviews/aquaclear-70-vs-fluval-307-guide': [
      { title: 'Aquarium filters', href: '/reviews/best-aquarium-filters', kind: 'Comparison' },
      { title: 'HOB vs canister', href: '/reviews/hob-vs-canister-guide', kind: 'Guide' },
      { title: 'Filter GPH calculator', href: '/tools/filter-gph-calculator', kind: 'Tool' },
    ],
    '/reviews/best-canister-filters': [
      { title: 'Fluval 307 vs Eheim', href: '/reviews/fluval-307-vs-eheim-guide', kind: 'Guide' },
      { title: 'Aquarium filters', href: '/reviews/best-aquarium-filters', kind: 'Comparison' },
      { title: 'Filter GPH calculator', href: '/tools/filter-gph-calculator', kind: 'Tool' },
    ],
    '/reviews/fluval-307-vs-eheim-guide': [
      { title: 'Canister filters', href: '/reviews/best-canister-filters', kind: 'Comparison' },
      { title: 'Aquarium filters', href: '/reviews/best-aquarium-filters', kind: 'Comparison' },
      { title: 'Filter GPH calculator', href: '/tools/filter-gph-calculator', kind: 'Tool' },
    ],
    '/reviews/hob-vs-canister-guide': [
      { title: 'Aquarium filters', href: '/reviews/best-aquarium-filters', kind: 'Comparison' },
      { title: 'Canister filters', href: '/reviews/best-canister-filters', kind: 'Comparison' },
      { title: 'Filter GPH calculator', href: '/tools/filter-gph-calculator', kind: 'Tool' },
    ],
    '/reviews/best-aquarium-heaters': [
      { title: 'Eheim vs Cobalt', href: '/reviews/eheim-vs-cobalt-heater-guide', kind: 'Guide' },
      { title: 'Display-tank heater', href: '/reviews/best-display-tank-heater-guide', kind: 'Guide' },
      { title: 'Heater wattage calculator', href: '/tools/heater-wattage-calculator', kind: 'Tool' },
    ],
    '/reviews/eheim-vs-cobalt-heater-guide': [
      { title: 'Aquarium heaters', href: '/reviews/best-aquarium-heaters', kind: 'Comparison' },
      { title: 'Display-tank heater', href: '/reviews/best-display-tank-heater-guide', kind: 'Guide' },
      { title: 'Heater wattage calculator', href: '/tools/heater-wattage-calculator', kind: 'Tool' },
    ],
    '/reviews/best-display-tank-heater-guide': [
      { title: 'Aquarium heaters', href: '/reviews/best-aquarium-heaters', kind: 'Comparison' },
      { title: 'Heater wattage calculator', href: '/tools/heater-wattage-calculator', kind: 'Tool' },
      { title: 'Tank volume calculator', href: '/tools/aquarium-volume-calculator', kind: 'Tool' },
    ],
    '/reviews/best-aquarium-lighting': [
      { title: 'Hygger vs Fluval', href: '/reviews/hygger-vs-fluval-light-guide', kind: 'Guide' },
      { title: 'Planted-tank fertilizers', href: '/reviews/best-planted-tank-fertilizers', kind: 'Comparison' },
      { title: 'CO2 calculator', href: '/tools/co2-calculator', kind: 'Tool' },
    ],
    '/reviews/hygger-vs-fluval-light-guide': [
      { title: 'Aquarium lighting', href: '/reviews/best-aquarium-lighting', kind: 'Comparison' },
      { title: 'Planted-tank fertilizers', href: '/reviews/best-planted-tank-fertilizers', kind: 'Comparison' },
      { title: 'CO2 calculator', href: '/tools/co2-calculator', kind: 'Tool' },
    ],
    '/reviews/best-planted-tank-fertilizers': [
      { title: 'Easy Green vs Flourish', href: '/reviews/easy-green-vs-flourish-guide', kind: 'Guide' },
      { title: 'Aquarium lighting', href: '/reviews/best-aquarium-lighting', kind: 'Comparison' },
      { title: 'CO2 calculator', href: '/tools/co2-calculator', kind: 'Tool' },
    ],
    '/reviews/easy-green-vs-flourish-guide': [
      { title: 'Planted-tank fertilizers', href: '/reviews/best-planted-tank-fertilizers', kind: 'Comparison' },
      { title: 'Aquarium lighting', href: '/reviews/best-aquarium-lighting', kind: 'Comparison' },
      { title: 'CO2 calculator', href: '/tools/co2-calculator', kind: 'Tool' },
    ],
    '/reviews/best-water-test-kits': [
      { title: 'API vs Salifert', href: '/reviews/api-vs-salifert-guide', kind: 'Guide' },
      { title: 'Water-change calculator', href: '/tools/water-change-calculator', kind: 'Tool' },
      { title: 'Cycling estimator', href: '/tools/aquarium-cycling-estimator', kind: 'Tool' },
    ],
    '/reviews/api-vs-salifert-guide': [
      { title: 'Water test kits', href: '/reviews/best-water-test-kits', kind: 'Comparison' },
      { title: 'Water-change calculator', href: '/tools/water-change-calculator', kind: 'Tool' },
      { title: 'Cycling estimator', href: '/tools/aquarium-cycling-estimator', kind: 'Tool' },
    ],
    '/reviews/best-nano-tanks': [
      { title: 'Tank volume calculator', href: '/tools/aquarium-volume-calculator', kind: 'Tool' },
      { title: 'Stocking calculator', href: '/tools/stocking-calculator', kind: 'Tool' },
      { title: 'Aquarium heaters', href: '/reviews/best-aquarium-heaters', kind: 'Comparison' },
    ],
    '/setup/aquarium-cycling-guide': [
      { title: 'Cycling estimator', href: '/tools/aquarium-cycling-estimator', kind: 'Tool' },
      { title: 'Water test kits', href: '/reviews/best-water-test-kits', kind: 'Comparison' },
      { title: 'Aquarium filters', href: '/reviews/best-aquarium-filters', kind: 'Comparison' },
    ],
    '/health/fish-disease-guide': [
      { title: 'Symptom checker', href: '/tools/fish-disease-symptom-checker', kind: 'Tool' },
      { title: 'Water test kits', href: '/reviews/best-water-test-kits', kind: 'Comparison' },
      { title: 'Water-change calculator', href: '/tools/water-change-calculator', kind: 'Tool' },
    ],
    '/setup/quarantine-tank-guide': [
      { title: 'Symptom checker', href: '/tools/fish-disease-symptom-checker', kind: 'Tool' },
      { title: 'Aquarium heaters', href: '/reviews/best-aquarium-heaters', kind: 'Comparison' },
      { title: 'Water test kits', href: '/reviews/best-water-test-kits', kind: 'Comparison' },
    ],
    '/setup/aquascaping-guide': [
      { title: 'Aquarium lighting', href: '/reviews/best-aquarium-lighting', kind: 'Comparison' },
      { title: 'Planted-tank fertilizers', href: '/reviews/best-planted-tank-fertilizers', kind: 'Comparison' },
      { title: 'CO2 calculator', href: '/tools/co2-calculator', kind: 'Tool' },
    ],
    '/setup/pond-guide': [
      { title: 'Pond volume calculator', href: '/tools/pond-volume-calculator', kind: 'Tool' },
      { title: 'Stocking calculator', href: '/tools/stocking-calculator', kind: 'Tool' },
    ],
    '/setup/water-chemistry-guide': [
      { title: 'Water test kits', href: '/reviews/best-water-test-kits', kind: 'Comparison' },
      { title: 'API vs Salifert', href: '/reviews/api-vs-salifert-guide', kind: 'Guide' },
      { title: 'Water-change calculator', href: '/tools/water-change-calculator', kind: 'Tool' },
    ],
  },
  'horses-com': {
    '/reviews/best-winter-horse-blankets': [
      { title: 'Rambo vs Schneiders', href: '/reviews/rambo-vs-schneiders-guide', kind: 'Guide' },
      { title: 'Rambo vs Rhino', href: '/reviews/rambo-vs-rhino-guide', kind: 'Guide' },
      { title: 'Blanket size calculator', href: '/tools/horse-blanket-size-calculator', kind: 'Tool' },
    ],
    '/reviews/rambo-vs-schneiders-guide': [
      { title: 'Winter blankets', href: '/reviews/best-winter-horse-blankets', kind: 'Comparison' },
      { title: 'Rambo vs Rhino', href: '/reviews/rambo-vs-rhino-guide', kind: 'Guide' },
      { title: 'Blanket size calculator', href: '/tools/horse-blanket-size-calculator', kind: 'Tool' },
    ],
    '/reviews/weatherbeeta-vs-amigo-guide': [
      { title: 'Winter blankets', href: '/reviews/best-winter-horse-blankets', kind: 'Comparison' },
      { title: 'Rambo vs Rhino', href: '/reviews/rambo-vs-rhino-guide', kind: 'Guide' },
      { title: 'Blanket size calculator', href: '/tools/horse-blanket-size-calculator', kind: 'Tool' },
    ],
    '/reviews/rambo-vs-rhino-guide': [
      { title: 'Winter blankets', href: '/reviews/best-winter-horse-blankets', kind: 'Comparison' },
      { title: 'Blanket for a clipped horse', href: '/reviews/best-blanket-for-clipped-horse-guide', kind: 'Guide' },
      { title: 'Blanket size calculator', href: '/tools/horse-blanket-size-calculator', kind: 'Tool' },
    ],
    '/reviews/best-blanket-for-clipped-horse-guide': [
      { title: 'Winter blankets', href: '/reviews/best-winter-horse-blankets', kind: 'Comparison' },
      { title: 'Rambo vs Rhino', href: '/reviews/rambo-vs-rhino-guide', kind: 'Guide' },
      { title: 'Blanket size calculator', href: '/tools/horse-blanket-size-calculator', kind: 'Tool' },
    ],
    '/reviews/best-equine-supplements': [
      { title: 'Cosequin vs Equithrive', href: '/reviews/cosequin-vs-equithrive-guide', kind: 'Guide' },
      { title: 'Cosequin vs Platinum', href: '/reviews/cosequin-vs-platinum-guide', kind: 'Guide' },
      { title: 'Feed calculator', href: '/tools/horse-feed-calculator', kind: 'Tool' },
    ],
    '/reviews/cosequin-vs-equithrive-guide': [
      { title: 'Equine supplements', href: '/reviews/best-equine-supplements', kind: 'Comparison' },
      { title: 'Joint supplements', href: '/supplements/joint-supplements', kind: 'Comparison' },
      { title: 'Feed calculator', href: '/tools/horse-feed-calculator', kind: 'Tool' },
    ],
    '/reviews/ker-eo3-vs-equithrive-guide': [
      { title: 'Equine supplements', href: '/reviews/best-equine-supplements', kind: 'Comparison' },
      { title: 'Cosequin vs Platinum', href: '/reviews/cosequin-vs-platinum-guide', kind: 'Guide' },
      { title: 'Feed calculator', href: '/tools/horse-feed-calculator', kind: 'Tool' },
    ],
    '/reviews/cosequin-vs-platinum-guide': [
      { title: 'Equine supplements', href: '/reviews/best-equine-supplements', kind: 'Comparison' },
      { title: 'Joint supplements', href: '/supplements/joint-supplements', kind: 'Comparison' },
      { title: 'Feed calculator', href: '/tools/horse-feed-calculator', kind: 'Tool' },
    ],
    '/supplements/joint-supplements': [
      { title: 'Cosequin vs Platinum', href: '/reviews/cosequin-vs-platinum-guide', kind: 'Guide' },
      { title: 'Equine supplements', href: '/reviews/best-equine-supplements', kind: 'Comparison' },
      { title: 'Feed calculator', href: '/tools/horse-feed-calculator', kind: 'Tool' },
    ],
    '/tack/saddle-pads': [
      { title: 'Quilted vs sheepskin', href: '/reviews/quilted-vs-sheepskin-pad-guide', kind: 'Guide' },
      { title: 'Saddle fit', href: '/guides/saddle-fit-basics', kind: 'Guide' },
    ],
    '/reviews/quilted-vs-sheepskin-pad-guide': [
      { title: 'Saddle pads', href: '/tack/saddle-pads', kind: 'Comparison' },
      { title: 'Saddle fit', href: '/guides/saddle-fit-basics', kind: 'Guide' },
    ],
    '/tack/halters-and-lead-ropes': [
      { title: 'Bits', href: '/tack/bits-guide', kind: 'Guide' },
      { title: 'Helmets', href: '/tack/helmet-guide', kind: 'Guide' },
      { title: 'Saddle pads', href: '/tack/saddle-pads', kind: 'Comparison' },
    ],
    '/tack/helmet-guide': [
      { title: 'Halters and lead ropes', href: '/tack/halters-and-lead-ropes', kind: 'Comparison' },
      { title: 'Bits', href: '/tack/bits-guide', kind: 'Guide' },
      { title: 'Saddle pads', href: '/tack/saddle-pads', kind: 'Comparison' },
    ],
    '/tack/bits-guide': [
      { title: 'Halters and lead ropes', href: '/tack/halters-and-lead-ropes', kind: 'Comparison' },
      { title: 'Helmets', href: '/tack/helmet-guide', kind: 'Guide' },
      { title: 'Saddle pads', href: '/tack/saddle-pads', kind: 'Comparison' },
    ],
    '/guides/saddle-fit-basics': [
      { title: 'Saddle pads', href: '/tack/saddle-pads', kind: 'Comparison' },
      { title: 'Quilted vs sheepskin', href: '/reviews/quilted-vs-sheepskin-pad-guide', kind: 'Guide' },
      { title: 'Horse size for a rider', href: '/tools/horse-size-for-rider', kind: 'Tool' },
    ],
    '/guides/equine-vaccination-schedule': [
      { title: 'Is this an emergency?', href: '/tools/is-this-a-horse-emergency', kind: 'Tool' },
      { title: 'Grimace scale', href: '/tools/horse-grimace-scale', kind: 'Tool' },
    ],
    '/guides/equine-dental-care': [
      { title: 'Body condition score', href: '/tools/body-condition-score', kind: 'Tool' },
      { title: 'Feed calculator', href: '/tools/horse-feed-calculator', kind: 'Tool' },
      { title: 'Equine supplements', href: '/reviews/best-equine-supplements', kind: 'Comparison' },
    ],
    '/ownership/horse-insurance': [
      { title: 'Cost calculator', href: '/tools/horse-cost-calculator', kind: 'Tool' },
      { title: 'Is this an emergency?', href: '/tools/is-this-a-horse-emergency', kind: 'Tool' },
    ],
    '/care/turnout-vs-stabling': [
      { title: 'Winter blankets', href: '/reviews/best-winter-horse-blankets', kind: 'Comparison' },
      { title: 'Blanket for a clipped horse', href: '/reviews/best-blanket-for-clipped-horse-guide', kind: 'Guide' },
      { title: 'Blanket size calculator', href: '/tools/horse-blanket-size-calculator', kind: 'Tool' },
    ],
  },
  'vets-co': {
    '/reviews/best-pet-insurance': [
      { title: 'Healthy Paws vs Embrace', href: '/reviews/healthy-paws-vs-embrace-guide', kind: 'Guide' },
      { title: 'Trupanion vs Healthy Paws', href: '/reviews/trupanion-vs-healthy-paws-guide', kind: 'Guide' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/reviews/healthy-paws-vs-embrace-guide': [
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'Trupanion vs Healthy Paws', href: '/reviews/trupanion-vs-healthy-paws-guide', kind: 'Guide' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/reviews/trupanion-vs-healthy-paws-guide': [
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'Trupanion vs Embrace', href: '/reviews/trupanion-vs-embrace-guide', kind: 'Guide' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/reviews/trupanion-vs-embrace-guide': [
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'Trupanion vs Healthy Paws', href: '/reviews/trupanion-vs-healthy-paws-guide', kind: 'Guide' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/reviews/spot-vs-manypets-guide': [
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
      { title: 'Reimbursement estimator', href: '/tools/insurance-reimbursement-estimator', kind: 'Tool' },
    ],
    '/reviews/vetster-vs-askvet-guide': [
      { title: 'Telehealth services', href: '/telehealth', kind: 'Comparison' },
      { title: 'ER vs clinic', href: '/tools/er-vs-clinic', kind: 'Tool' },
      { title: 'ER vs urgent care', href: '/guides/er-vs-urgent-care', kind: 'Guide' },
    ],
    '/telehealth': [
      { title: 'AskVet vs Chewy Connect', href: '/reviews/askvet-vs-chewy-connect-guide', kind: 'Guide' },
      { title: 'Vetster vs AskVet', href: '/reviews/vetster-vs-askvet-guide', kind: 'Guide' },
      { title: 'ER vs clinic', href: '/tools/er-vs-clinic', kind: 'Tool' },
    ],
    '/reviews/askvet-vs-chewy-connect-guide': [
      { title: 'Telehealth services', href: '/telehealth', kind: 'Comparison' },
      { title: 'Vetster vs AskVet', href: '/reviews/vetster-vs-askvet-guide', kind: 'Guide' },
      { title: 'ER vs clinic', href: '/tools/er-vs-clinic', kind: 'Tool' },
    ],
    '/insurance/when-to-enroll': [
      { title: 'Lemonade vs Pets Best', href: '/reviews/lemonade-vs-pets-best-guide', kind: 'Guide' },
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/reviews/lemonade-vs-pets-best-guide': [
      { title: 'When to enroll', href: '/insurance/when-to-enroll', kind: 'Guide' },
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/reviews/vetster-vs-chewy-connect-guide': [
      { title: 'Telehealth services', href: '/telehealth', kind: 'Comparison' },
      { title: 'Vetster vs AskVet', href: '/reviews/vetster-vs-askvet-guide', kind: 'Guide' },
      { title: 'ER vs clinic', href: '/tools/er-vs-clinic', kind: 'Tool' },
    ],
    '/insurance/how-pet-insurance-works': [
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'What insurance covers', href: '/insurance/what-pet-insurance-covers', kind: 'Comparison' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/insurance/what-pet-insurance-covers': [
      { title: 'How insurance works', href: '/insurance/how-pet-insurance-works', kind: 'Comparison' },
      { title: 'Deductibles and reimbursement', href: '/insurance/deductibles-reimbursement', kind: 'Comparison' },
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
    ],
    '/insurance/deductibles-reimbursement': [
      { title: 'Reimbursement estimator', href: '/tools/insurance-reimbursement-estimator', kind: 'Tool' },
      { title: 'What insurance covers', href: '/insurance/what-pet-insurance-covers', kind: 'Comparison' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/insurance/wellness-plans-vs-insurance': [
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'What insurance covers', href: '/insurance/what-pet-insurance-covers', kind: 'Comparison' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/guides/emergency-vet-costs': [
      { title: 'Cost of veterinary care', href: '/guides/cost-of-veterinary-care', kind: 'Guide' },
      { title: 'How to afford vet care', href: '/guides/how-to-afford-vet-care', kind: 'Guide' },
      { title: 'ER vs clinic', href: '/tools/er-vs-clinic', kind: 'Tool' },
    ],
    '/guides/cost-of-veterinary-care': [
      { title: 'Emergency vet costs', href: '/guides/emergency-vet-costs', kind: 'Guide' },
      { title: 'How to afford vet care', href: '/guides/how-to-afford-vet-care', kind: 'Guide' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/guides/how-to-afford-vet-care': [
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'Cost of veterinary care', href: '/guides/cost-of-veterinary-care', kind: 'Guide' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/guides/er-vs-urgent-care': [
      { title: 'ER vs clinic', href: '/tools/er-vs-clinic', kind: 'Tool' },
      { title: 'Telehealth services', href: '/telehealth', kind: 'Comparison' },
      { title: 'Vetster vs AskVet', href: '/reviews/vetster-vs-askvet-guide', kind: 'Guide' },
    ],
    '/guides/when-to-go-to-the-vet': [
      { title: 'ER vs urgent care', href: '/guides/er-vs-urgent-care', kind: 'Guide' },
      { title: 'ER vs clinic', href: '/tools/er-vs-clinic', kind: 'Tool' },
      { title: 'Telehealth services', href: '/telehealth', kind: 'Comparison' },
    ],
    '/guides/what-to-expect-at-the-vet': [
      { title: 'ER vs clinic', href: '/tools/er-vs-clinic', kind: 'Tool' },
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/guides/questions-to-ask-your-vet': [
      { title: 'Telehealth services', href: '/telehealth', kind: 'Comparison' },
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'ER vs clinic', href: '/tools/er-vs-clinic', kind: 'Tool' },
    ],
    '/guides/choosing-a-veterinarian': [
      { title: 'Telehealth services', href: '/telehealth', kind: 'Comparison' },
      { title: 'Vetster vs AskVet', href: '/reviews/vetster-vs-askvet-guide', kind: 'Guide' },
      { title: 'ER vs clinic', href: '/tools/er-vs-clinic', kind: 'Tool' },
    ],
    '/health/dental-cleaning-guide': [
      { title: 'What insurance covers', href: '/insurance/what-pet-insurance-covers', kind: 'Comparison' },
      { title: 'Pet insurance', href: '/reviews/best-pet-insurance', kind: 'Comparison' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
    '/health/senior-bloodwork-guide': [
      { title: 'Cost of veterinary care', href: '/guides/cost-of-veterinary-care', kind: 'Guide' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
      { title: 'What insurance covers', href: '/insurance/what-pet-insurance-covers', kind: 'Comparison' },
    ],
    '/health/dog-vaccinations-guide': [
      { title: 'Wellness plans vs insurance', href: '/insurance/wellness-plans-vs-insurance', kind: 'Comparison' },
      { title: 'What insurance covers', href: '/insurance/what-pet-insurance-covers', kind: 'Comparison' },
      { title: 'Is insurance worth it?', href: '/tools/pet-insurance-worth-it-calculator', kind: 'Tool' },
    ],
  },
  'ferret-com': {
    '/reviews/best-ferret-cage': [
      { title: 'Kaytee vs Prevue', href: '/reviews/kaytee-vs-prevue-guide', kind: 'Guide' },
      { title: 'Ferret Nation vs Prevue', href: '/reviews/ferret-nation-vs-prevue-guide', kind: 'Guide' },
      { title: 'Cage size calculator', href: '/tools/cage-size-calculator', kind: 'Tool' },
    ],
    '/reviews/kaytee-vs-prevue-guide': [
      { title: 'Ferret cages', href: '/reviews/best-ferret-cage', kind: 'Comparison' },
      { title: 'Ferret Nation vs Prevue', href: '/reviews/ferret-nation-vs-prevue-guide', kind: 'Guide' },
      { title: 'Cage size calculator', href: '/tools/cage-size-calculator', kind: 'Tool' },
    ],
    '/reviews/kaytee-vs-ferret-nation-guide': [
      { title: 'Ferret cages', href: '/reviews/best-ferret-cage', kind: 'Comparison' },
      { title: 'Ferret Nation vs Prevue', href: '/reviews/ferret-nation-vs-prevue-guide', kind: 'Guide' },
      { title: 'Cage size calculator', href: '/tools/cage-size-calculator', kind: 'Tool' },
    ],
    '/reviews/ferret-nation-vs-prevue-guide': [
      { title: 'Ferret cages', href: '/reviews/best-ferret-cage', kind: 'Comparison' },
      { title: 'Cage size calculator', href: '/tools/cage-size-calculator', kind: 'Tool' },
      { title: 'Ferret litter', href: '/reviews/best-ferret-litter', kind: 'Comparison' },
    ],
    '/reviews/best-ferret-litter': [
      { title: 'Wood vs grass litter', href: '/reviews/wood-vs-grass-litter-guide', kind: 'Guide' },
      { title: 'Paper vs wood litter', href: '/reviews/paper-vs-wood-litter-guide', kind: 'Guide' },
      { title: 'Litter planner', href: '/tools/litter-planner', kind: 'Tool' },
    ],
    '/reviews/wood-vs-grass-litter-guide': [
      { title: 'Ferret litter', href: '/reviews/best-ferret-litter', kind: 'Comparison' },
      { title: 'Paper vs wood litter', href: '/reviews/paper-vs-wood-litter-guide', kind: 'Guide' },
      { title: 'Litter planner', href: '/tools/litter-planner', kind: 'Tool' },
    ],
    '/reviews/paper-vs-grass-litter-guide': [
      { title: 'Ferret litter', href: '/reviews/best-ferret-litter', kind: 'Comparison' },
      { title: 'Paper vs wood litter', href: '/reviews/paper-vs-wood-litter-guide', kind: 'Guide' },
      { title: 'Litter planner', href: '/tools/litter-planner', kind: 'Tool' },
    ],
    '/reviews/paper-vs-wood-litter-guide': [
      { title: 'Ferret litter', href: '/reviews/best-ferret-litter', kind: 'Comparison' },
      { title: 'Litter planner', href: '/tools/litter-planner', kind: 'Tool' },
      { title: 'Ferret cages', href: '/reviews/best-ferret-cage', kind: 'Comparison' },
    ],
    '/reviews/best-ferret-harness': [
      { title: 'Vest vs H-harness', href: '/reviews/vest-vs-h-harness-guide', kind: 'Guide' },
      { title: 'Ferret cages', href: '/reviews/best-ferret-cage', kind: 'Comparison' },
    ],
    '/reviews/vest-vs-h-harness-guide': [
      { title: 'Ferret harnesses', href: '/reviews/best-ferret-harness', kind: 'Comparison' },
      { title: 'Ferret cages', href: '/reviews/best-ferret-cage', kind: 'Comparison' },
      { title: 'Ferret litter', href: '/reviews/best-ferret-litter', kind: 'Comparison' },
    ],
    '/diet/best-ferret-kibble': [
      { title: 'Wysong vs Marshall', href: '/reviews/wysong-vs-marshall-kibble-guide', kind: 'Guide' },
      { title: 'Whole prey vs kibble', href: '/diet/whole-prey-vs-kibble', kind: 'Comparison' },
      { title: 'Food evaluator', href: '/tools/food-evaluator', kind: 'Tool' },
    ],
    '/reviews/wysong-vs-marshall-kibble-guide': [
      { title: 'Ferret kibble', href: '/diet/best-ferret-kibble', kind: 'Comparison' },
      { title: 'Whole prey vs kibble', href: '/diet/whole-prey-vs-kibble', kind: 'Comparison' },
      { title: 'Food evaluator', href: '/tools/food-evaluator', kind: 'Tool' },
    ],
    '/diet/whole-prey-vs-kibble': [
      { title: 'Ferret kibble', href: '/diet/best-ferret-kibble', kind: 'Comparison' },
      { title: 'Wysong vs Marshall', href: '/reviews/wysong-vs-marshall-kibble-guide', kind: 'Guide' },
      { title: 'Food evaluator', href: '/tools/food-evaluator', kind: 'Tool' },
    ],
    '/diet/kit-vs-adult-feeding': [
      { title: 'Ferret kibble', href: '/diet/best-ferret-kibble', kind: 'Comparison' },
      { title: 'Whole prey vs kibble', href: '/diet/whole-prey-vs-kibble', kind: 'Comparison' },
      { title: 'Food evaluator', href: '/tools/food-evaluator', kind: 'Tool' },
    ],
    '/diet/raw-feeding-guide': [
      { title: 'Whole prey vs kibble', href: '/diet/whole-prey-vs-kibble', kind: 'Comparison' },
      { title: 'Food evaluator', href: '/tools/food-evaluator', kind: 'Tool' },
      { title: 'Ferret kibble', href: '/diet/best-ferret-kibble', kind: 'Comparison' },
    ],
    '/care/bathing-and-grooming': [
      { title: 'Ferret litter', href: '/reviews/best-ferret-litter', kind: 'Comparison' },
      { title: 'Litter planner', href: '/tools/litter-planner', kind: 'Tool' },
    ],
    '/ownership/adoption-vs-buying': [
      { title: 'Cost calculator', href: '/tools/cost-calculator', kind: 'Tool' },
      { title: 'Readiness quiz', href: '/tools/readiness-quiz', kind: 'Tool' },
      { title: 'Ferret cages', href: '/reviews/best-ferret-cage', kind: 'Comparison' },
    ],
    '/colors/male-vs-female-ferrets': [
      { title: 'Adoption vs buying', href: '/ownership/adoption-vs-buying', kind: 'Comparison' },
      { title: 'Readiness quiz', href: '/tools/readiness-quiz', kind: 'Tool' },
      { title: 'Cost calculator', href: '/tools/cost-calculator', kind: 'Tool' },
    ],
    '/health/annual-checkup-guide': [
      { title: 'Cost calculator', href: '/tools/cost-calculator', kind: 'Tool' },
      { title: 'Is this an emergency?', href: '/tools/is-this-a-ferret-emergency', kind: 'Tool' },
      { title: 'Grimace scale', href: '/tools/ferret-grimace-scale', kind: 'Tool' },
    ],
  },
}

export function relatedReadsFor(siteId: SiteId, path: string): RelatedRead[] {
  const bare = path.split(/[?#]/)[0]
  const key = bare.length > 1 && bare.endsWith('/') ? bare.slice(0, -1) : bare
  const items = RELATED_READS[siteId]?.[key]
  if (!items || items.length < 2 || items.length > 3) return []
  return items
}
