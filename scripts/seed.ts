#!/usr/bin/env tsx
/**
 * CarloOS Content Seeder
 * Seeds Supabase with structured data for species, products, and site configs.
 *
 * Usage:
 *   npx tsx scripts/seed.ts --species
 *   npx tsx scripts/seed.ts --products
 *   npx tsx scripts/seed.ts --all
 */

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

// ─────────────────────────────────────────────
// SPECIES — Dog.com breeds
// ─────────────────────────────────────────────

const DOG_BREEDS = [
  {
    site_id: 'dog-com',
    slug: 'golden-retriever',
    common_name: 'Golden Retriever',
    scientific_name: 'Canis lupus familiaris',
    aliases: ['goldie', 'golden'],
    category: 'dog-breed',
    subcategory: 'sporting-group',
    care_data: {
      size: 'large',
      weight_range: '55-75 lbs',
      lifespan: '10-12 years',
      exercise_level: 'high',
      grooming_level: 'high',
      trainability: 5,
      family_friendly: 5,
      with_strangers: 5,
      energy_level: 4,
      shedding: 'heavy',
      coat_type: 'double',
    },
    health_conditions: ['cancer', 'hip-dysplasia', 'elbow-dysplasia', 'sas', 'hypothyroidism', 'allergies', 'hemangiosarcoma', 'lymphoma'],
    active: true,
  },
  {
    site_id: 'dog-com',
    slug: 'labrador-retriever',
    common_name: 'Labrador Retriever',
    scientific_name: 'Canis lupus familiaris',
    aliases: ['lab', 'labrador'],
    category: 'dog-breed',
    subcategory: 'sporting-group',
    care_data: {
      size: 'large',
      weight_range: '55-80 lbs',
      lifespan: '10-12 years',
      exercise_level: 'high',
      grooming_level: 'low',
      trainability: 5,
      family_friendly: 5,
      with_strangers: 5,
      energy_level: 5,
      shedding: 'heavy',
      coat_type: 'double',
      colors: ['yellow', 'black', 'chocolate'],
    },
    health_conditions: ['obesity', 'hip-dysplasia', 'elbow-dysplasia', 'eic', 'pra', 'tvd', 'ear-infections'],
    active: true,
  },
  {
    site_id: 'dog-com',
    slug: 'french-bulldog',
    common_name: 'French Bulldog',
    scientific_name: 'Canis lupus familiaris',
    aliases: ['frenchie', 'french bull'],
    category: 'dog-breed',
    subcategory: 'non-sporting',
    care_data: {
      size: 'small',
      weight_range: '20-28 lbs',
      lifespan: '10-12 years',
      exercise_level: 'low',
      grooming_level: 'low',
      trainability: 3,
      family_friendly: 5,
      with_strangers: 4,
      energy_level: 2,
      brachycephalic: true,
      medical_complexity: 'very-high',
    },
    health_conditions: ['boas', 'ivdd', 'skin-fold-infections', 'eye-conditions', 'ear-infections', 'heat-intolerance'],
    active: true,
  },
  {
    site_id: 'dog-com',
    slug: 'german-shepherd',
    common_name: 'German Shepherd',
    scientific_name: 'Canis lupus familiaris',
    aliases: ['gsd', 'alsatian', 'german shepherd dog'],
    category: 'dog-breed',
    subcategory: 'herding-group',
    care_data: {
      size: 'large',
      weight_range: '50-90 lbs',
      lifespan: '9-13 years',
      exercise_level: 'very-high',
      grooming_level: 'moderate',
      trainability: 5,
      family_friendly: 4,
      with_strangers: 2,
      energy_level: 5,
      shedding: 'heavy',
    },
    health_conditions: ['degenerative-myelopathy', 'hip-dysplasia', 'bloat-gdv', 'epi', 'perianal-fistulas'],
    active: true,
  },
  {
    site_id: 'dog-com',
    slug: 'beagle',
    common_name: 'Beagle',
    scientific_name: 'Canis lupus familiaris',
    aliases: [],
    category: 'dog-breed',
    subcategory: 'hound-group',
    care_data: {
      size: 'medium',
      weight_range: '20-30 lbs',
      lifespan: '12-15 years',
      exercise_level: 'moderate',
      grooming_level: 'low',
      trainability: 3,
      family_friendly: 5,
      with_strangers: 5,
      energy_level: 4,
      shedding: 'moderate',
    },
    health_conditions: ['obesity', 'ear-infections', 'hypothyroidism', 'epilepsy'],
    active: true,
  },
  {
    site_id: 'dog-com',
    slug: 'poodle',
    common_name: 'Poodle',
    scientific_name: 'Canis lupus familiaris',
    aliases: ['standard poodle', 'miniature poodle', 'toy poodle'],
    category: 'dog-breed',
    subcategory: 'non-sporting',
    care_data: {
      size: 'varies',
      weight_range: '6-70 lbs (varies by size)',
      lifespan: '12-15 years',
      exercise_level: 'high',
      grooming_level: 'very-high',
      trainability: 5,
      family_friendly: 5,
      with_strangers: 4,
      energy_level: 4,
      hypoallergenic: true,
      shedding: 'minimal',
    },
    health_conditions: ['hip-dysplasia', 'progressive-retinal-atrophy', 'epilepsy', 'addisons-disease', 'bloat'],
    active: true,
  },
]

