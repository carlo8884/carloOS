# COO overnight conveyor — backlog + findings ledger
_Started 2026-06-09 (overnight). Private working tracker. Real verified tasks only — no padding._

Operating rules: work until safe queue exhausted; narrow non-overlapping sub-agents; active PR backlog <5; if GitHub rate-limits merges → switch to read-only audits/handoffs/planning; no broad Depth / no `to-100`; no premium claims pre-pixel-review; don't ask Carlo for DNS/launch/spend/secrets/vendors/strategy unless truly required.

## A. Pixel-prep launch candidates
- [x] 1. Ferret pixel-prep — **sub-agent running** (ac5b2cc1)
- [x] 2. Lizard pixel-prep — **sub-agent running** (ae43cb55)
- [x] 3. Dog re-check after trust fix — trust violation fixed + trust-guard hardened (shipped, gates green); Visual polish routed
- [ ] 4. Vets re-check — pending Monetization funnel-404 fix landing
- [—] 5. PetFood/Fish pixel sign-off — HELD until 51-key image differentiation solved (Visual)

## B. Monetization launch checks (route — Monetization lane)
- [ ] 6. Vets funnel-404 fix — verify when it lands (handoff sent: P0 `/pet-insurance/${slug}` 404)
- [~] 7. Dog insurance/DNA/funnel paths — Dog prep PASS on /go routing + DNA/insurance template routes resolve
- [ ] 8. Ferret starter-kit paths — Ferret agent verifying /ferret-starter-kit
- [ ] 9. Lizard deficiency/husbandry CTAs + acute-removal — Lizard agent verifying §1.5 microcopy rule
- [—] 10/11. PetFood compare / Fish tool→kit CTAs — held with image differentiation

## C. Trust/claim hygiene
- [x] 12. Swept 6 candidates: best/#1/fastest/cheapest/tested/in-our-experience/years-of-practice/guaranteed/proven
  - **Result: clean of COO-lane overclaims.** All "cheapest/guaranteed/proven" hits are calibrated (budgeting advice, AAFCO/label terms, clinical idiom "until proven otherwise"). "in our experience" = 0; "years of veterinary practice" = 0 (trust-guard now enforces).
- [x] 13. COO-lane trust fix shipped — dog-symptoms-guide first-person clinical claim → third-person + trust-guard rule added.
- [→] 14. Route Monetization residual: `dog-com/(funnels)/thanks/[magnet]/page.tsx:50` "best-overall" pick + "cheapest time to enroll" (funnel copy, not launch-blocking).

## D. Visual/image (track — Visual lane)
- [→] 15. Dog emoji→SVG handoff sent (2026-06-09-coo-to-visual-dog-polish.md)
- [→] 16. Dog stale homepage breed photos handoff sent (same doc)
- [→] 17. Fish/PetFood 51-key resync handoff sent (2026-06-09-coo-to-visual-resync-targets.md)
- [x] 18. Not asking Carlo to rerun sync — waiting on Visual's targeted run plan.

## E. PR hygiene
- [x] 19. Active backlog = 4 (<5): #364, #193, #575, #488
- [ ] 20. Rebase stale active PRs — #193 mergeability TBD
- [x] 21. Closed 9 superseded w/ reasons (#273/#267/#265/#250/#181/#236/#211/#194/#185)
- [x] 22. Parked 5 Depth/scaffold (#611/#492/#328/#266/#161)

## F. Non-launch idle-safe audits (when blocked)
- [ ] 23. Saddle trust/CTA/disclosure
- [ ] 24. Horses no-wagering/no-betting compliance
- [ ] 25. PetFoods support-asset audit
- [ ] 26. Ferrets support-asset audit
- [ ] 27. Schema/breadcrumb/internal-link health (portfolio)
- [ ] 28. robots/sitemap/llms.txt/GEO basics (ties to #193)
- [ ] 29. Affiliate /go routing + bare-retailer-leak audit (portfolio)
- [ ] 30. Mobile-risk sections → Visual handoffs

## Findings ledger (verified only)
- F-01 [P0, Monetization] Vets funnel carrier CTA 404 — `/pet-insurance/${slug}` no route. (routed)
- F-02 [P1, Monetization] Vets funnel hardcoded dead `dog.com` CTAs. (routed)
- F-03 [Trust, COO, FIXED] Dog first-person clinical claim + trust-guard gap. (shipped)
- F-04 [Visual] Dog 221 emoji in user copy; 4 synced breeds shown text-only. (routed)
- F-05 [Monetization] Dog thanks/[magnet] "best-overall"/"cheapest time" funnel residual. (to route)
- F-06 [Confirmed-OK] Vets /vets sample directory noindexed at every level + sitemap-excluded — not a defect.

## Next tasks (from findings, ranked: launch>revenue>trust>visual>buyer-readiness)
1. Process Ferret + Lizard pixel-prep results; fix COO-lane, route others.
2. Verify #193 GEO-foundation mergeability; advance if clean (launch GEO).
3. Append F-05 to a consolidated Monetization route note.
4. F27/F29 portfolio schema/breadcrumb/internal-link + /go leak audit (read-only sub-agent).
5. F24 Horses no-wagering compliance audit (read-only).
