# BUILD BRIEF — Dog.com "Is this a dog emergency?" symptom-triage helper

> **Feasibility verdict (3 lines):**
> The `SIGNS` array (15 items: `num`, `level: 'emergency'|'urgent'`, `title`, `body`) and `STYLES` map are **sufficient as data content as-is** — every triage card, verdict copy, and badge can be driven from them with zero new medical writing.
> BUT the data is **inline-only** inside `health/dog-symptoms-guide/page.tsx` (a server component); it must be **lifted to a shared data module first** (`apps/dog-com/src/data/dog-symptom-signs.ts`) so both the existing static guide AND the new client tool import the same source — never duplicate it.
> Verdict tier needs ONE additive mapping: a `monitor`-eligibility nuance lives in the `body` copy ("monitor" vs "go") but is not a discrete tag, so map verdicts from `level` + a small per-sign override set rather than inventing new clinical content.

> **Status:** ready for a fresh, full-context build. Do NOT start in a strained context.
> **Lane:** COO (content/tool/data) only. No spend/DNS/secrets. No Monetization `/go` (clinical surface — non-product CTAs only).
> **Scope:** dog-com ONLY. Do NOT touch vets-co/insurance, fish, or lizard.
> **Author:** COO · **Created:** 2026-06-09

---

## 1. Objective
Upgrade the static `/health/dog-symptoms-guide` into an interactive **"Is this a dog emergency?" triage helper** at a new route (`/tools/is-this-a-dog-emergency` recommended). The owner selects the sign(s) they're seeing; the tool returns a **conservative urgency verdict** (Go now / Same-day vet / Monitor closely) built from the existing guidance copy, plus safe next-steps and emergency contacts. It is a **triage aid, NOT a diagnosis tool**. Highest-trust-risk surface in the portfolio (emergency health) — every decision errs toward "seek care."

- **SEO:** "is my dog an emergency", "dog symptoms when to go to vet" high-intent long-tail; WebApplication + MedicalWebPage schema.
- **GEO:** citation-magnet — structured decision flow over a primary-source-backed (AVMA/Merck/AAHA/ASPCA) sign list; conservative + attributed = AI-Overview/Perplexity friendly.
- **Monetization:** indirect only — insurance (`/reviews/best-pet-insurance`) + `/find-a-vet` internal CTAs; NO product affiliate (acquisition/trust value > click value here).
- **Build Effort:** M (1 data-module lift + 1 client component + 1 page + 2 internal-link edits).
- **Priority:** P2 (polish-phase "tool that actually works" on a polish-list site).

## 2. User flow
1. Land on `/tools/is-this-a-dog-emergency`.
2. **Persistent top banner (always visible, before any interaction):** "If your dog is struggling to breathe, collapsed, bleeding heavily, or you suspect poisoning — call your nearest emergency vet or ASPCA Animal Poison Control (888-426-4435) now. Do not wait for this tool."
3. Checklist of the 15 signs (grouped Emergency / Urgent, or flat with badges), each selectable.
4. User selects one or more signs.
5. Verdict updates **live** (no submit; never a loading dead-end).
6. Output: the **most severe** verdict among selected signs drives the headline (Go now > Same-day > Monitor), with each selected sign's title + `body` listed below + next-steps + emergency contacts.
7. Nothing selected → "when in doubt, call your vet" default state; never a fabricated preview verdict.

## 3. Inputs
- `selectedSigns`: `Set<string>` of sign `num` values (the only input).
- No free-text, no breed/age/weight (avoid implying personalized diagnosis). Curated sign list only.

## 4. Output states (verdicts)
Verdict = the **highest-severity tier** among selected signs:
- **GO NOW (red)** — any selected sign is `emergency`. "These signs can be a life-threatening emergency. Go to an emergency vet now." + matching `body` + ASPCA number + `/find-a-vet`.
- **SAME-DAY VET (amber)** — selected signs all `urgent`, none emergency. "See a vet today — sooner if it worsens." + matching `body` + `/find-a-vet`.
- **MONITOR CLOSELY (neutral)** — ONLY for `urgent` signs whose copy explicitly permits monitoring a single mild episode (signs 09, 14). Must read: "May be reasonable to monitor for a short window — but call your vet if it persists, worsens, or you're unsure." **Never a clean all-clear.**
- **Pre-input:** checklist + persistent banner, no verdict.
- **Mixed selection:** always resolve UPWARD to the most severe tier.

