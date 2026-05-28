# CarloOS — Visual & Brand Audit

**Author:** A4 (Visual & Brand Agent)
**Branch:** `agent4/visual-brand-pass`
**Scope:** Homepage + global chrome (nav, footer, type system) for all 5 sites.
**NOT in scope:** SEO, content expansion, legal/QC, new pages, fabricated authority.

---

## Operations-doc note

The brief asks me to read `OPERATIONS.md`, `ROADMAP.md`, `AGENTS.md`,
`QC-STANDARDS.md`, and `RELEASES.md`. None of these files exist in the repo
yet — only `README.md` and `DASHBOARD.md`. I proceeded from those plus the
code. Flagging so A1 can decide whether the ops docs need to be created.

---

## Headline finding (applies to ALL 5 sites)

**The prescribed typefaces are not actually being loaded.**

`packages/config/index.ts` defines per-site display + body fonts (Playfair Display, Libre
Baskerville, Cormorant Garamond, Bodoni Moda, Zilla Slab, DM Sans, Manrope, Inter, Jost,
Raleway). `globals.css` references them as CSS variables. But there is no `next/font`
import, no `<link>` to fonts.googleapis.com, and `apps/*/package.json` does not include
any font dependency. The fallback chain (`Georgia, serif` / `system-ui, sans-serif`) is
what every visitor sees.

**Symptom:** Every headline currently renders in **Georgia**. Body in **system-ui**. The
flagship "premium magazine" intent of Dog.com / Fish.com / Saddle.com / Vets.co lives
only in the config file — never on screen.

**Why this matters for the "AI-generated" critique:** Default-system type is the single
fastest tell that a site was assembled, not designed. Real editorial brands (NYT, The
Atlantic, GQ, Vogue) all wear distinctive type. Fixing this is the highest-leverage
visual win in the portfolio and unblocks every other brand decision.

This is the first thing I'm shipping on this branch — see commit history.

---

## Dog.com — full audit (flagship priority)

### Homepage first impression

The structure is competent and the orange/dark color system is genuinely premium-leaning,
but three problems make it read as "AI assembled" rather than "designed":

1. **Type is Georgia.** As above. The `font-display` class compiles, but the variable
   it resolves to is the Georgia fallback, so the "Everything Your Dog Deserves." hero
   feels like a Wordpress theme circa 2014 rather than a 2026 editorial property.
2. **Emoji-as-iconography.** Eight category cards in the "Find the Right Guide" section
   use 🔍 🥩 💉 👴 🧬 🦷 ⚖️ 🧠. Three "stat" cards in the hero use 📚 📚 ⭐. The trust bar
   uses ✓. The email perks use 📋 📬 🐕 🚫. Emoji at this volume reads as ChatGPT output
   in 2026. The site needs a 12–16 icon set in a single illustrated voice.
3. **Trust bar visual.** Currently `bg-brand-primary-pale` (`#FEF3EE`) with bright-orange
   bolded text and check marks. That treatment reads like a Shopify discount strip,
   not editorial trust. Should be slim, dark, minimal, with vertical dividers.

### Hero section

- **Headline layout** (`Everything / Your Dog / Deserves.`) — good rhythm, the italic
  "Deserves" in orange is the strongest moment on the page. Keep.
- **Right column** — hero photo bleeds nicely with the dark gradient. Good.
- **Stat cards** — three stacked white pills overlaid bottom-right. Numeral typography
  is too small (`text-lg`), emoji weight equals or exceeds the numeral, label is
  microscopic. Should be: bigger numerals (Playfair, 32px+), no emoji, thin rule
  between stat and label.
- **CTA buttons** — primary button is solid; secondary "Dog Health Library" outline
  button is fine but feels generic. Consider replacing the secondary with a text-link
  treatment with an animated arrow — heavier visual hierarchy on the primary action.
- **Mobile** — hero image is `hidden lg:block`, so mobile users see no imagery and a
  90vh wall of dark with text. That's a fixable layout regression.

### Typography

