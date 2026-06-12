---
from: coo
to: carlo
status: review
created: 2026-06-07
next_action: "Carlo: review premium upgrade list; COO ships [COO] items, routes [Visual]/[Monetization] to those bots."
---

# Deep premium-quality review — Vets.co + Fish.com

**Mode:** §8a launch-quality polish. Click-through-level, per-site, per-surface. Demanding luxury-editorial critic posture. READ-ONLY (this doc only).
**Paths walked per site:** homepage → hub → detail page → money page → tool.
**Verdict in one line:** Both homepages are genuinely premium and category-credible. The *interior* is where the $10M illusion breaks — decorative emoji are portfolio-wide on interior pages, one flagship hub renders 8 placeholder-paw image slots, and the most commercial Vets surface has a dead cross-domain CTA. The depth of the editorial content is real and is the strongest asset on both sites.

---

## Cross-cutting finding (applies to BOTH sites) — the single biggest "templated" tell

**Decorative emoji are systemic on interior pages while the homepages were rebuilt to a clean SVG line-icon system.** This is the most jarring premium inconsistency on both properties. A reader who lands on the homepage sees a restrained, magazine-grade icon system; one click into a hub or detail page and they hit 🚨🔬❤️🧠🎗️🩺👁️ (Vets find-a-vet), 🐠🧪⚙️ (Fish email perks), 🏆⭐⚙️💰 (review QuickPicks), and 🐠 author-avatar bylines.

- Count: ~73 of ~95 Vets `page.tsx` files and ~90 of ~115 Fish `page.tsx` files contain decorative emoji (excludes typographic →/←/›). Sources: `apps/vets-co/src/app/**`, `apps/fish-com/src/app/**`.
- Concrete instances cited below per surface.
- A luxury equestrian or clinical-authority brand never ships emoji in chrome. Saddle.com / a real vet directory would use line icons or nothing.

**[COO] P1 — Emoji-purge pass across both sites' interior chrome** (eyebrows, badges, QuickPicks `emoji`, `authorAvatar`, EmailCapture `perks`, section labels). Replace with the existing SVG line-icon vocabulary already proven on the homepages (`CategoryIconSvg`, `ProblemIcon*`). Effort: **M** (mechanical but ~160 files; can be batched by template — most are `perks={['🐠 …']}` and `badge: '🚨 …'` and `emoji: '🏆'`). This one change moves the perceived tier more than any single visual asset.

---

# VETS.CO — clinical-authority voice

Brand promise: a reference desk that out-clinicals the affiliate-farm pet-health sites. The homepage delivers this. The interior under-delivers on polish, and the money path has a real conversion hole.

## Surface 1 — Homepage (`apps/vets-co/src/app/page.tsx`)

**Verdict: premium. This is a $10M-credible front door.** Full-bleed `vets-co:hero` (stethoscope-on-wood, real synced key — verified present in manifest) integrated into the navy masthead with gradient scrim, Libre Baskerville H1, italic tagline, brass+teal radial wash, fine-grain texture. Live `InsuranceReimbursementEstimator` embedded above the fold-ish (premium gate 3 — a tool you use, not a link). Trust bar, six SVG-icon reference desks, image-backed entry tiles using real keys only, restrained Unsplash attribution footer. Trust posture is airtight (no fake credentials, object/architecture/animal imagery only).

Findings:
- **[Visual] P2** — The three image-backed desk tiles use `aspect="3:4"` portrait at `min-h-[230px]`. On the breeds tile the key is `vets-co:category-breeds` (present), but verify the crop: `find-a-vet-hero` (clinic exterior) and `health-hero` (bookshelf) at 3:4 portrait can letterbox/over-crop architectural shots. Confirm object-fit cover looks intentional, not squeezed.
- **[COO] P2** — H1 "Find a vet. Read the guidelines." is excellent, but the primary CTA "Find a vet near you" routes to `/find-a-vet`, which is NOT a real directory (see Surface 2). The promise/payoff gap is a trust risk on the flagship CTA. Consider re-labeling to match what the page actually delivers ("How to find the right vet") OR upgrade the directory (bigger, cross-lane — see Surface 2).
- Nit **[COO] P3** — Two near-identical "where to start" sections (image-desk tiles + the 6-card "Six Reference Desks" grid) cover overlapping ground back-to-back. Tighten section rhythm; one could become a denser single band.

