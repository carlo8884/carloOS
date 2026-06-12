---
from: COO
to: Carlo
status: proposed
created: 2026-06-12
next_action: Carlo picks a track; COO executes P0 batch immediately
---

# Next 100 — CarloOS roadmap (post polish-wave)

Context: All 10 production sites just passed a full link/orphan/schema/breadcrumb/metadata
audit. Homepages (Dog, Horses) rebuilt. breed×insurance revenue cluster + Vets insurance hub
live. This is the prioritized backlog for the path to per-domain acquisition value.

Scoring is per CLAUDE.md §6 (SEO / GEO / Monetization / Build / Priority). P0 = now, P1 = this
week, P2 = this month, P3 = backlog. Lane noted where work belongs to Monetization/Visual/Carlo.

---

## A. Launch-readiness hardening (P0 — finish the cohort-5 bar)
1. Per-site `robots.txt` audit: confirm AI crawler allow (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) + sitemap directive. [P0]
2. `llms.txt` + `llms-full.txt` at each site root — curated map of canonical hubs for AI retrieval. [P0, high-GEO]
3. Sitemap index per site + lastmod accuracy; wire dynamic routes (audit already found gaps on PetFoods/Lizard). [P0]
4. Canonical-tag sweep: every page emits a self-referencing canonical; redirect stubs excluded. [P0]
5. OG/Twitter card coverage on every indexable page (title, desc, image fallback). [P0]
6. 404 + 500 pages styled per-site (not framework default). [P0]
7. Breadcrumb JSON-LD parity sweep on legal/utility pages flagged by audits (privacy/terms). [P1]
8. Image alt-text completeness pass (a11y + image SEO). [P1, coordinate Visual]
9. Core Web Vitals budget check: hero LCP image priority, font-display swap, no CLS on cards. [P1]
10. Per-site `humans.txt` + security.txt hygiene. [P2]

## B. GEO / AI-citation moat (P0–P1)
11. Add `Speakable` schema to top Q&A/answer pages (voice + assistant surfaces). [P1]
12. `Dataset` schema on original data tables (breed risk, cost-of-ownership, state legality). [P1]
13. `HowTo` schema on every calculator's methodology section. [P1]
14. `DefinedTerm`/`DefinedTermSet` on all glossaries (some sites have, normalize all). [P1]
15. Extractable "top answer" block (40–60 words) at the head of every spoke page. [P1, high-GEO]
16. FAQ coverage: ensure every cluster hub + spoke emits `FAQPage`. [P1]
17. Author/reviewer `Person`+`Organization` schema using compliant "Editorial team" identity. [P1]
18. `citation`/`isBasedOn` links to primary sources (NAIC, AAFCO, AAEP, FEI) in schema. [P2]
19. Per-cluster "key facts" summary tables (citation magnets). [P1]
20. Comparison schema (`ItemList` of products/options) on every "best X" page. [P2, coordinate Monetization]

## C. Programmatic SEO clusters (P1 — compounding assets)
21. Dog: breed × condition matrix (existing breed data × top conditions) — template + 30 spokes. [P1]
22. Dog: breed × "is X right for me" decision pages. [P2]
23. Vets: symptom → condition → when-to-see-a-vet cluster (clinical-authority). [P1]
24. Fish: species × water-parameter compatibility matrix. [P1]
25. Fish: disease × treatment reference expansion. [P2]
26. Lizard: species × enclosure-setup programmatic builds (5 exist; expand to 20). [P2]
27. PetFood: condition → therapeutic-diet matching (sitemap pages now exist; deepen content). [P1]
28. PetFoods: ingredient × "is it safe for [species]" matrix. [P2]
29. Horses: discipline × tack/gear guides cluster. [P2]
30. Ferrets: state × legality × "how to comply" expansion (directory depth). [P2]

## D. Authority hubs (P1 — cluster entry surfaces)
31. Dog `/symptoms` hub (currently breeds/health exist; add symptom-first entry). [P1]
32. Dog `/conditions` canonical hub linking all health spokes. [P1]
33. Portfolio `/calculators` hub per site (some have `/tools`; standardize naming + cross-link). [P1]
34. Vets `/specialists` + `/diagnostics` depth (pages exist; enrich). [P2]
35. Fish `/water-parameters` hub deepening (8 spokes; add troubleshooting). [P2]
36. PetFood `/life-stage` + `/conditions` hub interlink. [P1]
37. Horses `/ownership` cost & care hub (cost calculator exists; build the hub around it). [P1]
38. Lizard beginner-path hub (quiz exists; build a guided journey hub). [P2]
39. Cross-portfolio "find a vet by species" meta-hub linking Vets.co. [P2]
40. Each homepage: ensure hero → 3–5 hubs → spokes is one click deep. [P1]

