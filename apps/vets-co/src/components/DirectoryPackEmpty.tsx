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
        No clinic listings yet
      </h2>
      <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
        This page explains how to choose a veterinarian: specialty pathways
        and state notes. It does not list clinics, phone numbers, or ratings.
      </p>
      <p className="text-sm text-brand-text-mid m-0">
        <Link href="/directory" className="text-brand-primary font-bold no-underline hover:underline">
          Open the license directory
        </Link>
        {' '}(empty until a public source and a license number are imported).
      </p>
    </div>
  )
}
