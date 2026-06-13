/**
 * Dog.com — Beagle health deep-dive (static breed-folder route).
 *
 * Beagle has a static folder under /app/breeds/, so its health child must live
 * here (Next.js static segments take precedence over the dynamic [slug] route).
 * Content + schema live in the shared ../../_health/BreedHealthContent; metadata
 * is literal here so the metadata-policy gate can read a unique title/description.
 */

import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'
import { BreedHealthContent } from '../../_health/BreedHealthContent'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: "Beagle Health Issues & Screenings | Dog.com",
  description:
    "Beagle health deep-dive: known conditions, recommended screenings, emergency signs, and the lifetime cost reality every owner should know.",
  path: "/breeds/beagle/health",
  type: 'article',
})

export default function BeagleHealthPage() {
  return <BreedHealthContent slug="beagle" />
}
