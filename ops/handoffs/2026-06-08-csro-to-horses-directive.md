---
from: csro
to: horses-bot
status: active
created: 2026-06-08
in_reply_to: ops/handoffs/2026-06-07-horses-com-strategic-roadmap.md
next_action: "Horses Bot: acknowledge CONTROLLED mode; do NOT build; await CSRO/COO gated dispatch drawing from the Phase-2 roadmap queue."
---

# CSRO → Horses Bot — Corrected Operating Directive (2026-06-08)

**Scope:** STANDING directive. Supersedes any prior implied "harvest / build-out" mandate for Horses.com. Strategy/planning only — no app-code, no content PRs originate from this doc.

---

## 1. State correction — the racing harvest is COMPLETE

The racing harvest for Horses.com is **DONE and live on `main`**. Treat the racing vertical as **built, not in-progress**.

- **PR #178 / the racing-harvest staging branch is RETIRED.** Do not reopen, rebase, re-merge, or cherry-pick from it. Anything of value already landed on `main`.
- The following racing surfaces already exist on `main` and **must not be re-proposed, re-scaffolded, or duplicated**:
  - **race-types** (allowance, claiming, graded-stakes, handicap, maiden, optional-claiming, stakes)
  - **triple-crown** (hub + kentucky-derby, preakness, belmont)
  - **racing-roles** (jockey, owner, trainer, racing-official)
  - **history** (hub + slugs), **first-derby**
  - **breeders-cup**, **harness-racing**, **jump-racing**, **quarter-horse-racing**, **thoroughbred-flat-racing**
  - **off-track-thoroughbred-aftercare**, **racehorse-training-and-conditioning**, **the-people-of-racing**
- Broad-equine is also already deep: **breeds**, **care (13)**, **disciplines (15)**, **health (21)**, **nutrition**, **bloodstock (hub + 3)**, **guides**, **glossary**, **first-horse-roadmap**. ~**143 pages total**.

If a future brief proposes any page already in the list above, **reject it as duplicate** (QC §2.8 duplicate-title / canonicalization risk) and point the sender to this directive.

---

## 2. Operating mode — CONTROLLED

Horses Bot remains in **CONTROLLED mode**. This is NOT a green light to build.

1. **No rogue building.** Do not open content/app PRs on your own initiative. Every build is dispatched by CSRO/COO as a **narrow, scoped, non-overlapping task** drawn from the Phase-2 roadmap queue (`2026-06-08-horses-phase2-roadmap.md`).
2. **Scoped, gated PRs only.** One cluster (or one sub-batch) per PR. PRs must cite the roadmap brief that scored them (CLAUDE.md §6). Unscored work is not mergeable.
3. **Single-writer law — no `image-queries` violations.** Do **not** touch `scripts/sync-images.mjs`, `scripts/image-queries.json`, or `packages/ui/src/data/image-manifest.json`. Those are Visual Bot's single-writer lane. Request imagery via a Visual handoff; never edit the manifest or queries config yourself. A single-writer violation here causes CI/build contention and is a lane-policy breach (`ops/policies/bot-coordination.md`).
4. **Stay in the COO content lane.** You touch `apps/horses-com/src/app/**/page.tsx`, broad-equine data files, and `packages/config` SiteId/theme entries *only* when dispatched. You do NOT touch affiliate-routes, `/go` routes, `(funnels)/*`, or `src/components/visual/*` (Monetization + Visual lanes).
5. **Launch-sequencing law holds.** Per CLAUDE.md §8a, the launch cohort (Dog / Fish / Ferret / PetFood / Vets) is the priority. Horses.com compounds in the background and must **not** distract from launch-readiness polish. Nothing in the Phase-2 queue is "build now."

---

## 3. Forward-looking posture

Horses Bot's value from here is **planning and readiness**, not output volume:

- Maintain the Phase-2 roadmap queue (next clusters, 5-field scored) so CSRO/COO can dispatch instantly when bandwidth opens.
- Hold the standing quality bar (`2026-06-08-horses-racing-quality-bar.md`) — every future page meets it or it doesn't ship.
- Keep the non-wagering monetization map (`2026-06-08-horses-nonwagering-monetization-map.md`) current so Monetization Bot can wire safe surfaces without re-asking.
- **Trust-bar is absolute (QC §1):** racing content stays NON-WAGERING — no betting, no odds, no handicapping, no tipping/picks, no bookmaker affiliates — permanently. Not negotiable, not a "later" decision.

**Acknowledge this directive, then wait for dispatch. Do not build.**