// ─────────────────────────────────────────────
// SPECIES — Lizard.com reptiles
// ─────────────────────────────────────────────

const REPTILE_SPECIES = [
  {
    site_id: 'lizard-com',
    slug: 'bearded-dragon',
    common_name: 'Bearded Dragon',
    scientific_name: 'Pogona vitticeps',
    aliases: ['beardie', 'inland bearded dragon'],
    category: 'lizard',
    subcategory: 'agamid',
    care_data: {
      experience_level: 'beginner',
      adult_size: '16-24 inches',
      lifespan: '10-15 years',
      enclosure_min: '4x2x2 feet',
      basking_temp: '100-110°F',
      cool_side_temp: '80-85°F',
      humidity: '30-40%',
      uvb_required: true,
      uvb_strength: '10-12%',
      diet: 'omnivore',
      handling: 'excellent',
    },
    health_conditions: ['mbd', 'adenovirus', 'atadenovirus', 'respiratory-infection', 'parasites'],
    active: true,
  },
  {
    site_id: 'lizard-com',
    slug: 'leopard-gecko',
    common_name: 'Leopard Gecko',
    scientific_name: 'Eublepharis macularius',
    aliases: ['leo', 'lep gecko'],
    category: 'lizard',
    subcategory: 'eublepharid',
    care_data: {
      experience_level: 'beginner',
      adult_size: '7-10 inches',
      lifespan: '15-20 years',
      enclosure_min: '20 gallon / 30"x12"x12"',
      warm_hide_temp: '88-92°F',
      cool_side_temp: '72-78°F',
      humidity_ambient: '30-40%',
      humidity_moist_hide: '60-80%',
      uvb_required: false,
      uvb_beneficial: true,
      diet: 'insectivore',
      handling: 'excellent',
      nocturnal: true,
    },
    health_conditions: ['crypto', 'mbd', 'retained-shed', 'respiratory-infection', 'impaction'],
    active: true,
  },
  {
    site_id: 'lizard-com',
    slug: 'ball-python',
    common_name: 'Ball Python',
    scientific_name: 'Python regius',
    aliases: ['royal python', 'bp'],
    category: 'snake',
    subcategory: 'python',
    care_data: {
      experience_level: 'beginner',
      adult_size: '3-5 feet',
      lifespan: '20-30 years',
      enclosure_min: '4x2x2 feet',
      warm_side_temp: '88-92°F',
      cool_side_temp: '76-80°F',
      humidity: '60-80%',
      uvb_required: false,
      uvb_beneficial: true,
      diet: 'rodents (frozen/thawed)',
      handling: 'excellent',
      fasting_normal: true,
    },
    health_conditions: ['respiratory-infection', 'stuck-shed', 'mites', 'ibd', 'obesity'],
    active: true,
  },
  {
    site_id: 'lizard-com',
    slug: 'corn-snake',
    common_name: 'Corn Snake',
    scientific_name: 'Pantherophis guttatus',
    aliases: ['red rat snake'],
    category: 'snake',
    subcategory: 'colubrid',
    care_data: {
      experience_level: 'beginner',
      adult_size: '3-5 feet',
      lifespan: '15-20 years',
      enclosure_min: '4x2x2 feet',
      warm_hide_temp: '85-90°F',
      cool_side_temp: '72-78°F',
      humidity: '40-60%',
      uvb_required: false,
      diet: 'mice (frozen/thawed)',
      handling: 'excellent',
    },
    health_conditions: ['respiratory-infection', 'stuck-shed', 'mites', 'obesity'],
    active: true,
  },
  {
    site_id: 'lizard-com',
    slug: 'crested-gecko',
    common_name: 'Crested Gecko',
    scientific_name: 'Correlophus ciliatus',
    aliases: ['crestie', 'eyelash gecko'],
    category: 'lizard',
    subcategory: 'diplodactylid',
    care_data: {
      experience_level: 'beginner',
      adult_size: '6-9 inches',
      lifespan: '15-20 years',
      enclosure_min: '18"x18"x24" vertical',
      temp_range: '72-80°F (no heat needed)',
      temp_max: '82°F',
      humidity: '60-80%',
      uvb_required: false,
      uvb_beneficial: true,
      diet: 'cgd + insects',
      handling: 'good',
      tail_autotomy: true,
      tail_regrowth: false,
    },
    health_conditions: ['mbd', 'respiratory-infection', 'crypto', 'stuck-shed'],
    active: true,
  },
  {
    site_id: 'lizard-com',
    slug: 'blue-tongue-skink',
    common_name: 'Blue-Tongue Skink',
    scientific_name: 'Tiliqua spp.',
    aliases: ['bts', 'blue tongue', 'bluetongue'],
    category: 'lizard',
    subcategory: 'scincid',
    care_data: {
      experience_level: 'beginner-intermediate',
      adult_size: '18-24 inches',
      lifespan: '15-20 years',
      enclosure_min: '4x2x2 feet',
      basking_temp: '95-105°F',
      cool_side_temp: '75-80°F',
      humidity_varies_by_subspecies: true,
      uvb_required: true,
      uvb_strength: '10-12%',
      diet: 'omnivore (protein + veg + fruit)',
      handling: 'excellent',
    },
    health_conditions: ['mbd', 'respiratory-infection', 'obesity', 'retained-shed'],
    active: true,
  },
]

