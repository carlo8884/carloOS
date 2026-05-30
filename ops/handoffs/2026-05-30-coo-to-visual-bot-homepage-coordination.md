# COO → Visual Bot — Homepage Redesign Coordination

**Date:** 2026-05-30
**From:** COO (AI Chief of Staff)
**To:** Visual Bot
**Re:** Dog.com (PR #170) + Fish.com (PR #171) homepage redesigns

---

## Context

Carlo asked for two narrow homepage redesigns this week, both already shipped as single-file PRs:

| Site | PR | Branch | File |
|---|---|---|---|
| Dog.com | [#170](https://github.com/carlo8884/carloOS/pull/170) | `feat/dog-com-owner-os-2026-05-30` | `apps/dog-com/src/app/page.tsx` |
| Fish.com | [#171](https://github.com/carlo8884/carloOS/pull/171) | `feat/fish-com-tank-control-center-2026-05-30` | `apps/fish-com/src/app/page.tsx` |

Both redesigns convert the previous static-reference homepages into **problem-first owner operating surfaces** (Dog.com: 5 owner-path cards; Fish.com: 6 tank-problem cards).

---

## Your invitation (what we want from you)

Carlo's direct instruction: *"Visual Bot should advise on layout, composition, imagery, and homepage interaction polish."*

Please review PR #170 and PR #171 and leave **review comments only** on these axes:

1. **Visual hierarchy** — does the eye land on the right card first? Are the urgent-palette cards (vet/ammonia) sufficiently distinguished from the planning cards?
2. **Composition / whitespace** — section pacing, density of card grids, balance between editorial copy and CTAs.
3. **Imagery slots** — both pages currently lean on icon-based cards (no photo hero on Fish.com; Dog.com keeps its existing hero). If you want a photo hero or category illustrations, sketch the slot + dimensions + source-of-image plan (stock manifest, not AI-generated humans).
4. **Interaction polish** — hover/focus states, mobile breakpoint behavior, card-press affordance.
5. **Accessibility** — color contrast on the urgent palette, focus rings, motion-safety.

---

## Lane boundaries (NON-NEGOTIABLE per `ops/policies/bot-coordination.md` §2)

❌ **Do NOT directly edit** `apps/dog-com/src/app/page.tsx` or `apps/fish-com/src/app/page.tsx` while these PRs are open. If your suggestions require code changes, leave PR review comments and the COO will land them — OR open a follow-up PR after #170 / #171 merge, on a separate branch, scoped to your suggested change.

✅ **You MAY freely edit:**
- `packages/ui/src/components/*` (shared UI library — your owned lane)
- Per-site icon / illustration assets in `apps/<site>/public/`
- Stock-image manifest entries

❌ **Trust-bar reminders:**
- No AI-generated humans in trust contexts (no fake vets, no fake patient scenes)
- All imagery must carry attribution per the existing manifest pattern
- No paid favorable reviews on editorial sites (Dog.com, Fish.com are both editorial)

---

## Sequencing

1. **Now:** review PR #170 + PR #171, leave comments
2. **After merge:** if you have shared-component improvements (e.g., a polished `<ProblemCard>` primitive in `packages/ui`), open your own PR on a `feat/ui-<scope>` branch
3. **Future:** when Visual Bot wants to propose a hero / illustration system, open a brief in `ops/handoffs/YYYY-MM-DD-visual-bot-<topic>.md` and tag the COO for lane review

---

## Conflict protocol

Per §8 of the bot-coordination policy:
- First merge wins — if your PR conflicts with mine, you rebase
- One push-back per PR; escalate to Carlo if stuck
- Do not weaken the trust bar (§3) or forbidden-vendor list (§5) under any circumstance

---

🤖 COO
