/**
 * Dog.com — Bernese Mountain Dog pet-insurance spoke (static breed-folder route).
 *
 * This breed has a hand-written static folder under /app/breeds/, so its
 * insurance child must live here (Next.js static segments take precedence
 * over the dynamic [slug] route). Content + schema live in the shared
 * ../../_insurance/BreedInsuranceContent renderer; metadata is literal here
 * so the metadata-policy gate can read a unique title/description.
 */

import type { Metadata } from 'next'
import { buildMetadata } from '@carloOS/ui'
import { BreedInsuranceContent } from '../../_insurance/BreedInsuranceContent'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: "Bernese Mountain Dog Pet Insurance: Is It Worth It? | Dog.com",
  description: "Is pet insurance worth it for a Bernese Mountain Dog? The breed's top hereditary cost drivers, why enrolling early matters, and what to check on a quote.",
  path: '/breeds/bernese-mountain-dog/insurance',
  type: 'article',
})

export default function BerneseMountainDogInsurancePage() {
  return <BreedInsuranceContent slug="bernese-mountain-dog" />
}
