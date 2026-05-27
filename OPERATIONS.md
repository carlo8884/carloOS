# OPERATIONS — CarloOS

Live operating dashboard. The repo is the source of truth; chat memory is not.
Update this file whenever the active phase, priorities, branches, or blockers change.

Last updated: 2026-05-27 (Phase 3a merged as `caead17`; `WORKFLOW.md` added; lifecycle states adopted).

---

## Numbering Note

CarloOS uses **two** numbering schemes — they are not the same and the
distinction matters:

- **Roadmap phases** — strategic milestones, stable identifiers (`Phase 1 …
  Phase 7`). See `ROADMAP.md`. A phase may ship as one PR or as several
  sub-PRs (`Phase 3a`, `Phase 3b`, etc.). **Branch names use phase IDs**
  (see `AGENTS.md` § Branch Rules).
- **GitHub PR numbers** — whatever GitHub assigns when a PR is opened, in
  the order it is opened. Not aligned with roadmap phases. Never use in
  branch names.

When a doc says **Phase #N** it means the roadmap milestone. When a doc
says **PR #N (GitHub)** it means a specific GitHub-issued pull request.
Pre-existing branches named with the `pr<n>` style (e.g.
`agent1/pr4-seo-stabilization`) are tolerated mid-stream but should not be
created going forward.

---

## Current Phase

**Phase 3 — SEO & Infrastructure Stabilization** is the active phase. Sub-status:

