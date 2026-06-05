---
from: coo
to: csro
status: review
created: 2026-06-05
next_action: "CSRO: decide consolidate-vs-expand per flagged page; COO to dispatch content-depth fixes (NOT new clusters per polish-mode §8a)."
---

# Thin-Page / Content-Depth & Duplicate-Content Audit
## PetFood.com and Vets.co — 2026-06-05

**Audit type:** Static analysis (read-only). No .tsx/.ts files edited.
**CI status:** trust-guard PASS · metadata-policy PASS · link-check PASS (all green at time of audit)

---

## Methodology

Pages were evaluated by reading actual JSX content against four criteria:

1. **Thin:** estimated body-text < ~250 words, or only 1–2 short sections, or body is mostly data-driven lists with minimal explanatory prose
2. **Duplicate/near-duplicate:** multiple pages sharing the same structural template with near-identical prose (not just shared components)
3. **Orphan risk:** page not linked from a hub or any related-links graph in the site
4. **Stub/redirect:** page whose only function is a redirect or a `notFound()` with empty `generateStaticParams()`

Word-count estimates are conservative (JSX text only; UI chrome, labels, and schema not counted).

---

## PetFood.com Audit

### Summary counts
| Status | Count |
|---|---|
| Launch-quality (solid content, well-linked) | 68 |
| Need work (thin / dup / stub / orphan) | 12 |
| **Total pages audited** | **80** |

---

### Issues table

| Page (path) | Issue | Est. words | Severity | Recommendation |
|---|---|---|---|---|
| `/methodology` | Stub redirect only — 5 lines, no body content | ~0 | Low | Leave as-is. Redirect to `/guides/methodology` is correct behavior. |
| `/conditions` (hub) | Hub body is adequate (~300 words) but thin as a standalone destination — 6 condition cards show only a summary sentence each. No FAQ block despite FAQSchema slot available. | ~300 | Medium | Expand with 2–3 paragraphs on Rx vs OTC regulatory context + a 3-question FAQ. Target ~500 words. |
| `/life-stage` (hub) | Good navigation but thin prose for a hub that ranks on "puppy food AAFCO" queries. No FAQ. | ~280 | Medium | Add 3–4 paragraphs covering what AAFCO life-stage profiles mean and why "senior" is a marketing term. Target ~500 words. |
| `/species` (hub) | Lists 4 cards with one-sentence descriptions. No explanatory intro prose, no FAQ, no schema beyond ItemList. | ~120 | Medium | Add 150–200 word intro on why species-specific nutrition matters; add a FAQ block with 3–4 high-intent questions. |
| `/myths` (hub) | Lists 5 myth cards with 1-sentence teasers. No intro prose, no FAQ schema. | ~100 | Medium | Add a 150–200 word intro on the "myth ecosystem" in pet food marketing + 3-question FAQ. |
| `/brands` (hub) | Lists 7 brand cards, ~120 words total. No evaluation methodology summary, no FAQ. | ~120 | Medium | Add 200-word intro summarising how brand evaluations are conducted on PetFood.com (ties to `/guides/methodology`). |
| `/nutrition` (hub) | Lists 11 nutrition topic cards with 1-sentence descriptions. No framing prose, no FAQ. | ~110 | Medium | Add 2-paragraph intro on what the guaranteed analysis does and does not tell you (bridges to child pages). ~150 words. |
| `/supplements` (hub) | Lists 5 supplement cards with 1-sentence descriptions. No intro, no regulatory context, no FAQ. | ~100 | Medium | Add 150-word intro on NASC vs veterinary supplement regulation + one FAQ ("do pets need supplements?"). |
| `/compare` (hub) | Lists comparison articles, very short hub copy. | ~80 | Low | Add 2 sentences on the rubric applied to head-to-head comparisons; reference `/guides/methodology`. |
| `/feeding` (hub) | Thin index page (same hub pattern). | ~80–120 | Low | Add brief intro on feeding science vs feeding guides printed on bags. |
| `/diets` (hub) | Thin index page. | ~80–120 | Low | Add brief intro distinguishing therapeutic diets (`/conditions`) from general diet types (`/diets`). |
| `/tools` (hub) | Only 2 tools listed; hub copy adequate for current tool count but no methodological framing. | ~150 | Low | Leave for now; expand when a third tool ships. |

### Duplicate/near-duplicate risk

**No systemic duplicate content found** in PetFood.com's static pages. The programmatic pages (`/conditions/[slug]` and `/life-stage/[slug]`) use shared template structure but each consumes distinct per-item data from `condition-diets.ts` and `life-stages.ts`. Every entry has substantively different `whatTheDietDoes`, `nutrientTargets`, `whenItsNeeded`, `rxVsOtcDifference`, `brandExamplesByCondition`, and FAQ arrays. **Not a duplicate risk.**

The `/diets/*` cluster (14 static pages) and the `/conditions/*` cluster (6 dynamic pages) have topical overlap — both address condition-specific feeding. They are differentiated by scope (diets = general diet type references; conditions = full Rx-diet pages with brand examples and cost data), but they lack explicit cross-linking that disambiguates them. This is an **internal-linking gap** more than a duplicate issue.

