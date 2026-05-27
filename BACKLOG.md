# BACKLOG — CarloOS

The single source of truth for work-item state. `OPERATIONS.md` and
`ROADMAP.md` reference items by ID; they do not duplicate the detail.

Last updated: 2026-05-27 (afternoon refresh — picked up `agent1/pr4-seo-stabilization` and `agent2/pr3a-trust-badges` work-in-flight).

---

## Status Legend & Schema

| Status | Meaning |
|---|---|
| `Open` | Not yet started. |
| `In Progress` | Work is on a live branch (record the branch + latest commit). |
| `Awaiting Review` | Branch is push-complete and ready for Agent 2 verification / Carlo merge. |
| `Closed` | Merged to `main`. Record the merge commit hash. |
| `Dropped` | Intentionally cancelled. Record the reason. |

Every item uses the same shape:

- **ID** — e.g. `F-1` (findings) or `B-1` (backlog-only items).
- **Severity** — Blocker / High / Medium / Low / Info, per `QC-STANDARDS.md` § 5.
- **Status** — from the legend above.
- **Owner** — agent role (Agent 1 / Agent 2 / Agent 3 / Carlo).
- **Branch** — current branch if In Progress; merge commit if Closed.
- **Source** — where this item was identified (audit path + commit hash).
- **Standard** — QC clauses violated, if any.
- **Files / Evidence** — file:line list or summary count.
- **Remediation** — what to do.
- **Estimate** — rough effort.

---

## At-a-Glance

| ID | Sev | Status | Owner | Branch / Merge |
|---|---|---|---|---|
| F-1  | BLOCKER | In Progress | Agent 1 lane (shipped on `agent2/…`) | `agent2/pr3a-trust-badges @ b6ddae9` |
| F-2  | BLOCKER | In Progress | Agent 1 lane (shipped on `agent2/…`) | `agent2/pr3a-trust-badges @ b6ddae9` |
| F-3  | HIGH    | In Progress | Agent 1 lane (shipped on `agent2/…`) | `agent2/pr3a-trust-badges @ b6ddae9` |
| F-4  | MEDIUM  | In Progress | Agent 1 | `agent1/pr4-seo-stabilization @ 61c8f88` (sitemaps regen) |
| F-5  | MEDIUM  | In Progress | Agent 1 | `agent1/pr4-seo-stabilization @ 61c8f88` (SEOHead duplicate-title) |
| F-6  | MEDIUM  | Open        | Agent 1 | — |
| F-7  | MEDIUM  | Open        | Agent 1 | — |
| F-8  | MEDIUM  | In Progress | Agent 1 | `agent1/pr4-seo-stabilization @ 77dc02a` (7 of 40 breadcrumbs migrated) |
| F-9  | LOW     | In Progress | Agent 1 | `agent1/pr4-seo-stabilization @ 3a5591b` + `@ 8fddfc8` (trim + W1 restore) |
| F-10 | LOW     | Open        | Agent 1 | — |
| F-11 | MEDIUM  | Open        | Agent 1 | — |
| F-12 | MEDIUM  | Open        | Agent 1 | — |
| B-1  | Info    | Open        | Agent 3 | — (retire `DASHBOARD.md`) |
| B-2  | Info    | Open        | Agent 3 | — (confirm-and-delete historical Agent 1 branch) |
| B-3  | Low     | Open        | Future  | — (cross-property internal linking) |
| B-4  | Low     | Open        | Future  | — (in-body imagery strategy) |
| B-5  | Info    | Open        | Agent 3 | — (branch-naming drift; F-1..F-3 shipped on `agent2/…` branch crossed role lane) |

Status snapshot — when an item moves, update this table **and** the item body.

---

## Phase 3a — Trust Hotfix (gating Phase 3)

### F-1
- **Severity:** Blocker
- **Status:** In Progress (closed on branch, not yet merged)
- **Owner:** Agent 1 lane per `AGENTS.md` (note: actual edits were committed on `agent2/pr3a-trust-badges` — see B-5)
- **Branch:** `agent2/pr3a-trust-badges` @ `b6ddae9` ("PR-3a: sweep credentialed-review badges PR #2 missed")
- **Source:** `audits/2026-05-27-morning.md` Finding #1, on `claude/carloOS-internal-linking-audit-1nrhH @ d288ebf`
- **Standard:** QC §1.1, §1.1.a, §1.2, §1.6
- **Files / Evidence:** 18 review pages across dog-com/fish-com/lizard-com/saddle-com (full list preserved below). Eyebrow badges including "Tested · May 2025", "CSF Tested", "CSF Reviewed", "Expert Reviewed", "Trainer Tested", "Keeper Tested", "PAR Tested".
- **Remediation:** drop `· May YYYY` suffix + credentialed prefixes; replace with non-authority label ("Editorial Picks", "Buyer's Guide") or remove. Per commit `b6ddae9`: replaced with "Buyer's Guide" / "Brand Review" labels.
- **Estimate:** ~18 files, ~18 small string changes.