## Surface 2 — Hub: Find a Vet (`apps/vets-co/src/app/find-a-vet/page.tsx`)

**Verdict: content-strong, premium-weak, and strategically a soft dead-end.** This is the destination of the #1 homepage CTA, so it carries disproportionate weight.

- **[COO] P1 — Emoji specialist cards.** `SPECIALISTS` array hardcodes 🚨🔬❤️🧠🎗️🩺👁️⚕️🦷🧡 (lines ~15-24) rendered at `text-2xl`. On a board-certified-specialty directory this reads like a Buzzfeed listicle, directly contradicting the DACVECC/DACVIM credential framing right next to it. Replace with the homepage's clinical line-icon set. Effort **S**.
- **[Visual] P1 — Old hero pattern.** Hero is a flat `bg-brand-dark` band (line 31) with the real image (`vets-co:find-a-vet-hero`) dumped into a *separate* white band below (line 47). This is the exact pre-rebuild pattern the homepage PR deliberately killed ("the old version pushed the photo into a separate white band BELOW the masthead"). Bring this hub up to the integrated full-bleed masthead. Effort **M**, COO can do the structural lift / Visual confirms crop.
- **[COO/Monetization] P1 — Conversion dead-end.** The hub honestly states "Vets.co does not maintain a real-time directory" (line 140) and routes users to external college directories (ACVIM/ACVS/AAHA). That's trust-correct but means the flagship CTA leads to a page that hands the user *off-site*. For a $10M directory asset this is the core unsolved product question. Options to slot: (a) re-frame the CTA/hub as "How to choose a vet + verified directories" (honest, no build), or (b) decide whether a real listings layer is on the roadmap (large, IR-level decision — not COO lane). **Flag for Carlo, not a COO fix.**
- **[COO] P2** — `/find-a-vet/[state]` detail (50 programmatic state pages) is genuinely *substantive*, not thin — TL;DR, emergency-availability notes, metro grids, region-specific guidance, FAQ with schema. Good EEAT. But every state page hero is the same flat navy band (no image), and the metro cards are placeholder text ("search AAHA-accredited hospitals…") — i.e., 50 near-identical pages with no unique media. Risk of thin/duplicate algorithmic suppression at scale. Add one regional/state visual hook or unique data point per state. Effort **M** (Visual + data).

## Surface 3 — Hub/detail: Health Library (`apps/vets-co/src/app/health/page.tsx`)

**Verdict: the weakest premium surface on Vets.** The individual condition articles (sampled) are deep; the *hub* that organizes them looks like a sitemap.

- **[COO] P1 — Auto-prettified slug titles.** The "All Health Topics" grid renders machine-cased slugs: "Allergic Reactions Dogs", "Bloat GDV Dogs", "Diabetes In Dogs Cats", "Feline Lower Urinary Tract Disease", "Pain Signs Dogs" (HEALTH_ARTICLES array, lines 16-55). These are ungrammatical and read as a crawl dump, not an editorial library. Replace with hand-written display titles ("Bloat & GDV in Dogs", "Diabetes in Dogs & Cats"). Effort **S**, pure COO content.
- **[COO] P1 — Emoji badges + perks.** GUIDES badges 🚨☎️🔍 (lines 75-77) and EmailCapture perks ✓📬🐾 (line 109). Purge.
- **[COO] P2 — Thin hub structure.** The hub is a flat link list with zero per-article teasers, no severity/urgency visual system, no category imagery beyond one band image (`vets-co:health-hero`). The Fish species hub at least uses cards. For clinical authority, a condition library should signal urgency (emergency vs chronic vs preventive) and offer a one-line "what this is" per entry. Effort **M**.
- **[COO] P2 — Species mismatch.** Metadata + copy claim "all species" / cats included, but HEALTH_ARTICLES is dog-dominant (a handful of feline entries). Either broaden content or tighten the claim. Trust/positioning nit.
- Detail pages (sampled across the cluster) are strong, sourced, and use `ArticleByline` with `reviewedBy="Editorial team"` (QC-safe, no fake DVM). Good.

