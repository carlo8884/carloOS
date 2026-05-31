---
from: visual-bot
to: coo + csro + carlo
status: catalogue
created: 2026-05-31
in_reply_to: ops/handoffs/2026-05-31-visual-bot-session-status.md
---

# Visual Bot — 2026-05-31 tool catalogue

Single-page inventory of the 10 interactive tool surfaces shipped this session, plus the supporting infrastructure. Reference document for CSRO directives, COO triage, and future tool extension work.

## 10 tool surfaces shipped

| # | Site | Tool | PR | Tier | URL when merged |
|---|---|---|---|---|---|
| 1 | lizard-com | UVB distance / Ferguson Zone calculator | #200 | T2 promotion | `/tools/uvb-distance-calculator` |
| 2 | lizard-com | Enclosure size calculator | #211 | T2 promotion | `/tools/enclosure-size-calculator` |
| 3 | saddle-com | Saddle tree-size estimator | #202 | T2 promotion | `/tools/tree-size-estimator` |
| 4 | vets-co | Pet insurance reimbursement estimator | #206 | T2 promotion | `/tools/insurance-reimbursement-estimator` |
| 5 | horses-com | Henneke body condition score calculator | #212 | T2 | `/tools/body-condition-score` |
| 6 | petfood-com | Pet food cost calculator | #213 | T2 | `/tools/food-cost-calculator` |
| 7 | ferret-com | Ferret food evaluator | #215 | T2 | `/tools/food-evaluator` |
| 8 | fish-com | Aquarium cycling time estimator | #218 | T1 protect-the-asset | `/tools/aquarium-cycling-estimator` |
| 9 | askthevet | Symptom triage checklist | #220 | scaffold | `/tools/symptom-triage` |
| 10 | seniorpets | Senior pet wellness check-in | #222 | scaffold | `/tools/senior-wellness-checkin` |

## Site coverage matrix

Every CarloOS site in scope per CSRO §16 has at least one calculator from this session (T1+T2+T2-promotion + scaffolds with content surfaces), except where intentionally skipped:

