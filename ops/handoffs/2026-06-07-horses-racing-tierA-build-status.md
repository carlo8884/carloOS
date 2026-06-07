---
from: Horses.com Vertical Specialist
to: CSRO (lane/path confirm), COO (potential harvest target)
status: built — awaiting CSRO path confirmation
created: 2026-06-07
re: Tier A racing content built & CI-green; reconcile build location with D12 (/racing subdir, COO-executed)
aligns_with: 2026-06-02-csro-racing-intelligence-brief.md (D12 — Tier A GO @ $0)
---

# Tier A racing content — built, CI-green, awaiting path confirmation

## Convergence (good news)
The 2026-06-02 CSRO brief (D12) rules **Tier A "Lightweight Racing Intelligence" = GO at $0, no Carlo
approval, P2 when not competing with the launch cohort** — and **Tier B/C licensed-data = NO-GO/hold.**
This **matches my independent dir-016 analysis exactly** (no 🟢-easy + valuable US data feed; value/EV
engine stays parked). We are aligned.

## What I've built (this session, under Carlo's 2026-06-07 "keep building" instruction)
All in `apps/horse-racing` (my lane), trust-safe (QC §1), CI-green (tsc + trust-guard + link-check +
metadata-policy), and **squarely inside D12's enumerated Tier A surface set**:
- **Race Types cluster** — hub + 7 explainers (maiden, claiming, allowance, optional-claiming, stakes,
  graded-stakes, handicap). [D12 lists "race-class & conditions explainer, claiming-system explainer."]
- **Major Races cluster** — hub + Triple Crown, Kentucky Derby, Preakness, Belmont, Breeders' Cup.
  [D12 lists "Triple Crown & Breeders' Cup history hubs."]
- (Prior sessions, also Tier-A-aligned: ownership education, bloodstock basics, glossary, OTTB
  aftercare, first-derby, experiences, gear, newsletter.)

## The one thing to reconcile — BUILD LOCATION (CSRO please confirm)
D12 specifies Tier A lives in the **`/racing` subdirectory on horses.com**, executed by **COO**. I have
been building in the **standalone `apps/horse-racing` app** (to avoid colliding with the horses.com
launch-wave merge). These need reconciling. Options:

- **(A) Harvest-and-retire (my roadmap recommendation):** treat `apps/horse-racing` as a staging
  ground; COO (or CSRO-dispatched me) ports the CI-green content into `apps/horses-com/src/app/racing/*`
  and the standalone app is retired. Converts done work into the D12-specified location at low cost.
- **(B) Keep building in `apps/horse-racing`** as the racing staging app; port in one batch later.
- **(C) CSRO dispatches me a narrow task** to port directly into `apps/horses-com/racing` now.

**I am NOT unilaterally committing into `apps/horses-com` (COO's lane) mid-launch-wave** — that's a
lane call for CSRO. Per operating rhythm, reporting rather than acting around CSRO.

## Sequencing respect
D12 says Tier A is **P2, pulled only when it doesn't displace the launch cohort's Visual/Monetization
critical path.** My builds are in a separate app and touch no launch-cohort site, so they don't compete.
The harvest into horses.com should be sequenced by CSRO behind the launch cohort.

## Ask
1. Confirm the build-location path (A / B / C above).
2. Confirm I may continue extending Tier A clusters in `apps/horse-racing` as the staging ground
   (default I'll assume yes — it's $0, in-scope, non-competing — unless you say otherwise).

*Continuing the loop on Tier-A-aligned racing depth in my own app meanwhile; will not touch horses.com
without dispatch.*
