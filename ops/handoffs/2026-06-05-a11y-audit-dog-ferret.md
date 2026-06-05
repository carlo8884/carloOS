---
from: coo
to: csro
status: review
created: 2026-06-05
next_action: "CSRO: prioritize a11y fixes; COO to dispatch fix agents on highest-impact items."
---

# Accessibility / Semantic-HTML Audit — Dog.com + Ferret.com

**Cycle:** rotating quality-test · prior cycles: premium-visual, GEO/schema, mobile-375  
**Scope:** `apps/dog-com/src/app/**`, `apps/ferret-com/src/app/**`, shared primitives in `packages/ui/src/components/`  
**Audit date:** 2026-06-05  
**Branch:** `a11y/audit-dog-ferret`

---

## 1. Semantic Structure & Landmarks

| Issue | Where (file/component) | Severity | Fix sketch |
|---|---|---|---|
| No skip-link to `<main>` on either site | `apps/dog-com/src/app/layout.tsx`, `apps/ferret-com/src/app/layout.tsx` | **P0** | Add `<a href="#main-content" className="sr-only focus:not-sr-only ...">Skip to main content</a>` as the very first child of `<body>`, before `<Nav>`. Add `id="main-content"` to the existing `<main>` tag. |
| `<section>` elements on both homepages have no accessible name — screen readers announce them as unnamed regions | `apps/dog-com/src/app/page.tsx` (11 `<section>` elements), `apps/ferret-com/src/app/page.tsx` (9 `<section>` elements) | **P1** | Each thematic section already has a visible `<h2>` inside it. Add `aria-labelledby="<id-of-that-h2>"` on the section element — or use `aria-label` for short sections without a heading (e.g. the trust-bar strip). |
| Mobile nav drawer uses `role="dialog"` but has no `aria-modal="true"` and no focus trap | `packages/ui/src/components/Nav.tsx` lines 115–139 | **P1** | Add `aria-modal="true"` to the drawer `<div>`. Implement a focus trap: on mount, move focus to the first link; intercept Tab/Shift-Tab to cycle within the drawer; restore focus to the hamburger on close. |
| Logo link in Footer renders `<Link href="/" aria-label={config.theme.siteName}>` — acceptable, but the `<Logo>` SVG inside renders no accessible name itself | `packages/ui/src/components/Footer.tsx` line 32 | **P2** | Confirmed accessible via the outer `aria-label`; no change required for the logo SVG, but document this pattern in a comment so future editors don't remove the outer label. |
| Ferret.com homepage cluster-hub list uses a `<ul>` via `style={{ listStyle:'none' }}` without `role="list"` — Safari+VoiceOver strips list semantics when CSS `list-style:none` is applied | `apps/ferret-com/src/app/page.tsx` lines 474–570 (HUBS list), 631–799 (PHOTO_CATEGORIES list), 904–985 (FEATURED_ARTICLES list), 1052–1299 (tools cards list) | **P1** | Add `role="list"` to each `<ul>` that uses `style={{ listStyle: 'none' }}`. Dog.com correctly uses `role="list"` on Tailwind lists; Ferret.com's inline-style approach omits it throughout. |

---

## 2. Headings

