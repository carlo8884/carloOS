# Portfolio Visual Audit — Per Site

**Date:** 2026-05-30
**Author:** Visual / Brand Bot (A4)
**Base commit:** `34ec395` (main)
**Methodology:** Read `apps/<site>/src/app/page.tsx` + `layout.tsx` + `globals.css` on main, cross-referenced against `ops/handoffs/2026-05-29-stitch-briefs-per-site.md` per-site briefs and the `bot-coordination.md` policy. Trust-bar findings are §1-compliant — no fabricated authority assertions.

---

## Top-level observations across the 10 sites

1. **Typography is now live on 9/10 sites** (via `next/font`). The Georgia + system-ui fallback regression that motivated A4's original work is resolved. PetFoods + Ferrets remain on system fallback — by intent (utility/database tone), but should be audited.
2. **Mobile hero regression persists on 5/10 sites.** Dog / Fish / Horses / Saddle / Lizard still have `hidden lg:block` on the hero right column — mobile visitors see no imagery. This is the highest-incidence visual defect.
3. **Trust bar polish is partially adopted.** Dog.com still uses the `bg-brand-primary-pale` "coupon strip" pattern; PetFood.com does too. Other 8 sites use slim dark mastheads or comparable variants.
4. **Emoji-as-iconography is mostly cleaned**, except Dog.com (16 emoji glyphs in `HEALTH_CATEGORIES` + puppy banner 🐶).
5. **Image-manifest adoption is zero.** `image-manifest.json` is `{}`; every homepage hot-links `https://images.unsplash.com/photo-…` URLs directly. This violates the photo-sourcing playbook (TOS attribution risk + Unsplash CDN dependency at runtime). High-leverage portfolio-wide work.

---

## 1. Dog.com — flagship

**Current posture** — 437-line homepage, Playfair Display + DM Sans wired, original ~2026-05-27 launch-polish era. Hero right column hidden on mobile. Emoji icon set in `HEALTH_CATEGORIES`. Pale-orange "coupon strip" trust bar. Puppy lead-magnet banner uses 🐶 emoji.

**3 things working:**
- Headline rhythm: "Everything / Your Dog / Deserves." with italic orange "Deserves." accent. Strongest moment on the page.
- Eyebrow + 0.5px primary rule pattern is consistent.
- 80-word hero positioning paragraph is research-anchored and §1-compliant.

**5 things bland / templated / wrong:**
- Mobile hero `hidden lg:block` — zero imagery on mobile.
- 8 emoji glyphs in `HEALTH_CATEGORIES` (🔍 🥩 💉 👴 🧬 🦷 ⚖️ 🧠) read as ChatGPT chrome.
- `bg-brand-primary-pale` trust bar with `✓` prefixes — Shopify-discount aesthetic.
- 🐶 emoji on puppy lead-magnet banner.
- Featured-article images are 700×something hot-linked Unsplash URLs at q=80 — no StockImage adoption, no editorial photo direction per brief §1.

**Highest-leverage move:** Apply Stitch brief §1 — restructure homepage as Wirecutter-grade editorial reference (hero / dark trust bar / 6-card category grid / 4 cornerstone articles / editorial positioning band / email capture / footer). Replace emoji + pale strip + hot-link images. Adopt `StockImage` with `dog-com:*` manifest keys.

**§1 violations:** None observed on current main.

---

## 2. Fish.com — aquarium-magazine

**Current posture** — 751-line homepage, Cormorant Garamond + Inter wired. No emoji on homepage. Sandbox shows hero image right column with `hidden lg:block`. Generally polished, matches the aquarium-editorial register.

**3 things working:** Cormorant italic "Fishkeeping," + bold-roman "Done Right." headline; deep aquarium teal palette executes the brief; species cards use `aspect-[4/3]` rhythm.

**5 things bland:**
- Mobile hero hidden-lg-block (same defect).
- Hot-linked Unsplash photo-1571752726703-… in hero, no manifest entry.
- "Editorial pull-quote band" from Stitch brief §2 is absent — no editorial-positioning moment between cornerstones and email capture.
- Water-chemistry tabular numerals not applied to category cards (Stitch brief §2 specifies tabular-nums on pH/GH/KH).
- 7-card category grid uses generic icon set; should incorporate species macro photography per brief.

**Highest-leverage move:** Add the editorial pull-quote band (brief §2 prompt 3) + adopt StockImage for hero + species cards + apply tabular-nums to chemistry callouts.

**§1 violations:** None observed.

---

## 3. Horses.com — equestrian flagship

**Current posture** — 720-line homepage, Playfair Display + Source Sans 3 wired. Forest green palette executes the brief. No emoji. Hero hidden-lg-block.

**3 things working:** Forest green + saddle-leather + brass triad reads as Hermès equestrian; brass-color period in wordmark per brief §3; cornerstone article roster aligns with the content foundation.

**5 things bland:**
- Mobile hero hidden-lg-block.
- No discipline-callout pill component yet (brief §3 specifies it as a signature pattern).
- Hot-linked imagery throughout.
- Pull-quote band missing the brass hairline + brass eyebrow treatment.
- Cornerstone read-time / last-reviewed meta absent (brief §3 specifies `12 min · Reviewed Apr 2026`).

