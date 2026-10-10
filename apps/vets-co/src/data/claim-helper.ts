/**
 * Pet insurance claim helper data.
 *
 * Backs the Vets.co claim helper tool. Every insurer fact below was read on
 * that insurer's own claims or FAQ page on the verifiedOn date. When the
 * official page could not be opened, the insurer is marked verified: false
 * and shows the generic checklist instead. Nothing is filled in from memory.
 *
 * Insurer URLs here are plain source citations, never quote or /go links.
 * Insurer hosts are on the HELD_HOSTS list in packages/config/affiliate-hop.ts,
 * so a page must render sourceUrl as text (not an <a>) until that changes,
 * or held-partner-hrefs.mjs will fail the build.
 *
 * Update cadence: quarterly, or sooner if an insurer changes its claim steps.
 */

export type ClaimInsurerSlug =
  | 'trupanion'
  | 'healthy-paws'
  | 'embrace'
  | 'pets-best'
  | 'lemonade'
  | 'figo'
  | 'nationwide'
  | 'aspca'
  | 'spot'

export type ClaimSubmitMethod = 'app' | 'portal' | 'email' | 'fax' | 'mail'

/** required = always; conditional = only in the case named in the note. */
export type ClaimDocStatus = 'required' | 'conditional' | 'not-required' | 'not-stated'

export interface ClaimDoc {
  label: string
  status: ClaimDocStatus
  note?: string
}

export interface ChecklistItem {
  label: string
  detail: string
}

export interface VerifiedInsurerClaim {
  slug: ClaimInsurerSlug
  name: string
  verified: true
  /** Empty when the official page does not say how to submit. */
  submitMethods: ClaimSubmitMethod[]
  submitNote: string
  email?: string
  fax?: string
  docs: ClaimDoc[]
  /** null when the official page does not state a deadline. */
  deadline: string | null
  /** The day count in that deadline, or null when it is not a fixed count from the visit or invoice. */
  deadlineDays: number | null
  sourceUrl: string
  sourceLabel: string
  verifiedOn: string
}

export interface UnverifiedInsurerClaim {
  slug: ClaimInsurerSlug
  name: string
  verified: false
  checklist: ChecklistItem[]
  deadline: null
  deadlineDays: null
  sourceUrl: null
  sourceLabel: null
  verifiedOn: null
}

export type InsurerClaim = VerifiedInsurerClaim | UnverifiedInsurerClaim

export const CLAIM_HELPER_VERIFIED_ON = '2026-10-10'

/** General guidance, not any one insurer's rules. Used when an insurer is unverified. */
export const GENERIC_CLAIM_CHECKLIST: ChecklistItem[] = [
  {
    label: 'Itemized invoice',
    detail: 'Ask the clinic for an itemized, paid invoice that lists every charge, not a total or an estimate.',
  },
  {
    label: 'Medical records / SOAP notes',
    detail: 'Request the visit notes (often called SOAP notes). First claims often also need prior records.',
  },
  {
    label: 'Claim form',
    detail: 'Many insurers need a signed claim form when you file by email, fax, or mail. App and portal filing often skip it.',
  },
  {
    label: 'File promptly',
    detail: 'Every policy has a filing window. Check your policy documents and file soon after the visit.',
  },
  {
    label: 'Keep copies',
    detail: 'Keep a copy of everything you send, and note the date and claim number.',
  },
]

export const GENERIC_CLAIM_CHECKLIST_LABEL =
  'General guidance. Your policy documents set the exact rules for your claim.'

function unverified(slug: ClaimInsurerSlug, name: string): UnverifiedInsurerClaim {
  return {
    slug,
    name,
    verified: false,
    checklist: GENERIC_CLAIM_CHECKLIST,
    deadline: null,
    deadlineDays: null,
    sourceUrl: null,
    sourceLabel: null,
    verifiedOn: null,
  }
}

