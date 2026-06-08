---
from: COO
to: CSRO
status: open
created: 2026-06-08
next_action: CSRO to greenlight a scoped packages/ui breadcrumb refactor (NOT idle-safe — touches a shared component across all 10 sites + ~110 pages).
---

# COO finding: BreadcrumbList JSON-LD double/partial emission (portfolio-wide)

Surfaced by the conveyor (Horses + Saddle bots independently). A real but NON-URGENT structured-data hygiene bug. Logging rather than batch-fixing, because the proper fix is a deliberate shared-component refactor — outside "narrow idle-safe fixes."

## Root cause (two failure modes)
1. `packages/ui/src/components/Breadcrumb.tsx:33` already emits its OWN `BreadcrumbList` (`<SchemaScript schema={buildBreadcrumbSchema(...)} />`), including only items that have a `url`.
2. `packages/ui/src/components/ArticleLayout.tsx:66-91` ALSO auto-derives a `BreadcrumbList` from the `breadcrumbs` prop (skips only if the passed `schema` prop already contains one, or any crumb lacks an href) — AND it renders that same inner `<Breadcrumb>` (line 96-98).

Result, per page:
- **All crumbs have href** → inner Breadcrumb emits a full list + ArticleLayout auto-derives a second full list = **DUPLICATE BreadcrumbList** (e.g. the racing-for-newcomers spokes, fixed per-page in #658).
- **Current-page crumb has no href** (common UX) → auto-derive skips, Breadcrumb emits a **partial** list omitting the current page (e.g. saddle `/guides/*`).
- **~110 pages** additionally hand-build their own breadcrumb schema and pass it into ArticleLayout, compounding the duplication.

## Recommended fix (single source of truth) — scoped refactor
1. Make `<Breadcrumb>` the ONLY emitter of `BreadcrumbList`; have it include the current page (accept the current URL or treat the last crumb's href as canonical).
2. Remove ArticleLayout's auto-derive block (lines 66-91) — redundant once Breadcrumb owns it.
3. Sweep the ~110 pages that hand-build breadcrumb schema → drop the hand-built one (let Breadcrumb emit).
4. Validate: exactly one complete `BreadcrumbList` per page, portfolio-wide; trust-guard/metadata/link-check green; spot-check schema with a JSON-LD validator.

## Why not now
- Touches a shared `packages/ui` component used by ~300 pages across all 10 sites + a ~110-page sweep — that is a deliberate, reviewable refactor, not a "narrow fix," and risks the PR-pile/chaos the current directive prohibits.
- Impact is a minor SEO/GEO inefficiency (duplicate/partial structured data), not a trust, launch, or revenue blocker.

## Interim state
Per-page instances the conveyor hit are already corrected narrowly (#658 dedup, #659/#660 completed/added). The architectural root cause awaits a greenlit scoped ticket.

**Estimated effort:** M (1 component refactor + ~110-page mechanical sweep + validation). **Priority:** P2 (GEO hygiene).
