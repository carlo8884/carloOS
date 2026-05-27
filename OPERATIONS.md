# OPERATIONS — CarloOS

Live operating dashboard. The repo is the source of truth; chat memory is not.
Update this file whenever the active phase, priorities, branches, or blockers change.

Last updated: 2026-05-27 (afternoon — picked up two new sibling-agent branches; added Morning Workflow + PR Sequencing).

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

**Phase 3 — SEO & Infrastructure Stabilization** is the active phase.

Phase 3 is decomposed into:
- **Phase 3a** — Trust Hotfix (gating; closes F-1, F-2, F-3)
- **Phase 3b** — SEO Infrastructure (F-4 – F-9)
- **Phase 3c** — Schema Completeness (F-11, F-12)

Detail per phase: `ROADMAP.md`. Per-item state: `BACKLOG.md`.

Previous phase (Phase 2) merged to `main` on 2026-05-26 in commit `4c27988`.
A post-merge gap surfaced by the 2026-05-27 audit is documented in
`RELEASES.md` § Phase 2 "Known gap discovered post-merge" — it is **not**
re-narrated in this file.

---

## Active Priorities

In order. Detail and remediation live in `BACKLOG.md`; this is just the queue.

1. **Phase 3a — Trust Hotfix** — closes `F-1`, `F-2`, `F-3`. Gating for 3b/3c.
2. **Phase 3b — SEO Infrastructure** — `F-4` … `F-9`. Several items already in flight on `agent1/pr4-seo-stabilization`.
3. **Phase 3c — Schema Completeness** — `F-11`, `F-12`. Can run in parallel with 3b once 3a merges.
4. **Governance docs** — this branch. Lands the new structure.
5. **Backlog hygiene** — `B-1` retire `DASHBOARD.md`; `B-2` clean up historical branches; `B-5` resolve branch-naming/role drift observation.

---

## Active Branches & PRs

| Branch | Owner | Tip | Purpose | Status |
|---|---|---|---|---|
| `main` | shared | `4c27988` | Production trunk | Stable; Phase 2 merged |
| `claude/ecstatic-shannon-tXkds` | Agent 3 | latest in this PR | Governance docs (this PR) | Pushed, awaiting merge |
| `claude/carloOS-internal-linking-audit-1nrhH` | Agent 2 | `d288ebf` | Morning audit + pre-Phase-2 sitemap commits | Pushed; sitemap commit `78cca07` may be superseded by `agent1/pr4-…` |
| `agent2/pr3a-trust-badges` | Branch labeled `agent2/`; content is Agent 1 lane (see B-5) | `b6ddae9` | Closes F-1, F-2, F-3 | Pushed; awaiting Agent 2 verification + Carlo merge |
| `agent1/pr4-seo-stabilization` | Agent 1 | `8fddfc8` | Phase 3b work (F-4, F-5, F-8 partial, F-9) + orphan-page reduction + seo-audit script refresh | Pushed; awaiting Agent 2 verification + Carlo merge |
| `claude/remove-fake-authority-0WY61` | Historical | `b664eff` | Source for Phase 2 merge `4c27988` | Likely safe to delete (see B-2) |

When opening, closing, or pushing material commits to a branch, update this table — leave a "Status" note in the same edit.

---

## Blockers

Open blockers ordered by severity. Detail and file lists live in `BACKLOG.md`.

| ID | Sev | Title | Unblocks when |
|---|---|---|---|
| F-1 | Blocker | 18 credentialed-testing eyebrow badges | `agent2/pr3a-trust-badges @ b6ddae9` merges to `main` AND Agent 2 verifies |
| F-2 | Blocker | Lizard homepage "vet-reviewed" claim | Same merge as F-1 |
| F-3 | High | Saddle homepage fake-personnel stat block | Same merge as F-1 |

**Going-live blocker:** while F-1 and F-2 are open on `main`, `main` must
not be attached to any real domain.

