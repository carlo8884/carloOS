/**
 * Husbandry hub — redirect stub (D7-a dedup).
 *
 * The husbandry hub overlapped the canonical, nav-wired /setup hub. The
 * overlapping husbandry topics now live under /setup; this hub redirects there.
 * The two unique seasonal/cyclical guides (/husbandry/brumation-guide and
 * /husbandry/shedding-guide) remain real pages and are linked from /setup.
 */

import { redirect } from 'next/navigation'

export default function HusbandryHubPage() {
  redirect('/setup')
}
