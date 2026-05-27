# OPERATIONS — CarloOS

Live operating dashboard. The repo is the source of truth; chat memory is not.
Update this file whenever the active phase, priorities, branches, or blockers change.

Last updated: 2026-05-27

---

## Current Phase

**PR #3 — SEO & Infrastructure Stabilization** (planning / kickoff)

Previous phase (PR #2 — Trust Cleanup & Stabilization) merged to `main` on
2026-05-26 in commit `4c27988`. See `RELEASES.md` for the full record.

---

## Active Priorities

In order of priority. Each priority should map to a scoped PR.

1. **PR #3 — SEO & Infrastructure Stabilization** (owner: Agent 1, audited by Agent 2)
   - Verify per-page `<title>`, meta description, canonical URL across all 5 sites
   - Verify OpenGraph + Twitter card metadata via `SEOHead`/`buildMetadata()`
   - Validate sitemap.xml + robots.txt output for each app (`scripts/generate-site-files.ts`)
   - Validate JSON-LD schema (Article, FAQ, MedicalWebPage, Review) — no fabricated `reviewedBy`
   - Confirm internal-link graph is intact (PR #2 closed 24 broken links; verify no regressions)
   - Re-run `scripts/seo-audit.ts` and `scripts/content-check.ts` and treat warnings as defects
   - Confirm Vercel preview builds remain green for all 5 apps
2. **Document the operating system** (owner: Agent 3 — this PR)
3. **Agent 2 baseline audit of `main` post-PR #2** (owner: Agent 2)
   - Establish a fresh evidence-based audit so PR #3 has a clean starting line

---

## Active Branches & PRs

| Branch | Owner | Purpose | Status |
|---|---|---|---|
| `main` | shared | Production trunk | Stable; PR #2 merged |
| `claude/ecstatic-shannon-tXkds` | Agent 3 | Ops/roadmap docs (suggested name: `agent3-ops-roadmap`) | In progress (this PR) |
| _TBD_ | Agent 1 | PR #3 SEO work | Not yet opened |
| _TBD_ | Agent 2 | PR #3 audit findings | Not yet opened |

Agents must update this table when opening or closing a branch.

---

## Blockers

None known at this time.

If an agent is blocked, append an entry here with: date, agent, what is blocked,
what is needed to unblock, and whether overnight-mode escalation applies (see
`AGENTS.md` § Overnight Mode).

---

## Standing Warnings

Carry-forward warnings every agent must respect on every PR:

- **No fabricated authority.** No fake DVMs, no fake reviewers, no fake "we tested N" claims, no fake `reviewedBy` in schema. See `QC-STANDARDS.md`.
- **No invented history.** If a fact about prior work is not in git, the repo, or a verified source, mark it `UNKNOWN` rather than guessing.
- **No merges to `main` without Carlo's explicit approval.** Agents open PRs; Carlo merges.
- **Do not commit secrets.** `.env.local` only; never push real Supabase / Stripe / Mailchimp keys.
- **No silent app-code changes from Agent 3.** Ops/roadmap PRs touch docs only.
- **Affiliate / FTC disclosure must remain on every review-bearing page.** Removing or weakening disclosure is a blocker-severity defect.
- **Trust-bar parity across all 5 sites** (established in PR #2 Batch 8). Regressions are blocker-severity.

---

## What Each Agent Should Do Next

### Agent 1 — Build & Stabilization
1. Wait for Agent 2's baseline post-PR #2 audit, OR open PR #3 scoped to the SEO checklist in *Active Priorities* §1.
2. Branch name suggestion: `agent1-pr3-seo`.
3. Do not bundle visual/UX changes into PR #3 — those belong in PR #4.

### Agent 2 — QC & SEO Audit
1. Run a baseline audit against `main` at `4c27988` and produce an evidence-based report (file, line, observed vs expected).
2. Re-run `scripts/seo-audit.ts` and `scripts/content-check.ts`; cross-check titles, descriptions, canonicals, schema, sitemap, robots, and internal-link graph.
3. Confirm PR #2's trust-cleanup invariants still hold (see `QC-STANDARDS.md`).
4. Branch name suggestion: `agent2-pr3-audit`.

### Agent 3 — Operations & Roadmap
1. Land this docs PR (`OPERATIONS.md`, `ROADMAP.md`, `AGENTS.md`, `QC-STANDARDS.md`, `RELEASES.md`).
2. After PR #3 lands, refresh: current phase, releases entry, priorities.
3. Maintain backlog grooming (move items between `ROADMAP.md` phases as scope sharpens).

---

## Update Protocol

Any agent may edit this file on their own branch as part of their PR. When
editing, also bump the `Last updated:` date at the top.
