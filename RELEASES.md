# RELEASES — CarloOS

Append-only release history. Each entry summarizes a merged PR. Source of
truth is the git log; this file is the human-readable index. Do not rewrite
history here to hide a defect — file a follow-up PR instead (see
`QC-STANDARDS.md` § 8).

---

## PR #1 — Core Build & Deployment Foundation

- Status: shipped
- Merge commits: `2d3030a` ("CarloOS monorepo — 5 apps, dog-com flagship"), with follow-up `9709150` ("CarloOS V2 — build fixes, stubs, 37 new content pages")
- Date: 2026-05-25 → 2026-05-26
- UNKNOWN: whether this was originally landed as a single GitHub PR or as a direct push to `main`. Git shows direct commits to `main`, not a merge commit. Treated as "PR #1" for narrative continuity.

Summary:
- Scaffolded the CarloOS monorepo: 5 Next.js 14 apps (`dog-com`, `fish-com`, `lizard-com`, `saddle-com`, `vets-co`)
- Shared packages: `@carloOS/ui` (12 shared components), `@carloOS/config` (per-site theme + URLs), `@carloOS/db` (Supabase client + queries)
- Turborepo pipeline (`turbo.json`), workspace `package.json`, `tsconfig.json` with path aliases
- Supabase schema + indexes (`packages/db/src/schema.sql`, `indexes.sql`)
- Seed scripts (`scripts/seed.ts`, `scripts/seed-fish.ts`) and HTML migration (`scripts/migrate-html.ts`)
- Site-file generation (`scripts/generate-site-files.ts` for sitemap + robots)
- Deployment path documented in `README.md` — Vercel one-project-per-site, Supabase shared, Cloudflare DNS
- "CarloOS V2" follow-up `9709150`: build fixes, stubs, and 37 new content pages; pre-`9709150` config tweaks: `c51d8d0` (`next.config.mjs` for Next 14), `f2e4b0b` (turbo pipeline → `tasks` for Turbo 2), `5943df5` (`packageManager` field for Turborepo)

Verifications recorded: not explicitly documented in commit messages beyond the merge of the foundation. UNKNOWN whether full CI / Vercel previews ran at PR #1 close — assume PR #2's verifications established the first fully-green baseline.

---

## PR #2 — Trust Cleanup & Stabilization

- Status: shipped
- Merge commit: `4c27988` ("Merge PR #2: Trust & stabilization — fake-authority removal, broken-link fixes, legal/editorial parity")
- Date: 2026-05-26
- Resolves: issue #1

Summary (eight batches, in order):

1. `6997d8d` — Removed fabricated authority across all 5 sites: fake DVM bylines, "DVM-reviewed" badges, "we tested N items" claims, vets-co first-person practitioner voice, fake `reviewedBy` in `MedicalWebPageSchema`.
2. `fa332f9` — Second-pass cleanup: subtler authority de-puffing; editorial-standards pages on 4 more sites; footer / config bleed fixes; no-op shim removal.
3. `a9b48b1` — Source-anchored remaining clinical claims with inline pointers on "studies show" / "strongest evidence" statements.
4. `49029c0` — Stat reconciliation across sites (≈59% APOP overweight stat), additional citations, broken `/legal` link fixes, vets-co telehealth CTA repointed.
5. `6f30495` — Pessoa "more Olympic medalists than any other saddle" superlative softened.
6. `4f11a26` — Legal-page parity: 12 new legal pages on 4 sites + 1 affiliate-disclosure page on dog-com; copy interpolated per site.
7. `72c003b` — All 24 remaining broken internal links resolved; `Breadcrumb` component widened to allow optional `href` on intermediate crumbs.
8. `b664eff` — `ScoreMethodology` component added to all 41 score-bearing pages; fish-com / lizard-com trust-bar parity with the other 3 sites.

Verifications (from merge commit message):
- `turbo build` + `type-check` pass for all 5 apps
- 0 broken internal links
- 0 missing/duplicate titles
- All 5 Vercel preview deploys succeeded

Exit invariants now permanent (see `QC-STANDARDS.md` § 1, § 3, § 4):
- No fabricated authority anywhere in the repo
- Trust-bar parity across all 5 sites
- Legal-page parity across all 5 sites
- Score methodology disclosed wherever a score is shown
- Zero known broken internal links at merge time

---

## PR #3 — SEO & Infrastructure Stabilization

- Status: not yet opened (planning)
- Owner: Agent 1 (build), Agent 2 (audit)
- See `ROADMAP.md` § PR #3 for scope and exit criteria.

This section is a placeholder. When PR #3 merges, append:
- Merge commit hash and date
- Summary of changes
- Verifications recorded
- Any new permanent invariants added to `QC-STANDARDS.md`

---

## Conventions for Future Entries

When a PR merges:
1. Append a new section at the bottom of this file with the same shape as PR #2.
2. Include the merge commit hash, date, and a concise batch-by-batch (or theme-by-theme) summary.
3. Record concrete verifications (what was actually run, what passed).
4. Note any new permanent invariants added to `QC-STANDARDS.md`.
5. Update `OPERATIONS.md` § Current Phase and `ROADMAP.md` status legend.
