# ROADMAP — CarloOS

Phased roadmap for the CarloOS monorepo (5 apps: dog.com, fish.com,
lizard.com, saddle.com, vets.co). Each phase is delivered as one or more
PRs. Scope creep between phases is a defect — open a follow-up PR instead.

Status legend:  ✅ shipped · 🟡 in progress · ⬜ not started

---

## ✅ PR #1 — Core Build & Deployment Foundation

Status: shipped (merged in commits `2d3030a` → `9709150`).

What landed:
- CarloOS monorepo scaffolded — 5 Next.js 14 apps under `apps/`, shared `packages/ui`, `packages/config`, `packages/db`
- Turborepo pipeline + workspace setup (`turbo.json`, `package.json`, `tsconfig.json`)
- Supabase schema + indexes (`packages/db/src/schema.sql`, `indexes.sql`)
- Seed scripts (`scripts/seed.ts`, `scripts/seed-fish.ts`) and HTML migration script
- Deployment path documented in `README.md` (Vercel one-project-per-site, Cloudflare DNS)
- "CarloOS V2" follow-up commit `9709150` added build fixes, stubs, and 37 new content pages

Exit criteria met: monorepo builds, type-checks, and is deployable per app on Vercel.

---

## ✅ PR #2 — Trust Cleanup & Stabilization

Status: shipped 2026-05-26, merged in commit `4c27988`. Resolves issue #1.

Eight-batch trust cleanup across all 5 sites:

1. `6997d8d` — Removed fabricated authority: fake DVM bylines, "DVM-reviewed" badges, "we tested N items" claims, vets-co first-person practitioner voice, fake `reviewedBy` in `MedicalWebPageSchema`
2. `fa332f9` — Second-pass authority de-puffing; editorial-standards pages on 4 more sites; footer/config bleed fixes; no-op shim removal
3. `a9b48b1` — Inline source pointers on clinical "studies show" / "strongest evidence" claims
4. `49029c0` — Cross-site stat reconciliation (~59% APOP overweight stat), citations, broken-`/legal` link fixes, vets-co telehealth CTA repointed
5. `6f30495` — Pessoa "more Olympic medalists than any other saddle" superlative softened
6. `4f11a26` — Legal-page parity: 12 new legal pages on 4 sites + affiliate-disclosure on dog-com, per-site interpolation
7. `72c003b` — All 24 remaining broken internal links resolved; `Breadcrumb` widened to allow optional `href` on intermediate crumbs
8. `b664eff` — `ScoreMethodology` component on all 41 score-bearing pages; fish-com / lizard-com trust-bar parity with the other 3 sites

Verifications recorded in the merge commit: `turbo build` + `type-check` pass for all 5 apps, 0 broken internal links, 0 missing/duplicate titles, all 5 Vercel preview deploys succeeded.

Exit criteria met: zero fabricated authority, full legal-page parity, zero broken internal links, trust-bar parity across all 5 sites.

---

## 🟡 PR #3 — SEO & Infrastructure Stabilization

Status: in planning. Owner: Agent 1 (build), Agent 2 (audit).

Goal: lock down on-page SEO and infrastructure plumbing so the sites are
crawler-ready and Lighthouse-defensible before any visual polish.

