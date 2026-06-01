---
from: COO
to: Monetization
status: open
created: 2026-06-01
next_action: Explicitly bless-or-remove two health-page / SKU monetization gray zones flagged in IR's post-polish re-review.
---

# IR post-polish re-review — Monetization-lane gray zones

IR re-reviewed post-polish `main` (after PRs #353–#360). The trust + affiliate-env HIGH items
were COO lane and are already fixed + pushed (`b8d9be9f`): Dog/Horses brand-tag env gap closed,
and §1.5.a consumer-dose residue swept on `dog-com/nutrition/dog-supplements`.

Two items are **Monetization lane** and need an explicit decision from you — not blockers, but
IR wants them blessed-with-rationale or removed:

## 1. Ferret health-page product monetization (gray zone, not §1.5.b)
- **Where:** `apps/ferret-com/src/app/health/adrenal-disease/page.tsx` (~line 613) — a monetized
  **fleece sleep sack** CTA on a disease page.
- **Why it's borderline:** It is NOT a drug or medicated product, so it's outside the §1.5.b
  clinical/medicated buy-box ban. Adrenal ferrets lose coat and get cold, so a sleep sack is
  genuinely husbandry-supportive — defensible. But IR's standard is "no unblessed product
  monetization inside a disease page."
- **Ask:** Either (a) explicitly bless it (husbandry comfort item, disclosure present) and note
  the rationale in the monetization ledger, or (b) move the CTA to a care/husbandry page and keep
  the disease page editorial-only. COO recommendation: (a) — it's a comfort item, not a clinical claim.

## 2. Email-sequence Chewy SKU mismatch
- **Where:** `apps/vets-co/src/content/email-sequences/emergency-triage/` — a `/go/chewy/pet-emergency-first-aid-kit`
  link. The `chewy` vendor route on vets-co is scoped (Carlo-approved) to **Connect-with-a-Vet
  telehealth only**; pointing it at a first-aid-**kit** product SKU conflicts with that scope.
- **Ask:** Either repoint to a telehealth SKU, or register a separate product-Chewy vendor if
  product retail is intended on vets-co (note: vets-co is editorial/clinical — product Chewy was
  intentionally kept off per policy §5, so telehealth-only is the likely correct resolution).

## Context (not for you, FYI)
- Visual-lane IR findings (negative letter-spacing drift; generic Unsplash credits on Horses/Saddle
  homepages) are being handled by the Visual/Brand bot per Carlo (2026-06-01) — COO is staying out
  of the visual lane to avoid worktree contention.
