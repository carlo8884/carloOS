# Visual Bot — Wakeup Queue

**Owner bot:** Visual Bot · **Lane:** photography, composition, motion, visual identity, `src/components/visual/*`, image manifest
**Last updated:** 2026-05-31 (by CSRO)

## RESTART PROMPT (paste to wake this bot)
```
Pull latest origin/main. Read ops/bot-queue/Visual.md and do the top queued item. Commit + push to your own branch, open a PR rebased on main. When done, update this queue file (finished/remaining/blocked/next/Carlo-needed) before ending. Stay in lane; QC §1 trust bar (no AI humans/animals, no fake headshots, preserve photographer attribution). Don't idle — next item if blocked. Don't ask Carlo unless queue is empty/blocked.
```

## 🎯 MODE SHIFT (Carlo 2026-06-01): LAUNCH-QUALITY POLISH — cohort-5 first
Make the cohort-5 sites look credible + premium, NOT templated/generic. **Order: Dog → Fish → Ferret → PetFood → Vets.** Per site: $0 typographic wordmark (letterSpacing 0), curate REAL photography (hand-picked, real photographer attribution — NO "Unsplash contributor" placeholders, NO API/keys/secrets, NO AI humans/animals), hero on homepage + every hub, in-page imagery on high-value pages (breed/species/review/calculator/condition). Improve homepage, hubs, calculators/tools, and high-value pages specifically. Ensure pages don't read as templated. Criteria: `ops/csro/launch-quality-criteria.md`. One branch+PR per site. Carlo eyeballs Dog/Fish — keep premium. Do NOT push DNS/launch.

## Queue (priority order)

| # | Directive | Priority | Status | Next action | Deadline |
|---|---|---|---|---|---|
| 0 | **🚧 PR #263 fix-backs** (IR #4 + #6) | 🔴 P0 BLOCKS MERGE | queued | Before #263 merges: **(A)** Logo `letterSpacing` is negative (-0.025/-0.02/-0.03em) in `packages/ui/src/components/Logo.tsx` — set to `0` (frontend standard), adjust weight/size for tightness instead. **(B)** Manifest still has 6 `photographer: "Unsplash contributor"` placeholders — either replace with REAL photographer names + verified source URLs for those 6, OR keep them OUT of production-wired pages until real attribution exists (don't ship placeholder attribution as if real). | this session |
| 0a | **Dog.com visual** (156pg, ZERO imagery) | 🔴 P0 Tier-1 | queued | Flagship has no images at all. Identity + homepage hero + hub heroes + in-page imagery on breed/review/health pages. Carlo will eyeball — make it premium. | this session |
| 0b | **Fish / Lizard / PetFood / Vets visual** (all ZERO) | 🔴 HIGH | queued | Each: identity + heroes on homepage/hubs + in-page images. Fish=aquarium-magazine, Lizard=dark-mode field-guide, Vets=clinical-authority, PetFood=nutrition-reference. One branch each. | this week |
| 0c | **Ferret in-page imagery** (hubs done, pages bare) | 🟡 | queued | Ferret has 6 hub heroes. Extend real photos into the ~100 content pages (species/colors/health/care). | this week |
| 0d | **Horses / Saddle visual** (after content) | 🟡 | queued | Being built to 100 now. Add identity+heroes+imagery once content lands. Saddle=luxury, Horses=equestrian editorial. | this week |
| 1 | **Curated images + visual identity** (`dir-021`) | 🔴 P0 launch-blocking | queued | Execute `ops/handoffs/2026-05-31-csro-to-visual-curated-images-and-identity.md`. Hand-curate real photos into the manifest (NO API/keys/secrets, no build dependency). Tier-1: Dog→Fish→Horses→Vets→PetFood. ⚠️ Dog.com has ZERO slots in image-queries.json — add them first. Then wire `<StockImage>` into Tier-1 homepages + top hubs (give each a real hero). $0 typographic wordmark `<Logo>` for identity. Real photographer attribution per image (no "Unsplash contributor" placeholders). | this wave |
| 2 | Wire remaining sites' manifest keys | MED | queued | After Tier-1 proven: ferret/ferrets/saddle/lizard/petfoods curate + wire heroes. | — |
| 3 | **Per-site theme differentiation** | MED | queued | Each site should FEEL distinct, not a recolored template. Per `packages/config` theme tokens: Saddle=luxury serif/restraint, Lizard=dark-mode field-guide, Vets=clinical-authority, Fish=aquarium-magazine, Dog=mass-market warm. Audit + tighten typography scale, spacing rhythm, color usage per positioning. No new deps. | — |
| 4 | **Homepage scroll-appeal pass (Tier-1)** | MED | queued | Beyond hero: section rhythm, visual hierarchy, card density, whitespace — make Dog/Fish/Horses homepages invite scrolling (Carlo's complaint). Use existing components; no AI imagery. | — |
| 5 | **Mobile-padding/regression sweep** | MED | queued | Re-check the mobile-padding issues flagged earlier across Tier-1 + tool pages; ensure consistent container padding, tap targets, no overflow. | — |
| 6 | **ArticleLayout polish (structure-safe)** | LOW | queued | Refine ArticleLayout readability (measure, line-height, heading scale, drop-cap/pull-quote usage) WITHOUT structural change — COO owns structure; propose via PR if structural. | — |
| 7 | **OG-image + favicon coverage audit** | LOW | queued | Confirm every site has a coherent OG image + favicon; list gaps; fill with $0 typographic/brand-color treatments (no AI humans). | — |
| 8 | **Tool/calculator visual consistency** | LOW | queued | The `/tools` pages across sites — unify the CalculatorShell visual treatment so tools feel like one product family. | — |
| 9 | Phase-2 API expansion proposal | LOW | queued | ONLY after curated set proves direction. Propose to CSRO with quality filters + attribution + no build fragility. Do not build yet. | — |

## Status notes
- **What's done:** functional UI to date (calculators, BuyBox, `/tools` hubs, audience-capture) + dir-021 first pass (StockImage wiring, hero photos, Logo). Item 0 = the IR-caught polish before #263 merges.
- **What's blocked:** nothing executable — curation/identity need no API key. (The 6 placeholder attributions block only the MERGE of those entries, not your other work.)
- **Overnight rule:** work top-down; one branch+PR per item or logical group; when a PR is awaiting CI, start the next item. Items 0–9 are >1 night. Update the status column as you close each.
- **Carlo needed?** No to execute. He WILL eyeball Tier-1 (Dog/Fish/Horses) fit — keep those in early commits.

## DO NOT TOUCH
- Other bots' lanes (COO routing/CI, Monetization affiliate/funnels, CSRO registers).
- `Nav.tsx`/`Footer.tsx`/`ArticleLayout.tsx` are SHARED — coordinate via PR before structural change.
- Never commit API keys/secrets. No CI/Vercel photo-API wiring (Carlo policy 2026-05-31).
- **No spend on logos.** $0 typographic wordmarks only; clean/premium, typography matched to each
  site's positioning; do not over-design; no generic icons unless they aid recognition. Image quality
  + layout + trust + tool usability rank ABOVE logo perfection. Upgrade trigger in dir-021 brief.
- QC §1: no AI-generated humans or animals, no fake headshots, preserve photographer attribution.
