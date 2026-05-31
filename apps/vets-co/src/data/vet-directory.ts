/**
 * Programmatic SEO data for the /vets/[state]/[city]/[slug] vet directory.
 *
 * SCAFFOLD ONLY — DO NOT TREAT AS REAL LISTINGS.
 *
 * Every VETS entry below is a SAMPLE placeholder for layout/QA purposes only.
 * Phone numbers use the 555 prefix per NANP convention (reserved for
 * fiction / examples / never assigned to live subscribers). Addresses use
 * obviously synthetic street numbers ("100 Example Ave"). Each profile page
 * must render a visible "Sample listing — not a real vet" banner via the
 * disclaimer at the top of the template.
 *
 * Trust-bar (QC-STANDARDS.md §1):
 *  - No fake DVM names. Profile names are obvious placeholders
 *    ("Sample Veterinary Clinic", "Example Animal Hospital").
 *  - The `aboutText` field describes the type of practice generically, never
 *    a fabricated bio of a real clinician.
 *  - Real data ingestion is gated on the data-source decision brief at
 *    ops/handoffs/2026-05-30-vet-directory-data-source-decision.md.
 *
 * STATES + CITIES counts are placeholders representing eventual coverage
 * targets, not actual counts. They are clearly low integers (≤ 3) per state
 * so the UI doesn't imply a populated directory.
 */

export interface StateRow {
  /** USPS two-letter code, uppercase. */
  code: string
  /** Slug (lowercase, dashes). */
  slug: string
  /** Display name. */
  name: string
  /** Number of mock vet records in this state. Real counts arrive after
   * Carlo selects a data source. */
  vetCount: number
}

export interface CityRow {
  /** USPS two-letter state code. */
  state: string
  city: string
  slug: string
  vetCount: number
}

export interface SpecialtyRow {
  slug: string
  name: string
  description: string
}

export interface Vet {
  slug: string
  /** Placeholder display name. Never a real clinician name. */
  name: string
  practiceName: string
  city: string
  /** USPS two-letter state code. */
  state: string
  address: string
  /** 555-prefix placeholder phone — reserved for fiction per NANP. */
  phone: string
  hours: string
  /** Specialty slugs (must exist in SPECIALTIES). */
  specialties: string[]
  acceptedInsurance: string[]
  services: string[]
  aboutText: string
}