- Display: **rendering as Georgia.** Should be Playfair Display 900 for the H1.
- Body: **system-ui.** Should be DM Sans 400/500.
- Letter-spacing on the H1 is `tracking-tighter` (`-0.04em`) which is correct for the
  intended Playfair. With Georgia, it currently crashes the glyphs together.
- Article body in `globals.css` is well-considered (line-height 1.85, color hierarchy)
  but again — wrong typeface.
- **Eyebrow labels** (`A Dog Owner Reference` etc.) — the 6px orange rule + 11px
  uppercase tracked text is a strong, restrained editorial pattern. Keep it portfolio-wide.

### Spacing

- `py-section` = 88px is a respectable section rhythm.
- `px-container` = 80px desktop / 24px mobile — fine on desktop, but at 80px the content
  column can feel cramped on 1440px+ displays. Consider a max-width container with
  centered alignment rather than full-bleed padding, especially for the breed grid.
- Card padding (`p-4`) on breed cards is a touch tight; `p-5` would breathe better.

### Color system

- The Dog.com palette (`#E8622A` warm orange, `#1A0E08` deep brown-black, `#FBF7F4`
  off-white, `#FEF3EE` blush) is **genuinely good**. It's warm, it's not the
  AKC/PetMD blue-everything cliché, and it differentiates clearly from Fish.com (deep
  teal) and Lizard.com (lime on near-black).
- The only color hygiene issue: `--brand-text-light` (`#9A7A68`) on white sits at
  contrast 4.05:1 — borderline for AA at small text sizes. Used heavily in stat
  labels, card subtitles, and `text-white/45` overlays. Should audit per WCAG.

### Card design

- Breed cards: solid pattern — image + name + tag pills. Hover lifts (-translate-y-1)
  are tasteful.
- Article cards: similar. The "featured" card spans 2 columns nicely.
- **Improvement:** Cards currently use `rounded-lg` (16px). For a flagship editorial
  brand, consider tighter radii (8–10px) on cards and reserving the 16px for primary
  buttons / CTAs. Tighter radii = more "editorial," looser = more "consumer app."

### Image quality

- Every hero image and breed photo is Unsplash via remote URL with `?w=400&q=80`.
  Unsplash for placeholder is acceptable, but four problems:
  1. Same handful of photos (golden, lab, frenchie, GSD) — homogeneous and on-trend.
  2. No `next/image` optimization domain config to verify; check the
     `next.config.mjs` allow-list.
  3. No `placeholder="blur"` with `blurDataURL` — images pop in without skeletons.
  4. Long-term, the brand needs proprietary photography or at minimum a curated,
     consistent visual style (lighting, color grade). Unsplash for the flagship is
     a launch crutch.

### Mobile layout

- Nav: hamburger drawer is implemented and fine.
- Hero: image hidden on `<lg` (1024px) — the entire right column disappears, including
  the stats cards. Mobile users lose meaningful context. Should restructure to show
  the image above the headline on mobile.
- Section padding scales correctly via `sm:px-container-sm`.
- Tap targets on tag pills are < 32px — borderline for accessibility.

### Footer polish

- 4-column grid, dark background, slim brand description. Mechanically correct.
- White/40 link color is very faint — readability barely passes.
- Affiliate disclosure paragraph at `text-white/20` is essentially unreadable on the
  brand-dark `#1A0E08`. Real readability test: I had to highlight the text to verify
  the wording.
- No social links, no flag for newsletter, no "we're hiring" — fine if intentional,
  but the footer feels like a placeholder. A premium pet brand would want at least
  an editorial standards / "how we test" link given the affiliate model.

### Trust-bar design

Already covered. Verdict: looks like a Shopify upsell. Should be a slim dark band
with thin vertical separators, refined uppercase tracked type, and either no icons
or a single minimal SVG check (not emoji).

### Premium brand feel

- Direction is correct: warm-orange-on-deep-brown, restrained eyebrows, italic accents.
- Execution is held back by: Georgia fallback type, emoji density, and the trust-bar
  treatment. Fix those three and the site jumps a tier without any new content.

### Does it feel AI-generated?

