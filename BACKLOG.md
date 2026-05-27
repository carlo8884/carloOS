# BACKLOG — CarloOS

The single source of truth for work-item state. `OPERATIONS.md` and
`ROADMAP.md` reference items by ID; they do not duplicate the detail.

Lifecycle and handoff rules are codified in `WORKFLOW.md`. This file
applies them.

Last updated: 2026-05-27 (after Phase 3a merge as `caead17`; adopting `WORKFLOW.md` lifecycle states).

---

## Status Legend

States are formal — see `WORKFLOW.md` § Task Lifecycle for definitions and
transition rules.

| Status | Short |
|---|---|
| `TODO` | Identified, no branch yet |
| `IN_PROGRESS` | Active work on a branch |
| `QC_REVIEW` | Agent 2 verifying |
| `READY_TO_MERGE` | Agent 2 sign-off; Carlo gates |
| `DONE` | Merged to `main` |
| `BLOCKED` | Cannot progress; reason recorded |
| `DROPPED` | Cancelled; reason recorded |

### Item schema

Every active item uses the same shape:

- **ID** — `F-N` (audit finding) or `B-N` (backlog-only)
- **Severity** — Blocker / High / Medium / Low / Info per `QC-STANDARDS.md` § 5
- **Status** — from the legend above
- **Owner** — Agent 1 / Agent 2 / Agent 3 / Carlo
- **Branch** — current branch+tip if `IN_PROGRESS`/`QC_REVIEW`/`READY_TO_MERGE`; merge commit hash if `DONE`
- **Source** — audit file + commit hash, if applicable
- **Standard** — QC clauses violated
- **Files / Evidence** — file:line list or count
- **Remediation** — what to do
- **Estimate** — rough effort

---

## At-a-Glance — Active Items

| ID | Sev | Status | Owner | Branch / Tip |
|---|---|---|---|---|
| F-4  | Medium | IN_PROGRESS    | Agent 1 | `agent1/pr4-seo-stabilization @ f2ca243` |
| F-5  | Medium | IN_PROGRESS    | Agent 1 | `agent1/pr4-seo-stabilization @ f2ca243` |
| F-6  | Medium | TODO           | Agent 1 | — |
| F-7  | Medium | TODO           | Agent 1 | — |
| F-8  | Medium | IN_PROGRESS    | Agent 1 | `agent1/pr4-seo-stabilization @ dbc053c` (7 of 40 migrated) |
| F-9  | Low    | IN_PROGRESS    | Agent 1 | `agent1/pr4-seo-stabilization @ b28782b` (W1 restore applied) |
| F-10 | Low    | TODO           | Agent 1 | — |
| F-11 | Medium | TODO           | Agent 1 | — |
| F-12 | Medium | TODO           | Agent 1 | — |
| B-1  | Info   | TODO           | Agent 3 | — (retire `DASHBOARD.md`) |
| B-2  | Info   | TODO           | Agent 3 + Carlo | — (verify+delete `claude/remove-fake-authority-0WY61`) |
| B-3  | Low    | TODO           | Future | — (cross-property internal linking) |
| B-4  | Low    | TODO           | Future | — (in-body imagery strategy) |
| B-5  | Info   | TODO           | Agent 3 + Carlo | — (branch-naming + role-lane drift observation) |
| B-6  | Info   | TODO           | Agent 3 | — (delete `agent2/pr3a-trust-badges` post-merge) |

When an item moves, update this table AND the item body. Implicit handoffs
are forbidden (`WORKFLOW.md` § Handoff Lifecycle).

---

## Phase 3b — SEO Infrastructure

### F-4 — Sitemap entries pointing at non-existent routes
- **Severity:** Medium · **Status:** IN_PROGRESS · **Owner:** Agent 1
- **Branch:** `agent1/pr4-seo-stabilization @ f2ca243` ("SEO infra: fix SEOHead duplicate-title, regenerate sitemaps, clean robots")
- **Source:** `audits/2026-05-27-morning.md` Finding #4 (Agent 2 audit branch)
- **Standard:** QC §2.6
- **Files:** `apps/lizard-com/src/app/sitemap.ts`, `apps/saddle-com/src/app/sitemap.ts`, `apps/vets-co/src/app/sitemap.ts`
- **Remediation:** sitemaps regenerated from real route enumeration on the Agent 1 branch. Confirm Agent 2's earlier sitemap commit (`78cca07`) is now superseded.

### F-5 — Doubled `| {SiteName}` suffix on 302 page titles
- **Severity:** Medium · **Status:** IN_PROGRESS · **Owner:** Agent 1
- **Branch:** `agent1/pr4-seo-stabilization @ f2ca243`
- **Source:** Audit Finding #5 · **Standard:** QC §2.11
- **File:** `packages/ui/src/components/SEOHead.tsx:67`
- **Remediation:** idempotent endsWith-check in `buildMetadata()`.

