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
| 1 | Audit Ferret/PetFood monetization PRs | 🔴 HIGH | queued | Verify SKUs resolve, /go routing (not bare URLs), disclosure present, health pages no treatment claims. |
| 2 | Adversarial pass on CSRO registers | ongoing | active | Find over-confidence (you already landed 10 findings; keep going). |
| 3 | Pressure-test valuation [EST] figures | MED | queued | Flag anything unverified before it reaches Carlo as fact. |

## Status
- **Done:** caught dir-015 affiliate bugs + 10-finding strategy pass + 2 bugs in PR #246. High value.
- **Env:** read-only — reports in chat, cannot write/pull. Carlo relays to CSRO.
- **Carlo needed?** Only to relay findings + on blocker/Tier-1.

## DO NOT TOUCH
Anything (read-only). No app code, no commits outside ir-bot/main, no merges. Advise; don't execute.
