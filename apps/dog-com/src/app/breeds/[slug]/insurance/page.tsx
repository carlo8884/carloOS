/**
 * Dog.com — Breed × pet-insurance spoke (dynamic template route).
 *
 * Renders /breeds/<slug>/insurance for breeds that are served by the dynamic
 * [slug] breed template (i.e. have NO static folder under /app/breeds/) AND
 * carry an insuranceProfile. Static-folder breeds get their own
 * /breeds/<breed>/insurance/page.tsx instead (Next.js static segments take
 * precedence over [slug], so a dynamic child would never be reached for them).
 *
 * Content + schema live in the shared ../../_insurance/BreedInsuranceContent.
 */

import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@carloOS/ui'
import {
  getBreedBySlug,
  getBreedInsuranceProfile,
  EXISTING_STATIC_BREED_SLUGS,
  BREED_INSURANCE_SLUGS,
} from '../../../../data/breeds'
import { BreedInsuranceContent } from '../../_insurance/BreedInsuranceContent'

export const dynamic = 'force-static'
export const dynamicParams = false

interface PageProps {
  params: Promise<{ slug: string }>
}

/** Only template-rendered (non-static-folder) breeds with a profile. */
export function generateStaticParams() {
  return BREED_INSURANCE_SLUGS.filter(
    (slug) => !EXISTING_STATIC_BREED_SLUGS.has(slug),
  ).map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const breed = getBreedBySlug(slug)
  const profile = breed ? getBreedInsuranceProfile(slug) : undefined
  if (!breed || !profile) {
    return buildMetadata({
      siteId: 'dog-com',
      title: 'Breed Insurance Guide Not Found',
      description: 'This breed insurance guide does not exist.',
      path: `/breeds/${slug}/insurance`,
    })
  }
  // Title ≤ 70 incl. " | Dog.com" suffix; description ≤ 160.
  const title = `${breed.name} Pet Insurance: Is It Worth It? | Dog.com`
  const description =
    `Is pet insurance worth it for a ${breed.name}? The breed's top hereditary ` +
    `cost drivers, why enrolling early matters, and what to check on a quote.`
  return buildMetadata({
    siteId: 'dog-com',
    title,
    description:
      description.length > 160 ? description.slice(0, 157) + '...' : description,
    path: `/breeds/${breed.slug}/insurance`,
    type: 'article',
  })
}

export default async function BreedInsurancePage({ params }: PageProps) {
  const { slug } = await params
  const breed = getBreedBySlug(slug)
  const profile = breed ? getBreedInsuranceProfile(slug) : undefined
  if (!breed || !profile) notFound()
  // Static-folder breeds are served by their own folder route.
  if (EXISTING_STATIC_BREED_SLUGS.has(slug)) notFound()
  return <BreedInsuranceContent slug={slug} />
}
