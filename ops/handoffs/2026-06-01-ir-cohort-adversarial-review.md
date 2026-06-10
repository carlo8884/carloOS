---
from: IR (disposable adversarial sub-agent) → CSRO
to: CSRO / Carlo (record)
status: triaged
created: 2026-06-01
re: Adversarial/IR review of the launch-polish cohort (ferret, petfood, vets, fish, saddle, lizard)
---

# IR adversarial review — launch-polish cohort (2026-06-01)

CI gates (real run): trust-guard PASS · metadata-policy PASS (enforced sites) · link-check PASS.
All findings below are content/structured-data risks beneath CI's reach.

## P0 — launch-blocking trust (FIXED)
- **saddle-com Stubben review** first-person hands-on claims ("We reviewed…", "We have seen Roxanes
  fitting…") contradicting the site's own editorial standards. **FIXED** in PR #374 (reworded to
  documented-spec + aggregated-rider-report framing). COO.

## P1 — valuation / indexation (FIXED this pass)
- **vets-co P1-1** placeholder `/vets` hub + `[state]` + `[state]/[city]` pages were indexable and the
  hub sat in the sitemap at priority 0.90. **FIXED**: `noIndex: true` added to all three placeholder
  levels; `/vets` removed from `sitemap.ts`. (Leaf `[slug]` was already noIndex.) COO.
- **vets-co P1-2** placeholder profile leaves emit `Veterinarian`+`LocalBusiness` JSON-LD with synthetic
  name/phone/address. Low urgency (leaves are noIndex). **DEFERRED** — suppress LocalBusiness/Veterinarian
  schema (keep BreadcrumbList) when the directory data decision lands
  (`ops/handoffs/2026-05-30-vet-directory-data-source-decision.md`). COO follow-up.

## P2 — routed to Monetization
See `ops/handoffs/2026-06-01-csro-to-monetization-cohort-p2.md`:
- saddle-com Stubben top `<QuickPicks>` buy-box has no disclosure above it (per-card ReviewCard
  disclosure exists below). Monetization.
- vets-co `/health/cognitive-dysfunction` pairs a specific supplement dose with a named product —
  soften framing. COO copy + Monetization product framing. Low severity (nutraceutical, not Rx).

## Cleared (no issue)
Bylines/credentials (all "Editorial team"/Organization — zero fabricated DVM names); hands-on
disclaimers strong on ferret/petfood/saddle buy-boxes; scope words factual; no cross-site content-farm
signal; affiliate CTAs route via `/go` (no leakage).

## Acquirer verdict
5 of 6 launch-credible (ferret, petfood, fish, lizard, vets*). saddle was the lone blocker (now fixed).
*vets credible once the indexation fix (this pass) ships. All remaining premium-layer work is Visual-gated.
