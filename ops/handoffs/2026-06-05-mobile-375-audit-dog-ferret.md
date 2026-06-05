---
from: design-bot
to: csro
status: done
created: 2026-06-05
next_action: CSRO to slot the P0 Nav padding fix (shared component, both sites) into the polish queue; assign P1 grid/typography items to the COO content lane.
---

# Mobile / Responsive Audit — Dog.com + Ferret.com (375px / iPhone SE-mini class)

READ-ONLY audit. No app code changed. Viewport modeled: 375px CSS width
(iPhone SE / 12-mini / 13-mini). Method: read TSX + Tailwind classes + inline
styles and reasoned about 375px rendering. Container tokens (from
`packages/config/tailwind.preset.ts`): `container` = 80px, `container-sm` = 24px.

## Highest-impact mobile fix (do this first)

**The shared `Nav` component eats 160px of a 375px screen.**
`packages/ui/src/components/Nav.tsx` line 46 sets the fixed nav bar to
`px-container sm:px-container-sm`. Tailwind reads this as: 80px horizontal
padding as the BASE (mobile), dropping to 24px only at `sm:` (≥640px). The
ordering is inverted versus every page body (which correctly uses
`px-container-sm sm:px-container`). Net effect at 375px: **80px left + 80px
right = 160px consumed, leaving ~215px** for the logo wordmark and the
hamburger. The wordmark sits jammed against the menu button, the tap targets
crowd, and the whole masthead reads off-center / broken on a phone — the exact
"poor mobile" class of problem Carlo rejected. This is shared, so it hits BOTH
sites (Dog and Ferret both render `<Nav>`) and in fact every site in the
portfolio.

- File / pattern: `packages/ui/src/components/Nav.tsx:46` —
  `'px-container sm:px-container-sm'`
- Fix: flip to `'px-container-sm sm:px-container'` (24px mobile → 80px desktop),
  matching the page-body convention. One-line, $0, in-repo.
- SEO Impact: none direct; removes a mobile-usability signal risk (Google mobile
  page-experience).
- GEO Impact: none.
- Monetization Impact: indirect — a broken-looking masthead depresses trust on
  the first screen, the screen most likely to bounce before any monetized page.
- Build Effort: XS (1 class string, 1 shared file).
- Priority Level: P0.

NOTE: this is a shared `packages/ui` primitive. Per CLAUDE.md §5 the COO owns
non-visual UI primitives; coordinate with Visual Bot before the structural
change lands (Nav is on the shared/coordinate list) — but the fix is a padding
correction, not a visual redesign, so it should be uncontroversial.

---

## Dog.com

### P0

1. **Nav padding (shared) — see "Highest-impact" above.** Renders on
   `apps/dog-com/src/app/layout.tsx:104` via `<Nav siteId="dog-com" />`.
   File/pattern: `packages/ui/src/components/Nav.tsx:46`. Fix: flip class order.
   Effort XS. Priority P0.

### P1

2. **Owner-path tiles render 2-col at 375px with the description hidden — cards
   lose their context.** `apps/dog-com/src/app/page.tsx:381` uses
   `grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5`. At 375px that is two
   ~163px-wide image tiles per row across 5 cards (so a lonely 5th card on row
   3). Worse, the descriptive line is `hidden sm:block` (line 420), so on mobile
   each tile shows only eyebrow + title + CTA — the "Symptoms by urgency — when
   to call the vet" value prop is suppressed exactly where screen real estate is
   tightest and intent is highest. Min tile height 180px is fine; the problem is
   2-up + no desc.
   - Fix: make the owner-path grid `grid-cols-1` (or keep 2-col but un-hide the
     desc with `block`) below `sm`. Recommended: single column on mobile with the
     description visible, so the 5 entry points read as a clear stacked menu —
     this is the page's primary above-the-fold navigation.
   - SEO Impact: minor — clearer entry-point labeling helps engagement metrics.
   - GEO Impact: none.
   - Monetization Impact: medium-indirect — these tiles route to the highest-
     intent surfaces (symptoms → vet, reviews → affiliate). Suppressed copy on
     mobile lowers click-through to monetized destinations.
   - Build Effort: XS.
   - Priority Level: P1.

