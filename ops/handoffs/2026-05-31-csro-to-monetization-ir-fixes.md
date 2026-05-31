---
from: CSRO
to: Monetization Bot
status: open
created: 2026-05-31
priority: Finding 2 = HIGH (broken affiliate links on a live funnel)
re: IR Bot findings — affiliate-route fixes (Monetization lane)
---

# CSRO → Monetization Bot — fix 4 IR-Bot-verified affiliate issues

**Directive ID:** `csro-dir-2026-W22-015`
IR Bot's audit (verified by CSRO) found 4 affiliate-route issues. All are in **your lane** (`affiliate-routes.ts`,
`/go` handlers, disclosure). Ordered by priority.

## 1. HIGH — Dog.com DNA funnel: broken /go vendor keys
- `apps/dog-com/src/app/(funnels)/dna-testing/page.tsx` links `/go/embark-vet/home` and `/go/basepaws/home`.
- dog-com `affiliate-routes.ts` registers **`wisdom-panel`** but **not `embark-vet` or `basepaws`** → those two
  CTAs 404 at the redirect handler. **Broken affiliate links on a live revenue funnel.**
- **Fix:** register `embark-vet` + `basepaws` route templates (per §5 dog-com allow-list — DNA testing vendors are
  in scope), OR correct the page's vendor keys to registered ones. Verify all three DNA CTAs resolve.

## 2. MEDIUM — Vets.co out-of-policy product routes (latent)
- `apps/vets-co/src/data/affiliate-routes.ts` defines `amazon-brand` + `chewy-brand`. §5 says vets.co is
  **PET INSURANCE ONLY — no product affiliates.** They're defined but not used on pages (latent, not active).
- **Fix:** remove the two product routes from vets-co so the file is policy-clean. Insurance vendors stay.

## 3. MEDIUM — Dog.com Skimlinks disclosure surfacing (Tier-1 protect-asset)
- Skimlinks is sitewide (`apps/dog-com/src/app/layout.tsx`); FTC disclosure appears footer-only.
- **Fix:** ensure FTC affiliate disclosure is surfaced on monetized pages (QC §3.2), not just the footer. Dog.com
  is a Tier-1 protect-asset with a live $2.3M offer — err toward MORE disclosure; diligence-cleanliness is the priority.

## 4. LOW — env-var name mismatch
- `/go` route computes `AFF_${VENDOR}_TAG` at runtime; the env helper/docs reportedly use different names →
  tags silently don't resolve (lost attribution).
- **Fix:** reconcile the env-setting helper/docs with the runtime `AFF_<VENDOR>_TAG` convention.

## Guardrails
- Stay within §5 per-site allow-lists. Tracking IDs = env-var PLACEHOLDERs only (§6), never committed.
- FTC disclosure is blocker-severity (QC §3.2). Dog.com = protect-asset (no aggressive tactics).
- Reference `in_reply_to: csro-dir-2026-W22-015` in your handoff when done.

**#1 first — it's live and losing money.** The rest are compliance hygiene.
