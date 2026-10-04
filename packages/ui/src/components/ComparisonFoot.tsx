const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

/** Date under a comparison table. `updated` is a git commit date, YYYY-MM-DD. */
export function ComparisonFoot({ updated }: { updated: string }) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(updated)
  const label = match
    ? `${MONTHS[Number(match[2]) - 1]} ${Number(match[3])}, ${match[1]}`
    : updated
  return (
    <p className="text-xs text-brand-text-light mt-3 mb-8">
      Last updated <time dateTime={updated}>{label}</time>.{' '}
      <a href="/how-we-pick" className="text-brand-primary font-semibold no-underline hover:underline">
        How we pick
      </a>
    </p>
  )
}