<details><summary>Full file list (preserved for verification)</summary>

- `apps/dog-com/src/app/reviews/best-slow-feeder-bowls/page.tsx` — `🐾 Tested · May 2025`
- `apps/dog-com/src/app/reviews/best-dog-gps-tracker/page.tsx` — `📍 Tested · May 2025`
- `apps/dog-com/src/app/reviews/best-dog-beds/page.tsx` — `🛏️ Tested · May 2025`
- `apps/dog-com/src/app/reviews/best-dog-harnesses/page.tsx` — `🐕 Trainer Tested · May 2025`
- `apps/fish-com/src/app/reviews/best-canister-filters/page.tsx` — `💧 Tested · May 2025`
- `apps/fish-com/src/app/reviews/best-water-test-kits/page.tsx` — `🧪 Tested · May 2025`
- `apps/fish-com/src/app/reviews/best-nano-tanks/page.tsx` — `🌊 Tested · May 2025`
- `apps/fish-com/src/app/reviews/best-aquarium-lighting/page.tsx` — `⚡ PAR Tested · May 2025`
- `apps/fish-com/src/app/reviews/best-planted-tank-fertilizers/page.tsx` — `🌿 Planted Tank Tested · May 2025`
- `apps/lizard-com/src/app/reviews/best-bioactive-substrates/page.tsx` — `🌱 Keeper Tested · May 2025`
- `apps/saddle-com/src/app/reviews/best-riding-boots/page.tsx` — `🥾 CSF Tested · May 2025`
- `apps/saddle-com/src/app/reviews/collegiate-saddle-review/page.tsx` — `CSF Reviewed · May 2025`
- `apps/saddle-com/src/app/reviews/best-western-saddles/page.tsx` — `CSF Tested · May 2025`
- `apps/saddle-com/src/app/reviews/best-stirrup-irons/page.tsx` — `⛑️ Expert Reviewed · May 2025`
- `apps/saddle-com/src/app/reviews/best-horse-blankets/page.tsx` — `🐴 Expert Reviewed · May 2025`
- `apps/saddle-com/src/app/reviews/best-saddle-pads/page.tsx` — `CSF Tested · May 2025`
- `apps/saddle-com/src/app/reviews/pessoa-saddle-review/page.tsx` — `CSF Tested · May 2025`
- `apps/saddle-com/src/app/reviews/best-riding-gloves/page.tsx` — `🧤 CSF Tested · May 2025`
</details>

### F-2
- **Severity:** Blocker
- **Status:** In Progress (closed on branch, not yet merged)
- **Owner:** Agent 1 lane (see B-5)
- **Branch:** `agent2/pr3a-trust-badges @ b6ddae9`
- **Source:** Audit Finding #2
- **Standard:** QC §1.1, §1.1.b, §1.6
- **Files / Evidence:** `apps/lizard-com/src/app/page.tsx:59` — "Species profiles with vet-reviewed health sections."
- **Remediation:** delete the phrase or rephrase to "current research" / "source-anchored health information".
- **Estimate:** 1 line edit.

### F-3
- **Severity:** High
- **Status:** In Progress (closed on branch, not yet merged)
- **Owner:** Agent 1 lane (see B-5)
- **Branch:** `agent2/pr3a-trust-badges @ b6ddae9`
- **Source:** Audit Finding #3
- **Standard:** QC §1.1, §1.1.b, §1.2
- **Files / Evidence:** `apps/saddle-com/src/app/page.tsx:74` — stat tiles "CSF Certified Fitters / 30+ Brands Reviewed / Master Saddler Contributors".
- **Remediation:** delete the stat block or replace with verifiable stats (pages count, sources cited).
- **Estimate:** 1 block edit (~5 lines).

---

## Phase 3b — SEO Infrastructure

