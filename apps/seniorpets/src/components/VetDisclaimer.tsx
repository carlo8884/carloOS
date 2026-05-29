/**
 * VetDisclaimer — surfaces the "Talk to your veterinarian" advisory.
 *
 * Required on every medication page and prominently displayed near
 * dose-range content. Honors QC-STANDARDS §1 trust integrity by being
 * editorial site language (never first-person clinical claims).
 */

interface VetDisclaimerProps {
  variant?: 'standard' | 'urgent'
  className?: string
}

export function VetDisclaimer({
  variant = 'standard',
  className = '',
}: VetDisclaimerProps) {
  const isUrgent = variant === 'urgent'
  const bg = isUrgent
    ? 'bg-[rgba(200,74,42,0.05)] border border-[rgba(200,74,42,0.25)]'
    : 'bg-brand-primary-pale border border-brand-border'

  const accent = isUrgent ? 'text-brand-danger' : 'text-brand-primary-dark'

  return (
    <div
      role="note"
      className={`${bg} rounded-md px-4 py-3.5 my-5 ${className}`.trim()}
    >
      <p className="text-sm leading-relaxed">
        <strong className={accent}>
          Talk to your veterinarian before starting or changing any medication.
        </strong>{' '}
        Dose ranges shown are from published veterinary pharmacology references
        and are for owner reference only. They do not replace an examination,
        bloodwork, or a tailored treatment plan from the veterinarian who knows
        your pet.
      </p>
    </div>
  )
}