### F-6 — Lizard parasites duplicate-slug pair canonical
- **Severity:** Medium · **Status:** TODO · **Owner:** Agent 1
- **Source:** Audit Finding #6 · **Standard:** QC §2.3
- **Files:** `apps/lizard-com/src/app/health/parasites-guide/page.tsx` → canonical to `/health/parasites`
- **Remediation:** one-line `path:` change.

### F-7 — Three unsourced superlatives
- **Severity:** Medium · **Status:** TODO · **Owner:** Agent 1
- **Source:** Audit Finding #7 · **Standard:** QC §1.4
- **Files:**
  - `apps/dog-com/src/app/reviews/best-dry-dog-food/page.tsx:172` — Hill's "most prescribed" (source or soften)
  - `apps/saddle-com/src/app/reviews/stubben-saddle-review/page.tsx:81` — "Best-in-class German leather" (drop)
  - `apps/saddle-com/src/app/reviews/best-english-saddles/page.tsx:41` — same phrase, second occurrence (drop)

### F-8 — Inline `<nav>` breadcrumbs on 40 review pages
- **Severity:** Medium · **Status:** IN_PROGRESS (7 of 40 migrated) · **Owner:** Agent 1
- **Branch:** `agent1/pr4-seo-stabilization @ dbc053c` ("SEO audit: modernize audit script + add 7 missing breadcrumbs")
- **Source:** Audit Finding #8 · **Standard:** QC §2.9, §2.10
- **Remediation:** replace inline `<nav>` with `<Breadcrumb crumbs={…} />` from `@carloOS/ui` (emits `BreadcrumbList` JSON-LD). 33 pages remaining.

### F-9 — Titles >60 chars, descriptions >160 chars
- **Severity:** Low · **Status:** IN_PROGRESS · **Owner:** Agent 1
- **Branch:** `agent1/pr4-seo-stabilization @ b28782b` (final tip after W1 description restore)
- **Source:** Audit Finding #9 · **Standard:** QC §2.1, §2.2 (targets)
- **Note:** Commit `d3be689` trimmed; commit `b28782b` restored over-trimmed descriptions in response to Agent 2's W1 warning. Final per-page counts to be re-verified at `QC_REVIEW`.

### F-10 — Soft puffery in 3 breed/review snippets
- **Severity:** Low · **Status:** TODO · **Owner:** Agent 1 (next content pass)
- **Source:** Audit Finding #10 · **Standard:** QC §4.4
- **Files:**
  - `apps/dog-com/src/app/breeds/golden-retriever/page.tsx:102`
  - `apps/dog-com/src/app/health/german-shepherd-health/page.tsx:65`
  - `apps/dog-com/src/app/reviews/best-dog-crates/page.tsx:82`

---

## Phase 3c — Schema Completeness

### F-11 — dog-com `/faq` aggregate FAQPage schema
- **Severity:** Medium · **Status:** TODO · **Owner:** Agent 1
- **Source:** Audit Finding #11 · **Standard:** QC §2.10
- **File:** `apps/dog-com/src/app/faq/page.tsx`
- **Remediation:** add single page-level `buildFAQSchema({...})` + `SchemaScript` (helper at `packages/ui/src/components/SEOHead.tsx:130-145`).

### F-12 — 31 health pages missing `MedicalWebPage` schema
- **Severity:** Medium · **Status:** TODO · **Owner:** Agent 1
- **Source:** Audit Finding #12 · **Standard:** QC §2.10
- **Breakdown:**
  - dog-com: 4 — `health/senior-dog-care`, `health/labrador-health`, `health/french-bulldog-health`, `health/german-shepherd-health`
  - fish-com: 12 — entire `health/` directory
  - lizard-com: 14 — entire `health/` directory
  - vets-co: 1 — `breeds/german-shepherd-health`
- **Remediation:** add `buildMedicalWebPageSchema(...)` + `SchemaScript` per page. `author: Organization` (no fake authority).

---

## Backlog-Only (no audit source)

### B-1 — Retire `DASHBOARD.md`
- **Severity:** Info · **Status:** TODO · **Owner:** Agent 3
- **Rationale:** Sprint-35 snapshot referencing a local path and unmerged push commands. Superseded by `OPERATIONS.md` + `BACKLOG.md`. Phase 5 inbox in this file has already absorbed its useful content.
- **Remediation:** Agent 3 follow-up PR — `git rm DASHBOARD.md`, note in `RELEASES.md` § Audit Log.

### B-2 — Confirm-and-delete `claude/remove-fake-authority-0WY61`
- **Severity:** Info · **Status:** TODO · **Owner:** Agent 3 (verify) + Carlo (delete)
- **Rationale:** Historical Agent 1 branch whose contents shipped via `4c27988`. Sits at `b664eff`. Safe to delete if the diff against `4c27988` is empty.
- **Remediation:** verify diff; if empty, ask Carlo to delete the remote branch.

### B-3 — Cross-property internal linking strategy
- **Severity:** Low · **Status:** TODO · **Owner:** Future (Phase 5 or earlier)
- **Rationale:** `AUDIT.md` flagged 0 inter-site links despite thematic adjacency.

