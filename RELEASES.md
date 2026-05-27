# RELEASES — CarloOS

Append-only release history. Each entry summarizes a merged PR. Source of
truth is the git log; this file is the human-readable index. Do not rewrite
history here to hide a defect — file a follow-up PR instead (see
`QC-STANDARDS.md` § 8).

Numbering convention: entries map to **roadmap phases** (`Phase 1`,
`Phase 2`, …) per `OPERATIONS.md` § Numbering Note. GitHub PR numbers are
not aligned with phase numbers and are mentioned only where they were
recorded in commit messages.

---

## Phase 1 — Core Build & Deployment Foundation

- Status: shipped
- Merge commits: `2d3030a` ("CarloOS monorepo — 5 apps, dog-com flagship"), with follow-up `9709150` ("CarloOS V2 — build fixes, stubs, 37 new content pages")
- Date: 2026-05-25 → 2026-05-26
- UNKNOWN: whether this was originally landed as a single GitHub PR or as a direct push to `main`. Git shows direct commits to `main`, not a merge commit. Treated as "Phase 1" for narrative continuity.

Summary:
- Scaffolded the CarloOS monorepo: 5 Next.js 14 apps (`dog-com`, `fish-com`, `lizard-com`, `saddle-com`, `vets-co`)
- Shared packages: `@carloOS/ui` (12 shared components), `@carloOS/config` (per-site theme + URLs), `@carloOS/db` (Supabase client + queries)
- Turborepo pipeline (`turbo.json`), workspace `package.json`, `tsconfig.json` with path aliases
- Supabase schema + indexes (`packages/db/src/schema.sql`, `indexes.sql`)
- Seed scripts (`scripts/seed.ts`, `scripts/seed-fish.ts`) and HTML migration (`scripts/migrate-html.ts`)
- Site-file generation (`scripts/generate-site-files.ts` for sitemap + robots)
- Deployment path documented in `README.md` — Vercel one-project-per-site, Supabase shared, Cloudflare DNS
- Pre-`9709150` config tweaks: `c51d8d0` (`next.config.mjs` for Next 14), `f2e4b0b` (turbo pipeline → `tasks` for Turbo 2), `5943df5` (`packageManager` field for Turborepo)
- "CarloOS V2" follow-up `9709150`: build fixes, stubs, and 37 new content pages

Verifications recorded: not explicitly documented in commit messages. UNKNOWN whether full CI / Vercel previews ran at Phase 1 close — Phase 2's verifications established the first fully-recorded green baseline.

---

## Phase 2 — Trust Cleanup & Stabilization

- Status: shipped
- Merge commit: `4c27988` ("Merge PR #2: Trust & stabilization — fake-authority removal, broken-link fixes, legal/editorial parity")
- Date: 2026-05-26
- GitHub PR #: 2 (per merge commit message)
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

Permanent invariants established (now in `QC-STANDARDS.md`):
- No fabricated authority anywhere in the repo
- Trust-bar parity across all 5 sites
- Legal-page parity across all 5 sites
- Score methodology disclosed wherever a score is shown
- Zero known broken internal links at merge time

**Known gap discovered post-merge** (2026-05-27 audit): the Phase 2 sweep
was DVM-byline-specific and metadata-focused. It missed credentialed-tester
eyebrow badges ("Tested · May 2025", "CSF Tested", etc.) on 18 review pages
and fabricated-authority claims in homepage long-form copy (lizard
"vet-reviewed health sections"; saddle "Master Saddler Contributors").
These will be closed in Phase 3a. `QC-STANDARDS.md` §1.1.a and §1.1.b were
added to close the rule-level gap.

---

## Phase 3 (decomposed)

### Phase 3a — Trust Hotfix

- Status: shipped
- Merge commit: `caead17` ("Merge pull request #5 from carlo8884/agent2/pr3a-trust-badges")
- Date: 2026-05-27
- GitHub PR #: 5
- Branch that merged: `agent2/pr3a-trust-badges` (note: branch labeled `agent2/` but contained app-code commits — recorded as `BACKLOG.md` B-5; Carlo accepted as-shipped)
- Closes: `F-1` (Blocker), `F-2` (Blocker), `F-3` (High) from `audits/2026-05-27-morning.md`