| Issue | Where (file/component) | Severity | Fix sketch |
|---|---|---|---|
| Owner-path tiles on Dog.com homepage each contain `<h2>` — five `<h2>` headings appear between the page's one true `<h1>` and the subsequent section `<h2>` headings, flattening the outline | `apps/dog-com/src/app/page.tsx` lines 417–419 (inside each OWNER_PATHS card) | **P1** | The owner-path tiles are navigation cards, not section headings. Replace `<h2>` with `<p>` (styled identically) or `<span>` inside these `<Link>` cards. Each card's `<h2>` is visually small (`text-sm`) and serves as a card label, not a document section heading. |
| Ferret.com hub tiles and featured-category cards use styled `<div>` for the hub/category title instead of a heading — these ARE discrete named content sections navigable via keyboard | `apps/ferret-com/src/app/page.tsx` lines 533–544 (hub label), 697–714 (category card title), 941–958 (article title inside list) | **P1** | The featured article titles inside `<li>` at lines 941–958 are substantial content entry points — promote to `<h3>` under the section `<h2>`. Hub tile labels (lines 533–544) are link tiles, not section headings — styled `<div>` is acceptable there, but add `<span>` or `<p>` explicitly for semantics. |
| `ArticleLayout` hero `<h1>` is followed by a `<h4>` in `Footer.tsx` footer column headings with nothing in between at the footer level — the heading tree jumps h1→h4 on any page using ArticleLayout+Footer | `packages/ui/src/components/Footer.tsx` line 43 (`<h4>` for footer column heading) | **P2** | Footer column headings are structural; `<h4>` under an h1 is technically valid if no h2/h3 precede them in the footer, but the jump is jarring for AT users who navigate by heading. Change footer column headings to `<h2>` (or `<p>` styled as a heading) now that the footer is a separate landmark region. |
| `SidebarCard` uses `<h4>` for sidebar widget titles; when the sidebar is inside an `ArticleLayout` the document outline reads h1 → h2 (article body) → h4 (sidebar) skipping h3 | `packages/ui/src/components/SidebarCard.tsx` line 23 | **P2** | Change SidebarCard title element to `<p>` with `role="heading" aria-level="3"` or to `<h3>` directly — the sidebar is a distinct region and its widget titles should be h3 under the article h1. |

---

## 3. Images & Alt Text

| Issue | Where (file/component) | Severity | Fix sketch |
|---|---|---|---|
| `StockImage` "pending sync" placeholder renders `aria-label="Image pending sync (ferret-com:care-hero)"` — the manifest key leaks implementation detail into the accessible name in production (when `NODE_ENV !== 'production'` is false but entry still missing) | `packages/ui/src/components/StockImage.tsx` lines 93–130 | **P1** | Change the aria-label to a generic contextual description derived from `alt` prop if provided, or a silent `role="presentation"` when the placeholder is genuinely decorative. In dev mode the current text is fine; in production the placeholder should either be `role="presentation"` (if decoration) or carry the passed `alt` prop value. |
| Emoji avatar (`🐾`) rendered as raw text node inside the byline `<div>` in ArticleLayout — emoji are read aloud by screen readers as "paw prints" or their full Unicode description, adding noise to every article byline | `packages/ui/src/components/ArticleLayout.tsx` lines 142–143 | **P2** | Wrap the emoji in `<span aria-hidden="true">{hero.authorAvatar}</span>` when the avatar is not a URL. The author name is already rendered in the adjacent `<div>` so the emoji is decorative. |
| `ImageCard` skeleton loader `<div>` carries `aria-hidden="true"` — correct. No issues found with standard image rendering. `alt` is required and consistently passed through from manifest. | `packages/ui/src/components/ImageCard.tsx` | ✓ clean | No change needed. |
| `StockImage` "credit overlay" (subtle mode) renders very small text (`text-[10px]`) — visually present and linked, satisfies QC §1, but the tap target on the credit link is ~15×15 px | `packages/ui/src/components/ImageCard.tsx` lines 121–140 | **P2** | See also Tap Targets section. The credit overlay link meets QC §1 but fails WCAG 2.5.5 (44×44 minimum). Enlarge the hit area via `padding` while keeping the text small (`text-[10px] px-2 py-1.5`). |

---

## 4. Interactive Elements & Focus

