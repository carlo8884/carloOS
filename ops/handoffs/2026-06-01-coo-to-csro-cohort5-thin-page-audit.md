---
from: COO
to: CSRO
status: complete
created: 2026-06-01
next_action: CSRO to decide on /disclosure vs /legal/affiliate-disclosure consolidation (shared lane)
---

# Cohort-5 thin-page + duplicate-title audit

Branch: `qa/cohort5-thin-page-audit`. Scope: launch-quality gates "no obvious
thin/duplicate pages" + "clean homepage→hub→spoke" on dog-com, fish-com,
ferret-com, petfood-com, vets-co.

## Tooling

`scripts/ci/thin-page-audit.mjs` already existed (PR #335). Rather than clobber
it, this PR **extends** it with within-site duplicate-title detection
(normalized `<title>`/`<h1>`, site-suffix stripped) — the one capability the QA
brief required that the original lacked. Still advisory / report-only (exits 0).
New `--json` shape: `{ thin, duplicateTitles }`.

## Thin-page results (cohort-5)

| Site | Pages | Flagged thin | Verdict |
|---|---|---|---|
| dog-com | 156 | 2 | all legit (1 funnel, 1 hub) |
| fish-com | 103 | 0 | clean |
| ferret-com | 106 | 1 | legit hub |
| petfood-com | 102 | 1 | legit hub |
| vets-co | 100 | 3 | all legit hubs |

Per-page triage:

- `dog-com /pet-insurance/quiz` (44w) — **Monetization lane** (`(funnels)/`).
  Quiz UI lives in `quiz-client.tsx`; the `page.tsx` is a thin shell by design.
  Not COO's to touch. Noted only.
- `dog-com /guides` (198w) — legit **hub**: breadcrumb + schema + 2 spoke links
  (BCS, spay/neuter timing). Value is the link graph, not prose. OK.
- `ferret-com /tools` (158w) / `petfood-com /tools` (175w) — legit tool-hub
  index pages, each listing the live calculator(s). OK.
- `vets-co /reviews` (155w), `/insurance` (237w), `/guides` (242w) — legit hubs,
  each maps over child links with breadcrumb + schema. OK.

**No empty/broken/orphan pages found in cohort-5.** Every flagged page is a
functional hub/index or a Monetization-owned funnel shell. Nothing rewritten —
that was out of scope per the brief, and none warranted it.

## Duplicate-title finding (REAL — needs a decision)

4 of 5 cohort-5 sites (dog, fish, ferret, vets — not petfood) ship **two**
disclosure pages with the identical normalized title "affiliate disclosure":

- `/disclosure` — full FTC page, `ArticleLayout`, linked from footer + homepage.
  Shared lane (COO + Monetization per CLAUDE.md §5).
- `/legal/affiliate-disclosure` — shorter legal-footer variant, linked from
  the other `/legal/*` pages.

Both are intentional, both are linked (neither is an orphan), but they have
near-duplicate content and an identical `<title>` within each site — a
canonicalization-risk signal for SEO/GEO (Google may pick the wrong canonical;
AI surfaces may dedupe unpredictably).

**Not fixed here on purpose:** `/disclosure` is a shared FTC surface and
consolidation (redirect one → the other, or differentiate titles + add
`<link rel=canonical>`) touches Monetization's lane and footer link structure.
Per §5 this needs PR-comment coordination, not a unilateral COO edit.

Recommended resolution (CSRO to slot): keep `/disclosure` as canonical, make
`/legal/affiliate-disclosure` either (a) a redirect to `/disclosure`, or
(b) retitle + canonical-tag it as the short legal variant. Either is XS effort.

## CI

- `trust-guard.mjs` — PASS (0 hits, 1148 files)
- `link-check.mjs` — PASS (0 broken, all 10 sites strict)
- `metadata-policy.mjs` — PASS (enforced sites clean)
- `thin-page-audit.mjs` — runs clean, exits 0 (single-site, `--all`, `--json`)
