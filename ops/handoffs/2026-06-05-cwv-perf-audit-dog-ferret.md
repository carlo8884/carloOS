---
from: coo
to: csro
status: review
created: 2026-06-05
next_action: "CSRO: prioritize CWV fixes; COO to dispatch fix agents; route any image-source/visual work to Visual Bot."
---

# Core Web Vitals / Front-End Performance Audit — Dog.com + Ferret.com

**Audit date:** 2026-06-05  
**Scope:** `apps/dog-com/src/app/**`, `apps/ferret-com/src/app/**`, `packages/ui/src/components/` (StockImage, ImageCard, ArticleLayout, Nav, Footer)  
**Method:** Static analysis only (sandbox blocks Lighthouse/network calls). Findings are based on reading source code against known CWV patterns.

---

## Section 1 — LCP Risks

| Issue | Where (file/component) | Metric | Severity | Fix sketch |
|---|---|---|---|---|
| **Hero `<section>` has no explicit block dimension — height is determined by overlaid content div (`min-h-[62vh]`), not the image.** The hero image is `position:absolute; inset:0` inside a `<section>` with no height of its own. Until the content div paint commits height, the browser cannot size the LCP candidate. | `apps/dog-com/src/app/page.tsx` line 288: `<section className="relative bg-brand-dark">` | LCP | P1 | Add `min-h-[62vh] sm:min-h-[70vh] lg:min-h-[78vh]` directly to the `<section>` element (same values already on the inner overlay div) so the LCP container is sized before the image resolves. |
| **Identical hero pattern on Ferret.com — `<section>` has no block height.** Ferret hero section (`style={{ position: 'relative', background: 'var(--brand-dark)' }}`) relies entirely on the inner content `div` with `minHeight: 'clamp(62vh, 70vh, 78vh)'`. | `apps/ferret-com/src/app/page.tsx` line 221: `<section style={{ position: 'relative', background: 'var(--brand-dark)' }}>` | LCP | P1 | Add `style={{ minHeight: 'clamp(62vh, 70vh, 78vh)' }}` to the outer `<section>` wrapper. |
| **`ImageCard` uses deprecated `onLoadingComplete` (Next.js 14).** This prop is deprecated in Next.js 14 in favour of `onLoad`. The opacity-fade skeleton technique is sound — only the prop name needs updating. No functional breakage, but this will generate a console warning that may mask real image performance issues. | `packages/ui/src/components/ImageCard.tsx` line 111: `onLoadingComplete={() => setLoaded(true)}` | LCP | P2 | Replace `onLoadingComplete` with `onLoad`: `onLoad={() => setLoaded(true)}`. |
| **`StockImage` and `ImageCard` are `'use client'` components.** The hero LCP image therefore cannot be server-rendered as a preloaded `<link rel="preload">` hint. Next.js only emits `<link rel="preload as="image">` for `priority` images rendered in server components. Because `ImageCard` needs `useState` for the skeleton, the skeleton can be refactored to CSS-only animation so `ImageCard`'s image render path becomes a server component. | `packages/ui/src/components/ImageCard.tsx` line 13: `'use client'`; `packages/ui/src/components/StockImage.tsx` line 15: `'use client'` | LCP | P1 | Extract the skeleton `useState` into a thin `<ImageSkeleton>` wrapper client component; move the core `<Image fill>` render into a server component. This unblocks Next.js's automatic `<link rel="preload">` for the hero `priority` image. |
| **Five owner-path tile images on Dog.com homepage have no `priority` prop.** These tiles (Health, Breeds, Puppy, Senior, Products) render above or near the fold on mobile. The correct LCP candidate is the hero (already has `priority`), but depending on load order and network speed one of these tiles may become the LCP element on slow connections. | `apps/dog-com/src/app/page.tsx` lines 382–430: five `<StockImage manifestKey={path.manifestKey} aspect="3:4" variant="inline" subtleCredit />` — none pass `priority`. | LCP | P2 | If the hero is confirmed as primary LCP, no change needed; if Lighthouse CrUX data shows one of the tiles winning LCP, add `priority` to that tile (max one additional per page). |
| **Ferret.com: six cluster-hub tile images have no `priority` prop.** Immediately below the trust bar, these tiles render above the fold on desktop on many viewport widths. | `apps/ferret-com/src/app/page.tsx` lines 484–570: six `<StockImage aspect="3:4" variant="inline" subtleCredit />` — none pass `priority`. | LCP | P2 | Same guidance as above: real-user data first, then add `priority` only to confirmed LCP candidate if it differs from hero. |

