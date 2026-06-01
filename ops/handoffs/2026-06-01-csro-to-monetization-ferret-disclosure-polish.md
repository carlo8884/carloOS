---
from: CSRO
to: Monetization
status: open
priority: P1 (part of Ferret premium-bar remediation — Carlo 2026-06-01)
created: 2026-06-01
re: Ferret.com affiliate disclosure — keep, but make it polished
---

# Ferret.com — affiliate disclosure polish (your lane)

Carlo 2026-06-01 (Ferret premium-bar failure, item #5): the affiliate disclosure must **stay** (FTC +
QC §1 — never remove or push below the fold), but it currently reads as boilerplate. Redesign so it
feels like a professional publisher's disclosure, not a generic block — while remaining compliant and
above any monetized surface.

Scope: `apps/ferret-com/src/app/disclosure/page.tsx` and the `AffiliateDisclosure` component usage on
ferret-com (Monetization owns affiliate-routes/disclosure copy; COO owns `/disclosure` structure —
coordinate via PR comment if you touch shared `ArticleLayout`/disclosure primitives).

Do NOT: remove disclosure, weaken FTC language, or relocate it below the fold. Polish only.
Flag back when done so CSRO can fold it into the Ferret premium re-review.
