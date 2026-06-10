---
from: CSRO
to: Visual, Monetization, COO, QA, IR (sprint sub-agents)
status: active
created: 2026-06-01
re: Launch-polish Sprint 1 — Ferret.com (first of new cohort order)
controller: CSRO
next_action: Run lanes in sequence (QA/COO audit → Visual → Monetization → IR); close all done-whens.
---

# Sprint 1 — Ferret.com → launch-quality template

**Objective:** make Ferret.com feel like a premium domain asset — a warm niche ferret-owner hub —
not a basic content site. Ferret is first because it is lower-risk and fast for revenue validation;
the bar set here becomes the template for PetFood → Vets → Fish → Saddle/Lizard → Dog (last).

**Controller:** CSRO. Sub-agents below are temporary, narrow, disposable.
**Guardrails (absolute):** no broad content expansion · no DNS launch · no spend/vendor/secrets/
domain-redirect decisions · trust-bar (QC §1) is non-negotiable · no clinical dosing / medicated-
product overreach.

---

## Sub-agent task table (each is temporary + disposable)

### A. QA/COO — launch audit (RUNNING)
- **site:** ferret-com
- **lane:** COO + QA (read-and-report only)
- **exact task:** audit broken links, orphan pages, missing hubs, thin pages, dup route/title,
  breadcrumbs, schema/JSON-LD, metadata, first-screen structure, internal nav; flag any clinical
  dosing / product overreach as a launch blocker. Use repo CI scripts.
- **done-when:** findings written + prioritized P0 launch-blockers vs P1/P2 backlog.
- **output/handoff file:** `ops/handoffs/2026-06-01-qa-ferret-com-launch-audit.md`
- **deadline:** 2026-06-01 EOD (this sprint).

### B. Visual — identity + first-screen
- **site:** ferret-com
- **lane:** Visual (`src/components/visual/*`, image manifest, hero/treatment) — COO does NOT touch
- **exact task:** replace dog-hero with actual ferret imagery (hero + key pages); establish a warmer
  niche owner identity; deliver a strong first-screen (real hero + the food-evaluator/color-health
  guide surfaced as a homepage product, not a link list), per the Premium Domain Launch Bar
  (`ops/csro/premium-domain-launch-bar.md`) and the premium first-screen standard once signed off.
- **done-when:** hero subject = ferret; first screen passes the 2-second identity + product-on-
  homepage gates; no generic content-list feel; no two sites share the hero.
- **output/handoff file:** `ops/handoffs/2026-06-01-visual-ferret-sprint1.md`
- **deadline:** gated on premium first-screen standard sign-off; imagery-swap subtask can start now.

### C. Monetization — safe monetization
- **site:** ferret-com
- **lane:** Monetization (`affiliate-routes.ts`, `(funnels)/*`, `/go/[vendor]/[sku]`) — COO/Visual do NOT touch
- **exact task:** ensure every commercial CTA routes via `/go`; FTC disclosures above every
  monetized surface; NO aggressive monetization on any health page; no clinical dosing / medicated-
  product buy-boxes. Audit AFTER QA/COO route + Visual land (advisor sequence).
- **done-when:** zero affiliate-route leakage on ferret-com; disclosures present above monetized
  surfaces; health pages clean of §1.5.b overreach.
- **output/handoff file:** `ops/handoffs/2026-06-01-monetization-ferret-sprint1.md`
- **deadline:** after lanes A+B land.

### D. COO — CI + navigation closure
- **site:** ferret-com
- **lane:** COO (`apps/ferret-com/src/app/**/page.tsx` content, Nav/Footer structure, `scripts/ci/*`)
- **exact task:** close every COO-lane finding from lane A (broken/guessable-404 routes, internal
  nav coherence, breadcrumbs, schema, metadata); keep all CI gates green before each push.
- **done-when:** trust-guard + metadata-policy + link-check + thin-page-audit + affiliate-integrity
  all green for ferret-com; nav hub→spoke coherent; no orphan top pages.
- **output/handoff file:** this sprint file (CSRO updates the done-when checklist in the checklist doc).
- **deadline:** rolling within sprint.

### E. IR — sign-off
- **site:** ferret-com
- **lane:** IR (review only)
- **exact task:** confirm no Tier-1 trust or valuation risk after A–D close.
- **done-when:** IR explicit "no Tier-1 risk" on ferret-com.
- **output/handoff file:** `ops/handoffs/2026-06-01-ir-ferret-sprint1-signoff.md`
- **deadline:** after A–D.

---

## Exit criteria (Ferret = launch-quality template)
All Sprint-1 done-whens in `ops/csro/launch-polish-checklist.md` green + the 7 Premium Domain Launch
Bar gates pass + IR clear. Then replicate the template to PetFood.com next.