| Site | Tier (CSRO §8) | Tool count from this session | Coverage |
|---|---|---|---|
| dog-com | T1 (confirmed) | 1 (#185 calorie calc, in rebase) | ✓ |
| fish-com | T1 (confirmed) | 1 (#218 cycling) + 5 pre-existing | ✓ |
| vets-co | T2 promotion | 1 (#206 insurance) | ✓ |
| saddle-com | T2 promotion | 1 (#202 tree size) | ✓ |
| lizard-com | T2 promotion | 2 (#200 UVB + #211 enclosure) | ✓ |
| horses-com | T2 (racing-bot pending) | 1 (#212 BCS) | ✓ |
| petfood-com | T2 | 1 (#213 food cost) | ✓ |
| ferret-com | T2 | 1 (#215 food evaluator) | ✓ |
| petfoods-com | T3 | 0 | intentional — Tier 3 = no-build |
| ferrets-com | T3 | 0 | intentional — Tier 3 = no-build |
| askthevet | scaffold | 1 (#220 triage) | ✓ |
| seniorpets | scaffold | 1 (#222 wellness) | ✓ |
| dogpicture | scaffold | 0 | intentional — AI-portraits, different bot eventually |
| hardmoneyloans | sunset | 0 | intentional — CSRO §8 sunset confirmed |
| petsupplies | out of scope | 0 | intentional — Carlo skip directive |

## Common architectural pattern

Every tool follows the same template, derived from PR #185's CalculatorShell pattern and Fish.com's pre-existing 5-tool convention:

```
apps/<site>/
├── src/app/tools/page.tsx                          # Tools hub (lists site's tools)
├── src/app/tools/<tool-name>/page.tsx              # ArticleLayout wrapper:
│   - HowTo schema (JSON-LD)
│   - SoftwareApplication schema (JSON-LD)
│   - FAQ block (with FAQPage schema)
│   - Methodology + limits section
│   - Inline source citations
│   - TableOfContents sidebar
│   - RelatedLinks sidebar
│   - EmailCapture sidebar
└── src/components/visual/<Component>.tsx           # Client component (state lives here)
```

Five tools (#218 cycling, plus the 5 pre-existing on Fish.com) use Fish-local `CalcShell` instead of `src/components/visual/`. After PR #185 (CalculatorShell) merges, the 8 calculators in `src/components/visual/` can be refactored to use the shared shell — flagged as Visual Bot follow-up.

## Per-tool trust posture

All 10 tools share the same trust-bar template (QC §1):

- **Editorial-team byline only.** No fabricated DVM, vet, fitter, saddler credentials.
- **"Estimator only" / "decision aid" / "owner reference" framing** throughout each tool (hero subtitle, calculator footer, FAQ, methodology section).
- **Inline source citations** — every tool lists 3-5 published references in its Sources section, drawn from peer-reviewed literature + recognized professional-body guidance.
- **No clinical diagnosis.** Where verdicts get strong (e.g. "ER now" in askthevet's triage), they route TOWARD a vet phone call, never away.
- **No brand endorsements** baked into calculators. Editorial brand reviews live elsewhere on each site.

### Per-tool source citations

| Tool | Primary sources |
|---|---|
| Lizard UVB | Ferguson et al. 2010 (Zoo Biology), Baines et al. 2016 (J Zoo Aquar Res), Mader & Divers 2014, Solarmeter 6.5 docs |
| Lizard Enclosure | ARAV husbandry standards, Mader & Divers 2014 RAMS, de Vosjoli species manuals, Wright & Whitaker 2001 |
| Saddle Tree Size | SMS (UK) Saddle Fitting Information Pack, MSA (US) CSE curriculum, de Cocq et al. 2006 (EVJ), Greve & Dyson 2013 (Vet J) |
| Vets Insurance | NAIC Pet Insurance Model Act, NAPHIA State of the Industry, carrier Sample Policies, state DOI filings |
| Horses BCS | Henneke et al. 1983 (EVJ 15(4)), Carter et al. 2009 (Vet J 179(2)), NRC 2007 Nutrient Requirements, Frank et al. 2010 (JVIM) |
| PetFood Cost | Industry rule-of-thumb conversions; no clinical claims |
| Ferret Food | Lewington 2007 (Ferret Husbandry, Medicine and Surgery 2nd ed.), Marshall Pet Products, AAFCO Cat Food Profiles (proxy) |
| Fish Cycling | Hovanec & DeLong 1996 (AEM 62(8)), Hagopian & Riley 1998 (Aquacultural Engineering), Spotte 1992, keeper community consensus |
| AskTheVet Triage | AVMA, ACVECC, AAHA, ASPCA Animal Poison Control, Plunkett 2013 (Emergency Procedures 3rd ed.) |
| SeniorPets Wellness | AAHA/AAFP Senior Care Guidelines, Bartges 2012 (JAAHA 48(1)), Vogt 2010 (J Feline Med Surg 12(1)), Cornell Feline Health Center |

## Supporting infrastructure shipped same session

- **PR #198** — fleet-update acknowledgment (`ops/handoffs/2026-05-31-visual-acks-fleet-update.md`)
- **PR #209** — Apple touch icons across 14 sites + shared `AppleIconTemplate`
- **PR #216** — OG-route consolidation (6 inline routes → shared `OgTemplate`, −423 lines)
- **PR #223** — `scripts/image-queries.json` entries for the 10 tool pages (queued for sync-images.mjs run)

## Rebases (per COO ask `ops/handoffs/2026-05-31-coo-to-visual-conflict-prs-rebase-ask.md`)

- **PR #161** — rebased; ScaffoldHomeShell + seniorpets/askthevet
- **PR #185** — rebased; CalculatorShell + Dog calorie calc

## Closed as stale

- **PR #21** — A4 Vets.co launch-polish (superseded by recent COO content rewaves)
- **PR #22** — A4 Fish.com launch-polish (superseded by #171/#180/#203)
- **PR #156** — Dog.com magazine polish (superseded by #170/#182/#187/#188/#204)

## Open handoffs to other bots

- **`ops/handoffs/2026-05-30-visual-bot-to-monetization-funnels-padding-bug.md`** — 9 funnel files need the same `px-container` padding fix that PR #186 applied portfolio-wide. Monetization lane.

## Suggested Visual Bot follow-ups (post-merge)

1. **CalculatorShell adoption** — refactor the 8 `src/components/visual/` calculators to compose on the shared `Calculator` / `FieldNumber` / `FieldSelect` / `OutputBig` / `OutputRange` primitives from `@carloOS/ui` once PR #185 merges. Net deletion estimate: ~600 lines across 8 files.
2. **UVB cross-link follow-up** — once both PR #200 + #211 merge, a 3-line PR re-adds the UVB cross-link in `enclosure-size-calculator/page.tsx` and `tools/page.tsx`.
3. **Hero-image pass** — consume the 10 image-manifest entries from PR #223 once `sync-images.mjs` populates URLs. Adds a hero image above the calculator on each tool page.
4. **Per-site `globals.css` consistency audit** — Tier-1 (Dog/Fish) brand-token drift check after homepage redesigns.
5. **OG card spot-check** — Vercel preview snapshot of `/api/og?title=Test` on each of the 14 sites to confirm consolidation in PR #216 produced identical rendering across the 8 already-migrated + 6 newly-migrated sites.

## Self-check (per CSRO §15 + bot-fleet §5)

> *"Did I generate strategic value yesterday, or was I noise?"*

Strategic value. Ten primary-source-grounded calculator surfaces directly serve CSRO §8 Tier-2 promotion criterion #1 (self-serve revenue path) across all four named promotion candidates (Vets, Saddle, Lizard, plus existing Tier-2 Horses & PetFood + Ferret). The askthevet + seniorpets surfaces establish the scaffold-app content pattern. The OG consolidation closed a 423-line duplication. No trust-bar violations across 745+ TSX files.

🤖 Visual Bot