---

## Section 2 — CLS Risks

| Issue | Where (file/component) | Metric | Severity | Fix sketch |
|---|---|---|---|---|
| **Owner-path tiles (Dog.com) and cluster-hub tiles (Ferret.com): outer `<Link>` wrappers have no explicit height.** The tile height is controlled by the inner `div` with `min-h-[180px]` (Dog) or `minHeight: '230px'` (Ferret). The absolutely-positioned `<StockImage>` inside has `fill` — meaning it does not contribute to layout height. If CSS or font loads late, there is a small window where the content-driven height changes, shifting subsequent page content. | Dog: `apps/dog-com/src/app/page.tsx` lines 382–430 `<Link ... className="group relative block ...">` (no height class). Ferret: `apps/ferret-com/src/app/page.tsx` lines 484–570 `<Link style={{ position:'relative', display:'block' ... }}>` (no explicit height). | CLS | P1 | Add an explicit `min-h-[180px]` (Dog) / `min-height: 230px` (Ferret) directly to the outer `<Link>` wrapper — same value already on the inner label div — so the container reserves space before content renders. |
| **`ImageCard` skeleton uses an opacity fade (`opacity: loaded ? 1 : 0`).** The skeleton div and the image div both occupy the same space because both fill the aspect-ratio container. The fade is visually clean, but if the skeleton div's `animate-pulse` class triggers a repaint that shifts an ancestor outside the container (e.g. if `overflow: hidden` is missing on any ancestor), a CLS event fires. Currently the container has `overflow: 'hidden'` in `wrapperStyle` so this is contained — GOOD. However, the `my-8` margin on the `<figure>` wrapper is NOT stripped in some tile contexts (where FILL_IMAGE overrides only hit `figure` and inner elements, not the `my-8` on the figure itself in some cascade orders). | `packages/ui/src/components/ImageCard.tsx` line 86: `<figure className={containerClass}>` — `containerClass` includes `my-8` for all non-full-bleed variants. The `FILL_IMAGE` class strings in page.tsx (`[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0`) attempt to override this but via Tailwind arbitrary selectors, which may not always win specificity. | CLS | P2 | Add `my-0` as a prop option to `ImageCard` / pass it down from `StockImage` when rendering in tile contexts, rather than relying on Tailwind arbitrary-selector specificity overrides. Alternatively, default `my-8` only when `variant === 'inline'` and the component is not inside a tile. |
| **`ArticleLayout` hero image rendered as raw `<img>` with fixed height class but no `width`/`height` attributes.** The image is inside `div className="w-full h-64 md:h-96 overflow-hidden"` — CSS-height is correct so CLS is contained. But no `width`/`height` HTML attributes means browsers cannot compute aspect ratio before the image loads. Currently `hero.image` is not used in any Dog.com or Ferret.com article pages (all pages surveyed use emoji or no `authorAvatar`; `hero.image` prop is never passed), so this is latent risk. | `packages/ui/src/components/ArticleLayout.tsx` lines 164–172: `<img src={hero.image} alt={...} className="w-full h-full object-cover" />` — no `width` or `height` attrs; no `loading` attr. | CLS | P2 | Replace the raw `<img>` with Next.js `<Image fill>` inside the existing `div` wrapper (or add `width={1200} height={384}` + `loading="eager"` as a minimal fix before anyone passes `hero.image`). |
| **Nav mobile drawer appears above page content without reserved height.** The mobile menu `<div>` is `position: fixed` — this is correct and does NOT cause CLS. **Nav is clear on CLS.** | `packages/ui/src/components/Nav.tsx` — mobile drawer is `fixed top-nav`. | CLS | — | No action needed. |
| **Ferret.com hero uses `clamp(62vh, 70vh, 78vh)` for `minHeight` — clamping min to max makes `clamp` a no-op; value resolves to 70vh always.** This is a minor authoring error, not a CLS risk, but means the hero is always 70vh regardless of breakpoint intent. | `apps/ferret-com/src/app/page.tsx` line 270: `minHeight: 'clamp(62vh, 70vh, 78vh)'` | CLS | P3 | Use `min(78vh, max(62vh, 70vh))` or explicit breakpoint CSS variables to match Dog.com's Tailwind approach. |