3. **Hero H1 floor may be tall for the narrowest case.**
   `apps/dog-com/src/app/page.tsx:333` H1 `fontSize: clamp(34px, 6vw, 68px)`.
   At 375px, 6vw = 22.5px so the 34px floor wins — "Everything your dog needs
   you to know." at 34px/1.03 line-height wraps to ~3 lines inside `max-w-3xl`,
   which is fine, but combined with the `pt-16` (64px) top pad inside a
   `min-h-[62vh]` hero the copy block can crowd the bottom CTA on a 667px-tall
   SE. Legibility is OK (scrim + textShadow present); this is a spacing-polish
   note, not a break.
   - Fix (optional): drop hero H1 floor to ~30px and/or reduce mobile `pt-16` to
     `pt-12`. Verify on a 375×667 frame.
   - Build Effort: XS. Priority: P2.

### P2

4. **Age-calculator "formula reference" row is a hard 3-col at 375px.**
   `apps/dog-com/src/app/tools/dog-age-calculator/Calculator.tsx:142`
   `grid grid-cols-3 gap-3`. Three tiles at 375px ≈ 93px each; the third holds
   the label "Rate (age > 2)" + "X human yr / yr" value — cramped, label wraps to
   3 lines. Legible but tight.
   - Fix: `grid-cols-1 sm:grid-cols-3` (stack on mobile), matching the result
     row above it which already uses `grid-cols-1 ... sm:grid-cols-3`.
   - Build Effort: XS. Priority: P2.

5. **Calorie-calculator result tiles are 2-col at 375px.**
   `apps/dog-com/src/app/tools/dog-calorie-calculator/Calculator.tsx:173`
   `grid grid-cols-2 ... lg:grid-cols-4`. 2×N tiles of ~155px each with `text-2xl`
   figures. Workable, no overflow — flag only for consistency if #4 is changed.
   Priority: P2.

### Verified OK on Dog.com (no action)
- Hero scrim/legibility: bottom-up `from-brand-dark` gradient + `textShadow` on
  H1 and subhead — copy stays legible over photo at 375px.
- Breed hub grid `grid-cols-2 sm:grid-cols-3 lg:grid-cols-4`
  (`breeds/page.tsx:178`): 2-up compact image cards at 375px read cleanly; this
  is the right density for a 200+ breed index.
- Comparison table `compare/[slug]/page.tsx:528` is wrapped in
  `not-prose overflow-x-auto` — no horizontal page overflow; the `w-[28%]` is a
  table-internal column, not a fixed px width.
- Health hub grids all carry `sm:`/`lg:` guards; spoke pages
  (`breeds/[slug]`, `health/[slug]`) showed no raw `grid-cols-2`, no fixed
  `w-[NNNpx]`, no oversized mobile headings.
- StockImage aspect ratios are ratio-based (`16:9`, `3:4`, `4:3`) — they scale
  to container width, no fixed pixel widths exceeding 375.
- Footer (`packages/ui/src/components/Footer.tsx`) is `grid-cols-1` on mobile
  with `flex-wrap` legal row — clean.
- EmailCapture is env-gated off; not rendered, so no empty/cramped surface.

---

## Ferret.com

Ferret's homepage and hubs are built with inline styles + CSS variables (by
design — the site's convention) and lean heavily on
`grid-template-columns: repeat(auto-fit/auto-fill, minmax(...))`, which is
mostly mobile-safe because it collapses to 1 column when the track minimum
exceeds available width. Available content width at 375px ≈ 375 − 48 (24px pad
each side) = **327px**.

### P0

1. **Nav padding (shared) — same bug, same fix.** Renders on
   `apps/ferret-com/src/app/layout.tsx:84` via `<Nav siteId="ferret-com" />`.
   File/pattern: `packages/ui/src/components/Nav.tsx:46`. Effort XS. Priority P0.

### P1

2. **Hub/category grids use `minmax(280px, 1fr)` / `minmax(320px, 1fr)` WITHOUT
   the `min(100%, …)` guard — overflow risk at 375px.** The homepage tiles
   correctly use `minmax(min(100%, 280px), 1fr)` (e.g. `page.tsx:480, 637`), but
   several hub pages dropped the `min(100%, …)` wrapper:
   - `apps/ferret-com/src/app/health/page.tsx:291` — `minmax(280px, 1fr)`
   - `apps/ferret-com/src/app/care/page.tsx:251` — `minmax(280px, 1fr)`
   - `apps/ferret-com/src/app/diet/page.tsx:345` — `minmax(280px, 1fr)`
   - `apps/ferret-com/src/app/colors/page.tsx:250` — `minmax(280px, 1fr)`
   - `apps/ferret-com/src/app/ownership/page.tsx:344` — `minmax(280px, 1fr)`
   - `apps/ferret-com/src/app/behavior/page.tsx:326` — `minmax(320px, 1fr)`
   At 327px available, a bare `minmax(280px, 1fr)` track stays single-column and
   the column is clamped to the container, so it does NOT overflow today. BUT a
   bare `minmax(320px, 1fr)` (behavior:326) is only 7px under the 327px budget —
   any future padding/margin change, a slightly narrower device (360px Android =
   312px available), or a long unbroken word pushes it to overflow horizontally.
   The `min(100%, …)` form is the safe idiom and is already used elsewhere in the
   same codebase.
   - Fix: change each `minmax(280px, 1fr)` → `minmax(min(100%, 280px), 1fr)` and
     `minmax(320px, 1fr)` → `minmax(min(100%, 320px), 1fr)`. Mechanical, $0,
     in-repo. Highest concrete-overflow risk is `behavior/page.tsx:326`.
   - SEO Impact: removes a mobile-overflow/horizontal-scroll usability risk
     (page-experience signal).
   - GEO Impact: none.
   - Monetization Impact: low-indirect.
   - Build Effort: XS each (6 one-token edits).
   - Priority Level: P1 (the 320px case), P2 (the 280px cases — currently safe
     but brittle).

