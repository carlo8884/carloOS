# BACKLOG — CarloOS

The single source of truth for work-item state. `OPERATIONS.md` and
`ROADMAP.md` reference items by ID; they do not duplicate the detail.

- **Open** items have not been merged.
- **Closed** items have been merged — record the merge commit hash.
- **Dropped** items have been intentionally cancelled — record the reason.

Last updated: 2026-05-27 (initial population from `audits/2026-05-27-morning.md`).

---

## Phase 3a — Trust Hotfix (gating Phase 3)

Owner: Agent 1. Closes findings from `audits/2026-05-27-morning.md`.

### F-1 [BLOCKER] — Credentialed-testing eyebrow badges across 18 review pages
- Source: Finding #1, 2026-05-27 audit
- Standard violated: QC §1.1, §1.1.a, §1.2, §1.6
- Files:
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
- Remediation: drop `· May YYYY` suffix, drop credentialed prefixes, optionally replace with non-authority label ("Editorial Picks", "Buyer's Guide") or remove the badge entirely.
- Estimated effort: ~18 files, ~18 small string changes.

### F-2 [BLOCKER] — Lizard homepage "vet-reviewed" claim
- Source: Finding #2, 2026-05-27 audit
- Standard violated: QC §1.1, §1.1.b, §1.6
- File: `apps/lizard-com/src/app/page.tsx:59`
- Observed: `"Species profiles with vet-reviewed health sections."`
- Remediation: delete the phrase or rephrase to "current research" / "source-anchored health information".

### F-3 [HIGH] — Saddle homepage fake-personnel stat block
- Source: Finding #3, 2026-05-27 audit
- Standard violated: QC §1.1, §1.1.b, §1.2
- File: `apps/saddle-com/src/app/page.tsx:74`
- Observed: stat tiles "CSF Certified Fitters / 30+ Brands Reviewed / Master Saddler Contributors"
- Remediation: delete the stat block, or replace with verifiable stats (pages count, sources cited, brands referenced).

---

## Phase 3b — SEO Infrastructure

Owner: Agent 1. Coordinate with Agent 2 for sitemap commit rebase.

### F-4 [MEDIUM] — Sitemap entries pointing at non-existent routes
- Source: Finding #4, 2026-05-27 audit
- Standard violated: QC §2.6
- Entries:
  - `apps/lizard-com/src/app/sitemap.ts` — `/health` (no route exists)
  - `apps/saddle-com/src/app/sitemap.ts` — `/health` (no route)
  - `apps/saddle-com/src/app/sitemap.ts` — `/setup` (no route)
  - `apps/vets-co/src/app/sitemap.ts` — `/setup` (no route)
