# ROADMAP — CarloOS

Phased roadmap for the CarloOS monorepo. **Roadmap phases** are stable
strategic milestones (Phase 1 … Phase 7); they are not the same as GitHub PR
numbers. See `OPERATIONS.md` § Numbering Note.

Each phase ships as one PR or as several sub-PRs (`Phase Na`, `Phase Nb`).
Scope creep across phases is a defect — open a follow-up PR instead.

**This file describes the *shape* of each phase** — purpose, in-scope
themes, out-of-scope themes, guardrails, exit criteria. Per-item state
(severity, owner, status, file lists, remediation) lives in `BACKLOG.md`.
Snapshot status of active work lives in `OPERATIONS.md`. Do not duplicate
those here.

Status legend:  ✅ shipped · 🟡 in progress · ⏸ blocked · ⬜ not started

---

## ✅ Phase 1 — Core Build & Deployment Foundation

Status: shipped. See `RELEASES.md` § Phase 1.

Theme: monorepo scaffold, shared packages, Turborepo pipeline, Supabase
schema, seed scripts, site-file generation, deployment path.

Exit criteria met: monorepo builds, type-checks, and is deployable per app on Vercel.

---

## ✅ Phase 2 — Trust Cleanup & Stabilization

Status: shipped. Merge commit `4c27988` (2026-05-26). See `RELEASES.md` § Phase 2.

Theme: removed fabricated authority, established editorial-standards parity,
legal-page parity, trust-bar parity, score methodology disclosure, zero
broken internal links.

Permanent invariants established (now in `QC-STANDARDS.md`).

Known gap surfaced post-merge by the 2026-05-27 audit — see `RELEASES.md` § Phase 2.

---

## 🟡 Phase 3 — SEO & Infrastructure Stabilization

Status: in progress.

Decomposed into three sub-PRs to keep diffs reviewable and sequence the
trust hotfix first. **Hard block:** Phase 3a must merge before 3b/3c go to
`main` (see `OPERATIONS.md` § PR Sequencing).

### Phase 3a — Trust Hotfix (gating)

Theme: close the highest-severity findings from the 2026-05-27 audit that
the Phase 2 sweep missed.

In scope: trust badges, homepage long-form copy, fake-personnel stat blocks.

Out of scope: SEO infra, schema additions, visual polish.

Exit criteria: Agent 2 re-audit reports 0 BLOCKER and 0 HIGH against `main`.

Items: see `BACKLOG.md` § Phase 3a.

### Phase 3b — SEO Infrastructure

Theme: title/description hygiene, sitemap correctness, canonical
consistency, breadcrumb schema, residual unsourced superlatives.

In scope: `packages/ui/SEOHead.tsx`, per-app `sitemap.ts` and `robots.ts`,
duplicate-slug canonical alignment, `<Breadcrumb>` migration on review
pages.

Out of scope: visual polish, new content, schema additions (deferred to 3c).

Exit criteria: `scripts/seo-audit.ts` clean against `main`; sitemap entries
all resolve; 0 doubled-suffix titles; `BreadcrumbList` JSON-LD on every
review page.

Items: see `BACKLOG.md` § Phase 3b.

### Phase 3c — Schema Completeness

Theme: per-page schema matrix from `QC-STANDARDS.md` § 2.10 — fill the gaps.

In scope: aggregate `FAQPage` schema on dog-com `/faq`; `MedicalWebPage`
schema on health-detail pages across dog/fish/lizard/vets.

Out of scope: visual polish, new content.

Exit criteria: every health page emits `MedicalWebPage`; dog-com `/faq`
emits a single aggregated `FAQPage`.

Items: see `BACKLOG.md` § Phase 3c.

### Phase 3 overall exit

Phase 3 closes when Agent 2 signs off that:
- 0 BLOCKER / 0 HIGH findings remain against `main`
- All `BACKLOG.md` items tagged Phase 3a/3b/3c are `Closed`
- Build and type-check green across all 5 apps
- Vercel preview deploys succeed

---

## ⬜ Phase 4 — Premium Visual / UX Pass

Status: not started. Begins after Phase 3 closes. Owner: Agent 1.

Theme: bring visual quality up to "premium domain" expectations without
regressing the trust + SEO baseline.

### Sub-phase plan

| Sub-phase | Theme |
|---|---|
| 4a | Typography & spacing (per-site type scale, heading hierarchy, vertical rhythm, mobile pass) |
| 4b | Component polish (`ArticleLayout`, `ReviewCard`, `FAQAccordion`, `Nav`, `Footer`, `EmailCapture`, `Breadcrumb`) |
| 4c | Imagery & above-the-fold (hero layouts, image sourcing, CDN behavior, OG image visual QA via `/api/og`) |
| 4d | Accessibility (WCAG 2.2 AA contrast, focus states, semantic landmarks, skip links, keyboard nav, screen-reader spot-check) |

### Guardrails (must not regress)

- Trust-bar parity across all 5 sites
- FTC disclosure placement on every review-bearing page
- `ScoreMethodology` rendering on every score-bearing page
- `<title>` and meta description from Phase 3b
- `BreadcrumbList` / `Article` / `FAQPage` / `MedicalWebPage` schema from 3b/3c
- Build + type-check green; Vercel previews green per app

### Out of scope (push to later phases)

- New content pages → Phase 5
- Stripe / Mailchimp live activation → Phase 6
- Agent automation tooling → Phase 7

### Exit criteria

- Lighthouse Best Practices ≥ 95 on a representative page per site (target, not a gate)
- Lighthouse Accessibility ≥ 95 on a representative page per site (target, not a gate)
- Agent 2 sign-off that no Phase 2 / Phase 3 invariant has regressed
- Per-site UX walkthrough recorded in the PR description

Items: see `BACKLOG.md` § Phase 4-7 Seeds (4a-4d).

---

## ⬜ Phase 5 — Content Expansion

Status: not started. Begins after Phase 4 closes.

Theme: grow page count without regressing trust + SEO.

In scope: candidate pages from `BACKLOG.md` § Phase 5 inbox. Per-site
content briefs that pre-specify sources and disclosure requirements.

Guardrails: every new page passes `scripts/content-check.ts` and
`scripts/seo-audit.ts`; no new authority claims; canonical + schema + inline
sources for clinical claims; FTC disclosure where applicable.

---

## ⬜ Phase 6 — Monetization Infrastructure

Status: not started.

Theme: move scaffolded payment / email / affiliate plumbing into a
verifiable, opt-in production state.

Guardrails:
- **Going live with real Stripe / Mailchimp / domain DNS is a Carlo-only decision** (see `AGENTS.md` § Escalation Rules and § Emergency Stop / Rollback).
- No live keys committed to the repo.

Items: see `BACKLOG.md` § Phase 6.

---

## ⬜ Phase 7 — Automation & Agent Orchestration

Status: not started. Owner: Agent 3 leads; Agents 1 and 2 contribute.

Theme: codify how multiple AI agents cooperate on this repo without
conflict. Promote the manual conventions in `AGENTS.md` to enforced CI
gates.

Guardrails: automation must not silently rewrite content. Bots open PRs;
humans merge.

Items: see `BACKLOG.md` § Phase 7.

---

## Cross-Cutting / Non-Phase Work

- Keep `RELEASES.md` updated when each PR merges.
- Keep `OPERATIONS.md` *Current Phase / Active Priorities / Active Branches / Blockers* in sync with reality.
- Keep `BACKLOG.md` reflecting verified findings and roadmap-derived items.
- Re-evaluate this roadmap at the end of every shipped PR.
- Retire `DASHBOARD.md` once Phase 5 absorbs all its useful content (B-1).