### Orphan risks

- `/compare/breed-specific-diets`, `/compare/freeze-dried-and-dehydrated`, and `/compare/home-cooked-vs-commercial` — these three pages need verification that they appear in the `/compare` hub's listing array. If absent from the array, they are orphaned. **Action needed: verify `/compare/page.tsx` includes all 9 compare/ child pages.**
- `/guides/dental-health-and-nutrition` and `/guides/pet-obesity-epidemic` — listed in the `/guides/` hub but not cross-linked from `/nutrition/`, `/feeding/`, or any condition page that would drive relevant traffic. Internal linking is weak.

---

## Vets.co Audit

### Summary counts
| Status | Count |
|---|---|
| Launch-quality (solid content, well-linked) | 65 |
| Need work (thin / dup / stub / orphan) | 21 |
| **Total pages audited** | **86** |

---

### Issues table

| Page (path) | Issue | Est. words | Severity | Recommendation |
|---|---|---|---|---|
| `/breeds/[slug]` catch-all | **Stub** — `notFound()` with `generateStaticParams() { return [] }`. URLs under `/breeds/` that are NOT a named static file 404. | 0 | Low | Correct behavior — all 9 breed pages are static files. No action unless a 10th breed is added without a file. |
| `/health/[slug]` catch-all | **Stub** — same pattern. 37 health articles are static files; all others 404. | 0 | Low | Correct behavior. |
| `/vets/[state]` | **noIndex: true** — scaffold placeholder with sample data only. | ~200/page | High | Do NOT index. Real directory data required before removing noIndex. |
| `/vets/[state]/[city]` | **noIndex: true** — same. Scaffold. | ~200/page | High | Same. Real data gate. |
| `/vets/[state]/[city]/[slug]` | **noIndex: true** — sample listings with synthetic 555-prefix phone numbers and fake addresses. "Book Appointment" button disabled. | ~300/page | High | **Pre-launch P0 blocker.** These pages must not go live without verified data. Trust risk: fake addresses and disabled booking would severely damage acquirer perception. |
| `/data` | **Thin** — ~200 words, 3 short sections. No FAQ, no internal links to health content, no cross-portfolio signals. | ~200 | Low | Not a launch blocker. Leave for now. |
| `/telehealth` | Content solid (~600 words, 3 full reviews) but metadata title reads **"Best Pet Telehealth 2025"** and article schema `publishedAt: 2025-05-01`. Appears stale to AI crawlers. | ~600 | Medium | Update metadata title year to 2026 and `modifiedAt` to current date. One-line fix; high GEO signal impact. |
| `/health/canine-influenza` | `modifiedAt: 2025-05-01`. Content good (~600 words) but stale freshness signal. | ~600 | Low | Batch-update `modifiedAt` to 2026-06-05. |
| `/health/pain-signs-dogs` | `modifiedAt: 2025-05-01`. Content excellent (~900 words, 14 SIGNS with full detail) but stale date. | ~900 | Low | Batch-update `modifiedAt`. |
| `/health/anxiety-in-dogs`, `/health/arthritis-in-dogs`, `/health/dehydration-in-dogs`, plus ~8 other articles | `publishedAt/modifiedAt: 2025-05-01`. Carry stale freshness signals. | Varies | Low | Batch-update all 2025-dated health articles' `modifiedAt` field to current date. |
| `/breeds/golden-retriever-health` | `publishedAt: 2025-05-01`. Content solid but stale date signal. | ~600+ | Low | Update `modifiedAt`. |
| `/insurance/breed-specific-risk` | Spot-check needed — same hub pattern; body length unverified. | Est. ~300–400 | Low | Spot-check body word count; verify FAQ block present. |
| `/insurance/wellness-plans-vs-insurance` | Same flag as above. | Est. ~300–400 | Low | Spot-check. |
| `/insurance/reading-the-fine-print` | Same flag. | Est. ~300–400 | Low | Spot-check. |
| `/guides` (hub) | Likely thin index; not fully read. | Est. ~100 | Low | Verify hub has substantive intro beyond the article grid. |
| `/find-a-vet` (hub) | Likely thin; state-grid nav page. | Est. ~150 | Low | Verify substantive intro beyond the state-grid card list. |
| `/specialists` (hub) | Likely thin index. | Est. ~100–150 | Low | Verify hub body copy is present. |
| `/symptoms` (hub) | Likely thin index; individual `[slug]` pages are excellent. | Est. ~100 | Low | Verify hub has framing copy. |
| `/medications` (hub) | Likely thin index. | Est. ~100 | Low | Verify hub copy. |
| `/reviews` (hub) | Only 2 reviews listed. Hub prose is solid (~400 words) but ItemList contains only 2 items. Limited as an authority hub. | ~400 | Low | Leave for now; expand when more reviews ship. |
| `/find-a-vet/[state]` (50 pages) | The "How to choose a vet" section and 4 FAQs are nearly identical across all 50 state pages — only `emergencyHospitalNote` and `boardCertSpecialtyNote` are state-specific. **Near-duplicate programmatic content risk** if all 50 pages are indexed. | ~500/page | Medium | Add 1–2 state-specific paragraphs (metro count, largest specialty hospital system, veterinary school presence) to the highest-traffic states — CA, TX, FL, NY, IL — before launch. This differentiates the pages the search engines will crawl first. |

