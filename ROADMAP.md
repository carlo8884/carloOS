# ROADMAP — CarloOS

Phased roadmap for the CarloOS monorepo. **Roadmap phases** are stable
strategic milestones (Phase 1 … Phase 7); they are not the same as GitHub PR
numbers. See `OPERATIONS.md` § Numbering Note.

Each phase ships as one PR or as several sub-PRs (`Phase Na`, `Phase Nb`).
Scope creep across phases is a defect — open a follow-up PR instead.

Per-finding scope and file lists live in `BACKLOG.md`; this file states the
*shape* of each phase. Don't duplicate work-item state between the two.

Status legend:  ✅ shipped · 🟡 in progress · ⏸ blocked · ⬜ not started

---

## ✅ Phase 1 — Core Build & Deployment Foundation

Status: shipped. Merge commits `2d3030a` → `9709150` (2026-05-25 → 2026-05-26).

What landed:
- Monorepo scaffold: 5 Next.js 14 apps (`dog-com`, `fish-com`, `lizard-com`, `saddle-com`, `vets-co`)
- Shared packages: `@carloOS/ui`, `@carloOS/config`, `@carloOS/db`
- Turborepo pipeline, workspace `package.json`, `tsconfig.json` with path aliases
- Supabase schema + indexes
- Seed scripts and HTML migration script
- Site-file generation for sitemap + robots
- Deployment path documented in `README.md`
- "CarloOS V2" follow-up `9709150` added build fixes, stubs, and 37 new content pages

Exit criteria met: monorepo builds, type-checks, and is deployable per app on Vercel.

---

## ✅ Phase 2 — Trust Cleanup & Stabilization

Status: shipped. Merge commit `4c27988` (2026-05-26). Resolves issue #1.

Eight-batch trust cleanup across all 5 sites — full per-batch list in `RELEASES.md`.

Permanent invariants established (now in `QC-STANDARDS.md`):
- No fabricated authority (DVM/MD/etc bylines, badges, reviewers)
- Editorial-standards page on every site
- Legal-page parity across all 5 sites
- Trust-bar parity across all 5 sites
- `ScoreMethodology` disclosed wherever a score is shown
- Zero broken internal links at merge

Verifications recorded: `turbo build` + `type-check` pass for all 5 apps; 0 broken internal links; 0 missing/duplicate titles; all 5 Vercel preview deploys succeeded.

**Known gap surfaced post-merge** (2026-05-27 audit): Phase 2's sweep was
DVM-byline-specific and metadata-focused. It missed credentialed-tester
eyebrow badges ("Tested · May 2025", "CSF Tested", "Expert Reviewed", etc.)
and homepage long-form copy ("vet-reviewed", "Master Saddler Contributors").
These are addressed in Phase 3a. The `QC-STANDARDS.md` clarifications added
in this docs PR (§1.1.a, §1.2.a) close the rule-level gap.

---

## 🟡 Phase 3 — SEO & Infrastructure Stabilization

Status: in progress. Owner: Agent 1 (build), Agent 2 (audit).

Decomposed into three sub-PRs to keep diffs reviewable and sequence the
trust hotfix first.

### ⏸ Phase 3a — Trust Hotfix (gating)

Status: blocked on PR open. Closes the 3 highest-severity 2026-05-27 audit findings before any SEO work proceeds.

In scope:
- Finding #1 (BLOCKER) — remove `· May YYYY` suffix and credentialed prefixes from 18 review-page eyebrow badges; or drop the badge entirely; or replace with non-authority labels like "Editorial Picks" / "Buyer's Guide".
- Finding #2 (BLOCKER) — `apps/lizard-com/src/app/page.tsx:59` "vet-reviewed health sections" claim removed/rephrased.
- Finding #3 (HIGH) — `apps/saddle-com/src/app/page.tsx:74` stat block deleted or replaced with verifiable stats.

Out of scope: SEO infra, schema additions, visual polish.

Exit criteria: Agent 2 re-audit reports 0 BLOCKER / 0 HIGH against `main` post-merge.

### ⬜ Phase 3b — SEO Infrastructure

Status: not yet opened. Depends on Phase 3a merge.