// ─── States ─────────────────────────────────────────────────────────────────
// All 50 US states + DC for sitemap completeness. `vetCount` is the number of
// mock VETS records currently in that state — populated for NY/CA/IL, zero
// elsewhere. Real counts populate after the data-source decision lands.
export const STATES: StateRow[] = [
  { code: 'AL', slug: 'alabama', name: 'Alabama', vetCount: 0 },
  { code: 'AK', slug: 'alaska', name: 'Alaska', vetCount: 0 },
  { code: 'AZ', slug: 'arizona', name: 'Arizona', vetCount: 0 },
  { code: 'AR', slug: 'arkansas', name: 'Arkansas', vetCount: 0 },
  { code: 'CA', slug: 'california', name: 'California', vetCount: 2 },
  { code: 'CO', slug: 'colorado', name: 'Colorado', vetCount: 0 },
  { code: 'CT', slug: 'connecticut', name: 'Connecticut', vetCount: 0 },
  { code: 'DE', slug: 'delaware', name: 'Delaware', vetCount: 0 },
  { code: 'DC', slug: 'district-of-columbia', name: 'District of Columbia', vetCount: 0 },
  { code: 'FL', slug: 'florida', name: 'Florida', vetCount: 0 },
  { code: 'GA', slug: 'georgia', name: 'Georgia', vetCount: 0 },
  { code: 'HI', slug: 'hawaii', name: 'Hawaii', vetCount: 0 },
  { code: 'ID', slug: 'idaho', name: 'Idaho', vetCount: 0 },
  { code: 'IL', slug: 'illinois', name: 'Illinois', vetCount: 2 },
  { code: 'IN', slug: 'indiana', name: 'Indiana', vetCount: 0 },
  { code: 'IA', slug: 'iowa', name: 'Iowa', vetCount: 0 },
  { code: 'KS', slug: 'kansas', name: 'Kansas', vetCount: 0 },
  { code: 'KY', slug: 'kentucky', name: 'Kentucky', vetCount: 0 },
  { code: 'LA', slug: 'louisiana', name: 'Louisiana', vetCount: 0 },
  { code: 'ME', slug: 'maine', name: 'Maine', vetCount: 0 },
  { code: 'MD', slug: 'maryland', name: 'Maryland', vetCount: 0 },
  { code: 'MA', slug: 'massachusetts', name: 'Massachusetts', vetCount: 0 },
  { code: 'MI', slug: 'michigan', name: 'Michigan', vetCount: 0 },
  { code: 'MN', slug: 'minnesota', name: 'Minnesota', vetCount: 0 },
  { code: 'MS', slug: 'mississippi', name: 'Mississippi', vetCount: 0 },
  { code: 'MO', slug: 'missouri', name: 'Missouri', vetCount: 0 },
  { code: 'MT', slug: 'montana', name: 'Montana', vetCount: 0 },
  { code: 'NE', slug: 'nebraska', name: 'Nebraska', vetCount: 0 },
  { code: 'NV', slug: 'nevada', name: 'Nevada', vetCount: 0 },
  { code: 'NH', slug: 'new-hampshire', name: 'New Hampshire', vetCount: 0 },
  { code: 'NJ', slug: 'new-jersey', name: 'New Jersey', vetCount: 0 },
  { code: 'NM', slug: 'new-mexico', name: 'New Mexico', vetCount: 0 },
  { code: 'NY', slug: 'new-york', name: 'New York', vetCount: 2 },
  { code: 'NC', slug: 'north-carolina', name: 'North Carolina', vetCount: 0 },
  { code: 'ND', slug: 'north-dakota', name: 'North Dakota', vetCount: 0 },
  { code: 'OH', slug: 'ohio', name: 'Ohio', vetCount: 0 },
  { code: 'OK', slug: 'oklahoma', name: 'Oklahoma', vetCount: 0 },
  { code: 'OR', slug: 'oregon', name: 'Oregon', vetCount: 0 },
  { code: 'PA', slug: 'pennsylvania', name: 'Pennsylvania', vetCount: 0 },
  { code: 'RI', slug: 'rhode-island', name: 'Rhode Island', vetCount: 0 },
  { code: 'SC', slug: 'south-carolina', name: 'South Carolina', vetCount: 0 },
  { code: 'SD', slug: 'south-dakota', name: 'South Dakota', vetCount: 0 },
  { code: 'TN', slug: 'tennessee', name: 'Tennessee', vetCount: 0 },
  { code: 'TX', slug: 'texas', name: 'Texas', vetCount: 0 },
  { code: 'UT', slug: 'utah', name: 'Utah', vetCount: 0 },
  { code: 'VT', slug: 'vermont', name: 'Vermont', vetCount: 0 },
  { code: 'VA', slug: 'virginia', name: 'Virginia', vetCount: 0 },
  { code: 'WA', slug: 'washington', name: 'Washington', vetCount: 0 },
  { code: 'WV', slug: 'west-virginia', name: 'West Virginia', vetCount: 0 },
  { code: 'WI', slug: 'wisconsin', name: 'Wisconsin', vetCount: 0 },
  { code: 'WY', slug: 'wyoming', name: 'Wyoming', vetCount: 0 },
]

