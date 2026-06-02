import { redirect } from 'next/navigation'

// Consolidated into the canonical, comprehensive terminology reference at
// /ownership/ferret-glossary. This page covered a strict subset of the same
// terms (hob, jill, kit, gib, sprite, dooking, war dance, descenting, altering)
// and competed with the glossary for the same queries. It now permanently
// resolves to the glossary instead of duplicating it. Canonical:
// /ownership/ferret-glossary.
export default function FerretVocabularyForBeginnersRedirect() {
  redirect('/ownership/ferret-glossary')
}
