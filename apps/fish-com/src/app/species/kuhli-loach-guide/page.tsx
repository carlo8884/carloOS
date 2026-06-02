import { redirect } from 'next/navigation'

// Duplicate of the canonical kuhli-loach care page (metadata already declared /species/kuhli-loach as canonical). Canonical: /species/kuhli-loach.
export default function KuhliLoachGuideRedirect() {
  redirect('/species/kuhli-loach')
}