3. **Cost-calculator result tiles are 2-col at 375px.**
   `apps/ferret-com/src/app/tools/cost-calculator/Calculator.tsx:145`
   `mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4`. Four result tiles render 2×2 at
   ~155px each, each carrying a `text-2xl` dollar figure plus a label; the
   "Lifetime estimate" tile also stacks a "≈ $X/mo averaged" sub-line. Tight but
   legible, no overflow. The input columns above correctly use `md:grid-cols-2`
   (stack on mobile) — good.
   - Fix (optional polish): `grid-cols-1 sm:grid-cols-2 lg:grid-cols-4` so the
     four headline numbers stack full-width and read as a clean results ribbon on
     a phone.
   - Build Effort: XS. Priority: P2.

### P2 / polish

4. **Hero subhead line-length is constrained by `max-width: 34ch`, hero H1 by
   `20ch`** (`page.tsx:306, 322`). At 375px these `ch` caps are larger than the
   327px content box, so they don't actually clip — the text wraps naturally.
   Legibility is protected by the scrim + `textShadow`. No action; noted as
   verified.

5. **Tools card grid** (`page.tsx:1058`) uses the correct
   `minmax(min(100%, 280px), 1fr)` guard — collapses to 1-col cleanly. OK.

### Verified OK on Ferret.com (no action)
- Hero: full-bleed photo + bottom-up dark scrim + `textShadow` on H1/subhead →
  legible at 375px. CTA buttons are `15px 26px` padding → ≥44px tall tap targets,
  `flex-wrap` so they stack rather than overflow.
- Homepage hub tiles, featured-category tiles, and tools cards all use the
  `minmax(min(100%, …), 1fr)` safe idiom → clean 1-col stack on mobile.
- Trust bar `repeat(auto-fit, minmax(220px, 1fr))` (`page.tsx:393`): 220px < 327px
  so it's safe single-column on mobile.
- StockImage tiles are ratio-based (`3:4`, `16:9`); `minHeight` values
  (230–300px) are vertical, not fixed widths — no horizontal overflow.
- Cost-calculator number inputs use `type="number" inputMode="decimal"` +
  `w-full` → mobile numeric keypad, full-width fields. Good.
- EmailCapture is env-gated off; not rendered.

---

## Cross-site summary

| # | Issue | Sites | File / pattern | Priority |
|---|-------|-------|----------------|----------|
| 1 | Nav 80px mobile padding (inverted breakpoint) | Both (all sites) | `packages/ui/src/components/Nav.tsx:46` | **P0** |
| 2 | Owner-path tiles 2-col + desc hidden on mobile | Dog | `dog-com/src/app/page.tsx:381,420` | P1 |
| 3 | `minmax(320px,1fr)` bare track (overflow risk) | Ferret | `ferret-com/.../behavior/page.tsx:326` | P1 |
| 4 | `minmax(280px,1fr)` bare tracks (brittle) | Ferret | health/care/diet/colors/ownership hub pages | P2 |
| 5 | Calculator result/reference rows hard 2-/3-col | Both | dog age-calc `:142`, dog calorie `:173`, ferret cost `:145` | P2 |

**Single highest-impact mobile fix:** flip `Nav.tsx:46` from
`px-container sm:px-container-sm` to `px-container-sm sm:px-container`. One line,
$0, fixes the masthead on every page of both sites (and the whole portfolio)
where the first thing a phone user sees is currently a 160px-padded, off-center
nav bar.

All recommendations are in-repo, $0, and do not touch credentials, AI-generated
humans, or photo attribution (QC §1 clean). No findings require Carlo
escalation (no spend, no DNS, no new services).
