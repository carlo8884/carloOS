#!/bin/bash
# Vercel project bootstrap for the 5 new CarloOS sites.
# Usage:
#   export VERCEL_TOKEN="<your token from https://vercel.com/account/tokens>"
#   bash scripts/vercel-bootstrap.sh
#
# Creates Vercel projects for horses-com, petfood-com, petfoods-com, ferret-com, ferrets-com.
# Copies env vars from the existing dog-com project. Triggers initial deploys.
#
# Idempotent — re-runnable. Skips projects that already exist.
# Run from repo root.

set -euo pipefail

if [ -z "${VERCEL_TOKEN:-}" ]; then
  echo "ERROR: VERCEL_TOKEN env var not set."
  echo "Get a token at https://vercel.com/account/tokens, then:"
  echo "  export VERCEL_TOKEN=<token>"
  echo "  bash scripts/vercel-bootstrap.sh"
  exit 1
fi

TEAM_ID="team_R4jRKf08nw1F1ktvhgqjmvcL"
GITHUB_REPO="carlo8884/carloos"
API="https://api.vercel.com"
AUTH="Authorization: Bearer ${VERCEL_TOKEN}"

# Sites to create. Mirror the existing dog-com pattern.
# Plain indexed array so this works on macOS's default bash 3.2 (no associative arrays).
# Each ROOT_DIR is derived as apps/<site>.
SITES=(
  "horses-com"
  "petfood-com"
  "petfoods-com"
  "ferret-com"
  "ferrets-com"
)

echo "=== Step 1: Verify token + list existing projects ==="
EXISTING=$(curl -s -H "$AUTH" "$API/v9/projects?teamId=$TEAM_ID&limit=50" \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print('\n'.join(p['name'] for p in d.get('projects', [])))")
echo "Existing projects:"
echo "$EXISTING" | sed 's/^/  - /'
echo ""

# Find the existing dog-com project to copy env vars from.
DOG_COM_ID=$(curl -s -H "$AUTH" "$API/v9/projects?teamId=$TEAM_ID&search=dog-com" \
  | python3 -c "import json,sys; d=json.load(sys.stdin); ps=[p for p in d.get('projects',[]) if p['name']=='dog-com']; print(ps[0]['id'] if ps else '')")

if [ -z "$DOG_COM_ID" ]; then
  echo "ERROR: dog-com project not found. Cannot copy env vars."
  exit 1
fi

echo "=== Step 2: Read env vars from dog-com (project $DOG_COM_ID) ==="
DOG_ENV_JSON=$(curl -s -H "$AUTH" "$API/v9/projects/$DOG_COM_ID/env?teamId=$TEAM_ID&decrypt=true")
echo "$DOG_ENV_JSON" | python3 -c "
import json, sys
d = json.load(sys.stdin)
envs = d.get('envs', [])
print(f'Found {len(envs)} env vars in dog-com:')
for e in envs:
    val_preview = e['value'][:6] + '...' if e.get('value') else '<no value>'
    print(f\"  - {e['key']} ({','.join(e['target'])}) = {val_preview}\")
"
echo ""

echo "=== Step 3: Create projects + copy env vars ==="
for SITE_ID in "${SITES[@]}"; do
  ROOT_DIR="apps/${SITE_ID}"

  if echo "$EXISTING" | grep -qx "$SITE_ID"; then
    echo "SKIP: $SITE_ID already exists"
    continue
  fi

  echo ""
  echo "--- Creating $SITE_ID (rootDirectory: $ROOT_DIR) ---"

  CREATE_PAYLOAD=$(python3 -c "
import json
print(json.dumps({
  'name': '$SITE_ID',
  'framework': 'nextjs',
  'rootDirectory': '$ROOT_DIR',
  'gitRepository': {
    'type': 'github',
    'repo': '$GITHUB_REPO'
  }
}))
")

  CREATE_RESP=$(curl -s -X POST \
    -H "$AUTH" \
    -H "Content-Type: application/json" \
    "$API/v10/projects?teamId=$TEAM_ID" \
    -d "$CREATE_PAYLOAD")

  NEW_PROJECT_ID=$(echo "$CREATE_RESP" | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('id', ''))")

  if [ -z "$NEW_PROJECT_ID" ]; then
    echo "  FAIL: project creation. Response:"
    echo "$CREATE_RESP" | python3 -m json.tool | head -20
    continue
  fi

  echo "  Created: $NEW_PROJECT_ID"

  # Copy env vars from dog-com, overriding NEXT_PUBLIC_SITE_ID per site.
  echo "  Copying env vars..."
  echo "$DOG_ENV_JSON" | python3 -c "
import json, sys, subprocess
data = json.load(sys.stdin)
envs = data.get('envs', [])
new_proj_id = '$NEW_PROJECT_ID'
site_id = '$SITE_ID'
auth = 'Authorization: Bearer ' + '$VERCEL_TOKEN'

for e in envs:
    if not e.get('value'):
        continue
    key = e['key']
    value = e['value']
    target = e.get('target', ['production', 'preview', 'development'])
    type_ = e.get('type', 'encrypted')

    # Override site ID per project
    if key == 'NEXT_PUBLIC_SITE_ID':
        value = site_id

    payload = json.dumps({
        'key': key,
        'value': value,
        'target': target,
        'type': type_,
    })

    result = subprocess.run([
        'curl', '-s', '-X', 'POST',
        '-H', auth,
        '-H', 'Content-Type: application/json',
        f'https://api.vercel.com/v10/projects/{new_proj_id}/env?teamId=$TEAM_ID',
        '-d', payload,
    ], capture_output=True, text=True)
    out = result.stdout
    try:
        r = json.loads(out)
        if r.get('error'):
            print(f'    {key}: FAIL - {r[\"error\"].get(\"message\", \"unknown\")}')
        else:
            print(f'    {key}: OK')
    except Exception:
        print(f'    {key}: parse error - {out[:80]}')
"

  echo "  Triggering initial deploy via GitHub integration..."
  # GitHub integration auto-deploys when the project is linked. Just give it a moment.
  sleep 2

done

echo ""
echo "=== Step 4: Confirm all 5 projects exist ==="
FINAL=$(curl -s -H "$AUTH" "$API/v9/projects?teamId=$TEAM_ID&limit=50" \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print('\n'.join(p['name'] for p in d.get('projects', [])))")
echo "$FINAL" | sed 's/^/  - /'

echo ""
echo "=== Done ==="
echo "Next steps:"
echo "  1. Check Vercel dashboard at https://vercel.com/$TEAM_ID/dashboard"
echo "  2. Each new project should be deploying its first build now."
echo "  3. Preview URLs will follow pattern <project>-git-main-<team-slug>.vercel.app"
echo "  4. Rotate the token used here at https://vercel.com/account/tokens"
