---
from: COO
to: Carlo (+ Monetization Bot)
status: audit (monetization readiness — verified clean; one Carlo gate remains)
created: 2026-06-15
next_action: Carlo sets affiliate env vars (PLACEHOLDER → live tags) → revenue goes live
---

# Monetization Readiness Audit — portfolio is wired; revenue is one env-var-set away

Carlo-requested ("audit every commercial page so revenue is fully wired the moment
you set env vars"). Read-only audit across all 10 sites — the CTA/affiliate-route
files are Monetization's lane, so this is verification + routing, not edits.

## Verdict: structurally COMPLETE. The only gate to live revenue is your env vars.

| Check | Result |
|---|---|
| Affiliate-link **leakage** (direct retailer links bypassing `/go`) | **0** — every commercial CTA routes through `/go` (2 grep hits were a code comment + a JSON-LD `url` field, not CTAs) |
| Pages routing to `/go` (any form: `href`, `ctaHref`, template) | **268** |
| Genuine **unmonetized** review/compare/brand pages | **0** — every product-review, comparison, and brand-evaluation page monetizes |
| FTC **disclosure coverage** on `/go` pages | **100%** (0 of 124 `href="/go"` pages missing a disclosure; `AffiliateDisclosure`/inline) |
| `/go` route integrity (broken redirects) | clean — `link-check` green portfolio-wide; Revenue-QA confirmed all vendors exist in `affiliate-routes.ts` |
| Schema / trust on commercial pages | `schema-validate` 0 findings · `trust-guard` clean · no fake ratings (QC §1.4) |
| Affiliate **tags** | still `PLACEHOLDER` across sites → **awaiting Carlo activation** |

## The one gate: env-var activation (Carlo)

Everything earns **$0 until the `AFF_*_TAG` env vars are set** in Vercel (Production
scope). The turnkey activation list + ranked account order is already documented:
**`ops/handoffs/2026-06-11-coo-to-carlo-affiliate-activation-turnkey.md`**.

Critical reminders from that doc:
- `AFF_AMAZON_TAG` **and** `AFF_AMAZON_BRAND_TAG` are **separate** vars — the
  `-brand` one carries most product CTAs. Set BOTH or those CTAs earn $0.
- Same split for Chewy (`AFF_CHEWY_TAG` / `AFF_CHEWY_BRAND_TAG`).
- Vets.co is **insurance-only** for product affiliates (policy §5) — its CTAs are
  insurance carriers (Impact.com) + telehealth services, not product retailers.

## Open Monetization-lane item (already routed, not yet actioned)

- **Dog.com Rx review pages** (`best-flea-tick-prevention`, `best-heartworm-prevention`)
  dead-end at `/find-a-vet` with zero affiliate — these are Rx products, so the
  trust-safe monetization path (Chewy Pharmacy / insurance cross-sell) is a
  Monetization design call. Handoff: `ops/handoffs/2026-06-14-coo-to-monetization-rx-review-cta.md`
  (PR #766). This is upside, not a blocker.

## What COO verified is NOT needed
No leakage to fix, no missing disclosures to add, no unmonetized review pages to
wire. The commercial surface is complete. COO recommends Monetization focus on the
Rx-CTA upside item; everything else waits on env-var activation.

## Bottom line for Carlo
The portfolio is **monetization-ready**. Set the env vars per the turnkey doc and
revenue is live the same hour — no code changes required first.
