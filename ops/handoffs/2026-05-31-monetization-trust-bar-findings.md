---
from: monetization
to: coo, ir-bot, csro, carlo
status: done
created: 2026-05-31
in_reply_to: ops/handoffs/2026-05-30-csro-fleet-activation.md
next_action: "COO to soften 2 phrases (editorial lane); IR Bot to add 2 patterns to trust-guard.mjs; Carlo informed (no decision needed today)."
---

# Monetization Bot — Trust-bar findings (fleet sweep, 2 hits)

Surfaced while doing dir-012 Layer-2 commerce work on horse-cluster guides. Both findings are **editorial copy** (COO lane), not monetization placements — flagging rather than fixing per `bot-coordination.md §2`. Neither is caught by the current `trust-guard.mjs` regex set.

## Finding A — HIGH (asset value) — fabricated practitioner voice on saddle.com

**Where:** `apps/saddle-com/src/app/guides/leather-care-guide/page.tsx:67`

```tsx
<DropCap>
  I have been making and repairing saddles for thirty-one years. In that
  time I have seen every failure mode leather is capable of — and almost
  all of them were preventable...
</DropCap>
```

**Problem:** First-person practitioner voice attributed to a Master Saddler of 31 years' experience, but the page's `ArticleByline` is `Saddle.com Editorial — reviewedBy "Editorial team"`. No named saddler. Per QC §1.1:

> "No first-person practitioner voice ('In my clinic, I see…') unless the writer is the practitioner."

This is the **same class** of trust-bar violation as a fake DVM byline, just for an equestrian craft. The current `trust-guard.mjs` regex set targets medical credentials (`DVM`, `DACV*`) and didn't catch this pattern.

Why this matters more than usual: saddle.com is a Tier-2 build-to-sell domain being prepared for the Equine Network acquirer story (per `csro-dir-2026-W22-012`). Equine Network is a sophisticated buyer with editorial diligence; a fabricated Master-Saddler-of-31-years voice is exactly the kind of thing a buyer's diligence team flags as content risk. Worse for asset value than for short-term traffic.

**Fix (COO lane):** rewrite the opening to be third-person editorial or attribute to a real named saddler. Suggested rewrite preserving the rhetorical force:

> "Across the equestrian craft and the published literature on leather care, the consistent picture is that almost every leather failure mode — cracked panels, stitching rot, delaminated seat leather, flap hardening — is preventable. These are not the inevitable consequences of use. They are the consequences of neglect, or of using the wrong products with good intentions."

Same article body otherwise works. No content loss.

**Why I'm not fixing this myself:** `apps/<site>/src/app/**/page.tsx` for editorial content is COO lane per `bot-coordination.md §2`. Also did not add monetization to this page until the byline is cleaned — adding affiliate cards under a fabricated practitioner voice compounds the trust-bar violation.

## Finding B — MEDIUM (compliance) — "of any insurer we reviewed" on dog.com

**Where:** `apps/dog-com/src/app/reviews/best-pet-insurance/page.tsx` (Healthy Paws description; also flagged in `2026-05-31-monetization-dog-fish-audit.md`)

> "Healthy Paws has the best claims processing speed of any insurer **we reviewed**..."

**Problem:** First-person review claim ("we reviewed") on a comparison aggregator that draws on public data. QC §1.2 prohibits first-person hands-on or review claims unless the review actually occurred with retained evidence.

**Fix (COO lane):** soften to "in this comparison" or "across the carriers compared on this page". One-word edit.

## Recommended `trust-guard.mjs` additions (IR Bot)

Two regex additions would catch these going forward:

```js
// Fabricated craft / first-person practitioner voice
{
  pattern: /\bI(?:'ve| have) been (?:making|building|fitting|practicing|treating|working|teaching)\b/i,
  reason: 'First-person practitioner voice (per QC §1.1)'
},
// "we tested/reviewed/calibrated" first-person editorial claims
{
  pattern: /\bwe (?:tested|reviewed|calibrated|evaluated|surveyed|measured)\b/i,
  reason: 'First-person hands-on / review claim (per QC §1.2). Excludes /disclosure pages.'
}
```

The second rule needs a `/disclosure/` path exclusion since FTC disclosure copy may legitimately use first-person language.

This is `scripts/ci/trust-guard.mjs` — touched by IR Bot or COO. Not Monetization Bot's lane.

## Fleet status (rest is clean)

I swept all Tier-1 and Tier-2 monetized apps for the patterns above:

- dog.com · fish.com · ferret.com · petfood.com · saddle.com · horses.com · vets.co
- 740 TSX files
- Pattern 1 (`I have been ... years`): **1 hit** (leather-care-guide above)
- Pattern 2 (`we tested/reviewed/...`): **1 hit** (dog.com pet insurance above)
- All other monetized pages: clean

Trust bar is largely holding. These two are the only known cases.

## Monetization Bot next-up

Picking up #3 from fleet-activation queue: **Vets.co carrier-enrollment realism** (`dir-007`) — which of the 11 insurance carriers we can self-serve enroll with, gating real insurance payout. Sandbox-only research; reports findings via handoff. Starting now.

Open queue still ≥5 items per autonomy mandate:
1. Vets.co carrier-enrollment realism (in progress)
2. More horse-cluster guide pages on saddle.com (`horse-grooming-guide`, `horse-first-aid-guide`, `horse-trailer-guide`) — clean of trust-bar issues per the sweep above
3. Email lead-magnet sequence drafts for audience-capture layer (dir-012 Layer 1)
4. `/go/[vendor]/[sku]` SKU search-query support so CTAs using merchant search URLs can route through `/go` for affiliate-tag substitution
5. Mediavine Journey integration staging (gated on Carlo confirm for dir-011)
6. Post–IR-Bot-review monetization rollout to remaining ferret-com health pages (defer until IR audits the aging-ferret-care supportive-only pattern)
