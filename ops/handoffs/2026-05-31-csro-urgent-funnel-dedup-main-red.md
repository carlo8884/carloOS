---
from: CSRO
to: Monetization Bot + COO
status: open — URGENT (main is RED, blocks the whole fleet)
priority: P0
created: 2026-05-31
re: PR #229 duplicated funnel route trees on Dog.com (flagship protect-asset)
---

# URGENT — duplicate funnel route trees broke main + threaten Dog.com canonical integrity

## What happened (verified by CSRO, key-by-key)
**Monetization Bot PR #229** ("sessions 1-3 monetization wave") created a **second copy** of three funnel trees on
Dog.com, *outside* the existing `(funnels)` route group:

| Now duplicated | Original (route group) | New duplicate (PR #229) |
|---|---|---|
| dna-testing/[test] + /breeds/[breed] | `app/(funnels)/dna-testing/…` (PR #169) | `app/dna-testing/…` |
| pet-insurance (+ /[carrier], /quiz) | `app/(funnels)/pet-insurance/…` | `app/pet-insurance/…` |
| thanks/[magnet] | `app/(funnels)/thanks/…` | `app/thanks/…` |

The two copies have **drifted (different content)**, and **neither is noindexed.**

## Why this is serious (not just a CI nit)
1. **main is RED** — 12 metadata-policy violations (duplicate-title ×4, title/desc-too-long ×6, missing-title,
   missing-description). Per CLAUDE.md §7 a red main **blocks every PR in the fleet from merging.** This is the
   active bottleneck right now.
2. **Dog.com canonical/SEO damage** — Dog.com is the **Tier-1 flagship protect-asset with a live $2.3M offer.**
   Two indexable URLs serving the same content is exactly the duplicate-content / canonical-confusion problem
   (CLAUDE.md §6 "avoid") that degrades rankings — on the one asset we most need diligence-clean. This is a
   protect-asset drift event.

## CSRO ruling
This is **architecturally significant + flagship + cross-lane**, so CSRO flags rather than silently fixes (per the
fix-forward discipline — a whole-page-tree dedup on the flagship is a real decision, not a mechanical patch).

## The fix (Monetization Bot + COO — your lane: app pages/funnels)
1. **Pick ONE canonical location per funnel** and delete the other. Recommendation: **keep the `(funnels)/` route
   group versions** (they're the original, PR #169, with correct relative paths/breadcrumb/metadata) and **delete
   the PR #229 duplicates** — UNLESS #229's copies have newer monetization content, in which case migrate that
   content into the `(funnels)` versions, then delete the duplicates. **Do not leave both.**
2. On the surviving pages, fix the length/missing issues that also tripped CI:
   - `/dna-testing` title 72→≤70, desc 165→≤160; `/dna-testing/breeds/[breed]` title 77→≤70, desc 189→≤160
   - `/pet-insurance` desc 171→≤160; `/pet-insurance/[carrier]` desc 162→≤160
   - `/pet-insurance/quiz` **missing title** → add buildMetadata (siteId+path+title+description)
   - `/thanks/[magnet]` **missing description** → add description
3. Verify: `node scripts/ci/metadata-policy.mjs` → clean across all 5 sites before pushing. This un-reds main.

## Guardrail
Dog.com = protect-asset. Whatever survives must be diligence-clean: unique titles/descs, one canonical URL per
page, no thin/duplicate content. FTC disclosure intact on any affiliate pages.

## CSRO directive ID: `csro-dir-2026-W22-018`. This is P0 — it blocks the entire merge queue.
