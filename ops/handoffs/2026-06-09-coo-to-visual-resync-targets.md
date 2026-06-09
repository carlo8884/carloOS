---
from: COO
to: Visual Bot
status: action-requested
created: 2026-06-09
next_action: Re-sync the prioritized launch keys below using a throttled batch + Pexels fallback; do NOT bulk-rerun the full manifest.
---

# Per-item image re-sync — prioritized launch targets

## Context

Carlo ran `sync-images.mjs` on his Mac (commit `c393ac0d`) against the
per-item queries merged in #687. Result: **48 new / 218 kept / 152 failed**.
Failures returned **Unsplash `403`** — including common terms (Golden
Retriever, Beagle, Poodle). That signature is **rate/quota refusal, not bad
queries**. ~466 keys requested in one run vs. the Unsplash **demo-tier cap of
50 requests/hour** ⇒ the run blew through the cap and everything after the cap
403'd. The queries are correct; the provider throttled.

## What is NOT broken (verified on `c393ac0d`)

- **0 placeholder/broken images** across all 6 launch candidates (187
  `<StockImage>` slots scanned; every one resolves to a real photo via primary
  key or synced fallback).
- **Vets, Dog, Ferret, Lizard**: fully differentiated — 0 slots on fallback.
  Their heroes were in the "218 kept" from prior syncs.
- The 57 dog `breed-<slug>-2`, the 3 ferret `*-feature`, and the lizard
  `tool-*`/`category-uvb` keys are **pre-provisioned queries not yet wired to
  live `<StockImage>` slots** (the lizard `tool-*` strings are affiliate `?s=`
  tracking params, not image keys). No live pixel impact — deprioritize.

## What IS the gap — live, templated-looking repetition (priority order)

Real photos render, but the *same* fallback photo repeats across many pages,
so these two sites read as templated under pixel review:

| Priority | Site | Live slots on shared fallback | Symptom |
|---|---|---|---|
| **P0** | fish-com | **35 species pages → all show `fish-com:category-species`** | every species page is the same aquarium photo |
| **P0** | petfood-com | **9 compare → `compare-hero`; 7 brand → `category-brands`** | compare/brand pages duplicate two photos |

### P0 keys to re-sync (51 launch-relevant, the only ones that change live pixels)

**fish-com (35):** `species-betta-fish-tank-mates, species-blue-ram,
species-boesemani-rainbowfish, species-bristlenose-pleco,
species-bronze-corydoras, species-cardinal-tetra,
species-celestial-pearl-danio, species-cherry-barb, species-cherry-shrimp,
species-clownfish, species-corydoras, species-discus, species-dwarf-gourami,
species-dwarf-puffer, species-ember-tetra, species-endlers-livebearer,
species-guppy, species-harlequin-rasbora, species-hillstream-loach,
species-koi, species-kuhli-loach, species-molly-fish, species-mystery-snail,
species-oscar, species-otocinclus, species-panda-corydoras,
species-pearl-gourami, species-platy-fish, species-pleco, species-puffer-fish,
species-rainbow-fish, species-sparkling-gourami, species-swordtail-fish,
species-white-cloud-mountain-minnow, species-zebra-danio`

**petfood-com (16):** `brand-blue-buffalo, brand-hills-vs-royal-canin,
brand-orijen-vs-acana, brand-kirkland-signature, brand-purina-pro-plan,
brand-taste-of-the-wild, brand-wellness-vs-merrick, compare-breed-specific-diets,
compare-freeze-dried-and-dehydrated, compare-fresh-vs-kibble,
compare-grain-free-vs-grain-inclusive, compare-home-cooked-vs-commercial,
compare-kibble-vs-canned-for-cats, compare-prescription-vs-otc-diets,
compare-raw-vs-cooked-diets, compare-wet-vs-dry-food`

## Recommended strategy (Visual lane — your call, my recommendation)

1. **Don't bulk-rerun.** Add an `--only-missing` path so the script requests
   only keys absent from the manifest (~152, not ~466). Keeps every run under
   quota and never re-pulls the 218 already-synced.
2. **Throttle to demo-tier:** batch ≤45 requests/run with a per-run sleep, or
   chunk by site (Fish run, then PetFood run) on separate hours. The 51 P0 keys
   fit in **two sub-50 runs**.
3. **Pexels fallback for stubborn keys:** the manifest + script already support
   `provider: 'pexels'` (200 req/hr free). Route any key that 403s twice on
   Unsplash to Pexels — fish species especially have strong Pexels coverage.
4. **Recommend to Carlo (escalation, free):** apply for **Unsplash production
   tier** (5,000 req/hr vs. 50). One approval form, $0, removes this ceiling
   permanently. This is the durable fix; (1)–(3) are the bridge.

Lane note: `sync-images.mjs`, `image-queries.json`, and the manifest are yours.
This brief is targets + strategy only — no code changes from me.

## COO next steps (not blocked on the above)

- Pixel-review prep proceeds **now** on **Vets → Dog** (both fully
  differentiated, 0 fallback, 0 placeholders).
- Fish + PetFood pixel sign-off is **HOLD** until the 51 P0 keys land.
- Not calling any site "premium/launch-quality" until pixel review confirms.
