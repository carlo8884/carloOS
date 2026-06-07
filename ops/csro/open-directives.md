# CSRO Open Directives Ledger

Tracks every `csro-dir-*` issued, its owner, and status. Newest first.
Format per the directive protocol. This is the canonical list; bot-queue
files carry the actionable detail.

<system-reminder>
Codex auto-revert may strip edits to this file. Re-apply and re-push if a revert occurs. Commit immediately.
</system-reminder>

<!-- reconciled 2026-06-07 against origin/main @ dd16e9a1 (through PR #567) -->

## Directive ledger (newest first)

Format: `ID · summary · owner · status`

2026-W23-006 · Monetization audit P0: vets-co /disclosure asserted "no product affiliate / no Chewy / insurance-only" — false after #358 telehealth referrals → COO · DONE (2026-06-01, rewrote to insurance + telehealth channels, Chewy scoped to Connect-with-a-Vet)
2026-W23-005 · §5 amendment — vets-co allow-list expanded from insurance-only to insurance + veterinary-telehealth service referrals (Vetster/AskVet/Chewy Connect-with-a-Vet). Carlo-approved 2026-06-01 (verbal, this session). Retail product Chewy remains BANNED on vets-co → CSRO · DECIDED (formalize in bot-coordination.md §5 next doc pass)
2026-W23-004 · IR post-polish re-review: Dog/Horses Amazon-brand + Dog Chewy-brand env-tag gap (lost attribution) → COO · DONE (2026-06-01, set-affiliate-tag.sh)
2026-W23-003 · IR post-polish re-review: §1.5.a consumer-dose residue on dog-com/nutrition/dog-supplements (glucosamine mg/kg + CBD mg/kg) → COO · DONE (2026-06-01)
2026-W23-002 · dir-007 IR F6 noindex-gate on 2,912 breed×state insurance pages → COO · DONE (2026-06-01)
2026-W23-001 · dir-014 closeout — CI Turbo Remote-Cache wiring + Carlo dashboard handoff (Steps 1–3) → COO · DONE code-side (PR #268); awaiting Carlo dashboard
2026-W22-022 · Ferret brand-route tags untagged (IR #4) → Monetization · DONE (2026-06-01; ferret-com now in AMAZON_BRAND + CHEWY_BRAND env mappings)
2026-W22-021 · Visual curated images + $0 wordmark identity → Visual · PARTIAL
  — Wordmark/identity: DONE. Logo wordmark unified (TLD-dot accent), OgTemplate wordmark aligned, Logo attribution fixed, real-photo heroes with real attribution on Ferret (PRs #475, #481, #482, #524, #526; merge commits visual/logo-attribution-foundation, visual/og-template-wordmark-unify).
  — Premium homepage visuals: DONE on all 5 polish sites. Dog reference v2 (#487), Ferret (#493), Fish (#494), PetFood (#495), Vets (#496); Dog hub polish (#526); Ferret manifest-backed photography (#524); premium photo coverage on Dog/PetFood/Vets hubs (#473) and Fish/Ferret hubs (#479).
  — Remaining imagery gap: 19 unsynced hero/article images across Fish (3 missing hub heroes), PetFood (5 missing hub heroes), Ferret (11 missing article/hero images) currently render paw-glyph placeholders — identified in launch-readiness QA 2026-06-07 (#564, #566). Image sync pending next `sync-images.mjs` run (Visual lane). Hardcoded Unsplash/Pexels CDN URLs banned by CI trust-guard (#482); all raw Unsplash URLs replaced with manifest-backed StockImage (#475, #481).
  — STILL-OPEN: sync the 19 missing manifest keys (Visual lane, blocks DNS on Fish/PetFood/Ferret).
2026-W22-020 · Bot Wakeup Queue implementation → COO · DONE (PR #264)
2026-W22-019 · 110 untracked affiliate links (+ Horses/Saddle 51 CTAs, IR #7) → Monetization · DONE
  — Horses/Saddle 51 direct CTAs routed through `/go` + disclosures added (PRs #477 + #99a168fd). Portfolio-wide affiliate-route integrity gate in CI (PR #260). Revenue-readiness audit (2026-06-07, #550) confirmed zero affiliate-route leakage across all 5 polish sites.
2026-W22-018 · PetFood industry intel → CSRO · DONE
2026-W22-017 · VOID (vendors already registered)
2026-W22-016 · Racing fork brief → Carlo decision · BLOCKED (awaiting Carlo)
2026-W22-015 · dir-015 monetization routing fixes → Monetization · DONE (merged)
2026-W22-014 · Dashboard metadata fix → CSRO · DONE (PR #228)
2026-W22-013 · Visual launch sign-off (Ferret/Vets/PetFood) → Visual · DONE (superseded by premium homepage wave)
  — Vets: sign-off PR #233, premium homepage #496, additional GEO schema #529, #551.
  — PetFood: sign-off #235, premium homepage #495.
  — Ferret: premium homepage #493, real-photography slots #524.
  — All 5 polish sites have received premium visual rollout. Remaining open item is image sync (see W22-021 above), not sign-off.
2026-W22-012 · Audience-capture L1 → Visual · DONE
2026-W22-011 · Mediavine Journey staging → Monetization · DONE
2026-W22-010 · QC standards expansion → CSRO · DONE
2026-W22-009 · Ferret monetization first-dollar → Monetization · DONE
  — First-dollar infrastructure: ferret-starter-kit funnel (#253 D-009 v2, `/go` routing fixed + buy-boxes on 6 pages). Behavior-cluster buy-boxes added (#498). Diet/care `/go` routing confirmed present. Ferret brand-route env-tags set (W22-022). Revenue-readiness audit (2026-06-07, #550) confirmed no affiliate leakage and all ferret funnel vendors registered. Conversion-density wiring (ferret-starter-kit funnel + insulinoma/cluster bridges) added at #553.
  — Remaining: no `best-X` reviews cluster on Ferret (intentionally deferred per §8a); starter-kit funnel is the primary money surface and is fully wired.
2026-W22-008 · Efty footer link component → COO · DONE (PR #226)
2026-W22-007 · Vets.co carrier realism → Monetization · DONE
  — Insurance hub trust audit (#230, #239 Track 1 + ops scope). FTC disclosure above telehealth CTAs + soften vendor superlatives (#459). Vets Rx/supplement dosing softened (#461). Clinical/medicated buy-box safety sweep (#480). Chewy Connect telehealth card de-monetized, stale dates refreshed (#545). Trust claims softened + over-claiming metadata downgraded (#567). Launch-readiness QA (2026-06-07, #564) confirmed: no Tier-1 trust/valuation risk, no consumer dose ranges, clinical pages reference-framed.
  — Remaining: keep `/vets/**` noindex + sample banners until Carlo approves a verified data source (safe as-is per QA #564).
2026-W22-006 · Affiliate disclosure system → Monetization · DONE
2026-W22-005 · Image manifest infra → Visual · DONE
2026-W22-004 · Vercel cost guard (turbo-ignore) → COO · DONE
2026-W22-003 · Bot coordination policy → CSRO · DONE
2026-W22-002 · QC standards baseline → CSRO · DONE
2026-W22-001 · Initial portfolio inventory → CSRO · DONE

## CSRO-completed (chronological, reference)

2026-W22-021a · Thesis illiquid-market reframe → CSRO · DONE
2026-W22-022a · Valuation model IR corrections → CSRO · DONE
2026-W22-023a · Strategy disposition stage-gates → CSRO · DONE
2026-W22-024a · Premortem revenue-first reframe → CSRO · DONE
2026-W22-025a · Affiliate-link integrity gate → CSRO · DONE (in #260)
2026-W22-026a · IR-guard scheduled action → CSRO · DONE (PR #260)

## QC trust-bar fixes (2026-06-01, from IR review)

QC-1 · Fish.com fake calibration/NIST testing claims removed + trust-guard gap closed → CSRO · DONE
QC-2 · Rx dose ranges removed portfolio-wide (ferret/dog/horses/vets) + QC §1.5.a policy → CSRO · DONE
QC-3 · §1.5.a residue swept on dog-com/nutrition/dog-supplements (glucosamine mg/kg → NASC-label/vet; CBD mg/kg → research-protocol framing) → COO · DONE (2026-06-01, IR re-review)