## Surface 4 — Money page: Insurance funnel + reviews

**`apps/vets-co/src/app/reviews/best-pet-insurance/page.tsx` — Verdict: premium and conversion-ready.** ReviewCard + QuickPicks + ScoreMethodology + ItemList/Product schema, honest `reviewCount: 1` pattern, payout-behavior framing that genuinely differentiates from affiliate farms. Only nit: QuickPicks emoji 🏆⚡📋 (lines 78-81). **[COO] P2.**

**`apps/vets-co/src/app/(funnels)/pet-insurance/page.tsx` — Verdict: has a dead CTA.**
- **[Monetization] P0 — Cross-domain dead CTA.** The hero's primary CTA links to `https://dog.com/pet-insurance/quiz` (line 76) — an absolute URL to a domain with NO DNS live (per CLAUDE.md §13). On the single most commercial Vets surface, the top funnel CTA goes nowhere. This is a Monetization-lane file (COO must not edit `(funnels)/*`) but it's a launch-blocker for monetization. Route it to an on-domain destination or the quiz must exist locally.
- **[COO/Monetization] P1 — Emoji 🩺 in clinical-funnel eyebrow** (line 60). Same purge.
- Disclosure component is present and above the monetized surface (good, QC-compliant).

## Surface 5 — Tool: Insurance Reimbursement Estimator (`apps/vets-co/src/components/visual/InsuranceReimbursementEstimator.tsx`)

**Verdict: a real category-defining asset.** Genuine NAIC/NAPHIA-style math (premium − deductible − reimbursement% − annual cap → net benefit), proper `dollars()` formatting, sensible reimbursement/limit presets. Embedded live on the homepage AND on a standalone `/tools/insurance-reimbursement-estimator` page. This is exactly the high-intent, high-citation tool the GEO charter wants.
- **[Visual] P3** — It lives under `components/visual/` (Visual-lane). Confirm result-panel styling matches the premium tier of the homepage (the input shell is clean). No content issue.

---

# FISH.COM — aquarium-magazine voice

Brand promise: an aquarist's control center — problem-first triage + calculators + sourced species/disease library. The homepage and tools nail this. One flagship hub has a hard image failure.

## Surface 1 — Homepage (`apps/fish-com/src/app/page.tsx`)

**Verdict: premium and on-voice.** Full-bleed `fish-com:hero` (planted tank, real key — verified present) with teal scrim, Cormorant italic display, problem-first triage cards, live `VolumeCalculator` embedded, image panels using only real synced category keys (`category-setup`, `cornerstone-cycling`, `category-species`, `category-equipment`, `category-reviews` — all verified present). The page *deliberately* renders most-searched species as TEXT cards because the `species-thumb-*` keys failed to sync — a smart zero-placeholder choice on the homepage.

- **[COO] P3** — Featured-species TEXT cards are honest but a touch plain vs the image panels around them. Acceptable until thumbs sync; not a blocker.
- Nit **[Visual] P3** — Hero alt + scrim are good; confirm the planted-tank crop holds on ultra-wide where `16:9` source fills a `78vh` masthead.

## Surface 2 — Hub: Species (`apps/fish-com/src/app/species/page.tsx`)

**Verdict: P0 visual failure — this hub ships 8+ placeholder-paw image slots.** This is the most important finding in the review.

