/**
 * Dog.com — Doberman Pinscher pet-insurance spoke (static breed-folder route).
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
  title: "Doberman Pinscher Pet Insurance: Is It Worth It? | Dog.com",
  description: "Is pet insurance worth it for a Doberman Pinscher? The breed's top hereditary cost drivers, why enrolling early matters, and what to check on a quote.",
  path: '/breeds/doberman-pinscher/insurance',
  type: 'article',
})

export default function DobermanPinscherInsurancePage() {
  return <BreedInsuranceContent slug="doberman-pinscher" />
}
