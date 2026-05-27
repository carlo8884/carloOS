# WORKFLOW — CarloOS Operations Layer

How tasks move, how agents hand off, how PRs become releases, and how the
whole thing keeps working when Carlo is asleep. The mechanics behind
`OPERATIONS.md` (snapshot), `BACKLOG.md` (items), and `RELEASES.md`
(history).

Designed to scale from the current "markdown + agents + Carlo merges" state
to a future "GitHub Issues + Projects + CI gates" state without rewrites.

---

## Contents

- [Task Lifecycle](#task-lifecycle) — state machine + per-state rules
- [Handoff Lifecycle](#handoff-lifecycle) — agent ⇄ agent transitions
- [Merge & Release Procedure](#merge--release-procedure)
- [Overnight Workflow](#overnight-workflow)
- [Orchestration Principles](#orchestration-principles)
- [GitHub Issues Migration Plan](#github-issues-migration-plan)

---

## Task Lifecycle

Every backlog item (`F-N` for findings, `B-N` for backlog-only) lives in
exactly one state at a time. The transitions are explicit; no other
movements are allowed.

```
                    ┌──────────────────────────────┐
                    ▼                              │
   TODO  ──►  IN_PROGRESS  ──►  QC_REVIEW  ──►  READY_TO_MERGE  ──►  DONE
     │             │                │                  │              ▲
     │             │                └── (regressions   │              │
     │             │                     send back to  │              │
     │             ▼                     IN_PROGRESS)  │              │
     │         BLOCKED ─────────────────────────────────┘              │
     │             ▲                                                   │
     │             │                                                   │
     └────────► DROPPED ◄─────────── any state, with Carlo authority ──┘
```

### States

| State | Meaning | Who sets it | Exit condition |
|---|---|---|---|
| `TODO` | Item identified, no branch yet. | Agent 2 (findings) / Agent 3 (backlog) | Agent 1 (or owner) creates a branch and commits |
| `IN_PROGRESS` | Active work on a branch, not yet ready for review. | Branch owner | Branch owner pushes a "ready for review" commit and tags Agent 2 |
| `QC_REVIEW` | Agent 2 verifying. | Branch owner moves the item here when tagging Agent 2 | Agent 2 publishes a verdict |
| `READY_TO_MERGE` | Agent 2 sign-off received; Carlo is the next gate. | Agent 2 | Carlo merges or rejects |
| `DONE` | Merged to `main`. Record the merge commit hash. | Agent 3 at the post-merge update | (terminal) |
| `BLOCKED` | Cannot progress without an external decision or dependency. | Any agent who hits the block | The block is resolved; item returns to its prior state |
| `DROPPED` | Cancelled. Record the reason. | Carlo, or all three agents agreeing in the PR | (terminal) |

### Transition rules

- **`TODO → IN_PROGRESS`** — Branch owner. Must create a branch using the convention in `AGENTS.md` § Branch Rules, push the first substantive commit, and add a row to `OPERATIONS.md` § Active Branches.
- **`IN_PROGRESS → QC_REVIEW`** — Branch owner. Branch must be in a buildable state; PR description must follow `AGENTS.md` § PR Rules.
- **`QC_REVIEW → IN_PROGRESS`** — Agent 2. When Agent 2 finds defects, they post evidence (file:line, observed, expected, severity) and the item moves back. Branch owner addresses.
- **`QC_REVIEW → READY_TO_MERGE`** — Agent 2. Requires either zero open Blockers / Highs or a Conditional Go per `QC-STANDARDS.md` § 7.
- **`QC_REVIEW → BLOCKED`** — Agent 2 if a discovered defect requires a decision outside the branch's scope (e.g. a new Blocker that needs its own PR, an escalation to Carlo).
- **`READY_TO_MERGE → DONE`** — Carlo merges. Agent 3 then updates `BACKLOG.md`, `RELEASES.md`, and `OPERATIONS.md` per § Merge & Release Procedure below.
- **`READY_TO_MERGE → IN_PROGRESS`** — Carlo rejects with feedback; branch owner addresses.
- **`(any) → BLOCKED`** — Any agent. The blocker is recorded in `OPERATIONS.md` § Blockers and in the item body. When the block clears, the item returns to whichever state it came from.
- **`(any) → DROPPED`** — Carlo, or unanimous agreement in the PR description. Reason recorded. Item moves to `BACKLOG.md` § Closed (Dropped subsection).

### What does NOT count as a state change

- Pushing intermediate commits on a branch already `IN_PROGRESS` — still `IN_PROGRESS`.
- Force-pushing a rebase on your own branch — still `IN_PROGRESS`.
- A draft audit comment from Agent 2 — still `IN_PROGRESS` until Agent 2 actually moves it to `QC_REVIEW`.
- Carlo skimming the PR — still `READY_TO_MERGE` until the merge or rejection.

---

## Handoff Lifecycle

Who is responsible for the item at each state. Handoff is a deliberate
transition with a recorded action — not "I think someone else has it now."

| Transition | From-agent action | To-agent action |
|---|---|---|
| `TODO → IN_PROGRESS` | Audit/backlog author leaves `BACKLOG.md` row in `TODO` with full evidence. | Branch owner edits the row to `IN_PROGRESS`, adds branch + tip, adds the row to `OPERATIONS.md` table. |
| `IN_PROGRESS → QC_REVIEW` | Branch owner pushes; tags Agent 2 in PR description with "ready for review"; edits the `BACKLOG.md` row. | Agent 2 acknowledges by committing an audit-stub on its own branch (or PR comment) within one session. |
| `QC_REVIEW → IN_PROGRESS` (defects found) | Agent 2 publishes findings as a new `F-N` (or appends to an existing `audits/…md` file) with file/line evidence. Edits the `BACKLOG.md` row back. | Branch owner addresses; cycle repeats. |
| `QC_REVIEW → READY_TO_MERGE` | Agent 2 publishes verdict (Go / Conditional Go) in the PR. Edits the row. | Carlo reviews. |
| `READY_TO_MERGE → DONE` | Carlo merges via GitHub. | Agent 3 runs the post-merge update (see § Merge & Release Procedure). |
| `(any) → BLOCKED` | The agent who hit the block records it in `OPERATIONS.md` § Blockers with: date, agent, item ID, trigger, what's needed to unblock. | The agent with authority to unblock acts (often Carlo for escalation list items). |

### Implicit handoffs are not allowed

If an agent wants to drop the item back into someone else's lane, they must
make the state change visible — edit `BACKLOG.md` AND `OPERATIONS.md` AND
post in the PR. Quiet abandonment is a process defect.

---

## Merge & Release Procedure

The post-merge update is the most error-prone moment in the workflow.
Codified here.

### Pre-merge checklist (Carlo)

Before clicking "Merge":

1. PR title names the roadmap phase or item ID(s) closed.
2. PR description includes: what changed, why, how verified, out of scope, BACKLOG IDs closed, risks/unknowns.
3. Agent 2 has posted a verdict (Go or Conditional Go).
4. Required CI checks are green (once Phase 7 lands; until then, manual verification per PR).
5. No newer Blockers have been recorded in `OPERATIONS.md` § Blockers that this PR doesn't address.

### Merge commit convention

GitHub-style merge commit. First line ≤72 chars:

```
Merge pull request #<N> from <branch>
```

Carlo may rewrite the PR description before merge so the merge commit body
captures: phase, batch-by-batch summary (if multiple commits), verifications
recorded, any new permanent invariants.

### Post-merge update (Agent 3, within 1 session of merge)

Sequence — do all of this in one PR titled `post-merge-<phase-id>`:

1. **`RELEASES.md`** — append an entry under the relevant Phase section:
   - Status: shipped
   - Merge commit hash and date
   - GitHub PR # (the GitHub-assigned number)
   - Branch that merged
   - Summary (theme-by-theme or batch-by-batch)
   - Verifications recorded
   - Any new permanent invariants added to `QC-STANDARDS.md`
2. **`OPERATIONS.md`**:
   - Bump `Last updated:` date
   - Update *Current Phase* if the merge advances the phase
   - Remove the merged branch from *Active Branches & PRs* (it now lives in history)
   - Remove any closed *Blockers* (and confirm the unblock criterion was actually met)
3. **`BACKLOG.md`**:
   - For each item closed by this merge: edit the row from its prior state to `DONE`, record the merge commit hash, move the row to § Closed (chronological order, latest at top)
   - Update § At-a-Glance accordingly
4. **`ROADMAP.md`**:
   - Update phase status (`🟡 → ✅` if the merge completes a phase)
5. Optional but recommended: delete the merged remote branch via Carlo after confirming `git log --oneline main` includes the merge.

### Release-tagging (future, Phase 7)

Not active today. Sketch:
- After each Phase closes (not each sub-PR), Carlo creates an annotated git tag `phase-N` pointing at the merge commit.
- A small script generates a `releases/phase-N.md` artifact from the `RELEASES.md` entry.
- Lays the foundation for GitHub Releases when the repo goes public-or-staged.

---

## Overnight Workflow

Refined version of the rule in `AGENTS.md` § Overnight Mode.

### Decision tree before each action

```
Is this action on the Emergency Stop trigger list?
  ├── YES → Stop. Record in OPERATIONS.md § Blockers. Wake Carlo.
  └── NO → Is it on the Escalation list (AGENTS.md § Escalation)?
        ├── YES → Stop. Leave a labelled note in OPERATIONS.md § Blockers. Do not act.
        └── NO → Is there an Open `TODO` item in my lane in BACKLOG.md?
              ├── YES → Move it through TODO → IN_PROGRESS. Work it.
              └── NO → Is there an `IN_PROGRESS` item of mine waiting for QC?
                    ├── YES → Tag Agent 2 (if you are Agent 1) and move on; or audit (if you are Agent 2).
                    └── NO → Pick the next safe documentation / audit / refactor task.
                             Do NOT invent new features overnight.
```

### Session end checklist

Every overnight session ends with:

1. Branch is buildable. `turbo build` and `turbo type-check` pass (or you document why not).
2. Branch is committed and pushed.
3. PR description reflects current state (what was done, what was skipped, what is unresolved).
4. `OPERATIONS.md` § Active Branches table is truthful.
5. Affected `BACKLOG.md` rows are in their correct state.
6. If you hit a blocker, it is recorded in `OPERATIONS.md` § Blockers with the unblock criteria.
7. If you discovered a new finding, it is in `BACKLOG.md` with full evidence (file:line, observed, expected, severity) — not just hinted at in a commit message.
8. Carlo can resume cold tomorrow morning by reading `OPERATIONS.md` top-to-bottom.

### Morning report (Agent 2 specifically)

Agent 2 always concludes an overnight session with an audit report at
`audits/<YYYY-MM-DD>-<topic>.md`. The first such file each calendar day is
the *morning report*. Subsequent ones are *follow-ups*.

Morning report must include:
- Auditor (Agent 2)
- Branch
- Audited commit hash (the base commit being measured against)
- Methodology
- Severity-ordered findings (Blocker → Info)
- Verified-passing invariants (with method)
- Self-corrections to prior reports
- Recommended go/no-go per `QC-STANDARDS.md` § 7
- What Agent 2 did NOT do (list of avoided actions per `AGENTS.md` § Forbidden Work)

---

## Orchestration Principles

Design rules for any future automation. They are not implemented today —
this section is a brief for whoever (or whichever bot) builds Phase 7.

These principles are deliberately conservative. Multi-agent systems fail in
ways single-agent systems don't, and the failure modes are silent until
they aren't.

### P1 — The repo is the source of truth

Every state change is recorded in git: a commit, a PR comment, an audit
file, a `BACKLOG.md` row. Chat memory, runtime state, ephemeral databases
do not count. If it isn't in git, it didn't happen.

### P2 — Bots open PRs; humans merge

Automation can:
- Read the repo
- Run audits
- Open branches and PRs
- Comment on PRs
- Update its own owned files (`BACKLOG.md` rows, audit reports)

Automation must not:
- Merge anything
- Force-push to `main`
- Delete branches with unmerged work
- Rotate live secrets
- Communicate with third parties under a real account

### P3 — Idempotency

Every automated action must be safe to run twice. If a script writes a
file, running it again with the same input produces the same file. If a
script opens a PR, running it again does not open a duplicate — it
updates the existing one. This protects against retry loops, crashed
runs, and human-triggered re-runs.

### P4 — Read-mostly, write-rarely

Audit / read operations should run often. Write operations should run
seldom and always leave a clear trail. A drift-watch that runs every
15 minutes and *reads* `OPERATIONS.md` § Active Branches against
`git branch -r` is fine. A drift-watch that *edits* `OPERATIONS.md`
every 15 minutes is not — it creates commit noise and obscures real
changes.

### P5 — Evidence trail required

Any automated action that modifies the repo must include evidence in
its commit message: what triggered the action, what input it processed,
what it changed. "Bot did a thing" is not enough.

### P6 — Don't surprise other agents

A bot's actions must be predictable from this file and the other
governance docs. New behaviors require a docs PR first. A bot that
silently learns a new trick is a bot that broke the system.

### P7 — Read-write separation by lane

Automation respects the role lanes in `AGENTS.md`:
- An Agent-1-flavored bot may touch app code but not audit files.
- An Agent-2-flavored bot may write audit files but not app code.
- An Agent-3-flavored bot may write governance docs but not app code or audit files.

### P8 — Pre-merge invariants are CI gates

`QC-STANDARDS.md` invariants are enforced by CI checks, not by trust:
- §1.1.a — eyebrow-badge pattern grep
- §1.1.b — homepage long-form "vet-reviewed" / "Master" / "Certified" grep
- §2.6 — every `sitemap.ts` entry resolves to a real route
- §2.7 — internal link graph has 0 broken links
- §2.11 — no doubled ` | {SiteName}` suffix
- §3.2 — FTC disclosure rendered on review pages
- AGENTS § Branch Rules — branch names match `<agent>/phase-<N><letter>-<topic>`

Phase 7 ships these as the first CI gates. Until then, agents check them
manually before tagging `QC_REVIEW`.

---

## GitHub Issues Migration Plan

Today the backlog lives in `BACKLOG.md`. Long-term it should live in
GitHub Issues + Projects. This section is the migration plan.

### When to migrate

- **Trigger:** Phase 6 opens, OR `BACKLOG.md` exceeds ~50 active items, OR Carlo asks.
- **Pre-condition:** Phase 7 (Automation) has shipped at least one CI gate, so the issue tracker isn't the only enforcement.

### Mapping

| `BACKLOG.md` field | GitHub Issue field |
|---|---|
| ID (`F-N`, `B-N`) | Issue title prefix: `[F-1]`, `[B-1]` |
| Severity | Label: `severity:blocker` / `severity:high` / `severity:medium` / `severity:low` / `severity:info` |
| Status | Label: `state:todo` / `state:in-progress` / `state:qc-review` / `state:ready-to-merge` / `state:done` / `state:blocked` / `state:dropped` |
| Owner | Label: `owner:agent1` / `owner:agent2` / `owner:agent3` / `owner:carlo` |
| Phase | Label: `phase:3a` / `phase:3b` / … |
| Source | Issue body: link to `audits/…md` file at the commit hash |
| Standard | Issue body: link to `QC-STANDARDS.md` §N anchor |
| Files / Evidence | Issue body: as-is markdown |
| Remediation | Issue body: as-is markdown |
| Estimate | Issue body: as-is |
| Branch / Merge | Auto-linked when a PR references the issue |

### Projects board

A single **CarloOS Operations** Project with columns named after the
states (TODO / IN_PROGRESS / QC_REVIEW / READY_TO_MERGE / DONE / BLOCKED).
DROPPED items are archived, not displayed.

### Sunset plan for BACKLOG.md

Three options, in order of preference:

1. **Keep `BACKLOG.md` as an index** that lists open issue IDs, severities, and links. Updated by automation per § Orchestration Principles. The detailed item state lives in Issues; the file gives a single readable place to scan.
2. **Retire `BACKLOG.md`** and replace it with a one-line note pointing at the Projects board. Cleaner but loses offline-readability.
3. **Keep both** indefinitely with automation as the bridge. Highest maintenance cost.

Default: option 1. Revisit at migration time.

### Migration steps

When the trigger condition is met:

1. Agent 3 opens `agent3/issues-migration` branch.
2. Script (one-shot, not idempotent — this is a migration) reads `BACKLOG.md` and creates one GitHub Issue per item with the mapping above. The script is committed to `scripts/migrate-backlog-to-issues.ts` but only ever runs once.
3. PR description for the migration includes the issue-number-to-ID mapping table.
4. After merge, `BACKLOG.md` transitions to the "index" form (option 1 above).
5. New items are filed as Issues directly. The `BACKLOG.md` index is regenerated by automation (P3 idempotency).

---

## Versioning of this file

This is the operating manual. Changes to it are governance changes — they
require a PR, a clear rationale, and updates to dependent files
(`OPERATIONS.md`, `AGENTS.md`, `BACKLOG.md`).

When a rule here conflicts with `QC-STANDARDS.md`, `QC-STANDARDS.md` wins
(the constitution beats the operating manual).

When a rule here conflicts with `AGENTS.md` § Branch Rules or § Escalation
Rules, this file is the more recent expression and wins — but the AGENTS
file should be brought into alignment in the same PR.