| Issue | Where (file/component) | Severity | Fix sketch |
|---|---|---|---|
| Nav desktop links and mobile drawer links have no `focus-visible` ring in Tailwind classes — they rely entirely on the global `globals.css :focus-visible` rule. Dog.com's `globals.css` (line 73–75) and Ferret.com's (line 39) both define the rule, so this works, BUT the Nav link text-only `hover:text-brand-primary` states provide zero visual affordance for focus without the global rule being properly inherited | `packages/ui/src/components/Nav.tsx` lines 67–80, 122–133 | **P1** | Add `focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2 focus-visible:rounded` directly to each `<Link>` className in Nav so focus state is explicit and survives CSS resets or third-party stylesheet injection (Skimlinks, Mediavine). |
| `EmailCapture` input uses `outline-none` explicitly, then provides only `focus:border-brand-primary` as the focus indicator — a 1px border color change does not meet WCAG 2.4.11 (Focus Appearance) at 3:1 contrast ratio | `packages/ui/src/components/EmailCapture.tsx` lines 135, 148, 178 | **P1** | Replace `outline-none focus:border-brand-primary` with `focus:outline-2 focus:outline-brand-primary focus:outline-offset-2` (or `focus-visible:` variant). The sidebar variant on a dark background is especially at risk: `border-white/12` changing to `border-brand-primary` at `#E8622A` on `bg-brand-dark` barely meets 3:1. |
| `SearchBar` input uses `outline-none focus:border-brand-primary` — same issue as EmailCapture; the sole focus indicator is a border-color change | `packages/ui/src/components/SearchBar.tsx` line 176 | **P1** | Same fix: replace with `focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2`. |
| `FerretFoodEvaluator` form inputs have no focus styles at all — no `focus:`, no `focus-visible:`, no `outline-none` (so browser default applies, but brand styling is absent and cross-browser inconsistent) | `apps/ferret-com/src/components/visual/FerretFoodEvaluator.tsx` lines 125–170 | **P1** | Add `focus:outline-none focus:ring-2 focus:ring-brand-primary` to all six input/select elements, matching the Dog.com calorie calculator pattern. |
| Dog.com calorie calculator unit-toggle buttons (`lb` / `kg`) have no `aria-pressed` attribute — the pressed/selected state is communicated only through background-color change | `apps/dog-com/src/app/tools/dog-calorie-calculator/Calculator.tsx` lines 93–113 | **P1** | Add `aria-pressed={unit === 'lb'}` and `aria-pressed={unit === 'kg'}` to the respective buttons. |
| `WhichPetWizard` "← Back" and navigation buttons have no focus-visible style beyond global rule; the `disabled` back button only uses `disabled:opacity-30` — no `aria-disabled` is set (native `disabled` removes the element from focus order) | `apps/dog-com/src/app/which-pet/wizard-client.tsx` lines 139–151 | **P2** | Current `disabled` attribute is correct for native buttons (removes from tab order). The `opacity-30` visual change is sufficient given the global focus-visible rule applies. Consider adding `aria-label="Back to previous question"` for screen readers when not step 0. |
| `FAQAccordion` uses `role="list"` on the outer container and `role="listitem"` on each item — this is not the standard `disclosure` or `accordion` ARIA pattern. ARIA Authoring Practices recommends `role="button"` + `aria-expanded` (which is already present) on the trigger, with the panel as a div (no `role="region"` unless the accordion is a landmark). The current `role="region"` on panels is unusual for small accordions. | `packages/ui/src/components/FAQAccordion.tsx` lines 63–64, 74 | **P2** | The current pattern is functional — `aria-expanded` + `aria-controls` + keyboard support (Enter/Space/Escape) all present. The `role="region"` on the panel is only appropriate when there are ≥6 items and each is a significant content landmark. For typical 3-6 item FAQs, remove `role="region"` from the answer panel; keep `role="list"` / `role="listitem"` on the outer wrapper or remove those too (neither is the accordion ARIA pattern). |

---

## 5. Forms

