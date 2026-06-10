# Launch-Polish Checklist (per site) — advisor-driven

**Created 2026-06-01** from Carlo's advisor live-preview review. Mode: **polish, NOT page-expansion.**
**CSRO directive: STOP new page expansion on the top-7 cohort until every defect below is closed.**
New pages only to fill a CSRO-named gap; otherwise all throughput goes to defect-closure.

> **2026-06-01 escalation (Carlo): the bar is now PREMIUM.** Credibility (this checklist) is
> necessary but not sufficient. Each priority site must also clear the **Premium Domain Launch Bar**
> (`ops/csro/premium-domain-launch-bar.md`) — premium category destination, not content library.
> **COO content-expansion freeze extended: no new content on priority sites until Visual ships the
> premium first-screen standard and applies it.** Visual leads the homepage redesign pass.

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

## Cohort PR wave — 2026-06-01 (COO conveyor)

Merged this session (verify-gated, merge-on-green): #364 (docs), #365
(metadata-policy redirect-stub exemption + ferret stubs/tools schema),
#366 (petfood nav/footer), #367 (vets trust + telehealth schema), #368
(fish footer + tools ItemList + /data priority), #369 (ferret homepage
trust line + sister-site section removed), #370 (saddle footer +
western trust copy), #371 (lizard nav/footer + first-year-care href +
sitemap), #372 (ferret Visual premium-redesign brief), #373 (ferret
`/find-an-exotic-vet` editorial route), #374 (saddle Stubben first-person
claims fixed), #375 (vets `/vets` placeholder noIndex + sitemap).

In flight (open, verify-gated):
- **#376** — ferrets-com `/moving` meta desc ≤160 (was main-red on an
  enforced site; **blocks #377/#378 metadata-policy until merged**).
- **#377** — dog-com symptom-guide fabricated vet-authorship removed (QC §1 P0).
- **#378** — dog-com orphaned `/compare` + `/which-pet` tools surfaced in
  nav/footer (cohort-#6 audit P0-2) + audit doc persisted.

Routed (not COO execution):
- Ferret homepage premium first-screen redesign (incl. real ferret hero,
  6-path owner-intent first screen) → **Visual** (brief #372).
- Dog homepage first-screen tool promotion → **Visual**.
- Dog "symptom checker" promise resolves to static `/symptoms` →
  **CSRO/Carlo** product-gap decision (reframe vs. build interactive triage).

Dog.com P1 backlog (COO, post-merge): sitemap `/dashboard/revenue`+`/data`
hygiene, `/breeds` ItemList JSON-LD, `/compare/[slug]` in sitemap,
duplicate-topic canonical review. See
`ops/handoffs/2026-06-01-dog-com-launch-audit.md`.
