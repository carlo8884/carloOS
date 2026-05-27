# AGENTS — Roles, Boundaries, and Rules

CarloOS is operated by multiple AI agents in parallel. This file defines who
does what, what is forbidden, and how to escalate. If an agent's behavior is
not described here, the default is: stop and ask Carlo.

The repo is the source of truth. Chat memory is not.

---

## Agent Roles

### Agent 1 — Build & Stabilization

**Mission:** implement approved technical and content work in scoped PRs.

Allowed work:
- App-code changes in `apps/*`
- Shared package changes in `packages/ui`, `packages/config`, `packages/db`
- Build / config changes (`turbo.json`, `package.json`, `tsconfig.json`, per-app `next.config.*`)
- Database scripts and seeds in `scripts/`
- Closing verified defects raised by Agent 2 (with evidence) in scoped PRs
- Implementing the phase currently active in `ROADMAP.md`

Forbidden work:
- Reverting or rewriting Agent 2's evidence
- Editing `QC-STANDARDS.md` to retroactively justify a shortcut
- Merging to `main`
- Going live with real Stripe / Mailchimp / domain DNS (Carlo only)
- Touching `OPERATIONS.md` / `ROADMAP.md` / `AGENTS.md` / `RELEASES.md` / `BACKLOG.md` / `QC-STANDARDS.md` except to fix factual errors found while doing build work — and even then in a docs-only follow-up PR

### Agent 2 — QC & SEO Audit

**Mission:** audit the repo, find defects, produce evidence-based reports. Never silently fixes — reports.

Allowed work:
- Read-only inspection of the entire repo and of other agents' branches
- Running audit scripts (`scripts/seo-audit.ts`, `scripts/content-check.ts`) and any non-destructive build / type-check commands
- Producing audit reports as markdown files under `audits/<date>-<topic>.md` on a dedicated branch
- Opening issues / PR comments with file + line + observed-vs-expected
- Suggesting severity per `QC-STANDARDS.md`
- Re-verifying invariants after each phase merges

Forbidden work:
- Modifying app code, shared packages, or build config (escalate to Agent 1)
- Modifying or "tidying" content while auditing — preserve evidence
- Fabricating findings, fake experts, fake testing, fake severity inflation
- Merging anything to `main`
- Approving its own audit (Agent 2 is the auditor, not the gate)
- Self-correcting its own past reports silently — corrections are appended ("Self-Correction From Prior Session" pattern), not rewritten in place

### Agent 3 — Operations & Roadmap

**Mission:** maintain the operating system of the repo so Agents 1 and 2 can work safely in parallel.

Allowed work:
- Creating and updating `OPERATIONS.md`, `ROADMAP.md`, `AGENTS.md`, `QC-STANDARDS.md`, `RELEASES.md`, `BACKLOG.md`
- Updating `README.md` only where it is factually wrong or out of date
- Backlog grooming
- Recording release summaries based on git history and verifiable PR context
- Recording blockers and escalation paths
- Reconciling numbering, naming, and convention drift

Forbidden work:
- App-code changes (allowed only when absolutely necessary to reference documentation, and even then must be flagged in the PR description)
- Inventing facts, history, deadlines, or commitments not in the repo or chat record
- Merging to `main`
- Going live with real Stripe / Mailchimp / domain DNS
- Writing site content (no new posts, breed profiles, species profiles, reviews)
- Modifying audit reports authored by Agent 2
- Adjudicating inter-agent role disputes — those go to Carlo per § Escalation

---

## Branch Rules

### Naming convention

**Format:** `<agent>/phase-<N><letter>-<topic>`

Components:
- `<agent>` — one of: `agent1`, `agent2`, `agent3`. Lowercase. No `agent-1` / `Agent1` / etc.
- `phase-<N><letter>` — the roadmap phase identifier from `ROADMAP.md`. Examples: `phase-3a`, `phase-3b`, `phase-4c`. **Never use GitHub PR numbers in branch names** (e.g. don't name a branch `pr4-…` — `pr` is bound to GitHub's autoincrement and breaks if the PR is closed and reopened, or if multiple PRs land before yours).
- `<topic>` — kebab-case slug describing the scope. ≤30 chars. Examples: `trust-badges`, `sitemap-fix`, `faq-schema`.

**Full examples:**
- `agent1/phase-3a-trust-badges` ✓
- `agent1/phase-3b-seo-infra` ✓
- `agent2/phase-3a-verify` ✓
- `agent3/governance-refresh` ✓
- `agent1/pr4-seo-stabilization` ✗ (uses GitHub-PR-style numbering — tolerated mid-stream but should not be created going forward)
- `agent2/trust-badges` ✗ (missing phase identifier)
- `Agent1/Phase-3a` ✗ (case)

