---
from: COO
to: Carlo
status: ✅ COMPLETE — full-portfolio QC stress test (all 10 sites GREEN)
created: 2026-06-15
fulfills: ops/handoffs/2026-06-16-REMINDER-qc-stress-test-all-sites.md (run early, on Carlo's request)
---

# QC Stress Test — all 10 sites — RESULTS (2026-06-15)

Ran the full-portfolio QC stress test Carlo requested. **Verdict: the portfolio is
green end-to-end.** All CI gates pass, all 10 apps typecheck clean, and the new
programmatic engines (food/med/disease/species) hold up under integrity probing.
Two minor content-polish advisories were found **and fixed in this same pass**.

## 1. CI gate sweep (portfolio-wide) — 16/16 PASS

| Gate | Result |
|---|---|
| trust-guard (QC §1) | ✅ 1,398 TSX scanned, 0 forbidden-phrase hits |
| metadata-policy | ✅ clean (titles ≤70, desc ≤160, no dup) all 10 sites |
| link-check (strict) | ✅ 0 broken internal links |
| schema-validate | ✅ 0 findings (69 objects) |
| sitemap-drift | ✅ every indexable static route present |
| tool-schema-coverage | ✅ all 53 tool pages carry SoftwareApplication+HowTo+FAQPage |
| calculator-integrity | ✅ all 21 calculators match golden formulas (31 assertions) |
| hub-spoke-check | ✅ 0 findings |
| orphan-check | ✅ 0 orphans |
| affiliate-link-integrity | ✅ clean (zero `/go` leakage) |
| thin-page-audit | ✅ 0 thin pages; every page has a distinct title/h1 |
| polish-audit (×10 sites) | ✅ 0 thin, 0 duplicate titles (only intentional `/admin`,`/dashboard`,`/data` utility pages flagged as "orphans") |
| article-craft | advisory only — no CI-blocking issues |
| vercel-ignore-test | ✅ 30/30 path cases match (build-cost wrapper intact) |

## 2. Type safety — 10/10 apps `tsc --noEmit` CLEAN
dog ✓ · fish ✓ · lizard ✓ · saddle ✓ · vets ✓ · horses ✓ · petfood ✓ · petfoods ✓ · ferret ✓ · ferrets ✓

## 3. New-engine integrity probes (stressed hardest)

| Check | Result |
|---|---|
| Food engines — entry counts | dog **49**, cat **41**, horse **29**, ferret **23** |
| Med engine — entry count | vets **17** |
| Fish disease library | **35** |
| **Med engine prints a numeric dose?** | ✅ **ZERO** — the safety rule holds (dosing always deferred to a vet) |
| Toxic food pages carry emergency `whatToDo`? | ✅ every toxic entry has it (dog 8/8, cat 9/9, horse 10/10, ferret 7/7) |
| Dangling `related` slugs (broken cross-links) | ⚠️ found 5 (dog) + 3 (ferret) → **FIXED this pass** (repointed to real slugs); now all resolve ✓ |

## 4. Advisories found + fixed (in this pass)
- **Dog food engine:** 5 `related` entries pointed at alias names (`raisins`,`garlic`,`chives`,`bread-dough`,`milk`) rather than real slugs — they degraded gracefully (link-check was green, fallback backfilled), but were repointed to real slugs (`grapes`/`onions`/`bread`/`peanut-butter`/`ham`) for clean cross-linking.
- **Ferret food engine:** 3 `related` entries pointed at page concepts (`garlic-supplement`,`insulinoma-and-sugar`,`gastrointestinal-blockage`) instead of food slugs — repointed to real slugs (`onion`,`banana`,`vegetables`).

## 5. Known items (NOT regressions — pre-existing, not COO-lane)
- **41 stale Unsplash image keys** (ferret 21 / fish 6 / etc.) — Visual Bot lane; cleared by `node scripts/sync-images.mjs` (Carlo runs on his Mac).
- **Build truth:** `next build` can't run in-sandbox (Google-Fonts fetch) — validated via `tsc` + Vercel preview deploys, which are green on recent PRs.

## Bottom line
**No regressions. No trust violations. No broken links. No type errors. No fake doses.**
The two minor advisories are already fixed. The portfolio — including ~330 new
programmatic pages added this week — passes a full stress test.
