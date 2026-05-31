#!/usr/bin/env bash
# scripts/set-affiliate-tag.sh
#
# Set a single affiliate tracking ID env var across the Vercel projects
# where that vendor is approved per policy §5 (vendor governance) and
# present in each site's affiliate-routes.ts.
#
# Usage:
#   1. Set VERCEL_TOKEN (do not commit):
#        export VERCEL_TOKEN='vcp_xxxxx...'
#
#   2. Run interactively:
#        bash scripts/set-affiliate-tag.sh
#
#      OR with args:
#        bash scripts/set-affiliate-tag.sh <VENDOR_KEY> <TRACKING_ID>
#        e.g. bash scripts/set-affiliate-tag.sh LEMONADE abc123
#
#   3. Script computes env var name as AFF_<VENDOR_KEY>_TAG and applies
#      to every Vercel project listed in the SITES_FOR_VENDOR map.
#
# Refs:
#   ops/policies/bot-coordination.md §5 (vendor approval per site)
#   ops/policies/bot-coordination.md §6 (tracking ID handling — env vars,
#                                       never inline in code)

set -euo pipefail

TEAM_ID='team_R4jRKf08nw1F1ktvhgqjmvcL'

# ──────────────────────────────────────────────────────────────
# Project ID map — all 10 active Vercel projects
# ──────────────────────────────────────────────────────────────
declare -A PROJECT_IDS=(
  [dog-com]='prj_Rzko5HK8EoL9R7DvmEC8qRUAYHvR'
  [fish-com]='prj_TbVpdhb7m6Wzb0JFEtxgf0Y3tGfj'
  [lizard-com]='prj_3We5XIvnZ56BG5UUFSpNz5VUCYYz'
  [saddle-com]='prj_R0mPz12YCBNlDaN68tJFYveq4AdS'
  [horses-com]='prj_fE51coYFXvmrgeDv3X1D8773e4d3'
  [petfood-com]='prj_1sNDMLCAJbqEk9GqfJ7la7wnDUKy'
  [petfoods-com]='prj_HJaPriQRh2UmAsojTK6XazwNMkFS'
  [ferret-com]='prj_b5LO6DIrAMvN1hBdvFfJjJyciVEn'
  [ferrets-com]='prj_t4NRp8PM3jlzsUfZYTSRPFKgb8Ir'
  [vets-co]='prj_Gy0ZiAuMn4eFiWAYtynXxlTvJJud'
)

# ──────────────────────────────────────────────────────────────
# Vendor → sites map
# Each vendor is applied only to sites where it's policy-approved.
# Vendor keys here are uppercase with underscores (env-var style):
# e.g. HEALTHY_PAWS = AFF_HEALTHY_PAWS_TAG = vendor 'healthy-paws'.
# ──────────────────────────────────────────────────────────────
declare -A SITES_FOR_VENDOR=(
  # Pet retailers (broadest scope)
  [AMAZON]='dog-com fish-com lizard-com saddle-com horses-com petfood-com petfoods-com ferret-com ferrets-com'
  [CHEWY]='dog-com fish-com lizard-com petfood-com petfoods-com ferret-com ferrets-com'
  [PETCO]='dog-com fish-com lizard-com ferret-com'
  [PETSMART]='dog-com fish-com lizard-com'

  # Pet insurance — dog-com gets all; vets-co gets all (insurance-only per policy)
  [TRUPANION]='dog-com vets-co'
  [HEALTHY_PAWS]='dog-com vets-co'
  [LEMONADE]='dog-com vets-co petfood-com'
  [PUMPKIN]='dog-com vets-co'
  [MANYPETS]='dog-com vets-co'
  [EMBRACE]='dog-com vets-co'
  [SPOT]='dog-com vets-co'
  [FETCH]='dog-com vets-co'
  [PETS_BEST]='dog-com vets-co'
  [ASPCA]='dog-com vets-co'
  [FIGO]='dog-com vets-co'
  [METLIFE]='dog-com vets-co'
  [WAGMO]='dog-com vets-co'

  # Equine insurance
  [MARKEL]='horses-com'
  [GREAT_AMERICAN]='horses-com'

  # Equestrian retail
  [SMARTPAK]='saddle-com horses-com'
  [DOVER]='saddle-com horses-com'
  [RIDINGWAREHOUSE]='saddle-com horses-com'
  [SCHNEIDER]='saddle-com horses-com'
  [GREENHAWK]='saddle-com horses-com'
  [STATELINETACK]='saddle-com horses-com'
  [BIGDEES]='saddle-com horses-com'
  [ADAMS_HORSE]='horses-com'

  # DNA testing
  [EMBARK]='dog-com'
  [WISDOM_PANEL]='dog-com'
  [BASEPAWS]='dog-com'

  # Telehealth
  [VETSTER]='dog-com'
  [PAWP]='dog-com'
  [DUTCH]='dog-com'
  [AIRVET]='dog-com'

  # Training
  [SPIRITDOG]='dog-com'
  [DOGGY_DAN]='dog-com'
  [BRAIN_TRAINING]='dog-com'

  # Pet specialty / DTC
  [FURHAVEN]='dog-com'
  [OLLIE]='dog-com petfood-com'
  [SPOT_TANGO]='dog-com petfood-com'
  [FARMERS_DOG]='dog-com petfood-com'
  [HEPPER]='dog-com'
  [PRETTYLITTER]='dog-com'
  [PETWELLBEING]='dog-com'
  [NUVET]='dog-com'

  # Pharmacy
  [CHEWY_PHARMACY]='dog-com'
  [ALLIVET]='dog-com'
  [PETMEDS]='dog-com'
  [VETRXDIRECT]='dog-com'
  [ENTIRELYPETS]='dog-com'

  # Aquarium
  [MARINEDEPOT]='fish-com'
  [BULK_REEF_SUPPLY]='fish-com'
  [LIVEAQUARIA]='fish-com'

  # Reptile
  [JOSHS_FROGS]='lizard-com'
  [BIG_APPLE_HERP]='lizard-com'
  [REPTILE_SUPPLY]='lizard-com'

  # Ferret
  [MARSHALL]='ferret-com ferrets-com'
  [WYSONG]='ferret-com ferrets-com'
  [CARNIWHOLE]='ferret-com'

  # Pet financing
  [CARECREDIT]='dog-com vets-co'
  [SCRATCHPAY]='dog-com vets-co'
  [CHERRY]='dog-com vets-co'
)

