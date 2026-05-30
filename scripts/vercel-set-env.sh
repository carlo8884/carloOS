#!/bin/bash
# Sets a Vercel environment variable across all 10 CarloOS production projects.
#
# USAGE:
#   export VERCEL_TOKEN="<token from https://vercel.com/account/tokens>"
#   bash scripts/vercel-set-env.sh AFF_AMAZON_TAG boltonpets20-20
#
# Examples for other tracking IDs as you get them:
#   bash scripts/vercel-set-env.sh AFF_CHEWY_AFFILIATE_ID  <chewy-id>
#   bash scripts/vercel-set-env.sh AFF_SMARTPAK_AFFILIATE_ID <smartpak-id>
#   bash scripts/vercel-set-env.sh AFF_IMPACT_ID <impact-id>
#
# Idempotent — if the variable already exists, it's UPDATED. Safe to re-run.
# Applies to Production + Preview targets (skips Development).

set -euo pipefail

if [ -z "${VERCEL_TOKEN:-}" ]; then
  echo "ERROR: VERCEL_TOKEN env var not set."
  echo "Get a token at https://vercel.com/account/tokens, then:"
  echo "  export VERCEL_TOKEN=<token>"
  echo "  bash scripts/vercel-set-env.sh <ENV_VAR_NAME> <VALUE>"
  exit 1
fi

if [ "$#" -lt 2 ]; then
  echo "ERROR: missing arguments."
  echo "Usage: bash scripts/vercel-set-env.sh <ENV_VAR_NAME> <VALUE>"
  echo "Example: bash scripts/vercel-set-env.sh AFF_AMAZON_TAG boltonpets20-20"
  exit 1
fi

ENV_KEY="$1"
ENV_VALUE="$2"
TEAM_ID="team_R4jRKf08nw1F1ktvhgqjmvcL"
API="https://api.vercel.com"
AUTH="Authorization: Bearer ${VERCEL_TOKEN}"

# The 10 production CarloOS sites. Plus the 5 new app scaffolds.
# Project names in Vercel may differ from app names — we use Vercel's
# /v9/projects search to resolve.
SITES=(
  "dog-com"
  "carlo-os-vets-co"
  "carlo-os-fish-com"
  "carlo-os-saddle-com"
  "carlo-os-lizard-com"
  "horses-com"
  "petfood-com"
  "petfoods-com"
  "ferret-com"
  "ferrets-com"
  "askthevet"
  "seniorpets"
  "dogpicture"
  "petsupplies"
  "hardmoneyloans"
)

echo "=== Setting ${ENV_KEY} = ${ENV_VALUE:0:8}... (truncated) across ${#SITES[@]} projects ==="
echo ""

for SITE in "${SITES[@]}"; do
  echo "--- ${SITE} ---"

  # Resolve project ID
  PROJECT_RESP=$(curl -s -H "$AUTH" "${API}/v9/projects?teamId=${TEAM_ID}&search=${SITE}")
  PROJECT_ID=$(echo "$PROJECT_RESP" | python3 -c "
import json,sys
d = json.load(sys.stdin)
ps = [p for p in d.get('projects', []) if p['name'] == '$SITE']
print(ps[0]['id'] if ps else '')
")

  if [ -z "$PROJECT_ID" ]; then
    echo "  SKIP: project '${SITE}' not found in Vercel"
    continue
  fi

  # Check if env var already exists
  EXISTING_ENV=$(curl -s -H "$AUTH" "${API}/v9/projects/${PROJECT_ID}/env?teamId=${TEAM_ID}")
  EXISTING_ID=$(echo "$EXISTING_ENV" | python3 -c "
import json,sys
d = json.load(sys.stdin)
matches = [e for e in d.get('envs', []) if e.get('key') == '$ENV_KEY']
print(matches[0]['id'] if matches else '')
")

  PAYLOAD=$(python3 -c "
import json
print(json.dumps({
  'key': '$ENV_KEY',
  'value': '$ENV_VALUE',
  'target': ['production', 'preview'],
  'type': 'encrypted'
}))
")

  if [ -n "$EXISTING_ID" ]; then
    # Update existing
    UPDATE_PAYLOAD=$(python3 -c "
import json
print(json.dumps({
  'value': '$ENV_VALUE',
  'target': ['production', 'preview'],
  'type': 'encrypted'
}))
")
    RESP=$(curl -s -X PATCH \
      -H "$AUTH" \
      -H "Content-Type: application/json" \
      "${API}/v9/projects/${PROJECT_ID}/env/${EXISTING_ID}?teamId=${TEAM_ID}" \
      -d "$UPDATE_PAYLOAD")
    ERR=$(echo "$RESP" | python3 -c "
import json, sys
try:
    d = json.load(sys.stdin)
    print(d.get('error', {}).get('message', '') if isinstance(d.get('error'), dict) else '')
except Exception as e:
    print(f'parse-error: {e}')
")
    if [ -z "$ERR" ]; then
      echo "  UPDATED existing ${ENV_KEY}"
    else
      echo "  FAIL update: ${ERR}"
    fi
  else
    # Create new
    RESP=$(curl -s -X POST \
      -H "$AUTH" \
      -H "Content-Type: application/json" \
      "${API}/v10/projects/${PROJECT_ID}/env?teamId=${TEAM_ID}" \
      -d "$PAYLOAD")
    ERR=$(echo "$RESP" | python3 -c "
import json, sys
try:
    d = json.load(sys.stdin)
    print(d.get('error', {}).get('message', '') if isinstance(d.get('error'), dict) else '')
except Exception as e:
    print(f'parse-error: {e}')
")
    if [ -z "$ERR" ]; then
      echo "  CREATED ${ENV_KEY}"
    else
      echo "  FAIL create: ${ERR}"
    fi
  fi
done

echo ""
echo "=== Done ==="
echo ""
echo "Vercel auto-redeploys when env vars change. Within 60-90 seconds,"
echo "the new value is live on Production + Preview deploys."
echo ""
echo "Verify by visiting any /go/<vendor>/<sku> link on a production site"
echo "and checking the redirect target carries the new tag."