In scope:
- Finding #4 (MEDIUM) — 4 sitemap entries pointing to non-existent routes (lizard `/health`, saddle `/health` + `/setup`, vets `/setup`). Coordinate with Agent 2's sitemap commits (`78cca07`).
- Finding #5 (MEDIUM) — one-line idempotent fix in `packages/ui/src/components/SEOHead.tsx:67` clears doubled ` | {SiteName}` suffix on 302 page titles.
- Finding #6 (MEDIUM) — lizard parasites duplicate-slug pair canonical (`/health/parasites-guide` → `/health/parasites`).
- Finding #7 (MEDIUM) — three unsourced superlatives (Hill's "most prescribed", Stubben "Best-in-class German leather" × 2).
- Finding #8 (MEDIUM) — migrate 40 review-detail pages from inline `<nav>` breadcrumbs to shared `<Breadcrumb>` component (gets `BreadcrumbList` JSON-LD).
- Finding #9 (LOW) — 258 titles >60 chars, 195 descriptions >160 chars. Triage; may roll to backlog.

Out of scope: visual polish, new content, schema completeness (deferred to 3c).

Exit criteria: `scripts/seo-audit.ts` clean; sitemap.xml output enumerates only real routes; 0 doubled titles; `BreadcrumbList` schema on review pages.

### ⬜ Phase 3c — Schema Completeness

Status: not yet opened. Depends on Phase 3a merge; can run in parallel with 3b.

In scope:
- Finding #11 (MEDIUM) — add aggregate `buildFAQSchema` call to `apps/dog-com/src/app/faq/page.tsx`.
- Finding #12 (MEDIUM) — add `buildMedicalWebPageSchema` to 31 health pages (4 dog-com breed-health, 12 fish-com health, 14 lizard-com health, 1 vets-co breed-health-parity). Author is `Organization` (Phase 2 already removed the fake `reviewedBy`).

Out of scope: visual polish, new content.

Exit criteria: every health page emits `MedicalWebPage` schema; dog-com `/faq` emits a single aggregated `FAQPage` schema.

### Phase 3 overall exit

Phase 3 closes when Agent 2 signs off that:
- 0 BLOCKER / 0 HIGH findings remain against `main`
- The SEO/infra checklist in `BACKLOG.md` § Phase 3 is fully ticked
- Build and type-check are green across all 5 apps
- Vercel preview deploys succeed

---

## ⬜ Phase 4 — Premium Visual / UX Pass

Status: not started. Begins after Phase 3 closes. Owner: Agent 1.

Goal: bring the visual quality up to "premium domain" expectations without
regressing the trust + SEO baseline established in Phases 2 and 3.

### Planning — In Scope

Grouped into themes so the phase can ship as 4 sub-PRs if it grows.

**4a — Typography & Spacing**
- Per-site type scale audit (base, scale ratio, line-height, measure) for `packages/ui` typography tokens
- Heading hierarchy (h1 → h6) consistency check across `ArticleLayout`
- Vertical rhythm: section spacing, paragraph spacing, list spacing
- Mobile typography pass (≤ 640px) — verify legibility

**4b — Component Polish**
- `ArticleLayout` — sidebar layout consistency, table-of-contents behavior, related-links density
- `ReviewCard` — card chrome, score presentation (still subject to `ScoreMethodology` requirement), CTA hierarchy
- `FAQAccordion` — open/close animation, keyboard nav, ARIA correctness
- `Nav` / `Footer` — sticky behavior on scroll, mobile menu, footer link grid
- `EmailCapture` — visual variants for sidebar/section/inline
- `Breadcrumb` — visual treatment after Phase 3b migration

**4c — Imagery & Above-the-Fold**
- Hero / above-the-fold layout per site, with per-site brand voice
- Image sourcing strategy (rights-cleared sources, alt-text convention, FTC disclosure interaction)
- CDN behavior + image-format decisions (AVIF/WebP fallback)
- OG image generation via `/api/og` (edge runtime, Satori) — visual QA per site

**4d — Accessibility**
- Color-contrast pass against WCAG 2.2 AA
- Focus states on every interactive element
- Semantic landmarks (`<main>`, `<nav>`, `<aside>`, `<article>`)
- Skip-to-content link on every page
- Keyboard-only navigation walkthrough per template
- Screen-reader spot-check on top 5 templates