# ──────────────────────────────────────────────────────────────
# Input handling
# ──────────────────────────────────────────────────────────────

if [ -z "${VERCEL_TOKEN:-}" ]; then
  echo "❌ VERCEL_TOKEN env var not set."
  echo ""
  echo "   Set it first:"
  echo "     export VERCEL_TOKEN='vcp_xxxxx'"
  exit 1
fi

VENDOR_KEY="${1:-}"
TRACKING_ID="${2:-}"

if [ -z "$VENDOR_KEY" ]; then
  echo "Vendor key (uppercase, e.g. LEMONADE, HEALTHY_PAWS, EMBARK):"
  read -r VENDOR_KEY
fi
if [ -z "$TRACKING_ID" ]; then
  echo "Tracking ID for AFF_${VENDOR_KEY}_TAG:"
  read -r TRACKING_ID
fi

if [ -z "$VENDOR_KEY" ] || [ -z "$TRACKING_ID" ]; then
  echo "❌ Vendor key and tracking ID are both required."
  exit 1
fi

ENV_VAR_NAME="AFF_${VENDOR_KEY}_TAG"
SITES="${SITES_FOR_VENDOR[$VENDOR_KEY]:-}"

if [ -z "$SITES" ]; then
  echo "❌ Vendor '$VENDOR_KEY' not in SITES_FOR_VENDOR map."
  echo ""
  echo "   Known vendors:"
  for k in "${!SITES_FOR_VENDOR[@]}"; do
    echo "     $k"
  done | sort
  echo ""
  echo "   Add the mapping at the top of this script if this is a"
  echo "   policy-approved vendor that's missing here, then re-run."
  exit 1
fi

# Show the plan and confirm
echo ""
echo "═══════ PLAN ═══════"
echo "Set:   $ENV_VAR_NAME = $TRACKING_ID"
echo "On:    $SITES"
echo ""
read -p "Continue? [Y/n] " -n 1 -r REPLY
echo ""
if [[ ! $REPLY =~ ^[Yy]?$ ]]; then
  echo "Cancelled."
  exit 0
fi

# ──────────────────────────────────────────────────────────────
# Execute
# ──────────────────────────────────────────────────────────────

echo ""
echo "═══════ APPLYING ═══════"

success=0
already=0
failed=0

for site in $SITES; do
  pid="${PROJECT_IDS[$site]:-}"
  if [ -z "$pid" ]; then
    echo "❌ $site — project ID not found in PROJECT_IDS map"
    failed=$((failed + 1))
    continue
  fi

  result=$(curl -s -X POST \
    "https://api.vercel.com/v10/projects/${pid}/env?teamId=${TEAM_ID}" \
    -H "Authorization: Bearer ${VERCEL_TOKEN}" \
    -H "Content-Type: application/json" \
    -d "{\"key\":\"${ENV_VAR_NAME}\",\"value\":\"${TRACKING_ID}\",\"type\":\"encrypted\",\"target\":[\"production\",\"preview\"]}")

  if echo "$result" | grep -q '"created"'; then
    echo "✅ $site"
    success=$((success + 1))
  elif echo "$result" | grep -q 'ENV_ALREADY_EXISTS\|already exists'; then
    echo "⚠️  $site — already set (delete + re-add or update via dashboard if changing)"
    already=$((already + 1))
  else
    echo "❌ $site — $(echo "$result" | head -c 200)"
    failed=$((failed + 1))
  fi
done

echo ""
echo "═══════ DONE ═══════"
echo "✅ Created:        $success"
echo "⚠️  Already set:   $already"
echo "❌ Failed:         $failed"
echo ""
echo "Vercel will pick up the new env var on the next deploy."
echo "Trigger a redeploy from the Vercel dashboard, or push any commit"
echo "to main, to activate the new tracking ID."