- **[Visual/COO] P0 — Featured grid renders missing-key placeholders.** The `FEATURED` array (lines 21-30) and the page-top index image use `fish-com:species-thumb-betta / -neon-tetra / -clownfish / -goldfish / -angelfish / -discus / -guppy / -oscar`. **I verified all 8 of these keys are ABSENT from `packages/ui/src/data/image-manifest.json`.** Per `StockImage.tsx` (lines 83-131), a missing key renders a brand-gradient box with a low-opacity **paw glyph** — a dog paw, on a *fish* site, 8 times, on the flagship species hub. This is the exact "placeholder paws" anti-pattern. Two fixes: **(a) [Visual]** sync the 8 thumb keys (Visual-lane, `sync-images.mjs`); **(b) [COO]** until they sync, convert this grid to the homepage's zero-placeholder TEXT-card treatment so no paw ships. Recommend doing (b) now (fast, COO) and (a) as the durable fix. Effort: (b) **S**, (a) **M** (Visual + image budget).
- **[COO] P1 — Inflated count claim.** Hub H1/metadata/trust copy say "200+ species" / "200+ profiles" (lines 8, 89-95, 145) but only ~43 species `page.tsx` files exist and the "All Fish Species" footer lists ~42. Claiming 200+ is a trust/EEAT liability and an AI-citation risk (verifiably false). Either build toward the number quietly or change copy to the real count ("40+ in-depth profiles, added weekly"). Effort **S**.
- **[COO] P1 — Dashed "200+ species / Added weekly" 🐠 card** (lines 142-148) — placeholder filler card with an emoji in the featured grid. Remove.
- **[COO] P2 — Dead-ish category filters.** The `CATEGORIES` chips link to `/species?type=freshwater&diff=beginner` etc. (lines 55-62). The page reads `dbSpecies` from Supabase but the query-param filters aren't wired to actually filter the rendered list — these chips likely land on the unfiltered hub. Either implement filtering or make them anchor/sub-hub links. Effort **M**.
- **[COO] P2 — Emoji email perks** 🐠🧪⚙️ (line 173). Purge.

## Surface 3 — Detail: Species (`apps/fish-com/src/app/species/betta-fish/page.tsx`)

**Verdict: genuinely premium editorial — the strongest single asset I reviewed on either site.** ~2,000 words of real, sourced husbandry (bowl myth, obligate-carnivore biology with named products, flare-training welfare protocol citing AVMA fish-welfare guidance, biotope/tannin detail, ammonia-tolerance nuance), 7-item FAQ with `answerText` for schema, Quick Stats sidebar, real `ArticleSourcesList` (Seriously Fish, FishBase, Asian Fisheries Science), proper `/go` monetization with disclosure above it. Uses the real `fish-com:cornerstone-species-betta` key (verified present). This is a Perplexity/AI-Overview citation magnet.

- **[COO] P2 — 🐠 author-avatar.** `authorAvatar: '🐠'` (line 116) — the one emoji on an otherwise museum-grade page. Swap for a line glyph or initials mark. Part of the global purge.
- **[COO] P3** — Verify the other ~42 species pages match this depth; if some are thinner templated stubs, they dilute the cluster. (Spot-audit recommended; this one is a model.)

## Surface 4 — Money page: Equipment reviews (`apps/fish-com/src/app/reviews/best-aquarium-heaters/page.tsx`)

**Verdict: premium and conversion-ready.** QuickPicks + ReviewCard (scores, specs, pros/cons, price), ScoreMethodology, CalloutBox, AffiliateDisclosure above the buy boxes, all CTAs via `/go/amazon-brand/...` (compliant), Product schema. Accuracy-first framing ("a heater that runs 6°F hot kills tropical fish") is the right premium-editorial angle.

- **[COO] P2 — QuickPicks emoji** 🏆⭐⚙️💰 (lines 39-42) and `badgeEmoji` on ReviewCards. Purge / swap for the rank badges.
- **[Monetization] P3** — Govee thermometer named as "recommended" (line 75) without a `/go` link — minor missed affiliate surface (Monetization lane).

## Surface 5 — Tool: Stocking Calculator (`apps/fish-com/src/app/tools/stocking-calculator/Calculator.tsx` + `_components/CalcShell.tsx`)

**Verdict: a real category-defining tool.** Surface-area stocking model (not the discredited inch-per-gallon rule — and it says so), filtration factor, tank-style factor, volume sanity cap, fresh/salt branching, converts to per-species counts. `CalcShell` field components are clean, accessible (`inputMode="decimal"`, focus-within border). 6 working calculators total. This is exactly the high-engagement, high-citation asset the charter prioritizes.
- No premium defects found. **[COO] P3** — confirm result panel has a "methodology / source" disclosure to match the citation-anchored brand promise (most do).

