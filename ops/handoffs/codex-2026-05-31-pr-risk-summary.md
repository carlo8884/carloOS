---
from: codex
to: all
status: done
created: 2026-05-31
next_action: "COO/Monetization: triage the high-risk affiliate/trust findings before further revenue-routing merges."
---

# Codex PR-Risk Summary — 2026-05-31

Base reviewed: `main@0db6986`.

## Findings

### SEVERITY: high — Vets.co now registers product-affiliate routes despite insurance-only policy

Evidence:

- `ops/policies/bot-coordination.md:123-129` says `vets-co` is **PET INSURANCE ONLY** and **NO product affiliates**.
- `apps/vets-co/src/data/affiliate-routes.ts:4-8` repeats that Amazon/Chewy/pet-store vendors should not be registered.
- `apps/vets-co/src/data/affiliate-routes.ts:100-110` registers `amazon-brand` and `chewy-brand`.

Why it matters:

Vets.co's trust posture is built around medical/directory credibility. Product affiliate routing creates exactly the conflict the policy forbids and makes future Vets.co pages one accidental `/go/amazon-brand/...` link away from violating the site lane.

Suggested fix:

Remove `amazon-brand` and `chewy-brand` from `apps/vets-co/src/data/affiliate-routes.ts`, or file a policy amendment with Carlo approval before keeping product-affiliate routes on Vets.co.

### SEVERITY: high — Dog.com DNA CTAs still use unregistered redirect keys

Evidence:

- `apps/dog-com/src/data/affiliate-routes.ts:127-139` registers `embark` and `wisdom-panel`, but not `embark-vet`, `embarkvet`, or `basepaws`.
- `apps/dog-com/src/data/dna-tests.ts:65-69` uses `vendor: 'embark-vet'`.
- `apps/dog-com/src/data/dna-tests.ts:180-184` uses `vendor: 'basepaws'`.
- `apps/dog-com/src/app/(funnels)/dna-testing/page.tsx:267-279` links to `/go/embark-vet/...` and `/go/basepaws/...`.
- `apps/dog-com/src/app/(funnels)/thanks/[magnet]/page.tsx:56-111` uses `embarkvet` and `basepaws` CTA vendors.

Why it matters:

High-intent DNA funnel CTAs can hit the redirect handler with vendor keys absent from the allow-list, producing 404s instead of revenue-generating merchant redirects.

Suggested fix:

Choose one canonical vendor key per merchant and make `dna-tests.ts`, static funnel CTAs, and `affiliate-routes.ts` agree. Add a route-integrity check for `/go/<vendor>/...` references.

### SEVERITY: high — Dog.com Skimlinks remains sitewide with footer-only disclosure

Evidence:

- `apps/dog-com/src/app/layout.tsx:52-53` defines the Skimlinks publisher script.
- `apps/dog-com/src/app/layout.tsx:104-105` loads it globally.
- `apps/dog-com/src/app/layout.tsx:101-102` surfaces affiliate disclosure through the footer only.
- `ops/policies/bot-coordination.md:84-90` requires above-the-fold FTC disclosure on pages with affiliate links.

Why it matters:

Sitewide auto-affiliation can monetize ordinary outbound merchant links after hydration. Footer-only disclosure is not the above-fold disclosure the policy requires for affiliate-bearing pages.

Suggested fix:

Either add an above-fold disclosure globally while Skimlinks is active, or scope Skimlinks only to pages that render an above-fold affiliate disclosure.

### SEVERITY: medium — Vercel env helper examples still do not match runtime env names

Evidence:

- `scripts/vercel-set-env.sh:8-11` suggests `AFF_CHEWY_AFFILIATE_ID`, `AFF_SMARTPAK_AFFILIATE_ID`, and `AFF_IMPACT_ID`.
- `apps/dog-com/src/app/go/[vendor]/[sku]/route.ts:43` computes `AFF_<VENDOR>_TAG`.

Why it matters:

Following the helper comments can create Vercel env vars that the redirect handlers never read, leaving `PLACEHOLDER` in outbound URLs and silently losing attribution.

Suggested fix:

Update examples to `AFF_CHEWY_TAG`, `AFF_SMARTPAK_TAG`, and `AFF_IMPACT_TAG`, then add an expected-env-key listing mode generated from affiliate route registries.

## Watchlist

- Current review pages still contain several first-person or implied hands-on testing claims such as "tested", "calibration testing", and "measured with sensors" in product-review contexts. This may predate the latest merge wave, but it remains a QC §1 risk worth a dedicated trust-guard sweep.
- Vets.co directory scaffold is appropriately labeled as sample data in visible page copy and data comments; no fake DVM names were observed in the sampled files.
