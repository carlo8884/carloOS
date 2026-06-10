---
from: coo
to: carlo
status: review
created: 2026-06-07
next_action: "Carlo: review per-site punch-list; COO fixes the open items before DNS."
---

# Launch-Readiness QA Punch-List — Dog.com + Vets.co

**Base commit:** `543fffc8` (origin/main HEAD at audit time)
**Audit type:** read-only (no app code touched) against the §8a launch-quality bar
**CI posture on main:** `trust-guard` PASS (1184 TSX, 0 hits) · `metadata-policy` PASS (10 sites) · `link-check` PASS (0 broken internal links, 10 sites)

> **Verdict up front**
> - **Dog.com — GO with minor cleanup.** No Tier-1 trust/valuation risk. One unsourced stat and a portfolio-wide review-schema pattern to soften. Genuinely close to launch-quality.
> - **Vets.co — CONDITIONAL GO.** The `/vets/**` directory scaffold is handled *correctly* (noindex + visible sample banners + synthetic 555/placeholder data + disabled CTAs) — it is NOT a Tier-1 risk as feared. Conditional only on the same shared review-schema softening + one unsourced-claim sweep on the insurance review.

The launch blockers people usually worry about (broken links, missing disclosures, fake credentials, orphan hubs, dead tools) are **clean** on both sites. Open items are mostly Medium/Low polish.

---

## Dog.com

| Criterion | Status | Evidence (path/url) | Fix owner |
|---|---|---|---|
| 1. trust-guard / metadata / link-check posture | **PASS** | All three gates green on main. Homepage trust copy softened ("Research-based", "Products compared, not paid placements") — `apps/dog-com/src/app/page.tsx:435-447`. Bylines use `reviewedBy="Editorial team"` — `reviews/best-pet-insurance/page.tsx:77`. | — |
| 1b. Advisory: unsourced statistic | **RISK** | `reviews/best-pet-insurance/page.tsx:132` — "99% member satisfaction rate in independent surveys" with no inline source (QC §1.5). Either cite or soften. | COO + Monetization |
| 1c. Advisory: review-schema rating base | **RISK** | `buildProductSchema` emits `AggregateRating` with `reviewCount: 1` + a 9.4 editorial score — `packages/ui/src/components/SEOHead.tsx:194-210`, used at `reviews/best-pet-insurance/page.tsx:34-36`. An editorial score is not an aggregate of 1 review; Google may flag the review snippet, and it brushes QC §1.4. Also `image: ''` is emitted when `imageUrl` is blank (invalid). Portfolio-wide shared-component pattern, not Dog-specific. | COO (schema) / Monetization (rating data) |
| 2. No thin / duplicate pages | **PASS** | Broad sample clean. The one apparent dup — `/health/dog-pyoderma-guide` (64 words) — is a deliberate `redirect('/health/dog-pyoderma')`, not a thin page (`health/dog-pyoderma-guide/page.tsx:1-10`). Hubs and articles are substantive (conditions 2188w, symptoms 1763w, pancreatitis full ArticleLayout). | — |
| 3. Homepage → hub → spoke structure | **PASS** | Home routes to every hub: `/symptoms`, `/breeds`, `/health`, `/nutrition`, `/training`, `/reviews`, `/tools`, `/find-a-vet`, `/puppy-schedule` (`app/page.tsx`). Nav covers Breeds/Health/Nutrition/Training/Compare/Reviews/Find-a-Vet (`packages/config/index.ts:561-569`). Footer adds Symptoms/Conditions/Tools/Guides/FAQ/Data. | — |
| 4. Orphan pages | **PASS** | No true orphans. `/data` (Data Partnerships) is reachable site-wide via footer (`packages/config/index.ts:751`). `/which-pet` is the embedded homepage wizard + footer link. `/glossary`, `/faq`, `/conditions`, `/find-a-vet` all linked. | — |
| 4b. Note: internal/admin routes | **PASS (info)** | `/admin` and `/dashboard/revenue` exist (client-auth, Monetization lane) but are `Disallow`-ed in robots.txt — `packages/config/robots.ts:DEFAULT_DISALLOW_PATHS`. Not a public surface; acceptable at launch. | — |
| 5. Broken links / breadcrumbs / schema | **PASS** | link-check = 0 broken. QuickPicks anchors (`#trupanion/#healthy-paws/#embrace/#figo`) all resolve to ReviewCard ids (`reviews/best-pet-insurance/page.tsx:95,125,153,177`). Health pages carry Article + MedicalWebPage schema and ArticleLayout breadcrumbs (`health/pancreatitis/page.tsx:13-15`). | — |
| 6. Commercial readiness | **PASS** | All review CTAs route via `/go/<vendor>/...` (e.g. `reviews/best-pet-insurance/page.tsx:119`). `AffiliateDisclosure` present and rendered **above** the first monetized ReviewCard (line 93 vs first `/go` card line 94; QuickPicks above it are internal anchor jumps, not affiliate links). All 16 review pages carry disclosure. | Monetization (verify sweep) |
| 7. Tools / calculators work | **PASS** | Calorie calc: correct RER `70*kg^0.75` + MER factors, live `useMemo` (`tools/dog-calorie-calculator/Calculator.tsx:41-66`). Age calc: size-class human-age curve (`tools/dog-age-calculator/Calculator.tsx:34-49`). WhichPet wizard wired on homepage. | — |
| 8. Tier-1 trust / valuation risk | **PASS** | None found. No fake credentials, no AI humans, no fabricated testing, no consumer dose ranges, no clinical buy-boxes. | — |

