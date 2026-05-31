---
from: CSRO
to: Visual Bot
status: open
created: 2026-05-31
next_action: Visual Bot — execute on wake (P0). No Carlo needed.
priority: P0
directive: csro-dir-2026-W22-021
---

# Visual identity + real-photo activation (Tier-1 first)

## Why this is P0 (Carlo's words, 2026-05-31)
> "I looked at all the sites and they really look bad. Not professional at all. Very bland.
> Minimal images. No logos. No appeal to make people scroll."

He's right, and the diagnosis is verified:
- **`packages/ui/src/data/image-manifest.json` is EMPTY (0 entries).** `StockImage` renders a gray
  placeholder for every missing key — so the whole manifest image layer is blank.
- **Only ONE page wires the manifest** (`horses-com:hero`). Every other page uses hardcoded
  `<Image>` URLs or nothing.
- **Zero logos. Zero image files. No Hero component.** Homepages are text-card grids with emoji.

## Carlo's curation policy (LAW for this directive — do not deviate)
- **Do NOT wire the Unsplash/Pexels API into CI or Vercel builds.** No API keys, no secrets,
  no build-time fetching. Builds must NOT depend on an external photo API.
- **Hand-curate** a focused, high-quality real-photo set into the manifest manually.
- **Quality bar:** real, relevant, inspectable images. **Avoid** generic stocky photos,
  dark/blurred images, fake-looking scenes, AI-generated animals/humans, and irrelevant
  lifestyle filler. Tier-1 fit/quality matters more than coverage.
- **Preserve Unsplash/Pexels photographer attribution** (TOS — QC §1).
- Start with **~30–50 high-quality images total.**
- Phase 2 (API-assisted expansion) only after this curated set proves the direction, and only
  with quality filters + attribution handling + no build fragility. **Not now.**

## Priority order (Tier 1 → out)
1. **Dog.com** — ⚠️ has ZERO entries in `image-queries.json`. Add slots first (see below).
2. **Fish.com**
3. **Horses.com**
4. **Vets.co**
5. **PetFood.com**
(Then ferret/ferrets/saddle/lizard/petfoods with leftover budget.)

## The work (3 parts)

### Part A — Curate the manifest (no API)
`scripts/image-queries.json` ALREADY specs 52 slots (query + alt + orientation) for every site
EXCEPT Dog.com. For each Tier-1 slot, hand-pick a specific real Unsplash/Pexels photo and write
a full entry into `packages/ui/src/data/image-manifest.json` matching the `ManifestEntry` shape in
`packages/ui/src/components/StockImage.tsx` (provider, id, url, width, height, color, photographer,
photographerUrl, sourceUrl, alt, query). **Add Dog.com slots** to `image-queries.json` first —
suggested keys: `dog-com:hero`, `dog-com:category-breeds`, `dog-com:category-health`,
`dog-com:category-nutrition`, `dog-com:category-training`, `dog-com:cornerstone-puppy`. Confirm
final keys against what the pages need (Part B).

### Part B — Wire `StockImage` into the pages
Curated entries render nothing until pages use them. Replace hardcoded `<Image>` URLs and bare
emoji headers on Tier-1 homepages + top hubs with `<StockImage manifestKey="...">`. Give each
Tier-1 homepage a real **hero** above the fold. This is the "appeal to make people scroll" fix.

### Part C — Logos / brand identity
No logos exist. **CSRO default (unless Carlo overrides): $0 typographic wordmarks** — a config-driven
`<Logo>` (font + per-site color from `packages/config`), in-repo, no external tools, reversible.
QC §1 forbids fake HUMANS, not logos — wordmarks are fine. Adopt in `Nav`/`Footer` (coordinate
structural changes per CLAUDE.md §5). Upgrade to custom marks in a later phase.

## Constraints / lane
- Stay in Visual lane: `src/components/visual/*`, `packages/ui/src/components/visual/*`,
  `scripts/image-queries.json`, `packages/ui/src/data/image-manifest.json`, `scripts/sync-images.mjs`.
- `Nav.tsx`/`Footer.tsx`/`ArticleLayout.tsx` are SHARED — coordinate via PR before structural change.
- QC §1: no AI humans/animals, no fake headshots, preserve attribution.
- Open a PR rebased on main; keep Tier-1 in early commits so Carlo can eyeball Dog/Fish/Horses fit.

## 5-field score
- **SEO Impact:** Medium-high. Real, relevant images + alt text improve engagement, dwell, image
  search, and reduce bounce — all ranking-adjacent. Hero/scroll appeal lifts Core-Web-Vitals LCP
  only if sized right (use `priority` on hero, correct width/height).
- **GEO Impact:** Medium. Captioned, attributed, relevant imagery + alt text strengthens
  multimodal surfaces (Gemini) and credibility signals AI surfaces weigh; primary-source feel.
- **Monetization Impact:** High (indirect). Bland sites don't convert. Credible, premium visuals
  lift click-through on buy-boxes/reviews → directly feeds the Amazon 180-day 3-sale clock.
- **Build Effort:** M (Tier-1 curate + wire + wordmarks). XL if all 10 sites + custom logos.
- **Priority Level:** P0 — launch-blocking polish; gates first-dollar credibility.
