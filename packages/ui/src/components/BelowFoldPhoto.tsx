import type { SiteId } from '@carloOS/config'
import { StockImage } from './StockImage'

/** Existing manifest photos. Ferret has no category-reviews key. */
const KEYS: Partial<Record<SiteId, string>> = {
  'dog-com': 'dog-com:category-reviews',
  'fish-com': 'fish-com:category-reviews',
  'horses-com': 'horses-com:category-reviews',
  'vets-co': 'vets-co:category-reviews',
  'ferret-com': 'ferret-com:care-hero',
}

/**
 * One credited photo after the page copy. It is not priority-loaded, so it
 * stays lazy, and it uses explicit width and height instead of `fill`.
 */
export function BelowFoldPhoto({ siteId }: { siteId: SiteId }) {
  const manifestKey = KEYS[siteId]
  if (!manifestKey) return null
  return <StockImage manifestKey={manifestKey} belowFold />
}
