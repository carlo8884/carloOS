/**
 * Dog.com — German Shepherd health deep-dive (static breed-folder route).
 *
 * German Shepherd has a static folder under /app/breeds/, so its health child must live
 * here (Next.js static segments take precedence over the dynamic [slug] route).
 * Content + schema live in the shared ../../_health/BreedHealthContent; metadata
 * is literal here so the metadata-policy gate can read a unique title/description.
 */

import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'
import { BreedHealthContent } from '../../_health/BreedHealthContent'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: "German Shepherd Health Issues & Screenings | Dog.com",
  description:
    "German Shepherd health deep-dive: known conditions, recommended screenings, emergency signs, and the lifetime cost reality every owner should know.",
  path: "/breeds/german-shepherd/health",
  type: 'article',
})

export default function GermanShepherdHealthPage() {
  return <BreedHealthContent slug="german-shepherd" />
}
