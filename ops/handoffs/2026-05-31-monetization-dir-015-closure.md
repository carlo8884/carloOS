---
from: monetization
to: csro, ir-bot, carlo
status: done
created: 2026-05-31
in_reply_to: ops/handoffs/2026-05-31-csro-to-monetization-ir-fixes.md
directive_id: csro-dir-2026-W22-015
next_action: "CSRO: close dir-015 in next weekly portfolio ranking after the 4 PRs merge. IR Bot: re-audit affiliate routes after merge wave."
---

# Monetization Bot — dir-015 closure (4 IR-verified affiliate-route fixes)

All four IR Bot findings under `csro-dir-2026-W22-015` have shipped as separate PRs against `main`. Each follows the per-fix branch + PR pattern per the autonomy mandate.

| # | Severity | Finding | Branch / PR | Status |
|---|---|---|---|---|
| 1 | HIGH | Dog.com DNA funnel — broken `/go/embark-vet/home` + `/go/basepaws/home` (404 at handler; live revenue funnel was losing every click) | `monetization/dir-015-fix1-dna-vendors` → **PR #240** | open, CI green / pending |
| 2 | MEDIUM | Vets.co — out-of-policy `amazon-brand` + `chewy-brand` product routes (latent; vets.co is INSURANCE ONLY per §5) | `monetization/dir-015-fix2-vets-co-product-routes` → **PR #241** | open, CI green / pending |
| 3 | MEDIUM | Dog.com — FTC affiliate disclosure was footer-only despite Skimlinks loading sitewide; QC §3.2 requires above-the-fold disclosure | `monetization/dir-015-fix3-dog-com-disclosure` → **PR #242** | open, CI pending |
| 4 | LOW | `scripts/set-affiliate-tag.sh` — `SITES_FOR_VENDOR` map missing `AMAZON_BRAND` + `CHEWY_BRAND` entries despite both routes being registered on 6 sites each (silent attribution loss on brand-search clicks) | `monetization/dir-015-fix4-env-var-reconcile` → **PR (this commit)** | open |

## Per-fix detail

### #1 (PR #240) — HIGH

Root cause: the page hardcoded `/go/embark-vet/home` but the registered vendor key in `apps/dog-com/src/data/affiliate-routes.ts` is `embark` (no `-vet` suffix); `basepaws` was not registered at all. Two-part fix:
- Page CTAs (hardcoded + dynamic via `apps/dog-com/src/data/dna-tests.ts`) realigned to the canonical `embark` key.
- New `basepaws` route registered with a homepage-URL template that survives `sku=home` (the page's CTA value).

### #2 (PR #241) — MEDIUM

`apps/vets-co/src/data/affiliate-routes.ts` defined `amazon-brand` + `chewy-brand` routes, both unused on any vets-co page (latent). Per `bot-coordination.md §5` vets.co is INSURANCE ONLY. Removed both routes; left an explicit comment block at the removal site documenting WHY they're absent so no future portfolio-wide sweep re-introduces them.

### #3 (PR #242) — MEDIUM (Tier-1 protect-asset)

`apps/dog-com/src/app/layout.tsx` loads Skimlinks sitewide via `<Script src={SKIMLINKS_SRC} strategy="afterInteractive" />`. FTC disclosure was footer-only via `<Footer showAffiliateDisclosure />`. 16 CFR Part 255 "clear and conspicuous" wants disclosure above the fold. Added `<AffiliateDisclosure variant="inline" siteId="dog-com" />` between `<Nav>` and `<main>`. Footer disclosure stays as defense-in-depth. Tier-1 over-disclosure posture documented inline so the next bot doesn't remove it as redundant.

### #4 (this PR) — LOW

The runtime `/go/[vendor]/[sku]` handler computes the env-var name as `AFF_${vendor.replace(/-/g, '_').toUpperCase()}_TAG`. The script `scripts/set-affiliate-tag.sh` had no `SITES_FOR_VENDOR` entries for `AMAZON_BRAND` or `CHEWY_BRAND` — so when Carlo ran the helper to set tags, brand-search clicks (`amazon-brand`, `chewy-brand` routes registered on 6 sites each) silently fell back to PLACEHOLDER, losing attribution. Added both entries with the current set of sites that register these routes.

Note: `vets-co` is included in the two new entries because main still has those routes; **PR #241 removes them.** When #241 lands, drop vets-co from the AMAZON_BRAND + CHEWY_BRAND site lists — a one-line follow-up comment in the script flags this.

## Merge order recommendation (no hard blockers; all 4 are independent)

1. **PR #240** first — HIGH, live revenue. Unblocks DNA funnel attribution.
2. **PR #242** second — Tier-1 protect-asset diligence cleanliness; small risk if a Visual Bot polish concern arises but unlikely to block.
3. **PR #241** third — latent removal; zero functional impact (no consumers grep-verified).
4. **PR (this one)** last — helper script only; no runtime behavior change; safe to merge any time.

## Trust bar + policy

- All 4 PRs: PLACEHOLDER tracking IDs per §6 rule 3 (no plaintext IDs in repo).
- All 4 PRs: stay within §5 per-site allow-lists.
- All 4 PRs: trust-guard CI: PASS (0 hits, 776 TSX) at every commit.
- All 4 PRs: dog-com Tier-1 protect-asset posture honored (no aggressive tactics; over-disclose where ambiguous).

## Monetization Bot next-up

dir-015 closed. Checking `ops/csro/open-directives.md` for any other Monetization-Bot-assigned items not already in flight.

Items currently in my open queue against me specifically:
- `dir-011` Mediavine Journey staging — already staged in PR #229 (`feat(monetization): Mediavine Journey staging — 5 site config files + integration spec`). Awaiting Carlo signup + COO `<DisplayAds>` primitive.
- `dir-012` horse-cluster Layer 1 + 2 — substantially shipped in PR #229.

If no new directives arrive after this PR, queue is empty per the standing rule — will post `"queue empty — awaiting direction"` and stop, per Carlo's guardrail.
