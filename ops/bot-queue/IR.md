# IR Bot (Codex) — Wakeup Queue

**Owner:** IR Bot · **Lane:** READ-ONLY adversarial review. Reports findings IN CHAT (read-only env) → Carlo relays → CSRO files.
**Last updated:** 2026-05-31 (by CSRO)

## RESTART PROMPT
```
Read-only adversarial review (IR-BOT.md §3a). Read current main: new high-risk PRs, CSRO registers, drift. Find what's wrong — attack CSRO strategy + verify monetization PRs (SKUs resolve, /go routing, disclosure, health-page guardrails). Report findings IN CHAT, severity-tagged. If nothing material: say "clean, nothing to flag" — do NOT write stub files. Don't ask Carlo unless blocker/security/trust/Tier-1.
```

## Queue
| # | Item | Priority | Status | Next action |
|---|---|---|---|---|
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
- **Done:** caught dir-015 affiliate bugs + 10-finding strategy pass + 2 bugs in #246 + the 2026-06-01 pass (Fish fake-testing, ferret rx-dosing, #265 untagged horses, #266 chlorhexidine, #263 Logo/attribution). Very high value — all confirmed.
- **Env:** read-only — reports in chat, cannot write/pull. Carlo relays to CSRO.
- **Overnight rule:** work top-down; report EACH item's findings in chat severity-tagged as you go; if an item is clean say "clean, nothing to flag" and move on — never idle, never write stub files.
- **Carlo needed?** Only to relay findings + on blocker/Tier-1.

## DO NOT TOUCH
Anything (read-only). No app code, no commits outside ir-bot/main, no merges. Advise; don't execute.
