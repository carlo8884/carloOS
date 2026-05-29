/**
 * Vets.co Reviewer Directory — PLACEHOLDER profiles.
 *
 * Trust-hub foundation per MONETIZATION-ARCHITECT.md §5.2 (Vets.co disposition)
 * and S7 (Universal Directory Engine).
 *
 * QC-STANDARDS.md §1: We DO NOT fabricate DVM credentials. Every slot below
 * is an unfilled template that Carlo will hand to a real veterinarian for
 * review and activation. No real-sounding names. No claimed credentials.
 * No claimed years of experience. The structure exists; the people don't
 * yet.
 *
 * Visibility is gated behind NEXT_PUBLIC_SHOW_REVIEWERS (defaults FALSE).
 * Same pattern A3 established for the seniorpets reviewer system. When
 * the env var is false:
 *   - /reviewers shows a "we're building our network" CTA pointing at
 *     reviewers@vets.co
 *   - /reviewers/[slug] redirects to /reviewers
 *   - Sitemap omits reviewer URLs (see app/sitemap.ts)
 *
 * To activate a slot:
 *   1. Recruit a real DVM in the target city/specialty.
 *   2. Replace placeholderName, specialty, credentials, years_experience,
 *      bio, and education with the reviewer's verified details.
 *   3. Set status: 'active' and is_visible: true.
 *   4. Set NEXT_PUBLIC_SHOW_REVIEWERS=true in the vets-co deploy env.
 */

export type ReviewerSpecialty =
  | 'general-practice'
  | 'emergency'
  | 'internal-medicine'
  | 'surgery'
  | 'cardiology'
  | 'oncology'
  | 'dermatology'
  | 'ophthalmology'
  | 'behavior'
  | 'exotics'
  | 'dental'
  | 'anesthesia'
  | 'neurology'
  | 'orthopedic'
  | 'nutrition'
  | 'dentistry'
  | 'integrative-medicine'
  | 'emergency-critical-care'
  | 'theriogenology'
  | 'equine'

export interface ReviewerCredential {
  /** Verified board certification (e.g., DACVIM, DACVECC) or licensure note. */
  label: string
  /** Issuing body (e.g., American College of Veterinary Internal Medicine). */
  issuer: string
  /** Year achieved — number only, no fabricated dates. */
  year?: number
}

export interface ReviewerEducation {
  institution: string
  degree: string
  year?: number
}

export interface ReviewerSlot {
  /** Stable URL slug: reviewer-001 through reviewer-020. */
  slug: string
  /** Generic placeholder until a real reviewer is recruited. */
  placeholderName: string
  /** Target metro for this slot. */
  city: string
  /** Two-letter state abbreviation. */
  state_abbr: string
  /** Full state name. */
  state: string
  /**
   * Suggested specialty fits for this slot — the recruitment vector.
   * The first entry is the primary target; remaining entries are
   * acceptable alternates if the primary recruit doesn't land.
   */
  specialty_options: ReviewerSpecialty[]
  /**
   * Generic third-person bio template. Placeholder text only.
   * Replace verbatim when a real reviewer is recruited.
   */
  bio: string
  /** Empty until a real reviewer's credentials are verified. */
  credentials: ReviewerCredential[]
  /** Empty until a real reviewer's education is verified. */
  education: ReviewerEducation[]
  /** Null until a real reviewer's tenure is verified. */
  years_experience: number | null
  /** Pending until activated. */
  status: 'pending' | 'active'
  /**
   * Per-slot kill switch. False by default; even when the global env
   * var is true, individual slots stay hidden until is_visible flips.
   */
  is_visible: boolean
}

/**
 * Generic, third-person, ~200-word placeholder bio. Intentionally generic —
 * mentions no real practices, no real specializations, no claimed outcomes.
 * Replace this entire block when a real reviewer is recruited.
 */
