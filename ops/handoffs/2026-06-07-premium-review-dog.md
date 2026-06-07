---
from: coo
to: carlo
status: review
created: 2026-06-07
next_action: "Carlo: review premium upgrade list; COO ships [COO] items, routes [Visual]/[Monetization] to those bots."
---

# Deep premium-quality review — Dog.com (flagship)

**Verdict:** Dog.com is **content-rich and structurally serious** — real hub→cluster→spoke IA, schema everywhere, genuinely useful tools, calibrated trust voice. But it is **not yet a $10M-feeling asset**, and the gap is concentrated in three places: (1) **imagery is mostly missing** — only 9 of the surfaces have synced photos, so the breed cluster and every money page run as dark text-only bands; (2) **emoji badges on 16 review pages + the reviews index** read like a 2018 affiliate blog, not a luxury editorial brand; (3) the **programmatic breed template — the bulk of /breeds — ships zero images and a flat text hero**, so the flagship's largest cluster looks the cheapest. The homepage itself is excellent and sets a bar the rest of the site doesn't meet.

Scope clicked through: `/` (homepage) → `/breeds` (hub) → `/breeds/[slug]` (programmatic template) + `/breeds/golden-retriever` (hand-written) → `/health` (hub) → `/reviews` + `/reviews/best-pet-insurance` (money page) → `/tools/dog-calorie-calculator` (tool).

---

## The single biggest issue: image coverage

`packages/ui/src/data/image-manifest.json` has **only 9 synced `dog-com:` keys**:

```
dog-com:hero, :category-breeds, :category-health, :category-guides,
:category-nutrition, :category-training, :category-reviews,
:breed-labrador-retriever, :category-puppy
```

Consequences observed in code:
- Homepage already works around this (`apps/dog-com/src/app/page.tsx` lines 139–198): golden-retriever has **no `:breed-golden-retriever` key**, so the "Golden Retriever" photo tile actually renders `dog-com:category-breeds` (a generic breeds photo) — and 4 breeds (french-bulldog, german-shepherd, beagle, poodle) are demoted to text cards specifically because their keys never synced.
- `/breeds` hub (`breeds/page.tsx` lines 65–72, 196–202) maps 6 per-breed keys, but only `:breed-labrador-retriever` exists — the other 5 fall back to the **branded paw placeholder**. So the hero grid of the flagship's marquee cluster is one real photo and five paws.
- `/breeds/[slug]/page.tsx` — **the programmatic template renders ZERO `<StockImage>`** (grep: 0 matches). Every templated breed page is a dark text-only hero. This is most of the breed cluster.

This is the difference between "templated" and "premium." **[Visual] + image-sync.**

---

## Surface 1 — Homepage (`apps/dog-com/src/app/page.tsx`)

| Finding | Lane | Pri |
|---|---|---|
| **This is the strong surface.** Full-bleed image-first hero, `clamp(34px,6vw,68px)` display H1 w/ text-shadow, owner-path tiles, real section rhythm (alternating `bg-brand-dark`/`bg-brand-surface`), SVG icons not emoji, live `WhichPetWizard` embedded. Reads premium. | — | — |
| Hero CTA "Start with symptoms" routes to `/symptoms` but the eyebrow promises "Owner's reference" — fine, but the **two hero CTAs are both orange-on-dark and white-ghost**; consider one primary only so the eye isn't split. Minor. | COO | P2 |
| The "Golden Retriever" photo tile (line 156) uses `manifestKey: 'dog-com:category-breeds'` as a stand-in. Once `:breed-golden-retriever` syncs, promote it back. Until then it's a generic photo masquerading as a breed portrait. | Visual | P1 |
| Trust bar (lines 435–447) is good and honest. No change. | — | — |
| Email capture is correctly gated off (line 937) — no dead form. Good discipline. | — | — |

**Premium read:** 8.5/10. Don't touch the structure; it's the reference the rest of the site should match.

---

## Surface 2 — Breeds hub (`apps/dog-com/src/app/breeds/page.tsx`)

