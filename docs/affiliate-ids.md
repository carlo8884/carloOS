# Affiliate IDs

Set these on the Vercel project when that partner account is approved. Leave them unset until then. This repo does not store the values.

Unset keeps today's hop. A Chewy product search (`/go/chewy-brand/...`) is shown as the matching Amazon search. A Chewy Connect hop stays hidden. An insurance quote still opens, with the partner id parameter removed.

Setting the variable switches that partner's `/go` hop to the tagged partner URL. It does not change the other partners, and it does not fall back to Amazon.

| Env var | Vercel project | Hop | Attribution param |
|---|---|---|---|
| `AFF_CHEWY_TAG` | `dog-com` | `/go/chewy-brand/{search}` | `aff` |
| `AFF_CHEWY_TAG` | `carlo-os-fish-com` | `/go/chewy-brand/{search}` | `aff` |
| `AFF_CHEWY_TAG` | `ferret-com` | `/go/chewy-brand/{search}` | `aff` |
| `AFF_CHEWY_TAG` | `horses-com` | `/go/chewy/{search}` | `aff` |
| `AFF_CHEWY_TAG` | `carlo-os-vets-co` | `/go/chewy/connect` (Chewy Connect telehealth only) | `refid` |
| `AFF_TRUPANION_TAG` | `dog-com`, `carlo-os-vets-co` | `/go/trupanion/home` | `refid` |
| `AFF_HEALTHY_PAWS_TAG` | `dog-com`, `carlo-os-vets-co` | `/go/healthy-paws/home` | `affid` |
| `AFF_EMBRACE_TAG` | `dog-com`, `carlo-os-vets-co` | `/go/embrace/home` | `source` |

Fish, horses, and ferret do not register Trupanion, Healthy Paws, or Embrace. Do not put those three variables on `carlo-os-fish-com`, `horses-com`, or `ferret-com`.

`/go` still records the page source from `?s=` on the hop. That source is separate from the partner id above.
