---
from: QA-subagent
to: CSRO
site: ferret-com
status: complete
created: 2026-06-01
---

# Ferret.com — Launch-Quality QA Audit

Read-and-report audit against the §8a launch-quality bar. All findings are
evidence-based and cite files actually read. No files were modified.

**Headline:** Ferret.com is in strong shape. All three CI gates
(link-check, metadata-policy, trust-guard) are green. No clinical-dosing or
medicated-product overreach found — **no trust-bar launch blocker.** The only
real defects are two orphaned duplicate-topic pages and a stray duplicate
disclosure page. These are P1 internal-linking/dup-content issues, not P0
launch blockers.

Page count: 106 `page.tsx` routes (1 funnel, ~99 editorial spokes/hubs, 6
hubs, tools, legal, disclosure, first-year-schedule).

---

## 1. Broken internal links — PASS (clean)

`node scripts/ci/link-check.mjs` → `## ferret-com: clean`. Zero broken
internal links portfolio-wide. **No findings.**

## 2. Metadata health — PASS (clean)

`node scripts/ci/metadata-policy.mjs` → `## ferret-com: clean`. ferret-com is
one of the enforced sites and passes: no titles >70, no descriptions >160, no
dup titles, no missing titles. **No findings.**

## 3. Trust-guard — PASS (clean) — NO clinical-dosing blocker

`node scripts/ci/trust-guard.mjs` → `Trust-guard: clean` (1150 TSX scanned, 0
forbidden-phrase hits). Spot-read of clinical pages
(`health/insulinoma`, `health/page.tsx`) shows drug names are described as
treatment-ladder context ("prednisone–diazoxide–surgery treatment ladder",
"deslorelin (Suprelorin) implants") framed as vet-directed, **not** as
owner-administrable dosing instructions. The homepage and every hub repeat
"work with an exotic-pet vet for clinical decisions." **No clinical-dosing or
medicated-product overreach found. No launch blocker on trust.**

## 4. Orphan pages — 2 TRUE ORPHANS (P1)

Method: extracted all 106 routes, matched each against every internal `href`
in `apps/ferret-com/src` (including template-literal hub links
`href={`/health/${card.slug}`}`) and the `nav`/`footerLinks` in
`packages/config/index.ts`.

Two routes have **zero inbound internal links from any ferret page**:

- **`/care/seasonal-coat-and-shedding`** — orphan. The Care hub
  (`apps/ferret-com/src/app/care/page.tsx`) lists `slug: 'seasonal-shedding'`
  instead, so this page is unreachable. (See §7 — it duplicates
  `/care/seasonal-shedding`.)
- **`/behavior/scratching-and-digging-furniture`** — orphan. The Behavior hub
  lists `slug: 'digging-and-burrowing'` instead. No page links to
  `scratching-and-digging-furniture`. (See §7 — near-duplicate of
  `/behavior/digging-and-burrowing`.)

A third route is effectively orphaned:

- **`/legal/affiliate-disclosure`** — zero inbound links. The shared Footer
  (`packages/ui/src/components/Footer.tsx`) links `/disclosure`,
  `/legal/privacy-policy`, `/legal/terms`, `/editorial-standards` — but NOT
  `/legal/affiliate-disclosure`. This page duplicates the canonical
  `/disclosure` page (see §7).

Note: `/(funnels)/ferret-starter-kit` has no inbound link from editorial pages
but is in `sitemap.ts` and is a Monetization-lane funnel landing page (entered
via email/ads), so this is expected, not a defect. **Out of COO lane — do not
touch; flag to Monetization only if they expect an internal entry point.**

## 5. Missing hubs — PASS

All six clusters have hub index pages (`/health`, `/care`, `/behavior`,
`/colors`, `/diet`, `/ownership`), each present in `config` nav + footer and
surfaced on the homepage HUBS grid. `/tools` hub exists. No spoke cluster
lacks a hub. **No findings.**

## 6. Thin pages — minor (P2)

Word counts (raw `wc -w` on `page.tsx`, includes JSX/style boilerplate, so
real prose is lower). Editorial spokes are uniformly substantial (smallest
real article ~885 words, most 1,400–3,000+). Thin pages are all
utility/legal, which is acceptable:

- `legal/privacy-policy` (316), `legal/terms` (334),
  `editorial-standards` (389) — boilerplate legal, acceptable.
- `legal/affiliate-disclosure` (506) — thin AND duplicate (see §7); remove
  rather than expand.
- `tools/page.tsx` (632) — thin as a hub, but it is a single-tool index with a
  good descriptive lead-in linking the evaluator, `/diet`, `/health`. Fine for
  launch; will need more entries as tools grow.

No editorial spoke is thin enough to be a launch blocker.

## 7. Duplicate route / duplicate title — 3 DUP-CONTENT PAIRS (P1)

