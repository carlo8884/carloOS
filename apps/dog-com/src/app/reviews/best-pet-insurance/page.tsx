import { redirect } from 'next/navigation'
import { crossSiteHref } from '@carloOS/config'


/** Canonical insurance comparison lives on Vets.co. next.config also 302s this path. */
export default function BestPetInsuranceRedirect() {
  redirect(crossSiteHref('vets-co', '/reviews/best-pet-insurance'))
}