- Remediation: Agent 2 has commit `78cca07` on branch `claude/carloOS-internal-linking-audit-1nrhH` that rewrites all 5 sitemaps to enumerate from real routes. Rebase onto post-Phase-2 `main` (sitemap files are not in Phase 2's diff, so a clean rebase is expected).

### F-5 [MEDIUM] — Doubled `| {SiteName}` suffix on 302 page titles
- Source: Finding #5, 2026-05-27 audit
- Standard violated: QC §2.11
- File: `packages/ui/src/components/SEOHead.tsx:67`
- Observed: `const fullTitle = \`${title} | ${config.theme.siteName}\`` — appends suffix unconditionally even when `title` already ends with it
- Remediation (idempotent one-liner):
  ```ts
  const suffix = ` | ${config.theme.siteName}`;
  const fullTitle = title.endsWith(suffix) ? title : `${title}${suffix}`;
  ```
- Per-site counts: dog-com 115/128, fish-com 69/72, lizard-com 47/49, saddle-com 38/40, vets-co 33/36.

### F-6 [MEDIUM] — Lizard parasites duplicate-slug pair, no cross-canonical
- Source: Finding #6, 2026-05-27 audit
- Standard violated: QC §2.3 (canonical consistency)
- Files: `apps/lizard-com/src/app/health/parasites/page.tsx`, `apps/lizard-com/src/app/health/parasites-guide/page.tsx`
- Observed: both declare their own URL as canonical; the `-guide` variant should canonical-point to the non-suffixed slug (matches the pattern already used for the 4 other duplicate pairs on the site).
- Remediation: change `path: '/health/parasites-guide'` to `path: '/health/parasites'` in the `-guide` page's `buildMetadata` call.

### F-7 [MEDIUM] — Three unsourced superlatives
- Source: Finding #7, 2026-05-27 audit
- Standard violated: QC §1.4
- Items:
  - `apps/dog-com/src/app/reviews/best-dry-dog-food/page.tsx:172` — Hill's "the most prescribed therapeutic nutrition in veterinary medicine". Source it or soften to "frequently prescribed".
  - `apps/saddle-com/src/app/reviews/stubben-saddle-review/page.tsx:81` — `"Best-in-class German leather"` in `pros[]`. Drop "Best-in-class".
  - `apps/saddle-com/src/app/reviews/best-english-saddles/page.tsx:41` — same phrasing, second occurrence. Same fix.

### F-8 [MEDIUM] — 40 review-detail pages use inline `<nav>` breadcrumbs
- Source: Finding #8, 2026-05-27 audit
- Standard violated: QC §2.9, §2.10
- Files: all `reviews/*/page.tsx` across 5 sites (40 files; representative example `apps/dog-com/src/app/reviews/best-dog-beds/page.tsx:34-38`)
- Remediation: replace inline `<nav>` block with `<Breadcrumb crumbs={[…]} />` from `@carloOS/ui` (which emits `BreadcrumbList` JSON-LD).

### F-9 [LOW] — 258 titles > 60 chars, 195 descriptions > 160 chars
- Source: Finding #9, 2026-05-27 audit
- Standard violated: QC §2.1, §2.2 (targets, not hard rules)
- Remediation: triage by template. Many will trim naturally when F-5 lands (removing the doubled suffix reclaims ~15 chars per title). Recheck after F-5 and re-triage residual.

---

## Phase 3c — Schema Completeness

Owner: Agent 1. Can run in parallel with Phase 3b.

### F-11 [MEDIUM] — dog-com `/faq` page lacks aggregate FAQPage schema
- Source: Finding #11, 2026-05-27 audit
- Standard violated: QC §2.10
- File: `apps/dog-com/src/app/faq/page.tsx`
- Observed: each `FAQAccordion` correctly sets `includeSchema={false}` (multiple FAQPage schemas would be invalid), but no aggregate page-level schema replaces them.
- Remediation: add a single `buildFAQSchema({ questions: [...all sections flattened...] })` + `SchemaScript` call at page level. `buildFAQSchema` exists at `packages/ui/src/components/SEOHead.tsx:130-145`.

### F-12 [MEDIUM] — 31 health pages missing `MedicalWebPage` schema
- Source: Finding #12, 2026-05-27 audit
- Standard violated: QC §2.10
- Breakdown:
  - `dog-com`: 4 pages — `health/senior-dog-care`, `health/labrador-health`, `health/french-bulldog-health`, `health/german-shepherd-health`
  - `fish-com`: 12 health pages (entire `health/` directory uses Article only)
  - `lizard-com`: 14 health pages (entire `health/` directory uses Article only)
  - `vets-co`: 1 page — `breeds/german-shepherd-health` (parity with sibling breed-health pages)
- Remediation: add `buildMedicalWebPageSchema({...})` and `SchemaScript` per page. `author` is `Organization` per Phase 2 — no fake authority introduced. Reference pattern: any current vets-co health page (e.g. `apps/vets-co/src/app/health/leptospirosis/page.tsx`).

---

## Phase 3 — Low Priority (carryover)

### F-10 [LOW] — Soft puffery in three breed/review snippets
- Source: Finding #10, 2026-05-27 audit
- Standard: QC §4.4
- Files:
  - `apps/dog-com/src/app/breeds/golden-retriever/page.tsx:102` — "an unmatched combination of temperament…"
  - `apps/dog-com/src/app/health/german-shepherd-health/page.tsx:65` — "intelligence, drive, and loyalty are unmatched"
  - `apps/dog-com/src/app/reviews/best-dog-crates/page.tsx:82` — "value-to-quality ratio is unmatched in wire crates"
- Remediation: soften "unmatched" on next content pass. Not Phase 3a/b/c gating.

---

## Phase 4 — Premium Visual / UX Pass (placeholder items)

Items here are pre-planning seeds, not committed scope. Promote to a Phase 4
sub-PR section when work starts.

- 4a — Typography & spacing audit per site
- 4b — Component polish (`ArticleLayout`, `ReviewCard`, `FAQAccordion`, `Nav`, `Footer`, `EmailCapture`, `Breadcrumb`)
- 4c — Imagery & above-the-fold per site; OG image visual QA
- 4d — Accessibility: WCAG 2.2 AA contrast, focus states, landmarks, skip links, keyboard nav, screen-reader spot-check

Detailed planning lives in `ROADMAP.md` § Phase 4 until items become verified work.

---

## Phase 5 — Content Expansion (inbox from former DASHBOARD.md)

Carried forward from `DASHBOARD.md` (Sprint 35 snapshot). These are
candidates, not commitments — promote to scoped work when Phase 5 opens.

### fish-com
- New: `/species/swordtail-fish`
- New: `/setup/aquarium-cycling-guide` (verify depth)
- Expand: `/species/betta-fish` (7.9KB — bettas as carnivores, flare training, etc.)

### lizard-com
- New: `/species/leopard-gecko` (9.7KB — deeper on impaction)
- New: `/health/hypocalcemia` (or expand MBD)
- New: `/species/veiled-chameleon` (6.4KB — expand)

### dog-com
- New: `/health/dog-allergies` (atopic + food + contact)
- New: `/breeds/golden-retriever` (verify — note: 11.7KB exists, possibly skip)
- New: `/nutrition/raw-diet-risks`
- New: `/health/dog-seizures`

### saddle-com
- New: `/guides/horse-nutrition-guide` (verify — 12KB exists, possibly skip)
- New: `/reviews/best-english-saddles` (verify — 10.3KB exists, possibly skip)
- New: `/reviews/best-riding-boots`

### vets-co
- New: `/health/leptospirosis`
- New: `/health/dog-eye-conditions`

---

## Phase 6 — Monetization Infrastructure (placeholder)

- Stripe `/api/checkout` — verify idempotency + webhook signature handling
- Membership data model in Supabase + audit log
- Mailchimp `/api/subscribe` — double-opt-in confirmation, per-site audience routing
- Affiliate link audit — Amazon, Chewy, Trupanion/Healthy Paws, Stubben/Pessoa, Vetster/AskVet

Live activation = Carlo only.

---

## Phase 7 — Automation & Agent Orchestration (placeholder)

- CI gates for QC §1.1.a/§1.1.b patterns ("Tested · {Date}", credentialed-prefix badges, fake-personnel stat blocks)
- CI gate for QC §2.6 (every sitemap entry resolves)
- CI gate for QC §2.11 (no doubled title suffix)
- CI gate for QC §3.2 (FTC disclosure rendered on review pages)
- PR-template + issue-template enforcing evidence requirements
- Optional drift-watch: alert when `OPERATIONS.md` "Active Branches" goes stale

---

## Inbox / Unsorted

Items raised but not yet triaged into a phase.

- Retire `DASHBOARD.md` once Phase 5 absorbs all its useful content. The file is a Sprint-35 snapshot referencing a local `/Users/carlotabibi/...` path and unmerged push commands; superseded by `OPERATIONS.md` + `BACKLOG.md`. Recommend an Agent 3 follow-up PR to delete it.
- Verify whether `claude/remove-fake-authority-0WY61` (Agent 1, historical) is safe to delete now that its content shipped via `4c27988`.
- Cross-property linking strategy: 0 links between the 5 sites despite thematic adjacency. Noted in `AUDIT.md` (Agent 2) as a future content sprint.
- In-body image strategy: 313 of 325 content pages have zero in-body images (noted in `AUDIT.md`). Belongs in Phase 4c or Phase 5.

---

## Closed

(Items will be moved here when their PR merges. Include merge commit hash, PR title, and date.)

_None yet on this branch._