**Highest-leverage move:** Ship the discipline-callout pill component (chip-row above categories: "For English" / "For Western" / "For trail" / "For driving") + pull-quote band + StockImage adoption.

**§1 violations:** None observed.

---

## 4. Saddle.com — luxury reference

**Current posture** — 758-line homepage, Bodoni Moda + Jost wired. Hero hidden-lg-block. Saddle-leather palette. Score badges still use leading emoji glyphs in the data (🏆 / ⭐ / 💰).

**3 things working:** Bodoni Moda high-contrast didone at 80px renders the luxury register correctly; brass hairline pattern partially adopted; sparse footer (per Hermès-catalog restraint).

**5 things bland:**
- Mobile hero hidden-lg-block.
- Featured review badge strings still carry emoji prefix (`🏆 Best Dressage` etc.) — Hermès-catalog register doesn't carry emoji.
- Card hover state lifts heavily (4px + shadow) rather than drawing a brass hairline (brief §4 specifies hairline-only).
- Rounded-pill buttons remain in some places; brief §4 requires 4–6px corner radius (product-tag, not modern-web).
- Pull-quote band on near-black background with brass hairlines above + below not yet shipped (brief §4 specifies this as the brand moment).

**Highest-leverage move:** Mobile hero stack + replace 4-pill button radii with 4–6px + ship the near-black pull-quote band per brief §4 prompt 3 + drop badge-emoji prefixes (text only, no glyphs).

**§1 violations:** Badge text `🏆 Best Dressage` is borderline — fine if methodology is disclosed via `ScoreMethodology`, otherwise softens to `Editorial Pick`. Defer to QC.

---

## 5. PetFood.com — pet nutrition reference

**Current posture** — 425-line homepage, Cormorant Garamond wired. Moss green palette. No `hidden lg:block` so mobile hero may be intact. **Still uses `bg-brand-primary-pale` "coupon strip" trust bar** (same defect as Dog.com).

**3 things working:** Moss-green palette + Cormorant pairing executes the Consumer-Reports brief; data-coded register comes through; PetFoods sibling differentiation visible.

**5 things bland:**
- Pale-moss "coupon strip" trust bar — should be near-black green per Stitch brief §5.
- Hot-linked imagery, no manifest.
- JetBrains Mono not yet adopted for ingredient-list / score tables (brief §5 specifies).
- Cornerstone meta absent.
- No "How we score" pull-quote band per brief.

**Highest-leverage move:** Trust bar to slim dark band + adopt JetBrains Mono for tabular data display.

**§1 violations:** None observed.

---

## 6. PetFoods.com — catalog / database

**Current posture** — 202-line homepage, no `next/font` wiring on layout, fewest emoji, least chrome. Utility-coded.

**3 things working:** Sparse register is intentional and matches the database voice; Inter-everywhere keeps it utility-coded; no decorative bloat.

**5 things bland:**
- No next/font wiring — utility tone but Inter should still be self-hosted for performance.
- 202 lines is too sparse — homepage is essentially a placeholder; needs the catalog-grid + filter-chip UI from brief §6.
- No A–Z brand index surfaced.
- No JetBrains Mono for ingredient strings.
- No clear differentiator from PetFood.com sibling beyond color tone.

**Highest-leverage move:** Build out the catalog homepage per brief §6 — filter chip row + brand A–Z + data-table preview. Likely a 2026-06 task.

**§1 violations:** None observed (and the database register makes them unlikely).

---

## 7. Lizard.com — dark-mode field guide

**Current posture** — 761-line homepage, Zilla Slab + Raleway wired. Dark-mode-first palette. 2x2 species grid persists with `hidden lg:grid`. Mobile gets text-only hero.

**3 things working:** Zilla Slab on near-black renders the field-guide register correctly; lime accent tuned to AA contrast; 2x2 species grid on desktop has strong vertical interest.

**5 things bland:**
- Mobile hero hidden-lg-grid (worse than `hidden lg:block` — no fallback layout).
- Species "husbandry-spec row" (temp / humidity / UVI / size) not yet on cards (brief §7 specifies it as the signature pattern).
- Pull-quote band on the moss-jungle `#1A3F1A` accent background absent.
- Lime accent overused as a fill on buttons; brief §7 reserves lime as accent for editorial moments.
- No "Care difficulty" chip on species cards.

**Highest-leverage move:** Mobile hero fix + species-card husbandry-spec row (tabular numerals) + pull-quote band on moss-jungle accent. This is the most demanding visual brief in the portfolio; ship in 2 PRs (mobile + spec row, then pull-quote + chip).

**§1 violations:** None observed.

---

## 8. Vets.co — clinical authority

**Current posture** — 737-line homepage, Libre Baskerville + Manrope wired. Clinical-teal palette. Hero appears not to have `hidden lg:block` — mobile may render correctly. Specialty-cards present.

**3 things working:** Libre Baskerville + clinical teal renders authority register; "Pet insurance only — no product affiliates" policy honored on this site; sparse footer.

