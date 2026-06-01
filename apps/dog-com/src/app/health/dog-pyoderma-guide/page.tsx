import { redirect } from 'next/navigation'

// Duplicate of the canonical pyoderma article at /health/dog-pyoderma — both
// pages previously declared the same canonical URL (/health/dog-pyoderma),
// a duplicate-content / canonical-collision problem. This "-guide" variant is
// a natural URL users and AI assistants guess, so it permanently resolves to
// the canonical instead of competing. Canonical: /health/dog-pyoderma.
export default function DogPyodermaGuideRedirect() {
  redirect('/health/dog-pyoderma')
}
