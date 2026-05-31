# dog-owner — Generic Dog.com welcome (5-email umbrella sequence)

Catch-all welcome sequence for the Dog.com email list. Fires for any subscriber whose `source` tag does not match a more specific sequence (currently the existing `puppy-onboarding` and `puppy-schedule` sequences).

Solves the portfolio-wide Layer-1 orphan-source problem documented in `ops/handoffs/2026-05-31-monetization-email-sequence-gap.md`. Dog.com alone has ~140 distinct source tags pointing at only 2 specific sequences; ~138 are orphaned without this umbrella.

## How to use these files

1. Each file in this folder is one email in the sequence (00–04).
2. Paste each into a Mailchimp Customer Journey "Send email" step.
3. Set the Customer Journey trigger to "Subscriber tagged `dog-owner`".
4. Use the timing column below for the delay before each email.

## Mailchimp tag-routing convention

The `/api/subscribe` integration tags every subscriber with **two** tags:

1. The specific `source` value (e.g. `breed-golden-retriever`, `condition-hip-dysplasia`, `food-grain-free`) — for analytics, segmentation, and any future bespoke sequence.
2. The umbrella tag `dog-owner` — for triggering this welcome flow.

When a specific source eventually gets its own bespoke sequence, suppress the umbrella for that source via Mailchimp segmentation. The existing `puppy-onboarding` and `puppy-schedule` sequences are the model for how specific sequences override the umbrella.

## Sequence map

| # | File | Delay | Subject |
|---|---|---|---|
| 00 | `00-welcome-and-reference.md` | 0 minutes | Welcome to Dog.com — your dog-owner reference |
| 01 | `01-the-food-decision.md` | 3 days | The food decision (and what the bag isn't telling you) |
| 02 | `02-annual-vet-visit.md` | 7 days | The annual vet visit — what to actually ask |
| 03 | `03-pet-insurance-math.md` | 14 days | Pet insurance — when it pays (and when it doesn't) |
| 04 | `04-pain-dogs-hide.md` | 21 days | The signs of pain dogs hide (and the ones they don't) |

## Rules baked into every email

- **Sourced bodies.** AAHA, AVMA, AAFCO, peer-reviewed veterinary literature. No clinical claims that aren't sourced.
- **No first-person clinical voice.** Dog.com Editorial only. Medical questions defer to "your vet" — never give individualized advice.
- **One single CTA per email.** Multiple reference links at the bottom are fine.
- **Affiliate links allowed but FTC-disclosed** in the email footer.
- **Unsubscribe link in every email** (Mailchimp default).

## Frontmatter convention

```
---
subject: <≤55 chars>
preheader: <≤90 chars>
delay_after_signup: <e.g. "0 minutes" / "3 days">
tag: dog-owner
---
```
