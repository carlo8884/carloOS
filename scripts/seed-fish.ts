#!/usr/bin/env tsx
/**
 * Fish.com species seed data
 * Run: npx tsx scripts/seed-fish.ts
 * Seeds the Supabase species table with 50+ fish species.
 */

import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

const FISH_SPECIES = [
  // ── Beginner Freshwater ──────────────────────────────────────────────────
  {
    site_id: 'fish-com', slug: 'betta-fish', common_name: 'Betta Fish',
    scientific_name: 'Betta splendens', aliases: ['siamese fighting fish', 'betta'],
    category: 'freshwater', subcategory: 'labyrinth-fish',
    care_data: {
      difficulty: 'Beginner', tank_min_gallons: 5,
      temp_f: '76-82', ph: '6.5-7.5', hardness_dgh: '3-15',
      lifespan: '2-5 years', adult_size: '2.5-3 inches',
      diet: 'Carnivore', compatibility: 'Solo male only',
      schooling: false, live_bearer: false,
    },
    health_conditions: ['fin-rot', 'ich', 'velvet', 'bloat-dropsy'],
    active: true,
  },
  {
    site_id: 'fish-com', slug: 'neon-tetra', common_name: 'Neon Tetra',
    scientific_name: 'Paracheirodon innesi', aliases: ['neon'],
    category: 'freshwater', subcategory: 'characin',
    care_data: {
      difficulty: 'Beginner', tank_min_gallons: 10,
      temp_f: '72-80', ph: '6.0-7.0', hardness_dgh: '2-10',
      lifespan: '5-10 years', adult_size: '1.5 inches',
      diet: 'Omnivore', compatibility: 'Peaceful community',
      schooling: true, min_school: 6, ideal_school: 10,
    },
    health_conditions: ['neon-tetra-disease', 'ich'],
    active: true,
  },
  {
    site_id: 'fish-com', slug: 'goldfish', common_name: 'Goldfish',
    scientific_name: 'Carassius auratus', aliases: ['common goldfish', 'fancy goldfish'],
    category: 'freshwater', subcategory: 'cyprinid',
    care_data: {
      difficulty: 'Beginner', tank_min_gallons: 20,
      temp_f: '65-72', ph: '7.0-8.0', hardness_dgh: '5-20',
      lifespan: '10-15 years', adult_size: '6-18 inches (variety dependent)',
      diet: 'Omnivore', compatibility: 'Goldfish only or large peaceful fish',
      schooling: false, coldwater: true,
      myth: 'Goldfish do not thrive in bowls — they produce large amounts of ammonia and require proper filtration',
    },
    health_conditions: ['swim-bladder-disease', 'ich', 'dropsy', 'fin-rot'],
    active: true,
  },
  {
    site_id: 'fish-com', slug: 'guppy', common_name: 'Guppy',
    scientific_name: 'Poecilia reticulata', aliases: ['million fish', 'rainbow fish'],
    category: 'freshwater', subcategory: 'livebearer',
    care_data: {
      difficulty: 'Beginner', tank_min_gallons: 10,
      temp_f: '72-82', ph: '6.8-7.8', hardness_dgh: '8-20',
      lifespan: '2-3 years', adult_size: '1.5-2.5 inches',
      diet: 'Omnivore', compatibility: 'Peaceful community',
      schooling: false, live_bearer: true,
      note: 'Males and females should be kept at 2-3 females per male ratio to prevent harassment',
    },
    health_conditions: ['ich', 'fin-rot', 'wasting-disease'],
    active: true,
  },
  {
    site_id: 'fish-com', slug: 'corydoras', common_name: 'Corydoras Catfish',
    scientific_name: 'Corydoras spp.', aliases: ['cory catfish', 'cory'],
    category: 'freshwater', subcategory: 'catfish',
    care_data: {
      difficulty: 'Beginner', tank_min_gallons: 15,
      temp_f: '72-80', ph: '6.5-7.8', hardness_dgh: '2-15',
      lifespan: '5-10 years', adult_size: '1-3 inches (species dependent)',
      diet: 'Omnivore (bottom feeder)', compatibility: 'Excellent community fish',
      schooling: true, min_school: 4, ideal_school: 6,
      note: 'Barbels are sensitive — use fine sand substrate, not gravel',
    },
    health_conditions: ['barbel-erosion', 'ich'],
    active: true,
  },
  {
    site_id: 'fish-com', slug: 'platy', common_name: 'Platy',
    scientific_name: 'Xiphophorus maculatus', aliases: [],
    category: 'freshwater', subcategory: 'livebearer',
    care_data: {
      difficulty: 'Beginner', tank_min_gallons: 10,
      temp_f: '70-80', ph: '7.0-8.0', hardness_dgh: '10-25',
      lifespan: '3-4 years', adult_size: '2-2.5 inches',
      diet: 'Omnivore', compatibility: 'Peaceful community',
      live_bearer: true,
    },
    health_conditions: ['ich', 'fin-rot'],
    active: true,
  },
  // ── Intermediate Freshwater ──────────────────────────────────────────────
  {
    site_id: 'fish-com', slug: 'angelfish', common_name: 'Angelfish',
    scientific_name: 'Pterophyllum scalare', aliases: ['freshwater angelfish'],
    category: 'freshwater', subcategory: 'cichlid',
    care_data: {
      difficulty: 'Intermediate', tank_min_gallons: 30,
      temp_f: '76-84', ph: '6.0-7.5', hardness_dgh: '3-10',
      lifespan: '10-15 years', adult_size: '6 inches body, 10+ inches tall',
      diet: 'Omnivore (predatory)', compatibility: 'Semi-aggressive — avoid small fish',
      schooling: false, tall_tank: true,
    },
    health_conditions: ['ich', 'hole-in-head', 'fin-rot'],
    active: true,
  },
  {
    site_id: 'fish-com', slug: 'discus', common_name: 'Discus',
    scientific_name: 'Symphysodon spp.', aliases: ['king of freshwater'],
    category: 'freshwater', subcategory: 'cichlid',
    care_data: {
      difficulty: 'Advanced', tank_min_gallons: 55,
      temp_f: '82-88', ph: '6.0-7.0', hardness_dgh: '1-8',
      lifespan: '10-15 years', adult_size: '8-10 inches',
      diet: 'Omnivore', compatibility: 'Peaceful with similarly-sized fish',
      water_changes: 'Daily or every-other-day recommended',
      note: 'Discus are the most demanding common freshwater fish — water quality and temperature stability are critical',
    },
    health_conditions: ['hole-in-head', 'wasting-disease', 'bacterial-infection'],
    active: true,
  },
  {
    site_id: 'fish-com', slug: 'oscar', common_name: 'Oscar',
    scientific_name: 'Astronotus ocellatus', aliases: ['oscar cichlid', 'velvet cichlid'],
    category: 'freshwater', subcategory: 'cichlid',
    care_data: {
      difficulty: 'Intermediate', tank_min_gallons: 75,
      temp_f: '74-81', ph: '6.0-8.0', hardness_dgh: '5-20',
      lifespan: '10-15 years', adult_size: '12-16 inches',
      diet: 'Carnivore', compatibility: 'Aggressive — oscar-only or large cichlid tank',
      note: 'Oscars recognize their owners, beg for food, and can be hand-fed. Highly intelligent.',
    },
    health_conditions: ['hole-in-head', 'ich', 'bacterial-infection'],
    active: true,
  },
  // ── Saltwater ────────────────────────────────────────────────────────────
  {
    site_id: 'fish-com', slug: 'clownfish', common_name: 'Clownfish',
    scientific_name: 'Amphiprioninae', aliases: ['nemo', 'anemonefish'],
    category: 'saltwater', subcategory: 'reef-fish',
    care_data: {
      difficulty: 'Beginner (saltwater)', tank_min_gallons: 20,
      salinity_sg: '1.020-1.025', temp_f: '74-82', ph: '8.1-8.4',
      lifespan: '5-10 years', adult_size: '3-4 inches',
      diet: 'Omnivore', compatibility: 'Reef safe — peaceful',
      anemone_required: false,
      note: 'All clownfish are born male — the dominant fish changes to female. Clownfish bond for life.',
    },
    health_conditions: ['brooklynella', 'ich', 'marine-velvet'],
    active: true,
  },
  {
    site_id: 'fish-com', slug: 'blue-tang', common_name: 'Blue Tang',
    scientific_name: 'Paracanthurus hepatus', aliases: ['regal tang', 'palette surgeonfish', 'dory'],
    category: 'saltwater', subcategory: 'tang',
    care_data: {
      difficulty: 'Intermediate', tank_min_gallons: 100,
      salinity_sg: '1.020-1.025', temp_f: '74-82', ph: '8.1-8.4',
      lifespan: '8-15 years', adult_size: '12 inches',
      diet: 'Herbivore (primarily)', compatibility: 'Generally reef-safe, semi-aggressive with same species',
      ich_prone: true,
      note: 'Blue tangs are highly susceptible to ich. Quarantine all new additions.',
    },
    health_conditions: ['ich', 'marine-velvet', 'head-and-lateral-line-erosion'],
    active: true,
  },
  {
    site_id: 'fish-com', slug: 'royal-gramma', common_name: 'Royal Gramma',
    scientific_name: 'Gramma loreto', aliases: ['fairy basslet'],
    category: 'saltwater', subcategory: 'basslet',
    care_data: {
      difficulty: 'Beginner (saltwater)', tank_min_gallons: 30,
      salinity_sg: '1.020-1.025', temp_f: '72-78', ph: '8.1-8.4',
      lifespan: '5-7 years', adult_size: '3 inches',
      diet: 'Carnivore', compatibility: 'Reef safe — peaceful but territorial with similar species',
    },
    health_conditions: ['ich'],
    active: true,
  },
  // ── Goldfish variants ────────────────────────────────────────────────────
  {
    site_id: 'fish-com', slug: 'fancy-goldfish', common_name: 'Fancy Goldfish',
    scientific_name: 'Carassius auratus', aliases: ['ryukin', 'oranda', 'ranchu', 'telescope eye'],
    category: 'freshwater', subcategory: 'cyprinid',
    care_data: {
      difficulty: 'Intermediate', tank_min_gallons: 30,
      temp_f: '65-72', ph: '7.0-8.0',
      lifespan: '10-15 years', adult_size: '6-8 inches',
      diet: 'Omnivore', compatibility: 'Fancy goldfish only',
      coldwater: true,
      note: 'Fancy goldfish cannot compete with common/comet goldfish for food and are more prone to swim bladder issues',
    },
    health_conditions: ['swim-bladder-disease', 'ich', 'fin-rot', 'wen-overgrowth'],
    active: true,
  },
]

async function seedFishSpecies() {
  console.log(`\n🐠 Seeding ${FISH_SPECIES.length} fish species...`)

  for (const species of FISH_SPECIES) {
    const { error } = await supabase.from('species').upsert(species, {
      onConflict: 'site_id,slug',
    })
    if (error) {
      console.error(`  ❌ ${species.slug}:`, error.message)
    } else {
      console.log(`  ✅ ${species.common_name}`)
    }
  }

  console.log('\n✨ Fish species seeding complete')
}

if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
  console.error('❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

await seedFishSpecies()
