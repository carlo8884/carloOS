---
from: CSRO
to: Visual
status: open
created: 2026-06-02
next_action: Visual applies the premium first-screen standard + D3 stock heroes to the priority-8, cohort order
---

# CSRO → Visual: Premium first-screen + hero imagery (priority-8 cohort)

## Context
COO-lane launch-polish is **complete** across all 8 priority sites (#414–#422): breadcrumbs, hub
ItemList, FAQ/Definition schema, orphans, duplicate consolidation, sitemap-priority hygiene — all
clean and CI-green. Per the premium audit (`ops/handoffs/2026-06-01-visual-to-csro-premium-preview-audit.md`)
and the Launch Bar, **the remaining launch-gating gap is now singular and Visual-owned: distinct hero
imagery + premium first-screen identity (gates 1/5/6).** Nothing else blocks the first launch cohort.

Authoritative spec: **`ops/csro/premium-first-screen-standard.md`** (D5). Decisions locked: D3 (stock
now via `scripts/sync-images.mjs` on Carlo's Mac — sandbox can't fetch; commission later; **no spend
without Carlo approval**), D4 (Horses ≠ Saddle hero art), D1 (Horses hybrid: broad equine authority +
prominent `/racing` flagship entry on the first screen).

## The five-field framing (per the SEO/GEO/Authority charter)
- **SEO Impact:** Low-direct, but premium first-screen reduces bounce + raises dwell/engagement signals; hero `ogImage` improves SERP/social CTR.
- **GEO Impact:** Indirect — AI surfaces cite primary-source artifacts; original/curated photography is a differentiation signal acquirers and crawlers both read.
- **Monetization Impact:** Indirect but real — premium identity lifts trust → conversion on the already-monetized commercial surfaces.
- **Build Effort:** M per site (hero asset selection + first-screen composition); XL across the cohort.
- **Priority Level:** **P0** — this is the only thing standing between the first 3–5 sites and launch-ready.

## Per-site hero direction (from the audit + premium-first-screen-standard §5)
Cohort order = Ferret → PetFood → Vets → Fish → Saddle → Lizard → Horses → Dog.

| Site | First-screen identity | Hero needed | Notes |
|---|---|---|---|
| **Ferret** (launch #1) | Warm niche owner hub | **Real ferret hero** (fix wrong-species defect, brief #372) | Highest-priority single hero. Owner-intent first screen. |
| **PetFood** | A food-scoring product | Ingredient macro (NOT dog-with-bowl cliché) | Food-cost calculator already embedded; frame it as the hero product. |
| **Vets** | Clinical reference desk | Texture-led, non-human clinical | Strictest trust — **no AI-generated humans / no fake clinical scenes** (QC §1). |
| **Fish** | Tank control center | Aquascape | Frame embedded calculators as the "control center." |
| **Saddle** | Premium tack buyer's guide | **Its OWN luxury tack/leather hero** (D4 — must NOT share art with Horses) | |
| **Lizard** | Dark-mode reptile field guide | Dark habitat/reptile | Theme already distinct — lean in. |
| **Horses** | Broad premium equine authority + **visible `/racing` flagship entry** (D1) | Distinct equine hero (≠ Saddle) | Racing is a prominent vertical on the first screen, not the whole identity. |
| **Dog** | The dog owner's operating system | Emotional real-dog / owner moment | Breed-match wizard embedded — make it read as the hero product. |

## Portfolio-wide (also Visual-owned, surfaced by the Wave-2 audit)
- **Per-page `ogImage` is ~0 on 8 of 10 sites** (Ferret has zero — flagged P0 for launch #1). `defaultOgImage`
  is wired in `packages/config/index.ts` for every site, but real OG assets + per-page `ogImage` on
  homepages/hubs/top commercial pages are a Visual deliverable. COO cannot source images in-sandbox.
- Make each embedded homepage tool read as the hero **product** (composition/framing), not a dropped-in widget (N3).

## Trust guardrails (QC-STANDARDS.md §1 — non-negotiable)
- No AI-generated humans (no fake vet headshots, author portraits, clinical scenes).
- Preserve Unsplash/Pexels photographer attribution (TOS).
- Correct-subject rule: real ferret on Ferret, aquascape on Fish, ingredient macro on PetFood, etc.

## Done-when
Each redesigned site re-runs: launch-polish checklist → 7-gate bar → IR → advisor. CSRO re-checks the
7 gates per site. A stranger shown only the first screen names the domain and believes it is the
category-owning product within 2 seconds.

## Handback
Reply to CSRO via PR + `ops/handoffs/visual-*.md` per site as heroes land, so CSRO can re-gate and
advance the launch cohort.
