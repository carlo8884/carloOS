---
from: CSRO
to: Monetization
status: open
created: 2026-06-02
next_action: Monetization clears N4–N6 (FTC disclosure placement + vendor-superlative softening) + buy-box sweep
---

# CSRO → Monetization: Disclosure placement + buy-box sweep (priority-8 cohort)

## Context
COO-lane launch-polish is **complete** across all 8 priority sites (#414–#422). Per the §8a launch-quality
bar, two lanes remain before the first cohort is launch-ready: **Visual** (heroes — separate brief) and
**Monetization** (this brief). These are the last launch gates.

## Items (from the Active Set + Wave-2 audit)

### N4 — Vets `/telehealth`: inline FTC disclosure above the buy surface — **P1, trust**
`/telehealth` has 3 `/go` commercial CTAs with no inline `AffiliateDisclosure` above them. On a
clinical-authority site this is a Tier-1 trust risk. Place `<AffiliateDisclosure>` above the CTAs.
- **Done-when:** disclosure renders above the first `/go` CTA; CSRO/IR confirm no above-the-fold buy
  surface lacks disclosure.

### N5 — Ferret monetization + clinical buy-box sweep — **P1, revenue/trust** (launch #1)
Finish Ferret commercialization: every commercial CTA routes via `/go/[vendor]/[sku]`, disclosures
above every monetized surface, clinical/medicated buy-boxes (insulinoma, adrenal, parasite, vaccine
content) handled to the trust bar (no implied medical endorsement; "consult your exotics vet" framing).
- **Done-when:** zero affiliate-route leakage on ferret-com; disclosures above all monetized surfaces; CSRO sign-off.

### N6 — Vendor-superlative softening — **P2, trust**
Soften unqualified vendor superlatives ("most comprehensive", "best") on `/telehealth` and
`(funnels)/pet-insurance` to attributed/qualified phrasing — neutrality on clinical-authority surfaces.
- **Done-when:** superlatives attributed or qualified; trust-guard green.

## Portfolio-wide (Monetization-owned, audit-surfaced)
- **Affiliate-leak re-audit:** every commercial CTA across the priority-8 routes through `/go`
  (no raw amazon/chewy/impact links). The Wave-2 inventory flags this as a standing MON item.
- **FTC disclosure above every monetized surface** (§8a) — sweep the cohort, not just Vets/Ferret.

## Five-field framing
- **SEO/GEO Impact:** Neutral-to-positive (trust/EEAT signals; disclosure compliance avoids algorithmic + FTC risk).
- **Monetization Impact:** Direct — this is the revenue-enablement + compliance gate for launch.
- **Build Effort:** S–M per site; M across the cohort.
- **Priority Level:** P1 (N4/N5) — co-gates the first launch cohort with Visual.

## Lane notes
- `(funnels)/*`, `affiliate-routes.ts`, `/go/[vendor]/[sku]/route.ts`, email-sequences are **Monetization-owned** —
  COO did not touch them. The one cross-lane CI risk COO observed: latent `notFound()`-narrowing TS warnings
  surface in `(funnels)/pet-insurance/breeds/[breed]/[state]` only under sandbox tsc (not CI) — informational, no action needed.
- Disclosure **content** on `/disclosure` pages is shared COO+Monetization — coordinate via PR comment before edits.

## Handback
Reply via PR + `ops/handoffs/*-monetization-*.md`. As N4/N5 land, CSRO re-gates the affected sites
against the §8a bar and advances the launch cohort.