// ─────────────────────────────────────────────
// PRODUCTS — Cross-site affiliate products
// ─────────────────────────────────────────────

const PRODUCTS = [
  // Pet Insurance
  {
    name: 'Trupanion Pet Insurance',
    brand: 'Trupanion',
    slug: 'trupanion-pet-insurance',
    applicable_sites: ['dog-com', 'vets-co'],
    category: 'pet-insurance',
    description: 'The only major pet insurer with direct vet payment at time of service. 90% reimbursement, no payout limits.',
    expert_score: 9.4,
    affiliate_program: 'trupanion',
    external_url: 'https://trupanion.com',
    specs: {
      reimbursement_rate: '90%',
      annual_limit: 'Unlimited',
      deductible_type: 'Per-condition',
      claims_speed: 'Direct pay at vet',
      wellness_coverage: false,
      waiting_period: '5 days illness',
    },
  },
  {
    name: 'Healthy Paws Pet Insurance',
    brand: 'Healthy Paws',
    slug: 'healthy-paws-pet-insurance',
    applicable_sites: ['dog-com', 'vets-co'],
    category: 'pet-insurance',
    description: 'Best value pet insurance. Fastest claims (~2 days average), no annual or per-incident limits.',
    expert_score: 9.1,
    affiliate_program: 'healthy-paws',
    external_url: 'https://healthypawspetinsurance.com',
    specs: {
      reimbursement_rate: '80-90%',
      annual_limit: 'Unlimited',
      deductible_type: 'Annual',
      claims_speed: '~2 days average',
      wellness_coverage: false,
    },
  },
  // UVB Bulbs (Lizard.com)
  {
    name: 'Arcadia T5 HO 12% Desert Bulb',
    brand: 'Arcadia',
    slug: 'arcadia-t5-ho-12-desert',
    applicable_sites: ['lizard-com'],
    category: 'uvb-lighting',
    description: 'Top-rated T5 HO UVB bulb for desert reptiles. Consistent UVB output verified with Solarmeter 6.5.',
    expert_score: 9.6,
    affiliate_program: 'amazon',
    asin: 'B07XXXXX01',
    specs: {
      type: 'T5 HO fluorescent',
      uvb_percentage: '12%',
      target_species: 'Desert lizards, tortoises',
      replacement_interval: '12 months',
      sizes_available: ['22"', '34"', '46"'],
    },
  },
  {
    name: 'Govee H5053 Temperature & Humidity Sensor',
    brand: 'Govee',
    slug: 'govee-h5053-thermometer',
    applicable_sites: ['lizard-com'],
    category: 'reptile-equipment',
    description: 'Most accurate consumer reptile thermometer tested. WiFi, app alerts, 2 years of data logging.',
    expert_score: 9.5,
    affiliate_program: 'amazon',
    asin: 'B07XXXXX02',
    price_range: '$18-25',
    specs: {
      temp_accuracy: '±0.54°F',
      humidity_accuracy: '±3% RH',
      connectivity: 'WiFi',
      data_logging: '2 years',
      alerts: 'Push notifications',
    },
  },
  // Saddle.com
  {
    name: 'Stubben Roxane Dressage Saddle',
    brand: 'Stubben',
    slug: 'stubben-roxane',
    applicable_sites: ['saddle-com'],
    category: 'saddle-english',
    subcategory: 'dressage',
    description: 'German-made flagship dressage saddle. Quick-Change adjustable tree, exceptional leather, deep seat.',
    expert_score: 9.5,
    affiliate_program: 'sharesale',
    price_range: '$3,200-4,500',
    specs: {
      discipline: 'Dressage',
      tree: 'Quick-Change adjustable',
      flap: 'Straight cut',
      leather: 'German-tanned',
      made_in: 'Germany',
      seat_sizes: '16.5"-18"',
    },
  },
  {
    name: 'Pessoa Gen X Pro Jumping Saddle',
    brand: 'Pessoa',
    slug: 'pessoa-gen-x-pro',
    applicable_sites: ['saddle-com'],
    category: 'saddle-english',
    subcategory: 'jumping',
    description: 'Close-contact jumping saddle ridden by Olympic medalists. Forward flap, minimal bulk.',
    expert_score: 9.2,
    affiliate_program: 'sharesale',
    price_range: '$2,400-3,200',
    specs: {
      discipline: 'Show Jumping',
      flap: 'Forward cut',
      contact: 'Close contact',
      seat_sizes: '16.5"-18"',
    },
  },
]

