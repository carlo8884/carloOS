/**
 * FindAVetNearYou — geolocation-prompt entry component.
 *
 * Server component that performs IP-based state detection (stubbed for now —
 * always returns "NY") and renders a deep-link into /vets/[state]. When IP
 * geo is later wired, the stub function is replaced by a real lookup. We
 * deliberately avoid JS-based geolocation prompts (browser permission UI is
 * intrusive and conversion-hostile for a directory entry component).
 *
 * Trust-bar (QC §1):
 *  - The component does not claim location accuracy ("near you" is shown as
 *    an aspirational label, not a measurement).
 *  - If detection fails or returns an unknown state, we fall back to a
 *    generic "Browse by state" CTA — never invent a plausible-looking match.
 */

import Link from 'next/link'
import { STATES } from '../data/vet-directory'

/**
 * Stub IP-to-state resolver. Carlo will wire a real IP-geo service (e.g.
 * Vercel's request geo headers, ipapi.co, or MaxMind) in a follow-up PR.
 * For now this returns "NY" so the directory entry component renders a
 * usable deep-link on every page load.
 */
async function detectStateFromIp(): Promise<string | null> {
  // TODO: replace with real lookup. Possible options:
  //   - Vercel: read `request.geo?.region` in middleware and pass it down
  //   - ipapi.co: GET https://ipapi.co/${ip}/region_code/
  //   - MaxMind GeoIP2: self-hosted DB lookup
  // For now, return the placeholder so the UI shape can be reviewed.
  return 'NY'
}

interface FindAVetNearYouProps {
  /** Optional layout variant — 'compact' for inline use, 'hero' for prominent placement. */
  variant?: 'compact' | 'hero'
}

export async function FindAVetNearYou({ variant = 'compact' }: FindAVetNearYouProps) {
  const stateCode = await detectStateFromIp()
  const detected = stateCode ? STATES.find((s) => s.code === stateCode) : undefined

  if (variant === 'hero') {
    return (
      <div className="bg-brand-primary/5 border border-brand-primary/30 rounded-2xl p-6 sm:p-8">
        <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
          Find a Vet Near You
        </div>
        <h2
          className="font-display font-black text-brand-dark mb-3 mt-0"
          style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
        >
          Start with your state
        </h2>
        {detected ? (
          <>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-4 max-w-2xl">
              Based on your approximate location, we&apos;re showing veterinary directory results
              for <span className="font-bold text-brand-dark">{detected.name}</span>. Browse by
              city and specialty, or pick a different state below.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={`/vets/${detected.slug}`}
                className="bg-brand-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg no-underline hover:opacity-90"
              >
                Browse vets in {detected.name} →
              </Link>
              <Link
                href="/vets"
                className="bg-white border border-brand-border text-brand-dark text-sm font-bold px-5 py-2.5 rounded-lg no-underline hover:border-brand-primary"
              >
                All states
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-4 max-w-2xl">
              Browse the directory by state to find general-practice, emergency, and board-certified
              specialty veterinary care near you.
            </p>
            <Link
              href="/vets"
              className="bg-brand-primary text-white text-sm font-bold px-5 py-2.5 rounded-lg no-underline hover:opacity-90"
            >
              Browse all states →
            </Link>
          </>
        )}
        <FindAVetDisclaimer />
      </div>
    )
  }

  // Compact variant
  return (
    <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
        Find a Vet Near You
      </div>
      {detected ? (
        <Link
          href={`/vets/${detected.slug}`}
          className="text-brand-primary text-sm font-bold no-underline hover:underline block"
        >
          → Browse vets in {detected.name}
        </Link>
      ) : (
        <Link
          href="/vets"
          className="text-brand-primary text-sm font-bold no-underline hover:underline block"
        >
          → Browse the directory by state
        </Link>
      )}
      <FindAVetDisclaimer />
    </div>
  )
}

function FindAVetDisclaimer() {
  return (
    <p className="text-2xs text-brand-text-light italic m-0 mt-3 leading-relaxed">
      Sample directory — listings are placeholders until our verified data source is selected. See
      our editorial standards for current sourcing status.
    </p>
  )
}
