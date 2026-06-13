/**
 * Dog.com — Breed-specific HEALTH deep-dive (dynamic template route).
 *
 * Renders /breeds/<slug>/health for breeds served by the dynamic [slug] breed
 * template (i.e. have NO static folder under /app/breeds/) AND carry a
 * breed-health record. Static-folder breeds get their own
 * /breeds/<breed>/health/page.tsx instead — Next.js static segments take
 * precedence over [slug], so a dynamic child of a static segment is never
 * reached. (Same architecture as /breeds/<slug>/insurance.)
 *
 * Content + schema live in the shared ../../_health/BreedHealthContent.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@carloOS/ui'
import {
  BreedHealthRecords,
  getBreedHealthBySlug,
  type BreedHealthRecord,
} from '../../../../data/breed-health'
import { EXISTING_STATIC_BREED_SLUGS } from '../../../../data/breeds'
import { BreedHealthContent } from '../../_health/BreedHealthContent'

// Static render — every health record is known at build time.
export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

/** Only template-rendered (non-static-folder) breeds with a health record. */
export function generateStaticParams() {
  return BreedHealthRecords.filter(
    (r) => !EXISTING_STATIC_BREED_SLUGS.has(r.slug),
  ).map((r) => ({ slug: r.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const record = getBreedHealthBySlug(slug)
  if (!record) {
    return buildMetadata({
      siteId: 'dog-com',
      title: 'Breed Health Guide Not Found',
      description: 'This breed health guide does not exist.',
      path: `/breeds/${slug}/health`,
    })
  }

  // Title ≤ 70 chars including " | Dog.com" (10 chars). Target ≤ 56 for core.
  const title = `${record.breedName} Health Issues & Screenings | Dog.com`
  // Description ≤ 160 chars.
  const description =
    `${record.breedName} health deep-dive: known conditions, recommended ` +
    `screenings, emergency signs, and lifetime cost reality. Lifespan ` +
    `${record.lifespanRange}.`

  return buildMetadata({
    siteId: 'dog-com',
    title,
    description: description.length > 160 ? description.slice(0, 157) + '...' : description,
    path: `/breeds/${record.slug}/health`,
    type: 'article',
  })
}

export default async function BreedHealthPage({ params }: PageProps) {
  const { slug } = await params
  const record = getBreedHealthBySlug(slug)
  if (!record) notFound()
  // Static-folder breeds are served by their own folder route.
  if (EXISTING_STATIC_BREED_SLUGS.has(slug)) notFound()
  return <BreedHealthContent slug={slug} />
}

// Re-export for type-checking integrity
export type { BreedHealthRecord }
