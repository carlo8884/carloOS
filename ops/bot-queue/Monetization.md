---
owner: Monetization Bot
maintainer: Monetization Bot updates after each pass; COO/CSRO may file new items.
created: 2026-05-31
last_updated: 2026-05-31
---

# Monetization Bot — work queue

Top of file = highest priority. Bot pops from the top, executes, and moves the entry to the "Completed" section with the merged PR link.

## Active

### dir-019 follow-up — vets-co telehealth ReviewCards (3 untracked URLs)
- **Status:** open — needs policy decision, not mechanical fix
- **Files:** `apps/vets-co/src/app/telehealth/page.tsx` (Vetster, AskVet, Chewy Connect ReviewCards)
- **What:** 3 ReviewCards reference `ctaAffiliateProgram` keys (`vetster`, `askvet`, `chewy`) that are NOT registered in `apps/vets-co/src/data/affiliate-routes.ts`. Their ctaHref is a bare vendor homepage — bypasses /go, untracked.
- **Block:** policy §5 vets-co allow-list = pet insurance ONLY. Adding telehealth vendors requires §5 amendment + Carlo approval.
- **Decision options:**
  - (a) **Amend §5** to allow telehealth (Vetster, AskVet, Chewy Connect) on vets-co — adds telehealth revenue surface, expands allow-list
  - (b) **Remove the 3 ReviewCards** from the telehealth page — keeps vets-co insurance-only per §5; lose the telehealth conversion surface entirely
  - (c) **Convert to informational links** (drop `ctaAffiliateProgram`/`ctaHref`-as-affiliate; just outbound text links) — keeps the page useful, no monetization
- **Recommended:** (a) — telehealth has real owner intent and Vetster + AskVet both run affiliate programs. Needs Carlo §5 amendment.
- **Owner:** CSRO/Carlo for policy call, then Monetization Bot to wire.

### dir-019 follow-up — horses-com + saddle-com brand-page disclosure audit (42 warnings)
- **Status:** open — needs read, not necessarily a fix
- **What:** 42 affiliate-bearing pages flagged by `affiliate-link-integrity.mjs` as having no in-page `AffiliateDisclosure` component. Footer-level `showAffiliateDisclosure` is enabled on all 6 affected sites, which QC §3.2 accepts.
- **Decision:** confirm footer disclosure is sufficient OR retrofit inline `AffiliateDisclosure` to each of the 42 pages.
- **Recommended:** confirm footer suffices (existing portfolio pattern). If we want above-fold inline disclosures on review pages going forward, that's a new directive — file separately.

## Completed (latest first)

### ✅ dir-019 — untracked-link sweep (101 → 3 untracked)
- **Merged:** PR (see commit history) 2026-05-31
- **What shipped:**
  - Added `amazon-brand` + `chewy-brand` search routes to `apps/dog-com/src/data/affiliate-routes.ts` (parity with fish/lizard/saddle/petfood/petfoods)
  - Added `amazon-brand` + `chewy-brand` search routes to `apps/horses-com/src/data/affiliate-routes.ts` (parity with the other equestrian site)
  - Converted 98 untracked `ctaHref="https://..."` values across 37 pages on dog-com (15 pages), saddle-com (12), horses-com (3), lizard-com (2), fish-com (1), petfood-com (1 — petfoods already clean), ferret-com (2 — exercise + aging-ferret-care leftovers), petfoods-com (1) to `/go/<vendor>/<sku>?s=<page-slug>` routes
  - URL transformation rules:
    - `amazon.com/s?k=X` → `/go/amazon-brand/X?s=<slug>`
    - `chewy.com/s?query=X` → `/go/chewy-brand/X?s=<slug>`
    - `chewy.com/<brand>` → `/go/chewy-brand/<brand>?s=<slug>`
    - `smartpakequine.com/(ps|pt|p|s)/X` → `/go/smartpak/X?s=<slug>` (registered vendor)
    - Vendor homepages with affiliate program → `/go/<vendor>/home?s=<slug>` (trupanion, healthy-paws, embrace, figo, dover, schneider, ridingwarehouse, marshall)
    - Vendor homepages WITHOUT affiliate program → `/go/amazon-brand/<descriptive-search>?s=<slug>` (stubben, pessoa, bates, collegiate, martin, circle-y, billy-cook, tucci, konig, platinum-performance, ker, equithrive, standlee, thebiodude, animalplastics, aquariumcoop, impactdogcrates, ellevetsciences)
- **Result:** `affiliate-link-integrity.mjs` — 0 dead links ✓; 3 untracked remaining (all vets-co/telehealth, see open item above)
- **Why it matters:** Amazon Associates is LIVE → 98 CTAs that previously dropped the tracking tag now resolve through `/go/` and substitute the env var → real attribution on day 1

### ✅ dir-009 — Ferret.com monetization surface
- **Merged:** PR #253 (2026-05-31)
- **What shipped:** 6 Ferret.com pages monetized; `/go/` routing fix on all CTAs; supportive-care framing on insulinoma + adrenal-disease pages with FTC disclosure above fold; Oxbow Carnivore Care (insulinoma) and ferret fleece sleep sack (adrenal-disease) ReviewCards added

### ✅ dir-017 — Dog.com DNA testing affiliate vendor registration
- **Merged:** Verified done on main (PR #240 + follow-ups)
- **What shipped:** `embark`, `wisdom-panel`, `basepaws` registered in `apps/dog-com/src/data/affiliate-routes.ts`; all 3 DNA-page CTAs resolve through `/go/`

### ✅ horses-com saddle-fit-basics /go-routing fix
- **Merged:** PR #258 (2026-05-31)
- **What shipped:** 2 ReviewCard `ctaHref` values on `/guides/saddle-fit-basics` swapped from `https://www.smartpakequine.com/` → `/go/smartpak/<sku>?s=guides-saddle-fit-basics`