const PLACEHOLDER_BIO =
  'This reviewer slot is open and awaiting a verified veterinary professional. ' +
  'Vets.co maintains an independent network of credentialed veterinarians who ' +
  'volunteer their time to review clinical content for accuracy, currency, ' +
  'and alignment with current professional guidelines (AVMA, AAHA, ACVIM, and ' +
  'specialty-college consensus papers). A reviewer placed in this slot will ' +
  'be matched to a city and specialty where pet owners most often search for ' +
  'guidance, and their reviews will be displayed as "Reviewed by Dr. [Name] ' +
  '(Vets.co)" on the relevant articles across the CarloOS portfolio. ' +
  'Every reviewer profile, once activated, will include the reviewer\'s ' +
  'verified credentials, the specialty college that issued them, the year ' +
  'the certification was achieved, education, years of clinical practice, ' +
  'and the topic areas they have agreed to cover. Vets.co does not pay ' +
  'reviewers for endorsements and does not allow commercial influence over ' +
  'the editorial review process. To inquire about filling this slot, write ' +
  'to reviewers@vets.co with your state license number and a brief note on ' +
  'the topic areas you would like to cover.'

/**
 * Build a uniform placeholder slot. All twenty slots share the same template;
 * only city/state/specialty intent vary.
 */
function makeSlot(args: {
  index: number
  city: string
  state: string
  state_abbr: string
  specialty_options: ReviewerSpecialty[]
}): ReviewerSlot {
  const number = String(args.index).padStart(3, '0')
  return {
    slug: `reviewer-${number}`,
    placeholderName: `Reviewer Pending — Slot ${number}`,
    city: args.city,
    state: args.state,
    state_abbr: args.state_abbr,
    specialty_options: args.specialty_options,
    bio: PLACEHOLDER_BIO,
    credentials: [],
    education: [],
    years_experience: null,
    status: 'pending',
    is_visible: false,
  }
}

/**
 * Twenty placeholder reviewer slots, one per target metro.
 * Specialty intent is set by metro: NYC leans exotics + ER, Chicago leans
 * orthopedics + cardiology, Houston leans heat/tropical exposure, etc.
 */