// ─── Cities ─────────────────────────────────────────────────────────────────
// Top-20 US metros by population. `vetCount` is the number of mock VETS
// records in that city; only NYC/LA/Chicago are populated in this scaffold.
export const CITIES: CityRow[] = [
  { state: 'NY', city: 'New York', slug: 'new-york-city', vetCount: 2 },
  { state: 'CA', city: 'Los Angeles', slug: 'los-angeles', vetCount: 2 },
  { state: 'IL', city: 'Chicago', slug: 'chicago', vetCount: 2 },
  { state: 'TX', city: 'Houston', slug: 'houston', vetCount: 0 },
  { state: 'AZ', city: 'Phoenix', slug: 'phoenix', vetCount: 0 },
  { state: 'PA', city: 'Philadelphia', slug: 'philadelphia', vetCount: 0 },
  { state: 'TX', city: 'San Antonio', slug: 'san-antonio', vetCount: 0 },
  { state: 'CA', city: 'San Diego', slug: 'san-diego', vetCount: 0 },
  { state: 'TX', city: 'Dallas', slug: 'dallas', vetCount: 0 },
  { state: 'CA', city: 'San Jose', slug: 'san-jose', vetCount: 0 },
  { state: 'TX', city: 'Austin', slug: 'austin', vetCount: 0 },
  { state: 'FL', city: 'Jacksonville', slug: 'jacksonville', vetCount: 0 },
  { state: 'TX', city: 'Fort Worth', slug: 'fort-worth', vetCount: 0 },
  { state: 'OH', city: 'Columbus', slug: 'columbus', vetCount: 0 },
  { state: 'NC', city: 'Charlotte', slug: 'charlotte', vetCount: 0 },
  { state: 'IN', city: 'Indianapolis', slug: 'indianapolis', vetCount: 0 },
  { state: 'CA', city: 'San Francisco', slug: 'san-francisco', vetCount: 0 },
  { state: 'WA', city: 'Seattle', slug: 'seattle', vetCount: 0 },
  { state: 'CO', city: 'Denver', slug: 'denver', vetCount: 0 },
  { state: 'DC', city: 'Washington', slug: 'washington', vetCount: 0 },
]

// ─── Specialties ────────────────────────────────────────────────────────────
// 8 specialty taxonomy entries that map to the city × specialty filter UI.
// These are the user-facing taxonomy filters on the city hub. The deeper
// /specialists/[slug] cluster owns the long-form authority content.
export const SPECIALTIES: SpecialtyRow[] = [
  {
    slug: 'general',
    name: 'General Practice',
    description:
      'Primary-care veterinarians handling wellness exams, vaccines, routine illness, and most chronic conditions. Your first call for any health concern.',
  },
  {
    slug: 'emergency',
    name: 'Emergency & Critical Care',
    description:
      '24-hour emergency hospitals staffed by veterinarians trained in emergency and critical care. For acute illness or injury outside regular hours.',
  },
  {
    slug: 'surgery',
    name: 'Surgery',
    description:
      'Board-certified veterinary surgeons handling orthopedic procedures (TPLO, FHO, THR), soft-tissue surgery, oncologic surgery, and complex fracture repair.',
  },
  {
    slug: 'cardiology',
    name: 'Cardiology',
    description:
      'Board-certified veterinary cardiologists handling heart murmurs, arrhythmias, congenital heart disease, and pre-breeding cardiac clearance.',
  },
  {
    slug: 'oncology',
    name: 'Oncology',
    description:
      'Board-certified veterinary oncologists handling cancer diagnosis, chemotherapy protocols, radiation referrals, and palliative-care planning.',
  },
  {
    slug: 'ophthalmology',
    name: 'Ophthalmology',
    description:
      'Board-certified veterinary ophthalmologists handling eye injuries, cataracts, glaucoma, progressive retinal atrophy, and corneal ulcers not responding to first-line treatment.',
  },
  {
    slug: 'dermatology',
    name: 'Dermatology',
    description:
      'Board-certified veterinary dermatologists handling chronic skin disease, environmental and food allergies, autoimmune skin conditions, and recurrent ear infections.',
  },
  {
    slug: 'dentistry',
    name: 'Dentistry',
    description:
      'Board-certified veterinary dentists handling complex extractions, oral tumors, jaw fractures, advanced periodontal disease, and dental radiograph interpretation.',
  },
]

