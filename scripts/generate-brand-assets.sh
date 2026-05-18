#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SOURCE="${1:-$ROOT_DIR/brand/source/logo-original.jpeg}"
BRAND="$ROOT_DIR/brand"
FAVICON="$BRAND/favicon"
PUBLIC="$ROOT_DIR/public"

if [[ ! -f "$SOURCE" ]]; then
  echo "Källfil saknas: $SOURCE"
  exit 1
fi

mkdir -p "$BRAND/source" "$FAVICON" "$PUBLIC"

cp "$SOURCE" "$BRAND/source/logo-original.jpeg"
cp "$SOURCE" "$BRAND/logo-primary.jpg"
sips -s format png "$SOURCE" --out "$BRAND/logo-primary.png" >/dev/null

for size in 1024 512 256 192 180 32 16; do
  sips -z "$size" "$size" "$BRAND/logo-primary.png" --out "$FAVICON/favicon-${size}x${size}.png" >/dev/null
done

cp "$FAVICON/favicon-512x512.png" "$BRAND/logo-icon-512.png"
cp "$FAVICON/favicon-256x256.png" "$BRAND/logo-web-256.png"
cp "$FAVICON/favicon-512x512.png" "$BRAND/logo-web-512.png"
cp "$FAVICON/favicon-180x180.png" "$BRAND/apple-touch-icon.png"

cp "$BRAND/logo-web-256.png" "$PUBLIC/logo.png"
cp "$FAVICON/favicon-32x32.png" "$PUBLIC/favicon-32x32.png"
cp "$FAVICON/favicon-16x16.png" "$PUBLIC/favicon-16x16.png"
cp "$BRAND/apple-touch-icon.png" "$PUBLIC/apple-touch-icon.png"

python3 <<PY
from PIL import Image, ImageOps
from pathlib import Path

brand = Path("${BRAND}")
img = Image.open(brand / "logo-primary.png").convert("RGBA")
ImageOps.grayscale(img).convert("RGBA").save(brand / "logo-monochrome.png")
social = Image.new("RGB", (1200, 630), (250, 247, 244))
logo_s = img.resize((420, 420), Image.Resampling.LANCZOS)
social.paste(logo_s, ((1200 - 420) // 2, (630 - 420) // 2), logo_s)
social.save(brand / "og-image.png", quality=90)
PY

cp "$BRAND/og-image.png" "$PUBLIC/og-image.png"
cp "$FAVICON/favicon-32x32.png" "$ROOT_DIR/src/app/icon.png"

echo "Varumärkesfiler genererade i $BRAND"
