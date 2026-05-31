# horse-owner — Generic Horses.com welcome (5-email umbrella sequence)

Catch-all welcome sequence for the Horses.com email list. Fires for any subscriber whose `source` tag does not match a more specific sequence (e.g. the existing `first-horse-roadmap` or `first-horse-90-day` sequences).

Solves the orphan-source problem documented in `ops/handoffs/2026-05-31-monetization-email-sequence-gap.md`: 15 distinct source tags on Horses.com previously had no welcome journey configured.

## How to use these files

1. Each file in this folder is one email in the sequence (00–04).
2. Paste each into a Mailchimp Customer Journey "Send email" step.
3. Set the Customer Journey trigger to "Subscriber tagged `horse-owner`".
4. Use the timing column below for the delay before each email.

## Mailchimp tag-routing convention

Same pattern as `saddle-buyer`. The `/api/subscribe` integration applies two tags per subscriber:

1. The specific `source` tag (e.g. `discipline-dressage`, `guide-vaccination`, `health-colic`) — for analytics and any future bespoke sequence.
2. The umbrella tag `horse-owner` — for triggering this welcome flow.

When a specific source gets its own bespoke sequence later, suppress the umbrella for that source via Mailchimp segmentation.

The existing `first-horse-roadmap` sequence (fires on `source=first-horse-roadmap`) is the model for how a specific sequence overrides the umbrella.

## Sequence map

| # | File | Delay after signup | Subject |
|---|---|---|---|
| 00 | `00-welcome-and-reference.md` | 0 minutes | Welcome to Horses.com — your everyday reference |
| 01 | `01-forage-first.md` | 3 days | Forage first — the foundation of horse nutrition |
| 02 | `02-supplements-real-vs-marketed.md` | 7 days | What supplements actually do (and don't do) |
| 03 | `03-saddle-fit-not-optional.md` | 14 days | Saddle fit is not optional — the 12-point check |
| 04 | `04-the-two-schedules.md` | 21 days | The two schedules every horse owner runs by |

## Rules baked into every email

- **Sourced bodies.** AAEP vaccination guidance, NRC Nutrient Requirements of Horses, peer-reviewed equine veterinary literature. No clinical claims that aren't sourced.
- **No first-person clinical voice.** Horses.com Editorial voice only — per QC §1.1 and `bot-coordination.md §3`. Medical questions defer to "your equine vet" — never give individualized advice.
- **One single CTA per email** — a link to a Horses.com reference page (cross-links to Saddle.com are fine where the deeper guide lives there, e.g. `horse-nutrition-guide`).
- **Affiliate links allowed but FTC-disclosed** in the email footer.
- **Unsubscribe link in every email** (Mailchimp default).

## Frontmatter convention

```
---
subject: <≤55 chars>
preheader: <≤90 chars>
delay_after_signup: <e.g. "0 minutes" / "3 days" / "1 week">
tag: horse-owner
---
```