---

## Section 3 — Image Hygiene

| Issue | Where (file/component) | Metric | Severity | Fix sketch |
|---|---|---|---|---|
| **`ImageCard` passes `fill` to `next/image` in all cases — correct for aspect-ratio containers.** The container has `position: relative` and explicit `aspectRatio` in CSS. `sizes` prop is correctly set to `100vw` (full-bleed), `900px` (wide), `720px` (inline). This is WELL implemented. | `packages/ui/src/components/ImageCard.tsx` lines 99–116. | — | — | No action needed. |
| **`sizes` for tile images is inherited as `inline` variant → `(min-width: 768px) 720px, 100vw`.** On Dog.com, owner-path tiles are `lg:grid-cols-5` (each ~20vw on desktop), and breed tiles are `sm:grid-cols-2` (each ~50vw). Both use the `inline` `sizes` value of `720px`, which causes the browser to download full 720px-wide images for tiles that may render at 200–360px. This wastes bytes on these large tile grids. | `packages/ui/src/components/ImageCard.tsx` line 108: `'(min-width: 768px) 720px, 100vw'` for variant `inline`. Dog.com homepage uses `variant="inline"` for owner-path tiles, breed tiles, health image, nutrition panel, training panel, reviews panel. | LCP/bytes | P1 | Expose a `sizes` override prop on `ImageCard` (and forward through `StockImage`). Tile contexts should pass something like `(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw` for 5-column grids, or `(min-width: 640px) 50vw, 100vw` for 2-column grids. This is the highest-leverage bytes-saved fix in the image stack. |
| **No below-fold images use explicit `loading="lazy"` — they rely on Next.js default.** Next.js `<Image>` components automatically get `loading="lazy"` unless `priority` is set — so this is handled correctly by the framework. No raw `<img>` tags appear in below-fold positions across the pages surveyed (the only raw `<img>` tags are the author avatar and `hero.image` in `ArticleLayout`, neither of which are in production below-fold use). | `packages/ui/src/components/ImageCard.tsx` — uses `fill` on `next/image`, which respects Next.js lazy-loading defaults. | — | — | No action needed for Next.js `<Image>` usage. The raw `<img>` in `ArticleLayout` should add `loading="lazy"` for the `hero.image` case if that prop ever gets used. |
| **`ArticleLayout` author avatar uses a raw `<img>` without `width`/`height` attributes.** Currently most pages use emoji for `authorAvatar` so this branch never renders. If a real URL is passed, the `<img>` will shift layout. | `packages/ui/src/components/ArticleLayout.tsx` line 140: `<img src={hero.authorAvatar} alt={hero.authorName} className="w-full h-full rounded-full object-cover" />` | CLS/images | P2 | Add `width={44} height={44}` to match the `w-11 h-11` container; or replace with `next/image`. |
| **Unsplash/Pexels image CDN URLs are runtime-fetched via manifest — no `blurDataURL` placeholder.** All `<Image fill>` renders show a skeleton until the image loads. A `blurDataURL` base64 placeholder would prevent the blank container flash. The manifest JSON could store a color field (`entry.color` is already present for some entries) that could be used as a solid CSS background fill. | `packages/ui/src/data/image-manifest.json` has `color` field; `ImageCard.tsx` currently ignores it for the `backgroundColor` fallback, instead using `var(--brand-surface)`. | LCP (perceived) | P2 | Use `entry.color` as the `wrapperStyle.backgroundColor` in `ImageCard` (currently hardcoded to `var(--brand-surface)`). For entries with `color`, this gives an instantly-correct dominant-color placeholder rather than the generic warm surface. |

---

## Section 4 — JS Hydration / Client Components

