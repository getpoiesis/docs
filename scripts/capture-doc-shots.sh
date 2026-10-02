#!/usr/bin/env bash
# Recapture the documentation's screenshots of the app — static/img/app/
# NAME-light.png and NAME-dark.png, 1600×1000 — in light and dark.
#
#   scripts/capture-doc-shots.sh                         # every screenshot
#   scripts/capture-doc-shots.sh templates-page find-bar # only these
#   scripts/capture-doc-shots.sh --list                  # the names it knows
#   APP=/path/to/poiesis scripts/capture-doc-shots.sh    # app repo elsewhere (default ../poiesis)
#   OUT=/some/folder scripts/capture-doc-shots.sh        # write somewhere else
#
# It runs the app's dev build against a screenshot vault and a settings folder
# of its own, made fresh in a temporary folder and deleted afterwards: your
# vaults, your settings and any φ you have open are left alone. The vault is
# the app's screenshot vault plus what only the docs show (seed-docs-vault.mjs);
# the steps for each screenshot are in doc-shots.mjs.
#
# Needs: macOS (for `sips`); Node; the app's dev setup (`npm install` in the
# app repo); and no other `npm run dev` of the app running (it needs the dev
# port). The page is captured from inside the app, so no Screen Recording
# permission is needed. On a Retina display the capture is 2560×1600 and is
# scaled down; on a 1× display it is 1280×800 and is scaled up, and looks soft.
set -euo pipefail
here="$(cd "$(dirname "$0")/.." && pwd)"

if [ "${1:-}" = "--list" ]; then
  node "$here/scripts/doc-shots.mjs" --list
  exit 0
fi

app="$(cd "${APP:-$here/../poiesis}" && pwd)"
out="${OUT:-$here/static/img/app}"
mkdir -p "$out"

if lsof -nP -iTCP:5173 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "The app's dev server is already running (port 5173). Quit it first, then rerun." >&2
  exit 1
fi

work="$(mktemp -d -t phi-doc-shots)"
log="$work/dev.log"
raw="$work/raw"
runner=""

# Stop only what this script started: the dev run and its children, by
# their process ids, and wait until they've exited (the app writes to its
# settings folder as it quits).
tree_of() {
  local pid=$1 child
  echo "$pid"
  for child in $(pgrep -P "$pid" 2>/dev/null); do tree_of "$child"; done
}
cleanup() {
  if [ -n "$runner" ]; then
    local pids
    pids="$(tree_of "$runner")"
    kill $pids 2>/dev/null || true
    wait "$runner" 2>/dev/null || true
    for _ in $(seq 1 50); do
      kill -0 $pids 2>/dev/null || break
      sleep 0.2
    done
  fi
  rm -rf "$work" 2>/dev/null || { sleep 1; rm -rf "$work"; }
}
trap cleanup EXIT

# The steps first: an unknown name stops here, before anything is started.
mkdir -p "$raw"
steps="$work/steps.json"
node "$here/scripts/doc-shots.mjs" "$raw" "$@" >"$steps"

# The vault and a settings folder that opens it, with the alpha's feedback
# line turned off. One fixed afternoon late in a month, for the vault and the
# app's clock alike, so the month is full and every capture reads the same.
shot_now="2026-10-22T15:30:00"
POIESIS_SHOT_TODAY="$shot_now" node "$here/scripts/seed-docs-vault.mjs" "$app" "$work/vault" >/dev/null
mkdir -p "$work/settings"
cat >"$work/settings/poiesis-prefs.json" <<EOF
{
  "app": { "theme": "light", "feedback": { "never": true } },
  "vaults": [{ "id": "shotvault", "name": "Manuscripts", "path": "$work/vault", "lastOpenedAt": null, "kind": "full" }],
  "activeVaultId": "shotvault"
}
EOF

echo "Capturing into ${out}…"
(cd "$app" && POIESIS_USER_DATA="$work/settings" POIESIS_DEV_NOW="$shot_now" POIESIS_DEV_SCRIPT="$steps" npm run dev >"$log" 2>&1) &
runner=$!

# Each capture lands in the temporary folder at the window's own size; it is
# scaled to the docs' 1600×1000 as it arrives.
place() {
  local f name
  for f in "$raw"/*.png; do
    [ -e "$f" ] || continue
    name="${f##*/}"
    sips -z 1000 1600 "$f" --out "$out/$name" >/dev/null
    rm -f "$f"
    echo "  $name"
  done
}
done_ok=""
for _ in $(seq 1 6000); do
  if grep -q '\[devScript\] done' "$log" 2>/dev/null; then done_ok=1; break; fi
  if ! kill -0 "$runner" 2>/dev/null; then break; fi
  sleep 0.5
done
place

if [ -n "${KEEP_LOG:-}" ]; then cp "$log" "$KEEP_LOG"; fi
if [ -z "$done_ok" ]; then
  echo "The capture run didn't finish. Last lines of the app's log:" >&2
  tail -20 "$log" >&2
  exit 1
fi
if grep -q '\[devScript\] eval → "FAILED' "$log"; then
  echo "Some steps did not find what they were looking for:" >&2
  grep '\[devScript\] eval → "FAILED' "$log" >&2
  exit 1
fi
echo "Done."
