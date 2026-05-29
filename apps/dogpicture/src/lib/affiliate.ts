/**
 * Cross-portfolio affiliate routing.
 *
 * V2 §3.6 / Directive 6: every product preview ends with a soft prompt to
 * the dog.com pet-insurance hub. We route through dog.com so attribution
 * lands in the dog.com affiliate ledger (Lemonade / Trupanion / Healthy
 * Paws share the same comparison page).
 *
 * The vendor argument matches the AFFILIATE_PROGRAMS map in
 * `@carloOS/config/affiliate.ts` so adding new vendors later is a config
 * change, not a code change.
 */

const VENDOR_DESTINATIONS: Record<string, string> = {
  lemonade: 'https://dog.com/reviews/best-pet-insurance?ref=dogpicture&utm_source=dogpicture&utm_medium=cross-portfolio&utm_campaign=portrait-upsell&vendor=lemonade',
  trupanion: 'https://dog.com/reviews/best-pet-insurance?ref=dogpicture&utm_source=dogpicture&utm_medium=cross-portfolio&utm_campaign=portrait-upsell&vendor=trupanion',
  'healthy-paws': 'https://dog.com/reviews/best-pet-insurance?ref=dogpicture&utm_source=dogpicture&utm_medium=cross-portfolio&utm_campaign=portrait-upsell&vendor=healthy-paws',
}

export function affiliateHref(vendor: string): string {
  return VENDOR_DESTINATIONS[vendor] ?? 'https://dog.com/reviews/best-pet-insurance?ref=dogpicture'
}
