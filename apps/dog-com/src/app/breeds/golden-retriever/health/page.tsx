/**
 * Dog.com — Golden Retriever health deep-dive (static breed-folder route).
 *
 * Golden Retriever has a static folder under /app/breeds/, so its health child must live
 * here (Next.js static segments take precedence over the dynamic [slug] route).
 * Content + schema live in the shared ../../_health/BreedHealthContent; metadata
 * is literal here so the metadata-policy gate can read a unique title/description.
 */

import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'
import { BreedHealthContent } from '../../_health/BreedHealthContent'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: "Golden Retriever Health Issues & Screenings | Dog.com",
  description:
    "Golden Retriever health deep-dive: known conditions, recommended screenings, emergency signs, and the lifetime cost reality every owner should know.",
  path: "/breeds/golden-retriever/health",
  type: 'article',
})

export default function GoldenRetrieverHealthPage() {
  return <BreedHealthContent slug="golden-retriever" />
}
