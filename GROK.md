# GROK.md — CEO lane log (preview only)

## 2026-10-01 ~15:03 PDT hour
1. Fish.com homepage visual quality — hero still image-first, teal/green wash, dual CTAs, subject-forward planted aquarium matching dog.com. Species, tank-planning, water-safety, equipment, calculator cards, triage, how-we-work, math-strip, and under-hero start band remain photo-led. The product-guide band listed seven real review pages in prose plus one photo card; those pages are now photo chips using existing credited thumbs (equipment, glossary, clownfish, discus, cycling test kit, betta, planted). Hero credit left as the photographer's real display name (ק. פ.).
2. Dog.com /join/pro + /trainers claimed-directory shells present and non-thin: apply form + claimed-only disclaimer; trainers empty-by-design with no fake listings.
3. Horses.com /inquire shared offer form intact and consistent with dog/fish InquireOfferScreen. Homepage discipline chips, start-here band, calculator shortcuts, and body-condition aside stay photo-led. No homepage for-sale banner.
4. Shared Footer inquire left alone.

One real merged improvement: Fish.com product-guide band now links the seven existing review pages with manifest thumbs that already have photographer credits, so that row matches the rest of the photo-led homepage. No new images, no doses, no sitemap.

Preview URLs (Vercel):
- https://carlo-os-fish-com.vercel.app/
- https://dog-com-three.vercel.app/join/pro
- https://dog-com-three.vercel.app/trainers
- https://horses-com.vercel.app/inquire
- https://horses-com.vercel.app/

Policy held: no DNS, no fake trainers/DVMs/doses, no for-sale banners on dog/fish/horses, no sitemap regen.

Carlo offline until next week. Recap logged here + email to carlo@tabibi.com.

---

## 2026-10-01 ~14:18 PDT hour
1. Fish.com homepage visual quality — hero still image-first, teal/green wash, dual CTAs, subject-forward planted aquarium matching dog.com. Species, tank-planning, water-safety, equipment, calculator cards, triage, product-guide, how-we-work, math-strip, and under-hero start band remain photo-led. Hero credit left as the photographer's real display name (ק. פ.).
2. Dog.com /join/pro + /trainers claimed-directory shells present and non-thin: apply form + claimed-only disclaimer; trainers empty-by-design with no fake listings.
3. Horses.com /inquire shared offer form intact and consistent with dog/fish InquireOfferScreen. Homepage discipline chips stay photo-led. The start-here band under the hero was text buttons; now photo chips with existing credited thumbs (Wolfgang Hasselmann hero, saddle-fit thumb already used on dressage). No homepage for-sale banner. Copy and scoring left unchanged — no new doses.
4. Shared Footer inquire left alone.

One real merged improvement: Horses.com start-here band now uses existing manifest thumbs that already have photographer credits, so the first band after the hero matches the discipline chips and the fish.com start band. No new images, no doses, no sitemap.

Preview URLs (Vercel):
- https://carlo-os-fish-com.vercel.app/
- https://dog-com-three.vercel.app/join/pro
- https://dog-com-three.vercel.app/trainers
- https://horses-com.vercel.app/inquire
- https://horses-com.vercel.app/

Policy held: no DNS, no fake trainers/DVMs/doses, no for-sale banners on dog/fish/horses, no sitemap regen.

Carlo offline until next week. Recap logged here + email to carlo@tabibi.com.

---

## Currently underway

* Priority 1 this hour: Fish.com product-guide chips merged. Hero left alone.
* Dog /join/pro and /trainers shells left alone (claimed-only, no fake listings).
* Horses homepage and /inquire left alone (already consistent).
* Shared footer inquire left alone.

## Test and deployment status

* Preview SSO-gated; production dog pages confirmed without SSO historically.
* Production pattern: *-com-carlo-tabibi-s-projects.vercel.app / stable review URLs (dog-com-three.vercel.app, carlo-os-fish-com.vercel.app, horses-com.vercel.app).
* Dog / Fish / Horses production READY on latest main; Dog homepage client residual resolved (confirmed ~18:11 PDT Aug 31 through ~20:08 PDT Sep 2).

## Next planned priority

1. Continue hourly visual QA; ship only if a clean one-delta improvement is isolated.
2. Shared footer inquire already exists; leave alone.
3. Do not regenerate sitemaps. Do not point DNS. Do not invent trainers/DVMs/doses or for-sale banners.

## Carlo-only blockers

1. Confirm Network Solutions login; do not point DNS until the three homepages are ready.
2. Amazon Associates tag already on Vercel as AFF_AMAZON_TAG .
3. Optional: Chewy / Impact applications.
4. Rotate any Vercel token that was ever pasted in a chat.
5. Confirm NEXT_PUBLIC_GA_MEASUREMENT_ID=G-TZBPLTVLHQ stays on dog-com.
6. Gmail connector scopes available (create draft / send).

## Live policy

* First flip next week, if pages look right: dog.com then fish.com then horses.com. vets.co after dog.
* No homepage for-sale banners. eftyUrl unset on dog/fish.
