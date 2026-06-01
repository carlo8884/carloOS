# Visual Bot — Wakeup Queue

**Owner bot:** Visual Bot · **Lane:** photography, composition, motion, visual identity, `src/components/visual/*`, image manifest
**Last updated:** 2026-06-01 (Visual Bot — wave-1 + wave-2 partial shipped, 8 PRs open)

## RESTART PROMPT (paste to wake this bot)
```
Pull latest origin/main. Read ops/bot-queue/Visual.md, work top-down from item 0 (Logo letterSpacing + attribution fix-backs), then dir-021 curation. One branch+PR per item; never idle. Keep Dog/Fish/Horses in early commits for Carlo. QC §1. Update the queue as you go.
```

## Queue (priority order)

| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
| 0 | **Logo letterSpacing + attribution fix-backs** (foundation) | 🔴 P0 | **PR #275 open** | Merge to land foundation primitives. | this wave |
| 1a | **dir-021 Dog.com curation** | 🔴 P0 | **PR #277 open** (base: foundation) | Merge after #275 — re-targets to main automatically. | this wave |
| 1b | **dir-021 Fish.com curation** | 🔴 P0 | **PR #279 open** (base: foundation) | Merge after #275. | this wave |
| 1c | **dir-021 Horses.com curation + brass ReviewCard winner** | 🔴 P0 | **PR #281 open** (base: foundation) | Merge after #275. | this wave |
| 1d | **dir-021 Vets.co slot reconciliation** | 🔴 P0 | **PR #282 open** (base: foundation) | Merge after #275. Wiring deferred — Carlo runs sync first. | this wave |
| 1e | **dir-021 PetFood.com slot expansion** | 🔴 P0 | **PR #285 open** (base: foundation) | Merge after #275. Wiring deferred. | this wave |
| 2a | **dir-021 Saddle.com manifest curation** | MED | **PR #286 open** (base: foundation) | Merge after #275. No wiring (Saddle hero is intentional). | this wave |
| 2b | **dir-021 Lizard.com manifest curation** | MED | **PR #288 open** (base: foundation) | Merge after #275. No wiring (Lizard hero is intentional). | this wave |
| 2c | dir-021 Ferret.com curation | MED | **BLOCKED on Carlo sync** | Ferret.com codebase has 0 verified-in-production Unsplash IDs to draw on. Slot definitions exist (`ferret-com:hero`, `category-care`, `category-health`). After `sync-images.mjs --force` runs Carlo-side, wire StockImage onto Ferret homepage. | — |
| 2d | dir-021 Ferrets.com curation | MED | **BLOCKED on Carlo sync** | Same blocker as 2c — 0 production IDs, only slot definitions. | — |
| 2e | dir-021 PetFoods.com curation | MED | **BLOCKED on Carlo sync** | Same blocker — 0 production IDs. | — |
| 1d/1e wiring follow-up | StockImage on Vets/PetFood after sync | MED | **BLOCKED on Carlo sync** | Once `vets-co:hero` (texture-led) + `petfood-com:hero` (ingredients) manifest entries exist, wire StockImage onto both homepages. | next wave |
| 3 | Phase-2 API expansion proposal | LOW | queued | ONLY after curated set proves direction. Propose to CSRO with quality filters + attribution + no build fragility. Do not build yet. | — |

## Status notes

### What shipped (this session, 8 PRs — one branch+PR per item per Carlo directive)

| PR | Item | Branch | Subject |
|----|------|--------|---------|
| #275 | 0 | `visual/logo-attribution-foundation` | Logo + StockImage attribution + ImageCard.creditUrl + production-safe placeholder |
| #277 | 1a | `visual/dir-021-1a-dog-com` | 6 Dog slots + 2 manifest entries + homepage hero strip |
| #279 | 1b | `visual/dir-021-1b-fish-com` | 3 Fish manifest entries + homepage hero strip |
| #281 | 1c | `visual/dir-021-1c-horses-com` | 3 Horses manifest entries + hero strip + brass winner band |
| #282 | 1d | `visual/dir-021-1d-vets-co` | 3 Vets slot reconciliations (no humans per page TODO) |
| #285 | 1e | `visual/dir-021-1e-petfood-com` | 4 new PetFood slots (conditions/brands/ingredients/methodology) |
| #286 | 2a | `visual/dir-021-2a-saddle-com` | 3 Saddle manifest entries |
| #288 | 2b | `visual/dir-021-2b-lizard-com` | 3 Lizard manifest entries (incl. scientific-name alt text) |

All wave-1 PRs (1a–1e) and wave-2 PRs (2a, 2b) branch off `visual/logo-attribution-foundation` so each per-site PR is independent of the others; each re-targets to `main` automatically when #275 lands.

### Attribution honesty

All curated manifest entries are tagged `curated: true`. The `StockImage` component (PR #275) renders the credit as **"Source: Unsplash"** linked to the photo page where the canonical photographer credit lives, rather than fabricating a name. When Carlo runs `node scripts/sync-images.mjs --force` with `UNSPLASH_ACCESS_KEY` set, the entries are overwritten with real photographer names and the credit becomes "Photo: \<Name\> via Unsplash" automatically — no code change needed.

### Sandbox limits documented

- WebFetch returns 403 from Unsplash, so the bot cannot extract real photographer names directly.
- The 26 verified-in-production Unsplash IDs in the codebase (across Dog/Fish/Horses/Saddle/Lizard) are the curatable pool — Ferret/Ferrets/PetFood/PetFoods/Vets have 0 production IDs to draw on, so their wave-2 curation is genuinely blocked on Carlo's sync.

### Carlo needed?

- **Eyeball** Dog (#277) / Fish (#279) / Horses (#281) preview deploys — homepage hero photo strips ship in those PRs
- **1-minute sync run**: `export UNSPLASH_ACCESS_KEY=...; node scripts/sync-images.mjs --force` — unblocks (a) real photographer names on every `curated: true` entry across the 8 PRs and (b) wave-2 follow-up wiring for Vets/PetFood/Ferret/Ferrets/PetFoods

## DO NOT TOUCH

- Other bots' lanes (COO routing/CI, Monetization affiliate/funnels, CSRO registers).
- `Nav.tsx` / `Footer.tsx` / `ArticleLayout.tsx` are SHARED — coordinate via PR before structural change. PR #275 wires `<Logo>` as a drop-in for the inline text in Nav + Footer — minimal, stylistic, not structural.
- Never commit API keys/secrets. No CI/Vercel photo-API wiring (Carlo policy 2026-05-31).
- **No spend on logos.** $0 typographic wordmarks only.
- QC §1: no AI-generated humans or animals, no fake headshots, preserve photographer attribution.
