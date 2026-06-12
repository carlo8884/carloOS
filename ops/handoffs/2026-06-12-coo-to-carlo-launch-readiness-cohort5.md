---
from: COO
to: Carlo
status: assessment
created: 2026-06-12
next_action: Carlo decides launch order; Visual + Monetization close their lane gaps
---

# Launch-readiness assessment — cohort-5 (§8a launch-quality bar)

Snapshot after this session's polish + GEO + monetization-P0 + CI-gate work. Measures the
five launch-cohort sites against the §8a bar. Verdict is honest and lane-scoped: it separates
what's **done (COO lane)** from what's **gated on other lanes or you**.

## Portfolio-wide gate status (all green, 2026-06-12)
| Gate | Result |
|---|---|
| trust-guard (QC §1) | PASS — 0 hits, 1335 TSX |
| metadata-policy | PASS — 7 enforced sites clean |
| link-check (strict) | PASS — 0 broken internal links |
| orphan-check | PASS (ENFORCING) — 0 orphans |
| hub→spoke reciprocity | PASS (ENFORCING) — 0 findings |
| schema-validate | PASS — 56 objects, 0 findings |

## §8a launch-quality bar — per criterion, across cohort-5

| Criterion | Owner | Status |
|---|---|---|
| trust-guard green | COO | ✅ all 5 |
| metadata-policy green | COO | ✅ all 5 |
| link-check green (strict) | COO | ✅ all 5 |
| No thin/duplicate pages | COO | ✅ audited clean (redirect stubs handled) |
| Homepage → hub → spoke structure | COO | ✅ (Dog rebuilt; Fish/Ferret/PetFood/Vets audited, hubs wired) |
| Schema / GEO coverage | COO | ✅ breadcrumb/Article/FAQ/Speakable/Dataset/HowTo/citation + llms.txt |
| Zero affiliate-route leakage | Monetization | ✅ cohort-5 clean (Saddle/Ferret P0 leaks already fixed) |
| FTC disclosures above monetized surfaces | shared | ✅ 0 disclosure gaps on live monetized surfaces |
| Top commercial pages monetized | Monetization | 🟡 ~30 high-intent pages still unmonetized (revenue upside, NOT a launch blocker) |
| Tools/calculators working | COO | ✅ present + HowTo schema |
| Real visual polish (not templated) | **Visual** | 🔴 **the main open gap** — curated photography / per-site differentiation not yet shipped |
| No Tier-1 trust/valuation risk | CSRO/IR | ✅ none found this session |

## Per-site verdict
| Site | Pages | COO-lane bar | Blocking gap before DNS |
|---|---|---|---|
| **Dog.com** | 185 | ✅ met | Visual polish (homepage rebuilt; needs photography) |
| **Fish.com** | 108 | ✅ met | Visual polish |
| **Ferret.com** | 113 | ✅ met | Visual polish; set 2 Ferret env-var tags to activate the wired buy-boxes (you) |
| **PetFood.com** | 110 | ✅ met | Visual polish |
| **Vets.co** | 112 | ✅ met | Visual polish |

## Bottom line
- **Every COO-owned launch criterion is met on all five sites.** They are technically, structurally,
  and GEO-ready to be indexed and cited.
- **The one true gate to a polished launch is Visual** — curated photography + per-site
  differentiation so the pages don't read as templated. That's the Visual lane's call (focus
  order per §8a: Dog / Fish / Ferret / PetFood / Vets).
- **Monetization depth** (~30 unmonetized high-intent pages) is revenue upside, not a launch
  blocker — those can be wired before or after flip.
- **The decision lever is yours:** pick the first 1–2 sites to DNS-flip (Network Solutions).
  My recommendation: **Dog.com first** (flagship, most pages, homepage already rebuilt), then
  **Vets.co** (clinical-authority, strong Q&A/insurance GEO cluster) or **Fish.com** (clean
  magazine voice).

## What I'll prep on your "go"
- Exact §8a launch checklist for the chosen site(s)
- The DNS step list for Network Solutions (manual, your side)
- Final pre-flip gate run + a from-scratch link/schema sweep on the chosen site(s)

Nothing here needs spending. The remaining work is Visual's lane and your launch decision.