**5 things bland:**
- Specialty cards use generic styling; brief §8 specifies clinical-card pattern with subtle 1px clinical-teal hairlines.
- "Find a Vet" zip-search ABOVE the fold not yet shipped (brief §8 prompt 1 specifies this as the strongest functional CTA).
- Cornerstone clinical articles missing read-time + reviewed-by chain (brief §8 specifies this).
- Hot-linked imagery, no manifest.
- Footer disclosure language is general, not insurance-specific (brief §8 carries pet-insurance-specific disclosure).

**Highest-leverage move:** Ship the zip-search-above-fold component + clinical-card hairline pattern.

**§1 violations:** None observed.

---

## 9. Ferret.com — premium hobbyist editorial

**Current posture** — 750-line homepage, Playfair Display + Source Sans 3 wired. Chocolate + amber palette. No `hidden lg:block` regression. Generally well-polished per brief §9.

**3 things working:** Chocolate + amber palette renders premium indie-magazine register; Playfair italic in hero echoes Dog.com's pattern with appropriate variation; site feels distinct.

**5 things bland:**
- Hot-linked imagery throughout.
- Brand-evaluation card pattern not yet shipped (brief §9 specifies it as the differentiator vs Ferrets.com sibling).
- No "color/pattern field guide" component on homepage.
- Subscription nudge for the monthly brief absent.
- Featured article eyebrows could use amber accent rule for consistency with sister Ferrets.com.

**Highest-leverage move:** StockImage adoption + brand-evaluation card pattern.

**§1 violations:** None observed.

---

## 10. Ferrets.com — directory / library

**Current posture** — 252-line homepage, no next/font wiring, lightest chrome. Library/directory voice.

**3 things working:** Sparse register intentional for directory voice; lighter chocolate vs Ferret.com differentiates the sibling pair; no decorative bloat.

**5 things bland:**
- No next/font wiring (system fallback).
- 252 lines is too sparse — homepage feels placeholder.
- No state-by-state legality table preview (brief §10 specifies this as the signature pattern).
- No "shelter directory" surfacing.
- No A–Z breed/species index.

**Highest-leverage move:** Ship the state-legality table preview component on the homepage. Likely a 2026-06 task once the underlying data is sourced.

**§1 violations:** None observed (utility register makes them unlikely).

---

## Cross-portfolio queue (this bot's plan)

Per master prompt §7.3, week-1 visual-bot shipping order:

| Order | Site | Branch | Status |
|---|---|---|---|
| 1 | Dog.com | `visual-bot/dog-com-magazine-polish-2026-05-30` | **Shipping this session** |
| 2 | Saddle.com | `visual-bot/saddle-com-luxury-polish-2026-05-30` | Queued (this session if budget allows; next session otherwise) |
| 3 | Lizard.com | `visual-bot/lizard-com-fieldguide-dark-2026-05-30` | Queued |
| 4 | Horses.com | `visual-bot/horses-com-discipline-pills-2026-06-01` | Queued (week 2) |
| 5 | Fish.com | `visual-bot/fish-com-editorial-band-2026-06-01` | Queued (week 2) |
| 6 | Vets.co | `visual-bot/vets-co-zip-search-2026-06-01` | Queued (week 2) |
| 7 | Ferret.com | `visual-bot/ferret-com-brand-eval-2026-06-02` | Queued (week 2) |
| 8 | PetFood.com | `visual-bot/petfood-com-trust-bar-2026-06-02` | Queued (week 2) |
| 9 | PetFoods.com | `visual-bot/petfoods-com-catalog-grid-2026-06-03` | Queued (data-pending) |
| 10 | Ferrets.com | `visual-bot/ferrets-com-legality-table-2026-06-03` | Queued (data-pending) |

Closed as stale during triage: PR #28 (Dog.com), #23 (Saddle.com), #24 (Lizard.com). Vets.co #21 + Fish.com #22 still open — flagged in handoff brief for separate triage (this bot will revisit alongside week-2 work).

---

## Trust-bar guardrails — what this audit did NOT do

Per QC-STANDARDS.md §1 + `bot-coordination.md` §3:
- No AI-generated human imagery proposed.
- No fake DVM / clinical credentials suggested in any layout proposal.
- No removal of FTC disclosure components proposed.
- No "as seen in" / press-strip / fabricated subscriber count proposals.
- Existing trust claims preserved verbatim; rewording is A2 / COO lane, not visual.

---

## Photography direction (deferred to image-manifest PRs)

This audit does not modify any photography. New homepage work in queued PRs will:
- Add manifest entries to `scripts/image-queries.json` with proper alt text + photographer-attribution awareness.
- Adopt `<StockImage manifestKey="…" />` for every image larger than 240px.
- Render `bg-brand-surface` placeholder until Carlo runs `node scripts/sync-images.mjs` and populates `packages/ui/src/data/image-manifest.json`.
- Never inline hot-link `https://images.unsplash.com/photo-…` URLs.

Per `bot-coordination.md` §9, this avoids Vercel build-time CDN fetches and respects Unsplash + Pexels TOS attribution.