Honestly: **yes, partially.** Reasons:
- Heavy reliance on emoji-as-icon across the homepage.
- The "Practical" / "Every Tuesday" / "Breed-specific advice" / "No spam" perks list
  in the email capture reads like LLM-default phrasing.
- The trust bar's four-bullet "research-based content / 200+ profiles / Honest reviews
  / No paid editorial placements" is plausible but uses the kind of parallel-bullet
  structure that LLMs produce. Real editorial brands don't usually self-declare
  "honest." (Note: editorial copy is A2's territory — flagging only.)
- The font fallback removes any custom-design personality.

But: the architecture (component system, design tokens, themes) is **better** than
most AI-generated sites. The problem is presentation, not bone structure.

---

## Vets.co — quick visual audit

- Same Georgia fallback issue. Vets.co's intended Libre Baskerville is a serious
  serif that, when actually loaded, signals medical authority. Currently Georgia.
- Teal palette (`#0A8A7A`) is good and clearly distinct from Dog.com.
- Trust-bar / hero pattern reads identical to Dog.com — appropriate (shared system)
  but the brand needs a Vets.co-specific differentiator in the hero. Suggest a
  "Find a Vet" zip-search lookup ABOVE the fold rather than just two CTA buttons.
  (Not implementing here — flagging for after Dog.com.)
- Footer disclosure visibility issue is identical.

## Fish.com — quick visual audit

- Same font issue. Intended Cormorant Garamond + Inter is an excellent pairing
  for an aquarium magazine voice. Currently both are fallbacks.
- The `#0E6B8A` deep teal is sophisticated and right for the category.
- Species cards likely need an underwater photo treatment, not just product-page
  layout — flag for later pass.

## Lizard.com — quick visual audit

- Dark-mode-first palette (`#080C08` background, `#EEF0E4` text, `#7AB52A` lime)
  is the bravest brand in the portfolio.
- Same font issue: intended Zilla Slab + Raleway, currently Georgia + system.
- Zilla Slab on a near-black background is the entire identity. Fixing fonts here
  is even more impactful than on Dog.com.

## Saddle.com — quick visual audit

- Saddle-brown palette + Bodoni Moda + Jost is the most "luxury" brand intent in
  the portfolio. Currently rendering Georgia, which kills the Bodoni's high-contrast
  serifs — the entire visual identity collapses.
- Same fix order: load the type first, then refine.

---

## Cross-portfolio improvement plan (priority order)

### P0 — Ship on this branch, Dog.com first

1. **Load real fonts via `next/font/google`.** Wire Playfair Display + DM Sans for
   Dog.com. Apply the same pattern to the other 4 sites once Dog.com is proven.
2. **Refine the trust bar.** Dark slim band with thin separators, no emoji checks.
3. **Polish hero stat cards.** Bigger numerals, no emoji, tighter rhythm.
4. **Replace homepage category emojis with a small SVG line-icon set.** Single
   visual voice for the 8 "Health by Topic" categories.

### P1 — Next round (separate branches per change)

5. Fix mobile hero — show hero image above headline on small viewports.
6. Constrain content max-width and center on wide displays (>1440px).
7. Footer: increase disclosure contrast, add editorial-standards prominence.
8. Add `placeholder="blur"` + blur data to hero/featured images.
9. Roll the font system to Vets.co → Fish.com → Saddle.com → Lizard.com.

### P2 — Brand depth (later)

10. Custom illustration / icon set unique to the portfolio (not stock).
11. Photography direction document (color grade, lighting, subject framing).
12. Per-site signature interaction (e.g. Saddle.com gets a subtle leather-grain
    texture; Lizard.com gets a slow lime-glow accent on hover).

---

## What I'm NOT doing on this branch

- Not adding new content pages.
- Not fabricating credentials, expert names, testing methodology, or review counts.
- Not changing any existing copy that makes factual claims (200+ breeds, 100+
  articles, 500+ products) — those exist in the codebase and are A2's territory
  to validate.
- Not merging to main.
- Not touching SEO, legal pages, or analytics — outside my lane.
