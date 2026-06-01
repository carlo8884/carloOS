import { redirect } from 'next/navigation'

// Thin duplicate of the comprehensive socialization-window article at
// /training/dog-socialization-window. The comprehensive page was orphaned
// while this short version held the inbound links — backwards. Internal links
// now point at the canonical, and this natural-variant URL permanently
// resolves to it. Canonical: /training/dog-socialization-window.
export default function SocializationWindowRedirect() {
  redirect('/training/dog-socialization-window')
}
