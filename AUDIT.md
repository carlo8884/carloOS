# CarloOS SEO / Internal Linking Audit

**Audit date:** 2026-05-27
**Branch:** `claude/carloOS-internal-linking-audit-1nrhH` (Agent 2)
**Sibling branch:** `claude/remove-fake-authority-0WY61` (Agent 1 — trust/legal cleanup, broken-link sweep)
**Methodology:** Static scan of all 309 page.tsx files, route directory enumeration, JSX/object-literal href extraction, metadata field parsing.

---

## TL;DR — What's Already Fixed by Agent 1

Agent 1's branch has resolved the entire broken-link surface:

- **0 broken internal links** across all 5 apps (verified via independent re-scan against Agent 1's branch)
- Repaired `packages/config/index.ts` nav and footer entries (24+ broken routes fixed)
- Added missing legal pages (`/legal/privacy-policy`, `/legal/terms`, `/legal/affiliate-disclosure`) and `/editorial-standards` for the 4 smaller sites
- Repointed dead breadcrumb crumbs on health/breeds/guides intermediate levels
- Footer affiliate disclosure copy softened
- `packages/ui/src/components/Breadcrumb.tsx` widened to allow non-clickable intermediate crumbs

**Conclusion:** Do not duplicate broken-link work. The remaining problems are in different domains.

---

## What Agent 2 Shipped This Branch

Six files, scoped narrowly to avoid Agent 1's diff:

| File | Change | Reason |
|---|---|---|
| `apps/dog-com/src/app/robots.ts` | Removed `disallow: /legal/affiliate-disclosure` | Agent 1 created the page; this rule would have prevented Google from crawling the disclosure |
| `apps/dog-com/src/app/sitemap.ts` | Expanded from 41 → ~128 URLs | Was missing all 14 nutrition, 17 training, and 16 review detail pages |
| `apps/fish-com/src/app/sitemap.ts` | Expanded from 4 → ~68 URLs | Was a 4-line stub covering 5.7% of the site |
| `apps/lizard-com/src/app/sitemap.ts` | Expanded from 4 → ~45 URLs | Stub, and the `/health` hub it referenced doesn't exist as a route |
| `apps/saddle-com/src/app/sitemap.ts` | Expanded from 4 → ~36 URLs | Stub, and referenced 2 non-existent hubs: `/health` and `/setup` |
| `apps/vets-co/src/app/sitemap.ts` | Expanded from 4 → ~32 URLs | Stub, and referenced non-existent `/setup` hub |

**Build:** `npx turbo build` → 5/5 sites green (43.9s).
**Overlap risk with Agent 1:** none — `sitemap.ts` and `robots.ts` files are not in Agent 1's diff.

---

## Prioritized Backlog (Not Shipped — Needs Decisions)

### 🔴 P0 — High-impact SEO bugs

#### 1. Duplicate site suffix on 286 page `<title>` tags

`packages/ui/src/components/SEOHead.tsx::buildMetadata()` appends ` | {siteName}` to the title. But 286 of 320 content pages already include `| Dog.com` (or equivalent) in the title string they pass in. Resulting `<title>` in the rendered HTML is e.g.:

> `Akita Breed Guide — Same-Sex Aggression, Loyalty & Primitive Instincts | Dog.com | Dog.com`

Count by site:

| Site | Affected pages | Total pages | % |
|---|---|---|---|
| dog-com | 114 | 131 | 87% |
| fish-com | 66 | 70 | 94% |
| lizard-com | 43 | 47 | 91% |
| saddle-com | 34 | 38 | 89% |
| vets-co | 29 | 34 | 85% |

**Recommended fix** — one-line, idempotent, in `packages/ui/src/components/SEOHead.tsx` line ~67:

```diff
- const fullTitle = `${title} | ${config.theme.siteName}`
+ const suffix = ` | ${config.theme.siteName}`
+ const fullTitle = title.endsWith(suffix) ? title : `${title}${suffix}`
```

**Why not shipped:** Agent 1 has open edits to `SEOHead.tsx` (different hunk — `buildMedicalWebPageSchema`). Risk is low (different lines) but non-zero. **Recommend applying after Agent 1's branch merges to avoid the rebase.**

#### 2. Title length — 260 pages exceed Google's ~60-char SERP truncation

Worst offenders per site:

- dog-com `/nutrition/puppy-nutrition`: 93 chars
- vets-co `/health/tick-borne-diseases`: 89 chars
- saddle-com `/guides/stirrup-iron-guide`: 85 chars
- lizard-com `/health/respiratory-infection`: 92 chars
- fish-com `/species/molly-fish`: 85 chars

**Suggested approach:** keep the descriptive part, drop the editorial tagline. Most titles follow the pattern `{topic} — {tagline} | {site}`. Trimming the tagline to fit in 60 chars before the site suffix should be enough. This is page-by-page work; the title-suffix fix (#1) should land first so we're not editing the same lines twice.

#### 3. Meta description length — 188 pages exceed Google's ~160-char truncation

| Site | Pages > 160 chars | Pages < 80 chars |
|---|---|---|
| dog-com | 68 | 15 |
| fish-com | 52 | 0 |
| lizard-com | 29 | 4 |
| saddle-com | 19 | 2 |
| vets-co | 20 | 8 |

Same scope: 188 pages need trimming to 150–160 chars. Many are 200+ chars long.

---

### 🟠 P1 — Linking density / orphan pages

#### 4. Orphan pages (have no inbound internal links)

These reviews exist but are not linked from any hub or related-links sidebar — they will accrue zero pagerank:

**dog-com (9 orphans):**
```
/faq                                  ← linked nowhere despite being in sitemap
/health/dog-pyoderma-guide            ← duplicate of /health/dog-pyoderma (see #7)
/reviews/best-dog-food-for-puppies
/reviews/best-dog-food-senior
/reviews/best-dog-food-sensitive-stomach
/reviews/best-dog-food-small-breed
/reviews/best-dog-gps-tracker
/reviews/best-heartworm-prevention
/reviews/best-slow-feeder-bowls
```

**fish-com (3 orphans — all are `*-guide` duplicates, see #7):**
```
/species/discus-guide
/species/kuhli-loach-guide
/species/otocinclus-guide
```

**lizard-com (2 orphans):**
```
/reviews/best-bioactive-substrates
/reviews/best-thermostats
```

**saddle-com (3 orphans):**
```
/reviews/best-horse-blankets
/reviews/best-riding-helmets
/reviews/best-stirrup-irons
```

**vets-co:** 0 orphans.

**Recommended fix:** Add these to the relevant hub index pages (`/reviews`, `/breeds`, etc.) and to `RelatedLinks` sidebars on topically-adjacent pages. Each takes ~5 line of code per surface (one push, one related-links entry).

#### 5. FAQ orphan on dog-com — needs a footer or nav link

`/faq` is a real page but nothing links to it. Either:
- Add to `packages/config/index.ts` dog-com `footerLinks` under the "Help" or "About" column, or
- Add to nav (low priority — FAQ doesn't typically need top-nav)

#### 6. Low-density hub pages

These hub/landing pages have <3 internal links — they should be sending traffic outward to detail pages:

| Page | Internal links |
|---|---|
| dog-com `/breeds` | 1 |
| dog-com `/find-a-vet` | 2 |
| vets-co `/telehealth` | 1 |
| vets-co `/find-a-vet` | 2 |
| vets-co `/reviews` | 2 |

A hub page should link to at least 8–12 of its children. Currently `/breeds` index links to 1 breed (likely just a hero CTA).

---

### 🟡 P2 — Content / structure concerns

#### 7. Duplicate-slug pairs (canonical conflict risk)

Several sites have two URLs for the same topic. Google may pick whichever it likes, splitting authority:

| Site | URL 1 | URL 2 |
|---|---|---|
| dog-com | `/health/dog-pyoderma` | `/health/dog-pyoderma-guide` |
| fish-com | `/species/discus` | `/species/discus-guide` |
| fish-com | `/species/kuhli-loach` | `/species/kuhli-loach-guide` |
| fish-com | `/species/otocinclus` | `/species/otocinclus-guide` |
| lizard-com | `/health/parasites` | `/health/parasites-guide` |

**Recommended fix:** for each pair, decide which is canonical, then either:
- (a) `redirect()` from the loser to the winner (one-line in the loser's page.tsx using `next/navigation.redirect`)
- (b) Delete the loser entirely
- (c) Add a `<link rel="canonical">` pointing to the winner (already handled by `buildMetadata` if the `path` arg is correct, but both pages would need to set the same canonical path)

Option (a) is safest and preserves any inbound links that already exist.

#### 8. Image desert — 313 of 325 pages have zero images

| Site | Pages with images | Pages without |
|---|---|---|
| dog-com | 5 | 127 |
| fish-com | 2 | 69 |
| lizard-com | 2 | 46 |
| saddle-com | 2 | 37 |
| vets-co | 1 | 34 |

For premium-domain content sites, this is a long-tail problem (lost image search traffic, weak time-on-page, weak social previews). However, sourcing real, legally-clear images is a content task — **not in scope for this audit**, and Agent 1's lane explicitly forbids fake authority claims (which would include fake "our photographer's photo" attributions on stock images). Flagged for a future content sprint.

The OpenGraph image side is OK — `buildMetadata` auto-generates dynamic OG cards via `/api/og?title=...` for every page that doesn't pass an explicit `ogImage`. Verified by inspecting `packages/ui/src/components/SEOHead.tsx:50-52`.

#### 9. No cross-property linking

The portfolio is 5 thematically-adjacent properties (dog/fish/lizard/saddle/vets) on a single org, but **zero pages on any site link to any other CarloOS site**. Examples of natural cross-links:

- dog-com `/health/heartworm-prevention` → vets-co `/health/heartworm-in-dogs` (clinical depth)
- dog-com `/reviews/best-pet-insurance` ↔ vets-co `/reviews/best-pet-insurance` (same audience)
- saddle-com horse health guides → vets-co (vet directory)
- lizard-com `/health/salmonella-prevention` → vets-co (find a reptile vet)
- fish-com `/health/*` → vets-co (exotic vet finder)

**Recommendation:** add a "Sister sites" section to the shared `Footer.tsx` or a "Related authoritative resources" sidebar block. Needs a coordination decision because it requires editing `Footer.tsx` — Agent 1's lane. Suggest **landing after Agent 1's merge.**

---

### 🟢 P3 — Smaller fixes

#### 10. Saddle.com nav has no `Saddle Care` destination

After Agent 1's config fix, `/care` in saddle nav was repointed to `/guides/leather-care-guide`. Working, but a dedicated `/care` hub aggregating tack-cleaning, leather-care, leather-restoration would be a stronger landing page. Flagged for future content work, not a bug today.

#### 11. Lizard.com has no `/health` index page

The nav (after Agent 1's fix) points "Reptile Health" to `/health/sick-reptile-signs` because there is no `/health` hub. Creating a lizard-com `/health/page.tsx` mirroring fish-com's `/health/page.tsx` would give the site a proper category landing page. **Out of scope** per "Do NOT create new content pages yet" instruction — flagged for approval.

#### 12. SEOHead `category` parameter unused on most pages

`buildMetadata({ category: '...' })` controls the label rendered on the dynamic OG image (via `/api/og`). Most pages don't pass `category`, so OG cards show only the title. Low priority cleanup — pass `category` consistently from the same value as `ArticleLayout.hero.category` (e.g. "Breed Guide", "Health", "Nutrition") to make social cards visually informative.

---

## Site-by-Site Health Summary

| Site | Pages | Internal links | Avg/page | Broken (pre Agent 1) | Broken (post Agent 1) | Orphans |
|---|---|---|---|---|---|---|
| dog-com | 131 | 786 | 6.0 | 2 | 0 | 9 |
| fish-com | 70 | 409 | 5.8 | 3 | 0 | 3 |
| lizard-com | 47 | 266 | 5.7 | 4 | 0 | 2 |
| saddle-com | 38 | 214 | 5.6 | 9 | 0 | 3 |
| vets-co | 34 | 195 | 5.7 | 9 | 0 | 0 |
| **Total** | **320** | **1,870** | **5.8** | **27** | **0** | **17** |

External outbound links: 5 across the entire portfolio. This is independently a problem (zero citations to primary sources weakens E-E-A-T) but is in Agent 1's source-anchoring lane, not mine.

---

## Recommended Sequencing

1. **Land Agent 1's PR** (broken-link sweep + fake-authority cleanup + legal-page parity)
2. **Land this PR** (sitemaps + dog-com robots.ts + AUDIT.md)
3. **Title-suffix fix** (P0 #1) — one-line in `SEOHead.tsx`, fixes 286 pages at once
4. **Title/description trimming** (P0 #2, #3) — bulk script or per-page; 320 pages
5. **Orphan reviews** (P1 #4) — surface in hub indexes; ~17 page edits
6. **Add legal/editorial pages to non-dog sitemaps** — once Agent 1's legal pages land, append them to `fish-com/lizard-com/saddle-com/vets-co/sitemap.ts`
7. **Duplicate-slug redirects** (P2 #7) — 5 redirect statements
8. **Cross-property footer block** (P2 #9) — single shared `Footer.tsx` change
9. **Content sprints:** images, missing `/health` and `/care` hubs

---

## Verification Notes

- All counts from static scans of files at HEAD of `claude/carloOS-internal-linking-audit-1nrhH`
- "Post Agent 1" verifications ran the same audit script after `git checkout origin/claude/remove-fake-authority-0WY61 -- apps packages`
- Build verification: `npx turbo build` → 5/5 successful after sitemap + robots edits
- The h1-missing finding from an early pass was a false positive — `<h1>` is rendered by `ArticleLayout.tsx:94` from the `hero.title` prop. Pages don't need their own `<h1>`.

## Unverified / Punted

- I did not click through any URLs in a browser — all checks are static
- I did not run Google's Rich Results Test against the JSON-LD schemas
- I did not check `Trupanion`/`Chewy`/`Amazon` affiliate URL validity (Agent 1's domain)
- I did not verify GA4 event firing on the new sitemap-referenced pages
- I did not check redirects from any www → apex or http → https — that's Vercel domain config, not in repo
