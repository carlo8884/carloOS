# OPERATIONS — CarloOS

Live operating dashboard. The repo is the source of truth; chat memory is not.
Update this file whenever the active phase, priorities, branches, or blockers change.

Last updated: 2026-05-27 (morning refresh after Agent 2 overnight audit)

---

## Numbering Note

CarloOS uses **two** numbering schemes — they are not the same and the
distinction matters:

- **Roadmap phases** — strategic milestones, stable identifiers (`Phase 1 …
  Phase 7`). See `ROADMAP.md`. A phase may ship as one PR or as several
  sub-PRs (`Phase 3a`, `Phase 3b`, etc.).
- **GitHub PR numbers** — whatever GitHub assigns when a PR is opened, in
  the order it is opened. Not aligned with roadmap phases.

When a doc says **Phase #N** it means the roadmap milestone. When a doc
says **PR #N (GitHub)** it means a specific GitHub-issued pull request.
Older entries in `RELEASES.md` (Phase 1, Phase 2) used "PR #N" loosely
because the two happened to align; from Phase 3 onward they do not.

---

## Current Phase

**Phase 3 — SEO & Infrastructure Stabilization** is the active phase, but
it is **gated by a pre-Phase-3 Trust Hotfix** (see Blockers §1, §2 below).

Phase 3 has been decomposed into:
- **Phase 3a — Trust Hotfix** (must ship first; clears Blockers #1, #2 and HIGH #3 from the 2026-05-27 audit)
- **Phase 3b — SEO Infrastructure** (Findings #4-#9 from the audit)
- **Phase 3c — Schema Completeness** (Findings #11, #12)

Previous phase (Phase 2 — Trust Cleanup & Stabilization) merged to `main`
on 2026-05-26 in commit `4c27988`. See `RELEASES.md` for the full record.

---

## Active Priorities

In order. Each item maps to a roadmap entry; details in `ROADMAP.md` and `BACKLOG.md`.

1. **Phase 3a — Trust Hotfix** (owner: Agent 1)
   - Close Findings #1, #2, #3 from `audits/2026-05-27-morning.md` (on Agent 2 branch).
   - Scope: ~19 files, ~25 line changes. No content rewrite.
   - Blocks Phase 3b until merged.
2. **Phase 3b — SEO Infrastructure** (owner: Agent 1; Agent 2 audits)
   - Close Findings #4-#9 (sitemap 404s, doubled title suffix, lizard parasites canonical, unsourced superlatives, `Breadcrumb` migration on review pages).
   - Includes rebasing Agent 2's existing sitemap fixes (commit `78cca07`) onto post-Phase-2 `main`.
3. **Phase 3c — Schema Completeness** (owner: Agent 1; Agent 2 audits)
   - Close Findings #11, #12 (FAQ schema on dog-com `/faq`; MedicalWebPage schema on 31 health pages).
   - ~32 mechanical edits; author field is `Organization` per Phase 2 — no fake authority reintroduced.
4. **Governance docs** (owner: Agent 3 — this branch)
   - Land this PR (`OPERATIONS.md`, `ROADMAP.md`, `AGENTS.md`, `QC-STANDARDS.md`, `RELEASES.md`, `BACKLOG.md`).

---

## Active Branches & PRs

| Branch | Owner | Purpose | Latest commit | Status |
|---|---|---|---|---|
| `main` | shared | Production trunk | `4c27988` | Stable; Phase 2 merged |
| `claude/ecstatic-shannon-tXkds` | Agent 3 | Governance docs (this PR) | latest from Agent 3 commit list | Pushed, awaiting merge |
| `claude/carloOS-internal-linking-audit-1nrhH` | Agent 2 | SEO/linking audit + sitemap fixes | `d288ebf` | Pushed; carries `audits/2026-05-27-morning.md` and pre-Phase-2 sitemap commits that need rebase |
| `claude/remove-fake-authority-0WY61` | Agent 1 (historical) | Phase 2 trust cleanup | `b664eff` | Merged into `main` as `4c27988`; safe to delete after confirmation |
| _TBD_ | Agent 1 | Phase 3a Trust Hotfix | — | Not yet opened |

Agents must update this table when opening or closing a branch.

---

## Blockers

Open blockers, ordered by severity. Source: `audits/2026-05-27-morning.md` on
the Agent 2 branch (`claude/carloOS-internal-linking-audit-1nrhH`).

**1. BLOCKER — 18 credentialed-testing eyebrow badges** (Finding #1)
- "Tested · May 2025" / "CSF Tested" / "Expert Reviewed" / "Trainer Tested" / "Keeper Tested" / "PAR Tested" badges on 18 review pages across all 5 sites except vets-co.
- Same functional pattern Phase 2 batch 1 removed for "DVM-reviewed"; Phase 2 swept DVM-specific patterns only.
- Directly contradicts the editorial-standards page text "We don't claim hands-on testing we haven't done."
- Violates QC §1.1, §1.2, §1.6. Full file list in the audit; mirrored in `BACKLOG.md`.
- Owner: Agent 1, in Phase 3a.

**2. BLOCKER — Lizard homepage "vet-reviewed" claim** (Finding #2)
- `apps/lizard-com/src/app/page.tsx:59` — "Species profiles with vet-reviewed health sections".
- No DVM bylines or reviewers exist in the lizard-com tree post-Phase-2.
- Violates QC §1.1, §1.6.
- Owner: Agent 1, in Phase 3a.

**3. HIGH — Saddle homepage fake-personnel stat block** (Finding #3)
- `apps/saddle-com/src/app/page.tsx:74` — "CSF Certified Fitters / 30+ Brands Reviewed / Master Saddler Contributors".
- Implies SMS/CSF personnel and in-house brand reviews that don't exist.
- Violates QC §1.1, §1.2.
- Owner: Agent 1, in Phase 3a.

**Going-live blocker:** while Blockers #1 and #2 are open, `main` must not
be attached to any real domain. Phase 3a clears this.

If new blockers are discovered, append here with: date, agent, finding ID,
severity, owner, and unblock criteria.

---

## Standing Warnings

Carry-forward warnings every agent must respect on every PR:

- **No fabricated authority — and the pattern is broader than DVM bylines.** Per 2026-05-27 audit, also includes: any "Tested · {Date}" badge, any credentialed-tester prefix ("CSF/Expert/Trainer/Keeper/PAR Tested"), any homepage "vet-reviewed" / "Master Saddler Contributors" / "Certified Fitters" claim. See `QC-STANDARDS.md` §1.1.a (added 2026-05-27).
- **Homepage long-form copy is in scope for §1.** Phase 2 swept article-level metadata; long-form homepage text and stat blocks must follow §1.1-§1.2 too.
- **No invented history.** If a fact about prior work is not in git, the repo, or a verified source, mark it `UNKNOWN` rather than guessing.
- **No merges to `main` without Carlo's explicit approval.** Agents open PRs; Carlo merges.
- **Do not commit secrets.** `.env.local` only; never push real Supabase / Stripe / Mailchimp keys.
- **No silent app-code changes from Agent 3.** Ops/roadmap PRs touch docs only.
- **Affiliate / FTC disclosure must remain on every review-bearing page.** Verified passing on `main@4c27988`; do not regress.
- **Trust-bar parity across all 5 sites** (established in Phase 2 Batch 8). Verified passing on `main@4c27988`; do not regress.

---

## What Each Agent Should Do Next

### Agent 1 — Build & Stabilization
1. **First:** open `agent1/phase-3a-trust-hotfix` and close Blockers #1, #2, and HIGH #3. Scope is in `BACKLOG.md` § Phase 3a.
2. **Then:** open `agent1/phase-3b-seo-infra` for the doubled-title fix, lizard parasites canonical, superlatives, and `Breadcrumb` migration. Coordinate with Agent 2's sitemap commit `78cca07` (cherry-pick or rebase).
3. **Then:** open `agent1/phase-3c-schema` for FAQ + MedicalWebPage schema additions.
4. Do NOT bundle Phase 4 visual/UX work into any Phase 3 PR.

### Agent 2 — QC & SEO Audit
1. After Phase 3a merges, re-verify the 18 badge fixes against `main` and produce a "Phase 3a verification" report under `audits/`.
2. Rebase your sitemap commits (`78cca07`) onto post-Phase-2 `main` so Agent 1 can land them in Phase 3b without re-doing the work.
3. Continue verifying Phase 2 invariants on every new `main` snapshot.

### Agent 3 — Operations & Roadmap
1. Land this docs PR (introduces `BACKLOG.md`, reorganizes Phase 3, codifies the numbering split).
2. After each Phase 3 sub-PR merges: refresh `RELEASES.md`, advance `ROADMAP.md` status, and close completed items in `BACKLOG.md`.
3. Maintain `BACKLOG.md` as the single source of work-item state (priorities, owners, links to evidence). `OPERATIONS.md` references it instead of duplicating.
4. Begin detailed planning for Phase 4 (Visual / UX) — outline added in `ROADMAP.md` this pass.

---

## Update Protocol

Any agent may edit this file on their own branch as part of their PR. When
editing, also bump the `Last updated:` date at the top. Keep the "Active
Branches & PRs" table truthful — stale rows cost more than missing ones.
