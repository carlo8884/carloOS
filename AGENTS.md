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
- Touching `OPERATIONS.md` / `ROADMAP.md` / `AGENTS.md` / `RELEASES.md` / `BACKLOG.md` except to fix factual errors found while doing build work — and even then in a docs-only follow-up PR

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

---

## Branch Rules

### Namespace Convention

- `main` — protected trunk. No direct pushes.
- `agent1/<phase-or-topic>` — Agent 1 build/fix branches (e.g. `agent1/phase-3a-trust-hotfix`)
- `agent2/<topic>` — Agent 2 audit branches (e.g. `agent2/2026-05-27-morning`)
- `agent3/<topic>` — Agent 3 docs branches (e.g. `agent3/ops-roadmap`)
- `claude/*` — harness-generated branches (current default in this environment). Treat as agent-owned per the first commit author and the PR description; rename downstream where possible.

If you discover a branch you don't recognize, **investigate before
deleting** — it may be another agent's in-progress work.

### One PR = One Scope

- One PR per scoped goal. If scope creeps, open a follow-up branch.
- Never push directly to `main`.
- Never force-push to a branch another agent is working on. If a rebase is unavoidable, coordinate via a PR comment first.

### Coordination

- Before starting work, fetch all remotes and check `OPERATIONS.md` § Active Branches. If another agent is already working on the same scope, comment on their PR instead of opening a parallel one.
- When closing a PR, update `OPERATIONS.md` § Active Branches and `BACKLOG.md` (mark items closed with the merge commit hash).

### Dependency on Unmerged Docs

When `OPERATIONS.md` / `QC-STANDARDS.md` / `AGENTS.md` / `ROADMAP.md` /
`BACKLOG.md` exist on an unmerged branch, treat them as **draft**.
- Agents may consult drafts to align their work.
- Agents may not cite drafts as if they were merged-in-`main` policy when raising defects on PRs.
- Once merged to `main`, the doc is canonical. Conflicts between an older `main` policy and a newer unmerged draft are resolved in favor of `main` until the draft lands.

---

## PR Rules

Every PR must include:
- A title naming the roadmap phase or work-item (e.g. `Phase 3a — Trust Hotfix` or `Audit — 2026-05-27 morning`).
- A description with: **what changed**, **why**, **how it was verified**, **what is out of scope**.
- A reference to the relevant `ROADMAP.md` phase and the `BACKLOG.md` items closed by the PR.
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
prior report was wrong (e.g. measured against the wrong base commit),
append a `## Self-Correction` section to the report; do not rewrite the
original claim in place.

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

For everything else, proceed on your own branch and document the decision in the PR.

---

## Overnight Mode

When Carlo is offline, an agent should keep moving rather than wait — **except** for the escalation list above.

Overnight rules:
1. Stay on your assigned branch.
2. If blocked on the current task, move to the next safe task in `BACKLOG.md` or `OPERATIONS.md` § Active Priorities.
3. Record blockers in `OPERATIONS.md` § Blockers with date, agent, what is blocked, and what is needed to unblock.
4. Never merge to `main` overnight — even with a green build.
5. Never push real keys or hit real third-party APIs overnight.
6. Prefer documentation, audits, scoped fixes, and refactors over speculative new features.
7. End the session by leaving the branch in a buildable, committed state with a clear PR description so Carlo can pick up cold in the morning.
8. Produce a morning report appended to the PR description (or a separate `audits/` entry for Agent 2). The report covers: what was done, what was skipped and why, what is unresolved, what to do next.

If an overnight blocker matches the escalation list, stop and leave a
clearly labelled note in `OPERATIONS.md` § Blockers. Do not act.

---

## Inter-Agent Conflict Resolution

When two agents disagree:
1. **Evidence wins.** The party with file + line + observed + expected prevails.
2. **`QC-STANDARDS.md` is the constitution.** If the rule is in there, it is canonical.
3. **`main` beats unmerged drafts.** A policy not yet merged is advisory, not binding.
4. If the conflict can't be resolved by 1-3, escalate to Carlo. Do not silently overwrite the other agent's work.