### B-4 — In-body imagery strategy
- **Severity:** Low · **Status:** TODO · **Owner:** Future (Phase 4c or Phase 5)
- **Rationale:** 313 of 325 content pages have zero in-body images.

### B-5 — Branch-naming drift and role-lane crossing
- **Severity:** Info · **Status:** TODO · **Owner:** Agent 3 (codification) + Carlo (adjudication)
- **Observed (2026-05-27 afternoon):**
  - `agent1/pr4-seo-stabilization` uses GitHub-PR-style numbering instead of the codified `phase-3b` convention.
  - `agent2/pr3a-trust-badges` contains app-code commits (F-1/F-2/F-3). Per `AGENTS.md` § Agent 2 Forbidden Work, that lane appears crossed.
  - Phase 3a was merged via this `agent2/`-named branch as GitHub PR #5 → commit `caead17`. Carlo accepted the work as-shipped.
- **Stance:** Agent 3 does not adjudicate role-lane disputes (`AGENTS.md` § Escalation). This item exists to keep the situation visible. Convention has been clarified in `AGENTS.md` § Branch Rules to prevent recurrence.

### B-6 — Delete `agent2/pr3a-trust-badges` post-merge
- **Severity:** Info · **Status:** TODO · **Owner:** Agent 3 (verify) + Carlo (delete)
- **Rationale:** Merged into `main` via `caead17`. The remote branch is now redundant.
- **Remediation:** confirm `git log main` includes `b6ddae9` (it does, as parent of `caead17`); ask Carlo to delete the remote branch.

---

## Phase 4-7 Seeds

Items here are pre-planning seeds. Promote to `F-N` (with audit source) or
keep as `B-N` (backlog-only) when work starts.

### Phase 4 — Premium Visual / UX Pass
- 4a — Typography & spacing audit per site
- 4b — Component polish (`ArticleLayout`, `ReviewCard`, `FAQAccordion`, `Nav`, `Footer`, `EmailCapture`, `Breadcrumb`)
- 4c — Imagery & above-the-fold per site; OG image visual QA (see B-4)
- 4d — Accessibility: WCAG 2.2 AA contrast, focus states, landmarks, skip links, keyboard nav, screen-reader spot-check

### Phase 5 — Content Expansion (inbox from former `DASHBOARD.md`)

| Site | Item | Note |
|---|---|---|
| fish-com | `/species/swordtail-fish` | new |
| fish-com | `/setup/aquarium-cycling-guide` | verify depth |
| fish-com | `/species/betta-fish` | expand (7.9KB) |
| lizard-com | `/species/leopard-gecko` | deeper on impaction |
| lizard-com | `/health/hypocalcemia` | new (or expand MBD) |
| lizard-com | `/species/veiled-chameleon` | expand (6.4KB) |
| dog-com | `/health/dog-allergies` | atopic + food + contact |
| dog-com | `/nutrition/raw-diet-risks` | new |
| dog-com | `/health/dog-seizures` | new |
| saddle-com | `/reviews/best-riding-boots` | new |
| vets-co | `/health/leptospirosis` | new |
| vets-co | `/health/dog-eye-conditions` | new |

### Phase 6 — Monetization Infrastructure
- Stripe `/api/checkout` — verify idempotency + webhook signature
- Membership data model in Supabase + audit log
- Mailchimp `/api/subscribe` — double-opt-in, per-site audience routing
- Affiliate link audit — Amazon, Chewy, Trupanion/Healthy Paws, Stubben/Pessoa, Vetster/AskVet
- Live activation = Carlo only

### Phase 7 — Automation & Agent Orchestration
- CI gates from `WORKFLOW.md` § P8 (orchestration principles)
- PR/issue templates that require evidence per `QC-STANDARDS.md` § 6
- Drift-watch: `OPERATIONS.md` active-branches table vs `git branch -r`
- GitHub Issues migration per `WORKFLOW.md` § GitHub Issues Migration Plan
- Branch-name CI gate enforcing `<agent>/phase-<N><letter>-<topic>`

---

## Closed

Items that merged to `main`. Latest at top. Each entry: ID — title — merge commit hash — date.

### 2026-05-27 — Phase 3a merge (commit `caead17`, GitHub PR #5)

- **F-1 (Blocker)** — 18 credentialed-testing eyebrow badges — `caead17` — 2026-05-27
  - Merged via `agent2/pr3a-trust-badges @ b6ddae9` ("PR-3a: sweep credentialed-review badges PR #2 missed"). Replaced badges with non-authority labels ("Buyer's Guide", "Brand Review").
  - Note on lane crossing recorded in B-5 (above).
- **F-2 (Blocker)** — Lizard homepage "vet-reviewed" claim — `caead17` — 2026-05-27
  - Same merge. Phrase removed/rephrased at `apps/lizard-com/src/app/page.tsx:59`.
- **F-3 (High)** — Saddle homepage fake-personnel stat block — `caead17` — 2026-05-27
  - Same merge. Stat block at `apps/saddle-com/src/app/page.tsx:74` replaced or removed.

### Dropped

_None._