### F-4 — Sitemap entries pointing at non-existent routes
- **Severity:** Medium · **Status:** In Progress · **Owner:** Agent 1 · **Branch:** `agent1/pr4-seo-stabilization @ 61c8f88` ("SEO infra: fix SEOHead duplicate-title, regenerate sitemaps, clean robots")
- **Source:** Audit Finding #4 · **Standard:** QC §2.6
- **Files:** `apps/lizard-com/src/app/sitemap.ts`, `apps/saddle-com/src/app/sitemap.ts`, `apps/vets-co/src/app/sitemap.ts`
- **Remediation:** regenerate sitemaps from real route enumeration (commit on `agent1/pr4-…` claims this is done). Agent 2's earlier sitemap work (`78cca07` on `claude/carloOS-internal-linking-audit-1nrhH`) may now be superseded — confirm at merge time.

### F-5 — Doubled `| {SiteName}` suffix on 302 page titles
- **Severity:** Medium · **Status:** In Progress · **Owner:** Agent 1 · **Branch:** `agent1/pr4-seo-stabilization @ 61c8f88`
- **Source:** Audit Finding #5 · **Standard:** QC §2.11
- **File:** `packages/ui/src/components/SEOHead.tsx:67`
- **Remediation:** idempotent endsWith-check in `buildMetadata()`.

### F-6 — Lizard parasites duplicate-slug pair canonical
- **Severity:** Medium · **Status:** Open · **Owner:** Agent 1
- **Source:** Audit Finding #6 · **Standard:** QC §2.3
- **Files:** `apps/lizard-com/src/app/health/parasites-guide/page.tsx` → canonical should point at `/health/parasites`.
- **Remediation:** one-line `path:` change.

### F-7 — Three unsourced superlatives
- **Severity:** Medium · **Status:** Open · **Owner:** Agent 1
- **Source:** Audit Finding #7 · **Standard:** QC §1.4
- **Files:**
  - `apps/dog-com/src/app/reviews/best-dry-dog-food/page.tsx:172` — Hill's "most prescribed" (source or soften)
  - `apps/saddle-com/src/app/reviews/stubben-saddle-review/page.tsx:81` — "Best-in-class German leather" (drop)
  - `apps/saddle-com/src/app/reviews/best-english-saddles/page.tsx:41` — same phrase, second occurrence (drop)

### F-8 — Inline `<nav>` breadcrumbs on 40 review pages
- **Severity:** Medium · **Status:** In Progress (partial — 7 of 40 migrated) · **Owner:** Agent 1 · **Branch:** `agent1/pr4-seo-stabilization @ 77dc02a` ("SEO audit: modernize audit script + add 7 missing breadcrumbs")
- **Source:** Audit Finding #8 · **Standard:** QC §2.9, §2.10
- **Files:** all `reviews/*/page.tsx` across 5 sites (40 files). 7 migrated so far; 33 to go.
- **Remediation:** replace inline `<nav>` with `<Breadcrumb crumbs={…} />` from `@carloOS/ui` (emits `BreadcrumbList` JSON-LD).

### F-9 — Titles >60 chars, descriptions >160 chars
- **Severity:** Low · **Status:** In Progress · **Owner:** Agent 1 · **Branch:** `agent1/pr4-seo-stabilization @ 3a5591b` + `@ 8fddfc8`
- **Source:** Audit Finding #9 · **Standard:** QC §2.1, §2.2 (targets)
- **Note:** Commit `3a5591b` trimmed to ≤70 chars (not the 60-char target). Commit `8fddfc8` restored descriptions over-trimmed by the first pass in response to Agent 2's W1 warning. Net result: titles ≤70, descriptions restored. Agent 2 should re-verify the final per-page counts at merge time.

### F-10 — Soft puffery in 3 breed/review snippets
- **Severity:** Low · **Status:** Open · **Owner:** Agent 1 (next content pass)
- **Source:** Audit Finding #10 · **Standard:** QC §4.4
- **Files:**
  - `apps/dog-com/src/app/breeds/golden-retriever/page.tsx:102`
  - `apps/dog-com/src/app/health/german-shepherd-health/page.tsx:65`
  - `apps/dog-com/src/app/reviews/best-dog-crates/page.tsx:82`

---

## Phase 3c — Schema Completeness

### F-11 — dog-com `/faq` aggregate FAQPage schema
- **Severity:** Medium · **Status:** Open · **Owner:** Agent 1
- **Source:** Audit Finding #11 · **Standard:** QC §2.10
- **File:** `apps/dog-com/src/app/faq/page.tsx`
- **Remediation:** add single page-level `buildFAQSchema({...})` + `SchemaScript` (helper exists at `packages/ui/src/components/SEOHead.tsx:130-145`).