**Conservative rule:** when in doubt, round toward more care. The monitor tier always carries the "call if unsure" escalation line.

## 5. Data needed (REUSE — invent no new medical content)
- Source: the existing `SIGNS` array in `apps/dog-com/src/app/health/dog-symptoms-guide/page.tsx`. Shape `{ num: string; level: 'emergency'|'urgent'; title: string; body: string }` (15 records; 01–08 emergency, 09–15 urgent).
- `STYLES` map (`bg/border/numColor/badge/...`) — reuse for badges; **add a third neutral `monitor` style** (presentation only).
- **Action:** lift `SIGNS` + `STYLES` into `apps/dog-com/src/data/dog-symptom-signs.ts` (export `SIGNS`, `STYLES`, `Sign` interface). Refactor the guide page to import it — byte-identical rendered content. One source, two consumers.
- **Verdict mapping:** add `MONITOR_ELIGIBLE = new Set(['09','14'])` (signs whose `body` explicitly permits short-term monitoring). Everything else `urgent` → same-day; `emergency` → go-now. Presentation mapping of EXISTING copy, not new clinical guidance.

## 6. Files / components to reuse
- **Pattern:** `apps/dog-com/src/app/tools/dog-calorie-calculator/Calculator.tsx` (`'use client'`, `useState`/`useMemo`, `aria-live="polite"` results, `aria-pressed` toggles, brand tokens). Build `apps/dog-com/src/app/tools/is-this-a-dog-emergency/TriageHelper.tsx`.
- **Page scaffold:** `apps/dog-com/src/app/tools/dog-calorie-calculator/page.tsx` (buildMetadata, breadcrumb nav, hero, SchemaScript, FAQAccordion, EmailCapture, disclosed next-step CTA block).
- **Schema:** `buildBreadcrumbSchema` + `WebApplication` (mirror calorie page) + reuse `buildMedicalWebPageSchema`. Exactly ONE BreadcrumbList.
- **Emergency block:** reuse the guide's ASPCA panel (888-426-4435) + red "Find Your Nearest Emergency Vet → `/find-a-vet`" CTA.
- Existing guide stays live — link guide↔tool both ways (no orphan).

## 7. Trust guardrails (EMERGENCY-SPECIFIC — NON-NEGOTIABLE, QC §1)
- **NOT a diagnosis.** Persistent: "This tool helps you decide how urgently to seek care. It does not diagnose your dog. Only a veterinarian can diagnose." No condition asserted as cause.
- **Never delay care.** Persistent top banner renders ABOVE the checklist on all states; verdict never tells a user to wait when unsure.
- **Conservative only** — mixed selections resolve to most severe; monitor tier always carries "call your vet / emergency clinic now if in doubt."
- **"If in doubt, seek care now"** on every verdict state incl. monitor.
- **No fake credentials** — byline stays "Dog.com Editorial." No DVM/vet-tech/fake author.
- **No first-person clinical claims** — trust-guard enforces `we (tested|calibrated|measured)` and `in N years of (veterinary|practice|clinical)`. Keep the existing third-person `body` copy verbatim.
- **No AI-generated humans / fake clinical imagery.**
- **No invented signs, no severity re-grading** — only the 15 existing signs and their existing `level`.
- Keep `SOURCES` attribution (AVMA, Merck, AAHA, ASPCA) visible.

## 8. Monetization path (NON-PRODUCT ONLY — clinical/emergency surface)
- **NO product `/go` links. EVER.** Confirmed: zero `/go/` links exist under `apps/dog-com/src/app/health/**` today — preserve that.
- **Allowed CTAs (internal, non-product):**
  - `/find-a-vet` — primary action on every verdict ("Find your nearest emergency vet →"). Route confirmed.
  - `/reviews/best-pet-insurance` — secondary, ONLY in a calm "after the emergency, protect against the next one" footer block, NOT inside/above a Go-now verdict. Route confirmed. If shown, `AffiliateDisclosure` (inline) above it.
  - ASPCA Animal Poison Control 888-426-4435 — informational, always.
