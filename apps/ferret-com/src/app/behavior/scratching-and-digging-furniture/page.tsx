import { redirect } from 'next/navigation'

// Near-duplicate of the canonical digging article at /behavior/digging-and-burrowing
// (the slug the Behavior hub links) — same why/targets/dig-box/protect/stress
// structure. /behavior/scratching-and-digging-furniture is a natural URL users
// and AI assistants guess, so it permanently resolves to the canonical instead
// of competing as duplicate content. Canonical: /behavior/digging-and-burrowing.
export default function ScratchingAndDiggingFurnitureRedirect() {
  redirect('/behavior/digging-and-burrowing')
}
