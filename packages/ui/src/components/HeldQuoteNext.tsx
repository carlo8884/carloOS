/**
 * Non-carrier step beside a disabled insurance quote.
 * The quote href and hold stay on the disabled control; this link does not replace them.
 * Held quotes render on Vets.co, where this estimator already exists.
 */
export function HeldQuoteNext({ tone = 'ink' }: { tone?: 'ink' | 'on-color' }) {
  const className =
    tone === 'on-color'
      ? 'inline-block max-w-full whitespace-normal text-left text-sm font-bold text-white underline underline-offset-2'
      : 'inline-block max-w-full whitespace-normal text-left text-sm font-semibold text-brand-primary underline underline-offset-2'
  return (
    <a href="/tools/insurance-reimbursement-estimator" className={className}>
      Estimate reimbursement before comparing plans
    </a>
  )
}