### F-12 — 31 health pages missing `MedicalWebPage` schema
- **Severity:** Medium · **Status:** Open · **Owner:** Agent 1
- **Source:** Audit Finding #12 · **Standard:** QC §2.10
- **Breakdown:**
  - dog-com: 4 — `health/senior-dog-care`, `health/labrador-health`, `health/french-bulldog-health`, `health/german-shepherd-health`
  - fish-com: 12 — entire `health/` directory
  - lizard-com: 14 — entire `health/` directory
  - vets-co: 1 — `breeds/german-shepherd-health`
- **Remediation:** add `buildMedicalWebPageSchema(...)` + `SchemaScript` per page. `author` is `Organization` (no fake authority). Pattern: any current vets-co health page.

---

## Backlog-Only (no audit source)

Items here are not from a specific audit finding. They live in `B-N` IDs.

### B-1 — Retire `DASHBOARD.md`
- **Severity:** Info · **Status:** Open · **Owner:** Agent 3
- **Rationale:** `DASHBOARD.md` is a Sprint-35 snapshot referencing a local `/Users/carlotabibi/...` path and unmerged push commands. Superseded by `OPERATIONS.md` + `BACKLOG.md`. Phase 5 inbox in this file has already absorbed its useful content.
- **Remediation:** small Agent 3 follow-up PR — `git rm DASHBOARD.md`, note in `RELEASES.md` § Audit Log.

### B-2 — Confirm-and-delete `claude/remove-fake-authority-0WY61`
- **Severity:** Info · **Status:** Open · **Owner:** Agent 3 (verification) + Carlo (deletion)
- **Rationale:** Historical Agent 1 branch whose contents shipped via `4c27988`. Sits at `b664eff`, identical to that merge's source tip.
- **Remediation:** verify diff against `4c27988`; if empty, ask Carlo to delete the remote branch.

### B-3 — Cross-property internal linking strategy
- **Severity:** Low · **Status:** Open · **Owner:** Future (Phase 5 or earlier)
- **Rationale:** `AUDIT.md` on Agent 2 branch flagged that the 5 sites have 0 inter-site links despite thematic adjacency (e.g. dog.com ↔ vets.co).
- **Remediation:** content/SEO strategy decision; not an editorial defect today.

### B-4 — In-body imagery strategy
- **Severity:** Low · **Status:** Open · **Owner:** Future (Phase 4c or Phase 5)
- **Rationale:** `AUDIT.md` flagged that 313 of 325 content pages have zero in-body images.
- **Remediation:** sourcing + alt-text strategy decision in Phase 4c, content rollout in Phase 5.

### B-5 — Branch-naming drift and role-lane crossing
- **Severity:** Info · **Status:** Open · **Owner:** Agent 3 (codification) + Carlo (adjudication)
- **Observed:** as of 2026-05-27 afternoon:
  - `agent1/pr4-seo-stabilization` uses GitHub-PR-style numbering (`pr4`) instead of the `phase-3b` convention codified in `AGENTS.md`.
  - `agent2/pr3a-trust-badges` contains app-code commits (F-1/F-2/F-3 trust hotfix). Per `AGENTS.md` § Agent 2 Forbidden Work, "Modifying app code, shared packages, or build config (escalate to Agent 1)". The lane appears crossed.
- **Stance:** Agent 3 does not adjudicate role disputes. This entry exists so the situation is visible and not lost. The work itself is good and aligned with `QC-STANDARDS.md` — the question is governance, not output. If Carlo accepts the work as-shipped, this item closes with a note. If not, Carlo decides remedy.
- **Standards consequence:** `AGENTS.md` § Branch Rules and § Agent 2 forbidden-work have been clarified in this same docs PR to make the rule more visible going forward.

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
Candidates only — not committed scope.

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
- CI gate: QC §1.1.a / §1.1.b patterns
- CI gate: QC §2.6 (sitemap routes resolve)
- CI gate: QC §2.11 (no doubled title suffix)
- CI gate: QC §3.2 (FTC disclosure on review pages)
- CI gate: branch naming convention (B-5)
- PR/issue templates that require evidence per `QC-STANDARDS.md` § 6
- Drift-watch: `OPERATIONS.md` active-branches table vs `git branch -r`

---

## Closed

Items will be moved here when their PR merges. Each entry: ID, merge commit, date, brief note.

_None yet on this branch._
