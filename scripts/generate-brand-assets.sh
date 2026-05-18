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

python3 <<PY
from PIL import Image, ImageDraw, ImageOps
from pathlib import Path
import statistics

brand = Path("${BRAND}")
favicon = brand / "favicon"
public = Path("${PUBLIC}")
root = Path("${ROOT_DIR}")
source = Image.open("${SOURCE}").convert("RGB")
w, h = source.size

pixels = [source.getpixel((5, 5)), source.getpixel((w - 6, 5)), source.getpixel((5, h - 6)), source.getpixel((w - 6, h - 6))]
bg = tuple(round(statistics.mean(c)) for c in zip(*pixels))

flat = Image.new("RGB", source.size, bg)
flat.paste(source, (0, 0))
flat.save(brand / "logo-primary-matched.jpg", quality=95)
flat.save(brand / "logo-primary-matched.png")
flat.save(brand / "logo-primary.jpg", quality=95)
flat.save(brand / "logo-primary.png")

for size, name in [(256, "logo-web-256.png"), (512, "logo-web-512.png"), (512, "logo-icon-512.png")]:
    flat.resize((size, size), Image.Resampling.LANCZOS).save(brand / name)

ImageOps.grayscale(flat).convert("RGBA").save(brand / "logo-monochrome.png")

icon_src = flat.resize((512, 512), Image.Resampling.LANCZOS)
for size in [1024, 512, 256, 192, 180, 32, 16]:
    icon_src.resize((size, size), Image.Resampling.LANCZOS).save(favicon / f"favicon-{size}x{size}.png")

for size in [32, 180, 512]:
    im = icon_src.resize((size, size), Image.Resampling.LANCZOS).convert("RGBA")
    mask = Image.new("L", (size, size), 0)
    draw = ImageDraw.Draw(mask)
    draw.ellipse((0, 0, size - 1, size - 1), fill=255)
    im.putalpha(mask)
    im.save(favicon / f"favicon-round-{size}x{size}.png")

icon_src.resize((180, 180), Image.Resampling.LANCZOS).save(brand / "apple-touch-icon.png")

social = Image.new("RGB", (1200, 630), bg)
logo_s = flat.resize((420, 420), Image.Resampling.LANCZOS)
social.paste(logo_s, ((1200 - 420) // 2, (630 - 420) // 2))
social.save(brand / "og-image.png", quality=90)

(brand / "logo-web-256.png").copy(public / "logo.png")
(brand / "og-image.png").copy(public / "og-image.png")
(favicon / "favicon-round-32x32.png").copy(public / "favicon-32x32.png")
(favicon / "favicon-16x16.png").copy(public / "favicon-16x16.png")
(brand / "apple-touch-icon.png").copy(public / "apple-touch-icon.png")
(favicon / "favicon-round-180x180.png").copy(root / "src/app/icon.png")

print(f"Bakgrundsfärg (logga + sajt): #{bg[0]:02x}{bg[1]:02x}{bg[2]:02x}")
PY

echo "Varumärkesfiler genererade i $BRAND"