// ─── Vets (sample placeholder records) ──────────────────────────────────────
// 6 obvious-placeholder records spanning 3 cities × 4 specialties.
// Phone format: (555) NXX-XXXX per NANP fiction-reserved prefix.
// Addresses: synthetic ("Example Ave", "Sample Blvd").
// Practice names: obviously fictional ("Sample Veterinary Clinic").
export const VETS: Vet[] = [
  {
    slug: 'sample-veterinary-clinic-manhattan',
    name: 'Sample Veterinary Clinic of Manhattan',
    practiceName: 'Sample Veterinary Clinic of Manhattan',
    city: 'New York',
    state: 'NY',
    address: '100 Example Avenue, Manhattan, NY 10001',
    phone: '(555) 010-0101',
    hours: 'Mon-Fri 8:00am - 7:00pm, Sat 9:00am - 4:00pm, Sun closed',
    specialties: ['general', 'dentistry'],
    acceptedInsurance: ['Trupanion', 'Healthy Paws', 'Embrace', 'ASPCA Pet Insurance', 'Pets Best'],
    services: [
      'Wellness exams and vaccinations',
      'Routine dental cleanings',
      'Bloodwork and diagnostic imaging',
      'Spay and neuter surgery',
      'Microchipping',
    ],
    aboutText:
      'Sample listing used to validate the directory layout. A typical general-practice + dentistry clinic in a dense urban metro handles wellness care, vaccines, routine dental cleanings, and most non-specialty medical and surgical needs, and refers to nearby specialty hospitals for advanced cases.',
  },
  {
    slug: 'example-animal-hospital-brooklyn-emergency',
    name: 'Example Animal Hospital — Brooklyn (Emergency & Critical Care)',
    practiceName: 'Example Animal Hospital — Brooklyn',
    city: 'New York',
    state: 'NY',
    address: '200 Example Boulevard, Brooklyn, NY 11201',
    phone: '(555) 010-0202',
    hours: 'Open 24 hours, 7 days a week',
    specialties: ['emergency', 'surgery'],
    acceptedInsurance: ['Trupanion', 'Nationwide', 'Embrace', 'ASPCA Pet Insurance', 'Lemonade'],
    services: [
      '24-hour emergency triage',
      'Critical-care hospitalization',
      'Emergency soft-tissue and orthopedic surgery',
      'Diagnostic imaging (CT, ultrasound)',
      'Blood transfusion services',
    ],
    aboutText:
      'Sample listing used to validate the directory layout. A typical 24-hour emergency and critical-care hospital in a dense urban metro accepts walk-ins and primary-care referrals, maintains in-house imaging and surgical capacity, and coordinates with regional board-certified specialists for sub-specialty cases.',
  },
  {
    slug: 'sample-westside-pet-hospital',
    name: 'Sample Westside Pet Hospital',
    practiceName: 'Sample Westside Pet Hospital',
    city: 'Los Angeles',
    state: 'CA',
    address: '300 Example Way, Los Angeles, CA 90025',
    phone: '(555) 010-0303',
    hours: 'Mon-Fri 7:30am - 8:00pm, Sat-Sun 9:00am - 5:00pm',
    specialties: ['general', 'cardiology'],
    acceptedInsurance: ['Trupanion', 'Healthy Paws', 'Embrace', 'Spot Pet Insurance', 'Pets Best'],
    services: [
      'Wellness exams and vaccinations',
      'In-house echocardiography',
      'Cardiac consultations',
      'Routine diagnostic bloodwork',
      'Senior-pet care plans',
    ],
    aboutText:
      'Sample listing used to validate the directory layout. A typical mixed general-practice and cardiology referral clinic in a major metro provides primary care alongside specialist-level cardiac diagnostics, accepting both wellness-visit and referral-only caseloads.',
  },
  {
    slug: 'example-coastal-veterinary-specialists',
    name: 'Example Coastal Veterinary Specialists',
    practiceName: 'Example Coastal Veterinary Specialists',
    city: 'Los Angeles',
    state: 'CA',
    address: '400 Sample Drive, Santa Monica, CA 90404',
    phone: '(555) 010-0404',
    hours: 'Mon-Fri 8:00am - 6:00pm, Sat 9:00am - 2:00pm (referral only)',
    specialties: ['oncology', 'surgery'],
    acceptedInsurance: ['Trupanion', 'Healthy Paws', 'Nationwide', 'Embrace', 'Pets Best', 'ASPCA Pet Insurance'],
    services: [
      'Oncology consultations and chemotherapy',
      'Radiation referral coordination',
      'Oncologic surgery',
      'Soft-tissue and orthopedic surgery',
      'CT and MRI imaging',
    ],
    aboutText:
      'Sample listing used to validate the directory layout. A typical multi-disciplinary specialty hospital in a major metro takes general-practice referrals for oncology and surgical cases, provides chemotherapy on-site, coordinates radiation referrals, and supports complex orthopedic and soft-tissue surgical caseloads.',
  },
  {
    slug: 'sample-loop-pet-clinic',
    name: 'Sample Loop Pet Clinic',
    practiceName: 'Sample Loop Pet Clinic',
    city: 'Chicago',
    state: 'IL',
    address: '500 Example Street, Chicago, IL 60601',
    phone: '(555) 010-0505',
    hours: 'Mon-Fri 8:00am - 7:00pm, Sat 9:00am - 3:00pm, Sun closed',
    specialties: ['general', 'dermatology'],
    acceptedInsurance: ['Trupanion', 'Healthy Paws', 'Embrace', 'Pets Best', 'Lemonade'],
    services: [
      'Wellness exams and vaccinations',
      'Allergy testing and immunotherapy',
      'Dermatology consultations',
      'Routine diagnostic bloodwork',
      'Microchipping',
    ],
    aboutText:
      'Sample listing used to validate the directory layout. A typical general-practice clinic with a dermatology referral track in an urban metro provides primary care alongside allergy testing, immunotherapy management, and dermatology workups, accepting both wellness-visit and referral caseloads.',
  },
  {
    slug: 'example-lakeshore-emergency-vet',
    name: 'Example Lakeshore Emergency Vet',
    practiceName: 'Example Lakeshore Emergency Vet',
    city: 'Chicago',
    state: 'IL',
    address: '600 Sample Parkway, Chicago, IL 60611',
    phone: '(555) 010-0606',
    hours: 'Open 24 hours, 7 days a week',
    specialties: ['emergency', 'cardiology'],
    acceptedInsurance: ['Trupanion', 'Healthy Paws', 'Nationwide', 'Embrace', 'ASPCA Pet Insurance'],
    services: [
      '24-hour emergency triage',
      'Critical-care hospitalization',
      'Emergency cardiac consultations',
      'Echocardiography',
      'Diagnostic imaging (CT, ultrasound)',
    ],
    aboutText:
      'Sample listing used to validate the directory layout. A typical 24-hour emergency hospital with a cardiology service in a major metro accepts walk-ins and primary-care referrals around the clock, maintains in-house critical-care imaging, and coordinates with board-certified cardiologists for ongoing cardiac management.',
  },
]