### Dog.com — Must-fix before DNS
1. **Soften or source the "99% member satisfaction rate in independent surveys" claim** on `/reviews/best-pet-insurance` (`page.tsx:132`) — QC §1.5 requires an inline source or softened wording. (Medium)
2. **Fix the review-schema rating base** — `buildProductSchema` shipping `AggregateRating{reviewCount:1, ratingValue:9.4}` (`packages/ui/src/components/SEOHead.tsx:202-207`). Either drop `aggregateRating` for editorial-score products, or represent the score as a `Review`/`Rating` (not an aggregate) so it's not a fabricated review base (QC §1.4). Also guard `image: ''` (omit when blank). Shared component → coordinate with Monetization; affects every review page portfolio-wide. (Medium, but it's the highest-leverage trust nit)

### Dog.com — Nice-to-have
- Add a contextual in-content link to `/data` from a relevant editorial page (it's footer-reachable but graph-thin).
- Consider surfacing `/glossary` and `/conditions` in the primary nav (currently footer-only) for stronger hub visibility.
- `/which-pet` standalone page duplicates the homepage wizard — confirm it carries enough unique framing to avoid near-dup with the homepage embed.

---

## Vets.co

| Criterion | Status | Evidence (path/url) | Fix owner |
|---|---|---|---|
| 1. trust-guard / metadata / link-check posture | **PASS** | All three gates green. Homepage explicitly disclaims fabrication: "No fake bylines", "No fabricated credential stamps", object/architecture-only photography, photo-attribution footer (`app/page.tsx:450,1027,1178-1205`). | — |
| 1b. Advisory: shared review-schema rating base | **RISK** | Same `buildProductSchema` `AggregateRating{reviewCount:1}` pattern applies to `/reviews/best-pet-insurance` (`SEOHead.tsx:194-210`). Fix once at the component. | COO (schema) |
| 2. No thin / duplicate pages | **PASS** | Hubs substantive: symptoms 1013w, specialists 1009w, medications 1033w, diagnostics 966w, telehealth 926w (word counts incl. JSX, so prose is meaningful). No dup slugs. Health [slug] catch-all is an intentional `notFound()` stub (`health/[slug]/page.tsx`). | — |
| 3. Homepage → hub → spoke structure | **PASS** | Home → `/find-a-vet`, `/health`, `/breeds/*-health`, `/telehealth`, `/reviews/best-pet-insurance`, `/health/emergency-signs`, `/tools`, `/emergency-triage-card`, `/glossary` (`app/page.tsx`). Nav + footer cover insurance/symptoms/medications/diagnostics/specialists/data/breeds. | — |
| 4. Orphan pages | **PASS** | No true orphans. `/data` footer-reachable (`packages/config/index.ts:663`). `/insurance` hub, `/symptoms`, `/diagnostics`, `/medications`, `/specialists`, `/breeds` all have inbound links. | — |
| 5. Broken links / breadcrumbs / schema | **PASS** | link-check = 0 broken. Health pages carry Article + MedicalWebPage schema + ArticleLayout breadcrumbs (`health/parvovirus-in-puppies/page.tsx:6-8`). Vet-directory pages emit BreadcrumbList + Veterinarian/LocalBusiness JSON-LD. | — |
| 6. Commercial readiness | **PASS** | Insurance review CTAs via `/go/<carrier>/...` (`reviews/best-pet-insurance/page.tsx:109,126,143`) with inline `AffiliateDisclosure` above the buy module (line 79). Medications hub is **informational only** — no buy-boxes (QC §1.5.b clean). | Monetization (verify) |
| 7. Tools / calculators work | **PASS** | Insurance reimbursement estimator: correct deductible→reimbursement→cap→out-of-pocket math, live `useMemo` (`components/visual/InsuranceReimbursementEstimator.tsx:27-64`). Embedded on homepage + standalone `/tools` page. | — |
| 8. Tier-1 trust / valuation risk — **vet directory scaffold** | **PASS (correctly handled)** | `/vets/**` is a sample scaffold but ships safely: `noIndex: true` on hub and every profile (`vets/page.tsx:32`, `vets/[state]/[city]/[slug]/page.tsx:68`); visible "Sample listings — directory under construction" banner on the hub and a red "Sample listing — not a real vet" banner on every profile (`page.tsx:72-84`, `[slug]/page.tsx:138-152`); phone numbers use 555 reserved-for-fiction prefix, synthetic addresses; Book-Appointment CTA is `disabled`; `/vets` excluded from sitemap.xml. Byline is "Vets.co Editorial — sourced from cited references." **No synthetic data is presented as real.** | — (keep noindex until verified data source lands) |
| 8b. Medications clinical safety | **PASS** | No consumer dose ranges (only an in-file comment forbidding them, `data/medications.ts:24`); content frames drugs as veterinarian-prescribed; no affiliate routes (QC §1.5.a + §1.5.b clean). | — |

### Vets.co — Must-fix before DNS
1. **Fix the shared review-schema rating base** (same as Dog item #2) — `buildProductSchema` `AggregateRating{reviewCount:1}` on `/reviews/best-pet-insurance`. One component-level fix clears both sites. (Medium)
2. **Unsourced-claim sweep on `/reviews/best-pet-insurance`** — mirror the Dog.com check; verify payout-speed / satisfaction claims carry inline sources or softened wording (QC §1.5). (Low–Medium)

*(No directory/scaffold fix required — `/vets/**` is launch-safe as-is. The only directory-related gate is operational: keep it noindex and keep the banners until Carlo approves a verified data source per `ops/handoffs/2026-05-30-vet-directory-data-source-decision.md`.)*

### Vets.co — Nice-to-have
- The `/vets` directory hub is reachable only via the `FindAVetNearYou` component on `/find-a-vet` (not nav/footer) — fine while noindex, but plan a nav entry for the verified-data launch.
- Add an in-content link to `/data` from an editorial page (footer-reachable but graph-thin).
- Consider a homepage tile for `/symptoms` and `/medications` — both are strong GEO surfaces currently reached mainly via nav/footer.

---

## Cross-site summary

| Item | Dog.com | Vets.co | Owner |
|---|---|---|---|
| Review-schema `AggregateRating{reviewCount:1}` | open | open | COO (shared component) |
| Unsourced stat on insurance review | open | check | COO + Monetization |
| Broken links | none | none | — |
| Orphan hubs | none | none | — |
| Tools functional | yes | yes | — |
| Disclosures above monetized surfaces | yes | yes | Monetization (verify) |
| Tier-1 trust risk | none | none (scaffold safe) | — |

**Bottom line:** Both sites clear the hard gates. The single highest-leverage fix is the shared `buildProductSchema` aggregate-rating pattern (one component, clears both sites and the rest of the portfolio). After that plus a one-line unsourced-stat softening, both Dog.com and Vets.co are launch-quality. Neither has a blocker that should hold DNS once those two Mediums are closed.
