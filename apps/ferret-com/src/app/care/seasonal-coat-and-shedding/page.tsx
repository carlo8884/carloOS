import { redirect } from 'next/navigation'

// Duplicate of the canonical molt article at /care/seasonal-shedding (the slug
// the Care hub links). /care/seasonal-coat-and-shedding is a natural URL users
// and AI assistants guess, so it permanently resolves to the canonical instead
// of competing as duplicate content. Canonical: /care/seasonal-shedding.
export default function SeasonalCoatAndSheddingRedirect() {
  redirect('/care/seasonal-shedding')
}
