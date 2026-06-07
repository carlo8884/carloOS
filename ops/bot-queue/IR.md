# IR Bot (Codex) — Wakeup Queue

**Owner:** IR Bot · **Lane:** READ-ONLY adversarial review. Reports findings IN CHAT (read-only env) → Carlo relays → CSRO files.
**Last updated:** 2026-06-07 (by CSRO — reconciled against origin/main @ dd16e9a1, PR #567)

## RESTART PROMPT
```
Read-only adversarial review (IR-BOT.md §3a). Read current main: new high-risk PRs, CSRO registers, drift. Find what's wrong — attack CSRO strategy + verify monetization PRs (SKUs resolve, /go routing, disclosure, health-page guardrails). Report findings IN CHAT, severity-tagged. If nothing material: say "clean, nothing to flag" — do NOT write stub files. Don't ask Carlo unless blocker/security/trust/Tier-1.
```

## Queue
| # | Item | Priority | Status | Next action |
|---|---|---|---|---|
| 0 | **🚀 FERRET 109-PAGE LAUNCH AUDIT** (updated 2026-06-07; was "105-page" when queued 2026-06-01) | 🔴 P0 pre-launch | queued | Ferret.com is now 109 pages (verified `find apps/ferret-com/src/app -name page.tsx \| wc -l` = 109 on main @ dd16e9a1). The architecture, trust, affiliate routing, and tooling gates are CLEAN per COO launch-readiness QA (2026-06-07, `ops/handoffs/2026-06-07-launch-readiness-qa-fish-petfood-ferret.md`). **Current risk areas are imagery + claim hygiene — NOT architecture.** Adversarial pass should focus on: (1) Verify claim-hygiene fix in #567 is complete on Ferret health cluster — any surviving "we tested" / first-person hands-on / consumer dose ranges (mg/kg)? (2) Verify starter-kit funnel (`(funnels)/ferret-starter-kit`) has AffiliateDisclosure above first `/go` CTA — QA confirms yes, IR should independently verify. (3) 11 paw-glyph image placeholders on hero/article images (keys missing from `image-manifest.json`) — flag if any appear on trust-critical clinical pages (health-emergency, health-gi-blockage, health-vaccinations identified in QA). (4) Confirm no new thin/dup pages from the post-105 pages (4 new pages were added; QA found 0 thin prose on current main). (5) Verify `reviewCount: 1` Product-schema pattern is fixed (should be — PR #565 changed AggregateRating → Review for editorial scores; confirm Ferret is not affected since it has no review pages). Report findings IN CHAT severity-tagged. |
| 1 | Re-verify PR #265/#266/#263 AFTER fix-backs | 🔴 HIGH | queued | Confirm the CSRO fix-backs actually landed: #266 chlorhexidine card gone, #265 horses-com in AMAZON_BRAND/CHEWY_BRAND, #263 Logo letterSpacing=0 + no placeholder attribution on wired pages. Report pass/fail per item. |
| 2 | QC §1.5.b portfolio sweep | 🔴 HIGH | queued | Independently grep every buy-box/ReviewCard for medicated/clinical products (antiseptic/antimicrobial/rinse/medicated/Rx-adjacent). Flag any monetized clinical product CSRO/Mon missed. |
| 3 | QC §1.5.a portfolio sweep | 🔴 HIGH | queued | Re-grep all health pages for surviving consumer dose ranges (mg/kg, PO q12h) beyond the exempt supplements/AAFCO. Flag stragglers. |
| 4 | Audit each new monetization PR as it opens | 🔴 HIGH | ongoing | For every Mon PR: SKUs resolve, `/go` routing (no bare URLs), in-page disclosure above first CTA, no clinical monetization, no trust-bar claim. |
| 5 | Audit each new Visual PR as it opens | HIGH | ongoing | No AI humans/animals, no fake headshots, photographer attribution present + real (not "Unsplash contributor"), no fabricated testing/credentials. |
| 6 | Trust-guard coverage gaps | MED | queued | Find user-facing trust claims the regex gates would MISS (new phrasings of "we tested/measured", implied credentials, fake review counts). Propose new patterns. |
| 7 | Affiliate-integrity false-negative hunt | MED | queued | Try to find untracked/dead affiliate links the `affiliate-link-integrity.mjs` check does NOT catch (e.g. links built via variables, non-ReviewCard CTAs). |
| 8 | Adversarial pass on CSRO registers | ongoing | active | Keep attacking over-confidence in strategy/valuation/disposition docs. |
| 9 | Pressure-test valuation [EST] figures | MED | queued | Flag anything unverified before it reaches Carlo as fact. |
| 10 | Metadata/SEO integrity spot-check | LOW | queued | Sample programmatic pages (vets funnels, petfoods brands) for duplicate titles/descriptions, thin content, canonical issues. |

## Status
- **Done:** caught dir-015 affiliate bugs + 10-finding strategy pass + 2 bugs in #246 + the 2026-06-01 pass (Fish fake-testing, ferret rx-dosing, #265 untagged horses, #266 chlorhexidine, #263 Logo/attribution). Post-premium-rollout Tier-1 re-review (#497, #478). Very high value — all confirmed.
- **Post-#567 context (2026-06-07):** COO has completed a full launch-readiness QA pass on all 5 polish sites (PRs #564, #566). Trust/claim hygiene fixes merged (#565, #567). Architecture, affiliate routing, disclosure, and tools gates are all GREEN. Primary remaining risks across the portfolio are: (a) 19 unsynced hero/article images (Visual lane), (b) Fish ~14 lite species pages + 1 metadata over-claim (COO lane), (c) unsourced stat sweep on Dog/Vets insurance reviews. IR's highest-value next action is the independent adversarial verification of the Ferret 109-page launch surface (item #0 above).
- **Env:** read-only — reports in chat, cannot write/pull. Carlo relays to CSRO.
- **Overnight rule:** work top-down; report EACH item's findings in chat severity-tagged as you go; if an item is clean say "clean, nothing to flag" and move on — never idle, never write stub files.
- **Carlo needed?** Only to relay findings + on blocker/Tier-1.

## DO NOT TOUCH
Anything (read-only). No app code, no commits outside ir-bot/main, no merges. Advise; don't execute.
