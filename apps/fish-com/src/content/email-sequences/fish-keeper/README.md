# fish-keeper — Generic Fish.com welcome (5-email umbrella sequence)

Catch-all welcome sequence for the Fish.com email list. Fires for any subscriber whose `source` tag does not match a more specific sequence (currently the existing `aquarium-cycling` and `cycling-guide` sequences).

Solves the Layer-1 orphan-source problem documented in `ops/handoffs/2026-05-31-monetization-email-sequence-gap.md`. Fish.com has ~73 distinct source tags pointing at only 2 specific sequences; the umbrella covers the rest.

## How to use these files

1. Each file in this folder is one email in the sequence (00–04).
2. Paste each into a Mailchimp Customer Journey "Send email" step.
3. Set the Customer Journey trigger to "Subscriber tagged `fish-keeper`".
4. Use the timing column below for the delay before each email.

## Mailchimp tag-routing convention

`/api/subscribe` tags every subscriber with two tags:

1. The specific `source` value — for analytics, segmentation, and any future bespoke sequence.
2. The umbrella tag `fish-keeper` — for triggering this welcome flow.

The existing `aquarium-cycling` and `cycling-guide` sequences are the model for how specific sequences override the umbrella.

## Sequence map

| # | File | Delay | Subject |
|---|---|---|---|
| 00 | `00-welcome-and-reference.md` | 0 minutes | Welcome to Fish.com — your aquarium reference |
| 01 | `01-the-cycle-that-decides.md` | 3 days | The cycle that decides whether your fish live |
| 02 | `02-equipment-that-matters.md` | 7 days | Filter, heater, light — equipment that actually matters |
| 03 | `03-research-before-buying.md` | 14 days | Fish that fail in the wrong tank (research before buying) |
| 04 | `04-water-testing.md` | 21 days | Water testing — the only diagnostic that actually works |

## Rules baked into every email

- **Sourced bodies.** Aquarium-keeping literature, peer-reviewed work where available, established practice from public aquarist resources.
- **No first-person hobbyist credentials.** Fish.com Editorial only.
- **One CTA per email** — link to a Fish.com reference page.
- **Affiliate links allowed but FTC-disclosed** in the email footer.
- **Unsubscribe link in every email** (Mailchimp default).

## Frontmatter convention

```
---
subject: <≤55 chars>
preheader: <≤90 chars>
delay_after_signup: <e.g. "0 minutes" / "3 days">
tag: fish-keeper
---
```
