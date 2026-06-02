/**
 * Husbandry deep-dive [slug] — redirect stub (D7-a dedup).
 *
 * These husbandry topics duplicated the canonical, nav-wired /setup cluster.
 * Each overlapping slug now redirects to its /setup equivalent; topics with no
 * clean /setup spoke (supplementation, quarantine) redirect to the /setup hub.
 *
 * The two unique seasonal/cyclical guides (brumation-guide, shedding-guide) are
 * separate static directories and are intentionally NOT handled here — they
 * remain real pages, linked from the /setup hub.
 */

import { redirect } from 'next/navigation'
import { HusbandryTopics } from '../../../data/husbandry-topics'

// Keep the same static params so the old URLs resolve and 308-redirect.
export function generateStaticParams() {
  return HusbandryTopics.map((t) => ({ slug: t.slug }))
}

// Overlapping husbandry slug → canonical /setup target.
// Slugs with no clean /setup spoke fall back to the /setup hub.
const SETUP_MAP: Record<string, string> = {
  'uvb-lighting': '/setup/uvb-lighting-guide',
  'basking-temperatures': '/setup/temperature-guide',
  'thermoregulation-basics': '/setup/temperature-guide',
  'humidity-management': '/setup/humidity-guide',
  'substrate-selection': '/setup/substrate-guide',
  'vivarium-sizing': '/setup/terrarium-size-guide',
  'calcium-d3-supplementation': '/setup',
  'reptile-quarantine-protocol': '/setup',
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function HusbandryTopicRedirect({ params }: PageProps) {
  const { slug } = await params
  redirect(SETUP_MAP[slug] ?? '/setup')
}
