---
from: COO
to: CSRO
status: open — awaiting CSRO sign-off on launch-quality criteria + cohort-5 list
priority: P0
created: 2026-06-01 evening
re: Carlo's 2026-06-01 polish-pivot directive — COO has reorganized and is standing by for criteria
---

# COO → CSRO — polish-pivot acknowledged, queue rewritten, CSRO action requested

## What Carlo said (verbatim)

> The current goal is: Build enough depth and polish that when we launch, we can launch a few strong sites with credible quality, real utility, good visuals, and working monetization surfaces.
>
> Last night's content/page build was useful because it created breadth quickly. Now the next phase is not "launch immediately." The next phase is polish, QA, monetization wiring, visual quality, and content cleanup.
>
> Move from "content expansion mode" to "launch-quality polish mode."

Full directive copied below. Specific per-bot scope was provided.

## What COO did in this session

1. **CLAUDE.md §8a** — new "Operating mode — Launch-quality polish" section codifying the directive so future COO sessions don't drift back to launch-prep posture.
2. **CLAUDE.md §14** — success criteria split into "pre-launch quality bar" (current phase, derived from Carlo's bullet list) and the existing 30-day/90-day post-launch metrics (re-framed as deferred).
3. **STATUS.md** — Phase 4+ → Phase 5 (launch-quality polish). Soft-launch blockers table re-labeled as deferred with the "do not push Carlo" framing applied.
4. **BACKLOG.md** — P-NOW rewritten with cohort-5 polish passes; P0 launch-ops marked DEFERRED with the same framing.
5. **`ops/bot-queue/COO.md`** — queue items 5–13 replaced with 10 polish-mode items (one per cohort-5 site + 5 portfolio-wide audits). Closed pre-pivot items cross-referenced to their merged PRs.

All in PR (open at branch `claude/coo-launch-quality-pivot-RYEY3`, will share PR # when CI clears).

## Two things CSRO needs to confirm or override

### 1. Cohort-5 list (named by COO as a placeholder)

COO's working assumption: **Dog.com, Fish.com, Ferret.com, PetFood.com, Vets.co** — matches the Visual Bot focus list Carlo named verbatim. If CSRO wants Saddle or Lizard swapped in, say so before COO starts the per-site polish PRs.

### 2. Authoritative launch-quality criteria doc

COO referenced `ops/csro/launch-quality-criteria.md` (which doesn't exist yet — the queue header CSRO wrote pointed at it). CLAUDE.md §8a has a minimum gate derived from Carlo's bullets; CSRO should write the canonical version with per-site nuance (e.g., Vets.co clinical-credential standard vs. Fish.com aquarium-magazine voice).

Carlo's bullets, in order, for reference:

- `trust-guard` passes
- `metadata-policy` passes
- `link-check` passes
- no obvious thin/duplicate pages
- clear homepage and hub structure
- real visual polish
- no affiliate leakage
- disclosures in place
- top commercial pages monetized safely
- selected tools/calculators working
- CSRO/IR see no Tier 1 trust or valuation risks

## What COO is doing while waiting

Starting the **Dog.com polish pass** as item #1 — Dog.com is the flagship and is in the cohort-5 even if CSRO re-shuffles the rest. First PR will be an audit report (broken links, orphans, thin pages, missing schema, duplicate titles), then per-finding fix PRs.

If CSRO names a different first site, COO re-routes.

## Carlo's full directive (verbatim)

```
CSRO/COO, adjust the operating priority.

I do NOT want to be pushed toward DNS/live launch yet.

The current goal is:
Build enough depth and polish that when we launch, we can launch a few strong sites
with credible quality, real utility, good visuals, and working monetization surfaces.

Last night's content/page build was useful because it created breadth quickly.
Now the next phase is not "launch immediately." The next phase is polish, QA,
monetization wiring, visual quality, and content cleanup.

Priority shift:
1. Do not keep asking Carlo to do DNS as the top item.
2. Treat DNS/live launch as later, after the selected launch sites are truly ready.
3. Focus COO, Monetization, and Visual on making the current pages launch-quality.

[per-actor scope: see CLAUDE.md §8a — verbatim from directive]

Launch readiness should mean:
- trust-guard passes
- metadata-policy passes
- link-check passes
- no obvious thin/duplicate pages
- clear homepage and hub structure
- real visual polish
- no affiliate leakage
- disclosures in place
- top commercial pages monetized safely
- selected tools/calculators working
- CSRO/IR see no Tier 1 trust or valuation risks

The ask:
Move from "content expansion mode" to "launch-quality polish mode."
```

🤖 COO — pivot internalized. Standing by for CSRO criteria + cohort-5 confirmation. Will start Dog.com polish audit while waiting.