Summary (single commit `b6ddae9`, "PR-3a: sweep credentialed-review badges PR #2 missed"):
- F-1 — Replaced 18 credentialed-testing eyebrow badges on review pages with non-authority labels ("Buyer's Guide", "Brand Review"). Pattern Phase 2 missed: "Tested · May 2025", "CSF Tested", "CSF Reviewed", "Expert Reviewed", "Trainer Tested", "Keeper Tested", "PAR Tested" eyebrows.
- F-2 — `apps/lizard-com/src/app/page.tsx:59` "Species profiles with vet-reviewed health sections" claim removed/rephrased.
- F-3 — `apps/saddle-com/src/app/page.tsx:74` "CSF Certified Fitters / 30+ Brands Reviewed / Master Saddler Contributors" stat block replaced or removed.

Verifications expected at merge time: Agent 2 re-audit (status: pending afternoon verify per `OPERATIONS.md` § What Each Agent Should Do Next).

Permanent invariants newly enforced post-merge (already codified in `QC-STANDARDS.md` § 1.1.a / 1.1.b): no eyebrow-badge testing/review claims, no homepage long-form fabricated-authority copy. These were added pre-merge in the same docs PR that introduced the lifecycle.

### Phase 3b — SEO Infrastructure

- Status: in progress on `agent1/pr4-seo-stabilization @ b28782b` (rebased onto post-3a `main`)
- Open items: `F-4`, `F-5`, `F-6`, `F-7`, `F-8` (7 of 40 done), `F-9`

When 3b merges, append a section here matching the shape of Phase 3a.

### Phase 3c — Schema Completeness

- Status: TODO. Open items: `F-11`, `F-12`.

### Convention for future Phase 3 sub-entries

Each merge appends:
- Merge commit hash, date, GitHub PR #
- Branch that merged
- Items closed (with severity)
- Theme-by-theme or batch-by-batch summary
- Verifications recorded
- Any new permanent invariants added to `QC-STANDARDS.md`

---

## Audit Log

Auditor reports do not "release" anything but are recorded here so the
history is self-contained.

### 2026-05-27 — Morning audit (Agent 2)

- File: `audits/2026-05-27-morning.md` on branch `claude/carloOS-internal-linking-audit-1nrhH`
- Latest commit: `d288ebf`
- Audited: `main` at `4c27988` (Phase 2 merge) + the open Agent 3 governance docs branch
- Findings: 2 BLOCKER, 1 HIGH, 8 MEDIUM, 2 LOW (12 total)
- Verified-passing invariants on `main@4c27988`: 14 (reproduced in `QC-STANDARDS.md` Appendix)
- Recommended go/no-go: **No-Go on a "Phase 3 SEO ship"** until Findings #1 and #2 are resolved
- Self-correction recorded: earlier branch-scoped audit script reported 32 broken links against pre-Phase-2 base; re-run against `main@4c27988` confirms 0 broken links

### Prior audit (Agent 2)

- File: `AUDIT.md` on branch `claude/carloOS-internal-linking-audit-1nrhH`
- Audited: pre-Phase-2 base `9709150` (now superseded by the morning audit for `main`)
- Notable carry-over: sitemap.ts expansion commits (`78cca07`) for all 5 sites — to be rebased onto post-Phase-2 `main` in Phase 3b

---

## Conventions for Future Entries

The full post-merge procedure is in `WORKFLOW.md` § Merge & Release
Procedure. Short version:

When a PR merges:
1. Append a new section under the relevant Phase with merge commit hash, GitHub PR #, branch, items closed, theme-by-theme summary.
2. Record concrete verifications (what was actually run, what passed).
3. Note any new permanent invariants added to `QC-STANDARDS.md`.
4. Update `OPERATIONS.md` § Current Phase / Active Priorities / Active Branches.
5. Mark closed items in `BACKLOG.md`.
6. If a known gap is discovered after merge, record it in this file under the phase that introduced or missed it — do not rewrite the original entry.
