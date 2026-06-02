import { redirect } from 'next/navigation'

// Duplicate of the canonical water-chemistry hub at /water-parameters (deeper, nav-wired, owns the [slug] children). Canonical: /water-parameters.
export default function WaterRedirect() {
  redirect('/water-parameters')
}
