#!/bin/bash
# Portfolio Export Script
# Creates a ZIP package of all files needed to work on another Mac.
# Run this from the project root: bash export-package.sh

set -e

EXPORT_NAME="portfolio-export-$(date +%Y%m%d)"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

echo ""
echo "========================================"
echo "  Portfolio Export Package Creator"
echo "========================================"
echo ""
echo "This will create: ${EXPORT_NAME}.zip"
echo "Location: $SCRIPT_DIR/../${EXPORT_NAME}.zip"
echo ""

# Check we're in the right place
if [ ! -f "$SCRIPT_DIR/package.json" ]; then
  echo "ERROR: Run this script from the portfolio project folder."
  echo "       (The folder that contains package.json)"
  exit 1
fi

# Build list of files to exclude
EXCLUDES=(
  "node_modules"
  "dist"
  ".git"
  "*.DS_Store"
  "export-package.sh"
  "__MACOSX"
)

EXCLUDE_ARGS=""
for item in "${EXCLUDES[@]}"; do
  EXCLUDE_ARGS="$EXCLUDE_ARGS --exclude=*/$item --exclude=*/$item/*"
done

# Create the zip one level up from the project
OUTPUT_ZIP="$SCRIPT_DIR/../${EXPORT_NAME}.zip"

echo "Collecting files..."

# Change to parent directory so the zip contains the folder itself
cd "$SCRIPT_DIR/.."
PROJECT_FOLDER=$(basename "$SCRIPT_DIR")

zip -r "$OUTPUT_ZIP" "$PROJECT_FOLDER" \
  --exclude "*/${PROJECT_FOLDER}/node_modules/*" \
  --exclude "*/${PROJECT_FOLDER}/dist/*" \
  --exclude "*/${PROJECT_FOLDER}/.git/*" \
  --exclude "*/${PROJECT_FOLDER}/.DS_Store" \
  --exclude "*/${PROJECT_FOLDER}/**/.DS_Store" \
  --exclude "*/${PROJECT_FOLDER}/export-package.sh" \
  -q

echo ""
echo "Done! Package created:"
echo ""
echo "  $(realpath "$OUTPUT_ZIP")"
echo ""

# Show size
SIZE=$(du -sh "$OUTPUT_ZIP" | cut -f1)
echo "  File size: $SIZE"
echo ""
echo "========================================"
echo "  What to do with this file"
echo "========================================"
echo ""
echo "1. Copy ${EXPORT_NAME}.zip to the other Mac (USB drive, AirDrop,"
echo "   email, or cloud storage)."
echo ""
echo "2. On the other Mac, double-click the ZIP to extract it."
echo ""
echo "3. Open Terminal on the other Mac and run:"
echo "     cd ~/Desktop/${EXPORT_NAME}"
echo "     npm install"
echo ""
echo "4. Then follow the steps in PORTFOLIO-MANUAL.md"
echo ""
echo "NOTE: node_modules (~100MB) and build output are excluded from the"
echo "      export to keep the file small. 'npm install' recreates them."
echo ""