### Guardrails (must not regress)

- Trust-bar parity across all 5 sites (Phase 2 invariant)
- FTC disclosure placement on every review-bearing page
- `ScoreMethodology` rendering on every score-bearing page
- `<title>` and meta description targets from Phase 3b
- `BreadcrumbList` / `Article` / `FAQPage` / `MedicalWebPage` schema from Phase 3b/3c
- Build + type-check green; Vercel previews green per app

### Out of Scope (push to later phases)

- New content pages → Phase 5
- Stripe / Mailchimp live activation → Phase 6
- Agent automation tooling → Phase 7

### Exit Criteria

- Lighthouse Best Practices ≥ 95 on a representative page per site (target, not a gate)
- Lighthouse Accessibility ≥ 95 on a representative page per site (target, not a gate)
- Agent 2 sign-off that no Phase 2 / Phase 3 invariant has regressed
- Per-site UX-review walkthrough recorded in the PR description

---

## ⬜ Phase 5 — Content Expansion

Status: not started. Begins after Phase 4 closes. Owner: Agent 1 (writes), Agent 2 (audits).

Goal: grow page count toward the targets in `BACKLOG.md` § Phase 5 without
regressing trust + SEO.

Candidate scope:
- Backlog from former `DASHBOARD.md`: fish-com swordtail, aquarium cycling guide; lizard-com leopard-gecko / veiled-chameleon depth, hypocalcemia; dog-com allergies / seizures / raw-diet risks; saddle-com riding boots; vets-co leptospirosis, eye conditions.
- Per-site content briefs that pre-specify sources and disclosure requirements
- No new pages without: canonical URL, schema, inline sources for clinical claims, FTC disclosure where applicable

Guardrails: every new page passes `scripts/content-check.ts` and `scripts/seo-audit.ts`; no new authority claims.

---

## ⬜ Phase 6 — Monetization Infrastructure

Status: not started. Owner: Agent 1; Carlo for live activation.

Goal: move scaffolded payment / email / affiliate plumbing into a verifiable, opt-in production state.

Candidate scope:
- Stripe checkout (`/api/checkout`) — confirm live-keys policy, idempotency, webhook signature verification
- Membership data model in Supabase, with audit logging
- Mailchimp `/api/subscribe` — error handling, double-opt-in confirmation, per-site audience routing
- Affiliate link audit — Amazon Associates tagging, Chewy, Trupanion / Healthy Paws, Stubben / Pessoa, Vetster / AskVet
- FTC disclosure remains rendered everywhere affiliate links appear

Guardrails:
- **Going live with real Stripe / Mailchimp / domain DNS is a Carlo-only decision** (see `AGENTS.md` § Escalation Rules).
- No live keys committed to the repo.

---

## ⬜ Phase 7 — Automation & Agent Orchestration

Status: not started. Owner: Agent 3 leads; Agents 1 & 2 contribute.

Goal: codify how multiple AI agents cooperate on this repo without conflict.

Candidate scope:
- CI checks that enforce `QC-STANDARDS.md` invariants (no DVM-pattern bylines; no "Tested · {Date}" badges; no orphan internal links; no missing FTC disclosure on review pages; no doubled title suffix; sitemap routes exist)
- Per-agent branch namespace conventions (`agent1/*`, `agent2/*`, `agent3/*`) — see `AGENTS.md` § Branch Rules
- Issue / PR templates that require evidence (file, line, before/after)
- Optional: a watchdog script that diffs `OPERATIONS.md` against open PR titles and warns on drift

Guardrails: automation must not silently rewrite content. Bots open PRs; humans merge.

---

## Cross-Cutting / Non-Phase Work

Work that is not phase-scoped but is tracked here so it doesn't get lost:

- Keep `RELEASES.md` updated when each PR merges.
- Keep `OPERATIONS.md` "Current Phase" / "Active Priorities" / "Active Branches" / "Blockers" in sync with reality.
- Keep `BACKLOG.md` reflecting verified findings and roadmap-derived items.
- Re-evaluate this roadmap at the end of every shipped PR.
- Retire `DASHBOARD.md` once `BACKLOG.md` fully absorbs its content (see `BACKLOG.md` § Inbox).