// ─── Helpers ────────────────────────────────────────────────────────────────

export function getStateBySlug(slug: string): StateRow | undefined {
  return STATES.find((s) => s.slug === slug)
}

export function getCityInState(stateSlug: string, citySlug: string): CityRow | undefined {
  const state = getStateBySlug(stateSlug)
  if (!state) return undefined
  return CITIES.find((c) => c.state === state.code && c.slug === citySlug)
}

export function getCitiesInState(stateCode: string): CityRow[] {
  return CITIES.filter((c) => c.state === stateCode)
}

export function getVetsInCity(stateCode: string, citySlug: string): Vet[] {
  const city = CITIES.find((c) => c.state === stateCode && c.slug === citySlug)
  if (!city) return []
  return VETS.filter((v) => v.state === stateCode && v.city === city.city)
}

export function getVetsInState(stateCode: string): Vet[] {
  return VETS.filter((v) => v.state === stateCode)
}

export function getVetBySlug(stateSlug: string, citySlug: string, vetSlug: string): Vet | undefined {
  const state = getStateBySlug(stateSlug)
  if (!state) return undefined
  const city = CITIES.find((c) => c.state === state.code && c.slug === citySlug)
  if (!city) return undefined
  return VETS.find(
    (v) => v.slug === vetSlug && v.state === state.code && v.city === city.city,
  )
}

export function getSpecialtyBySlug(slug: string): SpecialtyRow | undefined {
  return SPECIALTIES.find((s) => s.slug === slug)
}
