import Link from 'next/link'
import listings from '../data/directory-listings.json'

/**
 * Honest empty-state for the license-board pack.
 * On main the pack is []. Do not invent DVM names, phones, or ratings.
 * When a real import lands, this box hides and /directory lists the stubs.
 */
export function DirectoryPackEmpty() {
  if (Array.isArray(listings) && listings.length > 0) return null

  return (
    <div className="border border-brand-border rounded-xl p-6 bg-brand-surface mb-10">
      <h2 className="font-display text-xl font-bold text-brand-dark mt-0 mb-2">
        No licensed-clinic listings imported
      </h2>
      <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
        The Vets.co state-board pack is empty on purpose. This page is a
        how-to-choose guide — specialty pathways and state notes — not a live
        DVM list. No clinic names, phone numbers, or star ratings are invented
        here.
      </p>
      <p className="text-sm text-brand-text-mid m-0">
        <Link href="/directory" className="text-brand-primary font-bold no-underline hover:underline">
          Open the license directory
        </Link>
        {' '}(also empty until a public source URL and license number are imported).
      </p>
    </div>
  )
}