In scope:
- Per-page `<title>`, meta description, canonical URL audited and corrected on all 5 sites
- OpenGraph + Twitter card metadata verified via `SEOHead` / `buildMetadata()` in `packages/ui`
- `sitemap.xml` and `robots.txt` generation validated for each app (`scripts/generate-site-files.ts`)
- JSON-LD schema (Article, FAQ, MedicalWebPage, Review) validated — no fabricated `reviewedBy`, all referenced URLs resolve
- `scripts/seo-audit.ts` + `scripts/content-check.ts` clean, warnings treated as defects
- Internal-link graph re-verified (PR #2 closed 24 broken links; confirm no regressions)
- 404 + 500 pages exist and are themed per site
- Lighthouse SEO ≥ 95 on a representative page per site (target, not a gate)
- Vercel preview builds green for all 5 apps

Out of scope (push to later PRs):
- Visual / UX polish (PR #4)
- New content pages (PR #5)
- Stripe / Mailchimp live keys (PR #6)
- Agent automation tooling (PR #7)

Exit criteria: Agent 2 sign-off that the SEO + infra checklist is verifiably clean against `main`.

---

## ⬜ PR #4 — Premium Visual / UX Pass

Goal: bring the visual quality up to "premium domain" expectations without
disrupting the SEO/trust baseline from PR #3.

Candidate scope:
- Typography pass (heading hierarchy, line-height, measure) across all 5 themes
- Hero / above-the-fold layout per site, with per-site brand voice
- Component-level polish for `ArticleLayout`, `ReviewCard`, `FAQAccordion`, `Nav`, `Footer`
- Imagery strategy (sourcing, alt text, CDN, OG image generation via `@/api/og`)
- Accessibility pass: contrast, focus states, semantic landmarks, skip links
- Mobile/tablet review — verify all breakpoints

Out of scope: new content pages, monetization wiring.

Guardrails: must not regress trust-bar parity, FTC disclosure placement, or PR #3's SEO baseline.

---

## ⬜ PR #5 — Content Expansion

Goal: grow page count toward the targets implied by `DASHBOARD.md` while
holding the trust + SEO line.

Candidate scope:
- Backlog from `DASHBOARD.md` "Next priorities" (fish-com swordtail, lizard-com leopard-gecko / veiled-chameleon depth, dog-com allergies / seizures, saddle-com riding boots, vets-co leptospirosis, etc.)
- Per-site content briefs that pre-specify sources and disclosure requirements
- No new pages without canonical URL, schema, sources, and FTC disclosure where applicable

Guardrails: every new page passes `scripts/content-check.ts` and `scripts/seo-audit.ts`.

---

## ⬜ PR #6 — Monetization Infrastructure

Goal: move scaffolded payment / email / affiliate plumbing into a verifiable, opt-in production state.

Candidate scope:
- Stripe checkout (`/api/checkout`) — confirm live keys policy, idempotency, webhook signature verification (`STRIPE_WEBHOOK_SECRET`)
- Membership data model in Supabase, with audit logging
- Mailchimp `/api/subscribe` — error handling, double-opt-in confirmation, per-site audience routing
- Affiliate link audit — Amazon Associates tagging, Chewy, Trupanion / Healthy Paws, Stubben / Pessoa, Vetster / AskVet
- FTC disclosure remains rendered everywhere affiliate links appear

Guardrails:
- **Going live with real Stripe / Mailchimp / domain DNS is a Carlo-only decision** (see `AGENTS.md` § Overnight Mode escalation list).
- No live keys committed to the repo.

---

## ⬜ PR #7 — Automation & Agent Orchestration

Goal: codify how multiple AI agents (build, QC, ops) cooperate on this repo without conflict.

Candidate scope:
- CI checks that enforce `QC-STANDARDS.md` invariants (no `reviewedBy` strings matching DVM patterns, no fabricated badges, no orphan internal links, no missing FTC disclosure on review pages)
- Per-agent branch namespace conventions (e.g. `agent1/*`, `agent2/*`, `agent3/*`)
- Issue / PR templates that require evidence (file, line, before/after)
- Optional: a watchdog script that diffs `OPERATIONS.md` and warns when phase / priorities drift from PR titles

Guardrails: automation must not silently rewrite content. Bots open PRs; humans merge.

---

## Cross-Cutting, Non-Phase Work

Items that are not phase-scoped but should be tracked:

- Keep `RELEASES.md` updated when each PR merges.
- Keep `OPERATIONS.md` "Current Phase" and "Active Priorities" in sync with reality.
- Re-evaluate this roadmap at the end of every shipped PR.