// ─────────────────────────────────────────────
// Seeder functions
// ─────────────────────────────────────────────

async function seedSpecies() {
  console.log('\n🦎 Seeding species...')
  const allSpecies = [...DOG_BREEDS, ...REPTILE_SPECIES]

  for (const species of allSpecies) {
    const { error } = await supabase.from('species').upsert(species, {
      onConflict: 'site_id,slug',
    })
    if (error) {
      console.error(`  ❌ ${species.slug}:`, error.message)
    } else {
      console.log(`  ✅ ${species.site_id}: ${species.common_name}`)
    }
  }
}

async function seedProducts() {
  console.log('\n📦 Seeding products...')
  for (const product of PRODUCTS) {
    const { error } = await supabase.from('products').upsert(product, {
      onConflict: 'slug',
    })
    if (error) {
      console.error(`  ❌ ${product.slug}:`, error.message)
    } else {
      console.log(`  ✅ ${product.name}`)
    }
  }
}

// ─────────────────────────────────────────────
// CLI
// ─────────────────────────────────────────────

const args = process.argv.slice(2)

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

if (args.includes('--all') || args.includes('--species')) await seedSpecies()
if (args.includes('--all') || args.includes('--products')) await seedProducts()

if (!args.includes('--all') && !args.includes('--species') && !args.includes('--products')) {
  console.log(`
Usage:
  npx tsx scripts/seed.ts --all
  npx tsx scripts/seed.ts --species
  npx tsx scripts/seed.ts --products
  `)
}

console.log('\n✨ Done')
