# ferret-keeper — Generic Ferret.com welcome (5-email umbrella sequence)

Catch-all welcome sequence for the Ferret.com email list. Fires for any subscriber whose `source` tag does not match a more specific sequence (currently the existing `first-year-schedule` sequence).

Solves the Layer-1 orphan-source problem documented in `ops/handoffs/2026-05-31-monetization-email-sequence-gap.md`. Ferret.com has ~17 distinct source tags pointing at only 1 specific sequence; the umbrella covers the rest.

## How to use these files

1. Each file in this folder is one email in the sequence (00–04).
2. Paste each into a Mailchimp Customer Journey "Send email" step.
3. Set the Customer Journey trigger to "Subscriber tagged `ferret-keeper`".
4. Use the timing column below for the delay before each email.

## Mailchimp tag-routing convention

`/api/subscribe` tags every subscriber with two tags:

1. The specific `source` value — for analytics, segmentation, and any future bespoke sequence.
2. The umbrella tag `ferret-keeper` — for triggering this welcome flow.

The existing `first-year-schedule` sequence is the model for how a specific sequence overrides the umbrella.

## Sequence map

| # | File | Delay | Subject |
|---|---|---|---|
| 00 | `00-welcome-and-reference.md` | 0 minutes | Welcome to Ferret.com — your obligate-carnivore reference |
| 01 | `01-diet-basics.md` | 3 days | Diet basics — what makes ferret nutrition different |
| 02 | `02-the-cage-is-the-bedroom.md` | 7 days | The cage is the bedroom — out-of-cage time |
| 03 | `03-senior-ferret-medicine.md` | 14 days | Senior ferret medicine — insulinoma, adrenal, lymphoma |
| 04 | `04-five-year-mark.md` | 21 days | What "we did this right" looks like at year 5 |

## Rules baked into every email

- **Sourced bodies.** Quesenberry & Carpenter (*Ferrets, Rabbits, and Rodents*), AFA, AEMV, exotic-pet veterinary literature.
- **No first-person clinical voice.** Ferret.com Editorial only. Medical questions defer to "your exotic-pet vet" — never give individualized advice.
- **Health pages: supportive supplies only**, never treatment claims (matches QC §1 and the existing `/health/aging-ferret-care` framing).
- **One CTA per email** — link to a Ferret.com reference page.
- **Affiliate links allowed but FTC-disclosed** in the email footer.
- **Unsubscribe link in every email** (Mailchimp default).

## Frontmatter convention

```
---
subject: <≤55 chars>
preheader: <≤90 chars>
delay_after_signup: <e.g. "0 minutes" / "3 days">
tag: ferret-keeper
---
```
