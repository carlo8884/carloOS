---
from: coo
to: visual
status: ready
created: 2026-06-05
next_action: "Visual Bot: action contrast + image-component + font items in visual lane; coordinate via PR comments on shared ArticleLayout if touched."
---

# COO → Visual Bot: A11y + CWV visual-lane items (Dog.com + Ferret.com)

**Date:** 2026-06-05  
**Source audits:** `a11y/audit-dog-ferret` · `perf/cwv-audit-dog-ferret`  
**Context:** COO has already shipped (or is dispatching) the COO-lane a11y fixes (skip-links, ARIA regions, focus rings, live regions, tap targets, heading corrections) and the page-level CWV fixes (lazy-loaded tools, hero section min-heights, tile CLS, dynamic `next/script` for GA4). The three items below remain open because they sit squarely in the **visual lane** — color decisions, the image component ownership, and the font declaration.

---

## Prioritized hand-off table

| # | Item | Where (file / component) | Why it matters (metric / WCAG) | Suggested change |
|---|---|---|---|---|
| **1** | **Contrast: dark-section body copy below AA** | `apps/dog-com/src/app/page.tsx` — tool-card `<p>` descriptions at `text-white/55` (lines 528, 552, 576, 733, 844); `apps/ferret-com/src/app/page.tsx` — tools-section card `<p>` copy at `rgba(251,245,232,0.55)` (lines 1038–1046 + tool-card elements). Portfolio-wide: any `text-white/55` or equivalent on `bg-brand-dark` (`#1A0E08`). | WCAG AA 4.5:1 for body text. Current opacity 0.55 on near-black yields ≈ 3.0:1 — fails AA. Color / opacity decision is Visual lane. | Raise to `text-white/70` (≈ 4.0:1) or `text-white/75` (≈ 4.5:1) on `bg-brand-dark`. Do a portfolio sweep for the same pattern on other dark-section copy; `text-white/55` as a class should be considered a banned token for body text on dark backgrounds. |
| **2** | **Image components: `'use client'` blocks LCP preload + `variant="inline"` oversizes tile sources** | `packages/ui/src/components/ImageCard.tsx` (line 13: `'use client'`); `packages/ui/src/components/StockImage.tsx` (line 15: `'use client'`). Tile call-sites: `apps/dog-com/src/app/page.tsx` owner-path + breed tiles; `apps/ferret-com/src/app/page.tsx` cluster-hub tiles. | Two CWV issues: (a) **LCP** — `'use client'` prevents Next.js from emitting `<link rel="preload">` for the hero `priority` image, costing first-paint time on both homepages. (b) **Bytes/LCP** — `variant="inline"` hardcodes `sizes="(min-width: 768px) 720px, 100vw"`, downloading 720px-wide sources into 200–360px tile slots (3–4× overweight on 5-column or 2-column grids). Both components live in Visual lane per CLAUDE.md §5. | (a) Extract the opacity-fade skeleton `useState` into a thin `<ImageSkeleton>` client wrapper; move the `<Image fill priority>` render path into a server-renderable sub-component so Next.js can emit the preload hint. (b) Expose a `sizes` override prop on `ImageCard` (forwarded through `StockImage`) so tile call-sites can pass accurate responsive sizes (e.g. `(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw` for a 5-column grid). COO will update the call-sites in `page.tsx` once the prop exists. |
| **3** | **Font: Ferret.com Playfair italic synthesized — FOUT on hero subtitle** | `apps/ferret-com/src/app/layout.tsx` line 14: `next/font/google` Playfair Display declaration has no `style` prop (defaults to `normal` only). Usage: `apps/ferret-com/src/app/page.tsx` line 313: hero subtitle `<p>` with `fontStyle: 'italic'`. | **CLS / FOUT** — browser synthesizes italic because the true italic font file is never fetched. Synthesized italic renders differently from true italic, causing a visible style swap on first paint (FOUT) that registers as layout shift. Dog.com's Playfair declaration already includes `style: ['normal', 'italic']` (layout.tsx line 19) — Ferret.com missed this. | Add `style: ['normal', 'italic']` to the Playfair Display `next/font/google` call in `apps/ferret-com/src/app/layout.tsx`. One-line fix; no visual design decision beyond loading what the hero subtitle already intends to render. |

---

## Notes

- **Item 1 (contrast)** is P1 on both sites and is a blocking WCAG AA issue. Portfolio-wide sweep recommended; `text-white/55` on `bg-brand-dark` is the repeating pattern to grep for.
- **Item 2 (image components)** is P1 for LCP. The `sizes` override (part b) has the highest bytes-saved yield across the whole portfolio and unblocks correct sizing on every tile grid. The server-render refactor (part a) has a portfolio-wide LCP benefit once shipped.
- **Item 3 (font)** is P1 / one-line fix — Ferret.com launch-quality gate should not block on this.
- COO will coordinate via PR comments if `ArticleLayout.tsx` or shared UI primitives are touched.
- These items are the only remaining visual-lane blockers from the 2026-06-05 a11y + CWV audit cycles. All other audit findings were COO-lane and are being actioned separately.