| Finding | Lane | Pri |
|---|---|---|
| **5 of 6 hero-grid breed cards render the paw placeholder** (only labrador synced). The flagship's signature cluster index looks half-built. Sync `:breed-golden-retriever`, `:breed-french-bulldog`, `:breed-german-shepherd`, `:breed-beagle`, `:breed-poodle` at minimum. | Visual | **P0** |
| Hero H1 says "200+ breeds" / metadata says "200+ Breeds Profiled" (line 15) but `Breeds.length` data file has ~58 entries and only the A–Z list shows what actually exists. **Overclaim risk** — AI surfaces and users will notice the count mismatch. Either soften to "50+ breed profiles" (matches homepage trust bar line 439) or commit to the 200. | COO | **P1** |
| "More breeds added weekly" (line 239) is an unverifiable cadence claim. Soften to "Profiles expanding" or remove. | COO | P2 |
| The featured 6-card grid and the full A–Z list (lines 247–298) are **two separate breed lists** with no visual connection — the featured grid isn't a filtered/"popular" subset, it's just the DB's first 6. Add a "Most searched" eyebrow so it reads intentional, not arbitrary. | COO | P2 |
| Size/group filter arrays exist (`SIZE_FILTERS`, `GROUP_FILTERS`, lines 75–76) but **are never rendered** — dead code implying a filter UX that doesn't ship. Either wire the filter or delete the arrays. A working breed filter would be a real premium/UX upgrade. | COO | P1 |
| Cards have nice hover (`hover:-translate-y-1 hover:shadow-card-hover`). Good. | — | — |

**Premium read:** 6/10 — structure is right, but placeholders + the dead filter + count overclaim undercut it.

---

## Surface 3 — Breed detail (`breeds/[slug]/page.tsx` template + `breeds/golden-retriever/page.tsx` hand-written)

