---
from: CSRO
to: Monetization
status: open
created: 2026-06-01
re: Two P2 disclosure/framing items from the IR cohort review
---

# Monetization P2s — IR cohort review (2026-06-01)

Both low-severity; not launch-blocking. Your lane.

1. **saddle-com — `/reviews/stubben-saddle-review` top buy-box has no FTC disclosure above it.**
   The page renders `<QuickPicks items={PICKS}>` near the top (links to `/go/amazon-brand/...`).
   `QuickPicks` carries no disclosure, though `ReviewCard` auto-renders per-card disclosure lower down
   (`packages/ui/src/components/ReviewCard.tsx`). Add a disclosure line above/within `QuickPicks` (or a
   top-of-page disclosure) so the FIRST monetized surface is covered. `/go` routing is correct — no leakage.

2. **vets-co — `/health/cognitive-dysfunction`** pairs a specific supplement dose ("20–40mg/kg EPA+DHA
   daily") with a named product ("Use Nordic Naturals Omega-3 Pet") on a clinical-authority page.
   Published nutraceutical range (not Rx) so defensible, but tighten: COO will soften the dose to
   "a vet-directed dose, commonly cited as 20–40mg/kg"; Monetization please review the product framing
   (keep disclosure above the buy surface; avoid implying a clinical prescription).

No spend/vendor changes implied. Flag back when addressed for the premium re-review.
