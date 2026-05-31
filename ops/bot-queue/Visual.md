# Visual Bot — Wakeup Queue

**Owner bot:** Visual Bot · **Lane:** photography, composition, motion, visual identity, `src/components/visual/*`, image manifest
**Last updated:** 2026-05-31 (by CSRO)

## RESTART PROMPT (paste to wake this bot)
```
Pull latest origin/main. Read ops/bot-queue/Visual.md and do the top queued item. Commit + push to your own branch, open a PR rebased on main. When done, update this queue file (finished/remaining/blocked/next/Carlo-needed) before ending. Stay in lane; QC §1 trust bar (no AI humans/animals, no fake headshots, preserve photographer attribution). Don't idle — next item if blocked. Don't ask Carlo unless queue is empty/blocked.
```

## Queue (priority order)

| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
| 1 | **Curated images + visual identity** (`dir-021`) | 🔴 P0 launch-blocking | queued | Execute `ops/handoffs/2026-05-31-csro-to-visual-curated-images-and-identity.md`. Hand-curate real photos into the manifest (NO API/keys/secrets, no build dependency). Tier-1: Dog→Fish→Horses→Vets→PetFood. ⚠️ Dog.com has ZERO slots in image-queries.json — add them first. Then wire `<StockImage>` into Tier-1 homepages + top hubs (give each a real hero). $0 typographic wordmark `<Logo>` for identity. Quality bar = Carlo's policy in the brief. | this wave |
| 2 | Wire remaining sites' manifest keys | MED | queued | After Tier-1 proven: ferret/ferrets/saddle/lizard/petfoods curate + wire. | — |
| 3 | Phase-2 API expansion proposal | LOW | queued | ONLY after curated set proves direction. Propose to CSRO with quality filters + attribution + no build fragility. Do not build yet. | — |

## Status notes
- **What's done:** functional UI to date (calculators, BuyBox, `/tools` hubs, audience-capture) — NOT visual identity. That's the gap dir-021 closes.
- **What's blocked:** nothing — curation needs no API key (manual). Build on your own branch (main is green).
- **Carlo needed?** No to execute. He WILL eyeball Tier-1 (Dog/Fish/Horses) fit — keep those in early commits.

## DO NOT TOUCH
- Other bots' lanes (COO routing/CI, Monetization affiliate/funnels, CSRO registers).
- `Nav.tsx`/`Footer.tsx`/`ArticleLayout.tsx` are SHARED — coordinate via PR before structural change.
- Never commit API keys/secrets. No CI/Vercel photo-API wiring (Carlo policy 2026-05-31).
- **No spend on logos.** $0 typographic wordmarks only; clean/premium, typography matched to each
  site's positioning; do not over-design; no generic icons unless they aid recognition. Image quality
  + layout + trust + tool usability rank ABOVE logo perfection. Upgrade trigger in dir-021 brief.
- QC §1: no AI-generated humans or animals, no fake headshots, preserve photographer attribution.
