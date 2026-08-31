import { redirect } from 'next/navigation'

/** Canonical insurance comparison lives on Vets.co. next.config also 302s this path. */
export default function BestPetInsuranceRedirect() {
  redirect('https://vets.co/reviews/best-pet-insurance')
}
