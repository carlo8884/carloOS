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

## Launch cohort ORDER (2026-06-01, Carlo) — supersedes prior ordering

CSRO directly orchestrates the launch-polish sprint in this order:

1. **Ferret.com** — first sprint; build it into the launch-quality template
2. **PetFood.com**
3. **Vets.co** — high-upside, but MUST pass trust/placeholder checks before any launch
4. **Fish.com**
5. **Saddle.com / Lizard.com** — parallel polish candidates
6. **Dog.com** — last among the premium Tier 1 cohort

**Rationale:** Dog.com and Fish.com are the highest-value, **offer-backed** assets (real inbound
offers) → they get MORE premium polish before launch, so they go later. Ferret + PetFood are
lower-risk, faster revenue-validation sites → first. Vets.co is high-upside but trust/placeholder
gated.

**Extra-polish flag:** Dog.com and Fish.com require extra premium polish because of real inbound
offers — do not rush either to the front.

## Operating model (2026-06-01, Carlo) — CSRO-orchestrated sprint

CSRO is the controller and may spin up **temporary, narrow, disposable** sub-agents for Visual,
Monetization, COO, QA, and IR tasks when that is faster. Every sub-agent brief MUST specify:
`site` · `lane` · `exact task` · `done-when` · `output/handoff file` · `deadline`.

**Hard rules (no exceptions without Carlo):**
- CSRO remains the controller; sub-agents are temporary and disposable.
- No broad new content expansion (freeze stands).
- No DNS launch without Carlo approval.
- No spend, vendor approvals, secrets, or domain-sale/redirect decisions without Carlo approval.
- Trust-bar (QC §1) is absolute.

**Launch-polish objective:** each site feels like a premium domain asset, not a basic content site.

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

## Sequence (advisor-mandated, per site)
1. COO closes broken routes + trust copy ← **largely done (1,2,6,7,8)**
2. Visual replaces wrong/duplicate imagery + applies premium first-screen standard
3. Monetization audits ONLY after 1+2 land — no aggressive monetization on medical/vet pages
4. CSRO holds page-expansion until this checklist is all ✅ per site, then re-runs IR + advisor

CSRO refreshes this after each defect-closure wave.

## Sprint 1 — Ferret.com (active, 2026-06-01)

Brief: `ops/handoffs/2026-06-01-csro-ferret-sprint1.md`. Done-when ALL true:
- [ ] Actual ferret imagery on hero + key pages (replaces dog-hero defect) — **Visual**
- [ ] Warmer niche owner identity / first-screen experience, not generic content-list — **Visual**
- [ ] Safe monetization; every commercial CTA via `/go`; disclosures above monetized surfaces — **Monetization**
- [ ] No clinical dosing / medicated-product overreach (launch blocker) — **QA/trust**
- [ ] Top-page QA: homepage + hubs + top spokes load, links resolve, copy honest — **QA/COO**
- [ ] Clean internal navigation (no dead links, coherent hub→spoke) — **COO**
- [ ] Strong first-screen; no generic content-site feel — **Visual + COO**
- [ ] All CI gates green (trust-guard, metadata-policy, link-check, thin-page-audit, affiliate-integrity) — **COO**
- [ ] IR sign-off: no Tier-1 trust/valuation risk — **IR**

Then apply the same bar to PetFood → Vets → Fish → Saddle/Lizard → Dog (last).
