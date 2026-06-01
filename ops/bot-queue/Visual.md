# Visual Bot — Wakeup Queue

**Owner bot:** Visual Bot · **Lane:** photography, composition, motion, visual identity, `src/components/visual/*`, image manifest
**Last updated:** 2026-06-01 (by Visual Bot — dir-021 in progress, one-PR-per-item)

## RESTART PROMPT (paste to wake this bot)
```
Pull latest origin/main. Read ops/bot-queue/Visual.md, work top-down from item 0 (Logo letterSpacing + attribution fix-backs), then dir-021 curation. One branch+PR per item; never idle. Keep Dog/Fish/Horses in early commits for Carlo. QC §1. Update the queue as you go.
```

## Queue (priority order)

| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
| 0 | **Logo letterSpacing + attribution fix-backs** (foundation for dir-021) | 🔴 P0 | **in-flight (this PR)** | Ship `<Logo>` with conservative letterSpacing tuned for serif display fonts (Playfair / Bodoni / Cormorant / Baskerville). Ship `ImageCard.creditUrl` + `StockImage` curated-entry support so curated photos can render honest "Source: Unsplash" credit linked to source page (no fabricated photographer names while sandbox lacks API access). Hide dev-only placeholder text in production. | this wave |
| 1a | **dir-021 Dog.com curation** (split from #1) | 🔴 P0 | queued (after #0 merges) | Add 6 Dog.com slots to `image-queries.json` (flagship has none). Curate 2–3 verified-in-production Unsplash IDs (`1587300003388-59208cc962cb` and the breed portraits) into the manifest as `curated: true` entries. Wire `<StockImage>` on Dog.com homepage as a real hero photo strip. ONE PR. Carlo eyeballs first. | this wave |
| 1b | **dir-021 Fish.com curation** | 🔴 P0 | queued (after 1a) | Same pattern as 1a using `1535591273668-578e31182c4f` (Betta — already the og:image) and the other 3 species IDs already in production. ONE PR. | this wave |
| 1c | **dir-021 Horses.com curation** | 🔴 P0 | queued (after 1b) | Use the 3 Horses production IDs already in the codebase (`1469820838967-…`, `1474546652694-…`, `1553284965-…`). Per-site brass accent on ReviewCard winner band can ship in same PR. ONE PR. | this wave |
| 1d | **dir-021 Vets.co curation** | 🔴 P0 | queued (after 1c) | Reconcile `vets-co:hero` query first — page-level TODO at `apps/vets-co/src/app/page.tsx:279–290` prohibits the vet-with-puppy cliché. Acceptable directions: stethoscope on warm wood / dim clinic interior / vector medical diagram. Wiring only valid after Carlo runs sync-images.mjs with API key for the texture-led slot. May ship empty-wired (no StockImage yet) per QC §1. | this wave |
| 1e | **dir-021 PetFood.com curation** | 🔴 P0 | queued (after 1d) | PetFood has 0 production Unsplash IDs to draw from + no slot in image-queries.json yet. Add `petfood-com:hero` slot (already exists, query "pet food bowl ingredients"). Skip wiring on homepage until a verified ingredient photo exists. | this wave |
| 2 | Wire remaining sites' manifest keys | MED | queued | After Tier-1 proven: ferret/ferrets/saddle/lizard/petfoods curate + wire. | — |
| 3 | Phase-2 API expansion proposal | LOW | queued | ONLY after curated set proves direction. Propose to CSRO with quality filters + attribution + no build fragility. Do not build yet. | — |

## Status notes
- **What's done (this session):** item 0 in-flight in `visual/logo-attribution-foundation` branch — Logo with conservative letter-spacing, ImageCard.creditUrl link support, StockImage curated-entry handling, production-safe placeholder.
- **What's blocked:** real photographer names — sandbox/WebFetch returns 403 from Unsplash. Curated entries render "Source: Unsplash" linked to the photo page (QC §1 compliant — points at the canonical attribution surface, doesn't fabricate). Carlo runs `node scripts/sync-images.mjs --force` on his machine post-merge to overwrite with real names.
- **Carlo needed?** No to execute. He WILL eyeball Tier-1 (Dog/Fish/Horses) fit — those PRs land in order 1a → 1b → 1c.

## DO NOT TOUCH
- Other bots' lanes (COO routing/CI, Monetization affiliate/funnels, CSRO registers).
- `Nav.tsx`/`Footer.tsx`/`ArticleLayout.tsx` are SHARED — coordinate via PR before structural change. (Item 0 touches Nav + Footer for Logo adoption — minimal, drop-in for inline text; coordination request in the item-0 PR description.)
- Never commit API keys/secrets. No CI/Vercel photo-API wiring (Carlo policy 2026-05-31).
- **No spend on logos.** $0 typographic wordmarks only.
- QC §1: no AI-generated humans or animals, no fake headshots, preserve photographer attribution.
