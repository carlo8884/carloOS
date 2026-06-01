---
from: QA-subagent
to: CSRO
site: vets-co
status: complete
created: 2026-06-01
next_action: CSRO to triage P0 trust items before any DNS flip; assign P1 sitemap/indexing fix to COO lane
---

# Vets.co — Launch-Quality QA Audit (read-only)

Scope: `apps/vets-co` only. Read-and-report. No files modified. High trust-risk site (clinical-authority directory); trust scrutinized hard.

## TL;DR

Vets.co is in strong shape on the hard trust-bar (no fabricated credentials, no fake human bylines, directory honestly labeled as sample data). All three CI gates pass clean for vets-co. The launch blockers are **not** catastrophic trust violations — they are (1) one credential-implication string in JSON-LD that should be corrected, (2) a homepage trust badge that overstates the directory, and (3) a badly stale `sitemap.ts` that omits ~5 entire populated clusters and 16 health pages (indexing-efficiency failure). The signature interactive product is the insurance reimbursement estimator (works, but lives on `/tools`, not the homepage first screen).

---

## 1. CI gate results (isolated to vets-co)

- `node scripts/ci/link-check.mjs` — **PASS**, vets-co clean (0 broken internal links portfolio-wide).
- `node scripts/ci/metadata-policy.mjs` — **PASS**, vets-co clean (0 issues; other sites have advisory items, none on vets-co).
- `node scripts/ci/trust-guard.mjs` — **PASS**, clean across 1150 TSX files (forbidden-phrase scan).

CI is green for vets-co. The findings below are things the automated gates do not catch.

---

## 2. TRUST (launch-gating)

### Clean / verified good
- **No fabricated clinical credentials.** All bylines are "Vets.co Editorial" (`reviewedBy="Editorial team"` on `reviews/best-pet-insurance/page.tsx:68`). Dynamic clinical templates (`specialists/[slug]`, `symptoms/[slug]`, `diagnostics/[slug]`, `medications/[slug]`, `health/*`, `breeds/*`) all author as `'Vets.co Editorial'`. Avatar is `🐾`, not a fake human headshot.
- **`/editorial-standards/page.tsx:44`** explicitly disclaims a medical-review process: "We don't claim a medical-review process we don't run... not signed off by a licensed clinician for individual animals." Strong, honest scope.
- **`/disclosure/page.tsx`** is accurate and restrictive: editorial-only on retail products; affiliate channels limited to pet-insurance carriers + telehealth referrals; "We do not invent credentials" (lines 139-145); telehealth correctly framed as "services that connect you with a licensed vet" (referrals, not Vets.co-employed vets). Insurance ranking independence stated ("rankings are made first, referral links added second"). **Telehealth-referral framing is correct.**
- **Directory sample data is honestly labeled.** `data/vet-directory.ts` uses 555-prefix (NANP fiction-reserved) phones, "Example Ave"/"Sample Blvd" addresses, "Sample/Example" practice names, never real clinician names. `/vets` carries a visible "Sample listings — directory under construction" banner (`vets/page.tsx:71-83`); individual profiles carry a stronger danger-styled "Sample listing — not a real vet" banner (`vets/[state]/[city]/[slug]/page.tsx:138-152`) AND `noIndex: true` in metadata (line 68). The profile About byline reads "Vets.co Editorial — sourced from cited references" (line 196). This is exemplary handling.
- **`/specialists/[slug]`** "board-certified" language describes the veterinary profession generically and cites the board org + AVMA — it does not claim Vets.co employs specialists. Clean.
- **Coverage stats** on `/vets` are labeled "Directory Coverage (Scaffold)" and `vetCount` integers are ≤2 — no implication of a populated directory.

### P0 — launch-gating trust items