| Issue | Where (file/component) | Severity | Fix sketch |
|---|---|---|---|
| `EmailCapture` `<form>` has `noValidate` but the input has `required` and `type="email"` — when `noValidate` suppresses browser validation and the component uses JS validation, the error message `<p className="text-xs text-brand-danger mt-1.5">` is not announced to screen readers (no `role="alert"` or `aria-live`) | `packages/ui/src/components/EmailCapture.tsx` lines 206–231 | **P1** | Add `role="alert"` to the error `<p>` element (or wrap in `<div aria-live="polite">`). Add `aria-describedby={id + '-error'}` on the `<input>` pointing to the error element, so AT users hear which field is in error. |
| Dog.com calorie calculator result cards have no live-region announcement — when inputs change, the MER/RER result updates silently for screen reader users | `apps/dog-com/src/app/tools/dog-calorie-calculator/Calculator.tsx` lines 172–198 | **P1** | Wrap the results grid in `<div aria-live="polite" aria-atomic="true">`. |
| Ferret Food Evaluator verdict section has no live-region announcement — verdict label changes silently as inputs change | `apps/ferret-com/src/components/visual/FerretFoodEvaluator.tsx` lines 175–179 | **P1** | Add `aria-live="polite" aria-atomic="true"` to the verdict `<div>` (lines 175–179). |
| `FerretFoodEvaluator` form has no wrapping `<form>` element or submit button — it is entirely controlled state that reacts to `onChange`. This is functionally fine but means Tab/Enter keyboard submission is not possible for keyboard-only users | `apps/ferret-com/src/components/visual/FerretFoodEvaluator.tsx` | **P2** | Add a `<form>` wrapper with `onSubmit={e => e.preventDefault()}` and a visually-hidden submit button (`<button type="submit" className="sr-only">Evaluate</button>`) so Enter key triggers evaluation and the form is semantically complete. |
| `WhichPetWizard` progress bar uses `role="progressbar"` + `aria-valuenow` — correct. Answer buttons use `aria-pressed` — correct. No issues found here. | `apps/dog-com/src/app/which-pet/wizard-client.tsx` | ✓ clean | No change needed. |

---

## 6. Color / Contrast Risk

| Issue | Where (file/component) | Severity | Fix sketch |
|---|---|---|---|
| `ArticleLayout` byline: `text-white/40` for author credentials and `text-white/35` for publication date on `bg-brand-dark` (`#1A0E08`) — ~1.8:1 contrast ratio against near-black, fails WCAG AA 4.5:1 for small text | `packages/ui/src/components/ArticleLayout.tsx` lines 151, 154 | **P1** | Raise opacity to `text-white/60` (minimum for legibility) or `text-white/70`. At `white/60` on `#1A0E08`, contrast is ~4.6:1, which passes AA. |
| Dog.com homepage tool-card descriptions: `text-white/55` on `bg-brand-dark` (`#1A0E08`); Tailwind `white/55` = `rgba(255,255,255,0.55)` → ~3.0:1 on pure black, falls below 4.5:1 AA for the `text-sm` body copy | `apps/dog-com/src/app/page.tsx` lines 528, 552, 576, 733, 844 | **P1** | Raise to `text-white/70` (≈ 4.0:1) or `text-white/75` (≈ 4.5:1) on `#1A0E08`. |
| Ferret.com footer-brand amber color `#C99D5F` used as link text (`color: var(--brand-amber)`) on `bg-brand-dark` background — the amber is the same as `brand-primary-light`; `#C99D5F` on `#1A0E08` is ~5.4:1 (passes AA). | `apps/ferret-com/src/app/globals.css` line 68 | ✓ clean | No change needed. |
| Ferret.com tools & calculators section: body-copy `rgba(251,245,232,0.55)` on `bg-brand-dark` = ~3.0:1 — same class of issue as Dog.com | `apps/ferret-com/src/app/page.tsx` lines 1038–1046, plus tool-card `<p>` elements at opacity `0.55` | **P1** | Raise to `rgba(251,245,232,0.75)` or `opacity: 0.78` for at least 4.5:1. These are `font-size: 0.9375rem` body paragraphs, not placeholder text. |
| Ferret.com eyebrow text `font-size: 0.7rem` (11.2 px) in amber `#C99D5F` — WCAG AA for large text (18pt/24px or 14pt/18.67px bold) does not apply here; at 11.2px this is enhanced threshold (AAA 7:1) territory. The amber-on-dark is ~5.4:1, passing AA but not AAA for this tiny text size. | Multiple `<span>` eyebrow labels in Ferret.com homepage | **P2** | No hard fail but worth noting. Increase eyebrow font size to at least `0.75rem` (12px) so it falls closer to the AA 14pt-bold threshold. |
| Dog.com `text-brand-text-light` (`#9A7A68`) on `bg-brand-surface` (off-white/cream) — `#9A7A68` on `#FEF3EE` is ~2.7:1, below AA 4.5:1. Used for metadata labels, key-risk tags, and card footnote text on multiple pages. | `apps/dog-com/src/app/page.tsx` lines 673, 678; also `ArticleLayout` byline metadata, `SidebarCard`, `Breadcrumb` separator | **P1** | `brand-text-light` was defined as a de-emphasized color; for decorative separators it is fine, but when used for actual content text (key risks, card labels, breadcrumb separators) it fails AA. Swap to `brand-text-mid` (`#4A2E18`) for those cases, which achieves ~5.8:1 on the cream surface. |