export const Reviewers: ReviewerSlot[] = [
  makeSlot({ index: 1, city: 'New York', state: 'New York', state_abbr: 'NY',
    specialty_options: ['exotics', 'emergency-critical-care', 'internal-medicine'] }),
  makeSlot({ index: 2, city: 'Los Angeles', state: 'California', state_abbr: 'CA',
    specialty_options: ['dermatology', 'integrative-medicine', 'general-practice'] }),
  makeSlot({ index: 3, city: 'Chicago', state: 'Illinois', state_abbr: 'IL',
    specialty_options: ['orthopedic', 'surgery', 'cardiology'] }),
  makeSlot({ index: 4, city: 'Houston', state: 'Texas', state_abbr: 'TX',
    specialty_options: ['emergency-critical-care', 'internal-medicine', 'equine'] }),
  makeSlot({ index: 5, city: 'Phoenix', state: 'Arizona', state_abbr: 'AZ',
    specialty_options: ['emergency-critical-care', 'dermatology', 'general-practice'] }),
  makeSlot({ index: 6, city: 'Philadelphia', state: 'Pennsylvania', state_abbr: 'PA',
    specialty_options: ['internal-medicine', 'oncology', 'cardiology'] }),
  makeSlot({ index: 7, city: 'San Antonio', state: 'Texas', state_abbr: 'TX',
    specialty_options: ['general-practice', 'theriogenology', 'equine'] }),
  makeSlot({ index: 8, city: 'San Diego', state: 'California', state_abbr: 'CA',
    specialty_options: ['ophthalmology', 'general-practice', 'integrative-medicine'] }),
  makeSlot({ index: 9, city: 'Dallas', state: 'Texas', state_abbr: 'TX',
    specialty_options: ['cardiology', 'surgery', 'oncology'] }),
  makeSlot({ index: 10, city: 'San Jose', state: 'California', state_abbr: 'CA',
    specialty_options: ['neurology', 'internal-medicine', 'general-practice'] }),
  makeSlot({ index: 11, city: 'Austin', state: 'Texas', state_abbr: 'TX',
    specialty_options: ['behavior', 'integrative-medicine', 'general-practice'] }),
  makeSlot({ index: 12, city: 'Jacksonville', state: 'Florida', state_abbr: 'FL',
    specialty_options: ['emergency-critical-care', 'general-practice', 'dermatology'] }),
  makeSlot({ index: 13, city: 'Fort Worth', state: 'Texas', state_abbr: 'TX',
    specialty_options: ['equine', 'theriogenology', 'orthopedic'] }),
  makeSlot({ index: 14, city: 'Columbus', state: 'Ohio', state_abbr: 'OH',
    specialty_options: ['internal-medicine', 'oncology', 'general-practice'] }),
  makeSlot({ index: 15, city: 'Indianapolis', state: 'Indiana', state_abbr: 'IN',
    specialty_options: ['surgery', 'orthopedic', 'general-practice'] }),
  makeSlot({ index: 16, city: 'Charlotte', state: 'North Carolina', state_abbr: 'NC',
    specialty_options: ['cardiology', 'internal-medicine', 'general-practice'] }),
  makeSlot({ index: 17, city: 'San Francisco', state: 'California', state_abbr: 'CA',
    specialty_options: ['oncology', 'internal-medicine', 'integrative-medicine'] }),
  makeSlot({ index: 18, city: 'Seattle', state: 'Washington', state_abbr: 'WA',
    specialty_options: ['exotics', 'integrative-medicine', 'general-practice'] }),
  makeSlot({ index: 19, city: 'Denver', state: 'Colorado', state_abbr: 'CO',
    specialty_options: ['orthopedic', 'surgery', 'nutrition'] }),
  makeSlot({ index: 20, city: 'Boston', state: 'Massachusetts', state_abbr: 'MA',
    specialty_options: ['neurology', 'internal-medicine', 'dentistry'] }),
]

/** Look up a reviewer slot by its URL slug. */
export function findReviewer(slug: string): ReviewerSlot | undefined {
  return Reviewers.find((r) => r.slug === slug)
}

/**
 * Global visibility gate. The reviewer directory stays hidden until Carlo
 * sets NEXT_PUBLIC_SHOW_REVIEWERS=true at deploy time. This is independent
 * of the per-slot is_visible flag; both must be true for a profile to
 * render. Read with no-arg call: reviewersGloballyVisible().
 */
export function reviewersGloballyVisible(): boolean {
  return process.env.NEXT_PUBLIC_SHOW_REVIEWERS === 'true'
}

/** Human-readable specialty label. */
export function specialtyLabel(s: ReviewerSpecialty): string {
  switch (s) {
    case 'general-practice': return 'General Practice'
    case 'emergency': return 'Emergency'
    case 'internal-medicine': return 'Internal Medicine'
    case 'surgery': return 'Surgery'
    case 'cardiology': return 'Cardiology'
    case 'oncology': return 'Oncology'
    case 'dermatology': return 'Dermatology'
    case 'ophthalmology': return 'Ophthalmology'
    case 'behavior': return 'Behavior'
    case 'exotics': return 'Exotics'
    case 'dental': return 'Dental'
    case 'anesthesia': return 'Anesthesia'
    case 'neurology': return 'Neurology'
    case 'orthopedic': return 'Orthopedic Surgery'
    case 'nutrition': return 'Nutrition'
    case 'dentistry': return 'Dentistry'
    case 'integrative-medicine': return 'Integrative Medicine'
    case 'emergency-critical-care': return 'Emergency & Critical Care'
    case 'theriogenology': return 'Theriogenology'
    case 'equine': return 'Equine'
  }
}
