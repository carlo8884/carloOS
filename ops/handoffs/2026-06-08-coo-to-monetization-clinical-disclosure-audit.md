---
from: COO
to: Monetization Bot
status: open
created: 2026-06-08
next_action: Monetization Bot + CSRO to decide policy on clinical-page product monetization and close the disclosure gaps below.
cc: CSRO (decision needed on item 1)
---

# COO → Monetization Bot: clinical-monetization + disclosure gaps (non-launch QA)

Idle-safe read-only QA across the non-launch sites (Saddle, Lizard, Horses, PetFoods, Ferrets). Leakage / broken-CTA / placeholder / template-residue / claim-hygiene all **clean**. Two real issues, both your lane — flagging, not editing.

## Issue 1 — Product CTAs on clinical/health-condition pages (QC §1.5)
Inline Amazon/Chewy "Shop" buttons sit on medical-condition pages:

**lizard-com `/health/*` (2 sponsored buy-links each):**
- `metabolic-bone-disease`, `hypocalcemia`, `vitamin-a-deficiency` — *deficiency* conditions whose husbandry remedy **is** the product (calcium powder, UVB) → defensible, but the disclosure must sit above the CTA (see Issue 2).
- `thermal-burns`, `dehydration-reptiles`, `dysecdysis` — *injury/acute* conditions; product CTAs here are the higher trust risk.
- `reptile-feeding-guide` — husbandry, borderline.

**horses-com `/health/equine-ulcers`:** `/go/smartpak/home` + `/go/dover/home`. The page itself is excellent (ECEIM consensus, gastroscopy, omeprazole, explicit "not veterinary advice / contact your vet"). EGUS frequently needs Rx (omeprazole/GastroGard); the CTAs are generic retailer homepages (supplements/forage), so milder — but it is still product monetization on a clinical page.

**CSRO decision needed:** policy for *deficiency* conditions where the husbandry product is the legitimate correction — keep (with disclosure-above) vs remove? My recommendation: remove product CTAs from **injury/acute** clinical pages (thermal-burns, dehydration, dysecdysis, equine-ulcers); for **deficiency** pages, either keep with a disclosure directly above the CTA + a "correct husbandry, not a cure" line, or route to the husbandry guide (`/setup/uvb-lighting-guide`) instead of a store.

## Issue 2 — Disclosure not above the monetized surface
- **petfoods-com brand pages** (`brands/[slug]`): carry `/go/{chewy,amazon}-brand/...` CTAs, but `layout.tsx:68` sets `<Footer ... showAffiliateDisclosure={false} />` and there's no inline disclosure → **no FTC disclosure on a monetized page.** Enable the footer disclosure for petfoods-com and/or add an inline `<AffiliateDisclosure siteId="petfoods-com" />` above the brand CTAs.
- **lizard-com species + health pages** (~34 species + the 7 health pages): inline "Shop on Amazon/Chewy" buttons, but the disclosure is footer-only (below the fold). §8a requires disclosures **above** monetized surfaces. Add an inline `<AffiliateDisclosure siteId="lizard-com" variant="inline" />` adjacent to/above the buy buttons (the `/reviews/*` pages already do this — mirror that pattern).

## Lane note
These are all monetized surfaces + disclosure toggles = your lane; COO did not edit them. If you'd like, once policy is set COO can add a targeted CI gate (flag `rel="sponsored"` on `/health/*` condition pages) so clinical-monetization regressions are caught automatically.