- **Phase 3a** — Trust Hotfix — ✅ **DONE** (merged `caead17` as GitHub PR #5)
- **Phase 3b** — SEO Infrastructure — 🟡 **IN_PROGRESS** on `agent1/pr4-seo-stabilization @ b28782b` (rebased onto post-3a `main`)
- **Phase 3c** — Schema Completeness — ⬜ **TODO**

Detail per phase: `ROADMAP.md`. Per-item state: `BACKLOG.md`. Lifecycle rules: `WORKFLOW.md`.

`main` is currently at `caead17`. The two BLOCKER findings on `main@4c27988`
(F-1, F-2) and the HIGH finding (F-3) are cleared. The going-live blocker
on `main` is lifted *for those specific findings* — Phase 3b items remain
open before `main` is deploy-ready.

---

## Active Priorities

In order. Detail and remediation live in `BACKLOG.md`; this is just the queue.

1. **Phase 3b — SEO Infrastructure** — `F-4` … `F-9` already in flight on `agent1/pr4-seo-stabilization`. Next handoff: `IN_PROGRESS → QC_REVIEW` once branch owner tags Agent 2.
2. **Phase 3c — Schema Completeness** — `F-11`, `F-12`. TODO. Can ship in parallel with 3b.
3. **Governance docs** — this branch. Lands `WORKFLOW.md` + lifecycle adoption.
4. **Backlog hygiene** — `B-1` retire `DASHBOARD.md`; `B-2` / `B-6` clean up historical + merged branches; `B-5` resolve branch-naming/role drift observation.

---

## Active Branches & PRs

| Branch | Owner | Tip | Purpose | Status |
|---|---|---|---|---|
| `main` | shared | `caead17` | Production trunk | Stable; Phase 3a merged |
| `claude/ecstatic-shannon-tXkds` | Agent 3 | latest in this PR | Governance docs (this PR) | Pushed, awaiting merge |
| `claude/carloOS-internal-linking-audit-1nrhH` | Agent 2 | `d288ebf` | Morning audit + pre-Phase-2 sitemap commits | Pushed; sitemap commit `78cca07` superseded by `f2ca243` on `agent1/pr4-…` |
| `agent1/pr4-seo-stabilization` | Agent 1 | `b28782b` | Phase 3b work (F-4, F-5, F-8 partial, F-9) — rebased post-3a | `IN_PROGRESS`; not yet tagged for QC |
| `agent2/pr3a-trust-badges` | (see B-5) | `b6ddae9` | Closed Phase 3a (F-1, F-2, F-3) | Merged via `caead17`; safe to delete (B-6) |
| `claude/remove-fake-authority-0WY61` | Historical | `b664eff` | Source for Phase 2 merge `4c27988` | Likely safe to delete (see B-2) |

When opening, closing, or pushing material commits to a branch, update this table — leave a "Status" note in the same edit.

---

## Blockers

Open blockers ordered by severity. Detail and file lists live in `BACKLOG.md`.

_No open blockers as of 2026-05-27 afternoon._ Phase 3a (F-1, F-2, F-3)
merged via `caead17`. Phase 3b is `IN_PROGRESS` but contains only Medium
and Low findings — no Blocker / High.

Going-live posture: clearing the trust blockers does not mean `main` is
deploy-ready. Phase 3b's F-4 (sitemap 404s) and F-5 (doubled titles)
remain present on `main` and would damage SEO if crawled. Phase 3b must
merge before any real-domain attachment.

If a new blocker is discovered, add a row here with: date, agent, ID,
severity, unblock criteria. Create the matching `F-N`/`B-N` in
`BACKLOG.md`. State transition is governed by `WORKFLOW.md`
§ Task Lifecycle (any → `BLOCKED`).

---

## Standing Warnings

Carry-forward warnings every agent must respect on every PR. These are
abbreviated; the canonical wording lives in `QC-STANDARDS.md`.

- **No fabricated authority — broader than DVM bylines.** Includes eyebrow badges and homepage long-form copy. See `QC-STANDARDS.md` § 1.1.a / 1.1.b.
- **No invented history.** Unknown facts get marked `UNKNOWN`, not guessed.
- **No merges to `main` without Carlo's explicit approval.**
- **Do not commit secrets.** `.env.local` only.
- **No silent app-code changes from Agent 3.**
- **FTC disclosure must remain visible on every page with affiliate links.** (`QC-STANDARDS.md` § 3.2)
- **Do not regress Phase 2 invariants.** (`QC-STANDARDS.md` Appendix)
- **Branch naming uses `phase-N` not `pr-N`.** (`AGENTS.md` § Branch Rules)

---

## PR Sequencing & Dependencies

```
              main (caead17, Phase 3a merged)
                          │
              ┌───────────┴────────────┬──────────────┐
              ▼                        ▼              ▼
     Phase 3b (SEO infra)    Phase 3c (schema)   Governance docs
     F-4..F-9                F-11 F-12           (this branch)
     IN_PROGRESS             TODO                IN_PROGRESS
              │                        │              │
              ▼                        ▼              ▼
       QC_REVIEW (A2)          QC_REVIEW (A2)    Carlo review
              │                        │              │
              ▼                        ▼              ▼
       READY_TO_MERGE          READY_TO_MERGE    DONE
              │                        │
              ▼                        ▼
       DONE (Carlo)              DONE (Carlo)
```

Sequencing rules:

- **Hard block (resolved):** Phase 3a hard-blocked 3b/3c until merge. That block lifted at `caead17`.
- **Parallelizable now:** Phase 3b and 3c can ship as separate PRs — they touch different file sets (`packages/ui/SEOHead.tsx` + `apps/*/sitemap.ts` + `reviews/*` vs `health/*` + `faq/`). Governance docs run in parallel with both.
- **Phase 4 hard block:** cannot start until Phase 3 closes (all of 3b/3c merged + Agent 2 sign-off).

Lessons recorded in `BACKLOG.md` B-5: during Phase 3a, 3b started before 3a
merged. The fix was a rebase, which worked, but the rule going forward is
to wait for the gating PR to land before opening dependent ones.

---

## Morning Workflow

Lightweight per-session startup. Detailed lifecycle and overnight rules
live in `WORKFLOW.md`. The 8-step version any agent runs first:

1. **Fetch and orient.** `git fetch --all --prune`. Compare `git branch -r` against the *Active Branches & PRs* table. New sibling branches mean another agent has moved.
2. **Read this file top-to-bottom.** If anything is stale, your first commit is a docs fix on your own branch.
3. **Open `BACKLOG.md` § At-a-Glance.** Find a `TODO` item in your lane whose preconditions are met. If nothing fits, see `WORKFLOW.md` § Overnight Workflow decision tree.
4. **Check `RELEASES.md` § Audit Log** for any new audits since your last session.
5. **Branch using the convention.** `<agent>/phase-<N><letter>-<topic>`. See `AGENTS.md` § Branch Rules.
6. **Move the item from `TODO` to `IN_PROGRESS`** in `BACKLOG.md` (update the At-a-Glance table AND the item body). Add the branch row to *Active Branches & PRs* here.
7. **Commit small, push often.** One PR per scoped goal. When the branch is ready for review, move the item to `QC_REVIEW` and tag Agent 2.
8. **End of session:** ensure the branch is buildable; tables truthful; blockers recorded. `WORKFLOW.md` § Overnight Workflow has the full end-of-session checklist.

---

## What Each Agent Should Do Next

Short bullets only. Per-item detail in `BACKLOG.md`; per-state action rules in `WORKFLOW.md`.

- **Agent 1** — `agent1/pr4-seo-stabilization` is rebased onto post-3a `main`. Finish F-6, F-7, and the remaining 33 pages of F-8, then move the items to `QC_REVIEW` and tag Agent 2. After that PR merges, open `agent1/phase-3c-schema` for F-11, F-12.
- **Agent 2** — verify `agent1/pr4-seo-stabilization` (closes F-4, F-5, F-8 partial, F-9, and now F-6/F-7 once added). Publish `audits/2026-05-27-phase-3b-verify.md` against the branch tip and against post-3a `main@caead17`. Drop a self-correction line for the morning-audit findings now in `DONE`.
- **Agent 3** — land this docs PR (introduces `WORKFLOW.md` + lifecycle states). Then progress B-1 (retire `DASHBOARD.md`), B-2 + B-6 (verify mergedbranches safe to delete). Track B-5 for Carlo's decision.

---

## Update Protocol

Any agent may edit this file on their own branch as part of their PR. When
editing:
- Bump the `Last updated:` date at the top.
- Keep the *Active Branches & PRs* table truthful — stale rows cost more than missing ones.
- Do **not** duplicate `BACKLOG.md` detail or `ROADMAP.md` scope here. This file is a snapshot, not an archive.