No duplicate Next.js routes (each path resolves once). But three
duplicate-TOPIC page pairs exist, which fragments authority and risks
canonicalization confusion (CLAUDE.md §6 "duplicate content … triggers
canonicalization confusion"):

- **`/care/seasonal-shedding` (2,031 w, linked) vs
  `/care/seasonal-coat-and-shedding` (1,386 w, orphan)** — same topic. Keep
  the linked one; the orphan should be removed or 301'd.
- **`/behavior/digging-and-burrowing` (1,514 w, linked) vs
  `/behavior/scratching-and-digging-furniture` (1,939 w, orphan)** — heavily
  overlapping (both cover digging; the orphan is the longer/better page but is
  unreachable and even links back to the shorter one). Needs a
  keep-one / merge decision.
- **`/disclosure` (908 w, canonical, in Footer) vs
  `/legal/affiliate-disclosure` (506 w, orphan, not in Footer)** — duplicate
  FTC disclosure. `/disclosure` is the portfolio-standard path. Remove the
  `/legal/affiliate-disclosure` duplicate. NOTE: `/disclosure` content is
  **shared COO + Monetization** per CLAUDE.md §5 — coordinate before deleting.

No duplicate `<title>` strings (metadata-policy would have flagged; it is
clean).

## 8. Breadcrumbs — pattern inconsistency, not missing (P2)

46 of 106 pages contain no `Breadcrumb` component string. BUT hubs and many
spokes use an **inline `<nav>` breadcrumb** + `buildBreadcrumbSchema` instead
of the shared `Breadcrumb` primitive (confirmed in
`apps/ferret-com/src/app/health/page.tsx` lines 220–235 + 13–18). So most of
those 46 are not actually missing a visible breadcrumb — they hand-roll one.

Genuinely breadcrumb-less and reasonable: homepage, `tools`, `disclosure`,
`editorial-standards`, legal pages, `first-year-schedule` (top-level).

Action item is **consistency**, not absence: a chunk of `/diet/*` and
`/ownership/*` spokes (e.g. `diet/best-ferret-kibble`,
`ownership/ferret-names`) lack both the `Breadcrumb` component AND were in the
no-match list — recommend a pass to standardize all spokes on one breadcrumb
approach (component or inline+schema) so JSON-LD BreadcrumbList is uniform.
P2 polish.

## 9. Schema / JSON-LD — near-complete (P2)

101 of 106 pages emit structured data (`SchemaScript` / `buildArticleSchema` /
`buildBreadcrumbSchema` / `buildFAQSchema`). Homepage emits Organization +
WebSite schema. Five pages emit no JSON-LD:

- `tools/page.tsx`, `editorial-standards`, `legal/privacy-policy`,
  `legal/terms`, `legal/affiliate-disclosure`.

Legal/standards pages without schema is acceptable. `tools/page.tsx` should
get an `ItemList`/`WebApplication` schema as the tools index grows (P2).

## 10. First-screen / homepage — STRONG

`apps/ferret-com/src/app/page.tsx`:
- **Real hero:** eyebrow + H1 "Ferret.com" + italic tagline + substantive
  positioning paragraph + dual CTAs ("Get the first-year schedule",
  "Read the diet guide") + a `StockImage manifestKey="ferret-com:hero"`.
- **Hero image IS a ferret** — the known dog-hero defect appears RESOLVED. The
  manifest entry `ferret-com:hero` (Unsplash `5tyMgag0wRo`, photographer Steve
  Tsang) is described "A curious pet ferret looking toward the camera." Image
  manifest is Visual lane — flagging as resolved, not editing.
- **Clear hub structure on first/second screen:** trust bar → six-hub grid
  ("Six libraries, one reference") → four pillar cards → three cornerstone
  articles → email capture → sister-site teaser → editorial source-base note.
- **Interactive tool on first screen?** NO — the homepage does not surface the
  Food Evaluator above the fold; it is reachable only via `/tools`. Per §6
  "category-defining assets" this is a missed GEO/engagement hook. Recommend a
  homepage tile/teaser for the Food Evaluator. P2 (not a blocker).

Verdict: reads as a coherent, deep editorial reference with a real hub graph —
NOT a generic article list.

## 11. Internal navigation (Nav / Footer) — coherent

`packages/config/index.ts` `ferret-com.nav`: Home / Health / Care / Behavior /
Colors / Diet / Ownership / Tools — matches the six hubs + tools, logical
order. `footerLinks` adds First-Year Schedule + Tools. Layout
(`apps/ferret-com/src/app/layout.tsx`) renders shared `<Nav>` + `<Footer
showAffiliateDisclosure>`. Footer legal block links privacy/terms/disclosure/
editorial-standards.

Nav gaps:
- `/first-year-schedule` is a homepage CTA + email lead magnet + footer link
  but is **not in the top nav** — defensible (it is a conversion asset), leave
  as-is.
- No nav/footer entry omissions cause dead links. The only navigational dead
  ends are the two orphans in §4 (not reachable from nav by design-error, not
  by intent).

No dead links in nav/footer. Ordering is coherent.

---

## LAUNCH-BLOCKERS (P0)

**None.** All CI gates green; no trust/clinical-dosing overreach; homepage and
hub graph are launch-quality; hero is a real ferret. Ferret.com clears the
§8a hard gates as-is.

## POLISH BACKLOG (P1 / P2)

**P1 — internal-linking / duplicate-content (COO lane):**
1. Resolve `/care/seasonal-shedding` vs `/care/seasonal-coat-and-shedding`
   duplicate. Keep the linked one, remove/redirect the orphan; fix the Care
   hub slug if the orphan is the keeper.
2. Resolve `/behavior/digging-and-burrowing` vs
   `/behavior/scratching-and-digging-furniture` duplicate. The orphan is the
   longer page — decide keep-one or merge, then ensure the survivor is linked
   from the Behavior hub.
3. Remove duplicate `/legal/affiliate-disclosure` (orphan, thin, duplicates
   canonical `/disclosure`). **Coordinate with Monetization** — `/disclosure`
   is shared COO+Monetization per §5.

**P2 — polish (COO lane unless noted):**
4. Standardize breadcrumb approach across all spokes (component vs
   inline+schema) so BreadcrumbList JSON-LD is uniform; focus `/diet/*` and
   `/ownership/*` spokes.
5. Add `ItemList`/`WebApplication` JSON-LD to `tools/page.tsx`.
6. Surface the Food Evaluator on the homepage (tile/teaser) to put an
   interactive tool on the first/second screen (GEO + engagement).
7. (Visual lane — note only) Confirm `ferret-com:hero` and `:health-hero`
   render correctly in build; manifest now references ferret images, dog-hero
   defect appears resolved.
