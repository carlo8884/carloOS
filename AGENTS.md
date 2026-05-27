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
- Fixing defects raised by Agent 2 with verifiable evidence
- Implementing the phase currently active in `ROADMAP.md`

Forbidden work:
- Reverting or rewriting Agent 2's evidence
- Editing `QC-STANDARDS.md` to retroactively justify a shortcut
- Merging to `main`
- Going live with real Stripe / Mailchimp / domain DNS (Carlo only)
- Touching `OPERATIONS.md` / `ROADMAP.md` / `AGENTS.md` / `RELEASES.md` except to flag a finding (Agent 3 owns those, but Agent 1 may open a docs-only PR to fix factual errors)

### Agent 2 — QC & SEO Audit

**Mission:** audit the repo, find defects, produce evidence-based reports. Never silently fixes things — reports them.

Allowed work:
- Read-only inspection of the entire repo
- Running audit scripts (`scripts/seo-audit.ts`, `scripts/content-check.ts`) and any non-destructive build / type-check commands
- Producing audit reports as markdown files in a dedicated branch / PR (e.g. `agent2-pr3-audit`)
- Opening issues / PR comments with file + line + observed-vs-expected
- Suggesting severity (see `QC-STANDARDS.md`)

Forbidden work:
- Modifying app code, shared packages, or build config (escalate to Agent 1)
- Modifying or "tidying" content while auditing — preserve evidence
- Fabricating findings, fake experts, fake testing, fake severity inflation
- Merging anything to `main`
- Approving its own audit (Agent 2 is the auditor, not the gate)

### Agent 3 — Operations & Roadmap

**Mission:** maintain the operating system of the repo so Agents 1 & 2 can work safely in parallel.

Allowed work:
- Creating and updating `OPERATIONS.md`, `ROADMAP.md`, `AGENTS.md`, `QC-STANDARDS.md`, `RELEASES.md`
- Updating `README.md` only where it is factually wrong or out of date relative to the repo
- Backlog grooming (moving items between roadmap phases)
- Recording release summaries based on git history and verifiable PR context
- Recording blockers and escalation paths

Forbidden work:
- App-code changes (allowed only when absolutely necessary to reference documentation, and even then must be flagged in the PR description)
- Inventing facts, history, deadlines, or commitments not in the repo or chat record
- Merging to `main`
- Going live with real Stripe / Mailchimp / domain DNS
- Writing site content (no new posts, breed profiles, species profiles, reviews, etc.)

---

## Branch Rules

- Each agent works on its own branch. Suggested namespaces: `agent1/*`, `agent2/*`, `agent3/*`.
- One PR = one scoped goal. If scope creeps, open a follow-up branch.
- Never push directly to `main`.
- Never force-push to a branch another agent is working on. If a rebase is unavoidable, coordinate via a PR comment first.
- If you discover unfamiliar files or branches, investigate before deleting — they may be another agent's in-progress work.

## PR Rules

Every PR must include:
- A title naming the phase or work-item (e.g. `PR #3 — SEO audit findings`).
- A description with: **what changed**, **why**, **how it was verified**, **what is out of scope**.
- A link or reference to the relevant `ROADMAP.md` phase.
- Evidence for any defect claims (see `QC-STANDARDS.md`).
- A "Risks / unknowns" section when uncertainty exists. Unknowns are flagged, not guessed.

PRs that fail any of:
- `turbo build`
- `turbo type-check`
- `scripts/seo-audit.ts` / `scripts/content-check.ts` (when applicable)
- `QC-STANDARDS.md` invariants

are blocked until fixed. Do not bypass with `--no-verify`.

## Evidence Requirements

When claiming a defect, an issue, or a regression, the claim must include:
- Concrete file path (`apps/dog-com/src/app/...`)
- Line number or selector
- Observed value (a quote or snippet)
- Expected value, with a reason grounded in `QC-STANDARDS.md` or a documented requirement

A claim without those four elements is a hypothesis, not a finding, and
must be labelled as such (`UNVERIFIED:` prefix or equivalent).

## Escalation Rules

Escalate to Carlo (do not act unilaterally) when:
- Publishing or pointing real domains (DNS, custom-domain attachment in Vercel)
- Spending money or activating live billing (Stripe live keys, paid SaaS upgrades)
- Contacting third parties (sending real emails via Mailchimp, posting on external services)
- Deleting major work (removing pages, branches with unmerged work, dropping DB tables)
- Changing legal / compliance posture (FTC disclosure language, privacy policy, terms, editorial standards)
- Irreversible architecture decisions (changing the monorepo's deployment topology, swapping Supabase / Vercel, changing the data model in a non-additive way)
- Any conflict between agent outputs that cannot be reconciled via evidence

For everything else, an agent should proceed on its own branch and document the decision in the PR.

## Overnight Mode

When Carlo is offline, an agent should keep moving rather than wait — **except** for the escalation list above.

Overnight rules:
1. Stay on your assigned branch.
2. If blocked on the current task, move to the next safe task in `ROADMAP.md` or `OPERATIONS.md` *Active Priorities*.
3. Record blockers in `OPERATIONS.md` § Blockers with date, agent, what is blocked, and what is needed to unblock.
4. Never merge to `main` overnight — even with a green build.
5. Never push real keys or hit real third-party APIs overnight.
6. Prefer documentation, audits, scoped fixes, and refactors over speculative new features.
7. End the session by leaving the branch in a buildable, committed state with a clear PR description so Carlo can pick up cold in the morning.

If an overnight blocker matches the escalation list, stop and leave a clearly
labelled note in `OPERATIONS.md` § Blockers. Do not act.
