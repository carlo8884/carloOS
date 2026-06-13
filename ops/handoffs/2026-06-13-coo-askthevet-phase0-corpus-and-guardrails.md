---
from: COO
to: Carlo (+ future /ask build agent)
status: phase-0 spec (no build — API key + spend cap is the Carlo gate)
created: 2026-06-13
parent: 2026-06-13-coo-askthevet-ask-build-brief.md
---

# `/ask` Phase-0 — retrieval corpus map + guardrail spec ($0, no spend)

Companion to the `/ask` build brief. This is the buildable-without-spend layer:
**what content the assistant may ground on**, and **the deterministic safety
rules around the model**. Both are the trust moat. Nothing here calls an API.

## A. Retrieval corpus map (what `/ask` may cite)

The assistant answers **only** from retrieved, cited chunks of our own vetted
content — never the model's open-web memory. Eligible sources, verified present:

**Dog.com**
- `app/health/**` — 40 vetted editorial health pages (Editorial-team byline, cited)
- `app/breeds/*/health` — 9 breed×health deep-dives (frequency labels, not invented %)
- `src/data/breed-health.ts`, `conditions.ts`, `diseases.ts`, `dog-symptom-signs.ts`,
  `symptoms.ts` — structured, already trust-reviewed
- The `/tools/is-this-a-dog-emergency` triage taxonomy (the urgency backbone)

**Vets.co**
- `app/health/**` — 39 clinical-authority health pages
- `src/data/diagnostics.ts`, `specialties.ts`, `symptoms.ts` — structured clinical refs

### Hard EXCLUSIONS from the corpus (never retrievable)
- `src/data/medications.ts` / any **Rx dosing** content → the assistant must never
  surface drug doses (QC §1; the data exists for editorial pages, not for `/ask`).
- `(funnels)/**`, affiliate/`/go` content, `affiliate-routes.ts` → no monetization
  inside a triage answer (trust separation).
- Insurance carrier comparison data → `/ask` triages health, it does not sell.
- Anything without an Editorial byline + citation.

### Retrieval rules
- Every answer cites the source page(s) it drew from, with links.
- If retrieval returns nothing above a relevance threshold → **refuse/defer**
  ("I don't have vetted material on that — here's how to reach a vet"), never
  improvise from model memory.

## B. Guardrail spec (deterministic layer around the model)

Three layers; the model only ever runs in the middle, fenced on both sides.

### 1. Pre-classifier (runs before the model)
Classify the input; route hard cases to canned responses **without** calling the model:
- **Emergency red-flags** → canned "this may be an emergency, contact a vet/ER now"
  + poison-control framing. Seed the red-flag list from the existing
  `is-this-a-dog-emergency` TriageHelper (e.g., difficulty breathing, bloat signs,
  collapse, seizure, suspected toxin, uncontrolled bleeding, trauma).
- **Rx / dosing request** → refuse ("I can't advise on medication or doses — your vet
  sets those").
- **Human-medical / off-scope** → refuse + redirect.
- **Otherwise** → proceed to retrieval + model.

### 2. Model loop (fenced)
- System + safety preamble (cacheable): "You triage urgency and next steps for pet
  owners. You are NOT a vet and never diagnose or prescribe. Answer only from the
  provided sources; if they don't cover it, say so. Always end with a defer-to-vet
  line." 
- Input = user question + retrieved cited chunks only.

### 3. Post-filter (runs on the model output)
- Block/scrub any **definitive diagnosis** phrasing ("your dog has X") → soften to
  "signs like these are sometimes associated with…, a vet can confirm."
- Block any **dose/treatment instruction**.
- Require the citation + defer-to-vet line to be present, else regenerate/append.

### Cost & abuse controls (set before any key — Carlo gate)
- Global daily + per-session token caps; hard kill-switch env flag.
- Prompt-cache the (large, static) safety preamble.
- Response length cap; rate-limit per IP/session.
- Spend cap configured on the Anthropic account **first**.

## C. What's now ready vs. still Carlo-gated

**Ready (this doc + the brief):** corpus boundary, exclusion rules, the 3-layer
guardrail design, the emergency red-flag source, cost-control plan.

**Carlo gate (Phase-1 start):** Anthropic API key **with spend cap set first**, and
the call on whether `/ask` jumps ahead of Vets/Dog DNS launch (brief says it stays
P2 behind them). No further COO spend-free work blocks on me here — Phase-1 is the
thin vertical slice, which needs the key.