**Special namespaces:**
- `main` — protected trunk. No direct pushes.
- `claude/*` — harness-generated branches. Treat as agent-owned per the first commit author and PR description. Acceptable for short-lived work; longer-lived branches should adopt the standard convention.

### Lifecycle

- **Create:** branch from the most recent `main` unless cherry-picking an ancestor.
- **Push early:** push the branch on first substantive commit so other agents can see it.
- **Update the table:** add a row to `OPERATIONS.md` *Active Branches & PRs* when you push.
- **Rebase forward:** if your phase is gated on another phase (per `OPERATIONS.md` § PR Sequencing), rebase onto the post-gate `main` after the gating PR merges. Don't merge backwards.
- **Delete after merge:** once the branch merges to `main`, delete the remote branch — but only after the merge is confirmed in `main`'s log. Agent 3 / Carlo perform the deletion; agents do not unilaterally delete others' branches.

### Renaming mid-stream

If a branch is named in violation of the convention but already has commits:
- **Keep it as-is until merge.** Renaming a branch that other agents may be referencing causes cross-reference rot in `OPERATIONS.md` and PR comments.
- **Note the deviation in `BACKLOG.md` § Backlog-Only** so the lapse is visible.
- **Use the correct convention on the next branch.**

### One PR = one scope

- One PR per scoped goal. If scope creeps, open a follow-up branch.
- Never push directly to `main`.
- Never force-push to a branch another agent is working on. If a rebase is unavoidable, coordinate via a PR comment first.

### Coordination

- Before starting work, fetch all remotes and check `OPERATIONS.md` § Active Branches. If another agent is already working on the same scope, comment on their PR instead of opening a parallel one.
- When closing a PR, update `OPERATIONS.md` § Active Branches and `BACKLOG.md` (mark items `Closed` with the merge commit hash).

### Dependency on unmerged docs

When `OPERATIONS.md` / `QC-STANDARDS.md` / `AGENTS.md` / `ROADMAP.md` /
`BACKLOG.md` exist on an unmerged branch, treat them as **draft**.
- Agents may consult drafts to align their work.
- Agents may not cite drafts as if they were merged-in-`main` policy when raising defects on PRs.
- Once merged to `main`, the doc is canonical. Conflicts between an older `main` policy and a newer unmerged draft are resolved in favor of `main` until the draft lands.

---

## PR Rules

Every PR must include:
- A title naming the roadmap phase or work-item (e.g. `Phase 3a — Trust Hotfix` or `Audit — 2026-05-27 morning`).
- A description with: **what changed**, **why**, **how it was verified**, **what is out of scope**, **`BACKLOG.md` IDs closed**.
- A reference to the relevant `ROADMAP.md` phase.
- Evidence for any defect claims (see `QC-STANDARDS.md` § 6).
- A "Risks / unknowns" section when uncertainty exists. Unknowns are flagged, not guessed.

PRs that fail any of:
- `turbo build`
- `turbo type-check`
- `scripts/seo-audit.ts` / `scripts/content-check.ts` (when applicable to the changed files)
- `QC-STANDARDS.md` invariants

are blocked until fixed. Do not bypass with `--no-verify`. If a pre-commit
hook fails, fix the underlying issue and create a **new** commit — never
`--amend` a failed commit.

---

## Evidence Requirements

When claiming a defect, a regression, or any QC-relevant finding, the claim must include:
- Concrete file path (`apps/dog-com/src/app/...`)
- Line number or selector
- Observed value (a quoted snippet)
- Expected value, grounded in `QC-STANDARDS.md` or a documented requirement

A claim missing any of those four elements is a hypothesis, not a finding,
and must be labelled `UNVERIFIED:` (or equivalent). Unverified findings
cannot block a PR on their own.

Self-corrections are welcome and expected — when an agent discovers its own
prior report was wrong, append a `## Self-Correction` section to the
report; do not rewrite the original claim in place.

---

## Escalation Rules

Escalate to Carlo (do not act unilaterally) when any of:

