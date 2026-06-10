# CarloOS — ranked next-tasks backlog (COO synthesis, 2026-06-09)
_Grounded in this cycle's repo findings + strategy. Ranked: launch impact > revenue > trust > visual > buyer-readiness. Real tasks only — sized to findings, not padded._

Owner key: **COO** (me), **MON** (Monetization), **VIS** (Visual), **CARLO** (spend/DNS/accounts/secrets), **CSRO** (strategy/timing).

---

## TIER 0 — Launch-gating, already routed (drive to done)
1. **Vets funnel carrier-CTA 404** `(funnels)/pet-insurance/breeds/[breed]/[state]:166,259` — revenue + diligence blocker. **[MON]**
2. **Dog funnel hardcoded `dog.com` CTAs** (hero CTA dead pre-DNS) — **[MON]**
3. **Vets funnel missing BreadcrumbList + 🩺 emoji** `(funnels)/pet-insurance/page.tsx` — **[MON]**
4. **Ferret tools→`/ferret-starter-kit`** wiring (cost-calc + readiness-quiz) — revenue leak. **[MON]**
5. **Dog thanks/[magnet] "best-overall"/"cheapest time"** softening — **[MON]**
6. **Fish: 35 species images on shared fallback** (differentiation) — **[VIS]** (needs throttled resync)
7. **PetFood: 16 brand/compare images on shared fallback** — **[VIS]**
8. **Dog emoji→SVG sweep (~221) + 4 synced breeds shown text-only** — **[VIS]**
9. **Lizard `/states` StateMap mobile overflow** (HIGH) — **[VIS]**
10. **Vets `/guides` + Lizard `/husbandry` orphan hubs → nav/footer** — **[VIS]**

## TIER 1 — COO-lane, executable now (no cross-lane, no deps)
11. After Vets funnel-404 lands: **point Dog/Ferret/PetFood health-page insurance links at Vets' highest-converting surface** (estimator/comparison, not generic hub) — revenue routing. **[COO]**
12. **Result-matched CTA spec** for Fish/Lizard calculators (currently static footers, not keyed to computed result) — spec for MON, COO drafts. **[COO→MON]**
13. **`fish water-parameters/page.tsx`**: emits BreadcrumbList schema but no visual `<Breadcrumb>` trail — add the visual breadcrumb (nav consistency). **[COO]**
14. **Interior Org/WebSite schema** on the 4 non-launch sites' key hubs (homepage done; spot-check section hubs). **[COO]**
15. **Metadata title/description length audit** (truncation/duplication) across launch candidates — programmatic check. **[COO]**

## TIER 2 — Revenue architecture (COO spec → MON execute)
16. **Insurance cross-link density**: every Dog/PetFood/Ferret health page links to Vets estimator (highest LTV path). **[COO→MON]**
17. **Comparison-page coverage**: ensure each high-intent commercial query has a `/compare` or `/reviews/best-*` target with disclosed cards. **[MON]**
18. **Starter-kit pattern** replicated where it fits (Lizard enclosure kit, Fish tank-setup kit) — high-intent bundles. **[MON]**
19. **Quote/lead path audit**: every insurance funnel terminates in a working `/go/<carrier>` (depends on #1). **[MON]**

## TIER 3 — Premium product depth (buyer value + engagement)
20. **Vets**: breed×state insurance "match" wizard (inputs → ranked carriers) — upgrade the estimator to a decision flow. **[COO+MON]**
21. **Dog**: symptom-triage decision flow (ER-vs-wait) from the existing symptoms guide — citation-magnet + insurance routing. **[COO]**
22. **PetFood**: ingredient/brand comparison engine depth (side-by-side WSAVA scoring). **[COO]**
23. **Fish/Lizard**: stocking/enclosure planners as saveable/shareable outputs (citation + return-visit). **[COO+VIS]**
24. **Cross-portfolio "finders"** (breed finder, species finder) as authority hubs. **[COO]**

## TIER 4 — GEO/SEO authority (compounding)
25. **llms.txt v2**: add per-cluster citation anchors once funnels stable. **[COO]**
26. **FAQPage/HowTo schema coverage** sweep on top commercial + calculator pages. **[COO]**
27. **Internal-link graph densification**: hub→spoke reciprocal link audit beyond launch candidates. **[COO]**
28. **Freshness signals**: `dateModified` accuracy + a refresh cadence for top pages. **[COO]**
29. **Primary-source data tables** (insurance coverage matrix, nutrient tables) as citation magnets. **[COO]**

## TIER 5 — Strategic / deferred (Carlo/CSRO-timed; prep now, execute on greenlight)
30. **Affiliate activation**: apply Impact.com FIRST (single account → ~13 carriers, highest ROI), then Amazon/Skimlinks. **[CARLO]** (plan: revenue-arch review 2026-06-09)
31. **GA4/GSC setup checklist** — ready artifact, deferred per §8a. **[COO drafts → CARLO]**
32. **DNS flip sequence** Vets→Dog first. **[CARLO]**
33. **Post-launch measurement dashboard spec** (traffic→revenue per page). **[COO drafts]**
34. **90-day post-launch growth plan** + acquisition-outreach trigger criteria. **[CSRO]**

## Standing maintenance (every cycle)
35. Keep active PR backlog <5; close superseded; park Depth.
36. Run trust/metadata/link-check before every push.
37. Refresh STATUS/DASHBOARD on merges.
38. Verify sub-agent "blockers" before acting (3 false positives caught this session).
39. Fetch-before-reset on the shared branch (2 branch-leak recoveries this session).

---
**Top 5 to move the needle next:** #1 (Vets funnel-404), #30 (Impact activation), #6/#7 (Fish/PetFood imagery), #8 (Dog visual), #11 (insurance link routing). The first two unlock real revenue; the rest clear the last launch-quality gates.
