/**
 * PetSupplies.com — affiliate URL builder.
 *
 * Uses the central AFFILIATE_PROGRAMS registry from @carloOS/config/affiliate.
 * Vendors recognized: amazon, chewy, sharesale.
 */

import { AFFILIATE_PROGRAMS } from '@carloOS/config/affiliate'
import type { Product } from './products'

function searchUrlFor(vendor: string, query: string): string {
  const encoded = encodeURIComponent(query)
  switch (vendor) {
    case 'amazon':
      return `https://www.amazon.com/s?k=${encoded}&tag=${AFFILIATE_PROGRAMS.amazon.tag}`
    case 'chewy':
      return `https://www.chewy.com/s?query=${encoded}&utm_source=carloOS&utm_medium=affiliate`
    case 'sharesale':
      return `https://www.shareasale.com/r.cfm?u=carloOS&q=${encoded}`
    default:
      return `https://www.google.com/search?q=${encoded}`
  }
}

export function affiliateHrefFor(p: Product): string {
  // Prefer SKU-targeted URLs where the vendor supports them; fall back to a
  // search query keyed on brand + name to avoid dead links.
  if (p.vendor === 'amazon' && p.vendor_sku && /^B[0-9A-Z]{9}$/.test(p.vendor_sku)) {
    return `https://www.amazon.com/dp/${p.vendor_sku}?tag=${AFFILIATE_PROGRAMS.amazon.tag}`
  }
  if (p.vendor === 'chewy' && p.vendor_sku) {
    return `https://www.chewy.com/p/${p.vendor_sku}?utm_source=carloOS&utm_medium=affiliate`
  }
  const query = [p.brand ?? '', p.name].filter(Boolean).join(' ')
  return searchUrlFor(p.vendor, query)
}
