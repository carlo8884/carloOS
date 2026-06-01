---
from: COO (disposable QA sub-agent) → CSRO
to: CSRO / Carlo (record)
status: triaged
created: 2026-06-01
re: Dog.com launch-quality audit (cohort #6 — offer-backed flagship)
---

# Dog.com launch-quality audit (2026-06-01)

Read-only audit of `apps/dog-com`. Dog.com is the offer-backed flagship
("the dog owner's operating system"), held for extra premium polish and
launched **last** in the cohort. CI gates all green for dog-com
(link-check / metadata-policy / trust-guard) — findings below are
CI-invisible trust + structure risks.

## Verdict
**NOT launch-ready.** One P0 trust violation (fixed) + one P0 product/UX
orphan (partially fixed); P1 backlog below. Content depth and breadth are
strong (40+ breeds, 40+ health pages, training/nutrition clusters); the
gaps are trust framing, tool surfacing, and indexation hygiene — not page
count.

## P0 — launch-blocking

### P0-1 Fabricated vet-authorship on the symptom guide — FIXED (PR #377)
`apps/dog-com/src/app/health/dog-symptoms-guide/page.tsx` claimed a
"board-certified emergency [and critical care] veterinarian explains" the
content in three places (meta description L9, article-schema description
L17, hero subtitle L111) while the byline is `Dog.com Editorial`
(Organization). QC-STANDARDS.md §1 fabricated-credential / clinical-
authorship violation. **FIXED**: reworded all three to non-authorship
framing ("ER-vs-wait criteria from veterinary emergency medicine"). COO.

### P0-2 Signature interactive tools orphaned — PARTIALLY FIXED (PR #378)
`/which-pet` ("Which Pet Should I Get?" quiz) and `/compare` (side-by-side
breed comparison) were not linked from global nav or surfaced on the
homepage — the product ("dog owner OS" with breed selector / comparison)
resolved to a static article library. **FIXED (nav/footer)**: added
"Compare Breeds" to dog-com nav and a "Tools & Guides" footer group
(Compare Breeds, Which Pet Quiz, Puppy Schedule, Care Guides) in
`packages/config/index.ts` — both tools are now reachable from every page.
**REMAINING (Visual/CSRO)**: homepage first-screen tool promotion (hero-
level breed-selector / compare entry point) is a premium first-screen item
that overlaps Visual's lane — route to Visual.

### Product gap to flag (CSRO/Carlo, not a COO build)
The "symptom checker" brand promise resolves to a **static** `/symptoms`
urgency-tiered index, not an interactive checker. Either reframe the
promise to "symptom guide/index" (cheap, COO) or scope an interactive
symptom triage tool (net-new build — needs CSRO slotting + likely Carlo
sign-off). Flagged; no action taken.

## P1 — valuation / indexation backlog
- **Sitemap pollution**: `/dashboard/revenue` (internal) and `/data` should
  not be in the public sitemap / should be noIndex. COO.
- **`/breeds` hub** missing `ItemList` JSON-LD (40+ breed children) — add for
  AI-Overview / Perplexity citation eligibility. COO.
- **`/compare/[slug]`** comparison routes missing from `sitemap.ts`. COO.
- **Duplicate-topic pairs** (candidate canonical review): e.g.
  `/health/dog-pyoderma` vs `/health/dog-pyoderma-guide`,
  `/puppy-schedule` vs `/training/puppy-schedule`,
  `/training/socialization-window` vs `/training/dog-socialization-window`,
  `/health/spay-neuter-guide` vs `/guides/dog-spay-neuter-timing`,
  breed `/breeds/<x>` vs `/health/<x>-health`. Decide canonical + link/redirect.
  COO (review before any redirect — see CLAUDE.md redirect-stub pattern).

## Cleared (no issue)
Bylines portfolio-standard ("Dog.com Editorial" / Organization — no
fabricated DVM names beyond P0-1); medical pages defer to "your
veterinarian" and reference external board-certified specialists in
correct third-person context; affiliate CTAs route via `/go`; FTC
disclosures present; link-check clean.
