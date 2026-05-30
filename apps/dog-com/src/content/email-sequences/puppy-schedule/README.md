# Puppy Schedule — 5-Email Welcome Sequence

Mailchimp Customer Journey for the `dog-com:puppy-schedule` tag.

## Sequence map

| # | File | Day offset | Subject | Affiliate vendors |
|---|---|---|---|---|
| 1 | `01-welcome.md` | 0 (immediate) | Your 8-Week Puppy Schedule is here → | — |
| 2 | `02-education.md` | 2 | The socialization mistake that costs you years | chewy |
| 3 | `03-story.md` | 5 | What "doing it right" actually looked like | — |
| 4 | `04-recommendation.md` | 9 | The puppy starter kit, stripped down | chewy, lemonade |
| 5 | `05-engagement.md` | 14 | Send us a puppy photo (seriously) | — |

## Trigger

Subscriber tagged `dog-com:puppy-schedule` (set by `EmailCapture` when `source=puppy-schedule-*`).

## Expected revenue (Architect S20)

Per Architect S20 / Playbook V2 §3, welcome sequences for high-AOV pet verticals carry a per-subscriber annual revenue floor of **$2–5/sub/yr** — puppy is the highest of the seven because of insurance CPA + Chewy starter-kit AOV. Conservative floor: **$2.50/sub/yr**. Aspirational ceiling: **$5/sub/yr**.

## Rules

- One CTA per email.
- FTC disclosure on every email with affiliate links.
- No fabricated DVM credentials — sign as "Dog.com Editorial Team".
- Reference Architect S20 / Directive 4 in commits.