If a new blocker is discovered, add a row here with: date, agent, ID,
severity, unblock criteria. Then create the matching `F-N`/`B-N` item in
`BACKLOG.md`.

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
                     main (4c27988, Phase 2)
                              │
              ┌───────────────┴────────────┬──────────────┐
              ▼                            ▼              ▼
     Phase 3a (trust)         Phase 3b (SEO infra)   Governance docs
     F-1 F-2 F-3              F-4..F-9               (this branch)
              │                            │              │
              │   ┌─ HARD BLOCKS ─►        │              │
              │                            │              │
              └──► must merge first ◄──────┤              │
                                           │              │
                                  Phase 3c (schema)       │
                                  F-11 F-12               │
                                           │              │
                                           ▼              ▼
                                   Agent 2 verify    Carlo review
```

Sequencing rules:

- **Hard block:** Phase 3a must merge before Phase 3b/3c go to `main`. Reason: trust regressions on review pages overlap with the same files Phase 3b touches; landing 3b first lengthens the blocker window.
- **Soft block:** Governance docs (this PR) and Phase 3a/3b/3c can run **in parallel** on separate branches. They don't share files. Merge order between them doesn't matter.
- **Parallelizable inside Phase 3:** Phase 3b and 3c can ship as separate PRs once 3a is in `main` — they touch different file sets (`packages/ui/SEOHead.tsx` + `apps/*/sitemap.ts` + `reviews/*` vs `health/*` + `faq/`).
- **Phase 4 cannot start until Phase 3 closes** (all of 3a/3b/3c merged + Agent 2 sign-off).

Reality check (afternoon refresh): Phase 3a and Phase 3b are **both already
in flight** on separate branches. That violates the hard-block rule. The
practical resolution is: merge 3a first, rebase 3b onto post-3a `main`, then
merge 3b. Recorded in `BACKLOG.md` B-5 for governance follow-up.

---

## Morning Workflow

Lightweight per-session startup any agent should follow. Designed to take
≤2 minutes before substantive work begins.

1. **Fetch and orient.** `git fetch --all --prune`. Look at `git branch -r` and compare against the *Active Branches & PRs* table above. New sibling branches mean another agent has moved.
2. **Read this file top-to-bottom.** Current Phase, Active Priorities, Blockers, Active Branches. If any item is stale, your first commit is a docs fix on your own branch.
3. **Open `BACKLOG.md` § At-a-Glance.** Find an `Open` item in your lane whose preconditions are met. If everything is `In Progress` by someone else, see § Overnight Mode in `AGENTS.md`.
4. **Check `RELEASES.md` Audit Log** for any new audits since your last session. New audits may have promoted items to Blocker or added new findings.
5. **Branch using the convention.** `<agent>/phase-<N><letter>-<topic>`. See `AGENTS.md` § Branch Rules.
6. **Commit small, push often.** One PR per scoped goal. Update the *Active Branches & PRs* table when you push your first commit and again when you mark the PR ready.
7. **Write the PR description from the template.** What changed / why / how verified / out of scope / risks. Link to the `BACKLOG.md` item IDs your PR closes.
8. **End of session:** ensure your branch is buildable and committed; update the table; if Carlo is offline, leave a clearly labeled note in *Blockers* or *Standing Warnings* before stopping.

---

## What Each Agent Should Do Next

Short bullets only. Per-item detail in `BACKLOG.md`.

- **Agent 1** — wait for `agent2/pr3a-trust-badges` to merge, then rebase `agent1/pr4-seo-stabilization` onto post-3a `main` and address the remaining Phase 3b items (`F-6`, `F-7`, finish `F-8` for the remaining 33 pages). Open Phase 3c branch for `F-11`, `F-12` once 3a is in `main`.
- **Agent 2** — verify `agent2/pr3a-trust-badges` (closes F-1/F-2/F-3) and `agent1/pr4-seo-stabilization` (closes F-4/F-5/F-8 partial/F-9). Publish `audits/2026-05-27-afternoon-verify.md` with the result.
- **Agent 3** — land this docs PR. Then progress `B-1` (retire `DASHBOARD.md`) and `B-2` (verify historical branch can be deleted). Track `B-5` (branch-naming + role-lane drift) for Carlo's decision.

---

## Update Protocol

Any agent may edit this file on their own branch as part of their PR. When
editing:
- Bump the `Last updated:` date at the top.
- Keep the *Active Branches & PRs* table truthful — stale rows cost more than missing ones.
- Do **not** duplicate `BACKLOG.md` detail or `ROADMAP.md` scope here. This file is a snapshot, not an archive.