---

## 7. Tap Targets

| Issue | Where (file/component) | Severity | Fix sketch |
|---|---|---|---|
| Hamburger button in Nav uses `p-1` padding = 4px all sides; the three bar `<span>` elements are `w-6 h-0.5` (24×2 px each). Total clickable area: approximately 32×20 px, well below WCAG 2.5.5's 44×44 px minimum | `packages/ui/src/components/Nav.tsx` line 85 | **P0** | Change `p-1` to `p-2.5` (10px padding) which brings the effective touch target to ~44×44 px. The visual lines stay the same; only the invisible padding around them grows. |
| Footer legal links (`Privacy Policy`, `Terms of Use`, `Disclosure`, `Editorial Standards`) use `text-xs` with no explicit padding — effective tap target is approximately 90×20 px wide but only ~20 px tall | `packages/ui/src/components/Footer.tsx` lines 92–107 | **P1** | Add `py-2` (8px vertical padding) to each footer legal `<Link>` to bring the touch target height to ~36 px. Full 44px is impossible without visual layout changes; ~36 px is pragmatic for footer utility links. |
| Image credit overlay link in `subtleCredit` mode: `text-[10px]` credit text with no padding — tap target is ~40×14 px | `packages/ui/src/components/ImageCard.tsx` lines 127–137 | **P2** | Add `py-1.5 px-1.5` to the `<a>` credit link inside the overlay, bringing it to ~44×18 px. Still small, but meaningfully better. |
| `RelatedLinks` sidebar links use `py-2` — effective height ~36 px at `text-xs`. Marginally below 44 px. | `packages/ui/src/components/SidebarCard.tsx` line 122 | **P2** | Change `py-2` to `py-2.5` (10px each side) to hit ~40 px. |
| Ferret.com hero CTA buttons explicitly set `padding: '15px 26px'` = 60×30 minimum hit area. Dog.com hero CTAs use `py-3.5` (14px) + `text-sm` ≈ ~44 px height. Both pass. | `apps/ferret-com/src/app/page.tsx` line 338, `apps/dog-com/src/app/page.tsx` line 349 | ✓ clean | No change needed. |

---

## Top 8 Highest-Leverage Fixes

These are ordered by impact on both user experience and WCAG compliance gates. Each fix is a genuine P0/P1 that blocks or significantly degrades AT usability.

1. **Add skip-link to `<main>` on both layouts** — `apps/dog-com/src/app/layout.tsx` + `apps/ferret-com/src/app/layout.tsx`. Single-line addition per site; the single highest-impact accessibility fix for keyboard and screen-reader users. Without it, every page requires navigating all N nav items before reaching content.

2. **Enlarge hamburger touch target (Nav.tsx)** — Change `p-1` to `p-2.5`. The Nav hamburger is the primary mobile interaction point; a 20 px effective height fails WCAG 2.5.5 and is genuinely hard to tap on phones. One character change, zero visual impact.

