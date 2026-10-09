/**
 * Visible last-reviewed date for health pages.
 * The date is the UTC date of the commit that last updated the page.
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

export interface LastReviewedProps {
  /** YYYY-MM-DD commit date in UTC. */
  date: string
}

export function LastReviewed({ date }: LastReviewedProps) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date)
  const label = match
    ? `${MONTHS[Number(match[2]) - 1]} ${Number(match[3])}, ${match[1]}`
    : date

  return (
    <p className="text-sm text-brand-text-light mb-6">
      Last reviewed <time dateTime={date}>{label}</time>.
    </p>
  )
}
