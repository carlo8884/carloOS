# Launch-Polish Checklist (per site) — advisor-driven

**Created 2026-06-01** from Carlo's advisor live-preview review. Mode: **polish, NOT page-expansion.**
**CSRO directive: STOP new page expansion on the top-7 cohort until every defect below is closed.**
New pages only to fill a CSRO-named gap; otherwise all throughput goes to defect-closure.

Cohort (top 7): Dog · Fish · Ferret · PetFood · Vets · Horses · Lizard.

## Per-site launch-polish gate — every box must be ✅ before a site is advisor-ready

For EACH site:
- [ ] **No broken/guessable-404 nav promises** — every nav label + homepage CTA resolves (incl.
      the URL a user/AI would guess: `/calculators`, `/methodology`, `/tools`, `/directory`).
- [ ] **No trust-bar overclaims** — no first-person clinical/lab/"in practice" claims; no fabricated
      scope ("score every", "all", "the only", "complete database") unless literally true; no
      placeholder content marketed as live; no fabricated DVM/specialist bylines.
- [ ] **Hero + imagery correct-subject and differentiated** — hero depicts the right animal/subject;
      no two sites share the same hero; logo/wordmark on-brand. (Visual lane)
- [ ] **Placeholder content honestly labelled** — any sample/scaffold data carries a visible banner
      and non-overclaiming metadata.
- [ ] **Top-20 pages spot-verified** — homepage + hubs + top spokes load, links resolve, copy honest.
- [ ] **All CI gates green** — trust-guard, metadata-policy, link-check, thin-page-audit, affiliate-integrity.
- [ ] **No aggressive monetization on medical/vet pages** — §1.5.b clean (Monetization audits AFTER
      route/visual/trust fixes, per advisor sequence).

## Status — advisor punch-list (2026-06-01)

| # | Item | Lane | Status |
|---|---|---|---|
| 1 | Fish `/calculators` 404 | COO | ✅ redirect → /tools (c40691b9) |
| 2 | PetFood `/methodology` 404 | COO | ✅ redirect → /guides/methodology (c40691b9) |
| 3 | Ferret hero shows a dog | Visual | ⬜ handed off (P0) |
| 4 | Horses/Saddle share hero | Visual | ⬜ handed off (P0) |
| 5 | Vets DNS still Efty — no cutover | guardrail | ✅ not pushing DNS (policy) |
| 6 | Vets `/vets` placeholder honesty | COO | ✅ already honest (visible sample-data banner) |
| 7 | Vets insurance "in practice" claim | COO/trust | ✅ rewritten → "carriers we rank highest" (c40691b9) |
| 8 | PetFood "score every" overclaim | COO/trust | ✅ softened → "we score commercial pet foods" (c40691b9) |
| — | Lizard logo | Visual | ⬜ handed off |
| — | Top-20-page sweep, all 7 sites | COO | ⬜ audit agent running |

## Sequence (advisor-mandated)
1. COO closes broken routes + trust copy ← **largely done (1,2,6,7,8)**
2. Visual replaces wrong/duplicate imagery ← handed off (3,4,lizard)
3. Monetization audits ONLY after 1+2 land — no aggressive monetization on medical/vet pages
4. CSRO holds page-expansion until this checklist is all ✅ per site, then re-runs IR + advisor

CSRO refreshes this after each defect-closure wave.
