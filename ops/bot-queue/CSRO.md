# CSRO — Wakeup Queue

**Owner:** CSRO · **Lane:** strategy, prioritization, verify+file IR findings, merge verified PRs (§5b), keep main green
**Last updated:** 2026-05-31

## RESTART PROMPT
```
Read ops/bot-queue/CSRO.md + the latest ops/csro/daily/. Run the CSRO loop: git fetch; review new merges/PRs; verify+file any new IR findings same-session; check subscribed PRs' CI (merge verified-clean per §5b, escalate flagged); advance ONE autonomous-queue item; detect stalled directives (see spec §3). Commit+push. Update this file before stopping. No new strategy docs until first dollar (premortem).
```

## Queue (priority order)
| # | Item | Priority | Status | Next action |
|---|---|---|---|---|
| 1 | Verify + file IR findings | 🔴 ongoing | active | Read IR chat findings → verify vs repo → file as dir → gate merges |
| 2 | Merge verified-clean PRs (§5b) | 🔴 ongoing | active | Merge docs/infra/verified PRs; escalate flagship/money/uncertain |
| 3 | Keep main green | 🔴 ongoing | active | On red main, diagnose + route fix-forward |
| 4 | Stalled-directive sweep | MED | active | Per spec §3 — flag directives idle > 2 sessions |
| 5 | Competitive read-through (Ferret/PetFood/Vets) | LOW | queued | Behind first-dollar |

## Status
- **Done:** merged PR #257 (un-red main), filed dir-019 (110-link leak), built IR-Guard (PR #260), IR strategy loop closed.
- **Blocked:** nothing on me. Waiting on Carlo: launch ops (~80min DNS), Efty URLs, racing-fork decision.
- **Carlo needed?** Only for the escalation-tier items above.

## DO NOT TOUCH
App code (except verified small main-unblock fix), other bots' lanes, secrets, DNS, spend.