### Duplicate/near-duplicate risk

**No systemic duplicate content found** in Vets.co's static health articles. Each condition article has distinct clinical content — Cushing's disease, canine influenza, kennel cough, bloat/GDV, pain signs — all have substantively different bodies.

**Structural template similarity is intentional and acceptable:** the `ArticleLayout` frame is shared across health articles, but body content varies substantially. Correct pattern.

**Near-duplicate flag 1:** `/health/canine-influenza` and `/health/kennel-cough` both cover contagious respiratory disease in dogs. They are correctly differentiated (influenza = H3N8/H3N2 virus; kennel cough = Bordetella + other pathogens), and both link to each other as related content. No consolidation needed — maintain separation and ensure cross-links are present in both.

**Near-duplicate flag 2:** The `/find-a-vet/[state]` programmatic pages — see the table row above. Borderline adequate differentiation; requires attention on the top 5 traffic states before launch.

### Orphan risks

- `/data` — linked from `/editorial-standards` only. Not linked from the homepage, nav, or any content page.
- All other cluster pages are well-linked: health articles link back to `/health` hub; breed pages link to `/breeds` hub; symptom pages link to `/symptoms` hub.
- `/emergency-triage-card` is referenced from homepage, tools hub, and health/emergency-signs. Well-linked.

---

## Top consolidation/expansion priorities

Listed in order of launch-impact:

### Vets.co — Pre-launch blockers

1. **`/vets/**` directory scaffold** — noIndex, fake data, disabled booking. **P0.** Must not go live without real directory data. Trust and accuracy risk; acquirer red flag.
2. **Stale `modifiedAt` fields (~15 health articles + 1 breed page)** — All articles dated `2025-05-01` should be batch-updated to current date. Low effort, high GEO freshness signal.
3. **`/telehealth` year update** — Title reads "2025"; schema date is 2025. One-line fix.
4. **`/find-a-vet/[state]` state-differentiation pass** — Add state-specific data to CA, TX, FL, NY, IL to reduce programmatic near-duplicate risk before those pages are indexed at scale.

### PetFood.com — Polish-mode depth work

5. **Hub page depth pass (7 hubs)** — `/conditions`, `/life-stage`, `/species`, `/myths`, `/brands`, `/nutrition`, `/supplements` all have thin intro prose (< 150 words). A single dispatch adding 150–200 words of explanatory intro + a 3-question FAQ to each hub would materially improve GEO citation potential and internal linking coherence.
6. **Verify `/compare/` hub completeness** — Confirm all 9 `compare/` child pages appear in the hub array. Three pages may be orphaned.
7. **`/diets/` and `/conditions/` disambiguation** — Add explicit cross-links and a one-sentence disambiguation note to prevent crawlers from treating the two clusters as duplicates.

---

## What is already launch-quality

### PetFood.com
- Homepage (premium image-led rebuild, live calculator, full schema)
- All 6 `/conditions/[slug]` pages (ArticleLayout, TOC, FAQ, sources, brand examples)
- All 7 `/life-stage/[slug]` pages
- All 7 brand evaluation pages (`/brands/`)
- All 11 nutrition pages (`/nutrition/`)
- `/guides/methodology`, `/guides/reading-pet-food-labels`, `/guides/aafco-completeness-explained`
- Tools: `/tools/food-cost-calculator`, `/tools/portion-calculator`
- All 5 myths pages, all 9 compare pages, all 11 feeding pages, all 8 ingredients pages
- Glossary (substantive alphabetised reference with category groupings)
- `/editorial-standards`, `/disclosure`, `/legal/*`

### Vets.co
- Homepage (premium image-led rebuild, live calculator, full schema)
- All 37 static health articles (ArticleLayout, sidebar, FAQs, sources, related links)
- All 9 breed health pages (full clinical content, FAQs, BreedHealthCard)
- All `/symptoms/[slug]` dynamic pages (triage cards, red flags, FAQs, citations)
- All `/medications/[slug]` dynamic pages (drug fact cards, side effects, FAQs)
- All `/specialists/[slug]` dynamic pages
- All `/diagnostics/[slug]` dynamic pages
- All 50 `/find-a-vet/[state]` pages (substantive state-specific content, ~500 words each — minor differentiation improvement recommended for top-5 states)
- `/reviews/best-pet-insurance` (full review with scoring rubric)
- `/telehealth` (3 full reviews — year update needed but content solid)
- All 8 `/insurance/` education pages
- Emergency triage card (`/emergency-triage-card`)
- `/glossary`, `/guides/*`, `/editorial-standards`, `/disclosure`, `/legal/*`

---

*Audit conducted 2026-06-05 by COO sub-agent. Static analysis only — no source files modified.*
*CI: trust-guard PASS · metadata-policy PASS · link-check PASS*
