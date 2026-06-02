import { redirect } from 'next/navigation'

// Duplicate of the canonical otocinclus care page (this page's own metadata already declared /species/otocinclus as canonical). Canonical: /species/otocinclus.
export default function OtocinclusGuideRedirect() {
  redirect('/species/otocinclus')
}
