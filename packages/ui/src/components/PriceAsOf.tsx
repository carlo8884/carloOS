/**
 * Visible date for prices already on the page. The date is the latest git
 * change to a dollar figure in that file (see scripts/ci/price-as-of.mjs).
 * This component does not invent or refresh a number.
 */
export function PriceAsOf({ date, tone = 'light' }: { date: string; tone?: 'light' | 'dark' }) {
  const cls = tone === 'dark'
    ? 'mb-4 text-xs leading-relaxed text-white/80'
    : 'mb-4 text-xs leading-relaxed text-brand-text-mid'
  return (
    <p data-price-as-of={date} className={cls}>
      Prices on this page are as of {date}.
    </p>
  )
}
