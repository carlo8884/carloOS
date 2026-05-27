# Launch-Readiness Assessment — CarloOS Portfolio
**Auditor:** Agent 2 (QC)
**Date:** 2026-05-27
**State audited:** `agent2/pr3a-trust-badges` (= `main` + trust-badge fixes from PR #3a)
**Sites:** Dog.com (priority), Vets.co (priority), Saddle.com (priority), Fish.com, Lizard.com

---

## Verdict: NOT READY FOR REAL-DOMAIN LAUNCH

A soft launch today would damage the brands. The portfolio looks like a sophisticated content scaffold with fake stats, broken promises, non-functional monetization, and AI-generated polish that won't survive 10 minutes of buyer scrutiny. Premium domains amplify the gap between brand expectation and actual product — Dog.com / Vets.co / Saddle.com all carry a brand-value liability when visitors see this state.

**Three brutal truths:**

1. **The sites lie on their own homepages.** "200+ breed profiles" (real: 30). "500+ products reviewed" (real: 16 review pages). "100+ sourced articles" on vets.co (real: 36 total pages including legal). A buyer evaluating Dog.com sees these claims, clicks through, and sees them collapse instantly.
2. **Every "Find the Right Vet" CTA on Vets.co lands on an educational article, not a directory.** There is no ZIP lookup, no map, no search. The brand-defining promise is unfulfilled.
3. **Monetization earns $0 if launched today.** Amazon affiliate tag is a placeholder (`carloOS-20`), the helper functions aren't wired into review CTAs, every email-capture submission returns HTTP 503, `/api/checkout` is a stub. The "Best Pet Insurance" review pages are loss leaders with no commission attached.

The trust cleanup (PR #2) and SEO work (PR #4) and badge sweep (PR #3a) are real progress — but they're polishing an unlaunched skeleton.

---

## Top 10 Blockers (must fix before any real-domain launch)

### #1 [BLOCKER] Fake homepage stats

| Site | Claim | Reality | Off by |
|---|---|---|---|
| dog-com hero badge | "200+ Breed Profiles" | 30 breed pages | 6.7× |
| dog-com hero badge | "500+ Products Reviewed" | ~64 product entries across 16 review pages | 7.8× |
| dog-com hero badge | "100+ Sourced Articles" | 73 health/nutrition/training articles | borderline OK (10% short) |
| vets-co hero stats | "100+ Sourced Articles" | 36 total pages (incl. legal) | 2.8× |
| vets-co hero stats | "8 Specialty Types" | accurate (8 cards exist, all link to /find-a-vet) | OK |
| vets-co hero stats | "All Breeds Covered" | 4 breed-health pages | catastrophic |
| lizard-com hero stats | "50+ Species Guides" | 16 species pages | 3.1× |
| lizard-com hero stats | "Vet Reviewed Health" | no DVM bylines anywhere (PR #2 batch 1 removed them) | fabricated |
| lizard-com hero stats | "Meter Tested UVB Data" | no in-house meter testing per editorial-standards | fabricated |
| lizard-com trust bar | "50+ species profiles" | 16 actual | 3.1× |
| saddle-com hero stats | "30+ Brands Profiled" (post-PR3a) | ~20 brands across 11 reviews | 1.5× (close but not honest) |

**Why it damages legitimacy:** Every domain expert's first instinct is "claim → click → verify." When the claim is off by 7×, the user concludes the entire site is generated content. This is the single biggest credibility killer.

**Fix:** Replace fabricated counts with honest, exact, and lower-anchored numbers (e.g., "30 detailed breed guides"). Or remove the badges entirely.

### #2 [BLOCKER] Fabricated authority still present after PR #2 + PR #3a

Vets.co is saturated with credentialed-review claims that PR #3a didn't reach (PR #3a swept badges; this is body copy/metadata/H1):

- `vets-co/page.tsx` line 157: "We compared all three [telehealth services] on availability, credentials, and cost." — implies in-house comparison
- `vets-co/reviews/page.tsx` line 5 (metadata description) + line 17 (hero H2): "Pet product reviews from a veterinarian's perspective" / "Ranked from a veterinarian's perspective" — implies credentialed review
- `vets-co/reviews/best-pet-insurance/page.tsx` lines 8, 16: title + H1 "Best Pet Insurance 2025 — A Veterinarian's Perspective"
- `vets-co/telehealth/page.tsx` line 7: schema description "Vetster, AskVet, and Chewy Connect compared by veterinarians."
- `vets-co/telehealth/page.tsx` line 22: "We compared the major platforms on credential requirements, wait times, and consultation quality."
- `dog-com/reviews/best-pet-insurance/page.tsx` line 54: H1 "Best Pet Insurance 2025 — Ranked by Vets & Owners"
- `dog-com/reviews/best-dry-dog-food/page.tsx` lines 8, 16, 49: title + H1 "Best Dry Dog Food 2025 — Ranked by a Veterinary Nutritionist"

QC-STANDARDS § 1.1 violation. Every site's editorial-standards page says verbatim "We don't claim hands-on testing we haven't done" — these H1s/metadata directly contradict that page.

**Why it damages legitimacy:** Vets.co with "Ranked by Vets" claims accepting affiliate commissions = FTC truth-in-advertising exposure. This is also the exact pattern PR #2 batch 1 swept on a different layer (DVM bylines) — leaving it on H1s/metadata is incoherent.

### #3 [BLOCKER] Image desert — 313 of 325 pages have zero images

| Site | Pages with any in-body image | Pages without |
|---|---|---|
| dog-com | 7 / 128 (5%) | 121 |
| vets-co | 1 / 36 (3%) | 35 |
| saddle-com | 2 / 40 (5%) | 38 |
| fish-com | 2 / 72 | 70 |
| lizard-com | 2 / 49 | 47 |
| **Total** | **14 / 325** | **311** |

All 14 images that DO exist are Unsplash stock photos (8 unique URLs). Every detail page (breed guide, health article, review) is a wall of text.

**Why it damages legitimacy:** A buyer arriving from a Google search lands on a 5000-word health article with zero illustrations. Compared to Dogster, AKC, Chewy's blog — this site looks like a content farm or an AI-generated SEO scrape. Image absence is the single biggest visual "AI-generated" tell.

**Fix:** Source legitimate stock or commissioned imagery for at least the top 50 traffic pages per site. Real first-party photos for the homepage hero and breed/species detail pages. Even Unsplash + per-page selection (not the same 8 photos reused) would be a major improvement.

### #4 [BLOCKER] "Find the Right Vet" — the brand promise — doesn't work

- `vets-co/page.tsx` hero: H1 "Find the Right Vet. Get Trusted Answers."
- Primary CTA: "Find a Specialist →" → `/find-a-vet`
- 8 specialist-type cards (Neurology, Cardiology, etc.) → all link to `/find-a-vet`
- `/find-a-vet` page has **no ZIP input, no map, no search form, no database lookup**
- It's a ~2,000-word educational article explaining what board certification means

Same on `dog-com/find-a-vet`.

**Why it damages legitimacy:** A user types "find emergency vet near me" → lands on Vets.co → sees "Find a Specialist →" → clicks → reads an essay about what specialists are. They leave. The domain's reason for existing — to deliver on the search intent its name implies — is unfulfilled.

**Fix:** Either build a real directory (geo + ZIP + specialty filters) or rename/reposition the CTA. Going live with the current state would be brand-damaging.

### #5 [BLOCKER] All monetization endpoints are stubs

| Surface | Status |
|---|---|
| `/api/subscribe` (all 5 sites) | Returns HTTP 503 — every newsletter signup form errors |
| `/api/search` (all 5 sites) | Returns `{ results: [] }` — search inputs always show empty |
| `/api/analytics` (all 5 sites) | Stub — no event tracking |
| `/api/checkout` (dog-com) | Stub — Stripe membership flow non-functional |
| Amazon affiliate tag | `carloOS-20` (placeholder per `packages/config/affiliate.ts:23` comment "These are placeholders — get real tags") |
| Chewy affiliate tag | `carloOS` (placeholder) |
| ReviewCard CTAs (e.g. `best-dog-beds`) | Use plain `https://chewy.com/s?query=big+barker` — **no affiliate tag attached, no commission earned** |
| `affiliate.ts` helper functions (`amazonSearchLink`, `chewyLink`) | Exist but **not called** by any review page |

**Why it damages legitimacy:** A reviewer publishes "Best Pet Insurance 2025" with affiliate links. A user clicks → buys. The site earns nothing. Worse: the FTC affiliate disclosure on every page implies the site IS earning commissions. The disclosure is technically pre-emptive but the actual link mechanics don't match the disclosed model.

**Fix:** Real Amazon/Chewy/Trupanion affiliate IDs in `packages/config/affiliate.ts`. Wire ReviewCard CTAs to call `amazonSearchLink()` / `chewyLink()` helpers. Hook up Mailchimp (or any real ESP) to `/api/subscribe`. Build real search (Supabase full-text via `searchPosts`).

### #6 [BLOCKER] Hero category-card destinations 404

- `dog-com` homepage `HEALTH_CATEGORIES` array (lines 60-69) — 8 cards displayed in the "Browse Health by Category" section
- All 8 cards link to: `/health/symptoms`, `/health/nutrition`, `/health/preventive`, `/health/senior`, `/health/breeds`, `/health/dental`, `/health/weight`, `/health/mental`
- **None of these routes exist.** The `/health/[slug]` dynamic route is a `notFound()` stub.

**8 of 8 prominent homepage CTAs lead to a 404 page.**

Why my prior link audits missed it: my checker treated `/health/[slug]` as a valid catch-all. It isn't — it's `export default function SlugPage() { notFound() }`. Same trap caught Agent 1's PR #2 batch 7 link-check.

Strict link re-scan (treating notFound() stubs as broken):
- dog-com: 8 broken (the homepage HEALTH_CATEGORIES)
- vets-co: 8 broken (RelatedLinks pointing at non-existent /health/dog-arthritis, /health/dog-diabetes etc. — they exist on dog-com but not vets-co; cross-site link confusion)
- saddle-com: 0 broken ✓
- fish-com: 0 broken ✓
- lizard-com: 2 broken (`/species/blue-tongue-skink` typo for `blue-tongued-skink`; `/health/uvb-lighting-guide` should be `/setup/uvb-lighting-guide`)

**Fix:** Repoint the 8 dog-com HEALTH_CATEGORIES hrefs to real routes (`/health/dog-symptoms-guide`, `/nutrition`, `/health/dog-vaccinations`, `/health/senior-dog-care`, `/breeds`, `/health/dog-dental-care`, `/nutrition/weight-management`, `/health/dog-anxiety`). Fix the 8 vets-co cross-site RelatedLinks (either point to actual vets-co pages or create them). Fix lizard typo + path.

### #7 [BLOCKER] Brand fonts not loaded — sites render in system fallback

- `packages/config/index.ts` carefully specifies per-site fonts: Playfair Display, Cormorant Garamond, Bodoni Moda, Zilla Slab, Libre Baskerville
- `apps/*/src/app/globals.css` references `var(--font-playfair)`, `var(--font-dm-sans)`, etc.
- **No layout.tsx imports `next/font/google`** to actually load these fonts and inject the CSS variables
- Result: all 5 sites render with `Georgia, serif` (display) and `system-ui, sans-serif` (body) fallbacks

The custom typography that defines each brand's voice — Playfair's editorial gravitas for Dog.com, Bodoni's luxury feel for Saddle.com, Libre Baskerville's medical authority for Vets.co — **renders as Georgia and Helvetica.**

**Why it damages legitimacy:** This is the single most visible "unfinished" signal. Premium domains rendering in system fonts read as template/spam.

**Fix:** Add `next/font/google` imports in each app's `layout.tsx`, set CSS variables on `<html>` className.

### #8 [BLOCKER] No favicons, no app icons

- `apps/*/src/app/` — no `favicon.ico`, no `icon.tsx`, no `apple-icon.tsx`
- `apps/*/public/` — empty / not present
- Browsers show generic globe icon in tab + bookmark
- iOS "Add to Home Screen" gets a screenshot of the page, not a brand mark

**Why it damages legitimacy:** First credibility signal in a browser tab. Absence reads as "demo site."

**Fix:** Per-site `icon.tsx` (Next.js convention — generates favicon dynamically) using the site's `primary` color from `packages/config/index.ts`. Plus `apple-icon.tsx` and `og-default.jpg` per site.

### #9 [HIGH] Trust-breaking soft puffery in body copy

Despite PR #2 batch 5 (Pessoa) and PR #3a, remaining unsourced superlatives in product/breed content:

- `dog-com/reviews/best-dry-dog-food/page.tsx:172`: "Hill's Science Diet ... is the most prescribed therapeutic nutrition in veterinary medicine" — no source
- `dog-com/reviews/best-dental-chews/page.tsx:40`: pros list "Most prescribed by vets"
- `dog-com/reviews/best-joint-supplements/page.tsx:132`: "most widely prescribed glucosamine-chondroitin supplement by veterinarians" — no source
- `dog-com/reviews/best-dog-harnesses/page.tsx:43`: "most widely recommended front-clip harness by trainers and veterinary behaviorists" — no source
- `dog-com/breeds/golden-retriever/page.tsx:102`: "unmatched combination of temperament, trainability, and adaptability"
- `dog-com/health/german-shepherd-health/page.tsx:65`: "intelligence, drive, and loyalty are unmatched"
- `saddle-com/reviews/stubben-saddle-review/page.tsx:81` + `best-english-saddles/page.tsx:41`: "Best-in-class German leather" (×2)

**Why it damages legitimacy:** Independently each is mild, but a buyer evaluating "is this an honest review site or a content farm?" finds these on the same pages that already have editorial-standards disclaimers. Inconsistency = distrust.

### #10 [HIGH] Featured content links to URLs that don't exist (cross-site portfolio confusion)

vets-co has `RelatedLinks` on 8 health pages pointing at `/health/dog-arthritis`, `/health/dog-diabetes`, `/health/hypothyroidism`, `/health/dog-vomiting`, `/health/dog-bloat-gvd`, `/health/dog-diarrhea`. Those pages exist on **dog-com**, not vets-co. The RelatedLinks render as clickable buttons → user clicks → 404.

This is the cross-portfolio-link issue: the team is thinking of dog.com and vets.co as a single property, but the apps are separate Next.js builds without cross-domain link resolution.

**Fix:** Either (a) point cross-site links at full URLs (`https://dog.com/health/dog-arthritis`), or (b) replicate the most-linked content on vets.co, or (c) remove the cross-property links from RelatedLinks blocks.

---

## What most damages perceived legitimacy (ranked)

1. **Fake stats on the hero** (Blocker #1) — instant credibility killer for anyone who clicks through
2. **System-font rendering** (Blocker #7) — visible signal of "unfinished" before reading a single word
3. **Image desert** (Blocker #3) — the AI-generated-content tell
4. **Broken homepage CTAs** (Blockers #4 and #6) — promise → click → 404 / educational article instead of directory
5. **Affiliate links earning $0** (Blocker #5) — not visible to the user but invisible-to-revenue
6. **"Ranked by a Veterinarian" / "By veterinarians"** (Blocker #2) — direct FTC exposure on Vets.co
7. **No favicon** (Blocker #8) — tab and bookmark signal

---

## Site-by-Site Tier

| Site | Tier | Reason |
|---|---|---|
| **Saddle.com** | Closest to launchable | Sitemap & content well-scoped; 40 pages all functional. Trust badges cleaned by PR #3a. Still: needs real images, affiliate IDs, font loading, favicon. Stat block fixed by PR #3a. |
| **Lizard.com** | Mid-tier | Internally consistent topic. 16 species is adequate. Needs "50+ species" hero fix, real images, font loading. Two broken cross-link typos. |
| **Fish.com** | Mid-tier | 72 pages — most content of any non-flagship site. Already has good sitemap (PR #4). Same monetization/image/font issues. |
| **Vets.co** | NOT launchable | Brand promise (find a vet) doesn't work. Heaviest fake-credentialed-review pattern. 1 image in 36 pages. Hero CTAs lead to dead ends. This domain would damage the brand most by launching as-is. |
| **Dog.com** | NOT launchable as flagship | Flagship label demands flagship execution. Hero claims "200+ Breeds" / "500+ Products" — neither true. 121 of 128 pages have zero images. 8 broken HEALTH_CATEGORIES CTAs on the homepage. The premium-domain expectation gap is largest here. |

---

## What I'd ship before any real-domain launch (minimum viable list)

### Pre-launch must-have

1. Fix fake hero stats on all 5 sites (or remove the badge sections)
2. Sweep remaining vets-co "ranked by veterinarians" claims (PR-3b candidate)
3. Wire `next/font/google` in all 5 app `layout.tsx` files
4. Add `icon.tsx` favicon per site (Next.js convention, ~10 lines each)
5. Fix dog-com HEALTH_CATEGORIES href targets
6. Fix vets-co cross-site `RelatedLinks` (option c: drop, fastest)
7. Real Amazon/Chewy affiliate tags + wire ReviewCard CTAs through `affiliateHref()`
8. Hook `/api/subscribe` to Mailchimp (or hide email forms until ready)
9. Fix lizard-com 2 broken hrefs
10. Either build `/find-a-vet` as a real directory OR change the H1 + CTAs to match what the page actually delivers (educational reference)

### Pre-launch should-have

- At least one hero image per non-/page (so the article body isn't pure text)
- 3-5 illustrative images on the top 20 traffic pages per site
- Real `/api/search` against Supabase full-text (the `searchPosts` function exists in `@carloOS/db`)
- `/api/analytics` event capture (or remove the tracking events that fire to it)
- Tone-trim the 6 remaining "most prescribed", "unmatched", "best-in-class" superlatives in body copy
- Verify all 5 OG default images exist and are properly sized

### Post-launch acceptable

- Image expansion to all 325 pages (content sprint)
- `/api/checkout` Stripe membership wiring (if membership is a real offering)
- Migrate 40 review pages from inline `<nav>` breadcrumbs to shared `<Breadcrumb>` component (BreadcrumbList schema)
- Lizard parasites duplicate-slug canonical fix
- Cross-property footer block ("Sister sites: Dog.com · Vets.co · ...")

---

## Soft-launch readiness specifically

Soft launch (limited audience, controlled traffic) **could work** for fish.com and lizard.com TODAY if you:
- Hide email forms (they 503)
- Remove or fix the hero fake-stats badges
- Add favicons + load fonts
- Accept that affiliate revenue will be zero until tags land

Soft launch for **saddle.com** is possible if PR #3a merges + the above.

Soft launch for **dog.com** or **vets.co** is NOT recommended. Both lead with promises (200+ breeds / find a vet) the sites cannot keep. A soft launch with insider traffic might tolerate it; any organic-search traffic from a "find a vet near me" or "best dog food" query would bounce badly and start accumulating negative brand signals.

---

## What I did NOT verify

- Visual rendering in an actual browser (static-scan only — could not screenshot)
- Mobile breakpoints in a real viewport
- Real GA4 firing (no live key configured)
- Vercel preview deploys (no access to deploy targets)
- Stripe sandbox flow (stub returns 503)
- Mailchimp signup → confirmation email (stub returns 503)
- Cross-browser rendering (no automation runner used)
- Speed metrics (no Lighthouse run)

These would each likely surface additional findings; the assessment above is the floor, not the ceiling.

End of report.