**P0-1 — `telehealth/page.tsx:7` JSON-LD attributes the comparison to "veterinarians" (credential implication).**
The Article schema `description` is `'Vetster, AskVet, and Chewy Connect compared by veterinarians.'` while the schema `authorName` is `'Vets.co Editorial'` and the site explicitly does NOT run clinician review (per editorial-standards). "compared by veterinarians" is a structured-data claim that the comparison was performed by veterinarians — a fabricated-credential implication on the single highest-commercial-intent clinical page. `buildArticleSchema` emits `description` verbatim into `<script type=application/ld+json>` (confirmed in `packages/ui/src/components/SEOHead.tsx`). 
Fix: change to e.g. `'Vetster, AskVet, and Chewy Connect compared by the Vets.co editorial team on credentials, wait times, and cost.'` (COO-lane file; trivial edit.)

**P0-2 — Homepage trust badge "Board-certified-specialist directory" overstates a sample/placeholder directory.**
`page.tsx:144` lists `'Board-certified-specialist directory'` in the dark trust bar as a current site capability, alongside "No paid placements." The directory is sample/placeholder data only (gated on Carlo's data-source decision; `/vets` itself says "directory under construction"). Presenting a not-yet-real directory as a top-of-homepage trust claim is a fabricated-scope risk on a high-trust site. 
Fix: soften to reflect the editorial reality (e.g. "Specialist directory by discipline" framed as coming-soon, or drop the badge until the directory is populated). COO-lane file.

### P1 — trust polish (not gating, but fix before launch)
- **`telehealth/page.tsx:6` meta description** "We compared pet telehealth services on veterinarian credentials..." — "We compared" is fine (editorial "we"), but pair with P0-1 cleanup so on-page and schema voice agree. Body copy line 22 "We compared the major platforms" is acceptable editorial first-person (not a clinical hands-on claim).
- **Telehealth schema/year drift**: titled "Best Pet Telehealth 2025", `publishedAt`/`modifiedAt` = `2025-05-01`. On a 2026 launch this reads stale and weakens freshness signals. Same on `reviews/best-pet-insurance` (uses `new Date()` so always "today" — acceptable). Recommend dating telehealth current.

---

## 3. Signature homepage product

The intended signature product (cost-of-care / insurance comparison + condition lookup) is **partially present but NOT on the homepage first/second screen**.

- The real interactive tool — **Insurance Reimbursement Estimator** — exists and is wired: `tools/insurance-reimbursement-estimator/page.tsx` renders `<InsuranceReimbursementEstimator>` (client component, `components/visual/` = Visual-lane), with `buildHowToSchema`. It is reachable from `/tools` and cross-linked from `reviews/best-pet-insurance` (CalloutBox). **Works.**
- The homepage (`page.tsx`) first screen is a directory CTA ("Find a vet near you") + emergency-triage secondary CTA. The category grid (second screen) links to `/reviews/best-pet-insurance` and `/find-a-vet`, but **the estimator/calculator is not surfaced on the homepage at all**, and there is no condition-lookup search box on the home first screen.
- **P1**: Surface the insurance estimator and a condition/symptom entry point in the homepage category grid or a dedicated band. The signature high-intent, high-citation tool is currently buried under `/tools`. (Homepage is COO-lane; the estimator component itself is Visual-lane — coordinate.)

---

## 4. Indexing efficiency — sitemap (P1, large)

**P1-SITEMAP — `app/sitemap.ts` is badly stale and omits ~5 entire populated clusters plus 16 health pages.** This is the single biggest launch-quality gap and a direct hit to the CLAUDE.md "indexing efficiency" charter (sites with no/incomplete XML sitemap = "indexing-efficiency black hole").

Routes that EXIST as real, populated pages but are MISSING from the sitemap:
- **`/insurance` hub + 8 spokes** (`how-pet-insurance-works`, `what-pet-insurance-covers`, `pre-existing-conditions`, `deductibles-reimbursement`, `breed-specific-risk`, `reading-the-fine-print`, `wellness-plans-vs-insurance`, `when-to-enroll`) — 0 in sitemap.
- **`/guides` hub + 7 spokes** (`cost-of-veterinary-care`, `emergency-vet-costs`, `er-vs-urgent-care`, `how-to-afford-vet-care`, `choosing-a-veterinarian`, `questions-to-ask-your-vet`, `what-to-expect-at-the-vet`, `when-to-go-to-the-vet`) — 0 in sitemap.
- **`/specialists` hub + `/specialists/[slug]`** (10 specialties, `generateStaticParams` present) — 0 in sitemap.
- **`/symptoms` hub + `/symptoms/[slug]`** (~30 symptoms in `data/symptoms.ts`, `generateStaticParams` present) — 0 in sitemap.
- **`/diagnostics` hub + `/diagnostics/[slug]`** (9 entries) — 0 in sitemap.
- **`/medications` hub + `/medications/[slug]`** (13 entries) — 0 in sitemap.
- **16 of 38 `/health/*` condition pages** missing: anxiety-in-dogs, arthritis-in-dogs, bloat-gdv-dogs, diabetes-in-dogs-cats, ear-infections-dogs, feline-lower-urinary-tract-disease, hyperthyroidism-cats, hypothyroidism-dogs, kennel-cough, kidney-disease-cats, pancreatitis-in-dogs, parvovirus-in-puppies, periodontal-disease-pets, seizures-in-dogs, vomiting-diarrhea-pets, (+ verify the full set).
- **`/find-a-vet/[state]`** state pages and `/vets/[state]`, `/vets/[state]/[city]` directory hubs not represented (vet profiles are intentionally `noIndex`, but the state/city browse hubs should be indexable).

A regen script exists: `scripts/regenerate-sitemaps.mjs`. The sitemap header says it is auto-generated by that script — it has drifted far behind the route tree. **Fix: re-run the regen script, verify it captures `generateStaticParams` clusters, commit.** COO-lane (`scripts/*` + sitemap). This is the highest-leverage launch-quality fix on the site.

---

## 5. Orphans / hubs / thin / duplicate routes

- **No true orphans** — link-check is green; every `/health/*` page has ≥1 inbound link. The health hub (`health/page.tsx`) links all 38 health+breed condition pages; `data/symptoms.ts` adds cross-links from symptom pages to relevant conditions.
- **Weak internal linking (P2)**: 15 health condition pages have exactly ONE inbound link (only the health hub) — e.g. anxiety-in-dogs, arthritis-in-dogs, bloat-gdv-dogs, seizures-in-dogs, kennel-cough, parvovirus-in-puppies. Hub→spoke exists but there is little spoke↔spoke reciprocal linking. Compare to well-linked pages (emergency-signs: 24 inbound, preventive-care-schedule: 16). Recommend adding "related conditions" cross-links on the thin-linked condition pages to strengthen the cluster graph (GEO/topical-authority benefit).
- **Two directory hubs (P2, mild dup-intent)**: `/vets` (state×city×specialty programmatic directory, sample data) AND `/find-a-vet` (editorial "how to find a vet / specialist explainer" + state links to `/find-a-vet/[state]`). They serve different intents (directory vs. explainer) and cross-link, so not a true duplicate — but the homepage primary CTA points to `/find-a-vet` while the "directory" concept lives at `/vets`, which is mildly confusing. Confirm canonical intent split is deliberate; consider clearer differentiation in nav/labels.
- **Dynamic stub templates**: `health/[slug]/page.tsx` and `breeds/[slug]/page.tsx` are intentional `notFound()` stubs (content is in static per-condition dirs). Harmless — they return 404 for unknown slugs. No action needed.

---

## 6. Breadcrumbs + JSON-LD

- **Breadcrumbs**: present and consistent across directory (`/vets`, profile), `/find-a-vet`, `/health`, reviews, telehealth, editorial-standards. Both `buildBreadcrumbSchema` (JSON-LD) and visible breadcrumb nav are used.
- **MedicalWebPage schema**: correctly used on the clinical clusters via `buildMedicalWebPageSchema` (`packages/ui` helper) — confirmed on `specialists/[slug]` (`lastReviewed: 2026-05-29`), `symptoms/[slug]` (`lastReviewed: 2026-05-28`), and imported across ~50 health/breed/diagnostic pages. Author = Organization "Vets.co Editorial", audience = MedicalAudience/Caregiver. **Good GEO/AI-citation posture.**
- **Vet profile schema**: `Veterinarian`+`LocalBusiness` JSON-LD on profiles, with `geo` correctly omitted for placeholders (`vets/[state]/[city]/[slug]/page.tsx:91`). Profiles are `noIndex`, so the structured data won't leak sample listings into SERPs.
- **P2**: Homepage uses Organization + WebSite schema (good) but no `SearchAction` (acknowledged in `SEOHead.tsx` — no user-facing search results route). Fine for now.

---

## 7. First-screen read

Clinical-trust-modern, NOT generic medical content. Libre Baskerville + Manrope, navy/brass/teal CSS-wash hero (no fake clinical photography — explicitly CSS-only per QC §1, with a documented `TODO(photography)` honoring the no-staged-clinical-scenes rule). Positioning copy is sharp and on-brand ("reference desk for veterinary medicine... kitchen table... No paid placements. No fake bylines."). The voice reads as a credible editorial authority sitting between AAHA/AVMA and commercial pet-med sites. Strong.

---

## P0 LAUNCH-BLOCKERS (trust first)

1. **P0-1** — `telehealth/page.tsx:7`: JSON-LD description "compared by veterinarians" implies clinician authorship on the top commercial clinical page; conflicts with the site's own no-clinical-review disclosure. Reword to editorial-team attribution. (COO-lane, trivial.)
2. **P0-2** — `page.tsx:144`: homepage trust badge "Board-certified-specialist directory" presents a sample/placeholder directory as a live capability — fabricated-scope risk. Soften or remove until directory is populated. (COO-lane, trivial.)

(No fabricated human credentials, fake bylines, fake headshots, or live-presented placeholder directory data were found — the hard trust-bar is otherwise intact.)

## P1 BACKLOG

1. **P1-SITEMAP** — Regenerate `app/sitemap.ts` (run `scripts/regenerate-sitemaps.mjs`); it omits the `/insurance`, `/guides`, `/specialists`, `/symptoms`, `/diagnostics`, `/medications` clusters (hubs + all spokes) and 16 `/health/*` pages, plus state/city directory hubs. Largest indexing-efficiency gap. (COO-lane.)
2. **P1-PRODUCT** — Surface the signature insurance reimbursement estimator (and a condition/symptom entry point) on the homepage; it is currently only reachable via `/tools`. (Homepage COO-lane; estimator component Visual-lane — coordinate.)
3. **P1-TELEHEALTH-FRESHNESS** — Update telehealth page title/schema dates off "2025"; align meta + schema voice with P0-1 fix.

## P2 BACKLOG

1. **P2-LINKING** — Add spoke↔spoke "related conditions" cross-links on the 15 single-inbound-link `/health/*` pages to strengthen the cluster graph (topical authority / GEO).
2. **P2-DIR-INTENT** — Clarify the `/vets` (programmatic directory) vs `/find-a-vet` (explainer) intent split in nav/labels to avoid mild duplicate-intent confusion; homepage primary CTA points to `/find-a-vet`.

## Out-of-lane (flagged, NOT audited/touched)
- `/(funnels)/pet-insurance/*` and `data/affiliate-routes.ts` are Monetization-lane. Noted "carriers we rank highest" copy at `(funnels)/pet-insurance/page.tsx:26,108` — Monetization to confirm accuracy; consistent with the editorial-independence disclosure, so not flagged as a trust issue.
- `components/visual/InsuranceReimbursementEstimator.tsx` is Visual-lane — not modified.