| Finding | Lane | Pri |
|---|---|---|
| **Programmatic template has NO image at all** — the hero (lines 330–352) is a flat `bg-brand-dark` text band. Compare the hand-written golden page (lines 47–73): a real 2-column hero with `<StockImage>`, scientific name, stat bar. The template — which powers most breeds — looks dramatically cheaper than the 4 hand-written pages. **Add a `<StockImage manifestKey={`dog-com:breed-${slug}`}>` hero to the template** (it already falls back to the branded paw, so it's safe to ship before all photos sync). | Visual + COO | **P0** |
| Template hero has **no stat bar** — the hand-written golden page's colored stat bar (Size / Lifespan / Cancer Risk, lines 76–92) is the most premium element on the site and the template throws it away in favor of an "At a Glance" table buried below the fold. Port the stat-bar component into the template. | COO | **P1** |
| Template intro sentence has a grammar bug: line 349 `originally {originPurpose...}` produces `"originally Bred to retrieve game. Adults typically..."` — the period from `originPurpose` collides with the next clause. Reads broken. | COO | P1 |
| Hand-written golden page (line 58) renders an **empty pill** — `<span ...style={gold}> </span>` with only a non-breaking space. Visible empty gold chip in the hero. Remove or fill it. | COO | P1 |
| Template content depth is genuinely good (~700–900 words, OFA panel, energy-level branching copy, FAQ w/ JSON-LD, reciprocal compare links). Not thin. The problem is purely visual shell, not substance. | — | — |
| Template `imageUrl: ''` in `buildArticleSchema` (line 279) — no `image` in Article schema hurts AI Overview / Gemini eligibility. Once breed photos sync, pass the resolved URL. | COO | P2 |
| Breed sub-pages `/breeds/[slug]/feeding` + `/health` exist — good cluster depth — but not reviewed here; spot-check they're not thin. | COO | P3 |

**Premium read:** hand-written 8/10, programmatic **5/10**. Since the template is the majority of breed URLs, the *cluster average* feels templated. This is the highest-leverage fix on the site.

---

## Surface 4 — Health hub (`apps/dog-com/src/app/health/page.tsx`)

| Finding | Lane | Pri |
|---|---|---|
| Already de-emoji'd to branded SVG section icons (good — this is the idiom reviews pages still violate). | — | — |
| Curated SECTIONS use real badges ("60%+ cancer rate", "BOAS · IVDD") — strong, specific, citation-worthy. Good EEAT. | — | — |
| ~35 condition pages exist under `/health/*` — deep cluster. Confirm the A–Z `Diseases` list links don't 404 against the actual folders (link-check passes, so OK). | COO | P3 |
| Hero uses the integrated image-in-header pattern (`FILL_IMAGE`, `:category-health`). Consistent with homepage. Good. | — | — |

**Premium read:** 7.5/10 — the best non-homepage hub. Use it as the template for fixing /reviews.

---

## Surface 5 — Reviews / money pages (`/reviews` + `/reviews/best-pet-insurance`)

| Finding | Lane | Pri |
|---|---|---|
| **Emoji badges everywhere.** Reviews index (`reviews/page.tsx` lines 16–31): `🏆 🥩 🛡️ 😴 🏠`. Insurance page QuickPicks (lines 39–44): `🏆 ⚡ 🎛️ 💰`, plus an emoji in the H1 eyebrow (line 51 `🏆 Buyer's Guide`). **16 review pages use `badgeEmoji`.** This is the #1 thing that makes the money pages read as a cheap affiliate blog vs a premium buyer's guide. Replace with the SVG-icon idiom already shipped on the homepage/health hub. | COO | **P0** |
| Reviews **index hero is text-only**, then the category image is dumped in a *separate band below* the hero (lines 54–63) instead of integrated into the masthead like homepage/breeds/health. Looks bolted-on. Rebuild to the `FILL_IMAGE` image-in-header pattern. | COO + Visual | **P1** |
| Insurance money page (`best-pet-insurance/page.tsx`) **hero has no image** — flat dark band. A money page asking for a high-intent insurance click should feel the most premium and trustworthy on the site, not the least. Add a hero image + consider a trust strip (carriers compared, last-updated, methodology link). | Visual + COO | **P1** |
| Insurance copy says **"Expert-tested"** (reviews index line 57) and **"real claims experience"** / "We compared 8 insurers" (lines 9, 61). Trust-guard passes, but "Expert-tested" on a page with "Editorial team" byline is the kind of phrasing that drifts toward the QC §1 line. Recommend softening "Expert-tested" → "Editorially compared". | COO | P1 |
| Conversion mechanics are actually strong: `ReviewCard` with specs/pros/cons, per-breed-risk sidebar, `AffiliateDisclosure` inline above the buy boxes, all CTAs via `/go/[vendor]/...` (compliant). The *substance* converts; the *visual shell* undersells it. | — | — |
| `ScoreMethodology` + `AffiliateDisclosure` present above first buy box — disclosure discipline is correct. | Monetization | — |
| Consider a sticky "Get a quote" CTA or comparison table at top for the insurance page — high-intent users want the table, not 4 long cards to scroll. | Monetization | P2 |

**Premium read:** content 8/10, **visual/trust shell 5/10**. The emoji + missing hero images are doing real conversion damage on the highest-revenue surface.

---

## Surface 6 — Tool (`/tools/dog-calorie-calculator`)

| Finding | Lane | Pri |
|---|---|---|
| **The calculator actually works** — real RER/MER math (`Calculator.tsx`), 8 life-stage factors, lb/kg, optional cups/day, WebApplication schema, 4 substantive FAQs, honest "estimate not prescription" framing. This is a genuine category-defining asset. | — | — |
| **Dead-ends after the result.** No "now compare foods for your dog →" link to `/reviews/best-dry-dog-food`, no "calculate your dog's age →" cross-link to the sibling tool, no breed cross-sell. A high-intent user who just got a number has nowhere monetizable to go. Add result-contextual cross-links. | COO + Monetization | **P1** |
| No shareable/printable result and no breed presets — "I have a Labrador" autofill would be a premium touch and a GEO citation magnet ("calorie needs for a 70lb Labrador"). | COO | P2 |
| Hero is text-only dark band (consistent with other tools) — acceptable for a utility, but a small result-card illustration would lift it. Low priority. | Visual | P3 |
| `/nutrition/how-much-to-feed` and `/nutrition/reading-food-labels` are linked (lines 144–157) — verify they exist (link-check passes). Good cluster wiring. | COO | P3 |

**Premium read:** 8/10 functionally, loses points only on post-result dead-ending.

---

## Top 10 premium upgrades for Dog.com (ranked)

1. **[Visual / image-sync] — P0** — Sync the 5 missing per-breed photo keys (`:breed-golden-retriever`, `:breed-french-bulldog`, `:breed-german-shepherd`, `:breed-beagle`, `:breed-poodle`). Right now the breeds hero grid is one photo + five paw placeholders, and the homepage fakes the Golden with a generic breeds photo. **Effort: S** (manifest add + Carlo runs `sync-images.mjs` on his Mac).

2. **[COO] — P0** — De-emoji the money pages. Replace `badgeEmoji` (🏆⚡🎛️💰) across all 16 `/reviews/*` pages + the reviews index badges (🥩🛡️😴🏠) with the SVG-icon idiom already shipped on the homepage/health hub. This is the single biggest "cheap affiliate blog" tell. **Effort: M** (shared `ReviewCard`/`QuickPicks` badge prop + per-page edits).

3. **[Visual + COO] — P0** — Add a `<StockImage>` hero to the programmatic breed template (`breeds/[slug]/page.tsx`) — it currently ships ZERO images and powers most breed URLs. Safe to ship now (falls back to branded paw). **Effort: S.**

4. **[COO] — P1** — Port the hand-written golden page's colored stat bar (Size/Lifespan/Risk) into the breed template; it's the most premium element on the site and the template throws it away. Fix the line-349 grammar bug and the empty gold pill (golden page line 58) while in there. **Effort: M.**

5. **[COO + Visual] — P1** — Rebuild the `/reviews` index hero to the integrated image-in-header pattern (`FILL_IMAGE`) instead of a text band with the photo dumped in a separate strip below. Mirror homepage/health hub. **Effort: S.**

6. **[Visual + COO] — P1** — Give `/reviews/best-pet-insurance` (and the other money pages) a real hero image + trust strip. The highest-revenue surface currently looks the least trustworthy (flat dark band). **Effort: M.**

7. **[COO] — P1** — Resolve the breeds count overclaim: hub H1 + metadata say "200+ breeds" but the data file has ~58. Soften to "50+ breed profiles" (matches the homepage trust bar) or remove the "added weekly" cadence claim. Overclaims hurt EEAT on every retrieval surface. **Effort: XS.**

8. **[COO] — P1** — Ship the breeds filter or delete the dead `SIZE_FILTERS`/`GROUP_FILTERS` arrays. A working size/group filter is a genuine premium UX upgrade for a 58-breed index; dead code implying one is worse than nothing. **Effort: M to ship / XS to delete.**

9. **[COO + Monetization] — P1** — Kill the calculator dead-end: after the result, cross-link to `/reviews/best-dry-dog-food`, the sibling age calculator, and breed pages. High-intent users currently have nowhere monetizable to go. **Effort: S.**

10. **[COO] — P1** — Soften "Expert-tested" → "Editorially compared" on the reviews index/insurance page. Trust-guard passes, but the phrasing drifts toward the QC §1 line under an "Editorial team" byline. **Effort: XS.**

**Honorable mentions (P2):** add breed presets + printable result to the calorie calculator (GEO citation magnet); pass resolved image URLs into breed `buildArticleSchema` once photos sync (AI Overview eligibility); add a sticky quote CTA / comparison table to the insurance page.

---

## Bottom line for Carlo

The **bones are $10M-grade** — IA, schema, tool depth, trust voice. What's holding Dog.com at "templated" is almost entirely **shell, not substance**: missing breed photography, emoji badges on the money pages, and a flat imageless breed template carrying the largest cluster. Items 1–4 alone would move the flagship from "serious reference site" to "category-defining asset." None require new content — they're polish, exactly the §8a phase mandate.