3. **Add `aria-live` regions to calculator results** — `DogCalorieCalculator` and `FerretFoodEvaluator` both update results silently as inputs change. Screen reader users get no feedback. Add `aria-live="polite" aria-atomic="true"` to the result output containers. Affects every user of both flagship tools.

4. **Fix `outline-none` on EmailCapture / SearchBar inputs** — Three variants of EmailCapture and SearchBar all use `outline-none` which suppresses the native focus ring, replacing it with a low-contrast border-color change. Add explicit `focus-visible:outline-2 focus-visible:outline-brand-primary focus-visible:outline-offset-2`. Affects newsletter signup forms and search on both sites.

5. **Add `aria-pressed` to calorie calculator unit-toggle buttons** — `apps/dog-com/src/app/tools/dog-calorie-calculator/Calculator.tsx`. The `lb`/`kg` toggle buttons communicate selected state only through background color. Screen readers announce these as plain buttons with no state. One-line fix per button.

6. **Raise low-contrast body text on dark backgrounds** — `text-white/55` on `bg-brand-dark` (`#1A0E08`) is ~3.0:1, failing WCAG AA. Affects tool-card descriptions on Dog.com homepage, tools section copy on Ferret.com homepage. Change to `text-white/70` or `text-white/75`. Portfolio-wide the dark-section body-copy opacity is systematically too low.

7. **Fix `role="list"` missing on Ferret.com inline-style `<ul>` elements** — Safari + VoiceOver silently strips list semantics when `list-style: none` is applied via CSS. Ferret.com uses inline `style={{ listStyle: 'none' }}` on four major list containers (hub tiles, category cards, article list, tools cards). Add `role="list"` to each. Dog.com's Tailwind `list-none` + explicit `role="list"` is already correct.

8. **Add `role="alert"` / `aria-live` to EmailCapture error messages** — When the subscribe API returns an error, the `<p className="text-xs text-brand-danger">` error is invisible to screen readers. Add `role="alert"` to the error paragraph. Affects every email capture form on both sites (sidebar, inline, and section variants).

---

## Positive Findings (No Action Required)

- **`FAQAccordion`:** `aria-expanded`, `aria-controls`, `id`-linked panels, keyboard support (Enter/Space/Escape) all present. The pattern is functional.
- **`Breadcrumb`:** `<nav aria-label="Breadcrumb">`, `<ol>` with `role="list"`, `aria-current="page"` on the last item, separator `›` marked `aria-hidden="true"`. Exemplary.
- **`Nav` hamburger:** `aria-label="Open/Close menu"` + `aria-expanded` toggling correctly. Good.
- **`WhichPetWizard`:** `role="progressbar"` + `aria-valuenow/min/max`, `aria-pressed` on answer buttons. Correct.
- **`SearchBar`:** Full combobox ARIA pattern (`role="combobox"`, `aria-expanded`, `aria-haspopup="listbox"`, `role="listbox"` on dropdown, `role="option"` + `aria-selected` on items), keyboard navigation (arrows, Enter, Escape). Solid.
- **`AffiliateDisclosure` (banner/inline variants):** Wrapped in `<aside role="note" aria-label="Affiliate disclosure">`. Good use of landmark.
- **Global `:focus-visible` rule:** Both `apps/dog-com/src/app/globals.css` (lines 73–76) and `apps/ferret-com/src/app/globals.css` (line 39) define `outline: 2px solid var(--brand-primary); outline-offset: 3px; border-radius: 4px;`. The global rule is a solid safety net — the fixes above are about making the ring explicit on components that override or may override it.
- **`ImageCard` skeleton:** `aria-hidden="true"` on the skeleton placeholder. Correct.
- **Lang attribute:** Both layouts set `<html lang="en">`. Correct.
- **Alt text:** No empty `alt=""` on content images found. All `<StockImage>` calls pass descriptive `alt` props. `<ImageCard>` requires `alt` as a non-optional prop.