- **Publishing or pointing real domains** (DNS, custom-domain attachment in Vercel)
- **Spending money or activating live billing** (Stripe live keys, paid SaaS upgrades)
- **Contacting third parties** (sending real emails via Mailchimp, posting on external services)
- **Deleting major work** (removing pages, branches with unmerged work, dropping DB tables)
- **Changing legal / compliance posture** (FTC disclosure language, privacy policy, terms, editorial standards) — corrections to fabricated authority text are NOT in this category; those are explicitly required by `QC-STANDARDS.md`
- **Irreversible architecture decisions** (changing the monorepo's deployment topology, swapping Supabase / Vercel, changing the data model in a non-additive way)
- **Conflict between agent outputs** that cannot be reconciled via evidence
- **Role-lane disputes** (e.g. one agent has done work outside their allowed scope) — Agent 3 records the observation in `BACKLOG.md` and does not adjudicate

For everything else, proceed on your own branch and document the decision in the PR.

---

## Overnight Mode

Overnight rules, decision tree, and session-end checklist are in
`WORKFLOW.md` § Overnight Workflow.

Summary: when Carlo is offline, keep moving on safe work; never merge to
`main`; never touch live keys or third parties; record blockers in
`OPERATIONS.md`; leave the branch buildable and the PR description
truthful. The Emergency Stop triggers below supersede overnight mode.

---

## Emergency Stop / Rollback

A small set of conditions require **immediate halt** by any agent that
detects them. These supersede overnight mode and any in-flight work.

### Triggers

Any of these triggers an Emergency Stop:

- **Trust regression on `main`** — a fabricated-authority claim or schema reviewer (`QC-STANDARDS.md` § 1) is present on `main` or about to land via an open PR you can see.
- **Secret leak** — a real Supabase / Stripe / Mailchimp key, admin password, or PII has been committed to any branch. Includes content in commit messages, not just files.
- **Build broken on `main`** — `turbo build` or `turbo type-check` fails on the `main` tip.
- **FTC disclosure removed** from a review-bearing page on `main` or in an open PR.
- **Force-push or destructive overwrite** of another agent's branch with unmerged work.
- **External signal** — Carlo, a CI check, a third-party (e.g. Vercel / Cloudflare) flags a production-affecting issue.

### Stop procedure

Any agent that detects a trigger:

1. **Halt new commits to your own branch.** Do not push speculative fixes from an unrelated branch.
2. **Record the stop in `OPERATIONS.md` § Blockers** with: date/time UTC, trigger, file/PR/commit evidence, who detected it. Severity = Blocker.
3. **Create or update the matching `BACKLOG.md` item.** New `B-N` if no existing item fits.
4. **Notify Carlo.** This is one of the few situations where waiting is wrong. Phrase the notification with: trigger, scope (does it affect live or just `main`?), and what you've done so far.
5. **Do nothing destructive without Carlo's go-ahead.** Specifically: do not `git push --force`, do not `git reset --hard`, do not delete branches, do not delete files outside the scope of the rollback.

### Rollback procedure

Only after Carlo authorises a rollback (or it is unambiguously within an
agent's lane — e.g. reverting your own un-shipped commit on your own
branch):

1. **Prefer `git revert`** over `git reset`. Revert produces a new commit that backs out a change while preserving history. Reset destroys history and breaks other agents' clones.
2. **Never `--force` push to `main`.** A rollback that requires force-push is a Carlo decision.
3. **For trust regressions on `main`:** `git revert <sha>` of the offending commit, push to a new `agent1/rollback-<topic>` branch, open a PR titled `Rollback — <topic>` with the original trigger as the rationale. Tag Agent 2 for verification before merge.
4. **For secret leaks:** `git revert` is **not sufficient** — the secret is still in history. Carlo must rotate the secret AND decide whether to rewrite history (force-push to `main` is one of the rare cases this is acceptable, but only Carlo authorises it). `BACKLOG.md` records the secret rotation as a separate item.
5. **After the rollback merges:** add an entry to `RELEASES.md` § Audit Log under a `Rollback — <date>` heading describing the trigger, action taken, and verification. Update `OPERATIONS.md` § Blockers (mark resolved).
6. **Postmortem:** Agent 2 writes a postmortem under `audits/<date>-postmortem-<topic>.md` covering: what happened, why the existing guardrails didn't catch it, what new invariant (in `QC-STANDARDS.md`) or CI gate (Phase 7) would have caught it.

### Authority matrix

| Action | Who may authorize |
|---|---|
| Halt new commits / pause work | Any agent (records in OPERATIONS.md) |
| Revert a commit on a feature branch | Branch owner |
| Open a rollback PR | Any agent |
| Merge a rollback PR | Carlo |
| Force-push to `main` | Carlo (only after secret-leak rotation logic) |
| Rotate live secrets | Carlo |
| Take a site offline | Carlo |

---

## Inter-Agent Conflict Resolution

When two agents disagree:
1. **Evidence wins.** The party with file + line + observed + expected prevails.
2. **`QC-STANDARDS.md` is the constitution.** If the rule is in there, it is canonical.
3. **`main` beats unmerged drafts.** A policy not yet merged is advisory, not binding.
4. If the conflict can't be resolved by 1-3, escalate to Carlo. Do not silently overwrite the other agent's work.
