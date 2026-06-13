---
from: COO
to: Carlo (+ advisor) / future build agent
status: strategy-brief (no build started — Carlo gate on API spend)
created: 2026-06-13
scope: askthevet `/ask` AI symptom-triage MVP (also deployable as a Dog.com/Vets.co surface)
carlo_gates: [Anthropic API key + spend cap, vendor account]
---

# Build brief — `/ask` AI symptom-triage (askthevet)

Carlo (2026-06-13) flagged askthevet/`/ask` as "strategically interesting… a
real product moat," gated on an Anthropic plan, safety/trust framing, no fake
veterinary advice, clear disclaimers, and careful cost controls. This is the
scored brief. **No code is started — building requires the Carlo-gated API key
+ spend cap.** Exact model id / pricing / prompt-caching specifics to be
confirmed against the current Claude API reference at build time (do not hard-
code from memory).

## The bet (why it's a moat)

The zero-click shift (AIO is eating SERP CTR) means the durable asset is the
**high-intent interaction kept on-property**. A trustworthy "describe what
you're seeing → get a calibrated, source-cited urgency read + next step" surface
is something Google/ChatGPT answer generically but **cannot answer with our
brand, our vetted content, and a conversion path to insurance/telehealth**. It
also becomes a **citation magnet** (other engines cite the tool) and a
first-party data surface (what owners actually ask).

## Five-field score

| Field | Read |
|---|---|
| **SEO Impact** | Medium-direct (the tool page ranks for "is my dog's X an emergency"-class queries) + large indirect (engagement, dwell, return visits). |
| **GEO Impact** | High — a structured, source-cited triage surface is highly citable, and the Q&A corpus seeds FAQ/HowTo schema at scale. |
| **Monetization Impact** | High-intent funnel: triage → insurance (Vets/Impact) + telehealth (Vetster/AskVet) + relevant product. Among the highest LTV surfaces in the portfolio. |
| **Build Effort** | **L** — API integration, retrieval over existing vetted content, a hard safety guardrail layer, rate-limiting/cost controls, and a constrained UI. |
| **Priority** | **P2** until the launch candidates (Vets/Dog) are DNS-live + revenue-validated (per Carlo's scaffold ordering); brief now so it's shovel-ready. |

## Non-negotiable trust/safety design (QC §1 — this is the whole ballgame)

1. **Not a diagnosis. Ever.** The product triages *urgency* and *next step*; it
   never names a definitive diagnosis or prescribes treatment/dose.
2. **Emergency-first bias.** Any red-flag pattern → "this may be an emergency,
   contact a vet / ER now" with poison-control + ER framing (mirror the existing
   `is-this-a-dog-emergency` tool's conservative posture).
3. **No fabricated credentials.** Responses are "based on cited references,"
   never "Dr. X says." No AI-generated vet persona.
4. **Grounded, not free-floating.** Answers are **retrieved from our own vetted
   content** (Dog/Vets health + breed + conditions data) — RAG, not the model's
   open-web memory — and every claim links to the source page. Refuse / defer
   when the corpus doesn't cover it.
5. **Hard refusals.** No Rx dosing, no human medical advice, no
   off-scope topics. A deterministic guardrail layer sits *around* the model.
6. **Visible disclaimer** on every response + a persistent "this is not a
   substitute for a veterinarian" frame.

## Architecture sketch (confirm specifics at build)

- **Model tier:** cost-sensitive triage MVP → a fast/cheap Claude tier (Haiku-
  class) for the main loop, with a stronger tier (Sonnet-class) reserved for
  harder reasoning if needed. Confirm current model ids + pricing via the Claude
  API reference at build; prefer the latest available in each tier.
- **Retrieval:** embed + index the existing vetted health/condition/breed
  content; answer only from retrieved, cited chunks. This is the trust moat and
  the cost control (smaller prompts, fewer hallucinations).
- **Guardrails:** pre-classifier (emergency / out-of-scope / Rx / human-medical
  → canned safe responses) + post-filter (block any diagnosis/dose language).
- **Cost controls:** per-session + global daily token caps, prompt caching of
  the system/safety preamble, response length caps, abuse rate-limiting, and a
  hard kill-switch env flag. Spend cap set **before** the key is created.

## MVP phases

1. **Phase 0 (now, $0):** this brief + the safety spec + the retrieval corpus
   inventory (which existing pages feed it). COO can produce the corpus map and
   guardrail spec without spend.
2. **Phase 1 (Carlo gate):** Anthropic key + spend cap → thin vertical slice on
   **one** vertical (Dog health) behind a feature flag, internal-only.
3. **Phase 2:** public on Dog.com `/ask` with full guardrails + conversion path,
   measured.
4. **Phase 3:** extend to Vets/other verticals; promote askthevet scaffold.

## Carlo gates (do not proceed past Phase 0 without these)

- Anthropic API key **+ spend cap set first** (cost control is a launch-blocker,
  not a nice-to-have).
- Confirm this is P-now vs. staying behind Vets/Dog launch (Carlo's call).

## What COO can do now at $0 (if you want it queued)

- Build the **retrieval corpus map** (which vetted pages are eligible sources).
- Write the **guardrail/safety spec** (the deterministic rules around the model).
- Draft the **system + safety preamble** copy.

None of those need spend or an account. Say the word and I'll produce them as the
next strategy block.
