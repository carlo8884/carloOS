# 100-Pages-Per-Domain Program (Carlo directive, 2026-06-01)

**Owner:** CSRO (plans + dispatches, does NOT ask Carlo) · **Mandate:** every "big" production
domain reaches **≥100 substantive, cluster-structured, QC-clean pages** before launch. Fleet works
**by domain**: Content builds pages, COO does structure/SEO, Visual does identity/imagery,
Monetization does buy-boxes — all on the same domain's pages. One domain at a time, ferret first.

**This supersedes the earlier ~70-page ferret target.** Evidence basis: `launch-depth-strategy.md`
(depth speeds ranking 57%, thin loses the visitor, but every page must be substantive — site-level
quality classifier punishes thin-at-scale). 100 = the practitioner threshold for first few-$K/mo.

---

## Baseline (2026-06-01) + gap to 100

| Domain | Pages now | Gap to 100 | Priority | Notes |
|---|---|---|---|---|
| **dog-com** | 156 | ✅ DONE | — | flagship, already deep — needs cleanup not pages |
| **fish-com** | 87 | +13 | P2 | close; finish clusters |
| **lizard-com** | 67 | +33 | P2 | |
| **vets-co** | 66 | +34 | P3 | YMYL — slow rank anyway; structure-heavy |
| **saddle-com** | 57 | +43 | P2 | luxury commerce |
| **ferret-com** | 34→building | **+66** | **P0 NOW** | launch pilot, in progress |
| **horses-com** | 28 | +72 | P1 | racing fork pending — build fork-agnostic clusters |
| **petfood-com** | 18 | +82 | P1 | high commercial intent |
| **petfoods-com** | 8 | +92 | P3 | ingredient DB — programmatic-friendly |
| **ferrets-com** | 8 | +92 | P3 | legality directory — programmatic |

**Build order:** ferret (P0, live) → petfood + horses (P1, biggest editorial gaps w/ revenue) →
fish + lizard + saddle (P2, finish to 100) → vets + petfoods + ferrets (P3, structure/programmatic).

## Quality gate (NON-NEGOTIABLE — applies to every page)
- Fact-dense (≥1 verifiable fact / ~80 words), original, cited where clinical
- hub→spoke, reciprocal internal links, JSON-LD on every page
- QC §1: no fake credentials/testing/AI-humans; §1.5.a no dose ranges; §1.5.b no clinical buy-boxes
- **NO thin filler to pad the count** — a thin page is net-negative (site-level classifier). Better
  90 great than 100 mixed. The 100 is a floor of GOOD pages, not a quota of any pages.

## Per-domain fleet jobs (all 4 lanes work each domain)
1. **Content agents** (CSRO dispatches, non-overlapping clusters): build the spoke pages to ≥100.
2. **COO**: nav exposes all hubs, sitemap regen, robots/AI-crawler, breadcrumbs, JSON-LD coverage,
   internal-link graph audit, homepage hub surfacing.
3. **Visual**: per-domain identity (wordmark), hub heroes w/ real-attribution photos, theme
   differentiation, scroll-appeal. (Carlo policy: $0 wordmarks, hand-curated real photos, no API.)
4. **Monetization**: buy-boxes on commercial-intent pages via /go routing, disclosure, fix untracked
   links. NO clinical/Rx monetization (§1.5.b).

## CSRO execution loop (autonomous — no Carlo)
- Dispatch content agents per domain on non-overlapping clusters (CLAUDE.md §7).
- Verify each batch: trust-guard + metadata + link-check + dose/clinical sweep before it counts.
- Land orphaned agent files in the shared tree (CLAUDE.md §7 — commit complete files immediately).
- After each domain hits 100 + QC-clean + structure + visual + monetization → ready-to-launch;
  the ONLY remaining step is Carlo's DNS + Vercel domain + Amazon tag (~15 min, his hands only).
- Move to next domain. Maintain the per-domain cluster maps in `ops/csro/<domain>-build-map.md`.

## What still requires Carlo (the only non-bot steps)
DNS pointing (Network Solutions) · Vercel production domain attach · Amazon/affiliate tag env vars.
Everything else — build, structure, visual, monetization — the fleet does without him.
