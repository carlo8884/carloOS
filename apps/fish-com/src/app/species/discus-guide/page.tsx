import { redirect } from 'next/navigation'

// Duplicate of the canonical discus care page (metadata already declared /species/discus as canonical). Canonical: /species/discus.
export default function DiscusGuideRedirect() {
  redirect('/species/discus')
}
