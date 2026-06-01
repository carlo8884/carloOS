---
owner: Visual Bot
updated: 2026-05-31
status: live
---

# Visual Bot — work queue

Per `csro-dir-2026-W22-013` (fleet autonomy): keep ≥5 ready items here.
Items completed by Visual Bot drop into the "Done" log at the bottom.

---

## Top of queue (in priority order)

### 1. Carlo: run sync-images.mjs against Tier-1 manifest entries — UNBLOCKS THE REST OF DIR-021
- **What:** Locally run `node scripts/sync-images.mjs` with `UNSPLASH_ACCESS_KEY` set so it overwrites the hand-curated Tier-1 entries (`dog-com:hero`, `dog-com:category-breeds`, `fish-com:hero`, `fish-com:species-betta`, `horses-com:hero`, `horses-com:category-disciplines`) with real photographer attribution.
- **Why:** Manifest entries currently set `photographer: "Unsplash contributor"` because Visual Bot has no API access from sandbox. The Unsplash photo IDs are real (already verified-in-production on Vercel) but the attribution name is a placeholder honest-not-fabricated. QC §1 wants real attribution preserved.
- **How:** `export UNSPLASH_ACCESS_KEY=...` then `node scripts/sync-images.mjs --force` to refresh. Commit the diff.
- **Status:** blocked on Carlo (1 minute).

### 2. Vets.co hero — wire StockImage once a verified texture-led URL exists
- **What:** Once sync-images.mjs runs with `UNSPLASH_ACCESS_KEY`, the `vets-co:hero` slot (query now: "stethoscope warm wood texture") populates with a verified URL. Then wire `<StockImage manifestKey="vets-co:hero" />` onto the Vets.co homepage between the dark hero and the trust bar.
- **Why:** dir-021 asks for a Tier-1 real hero. The existing CSS-only hero is intentional per the page-level TODO; wiring is fine once the photo respects the no-humans / texture-led / architectural / vector-diagram constraint.
- **Status:** Slot query reconciled (PR #263, commit `9a44238`). Wiring blocked on sync.

### 3. PetFood.com hero — wire StockImage once a verified ingredient photo exists
- **What:** Once sync-images runs, the existing `petfood-com:hero` slot (query: "pet food bowl ingredients") will populate. Wire StockImage onto the PetFood homepage between the typographic hero and the "PetFood scoring rubric" section.
- **Why:** dir-021 wants each Tier-1 site to have a real hero. PetFood currently has a magazine-style typographic-only hero. A subtle ingredient/raw-food photo strip below the hero text gives the site a real photographic moment without disrupting the editorial voice.
- **Status:** blocked on sync (queue item #1).

### 4. Ferret.com homepage hero — add visual moment
- **What:** Ferret.com homepage is currently CSS-only per the documented constraint (Unsplash ferret pool is shallow; verified IDs from inside sandbox is not possible). Once Carlo browses the Unsplash catalog directly per the photo-sourcing playbook, pick one verified ferret photo ID and add `ferret-com:hero` to the manifest by hand.
- **Why:** Ferret.com is a Tier-2 launch-greenlit site but has no homepage photo. The Ferret.com manifest queries are already in `image-queries.json`; this is a Carlo-curation task.
- **Status:** blocked on Carlo (browse + pick IDs).

### 5. Tier-2 ReviewCard per-site accent — partial (Horses done)
- **What:** Ferret.com received amber on the ReviewCard winner band via `data-review-card` hook (PR #249). Horses.com now uses brass (#B68830) for the winner band (PR #263, commit `8ff2aba`) — matches the existing editorial-equine voice. Lizard (lime primary), Fish (deep teal primary), Saddle (saddle brown primary) audited — their default `brand-primary` winner bands look on-brand against their palettes; no override needed.
- **Status:** done (no further per-site action required unless Carlo wants a specific site overridden).

---

## Done log (recent)

- 2026-06-01 — **PR #263 (in flight, post-open additions)**: vets-co:hero slot query reconciled with the page-level QC §1 directive (texture-led, no humans); StockImage credit upgraded to render clickable "Source: Unsplash" link for `curated: true` manifest entries (instead of awkward "Photo: Unsplash contributor via Unsplash"); Horses.com brass accent on ReviewCard winner band.
- 2026-05-31 — **dir-021 Tier-1 image curation + Logo** (PR #263 base): Added 6 Dog.com slots to `image-queries.json`; created `<Logo />` $0 typographic wordmark wired into Nav + Footer; populated manifest with 6 verified-in-production Unsplash IDs (Dog ×2, Fish ×2, Horses ×2); wired StockImage onto Dog/Fish/Horses homepage heroes. Vets and PetFood deferred to queue items 2 + 3 (rationale documented).
- 2026-05-31 — **PR #259**: Fixed 3 undefined Tailwind tokens portfolio-wide (`bg-brand-bg`, `text-brand-text-muted`, `text-brand-text`) + EmailCapture sidebar hairline ring for Lizard dark-body. 31 files / 11 apps.
- 2026-05-31 — **PR #249**: Audience-capture completion (EmailCapture on 14 high-intent pages) + ferret-com section hubs + UI component API widening that unbroke `verify` portfolio-wide + BuyBox adoption on 4 PetFood/PetFoods brand pages + EmailCapture polish + Ferret amber accent on ReviewCard winner band.

---

## Lane reminder

Per `ops/policies/bot-coordination.md` §5 — Visual Bot owns:
- `apps/<site>/src/components/visual/*` (per-site visual primitives)
- `packages/ui/src/components/visual/*` (shared visual primitives — BuyBox lives here)
- Per-site `globals.css` accent overrides
- Image manifest curation when sandbox-accessible
- Logo / wordmark / brand-identity primitives

Coordinate before:
- Touching `Footer.tsx` / `Nav.tsx` structure (stylistic refinements OK)
- Touching `ArticleLayout.tsx` structure
- Changing `image-manifest.json` entry shape

NEVER:
- AI-generated humans or animals
- Fake clinical scenes
- Stripping photographer attribution
- Pasting unverified Unsplash CDN URLs (page-level TODOs document this on a per-site basis — read them before adding photos)
