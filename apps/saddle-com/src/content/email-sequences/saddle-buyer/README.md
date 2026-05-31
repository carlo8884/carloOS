# saddle-buyer — Generic Saddle.com welcome (5-email umbrella sequence)

Catch-all welcome sequence for the Saddle.com email list. Fires for any subscriber whose `source` tag does not match a more specific sequence (e.g. the existing `saddle-fit` sequence that fires on `source=saddle-fit-checklist*`).

Solves the orphan-source problem documented in `ops/handoffs/2026-05-31-monetization-email-sequence-gap.md`: 19 distinct source tags on Saddle.com previously had no welcome journey configured.

## How to use these files

1. Each file in this folder is one email in the sequence (00–04).
2. Paste each into a Mailchimp Customer Journey "Send email" step.
3. Set the Customer Journey trigger to "Subscriber tagged `saddle-buyer`".
4. Use the timing column below for the delay before each email.

## Mailchimp tag-routing convention

`EmailCapture` passes the specific source value as the request payload. On the Mailchimp side, the `/api/subscribe` integration should apply **two** tags to each subscriber:

1. The specific `source` tag (e.g. `guide-leather-care`, `accessories-hub`, `english-hub`) — for analytics, segmentation, and any future bespoke sequence.
2. The umbrella tag `saddle-buyer` — for triggering this welcome flow.

When a specific source eventually gets its own bespoke sequence (e.g. `accessories-hub` gets its own course), the umbrella welcome can be suppressed for that source via a Mailchimp segmentation rule.

The existing `saddle-fit` sequence (fires on tag `saddle-fit`) is the model for how a more specific sequence overrides the umbrella.

## Sequence map

| # | File | Delay after signup | Subject |
|---|---|---|---|
| 00 | `00-welcome-and-library.md` | 0 minutes | Welcome to Saddle.com — your buyer-side library |
| 01 | `01-the-one-decision.md` | 3 days | The one decision that decides your saddle |
| 02 | `02-fit-check-and-its-limits.md` | 7 days | The 4-point fit check (and what it can't do) |
| 03 | `03-new-vs-used.md` | 14 days | New vs used — the used-saddle inspection protocol |
| 04 | `04-brand-fit-personality.md` | 21 days | Brand-fit personality — where to start trying |

## Rules baked into every email

- **Sourced bodies.** Public literature, SMS / MSA standards, peer-reviewed pressure-mapping research. No fitting or clinical claims that aren't sourced.
- **No first-person fitting / craft / clinical claims.** Saddle.com Editorial voice only — per QC §1.1 and `ops/policies/bot-coordination.md §3`.
- **One single CTA per email** — a link to a Saddle.com reference page. Multiple reference links at the bottom are fine.
- **Affiliate links allowed but FTC-disclosed** in the email footer.
- **Unsubscribe link in every email** (Mailchimp default).

## Frontmatter convention

```
---
subject: <≤55 chars>
preheader: <≤90 chars>
delay_after_signup: <e.g. "0 minutes" / "3 days" / "1 week">
tag: saddle-buyer
---
```