export const INSURER_CLAIMS: Record<ClaimInsurerSlug, InsurerClaim> = {
  // Official claims pages returned 403 to the fetcher on 2026-10-10.
  trupanion: unverified('trupanion', 'Trupanion'),

  'healthy-paws': {
    slug: 'healthy-paws',
    name: 'Healthy Paws',
    verified: true,
    submitMethods: ['app', 'portal', 'email', 'fax', 'mail'],
    submitNote: 'Take a photo of the invoice and upload it in the app or online. No forms are needed.',
    email: 'claims@healthypawspetinsurance.com',
    fax: '(888) 228-4129',
    docs: [
      { label: 'Invoice', status: 'required' },
      { label: 'Claim form', status: 'not-required', note: 'The claims page says no forms are necessary.' },
      { label: 'Medical records', status: 'conditional', note: 'Supporting medical documents can be sent by email.' },
    ],
    deadline: 'Within 90 days of the invoice date',
    deadlineDays: 90,
    sourceUrl: 'https://www.healthypawspetinsurance.com/pet-insurance-claims.html',
    sourceLabel: 'Healthy Paws: File a Claim',
    verifiedOn: CLAIM_HELPER_VERIFIED_ON,
  },

  embrace: {
    slug: 'embrace',
    name: 'Embrace',
    verified: true,
    submitMethods: ['portal', 'app', 'email', 'fax', 'mail'],
    submitNote: 'On the website or app, choose Submit a Claim. No claim form is needed there.',
    email: 'claims@embracepetinsurance.com',
    fax: '(800) 238-1042',
    docs: [
      { label: 'Itemized invoice', status: 'required', note: 'It must show every charge.' },
      { label: 'Claim form', status: 'conditional', note: 'Needed for email, fax, or mail.' },
      {
        label: 'Medical records',
        status: 'conditional',
        note: 'Embrace requests prior records to review a first claim. Upload chart notes under Submit Documents, not with the claim.',
      },
    ],
    deadline: 'The policy term plus 60 days after renewal',
    deadlineDays: null,
    sourceUrl: 'https://www.embracepetinsurance.com/claims',
    sourceLabel: 'Embrace: Claims',
    verifiedOn: CLAIM_HELPER_VERIFIED_ON,
  },

  'pets-best': {
    slug: 'pets-best',
    name: 'Pets Best',
    verified: true,
    submitMethods: ['portal', 'email', 'fax', 'mail'],
    submitNote: 'File in the online Customer Account from a desktop or phone. A pre-filled claim form can be downloaded there.',
    email: 'claims@petsbest.com',
    fax: '866-777-1434',
    docs: [
      { label: 'Paid invoice', status: 'required', note: 'Estimates and unpaid invoices are not accepted as proof of payment.' },
      { label: 'Proof of payment', status: 'required', note: 'For example, a credit card receipt.' },
      { label: 'Signed claim form', status: 'required' },
      { label: 'Medical records', status: 'not-stated' },
    ],
    deadline: null,
    deadlineDays: null,
    sourceUrl: 'https://www.petsbest.com/claims',
    sourceLabel: 'Pets Best: Claims',
    verifiedOn: CLAIM_HELPER_VERIFIED_ON,
  },

  // Official claims and FAQ pages returned 403 to the fetcher on 2026-10-10.
  lemonade: unverified('lemonade', 'Lemonade'),

  figo: {
    slug: 'figo',
    name: 'Figo',
    verified: true,
    submitMethods: ['portal'],
    submitNote: 'Log in to Figo Pet Cloud, select the claims icon, answer the questions, and upload the invoice.',
    docs: [
      { label: 'Paid invoice', status: 'required', note: 'It must show a $0 balance.' },
      {
        label: 'Medical records',
        status: 'conditional',
        note: 'A first claim usually needs records from two years before the policy start. Later claims need records for the date of service.',
      },
      { label: 'Claim form', status: 'not-stated' },
    ],
    deadline: null,
    deadlineDays: null,
    sourceUrl: 'https://figopetinsurance.com/blog/figos-ultimate-guide-to-claims',
    sourceLabel: "Figo: Ultimate Guide to Claims",
    verifiedOn: CLAIM_HELPER_VERIFIED_ON,
  },

  // petinsurance.com claims and FAQ pages returned 403; nationwide.com pet page gives no steps.
  nationwide: unverified('nationwide', 'Nationwide'),

  aspca: {
    slug: 'aspca',
    name: 'ASPCA Pet Health Insurance',
    verified: true,
    submitMethods: ['portal', 'app', 'email', 'fax', 'mail'],
    submitNote: 'File in the Member Center or the My Pet Insurance app. Email, fax, or mail need the claim form.',
    docs: [
      { label: 'Itemized invoice', status: 'required' },
      { label: 'Claim form', status: 'conditional', note: 'Needed for email, fax, or mail.' },
      { label: 'Medical records', status: 'not-stated' },
    ],
    deadline: "Within 270 days of your pet's visit to the vet",
    deadlineDays: 270,
    sourceUrl: 'https://www.aspcapetinsurance.com/customer-community/top-questions/',
    sourceLabel: 'ASPCA Pet Health Insurance: Top Questions',
    verifiedOn: CLAIM_HELPER_VERIFIED_ON,
  },

  spot: {
    slug: 'spot',
    name: 'Spot',
    verified: true,
    submitMethods: [],
    submitNote: "The claims page does not list submission channels. Check the Spot member center or app.",
    docs: [
      { label: 'Itemized invoice', status: 'required' },
      {
        label: 'Medical records',
        status: 'not-required',
        note: 'Optional. Uploading them can speed things up; otherwise Spot contacts your vet.',
      },
      { label: 'Claim form', status: 'not-stated' },
    ],
    deadline: '270 days from the day of treatment',
    deadlineDays: 270,
    sourceUrl: 'https://spotpet.com/submitting-a-claim',
    sourceLabel: 'Spot: Submitting a Claim',
    verifiedOn: CLAIM_HELPER_VERIFIED_ON,
  },
}

