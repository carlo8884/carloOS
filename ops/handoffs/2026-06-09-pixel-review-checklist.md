---
from: COO
to: Carlo / IR
status: ready
created: 2026-06-09
next_action: Run this on the stable URLs AFTER Visual's image-query PR merges + sync-images.mjs runs (so per-item photography is live). Vets first.
---

# Launch-candidate pixel-review checklist

COO has verified everything **code-level** (trust, monetization, disclosure, schema, breadcrumb, tools, 0 placeholders). This checklist is the **pixel/UX layer only** — what must be eyeballed on the stable URLs. **Order: Vets → Dog → Ferret → PetFood → Lizard → Fish.**

> Gate: do the **differentiation** items AFTER Visual's per-item image-query PR merges + you run `sync-images.mjs`. Before that, breed/species/brand images show category fallbacks (real but repetitive) by design.

## Global (every candidate, on mobile + desktop)
- [ ] Homepage/hub hero: real photography, premium feel, strong first screen
- [ ] **Mobile first screen** reads premium (no overflow, legible, not templated)
- [ ] No branded paw **placeholder** visible anywhere
- [ ] Disclosures present but **subtle** (not loud) above monetized surfaces
- [ ] CTAs feel result/intent-based, not spammy; every CTA resolves
- [ ] Tools/calculators render, compute, and show their result + next-step CTA
- [ ] No emoji/template residue, no Lorem, no dev artifacts visible
- [ ] Claims read calibrated (no visible "best/#1/fastest/cheapest" overclaims)
- [ ] Hub → spoke navigation is obvious and works

## Per-candidate focus
**Vets (#1) — closest to ready**
- [ ] Insurance estimator: enter values → result → "Compare plans / live quote" next-step reads trust-first, routes correctly
- [ ] Insurance hubs/guides feel authoritative; detail pages text-clean
- [ ] (Visual dependency LOW — hubs synced; safe to review pre-sync)

**Dog (#2) — needs sync for the grid**
- [ ] /breeds grid: tiles show **differentiated** per-breed photos (POST-SYNC) — not the same dog repeated
- [ ] Tool result paths (calorie→food, age→insurance) + soft breed/health/puppy intent links read editorial, not salesy
- [ ] Health pages: insurance/internal links only (no product CTAs on clinical) ✓ code-verified — confirm visually

**Ferret (#3)**
- [ ] Cost/readiness tools → starter-kit path; ownership pages → starter kit
- [ ] Images complete (low visual gap)

**PetFood (#4)**
- [ ] /compare pages: disclosed comparison cards on OTC diets only; **no buy CTAs on prescription/raw/grain-free(DCM)** — confirm
- [ ] Brand pages: differentiated brand imagery (POST-SYNC) vs category fallback

**Lizard (#5)**
- [ ] /health acute pages (thermal-burns, dehydration): vet-referral, **no buy buttons**
- [ ] /health deficiency pages (MBD, hypocalcemia, etc.): CTA present WITH the "support husbandry correction, not treatment" microcopy + disclosure above
- [ ] Species pages: inline disclosure above buy-boxes

**Fish (#6) — needs sync for species**
- [ ] /species pages: differentiated per-species photos (POST-SYNC)
- [ ] 6 calculators each show a result-matched product path with disclosure

## Sign-off
A candidate is pixel-premium when its global + focus items pass **and** per-item photography is live. Vets can likely pass first (lowest visual dependency); Dog/Fish should wait for the sync.
