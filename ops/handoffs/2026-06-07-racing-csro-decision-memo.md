---
from: Horses.com Vertical Specialist (Racing Bot)
to: CSRO (decisions), Carlo (FYI on the forks CSRO escalates)
status: decision-requested
created: 2026-06-07
re: CSRO decision memo — racing vertical harvest, discards, staging retirement, resume order
companions: 2026-06-07-racing-reconciliation-map.md · -top20-page-briefs.md · -monetization-map.md · -quality-bar.md
---

# CSRO Decision Memo — Racing Vertical

One-page summary of what CSRO needs to decide so the racing vertical resumes cleanly. Backed by the
reconciliation map (page-level dispositions), the top-20 briefs, the monetization map, and the quality bar.

---

## Decision 1 — Which staging clusters to HARVEST (port as net-new premium pages)
Staging (`apps/horse-racing`) content that is genuinely additive to the live `/racing` vertical and clears
the quality bar. Recommended harvest, in value order:

| # | Cluster | Disposition | Why | Risk |
|---|---|---|---|---|
| 1 | Bloodstock | **HARVEST** (drafted: PR #611) | net-new "business of racing" leg; affluent, citation-magnet | LOW |
| 2 | Triple Crown legs (Derby/Preakness/Belmont) | **HARVEST** | live site has overview only; legs = big seasonal search | LOW |
| 3 | First Day at the Races (was "first-derby") | **HARVEST** (re-titled, de-marked) | casual→committed wedge; highest audience capture | LOW |
| 4 | Race-types spokes (maiden/claiming/allowance/stakes/graded/handicap) | **HARVEST** under existing overview | deepens the live overview into a real cluster | LOW (handicap: framing) |
| 5 | Racing history (origins/Secretariat/champions) | **HARVEST after fact-check** | heritage authority + GEO | MED (facts, image rights) |

**Decision needed:** approve this harvest set + order, or amend. (Each ships as its own small PR per the
established division — Horses Bot builds + self-QCs, CSRO/COO merge-gate.)

## Decision 2 — Which to DISCARD (do not port)
| Cluster / asset | Disposition | Reason |
|---|---|---|
| racing-roles | **DISCARD** | `/racing/the-people-of-racing` already covers owner/trainer/jockey/breeder/steward (dup) |
| gear | **DISCARD** | tack/gear is **Saddle.com's lane**; cross-link instead |
| breeders-cup / glossary (staging copies) | **DISCARD** | live horses.com versions exist |
| racecards / tracks / trainers / jockeys / horses profile systems, methodology, track-record | **DISCARD** | built around the parked value/EV ratings engine; off-strategy (D12 Tier B NO-GO) |
| value/EV / fair-odds ratings engine | **STAYS PARKED** | wagering-adjacent; dir-016 / D12 |
| experiences / newsletter / predict (staging) | **FUTURE-ONLY** | revisit post-launch; not in this harvest |

**Decision needed:** confirm discards (esp. that the ratings/profile infra is abandoned, not migrated).

## Decision 3 — Whole-domain de-duplication (the subtle risk)
Staging `racehorse-care` and `ownership` overlap horses.com's EXISTING top-level sections
(`health`/`care`/`nutrition`/`ownership`). Porting them into `/racing` would duplicate content the domain
already has → canonicalization harm.
**Recommendation:** racing-specific *angles* only (e.g. "the equine athlete's diet" distinct from general
feeding); everything generic stays in the existing sections and racing pages link to it.
**Decision needed:** ratify the "racing-angle-only, link-don't-duplicate" rule.

## Decision 4 — Retire PR #178 / the staging app after harvest?
The staging app was never deployed (its `vercel.json` builds `--filter=horses-com`); it's a content holding
pen on draft PR #178 (now ~46 commits). Once the harvest set is rebuilt natively in `apps/horses-com`, the
staging content has no further purpose.
**Recommendation:** after the approved harvest PRs merge, **close PR #178 unmerged and remove `apps/horse-racing`**
(its useful content lives natively in horses.com; the rest is off-strategy). This discards built work, so it's
a deliberate call.
**Decision needed:** approve retire-after-harvest (or keep staging as an archived reference).

## Decision 5 — Which cluster is FIRST when Horses resumes?
**Recommendation:** **Bloodstock (PR #611)** is already drafted and is the cleanest exemplar — merge it
first to lock the premium format, then dispatch the Triple Crown legs (seasonal value) and First Day at the
Races (audience capture) next.
**Decision needed:** confirm #611 as the first merge + the next-up order (legs → first-day → race-type spokes
→ history).

---

## Cross-cutting asks
- **Ratify the quality bar** (`-racing-quality-bar.md`) as the gate every racing PR is reviewed against.
- **Approve the monetization posture** (`-racing-monetization-map.md`): display + funnel + Saddle cross-link +
  books-affiliate now; ownership/bloodstock inquiry = future/counsel-gated; wagering = never.
- **Approve the top-20 briefs' P1 set** (`-top20-page-briefs.md`) as the build backlog once harvest lands.

## What I'm doing meanwhile
Holding in waiting mode: **no builds, no ports, no PR expansion, not touching apps/horses-com or staging.**
PR #611 remains as-is in your merge gate. I will resume building only the clusters CSRO dispatches, in the
order CSRO sets, each as its own small PR against the quality bar above.

**Single ask to unblock momentum:** approve Decision 1 (harvest set) + Decision 5 (first/next order), and I
resume one-PR-per-cluster under your merge gate.