- Insurance is the only monetizable surface, internal/editorial; tool earns indirectly via engagement + insurance intent, never a clinical buy-box.

## 9. What NOT to do
- No diagnosis / most-likely-condition / certainty.
- No product `/go` / affiliate buy-box anywhere on the page.
- No "all clear / your dog is fine" verdict — lowest tier is "monitor + call if unsure."
- No downward resolution of mixed selections.
- No duplicating `SIGNS` into the component — import the data module.
- No invented signs / re-graded severities.
- No fake credentials / AI humans / first-person clinical claims (trust-guard will fail).
- No email-capture gating (optional, below fold).
- No insurance CTA inside/above an emergency verdict.
- Do NOT touch vets-co/insurance/fish/lizard.

## 10. Done-when
- `data/dog-symptom-signs.ts` exports `SIGNS`/`STYLES`/`Sign`; guide imports it with byte-identical rendered content.
- `/tools/is-this-a-dog-emergency` renders; selecting signs returns the correct conservative verdict client-side; persistent banner on all states.
- Three verdict states + pre-input all render; mixed resolves upward; monitor carries escalation line.
- Only non-product CTAs (`/find-a-vet`, `/reviews/best-pet-insurance`, ASPCA); zero `/go/` on the page.
- Exactly one BreadcrumbList; WebApplication + MedicalWebPage schema; metadata title+description; sources visible.
- Tool linked from guide + `/health` + `/tools`; guide links back.
- `node scripts/ci/{trust-guard,metadata-policy,link-check}.mjs` green; `tsc --noEmit` clean for new files.

## 11. Test / verification plan
1. **Data-lift integrity:** refactored guide renders identical copy/order/badges; `SIGNS.length===15`; 01–08 emergency, 09–15 urgent.
2. **Verdict logic:** sign 01 → GO NOW; 13 → SAME-DAY; 09 → MONITOR (with escalation); 01+09 → GO NOW (upward); none → pre-input.
3. **Conservatism scan:** grep component for `fine|all clear|no need|safe to wait|you can wait` → 0; every verdict (incl. monitor) contains the "call your vet / if in doubt" line.
4. **No-product-CTA scan:** grep page+component for `/go/` → 0; CTAs only `/find-a-vet`, `/reviews/best-pet-insurance`, ASPCA.
5. **Trust scan:** grep `DVM|we tested|we calibrated|years of (veterinary|practice)|I diagnosed` → 0; `trust-guard.mjs` green.
6. **Schema:** exactly one BreadcrumbList; WebApplication + MedicalWebPage validate; metadata present.
7. **A11y/mobile:** `aria-live` results, labeled/`aria-pressed` toggles, keyboard-selectable; ≤375px stacks no overflow.
8. **Orphan check:** tool linked from guide + `/health` + `/tools`; guide links to tool.
9. **Gates:** all three green; `tsc --noEmit` clean (ignore pre-existing Og/font env noise).

## 12. Open questions
- **Q1 (route):** `/tools/is-this-a-dog-emergency` (query-matching, GEO) vs `/tools/dog-symptom-triage`. → Recommend former; confirm no collision.
- **Q2 (monitor tier):** `MONITOR_ELIGIBLE={09,14}` vs collapse to two verdicts (Go now / See a vet) for max conservatism. → Recommend keep monitor for 09/14 with hard escalation line; surface to CSRO if stricter two-tier preferred.
- **Q3 (live vs button):** → Recommend live update; never a loading state on an emergency surface.
- **Q4 (insurance CTA presence):** include calm-footer insurance CTA, or keep 100% care-only. → Default include ONLY in non-emergency footer with disclosure; drop if CSRO/IR flag any trust risk.

---
**Recommended FIRST task for the fresh context:** create `apps/dog-com/src/data/dog-symptom-signs.ts` by lifting `SIGNS`/`STYLES` verbatim, refactor `health/dog-symptoms-guide/page.tsx` to import it (verify identical render), THEN build the component + page. The data lift must land + verify clean before any tool UI is written.
