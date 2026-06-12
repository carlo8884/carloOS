import { redirect } from 'next/navigation'

// Duplicate of the canonical Argentine black & white tegu care guide at
// /species/argentine-black-and-white-tegu — both pages were full care guides
// for the same species (Salvator merianae), a duplicate-content / canonical-
// collision problem that splits ranking signals. The richer content from this
// page has been folded into the canonical guide. /species/tegu is a natural
// short URL users and AI assistants guess, so it permanently 308-redirects to
// the canonical instead of competing. Canonical: /species/argentine-black-and-white-tegu.
export default function TeguRedirect() {
  redirect('/species/argentine-black-and-white-tegu')
}