export interface DeniedReason {
  id: string
  reason: string
  tip: string
  sourceUrl: string
  sourceLabel: string
}

export const DENIED_REASONS: DeniedReason[] = [
  {
    id: 'pre-existing',
    reason: 'Pre-existing condition',
    tip: 'Most insurers exclude pre-existing conditions, and many also exclude hereditary or congenital ones. Read how your policy defines pre-existing before you file.',
    sourceUrl: 'https://content.naic.org/insurance-topics/pet-insurance',
    sourceLabel: 'NAIC: Pet Insurance',
  },
  {
    id: 'waiting-period',
    reason: 'Treatment during the waiting period',
    tip: 'Note your policy start date and each waiting period. ASPCA, for example, applies a 14-day wait to illness and accident coverage.',
    sourceUrl: 'https://www.aspcapetinsurance.com/research-and-compare/pet-insurance-basics/pet-insurance-in-plain-english/',
    sourceLabel: 'ASPCA Pet Health Insurance: Pet Insurance in Plain English',
  },
  {
    id: 'missing-records',
    reason: 'Missing medical records',
    tip: 'First claims often trigger a records review. Ask your clinic to send prior records early so the claim is not held up.',
    sourceUrl: 'https://www.embracepetinsurance.com/claims',
    sourceLabel: 'Embrace: Claims',
  },
  {
    id: 'unpaid-invoice',
    reason: 'Estimate or unpaid invoice sent',
    tip: 'Send the final, paid, itemized invoice. An estimate is not proof of payment.',
    sourceUrl: 'https://www.petsbest.com/claims',
    sourceLabel: 'Pets Best: Claims',
  },
  {
    id: 'excluded-service',
    reason: 'Excluded service',
    tip: 'Healthy Paws, for example, excludes preventive care, grooming, elective procedures, and boarding. Check your exclusions list before booking.',
    sourceUrl: 'https://www.healthypawspetinsurance.com/pet-insurance-coverage-and-exclusions.html',
    sourceLabel: 'Healthy Paws: Coverage & Exclusions',
  },
  {
    id: 'exam-fees',
    reason: 'Exam fee not covered',
    tip: 'Some policies, Healthy Paws among them, do not cover examination fees. Check whether yours does before counting that line in the payout.',
    sourceUrl: 'https://www.healthypawspetinsurance.com/pet-insurance-coverage-and-exclusions.html',
    sourceLabel: 'Healthy Paws: Coverage & Exclusions',
  },
  {
    id: 'late-filing',
    reason: 'Filed after the deadline',
    tip: 'Every policy has a filing window. ASPCA, for example, allows 270 days from the vet visit. File soon after the visit rather than batching invoices.',
    sourceUrl: 'https://www.aspcapetinsurance.com/customer-community/top-questions/',
    sourceLabel: 'ASPCA Pet Health Insurance: Top Questions',
  },
]

export function getInsurerClaim(slug: string): InsurerClaim | undefined {
  return INSURER_CLAIMS[slug as ClaimInsurerSlug]
}