---

# TOP PREMIUM UPGRADES — VETS.CO (ranked)

1. **[Monetization] P0 — Fix the dead cross-domain funnel CTA.** `(funnels)/pet-insurance/page.tsx` line 76 links to `https://dog.com/pet-insurance/quiz` (no DNS live). Top CTA on the most commercial Vets page leads nowhere. Route on-domain. Effort **S**. (Monetization owns the file.)
2. **[COO] P1 — Health Library hub: replace machine-slug titles with editorial titles + add per-entry framing.** "Bloat GDV Dogs" → "Bloat & GDV in Dogs", etc. Biggest single content-quality lift on Vets. Effort **S**.
3. **[COO] P1 — Emoji-purge Vets interior chrome** (find-a-vet specialist cards 🚨🔬❤️…, health badges 🚨☎️🔍, insurance-funnel 🩺, review QuickPicks 🏆⚡📋, email perks). Swap to the homepage SVG icon system. Effort **M**.
4. **[Visual] P1 — Bring find-a-vet + state pages onto the integrated full-bleed hero pattern** (kill the flat-navy + separate-image-band layout). Effort **M**.
5. **[Carlo/IR] P1 — Decide the Find-a-Vet product question.** The flagship CTA's destination honestly hands users off-site. Re-frame as a "how to choose + verified directories" hub, or commit to a real listings layer. Strategic, not a COO fix.
6. **[COO] P2 — Differentiate the 50 programmatic state pages** (unique visual/data hook each) to avoid thin/duplicate suppression. Effort **M**.

# TOP PREMIUM UPGRADES — FISH.COM (ranked)

1. **[Visual/COO] P0 — Kill the 8 placeholder-PAW slots on the Species hub.** `species/page.tsx` `FEATURED` grid references 8 `fish-com:species-thumb-*` keys absent from the manifest → renders dog-paw placeholders on the flagship fish hub. COO fix now: convert grid to homepage's zero-placeholder TEXT cards (**S**). Visual durable fix: sync the 8 thumbs (**M**).
2. **[COO] P1 — Correct the "200+ species" claim** to the real count (~40+) across hub H1/metadata/trust copy. Verifiably-false claim = trust + AI-citation risk. Effort **S**.
3. **[COO] P1 — Remove the dashed "200+ / Added weekly" 🐠 filler card** from the species featured grid. Effort **XS**.
4. **[COO] P1 — Emoji-purge Fish interior chrome** (species `authorAvatar: '🐠'`, email perks 🐠🧪⚙️, review QuickPicks/badgeEmoji 🏆⭐⚙️💰, health-cluster emoji). Swap to the `ProblemIcon*` SVG vocabulary. Effort **M**.
5. **[COO] P2 — Wire or de-link the species category filter chips** (`?type=…&diff=…` currently don't filter the rendered list). Effort **M**.
6. **[COO] P3 — Spot-audit the ~42 species detail pages** against the betta-fish gold standard; upgrade any thin stubs so the cluster depth is uniform.

---

## What's genuinely premium already (don't touch)
- Both homepages — image-first mastheads, embedded live tools, real-key-only imagery, airtight trust posture.
- The editorial depth: betta-fish (Fish) and the condition/insurance articles (Vets) are real AI-citation magnets.
- Both money pages' review systems (ReviewCard/QuickPicks/ScoreMethodology/schema, `/go` compliance, disclosures above the fold).
- All the calculators — real domain math, not toys. The Vets reimbursement estimator and Fish stocking calculator are category-defining.

## Honest bottom line
Neither site is "templated" at the content layer — the writing and tools are better than most $1M+ niche sites. What keeps them from *feeling* like $10M assets on click-through is (1) the emoji/chrome inconsistency between the rebuilt homepages and the un-rebuilt interiors, (2) two specific image/claim failures on the Fish Species hub, (3) the Vets Health hub reading like a sitemap, and (4) one dead money CTA on Vets. The P0/P1 list above is mostly **COO-shippable S/M effort** plus two Visual syncs and one Monetization fix — i.e., the premium gap here is closable fast.