| Issue | Where (file/component) | Metric | Severity | Fix sketch |
|---|---|---|---|---|
| **Dog.com homepage directly imports `WhichPetWizard` (a `'use client'` component) without `next/dynamic` or `<Suspense>`.** This means the entire wizard JS bundle (wizard-client.tsx + wizard-logic.ts + all its dependencies) is included in the homepage's initial JS bundle rather than being lazy-loaded. The wizard is below the fold on all viewports. | `apps/dog-com/src/app/page.tsx` line 60: `import { WhichPetWizard } from './which-pet/wizard-client'`. Wizard component is at `apps/dog-com/src/app/which-pet/wizard-client.tsx`. | TBT/INP | P0 | Replace with `const WhichPetWizard = dynamic(() => import('./which-pet/wizard-client').then(m => m.WhichPetWizard), { ssr: false })` using `next/dynamic`. Wrap the section in `<Suspense fallback={<div className="...skeleton...">}>`. Reduces initial bundle size and defers hydration cost. |
| **Ferret.com homepage directly imports `FerretFoodEvaluator` (a `'use client'` component) without `next/dynamic`.** Same pattern as Dog.com wizard. The evaluator is in `apps/ferret-com/src/components/visual/FerretFoodEvaluator.tsx` and is loaded synchronously on the homepage. | `apps/ferret-com/src/app/page.tsx` line 47: `import { FerretFoodEvaluator } from '../components/visual/FerretFoodEvaluator'`. | TBT/INP | P0 | Same fix: use `next/dynamic` with `ssr: false`. This is also cross-lane: `FerretFoodEvaluator` lives in `src/components/visual/` (Visual Bot lane) — coordinate with Visual Bot before modifying the import, but the dynamic wrapper is in `page.tsx` (COO lane). |
| **`Nav` is `'use client'` and runs two `useEffect` listeners (scroll + keydown) on every page.** This is unavoidable for the sticky-scroll shadow and mobile hamburger behaviour, and the component is lightweight. The scroll listener is correctly passive. However, Nav's JS runs before any page content, which adds to TBT. | `packages/ui/src/components/Nav.tsx` lines 1, 27–37. | TBT | P2 | Consider splitting into a minimal server-rendered `<NavShell>` (logo + desktop links that don't need JS) and a small `<NavInteractive>` client island for only the scroll-shadow state + mobile drawer. Not urgent — Nav is small — but worth scoping for a P2 pass. |
| **`StockImage` / `ImageCard` are `'use client'` for the opacity-fade skeleton.** As noted in LCP section, this prevents Next.js from emitting `<link rel="preload">` for the hero image. All static pages render server-side but the images hydrate client-side, adding an unnecessary JS cost for what is essentially a display-only component on static pages. | `packages/ui/src/components/ImageCard.tsx` line 13; `packages/ui/src/components/StockImage.tsx` line 15. | TBT/LCP | P1 | Extract skeleton to a thin client wrapper; move `<Image fill priority>` render into a server-renderable sub-component. Already flagged under LCP. |
| **`EmailCapture`, `FAQAccordion`, `SearchBar`, `AffiliateLink`, `AffiliateDisclosure`, `AnalyticsDashboard` are all `'use client'` in packages/ui.** These are spread across many pages. Some (FAQAccordion interactive expand state, EmailCapture form submission) genuinely need client; others (AffiliateDisclosure, static SearchBar render) could be server. Not an immediate CWV risk since they are below the fold, but they add to per-page JS payload. | `packages/ui/src/components/*.tsx` — multiple files (confirmed by `'use client'` grep). | TBT | P3 | Audit each component: if state/effect can be removed or replaced with CSS (e.g. `<details>` for FAQ), convert to server. This is a lower-priority cleanup pass. |
| **Dog.com layout injects GA4 via vanilla `<script>` tags in `<head>` (not `next/script`).** While the external GA tag has `async`, the inline config script is synchronous in `<head>` — it will parse-block the `<head>` on first load. In practice, GA4 is only active when `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set (not in dev/staging), so this is production-only. Ferret.com has the same pattern. | `apps/dog-com/src/app/layout.tsx` lines 79–99: `<script async src="gtag/js?id=..."/>` + `<script dangerouslySetInnerHTML={...}/>`. Same at `apps/ferret-com/src/app/layout.tsx` lines 58–80. | TBT | P2 | Replace both `<script>` tags with Next.js `<Script id="ga4-init" strategy="afterInteractive">`. This moves the inline config out of `<head>` parsing. The Skimlinks script on Dog.com already uses `strategy="afterInteractive"` correctly — apply the same to GA4. |

---

## Section 5 — Font Loading

| Issue | Where (file/component) | Metric | Severity | Fix sketch |
|---|---|---|---|---|
| **Both sites use `display: 'swap'` on all `next/font/google` declarations — GOOD.** Playfair Display + DM Sans (Dog) and Playfair Display + Source Sans 3 (Ferret) both declare `display: 'swap'`, which prevents invisible text and ensures LCP text is paint-eligible immediately. | `apps/dog-com/src/app/layout.tsx` lines 21, 28; `apps/ferret-com/src/app/layout.tsx` lines 17, 24. | CLS/LCP | — | No action needed. |
| **DM Sans loads 5 weights (300–700) on Dog.com; Source Sans 3 loads 5 weights on Ferret.com.** Each weight is a separate font file. Given the editorial design, weights 300, 400, 500, and 700 are actually used in the codebase (600 is declared but may not be referenced in any Tailwind class). Loading an unused weight wastes bandwidth on first visit. | `apps/dog-com/src/app/layout.tsx` line 25: `weight: ['300', '400', '500', '600', '700']`; `apps/ferret-com/src/app/layout.tsx` line 23: same. | LCP (bytes) | P2 | Audit actual weight usage (`font-semibold` → 600, `font-medium` → 500, `font-bold` → 700, `font-light` → 300). If 300 or 600 are unused, drop them from the weight array. Each dropped weight removes one network request. |
| **No explicit `preconnect` for fonts.googleapis.com / fonts.gstatic.com in `<head>`.** `next/font/google` self-hosts the fonts at build time, so no runtime Google Fonts network call is made — the preconnect is unnecessary. **This is NOT a risk.** | Both layout files — confirmed no preconnect in `<head>`. | — | — | No action needed. `next/font` self-hosting handles this correctly. |
| **Playfair Display loads `style: ['normal', 'italic']` on Dog.com (Dog-specific) but not on Ferret.com.** Ferret does use italic in the hero subtitle (`fontStyle: 'italic'` on the `<p>` tag). If the italic variant is not loaded, the browser synthesizes italic, which differs visually and adds a small render cost. | `apps/dog-com/src/app/layout.tsx` line 19: `style: ['normal', 'italic']`. `apps/ferret-com/src/app/layout.tsx` line 14: no `style` prop (defaults to normal only). `apps/ferret-com/src/app/page.tsx` line 313: `fontStyle: 'italic'`. | CLS (FOUT) | P1 | Add `style: ['normal', 'italic']` to the Playfair Display declaration in `apps/ferret-com/src/app/layout.tsx` to prevent italic synthesis on the hero subtitle. |

---

## Section 6 — Route Config / Caching

| Issue | Where (file/component) | Metric | Severity | Fix sketch |
|---|---|---|---|---|
| **Dynamic [slug] routes (`/breeds/[slug]`, `/health/[slug]`, `/compare/[slug]`, `/breeds/[slug]/feeding`, `/breeds/[slug]/health`) all correctly declare `export const dynamic = 'force-static'` + `dynamicParams = false`.** This forces full static generation at build time — correct and optimal. | `apps/dog-com/src/app/breeds/[slug]/page.tsx` line 55, `health/[slug]/page.tsx` line 50, `compare/[slug]/page.tsx` line 42, etc. | — | — | Route config is correctly set. No action needed. |
| **`/go/[vendor]/[sku]/route.ts` declares `export const dynamic = 'force-dynamic'` on both sites.** This is correct — affiliate click-trackers must be dynamic to log per-request. | `apps/dog-com/src/app/go/[vendor]/[sku]/route.ts` line 23; `apps/ferret-com/src/app/go/[vendor]/[sku]/route.ts` line 17. | — | — | No action needed. |
| **All static hub and article pages have NO `export const revalidate` or `dynamic` declaration, defaulting to static rendering.** In Next.js 14 App Router, no `dynamic` export defaults to `auto` (ISR-compatible static). This is correct for editorial pages. | All non-`[slug]` pages in `apps/dog-com/src/app/` and `apps/ferret-com/src/app/` — confirmed by grep returning no matches. | — | — | No action needed. Default static is correct. |
| **`Footer` uses `new Date().getFullYear()` at render time.** Because `Footer` is a server component (no `'use client'`), the year is baked in at build time during static generation — it will not update until the next build. This is acceptable for annual frequency but technically a minor staleness risk. | `packages/ui/src/components/Footer.tsx` line 21: `const currentYear = new Date().getFullYear()`. | — | P3 | Either accept (build-on-deploy updates it automatically) or use a CSS `content: '2026'` + a tiny client island for dynamic year update. Low priority. |

---

## Top 8 Highest-Leverage CWV Fixes

Ordered by combined LCP/CLS/TBT impact and implementation effort:

1. **[COO-lane] Lazy-load `WhichPetWizard` on Dog.com homepage with `next/dynamic`.** (`apps/dog-com/src/app/page.tsx`) — P0 TBT fix. Below-fold interactive tool should not block initial page hydration. Add `ssr: false` + skeleton fallback. Estimated JS saved from initial bundle: the full wizard-client.tsx + wizard-logic.ts tree.

2. **[COO-lane] Lazy-load `FerretFoodEvaluator` on Ferret.com homepage with `next/dynamic`.** (`apps/ferret-com/src/app/page.tsx`) — P0 TBT fix. Same pattern as #1. The import is COO-lane (page.tsx); the component itself is Visual-lane (src/components/visual/) — no edit to the component needed.

3. **[COO-lane] Extract `ImageCard`/`StockImage` skeleton into a thin client wrapper; make the image render path server-renderable.** (`packages/ui/src/components/ImageCard.tsx`, `StockImage.tsx`) — P1 LCP fix. This unblocks Next.js automatic `<link rel="preload">` emission for hero images across both sites and every page that uses `priority`. Single shared-package fix with portfolio-wide effect.

4. **[COO-lane] Add `min-h` to outer `<section>` hero wrapper on Dog.com and Ferret.com homepages.** (`apps/dog-com/src/app/page.tsx` line 288; `apps/ferret-com/src/app/page.tsx` line 221) — P1 LCP/CLS fix. Without a height on the section, the browser must wait for the inner content div to paint before sizing the LCP candidate. A two-line change.

5. **[COO-lane] Add `min-h` to outer `<Link>` wrappers on owner-path tiles (Dog) and cluster-hub tiles (Ferret).** (`apps/dog-com/src/app/page.tsx` lines 382–430; `apps/ferret-com/src/app/page.tsx` lines 484–570) — P1 CLS fix. Tile cards reserve height via the inner label div only; outer container has none. Any late-loading font or stylesheet could shift them. Add the same min-height values to the outer wrappers.

6. **[COO-lane] Expose a `sizes` override prop on `StockImage`/`ImageCard`; pass correct responsive sizes for tile grids.** (`packages/ui/src/components/ImageCard.tsx`, `StockImage.tsx`; callers in both homepage files) — P1 bytes/LCP fix. The current hardcoded `(min-width: 768px) 720px, 100vw` for `variant="inline"` downloads full-size images into 200–360px tiles. On a 5-column grid at 1280px, the correct hint is `~20vw`. Fixing this reduces image payload 3–4×.

7. **[COO-lane] Add `style: ['normal', 'italic']` to Ferret.com's Playfair Display declaration.** (`apps/ferret-com/src/app/layout.tsx` line 14) — P1 CLS/FOUT fix. The hero subtitle uses `fontStyle: 'italic'`; without the italic variant loaded, browsers synthesize italic, producing a visible font swap on first paint.

8. **[COO-lane] Move Dog.com and Ferret.com GA4 `<script>` tags in `<head>` to `next/script strategy="afterInteractive"`.** (`apps/dog-com/src/app/layout.tsx` lines 79–99; `apps/ferret-com/src/app/layout.tsx` lines 58–80) — P2 TBT fix. The inline config `<script>` currently runs synchronously in `<head>` parsing. `strategy="afterInteractive"` defers it until after hydration. GA4 only fires in production, but fixing this improves Time to First Byte in the head for production builds.

---

## Optimizations Already in Good Shape

- `display: 'swap'` on all font declarations — correct.
- `next/font/google` self-hosting — no Google Fonts runtime calls.
- Next.js `<Image fill>` with explicit `aspectRatio` containers — prevents CLS on images.
- `priority` on hero images on both homepages — correct LCP prioritization.
- All static [slug] routes use `force-static` + `dynamicParams = false` — correct.
- Skimlinks loads with `strategy="afterInteractive"` on Dog.com — correct.
- Mediavine DisplayAds use `strategy="afterInteractive"` — correct.
- Nav's scroll listener is `{ passive: true }` — correct for INP.
- ImageCard's skeleton uses opacity fade inside a fixed-aspect container with `overflow: hidden` — CLS-safe approach.
- No raw `<img>` tags in below-fold positions across active pages on either site.
- `force-dynamic` on affiliate click-trackers — correct.

---

*Audit by COO sub-agent, 2026-06-05. All file paths and line numbers are from `origin/main` at time of audit.*
