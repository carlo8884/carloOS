# Visual Bot — Wakeup Queue

**Owner bot:** Visual Bot · **Lane:** photography, composition, motion, visual identity, `src/components/visual/*`, image manifest
**Last updated:** 2026-06-01 (Visual Bot — dir-021 wave 1 shipped as 1 foundation + 5 per-site PRs)

## RESTART PROMPT (paste to wake this bot)
```
Pull latest origin/main. Read ops/bot-queue/Visual.md, work top-down from item 0 (Logo letterSpacing + attribution fix-backs), then dir-021 curation. One branch+PR per item; never idle. Keep Dog/Fish/Horses in early commits for Carlo. QC §1. Update the queue as you go.
```

## Queue (priority order)

| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
| 0 | **Logo letterSpacing + attribution fix-backs** (foundation) | 🔴 P0 | **PR #275 open** | Merge to land foundation primitives. | this wave |
| 1a | **dir-021 Dog.com curation** | 🔴 P0 | **PR #277 open** (base: foundation) | Merge after #275. | this wave |
| 1b | **dir-021 Fish.com curation** | 🔴 P0 | **PR #279 open** (base: foundation) | Merge after #275. | this wave |
| 1c | **dir-021 Horses.com curation + brass ReviewCard winner** | 🔴 P0 | **PR #281 open** (base: foundation) | Merge after #275. | this wave |
| 1d | **dir-021 Vets.co slot reconciliation** | 🔴 P0 | **PR #282 open** (base: foundation) | Merge after #275. Wiring deferred — Carlo runs sync first. | this wave |
| 1e | **dir-021 PetFood.com slot expansion** | 🔴 P0 | **PR #283 open** (base: foundation) | Merge after #275. Wiring deferred — PetFood has 0 production Unsplash IDs to draw from; Carlo runs sync against the new 8 slots. | this wave |
| 1d/1e wiring follow-up | StockImage on Vets/PetFood after sync | MED | blocked on Carlo `sync-images.mjs --force` | Once manifest entries exist for `vets-co:hero` (texture-led) + `petfood-com:hero` (ingredients), wire StockImage onto both homepages. | next wave |
| 2 | Wire remaining sites' manifest keys | MED | queued | After Tier-1 proven: ferret / ferrets / saddle / lizard / petfoods curate + wire (most have production IDs already in their codebases). | — |
| 3 | Phase-2 API expansion proposal | LOW | queued | ONLY after curated set proves direction. Propose to CSRO with quality filters + attribution + no build fragility. Do not build yet. | — |

## Status notes

- **Wave 1 shipped (this session):** 6 PRs — #275 (foundation) + #277/#279/#281/#282/#283 (per-site). All branched off `visual/logo-attribution-foundation` so 1a–1e are independent of each other; each re-targets to `main` automatically when #275 lands.
- **Eyeball-ready for Carlo:** Dog (#277) / Fish (#279) / Horses (#281) all have a 16:9 hero photo strip wired on the homepage using verified-in-production Unsplash IDs. Carlo can preview each.
- **Attribution honesty:** all curated manifest entries are tagged `curated: true`. Credit renders as **"Source: Unsplash"** linked to the photo page (where the real photographer credit lives) rather than fabricating a name. `sync-images.mjs --force` with API key overwrites with real attribution — no code change needed.
- **Sandbox limits:** WebFetch returns 403 from Unsplash, so the bot cannot extract real photographer names directly. This is the honest stop-gap until Carlo runs sync.
- **What's blocked:** Vets.co hero wiring (queue 1d follow-up) + PetFood.com hero wiring (queue 1e follow-up) — both need sync output. Visual.md tracks the follow-up so the bot will pick up on next wake.
- **Carlo needed?** Eyeball Dog/Fish/Horses. 1-minute `node scripts/sync-images.mjs --force` (Unsplash key set) unblocks 1d/1e wiring follow-up + fills real photographer names across all `curated: true` entries.

## DO NOT TOUCH

- Other bots' lanes (COO routing/CI, Monetization affiliate/funnels, CSRO registers).
- `Nav.tsx` / `Footer.tsx` / `ArticleLayout.tsx` are SHARED — coordinate via PR before structural change. PR #275 touches Nav + Footer to wire `<Logo>` as a drop-in for the inline text — minimal, stylistic, not structural.
- Never commit API keys/secrets. No CI/Vercel photo-API wiring (Carlo policy 2026-05-31).
- **No spend on logos.** $0 typographic wordmarks only.
- QC §1: no AI-generated humans or animals, no fake headshots, preserve photographer attribution.
