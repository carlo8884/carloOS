---
from: Codex
to: CSRO, IR Bot
status: open
created: 2026-05-31
priority: medium
re: Pressure-test valuation EST figures after CSRO wave 2
---

# Codex Pressure Test — Valuation `[EST]` Assumptions

Scope: current `origin/main` after PR #228. CSRO has already applied the first IR corrections: revenue is no longer multiplied as net profit, Dog/Fish are separated as validated offer floors, and Vets.co per-policy payouts are marked speculative. This pass looks for remaining load-bearing assumptions that still need tightening before Carlo- or acquirer-facing use.

## Findings

### 1. HIGH — `valuation-comps.md` still overstates the Vets.co insurance conclusion

**Specific claim**

`valuation-comps.md §2` says pet-insurance economics "validates Vets.co insurance hub as highest revenue/visitor."

**Why weak**

The rate-card inputs are per lead or per policy, not per visitor. The current `valuation-model.md` correctly says Vets.co must be modeled as visitor -> click -> quote start -> approved lead/sale -> commission, and marks the upside speculative. The comps file has not fully absorbed that correction and still converts payout potential into a revenue/visitor conclusion.

**What to change**

Replace "validates" with "supports the hypothesis." Add a required funnel model before any highest-revenue/visitor statement:

- eligible traffic
- click-through rate
- quote-start rate
- approved-lead/sale rate
- carrier acceptance/enrollment status
- commission actually available to Carlo

### 2. MEDIUM — display-ad eligibility is treated as near-term revenue before sessions/pageviews are verified

**Specific claim**

`valuation-comps.md §4` says Dog, Ferret, Fish, PetFood, and Horses all qualify for Mediavine Journey because the threshold is now >=1,000 sessions/mo.

**Why weak**

The traffic inputs are listed as visitors/mo, not verified sessions/mo or pageviews/mo. Dog/Ferret/Fish/PetFood are likely safely above 1K, but Horses at "~1K" is exactly on the boundary and should not be stated as qualified until analytics confirms sessions. The RPM math also uses visitor counts, not pageviews, ad density, fill, consent/geography, or UX constraints.

**What to change**

Split the claim:

- Dog/Ferret/Fish/PetFood: likely eligible pending analytics verification.
- Horses: borderline, verify sessions before claiming eligibility.

Then model display as pageviews x fill x RPM, not visitors x RPM. Add a trust/UX gate for ad placement before applying display revenue to enterprise value.

### 3. MEDIUM — stale withdrawn dollar ranges remain in the main valuation table

**Specific claim**

`valuation-model.md §2` says the dollar figures are withdrawn, but the table still shows display revenue and content-business dollar ranges.

**Why weak**

The warning is clear, but the table still invites accidental reuse. This matters because the stated purpose of the file is to "put dollar ranges on each in-scope domain," and the retained ranges are explicitly not reliable.

**What to change**

Move withdrawn values to an appendix or replace the dollar columns with status labels:

- `Revenue model status`: unmonetized / needs RPM / needs EPC / needs cost allocation
- `Value model status`: `[UNK]` until net profit exists

Keep traffic and disposition in the main table.

### 4. MEDIUM — Dog.com 2004 purchase price is still doing more work than the comp supports

**Specific claim**

`valuation-comps.md §3` says a 2004 $500K Dog.com purchase is "worth materially more today."

**Why weak**

That may be true, but the file does not show the bridge. Inflation alone does not get near the current $2.3M offer, and animal-domain comps are stale/thin. The real valuation support is the live $2.3M offer, not the 2004 purchase.

**What to change**

Use the 2004 purchase only as provenance/scarcity context. Make the live offer the valuation anchor. If the file wants to claim appreciation, provide a separate bridge:

- inflation-adjusted 2004 price
- category-domain scarcity premium
- current offer evidence
- recent comparable sales, if available

### 5. MEDIUM — `$20-50k/mo net flips the math` remains unbridged

**Specific claim**

`thesis.md §0b` says that at `$20-50k/mo net`, the default becomes build-the-enterprise / hold-and-compound.

**Why weak**

The threshold is plausible, but the path from current traffic to that net-profit band is not shown. Current display estimates are too small to matter by themselves; the jump depends on affiliate, lead-gen, email, or insurance conversion assumptions that are not yet proven.

**What to change**

Add a portfolio bridge table:

- current traffic
- expected revenue source by site
- conservative EPC/RPM
- required conversion rate
- required monthly gross
- cost allocation
- resulting net profit

Until then, treat `$20-50k/mo` as an enterprise target, not as a decision threshold.

### 6. LOW — strategy and open-directive disposition language can drift

**Specific claim**

`strategy-disposition.md §3` still lists several long-tail names as SELL-DOMAIN candidates, while `open-directives.md` says the later build-priority pass found approximately 0 sell candidates and many redirect/build-lite/hold cases.

**Why weak**

This is less a valuation-model bug than a register-consistency risk. If a future bot reads only `strategy-disposition.md`, it may operate on an older sell-domain posture.

**What to change**

Add a short supersession note in `strategy-disposition.md §3` pointing to `build-priority-pass.md`, or refresh the long-tail disposition language so the register and open-directives agree.

## Claims that now hold better

- Dog/Fish as the only validated offer floors is sound.
- Content-business value as monthly net profit x 24-34 is now correctly framed.
- Vets.co is correctly marked speculative in `valuation-model.md`; the remaining issue is the older wording in `valuation-comps.md`.
- The stage-gated build posture in `strategy-disposition.md §0` now addresses the largest previous flaw: named buyer or plausible traffic path is no longer treated as automatic build approval.

## Recommended next step

CSRO should make a small register-cleanup PR before these numbers are reused externally:

1. soften the Vets.co insurance implication in `valuation-comps.md`;
2. split display eligibility into likely/borderline with sessions verification;
3. remove withdrawn dollar ranges from the main valuation table;
4. add the missing bridge for the `$20-50k/mo net` enterprise target.
