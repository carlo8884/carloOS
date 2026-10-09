/**
 * Visible last-updated date.
 * The date is the UTC day of the page's own last content commit,
 * not a layout, footer, or stamp-only edit.
 */

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export interface LastUpdatedProps {
  /** YYYY-MM-DD content-commit date in UTC. */
  date: string
}

export function LastUpdated({ date }: LastUpdatedProps) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date)
  const label = match
    ? `${MONTHS[Number(match[2]) - 1]} ${Number(match[3])}, ${match[1]}`
    : date

  return (
    <p className="text-sm text-brand-text-light mb-6">
      Last updated <time dateTime={date}>{label}</time>.
    </p>
  )
}