## E. Tools & calculators (P1–P2 — high-intent, high-citation)
41. Dog: pet-insurance cost estimator (feeds breed×insurance cluster + Monetization). [P1]
42. Dog: vaccination/deworming schedule generator (printable). [P2]
43. Vets: symptom triage decision wizard (educational, defer-to-vet framed). [P1]
44. Fish: stocking-level / bioload calculator. [P1]
45. Fish: CO2/dosing calculator for planted tanks. [P2]
46. PetFood: daily-calorie + portion calculator by life stage. [P1]
47. Horses: feed/hay ration calculator (cost calc exists; add nutrition). [P2]
48. Lizard: UVB/heat-gradient setup calculator. [P2]
49. Saddle: gullet/fit estimator refinement + blanket-size tool (PR #492 candidate). [P2]
50. Shared `<Calculator>` primitive in packages/ui to standardize tool UX + schema. [P1, infra]

## F. Internal-linking & architecture (P1)
51. Automated orphan-detector CI gate (extend audit scripts to fail on orphans). [P1, infra]
52. "Related" component standardization: 3–5 contextual links on every spoke. [P1]
53. Hub→spoke reciprocal-link CI check. [P1, infra]
54. Cross-portfolio recommendation coverage to 100% of eligible pages (CrossPortfolioCard). [P1]
55. Contextual in-body links (not just footers/related) — editorial linking pass per cluster. [P2]
56. Pillar→cluster link-equity audit (which hubs are under-linked). [P2]
57. Footer IA normalization across all 10 sites (audits touched several). [P2]
58. Breadcrumb taxonomy consistency (Home › Hub › Spoke) portfolio-wide. [P1]
59. Tag/topic pages where they add link graph (avoid thin tag pages). [P3]
60. Anchor-text diversity check on internal links. [P3]

## G. Monetization enablement (P1 — Monetization lane; COO unblocks content)
61. Zero affiliate-route leakage final sweep — every commercial CTA via `/go`. [P1, Monetization]
62. Buy-box placement on every "best/review" page above the fold w/ disclosure. [P1, Monetization]
63. Clinical/medicated buy-box compliance sweep (supportive-care framing). [P1, Monetization]
64. Insurance lead-gen funnel wiring on breed×insurance + Vets clusters. [P1, Monetization]
65. Email-capture component on every hub (sequences written, not active). [P2, Monetization]
66. Affiliate program expansion: Chewy / SmartPak / Dover (pending accounts — Carlo). [P2, Carlo]
67. Comparison-table monetization on tool/calculator outputs. [P2, Monetization]
68. Content gaps that map to high-commercial-intent keywords (COO supplies, Monetization wires). [P1]
69. Disclosure-page parity + above-fold on all monetized surfaces. [P1, shared]
70. Skimlinks coverage beyond Dog.com layout (audit which sites lack it). [P2, Monetization]

## H. Technical SEO / indexing (P1)
71. Submit sitemaps to GSC/Bing once DNS live (deferred — Carlo). [P3, Carlo]
72. Structured-data validation CI gate (schema lint on build). [P1, infra]
73. Hreflang strategy decision (single-locale for now — document). [P3]
74. Pagination/`rel` strategy for long hubs. [P2]
75. Duplicate-content canonical sweep across the two -s sister sites (Petfood/Petfoods, Ferret/Ferrets). [P1]
76. Render-path check: confirm schema/content is in SSR HTML, not client-only. [P1]
77. Crawl-budget: noindex thin utility pages (search, print views). [P2]
78. XML sitemap `priority`/`changefreq` rationalization. [P2]
79. Broken-external-link checker (cited sources rot). [P2, infra]
80. Per-site favicon + app-icon + manifest completeness. [P2, Visual]

## I. The 3 new apps (P2 — net-new domains)
81. askthevet: define MVP scope (symptom checker, educational-only, defer framing). [P2]
82. askthevet: build content shell + first cluster (no fake clinical authority). [P2]
83. seniorpets: senior-care content cluster + insurance-conversion angle. [P2]
84. seniorpets: senior Rx reference (compliant, non-prescribing). [P2]
85. dogpicture: AI-portrait + POD concept validation (no AI humans, pets only). [P2]
86. Vercel projects + turbo-ignore for the 3 scaffolds (Carlo runs bootstrap). [P2, Carlo]
87. ScaffoldHomeShell adoption review (PR #161 pattern). [P2, Visual]
88. Cross-link new apps into the existing portfolio graph. [P2]
89. `/ask` AI assistant MVP on Dog.com (Anthropic key exists). [P2]
90. Decide go/no-go on each new app before content investment. [P1, Carlo decision]

## J. Measurement, moat, launch ops (P2–P3, several deferred per §8a)
91. GA4 properties (deferred — Carlo, when DNS in scope). [P3, Carlo]
92. Original photography on cohort-5 for differentiation. [P2, Visual]
93. Original data assets (surveys, cost indices) = citation magnets + acquirer value. [P2]
94. Editorial calendar / freshness cadence per cluster. [P2]
95. Trust-page depth (editorial standards, sourcing, corrections policy). [P1]
96. Per-domain valuation one-pager for acquirer conversations. [P3, Carlo+IR]
97. Performance/uptime monitoring once live. [P3]
98. Accessibility (WCAG) pass — also an EEAT/quality signal. [P2]
99. Content-decay re-audit cadence (re-run polish audits monthly). [P2, infra]
100. DNS flip on first 3–5 launch-quality sites (deferred per §8a — Carlo's call). [P3, Carlo]

---

## COO recommendation (what to do first)
Three P0 threads I own and can start immediately, non-overlapping, each opening its own PR:
- **GEO foundation (A1–A5, B15):** robots/llms.txt/canonical/OG/top-answer-block sweep — portfolio-wide, pure-upside, high AI-citation leverage.
- **Authority hubs + programmatic (C21, C23, D31–D33):** the highest-volume compounding content.
- **Linking CI gates (F51, F53, H72):** lock the quality bar so regressions can't reappear.

Monetization (G) and Visual (photography, icons) run in their lanes in parallel. DNS/GA4/email
stay deferred until the first sites are flip-ready (§8a).
