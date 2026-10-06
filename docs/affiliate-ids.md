# Affiliate IDs

Set these on the Vercel project when that partner account is approved. Leave them unset until then. This repo does not store the values.

Unset keeps today's hop. A Chewy product search (`/go/chewy-brand/...`) is shown as the matching Amazon search. An unset Vetster, AskVet, or Chewy Connect hop opens that service with the placeholder id removed, and the page button is that plain URL until the tag is set. Unset Lemonade, Pumpkin, and Pets Best quote buttons do the same: the carrier page stays live, the placeholder id is removed, and the button is that plain URL until `AFF_LEMONADE_TAG`, `AFF_PUMPKIN_TAG`, or `AFF_PETS_BEST_TAG` is set. The “we earn” line beside a hop stays off until that vendor's tag is set. Other insurance quotes still open through `/go`, with the partner id parameter removed. Trupanion, Healthy Paws, and Embrace stay held.

Setting the variable switches that partner's `/go` hop to the tagged partner URL. It does not change the other partners, and it does not fall back to Amazon.

| Env var | Vercel project | Hop | Attribution param |
|---|---|---|---|
| `AFF_CHEWY_TAG` | `dog-com` | `/go/chewy-brand/{search}` | `aff` |
| `AFF_CHEWY_TAG` | `carlo-os-fish-com` | `/go/chewy-brand/{search}` | `aff` |
| `AFF_CHEWY_TAG` | `ferret-com` | `/go/chewy-brand/{search}` | `aff` |
| `AFF_CHEWY_TAG` | `horses-com` | `/go/chewy/{search}` | `aff` |
| `AFF_CHEWY_TAG` | `carlo-os-vets-co` | `/go/chewy/connect` (Chewy Connect telehealth only) | `refid` |
| `AFF_VETSTER_TAG` | `carlo-os-vets-co` | `/go/vetster/telehealth` | `refid` |
| `AFF_ASKVET_TAG` | `carlo-os-vets-co` | `/go/askvet/telehealth` | `refid` |
| `AFF_LEMONADE_TAG` | `carlo-os-vets-co` | `/go/lemonade/{sku}` | `affid` |
| `AFF_PUMPKIN_TAG` | `carlo-os-vets-co` | `/go/pumpkin/{sku}` | `refid` |
| `AFF_PETS_BEST_TAG` | `carlo-os-vets-co` | `/go/pets-best/{sku}` | `affid` |
| `AFF_TRUPANION_TAG` | `dog-com`, `carlo-os-vets-co` | `/go/trupanion/home` | `refid` |
| `AFF_HEALTHY_PAWS_TAG` | `dog-com`, `carlo-os-vets-co` | `/go/healthy-paws/home` | `affid` |
| `AFF_EMBRACE_TAG` | `dog-com`, `carlo-os-vets-co` | `/go/embrace/home` | `source` |

Fish, horses, and ferret do not register Trupanion, Healthy Paws, or Embrace. Do not put those three variables on `carlo-os-fish-com`, `horses-com`, or `ferret-com`.

`/go` still records the page source from `?s=` on the hop. That source is separate from the partner id above.

## Editorial quote buttons vs the Dog.com funnel

Editorial Vets.co buttons for Trupanion, Healthy Paws, and Embrace stay disabled until `AFF_TRUPANION_TAG`, `AFF_HEALTHY_PAWS_TAG`, and `AFF_EMBRACE_TAG` are set. A tag set at runtime turns that partner’s quote link on. Do not invent an ID.

The Dog.com `(funnels)/pet-insurance` Trupanion button is an explicit monetization-lane exception. It stays a live `/go/trupanion/home?s=pet-insurance-hub-best-overall` hop until Carlo sets those tags. Do not disable that funnel hop without his say.

## Amazon Associates

Other docs still name the tag `boltonpets20-20`. The live `AFF_AMAZON_TAG` value is `boltonpets20-20ls`, and Carlo needs to confirm it. The hop copies that env value as-is and appends nothing, so a correction is an env change only. Do not change the Vercel value from this repo.
